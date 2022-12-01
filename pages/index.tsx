import YoutubeEmbed from "@components/YoutubeEmbed";
import Features from "@components/Features";
import Solutions from "@components/Solutions";
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
        <Solutions />
      </SlideUpWhenVisible>

      <SlideUpWhenVisible>
        <Features />
      </SlideUpWhenVisible>
    </div>
  );
}
