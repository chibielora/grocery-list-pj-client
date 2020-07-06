const showListPartial = require('../templates/list-partial.handlebars')
const { showListMessage } = require('../messages')

const onCreateGrocerySuccess = function (data) {
  showListMessage("Here's your item!")
  const listPartialHtml = showListPartial(data.list)
  $(`.list-card[data-id="${data.list._id}"]`).replaceWith(listPartialHtml)
  // console.log('onCreateGrocerySuccess ran. Data is :', data)
}

const onCreateGroceryFailure = function () {
  showListMessage('Error on creating item', 'failure')
  // console.error('onCreateGroceryFailure ran. Error is :', error)
}

const onUpdateGrocerySuccess = function (data) {
  const listPartialHtml = showListPartial(data.list)
  $(`.list-card[data-id="${data.list._id}"]`).replaceWith(listPartialHtml)
  // console.log('Got it!')
}

const onUpdateGroceryFailure = function (_error) {
  showListMessage('Error on updating item', 'failure')
  // console.error('onUpdateGroceryFailure ran. Error is :', error)
}

const onDeleteGrocerySuccess = function (id) {
  showListMessage('item successfully deleted')
  $(`.grocery-item[data-id="${id}"]`).remove()
  // console.log('item successfully deleted')
}

const onDeleteGroceryFailure = function (_error) {
  showListMessage('Error on deleting item', 'failure')
  // console.error('onDeleteGroceryFailure ran. Error is :', error)
}

module.exports = {
  onCreateGrocerySuccess,
  onCreateGroceryFailure,
  onDeleteGrocerySuccess,
  onDeleteGroceryFailure,
  onUpdateGrocerySuccess,
  onUpdateGroceryFailure
}
