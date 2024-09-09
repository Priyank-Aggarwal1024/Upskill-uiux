import { dash } from "../../assets";

function VideoComp({ classN, link }) {
    return (
        <>
            <div className={`${classN}`}>
                <div className="tasklearning-dashimg-inner ">
                    {/* <img src={dash} alt="Dashboard" /> */}
                    <iframe className="dash-video-img" src={link} title="Upskill Mafia Virtual Campus Explanation Video #upskillmafia #campus #mernstack #tutorial #viral" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" data-gtm-yt-inspected-186654238_30="true" id="466221186" data-gtm-yt-inspected-186654238_36="true" data-gtm-yt-inspected-186654238_38="true" data-gtm-yt-inspected-186654238_40="true" data-gtm-yt-inspected-186654238_42="true" data-gtm-yt-inspected-186654238_44="true"></iframe>
                </div>
            </div>
        </>
    );
}

export default VideoComp;