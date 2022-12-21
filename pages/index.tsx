import YoutubeEmbed from "@components/YoutubeEmbed";
import FeaturesRoot from "@components/FeaturesRoot";
import SolutionsRoot from "@components/SolutionsRoot";
import RootHero from "@components/RootHero";
import Navbar from "@components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar backgroundColour="#D1F4FF" />
      <RootHero />

      <YoutubeEmbed />

      <SolutionsRoot />

      <FeaturesRoot />
    </>
  );
}
