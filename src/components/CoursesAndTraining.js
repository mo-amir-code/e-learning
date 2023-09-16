import React from "react";
import acnp from "../media/acnp.jpg";
import ccna from "../media/CCNA _ CCNP _ CCST.png";
import { Link } from "react-router-dom";
// import './css/home.css'

const CoursesAndTraining = () => {
  const ytPlaylist = [
    {
      name: "ccna",
      link: "https://www.youtube.com/embed/videoseries?si=Zkf6Ur7WZPcoq8mn&amp;list=PLA3rKuTKDmOlzG5O29h95IRA9YfLmvMNO",
    },
    {
      name: "ccn2",
      link: "https://www.youtube.com/embed/videoseries?si=Zkf6Ur7WZPcoq8mn&amp;list=PLA3rKuTKDmOlzG5O29h95IRA9YfLmvMNO",
    },
    {
      name: "ccn3",
      link: "https://www.youtube.com/embed/videoseries?si=Zkf6Ur7WZPcoq8mn&amp;list=PLA3rKuTKDmOlzG5O29h95IRA9YfLmvMNO",
    },
  ];

  return (
    <div>
      <div className="">
        <div className="py-14 flex justify-center items-center">
          <h1 className=" text-4xl text-center w-10/12 bg-orange-500 py-3 rounded-3xl shadow-md text-white shadow-black">
            Our Courses and Training
          </h1>
        </div>
        <div className="max-w-7xl">
          <div className="grid max-2xl:grid-cols-2 max-[900px]:grid-cols-1 gap-4 place-items-center mx-10 ">
            <div>
              <Link to={"/courses"}>
                <img
                  className="rounded-lg border border-orange-500 p-0 shadow-lg cursor-pointer w-[115rem]"
                  src={acnp}
                  alt="acnp"
                />
              </Link>
            </div>
            <div>
              <Link to={"/courses"}>
                <img
                  className="rounded-lg border border-orange-500 cursor-pointer p-0 shadow-lg w-[115rem] ml-2"
                  src={ccna}
                  alt="ccna"
                />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 mx-10 my-10  max-[1211px]:grid-cols-1 place-items-center">
            <iframe
              className="rounded-lg  max-sm:w-[30rem] max-[515px]:w-[20rem] max-[515px]:h-[12rem] border border-orange-500 cursor-pointer p-0 shadow-lg w-[36rem] h-[19rem]"
              src="https://www.youtube.com/embed/videoseries?si=3s9SRsoocOofXXg4&amp;list=PLA3rKuTKDmOlzG5O29h95IRA9YfLmvMNO"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <iframe
              className="rounded-lg  max-sm:w-[30rem] max-[515px]:w-[20rem] max-[515px]:h-[12rem] border border-orange-500 cursor-pointer p-0 shadow-lg w-[36rem] h-[19rem]"
              src="https://www.youtube.com/embed/videoseries?si=3s9SRsoocOofXXg4&amp;list=PLA3rKuTKDmOlzG5O29h95IRA9YfLmvMNO"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesAndTraining;
