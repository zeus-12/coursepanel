import { useRouter } from "next/router";
import Hero from "@components/Hero";
import { CalendlyButton } from "@components/CalendlyButton";
import SlideUpWhenVisible from "@hooks/SlideUpWhenVisible";
import Features from "@components/Features";
import Image from "next/image";
import { Solutions } from "@components/Solutions";

export default function Institute() {
  const router = useRouter();
  const { route } = router;

  const featuresData = [
    {
      imageSrc: "4.svg",
      text: [
        "Too many learners and courses",
        "Easy access to established roadmaps",
      ],
    },
    {
      imageSrc: "5.svg",
      text: ["Intelligent analytics of popular roadmaps"],
    },
    {
      imageSrc: "6.svg",
      text: ["Better education programme"],
    },
  ];

  const solutionsData = [
    {
      text: "Inteligent Analytics available at your fingertips",
      imageSrc: "coursemap1.png",
    },
  ];

  return (
    <>
      {/* hero section */}
      <div
        className="lg:px-18 px-4 py-16 sm:px-16  md:px-32 xl:px-32  "
        style={{
          background: "linear-gradient(180deg, #D1F4FF 2.33%, #FFFFFF 100%);",
        }}
      >
        <Hero
          imageSrc={"/demo/coursemap2.png"}
          route={route}
          title={"Launch impactful learning programs"}
          description="Planning flexible programs & assessing the overall impact is now made easy"
        />
      </div>

      <div className="lg:px-18 px-4 py-16 sm:px-16 md:px-32 xl:px-32">
        <SlideUpWhenVisible>
          <Features data={featuresData} />
        </SlideUpWhenVisible>

        <SlideUpWhenVisible>
          <div className="my-48 flex flex-col gap-24">
            <hr className="border-[#959595]" />
            <p className="text-3xl">
              Getting insights from all the courses in your institute can be
              extremely tricky.
              <br />
              Through CoursePlan, we help you efficiently track course
              performance and learner’s interests, to effectively manage your
              courses and offer courses that will pique the interest of
              learners.
            </p>
            <hr className="border-[#959595]" />
          </div>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible>
          <Solutions data={solutionsData} />
        </SlideUpWhenVisible>

        <div className="mt-32 flex justify-center">
          <CalendlyButton />
        </div>
      </div>
    </>
  );
}
