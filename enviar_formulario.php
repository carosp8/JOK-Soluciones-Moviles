<?php
// Configuración de la base de datos
$servername = "localhost";
$username = "tu_usuario";
$password = "tu_contraseña";
$dbname = "contacto_db";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Obtener datos del formulario y sanitizarlos
$nombre = $conn->real_escape_string($_POST['nombre']);
$apellido = $conn->real_escape_string($_POST['apellido']);
$asunto = $conn->real_escape_string($_POST['asunto']);
$email = $conn->real_escape_string($_POST['email']);
$mensaje = $conn->real_escape_string($_POST['msg']);

// Validar campos
if (empty($nombre) || empty($apellido) || empty($email) || empty($mensaje)) {
    die("Todos los campos son obligatorios.");
}

// Insertar datos en la base de datos
$sql = "INSERT INTO contactos (nombre, apellido, asunto, email, mensaje) VALUES ('$nombre', '$apellido', '$asunto', '$email', '$mensaje')";

if ($conn->query($sql) === TRUE) {
    echo "Mensaje enviado con éxito";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>