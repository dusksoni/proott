import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/slider.css";

function SliderComponent({ sidebar }) {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  
  return (
    
      <Slider {...settings}>
        {/* <div className="carrousel-container">
        <div className="carousel"> */}
        <div className="slider">
          <div className="slide-content lg:block hidden">
            <h1 className="movie-title">THOR</h1>
            <p className="movie-des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              impedit rem, dolorum eaque earum ducimus aspernatur aut deserunt
              eligendi cumque minus labore. Minima autem in dolor, tenetur aut
              minus porro?
            </p>
          </div>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5100/675100-h"
            alt=""
            className="lg:w-3/5 w-full"
          />
        </div>
        <div className="slider">
          <div className="slide-content lg:block hidden">
            <h1 className="movie-title">Caption America</h1>
            <p className="movie-des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              impedit rem, dolorum eaque earum ducimus aspernatur aut deserunt
              eligendi cumque minus labore. Minima autem in dolor, tenetur aut
              minus porro?
            </p>
          </div>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4857/674857-h"
            alt=""
            className="lg:w-3/5 w-full"
          />
        </div>
        <div className="slider">
          <div className="slide-content lg:block hidden">
            <h1 className="movie-title">Guardians Of The Galaxy Vol. 2</h1>
            <p className="movie-des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              impedit rem, dolorum eaque earum ducimus aspernatur aut deserunt
              eligendi cumque minus labore. Minima autem in dolor, tenetur aut
              minus porro?
            </p>
          </div>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4629/674629-h"
            alt=""
            className="lg:w-3/5 w-full"
          />
        </div>
        <div className="slider">
          <div className="slide-content lg:block hidden">
            <h1 className="movie-title">AVERGERS</h1>
            <p className="movie-des">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              impedit rem, dolorum eaque earum ducimus aspernatur aut deserunt
              eligendi cumque minus labore. Minima autem in dolor, tenetur aut
              minus porro?
            </p>
          </div>
          <img
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5061/675061-h"
            alt=""
            className="lg:w-3/5 w-full"
          />
        </div>

       
      </Slider>
     

  );
}

export default SliderComponent;
