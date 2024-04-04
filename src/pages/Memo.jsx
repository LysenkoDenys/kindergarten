import { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import SearchBar from '../components/layout/SearchBar';
import Block from '../../src/components/layout/Block';
import BlockMemo from '../../src/components/layout/BlockMemo';
import groupMates from '../data/groupMates';

const Memo = () => {
  const darkTheme = useTheme();

  const themeHeaderOne = darkTheme
    ? 'text-3xl font-bold text-center mb-3 mt-3 text-[#CCCCCC]'
    : 'text-3xl font-bold text-center mb-3 mt-3 text-[#333333]';

  const [matesAll, setMatesAll] = useState([]);

  useEffect(() => {
    setMatesAll(
      groupMates.map((el) => <BlockMemo element={el} key={el.id}></BlockMemo>)
    );
  }, []);

  return (
    <section className="select-none">
      <h1 className={themeHeaderOne}>Спогади.</h1>
      <Block>
        <article>
          <h3 className="text-xl font-bold text-center">Загальні.</h3>
          <h6 className="font-bold">&ensp; Від автора.</h6>
          <a
            href="https://www.google.com/maps/d/viewer?mid=1vCF4ZZdZy4rKsdFEzFzTBVGtS94&hl=en&ll=48.62696229721938%2C35.25370555104844&z=19"
            target="_blank"
            rel="noreferrer"
          >
            <p>&ensp; Розташування: м. Самар, вул. Шевченка, 39.</p>
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
            &ensp; В садочку яслях "Берізка" приймали на виховання з 1 року (я
            прийшов з 1,5). Перший клас також був організований на його базі.
          </p>
        </article>
      </Block>
      <Block>
        <SearchBar />
      </Block>
      {matesAll}
    </section>
  );
};

export default Memo;
