const adjustScrollPosition = () => {
  const hash = window.location.hash;
  if (hash) {
    const id = hash.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top;
      window.scrollTo({
        top: window.scrollY + topOffset - 100,
        behavior: 'smooth',
      });
    }
  }
};

const getUrl = () => {
  // Check if all images are loaded
  const checkImagesLoaded = () =>
    [...document.images].every((img) => img.complete);

  // Adjust scroll position once all images are loaded
  const intervalId = setInterval(() => {
    if (checkImagesLoaded()) {
      clearInterval(intervalId);
      adjustScrollPosition();
    }
  }, 100);

  // Adjust scroll position immediately if all images are already loaded
  if (checkImagesLoaded()) {
    clearInterval(intervalId);
    adjustScrollPosition();
  }
};

export default getUrl;
