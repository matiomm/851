<?php

    function limpiar($db, $str){
        return htmlspecialchars($db->real_escape_string($str));
    }
    function newPar($db,$nom,$mail,$tel,$gc,$gj){
        $nomdb=limpiar($db,$nom);
        $maildb=limpiar($db,$mail);
        $teldb=limpiar($db,$tel);
        $stmt = $db->prepare("INSERT INTO `concursochta`(`idConcursoChTa`, `nombre`, `email`, `telefono`,`golesChile`,`golesTailandia`) VALUES (NULL, ? , ? , ? , ? , ? )");
        $stmt->bind_param("sssdd", $nomdb, $maildb, $teldb, $gc, $gj);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    function newPar2($db,$nom,$mail,$tel,$gc,$gj){
        $nomdb=limpiar($db,$nom);
        $maildb=limpiar($db,$mail);
        $teldb=limpiar($db,$tel);
        $stmt = $db->prepare("INSERT INTO `concursochec`(`idConcursoChEc`, `nombre`, `email`, `telefono`,`golesChile`,`golesEcuador`) VALUES (NULL, ? , ? , ? , ? , ? )");
        $stmt->bind_param("sssdd", $nomdb, $maildb, $teldb, $gc, $gj);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
    function busMail($db,$mail){
        $maildb=limpiar($db,$mail);
        $stmt = $db->prepare("SELECT * FROM `concursochta` WHERE `email`=?");
        $stmt->bind_param("s",$maildb);
        if ($stmt->execute()){
            if ($stmt->get_result()->fetch_assoc() != null){
                return true;
            }
        }
        $stmt2 = $db->prepare("SELECT * FROM `concursochec` WHERE `email`=?");
        $stmt2->bind_param("s",$maildb);
        if ($stmt2->execute()){
            if ($stmt2->get_result()->fetch_assoc() != null){
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
        //newPar($db,$_POST["nombre"],$_POST["mail"],$_POST["tel"],$_POST["gc"],$_POST["gt"]);
        newPar2($db,$_POST["nombre"],$_POST["mail"],$_POST["tel"],$_POST["gc2"],$_POST["ge"]);
        $db->close();
        header("Location: participacion.php");
    }

?>
