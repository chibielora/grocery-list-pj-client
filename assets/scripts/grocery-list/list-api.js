'use strict'

const config = require('../../../assets/config')
const store = require('../../../assets/store')

const createList = function (data) {
  return $.ajax({
    url: config.apiUrl + '/list',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const indexList = function () {
  return $.ajax({
    url: config.apiUrl + '/list',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const showList = function (id) {
  return $.ajax({
    url: config.apiUrl + `/list/${id}`,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateList = function (id, data) {
  return $.ajax({
    url: config.apiUrl + `/list/${id}`,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
const deleteList = function (id) {
  return $.ajax({
    url: config.apiUrl + `/list/${id}`,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createList,
  indexList,
  showList,
  updateList,
  deleteList
}
