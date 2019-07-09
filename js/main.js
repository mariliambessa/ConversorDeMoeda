// jQuery
$(document).ready(function(){

	const api = 'https://currencydatafeed.com/api/data.php?token=l5z9y4owzt3w2urzbfq3&currency=EUR/BRL';
	const botao = $('button');
	let resultado = $('#resultado');

	botao.click(function(){
		let valor = $('#value').val();
		
		$.getJSON(api, function(data){
			let val = data.currency[0].value;
			let calculo = val*valor
			resultado.html(`<p>${calculo.toFixed(2)}</p>`);
		});
	});

});
// end jQuery