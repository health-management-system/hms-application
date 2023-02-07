import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Signup from "./Signup"
import ErrorPage from "./ErrorPage";
import PatientInfo from "./PatientInfo";
import Doctorinfo from "./Doctorinfo";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
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
