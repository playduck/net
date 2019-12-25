<?php
$to = "";
$valid = true;
$name = $from = $msg = $sbj = "";

if( $_SERVER["REQUEST_METHOD"] == "POST" )  {
    $name = test_input($_POST["name"]);
    $from = test_input($_POST["email"]);
    $msg = test_input($_POST["msg"]);
    $sbj = "WEB FORM - ".$name;
    $head = "From: ".$from."\r\n";

    if( empty($name) or empty($from) or empty($msg) )   {
        $valid = false;
    }

    if($valid)  {
        // mail($to, $sbj, $msg, $head);
        header("Location: index.html?mailsend");
    }   else    {
        header("Location: index.html?mailerr");
    }
}   else    {
    header("Location: index.html?generr");
}


function test_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
