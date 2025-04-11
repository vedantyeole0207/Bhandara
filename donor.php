<?php
include 'db.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['donorName'];
    $email = $_POST['donorEmail'];
    $donation_amount = $_POST['donationAmount'];

    // Prepare and bind
    $stmt = $conn->prepare("INSERT INTO donors (name, email, donation_amount) VALUES (?, ?, ?)");
    $stmt->bind_param("ssd", $name, $email, $donation_amount);
    
    if ($stmt->execute()) {
        echo "Donation recorded successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }
    $stmt->close();
}
$conn->close();
?>
