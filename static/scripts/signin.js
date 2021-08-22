function validation(){
    var tpass = document.getElementById("pass")

    var server_data = {"pass":tpass.value};
    $.ajax({
        type: "POST",
        url: "/signin",
        data: JSON.stringify(server_data),
            contentType: "application/json",
            dataType: 'json',
            success :function(result){
              if(result == 'Succesful')
                {
                    alert(result);
                    tpass.value = "";
                    window.location.href = "/home"
                }
              else
                alert("Not successful");
            }
          });
}