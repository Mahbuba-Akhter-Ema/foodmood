import React from "react";

const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            Welcome to my Blog
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">The</span>
          </span>{" "}
          Updated, topics will upload here
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Welcome to my blog. In my blog page you can learn about coding and
          here you can see trending news everyday. keep in touch.
        </p>
      </div>
      <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
        <div className="px-10 py-20 text-center bg-gray-300 border rounded lg:px-5 lg:py-10 xl:py-20">
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            1 May 2023
          </p>
          <a
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-purple-400"
            aria-label="Read article"
            title="Nori grape silver beet broccoli kombu beet"
          >
            Differences between uncontrolled and controlled components.
          </a>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
            In React, controlled components refer to components that have their
            state and behavior controlled by the parent component. These
            components rely on props passed down from the parent component to
            update their state and behavior. Uncontrolled components refer to
            components that manage their own state internally.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-purple-800"
          >
            Read more
          </a>
        </div>
        <div className="px-10 py-20 text-center border bg-gray-300 rounded lg:px-5 lg:py-10 xl:py-20">
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            1 May 2023
          </p>
          <a
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-purple-400"
            aria-label="Read article"
            title="Well, the way they make shows is, they make one"
          >
            How to validate React props using PropTypes
          </a>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
            Here are some commonly used PropTypes: PropTypes.string: Validates
            that the prop is a string. PropTypes.number: Validates that the prop
            is a number. PropTypes.bool: Validates that the prop is a boolean.
            PropTypes.array: Validates that the prop is an array.
            PropTypes.object: Validates that the prop is an object.
            PropTypes.func: Validates that the prop is a function.
            PropTypes.shape: Validates that the prop is an object that matches a
            specific shape.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-purple-800"
          >
            Read more
          </a>
        </div>
        <div className="px-10 py-20 text-center border bg-gray-300 rounded lg:px-5 lg:py-10 xl:py-20">
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            1 May 2023
          </p>
          <a
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-purple-400"
            aria-label="Read article"
            title="Pommy ipsum smeg head whizz morris himer due"
          >
            Tell us the difference between nodejs and express js.
          </a>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
          js web application framework that provides a robust set of features for web and mobile applications. In other words, NodeJS is the package, which provides the JavaScript run-time environment, whereas Express is a framework that sits on top of NodeJS and helps us to handle requests and responses.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
          >
            Read more
          </a>
        </div>
        <div className="px-10 py-20 text-center border bg-gray-300 rounded lg:px-5 lg:py-10 xl:py-20">
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            1 May 2023
          </p>
          <a
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-purple-400"
            aria-label="Read article"
            title="Pommy ipsum smeg head whizz morris himer due"
          >
            What is a custom hook, and why will you create a custom hook?
          </a>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
          In React, a custom hook is a JavaScript function that allows you to encapsulate reusable logic and stateful behavior that can be shared across multiple components. Custom hooks enable you to extract common code from components and create a separate, reusable piece of functionality.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-purple-400 hover:text-purple-800"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
