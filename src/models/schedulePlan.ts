export type ScheduleItem = {
  time: string;
  title: string;
  description: string;
};

export const schedulePlan: Array<ScheduleItem> = [
  {
    time: "8:30 - 9:00",
    title: "Zapisy",
    description:
      "O 8:30 rozpoczną się zapisy na wydarzenie! Dla pierwszych 100 osób rozdamy welcome packi w których będziecie",
  },
  {
    time: "9:00 - 9:15",
    title: "Rozpoczęcie",
    description:
      "Zaczynamy nasze spotkanie! Zapraszamy wszystkich uczestników i rozpoczynamy od przywitania naszych prelegentów. Następnie omówimy plan wydarzenia oraz przedstawimy temat pierwszego wykładu.",
  },
  {
    time: "9:15 - 10:00",
    title: "Prelekcja 1",
    description:
      "Jak przygotować się na rozmowę rekrutacyjną - prelekcję poprowadzi Jan Nowak, zawodowy rekruter i szef działu HR w firmie X",
  },
  {
    time: "10:15 - 11:00",
    title: "Prelekcja 2",
    description:
      "O dobrych praktykach przy pisaniu testów jednostkowych - na wykładzie zostanie poruszony jeden z bardziej kontrowersyjnych podejść do programowania jakim jest TDD.",
  },
  {
    time: "11:15 - 12:00",
    title: "Prelekcja 3",
    description:
      "Wykład dotyczący rozwiązywania problemów związanych z bezpieczeństwem cybernetycznym, poprowadzi specjalista z zakresu bezpieczeństwa IT z firmy Y.",
  },
  {
    time: "12:15 - 13:00",
    title: "Prelekcja 4",
    description:
      "O nowych trendach w sztucznej inteligencji - wykład poprowadzi dr Anna Kowalska, ekspert w dziedzinie uczenia maszynowego z Uniwersytetu Z.",
  },
  {
    time: "13:15 - 14:00",
    title: "Przerwa na lunch",
    description:
      "Chwila przerwy od IT! Dla wszystkich uczestników wydarzenia zostaną rozdane pizze aby mieć siły na ostatnie dwa wykłady partnerów srebrnych!",
  },
  {
    time: "14:00 - 14:30",
    title: "Prelekcja 5",
    description:
      "Jak efektywnie zarządzać danymi w erze Big Data - prelekcję poprowadzi Michał Nowak, doświadczony analityk danych z firmy ABC.",
  },
  {
    time: "14:45 - 15:15",
    title: "Prelekcja 6",
    description:
      "Przyszłość blockchain w branży finansowej - prelekcję poprowadzi Karolina Wiśniewska, ekspert ds. technologii blockchain z banku XYZ.",
  },
  {
    time: "15:15 - 15:30",
    title: "Zakończenie oraz rozdanie nagród",
    description:
      "Podsumowanie wydarzenia oraz rozdanie nagród dla uczestników.",
  },
];