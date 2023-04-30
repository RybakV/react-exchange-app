import logo from "../logo.svg";
import auth from "../images/icon-auth.svg";
import './Header.css';
import { Link, NavLink } from "react-router-dom"


function Header() {

    const navLinks = [
        {
            "url":"/",
            "title":"Головна"
        },
        {
            "url":"/converter",
            "title":"Конвертер валют"
        },
        {
            "url":"/ask",
            "title":"Задати питання"
        },
        {
            "url":"/contacts",
            "title":"Контакти"
        },

    ]

    return (
        <header className="header">
            <Link to="/" className="header--logo">
                <img src={logo} className="header--logo-img" alt="Логотип" /> Чіп Чендж
            </Link>
            <nav className="header--nav">

                {navLinks.map((item, index) => (
                    <NavLink key={index} to={item.url} className={({ isActive }) => (isActive ? 'header--nav-btn active' : 'header--nav-btn')}>{item.title}</NavLink>
                ))}


                {/*<NavLink to="/" className={({ isActive }) => (isActive ? 'header--nav-btn active' : 'header--nav-btn')}>Головна</NavLink>*/}
                {/*<NavLink to="/converter" className={({ isActive }) => (isActive ? 'header--nav-btn active' : 'header--nav-btn')}>Конвертер валют</NavLink>*/}
                {/*<NavLink to="/" className="header--nav-btn">Контакти</NavLink>*/}
                {/*<NavLink to="/" className="header--nav-btn">Задати питання</NavLink>*/}
            </nav>
            <nav className="header--auth">
                <Link to="/" className="header--auth-btn"> <img src={auth} className="header--auth-icon" alt="->" />Особистий кабінет</Link>
            </nav>
        </header>
    );
}
export default Header;