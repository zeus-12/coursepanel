import SlideUpWhenVisible from "@hooks/SlideUpWhenVisible";
import Image from "next/image";

interface SolutionsProps {}

const SolutionsRoot: React.FC<SolutionsProps> = ({}) => {
  const content = [
    {
      title: "CourseMap",
      description:
        "We help students analyze the roads they have to take to make the most out of the courses offered by the institution",
      image_src: "coursemap1.png",
    },
    {
      title: "CoursePlan",
      description:
        "We help you analyze the performance of courses in your institution, accurately map skills of learners and offer a well rounded curriculum",
      image_src: "coursemap2.png",
    },
  ];
  return (
    <SlideUpWhenVisible>
      <div className="lg:px-18 min-h-screen px-4 py-16 sm:px-16 md:px-32 xl:px-32">
        <p className="mb-4 text-center text-4xl font-bold tracking-tighter lg:mb-12">
          What we solve
        </p>
        <div className="space-y-16">
          {content.map((item, index) => (
            <div
              className={`flex flex-col justify-around gap-4 lg:items-center lg:gap-24 ${
                index % 2 !== 0
                  ? "lg:flex-row-reverse lg:text-right"
                  : " lg:flex-row"
              }`}
              key={index}
            >
              <div className="flex-1">
                <p className="mb-4 text-3xl font-semibold">{item.title}</p>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <Image
                src={`/demo/${item.image_src}`}
                width={600}
                height={600}
                alt=""
                // className="h-auto w-full lg:max-w-[30vw]"
                className="flex-1"
              />
            </div>
          ))}
        </div>
      </div>
    </SlideUpWhenVisible>
  );
};

export default SolutionsRoot;
