import './Footer.scss';
import logo from '../../assets/logo.svg';
import instagram from '../../assets/instagram.svg';
import linkedIn from '../../assets/linkedIn.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';

const Footer = () => {
  const socialLinks = (
    <>
      <a href="#" className="footer__social-link">
        <img src={instagram} alt="Instagram" />
      </a>
      <a href="#" className="footer__social-link">
        <img src={linkedIn} alt="LinkedIn" />
      </a>
      <a href="#" className="footer__social-link">
        <img src={facebook} alt="Facebook" />
      </a>
      <a href="#" className="footer__social-link">
        <img src={twitter} alt="Twitter" />
      </a>
    </>
  );

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top-mobile">
          <div className="footer__top">
            <div className="footer__logo-wrapper">
              <img src={logo} alt="DiveSea Logo" className="footer__logo-img" />
              <h2 className="footer__logo-text">DiveSea</h2>
            </div>
          
            <nav className="footer__nav">
              <a href="#" className="footer__nav-link">Privacy Policy</a>
              <a href="#" className="footer__nav-link">Term & Conditions</a>
              <a href="#" className="footer__nav-link">About Us</a>
              <a href="#" className="footer__nav-link">Contact</a>
            </nav>
          </div>
          <div className="footer__social footer__social-mobile">
            {socialLinks}
          </div>
        </div>
        
        <div className="footer__divider"></div>
        
        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>© 2023</p>
          </div>
          <div className="footer__copyright footer__copyright-mobile">
            <p>© 2023 DiveSea All Rights Reserved.</p>
          </div>
          
          <div className="footer__social">
            {socialLinks}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 