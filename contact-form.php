<?php

echo "test working";

             /* send the submitted data */
{
$firstname=$_REQUEST['prenom'];
$lastname=$_REQUEST['nom'];
$number=$_REQUEST['tel'];
$email=$_REQUEST['email'];
$message=$_REQUEST['commentaire'];
if (($firstname=="")||($lastname=="")||($number=="")||($email=="")||($message==""))
    {
    echo "All fields are required, please fill <a href=\"\">the form</a> again.";
    }
else{
    $from="From: $lastname<$email>\r\nReturn-path: $email";
    $subject="Message sent using your contact form";
    mail("ryhad.boughanmi@gmail.com", $subject, $message, $from);
    echo "Email sent!";
    }
}
?>
