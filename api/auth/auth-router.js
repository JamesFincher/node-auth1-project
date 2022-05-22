// Require `checkUsernameFree`, `checkUsernameExists` and `checkPasswordLength`
// middleware functions from `auth-middleware.js`. You will need them here!
const router = require('express').Router();
const aMiddleware = require('./auth-middleware')
const uModel = require('../users/users-model')

const validatedPayload = (req, res, next) => { next() }

router.post('/register', validatedPayload, (req, res, next) => {
  console.log('register hit')
})
router.post('/login', validatedPayload, (req, res, next) => {
  console.log('login hit')
})
router.get('/logout', validatedPayload, (req, res, next) => {
  console.log('logout hit')
})
router.post('/register', validatedPayload, (req, res, next) => {
  console.log('testing')
})

/**

  1 [POST] /api/auth/register { "username": "sue", "password": "1234" }

  response:
  status 200
  {
    "user_id": 2,
    "username": "sue"
  }

  response on username taken:
  status 422
  {
    "message": "Username taken"
  }

  response on password three chars or less:
  status 422
  {
    "message": "Password must be longer than 3 chars"
  }
 */


/**
  2 [POST] /api/auth/login { "username": "sue", "password": "1234" }

  response:
  status 200
  {
    "message": "Welcome sue!"
  }

  response on invalid credentials:
  status 401
  {
    "message": "Invalid credentials"
  }
 */


/**
  3 [GET] /api/auth/logout

  response for logged-in users:
  status 200
  {
    "message": "logged out"
  }

  response for not-logged-in users:
  status 200
  {
    "message": "no session"
  }
 */

 
// Don't forget to add the router to the `exports` object so it can be required in other modules

module.exports = router