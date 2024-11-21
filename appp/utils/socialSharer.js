import { SocialPostAPI } from 'social-post-api'
import Bull from 'bull'

const socialQueue = new Bull('social-sharing')
const socialAPI = new SocialPostAPI(process.env.SOCIAL_API_KEY)

export class SocialSharer {
  constructor() {
    this.setupQueue()
  }

  setupQueue() {
    socialQueue.process(async (job) => {
      const { content, platforms } = job.data
      return await this.shareToMultiplePlatforms(content, platforms)
    })
  }

  async shareToMultiplePlatforms(content, platforms = ['twitter', 'facebook', 'linkedin']) {
    const results = []
    
    for (const platform of platforms) {
      try {
        const formattedContent = this.formatContentForPlatform(content, platform)
        const result = await socialAPI.post({
          post: formattedContent,
          platform: platform,
          scheduling: this.getOptimalPostingTime(platform)
        })
        results.push({ platform, success: true, result })
      } catch (error) {
        results.push({ platform, success: false, error: error.message })
      }
    }
    
    return results
  }

  formatContentForPlatform(content, platform) {
    switch (platform) {
      case 'twitter':
        return this.formatForTwitter(content)
      case 'facebook':
        return this.formatForFacebook(content)
      case 'linkedin':
        return this.formatForLinkedIn(content)
      default:
        return content
    }
  }

  getOptimalPostingTime(platform) {
    // Calculate optimal posting time based on platform analytics
    const now = new Date()
    return new Date(now.getTime() + 1800000) // 30 minutes from now
  }
}