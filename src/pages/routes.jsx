import { createBrowserRouter } from "react-router-dom";
import Homepage from './homepage'
import ErrorPage from "./ErrorPage";
import PatientInfo from "./PatientInfo";
import Doctorinfo from "./Doctorinfo";
import Profile from "./PatientInfo/Profile";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Homepage />,
        errorElement: <ErrorPage/>,
       
    },
    {
        path: "/patientinfo/",
        element: <PatientInfo />,
        children: [{
            path: "",
            element: <Profile/>,
        }, {
            path: "update/",
            element: (<div>Update Form</div>)
        }]
    },
    {
        path: "/doctorinfo",
        element: <Doctorinfo />,

    }
    
    
]);

export default router;
