import HttpRequest from "../frontend/HttpRequest.js";

export class GetData {
  constructor() {
    this.http = new HttpRequest();
  }

  async getData() {
    try {
      const response = await this.http.get("http://localhost:8080/get-data");
      return JSON.parse(response);
    } catch (error) {
      console.log(error);
    }
  }
  async postData(data) {
    try {
      const response = await this.http.post("http://localhost:8080/post-data", data);
      return JSON.parse(response);
    } catch (error) {
      console.log(error);
    }
  }
}
