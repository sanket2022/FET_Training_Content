var students = [];
function add() {
  var name = document.getElementById("name").value;
  students.push(name);
}

function display() {
  document.write("List of Students"+"<br>");
  document.write("--------------------"+"<br>");
  students.forEach(function(element) {
      document.write(element+"<br>");
  }, this);
}
