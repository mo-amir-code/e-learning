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
import { previousArrow, nextArrow } from "./StudentReview";

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
    <div className="my-16">
      <div className="py-10 mt-4 flex flex-col justify-center items-center bg-white">
        <h1 className=" text-4xl font-semibold max-sm:text-2xl max-sm:py-2 text-center w-10/12 py-3 rounded-3xl text-black border bg-white">
          OUR STUDENTS WORK AT
        </h1>
        <p className="text-base leading-relaxed text-center mt-8 mb-0 max-w-[60vw]">
          Also you can be part of these MNC’s throuugh joining our program and
          trainings.
        </p>
      </div>

      <div className="containerSlide bg-white">
        <div className="mx-10 slick-slider">
          <Slider {...slickSettings}>
            {companies.map((company, index) => {
              return (
                <div key={index} className="w-28 rounded-full">
                  <img
                    className="w-28 h-28 p-0 shadow-lg rounded-full object-cover"
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
  );
};

export default Companies;
