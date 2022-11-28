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

  return (
    <div className="lg:px-18 px-4 py-16 sm:px-16 md:px-32 xl:px-32 ">
      <Hero
        route={route}
        title={"Need help building curriculums?"}
        description="We are here to help!"
        displaySwitch={false}
      />

      <div>
        {content.map((item, index) => (
          <div
            className={`lg:flex ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}
            key={index}
          >
            <div className="lg:w-[50vw]">
              <h1 className="font-semibold ">{item.title}</h1>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <Image src="/" width={100} height={100} alt="" className="flex-1" />
          </div>
        ))}
      </div>
    </div>
  );
}
