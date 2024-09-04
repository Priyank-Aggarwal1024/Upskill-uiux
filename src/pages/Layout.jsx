import { useState } from 'react';
import Certificate from './Home/Certificate';
import Coding from './Home/Coding';
import Company from './Home/Company';
import Curriculum from './Home/Curriculum';
import Dashboard from './Home/Dashboard';
import Events from './Home/Events';
import Faq from './Home/Faq';
import Footer from './Home/Footer';
import Groupstudy from './Home/Groupstudy';
import Hackathons from './Home/Hackathons';
import Hero from './Home/Hero';
import Internship from './Home/Internship';
import Mentorship from './Home/Mentorship';
import Navbar from './Home/Navbar';
import Program from './Home/Program';
import TaskLearning from './Home/TaskLearning';
import Testimonials from './Home/Testimonials';
import './Layout.css'
import { cross } from '../assets';
import { Link } from 'react-router-dom';
function Layout() {
    const [mobnav, setMobNav] = useState(false)
    return (
        <>
            <div className="upskill-uiux-layout">
                <Navbar setMobNav={setMobNav} />
                <Hero />
                <Program />
                <Curriculum />
                <TaskLearning />
                <Groupstudy />
                <Mentorship />
                <Hackathons />
                <Events />
                <Dashboard />
                <Certificate />
                <Internship />
                <Company />
                <Coding />
                <Testimonials />
                <Faq />
                <Footer />
            </div>
            {mobnav && <div className="mobnav">
                <div className="mob-nav-top">
                    <img src={cross} alt="Cross" onClick={() => setMobNav(false)} />
                </div>
                <div className="mobnav-links">
                    <Link className="mobnav-link nav-link-active" to={"/"}>Home</Link>
                    <Link className="mobnav-link text-white" to={"/about"}>About</Link>
                    <Link className="mobnav-link text-white" to={"/explore"}>Explore</Link>
                    <Link className="mobnav-link text-white" to={"/faq"}>FAQ</Link>
                </div>
            </div>}
        </>
    );
}

export default Layout;