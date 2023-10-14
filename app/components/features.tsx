import Image from "next/image";
import React from "react";

const Features = () => {
  const features = [
    {
      title: "Find a problem",
      description: "Students try to find a problem in the society",
      image: "/images/feature-img-1.webp",
    },
    {
      title: "Get the solution",
      description: "Students get the innovative solution for the problem",
      image: "/images/feature-img-2.webp",
    },
    {
      title: "Make it Live",
      description: "Put in complete effort to implement the solution",
      image: "/images/feature-img-3.webp",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12" id="features">
      <div className="md:flex md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Essense of SSR
          </h2>
          <p className="mt-6 max-w-xl leading-relaxed text-gray-700">
            {`SSR is Amrita's flagship community outreach program that exposes
            students to the realities of life`}
          </p>
        </div>
      </div>
      {/* Cards of features */}
      <div className="grid-cols-1 sm:grid md:grid-cols-3">
        {features.map((feature, index) => {
          return (
            <div
              key={index}
              className="mx-3 mt-6 grid grid-rows-[15rem_1fr] rounded bg-white shadow hover:shadow-md cursor-pointer sm:shrink-0 sm:grow sm:basis-0 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <Image
                  src={feature.image}
                  alt="Picture of the author"
                  layout="fill"
                />
              </div>
              <div className="p-6 bg-white">
                <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800">
                  {feature.title}
                </h5>
                <p className="mb-4 text-base text-neutral-600 ">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
