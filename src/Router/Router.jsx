import { ReactDOM } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import StudentLogin from "../Pages/StudentLogin";
import StudentSignup from "../Pages/StudentSignup";
import Studentselect from "../Pages/StudentSelect";
import Teacherselect from "../Pages/TeacherSelect";
import TeacherLogin from "../Pages/TeacherLogin";
import TeacherSignup  from "../Pages/TeacherSignup";
import Assignment from "../Pages/Assignment";
import UnAuthorized from "../Pages/unauthorized";
import Protected from "./protected";
import Dashboard from "../Pages/Dashboard";
import CreateAssignment from "../Pages/CreateAssignment";
function RouterMenu()
{
    return (<Routes>
        <Route path="/" element={<Home/>}/>;
        <Route path="/StudentLogin" element={<StudentLogin/>}/>;
        <Route path="/StudentSignup" element={<StudentSignup/>}/>;
        <Route path="/StudentSelect" element={<Studentselect/>}/>;
        <Route path="/TeacherSelect" element={<Teacherselect/>}/>;
        <Route path="/TeacherLogin" element={<TeacherLogin/>}/>;
        <Route path="/TeacherSignup" element={<TeacherSignup/>}/>;
        <Route path="/CreateAssignment" element={<CreateAssignment/>}/>;
        <Route path="/unAuthorized" element={<UnAuthorized />} />;
        <Route path="/Assignment" Component={Protected}>
          <Route path="" element={<Assignment/>} />

         </Route>
         <Route path="/dashboard" Component={Protected}>
          <Route path="" element={<Dashboard/>} />

         </Route>


        


        

          
    </Routes>)
}
export default RouterMenu;