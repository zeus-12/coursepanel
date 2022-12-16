import SlideUpWhenVisible from "@hooks/SlideUpWhenVisible";
import Image from "next/image";

interface FeaturesProps {}
const contents = [
  {
    heading: "Problem",
    subheading: "Education Management",
    src: "1",
    bg: "radial-gradient(50% 50% at 50% 50%, #030B4A 0%, #00072D 70.83%)",
    colour: "white",
    description: ["Lot of courses and students", "Unorganised data"],
  },
  {
    heading: "Solution",
    subheading: "CoursePanel",
    src: "2",
    bg: "radial-gradient(50% 50% at 50% 50%, #0064A4 0%, #005186 100%)",
    colour: "white",
    description: ["AI Analytics", "Intelligent recommendations"],
  },
  {
    heading: "Result",
    subheading: "Organised Planning",
    src: "3",
    bg: "radial-gradient(50% 50% at 50% 50%, #B7DFF8 0%, #88C3EA 100%)",
    colour: "black",
    description: [
      "Better career insights and course planning",
      "Better business insights and resource allocation",
    ],
  },
];

const FeaturesRoot: React.FC<FeaturesProps> = ({}) => {
  return (
    <SlideUpWhenVisible>
        <div className="justify-evenly my-16 md:flex">
          {contents.map((content) => (
            <div
              key={content.heading}
              className="flex flex-col items-center py-16 px-8 md:items-stretch md:w-96 w-full rounded-md"
              style={{ background: content.bg, color: content.colour }}
            >
              <CardHeading
                heading={content.heading}
                subheading={content.subheading}
              />
              <div className="flex justify-center">
                <Image
                  src={`/feature/${content.src}.png`}
                  className="my-3 w-64 md:my-8"
                  width={100}
                  height={100}
                  alt="logo"
                />
              </div>

              <div>
                {content.description.map((item) => (
                  <p className="text-center" key={item}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
  
    </SlideUpWhenVisible>
  );
};

interface CardHeadingProps {
  heading: string;
  subheading: string;
}

const CardHeading: React.FC<CardHeadingProps> = ({ heading, subheading }) => {
  return (
    <>
      <p className="text-4xl font-semibold tracking-tighter">
        The <span className="font-bold md:block">{heading}</span>
      </p>
      <p className="mt-3 text-xl md:mt-8">{subheading}</p>
    </>
  );
};

export default FeaturesRoot;
