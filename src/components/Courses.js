import React from "react";

const Courses = () => {
    const courses = [
        {
            title: "Be a full stack web developer",
            description: "In this course you will learn all about web developer",
        },
        {
            title: "Be a front  web developer",
            description: "In this course you will learn all about web developer",
        },
        {
            title: "Be a backend stack web developer",
            description: "In this course you will learn all about web developer",
        },
        {
            title: "Be a mern stack web developer",
            description: "In this course you will learn all about web developer",
        },
        {
            title: "Be a mean stack web developer",
            description: "In this course you will learn all about web developer",
        },
        {
            title: "Be a modern web developer",
            description: "In this course you will learn all about web developer",
        },
        {
            title: "Be a web developer",
            description: "In this course you will learn all about web developer",
        },
        {
            title: "Learn machine learning",
            description: "In this course you will learn all about web developer",
        }
    ]
  return (
    <div className="" >
      <div className="py-14 flex justify-center items-center">
        <h1 className=" text-4xl text-center w-10/12 bg-orange-500 py-3 rounded-3xl shadow-md text-white shadow-black">
          Courses
        </h1>
      </div>

      <div className="grid max-2xl:grid-cols-3 max-[812px]:grid-cols-2 max-sm:grid-cols-1  gap-4 mx-10" >

        {courses.map((course, index)=><div key={index} className="max-w-2xl mx-auto">
          <div className="bg-white shadow-md border border-orange-600  rounded-lg max-w-sm dark:border-orange-600">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-black font-bold text-2xl tracking-tight mb-2">
                    {course.title}
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-900">
                {course.description}
              </p>
              <a
                // href="#"
                className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Enroll Now
                <svg
                  className="-mr-1 ml-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>)}

      </div>

      <div className='grid grid-cols-2 gap-6 mx-10 my-10  max-[1211px]:grid-cols-1 place-items-center' >
            <iframe className="rounded-lg  max-sm:w-[30rem] max-[515px]:w-[20rem] max-[515px]:h-[12rem] border border-orange-500 cursor-pointer p-0 shadow-lg w-[36rem] h-[19rem]" src="https://www.youtube.com/embed/videoseries?si=3s9SRsoocOofXXg4&amp;list=PLA3rKuTKDmOlzG5O29h95IRA9YfLmvMNO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <iframe className="rounded-lg border max-sm:w-[30rem] max-[515px]:w-[20rem] max-[515px]:h-[12rem] border-orange-500 cursor-pointer p-0 shadow-lg w-[36rem] h-[19rem]" src="https://www.youtube.com/embed/videoseries?si=3s9SRsoocOofXXg4&amp;list=PLA3rKuTKDmOlzG5O29h95IRA9YfLmvMNO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

    </div>
  );
};

export default Courses;
