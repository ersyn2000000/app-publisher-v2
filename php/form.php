<?php
$db_host = "127.0.0.1"; 
$db_user = "root"; // Логин БД
$db_password = ""; // Пароль БД
$db_base = 'project'; // Имя БД
$db_table = "users"; // Имя Таблицы БД
echo $name.$phone.$email.$url.$help.$budget;
// if (isset($_POST['first_name']) && isset($_POST['number']) && isset($_POST['email']) && ($_POST['url'])){
    // Переменные с формы
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email=$_POST['email'];
    $url=$_POST['url'];
    $help=$_POST['help'];
    $budget=$_POST['budget'];

  
    try {
        // Подключение к базе данных
        $db = new mysqli("$db_host", "$db_user", "$db_password","$db_base");
        // Устанавливаем корректную кодировку
        
        // Собираем данные для запроса
        
        // Подготавливаем SQL-запрос
        $db->query("INSERT INTO users (name, phone,email,url,help,budget) VALUES ('$name', '$phone','$email','$url','$help','$budget');");
        // Выполняем запрос с данными
        // $db -> query("INSERT INTO posts (title, description) VALUES ('$add_title', '$add_description');");
        header("LOCATION: /app-publisherv2/index.html");
        // Запишим в переменую, что запрос отрабтал
        $result = true;
    } catch (PDOException $e) {
        // Если есть ошибка соединения или выполнения запроса, выводим её
        print "Ошибка!: " . $e->getMessage() . "<br/>";
    }
    
    // if ($result) {
    // 	echo "Успех. Информация занесена в базу данных";
    // }
// };
