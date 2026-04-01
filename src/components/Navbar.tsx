import { useEffect, useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { needsNativeScrollFallback } from "../utils/browser";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother | undefined;

const Navbar = () => {
  const nativeScrollRef = useRef(needsNativeScrollFallback());
  const nativeScroll = nativeScrollRef.current;

  useLayoutEffect(() => {
    if (!nativeScroll) return;
    document.documentElement.classList.add("js-native-scroll");
    return () => {
      document.documentElement.classList.remove("js-native-scroll");
    };
  }, [nativeScroll]);

  useEffect(() => {
    if (nativeScroll) {
      smoother = undefined;
      requestAnimationFrame(() => ScrollTrigger.refresh());
      return;
    }

    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    const links = document.querySelectorAll(".header ul a");
    const onNavClick = (e: Event) => {
      if (window.innerWidth > 1024) {
        e.preventDefault();
        const el = e.currentTarget as HTMLAnchorElement;
        const section = el.getAttribute("data-href");
        smoother?.scrollTo(section, true, "top top");
      }
    };
    links.forEach((elem) => {
      elem.addEventListener("click", onNavClick);
    });
    const onResize = () => {
      ScrollSmoother.refresh(true);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      links.forEach((elem) => {
        elem.removeEventListener("click", onNavClick);
      });
      smoother?.kill();
      smoother = undefined;
    };
  }, [nativeScroll]);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          HM
        </a>
        <a
          href="https://www.linkedin.com/in/hassanmahmood/"
          className="navbar-connect"
          data-cursor="disable"
          target="_blank"
          rel="noreferrer"
        >
          linkedin.com/in/hassanmahmood
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
