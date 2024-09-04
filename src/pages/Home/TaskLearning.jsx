import { dash, tl1, tl2, tl3 } from '../../assets'
import '../../styles/TaskLearning.css'
function TaskLearning() {
    return (
        <>
            <div className="tasklearning">
                <div className="tasklearning-top">
                    <div className="tasklearning-t-left dashimg-large">
                        <div className="tasklearning-dashimg-inner ">
                            <img src={dash} alt="Dashboard" />
                        </div>
                    </div>
                    <div className="tasklearning-t-right">
                        <h2 className="text-white ">Task based <span className="text-gradient">Learning</span></h2>
                        <div className="tasklearning-t-left dashimg-small">
                            <div className="tasklearning-dashimg-inner ">
                                <img src={dash} alt="Dashboard" />
                            </div>
                        </div>
                        <div className="tasklearning-tr-main">
                            <div className="tasklearning-trm-cards">
                                <div className="tasklearning-trm-card">
                                    <div className="ttrmc-icon">
                                        <img src={tl1} alt="Task Lerning Icon1" />
                                    </div>
                                    <h3 className="ttrmc-desc text-white">
                                        Interactive lectures to learn complete UI/UX Design
                                    </h3>
                                </div>
                                <div className="tasklearning-trm-card">
                                    <div className="ttrmc-icon">
                                        <img src={tl2} alt="Task Lerning Icon 2" />
                                    </div>
                                    <h3 className="ttrmc-desc text-white">
                                        Build 15+ Assignments and case studies
                                    </h3>
                                </div>
                                <div className="tasklearning-trm-card">
                                    <div className="ttrmc-icon">
                                        <img src={tl3} alt="Task Lerning Icon 3" />
                                    </div>
                                    <h3 className="ttrmc-desc text-white">
                                        Lectures available in both hindi and english
                                    </h3>
                                </div>
                            </div>
                            <div className="hero-start-learning dashimg-large">
                                Start learning at ₹99
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default TaskLearning
