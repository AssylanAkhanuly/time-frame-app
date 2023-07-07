import "swiper/components/pagination/pagination.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import { useState } from "react";
import SwiperCore, { Pagination } from "swiper";

import { ActiveIndexType } from "../../types/ActiveIndex.type";
import { SubDataType } from "../../types/Data.type";
import ArrowButton from "../arrrowButton/ArrowButton";
import "./slider.scss";

type SliderPropsType = {
  data: SubDataType[];
  activeIndex: ActiveIndexType;
  isMobile: boolean,
};
const Slider = ({ data, activeIndex, isMobile }: SliderPropsType) => {
  SwiperCore.use([Pagination]);

  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  return (
    <div className="slider">
      <Swiper
        spaceBetween={16}
        slidesPerView={isMobile ? 1.5 : 3}
        onSwiper={(swiper) => {
        setSwiper(swiper);
        }}
      >
        {data.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="slide">
              <span>{item.year}</span>
              <p>{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="controllers">
        <ArrowButton
          disabled={false}
          clickHandler={() => swiper?.slidePrev()}
          type="secondary-button"
          direction="left"
        />
        <ArrowButton
          disabled={false}
          clickHandler={() => swiper?.slideNext()}
          type="secondary-button"
          direction="right"
        />
      </div>
    </div>
  );
};

export default Slider;
