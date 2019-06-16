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
                <h3 class="titulo-h3">¿Cómo se construyen las predicciones?</h3>
            </div>
            <ul class="lista-mod">
                <li class="izquierda">
                    Realizamos tratamientos de datos de partidos de los equipos junto con el desarrollo de modelos matemáticos para realizar simulaciones que nos
                    permiten hacer distintos tipos de pronósticos relacionados al fútbol, como por ejemplo:
                    <br><br>La probabilidad de que un equipo gane un partido contra otro
                    <br><br>La probabilidad de que un equipo avance a la siguiente ronda
                    <br><br>La probabilidad de que un equipo gane el campeonato
                    <br><br>La probabilidad de que un equipo descienda de división
                    <br><br>La probabilidad de cada posible marcador de goles
                    <br><br>La probabilidad de que un equipo gane contra otro en tiempo real dado los histos del partido como goles y tarjetas
                    <br><br>
                    <div style="color:#ff9911"> Consideremos las siguientes predicciones:</div>
                </li>
                <li class="derecha">
                    <span style="font-size:15pt">Partido: Chile - Camerún</span>
                    <br><br><span style="font-size:12pt">Copa Confederaciones Rusia 2017</span>
                    <br>Pago casas de apuesta: viernes 16 junio 2017, 16:30 hrs
                    <br>
                    <img src="img/Cuadro_Prob.png" style="width:80%">
                </li>
            </ul>
        </div>
        <br><br>
        <div class="contacto">
            <div class="titulos-modelos">
                <h3 class="titulo-h3">¿Cuál es la probabilidad que Chile gane el partido contra Camerún? (Confederaciones 2017)</h3>
            </div>
            <ul class="lista-mod">
                <li class="izquierda">
                    Existen varios enfoques complementarios para realizar este tipo de predicciones. Sin embargo, la manera más directa es utilizar la información de casas de apuesta. Cuando los mercados funcionan correctamente, los pagos de las apuestas entregan implicitamente
                    la probabilidad de ganar, empatar o perder.
                    <br><br> La premisa de los mercados eficientes nos dice que en promedio esta apuesta no debiese ser rentable.
                    <br><br> De ser así, el valor esperado de nuestra apuesta de $1 debe ser el valor de la puesta (no ganamos ni perdemos en promedio), luego P x 1.65 = 1 y por lo tanto la probabilidad de que Chile gane es 60.4%. Las apuestas entregan de esta
                    forma una probabilidad implícita para cada posible resultado del partido.
                </li>
                <li class="derecha">
            <span style="color:red">(*) Nota técnica: Las casas de apuestas por lo general obtienen un margen de las apuestas, lo cual implica que las probabilidades de ganar, empatar y perder no suman uno. Esto se puede arreglar fácilmente normalizando la probabilidad para que todos los
            posibles escenarios tengan probabilidad igual a uno. (En el ejemplo, los pagos de las apuesta consideran el margen de la casa, de modo que las probabilidades sumen uno).</span>
                </li>
            </ul>
        </div>
        <br><br>
        <div class="contacto">
            <div class="titulos-modelos">
                <h3 class="titulo-h3">¿Cuál es la probabilidad de que Chile clasifique a la segunda ronda?</h3>
            </div>
            <div class="arriba">
                Para hacer esta predicción, no basta con saber si Chile gana, empata o pierde cada partido del grupo. Se necesita predecir los goles realizados y recibidos para determinar si Chile pasa y en que posición (dos equipos pueden terminar con los mismos puntos
                y lo que decide es la diferencia de goles).

                <br><br>Este análisis requiere predecir cuántos goles hará Chile y cada uno de los equipos en el grupo en todos los partidos jugados en primera fase.

                <br>Afortunadamente, existen modelos probabilísticos que nos permiten predecir los goles que se harán en un partido. Estos modelos pueden ser calibrados con datos de apuestas y así entregar la probabilidad para cada posible resultado de un partido.

                <br><br>
                <div style="color:#ff9911">Para el partido de Chile-Camerún, la siguiente tabla muestra la probabilidad de distintos resultados.</div>
            </div>

            <div class="abajo">
                <img src="img/Cuadro_Goles.png" style="width:80%">
            </div>
        </div>
        <br><br>
        <div class="contacto">
            <div class="titulos-modelos">
                <h3 class="titulo-h3">¿Cómo se calcula la probabilidad de que Chile gane el campeonato?</h3>
            </div>
            <div class="arriba">
                Recordar que los enfoques antes descritos utilizan información de las casas de apuestas. Existe una apuesta para Chile Campeón, y esta se puede usar para calcular la probabilidad implícita que Chile gane el campeonato.
                <span style="color:#ff9911">Nosotros seguimos un enfoque distinto.</span>
                <br><br> Recopilamos información histórica de muchos partidos internacionales, incluyendo amistosos, clasificatorias al mundial, campeonatos de confederaciones y copas mundiales. Con esta información histórica se calibra un modelo probabilístico
                que permite hacer predicciones de resultados de todos los posibles partidos que podrían jugarse en 2da ronda.
                <br><br>Esto se usa para simular el ganador del campeonato y calcular la probabilidad que Chile (o cualquier otro equipo) salga campeón de la Copa Confederaciones.
            </div>
            <div class="abajo">
            </div>
        </div>
        <div class="contacto">
            <div class="titulos-modelos">
                <h3 class="titulo-h3"><span style="color:#ff9911">Finalmente: </span>¿Cómo se actualizan las predicciones durante el transcurso de un partido?</h3>
            </div>
            <div class="arriba">
                Todas las predicciones anteriores se realizan previas al inicio de un partido, utilizando información disponible de casas de apuestas y también información histórica. Pero los eventos que van ocurriendo durante un partido también van aportando información.
                <br><br><span style="color:#ff9911">Por ejemplo,</span> si Gary Medel recibe una tarjeta roja, eso disminuye las probabilidades que Chile gane. Para capturar este efecto, recopilamos información detallada sobre los distintos eventos que ocurren
                durante un partido (tarjetas, goles, etc) y calibramos un modelo probabilístico que incorpora esta información.

                <br><br>Durante cada partido, nuestro modelo se va alimentando con información en tiempo real de los eventos que van sucediendo y en base a esto se actualizan los pronósticos.
            </div>
            <div class="abajo">
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
