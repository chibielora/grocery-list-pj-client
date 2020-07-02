'use strict'

let apiUrl
const apiUrls = {
  production: 'https://git.heroku.com/pure-plateau-44175.git',
  development: 'https://git.heroku.com/boiling-woodland-38104.git'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
