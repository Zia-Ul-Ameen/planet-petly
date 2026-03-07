<?php
error_reporting(E_ALL);
ini_set("display_errors", 1);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit();
}

/**
 * IMPORTANT: To use this script, you MUST upload the PHPMailer files to your server.
 * Download PHPMailer from: https://github.com/PHPMailer/PHPMailer/archive/refs/tags/v6.9.1.zip
 * Extract and upload the 'src' folder as 'PHPMailer' to your /api/ directory.
 */
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$servername = "localhost";
$username = "u143314757_mysql";
$password = "Planetpetly@123";
$dbname = "u143314757_planetpetly";

// Connect to DB
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    echo json_encode(["status" => "error", "message" => "DB connection failed"]);
    exit();
}

// Read JSON from request
$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data) {
    echo json_encode(["status" => "error", "message" => "Invalid JSON input"]);
    exit();
}

$name = isset($data['name']) ? trim($data['name']) : '';
$email = isset($data['email']) ? trim($data['email']) : '';
$message = isset($data['message']) ? trim($data['message']) : '';

if (empty($name) || empty($email)) {
    echo json_encode(["status" => "error", "message" => "Name and Email are required"]);
    exit();
}

// 1. Insert into database using prepared statement
$stmt = $conn->prepare("INSERT INTO enquiries (name, email, message) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $name, $email, $message);

if ($stmt->execute()) {
    // 2. Send email via SMTP using PHPMailer
    $mail = new PHPMailer(true);

    try {
        // Server settings
        // $mail->SMTPDebug = SMTP::DEBUG_SERVER; // Enable for troubleshooting
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'admin@adrarecom.com';
        $mail->Password   = 'wkhj sneq wmeh ymgx'; // App Password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
        $mail->Port       = 465;

        // Recipients
        $mail->setFrom('admin@adrarecom.com', 'Planet Petly Website');
        $mail->addAddress('admin@adrarecom.com');
        $mail->addReplyTo($email, $name);

        // Content
        $mail->isHTML(false);
        $mail->Subject = "New Contact Form Submission: $name";
        $mail->Body    = "You have received a new message from your website contact form.\n\n" .
                         "Name: $name\n" .
                         "Email: $email\n" .
                         "Message:\n$message\n";

        $mail->send();
        $email_notified = true;
    } catch (Exception $e) {
        $email_notified = false;
        $email_error = $mail->ErrorInfo;
    }

    echo json_encode([
        "status" => "success",
        "message" => "Message sent successfully",
        "email_notified" => $email_notified,
        "email_error" => isset($email_error) ? $email_error : null
    ]);
} else {
    echo json_encode(["status" => "error", "message" => "Database error: " . $conn->error]);
}

$stmt->close();
$conn->close();
?>
