
var msg;
  msg =
    "<p><code>The script is located in external script file called math.js</code></p>";

function addNumbers(headParam, bodyParam) {
  document.write(msg);
  
  var add = headParam + bodyParam;
  document.write("Addition of " + headParam + " and " + bodyParam + " is: " + add);
    
}
