'use strict'

const config = require('../../config')
const store = require('../../store')

const createGroceryList = function () {
  return $.ajax({
    url: config.apiUrl + '/list',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

const indexGroceryList = function () {
  return $.ajax({
    url: config.apiUrl + '/list',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showGroceryList = function (id) {
  return $.ajax({
    url: config.apiUrl + `/list/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateGroceryList = function (data) {
  return $.ajax({
    url: config.apiUrl + '/list/' + store.list._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const deleteGroceryList = function (id) {
  return $.ajax({
    url: config.apiUrl + `/list/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createGroceryList,
  indexGroceryList,
  showGroceryList,
  updateGroceryList,
  deleteGroceryList
}
