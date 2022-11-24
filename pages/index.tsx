import { useRouter } from "next/router";
import Hero from "@components/Hero";

export default function Home() {
  const router = useRouter();
  const { route } = router;

  return (
    <div>
      <Hero route={route} />
    </div>
  );
}
