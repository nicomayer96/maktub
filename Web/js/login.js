function login(){
	
	
	function redireccionar(){
	  	window.location ="index.html";
	} 
	$.ajax({
		type: "GET",
		url: "https://jugandobajo.000webhostapp.com/maktub/login",
		dataType: "json",
		'Access-Control-Allow-Origin': "*",
		success: function(data){
				
				if($("#inUser").val() == data.user &  $("#inPwd").val() == data.password){
					console.log("okey");
					setTimeout (redireccionar(), 5000);
				}else{
					if ($("#inUser").val() != data.user) {
						alert("Usuario incorrecto");
					}if ($("#inPwd").val() == data.password) {
						alert("Contraseña incorrecta");
					}
		} 
		}


			
			

		
	
});
}