'use strict'

const store = require('../../store')
const listApi = require('../grocery-list/list-api')
const listUi = require('../grocery-list/list-ui')
const showFrontPageTemplate = require('../templates/front-page.handlebars')
const { showSystemMessage } = require('../messages')

const showFrontPage = function (signedIn) {
  const frontPage = showFrontPageTemplate({signedIn: signedIn})
  $('#front-page').html(frontPage)
}

const signUpSuccess = function () {
  $('form').trigger('reset')
  showSystemMessage('Signed up successfully')
}

const signUpFailure = function () {
  showSystemMessage('Error on sign up', 'failure')
}

const signInSuccess = function (data) {
  $('form').trigger('reset')
  showSystemMessage('Signed in successfully')
  showFrontPage(true)
  store.user = data.user
  listApi.indexList()
    .then(listUi.onIndexListSuccess)
    .catch(listUi.onIndexListFailure)
}

const signInFailure = function () {
  showSystemMessage('Error on sign in', 'failure')
}

const signOutSuccess = function () {
  showSystemMessage('Signed out successfully')
  showFrontPage(false)
  store.user = null
}

const signOutFailure = function () {
  showSystemMessage('Error on sign out', 'failure')
}

const changePasswordSuccess = function () {
  $('form').trigger('reset')
  showSystemMessage('Changed password successfully')
}

const changePasswordFailure = function () {
  showSystemMessage('Error on change password', 'failure')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
