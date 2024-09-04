import { dblRight, ii1, ii2, mac } from '../../assets';
import '../../styles/Internship.css'
function Internship() {
    return (
        <>
            <div className="tasklearning">
                <h2 className="inter-heading text-white">
                    Unlimited <span className="text-gradient">Internship and Job</span>
                </h2>
                <div className="intern-main">
                    <div className="intern-left">
                        <div className="intern-card1">
                            <div className="intern-card-heading text-white">Build your <span className="text-gradient">Resume</span> :</div>
                            <div className="intern-c-card">
                                <div className="intern-cc-icon">
                                    <img src={ii1} alt="Internship Icon 1" />
                                </div>
                                <div className="interncc-desc">Professional Editable Template</div>
                            </div>
                            <div className="intern-c-card">
                                <div className="intern-cc-icon">
                                    <img src={ii2} alt="Internship Icon 2" />
                                </div>
                                <div className="interncc-desc">Easy Export: Download and share</div>
                            </div>
                        </div>
                        <div className="intern-card2">
                            <div className="intern-card-heading text-white">Become <span className="text-gradient">placement</span> ready :</div>
                            <div className="intern-card2-main">
                                <div className="intern-c-card">
                                    <div className="intern-cc-icon">
                                        <img src={dblRight} alt="Double Right" />
                                    </div>
                                    <div className="interncc-desc">Softskill and Personality Training</div>
                                </div>
                                <div className="intern-c-card">
                                    <div className="intern-cc-icon">
                                        <img src={dblRight} alt="Double Right" />
                                    </div>
                                    <div className="interncc-desc">Mock interview practice with Mentors and Peers. </div>
                                </div>
                                <div className="intern-c-card">
                                    <div className="intern-cc-icon">
                                        <img src={dblRight} alt="Double Right" />
                                    </div>
                                    <div className="interncc-desc">Resume, Cv and Portfolio building session</div>
                                </div>
                                <div className="intern-c-card">
                                    <div className="intern-cc-icon">
                                        <img src={dblRight} alt="Double Right" />
                                    </div>
                                    <div className="interncc-desc">Get real feedback on your interview performance immediately.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="intern-right">
                        <img src={mac} alt="Macbook" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Internship;