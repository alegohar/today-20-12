import React from "react";
import { Helmet } from "react-helmet";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { LOGIN } from "../../Redux/actions/action";
import useAuth from "../Hooks/useAuth";

const TeacherLogin = ()=> {
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  const authorized = useAuth();
  const navigate = useNavigate();
  const [data, setData] = useState({email: "", password: ""});
  const handleValue = (e)=>{
    setData({ ...data, [e.target.name]: e.target.value});
  }
  const submitForm = (e)=>{
    e.preventDefault();    
    console.log({ ...data });
    const username = data.email.split('@')[0];
    const email = data.email;
    dispatch({ type: LOGIN, payload: { email: email, username: username } });
    authorized
    if(globalState?.user)
    {navigate("/dashboard")}
  };
    
return (<React.Fragment>
  {JSON.stringify({
        authorized,
      })}
      
 
    <div>
<Helmet>                 <style>{'body { background: linear-gradient(to top right, #FF3700, #FBF8FF); }'}</style>
</Helmet>
      <section id="login" className="px-[2%] flex flex-col justify-center min-h-screen max-w-md mx-auto">
        <div className="p-6 bg-sky-100 rounded">
          <form onSubmit={submitForm}
 className="flex flex-col justify-center">
            <div className="flex justify-between items-center mb-3">
            <h1 className="tracking-wide text-3xl text-gray-900 text-bold">Teacher Login</h1>

            </div>
            <label className="text-sm font-medium text-left">User Name/Email</label>
            <input
              className="mb-3 px-2 py-1.5
                  mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
                  focus:outline-none
                  focus:border-sky-500
                  focus:ring-1
                  focus:ring-sky-500
                  focus:invalid:border-red-500 focus:invalid:ring-red-500"
              type="email"
              name="email"
              value={data.email}
              id="email"
              onChange={handleValue}
              placeholder="Enter your Username/Email" 
            />
            <label className="text-sm font-medium text-left">Password</label>
            <input
  type="password"
  className="mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
  focus:outline-none
  focus:border-sky-500
  focus:ring-1
  focus:ring-sky-500
  focus:invalid:border-red-500 focus:invalid:ring-red-500"
  name="password"
  value={data.password}  // Add this line to bind the value to the state
  onChange={handleValue}
  placeholder="Enter your Password"
></input> <button
              className="px-4 py-1.5 rounded-md shadow-lg bg-[#FF3700] block transition duration-300 text-white"
              type="submit"
            >
              <span id="login_default_state">
                Log in
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
    </React.Fragment>
  );
};export default TeacherLogin;