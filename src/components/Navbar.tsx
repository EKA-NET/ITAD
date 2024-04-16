import '../styles/Navbar.scss';
import MicrosoftLogo from "../assets/Microsoft_Logo.png";
import Regulamin from "../assets/regulamin.pdf";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <div className="mobile-menu">
          <span className="material-symbols-outlined mobile-open-menu">menu</span>
          <div className="mobile-drawer">
            <div className="bold-big mobile-menu-header">
              <span className="material-symbols-outlined mobile-open-menu">menu</span>
              <span>ITAD</span>
            </div>
            <a href="http://www.ekadotnet.pwr.edu.pl" className="nav-link">EKA.NET</a>
            <a href="sponsors" className="nav-link">Sponsorzy</a>
            <a href="https://forms.gle/gPkGk2KDxd8xeLDp9" className="nav-link">Rejestracja</a>
          </div>
        </div>
        <a href="/" className="nav-link">ITAD</a>
        <a href="http://www.ekadotnet.pwr.edu.pl" className="nav-link eka">
          EKA
          <img className="microsoft-logo" alt="" src={MicrosoftLogo} />
          NET
        </a>
      </div>
      <div className="nav-right">
        <a href="schedule" className="nav-link">Harmonogram</a>
        <a href={Regulamin} target='_blank' className="nav-link" rel="noopener noreferrer">Regulamin</a>
        <a href="https://forms.gle/gPkGk2KDxd8xeLDp9" className="nav-link">Rejestracja</a>
        <a href="sponsors" className="nav-link">Sponsorzy</a>
      </div>
    </nav>
  );
};
