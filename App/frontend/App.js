import HttpRequest from "./HttpRequest.js";

class DomInterface {
  constructor() {
    this.httpRequest = new HttpRequest();
    this.passwordField = document.getElementById("password");
    this.emailField = document.getElementById("email");
    this.textArea = document.getElementById("logData");
    this.postButton = document.getElementById("post-request-button");
    this.postButton.disabled = true;
    this.getButton = document.getElementById("get-request-button");
    this.form = document.getElementById("form");
  }

  // funkcija u eventlisteneru mora biti callback
  enableButton = () => {
    if (this.emailField.value !== "" && this.passwordField.value !== "") {
      this.postButton.disabled = false;
    } else {
      this.postButton.disabled = true;
    }
  };

  addEventListeners() {
    this.passwordField.addEventListener("change", this.enableButton);
    this.emailField.addEventListener("change", this.enableButton);
    this.form.addEventListener("submit", e => {
      e.preventDefault();
    });

    this.getButton.addEventListener("click", () => {
      this.httpRequest
        .get("http://localhost:8080/get-data")
        .then(response => {
          this.showResponseData(response);
        })
        .catch(error => {
          console.log(error);
        });
    });

    this.postButton.addEventListener("click", () => {
      const obj = {
        email: this.emailField.value,
        password: this.passwordField.value,
      };

      this.textArea.innerText = "";
      this.httpRequest
        .post("http://localhost:8080/post-data", obj)
        .then(response => {
          this.showResponseData(response);
        })
        .catch(error => {
          console.log(error);
        });
    });
  }

  showResponseData(displayData) {
    if (displayData !== "") {
      displayData = JSON.parse(displayData);
      console.log(displayData, "displayData");
      for (let element in displayData) {
        if (displayData[element] !== "") {
          this.textArea.innerHTML = `email: ${displayData.email}\npassword: ${displayData.password}`;
        }
      }
    } else this.textArea.innerHTML = `no data to display`;
  }
}

const domInterface = new DomInterface();
//domInterface.enableButton();
domInterface.addEventListeners();
//////////////////////////////////////////////
// import HttpRequest from "./HttpRequest.js";

// let passwordField = document.getElementById("password");
// let emailField = document.getElementById("email");
// const textArea = document.getElementById("logData");

// const postRequestButton = document.getElementById("post-request-button");
// // post button disabled

// const httpRequest = new HttpRequest();

// postRequestButton.addEventListener("click", () => {
//   const obj = {
//     email: emailField.value,
//     password: passwordField.value,
//   };

//   textArea.innerText = "";
//   httpRequest
//     .post("http://localhost:8080/post-data", obj)
//     .then(response => {
//       showResponseData(response);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

// const getRequestButton = document.getElementById("get-request-button");

// getRequestButton.addEventListener("click", () => {
//   httpRequest
//     .get("http://localhost:8080/get-data")
//     .then(response => {
//       showResponseData(response);
//     })
//     .catch(error => {
//       console.log(error);
//     });
// });

// postRequestButton.disabled = true;
// // disabled post button

// // inputs
// passwordField.addEventListener("change", enableButton);
// emailField.addEventListener("change", enableButton);

// const form = document.getElementById("form");
// form.addEventListener("submit", e => {
//   e.preventDefault();
// });

// function showResponseData(displayData) {
//   if (displayData !== "") {
//     displayData = JSON.parse(displayData);
//     console.log(displayData, "displayData");
//     for (let element in displayData) {
//       if (displayData[element] !== "") {
//         textArea.innerHTML = `email: ${displayData.email}\npassword: ${displayData.password}`;
//       }
//     }
//   } else textArea.innerHTML = `no data to display`;
// }
