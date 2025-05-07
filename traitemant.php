<?php
// Vérification de la méthode utilisée
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Récupération des valeurs du formulaire
    $nom = $_POST['username'];
    $email = $_POST['password'];

    // Affichage des valeurs récupérées
    echo "Nom: " . htmlspecialchars($nom) . "<br>";
    echo "Email: " . htmlspecialchars($email);
}
?>