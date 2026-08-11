import React from "react";

  const FeatureCard = ({ icon, title, description }) => {
  const Icon = icon;
  
  return (
    <div className=" group flex flex-col items-center justify-center rounded-2xl border border-zinc-700 bg-[#111111] py-2 gap-1" >
      {/* Icon */}
      <div className="flex items-center justify-center rounded-full text-lime-400" >
        <Icon size={18} strokeWidth={2} />
      </div>

      {/* Title */}
      <h3 className="text-xs mt-1 font-semibold text-zinc-300">
        {title}
      </h3>

      {/* Description */}
      <p className=" text-center text-xs  text-zinc-500">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;