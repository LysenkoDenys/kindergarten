import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TbGenderDemiboy, TbGenderDemigirl } from 'react-icons/tb';
import groupMates from '../data/groupMates';
import { useTheme } from '../ThemeContext';
import MateItem from '../components/layout/MateItem';
import Button from '../components/layout/Button';
import Block from '../../src/components/layout/Block';
import getUrl from '../data/getUrl';
import anime from 'animejs/lib/anime.es.js';

//images:
import extraExtraSmallImage1 from '../assets/main-01-260.avif';
import extraSmallImage1 from '../assets/main-01-320.avif';
import smallImage1 from '../assets/main-01-768.avif';
import SmallMediumImage1 from '../assets/main-01-990.avif';
import mediumImage1 from '../assets/main-01-1024.avif';
import mediumMediumImage1 from '../assets/main-01-1370.avif';
import mediumLargeImage1 from '../assets/main-01-1670.avif';
import largeImage1 from '../assets/main-01-1920.avif';
import extraLargeImage1 from '../assets/main-01-2048.avif';

import extraExtraSmallImage2 from '../assets/main-02-260.avif';
import extraSmallImage2 from '../assets/main-02-320.avif';
import smallImage2 from '../assets/main-02-768.avif';
import mediumImage2 from '../assets/main-02-1024.avif';
import smallMediumImage2 from '../assets/main-02-1130.avif';
import mediumMediumImage2 from '../assets/main-02-1580.avif';
import largeImage2 from '../assets/main-02-1920.avif';
import extraLargeImage2 from '../assets/main-02-2048.avif';

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
  const durationAnime = 1000;

  function uaSort(a, b) {
    return a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase());
  }

  useEffect(() => {
    if (matesOne) {
      const elements = document.querySelectorAll('.mate-item');
      const screenWidth = window.screen.width;
      if (elements.length > 0 && isButtonOneToggled) {
        anime({
          targets: elements,
          translateX: [
            { value: -screenWidth, duration: 0 },
            { value: 0, duration: durationAnime },
          ],
          delay: (el, i) => i * 100,
        });
      } else {
        anime({
          targets: elements,
          translateX: [
            { value: 0, duration: 0 },
            { value: screenWidth, duration: durationAnime },
          ],
          delay: (el, i) => i * 100,
        });
      }
    }
  }, [matesOne, isButtonOneToggled]);

  useEffect(() => {
    if (matesTwo) {
      const elements = document.querySelectorAll('.mate-item2');
      const screenWidth = window.screen.width;
      if (elements.length > 0 && isButtonTwoToggled) {
        anime({
          targets: elements,
          translateX: [
            { value: -screenWidth, duration: 0 },
            { value: 0, duration: durationAnime },
          ],
          delay: (el, i) => i * 100,
        });
      } else {
        anime({
          targets: elements,
          translateX: [
            { value: 0, duration: 0 },
            { value: screenWidth, duration: durationAnime },
          ],
          delay: (el, i) => i * 100,
        });
      }
    }
  }, [matesTwo, isButtonTwoToggled]);

  useEffect(() => {
    if (matesAll) {
      const elements = document.querySelectorAll('.mate-item3');
      const screenWidth = window.screen.width;
      if (elements.length > 0 && isButtonAllToggled) {
        anime({
          targets: elements,
          translateX: [
            { value: -screenWidth, duration: 0 },
            { value: 0, duration: durationAnime },
          ],
          delay: (el, i) => i * 100,
        });
      } else {
        anime({
          targets: elements,
          translateX: [
            { value: 0, duration: 0 },
            { value: screenWidth, duration: durationAnime },
          ],
          delay: (el, i) => i * 100,
        });
      }
    }
  }, [matesAll, isButtonAllToggled]);

  const handleListOfMainOne = () => {
    const arrIdMatesPhotoOne = [
      1, 2, 4, 5, 6, 7, 10, 11, 12, 13, 17, 21, 22, 23, 24, 25, 29, 32, 33, 34,
      36, 37, 38, 41, 42, 16, 45,
    ];
    const filteredMatesPhotoOne = groupMates
      .filter((el) => arrIdMatesPhotoOne.includes(el.id))
      .sort(uaSort);
    setIsButtonOneToggled(!isButtonOneToggled);

    if (!isButtonOneToggled) {
      setMatesOne(
        filteredMatesPhotoOne.map((el) => (
          <MateItem element={el} key={el.id} className="mate-item" />
        ))
      );
    } else {
      setMatesOne(
        filteredMatesPhotoOne.map((el) => (
          <MateItem element={el} key={el.id} className="mate-item" />
        ))
      );
      setTimeout(() => {
        setMatesOne([]);
      }, durationAnime);
    }
  };

  const handleListOfMainTwo = () => {
    const arrIdMatesPhotoTwo = [
      2, 3, 5, 9, 10, 12, 15, 16, 19, 20, 23, 24, 29, 35, 36, 37, 38, 47,
    ];
    const filteredMatesPhotoTwo = groupMates
      .filter((el) => arrIdMatesPhotoTwo.includes(el.id))
      .sort(uaSort);
    setIsButtonTwoToggled(!isButtonTwoToggled);

    if (!isButtonTwoToggled) {
      setMatesTwo(
        filteredMatesPhotoTwo.map((el) => (
          <MateItem element={el} key={el.id} className="mate-item2" />
        ))
      );
    } else {
      setMatesTwo(
        filteredMatesPhotoTwo.map((el) => (
          <MateItem element={el} key={el.id} className="mate-item2" />
        ))
      );
      setTimeout(() => {
        setMatesTwo([]);
      }, durationAnime);
    }
  };

  const handleListOfMainAll = () => {
    setIsButtonAllToggled(!isButtonAllToggled);

    if (!isButtonAllToggled) {
      setMatesAll(
        groupMates
          .sort(uaSort)
          .map((el) => (
            <MateItem element={el} key={el.id} className="mate-item3" />
          ))
      );
    } else {
      setMatesAll(
        groupMates
          .sort(uaSort)
          .map((el) => (
            <MateItem element={el} key={el.id} className="mate-item3" />
          ))
      );
      setTimeout(() => {
        setMatesAll([]);
      }, durationAnime);
    }
  };

  const darkTheme = useTheme();

  const themeHeaderOne = darkTheme
    ? 'text-3xl font-bold text-center mb-3 mt-3 text-[#CCCCCC]'
    : 'text-3xl font-bold text-center mb-3 mt-3 text-[#333333]';

  return (
    <section className="select-none lg:text-[24px]">
      <h1 className={themeHeaderOne}>Група 1979-1980 років народження.</h1>
      <Block>
        <article>
          <h2 className="text-xl font-bold text-center lg:text-[36px] lg:mb-3">
            Загальна інформація.
          </h2>
          <p>
            &ensp; Станом на {currentDate} (через <strong>{yearsPassed}</strong>{' '}
            років після випуску нашої групи) садочок "Берізка" м. Самар (був.
            Новомосковськ) розформовано та існує тільки в наших спогадах.
          </p>

          <hr className="mt-2" />
          <p className="text-center mb-2 mt-2">
            <strong>
              &ensp;{' '}
              <span className={darkTheme ? 'text-[#f48d85]' : 'text-[#c11010]'}>
                DISCLAIMER:
              </span>{' '}
              контент даного сайту засновано на подіях, які згадує автор та
              носить розважальний характер. В разі виникнення уточнень,
              доповнень, коригувань, прохання надати Ваші спогади, фото, тощо
              для розміщення на даному сайті. Реквізити автора надано
              <span
                className={darkTheme ? 'text-[#59b3f3]' : 'text-[#0c5ca1]'}
                onClick={getUrl}
              >
                <Link to="/#footer"> нижче.</Link>
              </span>
            </strong>
          </p>
          <hr className="mb-2" />
          <p>&ensp; Наші виховательки/вчительки:</p>
          <div className="flex justify-around flex-wrap">
            <div className="flex items-center m-2">
              <img
                loading="lazy"
                width="80"
                height="80"
                className="rounded-lg hover:scale-110 ease-in-out duration-300"
                src={require('../assets/faces-teachers/victorivna.avif')}
                alt="valentina viktorivna"
              />
              <div className="m-1">Валентина Вікторівна undefined</div>
            </div>
            <div className="flex items-center m-2">
              <img
                loading="lazy"
                width="80"
                height="80"
                src={require('../assets/faces-teachers/vasylivna.avif')}
                alt="valentina vasylivna"
                className="rounded-lg hover:scale-110 ease-in-out duration-300"
              />
              <div className="m-1">Валентина Василівна undefined</div>
            </div>
            <div className="flex items-center m-2">
              <img
                loading="lazy"
                width="80"
                height="80"
                src={require('../assets/faces-teachers/andriivna.avif')}
                alt="valentina andriivna tsareva"
                className="rounded-lg hover:scale-110 ease-in-out duration-300"
              />
              <div className="m-1">Валентина Андріївна Царьова</div>
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
            <figure className="flex items-center flex-col">
              <img
                loading="lazy"
                src={largeImage1}
                srcSet={`
                  ${extraExtraSmallImage1} 260w,
                  ${extraSmallImage1} 320w,
                  ${smallImage1} 768w,
                  ${SmallMediumImage1} 990w,
                  ${mediumMediumImage1} 1370w,
                  ${mediumLargeImage1} 1670w,
                  ${mediumImage1} 1024w,
                  ${largeImage1} 1920w,
                  ${extraLargeImage1} 2048w
                `}
                sizes="
                  (min-width: 2580px) 1920px,
                  (min-width: 1920px) calc(24.69vw + 1038px),
                  (min-width: 1600px) calc(38vw + 648px),
                  (min-width: 1200px) calc(14.21vw + 765px),
                  (min-width: 1100px) 768px,
                  (min-width: 780px) calc(45.67vw + 275px),
                  (min-width: 480px) 320px,
                  254px
                "
                width="1920"
                height="1254"
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
            <figure className="flex items-center flex-col">
              <img
                loading="lazy"
                src={largeImage2}
                srcSet={`
                  ${extraExtraSmallImage2} 260w,
                  ${extraSmallImage2} 320w,
                  ${smallImage2} 768w,
                  ${smallMediumImage2} 1130w,
                  ${mediumMediumImage2} 1580w,
                  ${mediumImage2} 1024w,
                  ${largeImage2} 1920w,
                  ${extraLargeImage2} 2048w
                `}
                sizes="
                  (min-width: 2580px) 1920px,
                  (min-width: 2360px) 1580px,
                  (min-width: 1920px) calc(37.62vw + 790px),
                  (min-width: 1600px) calc(38vw + 648px),
                  (min-width: 1200px) calc(14.21vw + 765px),
                  (min-width: 1020px) 768px,
                  (min-width: 780px) calc(62.27vw + 145px),
                  (min-width: 480px) 320px,
                  254px
                "
                width="1920"
                height="1061"
                alt="my group mates 02"
              />
              <figcaption className="text-center">
                <b>Фото-02</b> - Святкування, можливо, 1 травня: в руках у
                дівчаток - гілочки. Вишикувані за критерієм: зріст. Тобто, 2
                затьмарених дівочими бантами хлопчики - скоріше за все хтось з
                невеличким зростом (імовірно хтось з: Отставнов Ігор, Васильєв
                Сергій, Полтавець Микола).
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
            звертайтеся за посиланнями{' '}
            <span
              className={darkTheme ? 'text-[#59b3f3]' : 'text-[#0c5ca1]'}
              onClick={getUrl}
            >
              <Link to="/#footer">нижче.</Link>
            </span>
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
      <Block>
        <article>
          <h3 className="text-xl font-bold text-center">Окрема подяка:</h3>
          <ul className="ml-6">
            <li>
              Васильєв Сергій - надані спогади, уточнення та натхнення (
              <span className={darkTheme ? 'text-[#59b3f3]' : 'text-[#0c5ca1]'}>
                <Link
                  to="https://www.youtube.com/watch?v=zMRVM0cD-FI"
                  target="_blank"
                >
                  відео випускного CШ№2 1997
                </Link>
              </span>
              );
            </li>
            <li>Іонко Ольга - надані спогади та уточнення;</li>
          </ul>
        </article>
      </Block>
    </section>
  );
};

export default Home;
