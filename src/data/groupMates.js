const groupMates = [
  {
    firstName: 'Наталія',
    lastName: 'Алієва',
    dateBirth: 2530137600000,
    sex: 'female',
    id: 1,
    story: 'світла дівчина',
    image: 'alieva-01.jpg',
    url: '',
  },
  {
    firstName: 'Олена',
    lastName: 'Березова',
    dateBirth: undefined,
    sex: 'female',
    id: 2,
    story: '',
    image: 'berezova-02.jpg',
    url: '',
  },
  {
    firstName: 'Тетяна',
    lastName: 'Біла',
    dateBirth: 2495836800000,
    sex: 'female',
    id: 3,
    story:
      'Якось на святі ми змагалися, хто швидше прибіжить з пункту А до пункту Б (челночний біг). Так ось, Тетяна мене випередила тоді. Я ще був дуже здивований, як так, що мене дівуля перемогла? А згодом, я дізнався, що Тетяна займалася легкою атлетикою.',
    image: 'bila-03.jpg',
    url: 'https://www.facebook.com/profile.php?id=100022192518294',
  },
  {
    firstName: 'Сергій',
    lastName: 'Бондаренко',
    dateBirth: 2538000000000,
    sex: 'male',
    id: 4,
    story: '',
    image: 'bondarenko-04.jpg',
    url: 'https://www.facebook.com/profile.php?id=100003191563688',
  },
  {
    firstName: 'Алла',
    lastName: 'Бугайова ',
    dateBirth: undefined,
    sex: 'female',
    id: 5,
    story: '',
    image: 'bugayova-05.jpg',
    url: '',
  },
  {
    firstName: 'Сергій',
    lastName: 'Васильєв ',
    dateBirth: 2523571200000,
    sex: 'male',
    id: 6,
    story: '',
    image: 'vasyliv-06.jpg',
    url: 'https://www.facebook.com/profile.php?id=100005367706457',
  },
  {
    firstName: 'Інна',
    lastName: 'Волкова',
    dateBirth: 2543529600000,
    sex: 'female',
    id: 7,
    story: '',
    image: 'volkova-07.jpg',
    url: 'https://www.facebook.com/inna.volkova2',
  },
  {
    firstName: 'Дмитро',
    lastName: 'Горжий',
    dateBirth: 2520201600000,
    sex: 'male',
    id: 8,
    story: '',
    image: 'gorjiy-08.jpg',
    url: '',
  },
  {
    firstName: 'Ганна',
    lastName: 'Д`яченко',
    dateBirth: undefined,
    sex: 'female',
    id: 9,
    story: '',
    image: 'dachenko-09.jpg',
    url: '',
  },
  {
    firstName: 'Андрій',
    lastName: 'Д`ячков',
    dateBirth: 2531174400000,
    sex: 'male',
    id: 10,
    story: '',
    image: 'dyachkov-10.jpg',
    url: 'https://www.facebook.com/profile.php?id=100023177715064',
  },
  {
    firstName: 'Олександр',
    lastName: 'Дудник',
    dateBirth: 2500156800000,
    sex: 'male',
    id: 11,
    story: '',
    image: 'dudnik-11.jpg',
    url: '',
  },
  {
    firstName: 'Сергій',
    lastName: 'Жовтяк',
    dateBirth: 2535494400000,
    sex: 'male',
    id: 12,
    story: '',
    image: 'jovtyak-12.jpg',
    url: 'https://www.facebook.com/serstranger',
  },
  {
    firstName: 'Роман',
    lastName: 'Жуков',
    dateBirth: undefined,
    sex: 'male',
    id: 13,
    story: '',
    image: 'jukov-13.jpg',
    url: '',
  },
  {
    firstName: 'Наталія',
    lastName: 'Журавель',
    dateBirth: undefined,
    sex: 'female',
    id: 14,
    story: '',
    image: '',
    url: '',
  },
  {
    firstName: 'Євген',
    lastName: 'Іванчук',
    dateBirth: undefined,
    sex: 'male',
    id: 15,
    story: '',
    image: 'ivanchuck-15.jpg',
    url: '',
  },
  {
    firstName: 'Ольга',
    lastName: 'Іонко',
    dateBirth: 2529532800000,
    sex: 'female',
    id: 16,
    story: '',
    image: 'ionko-16.jpg',
    url: 'https://www.facebook.com/profile.php?id=100009565475858',
  },
  {
    firstName: 'Людмила',
    lastName: 'Калаптур',
    dateBirth: 2539814400000,
    sex: 'female',
    id: 17,
    story: '',
    image: '',
    url: 'https://www.facebook.com/profile.php?id=100055040817289',
  },
  {
    firstName: 'Віталий',
    lastName: 'Капустов',
    dateBirth: 2520806400000,
    sex: 'male',
    id: 18,
    story: '',
    image: '',
    url: 'https://www.facebook.com/profile.php?id=100058241961662',
  },
  {
    firstName: 'Сергій',
    lastName: 'Кардашов',
    dateBirth: undefined,
    sex: 'male',
    id: 19,
    story: '',
    image: 'kardashov-19.jpg',
    url: '',
  },
  {
    firstName: 'Вадим',
    lastName: 'Катлубей',
    dateBirth: undefined,
    sex: 'male',
    id: 20,
    story: '',
    image: 'katlubey-20.jpg',
    url: '',
  },
  {
    firstName: 'Ігор',
    lastName: 'Кигим',
    dateBirth: 2539728000000,
    sex: 'male',
    id: 21,
    story: '',
    image: 'kigim-21.jpg',
    url: '',
  },
  {
    firstName: 'Віталий',
    lastName: 'Козлов ',
    dateBirth: undefined,
    sex: 'male',
    id: 22,
    story: 'розумний хлопець',
    image: 'kozlov-22.jpg',
    url: '',
  },
  {
    firstName: 'Наталія',
    lastName: 'Костюченко ',
    dateBirth: 2552601600000,
    sex: 'female',
    id: 23,
    story: '',
    image: 'kostuchenko-23.jpg',
    url: 'https://www.facebook.com/natali.fursova.52',
  },
  {
    firstName: 'Денис',
    lastName: 'Лисенко',
    dateBirth: 2529273600000,
    sex: 'male',
    id: 24,
    story: '',
    image: 'lysenko-24.jpg',
    url: 'https://www.facebook.com/profile.php?id=100001281440746',
  },
  {
    firstName: 'Олена',
    lastName: 'Литовченко',
    dateBirth: undefined,
    sex: 'female',
    id: 25,
    story: '',
    image: '',
    url: '',
  },
  {
    firstName: 'Світлана',
    lastName: 'Мадика',
    dateBirth: 2518473600000,
    sex: 'female',
    id: 26,
    story: '',
    image: '',
    url: 'https://www.facebook.com/profile.php?id=100068305741834',
  },
  {
    firstName: 'Олексій',
    lastName: 'Могильный',
    dateBirth: 2539382400000,
    sex: 'male',
    id: 27,
    story: '',
    image: 'mogylny-27.jpg',
    url: 'https://www.facebook.com/profile.php?id=100010738607183',
  },
  {
    firstName: 'Надія',
    lastName: 'Наконечна',
    dateBirth: undefined,
    sex: 'female',
    id: 28,
    story: '',
    image: '',
    url: '',
  },
  {
    firstName: 'Наталія',
    lastName: 'Оніщенко',
    dateBirth: undefined,
    sex: 'female',
    id: 29,
    story: '',
    image: '',
    url: '',
  },
  {
    firstName: 'Ігор',
    lastName: 'Отставнов',
    dateBirth: undefined,
    sex: 'male',
    id: 30,
    story: '',
    image: '',
    url: 'https://www.facebook.com/profile.php?id=100034286177342',
  },
  {
    firstName: 'Олександр',
    lastName: 'Петін',
    dateBirth: undefined,
    sex: 'male',
    id: 31,
    story: '',
    image: 'petyn-31.jpg',
    url: '',
  },
  {
    firstName: 'Наталія',
    lastName: 'Плужник',
    dateBirth: 2544048000000,
    sex: 'female',
    id: 32,
    story: '',
    image: 'plugnik-32.jpg',
    url: 'https://www.facebook.com/profile.php?id=100009115036307',
  },
  {
    firstName: 'Микола',
    lastName: 'Полтавець',
    dateBirth: undefined,
    sex: 'male',
    id: 33,
    story: '',
    image: 'poltavets-33.jpg',
    url: '',
  },
  {
    firstName: 'Олександр',
    lastName: 'Райхель ',
    dateBirth: undefined,
    sex: 'male',
    id: 34,
    story: '',
    image: 'rayhel-34.jpg',
    url: '',
  },
  {
    firstName: 'Олег',
    lastName: 'Рожко',
    dateBirth: undefined,
    sex: 'male',
    id: 35,
    story: '',
    image: 'rogko-35.jpg',
    url: '',
  },
  {
    firstName: 'Андрій',
    lastName: 'Сирцов',
    dateBirth: 2524694400000,
    sex: 'male',
    id: 36,
    story: '',
    image: 'syrtsov-36.jpg',
    url: '',
  },
  {
    firstName: 'Тетяна',
    lastName: 'Сіда',
    dateBirth: 2538864000000,
    sex: 'female',
    id: 37,
    story: '',
    image: 'sida-37.jpg',
    url: '',
  },
  {
    firstName: 'Сергій',
    lastName: 'Філіпецький',
    dateBirth: undefined,
    sex: 'male',
    id: 38,
    story: '',
    image: 'philipetsky-38.jpg',
    url: '',
  },
  {
    firstName: 'Вікторія',
    lastName: 'Харлан',
    dateBirth: 2544566400000,
    sex: 'female',
    id: 39,
    story: '',
    image: '',
    url: 'https://www.facebook.com/profile.php?id=100015537973540',
  },
  {
    firstName: 'Лариса',
    lastName: 'Чабаненко ',
    dateBirth: undefined,
    sex: 'female',
    id: 40,
    story: '',
    image: '',
    url: '',
  },
  {
    firstName: 'Сергій',
    lastName: 'Яриш',
    dateBirth: undefined,
    sex: 'male',
    id: 41,
    story: '',
    image: 'jarysh-41.jpg',
    url: '',
  },
  {
    firstName: 'В`ячеслав',
    lastName: 'undefined',
    dateBirth: undefined,
    sex: 'male',
    id: 42,
    story: '',
    image: '',
    url: '',
  },
  {
    firstName: 'Діна',
    lastName: 'undefined',
    dateBirth: undefined,
    sex: 'female',
    id: 43,
    story: '',
    image: '',
    url: '',
  },
  {
    firstName: 'undefined',
    lastName: 'undefined',
    dateBirth: undefined,
    sex: 'female',
    id: 44,
    story: '',
    image: '',
    url: '',
  },
  {
    firstName: 'undefined',
    lastName: 'undefined',
    dateBirth: undefined,
    sex: 'female',
    id: 45,
    story: '',
    image: '',
    url: '',
  },
  {
    firstName: 'undefined',
    lastName: 'undefined',
    dateBirth: undefined,
    sex: 'male',
    id: 46,
    story: '',
    image: '',
    url: '',
  },
  {
    firstName: 'undefined',
    lastName: 'undefined',
    dateBirth: undefined,
    sex: 'female',
    id: 47,
    story: '',
    image: '',
    url: '',
  },
];

export default groupMates;
