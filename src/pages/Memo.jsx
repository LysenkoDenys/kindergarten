import { useTheme } from '../ThemeContext';
import SearchBar from '../components/layout/SearchBar';

const Memo = () => {
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
        Спогади.
      </h1>
      <div
        className="bg-[#e6e7eb] rounded-[5px] p-2 mb-4 text-[1em] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#e7e8e9] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.3)]"
        style={themeStyles}
      >
        <article>
          <h3 className="text-xl font-bold text-center">Загальні.</h3>
          <h6 className="font-bold">&ensp; Від автора.</h6>
          <p>
            &ensp; В садочку яслях "Берізка" я опинився з моменту як навчився
            самостійно тримати ложку в руках (з півтора року).
          </p>
        </article>
      </div>
      <div
        className="bg-[#e6e7eb] rounded-[5px] p-2 mb-4 text-[1em] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#e7e8e9] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.3)]"
        style={themeStyles}
      >
        <SearchBar />
      </div>
    </section>
  );
};

export default Memo;
