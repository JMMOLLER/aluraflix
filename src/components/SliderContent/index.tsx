import "./slider.css";
import Card from "../Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface SliderProps {
  payload: Movie[];
  title: string;
}

export default function index({ title, payload }: SliderProps) {
  return (
    <div className="slider-row" id={title.replace(/ /g, "")}>
      <h2>{title}</h2>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={"auto"}
        navigation={true}
        rewind={true}
      >
        {[...payload].sort(() => Math.random() - 0.5).map((item, index) => (
          <SwiperSlide key={index}>
            <Card img={item.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
