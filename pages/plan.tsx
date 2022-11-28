import { useRouter } from "next/router";
import Hero from "@components/Hero";

export default function Institute() {
  const router = useRouter();
  const { route } = router;

  return (
    <div className="lg:px-18 bg-black px-4 py-16 text-white sm:px-16 md:px-32 xl:px-32">
      <Hero
        route={route}
        title={"Need help building curriculums?"}
        description="Presenting Courseplan!"
        displaySwitch={true}
      />
    </div>
  );
}
