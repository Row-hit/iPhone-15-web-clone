import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { rightImg, watchImg } from "../utils";
import VideoCarousel from "./VideoCarousel";
import { animateWithGsap } from "../utils/Animation";

const Highlight = () => {
  useGSAP(() => {
    animateWithGsap("#title", { opacity: 1, y: 0 });
    animateWithGsap(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.5,
    });
  }, []);
  return (
    <section
      id="#highlight"
      className="w-screen overflow-hidden h-full bg-zinc-900 common-padding"
    >
      <div className="screen-max-width">
        <div className="w-full mb-12 md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights
          </h1>
          <div className="flex flex-wrap items-end  gap-5">
            <p className="link">
              watch the film <img src={watchImg} alt="watch" className="ml-2" />
            </p>
            <p className="link">
              watch the event
              <img src={rightImg} alt="right" className="ml-2" />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlight;
