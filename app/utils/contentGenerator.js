import { OpenAI } from 'openai';
import { rewriteContent } from './contentRewriter';
import { optimizeSEO } from './seoOptimizer';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function generateOptimizedContent(topic, category) {
  // Generate initial content using GPT-4
  const completion = await openai.chat.completions.create({
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: "You are an expert content writer specializing in deal hunting and savings. Create engaging, informative content that ranks well in search engines."
      },
      {
        role: "user",
        content: `Write a comprehensive article about ${topic} for the ${category} category. Include practical tips, expert insights, and relevant examples.`
      }
    ],
    temperature: 0.7,
  });

  const initialContent = completion.choices[0].message.content;

  // Rewrite for uniqueness and engagement
  const rewritten = await rewriteContent(initialContent);

  // Optimize for SEO
  const optimized = await optimizeSEO(rewritten);

  return optimized;
}

export async function generateBulkContent(topics) {
  const contents = [];
  
  for (const topic of topics) {
    const content = await generateOptimizedContent(topic.title, topic.category);
    contents.push({
      ...topic,
      content,
      timestamp: new Date().toISOString()
    });
  }

  return contents;
}