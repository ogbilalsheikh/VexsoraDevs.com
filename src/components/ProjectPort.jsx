import React, { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";

import ebook1 from "../assets/eBook.jpeg";
import ebook2 from "../assets/eBook2.jpeg";
import ebook3 from "../assets/eBook3.jpeg";

import ebookdesign1 from "../assets/ebookdesign1.jpeg";
import ebookdesign2 from "../assets/ebookdesign1.jpeg";
import ebookdesign3 from "../assets/ebookdesign1.jpeg";

import design1 from "../assets/design1.jpeg";
import design2 from "../assets/design2.jpeg";
import design3 from "../assets/design3.jpeg";

import logo1 from "../assets/logo1.jpeg";
import logo2 from "../assets/logo2.jpeg";
import logo3 from "../assets/logo3.jpeg";

import furry1 from "../assets/furry1.jpeg";
import furry2 from "../assets/furry2.png";
import furry3 from "../assets/furry3.png";

import web1 from "../assets/website1.png";
import web2 from "../assets/website2.png";
import web3 from "../assets/website3.png";
const projects = [
  {
    id: 2,
    title: "Business Website",
    category: "Websites",
    type: "Completed Project",
    images: [web1, web2, web3],
  },
    {
    id: 1,
    title: "Brand Identity Design",
    category: "Branding",
    type: "Concept Project",
    images: [logo1, logo2, logo3],
  },
  {
    id: 4,
    title: "eBook Cover Design",
    category: "eBooks",
    type: "Concept Project",
    images: [ebook1, ebook2, ebook3]
  },
  {
    id: 5,
    title: "Editorial Page Design",
    category: "eBooks",
    type: "Completed Project",
    images: [ebookdesign1, ebookdesign2, ebookdesign3],
  },
  {
    id: 6,
    title: "Social Media Visuals",
    category: "Graphic Design",
    type: "Concept Project",
    images: [design1, design2, design3],
  },
  {
    id: 7,
    title: "Furry Character Art",
    category: "Furry Art",
    type: "Character Illustration",
    images: [furry1, furry2, furry3],
  },
];

const categories = [
  "All Work",
  "Websites",
  "Branding",
  "Graphic Design",
  "eBooks",
  "Furry Art",
];

const ProjectPort = () => {
  const [activeCategory, setActiveCategory] = useState("All Work");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All Work"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section
      id="pricing"
      className="w-full bg-gray-100 px-5 py-16 sm:px-8 md:px-12 lg:px-10 xl:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-[750px] mb-12">
          <p className="uppercase text-[13px] font-medium tracking-[2px] text-blue-600">
            Our Portfolio
          </p>

          <h1 className="text-[32px] sm:text-[38px] font-bold tracking-tight text-gray-900">
              Selected Works.
            <span className="text-gray-400"> Made with Purpose.</span>
          </h1>

          <h3 className="text-gray-500 text-[15px] sm:text-[16px] font-medium">
            A collection of creative projects, thoughtful designs, and digital
            experiences built with attention to every detail.
          </h3>
        </div>


        <div className="mb-9 flex flex-wrap gap-2.5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "border-gray-900 bg-gray-900 text-white shadow-md"
                  : "border-gray-300 bg-white text-gray-600 hover:border-gray-900 hover:text-gray-900"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article key={project.id} className="group min-w-0">
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                aria-label={`View ${project.title}`}
                className="block w-full overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-2.5 text-left shadow-sm "
              >
                <div className="grid grid-cols-2 gap-2">
                  <div className="row-span-2 h-[230px] overflow-hidden rounded-xl bg-gray-100">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="h-[111px] overflow-hidden rounded-xl bg-gray-100">
                    <img
                      src={project.images[1]}
                      alt={`${project.title} preview 2`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="h-[111px] overflow-hidden rounded-xl bg-gray-100">
                    <img
                      src={project.images[2]}
                      alt={`${project.title} preview 3`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between px-1 pb-1 pt-3">
                  <span className="text-xs font-medium text-gray-500">
                    View Project
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-800 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <ArrowUpRight size={19} />
                  </span>
                </div>
              </button>

              <div className="px-1 pt-4">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                    {project.category}
                  </span>

                  <span className="text-xs text-gray-400">
                    {project.type}
                  </span>
                </div>
{/* 
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="text-left text-lg font-semibold text-gray-900 transition-colors duration-300 hover:text-blue-600"
                >
                  {project.title}
                </button> */}
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="py-16 text-center text-gray-500">
            No projects found in this category.
          </p>
        )}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
            className="relative my-auto max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white p-5 sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-gray-700 shadow transition-colors hover:bg-gray-100"
            >
              <X size={22} />
            </button>

            <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {selectedProject.images.map((image, index) => (
                <div
                  key={image}
                  className={`overflow-hidden rounded-xl bg-gray-100 ${
                    index === 0 ? "sm:col-span-2" : ""
                  }`}
                >
                  <img
                    src={image}
                    alt={`${selectedProject.title} preview ${index + 1}`}
                    className={`w-full object-cover ${
                      index === 0 ? "max-h-[380px]" : "h-48"
                    }`}
                  />
                </div>
              ))}
            </div>

            <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
              {selectedProject.category}
            </span>

            <h2 className="mt-3 text-2xl font-bold text-gray-900 sm:text-3xl">
              {selectedProject.title}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              {selectedProject.type}
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Explore the details of this creative project through its
              visual previews and design work.
            </p>

            <a
              href="#contact"
              onClick={() => setSelectedProject(null)}
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white transition-colors duration-300 hover:bg-gray-900"
            >
              Start Your Project
              <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectPort;