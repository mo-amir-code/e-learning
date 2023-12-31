import React from "react";
import comptia from "../media/comptia network+.png";
import ccst from "../media/ccst.png";
import ccna from "../media/ccna.png";
import ccnp from "../media/ccnp.png";
import rhca from "../media/rhcsa.png";
import aws from "../media/aws.png";
import knowYourPc from '../media/knowyourpc.png'
import mcsa from '../media/mcsa.png'
import { useState } from "react";
import SyllabusModal from "./SyllabusModal";
import {syllabus} from './Syllabus'

const Courses = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [syllabusModal, setSyllabusModal] = useState(null)

  const openModal = (course) => {
    syllabus.forEach(element => {
      if(element.code === course.code){
        console.log(element)
        setSyllabusModal(element)
      }
    });
    setModalOpen(true);
  };

  const courses = [
    {
      title: "Know your pc -",
      description:
        "Install and configure PC system unit components and peripheral devices.",
      image: knowYourPc,
      code:1
    },
    {
      title: "MCSA Microsoft Windows Server 2016",
      description:
        "Install Windows Servers in Host and Compute Environments.",
      image: mcsa,
      code:3
    },
    {
      title: "CompTIA Network+EXAM CODE N10-008",
      description:
        "CompTIA Network+ helps take your IT infrastructure to the next level, covering troubleshooting, configuring and managing networks.",
      image: comptia,
      code:2
    },
    {
      title: "CCST (Cisco Certified Support Technician) Cybersecurity",
      description:
        "The Cisco Certified Support Technician (CCST) Cybersecurity certification validates a candidate's skills and knowledge of entry-level cybersecurity concepts and topics, including security principles, network security and endpoint security concepts, vulnerability assessment and risk management, and incident handling.",
      image: ccst,
      code:7
    },
    {
      title: "CCNA",
      description:
        "CCNA covers networking fundamentals, IP services, security fundamentals, automation and programmability. Designed for agility and versatility, CCNA validates that you have the skills required to manage and optimize today's most advanced networks.",
      image: ccna,
      code:5
    },
    {
      title: "CCNP 350-401 ENCOR",
      description:
        "Manage the biggest networks Configure, troubleshoot, and manage the networks of the largest companies in the world. When you earn your CCNP Enterprise certification, you’re proving that you can scale and maintain enterprise networks to ensure they can continue to meet growing demand.",
      image: ccnp,
      code:6
    },
    {
      title: "RHCSA",
      description:
        "RHCSA (The performance-based Red Hat Certified System Administrator) (EX200) Give you knowledge in areas of system administration common across a wide range of environments and deployment scenarios. The skills learn in this trainings are the foundation for system administration across all Red Hat® products.",
      image: rhca,
      code:4
    },
    {
      title: "AWS",
      description:
        "AWS Role-based certifications that showcase your knowledge and skills on AWS and build your credibility as an AWS Cloud professional. Prior cloud and/or strong on-premises IT experience recommended.",
      image: aws,
      code:8
    },
  ];

  return (
    <>
    <SyllabusModal open={modalOpen} setOpen={setModalOpen} syllabus={syllabusModal} />
      <div className="bg-white">
        <div className="py-14 flex justify-center items-center">
          <h1 className="text-4xl font-semibold max-sm:text-2xl max-sm:py-2 text-center w-10/12 py-3 rounded-3xl text-black border bg-white">
            Courses
          </h1>
        </div>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1  gap-4 mx-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="max-w-2xl mx-auto hover:-translate-y-2 transition-all cursor-pointer"
              onClick={()=>{
                openModal(course)
              }}
            >
              <div className="bg-white h-full hover:shadow-md  border  rounded-lg max-w-sm">
                <div className="flex justify-center items-center">
                  <img className="rounded-t-lg" src={course.image} alt="" />
                </div>
                <div className="p-5">
                  <div>
                    <h5 className="text-black font-bold text-2xl tracking-tight mb-2">
                      {course.title}
                    </h5>
                  </div>
                  <p className="font-normal text-gray-700 mb-3 dark:text-gray-900">
                    {course.description}
                  </p>
                  <div className="text-white cursor-pointer bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    View details
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 mb-6 flex justify-center items-center">
          <h1 className="text-4xl font-semibold max-sm:text-2xl max-sm:py-2 text-center w-10/12 py-3 rounded-3xl text-black border bg-white">
            Study Material and Recorded Classes
          </h1>
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
    </>
  );
};

export default Courses;
