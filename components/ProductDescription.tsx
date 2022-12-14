import SlideUpWhenVisible from "@hooks/SlideUpWhenVisible";

interface ProductDescriptionProps {
  description: String[];
}

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => {
  return (
    <SlideUpWhenVisible>
      <div className="my-48 flex flex-col gap-24">
        <hr className="border-[#959595]" />

        <div>
          {description.map((item, index) => (
            <p
              className="text-3xl font-semibold tracking-tight text-gray-600"
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
