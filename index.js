const Balanceia = require('./balaceando.js')

const molecula1 = {
  name: 'HCl',
  nox: [1, -1],
  atoms: ['H', 'Cl']
}
const molecula2 = {
  name: 'NaOH',
  nox: [1, -1],
  atoms: ['Na', 'OH']
}

const balanceada = Balanceia(molecula1, molecula2)