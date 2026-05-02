<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Module13</title>
</head>
<body>
    
</body>

       <h1>Module 13</h1>
    <form method="POST" action="">
        <textarea id="message" name="message" rows="5" cols="40"></textarea><br><br>
        <input type="submit" value="Submit">
</form>

      <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            $userInput = $_POST["message"];
            echo "<p>" . $userInput . "</p>";
        }
    ?>
</body>

</html>