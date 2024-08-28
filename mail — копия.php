<?php 
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    
    require 'vendor/autoload.php'
    // require 'phpmailer/src/Exception.php';
    // require 'phpmailer/src/PHPMailer.php';

    // $mail = new PHPMailer(true);
    
    $name = $_POST['name'];
    $phone = $_POST['number'];

    //require_once('phpmailer/PHPMailerAutoload.php');
    $mail = new PHPMailer(true);
    $mail->SMTPDebug = 0;
    $mail->CharSet = 'utf-8';

    $mail->isSMTP();
    $mail->Host = 'ssl://mail.hosting.reg.ru';
    $mail->SMTPAuth = true;
    $mail->Username = 'robotopovestitel@gmail.com';
    $mail->Password = 'gdti gmem ttew ooah';
//robotopovestitel@gmail.com    
// qwerty123&#$%
    // gdti gmem ttew ooah
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setFrom('robotopovestitel@gmail.com');
    // Кому будет уходить письмо 
    $mail->addAddress('robotopovestitel@gmail.com');

    $mail->isHTML(true);

    // от кого письмо

    // Тема письма
    $mail->Subject = 'Новый клиент';

    $mail->Body = 'Имя';

    $mail->AltBody = '';


    // // Тело письма
    // $body = '<h1>Новый посетитель!</h1>';
    // // Имя
    // $body.='<p><strong>Имя: </strong> .$name</p>';
    // // Номер телефона
    // $body.='<p><strong><br>Номер телефона: </strong> '.$_POST['number'].'</p>';
    
    // $mail->Body = $body;

    // Отправка
    $mail->send();
    // if(!) {
    //     echo 'Error';
    // } else {
    //     echo 'Данные отправлены!';
    // }
?>