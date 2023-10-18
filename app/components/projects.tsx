import { capitalize } from "@/utils/common";
import { posts } from "@/utils/data";
import moment from "moment";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 pt-20" id="projects">
      <div className="md:flex md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Projects
          </h2>
          <p className="mt-4 max-w-xl leading-relaxed text-gray-700">
            We have been working on a lot of projects. Some of them are listed
            below
          </p>
        </div>
        <a
          href="/projects"
          className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-[#af0c3e] px-5 py-3 text-[#af0c3e] transition hover:bg-[#af0c3e] hover:text-white md:mt-0"
        >
          <span className="font-medium"> See more </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 rtl:rotate-180"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
      <div className="mt-8">
        {posts.slice(0, 3).map((post: any) => {
          const { slug, date, title, summary, tags } = post;
          return (
            <li
              key={slug}
              className="rounded-md my-4 pb-4 bg-white shadow-sm hover:shadow px-4 cursor-pointer"
            >
              <article>
                <div className="space-y-2 xl:grid grid-cols-1 xl:grid-cols-4 lg:items-baseline lg:space-y-0">
                  <div className="relative w-full h-full rounded-md overflow-hidden lg:col-span-1">
                    <Image
                      src={"/images/feature-img-1.webp"}
                      alt="Logo"
                      layout="fill"
                    />
                  </div>
                  <div className="space-y-5 lg:col-span-3 px-4">
                    <div>
                      <div>
                        <p className="prose text-base leading-7 text-gray-500 pb-2 m-0">
                          {moment(date).format("MMMM Do YYYY")}
                        </p>
                        <h2 className="text-2xl font-bold leading-8 tracking-tight">
                          <p className="text-gray-900">{title}</p>
                        </h2>
                        <div className="flex flex-wrap mt-2">
                          {tags.map((tag: string) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-3 py-0.5 rounded text-sm font-medium leading-5 bg-primary-100 text-[#af0c3e] bg-slate-200 mr-2 mb-2"
                            >
                              {capitalize(tag)}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="prose max-w-none text-gray-500">
                        {summary}
                      </div>
                    </div>
                    <div className="text-base font-medium leading-6">
                      <a
                        href={`/blog/${slug}`}
                        className="text-gray-500 hover:text-gray-600"
                        aria-label={`Read "${title}"`}
                      >
                        Read more &rarr;
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
