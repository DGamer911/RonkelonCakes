import React from "react";
import '../index.css'

function TestimonialCard({name,testimonial,profile}) {
  return (
    <div className="lg:flex-1 lg:w-full min-w-[300px] bg-gray-300 p-5 rounded-2xl">
      <p className="font-light mb-2 text-start">{testimonial}  
      </p>
      <div className="flex pt-4 items-center border-t border-t-gray-400 justify-between">
        <h2 className="text-2xl text-[var(--color-dark-gray)] text- font-bold">{name}</h2>
        <img
        className="w-10 rounded-full"
          src="https://images.pexels.com/photos/1520760/pexels-photo-1520760.jpeg"
          alt=""
        />
      </div>
    </div>
  );
}

export default TestimonialCard;
