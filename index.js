const Balanceia = require('./balaceando.js')

const moleculaIN1 = {
  name: 'HCl',
  // coeficiente: 6,  
  nox: [1, -1],
  atoms: [
    {name: 'H', coeficiente: 1, nox: 1}, 
    {name: 'Cl', coeficiente: 1, nox: -1}],
  // coeficientes: [1, 1]
}
const moleculaIN2 = {
  name: 'Fe',
  // coeficiente: 2,   
  nox: [3],
  atoms: [{name: 'Fe', coeficiente: 1, nox: 3}],
  // coeficientes: [1]
}

// const moleculaOUT1 = {
//   name: 'H2',
//   // coeficiente: 6,  
//   nox: [1, -1],
//   atoms: ['H', 'H']
// }
// const moleculaOUT2 = {
//   name: 'FeCl3',
//   // coeficiente: 2,   
//   nox: [3],
//   atoms: ['Fe', 'Cl', 'Cl', 'Cl']
// }
const balanceada = Balanceia(moleculaIN1, moleculaIN2)


console.log('balanceada', balanceada)