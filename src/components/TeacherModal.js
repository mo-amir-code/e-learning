import React from 'react';

function TeacherModal({ teacher, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
      <div className="modal-container relative w-full bg-white max-w-md max-[530px]:max-w-[85vw] mx-auto rounded-lg shadow-lg z-50">
        {/* Content */}
        <div className="modal-content p-8">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          {/* Teacher info */}
          <img
            src={teacher.image}
            alt={teacher.name}
            className="w-32 h-32 mx-auto rounded-full shadow-md border-4 border-white"
          />
          <h2 className="text-2xl font-semibold mt-4 text-center">{teacher.name}</h2>
          <p className="text-gray-600 text-sm">
            <ul className='flex flex-col justify-start' >  
              {teacher.exp.map((el, index)=>{return<li key={index} className='text-center' >{el}</li>})}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeacherModal;