import { useTheme } from '../ThemeContext';
import SearchBar from '../components/layout/SearchBar';
import Block from '../../src/components/layout/Block';

const Memo = () => {
  const darkTheme = useTheme();

  const themeHeaderOne = darkTheme
    ? 'text-3xl font-bold text-center mb-3 mt-3 text-[#CCCCCC]'
    : 'text-3xl font-bold text-center mb-3 mt-3 text-[#333333]';

  return (
    <section className="select-none">
      <h1 className={themeHeaderOne}>Спогади.</h1>
      <Block>
        <article>
          <h3 className="text-xl font-bold text-center">Загальні.</h3>
          <h6 className="font-bold">&ensp; Від автора.</h6>
          <p>&ensp; Розташування: м. Новомосковськ, вул. Шевченка, 39.</p>
          <figure className="">
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
            прийшов з 1,5).
          </p>
        </article>
      </Block>
      <Block>
        <SearchBar />
      </Block>
    </section>
  );
};

export default Memo;

// https://www.google.com/maps/dir//%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%A8%D0%B5%D0%B2%D1%87%D0%B5%D0%BD%D0%BA%D0%B0,+39,+%D0%9D%D0%BE%D0%B2%D0%BE%D0%BC%D0%BE%D1%81%D0%BA%D0%BE%D0%B2%D1%81%D1%8C%D0%BA,+%D0%94%D0%BD%D1%96%D0%BF%D1%80%D0%BE%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D0%B0,+51200/@48.6268906,35.2528992,226m/data=!3m1!1e3!4m9!4m8!1m1!4e2!1m5!1m1!1s0x40d94524ed20b835:0xe094a9e24a5e5820!2m2!1d35.2536598!2d48.6269538?entry=ttu
