// jQuery
$(document).ready(function(){

	const api = 'https://currencydatafeed.com/api/data.php?token=l5z9y4owzt3w2urzbfq3&currency=EUR/BRL';
	const botao = $('button');
	let resultado = $('#resultado');
	const select = $('select');

	botao.click(function(){
		let valor = $('#value').val();
		
		$.getJSON(api, function(data){
			let val = data.currency[0].value;
			let calculo = val*valor;
			resultado.html(`<p>${calculo.toFixed(2)}</p>`);
			$('#value').val(1).focus();
		});
	});

	select.change(function(){
		console.log(this.value);
	});

});
// end jQuery