import {
  createProgramInfo,
  drawBufferInfo,
  m4,
  setBuffersAndAttributes,
  setUniforms
} from "twgl.js";
import gsap from "gsap";

import Observer from "../utils/observer";

import { calcDomPosition } from "../utils/dom-utils.js";
import { loadTextureAndData, calcRatio } from "../utils/texture-loader.js";

import Quad from "./_quad.js";
import shaders from "../mat/dom/";

export default class extends Quad {
  constructor(gl, ref, gridRef) {
    super(gl, {});

    this.gl = gl;
    this.ref = ref;
    this.gridRef = gridRef;

    this.anim = {
      rand: Math.random(),
      inView: 0,
      hover: 0
    };

    this.texture = { texture: null, ratio: [1, 1] };

    this.gridMat = m4.create();
    this.gridRatio = [1, 1];
    this.loadTexture();

    this.initDom();
  }

  loadTexture() {
    // get texture from dom
    const loadedData = loadTextureAndData(this.gl, this.ref.children[0], this.gl.LINEAR);
    this.texture = loadedData;

    this.gridRatio = calcRatio(this.ref.children[0], this.gridRef);
    //console.log(this.gridRatio);
  }

  createProgram() {
    this.shaders = shaders;
    this.programInfo = createProgramInfo(this.gl, this.shaders);
  }

  resize(gl) {
    this.gl = gl;

    // scroll based pos
    const pos = calcDomPosition(this.ref, this.gl.vp);
    m4.translation([pos.x, pos.y, 0], this.mat);

    // grid based pos
    const gridPos = calcDomPosition(this.gridRef, this.gl.vp);
    m4.translation([gridPos.x, gridPos.y, 0], this.gridMat);

    this.gl.useProgram(this.programInfo.program);
    setUniforms(this.programInfo, {
      u_res: [gl.canvas.width, gl.canvas.height],
      u_vs: gl.vp.viewSize,
      u_id: this.mat,
      u_camera: gl.camera.mat,
      u_scale: [pos.width, pos.height],
      u_gridScale: [gridPos.width, gridPos.height]
    });
  }

  render(t, y, { grid }) {
    this.gl.useProgram(this.programInfo.program);
    setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);
    setUniforms(this.programInfo, {
      u_time: t,
      u_id: this.mat,
      u_y: y,
      u_diff: this.texture.texture,
      u_ratio: this.texture.ratio,
      u_inView: this.anim.inView,
      u_hover: this.anim.hover,
      u_gridRatio: this.gridRatio,
      u_gridId: this.gridMat,
      u_TOGRID: grid
    });

    drawBufferInfo(this.gl, this.bufferInfo);
    // this.gl.LINES
  }

  /**
   * --------------- Dom
   */
  initDom() {
    this.obs = new Observer(this.ref);
    this.obs.on("in", () => this.animateIn());
    this.obs.on("out", () => this.animateOut());

    this.ref.onmouseover = () => this.animateMouseIn();
    this.ref.onmouseleave = () => this.animateMouseOut();
    this.gridRef.onmouseover = () => this.animateMouseIn();
    this.gridRef.onmouseleave = () => this.animateMouseOut();
  }

  animateIn() {
    this.animationIn = gsap.to(this.anim, {
      inView: 1,
      duration: 1.2,
      ease: "expo",
      delay: this.anim.rand * 0.3
    });
  }

  animateOut() {
    if (this.animationIn) this.animationIn.kill();
    this.anim.inView = 0;
  }

  animateMouseIn() {
    gsap.to(this.anim, {
      hover: 1,
      ease: "expo.out",
      duration: 0.8
    });
  }

  animateMouseOut() {
    gsap.to(this.anim, {
      hover: 0,
      ease: "expo.out",
      duration: 0.8
    });
  }
}
