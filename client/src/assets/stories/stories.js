// import all .avif files:
const modules = import.meta.glob('./*.avif', { eager: true });

// convert it inti the dictionary: { 'filename.avif': src }
const stories = {};
for (const path in modules) {
  const fileName = path.split('/').pop();
  stories[fileName] = modules[path].default;
}

export default stories;
