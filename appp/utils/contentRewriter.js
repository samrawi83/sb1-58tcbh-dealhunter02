import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function rewriteContent(originalContent, style = 'friendly') {
  const prompts = {
    friendly: "Rewrite this content in a friendly, conversational tone while maintaining SEO value:",
    professional: "Rewrite this content in a professional tone with SEO optimization:",
    casual: "Rewrite this content in a casual, engaging style:"
  }

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "You are a content optimization expert. Rewrite the following content to be unique, engaging, and SEO-friendly while maintaining the key information."
        },
        {
          role: "user",
          content: `${prompts[style]}\n\n${originalContent}`
        }
      ],
      temperature: 0.7,
    })

    return completion.choices[0].message.content
  } catch (error) {
    console.error('Error rewriting content:', error)
    return originalContent
  }
} 