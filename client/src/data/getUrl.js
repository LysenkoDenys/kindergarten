const getUrl = () => {
  const hash = window.location.hash;
  setTimeout(() => {
    if (hash) {
      const id = hash.substring(1); // Remove the '#' character
      const element = document.getElementById(id);
      if (element) {
        const topOffset = element.getBoundingClientRect().top;
        window.scrollTo({
          top: window.scrollY + topOffset - 100,
          behavior: 'smooth',
        });
      }
    } else {
      alert(`The element ${hash} does not found`);
    }
  }, 100);
};

export default getUrl;
