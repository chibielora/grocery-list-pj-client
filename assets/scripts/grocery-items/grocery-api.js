'use strict'

const config = require('../../config')
const store = require('../../store')

const createGroceryItem = function (id) {
  return $.ajax({
    url: config.apiUrl + `/list/${id}/grocery`,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

const indexGroceryItem = function () {
  return $.ajax({
    url: config.apiUrl + '/grocery',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showGroceryItem = function (id) {
  return $.ajax({
    url: config.apiUrl + `/grocery/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGroceryItem = function (data) {
  return $.ajax({
    url: config.apiUrl + '/item/' + store.item._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const deleteGroceryItem = function (id) {
  return $.ajax({
    url: config.apiUrl + `/item/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGroceryItem,
  indexGroceryItem,
  showGroceryItem,
  updateGroceryItem,
  deleteGroceryItem
}
