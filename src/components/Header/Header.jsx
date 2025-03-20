import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import './Header.scss';
import logo from '../../assets/logo.svg';
import instagram from '../../assets/instagram.svg';
import linkedIn from '../../assets/linkedIn.svg';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { ref } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`} ref={ref}>
      <div className="container">
        <div className="header__container">
          <div className="header__content">
            <div className="header__logo">
              <a href="/">
                <img src={logo} alt="Logo" />
              </a>
            </div>
            
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item">
                  <a href="/" className="header__nav-link">Home</a>
                </li>
                <li className="header__nav-item">
                  <a href="/marketplace" className="header__nav-link">Marketplace</a>
                </li>
                <li className="header__nav-item">
                  <a href="/creators" className="header__nav-link">Creators</a>
                </li>
                <li className="header__nav-item">
                  <a href="/community" className="header__nav-link">Community</a>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className="header__cta">
            <button className="btn-primary">Connect Wallet</button>
          </div>
          
          <button 
            className={`header__mobile-menu-toggle ${mobileMenuOpen ? 'header__mobile-menu-toggle--active' : ''}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle Mobile Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          {mobileMenuOpen && (
            <div className="header__mobile-menu">
              <div className="header__mobile-content">
                <nav className="header__mobile-nav">
                  <ul className="header__mobile-nav-list">
                    <li className="header__mobile-nav-item">
                      <a 
                        href="/" 
                        className="header__mobile-nav-link"
                        onClick={handleMobileMenuLinkClick}
                      >
                        Home
                      </a>
                    </li>
                    <li className="header__mobile-nav-item">
                      <a 
                        href="/marketplace" 
                        className="header__mobile-nav-link"
                        onClick={handleMobileMenuLinkClick}
                      >
                        Marketplace
                      </a>
                    </li>
                    <li className="header__mobile-nav-item">
                      <a 
                        href="/creators" 
                        className="header__mobile-nav-link"
                        onClick={handleMobileMenuLinkClick}
                      >
                        Creators
                      </a>
                    </li>
                    <li className="header__mobile-nav-item">
                      <a 
                        href="/community" 
                        className="header__mobile-nav-link"
                        onClick={handleMobileMenuLinkClick}
                      >
                        Community
                      </a>
                    </li>
                  </ul>
                </nav>
                
                <div className="header__mobile-social">
                  <a href="#" className="header__mobile-social-link">
                    <img src={instagram} alt="Instagram" />
                  </a>
                  <a href="#" className="header__mobile-social-link">
                    <img src={linkedIn} alt="LinkedIn" />
                  </a>
                  <a href="#" className="header__mobile-social-link">
                    <img src={facebook} alt="Facebook" />
                  </a>
                  <a href="#" className="header__mobile-social-link">
                    <img src={twitter} alt="Twitter" />
                  </a>
                </div>
                
                <div className="header__mobile-cta">
                  <button 
                    className="btn-primary"
                    onClick={handleMobileMenuLinkClick}
                  >
                    Connect Wallet
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 