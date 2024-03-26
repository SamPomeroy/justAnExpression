const express = require('express')
const router = express.Router()
const uuidv4 = require("uuid").v4

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

router.get("/get-all-todos", (req, res)=>{
    res.json(todos)
})
router.get(`/get-todo-by-id/:id`, (req, res)=>{
    const testID = req.params.id
    let todoTask
    for(let item of todos){
        if(item.id === testID){
            todoTask = item
        }
    }
    if(!todoTask){
        res.end({message: "The Todo ID you are looking for does not exist, please check the ID"})
    }else{
        res.json(todoTask)
    }

    res.json({hello})
})
router.get("/get-todos-by-done/:done", (req, res)=>{
    const testDone = req.params.done
    const newDoneArray = todos.filter((task) => task.done === testDone)
    res.json(newDoneArray)
})
router.get("/create-new-todo", (req, res)=>{
    const newTodo = {
        "id": `${uuidv4()}`,
        "todo": `${req.body.todo}`,
        "done": "false"
    }
    todos.push(newTodo)
    res.json(todos)
})


module.exports = router
