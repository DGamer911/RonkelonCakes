import React from "react";
import '../index.css'

function TestimonialCard() {
  return (
    <div className="lg:flex-1 lg:w-full min-w-[300px] bg-gray-300 p-5 rounded-2xl">
      <p className="font-light text-start">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde similique
        doloribus autem nobis? Temporibus cupiditate eaque maiores voluptates   
      </p>
      <div className="flex py-4 items-end justify-between">
        <h2 className="text-2xl text-[var(--color-dark-gray)] text- font-bold">Rita Daniels</h2>
        <img
        className="w-13 rounded-full"
          src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default TestimonialCard;
