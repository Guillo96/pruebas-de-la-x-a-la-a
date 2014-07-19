$.mockjax({
	url: '/indicesEnergeticosPublicacion',
	//data: {fechaPublicacion: '2014-01-01',fechaFinal: '2014-01-01'},
	urlParams: ['fechaPublicacion', 'indiceID'],
	response: function (settings) {
		var authorID = settings.urlParams.indiceID;
		var isbnNumber = settigns.urlParams.fechaPublicacion;
	},
	responseText: {
		datos: [
			{
				'indiceID':001,
				'fechaCalculo':'2014-01-03',
				'tipoCalculo':'semanal'
			}
	  	]
	}
});
//?fechaInicial=2014-06-18&fechaFinal=2014-07-18'

$.mockjax({
	url: 'IEProxyServicios.aspx',//
	//data: {nConsulta:'indicesEnergeticosJSON'},
	responseText: {
		datos: [
			{
				'indiceID':'00005',
				'fechaCalculo':'\/Date(1404882000000-0500)\/',
				'tipoCalculo':'mensual',
				'condicion':'null',
				'estado':'calculado',
				'fechaPublicacion':'null',
				'fechaVigencia':'\/Date(1404882000000-0500)\/',
				'Publicar':'true',
				'VerDetalles':'true'
			},
			{
				'indiceID':'004',
				'fechaCalculo':'2014-01-23',
				'tipoCalculo':'semanal',
				'condicion':'riesgo',
				'estado':'calculado',
				'fechaPublicacion':'',
				'fechaVigencia':'',
				'Publicar':'true',
				'VerDetalles':'true'
			},
			{
				'indiceID':003,
				'fechaCalculo':'2014-01-15',
				'tipoCalculo':'diario',
				'condicion':'normal',
				'estado':'calculado',
				'fechaPublicacion':'',
				'fechaVigencia':'',
				'Publicar':'true',
				'VerDetalles':'true'
			},
			{
				'indiceID':002,
				'fechaCalculo':'2014-01-08',
				'tipoCalculo':'diario',
				'condicion':'vigilancia',
				'estado':'publicado',
				'fechaPublicacion':'2014-01-08',
				'fechaVigencia':'2014-01-30',
				'Publicar':'true',
				'VerDetalles':'true'
			},
			{
				'indiceID':001,
				'fechaCalculo':'2014-01-01',
				'tipoCalculo':'semanal',
				'condicion':'normal',
				'estado':'calculado',
				'fechaPublicacion':'2014-01-01',
				'fechaVigencia':'2014-01-30',
				'Publicar':'true',
				'VerDetalles':'true'
			}
	  	]
	}
});
$.mockjax({
	url: 'indicesEnergeticosJSONxx',
	//data: {nConsulta:'indicesEnergeticosJSON'},
	responseText: {
		datos: [
			{
				'indiceID':"11111111111111111111111",
				'fechaCalculo':'2012-01-31',
				'tipoCalculo':'mensual',
				'condicion':'normal',
				'estado':'calculado',
				'fechaPublicacion':'2012-01-01',
				'fechaVigencia':'2012-01-30'
			},
			{
				'indiceID':008,
				'fechaCalculo':'2012-01-23',
				'tipoCalculo':'semanal',
				'condicion':'riesgo',
				'estado':'calculado',
				'fechaPublicacion':'',
				'fechaVigencia':''
			},
			{
				'indiceID':009,
				'fechaCalculo':'2012-01-15',
				'tipoCalculo':'diario',
				'condicion':'normal',
				'estado':'calculado',
				'fechaPublicacion':'',
				'fechaVigencia':''
			}
	  	]
	}
});
// $.mockjax({
// 	url: 'indicesEnergeticosJSONyyy',
// 	responseText: {
// 		datos: [
// 			{
// 				'indiceID':"007",
// 				'fechaCalculo':'2012-01-31',
// 				'tipoCalculo':'mensual',
// 				'condicion':'normal',
// 				'estado':'calculado',
// 				'fechaPublicacion':'2012-01-01',
// 				'fechaVigencia':'2012-01-30'
// 			},
// 			{
// 				'indiceID':008,
// 				'fechaCalculo':'2012-01-23',
// 				'tipoCalculo':'semanal',
// 				'condicion':'riesgo',
// 				'estado':'calculado',
// 				'fechaPublicacion':'',
// 				'fechaVigencia':''
// 			},
// 			{
// 				'indiceID':009,
// 				'fechaCalculo':'2012-01-15',
// 				'tipoCalculo':'diario',
// 				'condicion':'normal',
// 				'estado':'calculado',
// 				'fechaPublicacion':'',
// 				'fechaVigencia':''
// 			}
// 	  	]
// 	}
// });
// $.mockjax({
// 	url: '/indicesEnergeticosOld',
// 	dataType: 'json',
// 	responseText: {
// 		datos: [
// 			['id','fechaCalculo','tipoCalculo','condicion','estado','fechaPublicacion','fechaVigencia'],
// 			[001,'2014-01-01','semanal','normal','calculado','2014-01-01','2014-01-30'],
// 		    [002,'2014-01-08','diario','vigilancia','publicado','2014-01-08','2014-01-30'],
// 		    [003,'2014-01-15','diario','normal','calculado','',''],
// 		    [004,'2014-01-23','semanal','riesgo','calculado','',''],
// 		    [005,'2014-01-31','mensual','normal','calculado','2014-01-01','2014-01-30']
// 	  	]
// 	}
// });
// $.mockjax({
// 	url: '/IndicesEnergeticosPublicacion?indiceID=005&fechaPublicacion=2014-07-18',
// 	dataType: 'json',
// 	responseText: {
// 		datos: [
// 			{
// 				'indiceID':'11111111111111111111',
// 				'fechaCalculo':'\/Date(1404882000000-0500)\/',
// 				'tipoCalculo':'mensual',
// 				'condicion':'null',
// 				'estado':'calculado',
// 				'fechaPublicacion':'null',
// 				'fechaVigencia':'\/Date(1404882000000-0500)\/',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			},
// 			{
// 				'indiceID':'222222222222222222222222',
// 				'fechaCalculo':'2014-01-23',
// 				'tipoCalculo':'semanal',
// 				'condicion':'riesgo',
// 				'estado':'calculado',
// 				'fechaPublicacion':'',
// 				'fechaVigencia':'',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			},
// 			{
// 				'indiceID':003,
// 				'fechaCalculo':'2014-01-15',
// 				'tipoCalculo':'diario',
// 				'condicion':'normal',
// 				'estado':'calculado',
// 				'fechaPublicacion':'',
// 				'fechaVigencia':'',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			},
// 			{
// 				'indiceID':002,
// 				'fechaCalculo':'2014-01-08',
// 				'tipoCalculo':'diario',
// 				'condicion':'vigilancia',
// 				'estado':'publicado',
// 				'fechaPublicacion':'2014-01-08',
// 				'fechaVigencia':'2014-01-30',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			},
// 			{
// 				'indiceID':001,
// 				'fechaCalculo':'2014-01-01',
// 				'tipoCalculo':'semanal',
// 				'condicion':'normal',
// 				'estado':'calculado',
// 				'fechaPublicacion':'2014-01-01',
// 				'fechaVigencia':'2014-01-30',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			}
// 	  	]
// 	}
// });
// ///IndicesEnergeticosJSON?fechaInicial=2014-07-18&fechaFinal=2014-07-18'
// $.mockjax({
// 	url: '/IndicesEnergeticosJSONfechaInicial',
// 	dataType: 'json',
// 	responseText: {
// 		datos: [
// 			{
// 				'indiceID':'11111111111111111111',
// 				'fechaCalculo':'\/Date(1404882000000-0500)\/',
// 				'tipoCalculo':'mensual',
// 				'condicion':'null',
// 				'estado':'calculado',
// 				'fechaPublicacion':'null',
// 				'fechaVigencia':'\/Date(1404882000000-0500)\/',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			},
// 			{
// 				'indiceID':'222222222222222222222222',
// 				'fechaCalculo':'2014-01-23',
// 				'tipoCalculo':'semanal',
// 				'condicion':'riesgo',
// 				'estado':'calculado',
// 				'fechaPublicacion':'',
// 				'fechaVigencia':'',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			},
// 			{
// 				'indiceID':003,
// 				'fechaCalculo':'2014-01-15',
// 				'tipoCalculo':'diario',
// 				'condicion':'normal',
// 				'estado':'calculado',
// 				'fechaPublicacion':'',
// 				'fechaVigencia':'',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			},
// 			{
// 				'indiceID':002,
// 				'fechaCalculo':'2014-01-08',
// 				'tipoCalculo':'diario',
// 				'condicion':'vigilancia',
// 				'estado':'publicado',
// 				'fechaPublicacion':'2014-01-08',
// 				'fechaVigencia':'2014-01-30',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			},
// 			{
// 				'indiceID':001,
// 				'fechaCalculo':'2014-01-01',
// 				'tipoCalculo':'semanal',
// 				'condicion':'normal',
// 				'estado':'calculado',
// 				'fechaPublicacion':'2014-01-01',
// 				'fechaVigencia':'2014-01-30',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			}
// 	  	]
// 	}
// });
// $.mockjax({
// 	url: '/IndicesEnergeticosJSON?fechaInicial',
// 	dataType: 'json',
// 	responseTime: 800,
// 	responseText: {
// 		datos: [
// 			{
// 				'indiceID':'11111111111111111111',
// 				'fechaCalculo':'\/Date(1404882000000-0500)\/',
// 				'tipoCalculo':'mensual',
// 				'condicion':'null',
// 				'estado':'calculado',
// 				'fechaPublicacion':'null',
// 				'fechaVigencia':'\/Date(1404882000000-0500)\/',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			},
// 			{
// 				'indiceID':'222222222222222222222222',
// 				'fechaCalculo':'2014-01-23',
// 				'tipoCalculo':'semanal',
// 				'condicion':'riesgo',
// 				'estado':'calculado',
// 				'fechaPublicacion':'',
// 				'fechaVigencia':'',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			},
// 			{
// 				'indiceID':003,
// 				'fechaCalculo':'2014-01-15',
// 				'tipoCalculo':'diario',
// 				'condicion':'normal',
// 				'estado':'calculado',
// 				'fechaPublicacion':'',
// 				'fechaVigencia':'',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			},
// 			{
// 				'indiceID':002,
// 				'fechaCalculo':'2014-01-08',
// 				'tipoCalculo':'diario',
// 				'condicion':'vigilancia',
// 				'estado':'publicado',
// 				'fechaPublicacion':'2014-01-08',
// 				'fechaVigencia':'2014-01-30',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			},
// 			{
// 				'indiceID':001,
// 				'fechaCalculo':'2014-01-01',
// 				'tipoCalculo':'semanal',
// 				'condicion':'normal',
// 				'estado':'calculado',
// 				'fechaPublicacion':'2014-01-01',
// 				'fechaVigencia':'2014-01-30',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			}
// 	  	]
// 	}
// });
// $.mockjax({
// 	url: '/IndicesEnergeticosJSON?fechaInicial=2014-05-18&fechaFinal=2014-07-18',
// 	dataType: 'json',
// 	responseTime: 800,
// 	responseText: {
// 		datos: [
// 			{
// 				'indiceID':'10101010101',
// 				'fechaCalculo':'\/Date(1404882000000-0500)\/',
// 				'tipoCalculo':'mensual',
// 				'condicion':'null',
// 				'estado':'calculado',
// 				'fechaPublicacion':'null',
// 				'fechaVigencia':'\/Date(1404882000000-0500)\/',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			},
// 			{
// 				'indiceID':'010101010101',
// 				'fechaCalculo':'2014-01-23',
// 				'tipoCalculo':'semanal',
// 				'condicion':'riesgo',
// 				'estado':'calculado',
// 				'fechaPublicacion':'',
// 				'fechaVigencia':'',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			},
// 			{
// 				'indiceID':003,
// 				'fechaCalculo':'2014-01-15',
// 				'tipoCalculo':'diario',
// 				'condicion':'normal',
// 				'estado':'calculado',
// 				'fechaPublicacion':'',
// 				'fechaVigencia':'',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			},
// 			{
// 				'indiceID':002,
// 				'fechaCalculo':'2014-01-08',
// 				'tipoCalculo':'diario',
// 				'condicion':'vigilancia',
// 				'estado':'publicado',
// 				'fechaPublicacion':'2014-01-08',
// 				'fechaVigencia':'2014-01-30',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			},
// 			{
// 				'indiceID':001,
// 				'fechaCalculo':'2014-01-01',
// 				'tipoCalculo':'semanal',
// 				'condicion':'normal',
// 				'estado':'calculado',
// 				'fechaPublicacion':'2014-01-01',
// 				'fechaVigencia':'2014-01-30',
// 				'Publicar':'true',
// 				'VerDetalles':'true'
// 			}
// 	  	]
// 	}
// });
$.mockjax({
	url: '/IndicesEnergeticosJSON',
	dataType: 'json',
	responseTime: 800,
	responseText: {
		datos: [
			{
				'indiceID':'005',
				'fechaCalculo':'\/Date(1404882000000-0500)\/',
				'tipoCalculo':'mensual',
				'condicion':'null',
				'estado':'calculado',
				'fechaPublicacion':'null',
				'fechaVigencia':'\/Date(1404882000000-0500)\/',
				'Publicar':'true',
				'VerDetalles':'true'
			},
			{
				'indiceID':'004',
				'fechaCalculo':'2014-01-23',
				'tipoCalculo':'semanal',
				'condicion':'riesgo',
				'estado':'calculado',
				'fechaPublicacion':'',
				'fechaVigencia':'',
				'Publicar':'true',
				'VerDetalles':'true'
			},
			{
				'indiceID':003,
				'fechaCalculo':'2014-01-15',
				'tipoCalculo':'diario',
				'condicion':'normal',
				'estado':'calculado',
				'fechaPublicacion':'',
				'fechaVigencia':'',
				'Publicar':'true',
				'VerDetalles':'true'
			},
			{
				'indiceID':002,
				'fechaCalculo':'2014-01-08',
				'tipoCalculo':'diario',
				'condicion':'vigilancia',
				'estado':'publicado',
				'fechaPublicacion':'2014-01-08',
				'fechaVigencia':'2014-01-30',
				'Publicar':'true',
				'VerDetalles':'true'
			},
			{
				'indiceID':001,
				'fechaCalculo':'2014-01-01',
				'tipoCalculo':'semanal',
				'condicion':'normal',
				'estado':'calculado',
				'fechaPublicacion':'2014-01-01',
				'fechaVigencia':'2014-01-30',
				'Publicar':'true',
				'VerDetalles':'true'
			}
	  	]
	}
});
$.mockjax({
	url: '/DetalleIndice',
	//data: {indiceID: 0},
	responseText: {
		datos: [
			{'AE':'normal'},
			{'ED':'riesgo'},
			{'HSIN':'riesgo'},
			{'PBP':'riesgo'}
	  	]
	}
});
$.mockjax({
	url: '/DetalleIndice',
	data: {indiceID: 0500},
	responseText: {
		datos: [
		    {'AE':'riesgo'},
		    {'ED':'riesgo'},
		    {'HSIN':'riesgo'},
		    {'PBP':'vigilancia'}
	  	]
	}
});
$.mockjax({
	url: '/DetalleIndice',
	data: {indiceID: 2},
	responseText: {
		datos: [
		    {'AE':'normal'},
		    {'ED':'normal'},
		    {'HSIN':'normal'},
		    {'PBP':'normal'}
	  	]
	}
});
$.mockjax({
	url: '/DetalleIndice',
	data: {indiceID: 3},
	responseText: {
		datos: [
		 	{'AE':'normal'},
		 	{'ED':'riesgo'},
		 	{'HSIN':'vigilancia'},
		 	{'PBP':'riesgo'}
	  	]
	}
});
$.mockjax({
	url: '/DetalleIndice',
	data: {indiceID: 4},
	responseText: {
		datos: [
		    {'AE':'riesgo'},
		    {'ED':'normal'},
		    {'HSIN':'vigilancia'},
		    {'PBP':'vigilancia'}
	  	]
	}
});
$.mockjax({
	url: '/DetalleIndice',
	data: {indiceID: 5},
	responseText: {
		datos: [
			{'AE':'normal'},
			{'ED':'vigilancia'},
			{'HSIN':'normal'},
			{'PBP':'normal'}
	  	]
	}
});
$.mockjax({
	url: '/DetalleIndice',
	data: {indiceID: 6},
	responseText: {
		datos: [
		    {'AE':'normal'},
		    {'ED':'riesgo'},
		    {'HSIN':'vigilancia'},
		    {'PBP':'normal'}
	  	]
	}
});
//modificar parametros
$.mockjax({
	url: '/indicePBP',
	dataType: 'json',
	//urlParams: ['authorID', 'isbnNumber'],
	response: function (settings) {
		var authorID = settings.urlParams.authorID;
		var isbnNumber = settigns.urlParams.isbnNumber;
		//etc.
	}
});
