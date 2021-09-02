
// Checking form if has value and return alert in case of missing

function checkForm() {
    let x = document.forms["form"]["comment"].value;
    if (x == "") {
      alert("Please leave feedback");
      return false;
    }
}

function clearForm() {
    document.getElementById("form").reset();
}