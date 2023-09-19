import React, { useState } from "react";
import Slider from "react-slick";
import teachersAchievements from "../media/teachersAchievements.png";
import "./css/home.css";
import { previousArrow, nextArrow } from "./StudentReview";
import TeacherModal from './TeacherModal'

const Teachers = () => {
  const [width, setWidth] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [teacherInfo, setTeacherInfo] = useState(null)
  const teachersInfo = [
    {
      name: "Jitendra Jakhar ",
    },
    {
      name: "Raghuveer",
    },
    {
      name: "Shekha",
    },
  ];

  const openModal = (teacher) => {
    setTeacherInfo(teacher)
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  const slickSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    slidesToShow: 3,
    centerPadding: "4px",
    prevArrow: previousArrow(),
    nextArrow: nextArrow(),
    responsive: [
      {
        breakpoint: 1150,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  };
  return (
    <section>
      <TeacherModal teacher={teacherInfo} isOpen={modalOpen} onClose={closeModal} />
      <div className="bg-white" >
        <div className="py-10 mt-6 flex flex-col justify-center items-center">
          <h1 className=" text-4xl font-semibold max-sm:text-2xl max-sm:py-2 text-center w-10/12 py-3 rounded-3xl text-black border bg-white">
            Teachers
          </h1>
          <p className="text-base leading-relaxed text-center mt-8 mb-0 max-w-[60vw]" >Get to know about INS’s Experts. Our certified and experienced team behind making your training most sucessful.</p>
        </div>

        <div className="containerSlide">
          <div className=" mx-10 pb-6 pt-3 slick-slider">
            <Slider {...slickSettings}>
              {teachersInfo.map((teacher, index) => (

                <div
                  key={index}
                  onClick={()=>openModal(teacher)}
                  className="flex py-4 flex-col justify-center max-w-xs p-6 rounded-xl sm:px-12 dark:bg-gray-900 dark:text-gray-100"
                >
                  <img
                    src="https://source.unsplash.com/150x150/?portrait?3"
                    alt=""
                    className="w-32 h-32 mx-auto rounded-full border-2 p-2 border-blue-600 aspect-square"
                  />
                  <div className="space-y-4 h-24 text-center divide-y divide-gray-700">
                    <div className="my-2 space-y-1">
                      <h2 className="text-xl font-semibold sm:text-2xl">
                        {teacher.name}
                      </h2>
                      <p className="px-5 text-xs sm:text-base dark:text-gray-400">
                        {teacher.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 max-[734px]:grid-cols-2 place-items-center max-sm:grid-cols-1 bg-white">
          <div className="w-full max-w-sm bg-white  rounded-lg">
            <div className="flex flex-col items-center pb-10">
              <div className="w-24 p-0 mt-12 mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="Calendar"
                >
                  <path
                    d="M19,4h-1V3c0-0.6-0.4-1-1-1s-1,0.4-1,1v1H8V3c0-0.6-0.4-1-1-1S6,2.4,6,3v1H5C3.3,4,2,5.3,2,7v1h20V7C22,5.3,20.7,4,19,4z
	 M2,19c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3v-9H2V19z M17,12c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S16.4,12,17,12z M17,16
	c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S16.4,16,17,16z M12,12c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S11.4,12,12,12z M12,16
	c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S11.4,16,12,16z M7,12c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S6.4,12,7,12z M7,16
	c0.6,0,1,0.4,1,1s-0.4,1-1,1s-1-0.4-1-1S6.4,16,7,16z"
                    fill="#F97316"
                    class="color000000 svgShape"
                  ></path>
                </svg>
              </div>
              <h5 className="mb-1 text-2xl font-semibold text-black">
                Since 1998
              </h5>
              <p className="text-md font-normal text-black">
                Excellent Training Delivering
              </p>
            </div>
          </div>

          <div className="w-full max-w-sm bg-white rounded-lg">
            <div className="flex flex-col items-center pb-10">
              <div className="w-24 p-0 mt-12 mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  id="Graduate"
                >
                  <g
                    data-name="person reading"
                    fill="#F97316"
                    class="color000000 svgShape"
                  >
                    <polygon
                      points="17 29 15 24.333 15 11.632 32 17 51 11 32 4 13 11 13 24.333 11 29 17 29"
                      fill="#F97316"
                      class="color000000 svgShape"
                    ></polygon>
                    <path
                      d="M10 54a1 1 0 0 1 .553-.9l.342-.17A1.991 1.991 0 0 0 12 51.146V44H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h5zM44 15.231L32.3 18.953a1 1 0 0 1-.606 0L20 15.231v4.3C22.856 21.7 27.287 23 32 23s9.144-1.3 12-3.467z"
                      fill="#F97316"
                      class="color000000 svgShape"
                    ></path>
                    <path
                      d="M10,42h3a1,1,0,0,1,1,1v8.146a3.976,3.976,0,0,1-2,3.464V56a1,1,0,0,1-1,1H10l0,2.984L29,60V35H10Z"
                      fill="#F97316"
                      class="color000000 svgShape"
                    ></path>
                    <rect
                      width="2"
                      height="2"
                      x="6"
                      y="40"
                      fill="#F97316"
                      class="color000000 svgShape"
                    ></rect>
                    <path
                      d="M59,44H52v7.146a1.991,1.991,0,0,0,1.1,1.789l.342.17A1,1,0,0,1,54,54v1h5a1,1,0,0,0,1-1V45A1,1,0,0,0,59,44Z"
                      fill="#F97316"
                      class="color000000 svgShape"
                    ></path>
                    <rect
                      width="2"
                      height="25"
                      x="31"
                      y="35"
                      fill="#F97316"
                      class="color000000 svgShape"
                    ></rect>
                    <path
                      d="M52 56V54.61a3.976 3.976 0 0 1-2-3.464V43a1 1 0 0 1 1-1h3V35H35V60l19 .014L54 57H53A1 1 0 0 1 52 56zM47 39H40V37h7zM20 21.956V24a11.92 11.92 0 0 0 3.517 8.483c.178.179.374.348.567.517H39.909A11.941 11.941 0 0 0 44 24V21.956A23.183 23.183 0 0 1 32 25 23.183 23.183 0 0 1 20 21.956z"
                      fill="#F97316"
                      class="color000000 svgShape"
                    ></path>
                    <rect
                      width="2"
                      height="2"
                      x="56"
                      y="40"
                      fill="#F97316"
                      class="color000000 svgShape"
                    ></rect>
                  </g>
                </svg>
              </div>
              <h5 className="mb-1 text-2xl font-semibold text-black">10000+</h5>
              <p className="text-md font-normal text-black">
                Happy Students Trained Till Now
              </p>
            </div>
          </div>

          <div className="w-full max-w-sm bg-white rounded-lg">
            <div className="flex flex-col items-center pb-10">
              <div className="w-24 p-0 mt-12 mb-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  id="work"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path
                    d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
                    fill="#F97316"
                    class="color000000 svgShape"
                  ></path>
                </svg>
              </div>
              <h5 className="mb-1 text-2xl font-semibold text-black">200+</h5>
              <p className="text-md font-normal text-black">
                Companies Accociated
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
