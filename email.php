<?php

$to = "robin@robin-prillwitz.de";
$valid = true;
$name = $from = $msg = $sbj = $head = "";

if( isset( $_POST["submit"]) && $_SERVER["REQUEST_METHOD"] == "POST")  {
    $name = test_input($_POST["name"]);
    $from = test_input($_POST["email"]);
    $msg = test_input($_POST["msg"]);

    $sbj = "WEB FORM - ".$name;
    $head = "From: ".$from."\r\n"."X-Mailer: PHP/" . phpversion();

    if( empty($_POST["name"]) || empty($_POST["email"]) || empty($_POST["msg"]) )   {
        $valid = false;
    }

    if($valid)  {
        mail($to, $sbj, $msg, $head);
        header("Location: index.html?mailsend");
    }
}

header("Location: index.html?mailerr");

function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}

?>