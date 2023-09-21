import React from "react";
import Slider from "react-slick";
import "./css/home.css";
import tcs from "../media/tcs.png";
import infosys from "../media/infosys.png";
import mahindra from "../media/techmahindra.png";
import wipro from "../media/wipro.png";
import jio from "../media/jio.png";
import airtel from "../media/airtel.png";
import microland from "../media/microland.png";
import cisco from "../media/cisco.png";
import juniper from "../media/juniper.png";
import digitalocean from "../media/digitalocean.png";
import huawei from "../media/huawei.png";
import algosec from "../media/alogsec.png";
import appliedmaterials from "../media/appliedmaterials.png";
import microsoft from "../media/microsoft.png";
import oracle from "../media/oracle.png";
import intertech from "../media/intertech.png";
import nvidia from "../media/nvidia.png";
import aubank from "../media/aubank.png";
import ibm from "../media/ibm.png";
import americanexpress from "../media/americanexpress.png";
import coforge from "../media/coforge.png";
import adani from "../media/adani.png";
import nitco from "../media/nitco.png";
import ntt from "../media/ntt.png";
import unisys from "../media/unisys.png";
import pando from "../media/pando.png";
import bg2 from "../media/bg2.jpg";

const Companies = () => {
  const companies = [
    {
      name: "tcs",
      link: tcs,
    },
    {
      name: "infosys",
      link: infosys,
    },
    {
      name: "tcs",
      link: mahindra,
    },
    {
      name: "wipro",
      link: wipro,
    },
    {
      name: "jio",
      link: jio,
    },
    {
      name: "airtel",
      link: airtel,
    },
    {
      name: "microland",
      link: microland,
    },
    {
      name: "cicso",
      link: cisco,
    },
    {
      name: "juniper",
      link: juniper,
    },
    {
      name: "digitalocean",
      link: digitalocean,
    },
    {
      name: "huawei",
      link: huawei,
    },
    {
      name: "algosec",
      link: algosec,
    },
    {
      name: "appliedmaterils",
      link: appliedmaterials,
    },
    {
      name: "microsoft",
      link: microsoft,
    },
    {
      name: "oracle",
      link: oracle,
    },
    {
      name: "intertech",
      link: intertech,
    },
    {
      name: "nvidia",
      link: nvidia,
    },
    {
      name: "aubank",
      link: aubank,
    },
    {
      name: "ibm",
      link: ibm,
    },
    {
      name: "americanexpress",
      link: americanexpress,
    },
    {
      name: "coforge",
      link: coforge,
    },
    {
      name: "adani",
      link: adani,
    },
    {
      name: "nitco",
      link: nitco,
    },
    {
      name: "ntt",
      link: ntt,
    },
    {
      name: "unisys",
      link: unisys,
    },
    {
      name: "pando",
      link: pando,
    },
  ];

  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 400,
    autoplay: true,
    slidesToShow: 9,
    prevArrow: previousArrow(),
    nextArrow: nextArrow(),
    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
        },
      },
      {
        breakpoint: 362,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <div style={{ background: `url(${bg2})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className="my-16">
        <div className="py-10 mt-4 flex flex-col justify-center items-center">
          <h1 className=" text-4xl font-semibold max-sm:text-2xl max-sm:py-2 text-center w-10/12 py-3 rounded-3xl text-white">
            OUR STUDENTS WORK AT
          </h1>
          <p className="text-base leading-relaxed text-center mt-4 mb-0 max-w-[60vw] text-white [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
            Also you can be part of these MNC’s throuugh joining our program and
            trainings.
          </p>
        </div>

        <div className="containerSlide">
          <div className="mx-10 slick-slider">
            <Slider {...slickSettings}>
              {companies.map((company, index) => {
                return (
                  <div key={index} className="w-28 h-28 rounded-full">
                    <img
                      className="w-28 h-28 p-0 shadow-lg rounded-full mx-auto object-cover"
                      src={company.link}
                      alt={company.name}
                    ></img>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export function previousArrow(){
    
  return <svg fill="#fff" height="40px" width="40px" version="1.1" id="Layer_1"
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
  return <svg fill="#fff" height="800px" width="800px" version="1.1" id="Layer_1"
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

export default Companies;
