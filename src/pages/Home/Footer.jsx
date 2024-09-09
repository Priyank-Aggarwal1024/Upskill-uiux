import { logo } from "../../assets";
import "../../styles/footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer className="main-section footer">
        <Link to="/">
          <img src={logo} alt="Footer Logo" />
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
            <a className="foot-link" href="https://upskillmafia.com/contactus">
              Contact us
            </a>
            <a className="foot-link" href="https://upskillmafia.com/aboutus">
              About US
            </a>

            <a className="foot-link" href="https://upskillmafia.com/refund">
              Refund
            </a>

            <a className="foot-link" href="https://upskillmafia.com/privacy">
              Privacy Policy
            </a>
          </div>
          <div className="footer-link">
            <a className="foot-link" href="https://upskillmafia.com/delivery">
              Shipping Policy
            </a>

            <a className="foot-link" href="https://upskillmafia.com/termsofuse">
              Terms of use
            </a>
          </div>
        </div>
        <p className="copyright">
          Copyright © 2024 Tutedude private limited. All rights reserved
        </p>
      </footer>
    </>
  );
}

export default Footer;