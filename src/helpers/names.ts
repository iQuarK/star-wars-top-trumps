export const generateName = () => {
  const nameIdx = Math.floor(Math.random() * names.length);
  const surnameIdx = Math.floor(Math.random() * surnames.length);

  return `${names[nameIdx]} ${surnames[surnameIdx]} `;
};

// data
const names: Array<string> = [
  "Clarine",
  "Lavina",
  "Treva",
  "Hildegarde",
  "Ha",
  "Federico",
  "Buck",
  "Gabrielle",
  "Akiko",
  "Magdalene",
  "Ayesha",
  "Milissa",
  "Ellsworth",
  "Bennett",
  "Tyler",
  "Danny",
  "Liliana",
  "Vern",
  "Malka",
  "Latia"
];

const surnames: Array<string> = [
  "Loso",
  "Tweedie",
  "Anastasio",
  "Scurry",
  "Donlin",
  "Macintosh",
  "Mallery",
  "Oesterling",
  "Falgout",
  "Enterline",
  "Waller",
  "Loveless",
  "Ardito",
  "Gumm",
  "Cowgill",
  "Blalock",
  "Honn",
  "Lafon",
  "Barros",
  "Blakes"
];
