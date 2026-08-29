import { useEffect } from 'react';
import { Lang } from '../types';
import { TRANSLATIONS } from '../data';
import InstagramFeed from './InstagramFeed';

declare global {
  interface Window {
    FB?: any;
  }
}

interface FacebookFeedProps {
  lang: Lang;
}

export default function FacebookFeed({ lang }: FacebookFeedProps) {
  const t = (key: string) => TRANSLATIONS[key]?.[lang] || key;

  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
      return;
    }

    if (!document.getElementById('fb-root')) {
      const fbRoot = document.createElement('div');
      fbRoot.id = 'fb-root';
      document.body.prepend(fbRoot);
    }

    if (!document.getElementById('facebook-jssdk')) {
      const script = document.createElement('script');
      script.id = 'facebook-jssdk';
      script.async = true;
      script.defer = true;
      script.crossOrigin = 'anonymous';
      script.src = 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0';
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="facebook-feed" className="bg-bg-primary py-20 sm:py-28">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

      <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-text-primary mb-8">
        {t('facebook_feed_title')}
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 justify-center items-start">

        {/* Facebook */}
        <div className="w-full lg:w-1/2 flex justify-center overflow-hidden rounded-2xl border border-border-primary shadow-xs">
          <div
            className="fb-page"
            data-href="https://www.facebook.com/SVSPBELGAUM/"
            data-tabs="timeline"
            data-width="500"
            data-height="480"
            data-small-header="true"
            data-adapt-container-width="true"
            data-hide-cover="true"
            data-show-facepile="false"
          >
            <blockquote
              cite="https://www.facebook.com/SVSPBELGAUM/"
              className="fb-xfbml-parse-ignore"
            >
              <a href="https://www.facebook.com/SVSPBELGAUM/">
                Swami Vivekanand Seva Pratishthan
              </a>
            </blockquote>
          </div>
        </div>

        {/* Instagram */}
        <div className="w-full lg:w-1/2">
          <InstagramFeed />
        </div>

      </div>

    </div>
  </section>
);
            
      </div>
    </section>
  );
}
