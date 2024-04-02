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
          <p>
            &ensp; В садочку яслях "Берізка" я опинився з моменту як навчився
            самостійно тримати ложку в руках (з півтора року).
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
