import { createBrowserRouter } from "react-router-dom";
import Homepage from './homepage'
import ErrorPage from "./ErrorPage";
import PatientInfo from "./PatientInfo";
import Doctorinfo from "./Doctorinfo";
import PatientProfile from "./PatientInfo/Profile";
import PatientRegistration from "./PatientInfo/Registration";
import DoctorProfile from "./DoctorInfo/Profile";
import DoctorRegistration from "./DoctorInfo/Registration"
import ViewRecord from './PatientInfo/viewRecord.tsx';


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
            element: <PatientProfile/>,
        }, {
            path: "update/",
            element: <PatientRegistration />
        }, {
            path: "viewrecord/",
            element: <ViewRecord />
        }]
    },
    {
        path: "/doctorinfo",
        element: <Doctorinfo />,
        children: [{
            path: "",
            element: <DoctorProfile/>,
        }, {
            path: "update/",
            element: <DoctorRegistration />
        }]
    }
    
    
]);

export default router;
