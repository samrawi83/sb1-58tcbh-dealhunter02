export default function FreebiePage({ params }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-4xl mx-auto p-4 md:p-8">
        <article className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6">
            [Freebie Title]
          </h1>
          
          <div className="aspect-video relative mb-6">
            <img 
              src="/placeholder-image.jpg"
              alt="Freebie offer"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>

          <div className="prose max-w-none">
            <h2>About This Offer</h2>
            <p>[Detailed description of the freebie]</p>

            <h2>How to Claim</h2>
            <ol>
              <li>Step 1: [Instructions]</li>
              <li>Step 2: [Instructions]</li>
              <li>Step 3: [Instructions]</li>
            </ol>

            <h2>Terms & Conditions</h2>
            <p>[Terms and conditions text]</p>
          </div>

          <div className="mt-8">
            <a 
              href="#" 
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 text-center"
              target="_blank"
              rel="noopener noreferrer"
            >
              Claim Your Freebie
            </a>
          </div>
        </article>
      </main>
    </div>
  )
} 