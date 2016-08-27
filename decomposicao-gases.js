const molecula1 = {
  name: 'FeCl3',
  nox: [3, -1],
  atoms: ['Fe', 'Cl']
}

const deco = (molecula1) => {
	console.log('molecula1', molecula1)
	const indiceunico = 3
	const moleculaOut1_indice = ''
	const moleculaOut2_indice = ''
	var moleculaOut2 = ''
	var coef = ''
	if (coef < indiceunico){ 
		if(moleculaOut2_indice < indiceunico)
			coef = moleculaOut2-indice*indiceunico
	}
	var etapa1Coefic = ''
	if (molecula1.nox[3] === 0) {
		etapa1Coefic = ''
		coef = ''
	}
	else
		etapa1Coefic = 3

	var etapa1 = etapa1Coefic+molecula1.atoms[0]+etapa1Coefic
	var etapa2 = molecula1.atoms[1]+indiceunico
	var etapa2Coefic = ''

	// const newH = coef*h_indice
	// h = newH/n
	// const passo1 = n
	return coef+molecula1.name + ' -> ' +etapa1+ ' + ' + etapa2
}

console.log ('deco', deco(molecula1))
