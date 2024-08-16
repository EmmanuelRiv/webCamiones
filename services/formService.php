<?php
    class formService {

        function postCotizar($mercancia,$peso,$estadoOrigen,$ciudadOrigen,$estadoDestino,$ciudadDestino,$unidad,$embalaje,$transbordo,$nombre,$telefono,$correo,$comentario){

            // Esto le dice a PHP que usaremos cadenas UTF-8 hasta el final
            mb_internal_encoding('UTF-8');
            
            // Esto le dice a PHP que generaremos cadenas UTF-8
            mb_http_output('UTF-8');

            $asunto = "cotización desde página web tci.com.mx";
            $EmailTo = 'gerardov@tci.com.mx';
            $Subject = "Cotización desde cotizador web";

            // prepare email body text
            $Body = "";
            $Body .= "Nombre: ";
            $Body .= $nombre;
            $Body .= "\n";
            $Body .= "Teléfono: ";
            $Body .= $telefono;
            $Body .= "\n";
            $Body .= "Email: ";
            $Body .= $correo;
            $Body .= "\n";
            $Body .= "Mercancia: ";
            $Body .= $mercancia;
            $Body .= "\n"; 
            $Body .= "Origen: ";
            $Body .= $ciudadOrigen.", ".$estadoOrigen;
            $Body .= "\n";
            $Body .= "Destino: ";
            $Body .= $ciudadDestino.", ".$estadoDestino;
            $Body .= "\n";
            $Body .= "Peso: ";
            $Body .= $peso;
            $Body .= "\n";
            $Body .= "Unidad: ";
            $Body .= $unidad;
            $Body .= "\n"; 
            $Body .= "Transbordo: ";
            $Body .= $transbordo;
            $Body .= "\n";            
            $Body .= "Comentarios: ";
            $Body .= $comentario;
            $Body .= "\n";

            // send email
            $email_from = "contactoweb@tci.com.mx";

            $success = mail($EmailTo, $Subject, $Body, "From:".$email_from);

            // redirect to success page
            if ($success){
            echo true;
            }else{
               echo false;
            }

        }

        function postVacantes($nombre,$direccion,$telefono,$email){

            // Esto le dice a PHP que usaremos cadenas UTF-8 hasta el final
            mb_internal_encoding('UTF-8');
            
            // Esto le dice a PHP que generaremos cadenas UTF-8
            mb_http_output('UTF-8');

            $asunto = "Solicitud de trabajo desde página web tci.com.mx";
            $EmailTo = 'emmanuel140@outlook.es';

            // $EmailTo = 'tci@tci.com.mx';
            $Subject = "Solicitud de trabajo desde pag web";

            // prepare email body text
            $Body = "";
            $Body .= "Nombre: ";
            $Body .= $nombre;
            $Body .= "\n";
            $Body .= "Dirección: ";
            $Body .= $direccion;
            $Body .= "\n";
            $Body .= "Teléfono: ";
            $Body .= $telefono;
            $Body .= "\n";
            $Body .= "Correo: ";
            $Body .= $email;
            $Body .= "\n";

            // send email
            $email_from = "gerardoemmanuel694@gmail.com";
            // $email_from = "contactoweb@tci.com.mx";

            $success = mail($EmailTo, $Subject, $Body, "From:".$email_from);

            // redirect to success page
            
            if ($success){
            echo true;
            }else{
               echo false;
            }
        }
    }
?>