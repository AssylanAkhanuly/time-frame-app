import { useState } from "react";
import "./App.scss";
import ArrowButton from "./components/arrrowButton/ArrowButton";
import Slider from "./components/swiper/Slider";
import TimeWheel from "./components/timeWheel/TimeWheel";
import Title from "./components/title/Title";
import { data } from "./types/Data.type";
function App() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  return (
    <div className="App">
      <div className="side"></div>
      <div className="center">
        <Title />
        <TimeWheel data={data} activeIndex={activeIndex} />
        <div className="control">
          <span>{activeIndex + 1} / {data.length}</span>
          <div className="buttons">
            <ArrowButton
              disabled={false}
              clickHandler={() => console.log("Prev")}
              direction="left"
              type="primary-button"
            />
            <ArrowButton
              disabled={false}
              clickHandler={() => console.log("Next")}
              direction="right"
              type="primary-button"
            />
          </div>
        </div>

        <Slider data={data[activeIndex].subData} activeIndex={activeIndex}/>
      </div>
      <div className="side"></div>
    </div>
  );
}

export default App;
