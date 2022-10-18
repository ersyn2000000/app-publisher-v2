const onSubmit = () => {
    
    // собираем данные с формы
    const form = {
        name: $('#name').val(),
        number: $('#number').val(),
        email: $('#email').val(),
        url: $('#url').val(),
        budget:$('#budget').val(),
        help:$('#help').val()

    }
    // отправляем данные 
    console.log(form)
    $.ajax({
        url: "php/form.php", // куда отправляем
        method: "POST", // метод передачи
        // тип передачи данных
        data: form,
    }).done(function (data) {
        if (data) {
            $(alert).html(data)
        }
    }).catch(function (err) {
        console.log(err)
    } )
}