var test = require('tape');
var logic = require('./logic');



/* The Test Of addTodo Function (start-test)*/
test('Example test', function(t) {
  var actuall =logic.addTodo([],{description:"Ahmed"});
  var expected=[{description:"Ahmed",id:1,done:false}];
  t.deepEqual(expected,actuall,"The the two Objects should be equal");
    t.end();
  });
  test('Example test', function(t) {
    var actuall =logic.addTodo([],);
    var expected="Please Enter Anything";
    t.deepEqual(expected,actuall,"The the two Objects should be equal");
      t.end();
    });
  test('Example test', function(t) {
    var actuall =logic.addTodo([],"string");
    var expected="Please Don't Enter string Just Object";
    t.deepEqual(expected,actuall,"The the two Objects should not be equal");
    t.end();
  });
test('Example test', function(t) {
  var actuall =logic.addTodo([],function(e){});
var expected="Please Don't Enter function Just Object";
t.deepEqual(expected,actuall,"The the two Objects should not be equal");
  t.end();
});
test('Example test', function(t) {
  var actuall =logic.addTodo([],true);
var expected="Please Don't Enter boolean Just Object";
t.deepEqual(expected,actuall,"The the two Objects should not be equal");
  t.end();
});
test('Example test', function(t) {
  var actuall =logic.addTodo([],5);
var expected="Please Don't Enter Number Just Object";
t.deepEqual(expected,actuall,"The the two Objects should not be equal");
  t.end();
});



/* The Test Of addTodo Function (end-test)*/

// The Test Of  delete Function (start-test) 
var todo = [{
  id: 1,
  description: 'task',
  done: false,
},
{
  id: 2,
  description: 'task',
  done: false,
},
];

test('onDelete', function(t) {
var actual = logic.deleteTodo(todo, 1);
var expected = [{
  id: 2,
  description: 'task',
  done: false,
}];
t.deepEqual(actual, expected, "deleted");
t.end();
});


test('onDelete', function(t) {
var actual = logic.deleteTodo(todo, 2);
var expected = [{
  id: 1,
  description: 'task',
  done: false,
}];
t.deepEqual(actual, expected, "deleted");
t.end();
});

// The Test Of  delete Function (end-test)
=======




/* The Test Of markTodo Function (start-test)*/



test('Example test', function(t) {
  var arr = [{
    id: 1,
    description: 'Task',
    done: true}];

  var actuall =logic.markTodo(arr,1);
  var expected = [{id: 1,description:'Task',done: false}];
  t.deepEqual(expected,actuall,"The note is marked");
  t.end();
});


test("markTodo function", function(t) {
  var arr = [{
  id: 0,
  description: 'first todo',
  done: false
  },
  {
  id: 1,
  description: 'second todo',
  done: false
  },
  {
  id: 2,
  description: 'third todo',
  done: false
  }
  ];
  var actual = logic.markTodo(arr, 2);
  var expected = [{
  id: 0,
  description: 'first todo',
  done: false
  },
  {
  id: 1,
  description: 'second todo',
  done: false
  },
  {
  id: 2,
  description: 'third todo',
  done: true
  }
  ];
  
  t.deepEqual(actual, expected, 'second marked');
  t.end();
      
});






/* The Test Of markTodo Function (end-test)*/

























