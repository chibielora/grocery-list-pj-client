'use strict'

let apiUrl
const apiUrls = {
  production: 'https://pure-plateau-44175.herokuapp.com/',
  development: 'http://localhost:4741'
  // 'https://git.heroku.com/boiling-woodland-38104.git'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
