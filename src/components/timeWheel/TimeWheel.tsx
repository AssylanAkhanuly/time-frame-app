import { useEffect } from "react";
import { DataType } from "../../types/Data.type";
import "./timeWheel.scss";

type TimeWheelPropsType = {
  data: DataType;
  activeIndex: number;
};
function TimeWheel({ data, activeIndex }: TimeWheelPropsType) {
  const wheelStep = 360 / data.length;
  const wheelStart = 45;

  
  useEffect(() => {
    console.log(wheelStep);
  }, []);

  return (
    <div className="time-wheel">
      <div className="wheel-center">
        <span>{data[activeIndex].startYear}</span>
        <span>{data[activeIndex].endYear}</span>
      </div>
      {data.map((item, i) => (
        <div key={i} className="wheel-element">
          <span>{i}</span>
          <span className="header">{item.name}</span>
        </div>
      ))}
    </div>
  );
}

export default TimeWheel;
