import React from "react";
import Button from "../Button/Button";

export default function Card() {
  return (
    <div className="md:flex mt-40">
      <div className="flex flex-col justify-center items-center md:items-start md:w-2/4 md:h-64">
        <h2 className="text-4xl text-black">
          Build the <span className="text-indigo-500">future</span>
        </h2>

        <p className="pt-5 pb-12 text-gray-700 text-center md:text-left md:pt-2 md:pb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div>
          <Button bgColor="bg-gray-900" color="text-gray-200">
            Get Started
          </Button>
          <Button bgColor="bg-gray-500" ml="ml-5">
            Learn More
          </Button>
        </div>
      </div>
      <div className="clip hidden md:block flex-auto w-2/4">
        <div className="img-container"></div>
      </div>
    </div>
  );
}
