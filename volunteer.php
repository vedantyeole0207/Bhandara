<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['volunteerName'];
    $email = $_POST['volunteerEmail'];
    $phone = $_POST['volunteerPhone'];

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO volunteers (name, email, phone) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $phone);
    
    if ($stmt->execute()) {
        echo "Volunteer registration successful!";
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
}
$conn->close();
?>
``
