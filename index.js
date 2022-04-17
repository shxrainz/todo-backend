const express =  require('express')
const app = express();
const logger = require('./middleware/logger')
const cors = require('cors')

//Init middleware
app.use(logger)
app.use(cors())

//Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/todo', require('./routes/api/todo'))

const PORT = process.env.PORT || 5000

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));