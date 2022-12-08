import YoutubeEmbed from "@components/YoutubeEmbed";
import Features from "@components/FeaturesRoot";
import SolutionsRoot from "@components/SolutionsRoot";
import RootHero from "@components/RootHero";
import SlideUpWhenVisible from "@hooks/SlideUpWhenVisible";

export default function Home() {
  return (
    <div>
      <SlideUpWhenVisible>
        <RootHero />
      </SlideUpWhenVisible>

      <YoutubeEmbed />

      <SlideUpWhenVisible>
        <SolutionsRoot />
      </SlideUpWhenVisible>

      <SlideUpWhenVisible>
        <Features />
      </SlideUpWhenVisible>
    </div>
  );
}
