import React, { useState, useEffect, useRef } from "react";
import Subtitle from "../../components/shared/subtitle";
import PaginationNavigator from "../../components/PatientInfo/PaginationNavigator";
import {
    PatientHistoryTable,
    PatientRecords,
} from "../../components/PatientInfo/PatientHistoryTable";
import InfoPanel from "../../components/shared/user_info";
import {
    PatientInfo,
    PatientInfoResult,
    patientRequests,
} from "../../utils/requests/patient";
import {
    useNavigate,
    useOutletContext,
    useSearchParams,
} from "react-router-dom";
import { requestConfig } from "../../utils/requests/requestConfig";
import { toast } from "react-hot-toast";
import { BiRefresh } from "react-icons/bi";
import PageLoading from "../../components/shared/PageLoading";

const patientRecords: PatientRecords = [
    {
        clinic: "Hope Medicals",
        dateTime: "12:00 pm 01/30/2023",
        doctor: "Dr. Michael Chris",
        subject: "SevereMigrains",
        id: "1",
    },
    {
        clinic: "Children Smiles",
        dateTime: "12:00 pm 01/30/2023",
        doctor: "Dr. Timothy Patrick",
        subject: "Brain Tumors",
        id: "2",
    },
    {
        clinic: "TMed Clinic",
        dateTime: "12:00 pm 01/30/2023",
        doctor: "Dr. Tyler Richard",
        subject: "Bad Kidney",
        id: "3",
    },
    {
        clinic: "Bays Dentals",
        dateTime: "12:00 pm 01/30/2023",
        doctor: "Dr. Simeon Ray",
        subject: "Tiredness",
        id: "4",
    },
];

const patientInfo = [
    { label: "First Name:", value: "Brian" },
    { label: "Last Name:", value: "Smith" },
    { label: "Date of Birth:", value: "1995-09-03" },
    { label: "Email:", value: "brainsmith@gmail.com" },
    { label: "Address:", value: "8 Ring Rd, Waterloo ON" },
    { label: "Phone Number:", value: "517-733-2895" },
    { label: "Postal Code:", value: "K6F Y9D" },
    { label: "Health Card No:", value: "78549854985" },
];

function Profile() {
    const navigate = useNavigate();
    const user = useOutletContext() as Record<string, any>;
    const [isLoadingPH, setIsLoadingPH] = useState<boolean>(true);
    const [patientInfoAndRecords, setPatientInfoAndRecords] =
        useState<PatientInfoResult | null>(null);
    const [lastPage, setLastPage] = useState(1);
    const lastEvaluatedKeyRef = useRef<string>("");
    const [currentPage, setCurrentPage] = useState(1);
    const [isNavigating, setIsNavigating] = useState(false);

    const loadInfoInit = async (username: string) => {
        setIsLoadingPH(true);
        const result = await patientRequests(requestConfig).getPatientInfo(
            username,
            currentPage.toString(),
            "10",
            lastEvaluatedKeyRef.current || ""
        );

        // TODO: this snippet of code takes the second to the last page as the lastpage,
        // this is due to errors coming from the backend when navigating from the last page to the page before the last page
        // SOLUTION AFTER BACKEND FIX: replace the code in the setLastPage() function with a simple
        // Math.ceil(total_items/items_per_page)
        result.result != null &&
            setLastPage(
                Math.ceil(
                    result.result.records.total_items /
                        result.result.records.items_per_page
                ) - 1 ||
                    Math.ceil(
                        result.result.records.total_items /
                            result.result.records.items_per_page
                    )
            );
        // TODO_END
        result.result != null &&
            setCurrentPage(result.result.records.current_page);
        lastEvaluatedKeyRef.current =
            result.result?.records.lastEvaluatedKey || "";
        result.result != null && setPatientInfoAndRecords(result.result);
        setIsLoadingPH(false);
        setIsNavigating(false);
    };

    const nextPage = () => {
        if (currentPage !== lastPage && isNavigating === false) {
            setIsNavigating(true);
            setCurrentPage((prev) => prev + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1 && isNavigating === false) {
            setIsNavigating(true);
            setCurrentPage((prev) => prev - 1);
        }
    };

    const refreshPage = () => {
        if (isNavigating === false) {
            setIsNavigating(true);
            setCurrentPage(1);
        }
    };

    useEffect(() => {
        loadInfoInit(user.username as string);
    }, [currentPage]);

    if (isLoadingPH && patientInfoAndRecords == null) {
        return <PageLoading />;
    }

    if (patientInfoAndRecords && patientInfoAndRecords.error) {
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
        navigate("/patientinfo/update");
    }

    const mapPatientInfo = (patientInfo: PatientInfo) => {
        return [
            { label: "First Name:", value: patientInfo.firstname },
            { label: "Last Name:", value: patientInfo.lastname },
            { label: "Date of Birth:", value: patientInfo.dateofbirth },
            { label: "Email:", value: patientInfo.email },
            { label: "Address:", value: patientInfo.address },
            { label: "Phone Number:", value: patientInfo.phonenumber },
            { label: "Postal Code:", value: patientInfo.postalcode },
            { label: "Health Card No:", value: patientInfo.healthcardnumber },
        ];
    };

    return (
        <div className="md:px-20 px-10 py-10">
            <Subtitle title="General Info:" />
            <InfoPanel
                doctorInfo={
                    (patientInfoAndRecords &&
                        mapPatientInfo(patientInfoAndRecords.patientInfo)) ||
                    []
                }
            />
            <div className="flex w-full justify-between items-center mb-5">
                {/* Health record title */}
                <Subtitle title="Health Records:" />
                <div className="space-x-6 flex">
                    {/* Refresh */}
                    <BiRefresh
                        className="text-4xl text-priCol cursor-pointer"
                        onClick={refreshPage}
                    />

                    {/* Paginator */}
                    <PaginationNavigator
                        currentIndex={currentPage}
                        lastPage={lastPage}
                        onLeftClick={prevPage}
                        onRightClick={nextPage}
                    />
                </div>
            </div>
            <PatientHistoryTable
                isLoadingHistory={isLoadingPH}
                history={
                    (patientInfoAndRecords &&
                        patientInfoAndRecords?.records.records.map((record) => {
                            return {
                                dateTime: record.dateTime,
                                clinic: record.clinic,
                                subject: record.subject,
                                doctor: record.doctorName,
                                id: record.recordid,
                            };
                        })) ||
                    []
                }
                errorLoadingHistory={false}
            />
        </div>
    );
}

export default Profile;
