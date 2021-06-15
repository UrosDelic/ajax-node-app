import h1 from "../frontend/HttpRequest.js";

class App {
  constructor() {
    this.h1 = h1;
  }
  print = () => {
    console.log("1", h1);
  };
}
const app1 = new App();
app1.print();
