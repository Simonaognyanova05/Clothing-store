import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/admin/login">Admin</Link></li>
                </ul>
            </nav>
        </header>
    );
}