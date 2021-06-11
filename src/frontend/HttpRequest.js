export default class HttpRequest {
  post(url, data) {
    return this.sendRequest("POST", url, data);
  }

  get(url) {
    return this.sendRequest("GET", url);
  }

  sendRequest = (method, url, data) => {
    return new Promise((resolve, reject) => {
      const http = new XMLHttpRequest();
      http.open(method, url, data);
      http.setRequestHeader("Content-Type", "application/json");
      data = JSON.stringify(data);

      http.onload = () => {
        if (http.status >= 200 && http.status < 300) {
          console.log(http, "http iz onload");
          http.response !== "" ? resolve(JSON.parse(http.response)) : resolve(http.response);
        } else {
          reject(http.statusText);
        }
      };

      http.onerror = () => {
        reject("REJECT message inside onerror");
      };
      http.send(data);
    });
  };
}
