const store = require('../.././store')
const listOfCards = require('../templates/lists.handlebars')
const showListPartial = require('../templates/list-partial.handlebars')
const { showListMessage } = require('../messages')

const onCreateListSuccess = function (data) {
  showListMessage("Here's your list!")
  const listPartialHtml = showListPartial(data.list)
  $('#list-create-modal').modal('hide')
  $('#lists-container').append(listPartialHtml)
  // console.log('onCreateListSuccess ran. Data is :', data)
}

const onCreateListFailure = function (_error) {
  showListMessage('Error on creating List', 'failure')
  // console.error('onCreateListFailure ran. Error is :', error)
}

const onIndexListSuccess = function (data) {
  const listGrid = listOfCards({
    lists: data.lists
  })
  $('#lists-container').html(listGrid)
  // console.log('onIndexSuccesList ran. Data is :', data.lists)
}

const onIndexListFailure = function (_error) {
  showListMessage('Error on getting index of Lists', 'failure')
  // console.error('onIndexListFailure ran. Error is :', error)
}

const onShowListSuccess = function (data) {
  showListMessage('Show list')
  store.currentList = data.list
  // console.log('onCreateListSuccess ran. Data is :', data)
}

const onShowListFailure = function (_error) {
  showListMessage('Error on getting list', 'failure')
  // console.error('onShowListFailure ran. Error is :', error)
}

const onUpdateListSuccess = function (id, data) {
  showListMessage('list successfully updated')
  $(`#list-edit-modal-${id}`).modal('hide')
  $(`list-card[data-id="${id}"] .card-title`).text(data.list.title)
  $('body').removeClass('modal-open').css('padding-right', '')
  $('.modal-backdrop').remove()

  // console.log('list successfully updated')
}

const onUpdateListFailure = function (_error) {
  showListMessage('Error on updating list', 'failure')
  // console.error('onUpdateListFailure ran. Error is :', error)
}

const onDeleteListSuccess = function (id) {
  showListMessage('List successfully deleted')
  $(`.list-card[data-id="${id}"]`).remove()
  // console.log('List successfully deleted')
}

const onDeleteListFailure = function (_error) {
  showListMessage('Error on deleting list', 'failure')
  // console.error('onDeleteListFailure ran. Error is :', error)
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
