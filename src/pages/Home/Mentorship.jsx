import { dash, me1, me2, tl2 } from '../../assets';
import '../../styles/Mentorship.css'
function Mentorship() {
    return (
        <>
            <div className="mentor">
                <h2 className="text-white mentor-heading">Live 1:1 <span className="text-gradient">mentorship</span></h2>
                <div className="mentor-top">
                    <div className="mentor-t-left">
                        <div className="mentor-dashimg-inner ">
                            <img src={dash} alt="Dashboard" />
                        </div>
                    </div>
                    <div className="mentor-t-right">
                        <div className="mentor-tr-main">
                            <div className="mentor-trm-cards">
                                <div className="mentor-trm-card">
                                    <div className="mtrmc-icon">
                                        <img src={me1} alt="Mentorship Icon 1" />
                                    </div>
                                    <h3 className="mtrmc-desc text-white">
                                        Connect with mentors everyday @ 8:00 pm to 11:00pm
                                    </h3>
                                </div>
                                <div className="mentor-trm-card">
                                    <div className="mtrmc-icon">
                                        <img src={tl2} alt="Mentorship Icon  2" />
                                    </div>
                                    <h3 className="mtrmc-desc text-white">
                                        Immediate Personalized Guidance and Project Assistance
                                    </h3>
                                </div>
                                <div className="mentor-trm-card">
                                    <div className="mtrmc-icon">
                                        <img src={me2} alt="Mentorship Icon  3" />
                                    </div>
                                    <h3 className="mtrmc-desc text-white">
                                        Real time feedback and doubt solving by mentors
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mentor-bottom">
                    <div className="mentor-b-card">
                        <div className="mentor-bc-heading">
                            5000+
                        </div>
                        <div className="mentor-bc-desc">
                            Hours of
                            Mentorship
                        </div>
                    </div>
                    <div className="mentor-b-card">
                        <div className="mentor-bc-heading">
                            2k+
                        </div>
                        <div className="mentor-bc-desc">
                            Assignments reviewed
                        </div>
                    </div>
                    <div className="mentor-b-card">
                        <div className="mentor-bc-heading">
                            10k+
                        </div>
                        <div className="mentor-bc-desc">
                            Doubts Solved
                        </div>
                    </div>
                    <div className="mentor-b-card">
                        <div className="mentor-bc-heading">
                            4.85 <span className="span5">(5)</span>
                        </div>
                        <div className="mentor-bc-desc">
                            Mentor’s Rating
                        </div>
                    </div>
                    <div className="mentor-b-card">
                        <div className="mentor-bc-heading">
                            1 : 1
                        </div>
                        <div className="mentor-bc-desc">
                            CV Building with Mentors
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mentorship;