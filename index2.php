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
  <script src="https://d3js.org/d3.v5.min.js"></script>
  <!-- Hotjar Tracking Code for http://69.164.201.178/index.php -->
<script>
  (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:1367143,hjsv:6};
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
    table = document.getElementById("tablepress-4");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "desc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.getElementsByTagName("tr");
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i =0; i < (rows.length - 1); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("td")[n].innerHTML;
        y = rows[i + 1].getElementsByTagName("td")[n].innerHTML;
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
  function cerrar_cct() {
      document.getElementById("cct").style.display = "none";
  }
  function mostrar_cct() {
      if (document.getElementById("conchta").style.display=="none"){
          document.getElementById("conchta").style.display = "block";
          document.getElementById("btn-show").src = "img/flecha-up-gris.png";
      } else {
          document.getElementById("conchta").style.display = "none";
          document.getElementById("btn-show").src = "img/flecha-down-gris.png";
      }
  }
</script>

<body style="min-width:380px">
  <?php include 'header.php'; ?>
  <main class="main">
      <br>
    <div class="cont">

      <section id="rusia" class="rusia">
        <section class="botones-desktop">
            <div class="form-row">
                <div class="col-3">
                    <input class="logo" type="image" src="img/CA2019/grupos.png" onclick="Mostrar_ocultar_grupos()" width="100%"/>
                </div>
                <div class="col-3">
                    <input class="logo" type="image" src="img/CA2019/probabilidades.png" onclick="Mostrar_ocultar_probabilidades()" width="100%"/>
                </div>
                <div class="col-3">
                    <input class="logo" type="image" src="img/CA2019/eliminacion.png" onclick="Mostrar_ocultar_eliminatoria()" width="100%"/>
                </div>
                <div class="col-3">
                    <input class="logo" type="image" src="img/CA2019/partidos.png" onclick="Mostrar_ocultar_partidos()" width="100%"/>
                </div>
            </div>
        </section>
        <section class="botones-movil" style="display: none">
            <div class="form-row">
                <div class="col-3">
                    <input class="logo-movil" type="image" src="img-movil/CA2019/grupos.png" onclick="Mostrar_ocultar_grupos()" width="100%"/>
                </div>
                <div class="col-3">
                    <input class="logo-movil" type="image" src="img-movil/CA2019/probabilidades.png" onclick="Mostrar_ocultar_probabilidades()" width="100%"/>
                </div>
                <div class="col-3">
                    <input class="logo-movil" type="image" src="img-movil/CA2019/eliminacion.png" onclick="Mostrar_ocultar_eliminatoria()" width="100%"/>
                </div>
                <div class="col-3">
                    <input class="logo-movil" type="image" src="img-movil/CA2019/partidos.png" onclick="Mostrar_ocultar_partidos()" width="100%"/>
                </div>
            </div>
        </section>
          <section class="concurso">
              <div id="cct">
                  <div class="row no-gutters" id="titulo-concurso">
                      <div class="col-1" style="text-align: left;padding-right: 10px"><img id="btn-show" src="img/flecha-up-gris.png" onclick="mostrar_cct()" style="max-width: 80%;cursor:pointer;"></div>
                      <div class="col-10">Participa ¿Cuáles serán los resultados de Chile vs Tailandia y Chile vs Ecuador?</div>
                      <div class="col-1" onclick="cerrar_cct()" style="cursor: pointer; text-align: right;">X</div>
                  </div>
                  <form method="post" action="proceso3.php" target="_blank" id="conchta">
                  <div class="form-row" align="center" style="margin-top: 10px;">
                      <div class="col-lg-6">
                          <table>
                              <tbody>
                              <tr>
                                  <td width="20%"><img src="banderas/Tailandia30x20.png" alt="Tailandia" style='border:1px solid lightgray;'></td>
                                  <td width="25%"><input name="gt" type="number" class="form-control" max="99" min="0" required></td>
                                  <td>-</td>
                                  <td width="25%"><input name="gc" type="number" class="form-control" max="99" min="0" required></td>
                                  <td width="20%"><img src="banderas/Chile30x20.png" alt="Chile" style='border:1px solid lightgray;'></td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                      <div class="col-lg-6">
                          <table>
                              <tbody>
                              <tr>
                                  <td width="20%"><img src="banderas/Ecuador30x20.png" alt="Ecuador" style='border:1px solid lightgray;'></td>
                                  <td width="25%"><input name="ge" type="number" class="form-control" max="99" min="0" required></td>
                                  <td>-</td>
                                  <td width="25%"><input name="gc2" type="number" class="form-control" max="99" min="0" required></td>
                                  <td width="20%"><img src="banderas/Chile30x20.png" alt="Chile" style='border:1px solid lightgray;'></td>
                              </tr>
                              </tbody>
                          </table>
                      </div>
                        <br><br>
                      <div class="col-lg-1">
                          Nombre:
                      </div>
                      <div class="col-lg-3">
                          <input type="text" name="nombre" class="form-control" required>
                      </div>

                      <div class="col-lg-1">
                          Mail:
                      </div>
                      <div class="col-lg-3">
                          <input type="email" name="mail" class="form-control" required>
                      </div>

                      <div class="col-lg-1">
                          Telefono:
                      </div>
                      <div class="col-lg-3">
                          <input type="tel" name="tel" class="form-control" required>
                      </div>
                      <br><br>
                      <div class="col-lg-12">
                          <input type="image" name="submit" src="img/Btn_enviar.jpg" width="120px" alt="Submit">
                      </div>
                  </div>
              </form>
              </div>
          </section>
        <div id="partidos" class="partidos" style="display: none">
          <img src="img/banner-partidos.png" class="tabla img-tabla">


          <!--
                    <div class="container-real-time-graph" width="90%" height="100%">
                      <script>
                        var screenWidth = parent.document.body.clientWidth;
                        screenWidth = screenWidth > 960 ? 950 : screenWidth < 400 ? 400 : screenWidth;
                      </script>
                      <div class="match-graph">
                        <div class="match-data" id="match_data">
                          <ul>
                            <li class="partido">
                              <span style="color:#323C3D">Selecciones</span>
                            </li>
                            <li class="titulos-partidos-desktop">Goles</li>
                            <li class="titulos-partidos-desktop">Prob. Ganar</li>
                            <li class="titulos-partidos-movil" style="display:none">Goles</li>
                            <li class="titulos-partidos-movil" style="display:none">P. Ganar</li>
                          </ul>
                          <ul>
                            <li class="home-team-data">
                              <image class="team-image-placeholder" id="home_image"></image>
                              <span class="home-team-name" id="name_home_team"></span>
                            </li>
                            <li class="home-team-goals" id="home_team_goals"></li>
                            <li class="home-team-prob" id="home_team_prob"></li>
                          </ul>
                          <ul>
                            <li class="away-team-data">
                              <image class="team-image-placeholder" id="away_image"></image>
                              <span class="away-team-name" id="name_away_team">
                              </span>
                            </li>
                            <li class="away-team-goals" id="away_team_goals"></li>
                            <li class="away-team-prob" id="away_team_prob"></li>
                          </ul>
                        </div>
                      </div>
                      <div id="graph" class="graph"></div>
                      <script src="Bracket/javascript/visualizador.js"></script>
                    </div>


                    FINAL Y TERCER LUGAR -->

          <!--<div class="contacto">
            <div class="titulos-modelos">
              <h3 class="titulo-h3" style="text-align:center">En Vivo - Final y Definición 3er y 4to puesto</h3>
            </div>
            <ul class="lista-mod">
              <li class="izquierda-partidos">
                <div class="contacto">
                  <div class="titulos-modelos">
                    <ul>
                      <li class="partido">
                        <span style="color:#323C3D">Selecciones</span>
                      </li>
                      <li class="titulos-partidos-desktop">Goles</li>
                      <li class="titulos-partidos-desktop">Prob. Ganar</li>
                      <li class="titulos-partidos-movil" style="display:none">Goles</li>
                      <li class="titulos-partidos-movil" style="display:none">P. Ganar</li>
                    </ul>
                    <ul>
                      <li class="partido">
                        <img src="banderas/Banderas 30x20/SFrancia_small.png"> Francia</li>
                      <li class="datos-partidos">4</li>
                      <li class="datos-partidos">100%</li>
                    </ul>
                    <ul>
                      <li class="partido">
                        <img src="banderas/Banderas 30x20/SCroacia_small.png"> Croacia</li>
                      <li class="datos-partidos">2</li>
                      <li class="datos-partidos">0%</li>
                    </ul>
                  </div>
                  <div class="arriba">
                    IFRAME
                  </div>
                </div>
              </li>
              <li class="izquierda-partidos">
                <div class="contacto">
                  <div class="titulos-modelos">
                    <ul>
                      <li class="partido">
                        <span style="color:#323C3D">Selecciones</span>
                      </li>
                      <li class="titulos-partidos-desktop">Goles</li>
                      <li class="titulos-partidos-desktop">Prob. Ganar</li>
                      <li class="titulos-partidos-movil" style="display:none">Goles</li>
                      <li class="titulos-partidos-movil" style="display:none">P. Ganar</li>
                    </ul>
                    <ul>
                      <li class="partido">
                        <img src="banderas/Banderas 30x20/SBelgica_small.png"> Bélgica</li>
                      <li class="datos-partidos">2</li>
                      <li class="datos-partidos">100%</li>
                    </ul>
                    <ul>
                      <li class="partido">
                        <img src="banderas/Banderas 30x20/SInglaterra_small.png"> Inglaterra</li>
                      <li class="datos-partidos">0</li>
                      <li class="datos-partidos">0%</li>
                    </ul>
                  </div>
                  <div class="arriba">
                    Fecha y hora
                  </div>
                </div>
              </li>
            </ul>
          </div>
          -->

          <!-- SEMIFINALES -->
          <!-- <div class="contacto">
            <div class="titulos-modelos">
              <h3 class="titulo-h3" style="text-align:center">Semifinales</h3>
            </div>
            <ul class="lista-mod">
              <li class="izquierda-partidos">
                <div class="contacto">
                  <div class="titulos-modelos">
                    <ul>
                      <li class="partido">
                        <span style="color:#323C3D">Selecciones</span>
                      </li>
                      <li class="titulos-partidos-desktop">Goles</li>
                      <li class="titulos-partidos-desktop">Prob. Ganar</li>
                      <li class="titulos-partidos-movil" style="display:none">Goles</li>
                      <li class="titulos-partidos-movil" style="display:none">P. Ganar</li>
                    </ul>
                    <ul>
                      <li class="partido">
                        <img src="banderas/Banderas 30x20/SFrancia_small.png"> Francia</li>
                      <li class="datos-partidos">1</li>
                      <li class="datos-partidos">100%</li>
                    </ul>
                    <ul>
                      <li class="partido">
                        <img src="banderas/Banderas 30x20/SBelgica_small.png"> Bélgica</li>
                      <li class="datos-partidos">0</li>
                      <li class="datos-partidos">0%</li>
                    </ul>
                  </div>
                  <div class="arriba">
                    IFRAME
                  </div>
                </div>
              </li>
              <li class="izquierda-partidos">
                <div class="contacto">
                  <div class="titulos-modelos">
                    <ul>
                      <li class="partido">
                        <span style="color:#323C3D">Selecciones</span>
                      </li>
                      <li class="titulos-partidos-desktop">Goles</li>
                      <li class="titulos-partidos-desktop">Prob. Ganar</li>
                      <li class="titulos-partidos-movil" style="display:none">Goles</li>
                      <li class="titulos-partidos-movil" style="display:none">P. Ganar</li>
                    </ul>
                    <ul>
                      <li class="partido">
                        <img src="banderas/Banderas 30x20/SCroacia_small.png"> Croacia</li>
                      <li class="datos-partidos">2</li>
                      <li class="datos-partidos">100%</li>
                    </ul>
                    <ul>
                      <li class="partido">
                        <img src="banderas/Banderas 30x20/SInglaterra_small.png"> Inglaterra</li>
                      <li class="datos-partidos">1</li>
                      <li class="datos-partidos">0%</li>
                    </ul>
                  </div>
                  <div class="arriba">
                    IFRAME
                  </div>
                </div>
              </li>
            </ul>
          </div>
          -->

          <!-- CUARTOS DE FINAL -->
          <!-- <div class="contacto">
            <div class="titulos-modelos">
              <h3 class="titulo-h3" style="text-align:center">Cuartos de Final</h3>
            </div>
              <ul class="lista-mod">
              <li class="izquierda-partidos">
                <div class="contacto">
                  <div class="titulos-modelos">
                    <ul>
                      <li class="partido">
                        <span style="color:#323C3D">Selecciones</span>
                      </li>
                      <li class="titulos-partidos-desktop">Goles</li>
                      <li class="titulos-partidos-desktop">Prob. Ganar</li>
                      <li class="titulos-partidos-movil" style="display:none">Goles</li>
                      <li class="titulos-partidos-movil" style="display:none">P. Ganar</li>
                    </ul>
                    <ul>
                      <li class="partido">
                        <img src="banderas/Banderas 30x20/SUruguay_small.png"> Uruguay</li>
                      <li class="datos-partidos">0</li>
                      <li class="datos-partidos">0%</li>
                    </ul>
                    <ul>
                      <li class="partido">
                        <img src="banderas/Banderas 30x20/SFrancia_small.png"> Francia</li>
                      <li class="datos-partidos">2</li>
                      <li class="datos-partidos">100%</li>
                    </ul>
                  </div>
                  <div class="arriba">
                    IFRAME
                  </div>
                </div>
              </li>
              <li class="izquierda-partidos">
                <div class="contacto">
                  <div class="titulos-modelos">
                    <ul>
                      <li class="partido">
                        <span style="color:#323C3D">Selecciones</span>
                      </li>
                      <li class="titulos-partidos-desktop">Goles</li>
                      <li class="titulos-partidos-desktop">Prob. Ganar</li>
                      <li class="titulos-partidos-movil" style="display:none">Goles</li>
                      <li class="titulos-partidos-movil" style="display:none">P. Ganar</li>
                    </ul>
                    <ul>
                      <li class="partido">
                        <img src="banderas/Banderas 30x20/SBrasil_small.png"> Brasil</li>
                      <li class="datos-partidos">1</li>
                      <li class="datos-partidos">0%</li>
                    </ul>
                    <ul>
                      <li class="partido">
                        <img src="banderas/Banderas 30x20/SBelgica_small.png"> Bélgica</li>
                      <li class="datos-partidos">2</li>
                      <li class="datos-partidos">100%</li>
                    </ul>
                  </div>
                  <div class="arriba">
                    IFRAME
                  </div>
                </div>
              </li>
            </ul>

            <ul class="lista-mod">
              <li class="izquierda-partidos">
                <div class="contacto">
                  <div class="titulos-modelos">
                    <ul>
                      <li class="partido">
                        <span style="color:#323C3D">Selecciones</span>
                      </li>
                      <li class="titulos-partidos-desktop">Goles</li>
                      <li class="titulos-partidos-desktop">Prob. Ganar</li>
                      <li class="titulos-partidos-movil" style="display:none">Goles</li>
                      <li class="titulos-partidos-movil" style="display:none">P. Ganar</li>
                    </ul>
                    <ul>
                      <li class="partido">
                        <img src="banderas/Banderas 30x20/SRusia_small.png"> Rusia</li>
                      <li class="datos-partidos">2</li>
                      <li class="datos-partidos">0%</li>
                    </ul>
                    <ul>
                      <li class="partido">
                        <img src="banderas/Banderas 30x20/SCroacia_small.png"> Croacia</li>
                      <li class="datos-partidos">2</li>
                      <li class="datos-partidos">100%</li>
                    </ul>
                  </div>
                  <div class="arriba">
                    IFRAME
                  </div>
                </div>

              </li>
              <li class="izquierda-partidos">
                <div class="contacto">
                  <div class="titulos-modelos">
                    <ul>
                      <li class="partido">
                        <span style="color:#323C3D">Selecciones</span>
                      </li>
                      <li class="titulos-partidos-desktop">Goles</li>
                      <li class="titulos-partidos-desktop">Prob. Ganar</li>
                      <li class="titulos-partidos-movil" style="display:none">Goles</li>
                      <li class="titulos-partidos-movil" style="display:none">P. Ganar</li>
                    </ul>
                    <ul>
                      <li class="partido">
                        <img src="banderas/Banderas 30x20/SSuecia_small.png"> Suecia</li>
                      <li class="datos-partidos">0</li>
                      <li class="datos-partidos">0%</li>
                    </ul>
                    <ul>
                      <li class="partido">
                        <img src="banderas/Banderas 30x20/SInglaterra_small.png"> Inglaterra</li>
                      <li class="datos-partidos">2</li>
                      <li class="datos-partidos">100%</li>
                    </ul>
                  </div>
                  <div class="arriba">
                    IFRAME
                  </div>
                </div>
              </li>
            </ul>
          </div>
          -->
          <!-- FASE DE GRUPOS -->

            <div class="row" id="j1" align="center">
            <div class="col-lg-12" id="titulo-jornada">
            <h3 class="titulo-h3" style="text-align:center">Fase de Grupos - Jornada 1</h3>
            </div>
            <?php
            for ($i=0;$i<6;$i++){
            echo
                '<div class="col-lg-6" id="p'.$i.'">
                    <table class="tabla-partidos">
                        <thead>
                            <th width="10%"></th>
                            <th width="30%"></th>
                            <th width="25%">Goles</th>
                            <th width="25%">Prob. Ganar</th>
                            <th width="10%"></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td class="nompais"><img id="bt1"><span id="t1"></span></td>
                                <td id="gt1"></td>
                                <td id="pt1"></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td class="nompais"><img id="bt2"><span id="t2"></span></td>
                                <td id="gt2"></td>
                                <td id="pt2"></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="fecha-partido"></div>
                    <br>
                </div>';
            }
            ?>

            </div>

            <div class="row" id="j2" align="center">
            <div class="col-lg-12" id="titulo-jornada">
            <h3 class="titulo-h3" style="text-align:center">Fase de Grupos - Jornada 2</h3>
            </div>
                <?php
                for ($i=0;$i<6;$i++){
                    echo
                        '<div class="col-lg-6" id="p'.$i.'">
                    <table class="tabla-partidos">
                        <thead>
                            <th width="10%"></th>
                            <th width="30%"></th>
                            <th width="25%">Goles</th>
                            <th width="25%">Prob. Ganar</th>
                            <th width="10%"></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td class="nompais"><img id="bt1"><span id="t1"></span></td>
                                <td id="gt1"></td>
                                <td id="pt1"></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td class="nompais"><img id="bt2"><span id="t2"></span></td>
                                <td id="gt2"></td>
                                <td id="pt2"></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="fecha-partido"></div>
                    <br>
                </div>';
                }
                ?>

            </div>

            <div class="row" id="j3" align="center">
            <div class="col-lg-12" id="titulo-jornada">
            <h3 class="titulo-h3" style="text-align:center">Fase de Grupos - Jornada 3</h3>
            </div>
                <?php
                for ($i=0;$i<6;$i++){
                    echo
                        '<div class="col-lg-6" id="p'.$i.'">
                    <table class="tabla-partidos">
                        <thead>
                            <th width="10%"></th>
                            <th width="30%"></th>
                            <th width="25%">Goles</th>
                            <th width="25%">Prob. Ganar</th>
                            <th width="10%"></th>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td class="nompais"><img id="bt1"><span id="t1"></span></td>
                                <td id="gt1"></td>
                                <td id="pt1"></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td class="nompais"><img id="bt2"><span id="t2"></span></td>
                                <td id="gt2"></td>
                                <td id="pt2"></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="fecha-partido"></div>
                    <br>
                </div>';
                }
                ?>

            </div>


          <!-- RespaldoANFP/tabla-movil.html -->

          <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js">
          </script>
          <script type="text/javascript">
            var n = 12;
            var tabla = document.getElementById("tablepress-4");
            for (var i = 1; i <= n ; i++) {
              clase = "row-" + i;
              if (!(i % 2 == 0)) {
                clase = clase + " even"
              } else {
                clase = clase + " odd"
              }
              for (var j = 3; j <= 6; j++) {
                fila = tabla.getElementsByClassName(clase);
                celda = fila[0].getElementsByClassName("column-" + j);
                valor = celda[0].innerHTML;
                opacidad = parseFloat(valor) / 100.0;
                color = 'rgba(255, 94, 47, ' + opacidad + ')';
                celda[0].style.backgroundColor = color;
              }
            }

            var tabla = document.getElementById("tablepress-2");
            for (var i = 1; i <= n ; i++) {
              clase = "row-" + i;
              if (!(i % 2 == 0)) {
                clase = clase + " even"
              } else {
                clase = clase + " odd"
              }
              for (var j = 3; j <= 4; j++) {
                fila = tabla.getElementsByClassName(clase);
                celda = fila[0].getElementsByClassName("column-" + j);
                valor = celda[0].innerHTML;
                opacidad = parseFloat(valor) / 100.0;
                color = 'rgba(255, 94, 47, ' + opacidad + ')';
                celda[0].style.backgroundColor = color;
              }
            }



          </script>
        </div>
        <div id="grupos" class="grupos" style="background-color:white; display:none">
          <img src="img/banner-grupos.png" class="tabla img-tabla">


          <div class="row">
            <div class="col-lg-12" align="left" style="border-bottom: 2px solid black;">
              <h1><b>Grupo A</b></h1>
            </div>

            <div class="col-lg-6">
                  <svg class="chart" id="grupo1"></svg>
            </div>
            <div class="col-lg-6">
              <div class="tabla-grupos" id="tabla-grupo1">
                <div style="height: 70px; border-bottom: 2px solid #c7c7c7;">
                  <span style="font-size: 30px;font-weight: bold" id="pt1"></span>
                  <img align="right" id="bt1">
                </div>
                <table style="width: 100%">
                  <thead style="border-bottom: 2px solid #c7c7c7;">
                    <th width="23%">GANA</th>
                    <th width="23%">EMPATA</th>
                    <th width="23%">PIERDE</th>
                    <th width="8%"></th>
                    <th width="23%"></th>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 2px solid #c7c7c7;">
                      <td id="pg1"></td>
                      <td id="pe1"></td>
                      <td id="pp1"></td>
                      <td style="font-weight: bold">vs.</td>
                      <td><img id="bpp1"><div id="paisp1"></div></td>
                    </tr>
                    <tr style="border-bottom: 2px solid #c7c7c7;">
                      <td id="pg2"></td>
                      <td id="pe2"></td>
                      <td id="pp2"></td>
                      <td style="font-weight: bold">vs.</td>
                      <td><img id="bpp2"><div id="paisp2"></div></td>
                    </tr>
                    <tr>
                      <td id="pg3"></td>
                      <td id="pe3"></td>
                      <td id="pp3"></td>
                      <td style="font-weight: bold">vs.</td>
                      <td><img id="bpp3"><div id="paisp3"></div></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          <div class="row">
            <div class="col-lg-12" align="left" style="border-bottom: 2px solid black;">
              <h1><b>Grupo B</b></h1>
            </div>

            <div class="col-lg-6">
              <svg class="chart" id="grupo2"></svg>
            </div>
            <div class="col-lg-6">
              <div class="tabla-grupos" id="tabla-grupo2">
                <div style="height: 70px; border-bottom: 2px solid #c7c7c7;">
                  <span style="font-size: 30px;font-weight: bold" id="pt1"></span>
                  <img align="right" id="bt1">
                </div>
                <table style="width: 100%">
                  <thead style="border-bottom: 2px solid #c7c7c7;">
                  <th width="23%">GANA</th>
                  <th width="23%">EMPATA</th>
                  <th width="23%">PIERDE</th>
                  <th width="8%"></th>
                  <th width="23%"></th>
                  </thead>
                  <tbody>
                  <tr style="border-bottom: 2px solid #c7c7c7;">
                    <td id="pg1"></td>
                    <td id="pe1"></td>
                    <td id="pp1"></td>
                    <td style="font-weight: bold">vs.</td>
                    <td><img id="bpp1"><div id="paisp1"></div></td>
                  </tr>
                  <tr style="border-bottom: 2px solid #c7c7c7;">
                    <td id="pg2"></td>
                    <td id="pe2"></td>
                    <td id="pp2"></td>
                    <td style="font-weight: bold">vs.</td>
                    <td><img id="bpp2"><div id="paisp2"></div></td>
                  </tr>
                  <tr>
                    <td id="pg3"></td>
                    <td id="pe3"></td>
                    <td id="pp3"></td>
                    <td style="font-weight: bold">vs.</td>
                    <td><img id="bpp3"><div id="paisp3"></div></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          <div class="row">
            <div class="col-lg-12" align="left" style="border-bottom: 2px solid black;">
              <h1><b>Grupo C</b></h1>
            </div>

            <div class="col-lg-6">
              <svg class="chart" id="grupo3"></svg>
            </div>
            <div class="col-lg-6">
              <div class="tabla-grupos" id="tabla-grupo3">
                <div style="height: 70px; border-bottom: 2px solid #c7c7c7;">
                  <span style="font-size: 30px;font-weight: bold" id="pt1"></span>
                  <img align="right" id="bt1">
                </div>
                <table style="width: 100%">
                  <thead style="border-bottom: 2px solid #c7c7c7;">
                  <th width="23%">GANA</th>
                  <th width="23%">EMPATA</th>
                  <th width="23%">PIERDE</th>
                  <th width="8%"></th>
                  <th width="23%"></th>
                  </thead>
                  <tbody>
                  <tr style="border-bottom: 2px solid #c7c7c7;">
                    <td id="pg1"></td>
                    <td id="pe1"></td>
                    <td id="pp1"></td>
                    <td style="font-weight: bold">vs.</td>
                    <td><img id="bpp1"><div id="paisp1"></div></td>
                  </tr>
                  <tr style="border-bottom: 2px solid #c7c7c7;">
                    <td id="pg2"></td>
                    <td id="pe2"></td>
                    <td id="pp2"></td>
                    <td style="font-weight: bold">vs.</td>
                    <td><img id="bpp2"><div id="paisp2"></div></td>
                  </tr>
                  <tr>
                    <td id="pg3"></td>
                    <td id="pe3"></td>
                    <td id="pp3"></td>
                    <td style="font-weight: bold">vs.</td>
                    <td><img id="bpp3"><div id="paisp3"></div></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>

        </div>
        <div id="eliminatoria" class="eliminatoria" style="display:block">
          <img src="img/banner-eliminacion.png" class="tabla img-tabla">

            <div class="row no-gutters" id="titulo-bracket">
                <div class="col-3">Cuartos</div>
                <div class="col-3">Semis</div>
                <div class="col-3">Final</div>
                <div class="col-3">Campeón</div>
            </div>
            <div class="row no-gutters">
              <div class="col-lg-12" aling="center">
                  <svg id="bracket" width="100%"></svg>
              </div>
            </div>
        </div>
        <div id="probabilidades" class="probabilidades" style="display:none">
          <img src="img/banner-rusia.png" class="tabla img-tabla">
          <div class="row">
              <div class="col-lg-12" id="tabla-probabilidades">
              </div>
          </div>
        </div>
      </section>

  </main>

<script type="text/javascript">
  window.onload = function () {
    console.log("wena compare");
      var viz1 = d3.select("#grupo1");
      var ancho = viz1.style("width").substring(0, viz1.style("width").length - 2) - 10;
    var PromiseWrapper = (xhr, d) => new Promise(resolve => xhr(d, p => resolve(p)));

    Promise
            .all([
              PromiseWrapper(d3.json, "dataGrupos.json"),
              PromiseWrapper(d3.json, "dataPartidos.json")
            ])
            .then(resolve => {
              visGrupos(resolve[0],resolve[1]);
            });

    function visGrupos(data,datap) {
        var myFormatters = d3.locale({
            "decimal": ",",
            "thousands": ".",
            "grouping": [3],
            "currency": ["$", ""],
            "dateTime": "%a %b %e %X %Y",
            "date": "%d/%m/%Y",
            "time": "%H:%M:%S",
            "periods": ["AM", "PM"],
            "days": ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
            "shortDays": ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"],
            "months": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
            "shortMonths": ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"]
        });
        var formatofecha = myFormatters.timeFormat("%A %d de %B");
      aux = ["win_group", "second_group", "best_third", "no_quarter"];
      grupoA = [];
      grupoB = [];
      grupoC = [];
      for (i in data) {
        data[i][aux[1]] = data[i]["sixteen"];
        data[i][aux[2]] = data[i]["quarter"] - data[i]["sixteen"] - data[i]["win_group"];
        data[i][aux[3]] = 1 - data[i]["quarter"];
        if (data[i].group == "a") {
          grupoA.push(data[i]);
        } else if (data[i].group == "b") {
          grupoB.push(data[i]);
        } else if (data[i].group == "c") {
          grupoC.push(data[i]);
        }
      }
      datos = {"Grupo A": grupoA, "Grupo B": grupoB, "Grupo C": grupoC};
      dba = datos["Grupo A"];
      dba.sort(function (a,b) {
        return b["win_group"]-a["win_group"];
      });
      dbb = datos["Grupo B"];
      dbb.sort(function (a,b) {
        return b["win_group"]-a["win_group"];
      });

      dbc = datos["Grupo C"];
      dbc.sort(function (a,b) {
        return b["win_group"]-a["win_group"];
      });

      dlp = [];
      for (i=0; i<40; i++){
        dlp.push(i);
      }

      partidos = {};


      for(i in data){
        pp=[];
        for (j in datap){
          if (datap[j].team1 == i){
            partido = {};
            partido["vs"] = datap[j]["team2"];
            partido["pg"] = datap[j]["team1_win"];
            partido["pe"] = datap[j]["tie_prob"];
            partido["pp"] = datap[j]["team2_win"];
            pp.push(partido);
          } else if (datap[j].team2 == i){
            partido = {};
            partido["vs"] = datap[j]["team1"];
            partido["pg"] = datap[j]["team2_win"];
            partido["pe"] = datap[j]["tie_prob"];
            partido["pp"] = datap[j]["team1_win"];
            pp.push(partido);
          }
        }
        partidos[i]=pp;
      }

      d3.selectAll(".chart")
              .append("text")
              .attr("x", ancho*0.8-10)
              .attr("y", 12)
              .style("text-anchor", "end")
              .text("Eliminado");

      d3.selectAll(".chart")
              .append("text")
              .attr("x", ancho*0.8+10)
              .attr("y", 12)
              .style("text-anchor", "start")
              .text("Avanza");

      d3.selectAll(".chart")
              .selectAll("circle.lp")
              .data(dlp)
              .enter().append("circle")
              .attr("class", "lp")
              .attr("id",(d) => "p"+(d+1))
              .attr("r", 1)
              .attr("cx", ancho*0.8)
              .attr("cy", d => d*10);


      dpuestos = [0,1,2,3];

      inip = 140;

      dlpaises =[];
      dlineas=[];
      for (j=0;j<4;j++) {
        for (i = 0; i < 4; i++) {
          dlinea = [j * 60 + 140, j * 60 + 140, i * 90 + 50, i * 90 + 50];
          dlineas.push(dlinea);
        }
        dlpaises.push(dlineas);
        dlineas=[];
      }

      linea = d3.svg.line()
              .x((d,i) => (d>300)?i*((ancho*0.75)/3):i*((ancho*0.9)/3))
              .y((d) => d);

      function graficar(x,db){
        for (j=0;j<4;j++){
          for(i=0;i<4;i++){
            d3.select("#grupo"+x)
                    .append("path")
                    .attr("class",db[j]["country"]+(i+1))
                    .attr("d", linea(dlpaises[j][i]))
                    .style("stroke-width", 20)
                    .style("fill","none")
                    .style("stroke", db[j]["color_home"])
          }
        }

        d3.select("#grupo"+x).append("text")
                .selectAll("tspan")
                .data(db).enter()
                .append("tspan")
                .attr("x", 0)
                .attr("y", (d,i) => 120+60*i)
                .attr("asd",d=>d.country_id)
                .style("text-anchor", "start")
                .style("font-size", "20px")
                .style("font-weight", "bold")
                .style("fill", "black")
                .text(d => d.country)
                .on("mouseover",mostrar);


        d3.select("#grupo"+x)
                .selectAll("circle.puestosb")
                .data(dpuestos)
                .enter().append("circle")
                .attr("class", "puestosb")
                .attr("id",(d) => "p"+(d+1))
                .attr("r", 25)
                .attr("cx", (d) => (d==3)? ancho*0.7:ancho*(0.92-(d*0.02)))
                .attr("cy", (d) => d*90+50)
                .style("fill", "#ffffff");

        d3.select("#grupo"+x)
                .selectAll("circle.puestos")
                .data(dpuestos)
                .enter().append("circle")
                .attr("class", "puestos")
                .attr("id",(d) => "p"+(d+1))
                .attr("r", 25)
                .attr("cx", (d) => (d==3)? ancho*0.7:ancho*(0.92-(d*0.02)))
                .attr("cy", (d) => d*90+50)
                .style("fill", "#e9ecef");

        d3.select("#grupo"+x).append("text")
                .selectAll("tspan")
                .data(dpuestos).enter()
                .append("tspan")
                .attr("x", (d) => (d==3)? ancho*0.7:ancho*(0.92-(d*0.02)))
                .attr("y", (d) => (d==3)? 335:d*90+62)
                .style("text-anchor", "middle")
                .style("font-size", (d) => (d==3)?"60px":"40px")
                .style("font-weight", (d) => (d==3)? "lighter":"bold")
                .style("fill", "#ffffff")
                .style("text-shadow", "black 2px 0px 0px, black -2px 0px 0px, black 0px 2px 0px, black 0px -2px 0px, black 1px 1px, black -1px -1px 0px, black 1px -1px 0px, black -1px 1px 0px")
                .text(d => (d==3)? "x":(d+1));

        d3.select("#grupo"+x).append("text")
                .selectAll("tspan")
                .data(dpuestos).enter()
                .append("tspan")
                .attr("class","probs")
                .attr("x", (d) => (d==3)? ancho*0.7:ancho*(0.92-(d*0.02)))
                .attr("y", (d) => (d==3)? 365:d*90+95)
                .style("text-anchor", "middle")
                .style("font-weight","bold")
                .style("font-size", "20px")
                .text("");

        function mostrar(e) {
          d3.select("#grupo"+x).selectAll("path").style("opacity","0");
          d3.select("#grupo"+x).selectAll(".puestos").style("fill","#e9ecef");
          prob=[e[aux[0]],e[aux[1]],e[aux[2]],e[aux[3]]];
          pa=prob.indexOf(Math.max(...prob).toString());
          for (i=0;i<4;i++){
            d3.select("#grupo"+x).select("."+e.country+(i+1)).style("opacity",e[aux[i]]);
            d3.select("#grupo"+x).select("#p"+(i+1)+".puestos").style("fill",e["color_home"]).style("opacity",e[aux[i]]);
          }
          d3.select("#grupo"+x).selectAll(".probs").text((d,i) => (Math.round( (e[aux[i]]*100) * 10 ) / 10)+"%");
          d3.select("#tabla-grupo"+x).select("#pt1").text(e.country);
          d3.select("#tabla-grupo"+x).select("#bt1").attr("src","banderas/"+e.country+"300x200.png");
          for (i=1;i<4;i++){
            d3.select("#tabla-grupo"+x).select("#pg"+i).text((Math.round( (partidos[e["country_id"]][i-1].pg*100) * 10 ) / 10) + "%").style("font-size","20px");
            d3.select("#tabla-grupo"+x).select("#pe"+i).text((Math.round( (partidos[e["country_id"]][i-1].pe*100) * 10 ) / 10) + "%").style("font-size","20px");
            d3.select("#tabla-grupo"+x).select("#pp"+i).text((Math.round( (partidos[e["country_id"]][i-1].pp*100) * 10 ) / 10) + "%").style("font-size","20px");
            d3.select("#tabla-grupo"+x).select("#bpp"+i).attr("src","banderas/"+data[partidos[e["country_id"]][i-1].vs].country+"30x20.png");
            d3.select("#tabla-grupo"+x).select("#paisp"+i).text(partidos[e["country_id"]][i-1].vs).style("font-weight","bold");
          }
        }

        mostrar(db[0]);
      }

      graficar(1,dba);
      graficar(2,dbb);
      graficar(3,dbc);

      for (i in datap){
          if (i<6){
              d3.select("#j1").select("#p"+(i%6)).select("#t1").text(" "+data[datap[i]["team1"]].country);
              d3.select("#j1").select("#p"+(i%6)).select("#bt1").attr("src","banderas/"+data[datap[i]["team1"]].country+"30x20.png");
              d3.select("#j1").select("#p"+(i%6)).select("#gt1").text(datap[i]["team1_goal"]);
              d3.select("#j1").select("#p"+(i%6)).select("#pt1").text((Math.round( (datap[i]["team1_win"]*100) * 10 ) / 10)+"%");

              d3.select("#j1").select("#p"+(i%6)).select("#t2").text(" "+data[datap[i]["team2"]].country);
              d3.select("#j1").select("#p"+(i%6)).select("#bt2").attr("src","banderas/"+data[datap[i]["team2"]].country+"30x20.png");
              d3.select("#j1").select("#p"+(i%6)).select("#gt2").text(datap[i]["team2_goal"]);
              d3.select("#j1").select("#p"+(i%6)).select("#pt2").text((Math.round( (datap[i]["team2_win"]*100) * 10 ) / 10)+"%");

              d3.select("#j1").select("#p"+(i%6)).select(".fecha-partido").text(formatofecha(new Date(Date.parse(datap[i].date))));

          } else if (i<12){
              d3.select("#j2").select("#p"+(i%6)).select("#t1").text(" "+data[datap[i]["team1"]].country);
              d3.select("#j2").select("#p"+(i%6)).select("#bt1").attr("src","banderas/"+data[datap[i]["team1"]].country+"30x20.png");
              d3.select("#j2").select("#p"+(i%6)).select("#gt1").text(datap[i]["team1_goal"]);
              d3.select("#j2").select("#p"+(i%6)).select("#pt1").text((Math.round( (datap[i]["team1_win"]*100) * 10 ) / 10)+"%");

              d3.select("#j2").select("#p"+(i%6)).select("#t2").text(" "+data[datap[i]["team2"]].country);
              d3.select("#j2").select("#p"+(i%6)).select("#bt2").attr("src","banderas/"+data[datap[i]["team2"]].country+"30x20.png");
              d3.select("#j2").select("#p"+(i%6)).select("#gt2").text(datap[i]["team2_goal"]);
              d3.select("#j2").select("#p"+(i%6)).select("#pt2").text((Math.round( (datap[i]["team2_win"]*100) * 10 ) / 10)+"%");

              d3.select("#j2").select("#p"+(i%6)).select(".fecha-partido").text(formatofecha(new Date(Date.parse(datap[i].date))));

          } else {
              d3.select("#j3").select("#p"+(i%6)).select("#t1").text(" "+data[datap[i]["team1"]].country);
              d3.select("#j3").select("#p"+(i%6)).select("#bt1").attr("src","banderas/"+data[datap[i]["team1"]].country+"30x20.png");
              d3.select("#j3").select("#p"+(i%6)).select("#gt1").text(datap[i]["team1_goal"]);
              d3.select("#j3").select("#p"+(i%6)).select("#pt1").text((Math.round( (datap[i]["team1_win"]*100) * 10 ) / 10)+"%");

              d3.select("#j3").select("#p"+(i%6)).select("#t2").text(" "+data[datap[i]["team2"]].country);
              d3.select("#j3").select("#p"+(i%6)).select("#bt2").attr("src","banderas/"+data[datap[i]["team2"]].country+"30x20.png");
              d3.select("#j3").select("#p"+(i%6)).select("#gt2").text(datap[i]["team2_goal"]);
              d3.select("#j3").select("#p"+(i%6)).select("#pt2").text((Math.round( (datap[i]["team2_win"]*100) * 10 ) / 10)+"%");

              d3.select("#j3").select("#p"+(i%6)).select(".fecha-partido").text(formatofecha(new Date(Date.parse(datap[i].date))));
          }
      }
      tabla = d3.select("#tabla-probabilidades").append("table").attr("class","tablepress tablepress-id-2 wc").attr("id","tablepress-4").style("width","100%");
      thead = tabla.append("thead");
        thead.append("th").style("width","10%").text("");
        thead.append("th").style("width","22%").text("Equipo");
        thead.append("th").attr("onClick","sortTable(2)").style("cursor","pointer").style("width","17%").text("Cuartos");
        thead.append("th").attr("onClick","sortTable(3)").style("cursor","pointer").style("width","17%").text("Semifinal");
        thead.append("th").attr("onClick","sortTable(4)").style("cursor","pointer").style("width","17%").text("Final");
        thead.append("th").attr("onClick","sortTable(5)").style("cursor","pointer").style("width","17%").text("Campeón");
        tbody = tabla.append("tbody");
      for (i in data){
          tr = tbody.append("tr");
          tr.append("td").style("text-align","center").append("img").attr("src","banderas/"+data[i].country+"30x20.png");
          tr.append("td").style("border-right","2px solid").style("font-weight","bold").text(data[i].country);
          tr.append("td").style("text-align","center").style("background-color", "rgba(255, 94, 47, "+data[i].quarter+")").text( (parseFloat(data[i].quarter)<0.01) ? ("<1%") : ((Math.round( (data[i].quarter*100) * 10 ) / 10)+"%") );
          tr.append("td").style("text-align","center").style("background-color", "rgba(255, 94, 47, "+data[i].semi+")").text( (parseFloat(data[i].semi)<0.01) ? ("<1%") : ((Math.round( (data[i].semi*100) * 10 ) / 10)+"%") );
          tr.append("td").style("text-align","center").style("background-color", "rgba(255, 94, 47, "+data[i].cup+")").text( (parseFloat(data[i].cup)<0.01) ? ("<1%") : ((Math.round( (data[i].cup*100) * 10 ) / 10)+"%") );
          tr.append("td").style("text-align","center").style("background-color", "rgba(255, 94, 47, "+data[i].win+")").text( (parseFloat(data[i].win)<0.01) ? ("<1%") : ((Math.round( (data[i].win*100) * 10 ) / 10)+"%") );
      }
      sortTable(2);


      d3.selectAll(".nompais").style("text-align","left");


      //d3.select("#bracket").append("rect").attr("x","200px").attr("y","200px").attr("height","50px").attr("width","200px");


      ////////////////////////         BRACKET      /////////////////////////
        viz2 = d3.select("#bracket");
        var ancho2 = viz2.style("width").substring(0, viz2.style("width").length - 2);
        var alto2 = 1.12*ancho2;
        viz2.attr("height",alto2);

        var clasif = ["1° A","3° B/C","2° A","2° B","1° B","2° C","1° C","3° A/B"];

        var pacla = {};
        data["CHI"]["second_group"]=1;
        for (i in data){
            var grupo = data[i]["group"];
            var GRUPO = grupo.toUpperCase();
            if(data[i]["win_group"]==1){
                console.log(GRUPO);
                pacla["1° "+GRUPO]= data[i];
            }else if(data[i]["second_group"]==1){
                pacla["2° "+GRUPO]=data[i];
            }else if(data[i]["best_third"]==1){
                pacla["3° "+GRUPO]=data[i];
            }
        }

        console.log(pacla);

        var ab = 0.15;
        var sep = (1-(4*ab))/3;

        var hb = ab/3;
        var hsep = (1-(8*hb))/7;

        var borde = 0.01;
        var bordeh = 0.05;

        xbra = [];
        ybra = [];
        for (i = 0; i<4; i++){
            for (j= 0; j<8;j++){
                x = (borde*ancho2) + i*(1-(2*borde))*ancho2*ab + i*(1-(2*borde))*ancho2*sep;
                y = (bordeh*alto2) + (j + (Math.pow(2,i)-1)/2)*(1-(2*bordeh))*alto2*hb + (j + (Math.pow(2,i)-1)/2)*(1-(2*bordeh))*alto2*hsep;
                h = ((1-(2*bordeh))*alto2*hb);
                w = ((1-(2*borde))*ancho2*ab);
                ybra.push(y+h/2);
                j=j+(Math.pow(2,i)-1);
            }
            xbra.push(x);
            xbra.push(x+w/3);
            xbra.push(x+w);
        }
        xbra.shift();
        xbra.shift();
        xbra.pop();

        lineabra = d3.svg.line()
            .x((d) => xbra[d])
            .y((d, i) => ybra[asd[i]]);
        for (n=0;n<14;n++){
            if (n<8){
                indi = [0,1,2];
            } else if(n<12){
                indi = [3,4,5];
            } else {
                indi = [6,7,8];
            }
            var color = "black";
            var opa = 1;
            if (n%2==0){
                var ajuste=-10;
            } else{
                var ajuste=20;
            }
            if (pacla[clasif[n]]){
                color = pacla[clasif[n]]["color_home"];
                opa = pacla[clasif[n]]["semi"];
                d3.select("#bracket")
                    .append("text")
                    .attr("x", (xbra[indi[1]]+xbra[indi[0]])/2)
                    .attr("y", ybra[n]+ajuste)
                    .style("fill","black")
                    .style("font-weight","bold")
                    .style("text-anchor", "start")
                    .style("font-size", 20+"px")
                    .style("vertical-align", "middle")
                    .text((Math.round( (pacla[clasif[n]]["semi"]*100) * 10 ) / 10)+"%");
            }
            aux = parseInt(n/2);
            asd = [ n, n, aux+8];
            d3.select("#bracket")
                .append("path")
                .attr("d", lineabra(indi))
                .style("stroke-width", "7px")
                .style("fill", "none")
                .style("opacity",opa)
                .style("stroke", color);
        }

        contador=0;
        for (i = 0; i<4; i++){
            for (j= 0; j<8;j++) {
                x = (borde * ancho2) + i * (1 - (2 * borde)) * ancho2 * ab + i * (1 - (2 * borde)) * ancho2 * sep;
                y = (bordeh * alto2) + (j + (Math.pow(2, i) - 1) / 2) * (1 - (2 * bordeh)) * alto2 * hb + (j + (Math.pow(2, i) - 1) / 2) * (1 - (2 * bordeh)) * alto2 * hsep;
                h = ((1 - (2 * bordeh)) * alto2 * hb);
                w = ((1 - (2 * borde)) * ancho2 * ab);
                /*d3.select("#bracket")
                    .append("rect")
                    .attr("x", x + "px")
                    .attr("y", y + "px")
                    .attr("height", h + "px")
                    .attr("width", w + "px");*/
                d3.select("#bracket")
                    .append('svg:image')
                    .attr({
                        'xlink:href': 'img/bracket.png',  // can also add svg file here
                        x: x,
                        y: y,
                        height: h,
                        width: w
                    });
                var imagen = 'img/logo_CA30x30.png';
                var label = clasif[contador];
                if (pacla[clasif[contador]]){
                    imagen = 'banderas/'+pacla[clasif[contador]].country+'300x200.png';
                    label = pacla[clasif[contador]]["country_id"];
                }
                d3.select("#bracket")
                    .append('svg:image')
                    .attr({
                        'xlink:href': imagen,  // can also add svg file here
                        x: x + 0.05 * w,
                        y: y + 0.25 * h,
                        height: h * 0.5
                    });

                d3.select("#bracket")
                    .append("text")
                    .attr("x", x+w/2)
                    .attr("y", y+h/2+h/6)
                    .style("fill","white")
                    .style("text-anchor", "start")
                    .style("font-size", h/2+"px")
                    .style("vertical-align", "middle")
                    .text(label);
                contador++;
                j=j+(Math.pow(2,i)-1);
            }
        }


        console.log(data);
        console.log(datap);




        //////////     Hasta aqui programar      ////////////////
    }
    d3.selectAll("text").style("font-family","MyriadPro")
  }

</script>

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
