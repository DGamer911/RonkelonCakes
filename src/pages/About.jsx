import { motion } from "motion/react";
import NavBar from "../components/NavBar";
import "../index.css";

function About() {
    return(
        <>
        {/* <NavBar/> */}
            <div className="w-full p-5 flex flex-col h-screen relative justify-center items-center bg-[#FAFAFA] overflow-x-hidden m-0">
                <form className="flex bg-gray-200 rounded-4xl w-[50%] p-2 flex-col gap-5 items-center justify-center">
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl my-3 font-medium text-center">Sign In</h1>
                        <input type="text" className="bg-white w-full focus:ring-2 focus:ring-blue-500 py-2 px-4 rounded" placeholder="Enter Username" />
                        <input type="password" className="bg-white my-2 py-2 px-4  rounded" placeholder="Enter Password" />
                        <span className="text-base font-light">Don't have an account? <a className="text-blue-500" href="/signup">Sign Up</a></span>
                        <motion.button whileHover={{ scale: 1.05 }} transition={{type: "spring" , duration:.3}} className="text-center font-medium w-[100%] text-lg py-2 my-2 px-10 bg-[var(--color-orange)] rounded">Submit</motion.button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default About;