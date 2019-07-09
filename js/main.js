// jQuery
$(document).ready(function(){

	let resultado = $('#resultado');
	const select = $('select');

	select.change(function(){
		let moeda = this.value;
		const api = `https://currencydatafeed.com/api/data.php?token=l5z9y4owzt3w2urzbfq3&currency=${moeda}/BRL`; 
			
		let valor = $('#value').val();
		$.getJSON(api, function(data){
			let val = data.currency[0].value;
			let calculo = val*valor;
			resultado.html(`<p>${calculo.toFixed(2)}</p>`);
			
			$('#value').val(1).focus(); //quando clicar, volta para valor 1 e deixa o cursor selecionado no input
			select[0].selectedIndex = 0 //após selecionar a moeda e fazer a conversão, volta ao option "selecionar moeda"
		});

		console.log(this.value); //o value de uma const pode ser trocado
	});

});
// end jQuery