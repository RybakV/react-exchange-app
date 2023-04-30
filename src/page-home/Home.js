import './Home.css';
import { Link } from "react-router-dom"
import Hero from "../section-hero/Hero";
import Homecard from "../images/home-card.jpg";

function Home() {
    return (
        <>
            <Hero/>
            <section className="home">
                <div className="container home--container">
                    <div className="home--text">
                        <h1 className="home--title">Конвертер валют</h1>
                        <p>Переважна діяльність банківської групи за останні чотири звітні квартали становить 50 і більше відсотків.</p>
                        <Link to="/converter" className="home--btn btn">Конвертувати валюту</Link>
                    </div>
                    <div className="home--image">
                        <img src={Homecard} className="home--card" alt="Card" />
                    </div>
                </div>

            </section>
        </>
    );
}
export default Home;