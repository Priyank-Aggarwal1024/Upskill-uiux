import { hi1, hi2, hi3, hi4, hi5, lang, laphero } from '../../assets';
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
                        <img src={laphero} alt="Hero lap" />
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