import logo from "../logo.svg";
import iconPhone from "../images/icon-phone.svg";
import iconMobile from "../images/icon-mobile.svg";
import './Footer.css';
import { Link } from "react-router-dom"

function Footer() {

    const footerLinks = [
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
        <footer className="footer">
            <div className="footer--copyright">
                <Link to="/" className="footer--logo">
                    <img src={logo} className="header--logo-img" alt="Логотип" /> Чіп Чендж
                </Link>
                <p>
                    04128, м.Київ, вул. Хрещатик, 19<br/>
                    Ліцензія НБУ №156<br/>
                    &copy; ПАТ ЧіпЧендж, 2019-2023
                </p>
            </div>
            <nav className="footer--nav">
                {footerLinks.map((item, index) => (
                    <Link key={index} to={item.url} className="footer--nav-btn">{item.title}</Link>
                ))}
            </nav>
            <div>
                <div className="footer--phone-number"><img src={iconMobile} className="footer--mobile-icon" alt="Mobile"/> 3773</div>
                Цілодобова підтримка
            </div>
            <div>
                <div className="footer--phone-number"><img src={iconPhone} className="footer--phone-icon" alt="Phone"/> +38 (050) 111 22 33</div>
                Безкоштовно для дзвінків в межах України
            </div>
            <div className="footer--socials">
                <a href="/" className="footer--socials-icon"><span className="footer--socials-icon__facebook"></span></a>
                <a href="/" className="footer--socials-icon"><span className="footer--socials-icon__instagram"></span></a>
                <a href="/" className="footer--socials-icon"><span className="footer--socials-icon__twitter"></span></a>
                <a href="/" className="footer--socials-icon"><span className="footer--socials-icon__youtube"></span></a>
            </div>
        </footer>
    );
}
export default Footer;