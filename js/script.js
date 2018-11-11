div = document.createElement('div');


function enviarMensaje(){

	  bd = firebase.database().ref("mensajes");
    bd.once('value').then(function(snapshot){
    console.log(snapshot.val());
    mensajes = (snapshot.val());

    for(i in mensajes){
      msj = mensajes[i];
      msj.key = i;
      console.log(msj);
      
      $(div).addClass('col col-md-6');
      div.setAttribute('reporte', msj.key);
      div.setAttribute('onclick', 'verInformacion(this)');
      titulo = document.createElement('h4');
      $(titulo).addClass('titulo');
      titulo.innerHTML = msj.marca;
      img = document.createElement('img');
      $(img).addClass = "img-responsive";
      img.setAttribute ('src', msj.imagen);
      div.appendChild(img);
      div.appendChild(titulo);
      document.getElementById('mostrarMensajes').appendChild(div);
    }
  });
}


  function verInformacion(div){

    i = div.getAttribute('reporte');
    console.log(i);
    window.location = 'reporte.html';

  }

  function verReporte(){
  	ultimos();
  	bd = firebase.database().ref('reportes/' + i);
  	bd.once('value').then(function(snapshot){
  		console.log(snapshot.val());
  	});

  }


        function CerrarSesion(){
            if (confirm("Seguro que quieres cerrar sesión?")) {
                firebase.auth().signOut().then(function() {
                }, function(error) {
                });
            sessionStorage.removeItem('usuario');
            window.location = 'Login.html';
        }
    }


