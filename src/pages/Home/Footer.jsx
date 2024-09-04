import { footerlogo } from "../../assets";
import "../../styles/footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="main-section footer">
        <Link to="/">
          <img src={footerlogo} alt="Footer Logo" />
        </Link>
        <div className="footer-links">
          <div className="footer-link">
            <h4 className="footer-heading">Contact us at</h4>
            <Link to="tel:+917404318177" className="foot-link text-white">
              +917404318177
            </Link>
            <Link
              to="mailto:upskillmafia@gmail.com"
              className="foot-link text-white"
            >
              upskillmafia@gmail.com
            </Link>
          </div>
          <div className="footer-link">
            <Link className="foot-link" to="/">
              UI/UX Resources
            </Link>
            <Link className="foot-link" to="/">
              Peer Learning
            </Link>

            <Link className="foot-link" to="/">
              Community
            </Link>

            <Link className="foot-link" to="/">
              Certification
            </Link>
          </div>
          <div className="footer-link">
            <Link className="foot-link" to="/">
              Hackathons
            </Link>

            <Link className="foot-link" to="/">
              Daily Challenges
            </Link>
          </div>
        </div>
        <p className="copyright">
          Copyright © 2023 upskillmafia. All rights reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;
