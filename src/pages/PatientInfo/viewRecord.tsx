import Subtitle from '../../components/shared/subtitle';
import PatientRecord from '../../components/shared/patient_record';
import { generalRequests, RecordType, EmptyRecord } from '../../utils/requests/general';
import { requestConfig } from '../../utils/requests/requestConfig';
import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from "react-router-dom";

// const mockRecord = {
//     subject: "Sickness",
//     doctorName: "Dr John Smith",
//     clinic: "Waterloo Central",
//     date: "10/17/2021",
//     log: "Paragraphs are units of writing larger than a sentence and smaller than a section and generally express a single idea or topic. Proper paragraphing and paragraph writing have several key benefits in medical writing which include organizing the meaning of the text, making the text readable and visually pleasing, and enabling efficient skimming and referencing of the text. Well-constructed paragraphs usually consist of a topic sentence, supporting sentences, and sometimes a concluding sentence. Properly writing and arranging these elements with structure, unity, and cohesion in mind will improve readability and fully exploit the advantages of a paragraph. Knowing when to make paragraph divisions can depend on the function of that paragraph. Medical texts can be divided into distinct functions depending on the section they are found in, and these functions can each be a paragraph or a paragraph series. Furthermore, different paragraph types (descriptive, definition, narrative, compare/contrast paragraphs, etc.) each with their characteristic organization, grammar, and vocabulary, can correspond to a given function and thus inform writers about how to most effectively write that function paragraph."
// }

function ViewRecord() {

    const [Record, setRecord] = useState<RecordType>(EmptyRecord)
    const [foundRecord, setFoundRecord] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [hasRecordID, setHasRecordID] = useState(false);
    const [searchParams] = useSearchParams();
    let navigate = useNavigate()

    const patientInfo = () => {
        let path = '/patientinfo'
        navigate(path)
    }

    const getRecord = async(recordid: string) => {
        setLoading(true)
        const result = await generalRequests(requestConfig).getRecord(recordid)
        if(result.statusCode === 200 && Object.keys(result.result).length !== 0){
            setRecord(result.result)
            setFoundRecord(true)
        }
        setLoading(false)
    }

    useEffect(() => {
        const recordid = searchParams.get("recordid")
        console.log(recordid)
        if (recordid != null) {
            setHasRecordID(true)
            getRecord(recordid)
        }
      }, [])

    if(!hasRecordID) {
        return (
            <h1>Error: missing a recordid key</h1>
        )
    }

    if(!foundRecord) {
        return (
            <h1>Error: record not found</h1>
        )
    }
    
    return (
        <div className="md:px-20 px-10 py-10">
            <Subtitle title='Record:' />
            <PatientRecord record={Record} />
            <button className="bg-priCol hover:bg-priHover text-white font-bold py-3 px-8 rounded-md my-6" onClick={patientInfo}>Back</button>
        </div>
    )

}

export default ViewRecord;