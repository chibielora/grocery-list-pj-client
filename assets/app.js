'use strict'
const $ = require('jquery')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./scripts/auth/events')
const groceryListEvents = require('./scripts/grocery-list/list-events')
// const groceryItemEvents = require('./scripts/grocery-items/grocery-events')
const showFrontPage = require('./scripts/templates/front-page.handlebars')

$(() => {
  // your JS code goes here

  const frontPage = showFrontPage({
    signedIn: false
  })

  $('#front-page').html(frontPage)
  authEvents.addHandlers()
  groceryListEvents.addHandlers()
  // groceryItemEvents.addHandlers()
})

// USER newdb PW 12
// TOKEN AND ID FOR LISTS AND GROCERIES
// TOKEN 68108c005a9f48101e36b65974244b0a
// LIST one ID 5efdf1c46275fe0c8def7594 / OWNER: 5efdf1526275fe0c8def7593
// GROCERIES ONE
// Grapes ID 5efdf3626275fe0c8def7597
// apples ID 5efdf3746275fe0c8def7598
// bread ID 5efdf37f6275fe0c8def7599
// List two ID 5efdf1cf6275fe0c8def7595 / OWNER: 5efdf1526275fe0c8def7593
// GROCERIES TWO
// List three ID  5efdf1d86275fe0c8def7596 / OWNER: 5efdf1526275fe0c8def7593
// GROCERIES THREE
