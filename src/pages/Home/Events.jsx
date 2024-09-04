import { ipad } from '../../assets';
import '../../styles/Events.css'
function Events() {
    return (
        <div className="tasklearning">
            <h2 className="events-heading text-white">Exclusive Events by <span className="text-gradient">Ai and NO code</span> and <span className="text-gradient">Soft skill club</span> </h2>
            <div className="events-main">
                <div className="events-left">
                    <img src={ipad} alt="iPad" />
                </div>
                <div className="events-right">
                    <div className="event-card">
                        <div className="event-c-heading">Ai and NO code</div>
                        <ul className="event-c-points">
                            <li className="event-c-point">Improve your coding skills</li>
                            <li className="event-c-point">Improve problem solving skills </li>
                            <li className="event-c-point">Logic building and algorithm building </li>
                            <li className="event-c-point">Polish your Analytical and critical thinking skills </li>
                            <li className="event-c-point">You will get the opportunity to be a Sr. in our club.  </li>
                        </ul>
                    </div>
                    <div className="event-card">
                        <div className="event-c-heading">Soft skill  Club </div>
                        <ul className="event-c-points">
                            <li className="event-c-point">Inject the seed of leadership </li>
                            <li className="event-c-point">Improves your communication skills  </li>
                            <li className="event-c-point">Perform mock interview with your peers and mentors </li>
                            <li className="event-c-point">Improves your confidence and situations handling skills </li>
                            <li className="event-c-point">Learn how to lead teams for your projects and more </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Events;