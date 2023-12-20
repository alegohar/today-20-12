import React from "react";
import { Helmet } from "react-helmet";

function StudentSignup()
{
    
    return (
        <div>
    <Helmet>                        <style>{'body { background: linear-gradient(to top right, #FF3700, #FBF8FF); }'}</style>
    </Helmet>
          <section id="login" className="px-[2%] flex flex-col justify-center min-h-screen max-w-md mx-auto">
            <div className="p-6 bg-sky-100 rounded">
              <form id="login_form" method="POST" className="flex flex-col justify-center">
                <div className="flex justify-between items-center mb-3">
                <h1 className="tracking-wide text-3xl text-gray-900 text-bold">Student Signup</h1>
    
                </div>
                <label className="text-sm font-medium text-left	">Email</label>
                <input
                  className="mb-3 px-2 py-1.5
                      mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                      focus:outline-none
                      focus:border-sky-500
                      focus:ring-1
                      focus:ring-sky-500
                      focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  type="email"
                  name="username"
                  placeholder="Enter your Username/Email"
                /><label className="text-sm font-medium text-left	">User Name</label>
                <input
                  className="mb-3 px-2 py-1.5
                      mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                      focus:outline-none
                      focus:border-sky-500
                      focus:ring-1
                      focus:ring-sky-500
                      focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  type="text"
                  name="Name"
                  placeholder="Enter your User Name"
                />
                <label className="text-sm font-medium text-left	">Password</label>
                <input type="password"
                  className="
                      mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                      focus:outline-none
                      focus:border-sky-500
                      focus:ring-1
                      focus:ring-sky-500
                      focus:invalid:border-red-500 focus:invalid:ring-red-500"
                  name="messages"
                  placeholder="Enter your Password"
                ></input>
                <label className="text-sm font-medium text-left	">Select Course</label>
                <select className="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                      focus:outline-none
                      focus:border-sky-500
                      focus:ring-1
                      focus:ring-sky-500
                      focus:invalid:border-red-500 focus:invalid:ring-red-500" name="courses">
  <option value="Web Development">Web Development</option>
  <option value="Graphics Design">Graphics Design</option>
  <option value="Web Engineering">Web Engineering</option>
  </select>
                <button
                  className="px-4 py-1.5 rounded-md shadow-lg bg-[#FF3700] block transition duration-300 text-white"
                  type="submit"
                >
                  <span id="login_process_state" className="hidden">
                    Sending :)
                  </span>
                  <span id="login_default_state">
                    Sign up<span id="subtotal"></span>
                  </span>
                </button>
              </form>
            </div>
          </section>
        </div>
      );
    }
    
export default StudentSignup;