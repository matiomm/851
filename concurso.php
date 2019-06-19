<!Doctype html>
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
    function quitarerror() {
        document.getElementById("mail").className = "form-control";
    }
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
  <?php include 'header.php' ?>
<main align="center">
    <div class="container">
        <br>
        <div class="row">
            <div class="col-lg-12">
                <img src="img/head-concurso.png" width="100%">
            </div>
            <div class="col-lg-12">
                <h3>Instrucciones</h3>
                ¿Quieres ganar una camiseta de la selección chilena?<br><br>

                Participa en 851-Bet. El que sume más puntos se llevará una camiseta de la selección chilena. Selecciona los resultados que crees que tendran los encuentros de la fase de grupo, junto con el campeón y subcampeón.<br>
                Obtendras 3 puntos por cada partido que aciertes, 10 puntos si aciertas al tercer lugar, 15 por el subcampeón y 20 por el campeón.<br>
                No olvides llenar los datos de contacto para informarte en caso de ganar.
            </div>
        </div>
        <br>
        <?php
            if (isset($_GET["errores"])){
                echo "<div class=\"row\"><div class=\"col-sm-12 alert-danger\"><div class=\"text-danger\">";
                echo "Ya existe una participación con ese mail";
                echo "</div></div></div>";
            }
        ?>
        <form action="proceso.php" method="post">
        <div class="row">


            <div class="col-lg-6">
                <h3>Jornada 2</h3>
                <table style="width: 100%;">
                    <thead>
                    <th></th>
                    <th>Local</th>
                    <th>Empate</th>
                    <th>Visita</th>
                    <th></th>
                    </thead>
                    <tbody>
                    <?php
                    $locales = ["Bolivia","Brasil","Colombia","Argentina","Uruguay","Ecuador"];
                    $visitas = ["Perú","Venezuela","Catar","Paraguay","Japón","Chile"];
                    for ($i = 7; $i <= 12; $i++) {
                        echo "<tr><td><img src=\"banderas/".$locales[$i-7]."30x20.png\" alt=\"".$locales[$i-7]."\" style='border:1px solid lightgray;'></td>";
                        if($i<=8){
				echo "<td><input type=\"radio\" name=\"partido".$i."\" value=\"l\" disabled></td>";
                        	echo "<td><input type=\"radio\" name=\"partido".$i."\" value=\"e\" disabled></td>";
                        	echo "<td><input type=\"radio\" name=\"partido".$i."\" value=\"v\" disabled></td>";
			}else{
				echo "<td><input type=\"radio\" name=\"partido".$i."\" value=\"l\"></td>";
                        	echo "<td><input type=\"radio\" name=\"partido".$i."\" value=\"e\" required></td>";
                        	echo "<td><input type=\"radio\" name=\"partido".$i."\" value=\"v\"></td>";
			}
                        echo "<td><img src=\"banderas/".$visitas[$i-7]."30x20.png\" alt=\"".$visitas[$i-7]."\" style='border:1px solid lightgray;'></td></tr>";
                    }
                    ?>
                    </tbody>
                </table>
            </div>

            <div class="col-lg-6">
                <h3>Jornada 3</h3>
                <table style="width: 100%;">
                    <thead>
                    <th></th>
                    <th>Local</th>
                    <th>Empate</th>
                    <th>Visita</th>
                    <th></th>
                    </thead>
                    <tbody>
                    <?php
                    $locales = ["Bolivia","Perú","Catar","Colombia","Chile","Ecuador"];
                    $visitas = ["Venezuela","Brasil","Argentina","Paraguay","Uruguay","Japón"];
                    for ($i = 13; $i <= 18; $i++) {
                        echo "<tr><td><img src=\"banderas/".$locales[$i-13]."30x20.png\" alt=\"".$locales[$i-13]."\" style='border:1px solid lightgray;'></td>";
                        echo "<td><input type=\"radio\" name=\"partido".$i."\" value=\"l\"></td>";
                        echo "<td><input type=\"radio\" name=\"partido".$i."\" value=\"e\" required></td>";
                        echo "<td><input type=\"radio\" name=\"partido".$i."\" value=\"v\"></td>";
                        echo "<td><img src=\"banderas/".$visitas[$i-13]."30x20.png\" alt=\"".$visitas[$i-13]."\" style='border:1px solid lightgray;'></td></tr>";
                    }
                    ?>
                    </tbody>
                </table>
            </div>

        </div>
        <br>
        <div class="form-row">
            <div class="col-lg-1">Campeón</div>
            <div class="col-lg-3">
                <select name="campeon" class="form-control">
                    <?php
                        $paises = ["Argentina", "Bolivia", "Brasil", "Catar", "Chile", "Colombia", "Ecuador", "Japón", "Paraguay", "Perú", "Uruguay", "Venezuela"];
                        for ($i=0; $i<11; $i++){
                            if ($i==4){
                                echo "<option value=".$paises[$i]." selected>".$paises[$i]."</option>";
                            }else{
                                echo "<option value=".$paises[$i].">".$paises[$i]."</option>";
                            }
                        }
                    ?>
                </select>
            </div>
            <div class="col-lg-1">Subcampeón</div>
            <div class="col-lg-3">
                <select name= "subcampeon" class="form-control">
                    <?php
                    for ($i=0; $i<11; $i++){
                        echo "<option value=".$paises[$i].">".$paises[$i]."</option>";
                    }
                    ?>
                </select>
            </div>
            <div class="col-lg-1">Tercer lugar</div>
            <div class="col-lg-3">
                <select name= "tercero" class="form-control">
                    <?php
                    for ($i=0; $i<11; $i++){
                        if ($i==1){
                            echo "<option value=".$paises[$i]." selected>".$paises[$i]."</option>";
                        }else{
                            echo "<option value=".$paises[$i].">".$paises[$i]."</option>";
                        }
                    }
                    ?>
                </select>
            </div>
        </div>
        <br>
        <div class="form-row">
            <div class="col-lg-12"><h4>Datos de contacto</h4></div>
            <div class="col-lg-3"></div>
            <div class="col-lg-1">Nombre:</div>
            <div class="col-lg-4"><input type="text" name="nombre" class="form-control" required><br></div>
            <div class="col-lg-4"></div>

            <div class="col-lg-3"></div>
            <div class="col-lg-1">Mail:</div>
            <div class="col-lg-4">
                <?php
                    if (isset($_GET["errores"])){
                        echo "<input type=\"email\" id='mail' name=\"mail\" class=\"form-control is-invalid\" onclick='quitarerror()' required><br>";
                    }else{
                        echo "<input type=\"email\" name=\"mail\" class=\"form-control\" required><br>";
                    }
                ?>

            </div>
            <div class="col-lg-4"></div>

            <div class="col-lg-3"></div>
            <div class="col-lg-1">Telefono:</div>
            <div class="col-lg-4"><input type="tel" name="tel" class="form-control" required><br></div>
            <div class="col-lg-4"></div>

            <div class="col-lg-12"><input type="image" name="submit" src="img/Btn_enviar.jpg" width="120px" alt="Submit"></div>
        </div>
        </form>
    </div>
</main>
<?php
    include 'footer.php'
?>
</body>

</html>
