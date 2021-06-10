import HttpRequest from "../frontend/HttpRequest.js";

export class Service {
  constructor() {
    this.http = new HttpRequest();
  }
  get() {
    return this.http
      .getData("http://localhost:8080/get-data")
      .then(response => {
        return response;
      })
      .catch(error => {
        console.log(error);
      });
  }
  post(data) {
    return this.http
      .postData("http://localhost:8080/post-data", data)
      .then(response => {
        return response;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
