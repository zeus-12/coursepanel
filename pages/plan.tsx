import { useRouter } from "next/router";
import Hero from "@components/Hero";
import { CalendlyButton } from "@components/CalendlyButton";
import Features from "@components/Features";
import { Solutions } from "@components/Solutions";
import Navbar from "@components/Navbar";
import { ProductDescription } from "@components/ProductDescription";
import { paddingStyles } from "../utils/constants";

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

  const productDescription = [
    "Getting insights from all the courses in your institute can be extremely tricky.",
    "Through CoursePlan, we help you efficiently track course performance and learner’s interests, to effectively manage your courses and offer courses that will pique the interest of learners.",
  ];

  const backgroundColour =
    "linear-gradient(180deg, #D1F4FF 2.33%, #FFFFFF 100%)";
  return (
    <>
      <Navbar backgroundColour={"#d1f4ff"} />

      <Hero
        backgroundColour={backgroundColour}
        imageSrc={"/demo/coursemap2.png"}
        route={route}
        title={"Launch impactful learning programs"}
        description="Planning flexible programs & assessing the overall impact is now made easy"
      />

      <div className={paddingStyles}>
        <Features data={featuresData} />

        <ProductDescription description={productDescription} />

        <Solutions data={solutionsData} />

        <div className="mt-32 flex justify-center">
          <CalendlyButton size="md" />
        </div>
      </div>
    </>
  );
}
