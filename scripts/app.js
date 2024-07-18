
$('#selectCustomer').change(function(){
  const option = $(this).val();
  $('#btnAcess').attr('href',option)

})

// $('#selectStates1').change(function(){

//   const state = $(this).val()
//   getCity(state,1);

// })

// $('#selectStates2').change(function(){

//   const state = $(this).val()
//   getCity(state,2);

// })

$('#btnCotizar').click(()=>{

  const nombre    = $('#nombre').val();
  const mercancia = $('#mercancia').val();
  const peso      = $('#peso').val();
  const embalaje  = $('#embalaje').val();
  const estadoOrigen  = $('#selectStates1').val();
  const ciudadOrigen  = $('#selectCities1').val();
  const estadoDestino = $('#selectStates2').val();
  const ciudadDestino = $('#selectCities2').val();
  const unidad     = $('#unidad').val();
  const transbordo = $('#transbordo').val();
  const telefono   = $('#telefono').val();
  const correo     = $('#correo').val();
  const comentario = $('#comentario').val();

  $('#labelCotizar').text('');
  $('#labelCotizar').text('Estamos enviando tu cotización...');
  $('#labelCotizar').css('color','black')


    const data = {
      nombre,
      mercancia,
      peso,
      embalaje,
      estadoOrigen,
      ciudadOrigen,
      estadoDestino,
      ciudadDestino,
      unidad,
      transbordo,
      telefono,
      correo,
      comentario,
      'method' : 'cotizador'
    }
    $.ajax
      ({
          url: 'controllers/control.php',
          data: data,
          type: 'post',
          success: function(result){
  
            if(result == true){
              
              $('#labelCotizar').text('Tu cotización fué enviada con éxito. En breve recibirás respuesta de nuestros Agentes Aduanales');
              $('#labelCotizar').css('color','green')

              setTimeout(()=>{
                $('#labelCotizar').text('');
              },10000)

            }else{
              $('#labelCotizar').text('Ocurrió un error al enviar la cotización.');
              $('#labelCotizar').css('color','red')
            }
            
          }
          
    });
  

})

$('#btnVacantes').click(()=>{

  const nombre    = $('#nombre-equipo').val();
  const telefono  = $('#number-equipo').val();
  const correo    = $('#email-equipo').val();
  const direccion = $('#equipo-direccion').val();

  $('#labelVacantes').text('');
  $('#labelVacantes').text('Estamos enviando tu solicitud...');
  $('#labelVacantes').css('color','black')

  if(nombre == '' || direccion == ''|| telefono == ''|| correo == ''){
    alert('Error, parece que hay campos importantes vacios.')
  }else{
    const data = {
      nombre,
      telefono,
      correo,
      direccion,
      'method' : 'vacantes'
    }
    $.ajax
      ({
          url: 'controllers/control.php',
          data: data,
          type: 'post',
          success: function(result){
  
            if(result == true){


              $('#labelVacantes').text('Tu solicitud fué enviada con éxito.');
              $('#labelVacantes').css('color','green')

              setTimeout(()=>{
                $('#labelVacantes').text('');
              },10000)

            }else{
              $('#labelVacantes').text('Ocurrió un error al enviar la solicitud.');
              $('#labelVacantes').css('color','red')
            }
            
          }
          
    });
  }

  

})
// const getCity = (state,select) => {

//   const path = `Mexico/${state}/Municipios.json`;
//   $(`#selectCities${select}`).empty();
//   $.getJSON(path, function(result){
//     console.log(result)
//     $.each(result, function(i, field){
//         console.log(field + " ");
//         const option = `<option value="${field.nombre}">${field.nombre}</option>`;
//         $(`#selectCities${select}`).append(option)        
//     });
//     $(`#selectCities${select}`).prepend('<option selected value="#">Selecciona una ciudad</option>')
//   });

// }

// const getState = (select) => {

//   const path = `Mexico/Estados.json`;
//   $(`#selectStates${select}`).empty();
//   $.getJSON(path, function(result){
//     //console.log(result)
//     $.each(result, function(i, field){
        
//         const option = `<option value="${field.nombre}">${field.nombre}</option>`;
//         $(`#selectStates${select}`).append(option)
//     });
//     $(`#selectStates${select}`).prepend('<option selected value="#">Selecciona una ciudad</option>')
//   });

// }

// getState(1);
// getState(2);