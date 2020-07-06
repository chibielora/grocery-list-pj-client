function showSystemMessage (message, type = 'success') {
  $('#system-message').show()
  $('#system-message').text(message)
  $('#system-message').removeClass()
  $('#system-message').addClass(type)
  setTimeout(() => {
    $('#system-message').fadeOut(500)
  }, 800)
}

function showListMessage (message, type = 'success') {
  $('#list-message').show()
  $('#list-message').text(message)
  $('#list-message').removeClass()
  $('#list-message').addClass(type)
  setTimeout(() => {
    $('#list-message').fadeOut(500)
  }, 800)
}

module.exports = {
  showSystemMessage,
  showListMessage
}
