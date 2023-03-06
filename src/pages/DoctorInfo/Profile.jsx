import React from "react";
import { useState, useEffect } from "react";
import { doctorRequests } from "../../utils/requests/doctor";
import { requestConfig } from "../../utils/requests/requestConfig";
import Subtitle from "../../components/shared/subtitle";
import DoctorInfo from "../../components/shared/user_info";
import AddRecord from "../../components/doctor_info/add_record_panel";
import { useNavigate, useOutletContext } from "react-router-dom";
import toast from "react-hot-toast";
import PageLoading from "../../components/shared/PageLoading";

// Reponse from the server is used to intialize react components
function Doctorinfo() {
    const user = useOutletContext();
    const navigate = useNavigate();

    const [doctorInfo, setDoctorInfo] = useState(null);
    const [error, setError] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const getDoctorInfo = async () => {
        setLoading(true);
        const result = await doctorRequests(requestConfig).getDoctorInfo(
            user.username
        );
        if (result.statusCode === 200) {
            setDoctorInfo(result.result);
        }
        setLoading(false);
    };
    useEffect(() => {
        getDoctorInfo();
    }, [user]);

    if (isLoading || doctorInfo == null || doctorInfo == undefined) {
        return <PageLoading />;
    }

    if (
        typeof doctorInfo === "object" &&
        Object.keys(doctorInfo).length === 0
    ) {
        // https://emojipedia.org/symbols/
        toast("Please add your information", {
            id: "Hello",
            duration: 10000,
            icon: "📣",
            style: {
                width: "1200em",
                height: "3em",
                fontSize: "1.2em",
            },
        });
        navigate("/doctorinfo/update");
    }

    const doctorMap = (doctorInformation) => {
        return [
            { label: "First Name:", value: doctorInformation.firstname },
            { label: "Last Name:", value: doctorInformation.lastname },
            { label: "Staff ID:", value: doctorInformation.staffID },
            { label: "Clinic:", value: doctorInformation.clinic },
            {
                label: "Specialization:",
                value: doctorInformation.specialization,
            },
            { label: "Email:", value: doctorInformation.email },
            { label: "Phone Number:", value: doctorInformation.phonenumber },
        ];
    };

    console.log(doctorInfo);

    return (
        <div className="md:px-20 px-10 py-10">
            <Subtitle title="General Info:" />
            <DoctorInfo doctorInfo={doctorMap(doctorInfo)} />
            <Subtitle title="Add Record:" />
            <AddRecord user={user} patientList />
        </div>
    );
}

export default Doctorinfo;
