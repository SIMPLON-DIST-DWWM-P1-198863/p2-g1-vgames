import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/bundle";
import styles from "../Carrousel.module.css";

function Carrousel() {
  return (
    <>
      <Swiper
        className={styles.swiper}
        // install Swiper modules
        loop
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide className={styles.slide}>Slide 1</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 2</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 3</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 4</SwiperSlide>
        <SwiperSlide className={styles.slide}>Slide 5</SwiperSlide>
      </Swiper>
    </>
  );
}

export default Carrousel;
