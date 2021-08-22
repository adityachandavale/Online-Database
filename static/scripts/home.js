function validation(){
    var tname = document.getElementById("name")

    function printObject(o) {
        var out = '';
        for (var p in o) {
          out += p + ': ' + o[p] + '\n';
        }
        alert(out);
      }
      
    var server_data = {"name":tname.value};
    $.ajax({
        type: "POST",
        url: "/home",
        data: JSON.stringify(server_data),
            contentType: "application/json",
            dataType: 'json',
            success :function(result){
              if(result)
                {
                    //alert(JSON.stringify(result));
                    printObject(result);
                    tname.value = "";
                }
              else
                alert("Record not found");
            }
          });
}