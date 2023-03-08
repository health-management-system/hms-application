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
    const [paginationKeys, setPaginationKeys] = useState<string[]>([]);

    const loadInfoInit = async (username: string) => {
        setIsLoadingPH(true);

        // If lastEvaluatedKey for current page exists use it
        let lastEvaluatedKey = null;
        if (paginationKeys[currentPage] != null) {
            lastEvaluatedKey = paginationKeys[currentPage];
        } else {
            lastEvaluatedKey = lastEvaluatedKeyRef.current || "";
        }

        const result = await patientRequests(requestConfig).getPatientInfo(
            username,
            currentPage.toString(),
            "10",
            lastEvaluatedKey
        );
        setPatientInfoAndRecords(result.result);
        if (result.result != null && !result.result.error) {
            setLastPage(
                Math.ceil(
                    result.result.records.total_items /
                        result.result.records.items_per_page
                )
            );

            lastEvaluatedKeyRef.current =
                result.result?.records.lastEvaluatedKey || "";

            setCurrentPage(result.result.records.current_page);

            // Add the lastEvaluatedKey to the array at index currentPage
            let arr = paginationKeys;
            arr[currentPage + 1] = result.result.records.lastEvaluatedKey;
            setPaginationKeys(arr);
        } else {
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
            setPaginationKeys([]);
            if (currentPage != 1) {
                setCurrentPage(1);
            } else {
                loadInfoInit(user.username as string);
            }
        }
    };

    useEffect(() => {
        loadInfoInit(user.username as string);
    }, [currentPage]);

    if (isLoadingPH && patientInfoAndRecords == null) {
        return <PageLoading />;
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
                        data-cy={"refesh-table-button"}
                        className="text-4xl text-priCol cursor-pointer"
                        onClick={refreshPage}
                    />

                    {/* Paginator */}
                    <PaginationNavigator
                        currentIndex={
                            patientInfoAndRecords &&
                            patientInfoAndRecords.records &&
                            patientInfoAndRecords.records.records.length > 0
                                ? currentPage
                                : 0
                        }
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
                        patientInfoAndRecords.records &&
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
