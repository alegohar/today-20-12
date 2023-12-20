import React from "react";
import { Helmet } from "react-helmet";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TeacherNavbar from "../../Components/TeacherNavbar";
const CreateAssignment = ()=>
{  const dispatch = useDispatch();
  const navigate = useNavigate();
  const globalState = useSelector((state) => state);
  
return (<><TeacherNavbar></TeacherNavbar>
    {JSON.stringify({
        globalState
      })}
    <div>
<Helmet>                        <style>{'body { background: linear-gradient(to top right, #FF3700, #FBF8FF); }'}</style>
</Helmet>
      <section id="login" className="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
        <div className="p-6 bg-sky-100 rounded">
          <form id="login_form" action="api_login" method="POST" className="flex flex-col justify-center">
            <div className="flex justify-between items-center mb-3">
            <h1 className="tracking-wide text-3xl text-gray-900 text-bold">Create Assignment</h1>

            </div>
            
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
  <label className="text-sm font-medium text-left">Upload Assignment</label>
            <input type="file"
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
            <button
              className="px-4 py-1.5 rounded-md shadow-lg bg-[#FF3700] block transition duration-300 text-white"
              type="submit"
            >
              <span id="login_process_state" className="hidden">
                Sending 
              </span>
              <span id="login_default_state">
                Submit<span id="subtotal"></span>
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
    </>);
}
export default CreateAssignment;
