import {getWorkshops} from "../api";
import {NavLink, Outlet} from "react-router-dom";

export default function Workshops() {
    const workshops = getWorkshops();
    const getClass = ({ isActive }) => (isActive ? "nav-active" : null);
    

    return (
        <div className="container">
            <h1>Workshop Categories</h1>
            <ul className="workshops">
                {workshops.map(work => (
                    <NavLink className={getClass}
                    to={work.id}>
                        <li key={work.id}>
                            {work.name}
                        </li>
                    </NavLink>
                ))}
            </ul>
            <Outlet/>
        </div>
    );
}
