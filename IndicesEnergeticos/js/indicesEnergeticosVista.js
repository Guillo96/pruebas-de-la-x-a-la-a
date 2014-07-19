indicesEnergeticosVista = (function(){

	//Clase vista
	var vista = function(init){
		filaSeleccionada = -1;
		this.init = init;
	};

	vista.prototype = {

		escucharPagina: function(){
			var evento = new indicesEnergeticosVista.eventos(this.init);
			try{
				//Input date de publicacion luego de error
				$('#fechaFinal').on('focusout',function(){
					evento.errorConsulta('#fechaFinal');
				});
				//Input date de publicacion luego de error
				$('#fechaInicial').on('focusout',function(){
					evento.errorConsulta('#fechaInicial');
				});
				//Consultar indice energetico por fecha
				$('#consultar').on('click',function(){
					evento.consultar();
				});
				//Boton para publicar ubicado en la lista cuando la pantalla esta (landscape/horizontal)
				$('#filasTabla').on('click','tr td button.icon-checkmark',function(){
					evento.publicar($(this).val());
				});
				//Boton para ver detalles de un indice ubicado en la lista cuando la pantalla esta (landscape/horizontal)
				$('#filasTabla').on('click','tr td button.icon-plus',function(){
					evento.verDetalles($(this).val());
				});
				//Boton para seleccionar un indice de la lista cuando la pantalla esta (portrait/vertical)
				$('#filasTabla').on('click','tr td input',function(){
					evento.seleccionarFila($(this).val());	
				});
				//Boton para cerrar el 'div' de (indicadores/detalles) de un indice seleccionado
				$('#btnCerrarValorIndicadores').on('click',function(){
					evento.ocultarElemento('.valorIndicadores');
				});
				//Opciones de lista cuando página tiene orientación (portrait/vertical)
				//ID de opciones: verReportesIndiceSel, verDetalleIndiceSel, publicarIndiceSel
				//Boton publicar indice
				$('#publicarIndice').on('click',function(){
					evento.publicarIndice();
				});
				//Boton cancelar indice
				$('#cancelarIndice').on('click',function(){
					evento.cancelarPublicarIndice();
				});
				//Boton para cerrar mensajes de error
				$('.icon-close').on('click',function(){
					evento.cerrarMensajeError();
				});
				//Boton para ver reportes (graficas) de un indice seleccionado
				$('#verReportesIndiceSel').on('click',function(){
					evento.verReportesIndiceSel();
				});
				//Boton para ver reportes de un indice seleccionado 
				$('#verDetalleIndiceSel').on('click',function(){
					evento.verDetalleIndiceSel();
				});
				//
				$('#publicarIndiceSel').on('click',function(){
					evento.publicarIndiceSel();
				});

				//Evento de scroll en pagina con orientación (portrait/vertical)
				//Llama a esconder las opciones del footer
				$(window).on('scroll',function(){
					evento.esconderOpcionesFooter();
				});
			}catch(e){
				console.log('Error en IndicesEnergeticosVista -> Error en vista -> escucharPagina');
				console.log(e);
			}
		}
	}

	var eventos = function(init){
		this.init = init;
	}

	eventos.prototype = {
		
		errorConsulta: function(elemento){
			$(elemento).removeClass('formularioError');
		},
		consultar: function(){
			var pagina = new indicesEnergeticosControlador.pagina(this.init);
			pagina.consultar();
		},
		publicar: function(indice){
			var html = new indicesEnergeticosVista.html(this.init);
			var pagina = new indicesEnergeticosControlador.pagina(this.init);
			html.mostrarElemento('.publicacion');
			console.log(indice);
			pagina.seleccionarFila(indice);
			$('#idPublicacionHidden').val(indice);
			//pagina.mostrarPublicarIndice();
		},
		verDetalles: function(indice){
			var pagina = new indicesEnergeticosControlador.pagina(this.init);
			var html = new indicesEnergeticosVista.html(this.init);
			pagina.verDetalleIndice(indice);
			html.mostrarElemento('.valorIndicadores');
		},
		seleccionarFila: function(indice){
			var pagina = new indicesEnergeticosControlador.pagina(this.init);
			pagina.seleccionarFila(indice);
			$('#idPublicacionHidden').val(indice);
		},
		ocultarElemento: function(elemento){
			var html = new indicesEnergeticosVista.html(this.init);
			html.ocultarElemento('.valorIndicadores');
			//pagina.seleccionarFila($(this));
			//pagina.mostrarPublicarIndice();
		},
		publicarIndice: function(){
			var pagina = new indicesEnergeticosControlador.pagina(this.init);
			var html = new indicesEnergeticosVista.html(this.init);
			pagina.publicarIndice();
			html.ocultarElemento('.publicacion');
		},
		cancelarPublicarIndice: function(){
			var html = new indicesEnergeticosVista.html(this.init);
			html.ocultarElemento('.publicacion');
		},
		cerrarMensajeError: function(){
			var controlador = new indicesEnergeticosControlador.controlador(this.init);
			controlador.cerrarMensajeError();
		},
		publicarIndiceSel: function(){
			var html = new indicesEnergeticosControlador.pagina(this.init);
			var pagina = new indicesEnergeticosControlador.pagina(this.init);
			pagina.publicarIndiceSel();
		},
		verReportesIndiceSel: function(){
			var pagina = new indicesEnergeticosControlador.pagina(this.init);
			//pagina.seleccionarFila($(this));
			pagina.verReportesIndiceSel();
		},
		verDetalleIndiceSel: function(){
			var pagina = new indicesEnergeticosControlador.pagina(this.init);
			var html = new indicesEnergeticosVista.html(this.init);
			pagina.verDetalleIndiceSel();
			html.mostrarElemento('.valorIndicadores');
		},
		esconderOpcionesFooter: function(){
			$('.opciones').hide();
			//clearTimeout($.data(this));
			$.data(this,setTimeout(function(){
				$('.opciones').show();
			},500));
		}
	};

	//Clase de manipulacion en vista del DOM
	var html = function(init){
		this.fechaInicial = '';
		this.fechaFinal = '';
		this.init = init;
	};

	//Metodos
	html.prototype = {

		configurarInputsConsulta: function(){
			var fechaActual = this.init.FECHAACTUAL;
			try{
				var fechaInicial = document.getElementById('fechaInicial') || document.getElementById('#fechaInicial');
				var fechaFinal = document.getElementById('fechaFinal') || document.getElementById('#fechaFinal');
				fechaInicial.max = fechaActual;
				fechaFinal.max = fechaActual;
				fechaInicial.value = fechaActual;
				fechaFinal.value = fechaActual;
			}catch(e){
				console.log(e);
			}
			
		},
		configurarInputPublicacion: function(){
			var fechaActual = this.init.FECHAACTUAL;
			try{
				var fechaPublicacion = document.getElementById('#fechaPublicacion') || document.getElementById('fechaPublicacion');
				fechaPublicacion.min = fechaActual;	
				fechaPublicacion.value = fechaActual;
			}catch(e){
				console.log(e);
			}
		},
		configurarPagina: function(){
			this.ocultarElemento('.opciones');
			this.ocultarElemento('#verDetalleIndiceSel');
			this.ocultarElemento('#publicarIndiceSel');
			this.ocultarElemento('verDetalleIndiceSel');
			this.ocultarElemento('publicarIndiceSel');
			this.ocultarElemento('.mensajes');
			this.ocultarElemento('.mensajeError');
			this.ocultarElemento('.mensajeExito');
			this.ocultarElemento('.publicacion');
			this.ocultarElemento('.valorIndicadores');
			this.configurarInputPublicacion();
			this.configurarInputsConsulta();
		},
		completarFormulario: function(){
			if(this.fechaInicial.length == 0){
				$('#fechaInicial').toggleClass('formularioError');
			}
			if(this.fechaFinal.length == 0){
				$('#fechaFinal').toggleClass('formularioError');
			}
		},
		mostrarElemento: function(elemento){
			if($(elemento).hasClass('oculta')){
				$(elemento).removeClass('oculta');
				$(elemento).addClass('visible');
			}else{
				$(elemento).addClass('visible');
			}
		},
		mostrarMensajeError: function(elemento){
			//
		},
		mostrarMensajeExito: function(elemento){
			//
		},
		ocultarElemento: function(elemento){
			if($(elemento).hasClass('visible')){
				$(elemento).removeClass('visible');
				$(elemento).addClass('oculta');
			}else{
				$(elemento).addClass('oculta');
			}
		}
	}

	return {
		vista: vista,
		html: html,
		eventos: eventos
	};

})();