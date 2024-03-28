import { TbGenderDemiboy } from 'react-icons/tb';
import { TbGenderDemigirl } from 'react-icons/tb';
import groupMates from '../data/groupMates';
import { useTheme } from '../ThemeContext';

const Home = () => {
  const malesQty = groupMates.filter((el) => el.sex === 'male').length;
  const malesQtyDeg = Math.round((malesQty / groupMates.length) * 100);
  const femalesQty = groupMates.filter((el) => el.sex === 'female').length;
  const femalesQtyDeg = Math.round((femalesQty / groupMates.length) * 100);

  const date = new Date();
  const currentDate = date.toISOString().split('T')[0];
  const yearsPassed = date.getFullYear() - 1986;

  const handleListOfMainOne = () => {
    groupMates.map((el) => `<div>${el.lastName} ${el.firstName}</div>`);
  };

  // console.log(handleListOfMainOne); //

  const darkTheme = useTheme();

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
  };

  // style={themeStyles}
  return (
    <section className="select-none">
      <h1 className="text-3xl font-bold text-center mb-3 mt-3">
        Група 1979-1980 років народження.
      </h1>
      <div
        className="bg-[#e6e7eb] rounded-[5px] p-2 mb-4 text-[1em] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#e7e8e9] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.3)]"
        style={themeStyles}
      >
        <article>
          <h3 className="text-xl font-bold">Загальна інформація.</h3>
          <p>
            &ensp; Станом на {currentDate} (через <strong>{yearsPassed}</strong>{' '}
            років після випуску нашої групи) садочок "Березка" м. Самар (був.
            Новомосковськ) розформовано та існує тільки в наших спогадах.
          </p>
          <p>
            &ensp; Протягом терміну виховання крізь групу пройшло щонайменше {}
            {groupMates.length} особистості (цифра ще не остаточна):
          </p>
          <ul className="ml-6">
            <li>
              <TbGenderDemiboy className="inline-block" />
              хлопчиків: {malesQty} ({malesQtyDeg}%);
            </li>

            <li>
              <TbGenderDemigirl className="inline-block" />
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
              Перелік одногрупників на фото-01
            </button>
          </div>
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
                <b>Фото-02</b> - Святкування, можливо, 8 березня: в руках у
                дівчаток - гілочки з квітів.
              </figcaption>
            </figure>
            <button className="bg-gray-400 hover:bg-gray-500 hover:text-white  font-bold py-2 px-4 m-3 rounded-[5px] shadow hover:shadow-lg">
              Перелік одногрупників на фото-02
            </button>
          </div>
        </article>
      </div>
      <div
        className="bg-[#e6e7eb] rounded-[5px] p-2 mb-4 text-[1em] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#e7e8e9]"
        style={themeStyles}
      >
        <article>
          <h3 className="text-xl font-bold">Додаткова інформація.</h3>
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
