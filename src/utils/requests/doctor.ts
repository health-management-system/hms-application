import axios from "axios"
import {RequestConfig} from "./requestConfig";


export const doctorRequests = (config:RequestConfig) => {
    return {
        getDoctorInfo: async (username:string) => {
            let response: {code: string, statusCode: number, result: {} | {
                    clinic: string,
                    lastname: string,
                    specialization: string,
                    dateofbirth: string,
                    phonenumber: string,
                    firstname: string,
                    email: string,
                    staffID: string,
                    doctorid: string
            } } = {code: "", statusCode: 0, result: {}}
            const params = new URLSearchParams([['username', username]])
            await axios.get(config.baseUrl + "finddoctor", {params}).then(res => {
                response.statusCode = res.status
                response.result = res.data
            }).catch(err => {
                response.statusCode = err.response.status;
                response.code = err.code
            })

            return response
        }
    }
}
