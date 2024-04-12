import '../styles/Footer.scss'
import '../index.scss'
import FacebookIcon from '../assets/facebook.svg'
import WebsiteIcon from '../assets/website.svg'

export const Footer = () => {
  return (
    <>
      <footer className='center'>
        <div className="footer-icon-container">
          <a href="https://www.facebook.com/ekadotnet" className="icon-link">
            <img src={FacebookIcon} className='icon' alt="Facebook icon"/>
          </a>
          <a href="https://ekadotnet.pwr.edu.pl" className="icon-link">
            <img src={WebsiteIcon} className='icon' alt="Website icon"/>          
          </a>
        </div>
        <h3>EKA.NET {new Date().getFullYear()}</h3>
      </footer>
    </>
  );
};
