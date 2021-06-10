import HttpRequest from "../frontend/HttpRequest.js";

export class Service {
  constructor() {
    this.http = new HttpRequest();
  }
  getData() {
    return this.http
      .get("http://localhost:8080/get-data")
      .then(response => {
        return JSON.parse(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
  postData(data) {
    return this.http
      .post("http://localhost:8080/post-data", data)
      .then(response => {
        return JSON.parse(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
