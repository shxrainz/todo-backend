const express =  require('express');
const res = require('express/lib/response');
const router = express.Router();

const todo = [
    {
        id:1,
        todo: 'Brisk Walk',
        status:'active'
    }
]

//Get All Todo List
router.get('/todoList',(req,res) => {
    res.json(todo)
});

//Get Single Todo Item
router.get('/item/:id',(req,res) => {
    const found = todo.some(todo => todo.id === parseInt(req.params.id))
    if(found){
        res.json(todo.filter(todo => todo.id === parseInt(req.params.id)))
    } else{
        res.status(400).json({msg: `Todo item not found with the id: ${req.params.id}` })
    }
    
});

//Create Todo
router.post('/addTodo',(req,res) => {
    const newTodo = {
        "id": 2,
        "todo": req.body.todo,
        "status": "active"
    }

    if(!newTodo.todo){
        res.status(400).json({msg: `Please insert todo item` })
    }

    res.send(req.body)

});

//Update Todo
router.put('/item/:id',(req,res) => {
    const found = todo.some(todo => todo.id === parseInt(req.params.id))
    if(found){
        const updateTodo = req.body;
        
    } else{
        res.status(400).json({msg: `Todo item not found with the id: ${req.params.id}` })
    }
    
});


module.exports = router;