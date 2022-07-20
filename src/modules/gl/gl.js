import { resizeCanvasToDisplaySize } from "twgl.js";
//import Scroll from "./utils/scroll.js";
import SmoothScroll from "../utils/smoothscroll";
import Camera from "./camera.js";
import Scene from "./scene";
import Post from "./post/post";

export default class {
  constructor() {
    this.canvas = document.getElementById("c");
    this.gl = this.canvas.getContext("webgl");
    this.gl.clearColor(0.0, 0.0, 0.02, 1);
    this.gl.vp = { dpr: Math.min(window.devicePixelRatio, 2) };
    //this.gl.enable(this.gl.CULL_FACE);
    //this.gl.cullFace(this.gl.BACK);
    //this.gl.enable(this.gl.DEPTH_TEST)

    this.camera = new Camera(this.gl);
    this.gl.camera = this.camera.get(this.gl);

    new ResizeObserver((entry) => this.resize(entry[0].contentRect)).observe(this.canvas);
    this.resize();

    this.scroll = new SmoothScroll();
    this.time = 0;

    this.create();

    this.render();
    this.resize();
  }

  create() {
    this.post = new Post(this.gl);
    this.post.isActive = true;
    this.scene = new Scene(this.gl);
  }

  render() {
    this.time += 0.01;

    this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT);
    this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);

    if (this.post && this.post.isActive) this.post.setupRender();
    if (this.scene)
      this.scene.render(this.time, this.scroll.y.current * this.gl.vp.px, this.scroll.speed);

    if (this.post && this.post.isActive) this.post.render(this.time);

    requestAnimationFrame(this.render.bind(this));
  }

  resize() {
    resizeCanvasToDisplaySize(this.gl.canvas, this.gl.vp.dpr);

    let scrollCurrent = window.scrollY;
    if (this.scroll && this.scroll.y) scrollCurrent = this.scroll.y.current;

    // viewport data
    this.gl.vp = {
      viewSize: this.viewSize,
      px: this.pixelSize,
      inner: [window.innerWidth, window.innerHeight],
      scroll: scrollCurrent
    };

    if (this.gl.camera) this.gl.camera = this.camera.get(this.gl);
    //if (this.scroll) this.scroll.resize(this.gl);

    // resize scene

    if (this.scene) this.scene.resize(this.gl);
    if (this.post) this.post.resize(this.gl);
  }

  /**
   * ----- Utils
   */

  get viewSize() {
    const height = Math.abs(this.gl.camera.z * Math.tan(this.gl.camera.fov / 2) * 2);
    return [height * (this.gl.canvas.width / this.gl.canvas.height), height];
  }

  get pixelSize() {
    return this.viewSize[0] / window.innerWidth;
  }
}
