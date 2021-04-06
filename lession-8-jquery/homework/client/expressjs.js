$("#load-btn").click(function(){
    $("#text").load("http://localhost:8080")
})

$("#get-btn").click(function(){
    $.get("http://localhost:8080",function(data,status){
        alert("data " + data+ "\nstatus " + status)
    })
})

$("#post-btn").click(function(){
    $.get("http://localhost:8080",function(data,status){
        alert("data " + data+ "\nstatus " + status)
    })
})