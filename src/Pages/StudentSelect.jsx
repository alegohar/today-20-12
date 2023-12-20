import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
function Studentselect()
{
    return <div className="flex gap-5 place-content-evenly">  <Helmet>                        
    <style>{'body { background: linear-gradient(to top right, #FF3700, #FBF8FF);height: 100vh; display: flex; align-items: center;  justify-content: center; }'}</style>
    </Helmet><Link to="/studentlogin">
    <button
                  className="px-10 py-3 rounded-md shadow-lg bg-[#FFE700] block transition duration-300 text-white"
                  type="submit"
                >
                  <span id="login_process_state" className="hidden">
                    Sending :)
                  </span>
                  <span id="login_default_state" className="text-black">
                    Login<span id="subtotal"></span>
                  </span>
                </button>
                </Link>
                <Link to="/studentsignup">
                <button
                  className="px-10 py-3 rounded-md shadow-lg bg-[#FFE700] block transition duration-300 text-white"
                  type="submit"
                >
                  <span id="login_process_state" className="hidden">
                    Sending :)
                  </span>
                  <span id="login_default_state" className="text-black">
                    Sign Up<span id="subtotal"></span>
                  </span>
                </button></Link>
            </div>
}
export default Studentselect;