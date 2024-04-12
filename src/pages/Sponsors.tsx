import '../styles/Sponsors.scss'
import HuedMeLogo from '../assets/HuedMe_Logo.svg'
import XebiaLogo from '../assets/Xebia_Logo_White.png'
import TSGLogo from '../assets/TSG_Logo.png'
import SenteLogo from '../assets/Sente_Logo.png'
import VolvoLogo from '../assets/Volvo_Logo.png'
import NFJLogo from '../assets/NFJ_Logo.png'
import { Company } from '../models/models';
import { Constants } from '../constants'

export const Sponsors = () => {
  const itCompanies: Array<Company> = [
    { name: "Hued.me", logoSrc: HuedMeLogo, website: "https://hued.me" },
    { name: "Xebia", logoSrc: XebiaLogo, website: "https://xebia.com" },
    { name: "Ten Square Games", logoSrc: TSGLogo, website: "https://tensquaregames.com/pl/" },
    { name: "Sente", logoSrc: SenteLogo, website: "https://sente.pl" },
    { name: "Volvo", logoSrc: VolvoLogo, website: "https://www.volvogroup.com/pl/" },
  ];

  const supportCompanies: Array<Company> = [
    { name: "NoFluffJobs", logoSrc: NFJLogo, website: "https://nofluffjobs.com" },
  ];

  return (
    <>
      <title>{Constants.SITE_NAME + " - Sponsorzy"}</title>
      <main>
        <div>
          <h1 className="start-header">Poznaj naszych sponsorów!</h1>
          <p className="center">
            (Tematy prelekcji zostaną wkrótce przekazane!)
          </p>
        </div>

        <h3 className="featured-header center">Prelegenci</h3>
        <section className="companies">
          {itCompanies.map((company) => (
            <a href={company.website} target="_blank" rel="noopener noreferrer">
              <img src={company.logoSrc} className="" alt={company.name} />
            </a>
          ))}
        </section>

        <h3 className="featured-header center">Wsparcie</h3>
        <section className="companies support-companies">
          {supportCompanies.map((company) => (
            <a href={company.website} target="_blank" rel="noopener noreferrer">
              <img src={company.logoSrc} alt={company.name} />
            </a>
          ))}
        </section>
      </main>
    </>
  );
};
