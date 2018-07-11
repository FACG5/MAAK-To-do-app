// Part 1. Fill in any missing parts of the todoFunction object!
// you can access these on todo.todoFunctions
// For part one we expect you to use tdd

var todoFunctions = {
  // todoFunctions.generateId() will give you a unique id
  // You do not need to understand the implementation of this function.
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  //cloneArrayOfObjects will create a copy of the todos array
  //changes to the new array don't affect the original


    cloneArrayOfObjects: function(todos) {
        return todos.map(function(todo) {
            return JSON.parse(JSON.stringify(todo));
        });
  },

  addTodo: function(todos, newTodo) {

    /* Conditions for String , Number , Boolean  ,   Function  ,*/
    if(!newTodo)
     return 'Please Enter Anything';
    if (typeof newTodo === 'number')
      return "Please Don't Enter Number Just Object";
    if (typeof newTodo === 'string')
      return "Please Don't Enter string Just Object";
    if (typeof newTodo === 'boolean')
      return "Please Don't Enter boolean Just Object";
    if (typeof newTodo === 'function')
      return "Please Don't Enter function Just Object";
    if (Array.isArray(newTodo))
      return "Please Don't Enter Array Just Object";
    /* Conditions for String , Number , Boolean  ,   Function  ,*/
    /* Clone A new Array */
    const tempArray = todoFunctions.cloneArrayOfObjects(todos);
    /* Add a id to new ToDo Element */
    newTodo.id = todoFunctions.generateId();
    /* Add a done  to new ToDo Element */
    newTodo.done = false;
    /*Add New To-do Element to Array*/
    return tempArray.concat(newTodo);

    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // returns a new array, it should contain todos with the newTodo added to the end.
    // add an id to the newTodo. You can use the generateId function to create an id.
    // hint: array.concat
  },
  deleteTodo: function(todos, idToDelete) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // return a new array, this should not contain any todo with an id of idToDelete
    // hint: array.filter
    var array = todoFunctions.cloneArrayOfObjects(todos);
    return array.filter(function(item){
      return item.id != idToDelete;
      });
  },
  markTodo: function(todos, idToMark) {
    // should leave the input argument todos unchanged (you can use cloneArrayOfObjects)
    // in the new todo array, all elements will remain unchanged except the one with id: idToMark
    // this element will have its done value toggled
    // hint: array.map
    const tempArray = todoFunctions.cloneArrayOfObjects(todos);
    if(!idToMark)
     return 'Please Enter Anything';
    if (typeof idToMark === 'string')
      return "Please Don't Enter string Just Number";
    if (typeof idToMark === 'boolean')
      return "Please Don't Enter boolean Just Number";
    if (typeof idToMark === 'function')
      return "Please Don't Enter function Just Number";
    if (Array.isArray(idToMark))
      return "Please Don't Enter Array Just Number";
      
    for(var i = 0 ; i < tempArray.length ; i++){
      if(idToMark == tempArray[i].id){
        // convert the boolean done
        tempArray[i].done = !tempArray[i].done;
      }
    }
    return tempArray;
  },

  sortTodos: function(todos, sortFunction) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort
      todos.sort(function(a, b) {
          var A = a.priority;
          var B = b.priority;
          if (A < B) {
              return -1;
          }
          if (A > B) {
              return 1;
          }
          return 0;
      });
      return todos;
  }

};


// Why is this if statement necessary?
// The answer has something to do with needing to run code both in the browser and in Node.js
// See this article for more details:
// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
