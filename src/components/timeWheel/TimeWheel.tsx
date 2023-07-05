import { useEffect, useState } from "react";
import { DataType } from "../../types/Data.type";
import "./timeWheel.scss";
import React from "react";
import gsap from "gsap";

type TimeWheelPropsType = {
  data: DataType;
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

let iteration = 0;

function TimeWheel({ data, activeIndex, setActiveIndex }: TimeWheelPropsType) {
  const wheelStep = 360 / data.length;
  const wheelStart = 180;
  useEffect(() => {
    gsap.to(".time-wheel", {
      "--deg-step": wheelStep + "deg",
    });
  });

  useEffect(() => {
    gsap.to(".time-wheel", {
      "--shift-deg": iteration * wheelStep + wheelStart + "deg",
    });

    const allEl = document.getElementsByClassName("wheel-element");
    for (let i = 0; i < allEl.length; i++) {
      const el = allEl[i];
      el.classList.add("disabled");
    }

    const currentEl = document.getElementById(activeIndex.toString());
    currentEl?.classList.toggle("disabled");
    gsap.to("#end-year", {
      innerText: data[activeIndex].endYear,
      duration: 2,
      ease: "power3.inOut",
      snap: {
        innerText:1
      } 
    })
    gsap.to("#start-year", {
      innerText: data[activeIndex].startYear,
      duration: 2,
      ease: "power3.inOut",
      snap: {
        innerText:1
      } 
    })
  }, [activeIndex]);

  return (
    <div className="time-wheel">
      <div className="wheel-center">
        <span id="start-year"></span>
        <span id="end-year"></span>
      </div>
      {data.map((item, i) => (
        <div id={i.toString()} key={i} className="wheel-element disabled">
          <div className="content">
            <button
              onClick={() => setActiveIndex(prevActive => {
                iteration += prevActive - i ;
                return i
              })}
              key={i}
              className="index"
            >
              {i + 1}
            </button>
            <span className="header">{item.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TimeWheel;
