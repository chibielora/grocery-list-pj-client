'use strict'

const store = require('../.././store')

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
  $('#logged-out-screen').hide()
  $('#logged-in-screen').show()
  store.user = data.user
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
  $('#logged-in-screen').hide()
  $('#logged-out-screen').show()
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
