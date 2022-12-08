import Image from "next/image";

interface SolutionDataObjectType {
  imageSrc: string;
  text: string[];
}
interface FeaturesProps {
  data: SolutionDataObjectType[];
}

const Features: React.FC<FeaturesProps> = ({ data }) => {
  return (
    <div className="mt-16 flex flex-col items-center justify-between md:flex-row md:items-stretch">
      {data.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 !== 1 ? "md:flex-col-reverse" : ""
          }`}
        >
          <Image
            src={`/svg/${item.imageSrc}`}
            alt=""
            width={300}
            height={300}
            className="h-44"
          />

          {item.text.map((ele) => (
            <p className="text-center text-lg " key={ele}>
              {ele}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Features;
