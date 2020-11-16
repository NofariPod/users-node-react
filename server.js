const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
const port = 8080 || process.env.PORT

app.use(cors())
app.use(morgan('tiny'))
app.use(bodyParser.json())

app.use('/users', require('./users/usersRouter'))

app.listen(port, () => console.log(`Server is running on port ${port}`))
