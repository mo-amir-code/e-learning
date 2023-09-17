import React from "react";
import acnp from "../media/acnp.jpg";
import ccna from "../media/CCNA _ CCNP _ CCST.png";
import { Link } from "react-router-dom";


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
          <h1 className=" text-4xl max-sm:text-2xl max-sm:py-2 text-center w-10/12 bg-orange-500 py-3 rounded-3xl shadow-md text-white shadow-black">
            Our Courses and Training
          </h1>
        </div>
        <div className="max-w-7xl">
          <div className="b" >
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 place-items-center mx-8 ">
              <Link to={'/syllabus'} >
                <img
                  className="rounded-lg border border-orange-500 p-0 shadow-lg cursor-pointer"
                  src={acnp}
                  alt="acnp"
                />
              </Link>
              <Link to={"/courses"}>
                <img
                  className="rounded-lg border border-orange-500 cursor-pointer p-0 shadow-lg"
                  src={ccna}
                  alt="ccna"
                />
              </Link>
            </div>
          </div>

          <div className="mt-16 mb-6 flex justify-center items-center">
            <h1 className=" text-4xl max-sm:text-2xl max-sm:py-2 text-center w-10/12 bg-orange-500 py-3 rounded-3xl shadow-md text-white shadow-black">
              STUDY MATRIAL AND RECORDED CLASSES
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-6 mx-10 my-10 max-md:grid-cols-1 place-items-center">
            <div className="w-full max-lg:px-30 max-md:px-15 max-sm:px-0" >
            <iframe
              className="rounded-lg border border-orange-500 cursor-pointer p-0 shadow-lg w-full aspect-video"
              src="https://www.youtube.com/embed/videoseries?si=vur6F-mj_wPahjOV&amp;list=PLA3rKuTKDmOlzG5O29h95IRA9YfLmvMNO"
              ></iframe>
              </div>
              <div className="w-full max-lg:px-30 max-md:px-15 max-sm:px-0" >
            <iframe
              className="rounded-lg border border-orange-500 cursor-pointer p-0 shadow-lg w-full aspect-video"
              src="https://www.youtube.com/embed/videoseries?si=d6cF1JPr_0AkvP-y&amp;list=PLA3rKuTKDmOkHJn6AL9HGNSnmvpK0mMkk"
              ></iframe>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesAndTraining;
