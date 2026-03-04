import { motion } from "motion/react"; 
import NavBar from "../components/NavBar";
import "../index.css";

function Form() {
    return(
        <>
        <NavBar/>
            <div className="w-full p-5 flex flex-col relative items-center bg-[#FAFAFA] overflow-x-hidden m-0">
                <form>
                    <div>
                        <h1>Sign In</h1>
                        <input type="text" placeholder="Enter Username" />
                        <input type="password" placeholder="Enter Password" />
                        <span>Don't have an account? <a href="/signup">Sign Up</a></span>
                    </div>
                </form>
            </div>

        </>
    )
}

export default Form;