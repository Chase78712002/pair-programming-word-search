const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  console.log(horizontalJoin);
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    } else {
      continue;
    }
  }
  return false;
};

module.exports = wordSearch;