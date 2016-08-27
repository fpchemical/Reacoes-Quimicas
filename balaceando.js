
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

module.exports = (molecula1, molecula2) => {
	console.log('molecula1', molecula1)
	console.log('molecula2', molecula2)

	const result = (molecula1.nox[0]+molecula1.nox[1]) + (molecula1.nox[0]+molecula1.nox[1])

	if(!result)
		return molecula2.atoms[0]+molecula1.atoms[1]+' + '+molecula1.atoms[0]+molecula2.atoms[1]
	// return !result
}

