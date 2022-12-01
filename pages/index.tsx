import { YoutubeEmbed } from "@components/YoutubeEmbed";
import { Features } from "@components/Features";
import { Footer } from "@components/Footer";
import { Solutions } from "@components/Solutions";
import { RootHero } from "@components/RootHero";

export default function Home() {
  return (
    <div>
      <RootHero />
      <YoutubeEmbed />

      <Solutions />

      <Features />
    </div>
  );
}
