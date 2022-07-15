
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import MailIcon from '@mui/icons-material/Mail';
import "./Navbar.scss"; 

const Navbar = ({ menuOpen, setMenuOpen }) => {
    
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">blog.ly</a>
                    <div className="item-container">
                        <AccessibleForwardIcon className="icon" />
                        <span>+1 310 123 4017</span>
                    </div>
                    <div className="item-container">
                        <MailIcon className="icon" />
                        <span>db@db.dev</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar