# Express Todo

**ONLY** Add the following to your `.gitignore` file: `node_modules\*\*\*`

## Create an Express Simple CR App

1. Make the following updates to your backend:
    - Make a validation check in your '/create-new-todo' route that makes sure a todo is unique, if a todo is a repeat respond with a message, "Todo already exists."
    - Make a PUT "/update-todo" route that updates a todo by id and responds with the updated todo object
    - Make a PUT "/mark-done" route that updates the `done` property of a todo and responds with wether that todo was marked complete or incomplete.
    - Make a DELETE "/delete-todo" route that deletes a todo by id (the id here would probably be best to be hidden in the body). A response will read that the item was deleted.
    - After you finish with your backend, write comments in your code, explaining all of the lines as if you are teaching someone fresh off of learing JavaScript how to build a backend server. 
    
## Stretch Goal
    - Update the todo array and routes to accomodate for a new key call 'priority'. This will be a number between 1-5 that suggests the priority of the todo (1 being most important).
    - Make a new GET request with the endpoint of "/get-todo-by-priority/:priority" that takes a param of 'high' (ascending priority) or 'low' (descending priority) and returns a sorted array of todos ordered by priority level. 
