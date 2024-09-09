import { hac1, hac2 } from '../../assets';
import VideoComp from '../../components/reusable/VideoComp';
import '../../styles/TaskLearning.css'
function Hackathons() {
    return (
        <>
            <div className="tasklearning">
                <div className="tasklearning-top hackathon-top">
                    <div className="tasklearning-t-right">
                        <h2 className="text-white "><span className="text-gradient">Hackathons </span>and challenges</h2>
                        <VideoComp classN="dashimg-small tasklearning-t-left " link="https://www.youtube.com/embed/6SI5w1YOFzA?si=gBG1Kl1Af1qRQODN" />
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
                    <VideoComp classN="dashimg-large tasklearning-t-left " link="https://www.youtube.com/embed/6SI5w1YOFzA?si=gBG1Kl1Af1qRQODN" />
                </div>
            </div>
        </>
    );
}

export default Hackathons;