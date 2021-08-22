<?php
    require 'db.php';

    $link = new mysqli($localhost, $login, $password, $dbname);

    if ($_SERVER["REQUEST_METHOD"] === "GET"){
        $sql = "SELECT * FROM tasks";
        $result = $link->query($sql);
    
        while($row = $result->fetch_assoc()){
            $items[] = $row;
    
        }
        echo json_encode($items);
    }
    elseif($_SERVER["REQUEST_METHOD"] === "POST"){
        $_POST = json_decode(file_get_contents('php://input'), true);
        $sql = "INSERT INTO tasks (text) VALUES('$_POST[text]')";
        var_dump($_POST);
        $result = $link->query($sql);
    }
    elseif($_SERVER["REQUEST_METHOD"] === "PUT"){
        $_PUT = json_decode(file_get_contents("php://input"), true);
        $sql = "UPDATE tasks SET complited = 1 WHERE id_task = '$_PUT[id]'";
        $result = $link->query($sql);
    }
    elseif($_SERVER["REQUEST_METHOD"] === "DELETE"){
        $_DELETE = json_decode(file_get_contents("php://input"), true);
        $sql = "DELETE FROM tasks WHERE id_task = '$_DELETE[id]'";
        $result = $link->query($sql);
    }
    elseif($_SERVER["REQUEST_METHOD"] === "PATCH"){
        $_PUT = json_decode(file_get_contents("php://input"), true);
        $sql = "UPDATE tasks SET complited = 0 WHERE id_task = '$_PUT[id]'";
        $result = $link->query($sql);
    }
?>