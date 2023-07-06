import { useState } from "react";
import "./App.scss";
import ArrowButton from "./components/arrrowButton/ArrowButton";
import Slider from "./components/swiper/Slider";
import TimeWheel from "./components/timeWheel/TimeWheel";
import Title from "./components/title/Title";
import { data } from "./types/Data.type";
import { ActiveIndexType } from "./types/ActiveIndex.type";

function App() {
  const [activeIndex, setActiveIndex] = useState<ActiveIndexType>({ index: 0, iteration: 0 });
  return (
    <div className="App">
      <div className="side"></div>
      <div className="center">
        <Title />
        <TimeWheel
          data={data}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <div className="control">
          <span>
            {activeIndex.index + 1} / {data.length}
          </span>
          <div className="buttons">
            <ArrowButton
              disabled={activeIndex.index === 0}
              clickHandler={() =>
                setActiveIndex(({index, iteration}) => {
                  if(index === 0) return {index, iteration};
                  return {
                    index: index - 1,
                    iteration: iteration + 1,
                  }
                })
              }
              direction="left"
              type="primary-button"
            />
            <ArrowButton
              disabled={activeIndex.index === data.length - 1}
              clickHandler={() =>
                setActiveIndex(({index, iteration}) => {
                  if(index === data.length -1) return {index, iteration};
                  return {
                    index: index + 1,
                    iteration: iteration - 1,
                  }
                })
              }
              direction="right"
              type="primary-button"
            />
          </div>
        </div>

        <Slider data={data[activeIndex.index].subData} activeIndex={activeIndex} />
      </div>
      <div className="side"></div>
    </div>
  );
}

export default App;
