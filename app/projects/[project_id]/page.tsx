"use client";
import { capitalize } from "@/utils/common";
import axios from "axios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProjectDetails = () => {
  const [project, setProject] = useState<any>(null);
  const [projectTeam, setProjectTeam] = useState<any>(null);
  const { project_id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      const res = await axios.get(
        `https://ssramritapuri.azurewebsites.net/project/${project_id}`
      );
      setProject(res?.data?.project);
      setProjectTeam(res?.data?.team);
    };
    fetchProject();
  }, [project_id]);

  return (
    <div className="min-h-screen bg-gray-50 py-40">
      <div className="w-full max-w-6xl mx-auto px-4 overflow-y-scroll">
        <p className="text-xl text-gray-900 lg:text-3xl text-center font-medium">
          {project?.name}
        </p>
        {/* divider */}
        <div className="border-b border-gray-300 mt-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-[15rem_1fr] gap-10 py-5">
          <div>
            <div className="flex flex-col items-start mb-2">
              <p className="text-base text-gray-900 mb-2">Tags</p>
              <div className="flex flex-wrap gap-2">
                {project?.category?.map((tag: string, index: number) => (
                  <span
                    className="text-sm text-[#af0c3e] px-0 py-2"
                    key={index}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="border-b border-gray-300 my-4"></div>
            <div className="flex flex-col items-start mb-2">
              <p className="text-base text-gray-900 mb-2">Year</p>
              <div className="flex flex-wrap gap-2">
                <p className="text-sm text-[#af0c3e] px-0 py-2">
                  {project?.year}
                </p>
              </div>
            </div>
            <div className="border-b border-gray-300 my-4"></div>
            <div className="flex flex-col items-start mb-2">
              <p className="text-base text-gray-900 mb-2">Mentor</p>
              <div className="flex flex-wrap gap-2">
                <p className="text-sm text-[#af0c3e] px-0 py-2">
                  {capitalize(project?.mentor)}
                </p>
              </div>
            </div>
            <div className="border-b border-gray-300 my-4"></div>
          </div>
          <div className="w-full flex flex-col items-start">
            <p className="text-base text-gray-900 mb-4">Description</p>
            <p className="text-sm text-gray-500">{project?.description}</p>
            <p className="text-base text-gray-900 mt-4 mb-2">Team</p>
            <div className="flex flex-col gap-2">
              {projectTeam?.map((member: any, index: number) => (
                <span className="text-sm text-[#af0c3e] px-0 py-2" key={index}>
                  {member.name} ({member.roll})
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
