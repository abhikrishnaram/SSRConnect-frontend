import Image from "next/image";
import React from "react";

const Team = () => {
  const faculty = [
    {
      name: "Jayakumaran A",
      image: "/images/team/faculty/jayakumaran-a.webp",
      position: "Faculty",
      department: "CSE",
      social: {},
    },
  ];

  const students = [
    {
      name: "N Sai Pranavdhar Reddy",
      image: "/images/team/students/sai-pranav.webp",
      position: "Student",
      year: "2020-2024",
      department: "CSE",
      social: {
        github: "https://github.com/iampranavdhar",
        linkedin:
          "https://www.linkedin.com/in/sai-pranavdhar-reddy-n-038104206/",
        instagram: "https://www.instagram.com/iampranavdhar/",
      },
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="247432cb-6e6c-4bec-9766-564ed7c230dc"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#247432cb-6e6c-4bec-9766-564ed7c230dc)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Welcome</span>
            </span>{" "}
            our talented team of professionals
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="text-center py-4">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-[#af0c3e] uppercase rounded-full bg-teal-accent-400">
            Faculty Team
          </p>
        </div>
        <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3 mb-4">
          {faculty.map((member, index) => (
            <div className="flex" key={index}>
              <Image
                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
              />
              <div className="flex flex-col justify-center">
                <p className="text-lg font-bold text-gray-900">{member.name}</p>
                <p className="text-sm text-gray-800">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center py-8">
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-[#af0c3e] uppercase rounded-full bg-teal-accent-400">
            Student Team
          </p>
        </div>
        <div className="grid gap-10 row-gap-8 mx-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3">
          {students.map((member, index) => (
            <div className="flex" key={index}>
              <Image
                className="object-cover w-20 h-20 mr-4 rounded-full shadow"
                src={member.image}
                alt={member.name}
                width={80}
                height={80}
              />
              <div className="flex flex-col justify-center">
                <p className="text-lg font-bold text-gray-900">{member.name}</p>
                <p className="text-sm text-gray-800">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
