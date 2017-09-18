<?php
    require 'phpmailer/PHPMailerAutoload.php';
	header('Content-Type: application/json'); //set header output json
	//setup php mailer smtp
//	$mail->isSMTP();
//	$mail->SMTPAuth = true;
//	$mail->SMTPDebug = 2; //if wanna check error
//	$mail->Host = 'bimasakti.indowebsite.net';
//	$mail->Username = 'no-reply@bisnisbermentor.com';
//	$mail->Password = '9hh}*^I&%^]^';
//	$mail->SMTPSecure = 'ssl';
//	$mail->Port = 465;

	$postdata = file_get_contents("php://input"); //get post data
	$request = json_decode($postdata); //decode to json obcject
	if(!$request) {
		echo '{"success":false, "message":"bad data !"}';
		return;
	}

    $mail = new PHPMailer;
    $mail->setFrom('no-reply@bisnisbermentor.com', 'Bisnis Bermentor');
    $mail->addAddress($request->email, $request->name);
    $mail->isHTML(true);  //set email format to HTML
    $mail->Subject  = $request->subject;
    $mail->Body     = $request->message;
    if(!$mail->send()) {
        echo json_encode('Message was not sent.');
        echo json_encode('Mailer error: ' . $mail->ErrorInfo);
    } else {
        echo json_encode('Message has been sent.');
    }

?>