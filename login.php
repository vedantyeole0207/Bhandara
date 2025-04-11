
<?php
$servername = "localhost:8081"; // Change if your server is different
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "registration"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo connection successs
?>


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

 if($conn-> connect_error){
    die('Connection Failed : '.$conn->connect_error);
 }else{
    $stmt = $connect->prepare("INSERT INTO registration( username, password)
    VALUES(? , ? )");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    echo "login successfully...."
    $stmt->close();
    $conn->close();
 }
}
?>