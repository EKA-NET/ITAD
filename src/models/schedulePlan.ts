import { PPGLogo, SenteLogo, TSGLogo, VolvoLogo, XebiaLogo } from "../constants";

/* eslint-disable no-multi-str */
export type ScheduleItem = {
  time: string;
  title: string;
  description: string;
  logoPath?: string;
};

export const schedulePlan: Array<ScheduleItem> = [
  {
    time: "8:30 - 9:00",
    title: "Zapisy",
    description:
      "O 8:30 rozpoczną się zapisy na wydarzenie! Dla pierwszych 100 osób rozdamy welcome packi w których znajdą się gadżety przygotowane przez koło oraz przez naszych sponsorów.",
  },
  {
    time: "9:00 - 9:15",
    title: "Rozpoczęcie",
    description: "Zaczynamy nasze spotkanie! Zapraszamy wszystkich uczestników i rozpoczynamy od przywitania naszych prelegentów. Następnie omówimy plan wydarzenia oraz przedstawimy temat pierwszego wykładu.",
  },
  {
    time: "9:15 - 10:00",
    title: "#1 Czy praca w Javie musi być nudna? #2 From Legacy to Legend: Utrzymywanie gry przez ponad pięć lat",
    description:
      "#1 Wojciech Korga, #2 Mateusz Kaleciński - Ten Square Games",
    logoPath: TSGLogo
  },
  {
    time: "10:15 - 11:00",
    title: "Utrzymywalność - jak tworzyć oprogramowanie którego nie trzeba się wstydzić",
    description: "Grzegorz Wilczura - Xebia",
    logoPath: XebiaLogo
  },
  {
    time: "11:15 - 12:00",
    title: "Jak rozwijać innowacje i efektywność w projektach IT? Czyli o mocy kultury ciągłego doskonalenia i praktycznym zastosowaniu retrospekcji",
    description: "Paweł Urban - Sente",
    logoPath: SenteLogo
  },
  {
    time: "12:00 - 12:45",
    title: "Przerwa / Lunch",
    description:
      "Przerwa na pizzę ;)",
  },
  {
    time: "12:45 - 13:15",
    title: "Jak nie zostać Juniorem z 15-letnim stażem",
    description: "Sebastian Pietrzak - PPG",
    logoPath: PPGLogo
  },
  {
    time: "13:30 - 14:00",
    title: "Konteneryzacja - dlaczego ją uwielbiamy?",
    description: "Mateusz Kawa - Volvo",
    logoPath: VolvoLogo
  },
  {
    time: "14:00 - 14:20",
    title: "Zakończenie oraz rozdanie nagród",
    description: "Podsumowanie wydarzenia oraz rozdanie nagród dla uczestników.",
  },
];