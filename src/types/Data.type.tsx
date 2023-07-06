export type SubDataType = {
  year: number;
  desc: string;
};

export type DataType = {
  startYear: number;
  endYear: number;

  name: string;
  angle?: number;
  subData: SubDataType[];
}[];

export const data: DataType = [
  {
    startYear: 1673,
    endYear: 1920,
    name: "Физика",
    subData: [
      {
        year: 1673,
        desc: "В 1673 году вышла книга Христиана Гюйгенса «Часы с маятником». В ней Гюйгенс приводит (словесно) ",
      },
      {
        year: 1821,
        desc: "К концу XVIII века в активе физики электромагнитных явлений были уже теория атмосферного электричества",
      },
      {
        year: 1873,
        desc: "Силы, введённые Ампером, как и у Ньютона, считались дальнодействующими",
      },
      {
        year: 1907,
        desc: "В статье 1905 года Эйнштейн рассмотрел два постулата: всеобщий принцип ",
      },
    ],
  },
  {
    startYear: 1523,
    endYear: 1998,
    name: "Биология",
    subData: [
      {
        year: 1523,
        desc: "Возникновение ятрохимии (направление алхимии, стремившееся поставить химию)",
      },
      {
        year: 1555,
        desc: "Основание сравнительной анатомии, публикуется Histoire de la nature des oyseaux.",
      },
      {
        year: 1805,
        desc: "Закон вертикальной зональности растительного мира",
      },
      {
        year: 1869,
        desc: "Открытие ДНК, названной нуклеином, как главной составной часть ядер клетки",
      },
      {
        year: 1903,
        desc: "Открыто, что хромосомы являются носителями наследственности",
      },
      {
        year: 1931,
        desc: "Продемонстрированы физические основы кроссинговера как причины ",
      },
      {
        year: 1998,
        desc: "Открытие эмбриональных стволовых клеток (Джеймс Томсон (гистолог), Д. Герхарт)",
      },
    ],
  },
  {
    startYear: 1572,
    endYear: 1800,
    name: "Химия",
    subData: [
      {
        year: 1572,
        desc: "Л. Турнейссер выполнил первые систематические анализы минеральных вод.",
      },
      {
        year: 1672,
        desc: "П. Сегнетт получил калиево-натриевую соль винной кислоты ('сегнетова соль').",
      },
      {
        year: 1707,
        desc: "И. Бётгер приготовил европейский белый фарфор.",
      },
      {
        year: 1747,
        desc: "Ж. Нолле открыл явление осмоса и ввёл понятие об осмотическом давлении.",
      },
      {
        year: 1784,
        desc: "А. Лавуазье и Ж. Мёнье осуществили термическое разложение воды.",
      },
      {
        year: 1800,
        desc: "А. Вольта изобрёл Вольтов столб – первый источник постоянного тока. ",
      },
    ],
  },
  {
    startYear: 1572,
    endYear: 1800,
    name: "Математика",
    subData: [
      {
        year: 1572,
        desc: "Л. Турнейссер выполнил первые систематические анализы минеральных вод.",
      },
      {
        year: 1672,
        desc: "П. Сегнетт получил калиево-натриевую соль винной кислоты ('сегнетова соль').",
      },
      {
        year: 1707,
        desc: "И. Бётгер приготовил европейский белый фарфор.",
      },
      {
        year: 1747,
        desc: "Ж. Нолле открыл явление осмоса и ввёл понятие об осмотическом давлении.",
      },
      {
        year: 1784,
        desc: "А. Лавуазье и Ж. Мёнье осуществили термическое разложение воды.",
      },
      {
        year: 1800,
        desc: "А. Вольта изобрёл Вольтов столб – первый источник постоянного тока. ",
      },
    ],
  },
  {
    startYear: 1572,
    endYear: 1800,
    name: "Математика",
    subData: [
      {
        year: 1572,
        desc: "Л. Турнейссер выполнил первые систематические анализы минеральных вод.",
      },
      {
        year: 1672,
        desc: "П. Сегнетт получил калиево-натриевую соль винной кислоты ('сегнетова соль').",
      },
      {
        year: 1707,
        desc: "И. Бётгер приготовил европейский белый фарфор.",
      },
      {
        year: 1747,
        desc: "Ж. Нолле открыл явление осмоса и ввёл понятие об осмотическом давлении.",
      },
      {
        year: 1784,
        desc: "А. Лавуазье и Ж. Мёнье осуществили термическое разложение воды.",
      },
      {
        year: 1800,
        desc: "А. Вольта изобрёл Вольтов столб – первый источник постоянного тока. ",
      },
    ],
  },
  {
    startYear: 1572,
    endYear: 1800,
    name: "Математика",
    subData: [
      {
        year: 1572,
        desc: "Л. Турнейссер выполнил первые систематические анализы минеральных вод.",
      },
      {
        year: 1672,
        desc: "П. Сегнетт получил калиево-натриевую соль винной кислоты ('сегнетова соль').",
      },
      {
        year: 1707,
        desc: "И. Бётгер приготовил европейский белый фарфор.",
      },
      {
        year: 1747,
        desc: "Ж. Нолле открыл явление осмоса и ввёл понятие об осмотическом давлении.",
      },
      {
        year: 1784,
        desc: "А. Лавуазье и Ж. Мёнье осуществили термическое разложение воды.",
      },
      {
        year: 1800,
        desc: "А. Вольта изобрёл Вольтов столб – первый источник постоянного тока. ",
      },
    ],
  },
];