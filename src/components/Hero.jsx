import React from "react";
import image from "../assets/imd.png";
import "../index.css";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTelegram, faWhatsapp, faInstagram } from "@fortawesome/free-brands-svg-icons";


function Hero() {
  const iconStyles = ""

    function changeColor() {
        let num1 = Math.floor(Math.random() * 256);
        let num2 = Math.floor(Math.random() * 256);
        let num3 = Math.floor(Math.random() * 256);
        let color = `rgb(${num1}, ${num2}, ${num3})`;
        return color;
    }
  return (
    <div className="w-screen overflow-hidden relative flex lg:flex-row flex-col-reverse items-center justify-between h-[calc(100vh-60px)] lg:px-20 bg-[var(--color-cream)]">
      <div className="details mb-30"> 
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 , type: "spring", stiffness: 240 }}
          className="lg:text-6xl order-2 lg:order-1 text-3xl lg:mt-30 lg:max-w-[500px] max-w-[250px] text-shadow-lg cursor-pointer text-[var(--color-orange)]"
          style={{ fontFamily: "MyCustomFont" }}
          
        >
          <motion.span className="inline-block" onMouseOver={()=>changeColor()} whileHover={{rotate: 20, color: changeColor() }} transition={{duration: 0.3, type: "spring", stiffness: 240}}>B</motion.span>
          <motion.span className="inline-block"  onMouseOver={()=>changeColor()} whileHover={{rotate:20, color: changeColor() }} transition={{duration: 0.3, type: "spring", stiffness: 240}}>a</motion.span>
          <motion.span className="inline-block"  onMouseOver={()=>changeColor()} whileHover={{rotate:20, color: changeColor() }} transition={{duration: 0.3, type: "spring", stiffness: 240}}>k</motion.span>
          <motion.span className="inline-block" onMouseOver={()=>changeColor()} whileHover={{rotate:20, color: changeColor() }} transition={{duration: 0.3, type: "spring", stiffness: 240}}>e</motion.span>
          <motion.span className="inline-block" onMouseOver={()=>changeColor()} whileHover={{rotate:20, color: changeColor() }} transition={{duration: 0.3, type: "spring", stiffness: 240}}>H</motion.span>
          <motion.span className="inline-block" onMouseOver={()=>changeColor()} whileHover={{rotate:20, color: changeColor() }} transition={{duration: 0.3, type: "spring", stiffness: 240}}>o</motion.span>
          <motion.span className="inline-block" onMouseOver={()=>changeColor()} whileHover={{rotate:20, color: changeColor() }} transition={{duration: 0.3, type: "spring", stiffness: 240}}>u</motion.span>
          <motion.span className="inline-block" onMouseOver={()=>changeColor()} whileHover={{rotate:20, color: changeColor() }} transition={{duration: 0.3, type: "spring", stiffness: 240}}>s</motion.span>
          <motion.span className="inline-block" onMouseOver={()=>changeColor()} whileHover={{rotate:20, color: changeColor() }} transition={{duration: 0.3, type: "spring", stiffness: 240}}>e</motion.span>
                    <span> </span>
          <motion.span className="inline-block" onMouseOver={()=>changeColor()} whileHover={{rotate:20, color: changeColor() }} transition={{duration: 0.3, type: "spring", stiffness: 240}}>b</motion.span>
          <motion.span className="inline-block" onMouseOver={()=>changeColor()} whileHover={{rotate:20, color: changeColor() }} transition={{duration: 0.3, type: "spring", stiffness: 240}}>y</motion.span>
          <span><br></br></span>
          <motion.span className="inline-block" onMouseOver={()=>changeColor()} whileHover={{rotate:20, color: changeColor() }} transition={{duration: 0.3, type: "spring", stiffness: 240}}>R</motion.span>
          <motion.span className="inline-block" onMouseOver={()=>changeColor()} whileHover={{rotate:20, color: changeColor() }} transition={{duration: 0.3, type: "spring", stiffness: 240}}>o</motion.span>
          <motion.span className="inline-block" onMouseOver={()=>changeColor()} whileHover={{rotate:20, color: changeColor() }} transition={{duration: 0.3, type:"spring", stiffness : 240}}>n</motion.span>
          <motion.span className="inline-block" onMouseOver={()=>changeColor()} whileHover={{rotate:20, color : changeColor()}} transition={{duration : 0.3 ,type:"spring" ,stiffness :240}} >k</motion.span>
          <motion.span className="inline-block" onMouseOver={()=>changeColor()} whileHover={{rotate:20, color : changeColor()}} transition={{duration : 0.3 ,type:"spring" ,stiffness :240}} >e</motion.span>
          <motion.span className="inline-block" onMouseOver={()=>changeColor()} whileHover={{rotate:20, color : changeColor()}} transition={{duration : 0.3 ,type:"spring" ,stiffness :240}} >l</motion.span>
          <motion.span className="inline-block" onMouseOver={()=>changeColor()} whileHover={{rotate:20, color: changeColor() }} transition={{duration: 0.3, type: "spring", stiffness: 240}}>o</motion.span>
          <motion.span className="inline-block" onMouseOver={()=>changeColor()} whileHover={{rotate:20, color: changeColor() }} transition={{duration: 0.3, type: "spring", stiffness: 240}}>n</motion.span>
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 240 }}
          className="lg:max-w-[300px] max-w-[220px] text-[var(--color-dark)] font-light text-base lg:text-2xl"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, enim!
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex mt-2 gap-3"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -1 }}
            transition={{ type: "spring", duration: 0.2, stiffness: 300 }}
            className="bg-[var(--color-orange)] shadow-sm rounded-xl text-white lg:px-4 lg:py-2 p-2"
          >
            View Catalogue
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, y: -1 }}
            transition={{ type: "spring", duration: 0.2, stiffness: 300 }}
            className="bg-white  rounded-xl shadow-sm text-black lg:px-4 lg:py-2 p-2"
          >
            Contact Us
          </motion.button>
        </motion.div>

      </div>
      <motion.div
        initial={{ x: 700 }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 1, ease: "easeOut" }}
        className="lg:rounded-l-full lg:rounded-br-none rounded-b-full order-1 lg:order-2 flex justify-center lg:translate-x-[100px] translate-x-0 drop-shadow-2xl lg:w-[600px] w-[220px] bg-white"
      >
        <img src={image} className="" alt="" />
      </motion.div>
    </div>
  );
}

export default Hero;
