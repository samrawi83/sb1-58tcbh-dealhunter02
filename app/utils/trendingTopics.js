import { google } from 'googleapis'
import Twitter from 'twitter-api-v2'

export async function getTrendingTopics() {
  const topics = {
    googleTrends: await getGoogleTrends(),
    twitter: await getTwitterTrends(),
    reddit: await getRedditTrends()
  }

  return analyzeAndPrioritizeTopics(topics)
}

async function getGoogleTrends() {
  const googleTrends = require('google-trends-api')
  
  try {
    const results = await googleTrends.realTimeTrends({
      geo: 'US',
      category: 'all'
    })
    return JSON.parse(results)
  } catch (error) {
    console.error('Error fetching Google Trends:', error)
    return []
  }
}

async function analyzeAndPrioritizeTopics(topics) {
  // Combine and score topics based on:
  // - Search volume
  // - Social engagement
  // - Competition level
  // - Commercial intent
  
  const scoredTopics = topics.map(topic => ({
    ...topic,
    score: calculateTopicScore(topic)
  }))

  return scoredTopics.sort((a, b) => b.score - a.score)
} 