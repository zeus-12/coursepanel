import { useRouter } from "next/router";
import Hero from "@components/Hero";

export default function Faculty() {
  const router = useRouter();
  const { route } = router;

  return (
    <div className="bg-black text-white">
      <Hero route={route} />
    </div>
  );
}
