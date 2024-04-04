import Button from './Button';

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center">
      <input
        type="text"
        placeholder="Ім'я або прізвище"
        className="rounded-[10px] px-2 py-3 mx-1"
      />
      <Button
        className=""
        label={'Знайти'}
        // actionOnClick={}
      />
    </div>
  );
};

export default SearchBar;
