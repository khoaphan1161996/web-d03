const API_URL = "http://localhost:8080"

$('#load-btn').click(function() {
    $('#text').load(`${API_URL}/users`)
  })

$('#get-btn').click(function() {
$.get(`${API_URL}/users`, 
function(data, status) {
    console.log("Data: " + data + "\nStatus: " + status)
})
})

$('#post-btn').click(function() {
$.ajax({
    url: `${API_URL}/users`,
    data: JSON.stringify({
        name: 'Hieu'
    }),
    type: 'POST',
    contentType: 'application/json',
    success: function(response) {
        console.log('POST response', response)
    },
    error: function(error) {
        console.log(error)
    }
})
})