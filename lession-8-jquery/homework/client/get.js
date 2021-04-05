// GET
$("#show-text-btn").click(function(){
    alert($("#text").text())
})

$("#show-html-btn").click(function(){
    alert($("#text").html())
})

$("#show-value-btn").click(function(){
    alert($("#name-input").val())
})

$("#show-attribute-btn").click(function(){
    alert($("#text").attr("style"))
})