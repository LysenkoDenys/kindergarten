import { useState } from 'react';
import { TbGenderDemiboy } from 'react-icons/tb';
import { TbGenderDemigirl } from 'react-icons/tb';
import groupMates from '../data/groupMates';
import { useTheme } from '../ThemeContext';
import MateItem from '../components/layout/MateItem';

const Home = () => {
  const [matesOne, setMatesOne] = useState([]);
  const [isButtonToggled, setIsButtonToggled] = useState(false);

  const malesQty = groupMates.filter((el) => el.sex === 'male').length;
  const malesQtyDeg = Math.round((malesQty / groupMates.length) * 100);
  const femalesQty = groupMates.filter((el) => el.sex === 'female').length;
  const femalesQtyDeg = Math.round((femalesQty / groupMates.length) * 100);

  const date = new Date();
  const currentDate = date.toISOString().split('T')[0];
  const yearsPassed = date.getFullYear() - 1986;

  const handleListOfMainOne = () => {
    const arrIdMatesPhotoOne = [
      1, 2, 4, 5, 6, 7, 10, 11, 12, 13, 17, 21, 22, 23, 24, 25, 29, 32, 33, 34,
      36, 37, 38, 41, 42, 44, 45,
    ];
    const filteredMatesPhotoOne = groupMates.filter((el) =>
      arrIdMatesPhotoOne.includes(el.id)
    );
    setIsButtonToggled(!isButtonToggled);

    return !isButtonToggled
      ? setMatesOne(
          filteredMatesPhotoOne.map((el) => (
            <MateItem element={el} key={el.id} />
          ))
        )
      : setMatesOne([]);
  };

  const darkTheme = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
  };

  const themeStyles2 = {
    color: darkTheme ? '#CCC' : '#333',
  };

  return (
    <section className="select-none">
      <h1
        className="text-3xl font-bold text-center mb-3 mt-3"
        style={themeStyles2}
      >
        Група 1979-1980 років народження.
      </h1>
      <div
        className="bg-[#e6e7eb] rounded-[5px] p-2 mb-4 text-[1em] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#e7e8e9] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.3)]"
        style={themeStyles}
      >
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
              згадує автор і носить розважальний характер. В разі виникнення
              пропозицій, доповнень, прохання надати Ваші спогади,
              фото-матеріали, тощо для розміщення на даному сайті. Реквізити
              автора надано нижче.
            </strong>
          </p>
          <hr className="mb-2" />
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
            <button
              className="bg-gray-400 hover:bg-gray-500 hover:text-white  font-bold py-2 px-4 m-3 rounded-[5px] shadow hover:shadow-lg"
              onClick={handleListOfMainOne}
            >
              {isButtonToggled
                ? ' Сховати перелік одногрупників на Фото-01'
                : 'Показати перелік одногрупників на Фото-01'}
            </button>
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
            &ensp; Частину одногрупників (20 осіб) представлено на фото-02
            нижче:
          </p>
          <div className="flex items-center flex-col">
            <figure>
              <img
                src={require('../assets/main-02.jpg')}
                alt="my group mates 02"
              />
              <figcaption className="text-center">
                <b>Фото-02</b> - Святкування, можливо, 1 травня: в руках у
                дівчаток - гілочки з квітів.
              </figcaption>
            </figure>
            <button className="bg-gray-400 hover:bg-gray-500 hover:text-white  font-bold py-2 px-4 m-3 rounded-[5px] shadow hover:shadow-lg">
              Перелік одногрупників на фото-02
            </button>
          </div>
          <p>
            &ensp; Всі одногрупники, яких згадав (але не всіх ідентифікував)
            автор, знаходяться в переліку нижче (натисни кнопку). Прохання не
            цуратися і допомогти згадати ВСІХ хлопців і дівчат. Також, Ваші
            фото, спогади , можуть бути розміщеними на даному сайту, тож
            звертайтеся за посиланнями нижче.
          </p>
          <div className="flex items-center flex-col">
            <button className="bg-gray-400 hover:bg-gray-500 hover:text-white  font-bold py-2 px-4 m-3 rounded-[5px] shadow hover:shadow-lg">
              Перелік ВСІХ одногрупників
            </button>
          </div>
        </article>
      </div>
      <div
        className="bg-[#e6e7eb] rounded-[5px] p-2 mb-4 text-[1em] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#e7e8e9]"
        style={themeStyles}
      >
        <article>
          <h3 className="text-xl font-bold text-center">
            Додаткова інформація.
          </h3>
          <p>&ensp; Основні виховательки:</p>
          <ul>
            <li>Валентина Василівна;</li>
            <li>Валентина Вікторівна;</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Home;

//shadows
