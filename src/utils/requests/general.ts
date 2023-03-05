import axios from "axios";
import { RequestConfig } from "./requestConfig";

export const generalRequests = (config: RequestConfig) => {
    return {
        getRecord: async (recordid: string) => {
            let response: {
                code: string;
                statusCode: number;
                result: RecordType;
            } = {
                code: "",
                statusCode: 0,
                result: EmptyRecord,
            };
            const params = new URLSearchParams([["recordid", recordid]]);
            await axios
                .get(config.baseUrl + "/findarecord", { params: params })
                .then((res) => {
                    response.statusCode = res.status;
                    response.result = res.data;
                })
                // Uncomment later when backend adds the error
                // .catch((err) => {
                //     response.statusCode = err.response.statusCode;
                //     response.code = err.code;
                // });
            return response;
        },
    };
};

export const EmptyRecord: RecordType = {
    subject: "",
    doctorUsername: "",
    doctorName: "",
    dateTime: "",
    patientUsername: "string",
    log: "",
    clinic: "",
};

export type RecordType = {
    subject: string;
    doctorUsername: string;
    doctorName: string;
    dateTime: string;
    patientUsername: string;
    log: string;
    clinic: string;
};
