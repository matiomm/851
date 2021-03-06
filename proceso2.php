<?php

    function limpiar($db, $str){
        return htmlspecialchars($db->real_escape_string($str));
    }
    function newPar($db,$nom,$mail,$tel,$gc,$gj){
        $nomdb=limpiar($db,$nom);
        $maildb=limpiar($db,$mail);
        $teldb=limpiar($db,$tel);
        $stmt = $db->prepare("INSERT INTO `concursochpe`(`idConcursoChPe`, `nombre`, `email`, `telefono`,`golesChile`,`golesPeru`) VALUES (NULL, ? , ? , ? , ? , ? )");
        $stmt->bind_param("sssdd", $nomdb, $maildb, $teldb, $gc, $gj);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    function busMail($db,$mail){
        $maildb=limpiar($db,$mail);
        $stmt = $db->prepare("SELECT * FROM `concursochpe` WHERE `email`=?");
        $stmt->bind_param("s",$maildb);
        if ($stmt->execute()){
            if ($stmt->get_result()->fetch_assoc() != null){
                return true;
            }
        }
        return false;
    }

    $db_name = "851";
    $db_user = "ochocincouno";
    $db_pass = "Base851-fcfm";
    $db_host = "localhost";
    $db = new mysqli($db_host, $db_user, $db_pass, $db_name);
    $db->set_charset("utf8");

    if(busMail($db,$_POST["mail"])){
        $db->close();
        $errores=true;
        //header("Location: concurso.php?errores=".implode($error, "<br>"));
        header("Location: participacion.php?errores=".$errores);
    }else{
        newPar($db,$_POST["nombre"],$_POST["mail"],$_POST["tel"],$_POST["gc"],$_POST["gp"]);
        $db->close();
        header("Location: participacion.php");
    }

?>
