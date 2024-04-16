const groupMates = [
  {
    firstName: 'Наталія',
    lastName: 'Алієва',
    dateBirth: 2530137600000,
    sex: 'female',
    id: 1,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'alieva-01.jpg',
    url: '',
  },
  {
    firstName: 'Олена',
    lastName: 'Березова',
    dateBirth: undefined,
    sex: 'female',
    id: 2,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'berezova-02.jpg',
    url: '',
  },
  {
    firstName: 'Тетяна',
    lastName: 'Біла',
    dateBirth: 2495836800000,
    sex: 'female',
    id: 3,
    story: [
      {
        text: 'Якось на святі ми змагалися, хто швидше прибіжить з пункту А до пункту Б (челночний біг). Так ось, Тетяна мене випередила тоді. Я ще був дуже здивований, як так, що мене дівуля перемогла? А згодом, я дізнався, що Тетяна займалася легкою атлетикою.',
        img: 'running.jpg',
      },
      {
        text: 'Також Тетяна входила до складу елітної дівочої мікрогрупи. ',
        img: '',
      },
      { text: '', img: '' },
    ],
    image: 'bila-03.jpg',
    url: 'https://www.facebook.com/profile.php?id=100022192518294',
  },
  {
    firstName: 'Сергій',
    lastName: 'Бондаренко',
    dateBirth: 2538000000000,
    sex: 'male',
    id: 4,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'bondarenko-04.jpg',
    url: 'https://www.facebook.com/profile.php?id=100003191563688',
  },
  {
    firstName: 'Алла',
    lastName: 'Бугайова ',
    dateBirth: undefined,
    sex: 'female',
    id: 5,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'bugayova-05.jpg',
    url: '',
  },
  {
    firstName: 'Сергій',
    lastName: 'Васильєв ',
    dateBirth: 2523571200000,
    sex: 'male',
    id: 6,
    story: [
      {
        text: 'Самий яскравий спогад, це як Сергія привезли на візочку на майданчик “В” , тому що він зламав собі багато кісток, через те, що впав з дерева. А ми возили його по майданчику, було весело.',
        img: 'party.jpg',
      },
      {
        text: 'На фото вище, ми вчимося танцювати на черговому новорічному святі під акомпанемент піаніно (ім`я музичного викладача чи то Зінаїда чи то Лідія – достеменно не згадаю, хто згадає – той красень/красуня), так як дівуль не вистачало (як бачите, хтось танцює з дорослою жінкою В.О. снігуроньки), а може й свідомо я обрав для танців Сергія. Гендерні стосунки були в тому віці нам не відомі.',
        img: '',
      },
      { text: '', img: '' },
    ],
    image: 'vasyliv-06.jpg',
    url: 'https://www.facebook.com/profile.php?id=100005367706457',
  },
  {
    firstName: 'Інна',
    lastName: 'Волкова',
    dateBirth: 2543529600000,
    sex: 'female',
    id: 7,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'volkova-07.jpg',
    url: 'https://www.facebook.com/inna.volkova2',
  },
  {
    firstName: 'Дмитро',
    lastName: 'Горжий',
    dateBirth: 2520201600000,
    sex: 'male',
    id: 8,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'gorjiy-08.jpg',
    url: '',
  },
  {
    firstName: 'Ганна',
    lastName: 'Д`яченко',
    dateBirth: undefined,
    sex: 'female',
    id: 9,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'dachenko-09.jpg',
    url: '',
  },
  {
    firstName: 'Андрій',
    lastName: 'Д`ячков',
    dateBirth: 2531174400000,
    sex: 'male',
    id: 10,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'dyachkov-10.jpg',
    url: 'https://www.facebook.com/profile.php?id=100023177715064',
  },
  {
    firstName: 'Олександр',
    lastName: 'Дудник',
    dateBirth: 2500156800000,
    sex: 'male',
    id: 11,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'dudnik-11.jpg',
    url: '',
  },
  {
    firstName: 'Сергій',
    lastName: 'Жовтяк',
    dateBirth: 2535494400000,
    sex: 'male',
    id: 12,
    story: [
      {
        text: 'Була популярна гра в нас тоді (не пам`ятаю як називалась) - ставали хлопці напроти дівчат (2 команди), бралися за руки в межах своєї команди і викликали по черзі когось з протилежної команди. Того, кого викликали – мав розбігтися і спробувати своїм корпусом розімкнути руки в протилежній команді. Якщо це вдавалося, то той, хто розбігся і розімкнув забирав з команди супротивника гравця і він ставав гравцем команди, яка перемогла. Мета - перетягнути в свою команду всіх до одного гравців. Так ось, Сергій був улюбленцем дівчат - коли ми грали і дівчатка мали сказати, кого вони обирали для спроби розриву стиснутих рук, вони кричали: «Жову-Жову!».',
        img: 'jova.jpg',
      },
      {
        text: 'Якось Сергій прийшов до садочку в джинсах, при чому, в дуже модних з кишенями біля колін на блискавках. Більшість з нас і мріяти не могли про таке в ті далекі часи. Мені теж собі такі захотілося, але я знав що то не здійсненна мрія. Мама Сергія працювала в «комісійному» магазині. Це давало свої бонуси. Сергій мешкав в найближчому будинку від садочку (20м) на Шевченка 35.',
        img: '',
      },
      {
        text: 'Також він звернув мою увагу на протилежну стать. Ми якось робили зарядку на вулиці біля актового залу (був майданчик окремо заасфальтований). Боюся помилитися, але можливо навіть Поліна Дмитрівна (шкільний викладач фізичної культури) її проводила. Так ось, під час зарядки дівчатка піднімали ноги, присідали, тож Сергій зауважив, що в момент, коли дівчата присідають можна побачити щось не звичайне. Я побачив. Аналогічні “відкриття” були під час спостерігання за дівчатами, які стояли на другому поверсі в сукнях з нижніх сходинок першого поверху, а також в момент, коли ми готувалися до сну. ',
        img: '',
      },
    ],
    image: 'jovtyak-12.jpg',
    url: 'https://www.facebook.com/serstranger',
  },
  {
    firstName: 'Роман',
    lastName: 'Жуков',
    dateBirth: undefined,
    sex: 'male',
    id: 13,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'jukov-13.jpg',
    url: '',
  },
  {
    firstName: 'Наталія',
    lastName: 'Журавель',
    dateBirth: undefined,
    sex: 'female',
    id: 14,
    story: [
      {
        text: 'Дівчина з прямим чорним волоссям. За очі її називали жора. Вона прийшла до нас вже в старшій групі, тому їй було важко пристосуватися, адже для більшості вона була новенька. ',
        img: '',
      },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: '',
    url: '',
  },
  {
    firstName: 'Євген',
    lastName: 'Іванчук',
    dateBirth: undefined,
    sex: 'male',
    id: 15,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'ivanchuck-15.jpg',
    url: '',
  },
  {
    firstName: 'Ольга',
    lastName: 'Іонко',
    dateBirth: 2529532800000,
    sex: 'female',
    id: 16,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'ionko-16.jpg',
    url: 'https://www.facebook.com/profile.php?id=100009565475858',
  },
  {
    firstName: 'Людмила',
    lastName: 'Калаптур',
    dateBirth: 2539814400000,
    sex: 'female',
    id: 17,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'kalaptur-17.jpg',
    url: 'https://www.facebook.com/profile.php?id=100055040817289',
  },
  {
    firstName: 'Віталий',
    lastName: 'Капустов',
    dateBirth: 2520806400000,
    sex: 'male',
    id: 18,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: '',
    url: 'https://www.facebook.com/profile.php?id=100058241961662',
  },
  {
    firstName: 'Сергій',
    lastName: 'Кардашов',
    dateBirth: undefined,
    sex: 'male',
    id: 19,
    story: [
      {
        text: 'Згідно свого прізвища – ймовірно мав турецькі корені (кардаш з турецької -  друг), але був один з небагатьох, хто спілкувався українською мовою. Мав темперамент, як то кажуть, з вогником, тож коли грали у війнушку - дуже захоплювався. Для нього це було важливо, тобто він звертав увагу на місцевість, на тактику бою, запекло сперечався з супротивником про умови, хто який рубіж буде захищати (майданчик “С”), хто увійде до складу підрозділу, воювалося з ним непогано. Воювали тим, що потрапить під руку - дрючками, галками, іграшкових пістолетів не пригадую…',
        img: '',
      },
      {
        text: 'В будівлі садочку ми знаходилися на західному боці, ближче до майданчиків “С” і “D”. Спали в південній частині, гралися/вчилися/вживали їжу в північній частині. Ми с Сергієм дуже часто обдали за одним столом, біля вікна. Сиділи по 4 особи. Єдина опція була – це хліб. Всі спокійно їли, а ми з ним змагалися, хто яку частину хлібу собі візьме з нарізки. Вважалося, що шкуринка хліба – це їжа обраних. Якщо я перемагав, то Сергій мені казав: “Шкуринку їси – будуть ікла, як у кабана”, а якщо він - просто їв з насолодою від перемоги і від трофею. Якщо я йому казав те саме, про наслідки жування шкуринки – відповідав, що то пусте…',
        img: '',
      },
      { text: '', img: '' },
    ],
    image: 'kardashov-19.jpg',
    url: '',
  },
  {
    firstName: 'Вадим',
    lastName: 'Катлубей',
    dateBirth: undefined,
    sex: 'male',
    id: 20,
    story: [
      {
        text: 'Вадим якось хотів перестрибнути калюжу на майданчику “А”, але не зміг, через те, що велика була. Застрягли черевики в бруду калюжі, тобто сам перейшов, а черевики лишились. Плакав дуже з цього приводу – вихователька довго його заспокоювала, ще й сварила. Ще якось за сніданком (ми сиділи поряд) - він крутився, повертаючись до когось ззаду і запитував: правда вкусно?. Я мовчки за цим спостерігав. Так декілька разів, а потім таки зачепив ліктем какао і розлив,  теж засмутився і заплакав.',
        img: '',
      },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'katlubey-20.jpg',
    url: '',
  },
  {
    firstName: 'Ігор',
    lastName: 'Кигим',
    dateBirth: 2539728000000,
    sex: 'male',
    id: 21,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'kigim-21.jpg',
    url: '',
  },
  {
    firstName: 'Віталий',
    lastName: 'Козлов ',
    dateBirth: undefined,
    sex: 'male',
    id: 22,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'kozlov-22.jpg',
    url: '',
  },
  {
    firstName: 'Наталія',
    lastName: 'Костюченко ',
    dateBirth: 2552601600000,
    sex: 'female',
    id: 23,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'kostuchenko-23.jpg',
    url: 'https://www.facebook.com/natali.fursova.52',
  },
  {
    firstName: 'Денис',
    lastName: 'Лисенко',
    dateBirth: 2529273600000,
    sex: 'male',
    id: 24,
    story: [
      {
        text: 'На майданчику “С” (це не сама старша в нас тоді група була) до мене підійшла одна дівчинка (як звати, не питайте – напишу тільки з її згоди). Каже: “Пойдем поцелуемся”. Ну я погодився, пішли ми за тіньовик подалі від всіх і поцілувались. По дитячому, без рук, але в губи… і… пішли гратися, вона до дівчат, я до хлопців… Ось такий в мене був перший поцілунок. Яскравий спогад. При цьому, ми просто повторили те що казали про інших наших хлопців і дівчат, тобто, начебто хтось з дівочої елітної мікрогрупи вже цілувався з кимось з хлопчачої елітної мікрогрупи. Тобто, це був скоріше акт, типу “а що, ми гірше інших?”.',
        img: '',
      },
      {
        text: 'Одного разу до садочку (майданчик “D”) прийшов  один старший хлопець -  Геннадій (на той момент вже школяр) з найближчого будинку (Шевченка 35), друг Андрія Сирцова і Жовтяка Сергія. Питає в своїх друзів киваючи на мене: “а це хто?” Ну ті йому – це “Діса” (так мене називали). А він такий – почав з мене глузувати: “дісок – носок, колосок”. Мені було образливо… Але нічого, якось пережив. Це був перший раз, коли мене хтось обізвав і виставив в негативному світлі (я ж до цього моменту був “класний Діса” ага…). Потім Андрій мене підколював деякий час, що я “Джулія Колосічкіна”. ',
        img: 'sitting.jpg',
      },
      {
        text: 'А ще, на більшість свят я був вдягнений у вишиванку, яку мені зробила моя бабуся, що вигідно відрізняло мене на фоні інших 😊, тож на будь-якому груповому фото – хлопець у вишиванці – це я.',
        img: '',
      },
    ],
    image: 'lysenko-24.jpg',
    url: 'https://www.facebook.com/profile.php?id=100001281440746',
  },
  {
    firstName: 'Олена',
    lastName: 'Литовченко',
    dateBirth: undefined,
    sex: 'female',
    id: 25,
    story: [
      {
        text: 'Олена - це моя сусідка по ліжку. Доречи, ніщо так не гартує колектив, як сумісний сон. Якось ми гралися на ліжках (уточнювати не буду як, але ідея гри була не погана для того віку), бо не хотілося спати і Олена необережно перенесла свою вагу на задню частину ліжка. От фанерне перекриття і перехилилося і вона ледь не з`їхала на підлогу.',
        img: '',
      },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'litovchenko-25.jpg',
    url: '',
  },
  {
    firstName: 'Світлана',
    lastName: 'Мадика',
    dateBirth: 2518473600000,
    sex: 'female',
    id: 26,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: '',
    url: 'https://www.facebook.com/profile.php?id=100068305741834',
  },
  {
    firstName: 'Олексій',
    lastName: 'Могильный',
    dateBirth: 2539382400000,
    sex: 'male',
    id: 27,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'mogylny-27.jpg',
    url: 'https://www.facebook.com/profile.php?id=100010738607183',
  },
  {
    firstName: 'Надія',
    lastName: 'Наконечна',
    dateBirth: undefined,
    sex: 'female',
    id: 28,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: '',
    url: '',
  },
  {
    firstName: 'Наталія',
    lastName: 'Оніщенко',
    dateBirth: undefined,
    sex: 'female',
    id: 29,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'onishenko-29.jpg',
    url: '',
  },
  {
    firstName: 'Ігор',
    lastName: 'Отставнов',
    dateBirth: undefined,
    sex: 'male',
    id: 30,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'otstavnov-30.jpg',
    url: 'https://www.facebook.com/profile.php?id=100034286177342',
  },
  {
    firstName: 'Олександр',
    lastName: 'Петін',
    dateBirth: undefined,
    sex: 'male',
    id: 31,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'petyn-31.jpg',
    url: '',
  },
  {
    firstName: 'Наталія',
    lastName: 'Плужник',
    dateBirth: 2544048000000,
    sex: 'female',
    id: 32,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'plugnik-32.jpg',
    url: 'https://www.facebook.com/profile.php?id=100009115036307',
  },
  {
    firstName: 'Микола',
    lastName: 'Полтавець',
    dateBirth: undefined,
    sex: 'male',
    id: 33,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'poltavets-33.jpg',
    url: '',
  },
  {
    firstName: 'Олександр',
    lastName: 'Райхель ',
    dateBirth: undefined,
    sex: 'male',
    id: 34,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'rayhel-34.jpg',
    url: '',
  },
  {
    firstName: 'Олег',
    lastName: 'Рожко',
    dateBirth: undefined,
    sex: 'male',
    id: 35,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'rogko-35.jpg',
    url: '',
  },
  {
    firstName: 'Андрій',
    lastName: 'Сирцов',
    dateBirth: 2524694400000,
    sex: 'male',
    id: 36,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'syrtsov-36.jpg',
    url: '',
  },
  {
    firstName: 'Тетяна',
    lastName: 'Сіда',
    dateBirth: 2538864000000,
    sex: 'female',
    id: 37,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'sida-37.jpg',
    url: '',
  },
  {
    firstName: 'Сергій',
    lastName: 'Філіпецький',
    dateBirth: undefined,
    sex: 'male',
    id: 38,
    story: [
      {
        text: 'Якось його вихователька під час тихої години насварила за щось (егоїзм скоріше за все, може спати комусь заважав) і спитала: “Ти що тут, пуп землі?” Приліпилося до нього Філіпок – “пупок”.',
        img: '',
      },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'philipetsky-38.jpg',
    url: '',
  },
  {
    firstName: 'Вікторія',
    lastName: 'Харлан',
    dateBirth: 2544566400000,
    sex: 'female',
    id: 39,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: '',
    url: 'https://www.facebook.com/profile.php?id=100015537973540',
  },
  {
    firstName: 'Лариса',
    lastName: 'Чабаненко ',
    dateBirth: undefined,
    sex: 'female',
    id: 40,
    story: [
      {
        text: 'Хтось з виховательок читав нам коротенькі віршики, і одному з них було наступне: как у нашего Мирона на носу сидит ворона. Після цього оповідання, до неї приліпилося чібона – співзвучно з “Мирона”. Вона прийшла до нас в останній рік перед випуском, напевно була трохи старша за нас і ще й відрізнялася великим зростом. Думаю, їй було найважче в садку, хоча її ніхто не ображав і не знущався. Характер був бойовий. Мешкала вона а районі поділ на вулиці Заозерна. ',
        img: '',
      },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'cabanenko-40.jpg',
    url: '',
  },
  {
    firstName: 'Сергій',
    lastName: 'Яриш',
    dateBirth: undefined,
    sex: 'male',
    id: 41,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'jarysh-41.jpg',
    url: '',
  },
  {
    firstName: 'В`ячеслав',
    lastName: 'undefined',
    dateBirth: undefined,
    sex: 'male',
    id: 42,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'vyacheslav-42.jpg',
    url: '',
  },
  {
    firstName: 'Діна',
    lastName: 'undefined',
    dateBirth: undefined,
    sex: 'female',
    id: 43,
    story: [
      {
        text: 'Діна запам`яталась як дуже капризна дівуля. Часто плакала і ображалась, але зовні вона мені подобалась, мала коротку зачіску і чорне волосся. Здається, вона була онучкою Валентини Василівни. Перебувала дуже короткий термін в садочку, але запам`яталася. Якось вчергове вона вередувала на майданчику “D”, а я підійшов до неї і в присутності Валентини Василівни запропонував їй щось, що б вирішило її проблему, але вона продовжила ще більше капризувати, при цьому ще й дратувалася, що я начебто заважаю їй “варити воду” нашій виховательці. Це був мій перший досвід спілкування з дівчатками такого типу.',
        img: '',
      },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: '',
    url: '',
  },
  {
    firstName: 'undefined',
    lastName: 'undefined',
    dateBirth: undefined,
    sex: 'female',
    id: 44,
    story: [
      {
        text: 'Танцююча біля мене дівчинка в білій сукні - допоможіть, будь ласка, розпізнати.',
        img: 'movements.jpg',
      },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'unknown-44.jpg',
    url: '',
  },
  {
    firstName: 'undefined',
    lastName: 'undefined',
    dateBirth: undefined,
    sex: 'female',
    id: 45,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'unknown-45.jpg',
    url: '',
  },
  {
    firstName: 'undefined',
    lastName: 'undefined',
    dateBirth: undefined,
    sex: 'female',
    id: 46,
    story: [
      {
        text: 'Співаюча дівчинка  - допоможіть, будь ласка, розпізнати.',
        img: '',
      },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'unknown-46.jpg',
    url: '',
  },
  {
    firstName: 'undefined',
    lastName: 'undefined',
    dateBirth: undefined,
    sex: 'female',
    id: 47,
    story: [
      { text: '', img: '' },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'unknown-47.jpg',
    url: '',
  },
  {
    firstName: 'undefined',
    lastName: 'undefined',
    dateBirth: undefined,
    sex: 'male',
    id: 48,
    story: [
      {
        text: 'Знайоме обличча у хлопця -  допоможіть, будь ласка, розпізнати.',
        img: '',
      },
      { text: '', img: '' },
      { text: '', img: '' },
    ],
    image: 'unknown-48.jpg',
    url: '',
  },
];

export default groupMates;
