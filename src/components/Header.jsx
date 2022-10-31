import { NavLink, Link } from "react-router-dom";
import logo from "../assets/schoolhacks-logo.png";

export default function Header() {
    const getClass = ({ isActive }) => (isActive ? "nav-active" : null);


    return (
        <header className="container">
            <Link to="/">
                <img
                    className="logo"
                    src={logo}
                    alt="SchoolHacks logo"
                    title="SchoolHacks | Home"
                />
            </Link>

            <nav>
                <NavLink className={getClass} to="/" >Home</NavLink>
                <NavLink className={getClass} to="/about">About</NavLink>
                <NavLink className={getClass} to="/workshops">Workshops</NavLink>
            </nav>
        </header>
    );
}
