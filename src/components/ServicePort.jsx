import {
  Palette,
  Monitor,
  PenTool,
  BookOpen,
  FileText,
  BookMarked,
} from "lucide-react";

const ServicePort = () => {
  const services = [
    {
      icon: Palette,
      title: "Logo Design & Branding",
      description:
        "Unique logos and professional brand identities that help your business stand out and create a memorable first impression.",
      category: "Brand Identity",
      className: "",
    },
    {
      icon: Monitor,
      title: "Website Development",
      description:
        "Modern, responsive, and user-friendly websites built to showcase your business and deliver a seamless experience across devices.",
      category: "Digital Experiences",
      className: "",
    },
    {
      icon: PenTool,
      title: "Graphic Design",
      description:
        "Creative graphics, promotional materials, social media designs, and marketing visuals that communicate your brand effectively.",
      category: "Creative Visuals",
      className: "",
    },
    {
      icon: BookOpen,
      title: "eBook Cover Design",
      description:
        "Eye-catching and professionally designed eBook covers that capture attention and reflect the message of your book.",
      category: "Book Design",
      className: "",
    },
    {
      icon: FileText,
      title: "eBook Editing",
      description:
        "Careful editing, proofreading, and formatting to make your manuscript clear, polished, and ready for readers.",
      category: "Editorial Services",
      className: "",
    },
    {
      icon: BookMarked,
      title: "eBook Publishing",
      description:
        "Publishing preparation and digital book formatting to help authors get their eBooks ready for online platforms.",
      category: "Digital Publishing",
      className: "",
    },
  ];

  return (
    <section
      id="services"
      className="w-full bg-gray-100 min-h-[calc(100vh-180px)] px-5 sm:px-8 md:px-12 lg:px-10 xl:px-20 py-12 sm:py-16"
    >
      <div className="w-full max-w-[1400px] mx-auto">
        <div className="max-w-[750px] mb-12">
          <p className="uppercase text-[13px] font-medium tracking-[2px] text-blue-600">
            What We Do
          </p>

          <h1 className="text-[32px] sm:text-[38px] font-bold tracking-tight text-gray-900">
            Creative Services, <span className="text-gray-400"> Built Around Your Vision.</span>
          </h1>

          <h3 className="text-gray-500 text-[15px] sm:text-[16px] font-medium">
            From digital experiences to creative publishing, we help businesses
            and creators turn their ideas into professional results.
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mt-8 sm:mt-10">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className={`group flex flex-col min-h-[245px] bg-white border border-gray-200 rounded-xl p-5 sm:p-6 transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-xl ${service.className}`}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-100 text-gray-800 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <span className="text-xs text-gray-400 font-medium tracking-wider">
                    0{index + 1}
                  </span>
                </div>

                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h2>

                <p className="text-sm leading-7 text-gray-500">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-auto pt-6 flex items-center gap-2 text-xs font-semibold text-gray-800 w-fit transition-colors duration-300 hover:text-blue-600"
                >
                  {service.category}
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicePort;
