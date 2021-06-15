import httpRequest from "../frontend/HttpRequest.js";

export class GetData {
  constructor() {}

  async getData() {
    try {
      const response = await httpRequest.get("http://localhost:8080/get-data");
      if (response) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  }
  async postData(data) {
    try {
      const response = await httpRequest.post("http://localhost:8080/post-data", data);
      if (response) {
        return response;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
