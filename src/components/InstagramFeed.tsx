declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void;
      };
    };
  }
}
import { useEffect, useRef } from "react";

interface InstagramFeedProps {
  postUrl: string;
}

export default function InstagramFeed({
  postUrl,
}: InstagramFeedProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://www.instagram.com/embed.js"]'
    );

    const processEmbed = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    if (existingScript) {
      processEmbed();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;

    script.onload = processEmbed;

    document.body.appendChild(script);
  }, [postUrl]);

  return (
    <div
      ref={containerRef}
      className="w-full flex justify-center overflow-hidden rounded-2xl"
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={postUrl}
        data-instgrm-version="14"
      />
    </div>
  );
}
