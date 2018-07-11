// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
   /* { id: -3, description: 'first todo' },
    { id: -2, description: 'second todo' },
    { id: -1, description: 'third todo' },*/
  ]; // this is our initial todoList


    if (localStorage.getItem("state")) {
        state = JSON.parse(localStorage.getItem("state"))
    }

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    // you will need to use addEventListener

    // add span holding description
    var span1 = document.createElement('span');
    span1.classList.add("task")
    span1.textContent = todo.description;

    if(todo.done){
      span1.classList.add("done");
      todoNode.classList.add('done1');

    } else {
      span1.classList.remove("done");
      todoNode.classList.remove('done1');

    }




    todoNode.appendChild(span1);
   var span2 = document.createElement('span');
span2.classList.add("fa-check-circle");
  span2.classList.add("icon");
  span2.classList.add("far");
  span2.addEventListener('click', function(event){
    var newState = todoFunctions.markTodo(state, todo.id);
    update(newState);
  });
    todoNode.appendChild(span2);

    // span2.addEventListener('click', function(event){

    // });

    var span3 = document.createElement('span');
    span3.classList.add("fa-trash-alt");
    span3.classList.add("icon");
    span3.classList.add("far");    
    span3.addEventListener('click', function(event){
      var newState = todoFunctions.deleteTodo(state, todo.id);
     /* confirm("Are you sure for this action !!");*/
if(confirm( "Are you sure for this action !!")){
  update(newState);
  
}
    });
    todoNode.appendChild(span3);



    /*
    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);
    */
    // add markTodo button
  
    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?
      event.preventDefault();
      var inp = this.getElementsByClassName("input")[0];
      var description1 = inp.value; // event.target ....

      // hint: todoFunctions.addTodo
      var obj = {};
      if(description1.trim()===''){
        alert("Spaces not allow !!");
      }else{
      obj.description = description1;

      var newState = todoFunctions.addTodo(state, obj) // ?? change this!
      update(newState);
      inp.value='';
      }
      
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.insertBefore(createTodoNode(todo),todoListNode.childNodes[0]);
    });

      localStorage.setItem("state", JSON.stringify(state));
      // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();