import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './page-home/Home';
import Converter from './page-converter/Converter';
import Nopage from './page-not-found/Nopage';
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="app">
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/converter" element={<Converter/>}/>
                <Route path="/*" element={<Nopage/>}/>
            </Routes>
        <Footer/>
    </div>
  );
}

export default App;
