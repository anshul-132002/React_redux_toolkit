import React from 'react'

function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <svg
            className="animate-spin h-10 w-10 text-gray-800 mx-auto"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            ></path>
          </svg>
          <p className="mt-4 text-lg text-gray-700 font-semibold">
            Loading products, please wait...
          </p>
        </div>
      </div>
  )
}

export default Loading
