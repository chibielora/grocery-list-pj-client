'use strict'

const api = require('./grocery-api.js')
const ui = require('./grocery-ui.js')

const shopping = {
  groceries: [] // Array of current shopping list
}

function addGrocery (e) {
  e.preventDefault()
  // Add new entry to shopping.groceries
  const grocery = document.getElementBy_Id('add-grocery')
  shopping.groceries.push({
    name: grocery.value, // grocery name
    marked: false
  })
  // Remove current add grocery
  grocery.value = ''
  // Redraw the shopping list
  shopping.draw()
  // Save the shopping list to local storage
  shopping.save()
}

function indexList () {
  // Reset the current shopping list first
  const container = document.getElementBy_Id('shopping-list')
  container.innerHTML = ''
  // Rebuild the list
  if (shopping.groceries.length > 0) {
    let row = ''
    let button = ''
    for (const i in shopping.groceries) {
      // grocery name
      row = document.createElement('div')
      row.innerHTML = shopping.groceries[i].name
      // Strike through if grocery is "done"
      if (shopping.groceries[i].done) {
        row.style = 'text-decoration:line-through;'
      }
      container.appendChild(row)

      // Delete button
      row = document.createElement('div')
      button = document.createElement('input')
      button.type = 'button'
      button.value = 'Delete'
      button.dataset._id = i
      button.addEventListener('click', shopping.delete)
      row.appendChild(button)

      // Completed/Not Yet button
      button = document.createElement('input')
      button.type = 'button'
      button.value = shopping.groceries[i].done ? 'Not Yet' : 'Done'
      button.dataset._id = i
      button.addEventListener('click', shopping.toggle)
      row.appendChild(button)
      container.appendChild(row)
    }
  }
}

function saveList () {
  // Init localstorage
  if (localStorage.groceries === undefined) {
    localStorage.groceries = '[]'
  }
  // Save current groceries list to localstorage
  localStorage.groceries = JSON.stringify(shopping.groceries)
}

function loadGrocery () {
  // Init localstorage
  if (localStorage.groceries === undefined) {
    localStorage.groceries = '[]'
  }
  // Load shopping list
  shopping.groceries = JSON.parse(localStorage.groceries)
  // Draw
  shopping.draw()
}

window.addEventListener('load', function () {
  shopping.load()
  document.getElementBy_Id('list-add').addEventListener('submit', shopping.add)
})

function deleteGrocery () {
  if (confirm('Remove selected item?')) {
    shopping.groceries.splice(this.dataset._id, 1)
    // Save
    shopping.save()
    // Redraw
    shopping.draw()
  }
}

function isMarked () {
// Toggle grocery status
  const _id = this.dataset._id
  shopping.groceries[_id].done = !shopping.groceries[_id].done
  // Save
  shopping.save()
  // Redraw
  shopping.draw()
}

module.exports = {
  addGrocery,
  indexList,
  saveList,
  loadGrocery,
  deleteGrocery,
  isMarked

}
