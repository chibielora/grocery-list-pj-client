'use strict'

const config = require('../../config')
const store = require('../../store')

const createGroceryItem = function (listId) {
  return $.ajax({
    url: config.apiUrl + `/list/${listId}/grocery`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

const updateGroceryItem = function (data) {
  return $.ajax({
    url: config.apiUrl + `/grocery/` + store.item._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const deleteGroceryItem = function (id) {
  return $.ajax({
    url: config.apiUrl + `/grocery/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGroceryItem,
  updateGroceryItem,
  deleteGroceryItem
}
