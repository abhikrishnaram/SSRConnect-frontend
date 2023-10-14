import { capitalize } from "@/utils/common";
import moment from "moment";

const MAX_DISPLAY = 5;

const Home = () => {
  const posts = [
    {
      slug: "post-1",
      date: "2023-10-14",
      title: "The Importance of Environmental Education",
      summary:
        "Discover how environmental education can empower students to become responsible stewards of the planet.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      tags: ["education", "environment", "students"],
    },
    {
      slug: "post-2",
      date: "2023-10-15",
      title: "Youth Leadership Initiatives",
      summary:
        "Explore how youth leadership initiatives can foster leadership skills and social responsibility in students.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      tags: ["students", "leadership", "initiatives"],
    },
    {
      slug: "post-3",
      date: "2023-10-16",
      title: "Community Service Benefits for Students",
      summary:
        "Learn about the benefits of community service for students, including personal growth and community impact.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      tags: ["students", "community service", "benefits"],
    },
    {
      slug: "post-4",
      date: "2023-10-17",
      title: "Promoting Diversity and Inclusion in Schools",
      summary:
        "Discover strategies for promoting diversity and inclusion in educational institutions.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      tags: ["education", "diversity", "inclusion"],
    },
    {
      slug: "post-5",
      date: "2023-10-18",
      title: "Digital Literacy: A Vital Skill for Modern Students",
      summary:
        "Explore the significance of digital literacy and its role in modern education.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      tags: ["students", "digital literacy", "education"],
    },
    {
      slug: "post-6",
      date: "2023-10-19",
      title: "Youth Engagement in Environmental Conservation",
      summary:
        "Learn how young people are actively involved in environmental conservation efforts worldwide.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      tags: ["environment", "youth", "conservation"],
    },
    {
      slug: "post-7",
      date: "2023-10-20",
      title: "The Role of Schools in Teaching Empathy",
      summary:
        "Discover the role of schools in teaching empathy and fostering empathy-related skills in students.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      tags: ["education", "empathy", "students"],
    },
    {
      slug: "post-8",
      date: "2023-10-21",
      title: "Mental Health Awareness in Schools",
      summary:
        "Explore the importance of raising mental health awareness in schools and supporting students' well-being.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      tags: ["education", "mental health", "students"],
    },
    {
      slug: "post-9",
      date: "2023-10-22",
      title: "The Power of Student Activism",
      summary:
        "Learn about the impact of student activism in driving social and political change.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      tags: ["students", "activism", "social change"],
    },
    {
      slug: "post-10",
      date: "2023-10-23",
      title: "Teaching Financial Literacy in Schools",
      summary:
        "Discover the benefits of teaching financial literacy to students and preparing them for financial success.",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      tags: ["students", "financial literacy", "education"],
    },
  ];

  console.log(
    posts?.map((post: any) => {
      return moment(post.date).format("YYYY");
    })
  );

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="w-full max-w-6xl mx-auto">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-bold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Blogs
          </h1>
          <p className="text-lg leading-7 text-gray-500">
            Experiences in the world of ssr
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
                  className="flex justify-between items-center cursor-pointer text-gray-600 hover:text-emerald-500 mb-2"
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
                  className="flex justify-between items-center cursor-pointer text-gray-600 hover:text-emerald-500 mb-2"
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
                  className="py-12 px-2 border-y border-slate-200 hover:bg-gray-100 cursor-pointer"
                >
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500">
                          <time dateTime={date}>
                            {moment(date).format("MMMM Do YYYY")}
                          </time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <p className="text-gray-900">{title}</p>
                            </h2>
                            <div className="flex flex-wrap mt-2">
                              {tags.map((tag: string) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center px-3 py-0.5 rounded text-sm font-medium leading-5 bg-primary-100 text-emerald-500 bg-slate-200 mr-2 mb-2"
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

export default Home;
