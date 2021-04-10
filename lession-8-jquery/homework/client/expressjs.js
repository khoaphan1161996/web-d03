$("#load-btn").click(function(){
    $("#text").load("http://localhost:8080/users/")
})

$("#get-btn").click(function(){
    $.get("http://localhost:8080/users/",function(data,status){
        alert("data " + data+ "\nstatus " + status)
    })
})

$("#post-btn").click(function(){
    $.post("http://localhost:8080/users/",
    {id: 4, name: 'Tuuu'},
    function(data,status){
        alert("data " + data+ "\nstatus " + status)
    })
})