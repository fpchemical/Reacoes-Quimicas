const molecula1 = {
  name: 'H2O',
  nox: [1, -2],
  atoms: ['H', 'O']
}

module.exports = (molecula1) => {
	console.log('molecula1', molecula1)
	const indiceunico = 2
	const h_indice = ''
	const o_indice = 1
	var h = ''
	var coef = ''
	if (coef < indiceunico){ 
		if(o_indice < indiceunico)
			coef = o_indice*indiceunico
	}
	var etapa1Coefic = ''
	if (molecula1.nox[0] === 0) {
		etapa1Coefic = ''
		coef = ''
	}
	else
		etapa1Coefic = 2

	var etapa1 = etapa1Coefic+molecula1.atoms[0]+etapa1Coefic
	var etapa2 = molecula1.atoms[1]+indiceunico
	var etapa2Coefic = ''

	// const newH = coef*h_indice
	// h = newH/n
	// const passo1 = n
	return coef+molecula1.name + ' -> ' +etapa1+ ' + ' + etapa2
}


