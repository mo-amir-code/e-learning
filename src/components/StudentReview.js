import React from "react";
import Slider from "react-slick";
import review1 from "../media/review/1.jpg";
import review2 from "../media/review/2.jpg";
import review3 from "../media/review/3.jpg";
import review4 from "../media/review/4.jpg";
import review5 from "../media/review/5.jpg";
import review6 from "../media/review/6.jpg";
import review7 from "../media/review/7.jpg";
import review8 from "../media/review/8.jpg";
import review9 from "../media/review/9.jpg";
import review10 from "../media/review/10.jpg";
import review11 from "../media/review/11.jpg";
import review12 from "../media/review/12.jpg";
import review13 from "../media/review/13.jpg";
import review14 from "../media/review/14.jpg";
import review15 from "../media/review/15.jpg";
import review16 from "../media/review/16.jpg";
import review17 from "../media/review/17.jpg";
import review18 from "../media/review/18.jpg";
import review19 from "../media/review/19.jpg";
import review20 from "../media/review/20.jpg";
import review21 from "../media/review/21.jpg";
import review22 from "../media/review/22.jpg";
import review23 from "../media/review/23.jpg";
import review24 from "../media/review/24.jpg";
import review25 from "../media/review/25.jpg";
import review26 from "../media/review/26.jpg";
import review27 from "../media/review/27.jpg";
import review28 from "../media/review/28.jpg";
import review29 from "../media/review/29.jpg";
import review30 from "../media/review/30.jpg";
import review31 from "../media/review/31.jpg";
import review32 from "../media/review/32.jpg";

const StudentReview = () => {
  const reviews = [
    {
      link: review1,
    },
    {
      link: review2,
    },
    {
      link: review3,
    },
    {
      link: review4,
    },
    {
      link: review6,
    },
    {
      link: review7,
    },
    {
      link: review8,
    },
    {
      link: review9,
    },
    {
      link: review10,
    },
    {
      link: review11,
    },
    {
      link: review12,
    },
    {
      link: review14,
    },
    {
      link: review16,
    },
    {
      link: review17,
    },
    {
      link: review18,
    },
    {
      link: review19,
    },
    {
      link: review20,
    },
    {
      link: review21,
    },
    {
      link: review22,
    },
    {
      link: review23,
    },
    {
      link: review24,
    },
    {
      link: review25,
    },
    {
      link: review27,
    },
    {
      link: review28,
    },
    {
      link: review29,
    },
    {
      link: review30,
    },
    {
      link: review31,
    },
    {
      link: review32,
    },
  ];

  const slickSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    autoplay: true,
    slidesToShow: 1,
    prevArrow: previousArrow(),
    nextArrow: nextArrow()
  };
  return (
    <div className="my-16 bg-white">
      <div className="py-14 flex flex-col justify-center items-center">
      <h1 className=" text-4xl font-semibold max-sm:text-2xl max-sm:py-2 text-center w-10/12 py-3 rounded-3xl text-black border bg-white">
            PLACEMENTS
          </h1>
          <p className="text-base leading-relaxed text-center mt-8 mb-0 max-w-[60vw]" >Here are profile of our students some of them are non-technical background.</p>
      </div>
      <div className="overflow-hidden">
        <div className="mx-8">
          <Slider {...slickSettings}>
            {reviews.map((review, index) => {
              return <img key={index} src={review.link} alt="" />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export function previousArrow(){
    
    return <svg fill="#000000" height="40px" width="40px" version="1.1" id="Layer_1"
    viewBox="0 0 512 512">
<g>
   <g>
       <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M313.749,347.584
           c8.341,8.341,8.341,21.824,0,30.165c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251L176.917,271.083
           c-8.341-8.341-8.341-21.824,0-30.165l106.667-106.667c8.341-8.341,21.824-8.341,30.165,0s8.341,21.824,0,30.165L222.165,256
           L313.749,347.584z"/>
   </g>
</g>
</svg>
}

export function nextArrow(){
    return <svg fill="#000000" height="800px" width="800px" version="1.1" id="Layer_1"
    viewBox="0 0 512 512">
<g>
   <g>
       <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M335.083,271.083
           L228.416,377.749c-4.16,4.16-9.621,6.251-15.083,6.251c-5.461,0-10.923-2.091-15.083-6.251c-8.341-8.341-8.341-21.824,0-30.165
           L289.835,256l-91.584-91.584c-8.341-8.341-8.341-21.824,0-30.165s21.824-8.341,30.165,0l106.667,106.667
           C343.424,249.259,343.424,262.741,335.083,271.083z"/>
   </g>
</g>
</svg>
}

export default StudentReview;
