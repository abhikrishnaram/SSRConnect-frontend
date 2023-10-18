import { capitalize } from "@/utils/common";
import { posts } from "@/utils/data";
import moment from "moment";
import Image from "next/image";

const MAX_DISPLAY = 5;

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="w-full max-w-6xl mx-auto">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-2xl font-bold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-3xl md:leading-14">
            Projects
          </h1>
          <p className="text-lg leading-7 text-gray-500">
            We have been working on a lot of projects which have impacted the
            society in a positive way. Some of them are listed below
          </p>
        </div>
        <div className="grid grid-cols-[15rem_1fr] gap-2">
          <div className="h-max px-5 py-14 rounded">
            <p className="text-lg font-bold leading-9 tracking-tight text-gray-900 sm:text-xl sm:leading-10 md:text-xl md:leading-14 mb-8">
              All Tags
            </p>
            <div className="flex flex-col">
              {/* group all the posts and create a map with tag and number of posts */}
              {Array.from(
                new Set(
                  posts
                    ?.map((post: any) => post.tags.map((tag: string) => tag))
                    ?.flat()
                )
              )?.map((tag: string, index: number) => (
                <p
                  className="flex justify-between items-center cursor-pointer text-gray-600 hover:text-[#af0c3e] mb-2"
                  key={index}
                >
                  <span>{capitalize(tag)}</span>
                  <span>
                    {
                      posts.filter((post: any) => post.tags.includes(tag))
                        .length
                    }
                  </span>
                </p>
              ))}
            </div>
            <p className="text-lg font-bold leading-9 tracking-tight text-gray-900 sm:text-xl sm:leading-10 md:text-xl md:leading-14 my-8">
              Years
            </p>
            <div className="flex flex-col">
              {Array.from(
                new Set(posts.map((post) => moment(post.date).format("YYYY")))
              ).map((year: string, index: number) => (
                <p
                  className="flex justify-between items-center cursor-pointer text-gray-600 hover:text-[#af0c3e] mb-2"
                  key={index}
                >
                  <span>{year}</span>
                  <span>
                    {
                      posts.filter(
                        (post: any) => moment(post.date).format("YYYY") === year
                      ).length
                    }
                  </span>
                </p>
              ))}
            </div>
          </div>
          <ul className="border-l border-slate-200 pl-4">
            {!posts.length && "No posts found."}
            {posts.slice(0, MAX_DISPLAY).map((post: any) => {
              const { slug, date, title, summary, tags } = post;
              return (
                <li
                  key={slug}
                  className="rounded-md my-4 py-4 bg-white shadow-sm hover:shadow px-4 cursor-pointer"
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
