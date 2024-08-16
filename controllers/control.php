<?php

 require "../services/formService.php";

 $method = $_POST['method'];
 $form = new formService();
 switch ($method) {
    case 'cotizador':
        
        $nombre     = $_POST['nombre'];
        $mercancia  = $_POST['mercancia'];
        $peso       = $_POST['peso'];
        $estadoOrigen  = $_POST['estadoOrigen'];
        $ciudadOrigen  = $_POST['ciudadOrigen'];
        $estadoDestino = $_POST['estadoDestino'];
        $ciudadDestino = $_POST['ciudadDestino'];
        $unidad     = $_POST['unidad'];
        $embalaje   = $_POST['embalaje'];
        $transbordo = $_POST['transbordo'];
        $telefono   = $_POST['telefono'];
        $correo     = $_POST['correo'];
        $comentario = $_POST['comentario'];

        $form->postCotizar($mercancia,$peso,$estadoOrigen,$ciudadOrigen,$estadoDestino,$ciudadDestino,$unidad,$embalaje,$transbordo,$nombre,$telefono,$correo,$comentario);
        break;

    case 'vacantes':
    
        $nombre     = $_POST['nombre'];
        $direccion  = $_POST['direccion'];
        $telefono   = $_POST['telefono'];
        $email      = $_POST['correo'];

        $form->postVacantes($nombre,$direccion,$telefono,$email);
        break;
    
    default:
        # code...
        break;
 }
 
?>