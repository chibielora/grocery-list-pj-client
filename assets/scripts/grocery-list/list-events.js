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

const onIndexList = (event) => {
  event.preventDefault()
  api.indexList()
    .then(ui.onIndexListSuccess)
    .catch(ui.onIndexListFailure)
}

const onUpdateList = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  api.updateList(id, data)
    .then(() => ui.onUpdateListSuccess(id, data))
    .then(() => onIndexList(event))
    .catch(ui.onUpdateListFailure)
}

const onDeleteList = (event) => {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteList(id)
    .then(() => ui.onDeleteListSuccess(id))
    .catch(ui.onDeleteListFailure)
}

// Still not defined

const addHandlers = () => {
  const frontPage = $('#front-page')
  frontPage.on('submit', '#list-create-form', onCreateList)
  // frontPage.on('click', '#indexListButton', onIndexList)
  frontPage.on('submit', '.list-edit-form', onUpdateList)
  frontPage.on('click', '.list-delete-button', onDeleteList)
}

module.exports = {
  addHandlers
}
