import Gl from "./modules/gl/gl.js";

class App {
  constructor() {
    console.log("App started");
    this.gl = new Gl("c");
  }
}

new App();
