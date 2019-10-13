const Users = require('./Users');

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


$('#sendData').click(function(){
let users = new Users();

    // let userRequest = {0:{first_name:'tyler',last_name:'mcginn'}, 1:{first_name:'max', last_name:'tougas'}};
    $.ajax({
        method:"POST",
        url:"../Server/server.php",
        data:users.list,
        success:function(res){
            $('.message').append(res);
        }
    });
});
// class User{
//     constructor(userData){
//         this.firstName = userData.firstNames;
//         this.lastName = this.makeRandomLastName(this.getNames())[index];
//         this.dob = this.makeRandomBirthDay()[index];
//     }
// }


