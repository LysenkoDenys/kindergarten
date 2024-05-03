// const getUrl = () => {
//   setTimeout(() => {
//     const hash = window.location.hash;
//     if (hash) {
//       const id = hash.substring(1); // Remove the '#' character
//       const element = document.getElementById(id);
//       if (element) {
//         const topOffset = element.getBoundingClientRect().top;
//         const yOffset = window.scrollY; // Current scroll position
//         window.scrollTo({
//           top: yOffset + topOffset - 100, // Adjust the scroll position as needed
//           behavior: 'smooth',
//         });
//       }
//     }
//   }, 100);
// };

// export default getUrl;

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
  console.log('getUrl function is called');

  // Function to check if all images are loaded
  const checkImagesLoaded = () => {
    const images = document.querySelectorAll('img');
    for (const image of images) {
      if (!image.complete) {
        return false; // At least one image is still loading
      }
    }
    return true; // All images are loaded
  };

  // Check if all images are loaded every 100ms
  const intervalId = setInterval(() => {
    if (checkImagesLoaded()) {
      clearInterval(intervalId); // Stop checking
      adjustScrollPosition(); // Adjust scroll position
    }
  }, 100);

  // Adjust scroll position immediately if all images are already loaded
  if (checkImagesLoaded()) {
    clearInterval(intervalId); // Stop checking
    adjustScrollPosition(); // Adjust scroll position
  }
};

export default getUrl;
