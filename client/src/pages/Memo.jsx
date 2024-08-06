import { useState, useEffect } from 'react';
import { useTheme } from '../ThemeContext';
import { IoLocationOutline } from 'react-icons/io5';
import SearchBar from '../components/layout/SearchBar';
import BlockMemo from '../../src/components/layout/BlockMemo';
import Block from '../../src/components/layout/Block';
import groupMates from '../data/groupMates';
import getUrl from '../data/getUrl';

//images:
import extraSmallScheme01 from '../assets/scheme-01-260.avif';
import smallMediumScheme01 from '../assets/scheme-01-990.avif';
import mediumMediumScheme01 from '../assets/scheme-01-1370.avif';
import mediumLargeScheme01 from '../assets/scheme-01-1670.avif';
import largeScheme01 from '../assets/scheme-01-1920.avif';
import extraLargeScheme01 from '../assets/scheme-01-2048.avif';

import extraSmallScheme02 from '../assets/scheme-02-260.avif';
import smallMediumScheme02 from '../assets/scheme-02-990.avif';
import mediumMediumScheme02 from '../assets/scheme-02-1370.avif';
import mediumLargeScheme02 from '../assets/scheme-02-1670.avif';
import largeScheme02 from '../assets/scheme-02-1920.avif';
import extraLargeScheme02 from '../assets/scheme-02-2048.avif';

const Memo = () => {
  const darkTheme = useTheme();

  const themeHeaderOne = darkTheme
    ? 'text-3xl font-bold text-center mb-3 mt-3 text-[#CCCCCC]'
    : 'text-3xl font-bold text-center mb-3 mt-3 text-[#333333]';

  const [matesAll, setMatesAll] = useState(groupMates);

  const renderMates = matesAll
    .sort(uaSort)
    .map((el) => <BlockMemo element={el} key={el.id}></BlockMemo>);

  function uaSort(a, b) {
    return a.lastName.toLowerCase().localeCompare(b.lastName.toLowerCase());
  }

  function handleDataFromChild(textToSearch) {
    const groupMatesFiltered = groupMates.filter((item) =>
      (item.lastName + ' ' + item.firstName + ' ' + JSON.stringify(item.story))
        .toLowerCase()
        .includes(textToSearch.toLowerCase())
    );
    setMatesAll(groupMatesFiltered);
  }

  //it is necessary to make link work correct for the first time:
  useEffect(() => {
    getUrl(); // Call getUrl function when Memo component mounts
  }, []);

  return (
    <section className="select-none lg:text-[24px]">
      <h1 className={themeHeaderOne}>Спогади:</h1>
      <Block>
        <article>
          <h2 className="text-xl font-bold text-center lg:text-[36px] lg:mb-3">
            Загальні.
          </h2>
          <a
            href="https://www.google.com/maps/d/viewer?mid=1vCF4ZZdZy4rKsdFEzFzTBVGtS94&hl=en&ll=48.62696229721938%2C35.25370555104844&z=19"
            target="_blank"
            rel="noreferrer"
          >
            <p
              className={
                darkTheme
                  ? 'text-[#59b3f3] text-[20px] mb-2'
                  : 'text-[#0c5ca1] text-[20px] mb-2'
              }
            >
              &ensp; <IoLocationOutline className="inline text-[20px]" />{' '}
              Розташування: м. Самар, вул. Шевченка, 39.
            </p>
          </a>
          <figure className="flex items-center flex-col">
            <img
              src={require('../assets/building.avif')}
              alt="building of berizka"
              className="rounded-sm"
            />
            <figcaption className="text-center">
              <b>Фото-03</b> - Фасад будівлі станом на 2016-2017 рік.
            </figcaption>
          </figure>
          <p>
            &ensp; В садочку-яслах "Берізка" приймали на виховання з 1 року (я
            прийшов з 1,5). Перший клас також був організований на його базі (ми
            були експерементальною групою). Сама двоповерхова будівля дуже
            тепла, за рахунок товстих стін. Більшість часу ми проводили на
            другому поверсі - на першому були службові приміщення і актовий зал.
            Спали на дерев'яних ліжках з фанерною основою. Туалети були
            сплановані за принципом "unisex". Існувала група подовженого дня -
            до 17:00.
          </p>
          <p>
            &ensp; Схема садочку (умовно позначив майданчики A-D, де А - для
            самих маленьких а, D - для самої старшої групи) представлена нижче.
          </p>
          <figure className="flex items-center flex-col">
            <img
              loading="lazy"
              src={largeScheme01}
              srcSet={`
                  ${extraSmallScheme01} 260w,
                  ${smallMediumScheme01} 990w,
                  ${mediumMediumScheme01} 1370w,
                  ${mediumLargeScheme01} 1670w,
                  ${largeScheme01} 1920w,
                  ${extraLargeScheme01} 2048w
                `}
              sizes="(min-width: 2580px) 1920px, (min-width: 1000px) calc(73.33vw + 43px), (min-width: 480px) 80.2vw, calc(93.75vw - 23px)"
              width="1920"
              height="1284"
              alt="scheme-01"
              className="rounded-sm"
            />
            <figcaption className="text-center">
              <b>Фото-04</b> - Схема садочку.
            </figcaption>
          </figure>
          <p>
            &ensp; Майданчики були відокремлені системою зелених насаджень
            (кущів - з чорними ягодами, їх ще називали "вовчими"). Ділянка між
            майданчиками "В" і "С" була облаштована під спортивний майданчик,
            але нас туди виводили не часто.
          </p>
          <p>
            &ensp; Схема приміщення, де ми проводили більшість часу представлена
            нижче.
          </p>
          <figure className="flex items-center flex-col">
            <img
              loading="lazy"
              src={largeScheme02}
              srcSet={`
                  ${extraSmallScheme02} 260w,
                  ${smallMediumScheme02} 990w,
                  ${mediumMediumScheme02} 1370w,
                  ${mediumLargeScheme02} 1670w,
                  ${largeScheme02} 1920w,
                  ${extraLargeScheme02} 2048w
                `}
              sizes="(min-width: 2580px) 1920px, (min-width: 1000px) calc(73.33vw + 43px), (min-width: 480px) 80.2vw, calc(93.75vw - 23px)"
              width="1920"
              height="1155"
              alt="scheme-02"
              className="rounded-sm"
            />

            <figcaption className="text-center">
              <b>Фото-05</b> - Схема місця нашого перебування.
            </figcaption>
          </figure>
          <p>
            &ensp; На схемі: 1 - спальня; 2 - роздягалка; 3 - сходова клітка; 4
            - туалет; 5- їдальня/вітальня; 6 - учбовий клас.
          </p>
        </article>
      </Block>
      <Block>
        <SearchBar sendDataToParent={handleDataFromChild} />
      </Block>
      {renderMates}
    </section>
  );
};

export default Memo;
