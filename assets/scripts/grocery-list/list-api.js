'use strict'

const config = require('../../../assets/config')
const store = require('../../../assets/store')

const createList = function () {
  return $.ajax({
    url: config.apiUrl + '/list',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: ''
  })
}

const indexList = function () {
  return Promise.resolve({
    lists: [
      {
        _id: 1,
        title: 'List #1',
        groceries: []
      },
      {
        _id: 2,
        title: 'List #2',
        groceries: ['Gorps']
      },
      {
        _id: 3,
        title: 'List #3',
        groceries: ['Cat food', 'Pizza crust', 'Tokilene', 'Gata safada']
      },
      {
        _id: 2,
        title: 'List #4',
        groceries: ['Ooples', 'Banoonoos']
      }
    ]
  })
  // return $.ajax({
  //   url: config.apiUrl + '/list',
  //   method: 'GET',
  //   headers: {
  //     Authorization: 'Token token=' + store.user.token
  //   }
  // })
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

const updateList = function (data) {
  return $.ajax({
    url: config.apiUrl + '/list/' + store.list._id,
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
