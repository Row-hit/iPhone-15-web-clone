import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ModelView from "./ModelView";
import { yellowImg } from "../utils";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "../constant";
import { animateWithGsap, animationWithGsapTimeline } from "../utils/Animation";

const Model = () => {
  const [size, setSize] = useState("small");

  const [model, setModel] = useState({
    title: "iPhone 15 pro in Natural Titanium",
    color: ["#8F8A81", "#FFE7B9", "#6F6C64"],
    img: yellowImg,
  });

  // camera control for the model view
  const cameraControllSmall = useRef();
  const cameraControllLarge = useRef();

  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();
  useEffect(() => {
    if (size === "large") {
      animationWithGsapTimeline(
        tl,
        small,
        smallRotation,
        "#phone1",
        "#phone2",
        {
          transform: "translateX(-100%)",
          duration: 2,
        }
      );
    }
    if (size === "small") {
      animationWithGsapTimeline(
        tl,
        large,
        largeRotation,
        "#phone2",
        "#phone1",
        {
          transform: "translateX(0)",
          duration: 2,
        }
      );
    }
  }, [size]);

  useGSAP(() => {
    animateWithGsap("#heading", {
      y: 0,
      opacity: 1,
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look
        </h1>
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={small}
              gsapType="phone1"
              controlRef={cameraControllSmall}
              setRotatioState={setSmallRotation}
              item={model}
              size={size}
            />
            <ModelView
              index={2}
              groupRef={large}
              gsapType="phone2"
              controlRef={cameraControllLarge}
              setRotatioState={setLargeRotation}
              item={model}
              size={size}
            />
            <Canvas
              className="w-full h-full "
              style={{
                position: "Fixed",
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root")}
            >
              <View.Port />
            </Canvas>
          </div>
          <div className="mx-auto w-full">
            <p className="text-sm text-center font-light mb-5">{model.title}</p>
            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => {
                  return (
                    <li
                      key={i}
                      className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                      style={{ backgroundColor: item.color[0] }}
                      onClick={() => setModel(item)}
                    ></li>
                  );
                })}
              </ul>
              <button className="size-btn-container">
                {sizes.map(({ label, value }) => {
                  return (
                    <span
                      key={label}
                      className="size-btn"
                      style={{
                        backgroundColor:
                          size === value ? "white" : "transparent",
                        color: size === value ? "black" : "white",
                      }}
                      onClick={() => setSize(value)}
                    >
                      {label}{" "}
                    </span>
                  );
                })}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
