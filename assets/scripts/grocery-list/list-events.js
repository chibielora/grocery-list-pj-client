'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./list-api.js')
const ui = require('./list-ui.js')

const onCreateList = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.createList(data)
    .then(ui.onCreateListSuccess)
    .catch(ui.onCreateListFailure)
}

const onGetList = (event) => {
  event.preventDefault()
  api.getList()
    .then(ui.getListSuccess)
    .catch(ui.onFailure)
}

const onIndexList = (event) => {
  event.preventDefault()
  api.indexList()
    .then(ui.onIndexListSuccess)
    .catch(ui.onIndexListFailure)
}

const onUpdateList = (event) => {
  event.preventDefault()
  api.updateList()
    .then(ui.onUpdateListSuccess)
    .cath(ui.onUpdateListFailure)
}

const onClearList = (event) => {
  event.preventDefault()
  ui.clearList()
}

const onDeleteList = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteList(id)
    .then(() => ui.onDeleteListSuccess(id))
    .catch(ui.failure)
}

// Still not defined

const addHandlers = () => {
  const frontPage = $('#front-page')
  frontPage.on('submit', '#list-create-form', onCreateList)
  frontPage.on('click', '#getListButton', onGetList)
  frontPage.on('click', '#indexListButton', onIndexList)
  frontPage.on('click', '#updateListButton', onUpdateList)
  frontPage.on('click', '#clearListButton', onClearList)
  frontPage.on('click', '.list-delete-button', onDeleteList)
}

module.exports = {
  addHandlers
}
