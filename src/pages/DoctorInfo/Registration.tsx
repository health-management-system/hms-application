import Registration from '../../components/registration/doctorReg';
import Subtitle from '../../components/shared/subtitle';
import { useOutletContext } from 'react-router-dom'
import { doctorRequests, DoctorInfo } from "../../utils/requests/doctor";
import { requestConfig } from "../../utils/requests/requestConfig";
import PageLoading from "../../components/shared/PageLoading";
import { useState, useEffect } from 'react';

function RegistrationPage() {
  const user = useOutletContext();
  const [userInfo, setUserInfo] = useState<DoctorInfo | {}>({});
  const [isLoading, setIsLoading] = useState(false)

  const getInfo = async(username:string) => {
    setIsLoading(true)
    if(user) {

      let results = await doctorRequests(requestConfig).getDoctorInfo(username)
      if (typeof(results.result) === "object" && Object.keys(results.result).length < 2){
        setIsLoading(false)
        return
      }
      setUserInfo(results.result || {})
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