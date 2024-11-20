const submit = document.getElementById("submitBtn");
const reqName = document.getElementById("reqName");
const reqEmail = document.getElementById("reqEmail");
const textArea = document.getElementById("textArea");

submit.addEventListener("click", function () {
  const name = reqName.value;
  const email = reqEmail.value;
  const message = textArea.value;

  if (!name || !email || !message) {
    alert("Please fill all fields!");
    return; 
  }

  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);
  localStorage.setItem("userMessage", message);

  window.open("contactData.html", "_self");
});