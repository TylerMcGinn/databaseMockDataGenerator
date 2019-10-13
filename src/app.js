const Users = require('./Users');

$('#sendData').click(function(){
    let users = new Users();
    $.ajax({
        method:"POST",
        url:"../Server/server.php",
        data:users.list,
        success:function(res){
            $('.message').append(res);
        }
    });
});



