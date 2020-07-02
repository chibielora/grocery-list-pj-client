'use strict'

const api = require('./list-api.js')
const ui = require('./list-ui.js')

const onCreateList = function (event) {
  event.preventDefault()
  api.createList()
    .then(ui.onCreateListSuccess)
    .catch(ui.onCreateListFailure)
}

const onGetList = (event) => {
  event.preventDefault()
  api.getList()
    .then(ui.getListSuccess)
    .catch(ui.failure)
}

const onIndexList = (event) => {
  event.preventDefault()
  api.indexList()
    .then(ui.indexListSuccess)
    .catch(ui.indexListFailure)
}

const onUpdateList = (event) => {
  event.preventDefault()
  api.updateList()
    .then(ui.updateListSuccess)
    .cath(ui.updateListFailure)
}

const onClearList = (event) => {
  event.preventDefault()
  ui.clearList()
}

const onDeleteList = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteList(id)
    .then(() => ui.deleteListSuccess(id))
    .catch(ui.failure)
}

// Still not defined

const addHandlers = () => {
  const listHandlers = $('#show-list')
  listHandlers.on('click', '#createListButton', onCreateList)
  listHandlers.on('click', '#getListButton', onGetList)
  listHandlers.on('click', '#indexListButton', onIndexList)
  listHandlers.on('click', '#updateListButton', onUpdateList)
  listHandlers.on('click', '#clearListButton', onClearList)
  listHandlers.on('click', '#delete-button', onDeleteList)
}

module.exports = {
  addHandlers
}
