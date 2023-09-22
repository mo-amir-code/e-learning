import React from "react";

const SocialMedia = () => {
  return (
    <div className="bottom-4 right-4 flex flex-col justify-center items-center bg-transparent z-50  fixed">
      <button
        type="button"
        className="inline-block hover:scale-110 rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-[#E9431C] my-1"
      >
        <svg
          className="w-6 h-6 text-white shadow-md fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          id="sms-notification"
        >
          <g data-name="1">
            <path
              fill="#1a1a1a"
              d="M7.468,23.718c-3.293,0-5.54-2.028-6.163-5.563L.145,11.579c-.725-4.118,1.3-7.011,5.417-7.738l7.147-1.259a2.854,2.854,0,0,1,.5-.044,2.805,2.805,0,0,1,1.373.355,4.292,4.292,0,0,1,7.243,4.523,2.859,2.859,0,0,1,1.163,1.842l.868,4.922c.726,4.118-1.3,7.01-5.417,7.737l-9.4,1.656A9.16,9.16,0,0,1,7.468,23.718Z"
              opacity=".2"
            ></path>
            <path
              fill="#f2f2f2"
              d="M7.468,22.764c-3.293,0-5.54-2.028-6.163-5.563L.145,10.625c-.725-4.118,1.3-7.011,5.417-7.738l7.147-1.259a2.854,2.854,0,0,1,.5-.044,2.805,2.805,0,0,1,1.373.355,4.292,4.292,0,0,1,7.243,4.523A2.859,2.859,0,0,1,22.987,8.3l.868,4.922c.726,4.118-1.3,7.01-5.417,7.737l-9.4,1.656A9.16,9.16,0,0,1,7.468,22.764Z"
            ></path>
            <path
              fill="#E9431C"
              d="M15.621,4.989a2.385,2.385,0,1,1,2.763,1.935A2.385,2.385,0,0,1,15.621,4.989Zm5.487,3.648.868,4.92c.579,3.288-1.051,5.029-3.87,5.526L8.71,20.74c-2.818.5-4.946-.581-5.526-3.87l-1.16-6.577c-.579-3.288,1.051-5.029,3.87-5.526l7.146-1.26a.962.962,0,0,1,1.115,1,3.869,3.869,0,0,0,.382,1.744,3.789,3.789,0,0,0,3.089,2.128,3.839,3.839,0,0,0,2.122-.428A.944.944,0,0,1,21.108,8.637ZM15.1,9.529a.716.716,0,0,0-1.01.065l-.949,1.079a2.281,2.281,0,0,1-2.642.466L7.148,9.307a.715.715,0,1,0-.686,1.255l3.351,1.832a3.7,3.7,0,0,0,4.4-.776l.949-1.079A.715.715,0,0,0,15.1,9.529Z"
            ></path>
          </g>
        </svg>
      </button>
      <a
        href="tel:9314887355"
        className="inline-block hover:scale-110 rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-[#4C98C8] my-1"
      >
        <svg
          className="text-white fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          id="call"
        >
          <path fill="none" d="M0 0h24v24H0V0z"></path>
          <path d="m19.23 15.26-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"></path>
        </svg>
      </a>
      <a
        href="https://api.whatsapp.com/send/?phone=9314887355&text&type=phone_number&app_absent=0"
        className="inline-block hover:scale-110 rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-green-600 my-1"
      >
        <svg
          className="w-6 h-6 text-white shadow-md fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
        </svg>
      </a>
    </div>
  );
};

export default SocialMedia;
