import { Switch, Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { CalendlyButton } from "./CalendlyButton";

interface HeroSectionTypes {
  route: string;
  title: string;
  description: string;
  imageSrc: string;
}

const Hero: React.FC<HeroSectionTypes> = ({
  route,
  title,
  description,
  imageSrc,
}) => {
  const router = useRouter();

  const isCourseplan = route === "/plan";

  const toggleCheck = (e: any) => {
    let checked = e.target.checked;
    router.push(checked ? "/plan" : "/map");
  };

  return (
    <div className="flex flex-col items-center gap-4 lg:flex-row ">
      <div className="flex flex-1 flex-col space-y-4">
        <div className="flex items-center gap-2">
          <p className="text-sm">For students</p>

          <Switch
            classNames={
              !isCourseplan
                ? {
                    thumb: "bg-white",
                    track: "bg-gray-500",
                  }
                : {}
            }
            className="flex items-center"
            checked={isCourseplan}
            onChange={(e) => toggleCheck(e)}
            size="md"
          />
          <p className="text-sm">For institute</p>
        </div>

        <div className="flex flex-col gap-2 lg:max-w-[40vw]">
          <p
            className={`text-5xl font-semibold tracking-tighter ${
              !isCourseplan && "text-white"
            } lg:text-6xl`}
          >
            {title}
          </p>
          <p
            className={`mt-4 ${
              !isCourseplan ? "text-[#A8A8A8]" : "text-gray-600"
            } lg:max-w-[30vw]`}
          >
            {description}
          </p>

          <CalendlyButton />
        </div>
      </div>

      <div className="flex flex-1 justify-center">
        <Image
          src={imageSrc}
          alt="logo"
          width={800}
          height={800}
          className="h-auto w-full rounded-md lg:max-w-[40vw]"
        />
      </div>
    </div>
  );
};
export default Hero;
