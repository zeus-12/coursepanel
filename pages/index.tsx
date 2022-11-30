import { useRouter } from "next/router";
import Hero from "@components/Hero";
import Image from "next/image";

export default function Home() {
  const router = useRouter();
  const { route } = router;

  const content = [
    {
      title: "CourseMap",
      description:
        "We help students analyze the roads they have to take to make th emost out of the courses offered by you institution",
    },
    {
      title: "CoursePlan",
      description:
        "We help students analyze the roads they have to take to make the most out of the courses offered by you institution",
    },
  ];

  const flowChartData = [
    { src: "/logo.png", description: "Too many students and courses" },
    {
      src: "/logo.png",
      description: "Intelligent Analytics of popular roadmaps",
    },
    {
      src: "/logo.png",
      description: "Better resource allocation and management",
    },
  ];

  return (
    <div>
      <div
        className="lg:px-18 px-4 py-16 sm:px-16 md:px-32 xl:px-32"
        style={{
          background:
            "radial-gradient(42.86% 231.13% at 50% 50%, #006AAE 0%, #078ADE 100%)",
        }}
      >
        <Hero
          route={route}
          title={"Need help building curriculums?"}
          description="We are here to help!"
          displaySwitch={false}
        />
      </div>

      <div className="lg:px-18 px-4 py-16 sm:px-16 md:px-32 xl:px-32 ">
        <div className="mt-16 space-y-8">
          {content.map((item, index) => (
            <div
              className={`items-center justify-center gap-16 lg:flex ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
              key={index}
            >
              <div className="lg:max-w-[40vw]">
                <h1 className="font-semibold ">{item.title}</h1>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <Image
                src="/logo.png"
                width={100}
                height={100}
                alt=""
                className="h-auto w-full lg:max-w-[20vw]"
              />
            </div>
          ))}
        </div>

        {/* flow chart */}
        {/* todo : modularise */}
        <div className="mt-8 flex justify-center gap-16">
          {flowChartData.map((item, index) => (
            <div
              key={index}
              className={`flex flex-col items-center ${
                index % 2 != 0 ? "flex-col-reverse" : ""
              }`}
            >
              <p>{item.description}</p>
              <Image src={item.src} width={100} height={100} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
