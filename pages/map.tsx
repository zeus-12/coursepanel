import { useRouter } from "next/router";
import Hero from "@components/Hero";
import Image from "next/image";
import { CalendlyButton } from "@components/CalendlyButton";
import SlideUpWhenVisible from "@hooks/SlideUpWhenVisible";
import Features from "@components/Features";
import { Solutions } from "@components/Solutions";

export default function Institute() {
  const featuresData = [
    { imageSrc: "1.svg", text: ["Too many courses", "Confused?"] },
    {
      imageSrc: "2.svg",
      text: ["Data driven suggestions", "Access to established roadmaps"],
    },
    { imageSrc: "3.svg", text: ["Better education programme"] },
  ];

  const solutionsData = [
    {
      text: "Help students plan their educational journey effectively",
      imageSrc: "coursemap1.png",
    },
    {
      text: "Easy access to established roadmaps",
      imageSrc: "coursemap3.png",
    },
  ];

  const router = useRouter();
  const { route } = router;
  Hero;

  return (
    <>
      {/* hero section */}
      <div
        className="lg:px-18 px-4 py-16 text-white sm:px-16  md:px-32 xl:px-32  "
        style={{
          background: "linear-gradient(180deg, #00072D 0%, #000000 100%)",
        }}
      >
        <Hero
          imageSrc={"/demo/coursemap2.png"}
          route={route}
          title={"Make more informed learning choices"}
          description="Learners can now make the most of courses and projects at your institution"
        />
      </div>

      <div className="lg:px-18 bg-black px-4 py-16 text-white  sm:px-16 md:px-32 xl:px-32">
        <SlideUpWhenVisible>
          <Features data={featuresData} />
        </SlideUpWhenVisible>

        <SlideUpWhenVisible>
          <div className="my-48 flex flex-col gap-24">
            <hr className="border-[#959595]" />
            <p className="text-3xl">
              We help learners analyze roads and projects they can take to
              better their skills and make the most out of the courses offered
              by your institution, through data driven suggestions and access to
              established roadmaps.
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
