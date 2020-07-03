const showListPartial = require('../templates/list-partial.handlebars')

const onCreateGrocerySuccess = function (data) {
  $('#list-message').text("Here's your item!")
  $('#list-message').removeClass()
  $('#list-message').addClass('success')
  const listPartialHtml = showListPartial(data.list)
  $(`.list-card[data-id="${data.list._id}"]`).replaceWith(listPartialHtml)
  console.log('onCreateGrocerySuccess ran. Data is :', data)
}

const onCreateGroceryFailure = function (error) {
  $('#list-message').text('Error on creating item')
  $('#list-message').removeClass()
  $('#list-message').addClass('failure')
  console.error('onCreateGroceryFailure ran. Error is :', error)
}

const onUpdateGrocerySuccess = function (data) {
  $('#list-message').text('item successfully updated')
  $('#list-message').removeClass()
  $('#list-message').addClass('success')
  const listPartialHtml = showListPartial(data.list)
  $(`.list-card[data-id="${data.list._id}"]`).replaceWith(listPartialHtml)
  console.log('item successfully updated')
}

const onUpdateGroceryFailure = function (error) {
  $('#list-message').text('Error on updating item')
  $('#list-message').removeClass()
  $('#list-message').addClass('failure')
  console.error('onUpdateGroceryFailure ran. Error is :', error)
}

const onDeleteGrocerySuccess = function () {
  $('#list-message').text('item successfully deleted')
  $('#list-message').removeClass()
  $('#list-message').addClass('success')
  console.log('item successfully deleted')
}

const onDeleteGroceryFailure = function (error) {
  $('#list-message').text('Error on deleting item')
  $('#list-message').removeClass()
  $('#list-message').addClass('failure')
  console.error('onDeleteGroceryFailure ran. Error is :', error)
}

module.exports = {
  onCreateGrocerySuccess,
  onCreateGroceryFailure,
  onDeleteGrocerySuccess,
  onDeleteGroceryFailure,
  onUpdateGrocerySuccess,
  onUpdateGroceryFailure
}
