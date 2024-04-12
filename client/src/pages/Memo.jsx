import { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import { IoLocationOutline } from 'react-icons/io5';
import SearchBar from '../components/layout/SearchBar';
import Block from '../../src/components/layout/Block';
import BlockMemo from '../../src/components/layout/BlockMemo';
import groupMates from '../data/groupMates';
// import teachers from '../data/teachers';

const Memo = () => {
  const darkTheme = useTheme();

  const themeHeaderOne = darkTheme
    ? 'text-3xl font-bold text-center mb-3 mt-3 text-[#CCCCCC]'
    : 'text-3xl font-bold text-center mb-3 mt-3 text-[#333333]';

  const [matesAll, setMatesAll] = useState([]);
  const [dataFromChild, setDataFromChild] = useState(groupMates);
  // const [teachersData, setTeachersData] = useState([]);

  function uaSort(a, b) {
    return a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase());
  }

  function handleDataFromChild(textToSearch) {
    const groupMatesFiltered = groupMates.filter((item) =>
      (item.lastName + item.firstName + JSON.stringify(item.story))
        .toLowerCase()
        .includes(textToSearch.toLowerCase())
    );
    setDataFromChild(groupMatesFiltered);
  }

  useEffect(() => {
    // Update state
    setMatesAll(
      dataFromChild
        .sort(uaSort)
        .map((el) => <BlockMemo element={el} key={el.id}></BlockMemo>)
    );

    // Scroll to element based on hash fragment after a short delay
    setTimeout(() => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.substring(1); // Remove the '#' character
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    }, 100);
  }, [dataFromChild]);

  // useEffect(() => {
  //   setTeachersData(
  //     teachers.map((el) => <div element={el.firstName} key={el.id}></div>)
  //   );
  // }, []);

  return (
    <section className="select-none">
      <h1 className={themeHeaderOne}>Спогади:</h1>
      <Block>
        <article>
          <h3 className="text-xl font-bold text-center">Загальні.</h3>
          <a
            href="https://www.google.com/maps/d/viewer?mid=1vCF4ZZdZy4rKsdFEzFzTBVGtS94&hl=en&ll=48.62696229721938%2C35.25370555104844&z=19"
            target="_blank"
            rel="noreferrer"
          >
            <p>
              &ensp; <IoLocationOutline className="inline text-[20px]" />{' '}
              Розташування: м. Самар, вул. Шевченка, 39.
            </p>
          </a>
          <figure className="flex items-center flex-col">
            <img
              src={require('../assets/building.jpg')}
              alt="building of berezka"
              className="h-[100px] rounded-sm"
            />
            <figcaption className="text-center">
              <b>Фото-03</b> - Фасад будівлі станом на 2016-2017 рік.
            </figcaption>
          </figure>
          <p>
            &ensp; В садочку-яслах "Берізка" приймали на виховання з 1 року (я
            прийшов з 1,5). Перший клас також був організований на його базі.
            Сама будівля дуже тепла, за рахунок товстих стін. Більшість часу ми
            проводили на другому поверсі - на першому були службові приміщення і
            актовий зал. Спали на дерев'яних ліжках з фанерною основою, через що
            були випадки провалів або з'їзду діточок. Туалети були сплановані за
            принципом "unisex".
          </p>
          <p>
            &ensp; Схема садочку (умовно позначив майданчики A-D, де А - для
            самих маленьких а, D - для старших груп) і околиць представлена
            нижче.
          </p>
          <figure className="flex items-center flex-col">
            <img
              src={require('../assets/scheme.jpg')}
              alt="scheme"
              className="h-[600px] rounded-sm"
            />
            <figcaption className="text-center">
              <b>Фото-04</b> - Схема садочку і околиць.
            </figcaption>
          </figure>
          <p>
            &ensp; Майданчики були відокремлені системою зелених насаджень
            (кушів - з чорними ягодами, їх ще називали "вовчими"). Ділянка між
            майданчиками В і С була облаштована під спортивний майданчик з
            врититми в землю покришками від вантажівок. Хтось там впав і розбив
            собі губу, тож нас туди виводили рідко.
          </p>
        </article>
      </Block>
      <Block>
        <SearchBar sendDataToParent={handleDataFromChild} />
      </Block>
      {matesAll}
      {/* <div className=""> {teachersData}</div> */}
    </section>
  );
};

export default Memo;