import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router";

// import "./Navbar.css"

function NavBar({ role }) {
    const [active, setActive] = useState(false);
    const navToggle = () => {
        setActive((prevState) => {
            console.log(prevState);
            return !prevState;
        });
    };

    const closeNavBar = () => {
        setActive(false);
    };

    const location = useLocation();
    return (
        <div className=" relative">
            {/* Navbar */}
            <nav className=" w-full h-[8vh] bg-priCol flex items-center px-10 md:px-20">
                <div className="Nav w-full  flex justify-between">
                    {/* Menu toggle */}
                    <div
                        onClick={navToggle}
                        className="Nav__menu text-2xl text-white hover:cursor-pointer"
                    >
                        {active ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </div>

                    <div className="Nav__logout text-2xl text-white ">
                        <FiLogOut />
                    </div>
                </div>
            </nav>
            <div
                className={` ${
                    active ? "block" : "hidden"
                } w-full h-[92vh] bg-black opacity-40 absolute`}
                onClick={() => setActive(false)}
            ></div>
            <div
                className={`Nav__sidemenu h-[92vh] w-[40vw] md:w-[30vw] absolute bg-secCol md:-left-[30vw] -left-[40vw] ease-out duration-300 p-10 ${
                    active
                        ? "translate-x-[40vw] md:translate-x-[30vw] active"
                        : "translate-x-0"
                } `}
            >
                {location.pathname.toLowerCase().startsWith("/doctorinfo") ? (
                    <DoctorNavList onClick={closeNavBar} />
                ) : (
                    <PatientNavList onClick={closeNavBar} />
                )}
            </div>
        </div>
    );
}

function DoctorNavList({ onClick }) {
    const doctorPath = "/doctorinfo";
    const navigate = useNavigate();
    const navigationHandler = (path) => {
        return () => {
            navigate(doctorPath + path);
            onClick();
        };
    };

    return (
        <ul className="space-y-6">
            <li
                className="group cursor-pointer space-y-3"
                onClick={navigationHandler("")}
            >
                <h3>Home</h3>{" "}
                <div className="group-hover:w-full w-0 duration-100 ease-in h-[3px] bg-priCol" />
            </li>
            <li
                className="group cursor-pointer space-y-3"
                onClick={navigationHandler("/update")}
            >
                <h3>Update Info</h3>{" "}
                <div className="group-hover:w-full w-0 duration-100 ease-in h-[3px] bg-priCol" />
            </li>
        </ul>
    );
}

function PatientNavList({ onClick }) {
    const patientPath = "/patientinfo";
    const navigate = useNavigate();
    const navigationHandler = (path) => {
        return () => {
            navigate(patientPath + path);
            onClick();
        };
    };

    return (
        <ul className="space-y-6">
            <li
                className="group cursor-pointer space-y-3"
                onClick={navigationHandler("")}
            >
                <h3>Profile</h3>{" "}
                <div className="group-hover:w-full w-0 duration-100 ease-in h-[3px] bg-priCol" />
            </li>
            <li
                className="group cursor-pointer space-y-3"
                onClick={navigationHandler("/update")}
            >
                <h3>Update Info</h3>{" "}
                <div className="group-hover:w-full w-0 duration-100 ease-in h-[3px] bg-priCol" />
            </li>
        </ul>
    );
}

export default NavBar;
