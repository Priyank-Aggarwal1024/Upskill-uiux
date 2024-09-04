import { Link } from 'react-router-dom';
import { ham, logo } from '../../assets';
import '../../styles/Navbar.css'
function Navbar({ setMobNav }) {
    return (
        <>
            <div className="navbar">
                <div className="nav-div">
                    <div className="nav-logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="nav-right">
                        <div className="nav-r-left">
                            <Link className="nav-link nav-link-active" to={"/"}>Home</Link>
                            <Link className="nav-link text-white" to={"/about"}>About</Link>
                            <Link className="nav-link text-white" to={"/explore"}>Explore</Link>
                            <Link className="nav-link text-white" to={"/faq"}>FAQ</Link>
                        </div>
                        <div className="flex nav-r-right">
                            <div className="nav-register-btn flex">Register Now</div>
                            <div className="flex nav-getstarted-btn">Get started</div>
                            <div className="nav-hamburger" onClick={() => setMobNav(true)}>
                                <img src={ham} alt="Hamburger" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;