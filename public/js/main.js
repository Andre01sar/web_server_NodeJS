$(document).ready(function () {
  //Slider
  $('.galeria').bxSlider({
    mode: 'fade', 
    captions: true, 
    slideWidth: 1200 
  });

  //Posts 
  //creando un arrays de JSONs
  var posts=[
    {
      title: 'Prueba de titulo 1',
      date: 'Publicado el dia '+moment().format("dddd  MMMM YYYY"), 
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
    e.preventDefault(); 
    $('html, body').animate({ 
      scrollTop: 0 
    }, 500); 

    return false;
  });
  
  // Login falso
  $("#login form").submit(function(){
    var form_name= $("#form_name").val();

    localStorage.setItem("form_name", form_name); 
  });

  var form_name = localStorage.getItem("form_name");
  if(form_name != null && form_name!= "undefined"){ 
    var about_parrafo = $("#about p");
    about_parrafo.html("<br><strong>Binevenido, "+form_name+"</strong"); 
    about_parrafo.append("<a href='#' id='logout'> Cerrar sesión </a>");
    $("#login form").hide();
  }

  $("#logout").click(function(){
    localStorage.clear(); 
    location.reload(); 



});
