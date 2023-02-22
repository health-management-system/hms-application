import Registration from '../../components/registration/patientReg';
import Subtitle from '../../components/shared/subtitle';
import { useOutletContext } from 'react-router-dom';

function RegistrationPage() {
  const user = useOutletContext();
  return (
    <div className="md:px-20 px-10 py-10">
      <Subtitle title='Update Info:' />
      <Registration user={user}/>
    </div>
  )
}

export default RegistrationPage;