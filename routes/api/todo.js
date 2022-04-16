const express = require('express');
const res = require('express/lib/response');
const router = express.Router();
const pool = require('../../db');
const queries = require('../../queries')

//Get All Todo List
router.get('/todoList', async (req, res) => {
    await pool.query(queries.getTodos, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })

});

//Get Single Todo Item
router.get('/item/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    await pool.query(queries.getTodoById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows)
    })
});

//Create Todo
router.post('/addTodo', async (req, res) => {
    const { todo, status } = req.body
    const addTodo = await pool.query(queries.addTodo, [todo, status], (error, results) => {
        if (error) throw error;
        res.status(201).json({ msg: "Todo item created successfully" })
    })
});

//Update Todo
router.put('/item/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    const { todo } = req.body;
    await pool.query(queries.getTodoById, [id], (error, results) => {
        const noTodoFound = !results.rows.length;
        if(noTodoFound){
            res.json({ msg: `Todo item does not exist in the database` })
        }

        pool.query(queries.updateTodo, [todo,id], (error, results) => {
            if (error) throw error;
            res.status(200).json({ msg: "Todo item updated successfully" })
        })
    })
});

//Update Completed Todo
router.put('/item/completed/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    await pool.query(queries.getTodoById, [id], (error, results) => {
        const noTodoFound = !results.rows.length;
        if(noTodoFound){
            res.json({ msg: `Todo item does not exist in the database` })
        }

        pool.query(queries.updateCompletedTodo, [id], (error, results) => {
            if (error) throw error;
            res.status(200).json({ msg: "Todo item updated as completed!" })
        })
    })
});

//Delete Todo Item
router.delete('/item/:id', async (req, res) => {
    const id = parseInt(req.params.id)
    await pool.query(queries.getTodoById, [id], (error, results) => {
        const noTodoFound = !results.rows.length;
        if(noTodoFound){
            res.json({ msg: `Todo item does not exist in the database` })
        }

        pool.query(queries.deleteTodo, [id], (error, results) => {
            if (error) throw error;
            res.status(200).json({ msg: "Todo item deleted successfully" })
        })
    })
});

module.exports = router;