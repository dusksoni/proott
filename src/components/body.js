import React from 'react'
import Multislider from './multislider'
import SliderComponent from './slider'

function Body({sidebar}) {
    
  return (
    <div className="md:w-[90%] w-full z-10 md:px-10 bg-black gap-5 md:mb-0 mb-10">
    <SliderComponent sidebar={sidebar} />
    <div className="flex flex-col">
      <label className="text-xl text-white font-bold text-left ml-4">
        Recommended for you
      </label>

      <Multislider images={recomendedImages} />
    </div>
    <div className="flex flex-col">
      <label className="text-xl text-white font-bold text-left ml-4">
        Animated Adventures
      </label>

      <Multislider images={animatgedImages} />
    </div>
    <div className="flex flex-col">
      <label className="text-xl text-white font-bold text-left ml-4">
        Popular Shows
      </label>

      <Multislider images={popularImages}/>
    </div>
    <div className="flex flex-col">
      <label className="text-xl text-white font-bold text-left ml-4">
        New & Upcoming
      </label>

      <Multislider images={upcomingImages} />
    </div>
  </div>
  )
}

export default Body

const recomendedImages = [
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5100/675100-h", title: "Thor" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4857/674857-h", title: "Caption America" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4629/674629-h", title: "Gardians" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5061/675061-h", title: "Avengers" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1143/1011143-h-c92ecc9d0ace", title: "Loki" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/4294/674294-h", title: "Iron Man 3" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/3257/1770003257/1770003257-h", title: "Deadpool" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8869/1078869-h-36f793f743d9", title: "Home Alone" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3727/673727-h", title: "Phineas&ferb" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/45/1490045-h-1ce3f53b8c6c", title: "Vikram Vedha" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4629/674629-h", title: "" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},

  ];
const animatgedImages = [
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/5332/1145332-h-077003d452f0", title: "Duck Tails" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/3422/753422-v", title: "Doraemon" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3555/753555-h", title: "Shinchain" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7204/1467204-h-c4ca5564be8d", title: "Yoda" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/6606/1316606-h-ffe28d81d7fa", title: "Simpsons" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4372/1124372-h-04b0f9e40986", title: "Turning red" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3727/673727-h", title: "Phineas&ferb" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5061/675061-h", title: "Avengers" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/5100/675100-h", title: "Thor" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/9692/1489692-h-684aa703010c", title: "Pop Kaun" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
  ];
const popularImages = [
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/MOVIE/3257/1770003257/1770003257-h", title: "Deadpool" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/8869/1078869-h-36f793f743d9", title: "Home Alone" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3727/673727-h", title: "Phineas&ferb" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/45/1490045-h-1ce3f53b8c6c", title: "Vikram Vedha" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7444/1487444-h-275e451c6014", title: "GasLight" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1917/1481917-h-046550a16f35", title: "Run Baby Run" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/5332/1145332-h-077003d452f0", title: "Duck Tails" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/3422/753422-v", title: "Doraemon" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3555/753555-h", title: "Shinchain" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7204/1467204-h-c4ca5564be8d", title: "Yoda" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
   
  ];
const upcomingImages = [
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3727/673727-h", title: "Phineas&ferb" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/45/1490045-h-1ce3f53b8c6c", title: "Vikram Vedha" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/9692/1489692-h-684aa703010c", title: "Pop Kaun" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7444/1487444-h-275e451c6014", title: "Gaslight" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/1917/1481917-h-046550a16f35", title: "Run Baby Run" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/5332/1145332-h-077003d452f0", title: "Duck Tails" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/3422/753422-v", title: "Doraemon" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3555/753555-h", title: "Shinchain" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7204/1467204-h-c4ca5564be8d", title: "Yoda" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},
    { image: "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_1_5x/sources/r1/cms/prod/4294/674294-h", title: "Iron Man 3" , description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum, architecto."},

  ];