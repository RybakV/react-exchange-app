import './Hero.css';
import card from "../images/hero-card.png";
import {Link} from "react-router-dom";

function Hero() {
    return (
        <section className="hero">
            <div className="container hero--container">
                <div className="hero--text">
                    <h1 className="hero--header">Чіп Чендж</h1>
                    <h2 className="hero--subheader">Обмінник валют - навчальний</h2>
                    <Link to="/converter" className="hero--btn">Конвертер валют</Link>
                </div>
                <div className="hero--image">
                    <img src={card} className="hero--card" alt="Card" />
                </div>
            </div>
        </section>
    );
}
export default Hero;