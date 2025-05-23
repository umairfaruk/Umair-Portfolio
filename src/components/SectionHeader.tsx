import React from "react";

const SectionHeader = ({
  title,
  eyebrow,
  description,
}: {
  title: string;
  eyebrow: string;
  description: string;
}) => {
  return (
    <div>
      <div className="flex justify-center">
        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300  to-sky-400 text-transparent text-center bg-clip-text">
        {eyebrow}
        </p>
      </div>
      <h2 className="font-serif text-3xl text-center mt-6 md:text-5xl">
        {title}
      </h2>
      <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 mx-auto max-w-md">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;
