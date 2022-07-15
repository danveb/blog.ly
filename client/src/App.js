import { useState } from "react"; 
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Intro from "./pages/Intro";
import "./App.scss"; 
import Menu from "./components/Menu";

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false); 

    return (
        <div className="app">
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="sections">
                <Intro />
                <Contact />
            </div>
        </div>
    )
}

export default App