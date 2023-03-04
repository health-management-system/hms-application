import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router";

// import "./Navbar.css"

function NavBar({ role, signOut }) {
    const [active, setActive] = useState(false);
    const navToggle = () => {
        setActive((prevState) => {
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
            <nav
                data-cy="Navbar-container"
                className=" w-full h-[8vh] bg-priCol flex items-center px-10 md:px-20"
            >
                <div className="Nav w-full  flex justify-between">
                    {/* Menu toggle */}
                    <div
                        data-cy="Navbar-menu"
                        onClick={navToggle}
                        className="Nav__menu text-2xl text-white hover:cursor-pointer"
                    >
                        {active ? (
                            <AiOutlineClose data-cy="Navbar-menu-close" />
                        ) : (
                            <AiOutlineMenu data-cy="Navbar-menu-normal" />
                        )}
                    </div>

                    <div
                        data-cy="Navbar-sign-out"
                        className="Nav__logout text-2xl text-white hover:cursor-pointer"
                        onClick={signOut}
                    >
                        <FiLogOut />
                    </div>
                </div>
            </nav>
            <div
                data-cy={
                    active ? "Navbar-background-on" : "Navbar-background-off"
                }
                className={` ${
                    active ? "block" : "hidden"
                } w-full h-[92vh] bg-black opacity-40 absolute`}
                onClick={closeNavBar}
            ></div>
            <div
                data-cy={active ? "Navbar-sidebar-on" : "Navbar-sidebar-off"}
                className={`Nav__sidemenu h-[92vh] w-[40vw] md:w-[30vw] absolute bg-secCol md:-left-[30vw] -left-[40vw] ease-out duration-300 p-10 ${
                    active
                        ? "translate-x-[40vw] md:translate-x-[30vw] active"
                        : "translate-x-0"
                } `}
            >
                {location.pathname.toLowerCase().startsWith("/doctor") ? (
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
        <ul data-cy="Navbar-sidebar-doctor" className="space-y-6">
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
        <ul data-cy="Navbar-sidebar-patient" className="space-y-6">
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
