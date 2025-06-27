import { CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Create an Account",
    description: "Sign up with your email and start your roommate-finding journey.",
  },
  {
    id: 2,
    title: "Post or Browse Listings",
    description: "Either list your room or browse available roommates and spaces.",
  },
  {
    id: 3,
    title: "Connect Securely",
    description: "Use our platform to connect and communicate with verified users.",
  },
  {
    id: 4,
    title: "Move In with Confidence",
    description: "Find your perfect match and move in stress-free.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-gray-50 py-16 px-4 md:px-10 lg:px-20 mt-7 rounded-3xl" id="how-it-works">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-[2.4rem] font-bold text-gray-800 mb-4">
          How It Works
        </h2>
        <p className="text-gray-600 text-lg mb-12">
          Finding the right roommate has never been easier.
        </p>
        <div  className="grid md:grid-cols-2 gap-10">
          {steps.map(({ id, title, description }) => (
            <div
              key={id}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition"
            >
              <div className="flex items-center mb-4">
                <CheckCircle className="text-blue-600 mr-3" size={24} />
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
              </div>
              <p className="text-gray-600">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
