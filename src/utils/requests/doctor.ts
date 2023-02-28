import axios from "axios"
import {RequestConfig} from "./requestConfig";

type doctorRegistrationInfo = {
    clinic: string,
    lastname: string,
    specialization: string,
    phonenumber: string,
    firstname: string,
    email: string,
    staffID: string,
    doctorid: string
}

type record = {
    recordid: string,
    date: string,
    doctorUsername: string,
    log: string,
    patientUsername: string,
    subject: string
}

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
        },

        registerDoctor: async (body: doctorRegistrationInfo) => {
            let response: {statusCode: number, message: string} = {statusCode: 0, message: ''}
            await axios.post(config.baseUrl + 'registerdoctorinfo', body).then((res) => {
                response.statusCode = res.status
                response.message = 'Doctor ' + body.doctorid + ' has been registered'
            }).catch((err) => {
                response.statusCode = 500
                response.message = 'Something has gone wrong'
            })
            return response
        },

        postRecord: async (record:record) => {
            let response: {statusCode: number, message: string} = {statusCode: 0, message: ''}
            await axios.post(config.baseUrl + 'registerrecord', record).then((res) => {
                response.statusCode = res.status
                response.message = 'The record has been succesfully posted'
            }).catch((err) => {
                response.statusCode = 500
                response.message = 'Something has gone wrong'
            })
            return response
        }
    }
}
