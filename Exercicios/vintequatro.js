function tabuadaRepet(num) {
  const tabuada = [];

  for (let i = 1; i <= 10; i++) {
    tabuada.push(`${num} x ${i} = ${num * i}`);
  }

  return tabuada;
}

module.exports = { tabuadaRepet };
