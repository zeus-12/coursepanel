import { Switch, Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface HeroSectionTypes {
  route: string;
  title: string;
  description: string;
  displaySwitch: boolean;
}

const Hero: React.FC<HeroSectionTypes> = ({
  route,
  title,
  description,
  displaySwitch,
}) => {
  const router = useRouter();

  const isCourseplan = route === "/plan";

  const toggleCheck = (e: any) => {
    let checked = e.target.checked;
    router.push(checked ? "/plan" : "/map");
  };

  return (
    <div className="items-center  gap-4 lg:flex ">
      <div className="flex flex-1 flex-col">
        {displaySwitch && (
          <div className="mb-4 flex items-center gap-2">
            <p className="text-sm">For students</p>

            <Switch
              className="flex items-center"
              checked={isCourseplan}
              onChange={(e) => toggleCheck(e)}
              size="md"
            />
            <p className="text-sm">For institute</p>
          </div>
        )}

        <div className="lg:max-w-[40vw]">
          <p className="text-5xl font-semibold tracking-tighter lg:text-6xl">
            {title}
          </p>
          <p
            className={`mt-4 ${
              isCourseplan ? "text-gray-200" : "text-gray-600"
            }`}
          >
            {description}
          </p>

          <Link href="/">
            <Button className="mt-4" variant="outline">
              Get Started!
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex flex-1 justify-center">
        <Image
          src="/logo.png"
          alt="logo"
          width={100}
          height={100}
          className="h-auto w-full lg:max-w-[30vw]"
        />
      </div>
    </div>
  );
};
export default Hero;
