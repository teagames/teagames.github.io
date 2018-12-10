  	var userId = "VWy8KrNXRDd4A9sl7AH8bOndHjF3";
	
	var dadosRef = firebase.database().ref('/Atividades/JogoDaMemoria/' + userId);

	var data 		 = [];
	var houveAuxilio = [];
	var qtdAcertos 	 = [];
	var qtdErros 	 = [];
	var tempoGasto	 = [];
	var diasjogados  = [];

	dadosRef.on('value', function(snapshot) {
	  	var dados = snapshot.val();
	  	recebeDados(dados);
	});

	function recebeDados(dados) {
		// var length = Object.keys(dados).length;
		console.log(dados);
		console.log('---------------------------');

		for(keyA in dados) {
			
			hora 	 = [],
			auxilios = [],
			acertos  = [],
			erros 	 = [],
			tempo 	 = [];

			diasjogados.push(keyA);

			for(keyB in dados[keyA]) {

				hora_dados 	   = [],
				auxilios_dados = [],
				acertos_dados  = [],
				erros_dados    = [],
				tempo_dados    = [];

			  	for(keyC in dados[keyA][keyB]) {
				  	hora_dados.push(dados[keyA][keyB][keyC].data);
				  	auxilios_dados.push(dados[keyA][keyB][keyC].houveAuxilio);
				  	acertos_dados.push(dados[keyA][keyB][keyC].qtdAcertos);
				  	erros_dados.push(dados[keyA][keyB][keyC].qtdErros);
				  	tempo_dados.push(dados[keyA][keyB][keyC].tempoGasto);
				}
				hora[keyB] 	   = hora_dados;
				auxilios[keyB] = auxilios_dados;
				acertos[keyB]  = acertos_dados;
				erros[keyB]    = erros_dados;
				tempo[keyB]    = tempo_dados;
			}
			data[keyA] 		   = hora;
		  	houveAuxilio[keyA] = auxilios;
		  	qtdAcertos[keyA]   = acertos;
		  	qtdErros[keyA] 	   = erros;
		  	tempoGasto[keyA]   = tempo;
		}

		function grafico(dados, dias) {
			var ctx = $("#myChart");
	        var myChart = new Chart(ctx, {
	            type: 'line',
	            data: {
	                labels: dias,
	                datasets: [{
	                    label: 'Quantidade de acertos',
	                    data: dados,
	                    backgroundColor: [
	                        'rgba(0, 255, 0, 1)',
	                    ],
	                    borderColor: [
	                        'rgba(0, 255, 0, 0.5)',
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
function graficoqtd(qtdArray, nivel) {
            var acertosn1 = [];

            for (dia in qtdArray) {
                var auxacertos = 0;
                for (qtd in qtdArray[dia][nivel]) {
                    auxacertos += qtdArray[dia][nivel][qtd];
                }
                acertosn1.push(auxacertos);
            }
            grafico(acertosn1, diasjogados);
        }
        graficoqtd(qtdAcertos, 1);

		console.log(data);
		console.log(houveAuxilio);
		console.log(qtdAcertos);
		console.log(qtdErros);
		console.log(tempoGasto);


function grafico2(dados, dias) {
			var ctx = $("#myChartErros");
	        var myChart = new Chart(ctx, {
	            type: 'line',
	            data: {
	                labels: dias,
	                datasets: [{
	                    label: 'Quantidade de Erros',
	                    data: dados,
	                    backgroundColor: [
	                        'rgba(255,255,0,1)',
	                    ],
	                    borderColor: [
	                        'rgba(255,255,0,1)',
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

		function graficoqtd2(qtdArray2, nivel) {
            var acertosn1 = [];

            for (dia in qtdArray2) {
                var auxacertos = 0;
                for (qtd in qtdArray2[dia][nivel]) {
                    auxacertos += qtdArray2[dia][nivel][qtd];
                }
                acertosn1.push(auxacertos);
            }
            grafico2(acertosn1, diasjogados);
        }

		graficoqtd2(qtdErros, 1);
	
function grafico3(dados, dias) {
			var ctx = $("#myChartTempo");
	        var myChart = new Chart(ctx, {
	            type: 'line',
	            data: {
	                labels: dias,
	                datasets: [{
	                    label: 'Tempo gasto',
	                    data: dados,
	                    backgroundColor: [
	                        'rgba(54, 162, 235, 1)',
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
            grafico3(acertosn1, diasjogados);
        }
        graficoqtd3(tempoGasto, 1);


function grafico4(dados, dias) {
			var ctx = $("#myChart2");
	        var myChart = new Chart(ctx, {
	            type: 'line',
	            data: {
	                labels: dias,
	                datasets: [{
	                    label: 'Quantidade de acertos',
	                    data: dados,
	                    backgroundColor: [
	                        'rgba(0, 255, 0, 1)',
	                    ],
	                    borderColor: [
	                        'rgba(0, 255, 0, 0.5)',
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
function graficoqtd4(qtdArray, nivel) {
            var acertosn1 = [];

            for (dia in qtdArray) {
                var auxacertos = 0;
                for (qtd in qtdArray[dia][nivel]) {
                    auxacertos += qtdArray[dia][nivel][qtd];
                }
                acertosn1.push(auxacertos);
            }
            grafico4(acertosn1, diasjogados);
        }
        graficoqtd4(qtdAcertos, 2);


function grafico5(dados, dias) {
			var ctx = $("#myChartErros2");
	        var myChart = new Chart(ctx, {
	            type: 'line',
	            data: {
	                labels: dias,
	                datasets: [{
	                    label: 'Quantidade de Erros',
	                    data: dados,
	                    backgroundColor: [
	                        'rgba(255,255,0,1)',
	                    ],
	                    borderColor: [
	                        'rgba(255,255,0,1)',
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

		function graficoqtd5(qtdArray2, nivel) {
            var acertosn1 = [];

            for (dia in qtdArray2) {
                var auxacertos = 0;
                for (qtd in qtdArray2[dia][nivel]) {
                    auxacertos += qtdArray2[dia][nivel][qtd];
                }
                acertosn1.push(auxacertos);
            }
            grafico5(acertosn1, diasjogados);
        }

		graficoqtd5(qtdErros, 2);

function grafico6(dados, dias) {
			var ctx = $("#myChartTempo2");
	        var myChart = new Chart(ctx, {
	            type: 'line',
	            data: {
	                labels: dias,
	                datasets: [{
	                    label: 'Tempo gasto',
	                    data: dados,
	                    backgroundColor: [
	                        'rgba(54, 162, 235, 1)',
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
            grafico6(acertosn1, diasjogados);
        }
        graficoqtd6(tempoGasto, 2);


function grafico7(dados, dias) {
			var ctx = $("#myChart3");
	        var myChart = new Chart(ctx, {
	            type: 'line',
	            data: {
	                labels: dias,
	                datasets: [{
	                    label: 'Quantidade de acertos',
	                    data: dados,
	                    backgroundColor: [
	                        'rgba(0, 255, 0, 1)',
	                    ],
	                    borderColor: [
	                        'rgba(0, 255, 0, 0.5)',
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
function graficoqtd7(qtdArray, nivel) {
            var acertosn1 = [];

            for (dia in qtdArray) {
                var auxacertos = 0;
                for (qtd in qtdArray[dia][nivel]) {
                    auxacertos += qtdArray[dia][nivel][qtd];
                }
                acertosn1.push(auxacertos);
            }
            grafico7(acertosn1, diasjogados);
        }
        graficoqtd7(qtdAcertos, 3);


function grafico8(dados, dias) {
			var ctx = $("#myChartErros3");
	        var myChart = new Chart(ctx, {
	            type: 'line',
	            data: {
	                labels: dias,
	                datasets: [{
	                    label: 'Quantidade de Erros',
	                    data: dados,
	                    backgroundColor: [
	                        'rgba(255,255,0,1)',
	                    ],
	                    borderColor: [
	                        'rgba(255,255,0,1)',
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

		function graficoqtd8(qtdArray2, nivel) {
            var acertosn1 = [];

            for (dia in qtdArray2) {
                var auxacertos = 0;
                for (qtd in qtdArray2[dia][nivel]) {
                    auxacertos += qtdArray2[dia][nivel][qtd];
                }
                acertosn1.push(auxacertos);
            }
            grafico8(acertosn1, diasjogados);
        }

		graficoqtd8(qtdErros, 3);

function grafico9(dados, dias) {
			var ctx = $("#myChartTempo3");
	        var myChart = new Chart(ctx, {
	            type: 'line',
	            data: {
	                labels: dias,
	                datasets: [{
	                    label: 'Tempo gasto',
	                    data: dados,
	                    backgroundColor: [
	                        'rgba(54, 162, 235, 1)',
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
            grafico9(acertosn1, diasjogados);
        }
        graficoqtd9(tempoGasto, 3);

}