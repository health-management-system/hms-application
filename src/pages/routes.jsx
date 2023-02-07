import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import PatientInfo from "./PatientInfo";
import Doctorinfo from "./Doctorinfo";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage/>
    },
    {
        path: "/patientinfo",
        element: <PatientInfo />,
    },
    {
        path: "/doctorinfo",
        element: <Doctorinfo />,
    }
    
    
]);

export default router;
