import '../styles/Sponsors.scss'
import { Company } from '../models/models'
import { Constants, HuedMeLogo, PPGLogo, SenteLogo, TSGLogo, VolvoLogo, XebiaLogo } from '../constants'

export const Sponsors = () => {
  const itCompanies: Array<Company> = [
    { name: "Xebia", logoSrc: XebiaLogo, website: "https://xebia.com" },
    { name: "Ten Square Games", logoSrc: TSGLogo, website: "https://tensquaregames.com/pl/" },
    { name: "Sente", logoSrc: SenteLogo, website: "https://sente.pl" },
    { name: "Volvo", logoSrc: VolvoLogo, website: "https://www.volvogroup.com/pl/" },
    { name: "PPG", logoSrc: PPGLogo, website: "https://www.ppg.com"}
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

        <h3 className="featured-header center">Współorganizator</h3>
        <section className="companies">
          <a href="https://hued.me" target="_blank" rel="noopener noreferrer">
            <img src={HuedMeLogo} className="" alt="HuedMe" />
          </a>
        </section>

        <h3 className="featured-header center">Sponsorzy</h3>
        <section className="companies">
          {itCompanies.map((company) => (
            <a href={company.website} target="_blank" rel="noopener noreferrer">
              <img src={company.logoSrc} className="" alt={company.name} />
            </a>
          ))}
        </section>
      </main>
    </>
  );
};
