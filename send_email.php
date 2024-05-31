<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = htmlspecialchars($_POST['nombre']);
    $email = htmlspecialchars($_POST['email']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $mensaje = htmlspecialchars($_POST['mensaje']);

    $mail = new PHPMailer(true);

    try {
        // Configuración del servidor
        $mail->SMTPDebug = 0;
        $mail->isSMTP();
        $mail->Host = 'smtp.example.com';
        $mail->SMTPAuth = true;
        $mail->Username = 'your_email@example.com';
        $mail->Password = 'your_password';
        $mail->SMTPSecure = 'tls';
        $mail->Port = 587;

        // Destinatarios
        $mail->setFrom('from@example.com', 'Mailer');
        $mail->addAddress('Alejandroescobar@mourearena.com', 'Alejandro Escobar');

        // Contenido del correo
        $mail->isHTML(false);
        $mail->Subject = 'Consulta desde la página web';
        $mail->Body = "Nombre: $nombre\nEmail: $email\nNúmero de Contacto: $telefono\nMensaje:\n$mensaje";

        $mail->send();
        echo "<script>alert('Mensaje enviado, nos contactaremos con usted a la brevedad!'); window.location.href = 'index.html';</script>";
    } catch (Exception $e) {
        echo "<script>alert('Error al enviar el mensaje. Inténtelo de nuevo más tarde.'); window.location.href = 'index.html';</script>";
    }
} else {
    echo "<script>alert('Método de solicitud no válido.'); window.location.href = 'index.html';</script>";
}
?>
