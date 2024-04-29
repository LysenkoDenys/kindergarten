const groupMates = [
  {
    firstName: 'Наталія',
    lastName: 'Алієва',
    dateBirth: 2530137600000,
    sex: 'female',
    id: 1,
    story: [
      {
        text: 'Наталочка – дуже позитивна, не вередлива дівчинка. В будь-яких екстра ординарних подіях помічена не була. На фото нижче вона промовляє новорічний віршик. ',
        img: 'aliyeva-the-star.jpg',
      },
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
      {
        text: 'З Оленою я майже не спілкувався, та й була вона в нас в садочку не дуже тривалий час. Тихенька, як і більшість наших дівчат. Можливо помиляюсь, але мені здається вона жила в районі поділу.  ',
        img: '',
      },
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
      {
        text: 'Восени ми гуляли на майданчику “С”, як і більшість хлопців в тому віці, я тоді насолоджувався всіма барвами піроманії…   Поцупив вдома сірники і таємно приніс до садочку. Заховався я за  тополю біля паркану, почекав, коли Валентина Вікторівна втратить пильність і розпалив маленьке багаття з невеличких гілочок… Горіло гарно, красиво, але не довго. Дим йшов рівний, вздовж стовбура тополі, все нормально, але тут мене помітив Сергій… Зрадів, підскочив до мене і ну підкидати купи листя у вогонь з підспівом: “Даля-да-дай-да-дай, даля-да-дай-да-дай”. Я намагався його вгамувати, але було вже пізно… Від його галасу і великої кількості утвореного диму – нас одразу помітила Валентина Вікторівна, далі все як в тумані… Не знаю, що нам за то було, але рецидиву не відмічалось.',
        img: 'focus-on-bondik.jpg',
      },
      {
        text: 'На фото вище він чітко дивиться в об’єктив, на відміну від всіх інших хлопців. ',
        img: '',
      },
      {
        text: 'Також Сергій любив побігати, в нього був такий вислів-пропозиція: “Давай на перегоначки с тобой”. Бігав вправно, дуже часто вигравав. Жвавий темперамент мав. А ще один з його висловів:  “Ото ще мені…” - десь від дорослих цього набрався. Його називали “Бондік” – скорочено від прізвища (про Джеймса Бонда ми тоді не чули). Належав до елітної хлоп`ячої мікрогрупи. Мешкав неподалік, на Кущіївській 2.',
        img: '',
      },
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
      {
        text: 'Алла була спокійною дівчинкою, але ім`я та прізвище в мене особисто викликало асоціацію з  Аллою Пугачовою (ну дуже співзвучно – а в ті часи це суперзірка радянської естради), тому вона мене цікавила.',
        img: '',
      },
      {
        text: 'Взимку на майданчику “С”, вкритому снігом, ми катали сніжні кульки, раділи дуже що сніг ліпився і його було багато. Всі катають старанно, вже є перші результати – кульки як м`ячі, а в Сергія Брнадаренко не виходило ніяк, тож Алла (в якої вже була маленька кулька) казала наступне: “У меня хоть такой ком, а у Бондаренко – никакого… ”. Повторювала вона це декілька разів, допоки ситуація не вирівнялася.',
        img: '',
      },
      {
        text: 'Є в мене фото того самого місця, де це все відбувалось, але там я з мамцею, а ще присутня ракета, яку дуже скоро демонтують і трошки фасаду будівлі (тож фото унікальне), тож вибачайте – маємо те, що маємо (с). ',
        img: 'playground.jpg',
      },
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
        text: 'Самий яскравий спогад, це як Сергія привезли на візочку на майданчик “В” , тому що він зламав собі багато кісток, через те, що впав з дерева. А ми возили його по майданчику, було весело. Ще на цьому майданчику біля паркану росло дерево з стручками (здається його назва - катальпа), віддалено схожих на банани. Ми їх намагалися зірвати і з`їсти – вони були досить гіркими. Сергій спокійно на те дерево залазив і рвав ті “банани” (ми, радянські діти банани бачили тільки в мультиках). Ще цікавий момент - в паркані біля цього екзотичного дерева були металеві ворота з прутів, пофарбованих “серебрянкою”. Так от, коли нас довго не забирали з садочку – ми як ті в’язні ставали біля решітки, бралися за прути і виглядали батьків… Того, кого забирали останнім - дуже засмучувався (по собі знаю).',
        img: 'party.jpg',
      },
      {
        text: 'На фото вище, ми вчимося танцювати на черговому новорічному святі під акомпанемент піаніно (ім`я музичного викладача чи то Зінаїда чи то Лідія – достеменно не згадаю, хто згадає – той красень/красуня – дайте знати), так як дівуль не вистачало (як бачите, Сергій Жовтяк танцює з дорослою жінкою В.О. снігуроньки), а може й свідомо я обрав для танців Сергія. Гендерні стосунки були в тому віці нам не відомі.',
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
      {
        text: 'Інна, як і більшість дівчат в нашій групі, була тихою дівчинкою, трималася як всі, тож мені поки що нічого яскравого не згадується, через те, що більшість часу я проводив с хлопцями. Пам`ятаю лише як вона гралася в ляльки - їй то подобалося.',
        img: '',
      },
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
      {
        text: 'Дмитро приєднався до нашої групи в останній рік. Він був онуком Валентини Вікторівни, але то не відчувалось, так як видимих преференцій він не отримував. Проте, були моменти коли Валентина Вікторівна виходила з себе – коли він називав її “бабушка”. Вона аж заходилася: “Дима, не назьівай меня бабушкой!!!”. Це було не через фамільярність, ні - вона була доволі молодою жінкою як для бабусі, я згодом зрозумів, що це дуже шкодило її відчуттям. Вона була суворішою за Валентину Василівну. Коли ми діставали Валентину Василівну, вона нас лагідно називала – “Иродьі”. Як хтось з нас рюмсав – Валентина Вікторівна (готуючи нас до здолання  майбутніх життєвих перешкод) казала: “Позорище!”. ',
        img: '',
      },
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
      {
        text: 'Був в нас (ми вже були в старших групах) такий ритуал - коли в когось був день народження, то всі виходили в центр кімнати на великий килим, ставали колом і водили хоровод навколо іменинника, при цьому співали: “…коровай-коровай – кого хочеш вьібирай”. А іменинник промовляв такі слова: “Я люблю конечно всех, но (треба було обрати когось з кола) – больше всех!”. Потім того, хто обрали виходив до іменинника і танцював з ним. Я обрав Андрія. Він мені імпонував. Ми навіть ззовні трохи схожими були. Фото нижче надаю.',
        img: 'we-are-rabbits.jpg',
      },
      {
        text: 'Потім, Андрій посприяв щоб я опинився на його дні народження яке організували його батьки (мати звали Наталія, а батька Анатолій Андрійович, припускаю, що Андрія назвали на честь дідуся). Був приголомшений кількістю та якістю іграшок Андрія. Мені такі навіть і не снилися. Деякі з них та їх назви пам’ятаю до сих пір. Шикарний день народження був. Андрій мешкав наприкінці вулиці Шевченка.',
        img: '',
      },
      {
        text: 'Ще була в нас одна подія – на подвір`ї, між майданчиками “С” і “D” (там був колись під`їзд, але на той час він був заблокований) нам кілька дівчат (стали в 2 рядки 5-10 од.) заспівали пісню (щось з популярного тоді, може навіть Алли Пугачевої або Софії Ротару), а Валентина Василівна нам і каже, а ви хлопці щось заспіваєте дівчаткам? Нас було не багато - може 5 осіб, пам’ятаю точно був Андрій (він стояв зі мною), можливо Отставнов Ігор ще був… В той час в СРСР був мегахіт Ігора Скляра “Комарово” (ну там було таке: “На недельку до второго, я поеду в Комарово…”). Ми довго м’ялися, стояли в ряд і дивились на дівчат, навіть трохи хитатися почали з боку в бік (наче ми хвилі), але почати співати так і не наважилися. Ось такий був дебют нашого “бойз-бенду”. Хоча Андрій і полюбляв співати, одна з жартівливих пісень в його виконанні була наступна: “Брьінди-брьінди балалайка, под столом сидит бабайка, бабка режет колбасу – все у бабки на носу…”, нам це не допомогло…',
        img: '',
      },
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
        text: 'Дівчина з прямим чорним волоссям. За очі її називали Жора. Вона прийшла до нас вже в старшій групі, тому їй було важко пристосуватися, адже для більшості вона була новенька. ',
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
      {
        text: 'Один з небагатьох, хто спілкувався українською мовою. Євген створив таємну організацію - “Маленька мишка”, до якої також входив і я. А дівчатам він придумав організацію - “Леся заспиртована” (чому саме Леся і чому вона заспиртована – то знав тільки Євген). Він товаришував з Віталієм Козловим, це було обумовлено тим, що вони жили поруч в приватних будинках в районі хлібного заводу, ближче до пісків (вул. Кущіївська).',
        img: '',
      },
      {
        text: 'Пригадую його малюнок (мені він сподобався) – там була природа, будинки і надпис: “вас вітає село Спаське”.',
        img: '',
      },
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
      {
        text: 'Тут в нас майже детективна історія: наприкінці нашого перебування в садочку - ми вже вважалися учнями першого класу (тільки в садочок на навчання ходили) мене мама запитала так обережно: “То не ти часом вірші про кохання пишеш?”.  Вона мені розповіла, що хтось в парту до Ольги підклав гарно оформлену  листівку з віршом:  “… кого любил и на память подарил…”. Ольга в ті часи вже була осяяна променями уваги і більшість хлопців на неї заглядалися, та й я також. Те, що ця подія дійшла до дорослих – це само по собі вже було резонансом великим. Хоча і писав вірші (значно пізніше), але нажаль, то був не я. Станом на зараз питання лишається відкритим (агов, хлопці, хто був той палкий джигіт?).',
        img: 'almost-first-class-1.jpg',
      },
      {
        text: 'Фото вище говорить за все замість тисячі слів. Дуже розумна дівчинка. Завжди бездоганно вдягнена, мала дуже шляхетні манери. Зоряної хвороби в неї не спостерігалось, але я відчував що вона на голову вище мене. Ольга була лідером елітної мікрогрупи. Мешкала на Жовтневій 4.',
        img: '',
      },
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
    firstName: 'Віталій',
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
    firstName: 'Віталій',
    lastName: 'Козлов ',
    dateBirth: undefined,
    sex: 'male',
    id: 22,
    story: [
      {
        text: 'Розумний хлопець зі специфічним голосом, коли всі розмовляли фальцетом в нього був хриплий бас (відносно дітей звісно). Ще одна була в нього особливість: коли до нього хтось прискіпувався з хлопців, він приймав замкнуту позицію (руки схрещені на грудях) і промовляв: “В чем дело?”.',
        img: '',
      },
      {
        text: 'Ось на фото нижче Віталік дивиться прямо в камеру, ми обговорюємо якість виступу наших колег по групі. Також на фото присутній мій дідусь, дуже поважна людина. Може хтось впізнає своїх родичів – напишіть про то мені. ',
        img: 'watching-the-show.jpg',
      },
      {
        text: 'Дружив з Євгеном Іванчуком через близькість помешкань. Входив до угрупування “Маленька мишка”.',
        img: '',
      },
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
        text: 'Одного разу до садочку (майданчик “D”) прийшов  один старший хлопець -  Геннадій (на той момент вже школяр) з найближчого будинку (Шевченка 35), друг Андрія Сирцова і Жовтяка Сергія. Питає в своїх друзів киваючи на мене: “а це хто?” Ну ті йому – це “Діса” (так мене називали). А він такий – почав з мене глузувати: “дісок - носок, колосок”. Мені було образливо… Але нічого, якось пережив. Валентина Василівна за мене вступилась: “генчік - бубенчік”.  Це був перший раз, коли мене хтось обізвав і виставив в негативному світлі (я ж до цього моменту був “класний Діса” ага…). Потім Андрій мене підколював деякий час, що я “Джулія Колосічкіна”. ',
        img: 'sitting.jpg',
      },
      {
        text: 'А ще, на більшість свят я був вдягнений у вишиванку, що вигідно відрізняло мене на фоні інших 😊, тож на будь-якому груповому фото – хлопець у вишиванці – це я.',
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
    lastName: 'Могильний',
    dateBirth: 2539382400000,
    sex: 'male',
    id: 27,
    story: [
      {
        text: 'Якось влітку на майданчику “D”  я сидів на лаві і почув дуже гучний крик (А-а-а-а), потім побачив Олексія, він йшов до Валентини Василівни і показував, свою руку... Вона була зламана... Сказати що я злякався не можу - в мене шок був, я просто... Як так сталося? Після того, як Олексію первинну допомогу надали стали розбиратися... Причина - гойдалка... Перевантажена гойдалка: хлопці гойдалися по декілька з різних боків і якимось чином між гойдалкою і землею опинилась рука Олексія. Як потім казала Валентина Вікторівна - це ЧП. Хто винен був в цьому не пам`ятаю та і не визначили винного тоді... Але це ще не все! Олексій прийшов згодом в садочок і показав свою руку: шрам зі слідами швів. Казав, що розрізали руку, вставили металевий каркас і прикрутили до кістки. Я цей шрам до сих пір пам`ятаю. Наслідки для мене були наступними: кілька років пройшло і вже в школі клас 5-6, я теж зламав руку (нічого особливого), просто тріснула кістка - мені мали просто накласти гіпс, в мене була справжня істерика з цього приводу (лікарі мене довго не могли заспокоїти), я думав, що теж руку різати будуть... Ось такі вони - ментальні травми дитинства... А Олексій - дуже мужньо все переніс і потім ніколи про то не згадував, за що йому від мене повага.',
        img: '',
      },
      {
        text: 'Одного разу вчителька (ймовірно Валентина Андріївна Царьова) відкрила нам можливість принести їй якусь книжку з дому, щоб вона нам почитала, замість уроку. Наступного дня всього двоє “учнів” відгукнулись - Олексій і я. Олексій приніс маленьку книжку з картинками Кавардак (може на 1-2 сторінки тексту), а я приніс трохи серйозніше дитяче оповідання: “Таємниця піратських печер” від Рудольфе Перес Валеро на 124 сторінки, українською мовою (1985 рік). Звісно ж мою книжку задвинули, а читали книжку, ту що приніс Олексій. Я засмутився, тому цей спогад і зберігся (через емоційну пам`ять).',
        img: 'happiness.jpg',
      },
      {
        text: 'На фото вище – всі дуже щасливі і радісні. Олексій в фокусі.',
        img: '',
      },
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
      {
        text: 'Андрій був самим веселим і креативним хлопцем в групі, на мою думку. Ще дуже любив загадки і приказки. Ми разом з ним малювали на аркушах А4 фрагменти другої світової війни. Особливо танки і літаки. При чому в наших малюнках була така тенденція, що німецька армія перемагала радянську. На малюнках радянські танки розбиті, а німецькі наступають (нажаль малюнків тих не зберіглося в мене). На питання від виховательки, чому так - ми відповідали, що ми малюємо перші 2 роки війни (1941-1943), де німці перемагали (насправді ми просто йшли проти мейнстріму).',
        img: '',
      },
      {
        text: 'Також на майданчику “С” була металева ракета в якій можна було сховатися, тож ми там сиділи і “слухали” уявний магнітофон з конструктора. Імітували натискання кнопок і самостійно співали пісень, які нам подобались (Боярський, Леонтьєв та інші). В нас в групі потім ходила одна інтерпретація пісні Ігора Скляра “Комарово” (“На недельку до второго, я поеду до Сьірцова…”). На фото нижче, Андрій в центрі, його тримає за руку Валентина Вікторівна.',
        img: 'almost-first-class-2.jpg',
      },
      {
        text: 'Андрій мешкав в найближчому будинку від садочку (20м) на Шевченка 35 в одному (єдиному) під’їзді с Сергієм Жовтяком, тож вони були друзями. Його називали “Синя”, це пішло від однієї казочки, що нам читали, там були присутні богатирі-велетні: Гориня, Дубиня, Усиня.',
        img: '',
      },
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
      {
        text: 'Також в Сергія були свої власні слова , наприклад коли ми імітували півника, ми казали: “Ку-ка-ре-ку “, він казав:  “Кур-ку-лю “, ми казали на вибух: “Бах!“, він казав: “Повз!“, ми кричали “Ура!“, він кричав“Отряда!“.',
        img: '',
      },
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
      {
        text: 'Його називали “Славка-рьіжик”, за його руде волосся, я навіть думав, що це його прізвище, але ні. Прізвище закінчувалося на “ко”. Його дідусь жив на “перевалі”, а сам Славік жив неподалік від садочку на вул. Шевченка в одному з 5 поверхових будинків, збудованих за періоду правління Микити Хрущова.',
        img: '',
      },
      {
        text: 'Ми гралися на майданчику “С” на вритих в землю колесах, уявляли що ми сидимо на мотоциклах, промовляючи багато разів: “Ган-нан-нан”. Вже по нас прийшли батьки, а ми все гралися - дуже не типовий випадок. Була в мене фотографія, як ми прийшли до садочку у вихідний взимку з батьками і гралися, але десь загубилася. В моїх спогадах - він відкритий, щирий хлопець.',
        img: '',
      },
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
      {
        text: 'Дівчинка з фото-01 (друга з ліва і першому ряду) - допоможіть, будь ласка, розпізнати.',
        img: '',
      },
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
        text: 'Співаюча дівчинка (крайня права)  - допоможіть, будь ласка, розпізнати.',
        img: 'dancing-rabbits.jpg',
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
      {
        text: 'Дівчинка з фото-02 (п`ята з ліва і першому ряду) - допоможіть, будь ласка, розпізнати.',
        img: '',
      },
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
