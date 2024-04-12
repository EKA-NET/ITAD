import '../styles/Intro.scss'
import { CodeWriter } from "./CodeWriter";

export const Intro = () => {
  return (
    <section className="intro">
      <div className="header-container">
        <h1 className="intro-header">IT Academic Day 2024</h1>
        <div className="date">11 maja 2024r. 9:00 budynek C-13 Politechnika Wrocławska</div>
        <CodeWriter />
      </div>
    </section>
  );
};
