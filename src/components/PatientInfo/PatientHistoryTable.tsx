import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
export type PatientRecords = {
    dateTime: string;
    clinic: string;
    doctor: string;
    subject: string;
    id: string;
}[];

type PatientHistoryTableProps = {
    history?: PatientRecords;
    isLoadingHistory?: boolean;
    errorLoadingHistory?: boolean;
    refreshHandler?: (...event: any) => void;
};

export const PatientHistoryTable = (props: PatientHistoryTableProps) => {
    const navigate = useNavigate();

    const navigateToSingleId = (recordId: string) => {
        navigate("/patientinfo/viewRecord?recordid=" + recordId);
    };

    return (
        <div className="bg-secCol w-full  rounded-xl overflow-x-scroll md:overflow-hidden ">
            <div className="w-[800px] md:w-full">
                <div
                    data-cy="PatientHistoryTable-table-headers"
                    className="py-5 grid grid-cols-4 bg-priCol font-medium text-white gap-x-3 text-center border-b-[1px] border-black  "
                >
                    <h1>Date & Time</h1>
                    <h1>Doctor</h1>
                    <h1>Clinic</h1>
                    <h1>Subject/Title</h1>
                </div>
                {props.isLoadingHistory ? (
                    // Loading message with spinner
                    <div
                        data-cy="PatientHistoryTable-loading-container"
                        className="w-full h-[30vh] flex justify-center items-center space-x-4"
                    >
                        <h1 data-cy="PatientHistoryTable-loading-text">
                            Loading your records
                        </h1>
                        <AiOutlineLoading3Quarters
                            data-cy="PatientHistoryTable-loading-spinner"
                            className="animate-spin text-xl text-priCol"
                        />{" "}
                    </div>
                ) : props.errorLoadingHistory ? (
                    // Error with Refresh button
                    <div
                        data-cy="PatientHistoryTable-error-container"
                        className="w-full h-[30vh] justify-center items-center flex flex-col space-y-3"
                    >
                        <h1 data-cy="PatientHistoryTable-error-text">
                            Error Loading Health Records
                        </h1>{" "}
                        <h1>Please try again</h1>{" "}
                        <button
                            data-cy="PatientHistoryTable-refresh-button"
                            className="px-2 py-4 bg-priCol text-white"
                            onClick={props.refreshHandler}
                        >
                            Refresh
                        </button>
                    </div>
                ) : // all record field
                props.history && props.history.length > 1 ? (
                    props.history?.map((record, index) => (
                        <div
                            data-cy={"PatientHistoryTable-record-field"}
                            id={`id${record.id}`}
                            className={`px-5 text-center py-5 grid grid-cols-4 gap-x-3 cursor-pointer hover:bg-white group ${
                                props.history !== undefined &&
                                index !== props.history.length - 1
                                    ? "border-b-[1px] border-black"
                                    : ""
                            }`}
                            key={record.id}
                            onClick={() => navigateToSingleId(record.id)}
                        >
                            <h1 className="group-hover:underline">
                                {record.dateTime}
                            </h1>
                            <h1 className="group-hover:underline">
                                {record.doctor}
                            </h1>
                            <h1 className="group-hover:underline">
                                {record.clinic}
                            </h1>
                            <h1 className="group-hover:underline">
                                {record.subject}
                            </h1>
                        </div>
                    ))
                ) : (
                    <div
                        data-cy="PatientHistoryTable-loading-container"
                        className="w-full h-[30vh] flex justify-center items-center space-x-4"
                    >
                        <h1 data-cy="PatientHistoryTable-loading-text">
                            No health records available
                        </h1>
                    </div>
                )}
            </div>
        </div>
    );
};
