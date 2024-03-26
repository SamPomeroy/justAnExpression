//Kyles codeDrop from class-my original code (which works) is in ogTodoRouter

// links router and uuid to express
const express = require('express')
const router = express.Router()
const uuidv4 = require('uuid').v4

// array of (todo) objects
let todos = [
    {
      id: "haf24jd",
      todo: "do laundry",
      done: "false"
    },
    {
      id: "jp2nkl2",
      todo: "wash dishes",
      done: "true"
    }
  ]
  // route for listing all todos
  router.get('/get-all-todos', (req, res)=>{
    res.json(todos)
  })
  // route for getting todo by id
  router.get('/get-todo-by-id/:id', (req, res)=>{
    const {id} = req.params
    const foundId = todos.find(item => item.id === id)
    if(foundId){
        res.json(foundId)
        // {
        //     foundId: {
        //         {
        //             id: "jp2nkl2",
        //             todo: "wash dishes",
        //             done: "true"
        //           }
        //     }
        // }
    }else{
        // response if id not found
        res.json({message: "The Todo ID you are looking for does not exist, please check the ID"})
    }
  })
  // route to get completed todos 
  router.get('/get-todos-by-done/:done', (req, res)=>{
    const {done} = req.params
    const newDoneArray = todos.filter(item => item.done === done)
    res.json(newDoneArray)
  })
  // route for creating new todo
  router.post('/create-new-todo', (req, res) =>{
    const {todo} = req.body
    const newTodo = {
        todo,
        id: uuidv4(),
        done: 'false'
    }
    // checks to see if new todo already exists
    if(todo === newTodo.todo){
        res.json({message: "Todo already exists"})
    // adds new todo to todos    
    }else{
        todos.push(newTodo)
        res.json(todos)
    }
  })
  // route for updating todo
  router.put("/update-todo", (req, res)=>{
    
    const {id, todo, done} = req.body
    const updatedTodo = todos.find(item => item.id === id)
    // checks if todo exists & returns message if not
    if(!updatedTodo){
        res.json({message: "todo not found, cannot update"})
    // if todo exists, updates todo   
    }else{
        if(todo || done){
            if(todo){
                updatedTodo.todo = todo
            }
            if(done){
                updatedTodo.done = done
            }
            res.json({updatedTodo})
        // if todo or done is blank returns message
        }else{
            res.json({message: "no todo or done, cannot update"})
        }
    }
  })
  // checks to see if done is true or false
  router.put("/mark-done", (req, res)=>{
    const {id, todo, done} = req.body
    const isDone = todos.find(item => item.id === id)
        // if done = true, returns message saying complete
        if(isDone && done === "true"){
            res.json({message: "todo complete"})
        }
        // if done = false, returns message saying incomplete
        if(isDone && done === "false"){
            res.json({message: "todo incomplete"})
        // if no 'done', returns message for not marked    
        }else{
            res.json({message: "todo not marked complete or incomplete"})
        }
    })
    // delete todo by id
    router.delete("/delete-todo/:id", (req, res)=>{
        const {id} = req.params
        const deleteTodo = todos.filter(item => item.id !== id)
        // if id not found, returns message saying not found
        if(deleteTodo.length === todos.length){
           res.json({message: "Todo not found, cannot delete"})
        // if id found, deletes object and returns message saying item deleted
        }else{
            todos = deleteTodo
            res.json({message: "item deleted"})
        }
    })

  

module.exports = router


// notes from class
// obj = {
//     firstName: "Kyle",
//     lastName: "Rose",
//     state: "TN"
// }

// const {firstName, lastName, state} = obj

// console.log(lastName)

// const newObj = {
//     lastName : "Rose"
// }


















