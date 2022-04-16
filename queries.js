const getTodos = "SELECT * FROM todo";
const getTodoById = "SELECT * FROM todo WHERE id = $1";
const addTodo = "INSERT INTO todo (todo,status) VALUES ($1,$2)";
const deleteTodo = "DELETE FROM todo WHERE id = $1";
const updateTodo = "UPDATE todo SET todo = $1 WHERE id = $2";
const updateCompletedTodo = "UPDATE todo SET status = 0 WHERE id = $1";

module.exports = {
    getTodos,
    getTodoById,
    addTodo,
    deleteTodo,
    updateTodo,
    updateCompletedTodo
}
