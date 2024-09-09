import { gs1, gs2, gs3 } from '../../assets';
import VideoComp from '../../components/reusable/VideoComp';
import '../../styles/TaskLearning.css'
function Groupstudy() {
    return (
        <>
            <div className="tasklearning">
                <div className="tasklearning-top">
                    <div className="tasklearning-t-right">
                        <h2 className="text-white "><span className="text-gradient">Group Study with </span>your Peers</h2>
                        <VideoComp classN="dashimg-small tasklearning-t-left " link="https://www.youtube.com/embed/swSeye91dVg?si=vstx7KHzEkP84uSU" />
                        <div className="tasklearning-tr-main">
                            <div className="tasklearning-trm-cards">
                                <div className="tasklearning-trm-card">
                                    <div className="ttrmc-icon">
                                        <img src={gs1} alt="Task Lerning Icon1" />
                                    </div>
                                    <h3 className="ttrmc-desc text-white">
                                        Connect, collaborate and learn with your peers
                                    </h3>
                                </div>
                                <div className="tasklearning-trm-card">
                                    <div className="ttrmc-icon">
                                        <img src={gs2} alt="Task Lerning Icon 2" />
                                    </div>
                                    <h3 className="ttrmc-desc text-white">
                                        Work on group projects in virtual college
                                    </h3>
                                </div>
                                <div className="tasklearning-trm-card">
                                    <div className="ttrmc-icon">
                                        <img src={gs3} alt="Task Lerning Icon 3" />
                                    </div>
                                    <h3 className="ttrmc-desc text-white">
                                        Build lifelong friends
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <VideoComp classN="dashimg-large tasklearning-t-left " link="https://www.youtube.com/embed/swSeye91dVg?si=vstx7KHzEkP84uSU" />

                </div>
            </div>
        </>
    );
}

export default Groupstudy;