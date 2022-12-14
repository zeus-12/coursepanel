import { useRouter } from "next/router";
import Hero from "@components/Hero";
import { CalendlyButton } from "@components/CalendlyButton";
import Features from "@components/Features";
import { Solutions } from "@components/Solutions";
import Navbar from "@components/Navbar";
import { ProductDescription } from "@components/ProductDescription";
import { paddingStyles } from "../utils/constants";

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

  const productDescription = [
    "We help learners analyze roads and projects they can take to better their skills and make the most out of the courses offered by your institution, through data driven suggestions and access to established roadmaps.",
  ];

  const backgroundColour = "linear-gradient(180deg, #00072D 0%, #000000 100%)";
  return (
    <>
      <Navbar backgroundColour={backgroundColour} />

      <Hero
        backgroundColour={backgroundColour}
        imageSrc={"/demo/coursemap2.png"}
        route={route}
        title={"Make more informed learning choices"}
        description="Learners can now make the most of courses and projects at your institution"
      />

      <div className={`${paddingStyles} bg-black text-gray-200`}>
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
