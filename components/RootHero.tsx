import SlideUpWhenVisible from "@hooks/SlideUpWhenVisible";
import { Button } from "@mantine/core";
import Image from "next/image";
import { stripExtension } from "../utils/helper";
import { CalendlyButton } from "./CalendlyButton";

interface RootHeroProps {}

const RootHero: React.FC<RootHeroProps> = ({}) => {
  return (
    <div className="bg-primary-colour py-16 pb-64  ">
      <SlideUpWhenVisible>
        <div className="flex flex-col items-center gap-6">
          <p className=" text-5xl font-bold">Plan. Learn. Grow</p>
          <p className="text-center text-gray-600 lg:max-w-[35vw] ">
            Coursepanel is the platform for educational institutes providing the
            right tools for driving effective learning programs
          </p>
          <CalendlyButton size="sm" />
          <p>TRUSTED BY</p>
          <div className="flex items-center gap-4">
            {[
              { imageSrc: "iit madras.png", url: "https://www.iitm.ac.in/" },
              { imageSrc: "nptel.png", url: "https://nptel.ac.in/" },
            ].map((item, i) => (
              <a href={item.url} key={i}>
                <Image
                  src={`/trustedby/${item.imageSrc}`}
                  width={100}
                  height={100}
                  className="h-8 w-auto"
                  alt={`${stripExtension(item.imageSrc)} logo}`}
                />
              </a>
            ))}
          </div>
        </div>
      </SlideUpWhenVisible>
    </div>
  );
};
export default RootHero;
