'use strict'
import $ from 'jquery'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./scripts/auth/events')
const groceryListEvents = require('./scripts/grocery-list/list-events')
$(() => {
  // your JS code goes here
  authEvents.addHandlers()
  groceryListEvents.addHandlers()
  $('#logged-in-screen').hide()
})
