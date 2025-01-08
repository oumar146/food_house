import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../styles/diaporama.css';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

const Diaporama = () => {
  return (
    <Swiper
      spaceBetween={30}
      effect={'fade'}

      autoplay={{
        delay: 3000, // Durée entre chaque transition (en ms)
        disableOnInteraction: false, // L'auto-play continue même après une interaction de l'utilisateur
      }}
      speed={2000} // Durée de la transition entre les images (en ms)
      loop={true} // Permet de faire tourner le diaporama en boucle
      modules={[EffectFade, Navigation, Pagination, Autoplay]} // Ajout du module Autoplay
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="https://pizzeria-vendeuvre.fr/wp-content/uploads/2022/04/header-pizzas.jpg" className='item' />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://pizzeria-vendeuvre.fr/wp-content/uploads/2022/04/PJ2202-0099-Lucasson-Frederic-header-boutique.jpg" className='item' />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://zoneboreale.com/app/uploads/2024/10/fromagerie-st-laurent.jpg" className='item' />
      </SwiperSlide>
    </Swiper>
  );
};

export default Diaporama;
