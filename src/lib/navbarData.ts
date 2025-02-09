// src/lib/navbarData.ts

export type LogoProps = {
  text: string;
};

export type NavLink = {
  url: string;
  title: string;
  subMenuLinks?: NavLink[];
};

export type ButtonProps = {
  title: string;
  size?: "sm" | "lg";
};

export type NavbarProps = {
  logo: LogoProps;
  navLinks: NavLink[];
  buttons: ButtonProps[];
};

export const NavbarDefaults: NavbarProps = {
  logo: { text: "Logo" },
  navLinks: [
    { title: "Link One", url: "#" },
    { title: "Link Two", url: "#" },
    { title: "Link Three", url: "#" },
    {
      title: "Link Four",
      url: "#",
      subMenuLinks: [
        { title: "Link Five", url: "#" },
        { title: "Link Six", url: "#" },
        { title: "Link Seven", url: "#" },
      ],
    },
  ],
  buttons: [
    {
      title: "Button",
      size: "sm",
    },
  ],
};
