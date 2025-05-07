<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./test.css" />
    <title>Page de Connexion</title>
  </head>
  <body>
    <div class="login-box">
      <div class="form-title">
        <h2>Connexion</h2>
      </div>
      <form  action="traitemant.php" method="post">
        <div class="form-container">
          <label Nom for="username">Nom d'utilisateur</label>
          <input type="text" id="username" name="username" aria-required="true" placeholder="username" />
          <span class="error-text" id="username_error"></span>
        </div>
        <div class="form-container">
          <label for="password">Mot de passe</label>
          <input type="password" id="password" placeholder="password" name="password" required />
          <span class="error-text" id="password_error"></span>
        </div>
        <div class="form-container">
          <button type="submit" value="Se connecter">Se connecter</button>
        </div>
      </form>
    </div>
  </body>
  <script src="./test.js"></script>
</html>
