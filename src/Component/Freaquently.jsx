import React from "react";

const Freaquently = () => {
  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl">Frequently Asked Questions</h2>
		<div className="divide-y dark:divide-gray-300">
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">Can FindMyRoom help me find roommates?</h3>
				<p className="md:pl-0 md:col-span-7">Of course, that's exactly what we’re here for! FindMyRoom is a roommate finder platform designed to help you connect with like-minded roommates. Whether you’re looking for rooms for rent, need a roommate to fill your empty room, or want to team up with someone to find a new place, we’ve got you covered. We even offer listings for entire apartments for rent and coliving spaces in select cities.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">Does it cost anything to sign up or use FindMyRoom?</h3>
				<p className="md:pl-0 md:col-span-7">FindMyRoom is a completely free roommate finder. You can list a room for rent, create a roommate wanted ad, express interest, view and reply to messages, and verify your profile—all at no cost (unlike some other roommate finders). Optional upgrades are available to boost your visibility and accelerate your search, but they’re not required to access essential features.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">Can I find a roommate to team up with me to find a place?</h3>
				<p className="md:pl-0 md:col-span-7">Yes! Many of the members on FindMyRoom are looking for rooms for rent and / or another person to partner with to get a place. In fact, most of the matches occur between two individuals for that purpose exactly.</p>
			</div>
			<div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
				<h3 className="font-semibold md:col-span-5">What are some tips for finding the perfect roommate?</h3>
				<p className="md:pl-0 md:col-span-7">When searching for the ideal roommate, communication is key. Make sure to discuss expectations for cleanliness, guests, noise levels, and finances upfront. Using a roommate agreement can help prevent misunderstandings and ensure a smooth living situation.</p>
			</div>
		</div>
	</div>
</section>
    </div>
  );
};

export default Freaquently;
