const getUrl = () => {
  const hash = window.location.hash;
  if (hash) {
    const id = hash.substring(1); // Remove the '#' character
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  }
};

export default getUrl;
