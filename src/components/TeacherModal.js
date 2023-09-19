import React from 'react';

function TeacherModal({ teacher, isOpen, onClose }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
      <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
      <div className="modal-container relative bg-white w-full max-w-md mx-auto rounded-lg shadow-lg z-50">
        {/* Content */}
        <div className="modal-content text-center p-8">
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
            src="https://via.placeholder.com/150"
            alt={teacher.name}
            className="w-32 h-32 mx-auto rounded-full shadow-md border-4 border-white"
          />
          <h2 className="text-2xl font-semibold mt-4 mx-auto">Surjeet Singh</h2>
          <p className="text-gray-600 text-sm text-center">10+ years of experience</p>
        </div>
      </div>
    </div>
  );
}

export default TeacherModal;