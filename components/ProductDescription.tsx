import SlideUpWhenVisible from "@hooks/SlideUpWhenVisible";
import { useRouter } from "next/router";

interface ProductDescriptionProps {
  description: String[];
  route:string
}

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,route
}) => {

  const isCoursePlan = route === "/plan"

  return (
    <SlideUpWhenVisible>
      <div className="my-48 flex flex-col gap-24">
        <hr className="border-[#959595]" />

        <div>
          {description.map((item, index) => (
            <p
              className={`text-3xl font-semibold tracking-tight ${isCoursePlan? "text-gray-800":"text-gray-200"}`}
              key={index}
            >
              {item}
            </p>
          ))}
        </div>

        <hr className="border-[#959595]" />
      </div>
    </SlideUpWhenVisible>
  );
};
