import { useEffect } from 'react';

export default function InstagramFeed() {
  useEffect(() => {
    const existingScript = document.getElementById('elfsight-platform');

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'elfsight-platform';
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border border-border-primary shadow-xs w-full max-w-[500px] mx-auto">
      <div
        className="elfsight-app-<!-- Elfsight Instagram Feed | Untitled Instagram Feed -->
<script src="https://elfsightcdn.com/platform.js" async></script>
<div class="elfsight-app-2645b28e-2f90-4933-8772-369ad9004da5" data-elfsight-app-lazy></div>"
        data-elfsight-app-lazy
      />
    </div>
  );
}
