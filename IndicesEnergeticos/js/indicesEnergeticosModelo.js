indicesEnergeticosModelo = (function(){
	//variables privadas
	

	//Clase consulta
	var ajax = function(init){
		this.init = init;
	};

	//Metodos de ajax
	ajax.prototype = {

		//@deprecated
		//mensajes de error desde el servidor, no necesita parsearlos
		// consultarRespuestaSolicitud: function(url){
		// 	var respuesta = '';
		// 	var slash = new RegExp('^\/');
		// 	if(slash.test(url)){
		// 		url = this.removerSlashInicial(url);
		// 	}
		// 	$.each(this.init.MSJSERROR,function(metodo,mensaje){
		// 		if(url.toLowerCase() === metodo.toLowerCase()){
		// 			respuesta = mensaje;
		// 			return false;
		// 		}
		// 	});
		// 	if(!respuesta){
		// 		respuesta = this.init.MSJSERROR.errorDesconocido;
		// 	}
		// 	return respuesta;
		// },
		get: function(url,funcion,datos,funcionError){
			//@deprecated
			//no mensajes de error, se devuelven del servidor
			//var msjError = this.consultarRespuestaSolicitud(url);
			$('#modal').css('display','block');
			host = document.getElementById('servicioHost').value;
			console.log('url'+url);
			console.log('datos'+datos);
			if(datos){
				//host = url;
				datos += '&nConsulta=' +url;
			}else{
				datos = '';
			}
			console.log(url);
			console.log(datos);
			console.log(host);
			//
			//host = document.getElementById('servicioHost').value;
			$.ajax({ 	
				url: host,
				dataType: 'json',
				type: 'get',
				data: datos,
				success: function(respuesta){
					console.log(respuesta);
					$('#modal').css('display','none');
					funcion(respuesta);
				},
				error: function(respuesta){
					console.log(respuesta);
					$('#modal').css('display','none');
					console.log(respuesta);
					//@deprecated 
					//comentar si el servidor retorna el error
					//funcionError(respuesta);
				}
			});
		},
		gets: function(url,funcion,funcionError){
			$('#modal').css('display','block');
			host = document.getElementById('servicioHost').value;
			console.log('url'+url);
			console.log(host);
			$.ajax({ 	
				url: host,
				dataType: 'json',
				type: 'get',
				data: '',
				success: function(respuesta){
					console.log(respuesta);
					$('#modal').css('display','none');
					funcion(respuesta);
				},
				error: function(respuesta){
					console.log(respuesta);
					$('#modal').css('display','none');
					console.log(respuesta);
					//@deprecated 
					//comentar si el servidor retorna el error
					//funcionError(respuesta);
				}
			});
		},
		load: function(contenedor,contenido){
			$(contenedor).load(contenido);
		},
		post: function(url,funcion,datos,funcionError){
			//@deprecated
			//no mensajes de error, se devuelven del servidor
			//var msjError = this.consultarRespuestaSolicitud(url);
			var msjError = 'xx';
			$('#modal').addClass('oculta');
			host = document.getElementById('servicioHost').value;
			if(datos){
				datos += '?nConsulta='+url;
				datos += datos;
			}
			console.log(datos);
			console.log(url);
			//contentType: "application/json; charset=utf-8",
			$.ajax({
				url: host,
				type: 'get',
				dataType: 'json',
				contentType: "application/json; charset=utf-8",
				data: datos,
				success: function(respuesta){
					$('#modal').css('display','none');
					funcion(respuesta);
				},
				error: function(respuesta){
					$('#modal').css('display','none');
					funcionError(msjError);
					//@deprecated 
					//comentar si el servidor retorna el error
					//funcionError(respuesta);
				}
			});
		},
		removerSlashInicial: function(url){
			var slash = new RegExp('^\/');
			urlX = [
				'',
				url
			];
			while(slash.test(urlX[1])){
				urlX = urlX[1].split(slash);
			}
			return urlX[1];
		}
	}

	return {
		ajax: ajax
	}

})();