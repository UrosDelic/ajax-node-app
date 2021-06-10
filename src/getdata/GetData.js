import HttpRequest from "../frontend/HttpRequest.js";

export class GetData {
  constructor() {
    this.http = new HttpRequest();
  }

  async getData() {
    try {
      const response = await this.http.get("http://localhost:8080/get-data");
      if (response) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  }
  async postData(data) {
    try {
      const response = await this.http.post("http://localhost:8080/post-data", data);
      if (response) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
