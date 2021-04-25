var keepAliveTimeout = 1000 * 10;
var cantPrendas = 0; 	/*USAR EL CONTADOR PARA UN FOR Y QUE POR CADA PRENDA HAGA UN DETALLE DE VENTA*/


function keepSessionAlive() {
	$.ajax({
		type: ('POST'),
		url: 'http://www.mywebapp.com/keepAlive',
		success: function(data) {
			alert('Success');
			setTimeout(function() {
				keepSessionAlive();
			}, keepAliveTimeout);
		},
		error: function(XMLHttpRequest,XMLHttpResponse, textStatus, errorThrown) {
			alert('Failure');
			setTimeout(function() {
				keepSessionAlive();
			}, keepAliveTimeout);
		}
	});
}



function MostrarStock(){
	$("#head").empty();
	$("#cuerpo").empty();
	var filtro = document.getElementById("orden").value;
	
	$.ajax({
		type: "GET",
		url: "https://maktub-test.herokuapp.com/maktub/stock",
		dataType: "json",
		'Access-Control-Allow-Origin': "*",
		data:{"filtro": filtro},
		success: function(data){
			
			$("#head").append("<tr>"+
									'<th></th>' +
									'<th scope="col">Prenda</th>'+
									'<th scope="col">Costo</th>'+
									'<th scope="col">Talle</th>'+
									'<th scope="col">Color</th>'+
									'<th scope="col">Marca</th>'+
									'<th scope="col">Cantidad</th>'+
									'</tr>');

			$.each(data, function (key, value){
				$("#cuerpo").append("<tr>" +
											"<th class='marcar'></th>" + 
											"<td>" + value.tipo + "</td>" +
											"<td>" + value.costo + "</td>" +
											"<td>" + value.talle + "</td>" + 
											"<td>" + value.color + "</td>" +
											"<td>" + value.marca + "</td>" +
											"<td>" + value.cantidad + "</td>" +
										"</tr>");
				
 			});
		


		}
	
});
}


function cargarStock(){
	var inputTipo = (document.getElementById("tipo").value);
	var inputCosto = document.getElementById("costo").value;
	var inputTalle = document.getElementById("talle").value;
	var inputMarca = (document.getElementById("marca").value);
	var inputColor = (document.getElementById("color").value);
	var inputCantidad = document.getElementById("cantidad").value;

	var inputTipoMayus = inputTipo.charAt(0).toUpperCase() + inputTipo.slice(1);
	var inputMarcaMayus = inputMarca.charAt(0).toUpperCase() + inputMarca.slice(1);
	var inputColorMayus = inputColor.charAt(0).toUpperCase() + inputColor.slice(1);
	var inputTalleMayus = inputTalle.toUpperCase();

	var stockView = {
		"tipo": inputTipoMayus,
		"costo": inputCosto,
		"talle": inputTalleMayus,
		"marca": inputMarcaMayus,
		"color": inputColorMayus,
		"cantidad": inputCantidad
	};
	console.log(stockView);
	 stockViewJson = JSON.stringify(stockView);
	$.ajax({
		type: "POST",
		url: "https://maktub-test.herokuapp.com/maktub/stock",
		'Access-Control-Allow-Origin': "*",
		headers : {		
		"Content-Type" : "application/json"
		},
		data: stockViewJson,
		success: function(data){
			alert("Stock cargado exitosamente");
		},
		error: function(data){
			alert("Ha ocurrido un error");
			
		}
	});
}

function MarcarStock(){

	$(".marcar").append("<input type='checkbox' name='checkbox'>");
	$("#divStock").append("<button id='eliminar' class='btn btn-danger' onclick='eliminar()'>Eliminar</button>");			
 			
 			}

var tabla = document.getElementById("muestraStock");
function eliminar(){

	if(getElementByTagName("input").value == true){
		$(this).find('tr').each(function() {
 		alert(document.getElementByTagName("td").value);
}); 
	}
}
