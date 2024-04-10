export const capitalize = (word) => {
  if (word === "") {
    return "";
  }
  const firstLetter = word.slice(0, 1);
  return firstLetter.toUpperCase() + word.slice(1);
};

console.log(capitalize("hello"));
