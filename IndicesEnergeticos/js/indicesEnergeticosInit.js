$(document).ready(function(){
	var init = {};
	var FECHAACTUAL = function(){
		var hoy = new Date();
		var dd = hoy.getDate();
		var mm = hoy.getMonth()+1;
		var yyyy = hoy.getFullYear();
		if(dd<10){
		    dd= '0'+dd;
		}
		if(mm<10){
		    mm= '0'+mm;
		}
		return yyyy+'-'+mm+'-'+dd;
	};
	var SERVICIOS = {};
	var MSJSERROR = {};
	Object.defineProperties(SERVICIOS, {
		'indicesEnergeticos':{
			value: ''+document.getElementById('servicioIndicesEnergeticos').value
		},
		'indicesEnergeticosPublicacion':{
			value: ''+document.getElementById('servicioIndicesEnergeticosPublicacion').value
		},
		'indicesEnergeticosDetalle':{
			value: ''+document.getElementById('servicioIndicesEnergeticosDetalle').value
		}
		//@deprecated
		//no se consultan las graficas de indices desde esta pagina
		//,
		// 'analisisEnergetico':{
		// 	value: ''+document.getElementById('servicioAnalisisEnergetico').value
		// },
		// 'energiaDisponible':{
		// 	value: ''+document.getElementById('servicioEnergiaDisponible').value
		// },
		// 'condicionSistema':{
		// 	value: ''+document.getElementById('servicioCondicionSistema').value
		// },
		// 'precioBolsaPromedio':{
		// 	value: ''+document.getElementById('servicioPrecioBolsaPromedio').value
		// }
	});
	//@deprecated
	//Se van a retornar los mensajes en el 'body' de la respuesta cuando el código de estado http sea negativo
	// Object.defineProperties(MSJSERROR, {
	// 	'indicesEnergeticos':{
	// 		value: ''+document.getElementById('errorIndicesEnergeticos').value
	// 	},
	// 	'indicesEnergeticosPublicacion':{
	// 		value: ''+document.getElementById('errorIndicesEnergeticosPublicacion').value
	// 	},
	// 	'indicesEnergeticosDetalle':{
	// 		value: ''+document.getElementById('errorIndicesEnergeticosDetalle').value
	// 	},
	// 	'analisisEnergetico':{
	// 		value: ''+document.getElementById('errorAnalisisEnergetico').value
	// 	},
	// 	'energiaDisponible':{
	// 		value: ''+document.getElementById('errorEnergiaDisponible').value
	// 	},
	// 	'condicionSistema':{
	// 		value: ''+document.getElementById('errorCondicionSistema').value
	// 	},
	// 	'precioBolsaPromedio':{
	// 		value: ''+document.getElementById('errorPrecioBolsaPromedio').value
	// 	},
	// 	'errorDesconocido':{
	// 		value: 'Por favor revise la información enviada y vuelva a intentarlo.',
	// 		enumerable: true
	// 	}
	// });
	init = {
		SERVICIOS: SERVICIOS,
		//@deprecated errores del sistema retornan por http
		//MSJSERROR: MSJSERROR,
		FECHAACTUAL: FECHAACTUAL()
	};

	var vista = new indicesEnergeticosVista.vista(init);
	var vistaConf = new indicesEnergeticosVista.html(init);

	var controlador = new indicesEnergeticosControlador.controlador(init);
	var pagina = new indicesEnergeticosControlador.pagina(init);
	
	var modelo = new indicesEnergeticosModelo.ajax(init);

	pagina.cargarPlantilla();
	//@deprecated
	//solicita datos al abrir la pagina
	//modelo.gets(SERVICIOS.indicesEnergeticos,controlador.mostrarIndices,controlador.mostrarError);
	
	try{
		setTimeout(function(){
			vistaConf.configurarPagina();
		},100);
	}catch(e){
		console.log('no fue tiempo suficiente en init configurando vista');
		console.log(e);
		setTimeout(function(){
			vistaConf.configurarPagina();
		},500);
	}
	try{
		setTimeout(function(){
			vista.escucharPagina();
		},100);
	}catch(e){
		console.log('no fue tiempo suficiente en init llamando vista');
		console.log(e);
		setTimeout(function(){
			vista.escucharPagina();
		},500);
	}
});