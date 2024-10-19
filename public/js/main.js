$(document).ready(function () {
  //Slider
  $('.galeria').bxSlider({
    mode: 'fade', //es el tipo de animacion de la transicion
    captions: true, //si quiero que se muestre el caption o no
    slideWidth: 1200 //tamaño del slide que se visualizara
  });

  //Posts 
  //creando un arrays de JSONs
  var posts=[
    {
      title: 'Prueba de titulo 1',
      date: 'Publicado el dia '+moment().format("dddd  MMMM YYYY"), //puedo usar el "Do" para que me aparezca la fecha del dia o bien usar en "dddd" para que me escriba el nombre del dia (lunes, martes, etc). Tambien usar solo "date" para que me diga la fecha en numero del dis ej: moment().date()
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, sed laudantium! Reiciendis, quod enim dicta adipisci accusamus amet, laudantium hic quia optio temporibus nemo facere repellendus! Consequuntur saepe soluta veritatis?'
    },
    {
      title: 'Prueba de titulo 2',
      date: 'Publicado el dia '+moment().format("dddd  MMMM YYYY"),
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, sed laudantium! Reiciendis, quod enim dicta adipisci accusamus amet, laudantium hic quia optio temporibus nemo facere repellendus! Consequuntur saepe soluta veritatis?'
    },
    {
      title: 'Prueba de titulo 3',
      date: 'Publicado el dia '+moment().format("dddd  MMMM YYYY"),
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, sed laudantium! Reiciendis, quod enim dicta adipisci accusamus amet, laudantium hic quia optio temporibus nemo facere repellendus! Consequuntur saepe soluta veritatis?'
    },
    {
      title: 'Prueba de titulo 4',
      date: 'Publicado el dia '+moment().format("dddd  MMMM YYYY"),
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, sed laudantium! Reiciendis, quod enim dicta adipisci accusamus amet, laudantium hic quia optio temporibus nemo facere repellendus! Consequuntur saepe soluta veritatis?'
    },
    {
      title: 'Prueba de titulo 5',
      date: 'Publicado el dia '+moment().format("dddd  MMMM YYYY"),
      content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, sed laudantium! Reiciendis, quod enim dicta adipisci accusamus amet, laudantium hic quia optio temporibus nemo facere repellendus! Consequuntur saepe soluta veritatis?'
    },
  ];
  
  posts.forEach((item, index)=>{
    var post = `
      <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
          ${item.content}
        </p>
        <a href="#" class="button-more">Leer mas</a>
      </article>
    `;
    console.log(post);
  });

  // Selector de temas
  var theme = $("#theme");
  $("#to-green").click(function(){
    theme.attr("href", "css/green.css")
  });

  $("#to-red").click(function(){
    theme.attr("href", "css/red.css");
  });

  $("#to-blue").click(function(){ 
    theme.attr("href", "css/blue.css");
  });

  //scroll arriba de la web
  $('.subir').click(function(e){
    e.preventDefault(); //lo coloco para que el link no nos lleve a otro sitio, simplemete que ejecute esta funcionalidad sin redirigirnos
    $('html, body').animate({ //se usa el metodo animate sobre los elementos seleccionados de la pagina, en este caso decimos que es el body del archivo html
      scrollTop: 0 //sube al pixel 0 es decir a lo mas alto de la pagina
    }, 500); //como segundo parametro pongo un tiempo en el que se realizara la animacion en milisegundos

    return false;
  });
  
  // Login falso
  $("#login form").submit(function(){
    var form_name= $("#form_name").val();

    localStorage.setItem("form_name", form_name); //de esta forma guardo el valor del input del name del formulario en el localstorage
  });

  var form_name = localStorage.getItem("form_name");
  if(form_name != null && form_name!= "undefined"){ //si el nombre no esta definido cambiamos el contenido de ese parraafo con el nombre ingresado en el input name
    var about_parrafo = $("#about p");
    about_parrafo.html("<br><strong>Binevenido, "+form_name+"</strong"); //cambiando el contenido del parrafo por el nombre puesto
    about_parrafo.append("<a href='#' id='logout'> Cerrar sesión </a>");
    $("#login form").hide(); //ocultando el formulario
  }

  $("#logout").click(function(){
    localStorage.clear(); //borro lo que hay guardado en la memoria del local storage
    location.reload(); // para que vuelva a aparecer el formulario uso el objeto location que permite recargasr la pagina
  });



});