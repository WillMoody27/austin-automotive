"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { NavbarProps } from "@/lib/navbarData";
import SubMenu from "./../component/SubMenu";
import "@/styles/Navbar.css";

const Navbar = ({ logo, navLinks, buttons }: NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Using simple window width checking for mobile responsiveness
  const isMobile = typeof window !== "undefined" && window.innerWidth <= 991;

  return (
    <section
      id="navbar"
      className="fixed bg-white top-0 left-0 w-full z-10 flex items-center border-b border-border-primary bg-background-primary lg:min-h-18 lg:px-[5%]"
    >
      <div className="mx-auto size-full lg:grid lg:grid-cols-[0.375fr_1fr_0.375fr] lg:items-center lg:justify-between lg:gap-4">
        <div className="flex min-h-16 items-center justify-between px-[5%] md:min-h-18 lg:min-h-full lg:px-0">
          <a href={"#"}>
            <h1>{logo?.text}</h1>
          </a>
          <div className="flex items-center gap-4 lg:hidden">
            <button
              className={`toggle-button ${isMobileMenuOpen ? "active" : ""}`}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              <span
                className={`toggle-bar ${isMobileMenuOpen ? "active" : ""}`}
              />
              <span
                className={`toggle-bar ${isMobileMenuOpen ? "active" : ""}`}
              />
              <span
                className={`toggle-bar ${isMobileMenuOpen ? "active" : ""}`}
              />
            </button>
          </div>
        </div>
        <motion.div
          variants={{
            open: {
              height: "var(--height-open, 100dvh)",
            },
            close: {
              height: "var(--height-closed, 0)",
            },
          }}
          animate={isMobileMenuOpen ? "open" : "close"}
          initial="close"
          exit="close"
          transition={{ duration: 0.4 }}
          className="overflow-hidden px-[5%] text-center lg:flex lg:items-center lg:justify-center lg:px-0 lg:[--height-closed:auto] lg:[--height-open:auto]"
        >
          {navLinks?.map((navLink, index) =>
            navLink.subMenuLinks && navLink.subMenuLinks.length > 0 ? (
              <SubMenu key={index} navLink={navLink} isMobile={isMobile} />
            ) : (
              <a
                key={index}
                href={navLink.url}
                className="block py-3 text-md first:pt-7 lg:px-4 lg:py-2 lg:text-base first:lg:pt-2"
              >
                {navLink.title}
              </a>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Navbar;
