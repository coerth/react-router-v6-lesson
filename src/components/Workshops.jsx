import {getWorkshops} from "../api";
import {Link, Outlet} from "react-router-dom";
import Workshop from "./Workshop";

export default function Workshops() {
    const workshops = getWorkshops();
    return (
        <div className="container">
            <h1>Workshop Categories</h1>
            <ul className="workshops">
                {workshops.map(work => (
                    <Link to={work.id}>
                        <li key={work.id}>
                            <Link to={`/workshops/${work.id}`}>
                            {work.name}
                            </Link>
                           
                        </li>
                    </Link>
                ))}
            </ul>
            <Outlet/>
        </div>
    );
}
