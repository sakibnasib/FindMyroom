import React from 'react';

const features = [
  {
    id: 1,
    title: "Verified Listings",
    description: "Every roommate profile and listing is manually reviewed to ensure safety and authenticity.",
    icon: "🛡️",
  },
  {
    id: 2,
    title: "Smart Matching",
    description: "Our AI-powered system recommends roommates based on lifestyle and preferences.",
    icon: "🤖",
  },
  {
    id: 3,
    title: "Secure Messaging",
    description: "Chat safely within the platform until you're ready to connect in person.",
    icon: "💬",
  },
  {
    id: 4,
    title: "Easy to Use",
    description: "Clean UI/UX that works seamlessly on desktop and mobile.",
    icon: "📱",
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20 mt-7 rounded-3xl">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-[2.4rem] font-bold text-gray-800 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 mb-12 text-lg">
          Discover what makes our roommate finder platform better than the rest.
        </p>

        <div  className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map(({ id, title, description, icon }) => (
            <div
              key={id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <div  className="text-4xl mb-4">{icon}</div>
              <h4 className="font-semibold text-xl text-gray-800 mb-2">{title}</h4>
              <p className="text-gray-600 text-sm">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
