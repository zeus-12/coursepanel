import Image from "next/image";

interface SolutionsProps {}

const Solutions: React.FC<SolutionsProps> = ({}) => {
  const content = [
    {
      title: "For Learners",
      description:
        "Learners analyze roads they have to take to make the most out of the courses offered by your institute",
      image_src: "coursemap.png",
    },
    {
      title: "For Institutes",
      description: "Launch and track impactful education programmes",
      image_src: "courseplan.png",
    },
  ];
  return (
    <div className="lg:px-18 min-h-screen px-4 py-16 sm:px-16 md:px-32 xl:px-32">
      <p className="mb-4 text-center text-4xl font-bold tracking-tighter lg:mb-12">
        What we solve
      </p>
      <div className="space-y-8">
        {content.map((item, index) => (
          <div
            className={`flex flex-col justify-around gap-4 lg:items-center lg:gap-16 ${
              index % 2 !== 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
            key={index}
          >
            <div className="lg:max-w-[40vw]">
              <h1 className="font-semibold ">{item.title}</h1>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <Image
              src={`/demo/${item.image_src}`}
              width={600}
              height={600}
              alt=""
              className="h-auto w-full lg:max-w-[30vw]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
