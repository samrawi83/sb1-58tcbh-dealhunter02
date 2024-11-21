export const emailTemplates = {
  welcomeEmail: (userName) => ({
    subject: 'Welcome to Our Deals Community!',
    html: `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h1>Welcome, ${userName}!</h1>
        <p>Thank you for joining our deals community. Here's what you can expect:</p>
        <ul>
          <li>Daily deal alerts</li>
          <li>Exclusive freebies</li>
          <li>Special member-only offers</li>
        </ul>
        <a href="${process.env.NEXT_PUBLIC_SITE_URL}/deals" style="background: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
          Start Exploring Deals
        </a>
      </div>
    `
  }),

  dealAlert: (deal) => ({
    subject: `New Deal Alert: ${deal.title}`,
    html: `
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2>${deal.title}</h2>
        <p>${deal.description}</p>
        <a href="${process.env.NEXT_PUBLIC_SITE_URL}/deals/${deal.slug}" style="background: #2563eb; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
          View Deal
        </a>
      </div>
    `
  })
} 