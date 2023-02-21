import Registration from '../../components/registration/doctorReg';
import { useOutletContext } from 'react-router-dom'

function RegistrationPage() {
  const user = useOutletContext();
  return (
    <Registration user={user}/>
  )
}

export default RegistrationPage;