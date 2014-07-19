indicesEnergeticosControlador = (function(){
	//variables privadas
	var detalles = {};
	var CONDICIONDETALLE = ['normal','riesgo','vigilancia'];
	var IDCONDICIONDETALLE = ['#detalleAE','#detalleED','#detalleHSIN','#detallePBP'];

	//Clase pagina
	var controlador = function(init){
		var respuesta = '';
		this.init = init;
	};
	//Metodos de pagina
	controlador.prototype = {
		
		consultar: function(respuesta){
			console.log('consultando');
			this.respuesta = respuesta;
		},
		mostrarError: function(respuesta){
			var html = new indicesEnergeticosVista.html();
			$('.mensajeError > .icon-close').empty();
			$('.mensajeError > .icon-close').html(respuesta);
			setTimeout(function(){
				html.mostrarElemento('.mensajes');
				html.mostrarElemento('.mensajeError');
			},500);
		},
		cerrarMensajeError: function(){
			var html = new indicesEnergeticosVista.html();
			$('.mensajeError > .icon-close').empty();
			html.ocultarElemento('.mensajes');
			html.ocultarElemento('.mensajeError');
		},
		//@deprecated
		mostrarIndicesJSONForma2: function(respuesta){
			this.datos = respuesta.datos;
			this.datos.titulo = respuesta.datos.shift();
			setTimeout(function(){
				$('#filasTabla').empty();
				$('#tituloTabla').empty();
			},1);
			setTimeout(function(){
				$.each(this.datos.titulo,function(posicion,columna){
					if($('#tituloTabla').length > 0){
						$('#tituloTabla').append('<td>'+columna+'</td>');
					}else{
						console.log('no encuentra el contenedor');
					}
				});
			},1);
			setTimeout(function(){
				var content = '';
				$.each(this.datos,function(posicion,fila){
					content += '<tr class="filaTabla">';
					$.each(fila,function(posicion,columna){
						content += '<td>'+columna+'</td>';
					});
					content +='</tr>';
					$('#filasTabla').append(content);
					content = '';
				});
			},1);
		},
		mostrarIndices: function(respuesta){
			console.log(respuesta);
			this.datos = respuesta.datos;
			pagina = new indicesEnergeticosControlador.pagina(this.init);
			var html = new indicesEnergeticosVista.html();
			$('.mensajeError > .icon-close').empty();
			html.ocultarElemento('.mensajes');
			html.ocultarElemento('.mensajeError');
			setTimeout(function(){
				$('#filasTabla').empty();
				$('#tituloTabla').empty();
			},1);
			setTimeout(function(){
				var contenido = '';
				$.each(this.datos,function(registroN,registro){
					$.each(registro,function(propiedad,valor){
						contenido += '<td>'+pagina.capitalizarTitulo(propiedad)+'</td>';
					});
					return false;
				});
				$('#tituloTabla').append(contenido);
				contenido = null;
			},2);
			setTimeout(function(){
				var contenido = '';
				$.each(this.datos,function(registroN,registro){
					var indiceID = false;
					var publicar = false;
					var verDetalle = false;
					var indiceIDPublicar = -1;
					contenido += '<tr class="filaTabla">';
					$.each(registro,function(propiedad,valor){
						valor = pagina.nullAVacio(valor);
						if(!indiceID){
							indiceIDPublicar = valor;
							contenido += '<td class="procesoID"><span class="tituloColumnaIndice">'+pagina.capitalizarTitulo(propiedad)+':</span>&nbsp;'+valor+'</td>';
							indiceID = true;
						}else{
							if(pagina.validaFechaServidor(valor)){
								valor = pagina.fechaUnixAString(valor);
							}
							if(propiedad.toLowerCase() === 'publicar' && valor === 'true'){
								publicar = true;
							}
							if(propiedad.toLowerCase() === 'verdetalles' && valor === 'true'){
								verDetalle = true;
							}
							if(propiedad.toLowerCase() !== 'verdetalles' && propiedad.toLowerCase() !== 'publicar'){
								contenido += '<td class="datoIndice"><span class="tituloColumnaIndice">'+pagina.capitalizarTitulo(propiedad)+':</span>&nbsp;'+valor+'</td>';
							}
						}
					});
					if(publicar){
						contenido += '<td class="opcionIndice"><button type="button" class="boton icon-checkmark" value="'+indiceIDPublicar+'"></button></td>';
					}
					if(verDetalle){
						contenido += '<td class="opcionIndice"><button type="button" class="boton icon-plus" value="'+indiceIDPublicar+'"></button></td>';
					}
					//@deprecated
					//opcion de publicar indice en la lista
					//contenido += '<td class="opcionIndice"><button type="button" class="boton icon-arrow-right" value="'+indiceIDPublicar+'"></button></td>';
					
					contenido += '<td class="radioIndice"><input type="radio" name="opcionIndice" value="'+indiceIDPublicar+'"></td>';
					contenido +='</tr>';
				});
				$('#filasTabla').append(contenido);
				contenido = null;
			},2);
		},
		mostrarIndicesDetalle: function(respuesta){
			setTimeout(function(){
				$.each(IDCONDICIONDETALLE,function(posicion,id){
					$.each(IDCONDICIONDETALLE,function(pos,condicion){
						$(IDCONDICIONDETALLE[posicion]).empty();
						if($(IDCONDICIONDETALLE[posicion]).hasClass(condicion)){
							$(IDCONDICIONDETALLE[posicion]).removeClass(condicion);
						}
					});
				});
			},1);
			setTimeout(function(){
				$.each(respuesta,function(pos,datos){
					$.each(datos,function(posi,objeto){
						for(clave in objeto){
							var divIdentificador = '';
							switch(clave){
								case 'AE':
									divIdentificador = '#detalleAE';
									break;
								case 'ED':
									divIdentificador = '#detalleED';
									break;
								case 'HSIN':
									divIdentificador = '#detalleHSIN';
									break;
								case 'PBP':
									divIdentificador = '#detallePBP';
									break;
								default:
									break;
							}
							$(divIdentificador).addClass(objeto[clave]);
							$(divIdentificador).html('&nbsp');
						}
					});
				});
			},2);
		},
		mostrarIndicesPublicacion: function(respuesta){
			setTimeout(function(){
				//mensaje retroalimentacion si creo
				console.log('publico indice');
			},1);
		}
	}

	//Clase pagina
	var pagina = function(init){
		filaSeleccionada = -1;
		this.init = init;
	};
	//Metodos de pagina
	pagina.prototype = {
		
		cargarPlantilla: function(){
			var ajax = new indicesEnergeticosModelo.ajax(this.init);
			urlActual = window.location.pathname;
			var rest = urlActual.substring(0, urlActual.lastIndexOf("/") + 1);
			var url = rest+'plantillas/IndicesEnergeticos.html';
			ajax.load('.container','plantillas/IndicesEnergeticos.html');
		},
		cancelarIndice: function(){
			//
		},
		capitalizarTitulo: function(titulo){
			var titulos = {
				'indiceID':'Índice ID',
				'fechaCalculo':'Fecha de calculo',
				'tipoCalculo':'Tipo de calculo',
				'condicion':'Condición',
				'estado':'Estado',
				'fechaPublicacion':'Fecha de publicación',
				'fechaVigencia':'Fecha de vigencia',
				'Publicar':'Publicar',
				'VerDetalles':'Ver detalles'
			};
			var tituloCap = '';
			$.each(titulos,function(original,capitalizado){
				if(original == titulo){
					tituloCap = capitalizado;
				}
			});
			if(tituloCap){
				return tituloCap;
			}
			return false;
		},
		consultar: function(){
			console.log('consultar');
			var consulta = new indicesEnergeticosVista.html(this.init);
			var modelo = new indicesEnergeticosModelo.ajax(this.init);
			var controlador = new indicesEnergeticosControlador.controlador(this.init);
			valido = this.validaInputsBusqueda();
			if(valido){
				parametros = this.obtenerParametrosConsultaIndiceString();
				console.log('parametros'+parametros);
				//modelo.get(SERVICIOS.indicesEnergeticos,controlador.mostrarIndices,'',controlador.mostrarError);
				modelo.get(this.init.SERVICIOS.indicesEnergeticos,controlador.mostrarIndices,parametros,controlador.mostrarError);
			}else{
				consulta.completarFormulario();
			}
		},
		fechaUnixAString: function(fecha){
			fecha = fecha.split('/Date(')[1].split('-0500)/');
			fecha = new Date(fecha[0]*1);
			return fecha.getDay()+'\/'+fecha.getMonth()+'\/'+fecha.getFullYear();
		},
		mostrarPublicarIndice: function(){
			var html = new indicesEnergeticosVista.html(this.init);
			html.mostrarElemento('.publicacion');
		},
		nullAVacio: function(valor){
			if(valor === 'null'){
				return '';
			}
			return valor;
		},
		obtenerParametrosConsultaIndice: function(){
			var parametros = {};
			parametros.fechaInicial = this.fechaInicial;
			parametros.fechaFinal = this.fechaFinal;
			return parametros;
		},
		obtenerParametrosConsultaIndiceString: function(){
			var parametros = '';
			parametros += 'fechaInicial='+this.fechaInicial;
			parametros += '&fechaFinal='+this.fechaFinal;
			//parametros = 'fechaInicial';
			return parametros;
		},
		publicarIndice: function(){
			console.log(this.filaSeleccionada);
			var ajax = new indicesEnergeticosModelo.ajax(this.init);
			var indices = new indicesEnergeticosControlador.controlador(this.init);
			var parametros = '';
			//parametros.fechaPublicacion = document.getElementById('fechaPublicacion').value;
			//parametros.indiceID = this.filaSeleccionada;
			//parametros += 'indiceID='+this.filaSeleccionada;
			parametros += 'indiceID='+document.getElementById('idPublicacionHidden').value;
			parametros += '&fechaPublicacion='+ document.getElementById('fechaPublicacion').value;
			ajax.get(this.init.SERVICIOS.indicesEnergeticosPublicacion,indices.mostrarIndicesPublicacion,parametros,'');//,indices.mostrarPublicacionError
			ajax.get(this.init.SERVICIOS.indicesEnergeticos,indices.mostrarIndices,'',indices.mostrarError);
		},
		publicarIndiceSel: function(){
			//fecha publicacion
		},
		seleccionarFila: function(fila){
			//@deprecated
			//selecciona fila de esta manera si hacen click en fila no en opcion
			//this.filaSeleccionada = parseInt(fila.text().split('',1));
			this.filaSeleccionada = fila+0;

			console.log(this.filaSeleccionada);
		},
		validaFechaServidor: function(fecha){
			var dividir = fecha.split('/Date(');
			if(dividir.length === 2){
				return true;
			}
			return false;
		},
		validaInputsBusqueda: function(){
			this.fechaInicial = $('#fechaInicial').val();
			this.fechaFinal = $('#fechaFinal').val();
			
			console.log(this.fechaInicial+'inicial');
			console.log(this.fechaFinal+'final');
			if(this.fechaInicial.length > 0){
				if(this.fechaFinal.length > 0){
					return true;
				}
			}
			return false;
		},
		verDetalleIndice: function(indice){
			var ajax = new indicesEnergeticosModelo.ajax(this.init);
			var indices = new indicesEnergeticosControlador.controlador(this.init);
			// var parametros = {
			// 	indiceID: indice+0
			// };
			var parametros = '?indiceID='+indice;
			ajax.get(this.init.SERVICIOS.indicesEnergeticosDetalle,indices.mostrarIndicesDetalle,parametros,indices.mostrarError);
		},
		verDetalleIndiceSel: function(){
			var ajax = new indicesEnergeticosModelo.ajax(this.init);
			var indices = new indicesEnergeticosControlador.controlador(this.init);
			var parametros = {};
			parametros.indiceID = this.filaSeleccionada;
			ajax.get(this.init.SERVICIOS.indicesEnergeticosDetalle,indices.mostrarIndicesDetalle,parametros,indices.mostrarError);
		},
		verReportesIndiceSel: function(){
			//graficas
		}
		
	}

	return {
		pagina: pagina,
		controlador: controlador
	}

})();