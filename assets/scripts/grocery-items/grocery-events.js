'use strict'
const getFormFields = require('../../../lib/get-form-fields')

const api = require('./grocery-api.js')
const ui = require('./grocery-ui.js')

const onCreateGrocery = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.createGroceryItem(data)
    .then(ui.onCreateGrocerySuccess)
    .catch(ui.onCreateGroceryFailure)
}

const onMarkGrocery = function (event) {
  event.preventDefault()
  const target = $(event.target)
  const listId = target.parents('.list-card').data('id')
  const id = target.data('id')
  const data = {
    grocery: {
      marked: true
    }
  }
  api.updateGroceryItem(listId, id, data)
    .then(ui.onUpdateGrocerySuccess)
    .catch(ui.onUpdateGroceryFailure)
}

const onUnmarkGrocery = function (event) {
  event.preventDefault()
  const target = $(event.target)
  const listId = target.parents('.list-card').data('id')
  const id = target.data('id')
  const data = {
    grocery: {
      marked: false
    }
  }
  api.updateGroceryItem(listId, id, data)
    .then(ui.onUpdateGrocerySuccess)
    .catch(ui.onUpdateGroceryFailure)
}

const addHandlers = function () {
  const frontPage = $('#front-page')
  frontPage.on('submit', '.grocery-create-form', onCreateGrocery)
  frontPage.on('click', '.grocery-mark-button', onMarkGrocery)
  frontPage.on('click', '.grocery-unmark-button', onUnmarkGrocery)
}

module.exports = {
  onCreateGrocery,
  addHandlers
}
