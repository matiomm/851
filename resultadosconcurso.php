<!Doctype html>
<?php
$resultadospartidos = ["l","e","v","e","l","v","v","e","l","e","e","v","v","l","v","l"];
$campeon = "";
$subcampeon = "";
$tercero = "";
$db_name = "851";
$db_user = "ochocincouno";
$db_pass = "Base851-fcfm";
//$db_pass = "";
$db_host = "localhost";
$db = new mysqli($db_host, $db_user, $db_pass, $db_name);
$db->set_charset("utf8");
$result = $db->query("SELECT * FROM `concursofg`");
//$result = $db->query("SELECT * FROM `concursofg` WHERE `confirmado`=1");
$res = array();
while ($row = $result->fetch_assoc()) {
    $par = array();
    $par["nom"] = $row["nombre"];
    $puntaje = 0;
    for ($i=1;$i<=sizeof($resultadospartidos);$i++){
        if ($row["p".$i]==$resultadospartidos[$i-1]){
            $puntaje = $puntaje + 3;
        }
    }
    if ($row["campeon"]==$campeon){
        $puntaje = $puntaje + 20;
    }
    if ($row["subcampeon"]==$subcampeon){
        $puntaje = $puntaje + 15;
    }
    if ($row["tercero"]==$tercero){
        $puntaje = $puntaje + 10;
    }
    $par["pun"] = $puntaje;
    $res[] = $par;
}
function sortByPun($a, $b) {
    return $b['pun'] - $a['pun'];
}
usort($res, 'sortByPun');
?>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta content="IE=10; IE=9; IE=8; IE=7; IE=EDGE" http-equiv=X-UA-Compatible>
  <title> OchoCincoUno - Copa América 2019</title>
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
    <link rel="stylesheet" href="bootstrap-4.3.1-dist/css/bootstrap.css">
    <link rel="stylesheet" href="bootstrap-4.3.1-dist/css/bootstrap-grid.css">
    <link rel="stylesheet" href="bootstrap-4.3.1-dist/css/bootstrap-reboot.css">
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

<body style="min-width:380px;">
<?php
    include 'header.php'
?>
<main align="center" style="min-height: 500px;">
    <div class="container">
        <br>
        <div class="row">
            <div class="col-lg-2"></div>
            <div class="col-lg-8">
                <a href="concurso.php"><img src="img/ingreso-concurso.png" width="100%"></a>
            </div>
            <div class="col-lg-2"></div>
        </div>
        <br>
        <div class="row" align="center">
            <div class="col-lg-2"></div>
            <div class="col-lg-8">
                <img src="img/cabecera-concurso-tabla.png" width="100%">
            </div>
            <div class="col-lg-2"></div>
            <?php
                $ant = 0;
                $igu = 0;
                for ($i=1;$i<=sizeof($res);$i++){
                    if ($i>1){
                        if ($res[$i - 1]["pun"]==$ant){
                            $igu++;
                        }else{
                            $igu=0;
                        }
                    }
                    echo '<div class="col-lg-2"></div>';
                    echo '<div class="col-lg-8" style="display: flex"><div style=\'width: 25%\'>'.($i-$igu)."°</div>";
                    echo "<div style='width: 50%'>".$res[$i-1]["nom"]."</div>";
                    if ($res[$i-1]["pun"]==1){
                        echo "<div style='width: 25%'>".$res[$i-1]["pun"]." punto</div>";
                    } else {
                        echo "<div style='width: 25%''>" . $res[$i - 1]["pun"] . " puntos</div></div>";
                    }
                    echo '<div class="col-lg-2"></div>';
                    $ant=$res[$i - 1]["pun"];
                }
            ?>
        </div>
    </div>
</main>
<?php
    include 'footer.php'
?>
</body>

</html>
