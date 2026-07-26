type Logo = {
  src: string;
  alt: string;
};

type LogoCloudProps = {
  logos: Logo[];
};

export function LogoCloud({ logos }: LogoCloudProps) {
  return (
    <div className="overflow-hidden relative w-full py-8">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center mx-10"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-20 md:h-24 w-auto object-contain hover:scale-110 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}