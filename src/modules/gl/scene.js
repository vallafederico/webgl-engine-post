import GUI from "lil-gui";
import gsap from "gsap";

// import Quad from "./mod/_quad";
import DomQuad from "./mod/_dom";

export default class {
  constructor(gl) {
    this.gl = gl;

    this.ui = {
      isGrid: true,
      grid: 1
    };

    //this.inigGUI();
    this.create();
    this.initUI();
  }

  /*
  inigGUI() {
    this.guiObj = {
      activ: 1
    };

    this.gui = new GUI();
    this.gui.add(this.guiObj, "activ", 0, 1);
  }
  */

  create() {
    const gridQuads = [...document.querySelectorAll("[data-quad-grid]")];
    this.quadRefs = [...document.querySelectorAll("[data-quad]")];
    this.quads = this.quadRefs.map((quad, i) => new DomQuad(this.gl, quad, gridQuads[i]));
  }

  render(t, y, speed) {
    if (this.quads) this.quads.forEach((quad) => quad.render(t, y, { grid: this.ui.grid }));
  }

  resize(gl) {
    this.gl = gl;
    if (this.quads) this.quads.forEach((quad) => quad.resize(this.gl));
  }

  /**
   * UI ops
   */

  initUI() {
    const gridButton = document.querySelector('[data-ui="grid"]');
    this.gridDom = document.querySelector(".grid-w");

    gridButton.onclick = () => {
      // console.log("clicked GRID trigger");

      let val = this.ui.isGrid ? 0 : 1;
      this.ui.isGrid ? this.displayScrollUi(true) : this.displayScrollUi(false);
      this.ui.isGrid = this.ui.isGrid ? false : true;

      gsap.to(this.ui, {
        grid: val,
        duration: 1,
        ease: "expo"
      });
    };
  }

  displayScrollUi(bool) {
    if (bool) {
      this.quadRefs.forEach((ref) => (ref.style.display = "none"));
      this.gridDom.style.display = "flex";
      this.gridDom.style.zIndex = 1;
    } else {
      this.quadRefs.forEach((ref) => (ref.style.display = "block"));
      this.gridDom.style.zIndex = -1;
      this.gridDom.style.display = "none";
    }
  }
}
