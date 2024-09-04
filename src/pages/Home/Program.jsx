import { pi1, pi2, pi3, pi4, pi5, pi6 } from '../../assets';
import '../../styles/Program.css'
function Program() {
    return (
        <>
            <div className="program">
                <div className="program-inner">
                    <h2 className="text-white">This Program Includes </h2>
                    <div className="program-main">
                        <div className="program-card">
                            <div className="programp-ci-outer">
                                <div className="program-card-icon">
                                    <img src={pi1} alt="AI Powered Curriculum" />
                                </div>
                            </div>
                            <p className="program-card-text">AI Powered Curriculum</p>
                        </div>
                        <div className="program-card">
                            <div className="programp-ci-outer">
                                <div className="program-card-icon">
                                    <img src={pi2} alt="Live 1:1 Mentorship" />
                                </div>
                            </div>
                            <p className="program-card-text">Live 1:1 Mentorship</p>
                        </div>
                        <div className="program-card">
                            <div className="programp-ci-outer">
                                <div className="program-card-icon">
                                    <img src={pi3} alt="15+ UI/UX Projects & 3+ Case Studies" />
                                </div>
                            </div>
                            <p className="program-card-text">15+ UI/UX Projects & 3+ Case Studies</p>
                        </div>
                        <div className="program-card">
                            <div className="programp-ci-outer">

                                <div className="program-card-icon">
                                    <img src={pi4} alt="Case Study and Portfolio Assistance" />
                                </div>
                            </div>
                            <p className="program-card-text">Case Study and Portfolio Assistance</p>
                        </div>
                        <div className="program-card">
                            <div className="programp-ci-outer">

                                <div className="program-card-icon">
                                    <img src={pi5} alt="A certificate of Completion" />
                                </div>
                            </div>
                            <p className="program-card-text">A certificate of Completion</p>
                        </div>
                        <div className="program-card">
                            <div className="programp-ci-outer">

                                <div className="program-card-icon">
                                    <img src={pi6} alt="Internship & Job Assistance" />
                                </div>
                            </div>
                            <p className="program-card-text">Internship & Job Assistance</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Program;