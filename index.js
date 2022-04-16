const express =  require('express')
const app = express();
const logger = require('./middleware/logger')

//Init middleware
app.use(logger)

//Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/todo', require('./routes/api/todo'))

const PORT = process.env.PORT || 5000

app.listen(PORT,() => console.log(`Server started on port ${PORT}`));