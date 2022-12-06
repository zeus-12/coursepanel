import { useRouter } from "next/router";
import Hero from "@components/Hero";
import Image from "next/image";
import { CalendlyButton } from "@components/CalendlyButton";

export default function Institute() {
  const router = useRouter();
  const { route } = router;
  Hero;

  return (
    <>
      <div
        className="lg:px-18 px-4 py-16 text-white sm:px-16  md:px-32 xl:px-32  "
        style={{
          background: "linear-gradient(180deg, #00072D 0%, #000000 100%)",
        }}
      >
        <Hero
          imageSrc={"/demo/coursemap2.png"}
          route={route}
          title={"Launch impactful learning programs"}
          description="Planning flexible programs & assessing the overall impact is now made easy"
        />
      </div>
      <div className="lg:px-18 bg-black px-4 py-16 text-white  sm:px-16 md:px-32 xl:px-32">
        <div className="mt-16 flex flex-col items-center justify-between md:flex-row md:items-stretch">
          {[
            { imageSrc: "1.svg", text: ["Too many courses", "Confused?"] },
            {
              imageSrc: "2.svg",
              text: [
                "Data driven suggestions",
                "Access to established roadmaps",
              ],
            },
            { imageSrc: "3.svg", text: ["Better education programme"] },
          ].map((item, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 !== 1 ? "md:flex-col-reverse" : ""
              }`}
            >
              <Image
                src={`/plan/${item.imageSrc}`}
                alt=""
                width={300}
                height={300}
                className="h-44"
              />

              {item.text.map((ele) => (
                <p className="text-center text-lg text-white" key={ele}>
                  {ele}
                </p>
              ))}
            </div>
          ))}
        </div>

        <div className="my-48 flex flex-col gap-24">
          <hr className="border-[#959595]" />
          <p className="text-3xl">
            We help learners analyze roads and projects they can take to better
            their skills and make the most out of the courses offered by your
            institution, through data driven suggestions and access to
            established roadmaps.
          </p>
          <hr className="border-[#959595]" />
        </div>

        <div className="space-y-16">
          {[
            {
              text: "Help students plan their educational journey effectively",
              imageSrc: "coursemap1.png",
            },
            {
              text: "Easy access to established roadmaps",
              imageSrc: "coursemap3.png",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`flex flex-col justify-between gap-12 md:flex-row md:items-center ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <p className="text-3xl md:max-w-[30vw]"> {item.text}</p>
              <Image
                src={`/demo/${item.imageSrc}`}
                width={600}
                height={600}
                className="w-screen rounded-md md:w-[40vw]"
                alt="demo"
              />
            </div>
          ))}
        </div>
        <div className="mt-32 flex justify-center">
          <CalendlyButton />
        </div>
      </div>
    </>
  );
}
