import Registration from '../../components/registration/patientReg';
import Subtitle from '../../components/shared/subtitle';
import { useOutletContext } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  PatientInfo,
  PatientInfoResult,
  patientRequests,
} from "../../utils/requests/patient";
import { requestConfig } from "../../utils/requests/requestConfig";
import PageLoading from "../../components/shared/PageLoading";

function RegistrationPage() {
  const user = useOutletContext();
  const [userInfo, setUserInfo] = useState<PatientInfo | null>(null);
  const [isLoading, setIsLoading] = useState(false)

  const getInfo = async(username:string) => {
    setIsLoading(true)
    if(user) {

      let results = await patientRequests(requestConfig).getPatientInfo(username, "1", "1")
      if (results.result && results.result.error){
        setIsLoading(false)
        return
      }
      setUserInfo(results.result?.patientInfo || null)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    if(user) {
      getInfo((user as {username:string}).username)
    }
  }, [])

  if(isLoading) {
    return (
      <PageLoading />
    )
  }

  return (
    <div className="md:px-20 px-10 py-10">
      <Subtitle title='Update Info:' />
      <Registration user={user} userInfo={userInfo}/>
    </div>
  )
}

export default RegistrationPage;