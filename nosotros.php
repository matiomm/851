<!Doctype html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta content="IE=10; IE=9; IE=8; IE=7; IE=EDGE" http-equiv=X-UA-Compatible>
  <title> OchoCincoUno - Rusia 2018</title>
  <link rel="icon" type="image/png" href="img/icono.png" />
  <link rel="stylesheet" href="css/estilo.css" />
  <link rel="stylesheet" href="css/estilo-movil.css" />
  <link href="css/tablas.css" rel="stylesheet" type="text/css">
  <link href=flechas/fixture.css rel=stylesheet>
  <link href=css/fonts.css rel=stylesheet>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  <script src="https://d3js.org/d3.v5.min.js"></script>
    <!-- Hotjar Tracking Code for http://www.851.cl -->
    <script>
        (function(h,o,t,j,a,r){
            h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
            h._hjSettings={hjid:1358693,hjsv:6};
            a=o.getElementsByTagName('head')[0];
            r=o.createElement('script');r.async=1;
            r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
            a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    </script>
  <!-- Global site tag (gtag.js) - Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=UA-101156269-1"></script>
  <script src="https://www.gstatic.com/firebasejs/5.0.4/firebase.js"></script>
  <script>
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyCdhwNlLNOmKHk06WUvy7NnQYLI3G5qkY0",
      authDomain: "ochocincouno.firebaseapp.com",
      databaseURL: "https://ochocincouno.firebaseio.com",
      projectId: "ochocincouno",
      storageBucket: "ochocincouno.appspot.com",
      messagingSenderId: "32448151782"
    };
    firebase.initializeApp(config);
  </script>
  <script src="https://d3js.org/d3.v3.min.js"></script>
  <script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-101156269-1');
  </script>
  <link rel="stylesheet" href="Bracket/css/visualizador.css">
</head>
<script type="text/javascript">
  function Mostrar_rusia() {
    document.getElementById("rusia").style.display = "block";
  }

  function Ocultar_rusia() {
    document.getElementById("rusia").style.display = "none";
  }

  function Mostrar_ocultar_rusia() {
    var grupos = document.getElementById("rusia");
    if (grupos.style.display == "none") {
      Mostrar_rusia();
      document.getElementById("anfp").style.display = "none";
    } else {
      Ocultar_rusia();
    }
  }

  function Mostrar_grupos() {
    document.getElementById("grupos").style.display = "block";
  }

  function Ocultar_grupos() {
    document.getElementById("grupos").style.display = "none";
  }

  function Mostrar_ocultar_grupos() {
    var grupos = document.getElementById("grupos");
    if (grupos.style.display == "none") {
      Mostrar_grupos();
      document.getElementById("probabilidades").style.display = "none";
      document.getElementById("eliminatoria").style.display = "none";
      document.getElementById("partidos").style.display = "none";
    } else {
      Ocultar_grupos();
    }
  }

  function Mostrar_probabilidades() {
    document.getElementById("probabilidades").style.display = "block";
  }

  function Ocultar_probabilidades() {
    document.getElementById("probabilidades").style.display = "none";
  }

  function Mostrar_ocultar_probabilidades() {
    var probabilidades = document.getElementById("probabilidades");
    if (probabilidades.style.display == "none") {
      Mostrar_probabilidades();
      document.getElementById("grupos").style.display = "none";
      document.getElementById("eliminatoria").style.display = "none";
      document.getElementById("partidos").style.display = "none";
    } else {
      Ocultar_probabilidades();
    }
  }

  function Mostrar_eliminatoria() {
    document.getElementById("eliminatoria").style.display = "block";
  }

  function Ocultar_eliminatoria() {
    document.getElementById("eliminatoria").style.display = "none";
  }

  function Mostrar_ocultar_eliminatoria() {
    var eliminatoria = document.getElementById("eliminatoria");
    if (eliminatoria.style.display == "none") {
      Mostrar_eliminatoria();
      document.getElementById("probabilidades").style.display = "none";
      document.getElementById("grupos").style.display = "none";
      document.getElementById("partidos").style.display = "none";
      document.getElementById("tabla-movil").style.display = "none";
    } else {
      Ocultar_eliminatoria();
    }
  }

  function Mostrar_partidos() {
    document.getElementById("partidos").style.display = "block";
  }

  function Ocultar_partidos() {
    document.getElementById("partidos").style.display = "none";
  }

  function Mostrar_ocultar_partidos() {
    var partidos = document.getElementById("partidos");
    if (partidos.style.display == "none") {
      Mostrar_partidos();
      document.getElementById("probabilidades").style.display = "none";
      document.getElementById("grupos").style.display = "none";
      document.getElementById("eliminatoria").style.display = "none";
      document.getElementById("tabla-movil").style.display = "none";
    } else {
      Ocultar_partidos();
    }
  }

  function Mostrar_tabla_movil() {
    document.getElementById("tabla-movil").style.display = "block";
  }

  function Ocultar_tabla_movil() {
    document.getElementById("tabla-movil").style.display = "none";
  }

  function Mostrar_ocultar_tabla_movil() {
    var tablamovil = document.getElementById("tabla-movil");
    if (tablamovil.style.display == "none") {
      Mostrar_tabla_movil();
      document.getElementById("partidos").style.display = "none";
      document.getElementById("grupos").style.display = "none";
      document.getElementById("eliminatoria").style.display = "none";
    } else {
      Ocultar_tabla_movil();
    }
  }

  function Mostrar_anfp() {
    document.getElementById("anfp").style.display = "block";
  }

  function Ocultar_anfp() {
    document.getElementById("anfp").style.display = "none";
  }

  function Mostrar_ocultar_anfp() {
    var grupos = document.getElementById("anfp");
    if (grupos.style.display == "none") {
      Mostrar_anfp();
      document.getElementById("rusia").style.display = "none";
    } else {
      Ocultar_anfp();
    }
  }

  function Mostrar_primgraf() {
    document.getElementById("prim_div_graf").style.display = "block";
  }

  function Ocultar_primgraf() {
    document.getElementById("prim_div_graf").style.display = "none";
  }

  function Mostrar_ocultar_primgraf() {
    var grupos = document.getElementById("prim_div_graf");
    if (grupos.style.display == "none") {
      Mostrar_primgraf();
      document.getElementById("prim_div_tabla").style.display = "none";
      document.getElementById("seg_div_graf").style.display = "none";
      document.getElementById("seg_div_tabla").style.display = "none";
    } else {
      Ocultar_primgraf();
    }
  }

  function Mostrar_primtabla() {
    document.getElementById("prim_div_tabla").style.display = "block";
  }

  function Ocultar_primtabla() {
    document.getElementById("prim_div_tabla").style.display = "none";
  }

  function Mostrar_ocultar_primtabla() {
    var grupos = document.getElementById("prim_div_tabla");
    if (grupos.style.display == "none") {
      Mostrar_primtabla();
      document.getElementById("prim_div_graf").style.display = "none";
      document.getElementById("seg_div_graf").style.display = "none";
      document.getElementById("seg_div_tabla").style.display = "none";
    } else {
      Ocultar_primtabla();
    }
  }

  function Mostrar_seggraf() {
    document.getElementById("seg_div_graf").style.display = "block";
  }

  function Ocultar_seggraf() {
    document.getElementById("seg_div_graf").style.display = "none";
  }

  function Mostrar_ocultar_seggraf() {
    var grupos = document.getElementById("seg_div_graf");
    if (grupos.style.display == "none") {
      Mostrar_seggraf();
      document.getElementById("prim_div_tabla").style.display = "none";
      document.getElementById("prim_div_graf").style.display = "none";
      document.getElementById("seg_div_tabla").style.display = "none";
    } else {
      Ocultar_seggraf();
    }
  }

  function Mostrar_segtabla() {
    document.getElementById("seg_div_tabla").style.display = "block";
  }

  function Ocultar_segtabla() {
    document.getElementById("seg_div_tabla").style.display = "none";
  }

  function Mostrar_ocultar_segtabla() {
    var grupos = document.getElementById("seg_div_tabla");
    if (grupos.style.display == "none") {
      Mostrar_segtabla();
      document.getElementById("prim_div_graf").style.display = "none";
      document.getElementById("seg_div_graf").style.display = "none";
      document.getElementById("prim_div_tabla").style.display = "none";
    } else {
      Ocultar_segtabla();
    }
  }

  function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    if (document.getElementById('tabla-movil').style.display == 'none') {
      table = document.getElementById("tablepress-4");
    } else {
      table = document.getElementById("tablepress-2")
    }
    switching = true;
    // Set the sorting direction to ascending:
    dir = "desc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.getElementsByTagName("TR");
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[n].innerHTML;
        y = rows[i + 1].getElementsByTagName("TD")[n].innerHTML;
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (isNaN(parseFloat(x))) {
          x = 0;
        }
        if (isNaN(parseFloat(y))) {
          y = 0;
        }
        if (dir == "asc") {
          if (parseFloat(x) > parseFloat(y)) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        } else if (dir == "desc") {
          if (parseFloat(x) < parseFloat(y)) {
            // If so, mark as a switch and break the loop:
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "desc") {
          dir = "asc";
          switching = true;
        }
      }
    }
  }
</script>

<body style="min-width:380px">
<?php
include 'header.php';
?>
<main class="main">
    <br>
    <div class="cont-modelos">
        <div class="contacto">
            <div class="titulos-modelos">
                <h3 class="titulo-h3">Sobre Nosotros</h3>
            </div>
            <ul class="lista-mod">
                <li class="izquierda">
                    En <span style="color:#ff9911">OchoCincoUno</span> mezclamos ciencia de datos, estadística y analytics para predecir el resultado de distintos torneos de fútbol. Usando modelos
                    econométricos y de simulación, predecimos el resultado de cada partido y del torneo. Nuestros pronósticos se actualizan en tiempo real, dependiendo del
                    marcador parcial e incidencias de los partidos.

                    <br><br>OchoCincoUno es parte del <span style="color:#ff9911">ISCI</span> (Instituto de Sistemas Complejos de Ingeniería) alojado en la facultad de Ingeniería Civil Industrial de la
                    Universidad de Chile.

                    <br><br>Además, nuestros investigadores realizan constantemente trabajos que están fuertemente ligados al fútbol y la aplicación de las ciencias en éste.

                    <br><br>Para ver más en detalle nuestro modelos de predicción y simulación, revisalos en la pestaña <a href="modelos.html"><span style="color:#ff9911">Modelos</span></a>
                </li>
                <li class="derecha">
                    <img src="img/nosotros.jpeg" width="100%">
                </li>
            </ul>
        </div>
        <br><br>
        <div class="contacto">
            <div class="titulos-modelos">
                <h3 class="titulo-h3">Nuestra Historia</h3>
            </div>
            <div class="arriba">
                Con la idea de convertirse en los líderes en predicciones de resultados en torno al fútbol a nivel latinoamericano, y al mismo tiempo potenciar
                el deporte nacional a través de las ciencias y tecnología aplicadas, en 2015 nace <span style="color:#ff9911">851.cl</span> como un proyecto impulsados por académicos e investigadores
                del Instituto de Sistemas Complejos de Ingeniería (ISCI) alojado en la Facultad de Ciencias Físicas y Matemáticas (FCFM) de la Universidad de Chile.

                <br><br>¿El objetivo? Ser un aporte al fútbol y al deporte en general, motivando la emoción y fidelidad en los hinchas y apasionados, desde otras perspectivas.

                <br><br>El proyecto –<span style="color:#ff9911">impulsado por Marcelo Olivares, Sebastián Ríos y Denis Saure</span>– se cimentó con la idea de ser una página que aportara aún más a la
                emoción que trae en particular el fútbol en los ciudadanos e hinchas de esta parte del mundo. Pero además, mostrar que la ingeniería, las ciencias
                estadísticas y matemáticas, si tienen aplicación en los deportes.

                <br><br><span style="color:#ff9911">851.cl permite acercar las ciencias aplicadas al hincha del fútbol y a las personas</span>
                , que en ciertos momentos parecen muy lejanas a la población.

                <br><br>Asimismo, y con una visión a largo plazo, se trabaja en función de llegar a los hinchas de todos los deportes y abarcar la
                mayor cantidad de competiciones.

                <br><br>A su vez, 851.cl es <span style="color:#ff9911">pionero en predicción de resultados de fútbol en tiempo real</span> en nuestro país y de la
                aplicación de las ciencias para pronósticos deportivos.

                <br><br>La pasión por el fútbol del equipo que integra 851.cl es igual a la de cada uno de sus hinchas, es por eso que busca contribuir al deporte rey de Chile explotando otras aristas que refuerzan la emoción e identidad en este deporte.

            </div>
        </div>
    </div>
</main>

  <footer class="footer">
    <div class="footer fcfm-desktop">
      <img src="img/logo-fcfm.png" class="footer img-footer">
      <img src="img/logo-isci.png" class="footer img-footer">
      <img src="img/logo-dii.png" class="footer img-footer" width="25%">
    </div>
    <div class="footer fcfm-movil" style="display:none">
      <img src="img-movil/logo-fcfm-movil.png" class="footer img-footer">
      <br>
      <img src="img-movil/logo-isci-movil.png" class="footer img-footer">
      <br>
      <img src="img-movil/logo-dii-movil.png" class="footer img-footer">
    </div>
    <div class="derechos">
      <h3 class="header_h4" size="3" style="color:white">Todos los derechos reservados para 851</h3>
    </div>
  </footer>
</body>

</html>
