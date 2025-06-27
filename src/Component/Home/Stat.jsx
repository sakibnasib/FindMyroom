import React from "react";
import { Users, Home, Star, MapPin } from "lucide-react";
import CountUp from "react-countup";

const Stat = () => {
  const stats = [
    {
      id: 1,
      icon: <Users className="w-8 h-8 text-indigo-600" />,
      label: "Total Users",
      value: 8200,
      suffix: "+",
    },
    {
      id: 2,
      icon: <Home className="w-8 h-8 text-green-600" />,
      label: "Rooms Listed",
      value: 1400,
      suffix: "+",
    },
    {
      id: 3,
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      label: "Avg. Rating",
      value: 4.8,
      decimals: 1,
      suffix: "/5",
    },
    {
      id: 4,
      icon: <MapPin className="w-8 h-8 text-pink-500" />,
      label: "Cities Covered",
      value: 45,
      suffix: "+",
    },
  ];

  return (
    <section className="py-12 bg-gray-100 rounded-3xl mt-7  my-10">
      <h2 className="text-[2.4rem] font-bold text-center mb-10">Platform Statistics</h2>
      <div  className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center p-2">
        {stats.map(({ id, icon, label, value, suffix, decimals }) => (
          <div
            key={id}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-md transition-all"
          >
            <div className="mb-3 flex justify-center">{icon}</div>
            <p className="text-2xl font-bold text-gray-800">
              <CountUp end={value} duration={2} decimals={decimals || 0} />
              {suffix}
            </p>
            <p className="text-sm text-gray-500">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stat;
