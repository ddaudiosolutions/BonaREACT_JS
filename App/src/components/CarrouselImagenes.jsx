import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselImagenes = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src="assets/img/carroussel/Bennasar-800x406.png" alt="Imagen 1" />
      </div>
      <div>
        <img src="assets/img/carroussel/Manubens-800x406.png" alt="Imagen 2" />
      </div>
      <div>
        <img src="assets/img/carroussel/Pantalla-800x406.png" alt="Imagen 3" />
      </div>
      {/* Agrega más imágenes según sea necesario */}
    </Slider>
  );
};

export default CarouselImagenes;
