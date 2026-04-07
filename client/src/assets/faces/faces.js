// import all .avif files:
const modules = import.meta.glob('./*.avif', { eager: true });

// convert it inti the dictionary: { 'filename.avif': src }
const faces = {};
for (const path in modules) {
  const fileName = path.split('/').pop(); // витягуємо тільки ім'я файлу
  faces[fileName] = modules[path].default;
}

export default faces;
