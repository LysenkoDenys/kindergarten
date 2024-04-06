import { useState } from 'react';
import { TbGenderDemiboy, TbGenderDemigirl } from 'react-icons/tb';
import groupMates from '../data/groupMates';
import { useTheme } from '../ThemeContext';
import MateItem from '../components/layout/MateItem';
import Button from '../components/layout/Button';
import Block from '../../src/components/layout/Block';

const Home = () => {
  const [matesOne, setMatesOne] = useState([]);
  const [matesTwo, setMatesTwo] = useState([]);
  const [matesAll, setMatesAll] = useState([]);
  const [isButtonOneToggled, setIsButtonOneToggled] = useState(false);
  const [isButtonTwoToggled, setIsButtonTwoToggled] = useState(false);
  const [isButtonAllToggled, setIsButtonAllToggled] = useState(false);

  const malesQty = groupMates.filter((el) => el.sex === 'male').length;
  const malesQtyDeg = Math.round((malesQty / groupMates.length) * 100);
  const femalesQty = groupMates.filter((el) => el.sex === 'female').length;
  const femalesQtyDeg = Math.round((femalesQty / groupMates.length) * 100);

  const date = new Date();
  const currentDate = date.toISOString().split('T')[0];
  const yearsPassed = date.getFullYear() - 1986;

  function uaSort(a, b) {
    return a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase());
  }

  const handleListOfMainOne = () => {
    const arrIdMatesPhotoOne = [
      1, 2, 4, 5, 6, 7, 10, 11, 12, 13, 17, 21, 22, 23, 24, 25, 29, 32, 33, 34,
      36, 37, 38, 41, 42, 16, 45,
    ];
    const filteredMatesPhotoOne = groupMates
      .filter((el) => arrIdMatesPhotoOne.includes(el.id))
      .sort(uaSort);
    setIsButtonOneToggled(!isButtonOneToggled);

    return !isButtonOneToggled
      ? setMatesOne(
          filteredMatesPhotoOne.map((el) => (
            <MateItem element={el} key={el.id} />
          ))
        )
      : setMatesOne([]);
  };
  const handleListOfMainTwo = () => {
    const arrIdMatesPhotoTwo = [
      2, 3, 5, 9, 10, 12, 15, 16, 19, 20, 23, 24, 29, 35, 36, 37, 38, 47,
    ];
    const filteredMatesPhotoTwo = groupMates
      .filter((el) => arrIdMatesPhotoTwo.includes(el.id))
      .sort(uaSort);
    setIsButtonTwoToggled(!isButtonTwoToggled);

    return !isButtonTwoToggled
      ? setMatesTwo(
          filteredMatesPhotoTwo.map((el) => (
            <MateItem element={el} key={el.id} />
          ))
        )
      : setMatesTwo([]);
  };

  const handleListOfMainAll = () => {
    setIsButtonAllToggled(!isButtonAllToggled);

    return !isButtonAllToggled
      ? setMatesAll(
          groupMates
            .sort(uaSort)
            .map((el) => <MateItem element={el} key={el.id} />)
        )
      : setMatesAll([]);
  };

  const darkTheme = useTheme();

  const themeHeaderOne = darkTheme
    ? 'text-3xl font-bold text-center mb-3 mt-3 text-[#CCCCCC]'
    : 'text-3xl font-bold text-center mb-3 mt-3 text-[#333333]';

  return (
    <section className="select-none">
      <h1 className={themeHeaderOne}>Група 1979-1980 років народження.</h1>
      <Block>
        <article>
          <h3 className="text-xl font-bold text-center">
            Загальна інформація.
          </h3>
          <p>
            &ensp; Станом на {currentDate} (через <strong>{yearsPassed}</strong>{' '}
            років після випуску нашої групи) садочок "Березка" м. Самар (був.
            Новомосковськ) розформовано та існує тільки в наших спогадах.
          </p>

          <hr className="mt-2" />
          <p className="text-center mb-2 mt-2">
            <strong>
              &ensp; DISCLAIMER: контент даного сайту засновано на подіях, які
              згадує автор та носить розважальний характер. В разі виникнення
              уточнень, доповнень, коригуівань, прохання надати Ваші спогади,
              фото, тощо для розміщення на даному сайті. Реквізити автора надано
              нижче.
            </strong>
          </p>
          <hr className="mb-2" />
          <p>&ensp; Наші основні виховательки:</p>
          <div className="flex justify-around flex-wrap">
            <div className="flex items-center m-1">
              <img
                className="h-[80px] rounded-lg hover:scale-110 ease-in-out duration-300"
                src={require('../assets/faces-teachers/victorivna.jpg')}
                alt="valentina viktorivna"
              />
              <div className="m-1">Валентина Вікторівна</div>
            </div>
            <div className="flex items-center m-1">
              <img
                src={require('../assets/faces-teachers/vasylivna.jpg')}
                alt="valentina vasylivna"
                className="h-[80px] rounded-lg hover:scale-110 ease-in-out duration-300"
              />
              <div className="m-1">Валентина Василівна</div>
            </div>
          </div>
          <p>
            &ensp; Протягом терміну виховання крізь групу пройшло щонайменше {}
            {groupMates.length} особистості (цифра ще не остаточна):
          </p>
          <ul className="ml-6">
            <li>
              <TbGenderDemiboy className="inline-block text-[25px]" />
              хлопчиків: {malesQty} ({malesQtyDeg}%);
            </li>

            <li>
              <TbGenderDemigirl className="inline-block text-[25px]" />
              дівчаток: {femalesQty} ({femalesQtyDeg}%);
            </li>
          </ul>
          <p>
            &ensp; Частину одногрупників (27 осіб) представлено на фото-01
            нижче:
          </p>
          <div className="flex items-center flex-col">
            <figure>
              <img
                src={require('../assets/main-01.jpg')}
                alt="my group mates 01"
              />
              <figcaption className="text-center">
                <b>Фото-01</b> - Святкування Нового Року, тематика класична:
                хлопчики - зайчики, дівчатка - сніжинки.
              </figcaption>
            </figure>
            <Button
              label={
                isButtonOneToggled
                  ? ' Сховати перелік групи на Фото-01'
                  : 'Показати перелік групи на Фото-01'
              }
              actionOnClick={handleListOfMainOne}
            />
            <div>{matesOne}</div>
          </div>
          <p>&ensp; Найпопулярніші імена в групі:</p>
          <ul className="ml-6">
            <li>
              <TbGenderDemiboy className="inline-block text-[25px]" />
              серед хлопчиків: "Сергій" - 6 од.;
            </li>

            <li>
              <TbGenderDemigirl className="inline-block text-[25px]" />
              серед дівчаток: "Наталія" - 5 од.;
            </li>
          </ul>
          <p>
            &ensp; Частину одногрупників (20 осіб, з них 2 хлопців не видно,
            може хтось по оселедцю впізнає) представлено на фото-02 нижче:
          </p>
          <div className="flex items-center flex-col">
            <figure>
              <img
                src={require('../assets/main-02.jpg')}
                alt="my group mates 02"
              />
              <figcaption className="text-center">
                <b>Фото-02</b> - Святкування, можливо, 1 травня: в руках у
                дівчаток - гілочки. Вишикувані за критерієм: зріст. Тобто, 2
                невідомих хлопчики - скоріше за все хтось з невеличким зростом
                (імовірно хтось з: Отставнов Ігор, Васильєв Сергій, Полтавець
                Микола).
              </figcaption>
            </figure>
            <Button
              label={
                isButtonTwoToggled
                  ? ' Сховати перелік групи на Фото-02'
                  : 'Показати перелік групи на Фото-02'
              }
              actionOnClick={handleListOfMainTwo}
            />
            <div>{matesTwo}</div>
          </div>
          <p>
            &ensp; Всі одногрупники, яких згадав (але не всіх ідентифікував)
            автор, знаходяться в переліку нижче (натисни кнопку). Прохання не
            цуратися і допомогти згадати ВСІХ хлопців і дівчат. Також, Ваші
            фото, спогади , можуть бути розміщеними на даному сайті, тож
            звертайтеся за посиланнями нижче.
          </p>
          <div className="flex items-center flex-col">
            <Button
              label={
                isButtonAllToggled
                  ? ' Сховати перелік ВСІХ одногрупників'
                  : 'Показати перелік ВСІХ одногрупників'
              }
              actionOnClick={handleListOfMainAll}
            />
            <div>{matesAll}</div>
          </div>
        </article>
      </Block>
      <Block>
        <article>
          <h3 className="text-xl font-bold text-center">
            Допоможіть пригадати.
          </h3>
          <p>&ensp; Ознаки осіб по яких бракує інформації:</p>
          <ul className="ml-6">
            <li>вихователька Валентина Василівна - прізвище;</li>
            <li>вихователька Валентина Вікторівна - прізвище;</li>
            <li>дівчинка, родичка Валентини Василівни - Діна - прізвище;</li>
            <li>хлопчик В'ячеслав (руденький) - прізвище;</li>
          </ul>
        </article>
      </Block>
    </section>
  );
};

export default Home;

//shadows
