import axios from "axios"
import {RequestConfig} from "./requestConfig";

type patientRegistrationInfo = {
    userid: string,
    email: string,
    firstname: string,
    lastname: string,
    dateofbirth: string,
    healthcardnumber: string,
    phonenumber: string,
    address: string,
    postalcode: string
}


export const patientRequests = (config:RequestConfig) => {
    return {
        registerPatient: async (body: patientRegistrationInfo) => {
            let response: {statusCode: number, message: string} = {statusCode: 0, message: ''}
            await axios.post(config.baseUrl + 'registerpatientinfo', body).then((res) => {
                response.statusCode = res.status
                response.message = 'Patient ' + body.userid + ' has been registered'
            }).catch((err) => {
                response.statusCode = err.response.status
                response.message = 'Something has gone wrong'
            })
            return response
        }
    }
}