function validation(){
    var tphone = document.getElementById("phone");
    var tname = document.getElementById("name");
    var temail = document.getElementById("email");
    var tsphone = document.getElementById("secphone");
    var tsemail = document.getElementById("secemail");
    var tdob = document.getElementById("dob");

    var server_data = {
        "_id": tname.value,
        "name": tname.value,
        "phone" : tphone.value,
        "email": temail.value,
        "secondary_phone": tsphone.value,
        "secondary_email": tsemail.value,
        "dob": tdob.value};

        $.ajax({
            type: "POST",
            url: "/addcontacts",
            data: JSON.stringify(server_data),
            contentType: "application/json",
            dataType: 'json',
            success :function(result){
              if(result == 'Succesful')
                {alert(result);
                    tname.value = "";
                    temail.value = "";
                    tphone.value = "";
                    tsphone.value = "";
                    tsemail.value = "";    
                }
              else
                alert("Not successful");
            }
          });

}