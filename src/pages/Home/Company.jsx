import Marquee from 'react-fast-marquee';
import { m1, m2, m3, m4, m5, m6, m7, m8, m9 } from '../../assets';
import '../../styles/Company.css'
function Company() {
    return (
        <section className="main-section relative">
            <h2 className="company-heading section-heading inline-block">
                Top Companies Hiring for{" "}
                <span className="text-gradient">
                    UI/UX Designers
                </span>
            </h2>
            <div className="companies-card">
                <Marquee>
                    <img src={m1} alt="Company image" />
                    <img src={m2} alt="Company image" />
                    <img src={m3} alt="Company image" />
                    <img src={m4} alt="Company image" />
                    <img src={m5} alt="Company image" />
                    <img src={m6} alt="Company image" />
                    <img src={m7} alt="Company image" />
                    <img src={m8} alt="Company image" />
                    <img src={m9} alt="Company image" />
                </Marquee>
            </div>
        </section>
    );
}

export default Company;