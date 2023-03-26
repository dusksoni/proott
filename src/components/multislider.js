import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../assets/css/multislider.css";
import { GrNext, GrPrevious } from "react-icons/gr";

function Multislider({images}) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      paritialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      paritialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      paritialVisibilityGutter: 30,
    },
  };
  
  return (
    <div className=" ">
      <Carousel
        ssr
        partialVisbile
        responsive={responsive}
        itemClass="image-item"
      >
        {images.slice(0, 10).map((item) => {
          return (
            <div className="relative ">
              <div className="absolute inset-0 z-10 bg-gray-500 text-center md:flex hidden flex-col items-center justify-around opacity-0 hover:opacity-90 text-opacity-30 bg-opacity-90 duration-300">
                <h1 className="tracking-wider ">{item.title}</h1>
                <p className="mx-auto  md:text-xs text-xs">
                  {item.description}
                </p>
              </div>
              <div className="relative ">
                <div className="  flex flex-wrap content-center">
                  <img src={item.image} className="mx-auto " alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

// const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
//   const { carouselState: { currentSlide } } = rest;
//   return (
//     <div className="carousel-button-group">
//       <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}>
//       <GrPrevious className="lg:text-xl sm:text-base text-sm" />
//       </button>
//       <button onClick={() => next()} >
//         <GrNext className="lg:text-xl sm:text-base text-sm" />
//       </button>

//     </div>
//   );
// };
export default Multislider;
