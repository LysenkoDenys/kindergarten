import { TbGenderDemiboy } from 'react-icons/tb';
import { TbGenderDemigirl } from 'react-icons/tb';
import groupMates from '../data/groupMates';

const Home = () => {
  const malesQty = groupMates.filter((el) => el.sex === 'male').length;
  const malesQtyDeg = Math.round((malesQty / groupMates.length) * 100);
  const femalesQty = groupMates.filter((el) => el.sex === 'female').length;
  const femalesQtyDeg = Math.round((femalesQty / groupMates.length) * 100);

  const date = new Date();
  const currentDate = date.toISOString().split('T')[0];
  return (
    <section className="select-none">
      <h1 className="text-3xl font-bold text-center mb-3 mt-3">
        Група 1979-1980 років народження.
      </h1>
      <div className="bg-[#e6e7eb] rounded-[5px] p-1 mb-4 text-[1em] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#e7e8e9] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.3)]">
        <article>
          <h3 className="text-xl font-bold">Загальна інформація.</h3>
          <p>
            &ensp; Станом на {currentDate} садочок "Березка" м.Нова Самарь
            розформовано та існує тільки в наших спогадах.
          </p>
          <p>
            &ensp; Протягом терміну виховання крізь групу пройшло щонайменьше {}
            {groupMates.length} визначені особистості (цифра не остаточна):
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
            &ensp; Частину одногрупників (27 осіб) представлено на фото нижче:
          </p>
          <div className="flex justify-center items-center flex-col">
            <img src={require('../assets/main-01.jpg')} alt="my group mates" />
            <button className="bg-gray-400 hover:bg-gray-500 hover:text-white  font-bold py-2 px-4 m-3 rounded-[5px] shadow hover:shadow-lg">
              Перелік одногрупників на фото
            </button>
          </div>
        </article>
      </div>
      <div className="bg-[#e6e7eb] rounded-[5px] p-1 mb-4 text-[1em] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#e7e8e9] ">
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
