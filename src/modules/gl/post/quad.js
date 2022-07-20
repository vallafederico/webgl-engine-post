import * as twgl from "twgl.js";
import gsap from "gsap";
import shaders from "./mat/";

export default class {
  constructor(gl, data = {}) {
    this.gl = gl;
    this.data = data;
    this.shaders = shaders;
    this.programInfo = twgl.createProgramInfo(this.gl, this.shaders);

    this.mouse = {
      x: 0.5,
      y: 0.5
    };

    this.gl.useProgram(this.programInfo.program);
    this.setBuffAtt();
    this.setUniforms();

    this.initEvents();
  }

  initEvents() {
    document.onmousemove = (e) => this.onMOuseMove(e);
  }

  onMOuseMove(e) {
    //console.log(e.clientX);
    const x = e.clientX / this.gl.vp.inner[0];
    const y = 1 - e.clientY / this.gl.vp.inner[1];

    gsap.to(this.mouse, {
      x: x,
      y: y,
      duration: 0.6,
      ease: "slow.inOut"
    });

    //console.log(this.mouse);
  }

  /**
   * Create
   */

  setBuffAtt() {
    const arrays = {
      position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0]
    };

    this.bufferInfo = twgl.createBufferInfoFromArrays(this.gl, arrays);
  }

  setUniforms() {
    this.uniforms = {
      u_res: [this.gl.canvas.width, this.gl.canvas.height],
      u_time: 0
      //  u_diff: null
    };

    this.gl.useProgram(this.programInfo.program);
    twgl.setUniforms(this.programInfo, this.uniforms);
  }

  render(time, diff = null) {
    this.gl.useProgram(this.programInfo.program);
    twgl.setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);
    twgl.setUniforms(this.programInfo, {
      u_time: time,
      u_diff: diff,
      u_mouse: [this.mouse.x, this.mouse.y]
    });

    twgl.drawBufferInfo(this.gl, this.bufferInfo);
    // this.gl.LINES
  }

  resize(gl) {
    this.gl = gl;

    this.gl.useProgram(this.programInfo.program);
    twgl.setUniforms(this.programInfo, {
      u_res: [this.gl.canvas.width, this.gl.canvas.height]
    });
  }
}
