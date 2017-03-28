<?php

$prenom=$HTTP_POST_VARS['prenom'];
$nom=$HTTP_POST_VARS['nom'];
$mail=$HTTP_POST_VARS['mail'];
$telephone=$HTTP_POST_VARS['tel'];
$commentaire=$HTTP_POST_VARS['commentaire'];

/////voici la version Mine
$headers = "MIME-Version: 1.0\r\n";

//////ici on détermine le mail en format text
$headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";

////ici on détermine l'expediteur et l'adresse de réponse
$headers .= "From: $nom, $prenom <$mail>\r\nReply-to : $nom <$mail>\nX-Mailer:PHP";


$destinataire="ryhad.boughanmi@gmail.com"; //remplacez "webmaster@votre-site.com" par votre adresse e-mail
$body="$commentaire";
if (mail($destinataire,$body,$headers)) {
echo "Votre mail a été envoyé<br>";
} else {
echo "Une erreur s'est produite";
}
?>

<p>Vous allez bientot etre redirigé vers la page d'accueil<br>
Si vous n'etes pas redirigé au bout de 5 secondes <a href="http://ryderblack.github.io/greencar">cliquez ici
</a></p>
