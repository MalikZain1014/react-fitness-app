import React from "react";

const MoreDetail = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen py-6 flex flex-col justify-center dark:bg-transparent bg-gray-100">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 dark:bg-black bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              {/* Awesome SVG Image */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-14 w-14 text-indigo-500 dark:text-indigo-500 rounded-full flex-shrink-0 justify-center items-center"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 10a4 4 0 118 0 4 4 0 01-8 0z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="block pl-2 font-semibold text-xl self-start dark:text-gray-200 text-gray-700">
                <h2 className="leading-relaxed">{`${user.firstname} ${user.lastname}`}</h2>
                <p className="text-sm font-normal leading-relaxed text-gray-400 dark:text-gray-500">
                  {user.email}
                </p>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 sm:text-lg sm:leading-7  dark:text-gray-200 text-gray-700  ">
                {/* Display user details */}
                <div className="flex items-center space-x-2">
                  <strong>Email:</strong>
                  <span className="dark:text-gray-500">{user.email}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <strong>First Name:</strong>
                  <span className="dark:text-gray-500">{user.firstname}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <strong>Last Name:</strong>
                  <span className="dark:text-gray-500">{user.lastname}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <strong>Age:</strong>
                  <span className="dark:text-gray-500">{user.age}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <strong>Height:</strong>
                  <span className="dark:text-gray-500">{user.height} cm</span>
                </div>
                <div className="flex items-center space-x-2">
                  <strong>Weight:</strong>
                  <span className="dark:text-gray-500">{user.weight} kg</span>
                </div>
                <div className="flex items-center space-x-2">
                  <strong>Target Weight:</strong>
                  <span className="dark:text-gray-500">
                    {user.targetweight} kg
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreDetail;
