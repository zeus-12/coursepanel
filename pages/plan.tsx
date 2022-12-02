import { useRouter } from "next/router";
import Hero from "@components/Hero";

export default function Institute() {
  const router = useRouter();
  const { route } = router;

  return (
    <div className="lg:px-18 bg-[#FDF5F5] px-4 pt-16 sm:px-16 md:px-32 xl:px-32">
      <div className="min-h-screen">
        <Hero
          route={route}
          title={"Need help building curriculums?"}
          description="Presenting Courseplan!"
        />
      </div>
    </div>
  );
}
