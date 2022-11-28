import { useRouter } from "next/router";
import Hero from "@components/Hero";

export default function Institute() {
  const router = useRouter();
  const { route } = router;

  return (
    <div className="lg:px-18 px-4 py-16 sm:px-16 md:px-32 xl:px-32 ">
      <Hero
        route={route}
        title={"Want to plan better curricula?"}
        displaySwitch={true}
        description="We are here to help!"
      />
    </div>
  );
}
