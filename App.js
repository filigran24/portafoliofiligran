//funciòn que carga las animaciones de las habilidades
function cargarAnimaciones(){
    $(function(){
        $('.chart1').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:500,
        });
        $('.chart2').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:500,
        });
        $('.chart3').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:500,
        });
        $('.chart4').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:500,
        });
        $('.chart5').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:500,
        });
        $('.chart6').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:500,
        });
        $('.chart7').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:500,
        });
        $('.chart8').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:500,
        });
        $('.chart9').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:500,
        });
        $('.chart10').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:500,
        })

    })
}
//Función para filtrar las categorías de los trabajos
function verCategoria(cat){
    const items = document.getElementsByClassName("item");
    for(let i=0; i < items.length;i++){
        items[i].style.display = "none";
    }

    const itemCat = document.getElementsByClassName(cat);
    for(let i = 0; i<itemCat.length;i++){
        itemCat[i].style.display = "block";
    }

    const links = document.querySelectorAll(".trabajos nav a");
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.className = "borde";
}

//Función que detecta cuando lanzar la animación de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("chart");
        habilidades[0].classList.add("chart1");
        habilidades[1].classList.add("chart2");
        habilidades[2].classList.add("chart3");
        habilidades[3].classList.add("chart4");
        habilidades[4].classList.add("chart5");
        habilidades[5].classList.add("chart6");
        habilidades[6].classList.add("chart7");
        habilidades[7].classList.add("chart8");
        habilidades[8].classList.add("chart9");
        habilidades[9].classList.add("chart10");

        cargarAnimaciones();
    }
}

//detecto el scrolling para aplicar la animación de las habilidaes
window.onscroll = function(){
    efectoHabilidades();
}

//función que muestra el menu responsive{
function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";

        //creamos el elemento que cierra el menu
        let span = document.createElement("span");
        span.innerHTML = "X";
        document.getElementById("nav").appendChild(span);

        //quitamos el boton eliminar cuando se hace click sobre este
        span.onclick = function(){
            x.className = "";
            span.remove();
        }
    }else{
        x.className="";
    }
}

//Este codigo es para agregar una función a cada links del menu
//responsive
//cuando se presione en cualquier de los links del menu debe desaparecer el menu
const links = document.querySelectorAll("#nav a");
for(i=0; i < links.length;i++){
    links[i].onclick = function(){
        var x = document.getElementById("nav");
        x.className = "";

        //removemos el boton eliminar
        btnEliminar = document.querySelector("#nav span");
        btnEliminar.remove();
    }
}


document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("infor1").style.display="none";
})
  function toggleInfo1() {
    const info = document.getElementById("infor1"); 
    info.style.display = (info.style.display === "none") ? "block" : "none";
  }



  document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("infor2").style.display="none";
})
  function toggleInfo2() {
    const info = document.getElementById("infor2"); 
    info.style.display = (info.style.display === "none") ? "block" : "none";
  }



  document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("infor3").style.display="none";
})
  function toggleInfo3() {
    const info = document.getElementById("infor3"); 
    info.style.display = (info.style.display === "none") ? "block" : "none";
  }
  

//   //Conection database
//   const mysql =require('mysql');

//   //Configuracion de la conexcion
//   const connection =mysql.createConnection({
//     hots: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'javas'
//   });

// // conexion
// connection.connect((err)=>{
//     if(err){console.error('error conectando a la base de datos',  err.stack);
//         return;
       
//     }
//     console.log('conectando a la base de datos',
//         connection.threadId);
// });

// //consulta
// connection.query('SELECT * FROM javas', (err, rows, fields)=>{
//     if (error)throw error;
//     console.log('resultados', result);
// });

// connection.end();
