import Parser from 'rss-parser'

export async function fetchAndParseFeeds(feedUrls) {
  const parser = new Parser()
  const results = []

  for (const url of feedUrls) {
    try {
      const feed = await parser.parseURL(url)
      results.push(...feed.items.map(item => ({
        title: item.title,
        content: item.content,
        link: item.link,
        pubDate: item.pubDate,
        source: feed.title
      })))
    } catch (error) {
      console.error(`Error parsing feed ${url}:`, error)
    }
  }

  return results
} 