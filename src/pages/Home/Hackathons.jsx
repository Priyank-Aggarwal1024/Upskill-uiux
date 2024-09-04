import { dash, hac1, hac2 } from '../../assets';
import '../../styles/TaskLearning.css'
function Hackathons() {
    return (
        <>
            <div className="tasklearning">
                <div className="tasklearning-top">
                    <div className="tasklearning-t-right">
                        <h2 className="text-white "><span className="text-gradient">Hackathons </span>and challenges</h2>
                        <div className="tasklearning-t-left dashimg-small">
                            <div className="tasklearning-dashimg-inner ">
                                <img src={dash} alt="Dashboard" />
                            </div>
                        </div>
                        <div className="tasklearning-tr-main">
                            <div className="tasklearning-trm-cards">
                                <div className="tasklearning-trm-card">
                                    <div className="ttrmc-icon">
                                        <img src={hac1} alt="Hackathon Icon1" />
                                    </div>
                                    <h3 className="ttrmc-desc text-white">
                                        Win cash prize upto Rs10k
                                    </h3>
                                </div>
                                <div className="tasklearning-trm-card">
                                    <div className="ttrmc-icon">
                                        <img src={hac2} alt="Hackathon Icon 2" />
                                    </div>
                                    <h3 className="ttrmc-desc text-white">
                                        Work on real world problems with other students
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tasklearning-t-left dashimg-large">
                        <div className="tasklearning-dashimg-inner ">
                            <img src={dash} alt="Dashboard" />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default Hackathons;