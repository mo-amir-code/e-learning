import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <>
      {/* <div className="px-20 max-sm:px-5 grid grid-cols-2 max-lg:grid-cols-1 gap-4 my-6">
        <div className="border-t bg-white px-8 pt-4 pb-8 border-gray-100 rounded-lg shadow">
          <h2 className="px-0 py-6 text-3xl font-semibold">Office Address</h2>
          <dl className="divide-y divide-gray-100">
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Email
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <strong>info@insjaipur.com</strong>
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Mobile No.
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                +919314887355
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Colony
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                65 Kalyan
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Near
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Officers Campus Gate No 19 Khatipura
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                City
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                Jaipur
              </dd>
            </div>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
              <dt className="text-sm font-medium leading-6 text-gray-900">
                Postal Code
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                302021
              </dd>
            </div>
          </dl>
        </div>
        <form
          className="bg-white px-8 pt-4 pb-8 rounded-lg shadow"
          onSubmit={handleSubmit((data) => {
            console.log(data);
            reset();
          })}
        >
          <h2 className="px-0 py-6 text-3xl font-semibold">
            Request Call Back
          </h2>
          <div className="mb-6">
            <input
              type="text"
              id="name"
              name="name"
              {...register("name", {
                required: "Name is required",
              })}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-6">

            <input
              type="email"
              id="email"
              name="email"
              {...register("email", {
                required: "Email is required!",
                pattern: {
                  value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                  message: "email is not valid",
                },
              })}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Email Address"
              required
            />
          </div>
          <div className="mb-6">
            <select
              id="countries"
              name="countries"
              {...register("country", {
                required: "Country is required",
              })}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-2.5 px-4 "
            >
              <option>India</option>
              <option>United States</option>
              <option>France</option>
              <option>Germany</option>
            </select>
          </div>
          <div className="mb-6">

            <input
              type="number"
              id="telephone"
              name="telephone"
              {...register("telephone", {
                required: "Mobile Number is required",
              })}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="+91"
              required
            />
          </div>
          <div className="mb-6">

            <input
              type="text"
              id="course"
              name="course"
              {...register("course", {
                required: "Course is required",
              })}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Course"
              required
            />
          </div>
          <div className="mb-6">
          
            <textarea
              id="message"
              rows="4"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white w-full text-xl bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-semibold rounded-lg px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          >
            Submit
          </button>
        </form>
      </div> */}

      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=65 Kalyan colony near officers campus gate no 19 khatipura Jaipur 302021&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            style={{}}
          />
        </div>
        <form className="container px-5 py-24 mx-auto flex" 
         onSubmit={handleSubmit((data) => {
            console.log(data);
            reset();
          })}
         >
          <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
            <h2 className="px-0 pt-0 pb-2 text-3xl font-semibold title-font">
            Request Call Back
          </h2>
          <div className="mb-6">
            
            <input
              type="text"
              id="name"
              name="name"
              {...register("name", {
                required: "Name is required",
              })}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Full Name"
              required
            />
          </div>
          <div className="mb-6">
            {/* <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label> */}
            <input
              type="email"
              id="email"
              name="email"
              {...register("email", {
                required: "Email is required!",
                pattern: {
                  value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                  message: "email is not valid",
                },
              })}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="info@insjaipur.com"
              required
            />
          </div>
          <div className="mb-6">
            {/* <label
            htmlFor="repeat-password"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Repeat password
          </label> */}
            <input
              type="number"
              id="telephone"
              name="telephone"
              {...register("telephone", {
                required: "Mobile Number is required",
              })}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="+919314887355 "
              required
            />
          </div>
          <div className="mb-6">
            {/* <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Full Name
          </label> */}
            <input
              type="text"
              id="course"
              name="course"
              {...register("course", {
                required: "Course is required",
              })}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Course"
              required
            />
          </div>
          <div className="mb-6">
            {/* <label
            for="message"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your message
          </label> */}
            <textarea
              id="message"
              rows="4"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white w-full text-xl bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-semibold rounded-lg px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
          >
            Submit
          </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Contact;
