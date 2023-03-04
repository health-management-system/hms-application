import axios from "axios";
import { RequestConfig } from "./requestConfig";

export const patientRequests = (config: RequestConfig) => {
    return {
        registerPatient: async (body: patientRegistrationInfo) => {
            let response: { statusCode: number; message: string } = {
                statusCode: 0,
                message: "",
            };
            await axios
                .post(config.baseUrl + "registerpatientinfo", body)
                .then((res) => {
                    response.statusCode = res.status;
                    response.message =
                        "Patient " + body.userid + " has been registered";
                })
                // .catch((err) => {
                //     response.statusCode = err.response.status;
                //     response.message = "Something has gone wrong";
                // });
            return response;
        },
        getPatientInfo: async (
            username: string,
            page: string,
            pageSize: string,
            lastEvaluatedKey: string = ""
        ) => {
            const params = new URLSearchParams({
                username,
                page,
                pageSize,
                lastEvaluatedKey,
            });

            let response: {
                code: string;
                statusCode: number;
                result: PatientInfoResult | null;
            } = {
                code: "",
                statusCode: 0,
                result: null,
            };

            await axios
                .get(config.baseUrl + "/findpatient", { params: params })
                .then((res) => {
                    response.statusCode = res.status;
                    response.result = res.data;
                })
                // .catch((err) => {
                //     response.statusCode = err.response.statusCode;
                //     response.code = err.code;
                // });

            return response;
        },
    };
};

// types for register patient
type patientRegistrationInfo = {
    userid: string;
    email: string;
    firstname: string;
    lastname: string;
    dateofbirth: string;
    healthcardnumber: string;
    phonenumber: string;
    address: string;
    postalcode: string;
};

// types for getPatientInfo
type RecordRow = {
    doctorName: string;
    clinic: string;
    subject: string;
    dateTime: string;
    recordid: string
};

export type PatientInfo = {
    username: string;
    firstname: string;
    lastname: string;
    dateofbirth: string;
    email: string;
    phonenumber: string;
    address: string;
    postalcode: string;
    healthcardnumber: string;
};

export type RecordTableInfo = {
    total_items: number;
    items_per_page: number;
    current_page: number;
    lastEvaluatedKey: string;
    records: RecordRow[];
};

export type PatientInfoResult = {
    patientInfo: PatientInfo;
    records: RecordTableInfo;
    error: string;
};
