# README

## E-Listed - Your shopping List App

This app's purpose is to keep track of your grocery items. You are able to create, update and delete lists set in your main page, and add and delete items. Also, you can mark and unmark them to your convenience.

### Live APPS

[Live Website](https://chibielora.github.io/grocery-list-pj-client/) | [Heroku App](https://pure-plateau-44175.herokuapp.com/)

### Client Repository

[Client Repo Link](https://github.com/chibielora/grocery-list-pj-client)

### Server Repository

[Server Repo Link](https://github.com/chibielora/grocery-list-pj-server )

## Planning

I firstly finished the backend and had to ocasionally come back to fix my routes. Then I started working on the lists, and once I was able to pull them to the main page and create on the same container, I started working on the items. I used modals to create lists and edit list's names so I wouldn't have to show/hide elements on page. I added buttons to mark/unmark items and delete items inside of these lists, making the interaction easy enough on the main container.

## Technical Information

### Technologies Used

- On the BackEnd:
Express, MongoDB, Node.js, JavaScript, Curl, Heroku, Github

- On the FrontEnd:
Ajax, HTML, CSS, Handlebars, JavaScript, Jquery, Bootstrap, Github
(I was planning on using toastr to handle the notifications maybe in a V2)

### Original Wireframe

![Grocery list Project - First Layout](https://media.git.generalassemb.ly/user/28545/files/4a686f00-b9ec-11ea-8f39-3c2c4dc04416)

### Refactored Wireframe

![Grocery list Project - Refactored Layout](https://i.imgur.com/7qQF8a0.jpg)

### User relationship

![User Relationships](https://media.git.generalassemb.ly/user/28545/files/666c1080-b9ec-11ea-82cc-b5ef9df99003)

### User Stories

- As a user, I want to sign up, log into my list application and log out
- As a user, I want to be able to change password
- As a user, I want to be able to create, name, and edit name on lists
- As a user, I want to add and remove items to my list
- As a user, I want to deactivate and activate my list items
- As a user, I want to share my list so others can see it (Moved to V2)
- As a user, I want to delete my list

### Unsolved problems

- Bootstrap modal shows a white margin on my page on the right side after I update a list name
- I did not implement share button on this version
- I originally had an items counter, but it's not rendering real-time, so I disabled it for now
- Gettin CORS authentication error on live website, not letting me sign up a new user
