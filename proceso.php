<?php

    function limpiar($db, $str){
        return htmlspecialchars($db->real_escape_string($str));
    }
    function newPar($db,$nom,$mail,$tel,$cam,$sub,$ter,$p1,$p2,$p3,$p4,$p5,$p6,$p7,$p8,$p9,$p10,$p11,$p12,$p13,$p14,$p15,$p16,$p17,$p18){
        $nomdb=limpiar($db,$nom);
        $maildb=limpiar($db,$mail);
        $teldb=limpiar($db,$tel);
        $stmt = $db->prepare("INSERT INTO `concursofg`(`idConcursoFG`, `nombre`, `email`, `telefono`, `campeon`, `subcampeon`,`tercero` ,`p1`, `p2`, `p3`, `p4`, `p5`, `p6`, `p7`, `p8`, `p9`, `p10`, `p11`, `p12`, `p13`, `p14`, `p15`, `p16`, `p17`, `p18`, `confirmado`) VALUES (NULL, ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , ? , FALSE)");
        $stmt->bind_param("ssssssssssssssssssssssss", $nomdb, $maildb, $teldb, $cam, $sub, $ter,$p1,$p2,$p3,$p4,$p5,$p6,$p7,$p8,$p9,$p10,$p11,$p12,$p13,$p14,$p15,$p16,$p17,$p18);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    function busMail($db,$mail){
        $maildb=limpiar($db,$mail);
        $stmt = $db->prepare("SELECT * FROM `concursofg` WHERE `email`=?");
        $stmt->bind_param("s",$maildb);
        if ($stmt->execute()){
            if ($stmt->get_result()->fetch_assoc() != null){
                return true;
            }
        }
        return false;
    }

    $db_name = "851";
    $db_user = "root";
    $db_pass = "Base851-fcfm";
    $db_host = "localhost";
    $db = new mysqli($db_host, $db_user, $db_pass, $db_name);
    $db->set_charset("utf8");

    if(busMail($db,$_POST["mail"])){
        $db->close();
        $errores=true;
        //header("Location: concurso.php?errores=".implode($error, "<br>"));
        header("Location: concurso.php?errores=".$errores);
    }else{
        newPar($db,$_POST["nombre"],$_POST["mail"],$_POST["tel"],$_POST["campeon"],$_POST["subcampeon"],$_POST["tercero"],$_POST["partido1"],$_POST["partido2"],$_POST["partido3"],$_POST["partido4"],$_POST["partido5"],$_POST["partido6"],$_POST["partido7"],$_POST["partido8"],$_POST["partido9"],$_POST["partido10"],$_POST["partido11"],$_POST["partido12"],$_POST["partido13"],$_POST["partido14"],$_POST["partido15"],$_POST["partido16"],$_POST["partido17"],$_POST["partido18"]);
        $db->close();
        header("Location: resultadosconcurso.php");
    }


?>
