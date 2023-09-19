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
        <div className="py-10 mt-4 flex flex-col justify-center items-center">
          <h1 className=" text-4xl font-semibold max-sm:text-2xl max-sm:py-2 text-center w-10/12 py-3 rounded-3xl text-black border">
            Our Courses and Training
          </h1>
          <p className="text-base leading-relaxed text-center my-8 max-w-[60vw]" >Our courses are designed accordnig to industry demand, If you are looking for entry-level job in IT feild as a Network engineer is the best place for you.</p>
        </div>
        <div className="max-w-7xl">
          <div className="b">
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-4 place-items-center mx-8 ">
              <Link to={"/syllabus"} className="hover:-translate-y-2 transition-all hover:shadow-md rounded-lg" >
                <img
                  className="rounded-lg border p-0 cursor-pointer"
                  src={acnp}
                  alt="acnp"
                />
              </Link>
              <Link to={"/courses"} className="hover:-translate-y-2 transition-all hover:shadow-md rounded-lg" >
                <img
                  className="rounded-lg border cursor-pointer p-0"
                  src={ccna}
                  alt="ccna"
                />
              </Link>
            </div>
          </div>

          <div className="my-16 mb-6 flex flex-col justify-center items-center">
            <h1 className=" text-4xl font-semibold max-sm:text-2xl max-sm:py-2 text-center w-10/12 py-3 rounded-3xl text-black border">
              STUDY MATRIAL AND RECORDED CLASSES
            </h1>
            <p className="text-base leading-relaxed text-center my-8 max-w-[60vw]" >Our courses are designed Get free access of recorded classes and boost your skills.</p>
          </div>
          <div className="grid grid-cols-2 gap-6 mx-10 my-10 max-md:grid-cols-1 place-items-center">
            <div className="w-full max-lg:px-30 max-md:px-15 max-sm:px-0 hover:-translate-y-2 transition-all hover:shadow-md rounded-lg">
              <iframe
                className="rounded-lg border cursor-pointer p-0 w-full aspect-video"
                src="https://www.youtube.com/embed/videoseries?si=vur6F-mj_wPahjOV&amp;list=PLA3rKuTKDmOlzG5O29h95IRA9YfLmvMNO"
              ></iframe>
            </div>
            <div className="w-full max-lg:px-30 max-md:px-15 max-sm:px-0 hover:-translate-y-2 transition-all hover:shadow-md rounded-lg">
              <iframe
                className="rounded-lg border cursor-pointer p-0 w-full aspect-video"
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
