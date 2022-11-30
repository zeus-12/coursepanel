import Image from "next/image";

interface FeaturesProps {}
const content = [
  {
    heading: "Problem",
    subheading: "Education Management",
    src: "1",
    bg: "#0f003a",
    colour: "white",
    description: ["Lot of courses and students", "Unorganised data"],
  },
  {
    heading: "Solution",
    subheading: "CoursePanel",
    src: "1",
    bg: "#1DEEBC",
    colour: "black",
    description: ["AI Analytics", "Intelligent recommendations"],
  },
  {
    heading: "Result",
    subheading: "Organised Planning",
    src: "1",
    bg: "white",
    colour: "black",
    description: [
      "Better career insights and course planning",
      "Better business insights and resource allocation",
    ],
  },
];

export const Features: React.FC<FeaturesProps> = ({}) => {
  return (
    <div className="justify-center lg:flex">
      {/* 1st */}
      <CardWrapper bg={content[0].bg} colour={content[0].colour}>
        <CardHeading
          heading={content[0].heading}
          subheading={content[0].subheading}
        />

        <Image
          src="/feature/1.png"
          className="my-8 h-40 w-auto"
          width={100}
          height={100}
          alt="logo"
        />
        <ul className="list-disc">
          {content[0].description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CardWrapper>

      {/* 2nd  */}

      <CardWrapper bg={content[1].bg} colour={content[1].colour}>
        <CardHeading
          heading={content[1].heading}
          subheading={content[1].subheading}
        />

        <Image
          src="/feature/2.png"
          className="my-8 h-40 w-auto "
          width={100}
          height={100}
          alt="logo"
        />
        <ul className="list-disc">
          {content[1].description.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </CardWrapper>

      {/* 3rd */}

      <CardWrapper bg={content[2].bg} colour={content[2].colour}>
        <CardHeading
          heading={content[2].heading}
          subheading={content[2].subheading}
        />

        {[3, 4].map((item) => (
          <>
            <div
              className={`item flex items-center ${
                item % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
              key={item}
            >
              <Image
                src={`/feature/${item}.png`}
                className="my-6 h-28 w-auto"
                width={100}
                height={100}
                alt="logo"
              />
              <p>{content[2].description[item - 3]}</p>
            </div>
          </>
        ))}
      </CardWrapper>
    </div>
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
        The
        <span className="block font-bold">{heading}</span>
      </p>
      <p className="mt-8 text-xl">{subheading}</p>
    </>
  );
};

interface CardWrapperProps {
  children: React.ReactNode;
  bg: string;
  colour: string;
}

const CardWrapper: React.FC<CardWrapperProps> = ({ children, bg, colour }) => {
  return (
    <div
      className="flex-1 py-16 px-8"
      style={{ backgroundColor: bg, color: colour }}
    >
      {children}
    </div>
  );
};
