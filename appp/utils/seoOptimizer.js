import metascraper from 'metascraper'
import metascraperDescription from 'metascraper-description'
import metascraperImage from 'metascraper-image'
import metascraperTitle from 'metascraper-title'

const scraper = metascraper([
  metascraperDescription(),
  metascraperImage(),
  metascraperTitle()
])

export class SEOOptimizer {
  async optimizeContent(content) {
    return {
      ...content,
      meta: await this.generateMetadata(content),
      structure: await this.optimizeStructure(content),
      keywords: await this.optimizeKeywords(content),
      images: await this.optimizeImages(content)
    }
  }

  async generateMetadata(content) {
    const metadata = await scraper({ html: content.html, url: content.url })
    
    return {
      title: this.optimizeTitle(metadata.title),
      description: this.optimizeDescription(metadata.description),
      image: metadata.image,
      schema: this.generateSchema(content)
    }
  }

  optimizeTitle(title) {
    // Optimize title for SEO
    return title.length > 60 ? title.substring(0, 57) + '...' : title
  }

  optimizeDescription(description) {
    // Optimize meta description
    return description.length > 160 ? description.substring(0, 157) + '...' : description
  }

  generateSchema(content) {
    return {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: content.title,
      description: content.description,
      image: content.image,
      datePublished: content.publishDate,
      author: {
        '@type': 'Organization',
        name: 'DealHunter'
      }
    }
  }
}