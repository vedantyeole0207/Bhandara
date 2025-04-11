<?php
$servername = "localhost:8081"; // Change if your server is different
$username = "root"; // Your database username
$password = ""; // Your database password
$dbname = "bhandara"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
