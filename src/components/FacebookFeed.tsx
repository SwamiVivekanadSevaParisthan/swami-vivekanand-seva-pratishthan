import { useEffect } from 'react';
import { Lang } from '../types';
import { TRANSLATIONS } from '../data';

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
    <section id="facebook-feed" className="relative py-20 sm:py-28 bg-bg-primary overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-gradient-to-b from-orange-50/70 via-transparent to-transparent dark:from-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[36rem] rounded-full bg-orange-200/30 blur-3xl dark:bg-orange-500/10" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-orange-600 dark:text-orange-400 mb-3">
          {t('facebook_feed_tagline')}
        </span>
        <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-text-primary mb-3">
          {t('facebook_feed_title')}
        </h2>
        <p className="text-sm sm:text-base text-text-secondary max-w-xl mx-auto mb-12">
          {t('facebook_feed_desc')}
        </p>

        <div className="flex justify-center">
          <div className="w-full max-w-[500px] flex justify-center overflow-hidden rounded-2xl border border-border-primary bg-bg-secondary dark:bg-bg-secondary/60 dark:backdrop-blur-sm shadow-lg shadow-black/5 dark:shadow-black/30 ring-1 ring-black/5 dark:ring-white/5 transition-shadow hover:shadow-xl">
            <div
              className="fb-page w-full"
              data-href="https://www.facebook.com/SVSPBELGAUM/"
              data-tabs="timeline"
              data-width="500"
              data-height="480"
              data-small-header="true"
              data-adapt-container-width="true"
              data-hide-cover="true"
              data-show-facepile="false"
            >
              <blockquote cite="https://www.facebook.com/SVSPBELGAUM/" className="fb-xfbml-parse-ignore">
                <a href="https://www.facebook.com/SVSPBELGAUM/">Swami Vivekanand Seva Pratishthan</a>
              </blockquote>
            </div>
          </div>
        </div>

        <MastodonFeed lang={lang} />
      </div>
    </section>
  );
}

// Mastodon profile timeline
function MastodonFeed({ lang }: { lang: Lang }) {
  const t = (key: string) => TRANSLATIONS[key]?.[lang] || key;

  useEffect(() => {
    let cancelled = false;

    const loadMastodon = async () => {
      // Load CSS
      if (!document.getElementById('mastodon-timeline-css')) {
        const link = document.createElement('link');
        link.id = 'mastodon-timeline-css';
        link.rel = 'stylesheet';
        link.href =
          'https://cdn.jsdelivr.net/npm/@idotj/mastodon-embed-timeline@4.8.2/dist/mastodon-timeline.min.css';
        document.head.appendChild(link);
      }

      // Load JavaScript
      if (!document.getElementById('mastodon-timeline-js')) {
        const script = document.createElement('script');
        script.id = 'mastodon-timeline-js';
        script.src =
          'https://cdn.jsdelivr.net/npm/@idotj/mastodon-embed-timeline@4.8.2/dist/mastodon-timeline.umd.js';
        script.async = true;
        document.body.appendChild(script);

        await new Promise<void>((resolve) => {
          script.onload = () => resolve();
        });
      }

      if (cancelled) return;

      try {
        // Get your Mastodon account ID
        const response = await fetch('https://mastodon.social/api/v1/accounts/lookup?acct=svsp');
        const account = await response.json();

        if (cancelled) return;

        // Initialize the timeline
        const MastodonTimeline = (window as any).MastodonTimeline;

        if (MastodonTimeline) {
          new MastodonTimeline.Init({
            instanceUrl: 'https://mastodon.social',
            timelineType: 'profile',
            userId: account.id,
            profileName: '@svsp@mastodon.social',
            defaultTheme: 'auto',
            maxNbPostFetch: '40',
            maxNbPostShow: '10',
            hideUnlisted: true,
            hideReplies: true,
            hideReblog: true,
            hidePinnedPosts: true,
          });
        }
      } catch (err) {
        console.error('Failed to load Mastodon timeline', err);
      }
    };

    loadMastodon();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="mt-12 w-full">
      <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight text-text-primary mb-6">
        {t('mastodon_feed_title')}
      </h3>

      <div id="mt-container" className="mt-container w-full max-w-[500px] mx-auto">
        <div className="mt-body" role="feed">
          <div className="mt-loading-spinner"></div>
        </div>
      </div>
    </div>
  );
}
