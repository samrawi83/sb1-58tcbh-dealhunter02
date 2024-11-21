'use client'

export default function SocialShare({ url, title }) {
  const shareData = {
    url: url,
    title: title,
  }

  const shareLinks = [
    {
      name: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      icon: 'facebook-icon'
    },
    {
      name: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      icon: 'twitter-icon'
    },
    {
      name: 'WhatsApp',
      url: `https://wa.me/?text=${encodeURIComponent(`${title} ${url}`)}`,
      icon: 'whatsapp-icon'
    }
  ]

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData)
      } catch (err) {
        console.error('Error sharing:', err)
      }
    }
  }

  return (
    <div className="flex items-center gap-4">
      <span className="text-gray-600">Share:</span>
      {shareLinks.map((platform) => (
        <a
          key={platform.name}
          href={platform.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 hover:text-blue-600"
        >
          {platform.name}
        </a>
      ))}
      {navigator.share && (
        <button
          onClick={handleShare}
          className="text-gray-600 hover:text-blue-600"
        >
          Native Share
        </button>
      )}
    </div>
  )
} 