import { WebSocket } from 'ws'
import { EventEmitter } from 'events'

export class RealTimeMonitor extends EventEmitter {
  constructor() {
    super()
    this.metrics = new Map()
    this.alerts = new Set()
    this.thresholds = this.getDefaultThresholds()
  }

  async initialize() {
    this.websocket = new WebSocket(process.env.WEBSOCKET_URL)
    this.setupWebSocket()
    this.startMetricsCollection()
  }

  setupWebSocket() {
    this.websocket.on('message', async (data) => {
      const metric = JSON.parse(data)
      await this.processMetric(metric)
    })
  }

  async processMetric(metric) {
    this.metrics.set(metric.id, {
      ...metric,
      timestamp: Date.now()
    })

    if (this.isAnomalous(metric)) {
      await this.handleAnomaly(metric)
    }

    this.emit('metricUpdate', metric)
  }

  async handleAnomaly(metric) {
    const alert = {
      id: `alert-${Date.now()}`,
      metric: metric.name,
      value: metric.value,
      threshold: this.thresholds[metric.name],
      timestamp: Date.now()
    }

    this.alerts.add(alert)
    await this.notifyStakeholders(alert)
  }
} 