import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css/bundle";
import styles from "../styles/Carrousel.module.css";
import type { Game } from "../App.tsx";

interface CarrouselProps {
  containerGames: Game[];
  nb_max: number; //limit the number of displayed games
}

function Carrousel({ containerGames, nb_max }: CarrouselProps) {
  const new_containerGames = containerGames.slice(0, nb_max); //select from index 0 to index nb_max

  return (
    <section className={styles.tendance_section}>
      <h2 className={styles.h2Title}>
        Classement des jeux tendances du moment
      </h2>
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
      >
        {new_containerGames.map((game) => (
          <div>
            <SwiperSlide className={styles.slide}>
              <img
                className={styles.swiper}
                src={game.image}
                alt={`${game.title}.png`}
                onError={(evt) => {
                  evt.currentTarget.src = "/missingImg.png"; //if img not avalaible, use this instead
                }}
              />

              <div>
                <p>{game.title}</p>
                <p>{game.genre}</p>
                <p>{game.price}€</p>
              </div>
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
    </section>
  );
}

export default Carrousel;
