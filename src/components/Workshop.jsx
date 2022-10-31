import { useParams } from "react-router-dom";
import { getWorkshop } from "../api";


export default function Workshop()
 {
    const obj = useParams()
    const getAWorkShop = getWorkshop(obj.workId)
    console.log(getAWorkShop)

    return (
        <>
            <h2>{getAWorkShop.name}</h2>
            <ul className="session-list">
                {getAWorkShop.sessions.map(session =>
                <li><p className="session-name">{session.name}</p><p>{session.speaker.name}</p><p>{session.speaker.org}</p></li>
                
                
            )}
            </ul>
        </>
    );
}
