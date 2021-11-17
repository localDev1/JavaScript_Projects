//JSON.STRINGIFY() ASSIGNMENT
function stringify(){
  var obj = { "name":"Fernando", "LastName": "Perez","age":46, "city":"Mexico City"};
  var myJSON = JSON.stringify(obj);
  document.getElementById("Stringify").innerHTML = myJSON;
}

//JSON.PARSE() ASSIGNMENT
function jasonParse(){
  var stringVals = '{"name":"Fernando", "LastName": "Perez","age":46, "city":"Mexico City"}';
  var myJSON = JSON.parse(stringVals);
  document.getElementById("jasonParse").innerHTML = "Fernando live in : "+myJSON.city ;
}

//LOCALSTORAGE() METHOD ASSIGNMENT
// Check browser support
//function lStorage(){
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("name", "Fernando");
    localStorage.setItem("lname", "Perez");
    // Retrieve
    document.getElementById("result").innerHTML = "My Name is: " +localStorage.getItem("name")+ " "+localStorage.getItem("lname");
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
//}

/*this function gets the task from input*/
function get_todos(){
  var todos = new Array;
  var todos_str = localStorage.getItem('todo');
  if (todos_str !== null){
    todos = JSON.parse(todos_str);
  }
  return todos;
}

/*this function adds the inputed task to the get_todos function array*/
function add(){
  var task = document.getElementById('task').value;
  var todos = get_todos();
  todos.push(task);
  localStorage.setItem('todo',JSON.stringify(todos));
  document.getElementById("task").value = "";
  show();
  return false;
}

/*this function keeps the tasks permanetly displayed on the screen */
function show(){
  var todos = get_todos();
  var html='<ul>';
  /*Each button will need an id attribute, so that you can remove that specific todo item.*/
  for (var i=0; i<todos.length; i++){
    html += '<li>' + todos[i] + '<button class="remove" id="'+i+'">x</button></li>';
  };

  html += '</ul>';
  document.getElementById('todos').innerHTML = html;

  var buttons = document.getElementsByClassName('remove');
  /*You’ll need to attach an eventListener to each button.*/
  for (var i=0; i < buttons.length; i++){
    /*You’ll need to remove that exact todo item from the array of items*/
    buttons[i].addEventListener('click',remove);
  }


}

document.getElementById('add').addEventListener('click', add);
show();

/*this creates the funcionality of removing a todo item from the array*/
function remove(){
  var id = this.getAttribute('id');
  var todos = get_todos();
  todos.splice(id,1);
  localStorage.setItem('todo', JSON.stringify(todos));
  show();
  return false;
}




