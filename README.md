# LAB - 13

## Bearer Auth Lab

### Author: Pratiibh Bassi

### Links and Resources
* [submission PR](http://xyz.com)
* [travis](http://xyz.com)


#### Documentation
* [api docs](http://xyz.com) (API servers)
* [jsdoc](http://xyz.com) (Server assignments)

### Modules#### 
#### `index.js` starts app by running `node index.js`
#### `app.js` where all the `app.use` lives in; required in `index.js`
#### `404.js` 404 not found error
#### `500.js` 500 server error
#### `testRoutes.js` returns messages upon successful login to user with role
#### `users-model.js` extends from class Model in `mongo.js` with `products-schema.js` required in
#### `roles-models.js` extends from Model in `mongo.js` with `todo-schema.js` required in

##### Exported Values and Methods
#### `read` read entry in database
#### `create` create something
#### `update` update something
#### `delete` delete something

### Setup
#### `.env` requirements
* `PORT` - 3000
* `MONGODB_URI` - MONGODB_URI=mongodb://localhost:27017/testingLab
* `SECRET` - Random string


#### Running the app
* `nodemon`
* `mongod`
* `mongo`
* Endpoint: POST username:password
  * Returns a token
* Endpoint: POST bearer 
  * Returns a token

  
#### Tests
* `npm test` to run test

