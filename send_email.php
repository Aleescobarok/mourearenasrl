<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST['nombre'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $mensaje = $_POST['mensaje'];

    $to = "Alejandroescobar@mourearena.com"; 
    $subject = "Consulta desde la página web";
    $body = "Nombre: $nombre\nEmail: $email\nNúmero de Contacto: $telefono\nMensaje:\n$mensaje";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Mensaje enviado, nos contactaremos con usted a la brevedad!'); window.location.href = 'index.html';</script>";
    } else {
        echo "<script>alert('Error al enviar el mensaje. Inténtelo de nuevo más tarde.'); window.location.href = 'index.html';</script>";
    }
}
?>

