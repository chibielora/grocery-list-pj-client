'use strict'

const store = require('../.././store')
const listApi = require('../grocery-list/list-api')
const listUi = require('../grocery-list/list-ui')
const showFrontPageTemplate = require('../templates/front-page.handlebars')

const showFrontPage = function (signedIn) {
  const frontPage = showFrontPageTemplate({signedIn: signedIn})
  $('#front-page').html(frontPage)
}

const signUpSuccess = function () {
  $('form').trigger('reset')
  $('#system-message').text('Signed up successfully')
  $('#system-message').removeClass()
  $('#system-message').addClass('success')
}

const signUpFailure = function () {
  $('#system-message').text('Error on sign up')
  $('#system-message').removeClass()
  $('#system-message').addClass('failure')
}

const signInSuccess = function (data) {
  $('form').trigger('reset')
  $('#system-message').text('Signed in successfully')
  $('#system-message').removeClass()
  $('#system-message').addClass('success')
  showFrontPage(true)
  store.user = data.user
  listApi.indexList()
    .then(listUi.onIndexListSuccess)
    .catch(listUi.onIndexListFailure)
}

const signInFailure = function () {
  $('#system-message').text('Error on sign in')
  $('#system-message').removeClass()
  $('#system-message').addClass('failure')
}

const signOutSuccess = function () {
  $('#system-message').text('Signed out successfully')
  $('#system-message').removeClass()
  $('#system-message').addClass('success')
  $('form').trigger('reset')
  showFrontPage(false)
  store.user = null
}

const signOutFailure = function () {
  $('#system-message').text('Error on sign out')
  $('#system-message').removeClass()
  $('#system-message').addClass('failure')
}

const changePasswordSuccess = function () {
  $('form').trigger('reset')
  $('#system-message').text('Changed password successfully')
  $('#system-message').removeClass()
  $('#system-message').addClass('success')
}

const changePasswordFailure = function () {
  $('#system-message').text('Error on change password')
  $('#system-message').removeClass()
  $('#system-message').addClass('failure')
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
