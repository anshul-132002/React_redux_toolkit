import React from 'react'

function Error() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
        <div className="text-red-500">
          <svg
            className="h-12 w-12"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
        <p className="mt-4 text-lg text-gray-700 font-semibold">
          Oops! Something went wrong.
        </p>
        <button
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          onClick={() => dispatch(getProducts())}
        >
          Retry
        </button>
      </div>
  )
}

export default Error
