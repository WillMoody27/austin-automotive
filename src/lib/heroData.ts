import autoHero from "/public/images/auto-hero.png";

export type ImageProps = {
  src: string;
  alt?: string;
};

export type HeroProps = {
  heading: string;
  description: string;
  image: ImageProps;
};

export const heroContent: HeroProps = {
  heading: "Medium length hero heading goes here",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
  image: {
    src: autoHero.src,
    alt: "Relume placeholder image",
  },
};
