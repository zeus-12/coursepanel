import { Switch, Button } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

interface HeroSectionTypes {
  route: string;
}

const Hero: React.FC<HeroSectionTypes> = ({ route }) => {
  const router = useRouter();

  const toggleCheck = (e: any) => {
    let checked = e.target.checked;
    router.push(checked ? "/faculty" : "/");
  };

  return (
    <div className="lg:px-18 gap-4 px-4 pt-16 sm:px-16 md:px-32 lg:flex xl:px-32">
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
          <p className="text-5xl font-semibold tracking-tighter">
            Drag and drop your courses to create stuff
          </p>
          <p className="mt-4 text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit error quos sunt earum ab iste sed, corrupti
            doloremque, placeat perferendis repudiandae cum voluptate quidem
            nulla dolor optio maiores blanditiis laboriosam?
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
          width={50}
          height={50}
          className="h-auto w-full lg:max-w-[30vw]"
        />
      </div>
    </div>
  );
};
export default Hero;
