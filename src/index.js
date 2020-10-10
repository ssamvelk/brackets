module.exports = function check(str, bracketsConfig) {
  
  const s = [...str];

  let i = 0;

  while (i < s.length) {

    bracketsConfig.forEach(el => {
      if (s[i] === el[0] && s[i + 1] === el[1]) {
        s.splice(i, 2);
        if (i >= 0) i -= 2;
      };
    });

    i += 1;
  };

  return s.length === 0 ? true : false;
}
