const Home = () => {
  const date = new Date();
  const currentDate = date.toISOString().split('T')[0];
  return (
    <section className="select-none">
      <h1 className="text-3xl font-bold text-center mb-3 mt-3">
        Опис групи 1979-1980 р.н.:
      </h1>
      <div className="bg-[#e6e7eb] rounded-[5px] p-1 mb-4 text-[1em] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] hover:bg-[#e7e8e9] hover:shadow-[2px_2px_2px_rgba(0,0,0,0.3)]">
        <article>
          <h3 className="text-xl font-bold">Загальна інформація.</h3>
          <p>
            Станом на {currentDate} садочек розформовано і він існує тільки в
            спогадах.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Home;

//shadows
