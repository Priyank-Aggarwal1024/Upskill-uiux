import { hi1, hi2, hi3, hi4, hi5, lang, lap } from '../../assets';
import '../../styles/Hero.css'
function Hero() {
    return (
        <>
            <div className="hero">
                <div className="hero-left-inner">
                    <div className="hero-left">
                        <div className="hero-left-top">
                            <div className="hero-lt-iit">
                                An IIT Delhi Alumni initiative
                            </div>
                            <h1 className="text-white">Master <span className="text-gradient2">UI/UX Design</span> in a  virtual College</h1>
                            <p className="hero-para">
                                A virtual space where Anyone can become a Pro UI/UX Designer by crafting project on figma (User Research, User Flow, Persona, Wireframe, Prototyping, Design Thinking )
                            </p>
                        </div>
                        <div className="hero-left-bottom">
                            <div className="hero-start-learning">
                                Start learning at ₹99
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-right">
                    <div className="hero-lap">
                        <img src={lap} alt="Hero lap" />
                        <iframe className="hero-video-img" src="https://www.youtube.com/embed/ekUNJ33IEQw?autoplay=1&amp;mute=1&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fupskillmafia.com" title="Upskill Mafia Virtual Campus Explanation Video #upskillmafia #campus #mernstack #tutorial #viral" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" data-gtm-yt-inspected-186654238_30="true" id="466221186" data-gtm-yt-inspected-186654238_36="true" data-gtm-yt-inspected-186654238_38="true" data-gtm-yt-inspected-186654238_40="true" data-gtm-yt-inspected-186654238_42="true" data-gtm-yt-inspected-186654238_44="true"></iframe>
                    </div>
                    <div className="hero-right-bottom">
                        <div className="hero-rb-left">
                            <img src={hi1} alt="Figma icon" />
                            <img src={hi2} alt="Figma icon" />
                            <img src={hi3} alt="Figma icon" />
                            <img src={hi4} alt="Figma icon" />
                            <img src={hi5} alt="Figma icon" />
                        </div>
                        <div className="hero-rb-right">
                            <div className="hero-rb-right-lang">
                                <img src={lang} alt="Lang Icon" />
                            </div>
                            <div className="hero-rbr-right">
                                <div className="hero-rbrr-top">Course Language:</div>
                                <div className="hero-rbrr-bottom">Hindi, English</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Hero;