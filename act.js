function submitForm() {
    
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var email = document.getElementById("email").value;

    
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<strong>User Details:</strong><br>Name: " + name + "<br>Age: " + age + "<br>Email: " + email;
    resultDiv.style.display = "block"
}