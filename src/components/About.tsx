import '../styles/About.scss'
import { AboutInfo } from "../models/models";
import ItadPhoto from '../assets/itad.jpg';
import ClubPhoto from '../assets/Kolo.jpg';
import LecturePhoto from '../assets/prelegenci.jpg';
import ParticipantsPhoto from '../assets/uczestnicy.jpg';

export const About = () => {
  const aboutSections: Array<AboutInfo> = [
    {
      title: "Czym jest IT Academic Day?",
      content:
        "Jest to wydarzenie corocznie organizowane przez koło naukowe EKA.NET na Politechnice Wrocławskiej. Jeśli jesteś zainteresowany tematyką IT, chcesz poszerzyć swoją wiedzę i poznać nowych ludzi, to jest to wydarzenie dla Ciebie! W ramach wydarzenia odbędą się prelekcje, warsztaty oraz konkursy z nagrodami. Jest to też okazja do rozmów z przedstawicielami firm IT, którzy z chęcią opowiedzą o działalności swoich firm oraz zaproponują oferty pracy i staży.",
      imageSrc: ItadPhoto,
    },
    {
      title: "O organizatorach",
      content:
        "Koło naukowe EKA.NET jest organizacją studencką działającą na Politechnice Wrocławskiej od 2017 roku. Celem koła jest rozwijanie zainteresowań studentów związanych z branżą IT, głównie wokół technologii .NET i Azure a także organizacja wydarzeń z nią związanych. W ramach koła organizowane są wydarzenia, hackathony oraz wspólne wyjścia na konferencje. Koło jest również odpowiedzialne za coroczną organizację IT Academic Day - największego wydarzenia o tematyce IT na Politechnice Wrocławskiej.",
      imageSrc: ClubPhoto,
    },
    {
      title: "5 znanych firm ze świata IT",
      content:
        "W tym roku zapraszamy 5 prelegentów, którzy podzielą się swoją wiedzą i doświadczeniem z zakresu programowania. Każdy z prelegentów to specjalista w swojej dziedzinie, który z chęcią podzieli się swoją wiedzą z uczestnikami wydarzenia. Tematyki prelekcji będą różnorodne - powiązane z programowaniem, technologiami, a także z zarządzaniem projektami IT. Aby zobaczyć kto w tym roku będzie prelegentem, sprawdź zakładkę 'Sponsorzy'!",
      imageSrc: LecturePhoto,
    },
    {
      title: "Ponad 200 uczestników",
      content:
        "Tyle właśnie osób uczestniczyło w poprzedniej edycji ITAD! W tym roku chcielibyśmy zobaczyć jeszcze więcej osób, które chcą poszerzyć swoją wiedzę z zakresu IT. Jeśli jesteś zainteresowany tematyką IT, chcesz poszerzyć swoją wiedzę i poznać nowych ludzi, to jest to wydarzenie dla Ciebie!",
      imageSrc: ParticipantsPhoto,
    },
  ];

  return (
    <>
      <section className="about">
        {aboutSections.map(({ title, content, imageSrc }) => (
          <div className="about-container" key={title}>
            <img src={imageSrc} alt="Spotkanie" />
            <div className="about-text-container">
              <h2 className="about-header">{title}</h2>
              <p className="about-desc">{content}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
