require('dotenv').config()
const express = require('express')
const usersRouter = require('./users/users-router')
const loginRouter = require('./users/login-router')
const registerRouter = require('./users/register-router')

const server = express()

server.use(express.json())

server.use('/api/users', usersRouter)
server.use('/api/login', loginRouter)
server.use('/api/register', registerRouter)

module.exports = server