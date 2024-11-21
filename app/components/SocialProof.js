export default function SocialProof() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "/avatars/sarah.jpg",
      text: "I've saved over $2,000 using DealHunter this year alone!",
      savings: "$2,000",
      location: "New York, NY"
    },
    // Add more testimonials
  ];

  const stats = [
    { value: "50K+", label: "Active Members" },
    { value: "$1.2M", label: "Total Savings" },
    { value: "4.9/5", label: "User Rating" }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Trusted by Over 50,000 Smart Shoppers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-blue-600">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{testimonial.text}</p>
              <div className="text-sm text-gray-600">
                Saved: <span className="text-green-600 font-semibold">{testimonial.savings}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}