import { useEffect } from "react";

export default function InstagramFeed() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://elfsightcdn.com/platform.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = "https://elfsightcdn.com/platform.js";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-border-primary shadow-xs">
      <div
        className="elfsight-app-2645b28e-2f90-4933-8772-369ad9004da5"
        data-elfsight-app-lazy
      />
    </div>
  );
}
