import './Nopage.css';
import { Link } from "react-router-dom"

function Nopage() {
    return (
        <div className="page-404">
            <div className="container">
                <h1 className="page-404--title">Page not found</h1>
                <Link to="/" className="btn">Назад на головну</Link>
            </div>
        </div>
    );
}
export default Nopage;