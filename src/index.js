import { GetData } from "./getdata/GetData.js";
class DomInterface {
  constructor() {
    this.getData = new GetData();
    this.passwordField = document.getElementById("password");
    this.emailField = document.getElementById("email");
    this.textArea = document.getElementById("logData");
    this.postButton = document.getElementById("post-request-button");
    this.postButton.disabled = true;
    this.getButton = document.getElementById("get-request-button");
    this.form = document.getElementById("form");
  }

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
      this.textArea.innerText = "";
      this.getData.getData().then(responseData => this.showResponseData(responseData));
    });

    this.postButton.addEventListener("click", () => {
      const obj = {
        email: this.emailField.value,
        password: this.passwordField.value,
      };
      this.textArea.innerText = "";
      this.getData.postData(obj).then(responseData => this.showResponseData(responseData));
    });
  }

  showResponseData(displayData) {
    if (displayData !== "") {
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
domInterface.addEventListeners();
