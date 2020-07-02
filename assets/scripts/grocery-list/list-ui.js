const store = require('../.././store')
const listOfCards = require('../templates/lists.handlebars')

const onCreateListSuccess = function (data) {
  $('#list-message').text("Here's your list!")
  $('#list-message').removeClass()
  $('#list-message').addClass('success')
  console.log('onCreateListSuccess ran. Data is :', data)
}

const onCreateListFailure = function (error) {
  $('#list-message').text('Error on creating List')
  $('#list-message').removeClass()
  $('#list-message').addClass('failure')
  console.error('onCreateListFailure ran. Error is :', error)
}

const onIndexListSuccess = function (data) {
  const listGrid = listOfCards({
    lists: data.lists
  })
  $('#lists-container').html(listGrid)
  console.log('onIndexSuccesList ran. Data is :', data.lists)
}

const onIndexListFailure = function (error) {
  $('#list-message').text('Error on getting index of Lists')
  $('#list-message').removeClass()
  $('#list-message').addClass('failure')
  console.error('onIndexListFailure ran. Error is :', error)
}

const onShowListSuccess = function (data) {
  $('#list-message').text('Show list')
  $('#list-message').removeClass()
  $('#list-message').addClass('success')
  store.currentList = data.list
  console.log('onCreateListSuccess ran. Data is :', data)
}

const onShowListFailure = function (error) {
  $('#list-message').text('Error on getting list')
  $('#list-message').removeClass()
  $('#list-message').addClass('failure')
  console.error('onShowListFailure ran. Error is :', error)
}

const onDeleteListSuccess = function () {
  $('#list-message').text('List successfully deleted')
  $('#list-message').removeClass()
  $('#list-message').addClass('success')
  console.log('List successfully deleted')
}

const onDeleteListFailure = function (error) {
  $('#list-message').text('Error on deleting list')
  $('#list-message').removeClass()
  $('#list-message').addClass('failure')
  console.error('onDeleteListFailure ran. Error is :', error)
}

const onUpdateListSuccess = function () {
  $('#list-message').text('list successfully updated')
  $('#list-message').removeClass()
  $('#list-message').addClass('success')
  console.log('list successfully updated')
}

const onUpdateListFailure = function (error) {
  $('#list-message').text('Error on updating list')
  $('#list-message').removeClass()
  $('#list-message').addClass('failure')
  console.error('onUpdateListFailure ran. Error is :', error)
}

module.exports = {
  onCreateListSuccess,
  onCreateListFailure,
  onIndexListSuccess,
  onIndexListFailure,
  onShowListSuccess,
  onShowListFailure,
  onDeleteListSuccess,
  onDeleteListFailure,
  onUpdateListSuccess,
  onUpdateListFailure
}
