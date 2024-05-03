const getUrl = () => {
  setTimeout(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.substring(1); // Remove the '#' character
      const element = document.getElementById(id);
      if (element) {
        const topOffset = element.getBoundingClientRect().top;
        const yOffset = window.scrollY; // Current scroll position
        window.scrollTo({
          top: yOffset + topOffset - 100, // Adjust the scroll position as needed
          behavior: 'smooth',
        });
      }
    }
  }, 100);
};

export default getUrl;
