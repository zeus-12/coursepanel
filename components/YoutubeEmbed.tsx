import YouTube, { YouTubeProps } from "react-youtube";

interface YoutubeEmbedProps {}

const YoutubeEmbed: React.FC<YoutubeEmbedProps> = ({}) => {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    height: "390",
    width: "640",

    playerVars: {
      autoplay: 0,
    },
  };
  return (
    <div className="relative mb-48 flex flex-col items-center bg-primary-colour">
      <div className="absolute -top-[12rem] z-20 ">
        <YouTube
          iframeClassName="rounded-md aspect-video h-96  max-w-[90vw]"
          videoId="yDWQ6jR-m4M"
          opts={opts}
          onReady={onPlayerReady}
        />
      </div>
    </div>
  );
};

export default YoutubeEmbed;
