import HttpRequest from "../frontend/HttpRequest";

class DomElements {
    constructor(passwordField, emailField, postButton, getButton, textArea) {
        this.passwordField = passwordField;
        this.emailField = emailField;
        this.postButton = postButton;
        this.getButton = getButton;
        this.textArea = textArea;
        this.http = new HttpRequest();
    }
}