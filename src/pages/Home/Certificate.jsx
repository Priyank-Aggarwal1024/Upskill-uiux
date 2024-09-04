import { certificate } from '../../assets';
import '../../styles/Certificate.css'
function Certificate() {
    return (
        <section className="certificate">

            <h2 className="certificate-heading section-heading inline-block">
                Earn Your Industry-<div className="text-gradient">Recognized Certificate</div>
            </h2>
            <p className="certificate-line">Complete all lectures and assignments to receive your certification!</p>
            <div className="certificate-img">
                <img src={certificate} alt="Certificate" />
            </div>
        </section>
    );
}

export default Certificate;