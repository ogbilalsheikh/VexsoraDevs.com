import React from "react";
import BlinkDot from "./BlinkDot";

const AboutPort = () => {
  const focusAreas = [
    {
      number: "01",
      title: "Professional Website Development",
      description:
        "Modern, responsive websites designed to showcase your brand, engage visitors, and turn ideas into meaningful online experiences.",
    },
    {
      number: "02",
      title: "Memorable Logo & Brand Design",
      description:
        "Distinctive logos and cohesive visual identities that help your business stand out, build recognition, and make a lasting impression.",
    },
    {
      number: "03",
      title: "Creative Graphic Design",
      description:
        "Eye-catching visuals and polished marketing graphics that communicate your message clearly and give your brand a professional look.",
    },
    {
      number: "04",
      title: "eBook Cover Design & Editing",
      description:
        "Captivating eBook covers and carefully edited content that help your work look professional, read smoothly, and connect with readers.",
    },
    {
      number: "05",
      title: "eBook Publishing Solutions",
      description:
        "Publishing-ready eBooks prepared with professional formatting and a polished presentation, helping move your manuscript closer to readers.",
    },
  ];

  return (
    <section id="about" className="w-full bg-gray-100 min-h-[calc(100vh-180px)] px-5 sm:px-8 md:px-12 lg:px-10 xl:px-20 py-12">
      <div className="w-full">
        <div className="max-w-[750px] mb-12">
          <p className="uppercase text-[13px] font-medium tracking-[2px] text-blue-600">
            About VexsoraDevs
          </p>

          <h1 className="text-[32px] sm:text-[38px] font-bold tracking-tight text-gray-900">
            Creative Ideas.<span className="text-gray-400"> Professional Results.</span>
          </h1>

          <h3 className="text-gray-500 text-[15px] sm:text-[16px] font-medium">
            Your ideas deserve more than ordinary solutions.
            We bring design, technology, and publishing together
            to help your brand make a lasting impression.
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div className="lg:pt-2">
            <div className="flex items-center gap-3 mb-5">
              <span className="w-8 h-[2px] bg-blue-500"></span>

              <span className="text-[13px] font-medium uppercase tracking-[2px] text-gray-500">
                Who We Are
              </span>
            </div>

            <h2 className="text-[28px] sm:text-[32px] lg:text-[36px] leading-[1.2] font-semibold text-gray-900 max-w-[520px]">
              Your Vision, Our Creativity, One Powerful Result.
            </h2>

            <div className="mt-7 space-y-5 max-w-[540px]">
              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-7">
                At VexsoraDevs, we help businesses, entrepreneurs,
                and creators bring their ideas to life through
                professional websites, memorable logos, creative
                graphics, and beautifully designed eBooks.
              </p>

              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-7">
                From building your online presence to designing
                your brand identity, refining your written content,
                and preparing your eBook for publishing, we focus
                on thoughtful details, clear communication, and
                quality that reflects your vision.
              </p>

              <p className="text-[15px] sm:text-[16px] text-gray-600 leading-7">
                Whether you are launching a new business, growing
                an existing brand, or preparing your next book,
                we aim to make the creative process simpler and
                the final result more professional.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-gray-600">
                <BlinkDot />
              <span>
                One creative partner for your digital and design needs.
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[2px] bg-blue-500"></span>

                <span className="text-[13px] font-medium uppercase tracking-[2px] text-gray-500">
                  What We Do Best
                </span>
              </div>

              <span className="text-xs text-gray-400">05 SERVICES</span>
            </div>

            <div className="flex flex-col">
              {focusAreas.map((area) => (
                <div
                  key={area.number}
                  className="group flex gap-5 py-5 border-b border-gray-200"
                >
                  <span className="text-sm text-gray-400 font-medium">
                    {area.number}
                  </span>

                  <div>
                    <h3 className="text-[16px] font-semibold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-blue-600">
                      {area.title}
                    </h3>

                    <p className="text-sm leading-6 text-gray-500">
                      {area.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPort;