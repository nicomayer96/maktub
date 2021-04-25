var cantPrendas = 0;

function agregarVenta(){
	for (var i = 0; i <= cantPrendas; i++) {
		
	
	var inputCliente = document.getElementById("clienteVenta").value;
	var inputMonto = document.getElementById("montoVenta").value;
	var inputEstadoPago = document.getElementById("pagado").value;
	var inputFormaPago = document.getElementById("formaPago").value;
	var inputEnvio = document.getElementById("envio").value;
	var inputFecha = document.getElementById("fecha").value;
	var inputTipo = document.getElementById("tipoVenta"+i).value;
	var inputTalle = document.getElementById("talleVenta"+i).value;
	var inputMarca = document.getElementById("marcaVenta"+i).value;
	var inputColor = document.getElementById("colorVenta"+i).value;

	if (inputTipo == "" | inputTalle == "" | inputMarca =="" | inputColor =="") {
		alert("Las prendas con campos incompletos no fueron agregadas");

	}else{
	if(i!=0){
		inputMonto = 0;
	}

	var inputFormaPagoMayus = inputFormaPago.charAt(0).toUpperCase() + inputFormaPago.slice(1);
	var inputEnvioMayus = inputEnvio.charAt(0).toUpperCase() + inputEnvio.slice(1);
	var inputTipoMayus = inputTipo.charAt(0).toUpperCase() + inputTipo.slice(1);
	var inputMarcaMayus = inputMarca.charAt(0).toUpperCase() + inputMarca.slice(1);
	var inputColorMayus = inputColor.charAt(0).toUpperCase() + inputColor.slice(1);
	var inputTalleMayus = inputTalle.toUpperCase();

	console.log(inputFecha);
	
		var ventaView = {
		"tipo": inputTipoMayus,
		"costo" : 0,
		"talle": inputTalleMayus,
		"marca": inputMarcaMayus,
		"color": inputColorMayus,
		"nombreCli" : inputCliente,
	    "monto" : inputMonto,
	    "estadoPago" : inputEstadoPago,
	    "formaPago" : inputFormaPagoMayus,
	    "fecha" : inputFecha,
	    "envio" : inputEnvioMayus
	    
		};
	
	
	console.log(ventaView);
	 ventaViewJson = JSON.stringify(ventaView);
	$.ajax({
		type: "POST",
		url: "https://maktub-test.herokuapp.com/maktub/ventas",
		'Access-Control-Allow-Origin': "*",
		headers : {		
		"Content-Type" : "application/json"
		},
		data: ventaViewJson,
		success: function(data){
			alert("Venta cargada exitosamente");
		},
		error: function(data){     			//Da error si no esta la prenda en stock
			alert("Ha ocurrido un error");
		}
	});
	}
}
}

function agregarPrenda(){
	cantPrendas ++;
	$("#inputs").append('<div class="row justify-content-center">' +
			'<div class="seccion col-2 input-group mb-3">' +
				'<div class="input-group-prepend">' +
					'<span class="input-group-text justify-content-center" for="tipoVenta"'+ cantPrendas +'>Tipo</span>' +
					'<input type="text" class="form-control" id="tipoVenta'+ cantPrendas +'">' +
				'</div>' +
			'</div>' +
			'<div class="seccion col-2 input-group mb-3">' +
				'<div class="input-group-prepend">' +
					'<span class="input-group-text justify-content-center" for="marcaVenta'+ cantPrendas +'">Marca</span>' +
					'<input type="text" class="form-control" id="marcaVenta'+ cantPrendas +'">' +
				'</div>' +
			'</div>' +
			'<div class="seccion col-2 input-group mb-3">' +
				'<div class="input-group-prepend">' +
					'<span class="input-group-text justify-content-center" for="talleVenta'+ cantPrendas +'">Talle</span>' +
					'<input type="text" class="form-control" id="talleVenta'+ cantPrendas +'">' +
				'</div>' +
			'</div>' +
			'<div class="seccion col-2 input-group mb-3">' +
				'<div class="input-group-prepend">' +
					'<span class="input-group-text justify-content-center" for="colorVenta'+ cantPrendas +'">Color</span>' +
					'<input type="text" class="form-control" id="colorVenta'+ cantPrendas +'">' +
				'</div>' +
			'</div>' +
			'<div class="seccion col-1 input-group mb-3">' +
			'</div>' +
		'</div>');
}
			 





function verVentas(){
		
	$("#head").empty();
	$("#cuerpo").empty();
	var ingresoMes = document.getElementById('mes').value;
	$.ajax({
		type: "GET",
		url: "https://maktub-test.herokuapp.com/maktub/ventas",
		dataType: "json",
		'Access-Control-Allow-Origin': "*",
		data: {"mes":ingresoMes},
		success: function(data){
			
		var total = 0;

		$("#head").append('<tr>'+
								'<th scope="col">Nº Venta</th>'+
								'<th scope="col">Cliente</th>'+
								'<th scope="col">Monto</th>'+
								'<th scope="col">Forma de pago</th>'+
								'<th scope="col">Pago</th>'+
								'<th scope="col">Fecha</th>'+
								'<th scope="col">Envio</th>'+
							'</tr>');
				

			$.each(data, function (key, value){
				
				total = total + value.monto;
				

				if(value.estadoPago = true){
					value.estadoPago = "Pagado";
				}else{
					value.estadoPago = "-";
					$(this).find('tr').css({"background" : "red"});
				}
				if(value.envio = true){
					value.envio = "Si";
				}else{
					value.envio = "-";
				}
				$("#cuerpo").append(
										"<tr>" +
											"<td>"+ value.numeroVenta + "</td>" +
											"<td>" + value.nombreCli + "</td>" +
											"<td>" + value.monto + "</td>" + 
											"<td>" + value.formaPago + "</td>" +
											"<td>" + value.estadoPago + "</td>" +
											"<td>" + value.fecha + "</td>" +
											"<td>" + value.envio + "</td>" +
										"</tr>");


			});
			
			$("#cuerpo").append(
										"<tr>" +
											"<td></td>" +
											"<td></td>" +
											"<td>" + total + "</td>" + 
											"<td></td>" +
											"<td></td>" +
											"<td></td>" +
											"<td></td>" +
										"</tr>");
	}
	});
}
