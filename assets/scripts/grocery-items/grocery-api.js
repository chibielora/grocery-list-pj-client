'use strict'

const config = require('../../config')
const store = require('../../store')

const createGroceryItem = function (data) {
  return $.ajax({
    url: config.apiUrl + `/list/${data.listId}/grocery`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const updateGroceryItem = function (listId, id, data) {
  return $.ajax({
    url: config.apiUrl + `/list/${listId}/grocery/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
const deleteGroceryItem = function (listId, id) {
  return $.ajax({
    url: config.apiUrl + `/list/${listId}/grocery/${id}`,
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
