import '../styles/Intro.scss'
import { CodeWriter } from "./CodeWriter";
import MicrosoftBlocks from '../assets/microsoft_blocks.svg'
import { ItadLogo } from '../constants';

export const Intro = () => {
  return (
    <>
      <section className="intro">
        <div className="header-container">
          <img src={ItadLogo} alt="ITAD Logo" className="itad-logo" />
          <div className="date">11 maja 2024r. 8:30 budynek C-13 Politechnika Wrocławska</div>
          <CodeWriter />
        </div>  
      </section>
      <div className="microsoft-blocks">
        <img src={MicrosoftBlocks} alt="Microsoft Blocks" />
      </div>
    </>
  );
};
