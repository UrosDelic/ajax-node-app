import HttpRequest from "./HttpRequest.js";

let passwordField = document.getElementById("password");
let emailField = document.getElementById("email");
const textArea = document.getElementById("logData");

const postRequestButton = document.getElementById("post-request-button");
// post button disabled

const httpRequest = new HttpRequest();

postRequestButton.addEventListener("click", () => {
  const obj = {
    email: emailField.value,
    password: passwordField.value
  };

  textArea.innerText = "";
  httpRequest.post("http://localhost:8080/post-data", obj).then(response => {
    showResponseData(response);
  }).catch(error => {
    console.log(error);
  });
});

const getRequestButton = document.getElementById("get-request-button");

getRequestButton.addEventListener("click", () => {
  httpRequest.get("http://localhost:8080/get-data").then(response => {
    showResponseData(response);
  }).catch(error => {
    console.log(error);
  });
});

postRequestButton.disabled = true;
// disabled post button
function enableButton() {
  if (passwordField.value !== "" && emailField.value !== "") {
    postRequestButton.disabled = false;
  } else {
    postRequestButton.disabled = true;
  }
};
// inputs
passwordField.addEventListener("change", enableButton);
emailField.addEventListener("change", enableButton);

const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function showResponseData(displayData) {
  if (displayData !== "") {
    displayData = JSON.parse(displayData);
    console.log(displayData, "displayData");
    for (let element in displayData) {
      if (displayData[element] !== "") {
        textArea.innerHTML = `email: ${displayData.email}\npassword: ${displayData.password}`;
      }
    }
  } else textArea.innerHTML = `no data to display`;
};
