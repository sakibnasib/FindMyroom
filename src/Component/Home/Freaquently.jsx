import React from "react";

const faqs = [
  {
    question: "Can FindMyRoom help me find roommates?",
    answer:
      "Of course! FindMyRoom is designed to help you connect with like-minded roommates, find rooms for rent, or partner with someone to find a new place.",
  },
  {
    question: "Does it cost anything to sign up or use FindMyRoom?",
    answer:
      "FindMyRoom is completely free! Optional upgrades are available to boost your profile, but essential features are always free.",
  },
  {
    question: "Can I find a roommate to team up with me to find a place?",
    answer:
      "Yes! Many users are searching for partners to share a new space. Most matches happen between people teaming up.",
  },
  {
    question: "What are some tips for finding the perfect roommate?",
    answer:
      "Be clear about lifestyle preferences, finances, and house rules. Consider creating a written roommate agreement to avoid issues.",
  },
];

const Frequently = () => {
  return (
    <section className="bg-gray-50 text-gray-800 py-16 px-4 md:px-8 lg:px-20 max-w-6xl mx-auto rounded-3xl mt-7">
      <h2 className="text-[2.4rem] font-bold text-center mb-12">
        Frequently Asked Questions
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <details
            key={index}
            className=" bg-white px-6 py-4 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <summary className="cursor-pointer font-semibold text-lg marker:text-blue-500">
              {faq.question}
            </summary>
            <p className="mt-3 text-gray-700 text-sm leading-relaxed">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

export default Frequently;
