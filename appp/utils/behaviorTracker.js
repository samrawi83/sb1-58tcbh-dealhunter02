export class BehaviorTracker {
  constructor() {
    this.sessions = new Map()
    this.heatmaps = new Map()
    this.funnels = new Map()
  }

  async trackSession(userId) {
    const session = new Session(userId)
    this.sessions.set(session.id, session)

    return {
      pageViews: await this.trackPageViews(session),
      interactions: await this.trackInteractions(session),
      timing: await this.trackTiming(session)
    }
  }

  async generateHeatmap(pageUrl) {
    const interactions = await this.getPageInteractions(pageUrl)
    const heatmap = new Heatmap(interactions)
    
    this.heatmaps.set(pageUrl, heatmap)
    return heatmap.render()
  }

  async trackFunnel(funnelConfig) {
    const funnel = new Funnel(funnelConfig)
    this.funnels.set(funnel.id, funnel)

    funnel.on('step', async (user, step) => {
      await this.analyzeFunnelStep(user, step)
    })

    return funnel
  }
} 