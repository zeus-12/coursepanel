import { Switch, Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface HeroSectionTypes {
  route: string;
}

const Hero: React.FC<HeroSectionTypes> = ({ route }) => {
  const router = useRouter();

  const title =
    route === "/faculty"
      ? "Need help building curriculums?"
      : "Want to plan better curricula?";
  const description =
    route === "/faculty" ? "We are here to help!" : "Presenting Courseplan!";
  const toggleCheck = (e: any) => {
    let checked = e.target.checked;
    router.push(checked ? "/faculty" : "/");
  };

  return (
    <div className="lg:px-18 items-center gap-4 px-4 py-16 sm:px-16 md:px-32 lg:flex xl:px-32">
      <div className="flex flex-1 flex-col">
        <div className="mb-4 flex items-center gap-2">
          <p className="text-sm">For students</p>
          <Switch
            className="flex items-center"
            checked={route === "/faculty"}
            onChange={(e) => toggleCheck(e)}
            size="xl"
          />
          <p className="text-sm">For faculty</p>
        </div>

        <div className="lg:max-w-[30vw]">
          <p className="text-7xl font-semibold tracking-tighter">{title}</p>
          <p
            className={`mt-4 ${
              route === "/faculty" ? "text-gray-200" : "text-gray-600"
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
