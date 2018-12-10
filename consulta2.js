  	var userId = "VWy8KrNXRDd4A9sl7AH8bOndHjF3";
	
	var dados2Ref = firebase.database().ref('/Atividades/JogoDaSombra/' + userId);

	var data 		 = [];
	var houveAuxilio = [];
	var qtdAcertos 	 = [];
	var qtdErros 	 = [];
	var tempoGasto	 = [];
	var dias2jogados  = [];

	dados2Ref.on('value', function(snapshot) {
	  	var dados2 = snapshot.val();
	  	recebedados2(dados2);
	});

	function recebedados2(dados2) {
		// var length = Object.keys(dados2).length;
		console.log(dados2);
		console.log('---------------------------');

		for(keyA in dados2) {
			
			hora 	 = [],
			auxilios = [],
			acertos  = [],
			erros 	 = [],
			tempo 	 = [];

			dias2jogados.push(keyA);

			for(keyB in dados2[keyA]) {

				hora_dados2 	   = [],
				auxilios_dados2 = [],
				acertos_dados2  = [],
				erros_dados2    = [],
				tempo_dados2    = [];

			  	for(keyC in dados2[keyA][keyB]) {
				  	hora_dados2.push(dados2[keyA][keyB][keyC].data);
				  	auxilios_dados2.push(dados2[keyA][keyB][keyC].houveAuxilio);
				  	acertos_dados2.push(dados2[keyA][keyB][keyC].qtdAcertos);
				  	erros_dados2.push(dados2[keyA][keyB][keyC].qtdErros);
				  	tempo_dados2.push(dados2[keyA][keyB][keyC].tempoGasto);
				}
				hora[keyB] 	   = hora_dados2;
				auxilios[keyB] = auxilios_dados2;
				acertos[keyB]  = acertos_dados2;
				erros[keyB]    = erros_dados2;
				tempo[keyB]    = tempo_dados2;
			}
			data[keyA] 		   = hora;
		  	houveAuxilio[keyA] = auxilios;
		  	qtdAcertos[keyA]   = acertos;
		  	qtdErros[keyA] 	   = erros;
		  	tempoGasto[keyA]   = tempo;
		}

		console.log(data);
		console.log(houveAuxilio);
		console.log(qtdAcertos);
		console.log(qtdErros);
		console.log(tempoGasto);
	
function grafico3(dados2, dias2) {
			var ctx = $("#myChartTempoS");
	        var myChart = new Chart(ctx, {
	            type: 'line',
	            data: {
	                labels: dias2,
	                datasets: [{
	                    label: 'Tempo gasto',
	                    data: dados2,
	                    backgroundColor: [
	                        'rgba(54, 162, 235, 0.5)',
	                    ],
	                    borderColor: [
	                        'rgba(54, 162, 235, 1)',
	                    ],
	                    borderWidth: 1,
	                    fill: false
	                }
	            ]},
	            options: {
	                scales: {
	                    yAxes: [{
	                        ticks: {
	                            beginAtZero:true
	                        }
	                    }]
	                }
	            }
	        });
		}
function graficoqtd3(qtdArray, nivel) {
            var acertosn1 = [];

            for (dia in qtdArray) {
                var auxacertos = 0;
                for (qtd in qtdArray[dia][nivel]) {
                    auxacertos += qtdArray[dia][nivel][qtd];
                }
                acertosn1.push(auxacertos);
            }
            grafico3(acertosn1, dias2jogados);
        }
        graficoqtd3(tempoGasto, 1);


function grafico6(dados2, dias2) {
			var ctx = $("#myChartTempo2S");
	        var myChart = new Chart(ctx, {
	            type: 'line',
	            data: {
	                labels: dias2,
	                datasets: [{
	                    label: 'Tempo gasto',
	                    data: dados2,
	                    backgroundColor: [
	                        'rgba(54, 162, 235, 0.5)',
	                    ],
	                    borderColor: [
	                        'rgba(54, 162, 235, 1)',
	                    ],
	                    borderWidth: 1,
	                    fill: false
	                }
	            ]},
	            options: {
	                scales: {
	                    yAxes: [{
	                        ticks: {
	                            beginAtZero:true
	                        }
	                    }]
	                }
	            }
	        });
		}
function graficoqtd6(qtdArray, nivel) {
            var acertosn1 = [];

            for (dia in qtdArray) {
                var auxacertos = 0;
                for (qtd in qtdArray[dia][nivel]) {
                    auxacertos += qtdArray[dia][nivel][qtd];
                }
                acertosn1.push(auxacertos);
            }
            grafico6(acertosn1, dias2jogados);
        }
        graficoqtd6(tempoGasto, 2);


function grafico9(dados2, dias2) {
			var ctx = $("#myChartTempo3S");
	        var myChart = new Chart(ctx, {
	            type: 'line',
	            data: {
	                labels: dias2,
	                datasets: [{
	                    label: 'Tempo gasto',
	                    data: dados2,
	                    backgroundColor: [
	                        'rgba(54, 162, 235, 0.5)',
	                    ],
	                    borderColor: [
	                        'rgba(54, 162, 235, 1)',
	                    ],
	                    borderWidth: 1,
	                    fill: false
	                }
	            ]},
	            options: {
	                scales: {
	                    yAxes: [{
	                        ticks: {
	                            beginAtZero:true
	                        }
	                    }]
	                }
	            }
	        });
		}
function graficoqtd9(qtdArray, nivel) {
            var acertosn1 = [];

            for (dia in qtdArray) {
                var auxacertos = 0;
                for (qtd in qtdArray[dia][nivel]) {
                    auxacertos += qtdArray[dia][nivel][qtd];
                }
                acertosn1.push(auxacertos);
            }
            grafico9(acertosn1, dias2jogados);
        }
        graficoqtd9(tempoGasto, 3);

}