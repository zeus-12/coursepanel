import Image from "next/image";

interface SolutionsObjectProps {
  text: string;
  imageSrc: string;
}
interface SolutionsProps {
  data: SolutionsObjectProps[];
}

export const Solutions: React.FC<SolutionsProps> = ({ data }) => {
  return (
    <div className="space-y-16">
      {data.map((item, i) => (
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
  );
};
