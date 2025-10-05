function check(){
let sub=document.querySelector("#password").value;
let correctPassword='12345';
if(sub!== correctPassword){
    alert("you enter wrong password");
    return false;
}
// else{
//     alert("");
//     return true;
// }
}

document.getElementById("myForm").addEventListener("submit", function(event) {
      let username = document.getElementById("username").value.trim();
      let password = document.getElementById("password").value.trim();

      if (username === "" || password === "") {
        alert("❌ Please fill out all fields before submitting!");
        event.preventDefault(); // stops the form from submitting
      } else {
        alert("✅ Form submitted successfully!");
      }
    });