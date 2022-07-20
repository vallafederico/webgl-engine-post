// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"a3PEk":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "fe4256060641b553";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bNKaB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _glJs = require("./modules/gl/gl.js");
var _glJsDefault = parcelHelpers.interopDefault(_glJs);
class App {
    constructor(){
        console.log("App started");
        this.gl = new (0, _glJsDefault.default)("c");
    }
}
new App();

},{"./modules/gl/gl.js":"dnZAn","@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"dnZAn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _twglJs = require("twgl.js");
//import Scroll from "./utils/scroll.js";
var _smoothscroll = require("../utils/smoothscroll");
var _smoothscrollDefault = parcelHelpers.interopDefault(_smoothscroll);
var _cameraJs = require("./camera.js");
var _cameraJsDefault = parcelHelpers.interopDefault(_cameraJs);
var _scene = require("./scene");
var _sceneDefault = parcelHelpers.interopDefault(_scene);
var _post = require("./post/post");
var _postDefault = parcelHelpers.interopDefault(_post);
exports.default = class {
    constructor(){
        this.canvas = document.getElementById("c");
        this.gl = this.canvas.getContext("webgl");
        this.gl.clearColor(0.0, 0.0, 0.02, 1);
        this.gl.vp = {
            dpr: Math.min(window.devicePixelRatio, 2)
        };
        //this.gl.enable(this.gl.CULL_FACE);
        //this.gl.cullFace(this.gl.BACK);
        //this.gl.enable(this.gl.DEPTH_TEST)
        this.camera = new (0, _cameraJsDefault.default)(this.gl);
        this.gl.camera = this.camera.get(this.gl);
        new ResizeObserver((entry)=>this.resize(entry[0].contentRect)).observe(this.canvas);
        this.resize();
        this.scroll = new (0, _smoothscrollDefault.default)();
        this.time = 0;
        this.create();
        this.render();
        this.resize();
    }
    create() {
        this.post = new (0, _postDefault.default)(this.gl);
        this.post.isActive = true;
        this.scene = new (0, _sceneDefault.default)(this.gl);
    }
    render() {
        this.time += 0.01;
        this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT);
        this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);
        if (this.post && this.post.isActive) this.post.setupRender();
        if (this.scene) this.scene.render(this.time, this.scroll.y.current * this.gl.vp.px, this.scroll.speed);
        if (this.post && this.post.isActive) this.post.render(this.time);
        requestAnimationFrame(this.render.bind(this));
    }
    resize() {
        (0, _twglJs.resizeCanvasToDisplaySize)(this.gl.canvas, this.gl.vp.dpr);
        let scrollCurrent = window.scrollY;
        if (this.scroll && this.scroll.y) scrollCurrent = this.scroll.y.current;
        // viewport data
        this.gl.vp = {
            viewSize: this.viewSize,
            px: this.pixelSize,
            inner: [
                window.innerWidth,
                window.innerHeight
            ],
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
   */ get viewSize() {
        const height = Math.abs(this.gl.camera.z * Math.tan(this.gl.camera.fov / 2) * 2);
        return [
            height * (this.gl.canvas.width / this.gl.canvas.height),
            height
        ];
    }
    get pixelSize() {
        return this.viewSize[0] / window.innerWidth;
    }
};

},{"twgl.js":"3uqAP","../utils/smoothscroll":"fGuat","./camera.js":"5Yi5Z","./scene":"9wYh6","./post/post":"0477R","@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"3uqAP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "addExtensionsToContext", ()=>addExtensionsToContext);
parcelHelpers.export(exports, "attributes", ()=>attributes);
parcelHelpers.export(exports, "bindFramebufferInfo", ()=>bindFramebufferInfo);
parcelHelpers.export(exports, "bindTransformFeedbackInfo", ()=>bindTransformFeedbackInfo);
parcelHelpers.export(exports, "bindUniformBlock", ()=>bindUniformBlock);
parcelHelpers.export(exports, "canFilter", ()=>canFilter);
parcelHelpers.export(exports, "canGenerateMipmap", ()=>canGenerateMipmap);
parcelHelpers.export(exports, "createAttribsFromArrays", ()=>createAttribsFromArrays);
parcelHelpers.export(exports, "createAttributeSetters", ()=>createAttributeSetters);
parcelHelpers.export(exports, "createBufferFromArray", ()=>createBufferFromArray);
parcelHelpers.export(exports, "createBufferFromTypedArray", ()=>createBufferFromTypedArray);
parcelHelpers.export(exports, "createBufferInfoFromArrays", ()=>createBufferInfoFromArrays);
parcelHelpers.export(exports, "createBuffersFromArrays", ()=>createBuffersFromArrays);
parcelHelpers.export(exports, "createFramebufferInfo", ()=>createFramebufferInfo);
parcelHelpers.export(exports, "createProgram", ()=>createProgram);
parcelHelpers.export(exports, "createProgramAsync", ()=>createProgramAsync);
parcelHelpers.export(exports, "createProgramFromScripts", ()=>createProgramFromScripts);
parcelHelpers.export(exports, "createProgramFromSources", ()=>createProgramFromSources);
parcelHelpers.export(exports, "createProgramInfo", ()=>createProgramInfo);
parcelHelpers.export(exports, "createProgramInfoAsync", ()=>createProgramInfoAsync);
parcelHelpers.export(exports, "createProgramInfoFromProgram", ()=>createProgramInfoFromProgram);
parcelHelpers.export(exports, "createSampler", ()=>createSampler);
parcelHelpers.export(exports, "createSamplers", ()=>createSamplers);
parcelHelpers.export(exports, "createTexture", ()=>createTexture);
parcelHelpers.export(exports, "createTextures", ()=>createTextures);
parcelHelpers.export(exports, "createTransformFeedback", ()=>createTransformFeedback);
parcelHelpers.export(exports, "createTransformFeedbackInfo", ()=>createTransformFeedbackInfo);
parcelHelpers.export(exports, "createUniformBlockInfo", ()=>createUniformBlockInfo);
parcelHelpers.export(exports, "createUniformBlockInfoFromProgram", ()=>createUniformBlockInfoFromProgram);
parcelHelpers.export(exports, "createUniformBlockSpecFromProgram", ()=>createUniformBlockSpecFromProgram);
parcelHelpers.export(exports, "createUniformSetters", ()=>createUniformSetters);
parcelHelpers.export(exports, "createVAOAndSetAttributes", ()=>createVAOAndSetAttributes);
parcelHelpers.export(exports, "createVAOFromBufferInfo", ()=>createVAOFromBufferInfo);
parcelHelpers.export(exports, "createVertexArrayInfo", ()=>createVertexArrayInfo);
parcelHelpers.export(exports, "draw", ()=>draw);
parcelHelpers.export(exports, "drawBufferInfo", ()=>drawBufferInfo);
parcelHelpers.export(exports, "drawObjectList", ()=>drawObjectList);
parcelHelpers.export(exports, "framebuffers", ()=>framebuffers);
parcelHelpers.export(exports, "getArray_", ()=>getArray);
parcelHelpers.export(exports, "getBytesPerElementForInternalFormat", ()=>getBytesPerElementForInternalFormat);
parcelHelpers.export(exports, "getContext", ()=>getContext);
parcelHelpers.export(exports, "getFormatAndTypeForInternalFormat", ()=>getFormatAndTypeForInternalFormat);
parcelHelpers.export(exports, "getGLTypeForTypedArray", ()=>getGLTypeForTypedArray);
parcelHelpers.export(exports, "getGLTypeForTypedArrayType", ()=>getGLTypeForTypedArrayType);
parcelHelpers.export(exports, "getNumComponentsForFormat", ()=>getNumComponentsForFormat);
parcelHelpers.export(exports, "getNumComponents_", ()=>getNumComponents);
parcelHelpers.export(exports, "getTypedArrayTypeForGLType", ()=>getTypedArrayTypeForGLType);
parcelHelpers.export(exports, "getWebGLContext", ()=>getWebGLContext);
parcelHelpers.export(exports, "glEnumToString", ()=>glEnumToString);
parcelHelpers.export(exports, "isArrayBuffer", ()=>isArrayBuffer);
parcelHelpers.export(exports, "isWebGL1", ()=>isWebGL1);
parcelHelpers.export(exports, "isWebGL2", ()=>isWebGL2);
parcelHelpers.export(exports, "loadTextureFromUrl", ()=>loadTextureFromUrl);
parcelHelpers.export(exports, "m4", ()=>m4);
parcelHelpers.export(exports, "primitives", ()=>primitives);
parcelHelpers.export(exports, "programs", ()=>programs);
parcelHelpers.export(exports, "resizeCanvasToDisplaySize", ()=>resizeCanvasToDisplaySize);
parcelHelpers.export(exports, "resizeFramebufferInfo", ()=>resizeFramebufferInfo);
parcelHelpers.export(exports, "resizeTexture", ()=>resizeTexture);
parcelHelpers.export(exports, "setAttribInfoBufferFromArray", ()=>setAttribInfoBufferFromArray);
parcelHelpers.export(exports, "setAttributeDefaults_", ()=>setDefaults);
parcelHelpers.export(exports, "setAttributePrefix", ()=>setAttributePrefix);
parcelHelpers.export(exports, "setAttributes", ()=>setAttributes);
parcelHelpers.export(exports, "setBlockUniforms", ()=>setBlockUniforms);
parcelHelpers.export(exports, "setBuffersAndAttributes", ()=>setBuffersAndAttributes);
parcelHelpers.export(exports, "setDefaultTextureColor", ()=>setDefaultTextureColor);
parcelHelpers.export(exports, "setDefaults", ()=>setDefaults$2);
parcelHelpers.export(exports, "setEmptyTexture", ()=>setEmptyTexture);
parcelHelpers.export(exports, "setSamplerParameters", ()=>setSamplerParameters);
parcelHelpers.export(exports, "setTextureDefaults_", ()=>setDefaults$1);
parcelHelpers.export(exports, "setTextureFilteringForSize", ()=>setTextureFilteringForSize);
parcelHelpers.export(exports, "setTextureFromArray", ()=>setTextureFromArray);
parcelHelpers.export(exports, "setTextureFromElement", ()=>setTextureFromElement);
parcelHelpers.export(exports, "setTextureParameters", ()=>setTextureParameters);
parcelHelpers.export(exports, "setUniformBlock", ()=>setUniformBlock);
parcelHelpers.export(exports, "setUniforms", ()=>setUniforms);
parcelHelpers.export(exports, "setUniformsAndBindTextures", ()=>setUniformsAndBindTextures);
parcelHelpers.export(exports, "textures", ()=>textures);
parcelHelpers.export(exports, "typedarrays", ()=>typedarrays);
parcelHelpers.export(exports, "utils", ()=>utils);
parcelHelpers.export(exports, "v3", ()=>v3);
parcelHelpers.export(exports, "vertexArrays", ()=>vertexArrays);
/* @license twgl.js 4.24.0 Copyright (c) 2015, Gregg Tavares All Rights Reserved.
Available via the MIT license.
see: http://github.com/greggman/twgl.js for details */ /*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */ /**
 *
 * Vec3 math math functions.
 *
 * Almost all functions take an optional `dst` argument. If it is not passed in the
 * functions will create a new Vec3. In other words you can do this
 *
 *     var v = v3.cross(v1, v2);  // Creates a new Vec3 with the cross product of v1 x v2.
 *
 * or
 *
 *     var v = v3.create();
 *     v3.cross(v1, v2, v);  // Puts the cross product of v1 x v2 in v
 *
 * The first style is often easier but depending on where it's used it generates garbage where
 * as there is almost never allocation with the second style.
 *
 * It is always save to pass any vector as the destination. So for example
 *
 *     v3.cross(v1, v2, v1);  // Puts the cross product of v1 x v2 in v1
 *
 * @module twgl/v3
 */ let VecType = Float32Array;
/**
 * A JavaScript array with 3 values or a Float32Array with 3 values.
 * When created by the library will create the default type which is `Float32Array`
 * but can be set by calling {@link module:twgl/v3.setDefaultType}.
 * @typedef {(number[]|Float32Array)} Vec3
 * @memberOf module:twgl/v3
 */ /**
 * Sets the type this library creates for a Vec3
 * @param {constructor} ctor the constructor for the type. Either `Float32Array` or `Array`
 * @return {constructor} previous constructor for Vec3
 * @memberOf module:twgl/v3
 */ function setDefaultType(ctor) {
    const oldType = VecType;
    VecType = ctor;
    return oldType;
}
/**
 * Creates a vec3; may be called with x, y, z to set initial values.
 * @param {number} [x] Initial x value.
 * @param {number} [y] Initial y value.
 * @param {number} [z] Initial z value.
 * @return {module:twgl/v3.Vec3} the created vector
 * @memberOf module:twgl/v3
 */ function create(x, y, z) {
    const dst = new VecType(3);
    if (x) dst[0] = x;
    if (y) dst[1] = y;
    if (z) dst[2] = z;
    return dst;
}
/**
 * Adds two vectors; assumes a and b have the same dimension.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} A vector tha tis the sum of a and b.
 * @memberOf module:twgl/v3
 */ function add(a, b, dst) {
    dst = dst || new VecType(3);
    dst[0] = a[0] + b[0];
    dst[1] = a[1] + b[1];
    dst[2] = a[2] + b[2];
    return dst;
}
/**
 * Subtracts two vectors.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} A vector that is the difference of a and b.
 * @memberOf module:twgl/v3
 */ function subtract(a, b, dst) {
    dst = dst || new VecType(3);
    dst[0] = a[0] - b[0];
    dst[1] = a[1] - b[1];
    dst[2] = a[2] - b[2];
    return dst;
}
/**
 * Performs linear interpolation on two vectors.
 * Given vectors a and b and interpolation coefficient t, returns
 * a + t * (b - a).
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {number} t Interpolation coefficient.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The linear interpolated result.
 * @memberOf module:twgl/v3
 */ function lerp(a, b, t, dst) {
    dst = dst || new VecType(3);
    dst[0] = a[0] + t * (b[0] - a[0]);
    dst[1] = a[1] + t * (b[1] - a[1]);
    dst[2] = a[2] + t * (b[2] - a[2]);
    return dst;
}
/**
 * Performs linear interpolation on two vectors.
 * Given vectors a and b and interpolation coefficient vector t, returns
 * a + t * (b - a).
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} t Interpolation coefficients vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} the linear interpolated result.
 * @memberOf module:twgl/v3
 */ function lerpV(a, b, t, dst) {
    dst = dst || new VecType(3);
    dst[0] = a[0] + t[0] * (b[0] - a[0]);
    dst[1] = a[1] + t[1] * (b[1] - a[1]);
    dst[2] = a[2] + t[2] * (b[2] - a[2]);
    return dst;
}
/**
 * Return max values of two vectors.
 * Given vectors a and b returns
 * [max(a[0], b[0]), max(a[1], b[1]), max(a[2], b[2])].
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The max components vector.
 * @memberOf module:twgl/v3
 */ function max(a, b, dst) {
    dst = dst || new VecType(3);
    dst[0] = Math.max(a[0], b[0]);
    dst[1] = Math.max(a[1], b[1]);
    dst[2] = Math.max(a[2], b[2]);
    return dst;
}
/**
 * Return min values of two vectors.
 * Given vectors a and b returns
 * [min(a[0], b[0]), min(a[1], b[1]), min(a[2], b[2])].
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The min components vector.
 * @memberOf module:twgl/v3
 */ function min(a, b, dst) {
    dst = dst || new VecType(3);
    dst[0] = Math.min(a[0], b[0]);
    dst[1] = Math.min(a[1], b[1]);
    dst[2] = Math.min(a[2], b[2]);
    return dst;
}
/**
 * Multiplies a vector by a scalar.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {number} k The scalar.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The scaled vector.
 * @memberOf module:twgl/v3
 */ function mulScalar(v, k, dst) {
    dst = dst || new VecType(3);
    dst[0] = v[0] * k;
    dst[1] = v[1] * k;
    dst[2] = v[2] * k;
    return dst;
}
/**
 * Divides a vector by a scalar.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {number} k The scalar.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The scaled vector.
 * @memberOf module:twgl/v3
 */ function divScalar(v, k, dst) {
    dst = dst || new VecType(3);
    dst[0] = v[0] / k;
    dst[1] = v[1] / k;
    dst[2] = v[2] / k;
    return dst;
}
/**
 * Computes the cross product of two vectors; assumes both vectors have
 * three entries.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The vector of a cross b.
 * @memberOf module:twgl/v3
 */ function cross(a, b, dst) {
    dst = dst || new VecType(3);
    const t1 = a[2] * b[0] - a[0] * b[2];
    const t2 = a[0] * b[1] - a[1] * b[0];
    dst[0] = a[1] * b[2] - a[2] * b[1];
    dst[1] = t1;
    dst[2] = t2;
    return dst;
}
/**
 * Computes the dot product of two vectors; assumes both vectors have
 * three entries.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @return {number} dot product
 * @memberOf module:twgl/v3
 */ function dot(a, b) {
    return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}
/**
 * Computes the length of vector
 * @param {module:twgl/v3.Vec3} v vector.
 * @return {number} length of vector.
 * @memberOf module:twgl/v3
 */ function length$1(v) {
    return Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
}
/**
 * Computes the square of the length of vector
 * @param {module:twgl/v3.Vec3} v vector.
 * @return {number} square of the length of vector.
 * @memberOf module:twgl/v3
 */ function lengthSq(v) {
    return v[0] * v[0] + v[1] * v[1] + v[2] * v[2];
}
/**
 * Computes the distance between 2 points
 * @param {module:twgl/v3.Vec3} a vector.
 * @param {module:twgl/v3.Vec3} b vector.
 * @return {number} distance between a and b
 * @memberOf module:twgl/v3
 */ function distance(a, b) {
    const dx = a[0] - b[0];
    const dy = a[1] - b[1];
    const dz = a[2] - b[2];
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
}
/**
 * Computes the square of the distance between 2 points
 * @param {module:twgl/v3.Vec3} a vector.
 * @param {module:twgl/v3.Vec3} b vector.
 * @return {number} square of the distance between a and b
 * @memberOf module:twgl/v3
 */ function distanceSq(a, b) {
    const dx = a[0] - b[0];
    const dy = a[1] - b[1];
    const dz = a[2] - b[2];
    return dx * dx + dy * dy + dz * dz;
}
/**
 * Divides a vector by its Euclidean length and returns the quotient.
 * @param {module:twgl/v3.Vec3} a The vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The normalized vector.
 * @memberOf module:twgl/v3
 */ function normalize(a, dst) {
    dst = dst || new VecType(3);
    const lenSq = a[0] * a[0] + a[1] * a[1] + a[2] * a[2];
    const len = Math.sqrt(lenSq);
    if (len > 0.00001) {
        dst[0] = a[0] / len;
        dst[1] = a[1] / len;
        dst[2] = a[2] / len;
    } else {
        dst[0] = 0;
        dst[1] = 0;
        dst[2] = 0;
    }
    return dst;
}
/**
 * Negates a vector.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} -v.
 * @memberOf module:twgl/v3
 */ function negate(v, dst) {
    dst = dst || new VecType(3);
    dst[0] = -v[0];
    dst[1] = -v[1];
    dst[2] = -v[2];
    return dst;
}
/**
 * Copies a vector.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} A copy of v.
 * @memberOf module:twgl/v3
 */ function copy(v, dst) {
    dst = dst || new VecType(3);
    dst[0] = v[0];
    dst[1] = v[1];
    dst[2] = v[2];
    return dst;
}
/**
 * Multiplies a vector by another vector (component-wise); assumes a and
 * b have the same length.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The vector of products of entries of a and
 *     b.
 * @memberOf module:twgl/v3
 */ function multiply(a, b, dst) {
    dst = dst || new VecType(3);
    dst[0] = a[0] * b[0];
    dst[1] = a[1] * b[1];
    dst[2] = a[2] * b[2];
    return dst;
}
/**
 * Divides a vector by another vector (component-wise); assumes a and
 * b have the same length.
 * @param {module:twgl/v3.Vec3} a Operand vector.
 * @param {module:twgl/v3.Vec3} b Operand vector.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not new one is created.
 * @return {module:twgl/v3.Vec3} The vector of quotients of entries of a and
 *     b.
 * @memberOf module:twgl/v3
 */ function divide(a, b, dst) {
    dst = dst || new VecType(3);
    dst[0] = a[0] / b[0];
    dst[1] = a[1] / b[1];
    dst[2] = a[2] / b[2];
    return dst;
}
var v3 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    add: add,
    copy: copy,
    create: create,
    cross: cross,
    distance: distance,
    distanceSq: distanceSq,
    divide: divide,
    divScalar: divScalar,
    dot: dot,
    lerp: lerp,
    lerpV: lerpV,
    length: length$1,
    lengthSq: lengthSq,
    max: max,
    min: min,
    mulScalar: mulScalar,
    multiply: multiply,
    negate: negate,
    normalize: normalize,
    setDefaultType: setDefaultType,
    subtract: subtract
});
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */ /**
 * 4x4 Matrix math math functions.
 *
 * Almost all functions take an optional `dst` argument. If it is not passed in the
 * functions will create a new matrix. In other words you can do this
 *
 *     const mat = m4.translation([1, 2, 3]);  // Creates a new translation matrix
 *
 * or
 *
 *     const mat = m4.create();
 *     m4.translation([1, 2, 3], mat);  // Puts translation matrix in mat.
 *
 * The first style is often easier but depending on where it's used it generates garbage where
 * as there is almost never allocation with the second style.
 *
 * It is always save to pass any matrix as the destination. So for example
 *
 *     const mat = m4.identity();
 *     const trans = m4.translation([1, 2, 3]);
 *     m4.multiply(mat, trans, mat);  // Multiplies mat * trans and puts result in mat.
 *
 * @module twgl/m4
 */ let MatType = Float32Array;
/**
 * A JavaScript array with 16 values or a Float32Array with 16 values.
 * When created by the library will create the default type which is `Float32Array`
 * but can be set by calling {@link module:twgl/m4.setDefaultType}.
 * @typedef {(number[]|Float32Array)} Mat4
 * @memberOf module:twgl/m4
 */ /**
 * Sets the type this library creates for a Mat4
 * @param {constructor} ctor the constructor for the type. Either `Float32Array` or `Array`
 * @return {constructor} previous constructor for Mat4
 * @memberOf module:twgl/m4
 */ function setDefaultType$1(ctor) {
    const oldType = MatType;
    MatType = ctor;
    return oldType;
}
/**
 * Negates a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} -m.
 * @memberOf module:twgl/m4
 */ function negate$1(m, dst) {
    dst = dst || new MatType(16);
    dst[0] = -m[0];
    dst[1] = -m[1];
    dst[2] = -m[2];
    dst[3] = -m[3];
    dst[4] = -m[4];
    dst[5] = -m[5];
    dst[6] = -m[6];
    dst[7] = -m[7];
    dst[8] = -m[8];
    dst[9] = -m[9];
    dst[10] = -m[10];
    dst[11] = -m[11];
    dst[12] = -m[12];
    dst[13] = -m[13];
    dst[14] = -m[14];
    dst[15] = -m[15];
    return dst;
}
/**
 * Creates a matrix.
 * @return {module:twgl/m4.Mat4} A new matrix.
 * @memberOf module:twgl/m4
 */ function create$1() {
    return new MatType(16).fill(0);
}
/**
 * Copies a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] The matrix. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} A copy of m.
 * @memberOf module:twgl/m4
 */ function copy$1(m, dst) {
    dst = dst || new MatType(16);
    dst[0] = m[0];
    dst[1] = m[1];
    dst[2] = m[2];
    dst[3] = m[3];
    dst[4] = m[4];
    dst[5] = m[5];
    dst[6] = m[6];
    dst[7] = m[7];
    dst[8] = m[8];
    dst[9] = m[9];
    dst[10] = m[10];
    dst[11] = m[11];
    dst[12] = m[12];
    dst[13] = m[13];
    dst[14] = m[14];
    dst[15] = m[15];
    return dst;
}
/**
 * Creates an n-by-n identity matrix.
 *
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} An n-by-n identity matrix.
 * @memberOf module:twgl/m4
 */ function identity(dst) {
    dst = dst || new MatType(16);
    dst[0] = 1;
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = 0;
    dst[5] = 1;
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = 0;
    dst[9] = 0;
    dst[10] = 1;
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;
    return dst;
}
/**
 * Takes the transpose of a matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The transpose of m.
 * @memberOf module:twgl/m4
 */ function transpose(m, dst) {
    dst = dst || new MatType(16);
    if (dst === m) {
        let t;
        t = m[1];
        m[1] = m[4];
        m[4] = t;
        t = m[2];
        m[2] = m[8];
        m[8] = t;
        t = m[3];
        m[3] = m[12];
        m[12] = t;
        t = m[6];
        m[6] = m[9];
        m[9] = t;
        t = m[7];
        m[7] = m[13];
        m[13] = t;
        t = m[11];
        m[11] = m[14];
        m[14] = t;
        return dst;
    }
    const m00 = m[0];
    const m01 = m[1];
    const m02 = m[2];
    const m03 = m[3];
    const m10 = m[4];
    const m11 = m[5];
    const m12 = m[6];
    const m13 = m[7];
    const m20 = m[8];
    const m21 = m[9];
    const m22 = m[10];
    const m23 = m[11];
    const m30 = m[12];
    const m31 = m[13];
    const m32 = m[14];
    const m33 = m[15];
    dst[0] = m00;
    dst[1] = m10;
    dst[2] = m20;
    dst[3] = m30;
    dst[4] = m01;
    dst[5] = m11;
    dst[6] = m21;
    dst[7] = m31;
    dst[8] = m02;
    dst[9] = m12;
    dst[10] = m22;
    dst[11] = m32;
    dst[12] = m03;
    dst[13] = m13;
    dst[14] = m23;
    dst[15] = m33;
    return dst;
}
/**
 * Computes the inverse of a 4-by-4 matrix.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The inverse of m.
 * @memberOf module:twgl/m4
 */ function inverse(m, dst) {
    dst = dst || new MatType(16);
    const m00 = m[0];
    const m01 = m[1];
    const m02 = m[2];
    const m03 = m[3];
    const m10 = m[4];
    const m11 = m[5];
    const m12 = m[6];
    const m13 = m[7];
    const m20 = m[8];
    const m21 = m[9];
    const m22 = m[10];
    const m23 = m[11];
    const m30 = m[12];
    const m31 = m[13];
    const m32 = m[14];
    const m33 = m[15];
    const tmp_0 = m22 * m33;
    const tmp_1 = m32 * m23;
    const tmp_2 = m12 * m33;
    const tmp_3 = m32 * m13;
    const tmp_4 = m12 * m23;
    const tmp_5 = m22 * m13;
    const tmp_6 = m02 * m33;
    const tmp_7 = m32 * m03;
    const tmp_8 = m02 * m23;
    const tmp_9 = m22 * m03;
    const tmp_10 = m02 * m13;
    const tmp_11 = m12 * m03;
    const tmp_12 = m20 * m31;
    const tmp_13 = m30 * m21;
    const tmp_14 = m10 * m31;
    const tmp_15 = m30 * m11;
    const tmp_16 = m10 * m21;
    const tmp_17 = m20 * m11;
    const tmp_18 = m00 * m31;
    const tmp_19 = m30 * m01;
    const tmp_20 = m00 * m21;
    const tmp_21 = m20 * m01;
    const tmp_22 = m00 * m11;
    const tmp_23 = m10 * m01;
    const t0 = tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31 - (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
    const t1 = tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31 - (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
    const t2 = tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31 - (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
    const t3 = tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21 - (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);
    const d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);
    dst[0] = d * t0;
    dst[1] = d * t1;
    dst[2] = d * t2;
    dst[3] = d * t3;
    dst[4] = d * (tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30 - (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30));
    dst[5] = d * (tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30 - (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30));
    dst[6] = d * (tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30 - (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30));
    dst[7] = d * (tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20 - (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20));
    dst[8] = d * (tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33 - (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33));
    dst[9] = d * (tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33 - (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33));
    dst[10] = d * (tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33 - (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33));
    dst[11] = d * (tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23 - (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23));
    dst[12] = d * (tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12 - (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22));
    dst[13] = d * (tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22 - (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02));
    dst[14] = d * (tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02 - (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12));
    dst[15] = d * (tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12 - (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02));
    return dst;
}
/**
 * Multiplies two 4-by-4 matrices with a on the left and b on the right
 * @param {module:twgl/m4.Mat4} a The matrix on the left.
 * @param {module:twgl/m4.Mat4} b The matrix on the right.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The matrix product of a and b.
 * @memberOf module:twgl/m4
 */ function multiply$1(a, b, dst) {
    dst = dst || new MatType(16);
    const a00 = a[0];
    const a01 = a[1];
    const a02 = a[2];
    const a03 = a[3];
    const a10 = a[4];
    const a11 = a[5];
    const a12 = a[6];
    const a13 = a[7];
    const a20 = a[8];
    const a21 = a[9];
    const a22 = a[10];
    const a23 = a[11];
    const a30 = a[12];
    const a31 = a[13];
    const a32 = a[14];
    const a33 = a[15];
    const b00 = b[0];
    const b01 = b[1];
    const b02 = b[2];
    const b03 = b[3];
    const b10 = b[4];
    const b11 = b[5];
    const b12 = b[6];
    const b13 = b[7];
    const b20 = b[8];
    const b21 = b[9];
    const b22 = b[10];
    const b23 = b[11];
    const b30 = b[12];
    const b31 = b[13];
    const b32 = b[14];
    const b33 = b[15];
    dst[0] = a00 * b00 + a10 * b01 + a20 * b02 + a30 * b03;
    dst[1] = a01 * b00 + a11 * b01 + a21 * b02 + a31 * b03;
    dst[2] = a02 * b00 + a12 * b01 + a22 * b02 + a32 * b03;
    dst[3] = a03 * b00 + a13 * b01 + a23 * b02 + a33 * b03;
    dst[4] = a00 * b10 + a10 * b11 + a20 * b12 + a30 * b13;
    dst[5] = a01 * b10 + a11 * b11 + a21 * b12 + a31 * b13;
    dst[6] = a02 * b10 + a12 * b11 + a22 * b12 + a32 * b13;
    dst[7] = a03 * b10 + a13 * b11 + a23 * b12 + a33 * b13;
    dst[8] = a00 * b20 + a10 * b21 + a20 * b22 + a30 * b23;
    dst[9] = a01 * b20 + a11 * b21 + a21 * b22 + a31 * b23;
    dst[10] = a02 * b20 + a12 * b21 + a22 * b22 + a32 * b23;
    dst[11] = a03 * b20 + a13 * b21 + a23 * b22 + a33 * b23;
    dst[12] = a00 * b30 + a10 * b31 + a20 * b32 + a30 * b33;
    dst[13] = a01 * b30 + a11 * b31 + a21 * b32 + a31 * b33;
    dst[14] = a02 * b30 + a12 * b31 + a22 * b32 + a32 * b33;
    dst[15] = a03 * b30 + a13 * b31 + a23 * b32 + a33 * b33;
    return dst;
}
/**
 * Sets the translation component of a 4-by-4 matrix to the given
 * vector.
 * @param {module:twgl/m4.Mat4} a The matrix.
 * @param {module:twgl/v3.Vec3} v The vector.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The matrix with translation set.
 * @memberOf module:twgl/m4
 */ function setTranslation(a, v, dst) {
    dst = dst || identity();
    if (a !== dst) {
        dst[0] = a[0];
        dst[1] = a[1];
        dst[2] = a[2];
        dst[3] = a[3];
        dst[4] = a[4];
        dst[5] = a[5];
        dst[6] = a[6];
        dst[7] = a[7];
        dst[8] = a[8];
        dst[9] = a[9];
        dst[10] = a[10];
        dst[11] = a[11];
    }
    dst[12] = v[0];
    dst[13] = v[1];
    dst[14] = v[2];
    dst[15] = 1;
    return dst;
}
/**
 * Returns the translation component of a 4-by-4 matrix as a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} [dst] vector to hold result. If not passed a new one is created.
 * @return {module:twgl/v3.Vec3} The translation component of m.
 * @memberOf module:twgl/m4
 */ function getTranslation(m, dst) {
    dst = dst || create();
    dst[0] = m[12];
    dst[1] = m[13];
    dst[2] = m[14];
    return dst;
}
/**
 * Returns an axis of a 4x4 matrix as a vector with 3 entries
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} axis The axis 0 = x, 1 = y, 2 = z;
 * @return {module:twgl/v3.Vec3} [dst] vector.
 * @return {module:twgl/v3.Vec3} The axis component of m.
 * @memberOf module:twgl/m4
 */ function getAxis(m, axis, dst) {
    dst = dst || create();
    const off = axis * 4;
    dst[0] = m[off + 0];
    dst[1] = m[off + 1];
    dst[2] = m[off + 2];
    return dst;
}
/**
 * Sets an axis of a 4x4 matrix as a vector with 3 entries
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v the axis vector
 * @param {number} axis The axis  0 = x, 1 = y, 2 = z;
 * @param {module:twgl/m4.Mat4} [dst] The matrix to set. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The matrix with axis set.
 * @memberOf module:twgl/m4
 */ function setAxis(a, v, axis, dst) {
    if (dst !== a) dst = copy$1(a, dst);
    const off = axis * 4;
    dst[off + 0] = v[0];
    dst[off + 1] = v[1];
    dst[off + 2] = v[2];
    return dst;
}
/**
 * Computes a 4-by-4 perspective transformation matrix given the angular height
 * of the frustum, the aspect ratio, and the near and far clipping planes.  The
 * arguments define a frustum extending in the negative z direction.  The given
 * angle is the vertical angle of the frustum, and the horizontal angle is
 * determined to produce the given aspect ratio.  The arguments near and far are
 * the distances to the near and far clipping planes.  Note that near and far
 * are not z coordinates, but rather they are distances along the negative
 * z-axis.  The matrix generated sends the viewing frustum to the unit box.
 * We assume a unit box extending from -1 to 1 in the x and y dimensions and
 * from 0 to 1 in the z dimension.
 * @param {number} fieldOfViewYInRadians The camera angle from top to bottom (in radians).
 * @param {number} aspect The aspect ratio width / height.
 * @param {number} zNear The depth (negative z coordinate)
 *     of the near clipping plane.
 * @param {number} zFar The depth (negative z coordinate)
 *     of the far clipping plane.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The perspective matrix.
 * @memberOf module:twgl/m4
 */ function perspective(fieldOfViewYInRadians, aspect, zNear, zFar, dst) {
    dst = dst || new MatType(16);
    const f = Math.tan(Math.PI * 0.5 - 0.5 * fieldOfViewYInRadians);
    const rangeInv = 1.0 / (zNear - zFar);
    dst[0] = f / aspect;
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = 0;
    dst[5] = f;
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = 0;
    dst[9] = 0;
    dst[10] = (zNear + zFar) * rangeInv;
    dst[11] = -1;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = zNear * zFar * rangeInv * 2;
    dst[15] = 0;
    return dst;
}
/**
 * Computes a 4-by-4 orthogonal transformation matrix given the left, right,
 * bottom, and top dimensions of the near clipping plane as well as the
 * near and far clipping plane distances.
 * @param {number} left Left side of the near clipping plane viewport.
 * @param {number} right Right side of the near clipping plane viewport.
 * @param {number} bottom Bottom of the near clipping plane viewport.
 * @param {number} top Top of the near clipping plane viewport.
 * @param {number} near The depth (negative z coordinate)
 *     of the near clipping plane.
 * @param {number} far The depth (negative z coordinate)
 *     of the far clipping plane.
 * @param {module:twgl/m4.Mat4} [dst] Output matrix. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The perspective matrix.
 * @memberOf module:twgl/m4
 */ function ortho(left, right, bottom, top, near, far, dst) {
    dst = dst || new MatType(16);
    dst[0] = 2 / (right - left);
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = 0;
    dst[5] = 2 / (top - bottom);
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = 0;
    dst[9] = 0;
    dst[10] = 2 / (near - far);
    dst[11] = 0;
    dst[12] = (right + left) / (left - right);
    dst[13] = (top + bottom) / (bottom - top);
    dst[14] = (far + near) / (near - far);
    dst[15] = 1;
    return dst;
}
/**
 * Computes a 4-by-4 perspective transformation matrix given the left, right,
 * top, bottom, near and far clipping planes. The arguments define a frustum
 * extending in the negative z direction. The arguments near and far are the
 * distances to the near and far clipping planes. Note that near and far are not
 * z coordinates, but rather they are distances along the negative z-axis. The
 * matrix generated sends the viewing frustum to the unit box. We assume a unit
 * box extending from -1 to 1 in the x and y dimensions and from 0 to 1 in the z
 * dimension.
 * @param {number} left The x coordinate of the left plane of the box.
 * @param {number} right The x coordinate of the right plane of the box.
 * @param {number} bottom The y coordinate of the bottom plane of the box.
 * @param {number} top The y coordinate of the right plane of the box.
 * @param {number} near The negative z coordinate of the near plane of the box.
 * @param {number} far The negative z coordinate of the far plane of the box.
 * @param {module:twgl/m4.Mat4} [dst] Output matrix. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The perspective projection matrix.
 * @memberOf module:twgl/m4
 */ function frustum(left, right, bottom, top, near, far, dst) {
    dst = dst || new MatType(16);
    const dx = right - left;
    const dy = top - bottom;
    const dz = near - far;
    dst[0] = 2 * near / dx;
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = 0;
    dst[5] = 2 * near / dy;
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = (left + right) / dx;
    dst[9] = (top + bottom) / dy;
    dst[10] = far / dz;
    dst[11] = -1;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = near * far / dz;
    dst[15] = 0;
    return dst;
}
let xAxis;
let yAxis;
let zAxis;
/**
 * Computes a 4-by-4 look-at transformation.
 *
 * This is a matrix which positions the camera itself. If you want
 * a view matrix (a matrix which moves things in front of the camera)
 * take the inverse of this.
 *
 * @param {module:twgl/v3.Vec3} eye The position of the eye.
 * @param {module:twgl/v3.Vec3} target The position meant to be viewed.
 * @param {module:twgl/v3.Vec3} up A vector pointing up.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The look-at matrix.
 * @memberOf module:twgl/m4
 */ function lookAt(eye, target, up, dst) {
    dst = dst || new MatType(16);
    xAxis = xAxis || create();
    yAxis = yAxis || create();
    zAxis = zAxis || create();
    normalize(subtract(eye, target, zAxis), zAxis);
    normalize(cross(up, zAxis, xAxis), xAxis);
    normalize(cross(zAxis, xAxis, yAxis), yAxis);
    dst[0] = xAxis[0];
    dst[1] = xAxis[1];
    dst[2] = xAxis[2];
    dst[3] = 0;
    dst[4] = yAxis[0];
    dst[5] = yAxis[1];
    dst[6] = yAxis[2];
    dst[7] = 0;
    dst[8] = zAxis[0];
    dst[9] = zAxis[1];
    dst[10] = zAxis[2];
    dst[11] = 0;
    dst[12] = eye[0];
    dst[13] = eye[1];
    dst[14] = eye[2];
    dst[15] = 1;
    return dst;
}
/**
 * Creates a 4-by-4 matrix which translates by the given vector v.
 * @param {module:twgl/v3.Vec3} v The vector by
 *     which to translate.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The translation matrix.
 * @memberOf module:twgl/m4
 */ function translation(v, dst) {
    dst = dst || new MatType(16);
    dst[0] = 1;
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = 0;
    dst[5] = 1;
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = 0;
    dst[9] = 0;
    dst[10] = 1;
    dst[11] = 0;
    dst[12] = v[0];
    dst[13] = v[1];
    dst[14] = v[2];
    dst[15] = 1;
    return dst;
}
/**
 * Translates the given 4-by-4 matrix by the given vector v.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v The vector by
 *     which to translate.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The translated matrix.
 * @memberOf module:twgl/m4
 */ function translate(m, v, dst) {
    dst = dst || new MatType(16);
    const v0 = v[0];
    const v1 = v[1];
    const v2 = v[2];
    const m00 = m[0];
    const m01 = m[1];
    const m02 = m[2];
    const m03 = m[3];
    const m10 = m[4];
    const m11 = m[5];
    const m12 = m[6];
    const m13 = m[7];
    const m20 = m[8];
    const m21 = m[9];
    const m22 = m[10];
    const m23 = m[11];
    const m30 = m[12];
    const m31 = m[13];
    const m32 = m[14];
    const m33 = m[15];
    if (m !== dst) {
        dst[0] = m00;
        dst[1] = m01;
        dst[2] = m02;
        dst[3] = m03;
        dst[4] = m10;
        dst[5] = m11;
        dst[6] = m12;
        dst[7] = m13;
        dst[8] = m20;
        dst[9] = m21;
        dst[10] = m22;
        dst[11] = m23;
    }
    dst[12] = m00 * v0 + m10 * v1 + m20 * v2 + m30;
    dst[13] = m01 * v0 + m11 * v1 + m21 * v2 + m31;
    dst[14] = m02 * v0 + m12 * v1 + m22 * v2 + m32;
    dst[15] = m03 * v0 + m13 * v1 + m23 * v2 + m33;
    return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the x-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */ function rotationX(angleInRadians, dst) {
    dst = dst || new MatType(16);
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);
    dst[0] = 1;
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = 0;
    dst[5] = c;
    dst[6] = s;
    dst[7] = 0;
    dst[8] = 0;
    dst[9] = -s;
    dst[10] = c;
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;
    return dst;
}
/**
 * Rotates the given 4-by-4 matrix around the x-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotated matrix.
 * @memberOf module:twgl/m4
 */ function rotateX(m, angleInRadians, dst) {
    dst = dst || new MatType(16);
    const m10 = m[4];
    const m11 = m[5];
    const m12 = m[6];
    const m13 = m[7];
    const m20 = m[8];
    const m21 = m[9];
    const m22 = m[10];
    const m23 = m[11];
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);
    dst[4] = c * m10 + s * m20;
    dst[5] = c * m11 + s * m21;
    dst[6] = c * m12 + s * m22;
    dst[7] = c * m13 + s * m23;
    dst[8] = c * m20 - s * m10;
    dst[9] = c * m21 - s * m11;
    dst[10] = c * m22 - s * m12;
    dst[11] = c * m23 - s * m13;
    if (m !== dst) {
        dst[0] = m[0];
        dst[1] = m[1];
        dst[2] = m[2];
        dst[3] = m[3];
        dst[12] = m[12];
        dst[13] = m[13];
        dst[14] = m[14];
        dst[15] = m[15];
    }
    return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the y-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */ function rotationY(angleInRadians, dst) {
    dst = dst || new MatType(16);
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);
    dst[0] = c;
    dst[1] = 0;
    dst[2] = -s;
    dst[3] = 0;
    dst[4] = 0;
    dst[5] = 1;
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = s;
    dst[9] = 0;
    dst[10] = c;
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;
    return dst;
}
/**
 * Rotates the given 4-by-4 matrix around the y-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotated matrix.
 * @memberOf module:twgl/m4
 */ function rotateY(m, angleInRadians, dst) {
    dst = dst || new MatType(16);
    const m00 = m[0];
    const m01 = m[1];
    const m02 = m[2];
    const m03 = m[3];
    const m20 = m[8];
    const m21 = m[9];
    const m22 = m[10];
    const m23 = m[11];
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);
    dst[0] = c * m00 - s * m20;
    dst[1] = c * m01 - s * m21;
    dst[2] = c * m02 - s * m22;
    dst[3] = c * m03 - s * m23;
    dst[8] = c * m20 + s * m00;
    dst[9] = c * m21 + s * m01;
    dst[10] = c * m22 + s * m02;
    dst[11] = c * m23 + s * m03;
    if (m !== dst) {
        dst[4] = m[4];
        dst[5] = m[5];
        dst[6] = m[6];
        dst[7] = m[7];
        dst[12] = m[12];
        dst[13] = m[13];
        dst[14] = m[14];
        dst[15] = m[15];
    }
    return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the z-axis by the given angle.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotation matrix.
 * @memberOf module:twgl/m4
 */ function rotationZ(angleInRadians, dst) {
    dst = dst || new MatType(16);
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);
    dst[0] = c;
    dst[1] = s;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = -s;
    dst[5] = c;
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = 0;
    dst[9] = 0;
    dst[10] = 1;
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;
    return dst;
}
/**
 * Rotates the given 4-by-4 matrix around the z-axis by the given
 * angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotated matrix.
 * @memberOf module:twgl/m4
 */ function rotateZ(m, angleInRadians, dst) {
    dst = dst || new MatType(16);
    const m00 = m[0];
    const m01 = m[1];
    const m02 = m[2];
    const m03 = m[3];
    const m10 = m[4];
    const m11 = m[5];
    const m12 = m[6];
    const m13 = m[7];
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);
    dst[0] = c * m00 + s * m10;
    dst[1] = c * m01 + s * m11;
    dst[2] = c * m02 + s * m12;
    dst[3] = c * m03 + s * m13;
    dst[4] = c * m10 - s * m00;
    dst[5] = c * m11 - s * m01;
    dst[6] = c * m12 - s * m02;
    dst[7] = c * m13 - s * m03;
    if (m !== dst) {
        dst[8] = m[8];
        dst[9] = m[9];
        dst[10] = m[10];
        dst[11] = m[11];
        dst[12] = m[12];
        dst[13] = m[13];
        dst[14] = m[14];
        dst[15] = m[15];
    }
    return dst;
}
/**
 * Creates a 4-by-4 matrix which rotates around the given axis by the given
 * angle.
 * @param {module:twgl/v3.Vec3} axis The axis
 *     about which to rotate.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} A matrix which rotates angle radians
 *     around the axis.
 * @memberOf module:twgl/m4
 */ function axisRotation(axis, angleInRadians, dst) {
    dst = dst || new MatType(16);
    let x = axis[0];
    let y = axis[1];
    let z = axis[2];
    const n = Math.sqrt(x * x + y * y + z * z);
    x /= n;
    y /= n;
    z /= n;
    const xx = x * x;
    const yy = y * y;
    const zz = z * z;
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);
    const oneMinusCosine = 1 - c;
    dst[0] = xx + (1 - xx) * c;
    dst[1] = x * y * oneMinusCosine + z * s;
    dst[2] = x * z * oneMinusCosine - y * s;
    dst[3] = 0;
    dst[4] = x * y * oneMinusCosine - z * s;
    dst[5] = yy + (1 - yy) * c;
    dst[6] = y * z * oneMinusCosine + x * s;
    dst[7] = 0;
    dst[8] = x * z * oneMinusCosine + y * s;
    dst[9] = y * z * oneMinusCosine - x * s;
    dst[10] = zz + (1 - zz) * c;
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;
    return dst;
}
/**
 * Rotates the given 4-by-4 matrix around the given axis by the
 * given angle.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} axis The axis
 *     about which to rotate.
 * @param {number} angleInRadians The angle by which to rotate (in radians).
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The rotated matrix.
 * @memberOf module:twgl/m4
 */ function axisRotate(m, axis, angleInRadians, dst) {
    dst = dst || new MatType(16);
    let x = axis[0];
    let y = axis[1];
    let z = axis[2];
    const n = Math.sqrt(x * x + y * y + z * z);
    x /= n;
    y /= n;
    z /= n;
    const xx = x * x;
    const yy = y * y;
    const zz = z * z;
    const c = Math.cos(angleInRadians);
    const s = Math.sin(angleInRadians);
    const oneMinusCosine = 1 - c;
    const r00 = xx + (1 - xx) * c;
    const r01 = x * y * oneMinusCosine + z * s;
    const r02 = x * z * oneMinusCosine - y * s;
    const r10 = x * y * oneMinusCosine - z * s;
    const r11 = yy + (1 - yy) * c;
    const r12 = y * z * oneMinusCosine + x * s;
    const r20 = x * z * oneMinusCosine + y * s;
    const r21 = y * z * oneMinusCosine - x * s;
    const r22 = zz + (1 - zz) * c;
    const m00 = m[0];
    const m01 = m[1];
    const m02 = m[2];
    const m03 = m[3];
    const m10 = m[4];
    const m11 = m[5];
    const m12 = m[6];
    const m13 = m[7];
    const m20 = m[8];
    const m21 = m[9];
    const m22 = m[10];
    const m23 = m[11];
    dst[0] = r00 * m00 + r01 * m10 + r02 * m20;
    dst[1] = r00 * m01 + r01 * m11 + r02 * m21;
    dst[2] = r00 * m02 + r01 * m12 + r02 * m22;
    dst[3] = r00 * m03 + r01 * m13 + r02 * m23;
    dst[4] = r10 * m00 + r11 * m10 + r12 * m20;
    dst[5] = r10 * m01 + r11 * m11 + r12 * m21;
    dst[6] = r10 * m02 + r11 * m12 + r12 * m22;
    dst[7] = r10 * m03 + r11 * m13 + r12 * m23;
    dst[8] = r20 * m00 + r21 * m10 + r22 * m20;
    dst[9] = r20 * m01 + r21 * m11 + r22 * m21;
    dst[10] = r20 * m02 + r21 * m12 + r22 * m22;
    dst[11] = r20 * m03 + r21 * m13 + r22 * m23;
    if (m !== dst) {
        dst[12] = m[12];
        dst[13] = m[13];
        dst[14] = m[14];
        dst[15] = m[15];
    }
    return dst;
}
/**
 * Creates a 4-by-4 matrix which scales in each dimension by an amount given by
 * the corresponding entry in the given vector; assumes the vector has three
 * entries.
 * @param {module:twgl/v3.Vec3} v A vector of
 *     three entries specifying the factor by which to scale in each dimension.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The scaling matrix.
 * @memberOf module:twgl/m4
 */ function scaling(v, dst) {
    dst = dst || new MatType(16);
    dst[0] = v[0];
    dst[1] = 0;
    dst[2] = 0;
    dst[3] = 0;
    dst[4] = 0;
    dst[5] = v[1];
    dst[6] = 0;
    dst[7] = 0;
    dst[8] = 0;
    dst[9] = 0;
    dst[10] = v[2];
    dst[11] = 0;
    dst[12] = 0;
    dst[13] = 0;
    dst[14] = 0;
    dst[15] = 1;
    return dst;
}
/**
 * Scales the given 4-by-4 matrix in each dimension by an amount
 * given by the corresponding entry in the given vector; assumes the vector has
 * three entries.
 * @param {module:twgl/m4.Mat4} m The matrix to be modified.
 * @param {module:twgl/v3.Vec3} v A vector of three entries specifying the
 *     factor by which to scale in each dimension.
 * @param {module:twgl/m4.Mat4} [dst] matrix to hold result. If not passed a new one is created.
 * @return {module:twgl/m4.Mat4} The scaled matrix.
 * @memberOf module:twgl/m4
 */ function scale(m, v, dst) {
    dst = dst || new MatType(16);
    const v0 = v[0];
    const v1 = v[1];
    const v2 = v[2];
    dst[0] = v0 * m[0];
    dst[1] = v0 * m[1];
    dst[2] = v0 * m[2];
    dst[3] = v0 * m[3];
    dst[4] = v1 * m[4];
    dst[5] = v1 * m[5];
    dst[6] = v1 * m[6];
    dst[7] = v1 * m[7];
    dst[8] = v2 * m[8];
    dst[9] = v2 * m[9];
    dst[10] = v2 * m[10];
    dst[11] = v2 * m[11];
    if (m !== dst) {
        dst[12] = m[12];
        dst[13] = m[13];
        dst[14] = m[14];
        dst[15] = m[15];
    }
    return dst;
}
/**
 * Takes a 4-by-4 matrix and a vector with 3 entries,
 * interprets the vector as a point, transforms that point by the matrix, and
 * returns the result as a vector with 3 entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v The point.
 * @param {module:twgl/v3.Vec3} [dst] optional vec3 to store result. If not passed a new one is created.
 * @return {module:twgl/v3.Vec3} The transformed point.
 * @memberOf module:twgl/m4
 */ function transformPoint(m, v, dst) {
    dst = dst || create();
    const v0 = v[0];
    const v1 = v[1];
    const v2 = v[2];
    const d = v0 * m[3] + v1 * m[7] + v2 * m[11] + m[15];
    dst[0] = (v0 * m[0] + v1 * m[4] + v2 * m[8] + m[12]) / d;
    dst[1] = (v0 * m[1] + v1 * m[5] + v2 * m[9] + m[13]) / d;
    dst[2] = (v0 * m[2] + v1 * m[6] + v2 * m[10] + m[14]) / d;
    return dst;
}
/**
 * Takes a 4-by-4 matrix and a vector with 3 entries, interprets the vector as a
 * direction, transforms that direction by the matrix, and returns the result;
 * assumes the transformation of 3-dimensional space represented by the matrix
 * is parallel-preserving, i.e. any combination of rotation, scaling and
 * translation, but not a perspective distortion. Returns a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v The direction.
 * @param {module:twgl/v3.Vec3} [dst] optional Vec3 to store result. If not passed a new one is created.
 * @return {module:twgl/v3.Vec3} The transformed direction.
 * @memberOf module:twgl/m4
 */ function transformDirection(m, v, dst) {
    dst = dst || create();
    const v0 = v[0];
    const v1 = v[1];
    const v2 = v[2];
    dst[0] = v0 * m[0] + v1 * m[4] + v2 * m[8];
    dst[1] = v0 * m[1] + v1 * m[5] + v2 * m[9];
    dst[2] = v0 * m[2] + v1 * m[6] + v2 * m[10];
    return dst;
}
/**
 * Takes a 4-by-4 matrix m and a vector v with 3 entries, interprets the vector
 * as a normal to a surface, and computes a vector which is normal upon
 * transforming that surface by the matrix. The effect of this function is the
 * same as transforming v (as a direction) by the inverse-transpose of m.  This
 * function assumes the transformation of 3-dimensional space represented by the
 * matrix is parallel-preserving, i.e. any combination of rotation, scaling and
 * translation, but not a perspective distortion.  Returns a vector with 3
 * entries.
 * @param {module:twgl/m4.Mat4} m The matrix.
 * @param {module:twgl/v3.Vec3} v The normal.
 * @param {module:twgl/v3.Vec3} [dst] The direction. If not passed a new one is created.
 * @return {module:twgl/v3.Vec3} The transformed normal.
 * @memberOf module:twgl/m4
 */ function transformNormal(m, v, dst) {
    dst = dst || create();
    const mi = inverse(m);
    const v0 = v[0];
    const v1 = v[1];
    const v2 = v[2];
    dst[0] = v0 * mi[0] + v1 * mi[1] + v2 * mi[2];
    dst[1] = v0 * mi[4] + v1 * mi[5] + v2 * mi[6];
    dst[2] = v0 * mi[8] + v1 * mi[9] + v2 * mi[10];
    return dst;
}
var m4 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    axisRotate: axisRotate,
    axisRotation: axisRotation,
    copy: copy$1,
    create: create$1,
    frustum: frustum,
    getAxis: getAxis,
    getTranslation: getTranslation,
    identity: identity,
    inverse: inverse,
    lookAt: lookAt,
    multiply: multiply$1,
    negate: negate$1,
    ortho: ortho,
    perspective: perspective,
    rotateX: rotateX,
    rotateY: rotateY,
    rotateZ: rotateZ,
    rotationX: rotationX,
    rotationY: rotationY,
    rotationZ: rotationZ,
    scale: scale,
    scaling: scaling,
    setAxis: setAxis,
    setDefaultType: setDefaultType$1,
    setTranslation: setTranslation,
    transformDirection: transformDirection,
    transformNormal: transformNormal,
    transformPoint: transformPoint,
    translate: translate,
    translation: translation,
    transpose: transpose
});
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */ /* DataType */ const BYTE = 0x1400;
const UNSIGNED_BYTE = 0x1401;
const SHORT = 0x1402;
const UNSIGNED_SHORT = 0x1403;
const INT = 0x1404;
const UNSIGNED_INT = 0x1405;
const FLOAT = 0x1406;
const UNSIGNED_SHORT_4_4_4_4 = 0x8033;
const UNSIGNED_SHORT_5_5_5_1 = 0x8034;
const UNSIGNED_SHORT_5_6_5 = 0x8363;
const HALF_FLOAT = 0x140B;
const UNSIGNED_INT_2_10_10_10_REV = 0x8368;
const UNSIGNED_INT_10F_11F_11F_REV = 0x8C3B;
const UNSIGNED_INT_5_9_9_9_REV = 0x8C3E;
const FLOAT_32_UNSIGNED_INT_24_8_REV = 0x8DAD;
const UNSIGNED_INT_24_8 = 0x84FA;
const glTypeToTypedArray = {};
{
    const tt = glTypeToTypedArray;
    tt[BYTE] = Int8Array;
    tt[UNSIGNED_BYTE] = Uint8Array;
    tt[SHORT] = Int16Array;
    tt[UNSIGNED_SHORT] = Uint16Array;
    tt[INT] = Int32Array;
    tt[UNSIGNED_INT] = Uint32Array;
    tt[FLOAT] = Float32Array;
    tt[UNSIGNED_SHORT_4_4_4_4] = Uint16Array;
    tt[UNSIGNED_SHORT_5_5_5_1] = Uint16Array;
    tt[UNSIGNED_SHORT_5_6_5] = Uint16Array;
    tt[HALF_FLOAT] = Uint16Array;
    tt[UNSIGNED_INT_2_10_10_10_REV] = Uint32Array;
    tt[UNSIGNED_INT_10F_11F_11F_REV] = Uint32Array;
    tt[UNSIGNED_INT_5_9_9_9_REV] = Uint32Array;
    tt[FLOAT_32_UNSIGNED_INT_24_8_REV] = Uint32Array;
    tt[UNSIGNED_INT_24_8] = Uint32Array;
}/**
 * Get the GL type for a typedArray
 * @param {ArrayBufferView} typedArray a typedArray
 * @return {number} the GL type for array. For example pass in an `Int8Array` and `gl.BYTE` will
 *   be returned. Pass in a `Uint32Array` and `gl.UNSIGNED_INT` will be returned
 * @memberOf module:twgl/typedArray
 */ function getGLTypeForTypedArray(typedArray) {
    if (typedArray instanceof Int8Array) return BYTE;
     // eslint-disable-line
    if (typedArray instanceof Uint8Array) return UNSIGNED_BYTE;
     // eslint-disable-line
    if (typedArray instanceof Uint8ClampedArray) return UNSIGNED_BYTE;
     // eslint-disable-line
    if (typedArray instanceof Int16Array) return SHORT;
     // eslint-disable-line
    if (typedArray instanceof Uint16Array) return UNSIGNED_SHORT;
     // eslint-disable-line
    if (typedArray instanceof Int32Array) return INT;
     // eslint-disable-line
    if (typedArray instanceof Uint32Array) return UNSIGNED_INT;
     // eslint-disable-line
    if (typedArray instanceof Float32Array) return FLOAT;
     // eslint-disable-line
    throw new Error("unsupported typed array type");
}
/**
 * Get the GL type for a typedArray type
 * @param {ArrayBufferView} typedArrayType a typedArray constructor
 * @return {number} the GL type for type. For example pass in `Int8Array` and `gl.BYTE` will
 *   be returned. Pass in `Uint32Array` and `gl.UNSIGNED_INT` will be returned
 * @memberOf module:twgl/typedArray
 */ function getGLTypeForTypedArrayType(typedArrayType) {
    if (typedArrayType === Int8Array) return BYTE;
     // eslint-disable-line
    if (typedArrayType === Uint8Array) return UNSIGNED_BYTE;
     // eslint-disable-line
    if (typedArrayType === Uint8ClampedArray) return UNSIGNED_BYTE;
     // eslint-disable-line
    if (typedArrayType === Int16Array) return SHORT;
     // eslint-disable-line
    if (typedArrayType === Uint16Array) return UNSIGNED_SHORT;
     // eslint-disable-line
    if (typedArrayType === Int32Array) return INT;
     // eslint-disable-line
    if (typedArrayType === Uint32Array) return UNSIGNED_INT;
     // eslint-disable-line
    if (typedArrayType === Float32Array) return FLOAT;
     // eslint-disable-line
    throw new Error("unsupported typed array type");
}
/**
 * Get the typed array constructor for a given GL type
 * @param {number} type the GL type. (eg: `gl.UNSIGNED_INT`)
 * @return {function} the constructor for a the corresponding typed array. (eg. `Uint32Array`).
 * @memberOf module:twgl/typedArray
 */ function getTypedArrayTypeForGLType(type) {
    const CTOR = glTypeToTypedArray[type];
    if (!CTOR) throw new Error("unknown gl type");
    return CTOR;
}
const isArrayBuffer = typeof SharedArrayBuffer !== "undefined" ? function isArrayBufferOrSharedArrayBuffer(a) {
    return a && a.buffer && (a.buffer instanceof ArrayBuffer || a.buffer instanceof SharedArrayBuffer);
} : function isArrayBuffer(a) {
    return a && a.buffer && a.buffer instanceof ArrayBuffer;
};
var typedarrays = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    getGLTypeForTypedArray: getGLTypeForTypedArray,
    getGLTypeForTypedArrayType: getGLTypeForTypedArrayType,
    getTypedArrayTypeForGLType: getTypedArrayTypeForGLType,
    isArrayBuffer: isArrayBuffer
});
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */ /* eslint no-console: "off" */ /**
 * Copy named properties
 *
 * @param {string[]} names names of properties to copy
 * @param {object} src object to copy properties from
 * @param {object} dst object to copy properties to
 * @private
 */ function copyNamedProperties(names, src, dst) {
    names.forEach(function(name) {
        const value = src[name];
        if (value !== undefined) dst[name] = value;
    });
}
/**
 * Copies properties from source to dest only if a matching key is in dest
 *
 * @param {Object.<string, ?>} src the source
 * @param {Object.<string, ?>} dst the dest
 * @private
 */ function copyExistingProperties(src, dst) {
    Object.keys(dst).forEach(function(key) {
        if (dst.hasOwnProperty(key) && src.hasOwnProperty(key)) dst[key] = src[key];
    });
}
function error(...args) {
    console.error(...args);
}
function warn(...args) {
    console.warn(...args);
}
function isBuffer(gl, t) {
    return typeof WebGLBuffer !== "undefined" && t instanceof WebGLBuffer;
}
function isRenderbuffer(gl, t) {
    return typeof WebGLRenderbuffer !== "undefined" && t instanceof WebGLRenderbuffer;
}
function isShader(gl, t) {
    return typeof WebGLShader !== "undefined" && t instanceof WebGLShader;
}
function isTexture(gl, t) {
    return typeof WebGLTexture !== "undefined" && t instanceof WebGLTexture;
}
function isSampler(gl, t) {
    return typeof WebGLSampler !== "undefined" && t instanceof WebGLSampler;
}
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */ const STATIC_DRAW = 0x88e4;
const ARRAY_BUFFER = 0x8892;
const ELEMENT_ARRAY_BUFFER = 0x8893;
const BUFFER_SIZE = 0x8764;
const BYTE$1 = 0x1400;
const UNSIGNED_BYTE$1 = 0x1401;
const SHORT$1 = 0x1402;
const UNSIGNED_SHORT$1 = 0x1403;
const INT$1 = 0x1404;
const UNSIGNED_INT$1 = 0x1405;
const FLOAT$1 = 0x1406;
const defaults = {
    attribPrefix: ""
};
/**
 * Sets the default attrib prefix
 *
 * When writing shaders I prefer to name attributes with `a_`, uniforms with `u_` and varyings with `v_`
 * as it makes it clear where they came from. But, when building geometry I prefer using un-prefixed names.
 *
 * In other words I'll create arrays of geometry like this
 *
 *     var arrays = {
 *       position: ...
 *       normal: ...
 *       texcoord: ...
 *     };
 *
 * But need those mapped to attributes and my attributes start with `a_`.
 *
 * @deprecated see {@link module:twgl.setDefaults}
 * @param {string} prefix prefix for attribs
 * @memberOf module:twgl/attributes
 */ function setAttributePrefix(prefix) {
    defaults.attribPrefix = prefix;
}
function setDefaults(newDefaults) {
    copyExistingProperties(newDefaults, defaults);
}
function setBufferFromTypedArray(gl, type, buffer, array, drawType) {
    gl.bindBuffer(type, buffer);
    gl.bufferData(type, array, drawType || STATIC_DRAW);
}
/**
 * Given typed array creates a WebGLBuffer and copies the typed array
 * into it.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {ArrayBuffer|SharedArrayBuffer|ArrayBufferView|WebGLBuffer} typedArray the typed array. Note: If a WebGLBuffer is passed in it will just be returned. No action will be taken
 * @param {number} [type] the GL bind type for the buffer. Default = `gl.ARRAY_BUFFER`.
 * @param {number} [drawType] the GL draw type for the buffer. Default = 'gl.STATIC_DRAW`.
 * @return {WebGLBuffer} the created WebGLBuffer
 * @memberOf module:twgl/attributes
 */ function createBufferFromTypedArray(gl, typedArray, type, drawType) {
    if (isBuffer(gl, typedArray)) return typedArray;
    type = type || ARRAY_BUFFER;
    const buffer = gl.createBuffer();
    setBufferFromTypedArray(gl, type, buffer, typedArray, drawType);
    return buffer;
}
function isIndices(name) {
    return name === "indices";
}
// This is really just a guess. Though I can't really imagine using
// anything else? Maybe for some compression?
function getNormalizationForTypedArray(typedArray) {
    if (typedArray instanceof Int8Array) return true;
     // eslint-disable-line
    if (typedArray instanceof Uint8Array) return true;
     // eslint-disable-line
    return false;
}
// This is really just a guess. Though I can't really imagine using
// anything else? Maybe for some compression?
function getNormalizationForTypedArrayType(typedArrayType) {
    if (typedArrayType === Int8Array) return true;
     // eslint-disable-line
    if (typedArrayType === Uint8Array) return true;
     // eslint-disable-line
    return false;
}
function getArray(array) {
    return array.length ? array : array.data;
}
const texcoordRE = /coord|texture/i;
const colorRE = /color|colour/i;
function guessNumComponentsFromName(name, length) {
    let numComponents;
    if (texcoordRE.test(name)) numComponents = 2;
    else if (colorRE.test(name)) numComponents = 4;
    else numComponents = 3; // position, normals, indices ...
    if (length % numComponents > 0) throw new Error(`Can not guess numComponents for attribute '${name}'. Tried ${numComponents} but ${length} values is not evenly divisible by ${numComponents}. You should specify it.`);
    return numComponents;
}
function getNumComponents(array, arrayName) {
    return array.numComponents || array.size || guessNumComponentsFromName(arrayName, getArray(array).length);
}
function makeTypedArray(array, name) {
    if (isArrayBuffer(array)) return array;
    if (isArrayBuffer(array.data)) return array.data;
    if (Array.isArray(array)) array = {
        data: array
    };
    let Type = array.type;
    if (!Type) {
        if (isIndices(name)) Type = Uint16Array;
        else Type = Float32Array;
    }
    return new Type(array.data);
}
/**
 * The info for an attribute. This is effectively just the arguments to `gl.vertexAttribPointer` plus the WebGLBuffer
 * for the attribute.
 *
 * @typedef {Object} AttribInfo
 * @property {number[]|ArrayBufferView} [value] a constant value for the attribute. Note: if this is set the attribute will be
 *    disabled and set to this constant value and all other values will be ignored.
 * @property {number} [numComponents] the number of components for this attribute.
 * @property {number} [size] synonym for `numComponents`.
 * @property {number} [type] the type of the attribute (eg. `gl.FLOAT`, `gl.UNSIGNED_BYTE`, etc...) Default = `gl.FLOAT`
 * @property {boolean} [normalize] whether or not to normalize the data. Default = false
 * @property {number} [offset] offset into buffer in bytes. Default = 0
 * @property {number} [stride] the stride in bytes per element. Default = 0
 * @property {number} [divisor] the divisor in instances. Default = undefined. Note: undefined = don't call gl.vertexAttribDivisor
 *    where as anything else = do call it with this value
 * @property {WebGLBuffer} buffer the buffer that contains the data for this attribute
 * @property {number} [drawType] the draw type passed to gl.bufferData. Default = gl.STATIC_DRAW
 * @memberOf module:twgl
 */ /**
 * Use this type of array spec when TWGL can't guess the type or number of components of an array
 * @typedef {Object} FullArraySpec
 * @property {number[]|ArrayBufferView} [value] a constant value for the attribute. Note: if this is set the attribute will be
 *    disabled and set to this constant value and all other values will be ignored.
 * @property {(number|number[]|ArrayBufferView)} data The data of the array. A number alone becomes the number of elements of type.
 * @property {number} [numComponents] number of components for `vertexAttribPointer`. Default is based on the name of the array.
 *    If `coord` is in the name assumes `numComponents = 2`.
 *    If `color` is in the name assumes `numComponents = 4`.
 *    otherwise assumes `numComponents = 3`
 * @property {constructor} [type] type. This is only used if `data` is a JavaScript array. It is the constructor for the typedarray. (eg. `Uint8Array`).
 * For example if you want colors in a `Uint8Array` you might have a `FullArraySpec` like `{ type: Uint8Array, data: [255,0,255,255, ...], }`.
 * @property {number} [size] synonym for `numComponents`.
 * @property {boolean} [normalize] normalize for `vertexAttribPointer`. Default is true if type is `Int8Array` or `Uint8Array` otherwise false.
 * @property {number} [stride] stride for `vertexAttribPointer`. Default = 0
 * @property {number} [offset] offset for `vertexAttribPointer`. Default = 0
 * @property {number} [divisor] divisor for `vertexAttribDivisor`. Default = undefined. Note: undefined = don't call gl.vertexAttribDivisor
 *    where as anything else = do call it with this value
 * @property {string} [attrib] name of attribute this array maps to. Defaults to same name as array prefixed by the default attribPrefix.
 * @property {string} [name] synonym for `attrib`.
 * @property {string} [attribName] synonym for `attrib`.
 * @property {WebGLBuffer} [buffer] Buffer to use for this attribute. This lets you use your own buffer
 *    but you will need to supply `numComponents` and `type`. You can effectively pass an `AttribInfo`
 *    to provide this. Example:
 *
 *         const bufferInfo1 = twgl.createBufferInfoFromArrays(gl, {
 *           position: [1, 2, 3, ... ],
 *         });
 *         const bufferInfo2 = twgl.createBufferInfoFromArrays(gl, {
 *           position: bufferInfo1.attribs.position,  // use the same buffer from bufferInfo1
 *         });
 *
 * @memberOf module:twgl
 */ /**
 * An individual array in {@link module:twgl.Arrays}
 *
 * When passed to {@link module:twgl.createBufferInfoFromArrays} if an ArraySpec is `number[]` or `ArrayBufferView`
 * the types will be guessed based on the name. `indices` will be `Uint16Array`, everything else will
 * be `Float32Array`. If an ArraySpec is a number it's the number of floats for an empty (zeroed) buffer.
 *
 * @typedef {(number|number[]|ArrayBufferView|module:twgl.FullArraySpec)} ArraySpec
 * @memberOf module:twgl
 */ /**
 * This is a JavaScript object of arrays by name. The names should match your shader's attributes. If your
 * attributes have a common prefix you can specify it by calling {@link module:twgl.setAttributePrefix}.
 *
 *     Bare JavaScript Arrays
 *
 *         var arrays = {
 *            position: [-1, 1, 0],
 *            normal: [0, 1, 0],
 *            ...
 *         }
 *
 *     Bare TypedArrays
 *
 *         var arrays = {
 *            position: new Float32Array([-1, 1, 0]),
 *            color: new Uint8Array([255, 128, 64, 255]),
 *            ...
 *         }
 *
 * *   Will guess at `numComponents` if not specified based on name.
 *
 *     If `coord` is in the name assumes `numComponents = 2`
 *
 *     If `color` is in the name assumes `numComponents = 4`
 *
 *     otherwise assumes `numComponents = 3`
 *
 * Objects with various fields. See {@link module:twgl.FullArraySpec}.
 *
 *     var arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *     };
 *
 * @typedef {Object.<string, module:twgl.ArraySpec>} Arrays
 * @memberOf module:twgl
 */ /**
 * Creates a set of attribute data and WebGLBuffers from set of arrays
 *
 * Given
 *
 *      var arrays = {
 *        position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *        texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *        normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *        color:    { numComponents: 4, data: [255, 255, 255, 255, 255, 0, 0, 255, 0, 0, 255, 255], type: Uint8Array, },
 *        indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *      };
 *
 * returns something like
 *
 *      var attribs = {
 *        position: { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        texcoord: { numComponents: 2, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        normal:   { numComponents: 3, type: gl.FLOAT,         normalize: false, buffer: WebGLBuffer, },
 *        color:    { numComponents: 4, type: gl.UNSIGNED_BYTE, normalize: true,  buffer: WebGLBuffer, },
 *      };
 *
 * notes:
 *
 * *   Arrays can take various forms
 *
 *     Bare JavaScript Arrays
 *
 *         var arrays = {
 *            position: [-1, 1, 0],
 *            normal: [0, 1, 0],
 *            ...
 *         }
 *
 *     Bare TypedArrays
 *
 *         var arrays = {
 *            position: new Float32Array([-1, 1, 0]),
 *            color: new Uint8Array([255, 128, 64, 255]),
 *            ...
 *         }
 *
 * *   Will guess at `numComponents` if not specified based on name.
 *
 *     If `coord` is in the name assumes `numComponents = 2`
 *
 *     If `color` is in the name assumes `numComponents = 4`
 *
 *     otherwise assumes `numComponents = 3`
 *
 * @param {WebGLRenderingContext} gl The webgl rendering context.
 * @param {module:twgl.Arrays} arrays The arrays
 * @param {module:twgl.BufferInfo} [srcBufferInfo] a BufferInfo to copy from
 *   This lets you share buffers. Any arrays you supply will override
 *   the buffers from srcBufferInfo.
 * @return {Object.<string, module:twgl.AttribInfo>} the attribs
 * @memberOf module:twgl/attributes
 */ function createAttribsFromArrays(gl, arrays) {
    const attribs = {};
    Object.keys(arrays).forEach(function(arrayName) {
        if (!isIndices(arrayName)) {
            const array = arrays[arrayName];
            const attribName = array.attrib || array.name || array.attribName || defaults.attribPrefix + arrayName;
            if (array.value) {
                if (!Array.isArray(array.value) && !isArrayBuffer(array.value)) throw new Error("array.value is not array or typedarray");
                attribs[attribName] = {
                    value: array.value
                };
            } else {
                let buffer;
                let type;
                let normalization;
                let numComponents;
                if (array.buffer && array.buffer instanceof WebGLBuffer) {
                    buffer = array.buffer;
                    numComponents = array.numComponents || array.size;
                    type = array.type;
                    normalization = array.normalize;
                } else if (typeof array === "number" || typeof array.data === "number") {
                    const numValues = array.data || array;
                    const arrayType = array.type || Float32Array;
                    const numBytes = numValues * arrayType.BYTES_PER_ELEMENT;
                    type = getGLTypeForTypedArrayType(arrayType);
                    normalization = array.normalize !== undefined ? array.normalize : getNormalizationForTypedArrayType(arrayType);
                    numComponents = array.numComponents || array.size || guessNumComponentsFromName(arrayName, numValues);
                    buffer = gl.createBuffer();
                    gl.bindBuffer(ARRAY_BUFFER, buffer);
                    gl.bufferData(ARRAY_BUFFER, numBytes, array.drawType || STATIC_DRAW);
                } else {
                    const typedArray = makeTypedArray(array, arrayName);
                    buffer = createBufferFromTypedArray(gl, typedArray, undefined, array.drawType);
                    type = getGLTypeForTypedArray(typedArray);
                    normalization = array.normalize !== undefined ? array.normalize : getNormalizationForTypedArray(typedArray);
                    numComponents = getNumComponents(array, arrayName);
                }
                attribs[attribName] = {
                    buffer: buffer,
                    numComponents: numComponents,
                    type: type,
                    normalize: normalization,
                    stride: array.stride || 0,
                    offset: array.offset || 0,
                    divisor: array.divisor === undefined ? undefined : array.divisor,
                    drawType: array.drawType
                };
            }
        }
    });
    gl.bindBuffer(ARRAY_BUFFER, null);
    return attribs;
}
/**
 * Sets the contents of a buffer attached to an attribInfo
 *
 * This is helper function to dynamically update a buffer.
 *
 * Let's say you make a bufferInfo
 *
 *     var arrays = {
 *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
 *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
 *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
 *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
 *     };
 *     var bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);
 *
 *  And you want to dynamically update the positions. You could do this
 *
 *     // assuming arrays.position has already been updated with new data.
 *     twgl.setAttribInfoBufferFromArray(gl, bufferInfo.attribs.position, arrays.position);
 *
 * @param {WebGLRenderingContext} gl
 * @param {AttribInfo} attribInfo The attribInfo who's buffer contents to set. NOTE: If you have an attribute prefix
 *   the name of the attribute will include the prefix.
 * @param {ArraySpec} array Note: it is arguably inefficient to pass in anything but a typed array because anything
 *    else will have to be converted to a typed array before it can be used by WebGL. During init time that
 *    inefficiency is usually not important but if you're updating data dynamically best to be efficient.
 * @param {number} [offset] an optional offset into the buffer. This is only an offset into the WebGL buffer
 *    not the array. To pass in an offset into the array itself use a typed array and create an `ArrayBufferView`
 *    for the portion of the array you want to use.
 *
 *        var someArray = new Float32Array(1000); // an array with 1000 floats
 *        var someSubArray = new Float32Array(someArray.buffer, offsetInBytes, sizeInUnits); // a view into someArray
 *
 *    Now you can pass `someSubArray` into setAttribInfoBufferFromArray`
 * @memberOf module:twgl/attributes
 */ function setAttribInfoBufferFromArray(gl, attribInfo, array, offset) {
    array = makeTypedArray(array);
    if (offset !== undefined) {
        gl.bindBuffer(ARRAY_BUFFER, attribInfo.buffer);
        gl.bufferSubData(ARRAY_BUFFER, offset, array);
    } else setBufferFromTypedArray(gl, ARRAY_BUFFER, attribInfo.buffer, array, attribInfo.drawType);
}
function getBytesPerValueForGLType(gl, type) {
    if (type === BYTE$1) return 1; // eslint-disable-line
    if (type === UNSIGNED_BYTE$1) return 1; // eslint-disable-line
    if (type === SHORT$1) return 2; // eslint-disable-line
    if (type === UNSIGNED_SHORT$1) return 2; // eslint-disable-line
    if (type === INT$1) return 4; // eslint-disable-line
    if (type === UNSIGNED_INT$1) return 4; // eslint-disable-line
    if (type === FLOAT$1) return 4; // eslint-disable-line
    return 0;
}
// Tries to get the number of elements from a set of arrays.
const positionKeys = [
    "position",
    "positions",
    "a_position"
];
function getNumElementsFromNonIndexedArrays(arrays) {
    let key;
    let ii;
    for(ii = 0; ii < positionKeys.length; ++ii){
        key = positionKeys[ii];
        if (key in arrays) break;
    }
    if (ii === positionKeys.length) key = Object.keys(arrays)[0];
    const array = arrays[key];
    const length = getArray(array).length;
    if (length === undefined) return 1; // There's no arrays
    const numComponents = getNumComponents(array, key);
    const numElements = length / numComponents;
    if (length % numComponents > 0) throw new Error(`numComponents ${numComponents} not correct for length ${length}`);
    return numElements;
}
function getNumElementsFromAttributes(gl, attribs) {
    let key;
    let ii;
    for(ii = 0; ii < positionKeys.length; ++ii){
        key = positionKeys[ii];
        if (key in attribs) break;
        key = defaults.attribPrefix + key;
        if (key in attribs) break;
    }
    if (ii === positionKeys.length) key = Object.keys(attribs)[0];
    const attrib = attribs[key];
    if (!attrib.buffer) return 1; // There's no buffer
    gl.bindBuffer(ARRAY_BUFFER, attrib.buffer);
    const numBytes = gl.getBufferParameter(ARRAY_BUFFER, BUFFER_SIZE);
    gl.bindBuffer(ARRAY_BUFFER, null);
    const bytesPerValue = getBytesPerValueForGLType(gl, attrib.type);
    const totalElements = numBytes / bytesPerValue;
    const numComponents = attrib.numComponents || attrib.size;
    // TODO: check stride
    const numElements = totalElements / numComponents;
    if (numElements % 1 !== 0) throw new Error(`numComponents ${numComponents} not correct for length ${length}`);
    return numElements;
}
/**
 * @typedef {Object} BufferInfo
 * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
 * @property {number} [elementType] The type of indices `UNSIGNED_BYTE`, `UNSIGNED_SHORT` etc..
 * @property {WebGLBuffer} [indices] The indices `ELEMENT_ARRAY_BUFFER` if any indices exist.
 * @property {Object.<string, module:twgl.AttribInfo>} [attribs] The attribs appropriate to call `setAttributes`
 * @memberOf module:twgl
 */ /**
 * Creates a BufferInfo from an object of arrays.
 *
 * This can be passed to {@link module:twgl.setBuffersAndAttributes} and to
 * {@link module:twgl:drawBufferInfo}.
 *
 * Given an object like
 *
 *     var arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *       normal:   { numComponents: 3, data: [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],     },
 *       indices:  { numComponents: 3, data: [0, 1, 2, 1, 2, 3],                       },
 *     };
 *
 *  Creates an BufferInfo like this
 *
 *     bufferInfo = {
 *       numElements: 4,        // or whatever the number of elements is
 *       indices: WebGLBuffer,  // this property will not exist if there are no indices
 *       attribs: {
 *         position: { buffer: WebGLBuffer, numComponents: 3, },
 *         normal:   { buffer: WebGLBuffer, numComponents: 3, },
 *         texcoord: { buffer: WebGLBuffer, numComponents: 2, },
 *       },
 *     };
 *
 *  The properties of arrays can be JavaScript arrays in which case the number of components
 *  will be guessed.
 *
 *     var arrays = {
 *        position: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0],
 *        texcoord: [0, 0, 0, 1, 1, 0, 1, 1],
 *        normal:   [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1],
 *        indices:  [0, 1, 2, 1, 2, 3],
 *     };
 *
 *  They can also be TypedArrays
 *
 *     var arrays = {
 *        position: new Float32Array([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]),
 *        texcoord: new Float32Array([0, 0, 0, 1, 1, 0, 1, 1]),
 *        normal:   new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]),
 *        indices:  new Uint16Array([0, 1, 2, 1, 2, 3]),
 *     };
 *
 *  Or AugmentedTypedArrays
 *
 *     var positions = createAugmentedTypedArray(3, 4);
 *     var texcoords = createAugmentedTypedArray(2, 4);
 *     var normals   = createAugmentedTypedArray(3, 4);
 *     var indices   = createAugmentedTypedArray(3, 2, Uint16Array);
 *
 *     positions.push([0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0]);
 *     texcoords.push([0, 0, 0, 1, 1, 0, 1, 1]);
 *     normals.push([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
 *     indices.push([0, 1, 2, 1, 2, 3]);
 *
 *     var arrays = {
 *        position: positions,
 *        texcoord: texcoords,
 *        normal:   normals,
 *        indices:  indices,
 *     };
 *
 * For the last example it is equivalent to
 *
 *     var bufferInfo = {
 *       attribs: {
 *         position: { numComponents: 3, buffer: gl.createBuffer(), },
 *         texcoord: { numComponents: 2, buffer: gl.createBuffer(), },
 *         normal: { numComponents: 3, buffer: gl.createBuffer(), },
 *       },
 *       indices: gl.createBuffer(),
 *       numElements: 6,
 *     };
 *
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.position.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.position, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.texcoord.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.texcoord, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, bufferInfo.attribs.normal.buffer);
 *     gl.bufferData(gl.ARRAY_BUFFER, arrays.normal, gl.STATIC_DRAW);
 *     gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, bufferInfo.indices);
 *     gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, arrays.indices, gl.STATIC_DRAW);
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.Arrays} arrays Your data
 * @param {module:twgl.BufferInfo} [srcBufferInfo] An existing
 *        buffer info to start from. WebGLBuffers etc specified
 *        in the srcBufferInfo will be used in a new BufferInfo
 *        with any arrays specified overriding the ones in
 *        srcBufferInfo.
 * @return {module:twgl.BufferInfo} A BufferInfo
 * @memberOf module:twgl/attributes
 */ function createBufferInfoFromArrays(gl, arrays, srcBufferInfo) {
    const newAttribs = createAttribsFromArrays(gl, arrays);
    const bufferInfo = Object.assign({}, srcBufferInfo ? srcBufferInfo : {});
    bufferInfo.attribs = Object.assign({}, srcBufferInfo ? srcBufferInfo.attribs : {}, newAttribs);
    const indices = arrays.indices;
    if (indices) {
        const newIndices = makeTypedArray(indices, "indices");
        bufferInfo.indices = createBufferFromTypedArray(gl, newIndices, ELEMENT_ARRAY_BUFFER);
        bufferInfo.numElements = newIndices.length;
        bufferInfo.elementType = getGLTypeForTypedArray(newIndices);
    } else if (!bufferInfo.numElements) bufferInfo.numElements = getNumElementsFromAttributes(gl, bufferInfo.attribs);
    return bufferInfo;
}
/**
 * Creates a buffer from an array, typed array, or array spec
 *
 * Given something like this
 *
 *     [1, 2, 3],
 *
 * or
 *
 *     new Uint16Array([1,2,3]);
 *
 * or
 *
 *     {
 *        data: [1, 2, 3],
 *        type: Uint8Array,
 *     }
 *
 * returns a WebGLBuffer that contains the given data.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {module:twgl.ArraySpec} array an array, typed array, or array spec.
 * @param {string} arrayName name of array. Used to guess the type if type can not be derived otherwise.
 * @return {WebGLBuffer} a WebGLBuffer containing the data in array.
 * @memberOf module:twgl/attributes
 */ function createBufferFromArray(gl, array, arrayName) {
    const type = arrayName === "indices" ? ELEMENT_ARRAY_BUFFER : ARRAY_BUFFER;
    const typedArray = makeTypedArray(array, arrayName);
    return createBufferFromTypedArray(gl, typedArray, type);
}
/**
 * Creates buffers from arrays or typed arrays
 *
 * Given something like this
 *
 *     var arrays = {
 *        positions: [1, 2, 3],
 *        normals: [0, 0, 1],
 *     }
 *
 * returns something like
 *
 *     buffers = {
 *       positions: WebGLBuffer,
 *       normals: WebGLBuffer,
 *     }
 *
 * If the buffer is named 'indices' it will be made an ELEMENT_ARRAY_BUFFER.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {module:twgl.Arrays} arrays
 * @return {Object<string, WebGLBuffer>} returns an object with one WebGLBuffer per array
 * @memberOf module:twgl/attributes
 */ function createBuffersFromArrays(gl, arrays) {
    const buffers = {};
    Object.keys(arrays).forEach(function(key) {
        buffers[key] = createBufferFromArray(gl, arrays[key], key);
    });
    // Ugh!
    if (arrays.indices) {
        buffers.numElements = arrays.indices.length;
        buffers.elementType = getGLTypeForTypedArray(makeTypedArray(arrays.indices));
    } else buffers.numElements = getNumElementsFromNonIndexedArrays(arrays);
    return buffers;
}
var attributes = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    createAttribsFromArrays: createAttribsFromArrays,
    createBuffersFromArrays: createBuffersFromArrays,
    createBufferFromArray: createBufferFromArray,
    createBufferFromTypedArray: createBufferFromTypedArray,
    createBufferInfoFromArrays: createBufferInfoFromArrays,
    setAttribInfoBufferFromArray: setAttribInfoBufferFromArray,
    setAttributePrefix: setAttributePrefix,
    setAttributeDefaults_: setDefaults,
    getNumComponents_: getNumComponents,
    getArray_: getArray
});
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */ const getArray$1 = getArray; // eslint-disable-line
const getNumComponents$1 = getNumComponents; // eslint-disable-line
/**
 * @typedef {(Int8Array|Uint8Array|Int16Array|Uint16Array|Int32Array|Uint32Array|Float32Array)} TypedArray
 */ /**
 * Add `push` to a typed array. It just keeps a 'cursor'
 * and allows use to `push` values into the array so we
 * don't have to manually compute offsets
 * @param {TypedArray} typedArray TypedArray to augment
 * @param {number} numComponents number of components.
 * @private
 */ function augmentTypedArray(typedArray, numComponents) {
    let cursor = 0;
    typedArray.push = function() {
        for(let ii = 0; ii < arguments.length; ++ii){
            const value = arguments[ii];
            if (value instanceof Array || isArrayBuffer(value)) for(let jj = 0; jj < value.length; ++jj)typedArray[cursor++] = value[jj];
            else typedArray[cursor++] = value;
        }
    };
    typedArray.reset = function(opt_index) {
        cursor = opt_index || 0;
    };
    typedArray.numComponents = numComponents;
    Object.defineProperty(typedArray, "numElements", {
        get: function() {
            return this.length / this.numComponents | 0;
        }
    });
    return typedArray;
}
/**
 * creates a typed array with a `push` function attached
 * so that you can easily *push* values.
 *
 * `push` can take multiple arguments. If an argument is an array each element
 * of the array will be added to the typed array.
 *
 * Example:
 *
 *     const array = createAugmentedTypedArray(3, 2);  // creates a Float32Array with 6 values
 *     array.push(1, 2, 3);
 *     array.push([4, 5, 6]);
 *     // array now contains [1, 2, 3, 4, 5, 6]
 *
 * Also has `numComponents` and `numElements` properties.
 *
 * @param {number} numComponents number of components
 * @param {number} numElements number of elements. The total size of the array will be `numComponents * numElements`.
 * @param {constructor} opt_type A constructor for the type. Default = `Float32Array`.
 * @return {ArrayBufferView} A typed array.
 * @memberOf module:twgl/primitives
 */ function createAugmentedTypedArray(numComponents, numElements, opt_type) {
    const Type = opt_type || Float32Array;
    return augmentTypedArray(new Type(numComponents * numElements), numComponents);
}
function allButIndices(name) {
    return name !== "indices";
}
/**
 * Given indexed vertices creates a new set of vertices un-indexed by expanding the indexed vertices.
 * @param {Object.<string, TypedArray>} vertices The indexed vertices to deindex
 * @return {Object.<string, TypedArray>} The deindexed vertices
 * @memberOf module:twgl/primitives
 */ function deindexVertices(vertices) {
    const indices = vertices.indices;
    const newVertices = {};
    const numElements = indices.length;
    function expandToUnindexed(channel) {
        const srcBuffer = vertices[channel];
        const numComponents = srcBuffer.numComponents;
        const dstBuffer = createAugmentedTypedArray(numComponents, numElements, srcBuffer.constructor);
        for(let ii = 0; ii < numElements; ++ii){
            const ndx = indices[ii];
            const offset = ndx * numComponents;
            for(let jj = 0; jj < numComponents; ++jj)dstBuffer.push(srcBuffer[offset + jj]);
        }
        newVertices[channel] = dstBuffer;
    }
    Object.keys(vertices).filter(allButIndices).forEach(expandToUnindexed);
    return newVertices;
}
/**
 * flattens the normals of deindexed vertices in place.
 * @param {Object.<string, TypedArray>} vertices The deindexed vertices who's normals to flatten
 * @return {Object.<string, TypedArray>} The flattened vertices (same as was passed in)
 * @memberOf module:twgl/primitives
 */ function flattenNormals(vertices) {
    if (vertices.indices) throw new Error("can not flatten normals of indexed vertices. deindex them first");
    const normals = vertices.normal;
    const numNormals = normals.length;
    for(let ii = 0; ii < numNormals; ii += 9){
        // pull out the 3 normals for this triangle
        const nax = normals[ii + 0];
        const nay = normals[ii + 1];
        const naz = normals[ii + 2];
        const nbx = normals[ii + 3];
        const nby = normals[ii + 4];
        const nbz = normals[ii + 5];
        const ncx = normals[ii + 6];
        const ncy = normals[ii + 7];
        const ncz = normals[ii + 8];
        // add them
        let nx = nax + nbx + ncx;
        let ny = nay + nby + ncy;
        let nz = naz + nbz + ncz;
        // normalize them
        const length = Math.sqrt(nx * nx + ny * ny + nz * nz);
        nx /= length;
        ny /= length;
        nz /= length;
        // copy them back in
        normals[ii + 0] = nx;
        normals[ii + 1] = ny;
        normals[ii + 2] = nz;
        normals[ii + 3] = nx;
        normals[ii + 4] = ny;
        normals[ii + 5] = nz;
        normals[ii + 6] = nx;
        normals[ii + 7] = ny;
        normals[ii + 8] = nz;
    }
    return vertices;
}
function applyFuncToV3Array(array, matrix, fn) {
    const len = array.length;
    const tmp = new Float32Array(3);
    for(let ii = 0; ii < len; ii += 3){
        fn(matrix, [
            array[ii],
            array[ii + 1],
            array[ii + 2]
        ], tmp);
        array[ii] = tmp[0];
        array[ii + 1] = tmp[1];
        array[ii + 2] = tmp[2];
    }
}
function transformNormal$1(mi, v, dst) {
    dst = dst || create();
    const v0 = v[0];
    const v1 = v[1];
    const v2 = v[2];
    dst[0] = v0 * mi[0] + v1 * mi[1] + v2 * mi[2];
    dst[1] = v0 * mi[4] + v1 * mi[5] + v2 * mi[6];
    dst[2] = v0 * mi[8] + v1 * mi[9] + v2 * mi[10];
    return dst;
}
/**
 * Reorients directions by the given matrix..
 * @param {(number[]|TypedArray)} array The array. Assumes value floats per element.
 * @param {module:twgl/m4.Mat4} matrix A matrix to multiply by.
 * @return {(number[]|TypedArray)} the same array that was passed in
 * @memberOf module:twgl/primitives
 */ function reorientDirections(array, matrix) {
    applyFuncToV3Array(array, matrix, transformDirection);
    return array;
}
/**
 * Reorients normals by the inverse-transpose of the given
 * matrix..
 * @param {(number[]|TypedArray)} array The array. Assumes value floats per element.
 * @param {module:twgl/m4.Mat4} matrix A matrix to multiply by.
 * @return {(number[]|TypedArray)} the same array that was passed in
 * @memberOf module:twgl/primitives
 */ function reorientNormals(array, matrix) {
    applyFuncToV3Array(array, inverse(matrix), transformNormal$1);
    return array;
}
/**
 * Reorients positions by the given matrix. In other words, it
 * multiplies each vertex by the given matrix.
 * @param {(number[]|TypedArray)} array The array. Assumes value floats per element.
 * @param {module:twgl/m4.Mat4} matrix A matrix to multiply by.
 * @return {(number[]|TypedArray)} the same array that was passed in
 * @memberOf module:twgl/primitives
 */ function reorientPositions(array, matrix) {
    applyFuncToV3Array(array, matrix, transformPoint);
    return array;
}
/**
 * @typedef {(number[]|TypedArray)} NativeArrayOrTypedArray
 */ /**
 * Reorients arrays by the given matrix. Assumes arrays have
 * names that contains 'pos' could be reoriented as positions,
 * 'binorm' or 'tan' as directions, and 'norm' as normals.
 *
 * @param {Object.<string, NativeArrayOrTypedArray>} arrays The vertices to reorient
 * @param {module:twgl/m4.Mat4} matrix matrix to reorient by.
 * @return {Object.<string, NativeArrayOrTypedArray>} same arrays that were passed in.
 * @memberOf module:twgl/primitives
 */ function reorientVertices(arrays, matrix) {
    Object.keys(arrays).forEach(function(name) {
        const array = arrays[name];
        if (name.indexOf("pos") >= 0) reorientPositions(array, matrix);
        else if (name.indexOf("tan") >= 0 || name.indexOf("binorm") >= 0) reorientDirections(array, matrix);
        else if (name.indexOf("norm") >= 0) reorientNormals(array, matrix);
    });
    return arrays;
}
/**
 * Creates XY quad BufferInfo
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0, 0.5);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {Object.<string, WebGLBuffer>} the created XY Quad BufferInfo
 * @memberOf module:twgl/primitives
 * @function createXYQuadBuffers
 */ /**
 * Creates XY quad Buffers
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadBufferInfo(gl, 1, 0, 0.5);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {module:twgl.BufferInfo} the created XY Quad buffers
 * @memberOf module:twgl/primitives
 * @function createXYQuadBufferInfo
 */ /**
 * Creates XY quad vertices
 *
 * The default with no parameters will return a 2x2 quad with values from -1 to +1.
 * If you want a unit quad with that goes from 0 to 1 you'd call it with
 *
 *     twgl.primitives.createXYQuadVertices(1, 0.5, 0.5);
 *
 * If you want a unit quad centered above 0,0 you'd call it with
 *
 *     twgl.primitives.createXYQuadVertices(1, 0, 0.5);
 *
 * @param {number} [size] the size across the quad. Defaults to 2 which means vertices will go from -1 to +1
 * @param {number} [xOffset] the amount to offset the quad in X
 * @param {number} [yOffset] the amount to offset the quad in Y
 * @return {Object.<string, TypedArray>} the created XY Quad vertices
 * @memberOf module:twgl/primitives
 */ function createXYQuadVertices(size, xOffset, yOffset) {
    size = size || 2;
    xOffset = xOffset || 0;
    yOffset = yOffset || 0;
    size *= 0.5;
    return {
        position: {
            numComponents: 2,
            data: [
                xOffset + -1 * size,
                yOffset + -1 * size,
                xOffset + 1 * size,
                yOffset + -1 * size,
                xOffset + -1 * size,
                yOffset + 1 * size,
                xOffset + 1 * size,
                yOffset + 1 * size, 
            ]
        },
        normal: [
            0,
            0,
            1,
            0,
            0,
            1,
            0,
            0,
            1,
            0,
            0,
            1, 
        ],
        texcoord: [
            0,
            0,
            1,
            0,
            0,
            1,
            1,
            1, 
        ],
        indices: [
            0,
            1,
            2,
            2,
            1,
            3
        ]
    };
}
/**
 * Creates XZ plane BufferInfo.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {module:twgl/m4.Mat4} [matrix] A matrix by which to multiply all the vertices.
 * @return {module:twgl.BufferInfo} The created plane BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createPlaneBufferInfo
 */ /**
 * Creates XZ plane buffers.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {module:twgl/m4.Mat4} [matrix] A matrix by which to multiply all the vertices.
 * @return {Object.<string, WebGLBuffer>} The created plane buffers.
 * @memberOf module:twgl/primitives
 * @function createPlaneBuffers
 */ /**
 * Creates XZ plane vertices.
 *
 * The created plane has position, normal, and texcoord data
 *
 * @param {number} [width] Width of the plane. Default = 1
 * @param {number} [depth] Depth of the plane. Default = 1
 * @param {number} [subdivisionsWidth] Number of steps across the plane. Default = 1
 * @param {number} [subdivisionsDepth] Number of steps down the plane. Default = 1
 * @param {module:twgl/m4.Mat4} [matrix] A matrix by which to multiply all the vertices.
 * @return {Object.<string, TypedArray>} The created plane vertices.
 * @memberOf module:twgl/primitives
 */ function createPlaneVertices(width, depth, subdivisionsWidth, subdivisionsDepth, matrix) {
    width = width || 1;
    depth = depth || 1;
    subdivisionsWidth = subdivisionsWidth || 1;
    subdivisionsDepth = subdivisionsDepth || 1;
    matrix = matrix || identity();
    const numVertices = (subdivisionsWidth + 1) * (subdivisionsDepth + 1);
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    for(let z = 0; z <= subdivisionsDepth; z++)for(let x = 0; x <= subdivisionsWidth; x++){
        const u = x / subdivisionsWidth;
        const v = z / subdivisionsDepth;
        positions.push(width * u - width * 0.5, 0, depth * v - depth * 0.5);
        normals.push(0, 1, 0);
        texcoords.push(u, v);
    }
    const numVertsAcross = subdivisionsWidth + 1;
    const indices = createAugmentedTypedArray(3, subdivisionsWidth * subdivisionsDepth * 2, Uint16Array);
    for(let z1 = 0; z1 < subdivisionsDepth; z1++)for(let x1 = 0; x1 < subdivisionsWidth; x1++){
        // Make triangle 1 of quad.
        indices.push((z1 + 0) * numVertsAcross + x1, (z1 + 1) * numVertsAcross + x1, (z1 + 0) * numVertsAcross + x1 + 1);
        // Make triangle 2 of quad.
        indices.push((z1 + 1) * numVertsAcross + x1, (z1 + 1) * numVertsAcross + x1 + 1, (z1 + 0) * numVertsAcross + x1 + 1);
    }
    const arrays = reorientVertices({
        position: positions,
        normal: normals,
        texcoord: texcoords,
        indices: indices
    }, matrix);
    return arrays;
}
/**
 * Creates sphere BufferInfo.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {module:twgl.BufferInfo} The created sphere BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createSphereBufferInfo
 */ /**
 * Creates sphere buffers.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {Object.<string, WebGLBuffer>} The created sphere buffers.
 * @memberOf module:twgl/primitives
 * @function createSphereBuffers
 */ /**
 * Creates sphere vertices.
 *
 * The created sphere has position, normal, and texcoord data
 *
 * @param {number} radius radius of the sphere.
 * @param {number} subdivisionsAxis number of steps around the sphere.
 * @param {number} subdivisionsHeight number of vertically on the sphere.
 * @param {number} [opt_startLatitudeInRadians] where to start the
 *     top of the sphere. Default = 0.
 * @param {number} [opt_endLatitudeInRadians] Where to end the
 *     bottom of the sphere. Default = Math.PI.
 * @param {number} [opt_startLongitudeInRadians] where to start
 *     wrapping the sphere. Default = 0.
 * @param {number} [opt_endLongitudeInRadians] where to end
 *     wrapping the sphere. Default = 2 * Math.PI.
 * @return {Object.<string, TypedArray>} The created sphere vertices.
 * @memberOf module:twgl/primitives
 */ function createSphereVertices(radius, subdivisionsAxis, subdivisionsHeight, opt_startLatitudeInRadians, opt_endLatitudeInRadians, opt_startLongitudeInRadians, opt_endLongitudeInRadians) {
    if (subdivisionsAxis <= 0 || subdivisionsHeight <= 0) throw new Error("subdivisionAxis and subdivisionHeight must be > 0");
    opt_startLatitudeInRadians = opt_startLatitudeInRadians || 0;
    opt_endLatitudeInRadians = opt_endLatitudeInRadians || Math.PI;
    opt_startLongitudeInRadians = opt_startLongitudeInRadians || 0;
    opt_endLongitudeInRadians = opt_endLongitudeInRadians || Math.PI * 2;
    const latRange = opt_endLatitudeInRadians - opt_startLatitudeInRadians;
    const longRange = opt_endLongitudeInRadians - opt_startLongitudeInRadians;
    // We are going to generate our sphere by iterating through its
    // spherical coordinates and generating 2 triangles for each quad on a
    // ring of the sphere.
    const numVertices = (subdivisionsAxis + 1) * (subdivisionsHeight + 1);
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    // Generate the individual vertices in our vertex buffer.
    for(let y = 0; y <= subdivisionsHeight; y++)for(let x = 0; x <= subdivisionsAxis; x++){
        // Generate a vertex based on its spherical coordinates
        const u = x / subdivisionsAxis;
        const v = y / subdivisionsHeight;
        const theta = longRange * u + opt_startLongitudeInRadians;
        const phi = latRange * v + opt_startLatitudeInRadians;
        const sinTheta = Math.sin(theta);
        const cosTheta = Math.cos(theta);
        const sinPhi = Math.sin(phi);
        const cosPhi = Math.cos(phi);
        const ux = cosTheta * sinPhi;
        const uy = cosPhi;
        const uz = sinTheta * sinPhi;
        positions.push(radius * ux, radius * uy, radius * uz);
        normals.push(ux, uy, uz);
        texcoords.push(1 - u, v);
    }
    const numVertsAround = subdivisionsAxis + 1;
    const indices = createAugmentedTypedArray(3, subdivisionsAxis * subdivisionsHeight * 2, Uint16Array);
    for(let x2 = 0; x2 < subdivisionsAxis; x2++)for(let y1 = 0; y1 < subdivisionsHeight; y1++){
        // Make triangle 1 of quad.
        indices.push((y1 + 0) * numVertsAround + x2, (y1 + 0) * numVertsAround + x2 + 1, (y1 + 1) * numVertsAround + x2);
        // Make triangle 2 of quad.
        indices.push((y1 + 1) * numVertsAround + x2, (y1 + 0) * numVertsAround + x2 + 1, (y1 + 1) * numVertsAround + x2 + 1);
    }
    return {
        position: positions,
        normal: normals,
        texcoord: texcoords,
        indices: indices
    };
}
/**
 * Array of the indices of corners of each face of a cube.
 * @type {Array.<number[]>}
 * @private
 */ const CUBE_FACE_INDICES = [
    [
        3,
        7,
        5,
        1
    ],
    [
        6,
        2,
        0,
        4
    ],
    [
        6,
        7,
        3,
        2
    ],
    [
        0,
        1,
        5,
        4
    ],
    [
        7,
        6,
        4,
        5
    ],
    [
        2,
        3,
        1,
        0
    ]
];
/**
 * Creates a BufferInfo for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] width, height and depth of the cube.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCubeBufferInfo
 */ /**
 * Creates the buffers and indices for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} [size] width, height and depth of the cube.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCubeBuffers
 */ /**
 * Creates the vertices and indices for a cube.
 *
 * The cube is created around the origin. (-size / 2, size / 2).
 *
 * @param {number} [size] width, height and depth of the cube.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */ function createCubeVertices(size) {
    size = size || 1;
    const k = size / 2;
    const cornerVertices = [
        [
            -k,
            -k,
            -k
        ],
        [
            +k,
            -k,
            -k
        ],
        [
            -k,
            +k,
            -k
        ],
        [
            +k,
            +k,
            -k
        ],
        [
            -k,
            -k,
            +k
        ],
        [
            +k,
            -k,
            +k
        ],
        [
            -k,
            +k,
            +k
        ],
        [
            +k,
            +k,
            +k
        ], 
    ];
    const faceNormals = [
        [
            1,
            0,
            0
        ],
        [
            -1,
            0,
            0
        ],
        [
            0,
            1,
            0
        ],
        [
            0,
            -1,
            0
        ],
        [
            0,
            0,
            1
        ],
        [
            0,
            0,
            -1
        ], 
    ];
    const uvCoords = [
        [
            1,
            0
        ],
        [
            0,
            0
        ],
        [
            0,
            1
        ],
        [
            1,
            1
        ], 
    ];
    const numVertices = 24;
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    const indices = createAugmentedTypedArray(3, 12, Uint16Array);
    for(let f = 0; f < 6; ++f){
        const faceIndices = CUBE_FACE_INDICES[f];
        for(let v = 0; v < 4; ++v){
            const position = cornerVertices[faceIndices[v]];
            const normal = faceNormals[f];
            const uv = uvCoords[v];
            // Each face needs all four vertices because the normals and texture
            // coordinates are not all the same.
            positions.push(position);
            normals.push(normal);
            texcoords.push(uv);
        }
        // Two triangles make a square face.
        const offset = 4 * f;
        indices.push(offset + 0, offset + 1, offset + 2);
        indices.push(offset + 0, offset + 2, offset + 3);
    }
    return {
        position: positions,
        normal: normals,
        texcoord: texcoords,
        indices: indices
    };
}
/**
 * Creates a BufferInfo for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {module:twgl.BufferInfo} The created cone BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createTruncatedConeBufferInfo
 */ /**
 * Creates buffers for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, WebGLBuffer>} The created cone buffers.
 * @memberOf module:twgl/primitives
 * @function createTruncatedConeBuffers
 */ /**
 * Creates vertices for a truncated cone, which is like a cylinder
 * except that it has different top and bottom radii. A truncated cone
 * can also be used to create cylinders and regular cones. The
 * truncated cone will be created centered about the origin, with the
 * y axis as its vertical axis. .
 *
 * @param {number} bottomRadius Bottom radius of truncated cone.
 * @param {number} topRadius Top radius of truncated cone.
 * @param {number} height Height of truncated cone.
 * @param {number} radialSubdivisions The number of subdivisions around the
 *     truncated cone.
 * @param {number} verticalSubdivisions The number of subdivisions down the
 *     truncated cone.
 * @param {boolean} [opt_topCap] Create top cap. Default = true.
 * @param {boolean} [opt_bottomCap] Create bottom cap. Default = true.
 * @return {Object.<string, TypedArray>} The created cone vertices.
 * @memberOf module:twgl/primitives
 */ function createTruncatedConeVertices(bottomRadius, topRadius, height, radialSubdivisions, verticalSubdivisions, opt_topCap, opt_bottomCap) {
    if (radialSubdivisions < 3) throw new Error("radialSubdivisions must be 3 or greater");
    if (verticalSubdivisions < 1) throw new Error("verticalSubdivisions must be 1 or greater");
    const topCap = opt_topCap === undefined ? true : opt_topCap;
    const bottomCap = opt_bottomCap === undefined ? true : opt_bottomCap;
    const extra = (topCap ? 2 : 0) + (bottomCap ? 2 : 0);
    const numVertices = (radialSubdivisions + 1) * (verticalSubdivisions + 1 + extra);
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    const indices = createAugmentedTypedArray(3, radialSubdivisions * (verticalSubdivisions + extra / 2) * 2, Uint16Array);
    const vertsAroundEdge = radialSubdivisions + 1;
    // The slant of the cone is constant across its surface
    const slant = Math.atan2(bottomRadius - topRadius, height);
    const cosSlant = Math.cos(slant);
    const sinSlant = Math.sin(slant);
    const start = topCap ? -2 : 0;
    const end = verticalSubdivisions + (bottomCap ? 2 : 0);
    for(let yy = start; yy <= end; ++yy){
        let v = yy / verticalSubdivisions;
        let y = height * v;
        let ringRadius;
        if (yy < 0) {
            y = 0;
            v = 1;
            ringRadius = bottomRadius;
        } else if (yy > verticalSubdivisions) {
            y = height;
            v = 1;
            ringRadius = topRadius;
        } else ringRadius = bottomRadius + (topRadius - bottomRadius) * (yy / verticalSubdivisions);
        if (yy === -2 || yy === verticalSubdivisions + 2) {
            ringRadius = 0;
            v = 0;
        }
        y -= height / 2;
        for(let ii = 0; ii < vertsAroundEdge; ++ii){
            const sin = Math.sin(ii * Math.PI * 2 / radialSubdivisions);
            const cos = Math.cos(ii * Math.PI * 2 / radialSubdivisions);
            positions.push(sin * ringRadius, y, cos * ringRadius);
            if (yy < 0) normals.push(0, -1, 0);
            else if (yy > verticalSubdivisions) normals.push(0, 1, 0);
            else if (ringRadius === 0.0) normals.push(0, 0, 0);
            else normals.push(sin * cosSlant, sinSlant, cos * cosSlant);
            texcoords.push(ii / radialSubdivisions, 1 - v);
        }
    }
    for(let yy1 = 0; yy1 < verticalSubdivisions + extra; ++yy1){
        if (yy1 === 1 && topCap || yy1 === verticalSubdivisions + extra - 2 && bottomCap) continue;
        for(let ii = 0; ii < radialSubdivisions; ++ii){
            indices.push(vertsAroundEdge * (yy1 + 0) + 0 + ii, vertsAroundEdge * (yy1 + 0) + 1 + ii, vertsAroundEdge * (yy1 + 1) + 1 + ii);
            indices.push(vertsAroundEdge * (yy1 + 0) + 0 + ii, vertsAroundEdge * (yy1 + 1) + 1 + ii, vertsAroundEdge * (yy1 + 1) + 0 + ii);
        }
    }
    return {
        position: positions,
        normal: normals,
        texcoord: texcoords,
        indices: indices
    };
}
/**
 * Expands RLE data
 * @param {number[]} rleData data in format of run-length, x, y, z, run-length, x, y, z
 * @param {number[]} [padding] value to add each entry with.
 * @return {number[]} the expanded rleData
 * @private
 */ function expandRLEData(rleData, padding) {
    padding = padding || [];
    const data = [];
    for(let ii = 0; ii < rleData.length; ii += 4){
        const runLength = rleData[ii];
        const element = rleData.slice(ii + 1, ii + 4);
        element.push.apply(element, padding);
        for(let jj = 0; jj < runLength; ++jj)data.push.apply(data, element);
    }
    return data;
}
/**
 * Creates 3D 'F' BufferInfo.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function create3DFBufferInfo
 */ /**
 * Creates 3D 'F' buffers.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function create3DFBuffers
 */ /**
 * Creates 3D 'F' vertices.
 * An 'F' is useful because you can easily tell which way it is oriented.
 * The created 'F' has position, normal, texcoord, and color arrays.
 *
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */ function create3DFVertices() {
    const positions = [
        // left column front
        0,
        0,
        0,
        0,
        150,
        0,
        30,
        0,
        0,
        0,
        150,
        0,
        30,
        150,
        0,
        30,
        0,
        0,
        // top rung front
        30,
        0,
        0,
        30,
        30,
        0,
        100,
        0,
        0,
        30,
        30,
        0,
        100,
        30,
        0,
        100,
        0,
        0,
        // middle rung front
        30,
        60,
        0,
        30,
        90,
        0,
        67,
        60,
        0,
        30,
        90,
        0,
        67,
        90,
        0,
        67,
        60,
        0,
        // left column back
        0,
        0,
        30,
        30,
        0,
        30,
        0,
        150,
        30,
        0,
        150,
        30,
        30,
        0,
        30,
        30,
        150,
        30,
        // top rung back
        30,
        0,
        30,
        100,
        0,
        30,
        30,
        30,
        30,
        30,
        30,
        30,
        100,
        0,
        30,
        100,
        30,
        30,
        // middle rung back
        30,
        60,
        30,
        67,
        60,
        30,
        30,
        90,
        30,
        30,
        90,
        30,
        67,
        60,
        30,
        67,
        90,
        30,
        // top
        0,
        0,
        0,
        100,
        0,
        0,
        100,
        0,
        30,
        0,
        0,
        0,
        100,
        0,
        30,
        0,
        0,
        30,
        // top rung front
        100,
        0,
        0,
        100,
        30,
        0,
        100,
        30,
        30,
        100,
        0,
        0,
        100,
        30,
        30,
        100,
        0,
        30,
        // under top rung
        30,
        30,
        0,
        30,
        30,
        30,
        100,
        30,
        30,
        30,
        30,
        0,
        100,
        30,
        30,
        100,
        30,
        0,
        // between top rung and middle
        30,
        30,
        0,
        30,
        60,
        30,
        30,
        30,
        30,
        30,
        30,
        0,
        30,
        60,
        0,
        30,
        60,
        30,
        // top of middle rung
        30,
        60,
        0,
        67,
        60,
        30,
        30,
        60,
        30,
        30,
        60,
        0,
        67,
        60,
        0,
        67,
        60,
        30,
        // front of middle rung
        67,
        60,
        0,
        67,
        90,
        30,
        67,
        60,
        30,
        67,
        60,
        0,
        67,
        90,
        0,
        67,
        90,
        30,
        // bottom of middle rung.
        30,
        90,
        0,
        30,
        90,
        30,
        67,
        90,
        30,
        30,
        90,
        0,
        67,
        90,
        30,
        67,
        90,
        0,
        // front of bottom
        30,
        90,
        0,
        30,
        150,
        30,
        30,
        90,
        30,
        30,
        90,
        0,
        30,
        150,
        0,
        30,
        150,
        30,
        // bottom
        0,
        150,
        0,
        0,
        150,
        30,
        30,
        150,
        30,
        0,
        150,
        0,
        30,
        150,
        30,
        30,
        150,
        0,
        // left side
        0,
        0,
        0,
        0,
        0,
        30,
        0,
        150,
        30,
        0,
        0,
        0,
        0,
        150,
        30,
        0,
        150,
        0, 
    ];
    const texcoords = [
        // left column front
        0.22,
        0.19,
        0.22,
        0.79,
        0.34,
        0.19,
        0.22,
        0.79,
        0.34,
        0.79,
        0.34,
        0.19,
        // top rung front
        0.34,
        0.19,
        0.34,
        0.31,
        0.62,
        0.19,
        0.34,
        0.31,
        0.62,
        0.31,
        0.62,
        0.19,
        // middle rung front
        0.34,
        0.43,
        0.34,
        0.55,
        0.49,
        0.43,
        0.34,
        0.55,
        0.49,
        0.55,
        0.49,
        0.43,
        // left column back
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        // top rung back
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        // middle rung back
        0,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        1,
        1,
        // top
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        0,
        1,
        1,
        0,
        1,
        // top rung front
        0,
        0,
        1,
        0,
        1,
        1,
        0,
        0,
        1,
        1,
        0,
        1,
        // under top rung
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        0,
        // between top rung and middle
        0,
        0,
        1,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        // top of middle rung
        0,
        0,
        1,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        // front of middle rung
        0,
        0,
        1,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        // bottom of middle rung.
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        0,
        // front of bottom
        0,
        0,
        1,
        1,
        0,
        1,
        0,
        0,
        1,
        0,
        1,
        1,
        // bottom
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        0,
        // left side
        0,
        0,
        0,
        1,
        1,
        1,
        0,
        0,
        1,
        1,
        1,
        0, 
    ];
    const normals = expandRLEData([
        // left column front
        // top rung front
        // middle rung front
        18,
        0,
        0,
        1,
        // left column back
        // top rung back
        // middle rung back
        18,
        0,
        0,
        -1,
        // top
        6,
        0,
        1,
        0,
        // top rung front
        6,
        1,
        0,
        0,
        // under top rung
        6,
        0,
        -1,
        0,
        // between top rung and middle
        6,
        1,
        0,
        0,
        // top of middle rung
        6,
        0,
        1,
        0,
        // front of middle rung
        6,
        1,
        0,
        0,
        // bottom of middle rung.
        6,
        0,
        -1,
        0,
        // front of bottom
        6,
        1,
        0,
        0,
        // bottom
        6,
        0,
        -1,
        0,
        // left side
        6,
        -1,
        0,
        0, 
    ]);
    const colors = expandRLEData([
        // left column front
        // top rung front
        // middle rung front
        18,
        200,
        70,
        120,
        // left column back
        // top rung back
        // middle rung back
        18,
        80,
        70,
        200,
        // top
        6,
        70,
        200,
        210,
        // top rung front
        6,
        200,
        200,
        70,
        // under top rung
        6,
        210,
        100,
        70,
        // between top rung and middle
        6,
        210,
        160,
        70,
        // top of middle rung
        6,
        70,
        180,
        210,
        // front of middle rung
        6,
        100,
        70,
        210,
        // bottom of middle rung.
        6,
        76,
        210,
        100,
        // front of bottom
        6,
        140,
        210,
        80,
        // bottom
        6,
        90,
        130,
        110,
        // left side
        6,
        160,
        160,
        220, 
    ], [
        255
    ]);
    const numVerts = positions.length / 3;
    const arrays = {
        position: createAugmentedTypedArray(3, numVerts),
        texcoord: createAugmentedTypedArray(2, numVerts),
        normal: createAugmentedTypedArray(3, numVerts),
        color: createAugmentedTypedArray(4, numVerts, Uint8Array),
        indices: createAugmentedTypedArray(3, numVerts / 3, Uint16Array)
    };
    arrays.position.push(positions);
    arrays.texcoord.push(texcoords);
    arrays.normal.push(normals);
    arrays.color.push(colors);
    for(let ii = 0; ii < numVerts; ++ii)arrays.indices.push(ii);
    return arrays;
}
/**
 * Creates crescent BufferInfo.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCresentBufferInfo
 */ /**
 * Creates crescent buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCresentBuffers
 */ /**
 * Creates crescent vertices.
 *
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 * @function createCresentBuffers
 */ /**
 * Creates crescent BufferInfo.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCrescentBufferInfo
 */ /**
 * Creates crescent buffers.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createCrescentBuffers
 */ /**
 * Creates crescent vertices.
 *
 * @param {number} verticalRadius The vertical radius of the crescent.
 * @param {number} outerRadius The outer radius of the crescent.
 * @param {number} innerRadius The inner radius of the crescent.
 * @param {number} thickness The thickness of the crescent.
 * @param {number} subdivisionsDown number of steps around the crescent.
 * @param {number} [startOffset] Where to start arc. Default 0.
 * @param {number} [endOffset] Where to end arg. Default 1.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */ function createCrescentVertices(verticalRadius, outerRadius, innerRadius, thickness, subdivisionsDown, startOffset, endOffset) {
    if (subdivisionsDown <= 0) throw new Error("subdivisionDown must be > 0");
    startOffset = startOffset || 0;
    endOffset = endOffset || 1;
    const subdivisionsThick = 2;
    const offsetRange = endOffset - startOffset;
    const numVertices = (subdivisionsDown + 1) * 2 * (2 + subdivisionsThick);
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    function lerp1(a, b, s) {
        return a + (b - a) * s;
    }
    function createArc(arcRadius, x, normalMult, normalAdd, uMult, uAdd) {
        for(let z = 0; z <= subdivisionsDown; z++){
            const uBack = x / (subdivisionsThick - 1);
            const v = z / subdivisionsDown;
            const xBack = (uBack - 0.5) * 2;
            const angle = (startOffset + v * offsetRange) * Math.PI;
            const s = Math.sin(angle);
            const c = Math.cos(angle);
            const radius = lerp1(verticalRadius, arcRadius, s);
            const px = xBack * thickness;
            const py = c * verticalRadius;
            const pz = s * radius;
            positions.push(px, py, pz);
            const n = add(multiply([
                0,
                s,
                c
            ], normalMult), normalAdd);
            normals.push(n);
            texcoords.push(uBack * uMult + uAdd, v);
        }
    }
    // Generate the individual vertices in our vertex buffer.
    for(let x3 = 0; x3 < subdivisionsThick; x3++){
        const uBack = (x3 / (subdivisionsThick - 1) - 0.5) * 2;
        createArc(outerRadius, x3, [
            1,
            1,
            1
        ], [
            0,
            0,
            0
        ], 1, 0);
        createArc(outerRadius, x3, [
            0,
            0,
            0
        ], [
            uBack,
            0,
            0
        ], 0, 0);
        createArc(innerRadius, x3, [
            1,
            1,
            1
        ], [
            0,
            0,
            0
        ], 1, 0);
        createArc(innerRadius, x3, [
            0,
            0,
            0
        ], [
            uBack,
            0,
            0
        ], 0, 1);
    }
    // Do outer surface.
    const indices = createAugmentedTypedArray(3, subdivisionsDown * 2 * (2 + subdivisionsThick), Uint16Array);
    function createSurface(leftArcOffset, rightArcOffset) {
        for(let z = 0; z < subdivisionsDown; ++z){
            // Make triangle 1 of quad.
            indices.push(leftArcOffset + z + 0, leftArcOffset + z + 1, rightArcOffset + z + 0);
            // Make triangle 2 of quad.
            indices.push(leftArcOffset + z + 1, rightArcOffset + z + 1, rightArcOffset + z + 0);
        }
    }
    const numVerticesDown = subdivisionsDown + 1;
    // front
    createSurface(numVerticesDown * 0, numVerticesDown * 4);
    // right
    createSurface(numVerticesDown * 5, numVerticesDown * 7);
    // back
    createSurface(numVerticesDown * 6, numVerticesDown * 2);
    // left
    createSurface(numVerticesDown * 3, numVerticesDown * 1);
    return {
        position: positions,
        normal: normals,
        texcoord: texcoords,
        indices: indices
    };
}
/**
 * Creates cylinder BufferInfo. The cylinder will be created around the origin
 * along the y-axis.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of cylinder.
 * @param {number} height Height of cylinder.
 * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
 * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
 * @param {boolean} [topCap] Create top cap. Default = true.
 * @param {boolean} [bottomCap] Create bottom cap. Default = true.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createCylinderBufferInfo
 */ /**
  * Creates cylinder buffers. The cylinder will be created around the origin
  * along the y-axis.
  *
  * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
  * @param {number} radius Radius of cylinder.
  * @param {number} height Height of cylinder.
  * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
  * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
  * @param {boolean} [topCap] Create top cap. Default = true.
  * @param {boolean} [bottomCap] Create bottom cap. Default = true.
  * @return {Object.<string, WebGLBuffer>} The created buffers.
  * @memberOf module:twgl/primitives
  * @function createCylinderBuffers
  */ /**
  * Creates cylinder vertices. The cylinder will be created around the origin
  * along the y-axis.
  *
  * @param {number} radius Radius of cylinder.
  * @param {number} height Height of cylinder.
  * @param {number} radialSubdivisions The number of subdivisions around the cylinder.
  * @param {number} verticalSubdivisions The number of subdivisions down the cylinder.
  * @param {boolean} [topCap] Create top cap. Default = true.
  * @param {boolean} [bottomCap] Create bottom cap. Default = true.
  * @return {Object.<string, TypedArray>} The created vertices.
  * @memberOf module:twgl/primitives
  */ function createCylinderVertices(radius, height, radialSubdivisions, verticalSubdivisions, topCap, bottomCap) {
    return createTruncatedConeVertices(radius, radius, height, radialSubdivisions, verticalSubdivisions, topCap, bottomCap);
}
/**
 * Creates BufferInfo for a torus
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createTorusBufferInfo
 */ /**
 * Creates buffers for a torus
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createTorusBuffers
 */ /**
 * Creates vertices for a torus
 *
 * @param {number} radius radius of center of torus circle.
 * @param {number} thickness radius of torus ring.
 * @param {number} radialSubdivisions The number of subdivisions around the torus.
 * @param {number} bodySubdivisions The number of subdivisions around the body torus.
 * @param {boolean} [startAngle] start angle in radians. Default = 0.
 * @param {boolean} [endAngle] end angle in radians. Default = Math.PI * 2.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */ function createTorusVertices(radius, thickness, radialSubdivisions, bodySubdivisions, startAngle, endAngle) {
    if (radialSubdivisions < 3) throw new Error("radialSubdivisions must be 3 or greater");
    if (bodySubdivisions < 3) throw new Error("verticalSubdivisions must be 3 or greater");
    startAngle = startAngle || 0;
    endAngle = endAngle || Math.PI * 2;
    const range = endAngle - startAngle;
    const radialParts = radialSubdivisions + 1;
    const bodyParts = bodySubdivisions + 1;
    const numVertices = radialParts * bodyParts;
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    const indices = createAugmentedTypedArray(3, radialSubdivisions * bodySubdivisions * 2, Uint16Array);
    for(let slice = 0; slice < bodyParts; ++slice){
        const v = slice / bodySubdivisions;
        const sliceAngle = v * Math.PI * 2;
        const sliceSin = Math.sin(sliceAngle);
        const ringRadius = radius + sliceSin * thickness;
        const ny = Math.cos(sliceAngle);
        const y = ny * thickness;
        for(let ring = 0; ring < radialParts; ++ring){
            const u = ring / radialSubdivisions;
            const ringAngle = startAngle + u * range;
            const xSin = Math.sin(ringAngle);
            const zCos = Math.cos(ringAngle);
            const x = xSin * ringRadius;
            const z = zCos * ringRadius;
            const nx = xSin * sliceSin;
            const nz = zCos * sliceSin;
            positions.push(x, y, z);
            normals.push(nx, ny, nz);
            texcoords.push(u, 1 - v);
        }
    }
    for(let slice1 = 0; slice1 < bodySubdivisions; ++slice1)for(let ring = 0; ring < radialSubdivisions; ++ring){
        const nextRingIndex = 1 + ring;
        const nextSliceIndex = 1 + slice1;
        indices.push(radialParts * slice1 + ring, radialParts * nextSliceIndex + ring, radialParts * slice1 + nextRingIndex);
        indices.push(radialParts * nextSliceIndex + ring, radialParts * nextSliceIndex + nextRingIndex, radialParts * slice1 + nextRingIndex);
    }
    return {
        position: positions,
        normal: normals,
        texcoord: texcoords,
        indices: indices
    };
}
/**
 * Creates a disc BufferInfo. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose outside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {module:twgl.BufferInfo} The created BufferInfo.
 * @memberOf module:twgl/primitives
 * @function createDiscBufferInfo
 */ /**
 * Creates disc buffers. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose outside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext.
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {Object.<string, WebGLBuffer>} The created buffers.
 * @memberOf module:twgl/primitives
 * @function createDiscBuffers
 */ /**
 * Creates disc vertices. The disc will be in the xz plane, centered at
 * the origin. When creating, at least 3 divisions, or pie
 * pieces, need to be specified, otherwise the triangles making
 * up the disc will be degenerate. You can also specify the
 * number of radial pieces `stacks`. A value of 1 for
 * stacks will give you a simple disc of pie pieces.  If you
 * want to create an annulus you can set `innerRadius` to a
 * value > 0. Finally, `stackPower` allows you to have the widths
 * increase or decrease as you move away from the center. This
 * is particularly useful when using the disc as a ground plane
 * with a fixed camera such that you don't need the resolution
 * of small triangles near the perimeter. For example, a value
 * of 2 will produce stacks whose outside radius increases with
 * the square of the stack index. A value of 1 will give uniform
 * stacks.
 *
 * @param {number} radius Radius of the ground plane.
 * @param {number} divisions Number of triangles in the ground plane (at least 3).
 * @param {number} [stacks] Number of radial divisions (default=1).
 * @param {number} [innerRadius] Default 0.
 * @param {number} [stackPower] Power to raise stack size to for decreasing width.
 * @return {Object.<string, TypedArray>} The created vertices.
 * @memberOf module:twgl/primitives
 */ function createDiscVertices(radius, divisions, stacks, innerRadius, stackPower) {
    if (divisions < 3) throw new Error("divisions must be at least 3");
    stacks = stacks ? stacks : 1;
    stackPower = stackPower ? stackPower : 1;
    innerRadius = innerRadius ? innerRadius : 0;
    // Note: We don't share the center vertex because that would
    // mess up texture coordinates.
    const numVertices = (divisions + 1) * (stacks + 1);
    const positions = createAugmentedTypedArray(3, numVertices);
    const normals = createAugmentedTypedArray(3, numVertices);
    const texcoords = createAugmentedTypedArray(2, numVertices);
    const indices = createAugmentedTypedArray(3, stacks * divisions * 2, Uint16Array);
    let firstIndex = 0;
    const radiusSpan = radius - innerRadius;
    const pointsPerStack = divisions + 1;
    // Build the disk one stack at a time.
    for(let stack = 0; stack <= stacks; ++stack){
        const stackRadius = innerRadius + radiusSpan * Math.pow(stack / stacks, stackPower);
        for(let i = 0; i <= divisions; ++i){
            const theta = 2.0 * Math.PI * i / divisions;
            const x = stackRadius * Math.cos(theta);
            const z = stackRadius * Math.sin(theta);
            positions.push(x, 0, z);
            normals.push(0, 1, 0);
            texcoords.push(1 - i / divisions, stack / stacks);
            if (stack > 0 && i !== divisions) {
                // a, b, c and d are the indices of the vertices of a quad.  unless
                // the current stack is the one closest to the center, in which case
                // the vertices a and b connect to the center vertex.
                const a = firstIndex + (i + 1);
                const b = firstIndex + i;
                const c = firstIndex + i - pointsPerStack;
                const d = firstIndex + (i + 1) - pointsPerStack;
                // Make a quad of the vertices a, b, c, d.
                indices.push(a, b, c);
                indices.push(a, c, d);
            }
        }
        firstIndex += divisions + 1;
    }
    return {
        position: positions,
        normal: normals,
        texcoord: texcoords,
        indices: indices
    };
}
/**
 * creates a random integer between 0 and range - 1 inclusive.
 * @param {number} range
 * @return {number} random value between 0 and range - 1 inclusive.
 * @private
 */ function randInt(range) {
    return Math.random() * range | 0;
}
/**
 * Used to supply random colors
 * @callback RandomColorFunc
 * @param {number} ndx index of triangle/quad if unindexed or index of vertex if indexed
 * @param {number} channel 0 = red, 1 = green, 2 = blue, 3 = alpha
 * @return {number} a number from 0 to 255
 * @memberOf module:twgl/primitives
 */ /**
 * @typedef {Object} RandomVerticesOptions
 * @property {number} [vertsPerColor] Defaults to 3 for non-indexed vertices
 * @property {module:twgl/primitives.RandomColorFunc} [rand] A function to generate random numbers
 * @memberOf module:twgl/primitives
 */ /**
 * Creates an augmentedTypedArray of random vertex colors.
 * If the vertices are indexed (have an indices array) then will
 * just make random colors. Otherwise assumes they are triangles
 * and makes one random color for every 3 vertices.
 * @param {Object.<string, AugmentedTypedArray>} vertices Vertices as returned from one of the createXXXVertices functions.
 * @param {module:twgl/primitives.RandomVerticesOptions} [options] options.
 * @return {Object.<string, AugmentedTypedArray>} same vertices as passed in with `color` added.
 * @memberOf module:twgl/primitives
 */ function makeRandomVertexColors(vertices, options) {
    options = options || {};
    const numElements = vertices.position.numElements;
    const vColors = createAugmentedTypedArray(4, numElements, Uint8Array);
    const rand = options.rand || function(ndx, channel) {
        return channel < 3 ? randInt(256) : 255;
    };
    vertices.color = vColors;
    if (vertices.indices) // just make random colors if index
    for(let ii = 0; ii < numElements; ++ii)vColors.push(rand(ii, 0), rand(ii, 1), rand(ii, 2), rand(ii, 3));
    else {
        // make random colors per triangle
        const numVertsPerColor = options.vertsPerColor || 3;
        const numSets = numElements / numVertsPerColor;
        for(let ii = 0; ii < numSets; ++ii){
            const color = [
                rand(ii, 0),
                rand(ii, 1),
                rand(ii, 2),
                rand(ii, 3)
            ];
            for(let jj = 0; jj < numVertsPerColor; ++jj)vColors.push(color);
        }
    }
    return vertices;
}
/**
 * creates a function that calls fn to create vertices and then
 * creates a buffers for them
 * @private
 */ function createBufferFunc(fn) {
    return function(gl) {
        const arrays = fn.apply(this, Array.prototype.slice.call(arguments, 1));
        return createBuffersFromArrays(gl, arrays);
    };
}
/**
 * creates a function that calls fn to create vertices and then
 * creates a bufferInfo object for them
 * @private
 */ function createBufferInfoFunc(fn) {
    return function(gl) {
        const arrays = fn.apply(null, Array.prototype.slice.call(arguments, 1));
        return createBufferInfoFromArrays(gl, arrays);
    };
}
const arraySpecPropertyNames = [
    "numComponents",
    "size",
    "type",
    "normalize",
    "stride",
    "offset",
    "attrib",
    "name",
    "attribName", 
];
/**
 * Copy elements from one array to another
 *
 * @param {Array|TypedArray} src source array
 * @param {Array|TypedArray} dst dest array
 * @param {number} dstNdx index in dest to copy src
 * @param {number} [offset] offset to add to copied values
 * @private
 */ function copyElements(src, dst, dstNdx, offset) {
    offset = offset || 0;
    const length = src.length;
    for(let ii = 0; ii < length; ++ii)dst[dstNdx + ii] = src[ii] + offset;
}
/**
 * Creates an array of the same time
 *
 * @param {(number[]|ArrayBufferView|module:twgl.FullArraySpec)} srcArray array who's type to copy
 * @param {number} length size of new array
 * @return {(number[]|ArrayBufferView|module:twgl.FullArraySpec)} array with same type as srcArray
 * @private
 */ function createArrayOfSameType(srcArray, length) {
    const arraySrc = getArray$1(srcArray);
    const newArray = new arraySrc.constructor(length);
    let newArraySpec = newArray;
    // If it appears to have been augmented make new one augmented
    if (arraySrc.numComponents && arraySrc.numElements) augmentTypedArray(newArray, arraySrc.numComponents);
    // If it was a full spec make new one a full spec
    if (srcArray.data) {
        newArraySpec = {
            data: newArray
        };
        copyNamedProperties(arraySpecPropertyNames, srcArray, newArraySpec);
    }
    return newArraySpec;
}
/**
 * Concatenates sets of vertices
 *
 * Assumes the vertices match in composition. For example
 * if one set of vertices has positions, normals, and indices
 * all sets of vertices must have positions, normals, and indices
 * and of the same type.
 *
 * Example:
 *
 *      const cubeVertices = twgl.primitives.createCubeVertices(2);
 *      const sphereVertices = twgl.primitives.createSphereVertices(1, 10, 10);
 *      // move the sphere 2 units up
 *      twgl.primitives.reorientVertices(
 *          sphereVertices, twgl.m4.translation([0, 2, 0]));
 *      // merge the sphere with the cube
 *      const cubeSphereVertices = twgl.primitives.concatVertices(
 *          [cubeVertices, sphereVertices]);
 *      // turn them into WebGL buffers and attrib data
 *      const bufferInfo = twgl.createBufferInfoFromArrays(gl, cubeSphereVertices);
 *
 * @param {module:twgl.Arrays[]} arrays Array of arrays of vertices
 * @return {module:twgl.Arrays} The concatenated vertices.
 * @memberOf module:twgl/primitives
 */ function concatVertices(arrayOfArrays) {
    const names = {};
    let baseName;
    // get names of all arrays.
    // and numElements for each set of vertices
    for(let ii1 = 0; ii1 < arrayOfArrays.length; ++ii1){
        const arrays = arrayOfArrays[ii1];
        Object.keys(arrays).forEach(function(name) {
            if (!names[name]) names[name] = [];
            if (!baseName && name !== "indices") baseName = name;
            const arrayInfo = arrays[name];
            const numComponents = getNumComponents$1(arrayInfo, name);
            const array = getArray$1(arrayInfo);
            const numElements = array.length / numComponents;
            names[name].push(numElements);
        });
    }
    // compute length of combined array
    // and return one for reference
    function getLengthOfCombinedArrays(name) {
        let length = 0;
        let arraySpec;
        for(let ii = 0; ii < arrayOfArrays.length; ++ii){
            const arrays = arrayOfArrays[ii];
            const arrayInfo = arrays[name];
            const array = getArray$1(arrayInfo);
            length += array.length;
            if (!arraySpec || arrayInfo.data) arraySpec = arrayInfo;
        }
        return {
            length: length,
            spec: arraySpec
        };
    }
    function copyArraysToNewArray(name, base, newArray) {
        let baseIndex = 0;
        let offset = 0;
        for(let ii = 0; ii < arrayOfArrays.length; ++ii){
            const arrays = arrayOfArrays[ii];
            const arrayInfo = arrays[name];
            const array = getArray$1(arrayInfo);
            if (name === "indices") {
                copyElements(array, newArray, offset, baseIndex);
                baseIndex += base[ii];
            } else copyElements(array, newArray, offset);
            offset += array.length;
        }
    }
    const base1 = names[baseName];
    const newArrays = {};
    Object.keys(names).forEach(function(name) {
        const info = getLengthOfCombinedArrays(name);
        const newArraySpec = createArrayOfSameType(info.spec, info.length);
        copyArraysToNewArray(name, base1, getArray$1(newArraySpec));
        newArrays[name] = newArraySpec;
    });
    return newArrays;
}
/**
 * Creates a duplicate set of vertices
 *
 * This is useful for calling reorientVertices when you
 * also want to keep the original available
 *
 * @param {module:twgl.Arrays} arrays of vertices
 * @return {module:twgl.Arrays} The duplicated vertices.
 * @memberOf module:twgl/primitives
 */ function duplicateVertices(arrays) {
    const newArrays = {};
    Object.keys(arrays).forEach(function(name) {
        const arraySpec = arrays[name];
        const srcArray = getArray$1(arraySpec);
        const newArraySpec = createArrayOfSameType(arraySpec, srcArray.length);
        copyElements(srcArray, getArray$1(newArraySpec), 0);
        newArrays[name] = newArraySpec;
    });
    return newArrays;
}
const create3DFBufferInfo = createBufferInfoFunc(create3DFVertices);
const create3DFBuffers = createBufferFunc(create3DFVertices);
const createCubeBufferInfo = createBufferInfoFunc(createCubeVertices);
const createCubeBuffers = createBufferFunc(createCubeVertices);
const createPlaneBufferInfo = createBufferInfoFunc(createPlaneVertices);
const createPlaneBuffers = createBufferFunc(createPlaneVertices);
const createSphereBufferInfo = createBufferInfoFunc(createSphereVertices);
const createSphereBuffers = createBufferFunc(createSphereVertices);
const createTruncatedConeBufferInfo = createBufferInfoFunc(createTruncatedConeVertices);
const createTruncatedConeBuffers = createBufferFunc(createTruncatedConeVertices);
const createXYQuadBufferInfo = createBufferInfoFunc(createXYQuadVertices);
const createXYQuadBuffers = createBufferFunc(createXYQuadVertices);
const createCrescentBufferInfo = createBufferInfoFunc(createCrescentVertices);
const createCrescentBuffers = createBufferFunc(createCrescentVertices);
const createCylinderBufferInfo = createBufferInfoFunc(createCylinderVertices);
const createCylinderBuffers = createBufferFunc(createCylinderVertices);
const createTorusBufferInfo = createBufferInfoFunc(createTorusVertices);
const createTorusBuffers = createBufferFunc(createTorusVertices);
const createDiscBufferInfo = createBufferInfoFunc(createDiscVertices);
const createDiscBuffers = createBufferFunc(createDiscVertices);
// these were mis-spelled until 4.12
const createCresentBufferInfo = createCrescentBufferInfo;
const createCresentBuffers = createCrescentBuffers;
const createCresentVertices = createCrescentVertices;
var primitives = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    create3DFBufferInfo: create3DFBufferInfo,
    create3DFBuffers: create3DFBuffers,
    create3DFVertices: create3DFVertices,
    createAugmentedTypedArray: createAugmentedTypedArray,
    createCubeBufferInfo: createCubeBufferInfo,
    createCubeBuffers: createCubeBuffers,
    createCubeVertices: createCubeVertices,
    createPlaneBufferInfo: createPlaneBufferInfo,
    createPlaneBuffers: createPlaneBuffers,
    createPlaneVertices: createPlaneVertices,
    createSphereBufferInfo: createSphereBufferInfo,
    createSphereBuffers: createSphereBuffers,
    createSphereVertices: createSphereVertices,
    createTruncatedConeBufferInfo: createTruncatedConeBufferInfo,
    createTruncatedConeBuffers: createTruncatedConeBuffers,
    createTruncatedConeVertices: createTruncatedConeVertices,
    createXYQuadBufferInfo: createXYQuadBufferInfo,
    createXYQuadBuffers: createXYQuadBuffers,
    createXYQuadVertices: createXYQuadVertices,
    createCresentBufferInfo: createCresentBufferInfo,
    createCresentBuffers: createCresentBuffers,
    createCresentVertices: createCresentVertices,
    createCrescentBufferInfo: createCrescentBufferInfo,
    createCrescentBuffers: createCrescentBuffers,
    createCrescentVertices: createCrescentVertices,
    createCylinderBufferInfo: createCylinderBufferInfo,
    createCylinderBuffers: createCylinderBuffers,
    createCylinderVertices: createCylinderVertices,
    createTorusBufferInfo: createTorusBufferInfo,
    createTorusBuffers: createTorusBuffers,
    createTorusVertices: createTorusVertices,
    createDiscBufferInfo: createDiscBufferInfo,
    createDiscBuffers: createDiscBuffers,
    createDiscVertices: createDiscVertices,
    deindexVertices: deindexVertices,
    flattenNormals: flattenNormals,
    makeRandomVertexColors: makeRandomVertexColors,
    reorientDirections: reorientDirections,
    reorientNormals: reorientNormals,
    reorientPositions: reorientPositions,
    reorientVertices: reorientVertices,
    concatVertices: concatVertices,
    duplicateVertices: duplicateVertices
});
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */ /**
 * Gets the gl version as a number
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {number} version of gl
 * @private
 */ //function getVersionAsNumber(gl) {
//  return parseFloat(gl.getParameter(gl.VERSION).substr(6));
//}
/**
 * Check if context is WebGL 2.0
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {bool} true if it's WebGL 2.0
 * @memberOf module:twgl
 */ function isWebGL2(gl) {
    // This is the correct check but it's slow
    //  return gl.getParameter(gl.VERSION).indexOf("WebGL 2.0") === 0;
    // This might also be the correct check but I'm assuming it's slow-ish
    // return gl instanceof WebGL2RenderingContext;
    return !!gl.texStorage2D;
}
/**
 * Check if context is WebGL 1.0
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @return {bool} true if it's WebGL 1.0
 * @memberOf module:twgl
 */ function isWebGL1(gl) {
    // This is the correct check but it's slow
    // const version = getVersionAsNumber(gl);
    // return version <= 1.0 && version > 0.0;  // because as of 2016/5 Edge returns 0.96
    // This might also be the correct check but I'm assuming it's slow-ish
    // return gl instanceof WebGLRenderingContext;
    return !gl.texStorage2D;
}
/**
 * Gets a string for WebGL enum
 *
 * Note: Several enums are the same. Without more
 * context (which function) it's impossible to always
 * give the correct enum. As it is, for matching values
 * it gives all enums. Checking the WebGL2RenderingContext
 * that means
 *
 *      0     = ZERO | POINT | NONE | NO_ERROR
 *      1     = ONE | LINES | SYNC_FLUSH_COMMANDS_BIT
 *      32777 = BLEND_EQUATION_RGB | BLEND_EQUATION_RGB
 *      36662 = COPY_READ_BUFFER | COPY_READ_BUFFER_BINDING
 *      36663 = COPY_WRITE_BUFFER | COPY_WRITE_BUFFER_BINDING
 *      36006 = FRAMEBUFFER_BINDING | DRAW_FRAMEBUFFER_BINDING
 *
 * It's also not useful for bits really unless you pass in individual bits.
 * In other words
 *
 *     const bits = gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT;
 *     twgl.glEnumToString(gl, bits);  // not going to work
 *
 * Note that some enums only exist on extensions. If you
 * want them to show up you need to pass the extension at least
 * once. For example
 *
 *     const ext = gl.getExtension('WEBGL_compressed_texture_s3tc');
 *     if (ext) {
 *        twgl.glEnumToString(ext, 0);  // just prime the function
 *
 *        ..later..
 *
 *        const internalFormat = ext.COMPRESSED_RGB_S3TC_DXT1_EXT;
 *        console.log(twgl.glEnumToString(gl, internalFormat));
 *
 * Notice I didn't have to pass the extension the second time. This means
 * you can have place that generically gets an enum for texture formats for example.
 * and as long as you primed the function with the extensions
 *
 * If you're using `twgl.addExtensionsToContext` to enable your extensions
 * then twgl will automatically get the extension's enums.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext or any extension object
 * @param {number} value the value of the enum you want to look up.
 * @return {string} enum string or hex value
 * @memberOf module:twgl
 * @function glEnumToString
 */ const glEnumToString = function() {
    const haveEnumsForType = {};
    const enums = {};
    function addEnums(gl) {
        const type = gl.constructor.name;
        if (!haveEnumsForType[type]) {
            for(const key in gl)if (typeof gl[key] === "number") {
                const existing = enums[gl[key]];
                enums[gl[key]] = existing ? `${existing} | ${key}` : key;
            }
            haveEnumsForType[type] = true;
        }
    }
    return function glEnumToString(gl, value) {
        addEnums(gl);
        return enums[value] || (typeof value === "number" ? `0x${value.toString(16)}` : value);
    };
}();
var utils = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    glEnumToString: glEnumToString,
    isWebGL1: isWebGL1,
    isWebGL2: isWebGL2
});
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */ const defaults$1 = {
    textureColor: new Uint8Array([
        128,
        192,
        255,
        255
    ]),
    textureOptions: {},
    crossOrigin: undefined
};
const isArrayBuffer$1 = isArrayBuffer;
// Should we make this on demand?
const getShared2DContext = function() {
    let s_ctx;
    return function getShared2DContext() {
        s_ctx = s_ctx || (typeof document !== "undefined" && document.createElement ? document.createElement("canvas").getContext("2d") : null);
        return s_ctx;
    };
}();
// NOTE: Chrome supports 2D canvas in a Worker (behind flag as of v64 but
//       not only does Firefox NOT support it but Firefox freezes immediately
//       if you try to create one instead of just returning null and continuing.
//  : (global.OffscreenCanvas && (new global.OffscreenCanvas(1, 1)).getContext("2d"));  // OffscreenCanvas may not support 2d
// NOTE: We can maybe remove some of the need for the 2d canvas. In WebGL2
// we can use the various unpack settings. Otherwise we could try using
// the ability of an ImageBitmap to be cut. Unfortunately cutting an ImageBitmap
// is async and the current TWGL code expects a non-Async result though that
// might not be a problem. ImageBitmap though is not available in Edge or Safari
// as of 2018-01-02
/* PixelFormat */ const ALPHA = 0x1906;
const RGB = 0x1907;
const RGBA = 0x1908;
const LUMINANCE = 0x1909;
const LUMINANCE_ALPHA = 0x190A;
const DEPTH_COMPONENT = 0x1902;
const DEPTH_STENCIL = 0x84F9;
/* TextureWrapMode */ // const REPEAT                         = 0x2901;
// const MIRRORED_REPEAT                = 0x8370;
const CLAMP_TO_EDGE = 0x812f;
/* TextureMagFilter */ const NEAREST = 0x2600;
const LINEAR = 0x2601;
/* TextureMinFilter */ // const NEAREST_MIPMAP_NEAREST         = 0x2700;
// const LINEAR_MIPMAP_NEAREST          = 0x2701;
// const NEAREST_MIPMAP_LINEAR          = 0x2702;
// const LINEAR_MIPMAP_LINEAR           = 0x2703;
/* Texture Target */ const TEXTURE_2D = 0x0de1;
const TEXTURE_CUBE_MAP = 0x8513;
const TEXTURE_3D = 0x806f;
const TEXTURE_2D_ARRAY = 0x8c1a;
/* Cubemap Targets */ const TEXTURE_CUBE_MAP_POSITIVE_X = 0x8515;
const TEXTURE_CUBE_MAP_NEGATIVE_X = 0x8516;
const TEXTURE_CUBE_MAP_POSITIVE_Y = 0x8517;
const TEXTURE_CUBE_MAP_NEGATIVE_Y = 0x8518;
const TEXTURE_CUBE_MAP_POSITIVE_Z = 0x8519;
const TEXTURE_CUBE_MAP_NEGATIVE_Z = 0x851a;
/* Texture Parameters */ const TEXTURE_MIN_FILTER = 0x2801;
const TEXTURE_MAG_FILTER = 0x2800;
const TEXTURE_WRAP_S = 0x2802;
const TEXTURE_WRAP_T = 0x2803;
const TEXTURE_WRAP_R = 0x8072;
const TEXTURE_MIN_LOD = 0x813a;
const TEXTURE_MAX_LOD = 0x813b;
const TEXTURE_BASE_LEVEL = 0x813c;
const TEXTURE_MAX_LEVEL = 0x813d;
/* Pixel store */ const UNPACK_ALIGNMENT = 0x0cf5;
const UNPACK_ROW_LENGTH = 0x0cf2;
const UNPACK_IMAGE_HEIGHT = 0x806e;
const UNPACK_SKIP_PIXELS = 0x0cf4;
const UNPACK_SKIP_ROWS = 0x0cf3;
const UNPACK_SKIP_IMAGES = 0x806d;
const UNPACK_COLORSPACE_CONVERSION_WEBGL = 0x9243;
const UNPACK_PREMULTIPLY_ALPHA_WEBGL = 0x9241;
const UNPACK_FLIP_Y_WEBGL = 0x9240;
const R8 = 0x8229;
const R8_SNORM = 0x8F94;
const R16F = 0x822D;
const R32F = 0x822E;
const R8UI = 0x8232;
const R8I = 0x8231;
const RG16UI = 0x823A;
const RG16I = 0x8239;
const RG32UI = 0x823C;
const RG32I = 0x823B;
const RG8 = 0x822B;
const RG8_SNORM = 0x8F95;
const RG16F = 0x822F;
const RG32F = 0x8230;
const RG8UI = 0x8238;
const RG8I = 0x8237;
const R16UI = 0x8234;
const R16I = 0x8233;
const R32UI = 0x8236;
const R32I = 0x8235;
const RGB8 = 0x8051;
const SRGB8 = 0x8C41;
const RGB565 = 0x8D62;
const RGB8_SNORM = 0x8F96;
const R11F_G11F_B10F = 0x8C3A;
const RGB9_E5 = 0x8C3D;
const RGB16F = 0x881B;
const RGB32F = 0x8815;
const RGB8UI = 0x8D7D;
const RGB8I = 0x8D8F;
const RGB16UI = 0x8D77;
const RGB16I = 0x8D89;
const RGB32UI = 0x8D71;
const RGB32I = 0x8D83;
const RGBA8 = 0x8058;
const SRGB8_ALPHA8 = 0x8C43;
const RGBA8_SNORM = 0x8F97;
const RGB5_A1 = 0x8057;
const RGBA4 = 0x8056;
const RGB10_A2 = 0x8059;
const RGBA16F = 0x881A;
const RGBA32F = 0x8814;
const RGBA8UI = 0x8D7C;
const RGBA8I = 0x8D8E;
const RGB10_A2UI = 0x906F;
const RGBA16UI = 0x8D76;
const RGBA16I = 0x8D88;
const RGBA32I = 0x8D82;
const RGBA32UI = 0x8D70;
const DEPTH_COMPONENT16 = 0x81A5;
const DEPTH_COMPONENT24 = 0x81A6;
const DEPTH_COMPONENT32F = 0x8CAC;
const DEPTH32F_STENCIL8 = 0x8CAD;
const DEPTH24_STENCIL8 = 0x88F0;
/* DataType */ const BYTE$2 = 0x1400;
const UNSIGNED_BYTE$2 = 0x1401;
const SHORT$2 = 0x1402;
const UNSIGNED_SHORT$2 = 0x1403;
const INT$2 = 0x1404;
const UNSIGNED_INT$2 = 0x1405;
const FLOAT$2 = 0x1406;
const UNSIGNED_SHORT_4_4_4_4$1 = 0x8033;
const UNSIGNED_SHORT_5_5_5_1$1 = 0x8034;
const UNSIGNED_SHORT_5_6_5$1 = 0x8363;
const HALF_FLOAT$1 = 0x140B;
const HALF_FLOAT_OES = 0x8D61; // Thanks Khronos for making this different >:(
const UNSIGNED_INT_2_10_10_10_REV$1 = 0x8368;
const UNSIGNED_INT_10F_11F_11F_REV$1 = 0x8C3B;
const UNSIGNED_INT_5_9_9_9_REV$1 = 0x8C3E;
const FLOAT_32_UNSIGNED_INT_24_8_REV$1 = 0x8DAD;
const UNSIGNED_INT_24_8$1 = 0x84FA;
const RG = 0x8227;
const RG_INTEGER = 0x8228;
const RED = 0x1903;
const RED_INTEGER = 0x8D94;
const RGB_INTEGER = 0x8D98;
const RGBA_INTEGER = 0x8D99;
const formatInfo = {};
{
    // NOTE: this is named `numColorComponents` vs `numComponents` so we can let Uglify mangle
    // the name.
    const f = formatInfo;
    f[ALPHA] = {
        numColorComponents: 1
    };
    f[LUMINANCE] = {
        numColorComponents: 1
    };
    f[LUMINANCE_ALPHA] = {
        numColorComponents: 2
    };
    f[RGB] = {
        numColorComponents: 3
    };
    f[RGBA] = {
        numColorComponents: 4
    };
    f[RED] = {
        numColorComponents: 1
    };
    f[RED_INTEGER] = {
        numColorComponents: 1
    };
    f[RG] = {
        numColorComponents: 2
    };
    f[RG_INTEGER] = {
        numColorComponents: 2
    };
    f[RGB] = {
        numColorComponents: 3
    };
    f[RGB_INTEGER] = {
        numColorComponents: 3
    };
    f[RGBA] = {
        numColorComponents: 4
    };
    f[RGBA_INTEGER] = {
        numColorComponents: 4
    };
    f[DEPTH_COMPONENT] = {
        numColorComponents: 1
    };
    f[DEPTH_STENCIL] = {
        numColorComponents: 2
    };
}/**
 * @typedef {Object} TextureFormatDetails
 * @property {number} textureFormat format to pass texImage2D and similar functions.
 * @property {boolean} colorRenderable true if you can render to this format of texture.
 * @property {boolean} textureFilterable true if you can filter the texture, false if you can ony use `NEAREST`.
 * @property {number[]} type Array of possible types you can pass to texImage2D and similar function
 * @property {Object.<number,number>} bytesPerElementMap A map of types to bytes per element
 * @private
 */ let s_textureInternalFormatInfo;
function getTextureInternalFormatInfo(internalFormat1) {
    if (!s_textureInternalFormatInfo) {
        // NOTE: these properties need unique names so we can let Uglify mangle the name.
        const t = {};
        // unsized formats
        t[ALPHA] = {
            textureFormat: ALPHA,
            colorRenderable: true,
            textureFilterable: true,
            bytesPerElement: [
                1,
                2,
                2,
                4
            ],
            type: [
                UNSIGNED_BYTE$2,
                HALF_FLOAT$1,
                HALF_FLOAT_OES,
                FLOAT$2
            ]
        };
        t[LUMINANCE] = {
            textureFormat: LUMINANCE,
            colorRenderable: true,
            textureFilterable: true,
            bytesPerElement: [
                1,
                2,
                2,
                4
            ],
            type: [
                UNSIGNED_BYTE$2,
                HALF_FLOAT$1,
                HALF_FLOAT_OES,
                FLOAT$2
            ]
        };
        t[LUMINANCE_ALPHA] = {
            textureFormat: LUMINANCE_ALPHA,
            colorRenderable: true,
            textureFilterable: true,
            bytesPerElement: [
                2,
                4,
                4,
                8
            ],
            type: [
                UNSIGNED_BYTE$2,
                HALF_FLOAT$1,
                HALF_FLOAT_OES,
                FLOAT$2
            ]
        };
        t[RGB] = {
            textureFormat: RGB,
            colorRenderable: true,
            textureFilterable: true,
            bytesPerElement: [
                3,
                6,
                6,
                12,
                2
            ],
            type: [
                UNSIGNED_BYTE$2,
                HALF_FLOAT$1,
                HALF_FLOAT_OES,
                FLOAT$2,
                UNSIGNED_SHORT_5_6_5$1
            ]
        };
        t[RGBA] = {
            textureFormat: RGBA,
            colorRenderable: true,
            textureFilterable: true,
            bytesPerElement: [
                4,
                8,
                8,
                16,
                2,
                2
            ],
            type: [
                UNSIGNED_BYTE$2,
                HALF_FLOAT$1,
                HALF_FLOAT_OES,
                FLOAT$2,
                UNSIGNED_SHORT_4_4_4_4$1,
                UNSIGNED_SHORT_5_5_5_1$1
            ]
        };
        t[DEPTH_COMPONENT] = {
            textureFormat: DEPTH_COMPONENT,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                2,
                4
            ],
            type: [
                UNSIGNED_INT$2,
                UNSIGNED_SHORT$2
            ]
        };
        // sized formats
        t[R8] = {
            textureFormat: RED,
            colorRenderable: true,
            textureFilterable: true,
            bytesPerElement: [
                1
            ],
            type: [
                UNSIGNED_BYTE$2
            ]
        };
        t[R8_SNORM] = {
            textureFormat: RED,
            colorRenderable: false,
            textureFilterable: true,
            bytesPerElement: [
                1
            ],
            type: [
                BYTE$2
            ]
        };
        t[R16F] = {
            textureFormat: RED,
            colorRenderable: false,
            textureFilterable: true,
            bytesPerElement: [
                4,
                2
            ],
            type: [
                FLOAT$2,
                HALF_FLOAT$1
            ]
        };
        t[R32F] = {
            textureFormat: RED,
            colorRenderable: false,
            textureFilterable: false,
            bytesPerElement: [
                4
            ],
            type: [
                FLOAT$2
            ]
        };
        t[R8UI] = {
            textureFormat: RED_INTEGER,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                1
            ],
            type: [
                UNSIGNED_BYTE$2
            ]
        };
        t[R8I] = {
            textureFormat: RED_INTEGER,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                1
            ],
            type: [
                BYTE$2
            ]
        };
        t[R16UI] = {
            textureFormat: RED_INTEGER,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                2
            ],
            type: [
                UNSIGNED_SHORT$2
            ]
        };
        t[R16I] = {
            textureFormat: RED_INTEGER,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                2
            ],
            type: [
                SHORT$2
            ]
        };
        t[R32UI] = {
            textureFormat: RED_INTEGER,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                4
            ],
            type: [
                UNSIGNED_INT$2
            ]
        };
        t[R32I] = {
            textureFormat: RED_INTEGER,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                4
            ],
            type: [
                INT$2
            ]
        };
        t[RG8] = {
            textureFormat: RG,
            colorRenderable: true,
            textureFilterable: true,
            bytesPerElement: [
                2
            ],
            type: [
                UNSIGNED_BYTE$2
            ]
        };
        t[RG8_SNORM] = {
            textureFormat: RG,
            colorRenderable: false,
            textureFilterable: true,
            bytesPerElement: [
                2
            ],
            type: [
                BYTE$2
            ]
        };
        t[RG16F] = {
            textureFormat: RG,
            colorRenderable: false,
            textureFilterable: true,
            bytesPerElement: [
                8,
                4
            ],
            type: [
                FLOAT$2,
                HALF_FLOAT$1
            ]
        };
        t[RG32F] = {
            textureFormat: RG,
            colorRenderable: false,
            textureFilterable: false,
            bytesPerElement: [
                8
            ],
            type: [
                FLOAT$2
            ]
        };
        t[RG8UI] = {
            textureFormat: RG_INTEGER,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                2
            ],
            type: [
                UNSIGNED_BYTE$2
            ]
        };
        t[RG8I] = {
            textureFormat: RG_INTEGER,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                2
            ],
            type: [
                BYTE$2
            ]
        };
        t[RG16UI] = {
            textureFormat: RG_INTEGER,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                4
            ],
            type: [
                UNSIGNED_SHORT$2
            ]
        };
        t[RG16I] = {
            textureFormat: RG_INTEGER,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                4
            ],
            type: [
                SHORT$2
            ]
        };
        t[RG32UI] = {
            textureFormat: RG_INTEGER,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                8
            ],
            type: [
                UNSIGNED_INT$2
            ]
        };
        t[RG32I] = {
            textureFormat: RG_INTEGER,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                8
            ],
            type: [
                INT$2
            ]
        };
        t[RGB8] = {
            textureFormat: RGB,
            colorRenderable: true,
            textureFilterable: true,
            bytesPerElement: [
                3
            ],
            type: [
                UNSIGNED_BYTE$2
            ]
        };
        t[SRGB8] = {
            textureFormat: RGB,
            colorRenderable: false,
            textureFilterable: true,
            bytesPerElement: [
                3
            ],
            type: [
                UNSIGNED_BYTE$2
            ]
        };
        t[RGB565] = {
            textureFormat: RGB,
            colorRenderable: true,
            textureFilterable: true,
            bytesPerElement: [
                3,
                2
            ],
            type: [
                UNSIGNED_BYTE$2,
                UNSIGNED_SHORT_5_6_5$1
            ]
        };
        t[RGB8_SNORM] = {
            textureFormat: RGB,
            colorRenderable: false,
            textureFilterable: true,
            bytesPerElement: [
                3
            ],
            type: [
                BYTE$2
            ]
        };
        t[R11F_G11F_B10F] = {
            textureFormat: RGB,
            colorRenderable: false,
            textureFilterable: true,
            bytesPerElement: [
                12,
                6,
                4
            ],
            type: [
                FLOAT$2,
                HALF_FLOAT$1,
                UNSIGNED_INT_10F_11F_11F_REV$1
            ]
        };
        t[RGB9_E5] = {
            textureFormat: RGB,
            colorRenderable: false,
            textureFilterable: true,
            bytesPerElement: [
                12,
                6,
                4
            ],
            type: [
                FLOAT$2,
                HALF_FLOAT$1,
                UNSIGNED_INT_5_9_9_9_REV$1
            ]
        };
        t[RGB16F] = {
            textureFormat: RGB,
            colorRenderable: false,
            textureFilterable: true,
            bytesPerElement: [
                12,
                6
            ],
            type: [
                FLOAT$2,
                HALF_FLOAT$1
            ]
        };
        t[RGB32F] = {
            textureFormat: RGB,
            colorRenderable: false,
            textureFilterable: false,
            bytesPerElement: [
                12
            ],
            type: [
                FLOAT$2
            ]
        };
        t[RGB8UI] = {
            textureFormat: RGB_INTEGER,
            colorRenderable: false,
            textureFilterable: false,
            bytesPerElement: [
                3
            ],
            type: [
                UNSIGNED_BYTE$2
            ]
        };
        t[RGB8I] = {
            textureFormat: RGB_INTEGER,
            colorRenderable: false,
            textureFilterable: false,
            bytesPerElement: [
                3
            ],
            type: [
                BYTE$2
            ]
        };
        t[RGB16UI] = {
            textureFormat: RGB_INTEGER,
            colorRenderable: false,
            textureFilterable: false,
            bytesPerElement: [
                6
            ],
            type: [
                UNSIGNED_SHORT$2
            ]
        };
        t[RGB16I] = {
            textureFormat: RGB_INTEGER,
            colorRenderable: false,
            textureFilterable: false,
            bytesPerElement: [
                6
            ],
            type: [
                SHORT$2
            ]
        };
        t[RGB32UI] = {
            textureFormat: RGB_INTEGER,
            colorRenderable: false,
            textureFilterable: false,
            bytesPerElement: [
                12
            ],
            type: [
                UNSIGNED_INT$2
            ]
        };
        t[RGB32I] = {
            textureFormat: RGB_INTEGER,
            colorRenderable: false,
            textureFilterable: false,
            bytesPerElement: [
                12
            ],
            type: [
                INT$2
            ]
        };
        t[RGBA8] = {
            textureFormat: RGBA,
            colorRenderable: true,
            textureFilterable: true,
            bytesPerElement: [
                4
            ],
            type: [
                UNSIGNED_BYTE$2
            ]
        };
        t[SRGB8_ALPHA8] = {
            textureFormat: RGBA,
            colorRenderable: true,
            textureFilterable: true,
            bytesPerElement: [
                4
            ],
            type: [
                UNSIGNED_BYTE$2
            ]
        };
        t[RGBA8_SNORM] = {
            textureFormat: RGBA,
            colorRenderable: false,
            textureFilterable: true,
            bytesPerElement: [
                4
            ],
            type: [
                BYTE$2
            ]
        };
        t[RGB5_A1] = {
            textureFormat: RGBA,
            colorRenderable: true,
            textureFilterable: true,
            bytesPerElement: [
                4,
                2,
                4
            ],
            type: [
                UNSIGNED_BYTE$2,
                UNSIGNED_SHORT_5_5_5_1$1,
                UNSIGNED_INT_2_10_10_10_REV$1
            ]
        };
        t[RGBA4] = {
            textureFormat: RGBA,
            colorRenderable: true,
            textureFilterable: true,
            bytesPerElement: [
                4,
                2
            ],
            type: [
                UNSIGNED_BYTE$2,
                UNSIGNED_SHORT_4_4_4_4$1
            ]
        };
        t[RGB10_A2] = {
            textureFormat: RGBA,
            colorRenderable: true,
            textureFilterable: true,
            bytesPerElement: [
                4
            ],
            type: [
                UNSIGNED_INT_2_10_10_10_REV$1
            ]
        };
        t[RGBA16F] = {
            textureFormat: RGBA,
            colorRenderable: false,
            textureFilterable: true,
            bytesPerElement: [
                16,
                8
            ],
            type: [
                FLOAT$2,
                HALF_FLOAT$1
            ]
        };
        t[RGBA32F] = {
            textureFormat: RGBA,
            colorRenderable: false,
            textureFilterable: false,
            bytesPerElement: [
                16
            ],
            type: [
                FLOAT$2
            ]
        };
        t[RGBA8UI] = {
            textureFormat: RGBA_INTEGER,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                4
            ],
            type: [
                UNSIGNED_BYTE$2
            ]
        };
        t[RGBA8I] = {
            textureFormat: RGBA_INTEGER,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                4
            ],
            type: [
                BYTE$2
            ]
        };
        t[RGB10_A2UI] = {
            textureFormat: RGBA_INTEGER,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                4
            ],
            type: [
                UNSIGNED_INT_2_10_10_10_REV$1
            ]
        };
        t[RGBA16UI] = {
            textureFormat: RGBA_INTEGER,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                8
            ],
            type: [
                UNSIGNED_SHORT$2
            ]
        };
        t[RGBA16I] = {
            textureFormat: RGBA_INTEGER,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                8
            ],
            type: [
                SHORT$2
            ]
        };
        t[RGBA32I] = {
            textureFormat: RGBA_INTEGER,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                16
            ],
            type: [
                INT$2
            ]
        };
        t[RGBA32UI] = {
            textureFormat: RGBA_INTEGER,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                16
            ],
            type: [
                UNSIGNED_INT$2
            ]
        };
        // Sized Internal
        t[DEPTH_COMPONENT16] = {
            textureFormat: DEPTH_COMPONENT,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                2,
                4
            ],
            type: [
                UNSIGNED_SHORT$2,
                UNSIGNED_INT$2
            ]
        };
        t[DEPTH_COMPONENT24] = {
            textureFormat: DEPTH_COMPONENT,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                4
            ],
            type: [
                UNSIGNED_INT$2
            ]
        };
        t[DEPTH_COMPONENT32F] = {
            textureFormat: DEPTH_COMPONENT,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                4
            ],
            type: [
                FLOAT$2
            ]
        };
        t[DEPTH24_STENCIL8] = {
            textureFormat: DEPTH_STENCIL,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                4
            ],
            type: [
                UNSIGNED_INT_24_8$1
            ]
        };
        t[DEPTH32F_STENCIL8] = {
            textureFormat: DEPTH_STENCIL,
            colorRenderable: true,
            textureFilterable: false,
            bytesPerElement: [
                4
            ],
            type: [
                FLOAT_32_UNSIGNED_INT_24_8_REV$1
            ]
        };
        Object.keys(t).forEach(function(internalFormat) {
            const info = t[internalFormat];
            info.bytesPerElementMap = {};
            info.bytesPerElement.forEach(function(bytesPerElement, ndx) {
                const type = info.type[ndx];
                info.bytesPerElementMap[type] = bytesPerElement;
            });
        });
        s_textureInternalFormatInfo = t;
    }
    return s_textureInternalFormatInfo[internalFormat1];
}
/**
 * Gets the number of bytes per element for a given internalFormat / type
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @param {number} type The type parameter for texImage2D etc..
 * @return {number} the number of bytes per element for the given internalFormat, type combo
 * @memberOf module:twgl/textures
 */ function getBytesPerElementForInternalFormat(internalFormat, type) {
    const info = getTextureInternalFormatInfo(internalFormat);
    if (!info) throw "unknown internal format";
    const bytesPerElement = info.bytesPerElementMap[type];
    if (bytesPerElement === undefined) throw "unknown internal format";
    return bytesPerElement;
}
/**
 * Info related to a specific texture internalFormat as returned
 * from {@link module:twgl/textures.getFormatAndTypeForInternalFormat}.
 *
 * @typedef {Object} TextureFormatInfo
 * @property {number} format Format to pass to texImage2D and related functions
 * @property {number} type Type to pass to texImage2D and related functions
 * @memberOf module:twgl/textures
 */ /**
 * Gets the format and type for a given internalFormat
 *
 * @param {number} internalFormat The internal format
 * @return {module:twgl/textures.TextureFormatInfo} the corresponding format and type,
 * @memberOf module:twgl/textures
 */ function getFormatAndTypeForInternalFormat(internalFormat) {
    const info = getTextureInternalFormatInfo(internalFormat);
    if (!info) throw "unknown internal format";
    return {
        format: info.textureFormat,
        type: info.type[0]
    };
}
/**
 * Returns true if value is power of 2
 * @param {number} value number to check.
 * @return true if value is power of 2
 * @private
 */ function isPowerOf2(value) {
    return (value & value - 1) === 0;
}
/**
 * Gets whether or not we can generate mips for the given
 * internal format.
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {number} width The width parameter from texImage2D etc..
 * @param {number} height The height parameter from texImage2D etc..
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @return {boolean} true if we can generate mips
 * @memberOf module:twgl/textures
 */ function canGenerateMipmap(gl, width, height, internalFormat) {
    if (!isWebGL2(gl)) return isPowerOf2(width) && isPowerOf2(height);
    const info = getTextureInternalFormatInfo(internalFormat);
    if (!info) throw "unknown internal format";
    return info.colorRenderable && info.textureFilterable;
}
/**
 * Gets whether or not we can generate mips for the given format
 * @param {number} internalFormat The internalFormat parameter from texImage2D etc..
 * @return {boolean} true if we can generate mips
 * @memberOf module:twgl/textures
 */ function canFilter(internalFormat) {
    const info = getTextureInternalFormatInfo(internalFormat);
    if (!info) throw "unknown internal format";
    return info.textureFilterable;
}
/**
 * Gets the number of components for a given image format.
 * @param {number} format the format.
 * @return {number} the number of components for the format.
 * @memberOf module:twgl/textures
 */ function getNumComponentsForFormat(format) {
    const info = formatInfo[format];
    if (!info) throw "unknown format: " + format;
    return info.numColorComponents;
}
/**
 * Gets the texture type for a given array type.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @return {number} the gl texture type
 * @private
 */ function getTextureTypeForArrayType(gl, src, defaultType) {
    if (isArrayBuffer$1(src)) return getGLTypeForTypedArray(src);
    return defaultType || UNSIGNED_BYTE$2;
}
function guessDimensions(gl, target, width, height, numElements) {
    if (numElements % 1 !== 0) throw "can't guess dimensions";
    if (!width && !height) {
        const size = Math.sqrt(numElements / (target === TEXTURE_CUBE_MAP ? 6 : 1));
        if (size % 1 === 0) {
            width = size;
            height = size;
        } else {
            width = numElements;
            height = 1;
        }
    } else if (!height) {
        height = numElements / width;
        if (height % 1) throw "can't guess dimensions";
    } else if (!width) {
        width = numElements / height;
        if (width % 1) throw "can't guess dimensions";
    }
    return {
        width: width,
        height: height
    };
}
/**
 * Sets the default texture color.
 *
 * The default texture color is used when loading textures from
 * urls. Because the URL will be loaded async we'd like to be
 * able to use the texture immediately. By putting a 1x1 pixel
 * color in the texture we can start using the texture before
 * the URL has loaded.
 *
 * @param {number[]} color Array of 4 values in the range 0 to 1
 * @deprecated see {@link module:twgl.setDefaults}
 * @memberOf module:twgl/textures
 */ function setDefaultTextureColor(color) {
    defaults$1.textureColor = new Uint8Array([
        color[0] * 255,
        color[1] * 255,
        color[2] * 255,
        color[3] * 255
    ]);
}
function setDefaults$1(newDefaults) {
    copyExistingProperties(newDefaults, defaults$1);
    if (newDefaults.textureColor) setDefaultTextureColor(newDefaults.textureColor);
}
/**
 * A function to generate the source for a texture.
 * @callback TextureFunc
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options the texture options
 * @return {*} Returns any of the things documented for `src` for {@link module:twgl.TextureOptions}.
 * @memberOf module:twgl
 */ /**
 * Texture options passed to most texture functions. Each function will use whatever options
 * are appropriate for its needs. This lets you pass the same options to all functions.
 *
 * Note: A `TexImageSource` is defined in the WebGL spec as a `HTMLImageElement`, `HTMLVideoElement`,
 * `HTMLCanvasElement`, `ImageBitmap`, or `ImageData`.
 *
 * @typedef {Object} TextureOptions
 * @property {number} [target] the type of texture `gl.TEXTURE_2D` or `gl.TEXTURE_CUBE_MAP`. Defaults to `gl.TEXTURE_2D`.
 * @property {number} [level] the mip level to affect. Defaults to 0. Note, if set auto will be considered false unless explicitly set to true.
 * @property {number} [width] the width of the texture. Only used if src is an array or typed array or null.
 * @property {number} [height] the height of a texture. Only used if src is an array or typed array or null.
 * @property {number} [depth] the depth of a texture. Only used if src is an array or type array or null and target is `TEXTURE_3D` .
 * @property {number} [min] the min filter setting (eg. `gl.LINEAR`). Defaults to `gl.NEAREST_MIPMAP_LINEAR`
 *     or if texture is not a power of 2 on both dimensions then defaults to `gl.LINEAR`.
 * @property {number} [mag] the mag filter setting (eg. `gl.LINEAR`). Defaults to `gl.LINEAR`
 * @property {number} [minMag] both the min and mag filter settings.
 * @property {number} [internalFormat] internal format for texture. Defaults to `gl.RGBA`
 * @property {number} [format] format for texture. Defaults to `gl.RGBA`.
 * @property {number} [type] type for texture. Defaults to `gl.UNSIGNED_BYTE` unless `src` is ArrayBufferView. If `src`
 *     is ArrayBufferView defaults to type that matches ArrayBufferView type.
 * @property {number} [wrap] Texture wrapping for both S and T (and R if TEXTURE_3D or WebGLSampler). Defaults to `gl.REPEAT` for 2D unless src is WebGL1 and src not npot and `gl.CLAMP_TO_EDGE` for cube
 * @property {number} [wrapS] Texture wrapping for S. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [wrapT] Texture wrapping for T. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [wrapR] Texture wrapping for R. Defaults to `gl.REPEAT` and `gl.CLAMP_TO_EDGE` for cube. If set takes precedence over `wrap`.
 * @property {number} [minLod] TEXTURE_MIN_LOD setting
 * @property {number} [maxLod] TEXTURE_MAX_LOD setting
 * @property {number} [baseLevel] TEXTURE_BASE_LEVEL setting
 * @property {number} [maxLevel] TEXTURE_MAX_LEVEL setting
 * @property {number} [unpackAlignment] The `gl.UNPACK_ALIGNMENT` used when uploading an array. Defaults to 1.
 * @property {number[]|ArrayBufferView} [color] Color to initialize this texture with if loading an image asynchronously.
 *     The default use a blue 1x1 pixel texture. You can set another default by calling `twgl.setDefaults`
 *     or you can set an individual texture's initial color by setting this property. Example: `[1, .5, .5, 1]` = pink
 * @property {number} [premultiplyAlpha] Whether or not to premultiply alpha. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {number} [flipY] Whether or not to flip the texture vertically on upload. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {number} [colorspaceConversion] Whether or not to let the browser do colorspace conversion of the texture on upload. Defaults to whatever the current setting is.
 *     This lets you set it once before calling `twgl.createTexture` or `twgl.createTextures` and only override
 *     the current setting for specific textures.
 * @property {boolean} [auto] If `undefined` or `true`, in WebGL1, texture filtering is set automatically for non-power of 2 images and
 *    mips are generated for power of 2 images. In WebGL2 mips are generated if they can be. Note: if `level` is set above
 *    then then `auto` is assumed to be `false` unless explicity set to `true`.
 * @property {number[]} [cubeFaceOrder] The order that cube faces are pulled out of an img or set of images. The default is
 *
 *     [gl.TEXTURE_CUBE_MAP_POSITIVE_X,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_X,
 *      gl.TEXTURE_CUBE_MAP_POSITIVE_Y,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_Y,
 *      gl.TEXTURE_CUBE_MAP_POSITIVE_Z,
 *      gl.TEXTURE_CUBE_MAP_NEGATIVE_Z]
 *
 * @property {(number[]|ArrayBufferView|TexImageSource|TexImageSource[]|string|string[]|module:twgl.TextureFunc)} [src] source for texture
 *
 *    If `string` then it's assumed to be a URL to an image. The image will be downloaded async. A usable
 *    1x1 pixel texture will be returned immediately. The texture will be updated once the image has downloaded.
 *    If `target` is `gl.TEXTURE_CUBE_MAP` will attempt to divide image into 6 square pieces. 1x6, 6x1, 3x2, 2x3.
 *    The pieces will be uploaded in `cubeFaceOrder`
 *
 *    If `string[]` or `TexImageSource[]` and target is `gl.TEXTURE_CUBE_MAP` then it must have 6 entries, one for each face of a cube map.
 *
 *    If `string[]` or `TexImageSource[]` and target is `gl.TEXTURE_2D_ARRAY` then each entry is a slice of the a 2d array texture
 *    and will be scaled to the specified width and height OR to the size of the first image that loads.
 *
 *    If `TexImageSource` then it wil be used immediately to create the contents of the texture. Examples `HTMLImageElement`,
 *    `HTMLCanvasElement`, `HTMLVideoElement`.
 *
 *    If `number[]` or `ArrayBufferView` it's assumed to be data for a texture. If `width` or `height` is
 *    not specified it is guessed as follows. First the number of elements is computed by `src.length / numComponents`
 *    where `numComponents` is derived from `format`. If `target` is `gl.TEXTURE_CUBE_MAP` then `numElements` is divided
 *    by 6. Then
 *
 *    *   If neither `width` nor `height` are specified and `sqrt(numElements)` is an integer then width and height
 *        are set to `sqrt(numElements)`. Otherwise `width = numElements` and `height = 1`.
 *
 *    *   If only one of `width` or `height` is specified then the other equals `numElements / specifiedDimension`.
 *
 * If `number[]` will be converted to `type`.
 *
 * If `src` is a function it will be called with a `WebGLRenderingContext` and these options.
 * Whatever it returns is subject to these rules. So it can return a string url, an `HTMLElement`
 * an array etc...
 *
 * If `src` is undefined then an empty texture will be created of size `width` by `height`.
 *
 * @property {string} [crossOrigin] What to set the crossOrigin property of images when they are downloaded.
 *    default: undefined. Also see {@link module:twgl.setDefaults}.
 *
 * @memberOf module:twgl
 */ /**
 * Sets any packing state that will be set based on the options.
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @private
 */ function setPackState(gl, options) {
    if (options.colorspaceConversion !== undefined) gl.pixelStorei(UNPACK_COLORSPACE_CONVERSION_WEBGL, options.colorspaceConversion);
    if (options.premultiplyAlpha !== undefined) gl.pixelStorei(UNPACK_PREMULTIPLY_ALPHA_WEBGL, options.premultiplyAlpha);
    if (options.flipY !== undefined) gl.pixelStorei(UNPACK_FLIP_Y_WEBGL, options.flipY);
}
/**
 * Set skip state to defaults
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @private
 */ function setSkipStateToDefault(gl) {
    gl.pixelStorei(UNPACK_ALIGNMENT, 4);
    if (isWebGL2(gl)) {
        gl.pixelStorei(UNPACK_ROW_LENGTH, 0);
        gl.pixelStorei(UNPACK_IMAGE_HEIGHT, 0);
        gl.pixelStorei(UNPACK_SKIP_PIXELS, 0);
        gl.pixelStorei(UNPACK_SKIP_ROWS, 0);
        gl.pixelStorei(UNPACK_SKIP_IMAGES, 0);
    }
}
/**
 * Sets the parameters of a texture or sampler
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {number|WebGLSampler} target texture target or sampler
 * @param {function()} parameteriFn texParameteri or samplerParameteri fn
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @private
 */ function setTextureSamplerParameters(gl, target, parameteriFn, options) {
    if (options.minMag) {
        parameteriFn.call(gl, target, TEXTURE_MIN_FILTER, options.minMag);
        parameteriFn.call(gl, target, TEXTURE_MAG_FILTER, options.minMag);
    }
    if (options.min) parameteriFn.call(gl, target, TEXTURE_MIN_FILTER, options.min);
    if (options.mag) parameteriFn.call(gl, target, TEXTURE_MAG_FILTER, options.mag);
    if (options.wrap) {
        parameteriFn.call(gl, target, TEXTURE_WRAP_S, options.wrap);
        parameteriFn.call(gl, target, TEXTURE_WRAP_T, options.wrap);
        if (target === TEXTURE_3D || isSampler(gl, target)) parameteriFn.call(gl, target, TEXTURE_WRAP_R, options.wrap);
    }
    if (options.wrapR) parameteriFn.call(gl, target, TEXTURE_WRAP_R, options.wrapR);
    if (options.wrapS) parameteriFn.call(gl, target, TEXTURE_WRAP_S, options.wrapS);
    if (options.wrapT) parameteriFn.call(gl, target, TEXTURE_WRAP_T, options.wrapT);
    if (options.minLod) parameteriFn.call(gl, target, TEXTURE_MIN_LOD, options.minLod);
    if (options.maxLod) parameteriFn.call(gl, target, TEXTURE_MAX_LOD, options.maxLod);
    if (options.baseLevel) parameteriFn.call(gl, target, TEXTURE_BASE_LEVEL, options.baseLevel);
    if (options.maxLevel) parameteriFn.call(gl, target, TEXTURE_MAX_LEVEL, options.maxLevel);
}
/**
 * Sets the texture parameters of a texture.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 */ function setTextureParameters(gl, tex, options) {
    const target = options.target || TEXTURE_2D;
    gl.bindTexture(target, tex);
    setTextureSamplerParameters(gl, target, gl.texParameteri, options);
}
/**
 * Sets the sampler parameters of a sampler.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLSampler} sampler the WebGLSampler to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @memberOf module:twgl/textures
 */ function setSamplerParameters(gl, sampler, options) {
    setTextureSamplerParameters(gl, sampler, gl.samplerParameteri, options);
}
/**
 * Creates a new sampler object and sets parameters.
 *
 * Example:
 *
 *      const sampler = twgl.createSampler(gl, {
 *        minMag: gl.NEAREST,         // sets both TEXTURE_MIN_FILTER and TEXTURE_MAG_FILTER
 *        wrap: gl.CLAMP_TO_NEAREST,  // sets both TEXTURE_WRAP_S and TEXTURE_WRAP_T and TEXTURE_WRAP_R
 *      });
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {Object.<string,module:twgl.TextureOptions>} options A object of TextureOptions one per sampler.
 * @return {Object.<string,WebGLSampler>} the created samplers by name
 * @private
 */ function createSampler(gl, options) {
    const sampler = gl.createSampler();
    setSamplerParameters(gl, sampler, options);
    return sampler;
}
/**
 * Creates a multiple sampler objects and sets parameters on each.
 *
 * Example:
 *
 *      const samplers = twgl.createSamplers(gl, {
 *        nearest: {
 *          minMag: gl.NEAREST,
 *        },
 *        nearestClampS: {
 *          minMag: gl.NEAREST,
 *          wrapS: gl.CLAMP_TO_NEAREST,
 *        },
 *        linear: {
 *          minMag: gl.LINEAR,
 *        },
 *        nearestClamp: {
 *          minMag: gl.NEAREST,
 *          wrap: gl.CLAMP_TO_EDGE,
 *        },
 *        linearClamp: {
 *          minMag: gl.LINEAR,
 *          wrap: gl.CLAMP_TO_EDGE,
 *        },
 *        linearClampT: {
 *          minMag: gl.LINEAR,
 *          wrapT: gl.CLAMP_TO_EDGE,
 *        },
 *      });
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set on the sampler
 * @private
 */ function createSamplers(gl, samplerOptions) {
    const samplers = {};
    Object.keys(samplerOptions).forEach(function(name) {
        samplers[name] = createSampler(gl, samplerOptions[name]);
    });
    return samplers;
}
/**
 * Makes a 1x1 pixel
 * If no color is passed in uses the default color which can be set by calling `setDefaultTextureColor`.
 * @param {(number[]|ArrayBufferView)} [color] The color using 0-1 values
 * @return {Uint8Array} Unit8Array with color.
 * @private
 */ function make1Pixel(color) {
    color = color || defaults$1.textureColor;
    if (isArrayBuffer$1(color)) return color;
    return new Uint8Array([
        color[0] * 255,
        color[1] * 255,
        color[2] * 255,
        color[3] * 255
    ]);
}
/**
 * Sets filtering or generates mips for texture based on width or height
 * If width or height is not passed in uses `options.width` and//or `options.height`
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @param {number} [width] width of texture
 * @param {number} [height] height of texture
 * @param {number} [internalFormat] The internalFormat parameter from texImage2D etc..
 * @memberOf module:twgl/textures
 */ function setTextureFilteringForSize(gl, tex, options, width, height, internalFormat) {
    options = options || defaults$1.textureOptions;
    internalFormat = internalFormat || RGBA;
    const target = options.target || TEXTURE_2D;
    width = width || options.width;
    height = height || options.height;
    gl.bindTexture(target, tex);
    if (canGenerateMipmap(gl, width, height, internalFormat)) gl.generateMipmap(target);
    else {
        const filtering = canFilter(internalFormat) ? LINEAR : NEAREST;
        gl.texParameteri(target, TEXTURE_MIN_FILTER, filtering);
        gl.texParameteri(target, TEXTURE_MAG_FILTER, filtering);
        gl.texParameteri(target, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
        gl.texParameteri(target, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
    }
}
function shouldAutomaticallySetTextureFilteringForSize(options) {
    return options.auto === true || options.auto === undefined && options.level === undefined;
}
/**
 * Gets an array of cubemap face enums
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @return {number[]} cubemap face enums
 * @private
 */ function getCubeFaceOrder(gl, options) {
    options = options || {};
    return options.cubeFaceOrder || [
        TEXTURE_CUBE_MAP_POSITIVE_X,
        TEXTURE_CUBE_MAP_NEGATIVE_X,
        TEXTURE_CUBE_MAP_POSITIVE_Y,
        TEXTURE_CUBE_MAP_NEGATIVE_Y,
        TEXTURE_CUBE_MAP_POSITIVE_Z,
        TEXTURE_CUBE_MAP_NEGATIVE_Z, 
    ];
}
/**
 * @typedef {Object} FaceInfo
 * @property {number} face gl enum for texImage2D
 * @property {number} ndx face index (0 - 5) into source data
 * @ignore
 */ /**
 * Gets an array of FaceInfos
 * There's a bug in some NVidia drivers that will crash the driver if
 * `gl.TEXTURE_CUBE_MAP_POSITIVE_X` is not uploaded first. So, we take
 * the user's desired order from his faces to WebGL and make sure we
 * do the faces in WebGL order
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @return {FaceInfo[]} cubemap face infos. Arguably the `face` property of each element is redundant but
 *    it's needed internally to sort the array of `ndx` properties by `face`.
 * @private
 */ function getCubeFacesWithNdx(gl, options) {
    const faces = getCubeFaceOrder(gl, options);
    // work around bug in NVidia drivers. We have to upload the first face first else the driver crashes :(
    const facesWithNdx = faces.map(function(face, ndx) {
        return {
            face: face,
            ndx: ndx
        };
    });
    facesWithNdx.sort(function(a, b) {
        return a.face - b.face;
    });
    return facesWithNdx;
}
/**
 * Set a texture from the contents of an element. Will also set
 * texture filtering or generate mips based on the dimensions of the element
 * unless `options.auto === false`. If `target === gl.TEXTURE_CUBE_MAP` will
 * attempt to slice image into 1x6, 2x3, 3x2, or 6x1 images, one for each face.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {HTMLElement} element a canvas, img, or video element.
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 * @kind function
 */ function setTextureFromElement(gl, tex, element, options) {
    options = options || defaults$1.textureOptions;
    const target = options.target || TEXTURE_2D;
    const level = options.level || 0;
    let width = element.width;
    let height = element.height;
    const internalFormat = options.internalFormat || options.format || RGBA;
    const formatType = getFormatAndTypeForInternalFormat(internalFormat);
    const format = options.format || formatType.format;
    const type = options.type || formatType.type;
    setPackState(gl, options);
    gl.bindTexture(target, tex);
    if (target === TEXTURE_CUBE_MAP) {
        // guess the parts
        const imgWidth = element.width;
        const imgHeight = element.height;
        let size;
        let slices;
        if (imgWidth / 6 === imgHeight) {
            // It's 6x1
            size = imgHeight;
            slices = [
                0,
                0,
                1,
                0,
                2,
                0,
                3,
                0,
                4,
                0,
                5,
                0
            ];
        } else if (imgHeight / 6 === imgWidth) {
            // It's 1x6
            size = imgWidth;
            slices = [
                0,
                0,
                0,
                1,
                0,
                2,
                0,
                3,
                0,
                4,
                0,
                5
            ];
        } else if (imgWidth / 3 === imgHeight / 2) {
            // It's 3x2
            size = imgWidth / 3;
            slices = [
                0,
                0,
                1,
                0,
                2,
                0,
                0,
                1,
                1,
                1,
                2,
                1
            ];
        } else if (imgWidth / 2 === imgHeight / 3) {
            // It's 2x3
            size = imgWidth / 2;
            slices = [
                0,
                0,
                1,
                0,
                0,
                1,
                1,
                1,
                0,
                2,
                1,
                2
            ];
        } else throw "can't figure out cube map from element: " + (element.src ? element.src : element.nodeName);
        const ctx = getShared2DContext();
        if (ctx) {
            ctx.canvas.width = size;
            ctx.canvas.height = size;
            width = size;
            height = size;
            getCubeFacesWithNdx(gl, options).forEach(function(f) {
                const xOffset = slices[f.ndx * 2 + 0] * size;
                const yOffset = slices[f.ndx * 2 + 1] * size;
                ctx.drawImage(element, xOffset, yOffset, size, size, 0, 0, size, size);
                gl.texImage2D(f.face, level, internalFormat, format, type, ctx.canvas);
            });
            // Free up the canvas memory
            ctx.canvas.width = 1;
            ctx.canvas.height = 1;
        } else if (typeof createImageBitmap !== "undefined") {
            // NOTE: It seems like we should prefer ImageBitmap because unlike canvas it's
            // note lossy? (alpha is not premultiplied? although I'm not sure what
            width = size;
            height = size;
            getCubeFacesWithNdx(gl, options).forEach(function(f) {
                const xOffset = slices[f.ndx * 2 + 0] * size;
                const yOffset = slices[f.ndx * 2 + 1] * size;
                // We can't easily use a default texture color here as it would have to match
                // the type across all faces where as with a 2D one there's only one face
                // so we're replacing everything all at once. It also has to be the correct size.
                // On the other hand we need all faces to be the same size so as one face loads
                // the rest match else the texture will be un-renderable.
                gl.texImage2D(f.face, level, internalFormat, size, size, 0, format, type, null);
                createImageBitmap(element, xOffset, yOffset, size, size, {
                    premultiplyAlpha: "none",
                    colorSpaceConversion: "none"
                }).then(function(imageBitmap) {
                    setPackState(gl, options);
                    gl.bindTexture(target, tex);
                    gl.texImage2D(f.face, level, internalFormat, format, type, imageBitmap);
                    if (shouldAutomaticallySetTextureFilteringForSize(options)) setTextureFilteringForSize(gl, tex, options, width, height, internalFormat);
                });
            });
        }
    } else if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) {
        const smallest = Math.min(element.width, element.height);
        const largest = Math.max(element.width, element.height);
        const depth = largest / smallest;
        if (depth % 1 !== 0) throw "can not compute 3D dimensions of element";
        const xMult = element.width === largest ? 1 : 0;
        const yMult = element.height === largest ? 1 : 0;
        gl.pixelStorei(UNPACK_ALIGNMENT, 1);
        gl.pixelStorei(UNPACK_ROW_LENGTH, element.width);
        gl.pixelStorei(UNPACK_IMAGE_HEIGHT, 0);
        gl.pixelStorei(UNPACK_SKIP_IMAGES, 0);
        gl.texImage3D(target, level, internalFormat, smallest, smallest, smallest, 0, format, type, null);
        for(let d = 0; d < depth; ++d){
            const srcX = d * smallest * xMult;
            const srcY = d * smallest * yMult;
            gl.pixelStorei(UNPACK_SKIP_PIXELS, srcX);
            gl.pixelStorei(UNPACK_SKIP_ROWS, srcY);
            gl.texSubImage3D(target, level, 0, 0, d, smallest, smallest, 1, format, type, element);
        }
        setSkipStateToDefault(gl);
    } else gl.texImage2D(target, level, internalFormat, format, type, element);
    if (shouldAutomaticallySetTextureFilteringForSize(options)) setTextureFilteringForSize(gl, tex, options, width, height, internalFormat);
    setTextureParameters(gl, tex, options);
}
function noop() {}
/**
 * Checks whether the url's origin is the same so that we can set the `crossOrigin`
 * @param {string} url url to image
 * @returns {boolean} true if the window's origin is the same as image's url
 * @private
 */ function urlIsSameOrigin(url) {
    if (typeof document !== "undefined") {
        // for IE really
        const a = document.createElement("a");
        a.href = url;
        return a.hostname === location.hostname && a.port === location.port && a.protocol === location.protocol;
    } else {
        const localOrigin = new URL(location.href).origin;
        const urlOrigin = new URL(url, location.href).origin;
        return urlOrigin === localOrigin;
    }
}
function setToAnonymousIfUndefinedAndURLIsNotSameOrigin(url, crossOrigin) {
    return crossOrigin === undefined && !urlIsSameOrigin(url) ? "anonymous" : crossOrigin;
}
/**
 * Loads an image
 * @param {string} url url to image
 * @param {string} crossOrigin
 * @param {function(err, img)} [callback] a callback that's passed an error and the image. The error will be non-null
 *     if there was an error
 * @return {HTMLImageElement} the image being loaded.
 * @private
 */ function loadImage(url, crossOrigin, callback) {
    callback = callback || noop;
    let img;
    crossOrigin = crossOrigin !== undefined ? crossOrigin : defaults$1.crossOrigin;
    crossOrigin = setToAnonymousIfUndefinedAndURLIsNotSameOrigin(url, crossOrigin);
    if (typeof Image !== "undefined") {
        img = new Image();
        if (crossOrigin !== undefined) img.crossOrigin = crossOrigin;
        const clearEventHandlers = function clearEventHandlers() {
            img.removeEventListener("error", onError); // eslint-disable-line
            img.removeEventListener("load", onLoad); // eslint-disable-line
            img = null;
        };
        const onError = function onError() {
            const msg = "couldn't load image: " + url;
            error(msg);
            callback(msg, img);
            clearEventHandlers();
        };
        const onLoad = function onLoad() {
            callback(null, img);
            clearEventHandlers();
        };
        img.addEventListener("error", onError);
        img.addEventListener("load", onLoad);
        img.src = url;
        return img;
    } else if (typeof ImageBitmap !== "undefined") {
        let err;
        let bm;
        const cb = function cb() {
            callback(err, bm);
        };
        const options = {};
        if (crossOrigin) options.mode = "cors"; // TODO: not sure how to translate image.crossOrigin
        fetch(url, options).then(function(response) {
            if (!response.ok) throw response;
            return response.blob();
        }).then(function(blob) {
            return createImageBitmap(blob, {
                premultiplyAlpha: "none",
                colorSpaceConversion: "none"
            });
        }).then(function(bitmap) {
            // not sure if this works. We don't want
            // to catch the user's error. So, call
            // the callback in a timeout so we're
            // not in this scope inside the promise.
            bm = bitmap;
            setTimeout(cb);
        }).catch(function(e) {
            err = e;
            setTimeout(cb);
        });
        img = null;
    }
    return img;
}
/**
 * check if object is a TexImageSource
 *
 * @param {Object} obj Object to test
 * @return {boolean} true if object is a TexImageSource
 * @private
 */ function isTexImageSource(obj) {
    return typeof ImageBitmap !== "undefined" && obj instanceof ImageBitmap || typeof ImageData !== "undefined" && obj instanceof ImageData || typeof HTMLElement !== "undefined" && obj instanceof HTMLElement;
}
/**
 * if obj is an TexImageSource then just
 * uses it otherwise if obj is a string
 * then load it first.
 *
 * @param {string|TexImageSource} obj
 * @param {string} crossOrigin
 * @param {function(err, img)} [callback] a callback that's passed an error and the image. The error will be non-null
 *     if there was an error
 * @private
 */ function loadAndUseImage(obj, crossOrigin, callback) {
    if (isTexImageSource(obj)) {
        setTimeout(function() {
            callback(null, obj);
        });
        return obj;
    }
    return loadImage(obj, crossOrigin, callback);
}
/**
 * Sets a texture to a 1x1 pixel color. If `options.color === false` is nothing happens. If it's not set
 * the default texture color is used which can be set by calling `setDefaultTextureColor`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 * @private
 */ function setTextureTo1PixelColor(gl, tex, options) {
    options = options || defaults$1.textureOptions;
    const target = options.target || TEXTURE_2D;
    gl.bindTexture(target, tex);
    if (options.color === false) return;
    // Assume it's a URL
    // Put 1x1 pixels in texture. That makes it renderable immediately regardless of filtering.
    const color = make1Pixel(options.color);
    if (target === TEXTURE_CUBE_MAP) for(let ii = 0; ii < 6; ++ii)gl.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_X + ii, 0, RGBA, 1, 1, 0, RGBA, UNSIGNED_BYTE$2, color);
    else if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) gl.texImage3D(target, 0, RGBA, 1, 1, 1, 0, RGBA, UNSIGNED_BYTE$2, color);
    else gl.texImage2D(target, 0, RGBA, 1, 1, 0, RGBA, UNSIGNED_BYTE$2, color);
}
/**
 * The src image(s) used to create a texture.
 *
 * When you call {@link module:twgl.createTexture} or {@link module:twgl.createTextures}
 * you can pass in urls for images to load into the textures. If it's a single url
 * then this will be a single HTMLImageElement. If it's an array of urls used for a cubemap
 * this will be a corresponding array of images for the cubemap.
 *
 * @typedef {HTMLImageElement|HTMLImageElement[]} TextureSrc
 * @memberOf module:twgl
 */ /**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback TextureReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} texture the texture.
 * @param {module:twgl.TextureSrc} source image(s) used to as the src for the texture
 * @memberOf module:twgl
 */ /**
 * A callback for when all images have finished downloading and been uploaded into their respective textures
 * @callback TexturesReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {Object.<string, WebGLTexture>} textures the created textures by name. Same as returned by {@link module:twgl.createTextures}.
 * @param {Object.<string, module:twgl.TextureSrc>} sources the image(s) used for the texture by name.
 * @memberOf module:twgl
 */ /**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback CubemapReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} tex the texture.
 * @param {HTMLImageElement[]} imgs the images for each face.
 * @memberOf module:twgl
 */ /**
 * A callback for when an image finished downloading and been uploaded into a texture
 * @callback ThreeDReadyCallback
 * @param {*} err If truthy there was an error.
 * @param {WebGLTexture} tex the texture.
 * @param {HTMLImageElement[]} imgs the images for each slice.
 * @memberOf module:twgl
 */ /**
 * Loads a texture from an image from a Url as specified in `options.src`
 * If `options.color !== false` will set the texture to a 1x1 pixel color so that the texture is
 * immediately useable. It will be updated with the contents of the image once the image has finished
 * downloading. Filtering options will be set as appropriate for image unless `options.auto === false`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.TextureReadyCallback} [callback] A function to be called when the image has finished loading. err will
 *    be non null if there was an error.
 * @return {HTMLImageElement} the image being downloaded.
 * @memberOf module:twgl/textures
 */ function loadTextureFromUrl(gl, tex, options, callback) {
    callback = callback || noop;
    options = options || defaults$1.textureOptions;
    setTextureTo1PixelColor(gl, tex, options);
    // Because it's async we need to copy the options.
    options = Object.assign({}, options);
    const img1 = loadAndUseImage(options.src, options.crossOrigin, function(err, img) {
        if (err) callback(err, tex, img);
        else {
            setTextureFromElement(gl, tex, img, options);
            callback(null, tex, img);
        }
    });
    return img1;
}
/**
 * Loads a cubemap from 6 urls or TexImageSources as specified in `options.src`. Will set the cubemap to a 1x1 pixel color
 * so that it is usable immediately unless `option.color === false`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.CubemapReadyCallback} [callback] A function to be called when all the images have finished loading. err will
 *    be non null if there was an error.
 * @memberOf module:twgl/textures
 * @private
 */ function loadCubemapFromUrls(gl, tex, options, callback) {
    callback = callback || noop;
    const urls = options.src;
    if (urls.length !== 6) throw "there must be 6 urls for a cubemap";
    const level = options.level || 0;
    const internalFormat = options.internalFormat || options.format || RGBA;
    const formatType = getFormatAndTypeForInternalFormat(internalFormat);
    const format = options.format || formatType.format;
    const type = options.type || UNSIGNED_BYTE$2;
    const target = options.target || TEXTURE_2D;
    if (target !== TEXTURE_CUBE_MAP) throw "target must be TEXTURE_CUBE_MAP";
    setTextureTo1PixelColor(gl, tex, options);
    // Because it's async we need to copy the options.
    options = Object.assign({}, options);
    let numToLoad = 6;
    const errors = [];
    const faces = getCubeFaceOrder(gl, options);
    let imgs; // eslint-disable-line
    function uploadImg(faceTarget) {
        return function(err, img) {
            --numToLoad;
            if (err) errors.push(err);
            else if (img.width !== img.height) errors.push("cubemap face img is not a square: " + img.src);
            else {
                setPackState(gl, options);
                gl.bindTexture(target, tex);
                // So assuming this is the first image we now have one face that's img sized
                // and 5 faces that are 1x1 pixel so size the other faces
                if (numToLoad === 5) // use the default order
                getCubeFaceOrder().forEach(function(otherTarget) {
                    // Should we re-use the same face or a color?
                    gl.texImage2D(otherTarget, level, internalFormat, format, type, img);
                });
                else gl.texImage2D(faceTarget, level, internalFormat, format, type, img);
                if (shouldAutomaticallySetTextureFilteringForSize(options)) gl.generateMipmap(target);
            }
            if (numToLoad === 0) callback(errors.length ? errors : undefined, tex, imgs);
        };
    }
    imgs = urls.map(function(url, ndx) {
        return loadAndUseImage(url, options.crossOrigin, uploadImg(faces[ndx]));
    });
}
/**
 * Loads a 2d array or 3d texture from urls OR TexImageSources as specified in `options.src`.
 * Will set the texture to a 1x1 pixel color
 * so that it is usable immediately unless `option.color === false`.
 *
 * If the width and height is not specified the width and height of the first
 * image loaded will be used. Note that since images are loaded async
 * which image downloads first is unknown.
 *
 * If an image is not the same size as the width and height it will be scaled
 * to that width and height.
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.ThreeDReadyCallback} [callback] A function to be called when all the images have finished loading. err will
 *    be non null if there was an error.
 * @memberOf module:twgl/textures
 * @private
 */ function loadSlicesFromUrls(gl, tex, options, callback) {
    callback = callback || noop;
    const urls = options.src;
    const internalFormat = options.internalFormat || options.format || RGBA;
    const formatType = getFormatAndTypeForInternalFormat(internalFormat);
    const format = options.format || formatType.format;
    const type = options.type || UNSIGNED_BYTE$2;
    const target = options.target || TEXTURE_2D_ARRAY;
    if (target !== TEXTURE_3D && target !== TEXTURE_2D_ARRAY) throw "target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
    setTextureTo1PixelColor(gl, tex, options);
    // Because it's async we need to copy the options.
    options = Object.assign({}, options);
    let numToLoad = urls.length;
    const errors = [];
    let imgs; // eslint-disable-line
    const level = options.level || 0;
    let width = options.width;
    let height = options.height;
    const depth = urls.length;
    let firstImage = true;
    function uploadImg(slice) {
        return function(err, img) {
            --numToLoad;
            if (err) errors.push(err);
            else {
                setPackState(gl, options);
                gl.bindTexture(target, tex);
                if (firstImage) {
                    firstImage = false;
                    width = options.width || img.width;
                    height = options.height || img.height;
                    gl.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, null);
                    // put it in every slice otherwise some slices will be 0,0,0,0
                    for(let s = 0; s < depth; ++s)gl.texSubImage3D(target, level, 0, 0, s, width, height, 1, format, type, img);
                } else {
                    let src = img;
                    let ctx;
                    if (img.width !== width || img.height !== height) {
                        // Size the image to fix
                        ctx = getShared2DContext();
                        src = ctx.canvas;
                        ctx.canvas.width = width;
                        ctx.canvas.height = height;
                        ctx.drawImage(img, 0, 0, width, height);
                    }
                    gl.texSubImage3D(target, level, 0, 0, slice, width, height, 1, format, type, src);
                    // free the canvas memory
                    if (ctx && src === ctx.canvas) {
                        ctx.canvas.width = 0;
                        ctx.canvas.height = 0;
                    }
                }
                if (shouldAutomaticallySetTextureFilteringForSize(options)) gl.generateMipmap(target);
            }
            if (numToLoad === 0) callback(errors.length ? errors : undefined, tex, imgs);
        };
    }
    imgs = urls.map(function(url, ndx) {
        return loadAndUseImage(url, options.crossOrigin, uploadImg(ndx));
    });
}
/**
 * Sets a texture from an array or typed array. If the width or height is not provided will attempt to
 * guess the size. See {@link module:twgl.TextureOptions}.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {(number[]|ArrayBufferView)} src An array or typed arry with texture data.
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 *   This is often the same options you passed in when you created the texture.
 * @memberOf module:twgl/textures
 */ function setTextureFromArray(gl, tex, src, options) {
    options = options || defaults$1.textureOptions;
    const target = options.target || TEXTURE_2D;
    gl.bindTexture(target, tex);
    let width = options.width;
    let height = options.height;
    let depth = options.depth;
    const level = options.level || 0;
    const internalFormat = options.internalFormat || options.format || RGBA;
    const formatType = getFormatAndTypeForInternalFormat(internalFormat);
    const format = options.format || formatType.format;
    const type = options.type || getTextureTypeForArrayType(gl, src, formatType.type);
    if (!isArrayBuffer$1(src)) {
        const Type = getTypedArrayTypeForGLType(type);
        src = new Type(src);
    } else if (src instanceof Uint8ClampedArray) src = new Uint8Array(src.buffer);
    const bytesPerElement = getBytesPerElementForInternalFormat(internalFormat, type);
    const numElements = src.byteLength / bytesPerElement; // TODO: check UNPACK_ALIGNMENT?
    if (numElements % 1) throw "length wrong size for format: " + glEnumToString(gl, format);
    let dimensions;
    if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) {
        if (!width && !height && !depth) {
            const size = Math.cbrt(numElements);
            if (size % 1 !== 0) throw "can't guess cube size of array of numElements: " + numElements;
            width = size;
            height = size;
            depth = size;
        } else if (width && (!height || !depth)) {
            dimensions = guessDimensions(gl, target, height, depth, numElements / width);
            height = dimensions.width;
            depth = dimensions.height;
        } else if (height && (!width || !depth)) {
            dimensions = guessDimensions(gl, target, width, depth, numElements / height);
            width = dimensions.width;
            depth = dimensions.height;
        } else {
            dimensions = guessDimensions(gl, target, width, height, numElements / depth);
            width = dimensions.width;
            height = dimensions.height;
        }
    } else {
        dimensions = guessDimensions(gl, target, width, height, numElements);
        width = dimensions.width;
        height = dimensions.height;
    }
    setSkipStateToDefault(gl);
    gl.pixelStorei(UNPACK_ALIGNMENT, options.unpackAlignment || 1);
    setPackState(gl, options);
    if (target === TEXTURE_CUBE_MAP) {
        const elementsPerElement = bytesPerElement / src.BYTES_PER_ELEMENT;
        const faceSize = numElements / 6 * elementsPerElement;
        getCubeFacesWithNdx(gl, options).forEach((f)=>{
            const offset = faceSize * f.ndx;
            const data = src.subarray(offset, offset + faceSize);
            gl.texImage2D(f.face, level, internalFormat, width, height, 0, format, type, data);
        });
    } else if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) gl.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, src);
    else gl.texImage2D(target, level, internalFormat, width, height, 0, format, type, src);
    return {
        width: width,
        height: height,
        depth: depth,
        type: type
    };
}
/**
 * Sets a texture with no contents of a certain size. In other words calls `gl.texImage2D` with `null`.
 * You must set `options.width` and `options.height`.
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the WebGLTexture to set parameters for
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @memberOf module:twgl/textures
 */ function setEmptyTexture(gl, tex, options) {
    const target = options.target || TEXTURE_2D;
    gl.bindTexture(target, tex);
    const level = options.level || 0;
    const internalFormat = options.internalFormat || options.format || RGBA;
    const formatType = getFormatAndTypeForInternalFormat(internalFormat);
    const format = options.format || formatType.format;
    const type = options.type || formatType.type;
    setPackState(gl, options);
    if (target === TEXTURE_CUBE_MAP) for(let ii = 0; ii < 6; ++ii)gl.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_X + ii, level, internalFormat, options.width, options.height, 0, format, type, null);
    else if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) gl.texImage3D(target, level, internalFormat, options.width, options.height, options.depth, 0, format, type, null);
    else gl.texImage2D(target, level, internalFormat, options.width, options.height, 0, format, type, null);
}
/**
 * Creates a texture based on the options passed in.
 *
 * Note: may reset UNPACK_ALIGNMENT, UNPACK_ROW_LENGTH, UNPACK_IMAGE_HEIGHT, UNPACK_SKIP_IMAGES
 * UNPACK_SKIP_PIXELS, and UNPACK_SKIP_ROWS
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.TextureOptions} [options] A TextureOptions object with whatever parameters you want set.
 * @param {module:twgl.TextureReadyCallback} [callback] A callback called when an image has been downloaded and uploaded to the texture.
 * @return {WebGLTexture} the created texture.
 * @memberOf module:twgl/textures
 */ function createTexture(gl, options, callback) {
    callback = callback || noop;
    options = options || defaults$1.textureOptions;
    const tex = gl.createTexture();
    const target = options.target || TEXTURE_2D;
    let width = options.width || 1;
    let height = options.height || 1;
    const internalFormat = options.internalFormat || RGBA;
    gl.bindTexture(target, tex);
    if (target === TEXTURE_CUBE_MAP) {
        // this should have been the default for cubemaps :(
        gl.texParameteri(target, TEXTURE_WRAP_S, CLAMP_TO_EDGE);
        gl.texParameteri(target, TEXTURE_WRAP_T, CLAMP_TO_EDGE);
    }
    let src = options.src;
    if (src) {
        if (typeof src === "function") src = src(gl, options);
        if (typeof src === "string") loadTextureFromUrl(gl, tex, options, callback);
        else if (isArrayBuffer$1(src) || Array.isArray(src) && (typeof src[0] === "number" || Array.isArray(src[0]) || isArrayBuffer$1(src[0]))) {
            const dimensions = setTextureFromArray(gl, tex, src, options);
            width = dimensions.width;
            height = dimensions.height;
        } else if (Array.isArray(src) && (typeof src[0] === "string" || isTexImageSource(src[0]))) {
            if (target === TEXTURE_CUBE_MAP) loadCubemapFromUrls(gl, tex, options, callback);
            else loadSlicesFromUrls(gl, tex, options, callback);
        } else {
            setTextureFromElement(gl, tex, src, options);
            width = src.width;
            height = src.height;
        }
    } else setEmptyTexture(gl, tex, options);
    if (shouldAutomaticallySetTextureFilteringForSize(options)) setTextureFilteringForSize(gl, tex, options, width, height, internalFormat);
    setTextureParameters(gl, tex, options);
    return tex;
}
/**
 * Resizes a texture based on the options passed in.
 *
 * Note: This is not a generic resize anything function.
 * It's mostly used by {@link module:twgl.resizeFramebufferInfo}
 * It will use `options.src` if it exists to try to determine a `type`
 * otherwise it will assume `gl.UNSIGNED_BYTE`. No data is provided
 * for the texture. Texture parameters will be set accordingly
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {WebGLTexture} tex the texture to resize
 * @param {module:twgl.TextureOptions} options A TextureOptions object with whatever parameters you want set.
 * @param {number} [width] the new width. If not passed in will use `options.width`
 * @param {number} [height] the new height. If not passed in will use `options.height`
 * @param {number} [depth] the new depth. If not passed in will use `options.depth`
 * @memberOf module:twgl/textures
 */ function resizeTexture(gl, tex, options, width, height, depth) {
    width = width || options.width;
    height = height || options.height;
    depth = depth || options.depth;
    const target = options.target || TEXTURE_2D;
    gl.bindTexture(target, tex);
    const level = options.level || 0;
    const internalFormat = options.internalFormat || options.format || RGBA;
    const formatType = getFormatAndTypeForInternalFormat(internalFormat);
    const format = options.format || formatType.format;
    let type;
    const src = options.src;
    if (!src) type = options.type || formatType.type;
    else if (isArrayBuffer$1(src) || Array.isArray(src) && typeof src[0] === "number") type = options.type || getTextureTypeForArrayType(gl, src, formatType.type);
    else type = options.type || formatType.type;
    if (target === TEXTURE_CUBE_MAP) for(let ii = 0; ii < 6; ++ii)gl.texImage2D(TEXTURE_CUBE_MAP_POSITIVE_X + ii, level, internalFormat, width, height, 0, format, type, null);
    else if (target === TEXTURE_3D || target === TEXTURE_2D_ARRAY) gl.texImage3D(target, level, internalFormat, width, height, depth, 0, format, type, null);
    else gl.texImage2D(target, level, internalFormat, width, height, 0, format, type, null);
}
/**
 * Check if a src is an async request.
 * if src is a string we're going to download an image
 * if src is an array of strings we're going to download cubemap images
 * @param {*} src The src from a TextureOptions
 * @returns {bool} true if src is async.
 * @private
 */ function isAsyncSrc(src) {
    return typeof src === "string" || Array.isArray(src) && typeof src[0] === "string";
}
/**
 * Creates a bunch of textures based on the passed in options.
 *
 * Example:
 *
 *     const textures = twgl.createTextures(gl, {
 *       // a power of 2 image
 *       hftIcon: { src: "images/hft-icon-16.png", mag: gl.NEAREST },
 *       // a non-power of 2 image
 *       clover: { src: "images/clover.jpg" },
 *       // From a canvas
 *       fromCanvas: { src: ctx.canvas },
 *       // A cubemap from 6 images
 *       yokohama: {
 *         target: gl.TEXTURE_CUBE_MAP,
 *         src: [
 *           'images/yokohama/posx.jpg',
 *           'images/yokohama/negx.jpg',
 *           'images/yokohama/posy.jpg',
 *           'images/yokohama/negy.jpg',
 *           'images/yokohama/posz.jpg',
 *           'images/yokohama/negz.jpg',
 *         ],
 *       },
 *       // A cubemap from 1 image (can be 1x6, 2x3, 3x2, 6x1)
 *       goldengate: {
 *         target: gl.TEXTURE_CUBE_MAP,
 *         src: 'images/goldengate.jpg',
 *       },
 *       // A 2x2 pixel texture from a JavaScript array
 *       checker: {
 *         mag: gl.NEAREST,
 *         min: gl.LINEAR,
 *         src: [
 *           255,255,255,255,
 *           192,192,192,255,
 *           192,192,192,255,
 *           255,255,255,255,
 *         ],
 *       },
 *       // a 1x2 pixel texture from a typed array.
 *       stripe: {
 *         mag: gl.NEAREST,
 *         min: gl.LINEAR,
 *         format: gl.LUMINANCE,
 *         src: new Uint8Array([
 *           255,
 *           128,
 *           255,
 *           128,
 *           255,
 *           128,
 *           255,
 *           128,
 *         ]),
 *         width: 1,
 *       },
 *     });
 *
 * Now
 *
 * *   `textures.hftIcon` will be a 2d texture
 * *   `textures.clover` will be a 2d texture
 * *   `textures.fromCanvas` will be a 2d texture
 * *   `textures.yohohama` will be a cubemap texture
 * *   `textures.goldengate` will be a cubemap texture
 * *   `textures.checker` will be a 2d texture
 * *   `textures.stripe` will be a 2d texture
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {Object.<string,module:twgl.TextureOptions>} options A object of TextureOptions one per texture.
 * @param {module:twgl.TexturesReadyCallback} [callback] A callback called when all textures have been downloaded.
 * @return {Object.<string,WebGLTexture>} the created textures by name
 * @memberOf module:twgl/textures
 */ function createTextures(gl, textureOptions, callback) {
    callback = callback || noop;
    let numDownloading = 0;
    const errors = [];
    const textures1 = {};
    const images = {};
    function callCallbackIfReady() {
        if (numDownloading === 0) setTimeout(function() {
            callback(errors.length ? errors : undefined, textures1, images);
        }, 0);
    }
    Object.keys(textureOptions).forEach(function(name) {
        const options = textureOptions[name];
        let onLoadFn;
        if (isAsyncSrc(options.src)) {
            onLoadFn = function(err, tex, img) {
                images[name] = img;
                --numDownloading;
                if (err) errors.push(err);
                callCallbackIfReady();
            };
            ++numDownloading;
        }
        textures1[name] = createTexture(gl, options, onLoadFn);
    });
    // queue the callback if there are no images to download.
    // We do this because if your code is structured to wait for
    // images to download but then you comment out all the async
    // images your code would break.
    callCallbackIfReady();
    return textures1;
}
var textures = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    setTextureDefaults_: setDefaults$1,
    createSampler: createSampler,
    createSamplers: createSamplers,
    setSamplerParameters: setSamplerParameters,
    createTexture: createTexture,
    setEmptyTexture: setEmptyTexture,
    setTextureFromArray: setTextureFromArray,
    loadTextureFromUrl: loadTextureFromUrl,
    setTextureFromElement: setTextureFromElement,
    setTextureFilteringForSize: setTextureFilteringForSize,
    setTextureParameters: setTextureParameters,
    setDefaultTextureColor: setDefaultTextureColor,
    createTextures: createTextures,
    resizeTexture: resizeTexture,
    canGenerateMipmap: canGenerateMipmap,
    canFilter: canFilter,
    getNumComponentsForFormat: getNumComponentsForFormat,
    getBytesPerElementForInternalFormat: getBytesPerElementForInternalFormat,
    getFormatAndTypeForInternalFormat: getFormatAndTypeForInternalFormat
});
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */ /**
 * Low level shader program related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibility they are available at both `twgl.programs` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/programs
 */ const error$1 = error;
const warn$1 = warn;
function getElementById(id) {
    return typeof document !== "undefined" && document.getElementById ? document.getElementById(id) : null;
}
const TEXTURE0 = 0x84c0;
const DYNAMIC_DRAW = 0x88e8;
const ARRAY_BUFFER$1 = 0x8892;
const ELEMENT_ARRAY_BUFFER$1 = 0x8893;
const UNIFORM_BUFFER = 0x8a11;
const TRANSFORM_FEEDBACK_BUFFER = 0x8c8e;
const TRANSFORM_FEEDBACK = 0x8e22;
const COMPILE_STATUS = 0x8b81;
const LINK_STATUS = 0x8b82;
const FRAGMENT_SHADER = 0x8b30;
const VERTEX_SHADER = 0x8b31;
const SEPARATE_ATTRIBS = 0x8c8d;
const ACTIVE_UNIFORMS = 0x8b86;
const ACTIVE_ATTRIBUTES = 0x8b89;
const TRANSFORM_FEEDBACK_VARYINGS = 0x8c83;
const ACTIVE_UNIFORM_BLOCKS = 0x8a36;
const UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER = 0x8a44;
const UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER = 0x8a46;
const UNIFORM_BLOCK_DATA_SIZE = 0x8a40;
const UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES = 0x8a43;
const FLOAT$3 = 0x1406;
const FLOAT_VEC2 = 0x8B50;
const FLOAT_VEC3 = 0x8B51;
const FLOAT_VEC4 = 0x8B52;
const INT$3 = 0x1404;
const INT_VEC2 = 0x8B53;
const INT_VEC3 = 0x8B54;
const INT_VEC4 = 0x8B55;
const BOOL = 0x8B56;
const BOOL_VEC2 = 0x8B57;
const BOOL_VEC3 = 0x8B58;
const BOOL_VEC4 = 0x8B59;
const FLOAT_MAT2 = 0x8B5A;
const FLOAT_MAT3 = 0x8B5B;
const FLOAT_MAT4 = 0x8B5C;
const SAMPLER_2D = 0x8B5E;
const SAMPLER_CUBE = 0x8B60;
const SAMPLER_3D = 0x8B5F;
const SAMPLER_2D_SHADOW = 0x8B62;
const FLOAT_MAT2x3 = 0x8B65;
const FLOAT_MAT2x4 = 0x8B66;
const FLOAT_MAT3x2 = 0x8B67;
const FLOAT_MAT3x4 = 0x8B68;
const FLOAT_MAT4x2 = 0x8B69;
const FLOAT_MAT4x3 = 0x8B6A;
const SAMPLER_2D_ARRAY = 0x8DC1;
const SAMPLER_2D_ARRAY_SHADOW = 0x8DC4;
const SAMPLER_CUBE_SHADOW = 0x8DC5;
const UNSIGNED_INT$3 = 0x1405;
const UNSIGNED_INT_VEC2 = 0x8DC6;
const UNSIGNED_INT_VEC3 = 0x8DC7;
const UNSIGNED_INT_VEC4 = 0x8DC8;
const INT_SAMPLER_2D = 0x8DCA;
const INT_SAMPLER_3D = 0x8DCB;
const INT_SAMPLER_CUBE = 0x8DCC;
const INT_SAMPLER_2D_ARRAY = 0x8DCF;
const UNSIGNED_INT_SAMPLER_2D = 0x8DD2;
const UNSIGNED_INT_SAMPLER_3D = 0x8DD3;
const UNSIGNED_INT_SAMPLER_CUBE = 0x8DD4;
const UNSIGNED_INT_SAMPLER_2D_ARRAY = 0x8DD7;
const TEXTURE_2D$1 = 0x0DE1;
const TEXTURE_CUBE_MAP$1 = 0x8513;
const TEXTURE_3D$1 = 0x806F;
const TEXTURE_2D_ARRAY$1 = 0x8C1A;
const typeMap = {};
/**
 * Returns the corresponding bind point for a given sampler type
 * @private
 */ function getBindPointForSamplerType(gl, type) {
    return typeMap[type].bindPoint;
}
// This kind of sucks! If you could compose functions as in `var fn = gl[name];`
// this code could be a lot smaller but that is sadly really slow (T_T)
function floatSetter(gl, location) {
    return function(v) {
        gl.uniform1f(location, v);
    };
}
function floatArraySetter(gl, location) {
    return function(v) {
        gl.uniform1fv(location, v);
    };
}
function floatVec2Setter(gl, location) {
    return function(v) {
        gl.uniform2fv(location, v);
    };
}
function floatVec3Setter(gl, location) {
    return function(v) {
        gl.uniform3fv(location, v);
    };
}
function floatVec4Setter(gl, location) {
    return function(v) {
        gl.uniform4fv(location, v);
    };
}
function intSetter(gl, location) {
    return function(v) {
        gl.uniform1i(location, v);
    };
}
function intArraySetter(gl, location) {
    return function(v) {
        gl.uniform1iv(location, v);
    };
}
function intVec2Setter(gl, location) {
    return function(v) {
        gl.uniform2iv(location, v);
    };
}
function intVec3Setter(gl, location) {
    return function(v) {
        gl.uniform3iv(location, v);
    };
}
function intVec4Setter(gl, location) {
    return function(v) {
        gl.uniform4iv(location, v);
    };
}
function uintSetter(gl, location) {
    return function(v) {
        gl.uniform1ui(location, v);
    };
}
function uintArraySetter(gl, location) {
    return function(v) {
        gl.uniform1uiv(location, v);
    };
}
function uintVec2Setter(gl, location) {
    return function(v) {
        gl.uniform2uiv(location, v);
    };
}
function uintVec3Setter(gl, location) {
    return function(v) {
        gl.uniform3uiv(location, v);
    };
}
function uintVec4Setter(gl, location) {
    return function(v) {
        gl.uniform4uiv(location, v);
    };
}
function floatMat2Setter(gl, location) {
    return function(v) {
        gl.uniformMatrix2fv(location, false, v);
    };
}
function floatMat3Setter(gl, location) {
    return function(v) {
        gl.uniformMatrix3fv(location, false, v);
    };
}
function floatMat4Setter(gl, location) {
    return function(v) {
        gl.uniformMatrix4fv(location, false, v);
    };
}
function floatMat23Setter(gl, location) {
    return function(v) {
        gl.uniformMatrix2x3fv(location, false, v);
    };
}
function floatMat32Setter(gl, location) {
    return function(v) {
        gl.uniformMatrix3x2fv(location, false, v);
    };
}
function floatMat24Setter(gl, location) {
    return function(v) {
        gl.uniformMatrix2x4fv(location, false, v);
    };
}
function floatMat42Setter(gl, location) {
    return function(v) {
        gl.uniformMatrix4x2fv(location, false, v);
    };
}
function floatMat34Setter(gl, location) {
    return function(v) {
        gl.uniformMatrix3x4fv(location, false, v);
    };
}
function floatMat43Setter(gl, location) {
    return function(v) {
        gl.uniformMatrix4x3fv(location, false, v);
    };
}
function samplerSetter(gl, type, unit, location) {
    const bindPoint = getBindPointForSamplerType(gl, type);
    return isWebGL2(gl) ? function(textureOrPair) {
        let texture;
        let sampler;
        if (isTexture(gl, textureOrPair)) {
            texture = textureOrPair;
            sampler = null;
        } else {
            texture = textureOrPair.texture;
            sampler = textureOrPair.sampler;
        }
        gl.uniform1i(location, unit);
        gl.activeTexture(TEXTURE0 + unit);
        gl.bindTexture(bindPoint, texture);
        gl.bindSampler(unit, sampler);
    } : function(texture) {
        gl.uniform1i(location, unit);
        gl.activeTexture(TEXTURE0 + unit);
        gl.bindTexture(bindPoint, texture);
    };
}
function samplerArraySetter(gl, type, unit, location, size) {
    const bindPoint = getBindPointForSamplerType(gl, type);
    const units = new Int32Array(size);
    for(let ii = 0; ii < size; ++ii)units[ii] = unit + ii;
    return isWebGL2(gl) ? function(textures2) {
        gl.uniform1iv(location, units);
        textures2.forEach(function(textureOrPair, index) {
            gl.activeTexture(TEXTURE0 + units[index]);
            let texture;
            let sampler;
            if (isTexture(gl, textureOrPair)) {
                texture = textureOrPair;
                sampler = null;
            } else {
                texture = textureOrPair.texture;
                sampler = textureOrPair.sampler;
            }
            gl.bindSampler(unit, sampler);
            gl.bindTexture(bindPoint, texture);
        });
    } : function(textures3) {
        gl.uniform1iv(location, units);
        textures3.forEach(function(texture, index) {
            gl.activeTexture(TEXTURE0 + units[index]);
            gl.bindTexture(bindPoint, texture);
        });
    };
}
typeMap[FLOAT$3] = {
    Type: Float32Array,
    size: 4,
    setter: floatSetter,
    arraySetter: floatArraySetter
};
typeMap[FLOAT_VEC2] = {
    Type: Float32Array,
    size: 8,
    setter: floatVec2Setter,
    cols: 2
};
typeMap[FLOAT_VEC3] = {
    Type: Float32Array,
    size: 12,
    setter: floatVec3Setter,
    cols: 3
};
typeMap[FLOAT_VEC4] = {
    Type: Float32Array,
    size: 16,
    setter: floatVec4Setter,
    cols: 4
};
typeMap[INT$3] = {
    Type: Int32Array,
    size: 4,
    setter: intSetter,
    arraySetter: intArraySetter
};
typeMap[INT_VEC2] = {
    Type: Int32Array,
    size: 8,
    setter: intVec2Setter,
    cols: 2
};
typeMap[INT_VEC3] = {
    Type: Int32Array,
    size: 12,
    setter: intVec3Setter,
    cols: 3
};
typeMap[INT_VEC4] = {
    Type: Int32Array,
    size: 16,
    setter: intVec4Setter,
    cols: 4
};
typeMap[UNSIGNED_INT$3] = {
    Type: Uint32Array,
    size: 4,
    setter: uintSetter,
    arraySetter: uintArraySetter
};
typeMap[UNSIGNED_INT_VEC2] = {
    Type: Uint32Array,
    size: 8,
    setter: uintVec2Setter,
    cols: 2
};
typeMap[UNSIGNED_INT_VEC3] = {
    Type: Uint32Array,
    size: 12,
    setter: uintVec3Setter,
    cols: 3
};
typeMap[UNSIGNED_INT_VEC4] = {
    Type: Uint32Array,
    size: 16,
    setter: uintVec4Setter,
    cols: 4
};
typeMap[BOOL] = {
    Type: Uint32Array,
    size: 4,
    setter: intSetter,
    arraySetter: intArraySetter
};
typeMap[BOOL_VEC2] = {
    Type: Uint32Array,
    size: 8,
    setter: intVec2Setter,
    cols: 2
};
typeMap[BOOL_VEC3] = {
    Type: Uint32Array,
    size: 12,
    setter: intVec3Setter,
    cols: 3
};
typeMap[BOOL_VEC4] = {
    Type: Uint32Array,
    size: 16,
    setter: intVec4Setter,
    cols: 4
};
typeMap[FLOAT_MAT2] = {
    Type: Float32Array,
    size: 32,
    setter: floatMat2Setter,
    rows: 2,
    cols: 2
};
typeMap[FLOAT_MAT3] = {
    Type: Float32Array,
    size: 48,
    setter: floatMat3Setter,
    rows: 3,
    cols: 3
};
typeMap[FLOAT_MAT4] = {
    Type: Float32Array,
    size: 64,
    setter: floatMat4Setter,
    rows: 4,
    cols: 4
};
typeMap[FLOAT_MAT2x3] = {
    Type: Float32Array,
    size: 32,
    setter: floatMat23Setter,
    rows: 2,
    cols: 3
};
typeMap[FLOAT_MAT2x4] = {
    Type: Float32Array,
    size: 32,
    setter: floatMat24Setter,
    rows: 2,
    cols: 4
};
typeMap[FLOAT_MAT3x2] = {
    Type: Float32Array,
    size: 48,
    setter: floatMat32Setter,
    rows: 3,
    cols: 2
};
typeMap[FLOAT_MAT3x4] = {
    Type: Float32Array,
    size: 48,
    setter: floatMat34Setter,
    rows: 3,
    cols: 4
};
typeMap[FLOAT_MAT4x2] = {
    Type: Float32Array,
    size: 64,
    setter: floatMat42Setter,
    rows: 4,
    cols: 2
};
typeMap[FLOAT_MAT4x3] = {
    Type: Float32Array,
    size: 64,
    setter: floatMat43Setter,
    rows: 4,
    cols: 3
};
typeMap[SAMPLER_2D] = {
    Type: null,
    size: 0,
    setter: samplerSetter,
    arraySetter: samplerArraySetter,
    bindPoint: TEXTURE_2D$1
};
typeMap[SAMPLER_CUBE] = {
    Type: null,
    size: 0,
    setter: samplerSetter,
    arraySetter: samplerArraySetter,
    bindPoint: TEXTURE_CUBE_MAP$1
};
typeMap[SAMPLER_3D] = {
    Type: null,
    size: 0,
    setter: samplerSetter,
    arraySetter: samplerArraySetter,
    bindPoint: TEXTURE_3D$1
};
typeMap[SAMPLER_2D_SHADOW] = {
    Type: null,
    size: 0,
    setter: samplerSetter,
    arraySetter: samplerArraySetter,
    bindPoint: TEXTURE_2D$1
};
typeMap[SAMPLER_2D_ARRAY] = {
    Type: null,
    size: 0,
    setter: samplerSetter,
    arraySetter: samplerArraySetter,
    bindPoint: TEXTURE_2D_ARRAY$1
};
typeMap[SAMPLER_2D_ARRAY_SHADOW] = {
    Type: null,
    size: 0,
    setter: samplerSetter,
    arraySetter: samplerArraySetter,
    bindPoint: TEXTURE_2D_ARRAY$1
};
typeMap[SAMPLER_CUBE_SHADOW] = {
    Type: null,
    size: 0,
    setter: samplerSetter,
    arraySetter: samplerArraySetter,
    bindPoint: TEXTURE_CUBE_MAP$1
};
typeMap[INT_SAMPLER_2D] = {
    Type: null,
    size: 0,
    setter: samplerSetter,
    arraySetter: samplerArraySetter,
    bindPoint: TEXTURE_2D$1
};
typeMap[INT_SAMPLER_3D] = {
    Type: null,
    size: 0,
    setter: samplerSetter,
    arraySetter: samplerArraySetter,
    bindPoint: TEXTURE_3D$1
};
typeMap[INT_SAMPLER_CUBE] = {
    Type: null,
    size: 0,
    setter: samplerSetter,
    arraySetter: samplerArraySetter,
    bindPoint: TEXTURE_CUBE_MAP$1
};
typeMap[INT_SAMPLER_2D_ARRAY] = {
    Type: null,
    size: 0,
    setter: samplerSetter,
    arraySetter: samplerArraySetter,
    bindPoint: TEXTURE_2D_ARRAY$1
};
typeMap[UNSIGNED_INT_SAMPLER_2D] = {
    Type: null,
    size: 0,
    setter: samplerSetter,
    arraySetter: samplerArraySetter,
    bindPoint: TEXTURE_2D$1
};
typeMap[UNSIGNED_INT_SAMPLER_3D] = {
    Type: null,
    size: 0,
    setter: samplerSetter,
    arraySetter: samplerArraySetter,
    bindPoint: TEXTURE_3D$1
};
typeMap[UNSIGNED_INT_SAMPLER_CUBE] = {
    Type: null,
    size: 0,
    setter: samplerSetter,
    arraySetter: samplerArraySetter,
    bindPoint: TEXTURE_CUBE_MAP$1
};
typeMap[UNSIGNED_INT_SAMPLER_2D_ARRAY] = {
    Type: null,
    size: 0,
    setter: samplerSetter,
    arraySetter: samplerArraySetter,
    bindPoint: TEXTURE_2D_ARRAY$1
};
function floatAttribSetter(gl, index) {
    return function(b) {
        if (b.value) {
            gl.disableVertexAttribArray(index);
            switch(b.value.length){
                case 4:
                    gl.vertexAttrib4fv(index, b.value);
                    break;
                case 3:
                    gl.vertexAttrib3fv(index, b.value);
                    break;
                case 2:
                    gl.vertexAttrib2fv(index, b.value);
                    break;
                case 1:
                    gl.vertexAttrib1fv(index, b.value);
                    break;
                default:
                    throw new Error("the length of a float constant value must be between 1 and 4!");
            }
        } else {
            gl.bindBuffer(ARRAY_BUFFER$1, b.buffer);
            gl.enableVertexAttribArray(index);
            gl.vertexAttribPointer(index, b.numComponents || b.size, b.type || FLOAT$3, b.normalize || false, b.stride || 0, b.offset || 0);
            if (b.divisor !== undefined) gl.vertexAttribDivisor(index, b.divisor);
        }
    };
}
function intAttribSetter(gl, index) {
    return function(b) {
        if (b.value) {
            gl.disableVertexAttribArray(index);
            if (b.value.length === 4) gl.vertexAttrib4iv(index, b.value);
            else throw new Error("The length of an integer constant value must be 4!");
        } else {
            gl.bindBuffer(ARRAY_BUFFER$1, b.buffer);
            gl.enableVertexAttribArray(index);
            gl.vertexAttribIPointer(index, b.numComponents || b.size, b.type || INT$3, b.stride || 0, b.offset || 0);
            if (b.divisor !== undefined) gl.vertexAttribDivisor(index, b.divisor);
        }
    };
}
function uintAttribSetter(gl, index) {
    return function(b) {
        if (b.value) {
            gl.disableVertexAttribArray(index);
            if (b.value.length === 4) gl.vertexAttrib4uiv(index, b.value);
            else throw new Error("The length of an unsigned integer constant value must be 4!");
        } else {
            gl.bindBuffer(ARRAY_BUFFER$1, b.buffer);
            gl.enableVertexAttribArray(index);
            gl.vertexAttribIPointer(index, b.numComponents || b.size, b.type || UNSIGNED_INT$3, b.stride || 0, b.offset || 0);
            if (b.divisor !== undefined) gl.vertexAttribDivisor(index, b.divisor);
        }
    };
}
function matAttribSetter(gl, index, typeInfo1) {
    const defaultSize = typeInfo1.size;
    const count = typeInfo1.count;
    return function(b) {
        gl.bindBuffer(ARRAY_BUFFER$1, b.buffer);
        const numComponents = b.size || b.numComponents || defaultSize;
        const size = numComponents / count;
        const type = b.type || FLOAT$3;
        const typeInfo = typeMap[type];
        const stride = typeInfo.size * numComponents;
        const normalize1 = b.normalize || false;
        const offset = b.offset || 0;
        const rowOffset = stride / count;
        for(let i = 0; i < count; ++i){
            gl.enableVertexAttribArray(index + i);
            gl.vertexAttribPointer(index + i, size, type, normalize1, stride, offset + rowOffset * i);
            if (b.divisor !== undefined) gl.vertexAttribDivisor(index + i, b.divisor);
        }
    };
}
const attrTypeMap = {};
attrTypeMap[FLOAT$3] = {
    size: 4,
    setter: floatAttribSetter
};
attrTypeMap[FLOAT_VEC2] = {
    size: 8,
    setter: floatAttribSetter
};
attrTypeMap[FLOAT_VEC3] = {
    size: 12,
    setter: floatAttribSetter
};
attrTypeMap[FLOAT_VEC4] = {
    size: 16,
    setter: floatAttribSetter
};
attrTypeMap[INT$3] = {
    size: 4,
    setter: intAttribSetter
};
attrTypeMap[INT_VEC2] = {
    size: 8,
    setter: intAttribSetter
};
attrTypeMap[INT_VEC3] = {
    size: 12,
    setter: intAttribSetter
};
attrTypeMap[INT_VEC4] = {
    size: 16,
    setter: intAttribSetter
};
attrTypeMap[UNSIGNED_INT$3] = {
    size: 4,
    setter: uintAttribSetter
};
attrTypeMap[UNSIGNED_INT_VEC2] = {
    size: 8,
    setter: uintAttribSetter
};
attrTypeMap[UNSIGNED_INT_VEC3] = {
    size: 12,
    setter: uintAttribSetter
};
attrTypeMap[UNSIGNED_INT_VEC4] = {
    size: 16,
    setter: uintAttribSetter
};
attrTypeMap[BOOL] = {
    size: 4,
    setter: intAttribSetter
};
attrTypeMap[BOOL_VEC2] = {
    size: 8,
    setter: intAttribSetter
};
attrTypeMap[BOOL_VEC3] = {
    size: 12,
    setter: intAttribSetter
};
attrTypeMap[BOOL_VEC4] = {
    size: 16,
    setter: intAttribSetter
};
attrTypeMap[FLOAT_MAT2] = {
    size: 4,
    setter: matAttribSetter,
    count: 2
};
attrTypeMap[FLOAT_MAT3] = {
    size: 9,
    setter: matAttribSetter,
    count: 3
};
attrTypeMap[FLOAT_MAT4] = {
    size: 16,
    setter: matAttribSetter,
    count: 4
};
const errorRE = /ERROR:\s*\d+:(\d+)/gi;
function addLineNumbersWithError(src, log = "", lineOffset = 0) {
    // Note: Error message formats are not defined by any spec so this may or may not work.
    const matches = [
        ...log.matchAll(errorRE)
    ];
    const lineNoToErrorMap = new Map(matches.map((m, ndx)=>{
        const lineNo = parseInt(m[1]);
        const next = matches[ndx + 1];
        const end = next ? next.index : log.length;
        const msg = log.substring(m.index, end);
        return [
            lineNo - 1,
            msg
        ];
    }));
    return src.split("\n").map((line, lineNo)=>{
        const err = lineNoToErrorMap.get(lineNo);
        return `${lineNo + 1 + lineOffset}: ${line}${err ? `\n\n^^^ ${err}` : ""}`;
    }).join("\n");
}
/**
 * Error Callback
 * @callback ErrorCallback
 * @param {string} msg error message.
 * @param {number} [lineOffset] amount to add to line number
 * @memberOf module:twgl
 */ /**
 * Program Callback
 * @callback ProgramCallback
 * @param {string} [err] error message, falsy if no error
 * @param {WebGLProgram|module:twgl.ProgramInfo} [result] the program or programInfo
 */ const spaceRE = /^[ \t]*\n/;
/**
 * Remove the first end of line because WebGL 2.0 requires
 * #version 300 es
 * as the first line. No whitespace allowed before that line
 * so
 *
 * <script>
 * #version 300 es
 * </script>
 *
 * Has one line before it which is invalid according to GLSL ES 3.00
 *
 * @param {string} shaderSource The source of the shader
 * @returns {{shaderSource: string, lineOffset: number}}
 * @private
 */ function prepShaderSource(shaderSource) {
    let lineOffset = 0;
    if (spaceRE.test(shaderSource)) {
        lineOffset = 1;
        shaderSource = shaderSource.replace(spaceRE, "");
    }
    return {
        lineOffset,
        shaderSource
    };
}
/**
 * @param {module:twgl.ProgramOptions} progOptions
 * @param {string} msg
 * @return null
 * @private
 */ function reportError(progOptions, msg) {
    progOptions.errorCallback(msg);
    if (progOptions.callback) setTimeout(()=>{
        progOptions.callback(`${msg}\n${progOptions.errors.join("\n")}`);
    });
    return null;
}
/**
 * Loads a shader.
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {string} shaderSource The shader source.
 * @param {number} shaderType The type of shader.
 * @param {module:twgl.ProgramOptions} progOptions
 * @return {WebGLShader} The created shader.
 * @private
 */ function loadShader(gl, shaderSource, shaderType, progOptions) {
    // Create the shader object
    const shader = gl.createShader(shaderType);
    // Load the shader source
    gl.shaderSource(shader, prepShaderSource(shaderSource).shaderSource);
    // Compile the shader
    gl.compileShader(shader);
    if (!progOptions.callback && !checkShaderStatus(gl, shaderType, shader, progOptions.errorCallback)) {
        gl.deleteShader(shader);
        return null;
    }
    return shader;
}
/**
 * Check Shader status
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {number} shaderType The shader type
 * @param {WebGLShader} shader The shader
 * @param {ErrorCallback} [errFn] function to receive error message.
 * @return {bool} true if shader is ok.
 * @private
 */ function checkShaderStatus(gl, shaderType, shader, errFn) {
    errFn = errFn || error$1;
    // Check the compile status
    const compiled = gl.getShaderParameter(shader, COMPILE_STATUS);
    if (!compiled) {
        // Something went wrong during compilation; get the error
        const lastError = gl.getShaderInfoLog(shader);
        const { lineOffset , shaderSource  } = prepShaderSource(gl.getShaderSource(shader));
        errFn(`${addLineNumbersWithError(shaderSource, lastError, lineOffset)}\nError compiling ${glEnumToString(gl, shaderType)}: ${lastError}`);
    }
    return compiled;
}
/**
 * @typedef {Object} ProgramOptions
 * @property {function(string)} [errorCallback] callback for errors
 * @property {Object.<string,number>} [attribLocations] a attribute name to location map
 * @property {(module:twgl.BufferInfo|Object.<string,module:twgl.AttribInfo>|string[])} [transformFeedbackVaryings] If passed
 *   a BufferInfo will use the attribs names inside. If passed an object of AttribInfos will use the names from that object. Otherwise
 *   you can pass an array of names.
 * @property {number} [transformFeedbackMode] the mode to pass `gl.transformFeedbackVaryings`. Defaults to `SEPARATE_ATTRIBS`.
 * @property {ProgramCallback} [callback] callback for async program compilation.
 * @memberOf module:twgl
 */ /**
 * Gets the program options based on all these optional arguments
 * @param {module:twgl.ProgramOptions|string[]} [opt_attribs] Options for the program or an array of attribs names. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations] The locations for the. A parallel array to opt_attribs letting you assign locations.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {module:twgl.ProgramOptions} an instance of ProgramOptions based on the arguments passed in
 * @private
 */ function getProgramOptions(opt_attribs, opt_locations, opt_errorCallback) {
    let transformFeedbackVaryings;
    let transformFeedbackMode;
    let callback;
    if (typeof opt_locations === "function") {
        opt_errorCallback = opt_locations;
        opt_locations = undefined;
    }
    if (typeof opt_attribs === "function") {
        opt_errorCallback = opt_attribs;
        opt_attribs = undefined;
    } else if (opt_attribs && !Array.isArray(opt_attribs)) {
        // If we have an errorCallback we can just return this object
        // Otherwise we need to construct one with default errorCallback
        if (opt_attribs.errorCallback && opt_attribs.errors) return opt_attribs;
        const opt = opt_attribs;
        opt_errorCallback = opt.errorCallback;
        opt_attribs = opt.attribLocations;
        transformFeedbackVaryings = opt.transformFeedbackVaryings;
        transformFeedbackMode = opt.transformFeedbackMode;
        callback = opt.callback;
    }
    const errorCallback = opt_errorCallback || error$1;
    const errors = [];
    const options = {
        errorCallback (msg, ...args) {
            errors.push(msg);
            errorCallback(msg, ...args);
        },
        transformFeedbackVaryings,
        transformFeedbackMode,
        callback,
        errors
    };
    if (opt_attribs) {
        let attribLocations = {};
        if (Array.isArray(opt_attribs)) opt_attribs.forEach(function(attrib, ndx) {
            attribLocations[attrib] = opt_locations ? opt_locations[ndx] : ndx;
        });
        else attribLocations = opt_attribs;
        options.attribLocations = attribLocations;
    }
    return options;
}
const defaultShaderType = [
    "VERTEX_SHADER",
    "FRAGMENT_SHADER", 
];
function getShaderTypeFromScriptType(gl, scriptType) {
    if (scriptType.indexOf("frag") >= 0) return FRAGMENT_SHADER;
    else if (scriptType.indexOf("vert") >= 0) return VERTEX_SHADER;
    return undefined;
}
function deleteShaders(gl, shaders) {
    shaders.forEach(function(shader) {
        gl.deleteShader(shader);
    });
}
const wait = (ms = 0)=>new Promise((resolve)=>setTimeout(resolve, ms));
/**
 * Creates a program, attaches (and/or compiles) shaders, binds attrib locations, links the
 * program.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgram(gl, [vs, fs], options);
 *     twgl.createProgram(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgram(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLShader[]|string[]} shaders The shaders to attach, or element ids for their source, or strings that contain their source
 * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations|module:twgl.ErrorCallback] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram?} the created program or null if error of a callback was provided.
 * @memberOf module:twgl/programs
 */ function createProgram(gl, shaders, opt_attribs, opt_locations, opt_errorCallback) {
    // This code is really convoluted, because it may or may not be async
    // Maybe it would be better to have a separate function
    const progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
    const realShaders = [];
    const newShaders = [];
    for(let ndx = 0; ndx < shaders.length; ++ndx){
        let shader = shaders[ndx];
        if (typeof shader === "string") {
            const elem = getElementById(shader);
            const src = elem ? elem.text : shader;
            let type = gl[defaultShaderType[ndx]];
            if (elem && elem.type) type = getShaderTypeFromScriptType(gl, elem.type) || type;
            shader = loadShader(gl, src, type, progOptions);
            newShaders.push(shader);
        }
        if (isShader(gl, shader)) realShaders.push(shader);
    }
    if (realShaders.length !== shaders.length) {
        deleteShaders(gl, newShaders);
        return reportError(progOptions, "not enough shaders for program");
    }
    const program = gl.createProgram();
    realShaders.forEach(function(shader) {
        gl.attachShader(program, shader);
    });
    if (progOptions.attribLocations) Object.keys(progOptions.attribLocations).forEach(function(attrib) {
        gl.bindAttribLocation(program, progOptions.attribLocations[attrib], attrib);
    });
    let varyings = progOptions.transformFeedbackVaryings;
    if (varyings) {
        if (varyings.attribs) varyings = varyings.attribs;
        if (!Array.isArray(varyings)) varyings = Object.keys(varyings);
        gl.transformFeedbackVaryings(program, varyings, progOptions.transformFeedbackMode || SEPARATE_ATTRIBS);
    }
    gl.linkProgram(program);
    if (progOptions.callback) {
        checkForProgramLinkCompletionAsync(gl, program, progOptions);
        return null;
    } else {
        if (!checkProgramStatus(gl, program, progOptions.errorCallback)) {
            gl.deleteProgram(program);
            deleteShaders(gl, newShaders);
            return null;
        }
        return program;
    }
}
/**
 * Same as createProgram but returns a promise
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramAsync(gl, [vs, fs], options);
 *     twgl.createProgramAsync(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramAsync(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramAsync(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLShader[]|string[]} shaders The shaders to attach, or element ids for their source, or strings that contain their source
 * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations|module:twgl.ErrorCallback] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {Promise<WebGLProgram>} The created program
 * @memberOf module:twgl/programs
 */ function createProgramAsync(gl, shaders, ...args) {
    return new Promise((resolve, reject)=>{
        const programOptions = getProgramOptions(...args);
        programOptions.callback = (err, program)=>{
            if (err) reject(err);
            else resolve(program);
        };
        createProgram(gl, shaders, programOptions);
    });
}
/**
 * Same as createProgramInfo but returns a promise
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderSources Array of sources for the
 *        shaders or ids. The first is assumed to be the vertex shader,
 *        the second the fragment shader.
 * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations|module:twgl.ErrorCallback] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {Promise<module:twgl.ProgramInfo>} The created ProgramInfo
 * @memberOf module:twgl/programs
 */ function createProgramInfoAsync(gl, shaders, ...args) {
    return new Promise((resolve, reject)=>{
        const programOptions = getProgramOptions(...args);
        programOptions.callback = (err, programInfo)=>{
            if (err) reject(err);
            else resolve(programInfo);
        };
        createProgramInfo(gl, shaders, programOptions);
    });
}
/**
 * Asynchronously wait for program to link.
 * Note: if 'KHR_parallel_shader_compile' extension does not
 * exist then compilation will not be truly async.
 * @param {WebGLRenderingContext} gl The context
 * @param {WebGLProgram} program The program
 * @param {module:twgl.ProgramOptions} progOptions Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @private
 */ async function checkForProgramLinkCompletionAsync(gl1, program1, progOptions) {
    const ext = gl1.getExtension("KHR_parallel_shader_compile");
    const checkFn = ext ? (gl, program)=>gl.getProgramParameter(program, ext.COMPLETION_STATUS_KHR) : ()=>true;
    let waitTime = 0;
    do {
        await wait(waitTime); // must wait at least once
        waitTime = 1000 / 60;
    }while (!checkFn(gl1, program1));
    const success = checkProgramStatus(gl1, program1, progOptions.errorCallback);
    const err = success ? undefined : progOptions.errors.join("\n");
    if (!success) {
        const errFn = progOptions.errorCallback || error$1;
        errFn(err);
        gl1.deleteProgram(program1);
        // TODO: delete shaders, but only shaders that were created newly for this
        // program
        program1 = null;
    }
    progOptions.callback(err, program1);
}
/**
 * Check a program's link status
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLProgram} program Program to check
 * @param {ErrorCallback} [errFn] func for errors
 * @return {bool} true if program is ok
 * @private
 */ function checkProgramStatus(gl, program, errFn) {
    errFn = errFn || error$1;
    // Check the link status
    const linked = gl.getProgramParameter(program, LINK_STATUS);
    if (!linked) {
        // something went wrong with the link
        const lastError = gl.getProgramInfoLog(program);
        errFn(`Error in program linking: ${lastError}`);
    }
    return linked;
}
/**
 * Loads a shader from a script tag.
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {string} scriptId The id of the script tag.
 * @param {number} [opt_shaderType] The type of shader. If not passed in it will
 *     be derived from the type of the script tag.
 * @param {module:twgl.ProgramOptions} [progOptions] callback for errors.
 * @return {WebGLShader?} The created shader or null if error.
 * @private
 */ function createShaderFromScript(gl, scriptId, opt_shaderType, progOptions) {
    let shaderSource = "";
    const shaderScript = getElementById(scriptId);
    if (!shaderScript) return reportError(progOptions, `unknown script element: ${scriptId}`);
    shaderSource = shaderScript.text;
    const shaderType = opt_shaderType || getShaderTypeFromScriptType(gl, shaderScript.type);
    if (!shaderType) return reportError(progOptions, "unknown shader type");
    return loadShader(gl, shaderSource, shaderType, progOptions);
}
/**
 * Creates a program from 2 script tags.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_options);
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramFromScripts(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderScriptIds Array of ids of the script
 *        tags for the shaders. The first is assumed to be the
 *        vertex shader, the second the fragment shader.
 * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations|module:twgl.ErrorCallback] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram?} the created program or null if error or a callback was provided.
 * @memberOf module:twgl/programs
 */ function createProgramFromScripts(gl, shaderScriptIds, opt_attribs, opt_locations, opt_errorCallback) {
    const progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
    const shaders = [];
    for(let ii = 0; ii < shaderScriptIds.length; ++ii){
        const shader = createShaderFromScript(gl, shaderScriptIds[ii], gl[defaultShaderType[ii]], progOptions);
        if (!shader) return null;
        shaders.push(shader);
    }
    return createProgram(gl, shaders, progOptions);
}
/**
 * Creates a program from 2 sources.
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_options);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramFromSource(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderSources Array of sources for the
 *        shaders. The first is assumed to be the vertex shader,
 *        the second the fragment shader.
 * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations|module:twgl.ErrorCallback] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {WebGLProgram?} the created program or null if error or a callback was provided.
 * @memberOf module:twgl/programs
 */ function createProgramFromSources(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
    const progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
    const shaders = [];
    for(let ii = 0; ii < shaderSources.length; ++ii){
        const shader = loadShader(gl, shaderSources[ii], gl[defaultShaderType[ii]], progOptions);
        if (!progOptions.callback && !shader) return null;
        shaders.push(shader);
    }
    return createProgram(gl, shaders, progOptions);
}
/**
 * Returns true if attribute/uniform is a reserved/built in
 *
 * It makes no sense to me why GL returns these because it's
 * illegal to call `gl.getUniformLocation` and `gl.getAttribLocation`
 * with names that start with `gl_` (and `webgl_` in WebGL)
 *
 * I can only assume they are there because they might count
 * when computing the number of uniforms/attributes used when you want to
 * know if you are near the limit. That doesn't really make sense
 * to me but the fact that these get returned are in the spec.
 *
 * @param {WebGLActiveInfo} info As returned from `gl.getActiveUniform` or
 *    `gl.getActiveAttrib`.
 * @return {bool} true if it's reserved
 * @private
 */ function isBuiltIn(info) {
    const name = info.name;
    return name.startsWith("gl_") || name.startsWith("webgl_");
}
const tokenRE = /(\.|\[|]|\w+)/g;
const isDigit = (s)=>s >= "0" && s <= "9";
function addSetterToUniformTree(fullPath, setter, node1, uniformSetters) {
    const tokens = fullPath.split(tokenRE).filter((s)=>s !== "");
    let tokenNdx = 0;
    let path = "";
    for(;;){
        const token = tokens[tokenNdx++]; // has to be name or number
        path += token;
        const isArrayIndex = isDigit(token[0]);
        const accessor = isArrayIndex ? parseInt(token) : token;
        if (isArrayIndex) path += tokens[tokenNdx++]; // skip ']'
        const isLastToken = tokenNdx === tokens.length;
        if (isLastToken) {
            node1[accessor] = setter;
            break;
        } else {
            const token = tokens[tokenNdx++]; // has to be . or [
            const isArray = token === "[";
            const child = node1[accessor] || (isArray ? [] : {});
            node1[accessor] = child;
            node1 = child;
            uniformSetters[path] = uniformSetters[path] || function(node) {
                return function(value) {
                    setUniformTree(node, value);
                };
            }(child);
            path += token;
        }
    }
}
/**
 * Creates setter functions for all uniforms of a shader
 * program.
 *
 * @see {@link module:twgl.setUniforms}
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLProgram} program the program to create setters for.
 * @returns {Object.<string, function>} an object with a setter by name for each uniform
 * @memberOf module:twgl/programs
 */ function createUniformSetters(gl, program) {
    let textureUnit = 0;
    /**
   * Creates a setter for a uniform of the given program with it's
   * location embedded in the setter.
   * @param {WebGLProgram} program
   * @param {WebGLUniformInfo} uniformInfo
   * @returns {function} the created setter.
   */ function createUniformSetter(program, uniformInfo, location) {
        const isArray = uniformInfo.name.endsWith("[0]");
        const type = uniformInfo.type;
        const typeInfo = typeMap[type];
        if (!typeInfo) throw new Error(`unknown type: 0x${type.toString(16)}`); // we should never get here.
        let setter;
        if (typeInfo.bindPoint) {
            // it's a sampler
            const unit = textureUnit;
            textureUnit += uniformInfo.size;
            if (isArray) setter = typeInfo.arraySetter(gl, type, unit, location, uniformInfo.size);
            else setter = typeInfo.setter(gl, type, unit, location, uniformInfo.size);
        } else if (typeInfo.arraySetter && isArray) setter = typeInfo.arraySetter(gl, location);
        else setter = typeInfo.setter(gl, location);
        setter.location = location;
        return setter;
    }
    const uniformSetters = {};
    const uniformTree = {};
    const numUniforms = gl.getProgramParameter(program, ACTIVE_UNIFORMS);
    for(let ii = 0; ii < numUniforms; ++ii){
        const uniformInfo = gl.getActiveUniform(program, ii);
        if (isBuiltIn(uniformInfo)) continue;
        let name = uniformInfo.name;
        // remove the array suffix.
        if (name.endsWith("[0]")) name = name.substr(0, name.length - 3);
        const location = gl.getUniformLocation(program, uniformInfo.name);
        // the uniform will have no location if it's in a uniform block
        if (location) {
            const setter = createUniformSetter(program, uniformInfo, location);
            uniformSetters[name] = setter;
            addSetterToUniformTree(name, setter, uniformTree, uniformSetters);
        }
    }
    return uniformSetters;
}
/**
 * @typedef {Object} TransformFeedbackInfo
 * @property {number} index index of transform feedback
 * @property {number} type GL type
 * @property {number} size 1 - 4
 * @memberOf module:twgl
 */ /**
 * Create TransformFeedbackInfo for passing to bindTransformFeedbackInfo.
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLProgram} program an existing WebGLProgram.
 * @return {Object<string, module:twgl.TransformFeedbackInfo>}
 * @memberOf module:twgl
 */ function createTransformFeedbackInfo(gl, program) {
    const info = {};
    const numVaryings = gl.getProgramParameter(program, TRANSFORM_FEEDBACK_VARYINGS);
    for(let ii = 0; ii < numVaryings; ++ii){
        const varying = gl.getTransformFeedbackVarying(program, ii);
        info[varying.name] = {
            index: ii,
            type: varying.type,
            size: varying.size
        };
    }
    return info;
}
/**
 * Binds buffers for transform feedback.
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {(module:twgl.ProgramInfo|Object<string, module:twgl.TransformFeedbackInfo>)} transformFeedbackInfo A ProgramInfo or TransformFeedbackInfo.
 * @param {(module:twgl.BufferInfo|Object<string, module:twgl.AttribInfo>)} [bufferInfo] A BufferInfo or set of AttribInfos.
 * @memberOf module:twgl
 */ function bindTransformFeedbackInfo(gl, transformFeedbackInfo, bufferInfo) {
    if (transformFeedbackInfo.transformFeedbackInfo) transformFeedbackInfo = transformFeedbackInfo.transformFeedbackInfo;
    if (bufferInfo.attribs) bufferInfo = bufferInfo.attribs;
    for(const name in bufferInfo){
        const varying = transformFeedbackInfo[name];
        if (varying) {
            const buf = bufferInfo[name];
            if (buf.offset) gl.bindBufferRange(TRANSFORM_FEEDBACK_BUFFER, varying.index, buf.buffer, buf.offset, buf.size);
            else gl.bindBufferBase(TRANSFORM_FEEDBACK_BUFFER, varying.index, buf.buffer);
        }
    }
}
/**
 * Creates a transform feedback and sets the buffers
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {module:twgl.ProgramInfo} programInfo A ProgramInfo as returned from {@link module:twgl.createProgramInfo}
 * @param {(module:twgl.BufferInfo|Object<string, module:twgl.AttribInfo>)} [bufferInfo] A BufferInfo or set of AttribInfos.
 * @return {WebGLTransformFeedback} the created transform feedback
 * @memberOf module:twgl
 */ function createTransformFeedback(gl, programInfo, bufferInfo) {
    const tf = gl.createTransformFeedback();
    gl.bindTransformFeedback(TRANSFORM_FEEDBACK, tf);
    gl.useProgram(programInfo.program);
    bindTransformFeedbackInfo(gl, programInfo, bufferInfo);
    gl.bindTransformFeedback(TRANSFORM_FEEDBACK, null);
    return tf;
}
/**
 * @typedef {Object} UniformData
 * @property {string} name The name of the uniform
 * @property {number} type The WebGL type enum for this uniform
 * @property {number} size The number of elements for this uniform
 * @property {number} blockNdx The block index this uniform appears in
 * @property {number} offset The byte offset in the block for this uniform's value
 * @memberOf module:twgl
 */ /**
 * The specification for one UniformBlockObject
 *
 * @typedef {Object} BlockSpec
 * @property {number} index The index of the block.
 * @property {number} size The size in bytes needed for the block
 * @property {number[]} uniformIndices The indices of the uniforms used by the block. These indices
 *    correspond to entries in a UniformData array in the {@link module:twgl.UniformBlockSpec}.
 * @property {bool} usedByVertexShader Self explanatory
 * @property {bool} usedByFragmentShader Self explanatory
 * @property {bool} used Self explanatory
 * @memberOf module:twgl
 */ /**
 * A `UniformBlockSpec` represents the data needed to create and bind
 * UniformBlockObjects for a given program
 *
 * @typedef {Object} UniformBlockSpec
 * @property {Object.<string, module:twgl.BlockSpec>} blockSpecs The BlockSpec for each block by block name
 * @property {UniformData[]} uniformData An array of data for each uniform by uniform index.
 * @memberOf module:twgl
 */ /**
 * Creates a UniformBlockSpec for the given program.
 *
 * A UniformBlockSpec represents the data needed to create and bind
 * UniformBlockObjects
 *
 * @param {WebGL2RenderingContext} gl A WebGL2 Rendering Context
 * @param {WebGLProgram} program A WebGLProgram for a successfully linked program
 * @return {module:twgl.UniformBlockSpec} The created UniformBlockSpec
 * @memberOf module:twgl/programs
 */ function createUniformBlockSpecFromProgram(gl, program) {
    const numUniforms = gl.getProgramParameter(program, ACTIVE_UNIFORMS);
    const uniformData = [];
    const uniformIndices = [];
    for(let ii = 0; ii < numUniforms; ++ii){
        uniformIndices.push(ii);
        uniformData.push({});
        const uniformInfo = gl.getActiveUniform(program, ii);
        uniformData[ii].name = uniformInfo.name;
    }
    [
        [
            "UNIFORM_TYPE",
            "type"
        ],
        [
            "UNIFORM_SIZE",
            "size"
        ],
        [
            "UNIFORM_BLOCK_INDEX",
            "blockNdx"
        ],
        [
            "UNIFORM_OFFSET",
            "offset", 
        ], 
    ].forEach(function(pair) {
        const pname = pair[0];
        const key = pair[1];
        gl.getActiveUniforms(program, uniformIndices, gl[pname]).forEach(function(value, ndx) {
            uniformData[ndx][key] = value;
        });
    });
    const blockSpecs = {};
    const numUniformBlocks = gl.getProgramParameter(program, ACTIVE_UNIFORM_BLOCKS);
    for(let ii2 = 0; ii2 < numUniformBlocks; ++ii2){
        const name = gl.getActiveUniformBlockName(program, ii2);
        const blockSpec = {
            index: gl.getUniformBlockIndex(program, name),
            usedByVertexShader: gl.getActiveUniformBlockParameter(program, ii2, UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),
            usedByFragmentShader: gl.getActiveUniformBlockParameter(program, ii2, UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),
            size: gl.getActiveUniformBlockParameter(program, ii2, UNIFORM_BLOCK_DATA_SIZE),
            uniformIndices: gl.getActiveUniformBlockParameter(program, ii2, UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES)
        };
        blockSpec.used = blockSpec.usedByVertexShader || blockSpec.usedByFragmentShader;
        blockSpecs[name] = blockSpec;
    }
    return {
        blockSpecs: blockSpecs,
        uniformData: uniformData
    };
}
const arraySuffixRE = /\[\d+\]\.$/; // better way to check?
const pad = (v, padding)=>((v + (padding - 1)) / padding | 0) * padding;
function createUniformBlockUniformSetter(view, isArray, rows, cols) {
    if (isArray || rows) {
        cols = cols || 1;
        const numElements = view.length;
        const totalRows = numElements / 4;
        return function(value) {
            let dst = 0;
            let src = 0;
            for(let row = 0; row < totalRows; ++row){
                for(let col = 0; col < cols; ++col)view[dst++] = value[src++];
                dst += 4 - cols;
            }
        };
    } else return function(value) {
        if (value.length) view.set(value);
        else view[0] = value;
    };
}
/**
 * Represents a UniformBlockObject including an ArrayBuffer with all the uniform values
 * and a corresponding WebGLBuffer to hold those values on the GPU
 *
 * @typedef {Object} UniformBlockInfo
 * @property {string} name The name of the block
 * @property {ArrayBuffer} array The array buffer that contains the uniform values
 * @property {Float32Array} asFloat A float view on the array buffer. This is useful
 *    inspecting the contents of the buffer in the debugger.
 * @property {WebGLBuffer} buffer A WebGL buffer that will hold a copy of the uniform values for rendering.
 * @property {number} [offset] offset into buffer
 * @property {Object<string, ArrayBufferView>} uniforms A uniform name to ArrayBufferView map.
 *   each Uniform has a correctly typed `ArrayBufferView` into array at the correct offset
 *   and length of that uniform. So for example a float uniform would have a 1 float `Float32Array`
 *   view. A single mat4 would have a 16 element `Float32Array` view. An ivec2 would have an
 *   `Int32Array` view, etc.
 * @property {Object<string, function>} setters A setter for this uniform.
 *   The reason to use setters is elements of arrays are padded to vec4 sizes which
 *   means if you want to set an array of 4 floats you'd need to set 16 values
 *   (or set elements 0, 4, 8, 12). In other words
 *   `someBlockInfo.uniforms.some4FloatArrayUniform.set([0, , , , 1, , , , 2, , , , 3])`
 *   where as the setter handles just passing in [0, 1, 2, 3] either directly as in
 *   `someBlockInfo.setter.some4FloatArrayUniform.set([0, 1, 2, 3])` (not recommended)
 *   or via {@link module:twgl.setBlockUniforms}
 * @memberOf module:twgl
 */ /**
 * Creates a `UniformBlockInfo` for the specified block
 *
 * Note: **If the blockName matches no existing blocks a warning is printed to the console and a dummy
 * `UniformBlockInfo` is returned**. This is because when debugging GLSL
 * it is common to comment out large portions of a shader or for example set
 * the final output to a constant. When that happens blocks get optimized out.
 * If this function did not create dummy blocks your code would crash when debugging.
 *
 * @param {WebGL2RenderingContext} gl A WebGL2RenderingContext
 * @param {WebGLProgram} program A WebGLProgram
 * @param {module:twgl.UniformBlockSpec} uniformBlockSpec. A UniformBlockSpec as returned
 *     from {@link module:twgl.createUniformBlockSpecFromProgram}.
 * @param {string} blockName The name of the block.
 * @return {module:twgl.UniformBlockInfo} The created UniformBlockInfo
 * @memberOf module:twgl/programs
 */ function createUniformBlockInfoFromProgram(gl, program, uniformBlockSpec, blockName) {
    const blockSpecs = uniformBlockSpec.blockSpecs;
    const uniformData = uniformBlockSpec.uniformData;
    const blockSpec = blockSpecs[blockName];
    if (!blockSpec) {
        warn$1("no uniform block object named:", blockName);
        return {
            name: blockName,
            uniforms: {}
        };
    }
    const array = new ArrayBuffer(blockSpec.size);
    const buffer = gl.createBuffer();
    const uniformBufferIndex = blockSpec.index;
    gl.bindBuffer(UNIFORM_BUFFER, buffer);
    gl.uniformBlockBinding(program, blockSpec.index, uniformBufferIndex);
    let prefix = blockName + ".";
    if (arraySuffixRE.test(prefix)) prefix = prefix.replace(arraySuffixRE, ".");
    const uniforms = {};
    const setters = {};
    const setterTree = {};
    blockSpec.uniformIndices.forEach(function(uniformNdx) {
        const data = uniformData[uniformNdx];
        let name = data.name;
        if (name.startsWith(prefix)) name = name.substr(prefix.length);
        const isArray = name.endsWith("[0]");
        if (isArray) name = name.substr(0, name.length - 3);
        const typeInfo = typeMap[data.type];
        const Type = typeInfo.Type;
        const byteLength = isArray ? pad(typeInfo.size, 16) * data.size : typeInfo.size * data.size;
        const uniformView = new Type(array, data.offset, byteLength / Type.BYTES_PER_ELEMENT);
        uniforms[name] = uniformView;
        // Note: I'm not sure what to do here. The original
        // idea was to create TypedArray views into each part
        // of the block. This is useful, for example if you have
        // a block with { mat4: model; mat4 view; mat4 projection; }
        // you'll get a Float32Array for each one suitable for
        // passing to most JS math libraries including twgl's and glMatrix.js.
        //
        // But, if you have a an array of structures, especially if that
        // array is large, you get a whole bunch of TypedArray views.
        // Every one of them has overhead and switching between them all
        // is probably a cache miss. In that case it would really be better
        // to just have one view (asFloat) and have all the setters
        // just reference the correct portion. But, then you can't easily
        // treat a matrix, or a vec4, as a standalone thing like you can
        // with all the views.
        //
        // Another problem with the views is they are not shared. With
        // uniforms you have one set of setters. With UniformBlockInfo
        // you have a set of setters *pre block instance*. That's because
        // TypedArray views can't be mapped to different buffers.
        //
        // My gut right now is if you really want the speed and compactness
        // then you should probably roll your own solution. TWGL's goal
        // here is ease of use as AFAICT there is no simple generic efficient
        // solution.
        const setter = createUniformBlockUniformSetter(uniformView, isArray, typeInfo.rows, typeInfo.cols);
        setters[name] = setter;
        addSetterToUniformTree(name, setter, setterTree, setters);
    });
    return {
        name: blockName,
        array,
        asFloat: new Float32Array(array),
        buffer,
        uniforms,
        setters
    };
}
/**
 * Creates a `UniformBlockInfo` for the specified block
 *
 * Note: **If the blockName matches no existing blocks a warning is printed to the console and a dummy
 * `UniformBlockInfo` is returned**. This is because when debugging GLSL
 * it is common to comment out large portions of a shader or for example set
 * the final output to a constant. When that happens blocks get optimized out.
 * If this function did not create dummy blocks your code would crash when debugging.
 *
 * @param {WebGL2RenderingContext} gl A WebGL2RenderingContext
 * @param {module:twgl.ProgramInfo} programInfo a `ProgramInfo`
 *     as returned from {@link module:twgl.createProgramInfo}
 * @param {string} blockName The name of the block.
 * @return {module:twgl.UniformBlockInfo} The created UniformBlockInfo
 * @memberOf module:twgl/programs
 */ function createUniformBlockInfo(gl, programInfo, blockName) {
    return createUniformBlockInfoFromProgram(gl, programInfo.program, programInfo.uniformBlockSpec, blockName);
}
/**
 * Binds a uniform block to the matching uniform block point.
 * Matches by blocks by name so blocks must have the same name not just the same
 * structure.
 *
 * If you have changed any values and you upload the values into the corresponding WebGLBuffer
 * call {@link module:twgl.setUniformBlock} instead.
 *
 * @param {WebGL2RenderingContext} gl A WebGL 2 rendering context.
 * @param {(module:twgl.ProgramInfo|module:twgl.UniformBlockSpec)} programInfo a `ProgramInfo`
 *     as returned from {@link module:twgl.createProgramInfo} or or `UniformBlockSpec` as
 *     returned from {@link module:twgl.createUniformBlockSpecFromProgram}.
 * @param {module:twgl.UniformBlockInfo} uniformBlockInfo a `UniformBlockInfo` as returned from
 *     {@link module:twgl.createUniformBlockInfo}.
 * @return {bool} true if buffer was bound. If the programInfo has no block with the same block name
 *     no buffer is bound.
 * @memberOf module:twgl/programs
 */ function bindUniformBlock(gl, programInfo, uniformBlockInfo) {
    const uniformBlockSpec = programInfo.uniformBlockSpec || programInfo;
    const blockSpec = uniformBlockSpec.blockSpecs[uniformBlockInfo.name];
    if (blockSpec) {
        const bufferBindIndex = blockSpec.index;
        gl.bindBufferRange(UNIFORM_BUFFER, bufferBindIndex, uniformBlockInfo.buffer, uniformBlockInfo.offset || 0, uniformBlockInfo.array.byteLength);
        return true;
    }
    return false;
}
/**
 * Uploads the current uniform values to the corresponding WebGLBuffer
 * and binds that buffer to the program's corresponding bind point for the uniform block object.
 *
 * If you haven't changed any values and you only need to bind the uniform block object
 * call {@link module:twgl.bindUniformBlock} instead.
 *
 * @param {WebGL2RenderingContext} gl A WebGL 2 rendering context.
 * @param {(module:twgl.ProgramInfo|module:twgl.UniformBlockSpec)} programInfo a `ProgramInfo`
 *     as returned from {@link module:twgl.createProgramInfo} or or `UniformBlockSpec` as
 *     returned from {@link module:twgl.createUniformBlockSpecFromProgram}.
 * @param {module:twgl.UniformBlockInfo} uniformBlockInfo a `UniformBlockInfo` as returned from
 *     {@link module:twgl.createUniformBlockInfo}.
 * @memberOf module:twgl/programs
 */ function setUniformBlock(gl, programInfo, uniformBlockInfo) {
    if (bindUniformBlock(gl, programInfo, uniformBlockInfo)) gl.bufferData(UNIFORM_BUFFER, uniformBlockInfo.array, DYNAMIC_DRAW);
}
/**
 * Sets values of a uniform block object
 *
 * @param {module:twgl.UniformBlockInfo} uniformBlockInfo A UniformBlockInfo as returned by {@link module:twgl.createUniformBlockInfo}.
 * @param {Object.<string, ?>} values A uniform name to value map where the value is correct for the given
 *    type of uniform. So for example given a block like
 *
 *       uniform SomeBlock {
 *         float someFloat;
 *         vec2 someVec2;
 *         vec3 someVec3Array[2];
 *         int someInt;
 *       }
 *
 *  You can set the values of the uniform block with
 *
 *       twgl.setBlockUniforms(someBlockInfo, {
 *          someFloat: 12.3,
 *          someVec2: [1, 2],
 *          someVec3Array: [1, 2, 3, 4, 5, 6],
 *          someInt: 5,
 *       }
 *
 *  Arrays can be JavaScript arrays or typed arrays
 *
 *  You can also fill out structure and array values either via
 *  shortcut. Example
 *
 *     // -- in shader --
 *     struct Light {
 *       float intensity;
 *       vec4 color;
 *       float nearFar[2];
 *     };
 *     uniform Lights {
 *       Light lights[2];
 *     };
 *
 *     // in JavaScript
 *
 *     twgl.setBlockUniforms(someBlockInfo, {
 *       lights: [
 *         { intensity: 5.0, color: [1, 0, 0, 1], nearFar[0.1, 10] },
 *         { intensity: 2.0, color: [0, 0, 1, 1], nearFar[0.2, 15] },
 *       ],
 *     });
 *
 *   or the more traditional way
 *
 *     twgl.setBlockUniforms(someBlockInfo, {
 *       "lights[0].intensity": 5.0,
 *       "lights[0].color": [1, 0, 0, 1],
 *       "lights[0].nearFar": [0.1, 10],
 *       "lights[1].intensity": 2.0,
 *       "lights[1].color": [0, 0, 1, 1],
 *       "lights[1].nearFar": [0.2, 15],
 *     });
 *
 *   You can also specify partial paths
 *
 *     twgl.setBlockUniforms(someBlockInfo, {
 *       'lights[1]': { intensity: 5.0, color: [1, 0, 0, 1], nearFar[0.2, 15] },
 *     });
 *
 *   But you can not specify leaf array indices.
 *
 *     twgl.setBlockUniforms(someBlockInfo, {
 *       'lights[1].nearFar[1]': 15,     // BAD! nearFar is a leaf
 *       'lights[1].nearFar': [0.2, 15], // GOOD
 *     });
 *
 *  **IMPORTANT!**, packing in a UniformBlock is unintuitive.
 *  For example the actual layout of `someVec3Array` above in memory
 *  is `1, 2, 3, unused, 4, 5, 6, unused`. twgl takes in 6 values
 *  as shown about and copies them, skipping the padding. This might
 *  be confusing if you're already familiar with Uniform blocks.
 *
 *  If you want to deal with the padding yourself you can access the array
 *  buffer views directly. eg:
 *
 *      someBlockInfo.someVec3Array.set([1, 2, 3, 0, 4, 5, 6, 0]);
 *
 *  Any name that doesn't match will be ignored
 * @memberOf module:twgl/programs
 */ function setBlockUniforms(uniformBlockInfo, values) {
    const setters = uniformBlockInfo.setters;
    for(const name in values){
        const setter = setters[name];
        if (setter) {
            const value = values[name];
            setter(value);
        }
    }
}
function setUniformTree(tree, values) {
    for(const name in values){
        const prop = tree[name];
        if (typeof prop === "function") prop(values[name]);
        else setUniformTree(tree[name], values[name]);
    }
}
/**
 * Set uniforms and binds related textures.
 *
 * example:
 *
 *     const programInfo = createProgramInfo(
 *         gl, ["some-vs", "some-fs"]);
 *
 *     const tex1 = gl.createTexture();
 *     const tex2 = gl.createTexture();
 *
 *     ... assume we setup the textures with data ...
 *
 *     const uniforms = {
 *       u_someSampler: tex1,
 *       u_someOtherSampler: tex2,
 *       u_someColor: [1,0,0,1],
 *       u_somePosition: [0,1,1],
 *       u_someMatrix: [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ],
 *     };
 *
 *     gl.useProgram(program);
 *
 * This will automatically bind the textures AND set the
 * uniforms.
 *
 *     twgl.setUniforms(programInfo, uniforms);
 *
 * For the example above it is equivalent to
 *
 *     var texUnit = 0;
 *     gl.activeTexture(gl.TEXTURE0 + texUnit);
 *     gl.bindTexture(gl.TEXTURE_2D, tex1);
 *     gl.uniform1i(u_someSamplerLocation, texUnit++);
 *     gl.activeTexture(gl.TEXTURE0 + texUnit);
 *     gl.bindTexture(gl.TEXTURE_2D, tex2);
 *     gl.uniform1i(u_someSamplerLocation, texUnit++);
 *     gl.uniform4fv(u_someColorLocation, [1, 0, 0, 1]);
 *     gl.uniform3fv(u_somePositionLocation, [0, 1, 1]);
 *     gl.uniformMatrix4fv(u_someMatrix, false, [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ]);
 *
 * Note it is perfectly reasonable to call `setUniforms` multiple times. For example
 *
 *     const uniforms = {
 *       u_someSampler: tex1,
 *       u_someOtherSampler: tex2,
 *     };
 *
 *     const moreUniforms {
 *       u_someColor: [1,0,0,1],
 *       u_somePosition: [0,1,1],
 *       u_someMatrix: [
 *         1,0,0,0,
 *         0,1,0,0,
 *         0,0,1,0,
 *         0,0,0,0,
 *       ],
 *     };
 *
 *     twgl.setUniforms(programInfo, uniforms);
 *     twgl.setUniforms(programInfo, moreUniforms);
 *
 * You can also add WebGLSamplers to uniform samplers as in
 *
 *     const uniforms = {
 *       u_someSampler: {
 *         texture: someWebGLTexture,
 *         sampler: someWebGLSampler,
 *       },
 *     };
 *
 * In which case both the sampler and texture will be bound to the
 * same unit.
 *
 * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters a `ProgramInfo` as returned from `createProgramInfo` or the setters returned from
 *        `createUniformSetters`.
 * @param {Object.<string, ?>} values an object with values for the
 *        uniforms.
 *   You can pass multiple objects by putting them in an array or by calling with more arguments.For example
 *
 *     const sharedUniforms = {
 *       u_fogNear: 10,
 *       u_projection: ...
 *       ...
 *     };
 *
 *     const localUniforms = {
 *       u_world: ...
 *       u_diffuseColor: ...
 *     };
 *
 *     twgl.setUniforms(programInfo, sharedUniforms, localUniforms);
 *
 *     // is the same as
 *
 *     twgl.setUniforms(programInfo, [sharedUniforms, localUniforms]);
 *
 *     // is the same as
 *
 *     twgl.setUniforms(programInfo, sharedUniforms);
 *     twgl.setUniforms(programInfo, localUniforms};
 *
 *   You can also fill out structure and array values either via
 *   shortcut. Example
 *
 *     // -- in shader --
 *     struct Light {
 *       float intensity;
 *       vec4 color;
 *       float nearFar[2];
 *     };
 *     uniform Light lights[2];
 *
 *     // in JavaScript
 *
 *     twgl.setUniforms(programInfo, {
 *       lights: [
 *         { intensity: 5.0, color: [1, 0, 0, 1], nearFar[0.1, 10] },
 *         { intensity: 2.0, color: [0, 0, 1, 1], nearFar[0.2, 15] },
 *       ],
 *     });
 *
 *   or the more traditional way
 *
 *     twgl.setUniforms(programInfo, {
 *       "lights[0].intensity": 5.0,
 *       "lights[0].color": [1, 0, 0, 1],
 *       "lights[0].nearFar": [0.1, 10],
 *       "lights[1].intensity": 2.0,
 *       "lights[1].color": [0, 0, 1, 1],
 *       "lights[1].nearFar": [0.2, 15],
 *     });
 *
 *   You can also specify partial paths
 *
 *     twgl.setUniforms(programInfo, {
 *       'lights[1]': { intensity: 5.0, color: [1, 0, 0, 1], nearFar[0.2, 15] },
 *     });
 *
 *   But you can not specify leaf array indices
 *
 *     twgl.setUniforms(programInfo, {
 *       'lights[1].nearFar[1]': 15,     // BAD! nearFar is a leaf
 *       'lights[1].nearFar': [0.2, 15], // GOOD
 *     });
 *
 * @memberOf module:twgl/programs
 */ function setUniforms(setters, ...args) {
    const actualSetters = setters.uniformSetters || setters;
    const numArgs = args.length;
    for(let aNdx = 0; aNdx < numArgs; ++aNdx){
        const values = args[aNdx];
        if (Array.isArray(values)) {
            const numValues = values.length;
            for(let ii = 0; ii < numValues; ++ii)setUniforms(actualSetters, values[ii]);
        } else for(const name in values){
            const setter = actualSetters[name];
            if (setter) setter(values[name]);
        }
    }
}
/**
 * Alias for `setUniforms`
 * @function
 * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters a `ProgramInfo` as returned from `createProgramInfo` or the setters returned from
 *        `createUniformSetters`.
 * @param {Object.<string, ?>} values an object with values for the
 * @memberOf module:twgl/programs
 */ const setUniformsAndBindTextures = setUniforms;
/**
 * Creates setter functions for all attributes of a shader
 * program. You can pass this to {@link module:twgl.setBuffersAndAttributes} to set all your buffers and attributes.
 *
 * @see {@link module:twgl.setAttributes} for example
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {WebGLProgram} program the program to create setters for.
 * @return {Object.<string, function>} an object with a setter for each attribute by name.
 * @memberOf module:twgl/programs
 */ function createAttributeSetters(gl, program) {
    const attribSetters = {};
    const numAttribs = gl.getProgramParameter(program, ACTIVE_ATTRIBUTES);
    for(let ii = 0; ii < numAttribs; ++ii){
        const attribInfo = gl.getActiveAttrib(program, ii);
        if (isBuiltIn(attribInfo)) continue;
        const index = gl.getAttribLocation(program, attribInfo.name);
        const typeInfo = attrTypeMap[attribInfo.type];
        const setter = typeInfo.setter(gl, index, typeInfo);
        setter.location = index;
        attribSetters[attribInfo.name] = setter;
    }
    return attribSetters;
}
/**
 * Sets attributes and binds buffers (deprecated... use {@link module:twgl.setBuffersAndAttributes})
 *
 * Example:
 *
 *     const program = createProgramFromScripts(
 *         gl, ["some-vs", "some-fs");
 *
 *     const attribSetters = createAttributeSetters(program);
 *
 *     const positionBuffer = gl.createBuffer();
 *     const texcoordBuffer = gl.createBuffer();
 *
 *     const attribs = {
 *       a_position: {buffer: positionBuffer, numComponents: 3},
 *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
 *     };
 *
 *     gl.useProgram(program);
 *
 * This will automatically bind the buffers AND set the
 * attributes.
 *
 *     setAttributes(attribSetters, attribs);
 *
 * Properties of attribs. For each attrib you can add
 * properties:
 *
 * *   type: the type of data in the buffer. Default = gl.FLOAT
 * *   normalize: whether or not to normalize the data. Default = false
 * *   stride: the stride. Default = 0
 * *   offset: offset into the buffer. Default = 0
 * *   divisor: the divisor for instances. Default = undefined
 *
 * For example if you had 3 value float positions, 2 value
 * float texcoord and 4 value uint8 colors you'd setup your
 * attribs like this
 *
 *     const attribs = {
 *       a_position: {buffer: positionBuffer, numComponents: 3},
 *       a_texcoord: {buffer: texcoordBuffer, numComponents: 2},
 *       a_color: {
 *         buffer: colorBuffer,
 *         numComponents: 4,
 *         type: gl.UNSIGNED_BYTE,
 *         normalize: true,
 *       },
 *     };
 *
 * @param {Object.<string, function>} setters Attribute setters as returned from createAttributeSetters
 * @param {Object.<string, module:twgl.AttribInfo>} buffers AttribInfos mapped by attribute name.
 * @memberOf module:twgl/programs
 * @deprecated use {@link module:twgl.setBuffersAndAttributes}
 * @private
 */ function setAttributes(setters, buffers) {
    for(const name in buffers){
        const setter = setters[name];
        if (setter) setter(buffers[name]);
    }
}
/**
 * Sets attributes and buffers including the `ELEMENT_ARRAY_BUFFER` if appropriate
 *
 * Example:
 *
 *     const programInfo = createProgramInfo(
 *         gl, ["some-vs", "some-fs");
 *
 *     const arrays = {
 *       position: { numComponents: 3, data: [0, 0, 0, 10, 0, 0, 0, 10, 0, 10, 10, 0], },
 *       texcoord: { numComponents: 2, data: [0, 0, 0, 1, 1, 0, 1, 1],                 },
 *     };
 *
 *     const bufferInfo = createBufferInfoFromArrays(gl, arrays);
 *
 *     gl.useProgram(programInfo.program);
 *
 * This will automatically bind the buffers AND set the
 * attributes.
 *
 *     setBuffersAndAttributes(gl, programInfo, bufferInfo);
 *
 * For the example above it is equivalent to
 *
 *     gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
 *     gl.enableVertexAttribArray(a_positionLocation);
 *     gl.vertexAttribPointer(a_positionLocation, 3, gl.FLOAT, false, 0, 0);
 *     gl.bindBuffer(gl.ARRAY_BUFFER, texcoordBuffer);
 *     gl.enableVertexAttribArray(a_texcoordLocation);
 *     gl.vertexAttribPointer(a_texcoordLocation, 4, gl.FLOAT, false, 0, 0);
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext.
 * @param {(module:twgl.ProgramInfo|Object.<string, function>)} setters A `ProgramInfo` as returned from {@link module:twgl.createProgramInfo} or Attribute setters as returned from {@link module:twgl.createAttributeSetters}
 * @param {(module:twgl.BufferInfo|module:twgl.VertexArrayInfo)} buffers a `BufferInfo` as returned from {@link module:twgl.createBufferInfoFromArrays}.
 *   or a `VertexArrayInfo` as returned from {@link module:twgl.createVertexArrayInfo}
 * @memberOf module:twgl/programs
 */ function setBuffersAndAttributes(gl, programInfo, buffers) {
    if (buffers.vertexArrayObject) gl.bindVertexArray(buffers.vertexArrayObject);
    else {
        setAttributes(programInfo.attribSetters || programInfo, buffers.attribs);
        if (buffers.indices) gl.bindBuffer(ELEMENT_ARRAY_BUFFER$1, buffers.indices);
    }
}
/**
 * @typedef {Object} ProgramInfo
 * @property {WebGLProgram} program A shader program
 * @property {Object<string, function>} uniformSetters object of setters as returned from createUniformSetters,
 * @property {Object<string, function>} attribSetters object of setters as returned from createAttribSetters,
 * @property {module:twgl.UniformBlockSpec} [uniformBlockSpec] a uniform block spec for making UniformBlockInfos with createUniformBlockInfo etc..
 * @property {Object<string, module:twgl.TransformFeedbackInfo>} [transformFeedbackInfo] info for transform feedbacks
 * @memberOf module:twgl
 */ /**
 * Creates a ProgramInfo from an existing program.
 *
 * A ProgramInfo contains
 *
 *     programInfo = {
 *        program: WebGLProgram,
 *        uniformSetters: object of setters as returned from createUniformSetters,
 *        attribSetters: object of setters as returned from createAttribSetters,
 *     }
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {WebGLProgram} program an existing WebGLProgram.
 * @return {module:twgl.ProgramInfo} The created ProgramInfo.
 * @memberOf module:twgl/programs
 */ function createProgramInfoFromProgram(gl, program) {
    const uniformSetters = createUniformSetters(gl, program);
    const attribSetters = createAttributeSetters(gl, program);
    const programInfo = {
        program,
        uniformSetters,
        attribSetters
    };
    if (isWebGL2(gl)) {
        programInfo.uniformBlockSpec = createUniformBlockSpecFromProgram(gl, program);
        programInfo.transformFeedbackInfo = createTransformFeedbackInfo(gl, program);
    }
    return programInfo;
}
const notIdRE = /\s|{|}|;/;
/**
 * Creates a ProgramInfo from 2 sources.
 *
 * A ProgramInfo contains
 *
 *     programInfo = {
 *        program: WebGLProgram,
 *        uniformSetters: object of setters as returned from createUniformSetters,
 *        attribSetters: object of setters as returned from createAttribSetters,
 *     }
 *
 * NOTE: There are 4 signatures for this function
 *
 *     twgl.createProgramInfo(gl, [vs, fs], options);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_errFunc);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_errFunc);
 *     twgl.createProgramInfo(gl, [vs, fs], opt_attribs, opt_locations, opt_errFunc);
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {string[]} shaderSources Array of sources for the
 *        shaders or ids. The first is assumed to be the vertex shader,
 *        the second the fragment shader.
 * @param {module:twgl.ProgramOptions|string[]|module:twgl.ErrorCallback} [opt_attribs] Options for the program or an array of attribs names or an error callback. Locations will be assigned by index if not passed in
 * @param {number[]} [opt_locations|module:twgl.ErrorCallback] The locations for the. A parallel array to opt_attribs letting you assign locations or an error callback.
 * @param {module:twgl.ErrorCallback} [opt_errorCallback] callback for errors. By default it just prints an error to the console
 *        on error. If you want something else pass an callback. It's passed an error message.
 * @return {module:twgl.ProgramInfo?} The created ProgramInfo or null if it failed to link or compile
 * @memberOf module:twgl/programs
 */ function createProgramInfo(gl, shaderSources, opt_attribs, opt_locations, opt_errorCallback) {
    const progOptions = getProgramOptions(opt_attribs, opt_locations, opt_errorCallback);
    const errors = [];
    shaderSources = shaderSources.map(function(source) {
        // Lets assume if there is no \n it's an id
        if (!notIdRE.test(source)) {
            const script = getElementById(source);
            if (!script) {
                const err = `no element with id: ${source}`;
                progOptions.errorCallback(err);
                errors.push(err);
            } else source = script.text;
        }
        return source;
    });
    if (errors.length) return reportError(progOptions, "");
    const origCallback = progOptions.callback;
    if (origCallback) progOptions.callback = (err, program)=>{
        let programInfo;
        if (!err) programInfo = createProgramInfoFromProgram(gl, program);
        origCallback(err, programInfo);
    };
    const program2 = createProgramFromSources(gl, shaderSources, progOptions);
    if (!program2) return null;
    return createProgramInfoFromProgram(gl, program2);
}
var programs = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    createAttributeSetters: createAttributeSetters,
    createProgram: createProgram,
    createProgramAsync: createProgramAsync,
    createProgramFromScripts: createProgramFromScripts,
    createProgramFromSources: createProgramFromSources,
    createProgramInfo: createProgramInfo,
    createProgramInfoAsync: createProgramInfoAsync,
    createProgramInfoFromProgram: createProgramInfoFromProgram,
    createUniformSetters: createUniformSetters,
    createUniformBlockSpecFromProgram: createUniformBlockSpecFromProgram,
    createUniformBlockInfoFromProgram: createUniformBlockInfoFromProgram,
    createUniformBlockInfo: createUniformBlockInfo,
    createTransformFeedback: createTransformFeedback,
    createTransformFeedbackInfo: createTransformFeedbackInfo,
    bindTransformFeedbackInfo: bindTransformFeedbackInfo,
    setAttributes: setAttributes,
    setBuffersAndAttributes: setBuffersAndAttributes,
    setUniforms: setUniforms,
    setUniformsAndBindTextures: setUniformsAndBindTextures,
    setUniformBlock: setUniformBlock,
    setBlockUniforms: setBlockUniforms,
    bindUniformBlock: bindUniformBlock
});
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */ const TRIANGLES = 0x0004;
const UNSIGNED_SHORT$3 = 0x1403;
/**
 * Drawing related functions
 *
 * For backward compatibility they are available at both `twgl.draw` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/draw
 */ /**
 * Calls `gl.drawElements` or `gl.drawArrays`, whichever is appropriate
 *
 * normally you'd call `gl.drawElements` or `gl.drawArrays` yourself
 * but calling this means if you switch from indexed data to non-indexed
 * data you don't have to remember to update your draw call.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {(module:twgl.BufferInfo|module:twgl.VertexArrayInfo)} bufferInfo A BufferInfo as returned from {@link module:twgl.createBufferInfoFromArrays} or
 *   a VertexArrayInfo as returned from {@link module:twgl.createVertexArrayInfo}
 * @param {number} [type] eg (gl.TRIANGLES, gl.LINES, gl.POINTS, gl.TRIANGLE_STRIP, ...). Defaults to `gl.TRIANGLES`
 * @param {number} [count] An optional count. Defaults to bufferInfo.numElements
 * @param {number} [offset] An optional offset. Defaults to 0.
 * @param {number} [instanceCount] An optional instanceCount. if set then `drawArraysInstanced` or `drawElementsInstanced` will be called
 * @memberOf module:twgl/draw
 */ function drawBufferInfo(gl, bufferInfo, type, count, offset, instanceCount) {
    type = type === undefined ? TRIANGLES : type;
    const indices = bufferInfo.indices;
    const elementType = bufferInfo.elementType;
    const numElements = count === undefined ? bufferInfo.numElements : count;
    offset = offset === undefined ? 0 : offset;
    if (elementType || indices) {
        if (instanceCount !== undefined) gl.drawElementsInstanced(type, numElements, elementType === undefined ? UNSIGNED_SHORT$3 : bufferInfo.elementType, offset, instanceCount);
        else gl.drawElements(type, numElements, elementType === undefined ? UNSIGNED_SHORT$3 : bufferInfo.elementType, offset);
    } else if (instanceCount !== undefined) gl.drawArraysInstanced(type, offset, numElements, instanceCount);
    else gl.drawArrays(type, offset, numElements);
}
/**
 * A DrawObject is useful for putting objects in to an array and passing them to {@link module:twgl.drawObjectList}.
 *
 * You need either a `BufferInfo` or a `VertexArrayInfo`.
 *
 * @typedef {Object} DrawObject
 * @property {boolean} [active] whether or not to draw. Default = `true` (must be `false` to be not true). In other words `undefined` = `true`
 * @property {number} [type] type to draw eg. `gl.TRIANGLES`, `gl.LINES`, etc...
 * @property {module:twgl.ProgramInfo} programInfo A ProgramInfo as returned from {@link module:twgl.createProgramInfo}
 * @property {module:twgl.BufferInfo} [bufferInfo] A BufferInfo as returned from {@link module:twgl.createBufferInfoFromArrays}
 * @property {module:twgl.VertexArrayInfo} [vertexArrayInfo] A VertexArrayInfo as returned from {@link module:twgl.createVertexArrayInfo}
 * @property {Object<string, ?>} uniforms The values for the uniforms.
 *   You can pass multiple objects by putting them in an array. For example
 *
 *     var sharedUniforms = {
 *       u_fogNear: 10,
 *       u_projection: ...
 *       ...
 *     };
 *
 *     var localUniforms = {
 *       u_world: ...
 *       u_diffuseColor: ...
 *     };
 *
 *     var drawObj = {
 *       ...
 *       uniforms: [sharedUniforms, localUniforms],
 *     };
 *
 * @property {number} [offset] the offset to pass to `gl.drawArrays` or `gl.drawElements`. Defaults to 0.
 * @property {number} [count] the count to pass to `gl.drawArrays` or `gl.drawElements`. Defaults to bufferInfo.numElements.
 * @property {number} [instanceCount] the number of instances. Defaults to undefined.
 * @memberOf module:twgl
 */ /**
 * Draws a list of objects
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {DrawObject[]} objectsToDraw an array of objects to draw.
 * @memberOf module:twgl/draw
 */ function drawObjectList(gl, objectsToDraw) {
    let lastUsedProgramInfo = null;
    let lastUsedBufferInfo = null;
    objectsToDraw.forEach(function(object) {
        if (object.active === false) return;
        const programInfo = object.programInfo;
        const bufferInfo = object.vertexArrayInfo || object.bufferInfo;
        let bindBuffers = false;
        const type = object.type === undefined ? TRIANGLES : object.type;
        if (programInfo !== lastUsedProgramInfo) {
            lastUsedProgramInfo = programInfo;
            gl.useProgram(programInfo.program);
            // We have to rebind buffers when changing programs because we
            // only bind buffers the program uses. So if 2 programs use the same
            // bufferInfo but the 1st one uses only positions the when the
            // we switch to the 2nd one some of the attributes will not be on.
            bindBuffers = true;
        }
        // Setup all the needed attributes.
        if (bindBuffers || bufferInfo !== lastUsedBufferInfo) {
            if (lastUsedBufferInfo && lastUsedBufferInfo.vertexArrayObject && !bufferInfo.vertexArrayObject) gl.bindVertexArray(null);
            lastUsedBufferInfo = bufferInfo;
            setBuffersAndAttributes(gl, programInfo, bufferInfo);
        }
        // Set the uniforms.
        setUniforms(programInfo, object.uniforms);
        // Draw
        drawBufferInfo(gl, bufferInfo, type, object.count, object.offset, object.instanceCount);
    });
    if (lastUsedBufferInfo && lastUsedBufferInfo.vertexArrayObject) gl.bindVertexArray(null);
}
var draw = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    drawBufferInfo: drawBufferInfo,
    drawObjectList: drawObjectList
});
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */ const FRAMEBUFFER = 0x8d40;
const RENDERBUFFER = 0x8d41;
const TEXTURE_2D$2 = 0x0de1;
const UNSIGNED_BYTE$3 = 0x1401;
/* PixelFormat */ const DEPTH_COMPONENT$1 = 0x1902;
const RGBA$1 = 0x1908;
const DEPTH_COMPONENT24$1 = 0x81a6;
const DEPTH_COMPONENT32F$1 = 0x8cac;
const DEPTH24_STENCIL8$1 = 0x88f0;
const DEPTH32F_STENCIL8$1 = 0x8cad;
/* Framebuffer Object. */ const RGBA4$1 = 0x8056;
const RGB5_A1$1 = 0x8057;
const RGB565$1 = 0x8D62;
const DEPTH_COMPONENT16$1 = 0x81A5;
const STENCIL_INDEX = 0x1901;
const STENCIL_INDEX8 = 0x8D48;
const DEPTH_STENCIL$1 = 0x84F9;
const COLOR_ATTACHMENT0 = 0x8CE0;
const DEPTH_ATTACHMENT = 0x8D00;
const STENCIL_ATTACHMENT = 0x8D20;
const DEPTH_STENCIL_ATTACHMENT = 0x821A;
/* TextureWrapMode */ const CLAMP_TO_EDGE$1 = 0x812F;
/* TextureMagFilter */ const LINEAR$1 = 0x2601;
/**
 * The options for a framebuffer attachment.
 *
 * Note: For a `format` that is a texture include all the texture
 * options from {@link module:twgl.TextureOptions} for example
 * `min`, `mag`, `clamp`, etc... Note that unlike {@link module:twgl.TextureOptions}
 * `auto` defaults to `false` for attachment textures but `min` and `mag` default
 * to `gl.LINEAR` and `wrap` defaults to `CLAMP_TO_EDGE`
 *
 * @typedef {Object} AttachmentOptions
 * @property {number} [attachmentPoint] The attachment point. Defaults
 *   to `gl.COLOR_ATTACHMENT0 + ndx` unless type is a depth or stencil type
 *   then it's gl.DEPTH_ATTACHMENT or `gl.DEPTH_STENCIL_ATTACHMENT` depending
 *   on the format or attachment type.
 * @property {number} [format] The format. If one of `gl.RGBA4`,
 *   `gl.RGB565`, `gl.RGB5_A1`, `gl.DEPTH_COMPONENT16`,
 *   `gl.STENCIL_INDEX8` or `gl.DEPTH_STENCIL` then will create a
 *   renderbuffer. Otherwise will create a texture. Default = `gl.RGBA`
 * @property {number} [type] The type. Used for texture. Default = `gl.UNSIGNED_BYTE`.
 * @property {number} [target] The texture target for `gl.framebufferTexture2D`.
 *   Defaults to `gl.TEXTURE_2D`. Set to appropriate face for cube maps.
 * @property {number} [samples] The number of samples. Default = 1
 * @property {number} [level] level for `gl.framebufferTexture2D`. Defaults to 0.
 * @property {number} [layer] layer for `gl.framebufferTextureLayer`. Defaults to undefined.
 *   If set then `gl.framebufferTextureLayer` is called, if not then `gl.framebufferTexture2D`
 * @property {(WebGLRenderbuffer | WebGLTexture)} [attachment] An existing renderbuffer or texture.
 *    If provided will attach this Object. This allows you to share
 *    attachments across framebuffers.
 * @memberOf module:twgl
 * @mixes module:twgl.TextureOptions
 */ const defaultAttachments = [
    {
        format: RGBA$1,
        type: UNSIGNED_BYTE$3,
        min: LINEAR$1,
        wrap: CLAMP_TO_EDGE$1
    },
    {
        format: DEPTH_STENCIL$1
    }, 
];
const attachmentsByFormat = {};
attachmentsByFormat[DEPTH_STENCIL$1] = DEPTH_STENCIL_ATTACHMENT;
attachmentsByFormat[STENCIL_INDEX] = STENCIL_ATTACHMENT;
attachmentsByFormat[STENCIL_INDEX8] = STENCIL_ATTACHMENT;
attachmentsByFormat[DEPTH_COMPONENT$1] = DEPTH_ATTACHMENT;
attachmentsByFormat[DEPTH_COMPONENT16$1] = DEPTH_ATTACHMENT;
attachmentsByFormat[DEPTH_COMPONENT24$1] = DEPTH_ATTACHMENT;
attachmentsByFormat[DEPTH_COMPONENT32F$1] = DEPTH_ATTACHMENT;
attachmentsByFormat[DEPTH24_STENCIL8$1] = DEPTH_STENCIL_ATTACHMENT;
attachmentsByFormat[DEPTH32F_STENCIL8$1] = DEPTH_STENCIL_ATTACHMENT;
function getAttachmentPointForFormat(format, internalFormat) {
    return attachmentsByFormat[format] || attachmentsByFormat[internalFormat];
}
const renderbufferFormats = {};
renderbufferFormats[RGBA4$1] = true;
renderbufferFormats[RGB5_A1$1] = true;
renderbufferFormats[RGB565$1] = true;
renderbufferFormats[DEPTH_STENCIL$1] = true;
renderbufferFormats[DEPTH_COMPONENT16$1] = true;
renderbufferFormats[STENCIL_INDEX] = true;
renderbufferFormats[STENCIL_INDEX8] = true;
function isRenderbufferFormat(format) {
    return renderbufferFormats[format];
}
const MAX_COLOR_ATTACHMENT_POINTS = 32; // even an 3090 only supports 8 but WebGL/OpenGL ES define constants for 32
function isColorAttachmentPoint(attachmentPoint) {
    return attachmentPoint >= COLOR_ATTACHMENT0 && attachmentPoint < COLOR_ATTACHMENT0 + MAX_COLOR_ATTACHMENT_POINTS;
}
/**
 * @typedef {Object} FramebufferInfo
 * @property {WebGLFramebuffer} framebuffer The WebGLFramebuffer for this framebufferInfo
 * @property {Array.<(WebGLRenderbuffer | WebGLTexture)>} attachments The created attachments in the same order as passed in to {@link module:twgl.createFramebufferInfo}.
 * @property {number} width The width of the framebuffer and its attachments
 * @property {number} height The width of the framebuffer and its attachments
 * @memberOf module:twgl
 */ /**
 * Creates a framebuffer and attachments.
 *
 * This returns a {@link module:twgl.FramebufferInfo} because it needs to return the attachments as well as the framebuffer.
 * It also leaves the framebuffer it just created as the currently bound `FRAMEBUFFER`.
 * Note: If this is WebGL2 or if you called {@link module:twgl.addExtensionsToContext} then it will set the drawBuffers
 * to `[COLOR_ATTACHMENT0, COLOR_ATTACHMENT1, ...]` for how ever many color attachments were created.
 *
 * The simplest usage
 *
 *     // create an RGBA/UNSIGNED_BYTE texture and DEPTH_STENCIL renderbuffer
 *     const fbi = twgl.createFramebufferInfo(gl);
 *
 * More complex usage
 *
 *     // create an RGB565 renderbuffer and a STENCIL_INDEX8 renderbuffer
 *     const attachments = [
 *       { format: RGB565, mag: NEAREST },
 *       { format: STENCIL_INDEX8 },
 *     ]
 *     const fbi = twgl.createFramebufferInfo(gl, attachments);
 *
 * Passing in a specific size
 *
 *     const width = 256;
 *     const height = 256;
 *     const fbi = twgl.createFramebufferInfo(gl, attachments, width, height);
 *
 * **Note!!** It is up to you to check if the framebuffer is renderable by calling `gl.checkFramebufferStatus`.
 * [WebGL1 only guarantees 3 combinations of attachments work](https://www.khronos.org/registry/webgl/specs/latest/1.0/#6.6).
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.AttachmentOptions[]} [attachments] which attachments to create. If not provided the default is a framebuffer with an
 *    `RGBA`, `UNSIGNED_BYTE` texture `COLOR_ATTACHMENT0` and a `DEPTH_STENCIL` renderbuffer `DEPTH_STENCIL_ATTACHMENT`.
 * @param {number} [width] the width for the attachments. Default = size of drawingBuffer
 * @param {number} [height] the height for the attachments. Default = size of drawingBuffer
 * @return {module:twgl.FramebufferInfo} the framebuffer and attachments.
 * @memberOf module:twgl/framebuffers
 */ function createFramebufferInfo(gl, attachments, width, height) {
    const target = FRAMEBUFFER;
    const fb = gl.createFramebuffer();
    gl.bindFramebuffer(target, fb);
    width = width || gl.drawingBufferWidth;
    height = height || gl.drawingBufferHeight;
    attachments = attachments || defaultAttachments;
    const usedColorAttachmentsPoints = [];
    const framebufferInfo = {
        framebuffer: fb,
        attachments: [],
        width: width,
        height: height
    };
    attachments.forEach(function(attachmentOptions, i) {
        let attachment = attachmentOptions.attachment;
        const samples = attachmentOptions.samples;
        const format = attachmentOptions.format;
        let attachmentPoint = attachmentOptions.attachmentPoint || getAttachmentPointForFormat(format, attachmentOptions.internalFormat);
        if (!attachmentPoint) attachmentPoint = COLOR_ATTACHMENT0 + i;
        if (isColorAttachmentPoint(attachmentPoint)) usedColorAttachmentsPoints.push(attachmentPoint);
        if (!attachment) {
            if (samples !== undefined || isRenderbufferFormat(format)) {
                attachment = gl.createRenderbuffer();
                gl.bindRenderbuffer(RENDERBUFFER, attachment);
                if (samples > 1) gl.renderbufferStorageMultisample(RENDERBUFFER, samples, format, width, height);
                else gl.renderbufferStorage(RENDERBUFFER, format, width, height);
            } else {
                const textureOptions = Object.assign({}, attachmentOptions);
                textureOptions.width = width;
                textureOptions.height = height;
                if (textureOptions.auto === undefined) {
                    textureOptions.auto = false;
                    textureOptions.min = textureOptions.min || textureOptions.minMag || LINEAR$1;
                    textureOptions.mag = textureOptions.mag || textureOptions.minMag || LINEAR$1;
                    textureOptions.wrapS = textureOptions.wrapS || textureOptions.wrap || CLAMP_TO_EDGE$1;
                    textureOptions.wrapT = textureOptions.wrapT || textureOptions.wrap || CLAMP_TO_EDGE$1;
                }
                attachment = createTexture(gl, textureOptions);
            }
        }
        if (isRenderbuffer(gl, attachment)) gl.framebufferRenderbuffer(target, attachmentPoint, RENDERBUFFER, attachment);
        else if (isTexture(gl, attachment)) {
            if (attachmentOptions.layer !== undefined) gl.framebufferTextureLayer(target, attachmentPoint, attachment, attachmentOptions.level || 0, attachmentOptions.layer);
            else gl.framebufferTexture2D(target, attachmentPoint, attachmentOptions.target || TEXTURE_2D$2, attachment, attachmentOptions.level || 0);
        } else throw new Error("unknown attachment type");
        framebufferInfo.attachments.push(attachment);
    });
    if (gl.drawBuffers) gl.drawBuffers(usedColorAttachmentsPoints);
    return framebufferInfo;
}
/**
 * Resizes the attachments of a framebuffer.
 *
 * You need to pass in the same `attachments` as you passed in {@link module:twgl.createFramebufferInfo}
 * because TWGL has no idea the format/type of each attachment.
 *
 * The simplest usage
 *
 *     // create an RGBA/UNSIGNED_BYTE texture and DEPTH_STENCIL renderbuffer
 *     const fbi = twgl.createFramebufferInfo(gl);
 *
 *     ...
 *
 *     function render() {
 *       if (twgl.resizeCanvasToDisplaySize(gl.canvas)) {
 *         // resize the attachments
 *         twgl.resizeFramebufferInfo(gl, fbi);
 *       }
 *
 * More complex usage
 *
 *     // create an RGB565 renderbuffer and a STENCIL_INDEX8 renderbuffer
 *     const attachments = [
 *       { format: RGB565, mag: NEAREST },
 *       { format: STENCIL_INDEX8 },
 *     ]
 *     const fbi = twgl.createFramebufferInfo(gl, attachments);
 *
 *     ...
 *
 *     function render() {
 *       if (twgl.resizeCanvasToDisplaySize(gl.canvas)) {
 *         // resize the attachments to match
 *         twgl.resizeFramebufferInfo(gl, fbi, attachments);
 *       }
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.FramebufferInfo} framebufferInfo a framebufferInfo as returned from {@link module:twgl.createFramebufferInfo}.
 * @param {module:twgl.AttachmentOptions[]} [attachments] the same attachments options as passed to {@link module:twgl.createFramebufferInfo}.
 * @param {number} [width] the width for the attachments. Default = size of drawingBuffer
 * @param {number} [height] the height for the attachments. Default = size of drawingBuffer
 * @memberOf module:twgl/framebuffers
 */ function resizeFramebufferInfo(gl, framebufferInfo, attachments, width, height) {
    width = width || gl.drawingBufferWidth;
    height = height || gl.drawingBufferHeight;
    framebufferInfo.width = width;
    framebufferInfo.height = height;
    attachments = attachments || defaultAttachments;
    attachments.forEach(function(attachmentOptions, ndx) {
        const attachment = framebufferInfo.attachments[ndx];
        const format = attachmentOptions.format;
        const samples = attachmentOptions.samples;
        if (samples !== undefined || isRenderbuffer(gl, attachment)) {
            gl.bindRenderbuffer(RENDERBUFFER, attachment);
            if (samples > 1) gl.renderbufferStorageMultisample(RENDERBUFFER, samples, format, width, height);
            else gl.renderbufferStorage(RENDERBUFFER, format, width, height);
        } else if (isTexture(gl, attachment)) resizeTexture(gl, attachment, attachmentOptions, width, height);
        else throw new Error("unknown attachment type");
    });
}
/**
 * Binds a framebuffer
 *
 * This function pretty much solely exists because I spent hours
 * trying to figure out why something I wrote wasn't working only
 * to realize I forget to set the viewport dimensions.
 * My hope is this function will fix that.
 *
 * It is effectively the same as
 *
 *     gl.bindFramebuffer(gl.FRAMEBUFFER, someFramebufferInfo.framebuffer);
 *     gl.viewport(0, 0, someFramebufferInfo.width, someFramebufferInfo.height);
 *
 * @param {WebGLRenderingContext} gl the WebGLRenderingContext
 * @param {module:twgl.FramebufferInfo|null} [framebufferInfo] a framebufferInfo as returned from {@link module:twgl.createFramebufferInfo}.
 *   If falsy will bind the canvas.
 * @param {number} [target] The target. If not passed `gl.FRAMEBUFFER` will be used.
 * @memberOf module:twgl/framebuffers
 */ function bindFramebufferInfo(gl, framebufferInfo, target) {
    target = target || FRAMEBUFFER;
    if (framebufferInfo) {
        gl.bindFramebuffer(target, framebufferInfo.framebuffer);
        gl.viewport(0, 0, framebufferInfo.width, framebufferInfo.height);
    } else {
        gl.bindFramebuffer(target, null);
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
    }
}
var framebuffers = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    bindFramebufferInfo: bindFramebufferInfo,
    createFramebufferInfo: createFramebufferInfo,
    resizeFramebufferInfo: resizeFramebufferInfo
});
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */ /**
 * vertex array object related functions
 *
 * You should generally not need to use these functions. They are provided
 * for those cases where you're doing something out of the ordinary
 * and you need lower level access.
 *
 * For backward compatibility they are available at both `twgl.attributes` and `twgl`
 * itself
 *
 * See {@link module:twgl} for core functions
 *
 * @module twgl/vertexArrays
 */ const ELEMENT_ARRAY_BUFFER$2 = 0x8893;
/**
 * @typedef {Object} VertexArrayInfo
 * @property {number} numElements The number of elements to pass to `gl.drawArrays` or `gl.drawElements`.
 * @property {number} [elementType] The type of indices `UNSIGNED_BYTE`, `UNSIGNED_SHORT` etc..
 * @property {WebGLVertexArrayObject} [vertexArrayObject] a vertex array object
 * @memberOf module:twgl
 */ /**
 * Creates a VertexArrayInfo from a BufferInfo and one or more ProgramInfos
 *
 * This can be passed to {@link module:twgl.setBuffersAndAttributes} and to
 * {@link module:twgl:drawBufferInfo}.
 *
 * > **IMPORTANT:** Vertex Array Objects are **not** a direct analog for a BufferInfo. Vertex Array Objects
 *   assign buffers to specific attributes at creation time. That means they can only be used with programs
 *   who's attributes use the same attribute locations for the same purposes.
 *
 * > Bind your attribute locations by passing an array of attribute names to {@link module:twgl.createProgramInfo}
 *   or use WebGL 2's GLSL ES 3's `layout(location = <num>)` to make sure locations match.
 *
 * also
 *
 * > **IMPORTANT:** After calling twgl.setBuffersAndAttribute with a BufferInfo that uses a Vertex Array Object
 *   that Vertex Array Object will be bound. That means **ANY MANIPULATION OF ELEMENT_ARRAY_BUFFER or ATTRIBUTES**
 *   will affect the Vertex Array Object state.
 *
 * > Call `gl.bindVertexArray(null)` to get back manipulating the global attributes and ELEMENT_ARRAY_BUFFER.
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @param {module:twgl.ProgramInfo|module:twgl.ProgramInfo[]} programInfo a programInfo or array of programInfos
 * @param {module:twgl.BufferInfo} bufferInfo BufferInfo as returned from createBufferInfoFromArrays etc...
 *
 *    You need to make sure every attribute that will be used is bound. So for example assume shader 1
 *    uses attributes A, B, C and shader 2 uses attributes A, B, D. If you only pass in the programInfo
 *    for shader 1 then only attributes A, B, and C will have their attributes set because TWGL doesn't
 *    now attribute D's location.
 *
 *    So, you can pass in both shader 1 and shader 2's programInfo
 *
 * @return {module:twgl.VertexArrayInfo} The created VertexArrayInfo
 *
 * @memberOf module:twgl/vertexArrays
 */ function createVertexArrayInfo(gl, programInfos, bufferInfo) {
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    if (!programInfos.length) programInfos = [
        programInfos
    ];
    programInfos.forEach(function(programInfo) {
        setBuffersAndAttributes(gl, programInfo, bufferInfo);
    });
    gl.bindVertexArray(null);
    return {
        numElements: bufferInfo.numElements,
        elementType: bufferInfo.elementType,
        vertexArrayObject: vao
    };
}
/**
 * Creates a vertex array object and then sets the attributes on it
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext to use.
 * @param {Object.<string, function>} setters Attribute setters as returned from createAttributeSetters
 * @param {Object.<string, module:twgl.AttribInfo>} attribs AttribInfos mapped by attribute name.
 * @param {WebGLBuffer} [indices] an optional ELEMENT_ARRAY_BUFFER of indices
 *
 * @return {WebGLVertexArrayObject|null} The created WebGLVertexArrayObject
 *
 * @memberOf module:twgl/vertexArrays
 */ function createVAOAndSetAttributes(gl, setters, attribs, indices) {
    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    setAttributes(setters, attribs);
    if (indices) gl.bindBuffer(ELEMENT_ARRAY_BUFFER$2, indices);
    // We unbind this because otherwise any change to ELEMENT_ARRAY_BUFFER
    // like when creating buffers for other stuff will mess up this VAO's binding
    gl.bindVertexArray(null);
    return vao;
}
/**
 * Creates a vertex array object and then sets the attributes
 * on it
 *
 * @param {WebGLRenderingContext} gl The WebGLRenderingContext
 *        to use.
 * @param {Object.<string, function>| module:twgl.ProgramInfo} programInfo as returned from createProgramInfo or Attribute setters as returned from createAttributeSetters
 * @param {module:twgl.BufferInfo} bufferInfo BufferInfo as returned from createBufferInfoFromArrays etc...
 * @param {WebGLBuffer} [indices] an optional ELEMENT_ARRAY_BUFFER of indices
 *
 * @return {WebGLVertexArrayObject|null} The created WebGLVertexArrayObject
 *
 * @memberOf module:twgl/vertexArrays
 */ function createVAOFromBufferInfo(gl, programInfo, bufferInfo) {
    return createVAOAndSetAttributes(gl, programInfo.attribSetters || programInfo, bufferInfo.attribs, bufferInfo.indices);
}
var vertexArrays = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    createVertexArrayInfo: createVertexArrayInfo,
    createVAOAndSetAttributes: createVAOAndSetAttributes,
    createVAOFromBufferInfo: createVAOFromBufferInfo
});
/*
 * Copyright 2019 Gregg Tavares
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */ const defaults$2 = {
    addExtensionsToContext: true
};
/**
 * Various default settings for twgl.
 *
 * Note: You can call this any number of times. Example:
 *
 *     twgl.setDefaults({ textureColor: [1, 0, 0, 1] });
 *     twgl.setDefaults({ attribPrefix: 'a_' });
 *
 * is equivalent to
 *
 *     twgl.setDefaults({
 *       textureColor: [1, 0, 0, 1],
 *       attribPrefix: 'a_',
 *     });
 *
 * @typedef {Object} Defaults
 * @property {string} [attribPrefix] The prefix to stick on attributes
 *
 *   When writing shaders I prefer to name attributes with `a_`, uniforms with `u_` and varyings with `v_`
 *   as it makes it clear where they came from. But, when building geometry I prefer using un-prefixed names.
 *
 *   In other words I'll create arrays of geometry like this
 *
 *       const arrays = {
 *         position: ...
 *         normal: ...
 *         texcoord: ...
 *       };
 *
 *   But need those mapped to attributes and my attributes start with `a_`.
 *
 *   Default: `""`
 *
 * @property {number[]} [textureColor] Array of 4 values in the range 0 to 1
 *
 *   The default texture color is used when loading textures from
 *   urls. Because the URL will be loaded async we'd like to be
 *   able to use the texture immediately. By putting a 1x1 pixel
 *   color in the texture we can start using the texture before
 *   the URL has loaded.
 *
 *   Default: `[0.5, 0.75, 1, 1]`
 *
 * @property {string} [crossOrigin]
 *
 *   If not undefined sets the crossOrigin attribute on images
 *   that twgl creates when downloading images for textures.
 *
 *   Also see {@link module:twgl.TextureOptions}.
 *
 * @property {bool} [addExtensionsToContext]
 *
 *   If true, then, when twgl will try to add any supported WebGL extensions
 *   directly to the context under their normal GL names. For example
 *   if ANGLE_instances_arrays exists then twgl would enable it,
 *   add the functions `vertexAttribDivisor`, `drawArraysInstanced`,
 *   `drawElementsInstanced`, and the constant `VERTEX_ATTRIB_ARRAY_DIVISOR`
 *   to the `WebGLRenderingContext`.
 *
 * @memberOf module:twgl
 */ /**
 * Sets various defaults for twgl.
 *
 * In the interest of terseness which is kind of the point
 * of twgl I've integrated a few of the older functions here
 *
 * @param {module:twgl.Defaults} newDefaults The default settings.
 * @memberOf module:twgl
 */ function setDefaults$2(newDefaults) {
    copyExistingProperties(newDefaults, defaults$2);
    setDefaults(newDefaults); // eslint-disable-line
    setDefaults$1(newDefaults); // eslint-disable-line
}
const prefixRE = /^(.*?)_/;
function addExtensionToContext(gl, extensionName) {
    glEnumToString(gl, 0);
    const ext = gl.getExtension(extensionName);
    if (ext) {
        const enums = {};
        const fnSuffix = prefixRE.exec(extensionName)[1];
        const enumSuffix = "_" + fnSuffix;
        for(const key in ext){
            const value = ext[key];
            const isFunc = typeof value === "function";
            const suffix = isFunc ? fnSuffix : enumSuffix;
            let name = key;
            // examples of where this is not true are WEBGL_compressed_texture_s3tc
            // and WEBGL_compressed_texture_pvrtc
            if (key.endsWith(suffix)) name = key.substring(0, key.length - suffix.length);
            if (gl[name] !== undefined) {
                if (!isFunc && gl[name] !== value) warn(name, gl[name], value, key);
            } else if (isFunc) gl[name] = function(origFn) {
                return function() {
                    return origFn.apply(ext, arguments);
                };
            }(value);
            else {
                gl[name] = value;
                enums[name] = value;
            }
        }
        // pass the modified enums to glEnumToString
        enums.constructor = {
            name: ext.constructor.name
        };
        glEnumToString(enums, 0);
    }
    return ext;
}
/*
 * If you're wondering why the code doesn't just iterate
 * over all extensions using `gl.getExtensions` is that it's possible
 * some future extension is incompatible with this code. Rather than
 * have thing suddenly break it seems better to manually add to this
 * list.
 *
 */ const supportedExtensions = [
    "ANGLE_instanced_arrays",
    "EXT_blend_minmax",
    "EXT_color_buffer_float",
    "EXT_color_buffer_half_float",
    "EXT_disjoint_timer_query",
    "EXT_disjoint_timer_query_webgl2",
    "EXT_frag_depth",
    "EXT_sRGB",
    "EXT_shader_texture_lod",
    "EXT_texture_filter_anisotropic",
    "OES_element_index_uint",
    "OES_standard_derivatives",
    "OES_texture_float",
    "OES_texture_float_linear",
    "OES_texture_half_float",
    "OES_texture_half_float_linear",
    "OES_vertex_array_object",
    "WEBGL_color_buffer_float",
    "WEBGL_compressed_texture_atc",
    "WEBGL_compressed_texture_etc1",
    "WEBGL_compressed_texture_pvrtc",
    "WEBGL_compressed_texture_s3tc",
    "WEBGL_compressed_texture_s3tc_srgb",
    "WEBGL_depth_texture",
    "WEBGL_draw_buffers", 
];
/**
 * Attempts to enable all of the following extensions
 * and add their functions and constants to the
 * `WebGLRenderingContext` using their normal non-extension like names.
 *
 *      ANGLE_instanced_arrays
 *      EXT_blend_minmax
 *      EXT_color_buffer_float
 *      EXT_color_buffer_half_float
 *      EXT_disjoint_timer_query
 *      EXT_disjoint_timer_query_webgl2
 *      EXT_frag_depth
 *      EXT_sRGB
 *      EXT_shader_texture_lod
 *      EXT_texture_filter_anisotropic
 *      OES_element_index_uint
 *      OES_standard_derivatives
 *      OES_texture_float
 *      OES_texture_float_linear
 *      OES_texture_half_float
 *      OES_texture_half_float_linear
 *      OES_vertex_array_object
 *      WEBGL_color_buffer_float
 *      WEBGL_compressed_texture_atc
 *      WEBGL_compressed_texture_etc1
 *      WEBGL_compressed_texture_pvrtc
 *      WEBGL_compressed_texture_s3tc
 *      WEBGL_compressed_texture_s3tc_srgb
 *      WEBGL_depth_texture
 *      WEBGL_draw_buffers
 *
 * For example if `ANGLE_instanced_arrays` exists then the functions
 * `drawArraysInstanced`, `drawElementsInstanced`, `vertexAttribDivisor`
 * and the constant `VERTEX_ATTRIB_ARRAY_DIVISOR` are added to the
 * `WebGLRenderingContext`.
 *
 * Note that if you want to know if the extension exists you should
 * probably call `gl.getExtension` for each extension. Alternatively
 * you can check for the existence of the functions or constants that
 * are expected to be added. For example
 *
 *    if (gl.drawBuffers) {
 *      // Either WEBGL_draw_buffers was enabled OR you're running in WebGL2
 *      ....
 *
 * @param {WebGLRenderingContext} gl A WebGLRenderingContext
 * @memberOf module:twgl
 */ function addExtensionsToContext(gl) {
    for(let ii = 0; ii < supportedExtensions.length; ++ii)addExtensionToContext(gl, supportedExtensions[ii]);
}
/**
 * Creates a webgl context.
 * @param {HTMLCanvasElement} canvas The canvas tag to get
 *     context from. If one is not passed in one will be
 *     created.
 * @return {WebGLRenderingContext} The created context.
 * @private
 */ function create3DContext(canvas, opt_attribs) {
    const names = [
        "webgl",
        "experimental-webgl"
    ];
    let context = null;
    for(let ii = 0; ii < names.length; ++ii){
        context = canvas.getContext(names[ii], opt_attribs);
        if (context) {
            if (defaults$2.addExtensionsToContext) addExtensionsToContext(context);
            break;
        }
    }
    return context;
}
/**
 * Gets a WebGL1 context.
 *
 * Note: Will attempt to enable Vertex Array Objects
 * and add WebGL2 entry points. (unless you first set defaults with
 * `twgl.setDefaults({enableVertexArrayObjects: false})`;
 *
 * @param {HTMLCanvasElement} canvas a canvas element.
 * @param {WebGLContextAttributes} [opt_attribs] optional webgl context creation attributes
 * @return {WebGLRenderingContext} The created context.
 * @memberOf module:twgl
 * @deprecated
 * @private
 */ function getWebGLContext(canvas, opt_attribs) {
    const gl = create3DContext(canvas, opt_attribs);
    return gl;
}
/**
 * Creates a webgl context.
 *
 * Will return a WebGL2 context if possible.
 *
 * You can check if it's WebGL2 with
 *
 *     twgl.isWebGL2(gl);
 *
 * @param {HTMLCanvasElement} canvas The canvas tag to get
 *     context from. If one is not passed in one will be
 *     created.
 * @return {WebGLRenderingContext} The created context.
 */ function createContext(canvas, opt_attribs) {
    const names = [
        "webgl2",
        "webgl",
        "experimental-webgl"
    ];
    let context = null;
    for(let ii = 0; ii < names.length; ++ii){
        context = canvas.getContext(names[ii], opt_attribs);
        if (context) {
            if (defaults$2.addExtensionsToContext) addExtensionsToContext(context);
            break;
        }
    }
    return context;
}
/**
 * Gets a WebGL context.  Will create a WebGL2 context if possible.
 *
 * You can check if it's WebGL2 with
 *
 *    function isWebGL2(gl) {
 *      return gl.getParameter(gl.VERSION).indexOf("WebGL 2.0 ") == 0;
 *    }
 *
 * Note: For a WebGL1 context will attempt to enable Vertex Array Objects
 * and add WebGL2 entry points. (unless you first set defaults with
 * `twgl.setDefaults({enableVertexArrayObjects: false})`;
 *
 * @param {HTMLCanvasElement} canvas a canvas element.
 * @param {WebGLContextAttributes} [opt_attribs] optional webgl context creation attributes
 * @return {WebGLRenderingContext} The created context.
 * @memberOf module:twgl
 */ function getContext(canvas, opt_attribs) {
    const gl = createContext(canvas, opt_attribs);
    return gl;
}
/**
 * Resize a canvas to match the size it's displayed.
 * @param {HTMLCanvasElement} canvas The canvas to resize.
 * @param {number} [multiplier] So you can pass in `window.devicePixelRatio` or other scale value if you want to.
 * @return {boolean} true if the canvas was resized.
 * @memberOf module:twgl
 */ function resizeCanvasToDisplaySize(canvas, multiplier) {
    multiplier = multiplier || 1;
    multiplier = Math.max(0, multiplier);
    const width = canvas.clientWidth * multiplier | 0;
    const height = canvas.clientHeight * multiplier | 0;
    if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        return true;
    }
    return false;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"laygT":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"fGuat":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// lerp
parcelHelpers.export(exports, "lerp", ()=>lerp);
// clamp
parcelHelpers.export(exports, "clamp", ()=>clamp);
// map
parcelHelpers.export(exports, "map", ()=>map);
var _normalizeWheel = require("normalize-wheel");
var _normalizeWheelDefault = parcelHelpers.interopDefault(_normalizeWheel);
var _prefix = require("prefix");
var _prefixDefault = parcelHelpers.interopDefault(_prefix);
/**
 * @param {object} [parameters]
 * @param {string} [wrapper=['data-scroll']] Scrollable element
 * @param {number} [factor=1] Scroll power parameter
 * @param {boolean} [mouse=false] Scroll on mouse drag
 * @param {boolean} [speed=false] Calculates the speed of the scroll (accessed using - this.scroll.speed)
 * @param {boolean} [percentage=false] Calculates 0 to 1 percentage of scrolling page height
 * @param {boolean} [events=false] Emit Events - WIP (no events emitted currently)
 */ exports.default = class {
    constructor(config = {}){
        // 1. config
        const { wrapper ="[data-scroll]" , factor =0.5 , mouse =true , speed =true , percentage =true , events =false  } = config;
        this.wrapper = document.querySelector(wrapper);
        this.factor = factor;
        this.mouseDrive = mouse;
        this.shouldGetSpeed = speed;
        this.shouldGetPercentage = percentage;
        this.shouldEmitEvents = events;
        // 2. setup
        this.changeCss();
        this.position = 0;
        this.y = {
            current: 0,
            target: 0,
            last: 0,
            limit: 500
        };
        this.speed = 0;
        this.percentage = 0;
        // 3. utils
        this.transformPrefix = (0, _prefixDefault.default)("transform");
        new ResizeObserver((entry)=>this.onResize(entry[0].contentRect)).observe(this.wrapper);
        // 4. start
        this.init();
    }
    /**
   * Init and Destroy, Start and Stop
   */ init() {
        // wheel
        document.addEventListener("wheel", this.handleWheel.bind(this));
        if ("ontouchmove" in window) {
            this.touch = {
                isDown: false,
                down: 0,
                factor: this.factor * 0.2
            };
            window.addEventListener("touchstart", this.touchDown.bind(this));
            window.addEventListener("touchmove", this.touchMove.bind(this));
            window.addEventListener("touchend", this.touchUp.bind(this));
        } else if (this.mouseDrive) this.initMouse();
        this.start();
    }
    initMouse() {
        this.mouse = {
            isDown: false,
            down: 0,
            factor: this.factor * 3
        };
        window.addEventListener("mousedown", this.mouseDown.bind(this));
        window.addEventListener("mousemove", this.mouseMove.bind(this));
        window.addEventListener("mouseup", this.mouseUp.bind(this));
        window.addEventListener("mouseout", this.mouseUp.bind(this));
    }
    destroy() {
        document.removeEventListener("wheel", this.handleWheel.bind(this));
        if (this.mouseDrive) this.destroyMouse();
        this.stop();
    }
    destroyMouse() {
        window.removeEventListener("mousedown", this.mouseDown.bind(this));
        window.removeEventListener("mousemove", this.mouseMove.bind(this));
        window.removeEventListener("mouseup", this.mouseUp.bind(this));
    }
    start() {
        this.shouldScroll = true;
        this.raf();
    }
    stop() {
        this.shouldScroll = false;
    }
    /**
   * Utility methods
   */ onResize(data) {
        this.y.limit = data.height - window.innerHeight;
    }
    /**
   * ----------------  Wheel Events
   */ handleWheel(e) {
        const normal = (0, _normalizeWheelDefault.default)(e).spinY;
        this.y.target += normal * 30 * this.factor;
    }
    /**
   * ---------------- Mouse Events
   */ mouseDown(e) {
        if (e.which !== 1) return;
        this.mouse.isDown = true;
        this.mouse.down = e.pageY;
    }
    mouseUp() {
        // console.log("UP");
        this.mouse.isDown = false;
    }
    mouseMove(e) {
        if (!this.mouse.isDown) return;
        this.y.target += -e.movementY * this.mouse.factor;
    }
    /**
   * ----------------  Touch Events
   */ touchDown(e) {
        this.touch.isDown = true;
        this.touch.down = e.touches[0].clientY;
    }
    touchUp() {
        this.touch.isDown = false;
    }
    touchMove(e) {
        if (!this.touch.isDown) return;
        this.y.target += (this.touch.down - e.touches[0].clientY) * this.touch.factor;
    }
    /**
   * Loop!
   */ raf() {
        if (!this.shouldScroll) return;
        this.calc();
        if (this.shouldGetSpeed) this.getSpeed();
        if (this.shouldGetPercentage) this.getPercentage();
        window.requestAnimationFrame(this.raf.bind(this));
    }
    calc() {
        if (Math.abs(this.y.target - this.y.current) < 0.1) return;
        this.y.target = clamp(0, this.y.limit, this.y.target);
        this.y.current = lerp(this.y.current, this.y.target, 0.1);
        if (this.y.target < 0.01) this.y.target = 0;
        this.move();
    }
    move() {
        this.wrapper.style[this.transformPrefix] = `translateY(-${this.y.current}px)`;
    }
    getSpeed() {
        let speed = this.y.current - this.y.target;
        this.speed = -map(speed, -1000, 1000, -1, 1);
    }
    getPercentage() {
        this.percentage = this.y.current / this.y.limit;
    }
    /**
   * Utils and Fallbacks
   */ changeCss() {
        this.wrapper.style.draggable = "false";
        const parent = this.wrapper.parentElement;
        parent.overflow = "hidden";
        parent.style.position = "fixed";
        parent.style.width = "100%";
        parent.style.height = "100%";
    }
};
function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t;
}
function clamp(min, max, num) {
    return Math.min(Math.max(num, min), max);
}
function map(value, inLow, inHigh, outLow, outHigh) {
    return outLow + (outHigh - outLow) * (value - inLow) / (inHigh - inLow);
}

},{"normalize-wheel":"icHmS","prefix":"9vp1Q","@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"icHmS":[function(require,module,exports) {
module.exports = require("./src/normalizeWheel.js");

},{"./src/normalizeWheel.js":"4PvF8"}],"4PvF8":[function(require,module,exports) {
/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule normalizeWheel
 * @typechecks
 */ "use strict";
var UserAgent_DEPRECATED = require("./UserAgent_DEPRECATED");
var isEventSupported = require("./isEventSupported");
// Reasonable defaults
var PIXEL_STEP = 10;
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;
/**
 * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
 * complicated, thus this doc is long and (hopefully) detailed enough to answer
 * your questions.
 *
 * If you need to react to the mouse wheel in a predictable way, this code is
 * like your bestest friend. * hugs *
 *
 * As of today, there are 4 DOM event types you can listen to:
 *
 *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
 *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
 *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
 *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
 *
 * So what to do?  The is the best:
 *
 *   normalizeWheel.getEventType();
 *
 * In your event callback, use this code to get sane interpretation of the
 * deltas.  This code will return an object with properties:
 *
 *   spinX   -- normalized spin speed (use for zoom) - x plane
 *   spinY   -- " - y plane
 *   pixelX  -- normalized distance (to pixels) - x plane
 *   pixelY  -- " - y plane
 *
 * Wheel values are provided by the browser assuming you are using the wheel to
 * scroll a web page by a number of lines or pixels (or pages).  Values can vary
 * significantly on different platforms and browsers, forgetting that you can
 * scroll at different speeds.  Some devices (like trackpads) emit more events
 * at smaller increments with fine granularity, and some emit massive jumps with
 * linear speed or acceleration.
 *
 * This code does its best to normalize the deltas for you:
 *
 *   - spin is trying to normalize how far the wheel was spun (or trackpad
 *     dragged).  This is super useful for zoom support where you want to
 *     throw away the chunky scroll steps on the PC and make those equal to
 *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
 *     resolve a single slow step on a wheel to 1.
 *
 *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
 *     get the crazy differences between browsers, but at least it'll be in
 *     pixels!
 *
 *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
 *     should translate to positive value zooming IN, negative zooming OUT.
 *     This matches the newer 'wheel' event.
 *
 * Why are there spinX, spinY (or pixels)?
 *
 *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
 *     with a mouse.  It results in side-scrolling in the browser by default.
 *
 *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
 *
 *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
 *     probably is by browsers in conjunction with fancy 3D controllers .. but
 *     you know.
 *
 * Implementation info:
 *
 * Examples of 'wheel' event if you scroll slowly (down) by one step with an
 * average mouse:
 *
 *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
 *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
 *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
 *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
 *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
 *
 * On the trackpad:
 *
 *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
 *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
 *
 * On other/older browsers.. it's more complicated as there can be multiple and
 * also missing delta values.
 *
 * The 'wheel' event is more standard:
 *
 * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
 *
 * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
 * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
 * backward compatibility with older events.  Those other values help us
 * better normalize spin speed.  Example of what the browsers provide:
 *
 *                          | event.wheelDelta | event.detail
 *        ------------------+------------------+--------------
 *          Safari v5/OS X  |       -120       |       0
 *          Safari v5/Win7  |       -120       |       0
 *         Chrome v17/OS X  |       -120       |       0
 *         Chrome v17/Win7  |       -120       |       0
 *                IE9/Win7  |       -120       |   undefined
 *         Firefox v4/OS X  |     undefined    |       1
 *         Firefox v4/Win7  |     undefined    |       3
 *
 */ function normalizeWheel(/*object*/ event) /*object*/ {
    var sX = 0, sY = 0, pX = 0, pY = 0; // pixelX, pixelY
    // Legacy
    if ("detail" in event) sY = event.detail;
    if ("wheelDelta" in event) sY = -event.wheelDelta / 120;
    if ("wheelDeltaY" in event) sY = -event.wheelDeltaY / 120;
    if ("wheelDeltaX" in event) sX = -event.wheelDeltaX / 120;
    // side scrolling on FF with DOMMouseScroll
    if ("axis" in event && event.axis === event.HORIZONTAL_AXIS) {
        sX = sY;
        sY = 0;
    }
    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;
    if ("deltaY" in event) pY = event.deltaY;
    if ("deltaX" in event) pX = event.deltaX;
    if ((pX || pY) && event.deltaMode) {
        if (event.deltaMode == 1) {
            pX *= LINE_HEIGHT;
            pY *= LINE_HEIGHT;
        } else {
            pX *= PAGE_HEIGHT;
            pY *= PAGE_HEIGHT;
        }
    }
    // Fall-back if spin cannot be determined
    if (pX && !sX) sX = pX < 1 ? -1 : 1;
    if (pY && !sY) sY = pY < 1 ? -1 : 1;
    return {
        spinX: sX,
        spinY: sY,
        pixelX: pX,
        pixelY: pY
    };
}
/**
 * The best combination if you prefer spinX + spinY normalization.  It favors
 * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
 * 'wheel' event, making spin speed determination impossible.
 */ normalizeWheel.getEventType = function() /*string*/ {
    return UserAgent_DEPRECATED.firefox() ? "DOMMouseScroll" : isEventSupported("wheel") ? "wheel" : "mousewheel";
};
module.exports = normalizeWheel;

},{"./UserAgent_DEPRECATED":"32Ab3","./isEventSupported":"1xwWO"}],"32Ab3":[function(require,module,exports) {
/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule UserAgent_DEPRECATED
 */ /**
 *  Provides entirely client-side User Agent and OS detection. You should prefer
 *  the non-deprecated UserAgent module when possible, which exposes our
 *  authoritative server-side PHP-based detection to the client.
 *
 *  Usage is straightforward:
 *
 *    if (UserAgent_DEPRECATED.ie()) {
 *      //  IE
 *    }
 *
 *  You can also do version checks:
 *
 *    if (UserAgent_DEPRECATED.ie() >= 7) {
 *      //  IE7 or better
 *    }
 *
 *  The browser functions will return NaN if the browser does not match, so
 *  you can also do version compares the other way:
 *
 *    if (UserAgent_DEPRECATED.ie() < 7) {
 *      //  IE6 or worse
 *    }
 *
 *  Note that the version is a float and may include a minor version number,
 *  so you should always use range operators to perform comparisons, not
 *  strict equality.
 *
 *  **Note:** You should **strongly** prefer capability detection to browser
 *  version detection where it's reasonable:
 *
 *    http://www.quirksmode.org/js/support.html
 *
 *  Further, we have a large number of mature wrapper functions and classes
 *  which abstract away many browser irregularities. Check the documentation,
 *  grep for things, or ask on javascript@lists.facebook.com before writing yet
 *  another copy of "event || window.event".
 *
 */ var _populated = false;
// Browsers
var _ie, _firefox, _opera, _webkit, _chrome;
// Actual IE browser for compatibility mode
var _ie_real_version;
// Platforms
var _osx, _windows, _linux, _android;
// Architectures
var _win64;
// Devices
var _iphone, _ipad, _native;
var _mobile;
function _populate() {
    if (_populated) return;
    _populated = true;
    // To work around buggy JS libraries that can't handle multi-digit
    // version numbers, Opera 10's user agent string claims it's Opera
    // 9, then later includes a Version/X.Y field:
    //
    // Opera/9.80 (foo) Presto/2.2.15 Version/10.10
    var uas = navigator.userAgent;
    var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
    var os = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);
    _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
    _ipad = /\b(iP[ao]d)/.exec(uas);
    _android = /Android/i.exec(uas);
    _native = /FBAN\/\w+;/i.exec(uas);
    _mobile = /Mobile/i.exec(uas);
    // Note that the IE team blog would have you believe you should be checking
    // for 'Win64; x64'.  But MSDN then reveals that you can actually be coming
    // from either x64 or ia64;  so ultimately, you should just check for Win64
    // as in indicator of whether you're in 64-bit IE.  32-bit IE on 64-bit
    // Windows will send 'WOW64' instead.
    _win64 = !!/Win64/.exec(uas);
    if (agent) {
        _ie = agent[1] ? parseFloat(agent[1]) : agent[5] ? parseFloat(agent[5]) : NaN;
        // IE compatibility mode
        if (_ie && document && document.documentMode) _ie = document.documentMode;
        // grab the "true" ie version from the trident token if available
        var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
        _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;
        _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
        _opera = agent[3] ? parseFloat(agent[3]) : NaN;
        _webkit = agent[4] ? parseFloat(agent[4]) : NaN;
        if (_webkit) {
            // We do not add the regexp to the above test, because it will always
            // match 'safari' only since 'AppleWebKit' appears before 'Chrome' in
            // the userAgent string.
            agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
            _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
        } else _chrome = NaN;
    } else _ie = _firefox = _opera = _chrome = _webkit = NaN;
    if (os) {
        if (os[1]) {
            // Detect OS X version.  If no version number matches, set _osx to true.
            // Version examples:  10, 10_6_1, 10.7
            // Parses version number as a float, taking only first two sets of
            // digits.  If only one set of digits is found, returns just the major
            // version number.
            var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);
            _osx = ver ? parseFloat(ver[1].replace("_", ".")) : true;
        } else _osx = false;
        _windows = !!os[2];
        _linux = !!os[3];
    } else _osx = _windows = _linux = false;
}
var UserAgent_DEPRECATED = {
    /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */ ie: function() {
        return _populate() || _ie;
    },
    /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */ ieCompatibilityMode: function() {
        return _populate() || _ie_real_version > _ie;
    },
    /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */ ie64: function() {
        return UserAgent_DEPRECATED.ie() && _win64;
    },
    /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */ firefox: function() {
        return _populate() || _firefox;
    },
    /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */ opera: function() {
        return _populate() || _opera;
    },
    /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */ webkit: function() {
        return _populate() || _webkit;
    },
    /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */ safari: function() {
        return UserAgent_DEPRECATED.webkit();
    },
    /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */ chrome: function() {
        return _populate() || _chrome;
    },
    /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */ windows: function() {
        return _populate() || _windows;
    },
    /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */ osx: function() {
        return _populate() || _osx;
    },
    /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */ linux: function() {
        return _populate() || _linux;
    },
    /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */ iphone: function() {
        return _populate() || _iphone;
    },
    mobile: function() {
        return _populate() || _iphone || _ipad || _android || _mobile;
    },
    nativeApp: function() {
        // webviews inside of the native apps
        return _populate() || _native;
    },
    android: function() {
        return _populate() || _android;
    },
    ipad: function() {
        return _populate() || _ipad;
    }
};
module.exports = UserAgent_DEPRECATED;

},{}],"1xwWO":[function(require,module,exports) {
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */ "use strict";
var ExecutionEnvironment = require("./ExecutionEnvironment");
var useHasFeature;
if (ExecutionEnvironment.canUseDOM) useHasFeature = document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
// @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
document.implementation.hasFeature("", "") !== true;
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */ function isEventSupported(eventNameSuffix, capture) {
    if (!ExecutionEnvironment.canUseDOM || capture && !("addEventListener" in document)) return false;
    var eventName = "on" + eventNameSuffix;
    var isSupported = eventName in document;
    if (!isSupported) {
        var element = document.createElement("div");
        element.setAttribute(eventName, "return;");
        isSupported = typeof element[eventName] === "function";
    }
    if (!isSupported && useHasFeature && eventNameSuffix === "wheel") // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature("Events.wheel", "3.0");
    return isSupported;
}
module.exports = isEventSupported;

},{"./ExecutionEnvironment":"fXNnH"}],"fXNnH":[function(require,module,exports) {
/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */ /*jslint evil: true */ "use strict";
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */ var ExecutionEnvironment = {
    canUseDOM: canUseDOM,
    canUseWorkers: typeof Worker !== "undefined",
    canUseEventListeners: canUseDOM && !!(window.addEventListener || window.attachEvent),
    canUseViewport: canUseDOM && !!window.screen,
    isInWorker: !canUseDOM // For now, this is true - might change in the future.
};
module.exports = ExecutionEnvironment;

},{}],"9vp1Q":[function(require,module,exports) {
// check document first so it doesn't error in node.js
var style = typeof document != "undefined" ? document.createElement("p").style : {};
var prefixes = [
    "O",
    "ms",
    "Moz",
    "Webkit"
];
var upper = /([A-Z])/g;
var memo = {};
/**
 * prefix `key`
 *
 *   prefix('transform') // => WebkitTransform
 *
 * @param {String} key
 * @return {String}
 * @api public
 */ function prefix(key) {
    // Camel case
    key = key.replace(/-([a-z])/g, function(_, char) {
        return char.toUpperCase();
    });
    // Without prefix
    if (style[key] !== undefined) return key;
    // With prefix
    var Key = key.charAt(0).toUpperCase() + key.slice(1);
    var i = prefixes.length;
    while(i--){
        var name = prefixes[i] + Key;
        if (style[name] !== undefined) return name;
    }
    return key;
}
/**
 * Memoized version of `prefix`
 *
 * @param {String} key
 * @return {String}
 * @api public
 */ function prefixMemozied(key) {
    return key in memo ? memo[key] : memo[key] = prefix(key);
}
/**
 * Create a dashed prefix
 *
 * @param {String} key
 * @return {String}
 * @api public
 */ function prefixDashed(key) {
    key = prefix(key);
    if (upper.test(key)) {
        key = "-" + key.replace(upper, "-$1");
        upper.lastIndex = 0;
    }
    return key.toLowerCase();
}
module.exports = prefixMemozied;
module.exports.dash = prefixDashed;

},{}],"5Yi5Z":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _twglJs = require("twgl.js");
exports.default = class {
    constructor(gl, data = {
        z: -9,
        fov: 0.6,
        near: 1,
        far: 1024
    }){
        data.fov = degToRad(35);
        this.camera = data;
    // this.get(gl);
    }
    get(gl) {
        this.camera.mat = _twglJs.m4.translate(_twglJs.m4.perspective(this.camera.fov, gl.canvas.width / gl.canvas.height, this.camera.near, this.camera.far), [
            0,
            0,
            this.camera.z
        ]);
        return this.camera;
    }
};
function degToRad(d) {
    return d * Math.PI / 180;
}

},{"twgl.js":"3uqAP","@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"9wYh6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _lilGui = require("lil-gui");
var _lilGuiDefault = parcelHelpers.interopDefault(_lilGui);
var _gsap = require("gsap");
var _gsapDefault = parcelHelpers.interopDefault(_gsap);
// import Quad from "./mod/_quad";
var _dom = require("./mod/_dom");
var _domDefault = parcelHelpers.interopDefault(_dom);
exports.default = class {
    constructor(gl){
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
  */ create() {
        const gridQuads = [
            ...document.querySelectorAll("[data-quad-grid]")
        ];
        this.quadRefs = [
            ...document.querySelectorAll("[data-quad]")
        ];
        this.quads = this.quadRefs.map((quad, i)=>new (0, _domDefault.default)(this.gl, quad, gridQuads[i]));
    }
    render(t, y, speed) {
        if (this.quads) this.quads.forEach((quad)=>quad.render(t, y, {
                grid: this.ui.grid
            }));
    }
    resize(gl) {
        this.gl = gl;
        if (this.quads) this.quads.forEach((quad)=>quad.resize(this.gl));
    }
    /**
   * UI ops
   */ initUI() {
        const gridButton = document.querySelector('[data-ui="grid"]');
        this.gridDom = document.querySelector(".grid-w");
        gridButton.onclick = ()=>{
            // console.log("clicked GRID trigger");
            let val = this.ui.isGrid ? 0 : 1;
            this.ui.isGrid ? this.displayScrollUi(true) : this.displayScrollUi(false);
            this.ui.isGrid = this.ui.isGrid ? false : true;
            (0, _gsapDefault.default).to(this.ui, {
                grid: val,
                duration: 1,
                ease: "expo"
            });
        };
    }
    displayScrollUi(bool) {
        if (bool) {
            this.quadRefs.forEach((ref)=>ref.style.display = "none");
            this.gridDom.style.display = "flex";
            this.gridDom.style.zIndex = 1;
        } else {
            this.quadRefs.forEach((ref)=>ref.style.display = "block");
            this.gridDom.style.zIndex = -1;
            this.gridDom.style.display = "none";
        }
    }
};

},{"lil-gui":"fkEfG","gsap":"fPSuC","./mod/_dom":"9QdDV","@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"fkEfG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BooleanController", ()=>BooleanController);
parcelHelpers.export(exports, "ColorController", ()=>ColorController);
parcelHelpers.export(exports, "Controller", ()=>Controller);
parcelHelpers.export(exports, "FunctionController", ()=>FunctionController);
parcelHelpers.export(exports, "GUI", ()=>GUI);
parcelHelpers.export(exports, "NumberController", ()=>NumberController);
parcelHelpers.export(exports, "OptionController", ()=>OptionController);
parcelHelpers.export(exports, "StringController", ()=>StringController);
/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */ /**
 * Base class for all controllers.
 */ class Controller {
    constructor(parent, object, property, className, widgetTag = "div"){
        /**
		 * The GUI that contains this controller.
		 * @type {GUI}
		 */ this.parent = parent;
        /**
		 * The object this controller will modify.
		 * @type {object}
		 */ this.object = object;
        /**
		 * The name of the property to control.
		 * @type {string}
		 */ this.property = property;
        /**
		 * Used to determine if the controller is disabled.
		 * Use `controller.disable( true|false )` to modify this value
		 * @type {boolean}
		 */ this._disabled = false;
        /**
		 * Used to determine if the Controller is hidden.
		 * Use `controller.show()` or `controller.hide()` to change this.
		 * @type {boolean}
		 */ this._hidden = false;
        /**
		 * The value of `object[ property ]` when the controller was created.
		 * @type {any}
		 */ this.initialValue = this.getValue();
        /**
		 * The outermost container DOM element for this controller.
		 * @type {HTMLElement}
		 */ this.domElement = document.createElement("div");
        this.domElement.classList.add("controller");
        this.domElement.classList.add(className);
        /**
		 * The DOM element that contains the controller's name.
		 * @type {HTMLElement}
		 */ this.$name = document.createElement("div");
        this.$name.classList.add("name");
        Controller.nextNameID = Controller.nextNameID || 0;
        this.$name.id = `lil-gui-name-${++Controller.nextNameID}`;
        /**
		 * The DOM element that contains the controller's "widget" (which differs by controller type).
		 * @type {HTMLElement}
		 */ this.$widget = document.createElement(widgetTag);
        this.$widget.classList.add("widget");
        /**
		 * The DOM element that receives the disabled attribute when using disable()
		 * @type {HTMLElement}
		 */ this.$disable = this.$widget;
        this.domElement.appendChild(this.$name);
        this.domElement.appendChild(this.$widget);
        this.parent.children.push(this);
        this.parent.controllers.push(this);
        this.parent.$children.appendChild(this.domElement);
        this._listenCallback = this._listenCallback.bind(this);
        this.name(property);
    }
    /**
	 * Sets the name of the controller and its label in the GUI.
	 * @param {string} name
	 * @returns {this}
	 */ name(name) {
        /**
		 * The controller's name. Use `controller.name( 'Name' )` to modify this value.
		 * @type {string}
		 */ this._name = name;
        this.$name.innerHTML = name;
        return this;
    }
    /**
	 * Pass a function to be called whenever the value is modified by this controller.
	 * The function receives the new value as its first parameter. The value of `this` will be the
	 * controller.
	 * @param {Function} callback
	 * @returns {this}
	 * @example
	 * const controller = gui.add( object, 'property' );
	 *
	 * controller.onChange( function( v ) {
	 * 	console.log( 'The value is now ' + v );
	 * 	console.assert( this === controller );
	 * } );
	 */ onChange(callback) {
        /**
		 * Used to access the function bound to `onChange` events. Don't modify this value directly.
		 * Use the `controller.onChange( callback )` method instead.
		 * @type {Function}
		 */ this._onChange = callback;
        return this;
    }
    /**
	 * Calls the onChange methods of this controller and its parent GUI.
	 * @protected
	 */ _callOnChange() {
        this.parent._callOnChange(this);
        if (this._onChange !== undefined) this._onChange.call(this, this.getValue());
        this._changed = true;
    }
    /**
	 * Pass a function to be called after this controller has been modified and loses focus.
	 * @param {Function} callback
	 * @returns {this}
	 * @example
	 * const controller = gui.add( object, 'property' );
	 *
	 * controller.onFinishChange( function( v ) {
	 * 	console.log( 'Changes complete: ' + v );
	 * 	console.assert( this === controller );
	 * } );
	 */ onFinishChange(callback) {
        /**
		 * Used to access the function bound to `onFinishChange` events. Don't modify this value
		 * directly. Use the `controller.onFinishChange( callback )` method instead.
		 * @type {Function}
		 */ this._onFinishChange = callback;
        return this;
    }
    /**
	 * Should be called by Controller when its widgets lose focus.
	 * @protected
	 */ _callOnFinishChange() {
        if (this._changed) {
            this.parent._callOnFinishChange(this);
            if (this._onFinishChange !== undefined) this._onFinishChange.call(this, this.getValue());
        }
        this._changed = false;
    }
    /**
	 * Sets the controller back to its initial value.
	 * @returns {this}
	 */ reset() {
        this.setValue(this.initialValue);
        this._callOnFinishChange();
        return this;
    }
    /**
	 * Enables this controller.
	 * @param {boolean} enabled
	 * @returns {this}
	 * @example
	 * controller.enable();
	 * controller.enable( false ); // disable
	 * controller.enable( controller._disabled ); // toggle
	 */ enable(enabled = true) {
        return this.disable(!enabled);
    }
    /**
	 * Disables this controller.
	 * @param {boolean} disabled
	 * @returns {this}
	 * @example
	 * controller.disable();
	 * controller.disable( false ); // enable
	 * controller.disable( !controller._disabled ); // toggle
	 */ disable(disabled = true) {
        if (disabled === this._disabled) return this;
        this._disabled = disabled;
        this.domElement.classList.toggle("disabled", disabled);
        this.$disable.toggleAttribute("disabled", disabled);
        return this;
    }
    /**
	 * Shows the Controller after it's been hidden.
	 * @param {boolean} show
	 * @returns {this}
	 * @example
	 * controller.show();
	 * controller.show( false ); // hide
	 * controller.show( controller._hidden ); // toggle
	 */ show(show = true) {
        this._hidden = !show;
        this.domElement.style.display = this._hidden ? "none" : "";
        return this;
    }
    /**
	 * Hides the Controller.
	 * @returns {this}
	 */ hide() {
        return this.show(false);
    }
    /**
	 * Destroys this controller and replaces it with a new option controller. Provided as a more
	 * descriptive syntax for `gui.add`, but primarily for compatibility with dat.gui.
	 *
	 * Use caution, as this method will destroy old references to this controller. It will also
	 * change controller order if called out of sequence, moving the option controller to the end of
	 * the GUI.
	 * @example
	 * // safe usage
	 *
	 * gui.add( object1, 'property' ).options( [ 'a', 'b', 'c' ] );
	 * gui.add( object2, 'property' );
	 *
	 * // danger
	 *
	 * const c = gui.add( object1, 'property' );
	 * gui.add( object2, 'property' );
	 *
	 * c.options( [ 'a', 'b', 'c' ] );
	 * // controller is now at the end of the GUI even though it was added first
	 *
	 * assert( c.parent.children.indexOf( c ) === -1 )
	 * // c references a controller that no longer exists
	 *
	 * @param {object|Array} options
	 * @returns {Controller}
	 */ options(options) {
        const controller = this.parent.add(this.object, this.property, options);
        controller.name(this._name);
        this.destroy();
        return controller;
    }
    /**
	 * Sets the minimum value. Only works on number controllers.
	 * @param {number} min
	 * @returns {this}
	 */ min(min) {
        return this;
    }
    /**
	 * Sets the maximum value. Only works on number controllers.
	 * @param {number} max
	 * @returns {this}
	 */ max(max) {
        return this;
    }
    /**
	 * Values set by this controller will be rounded to multiples of `step`. Only works on number
	 * controllers.
	 * @param {number} step
	 * @returns {this}
	 */ step(step) {
        return this;
    }
    /**
	 * Rounds the displayed value to a fixed number of decimals, without affecting the actual value
	 * like `step()`. Only works on number controllers.
	 * @example
	 * gui.add( object, 'property' ).listen().decimals( 4 );
	 * @param {number} decimals
	 * @returns {this}
	 */ decimals(decimals) {
        return this;
    }
    /**
	 * Calls `updateDisplay()` every animation frame. Pass `false` to stop listening.
	 * @param {boolean} listen
	 * @returns {this}
	 */ listen(listen = true) {
        /**
		 * Used to determine if the controller is currently listening. Don't modify this value
		 * directly. Use the `controller.listen( true|false )` method instead.
		 * @type {boolean}
		 */ this._listening = listen;
        if (this._listenCallbackID !== undefined) {
            cancelAnimationFrame(this._listenCallbackID);
            this._listenCallbackID = undefined;
        }
        if (this._listening) this._listenCallback();
        return this;
    }
    _listenCallback() {
        this._listenCallbackID = requestAnimationFrame(this._listenCallback);
        // To prevent framerate loss, make sure the value has changed before updating the display.
        // Note: save() is used here instead of getValue() only because of ColorController. The !== operator
        // won't work for color objects or arrays, but ColorController.save() always returns a string.
        const curValue = this.save();
        if (curValue !== this._listenPrevValue) this.updateDisplay();
        this._listenPrevValue = curValue;
    }
    /**
	 * Returns `object[ property ]`.
	 * @returns {any}
	 */ getValue() {
        return this.object[this.property];
    }
    /**
	 * Sets the value of `object[ property ]`, invokes any `onChange` handlers and updates the display.
	 * @param {any} value
	 * @returns {this}
	 */ setValue(value) {
        this.object[this.property] = value;
        this._callOnChange();
        this.updateDisplay();
        return this;
    }
    /**
	 * Updates the display to keep it in sync with the current value. Useful for updating your
	 * controllers when their values have been modified outside of the GUI.
	 * @returns {this}
	 */ updateDisplay() {
        return this;
    }
    load(value) {
        this.setValue(value);
        this._callOnFinishChange();
        return this;
    }
    save() {
        return this.getValue();
    }
    /**
	 * Destroys this controller and removes it from the parent GUI.
	 */ destroy() {
        this.listen(false);
        this.parent.children.splice(this.parent.children.indexOf(this), 1);
        this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1);
        this.parent.$children.removeChild(this.domElement);
    }
}
class BooleanController extends Controller {
    constructor(parent, object, property){
        super(parent, object, property, "boolean", "label");
        this.$input = document.createElement("input");
        this.$input.setAttribute("type", "checkbox");
        this.$input.setAttribute("aria-labelledby", this.$name.id);
        this.$widget.appendChild(this.$input);
        this.$input.addEventListener("change", ()=>{
            this.setValue(this.$input.checked);
            this._callOnFinishChange();
        });
        this.$disable = this.$input;
        this.updateDisplay();
    }
    updateDisplay() {
        this.$input.checked = this.getValue();
        return this;
    }
}
function normalizeColorString(string) {
    let match, result;
    if (match = string.match(/(#|0x)?([a-f0-9]{6})/i)) result = match[2];
    else if (match = string.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/)) result = parseInt(match[1]).toString(16).padStart(2, 0) + parseInt(match[2]).toString(16).padStart(2, 0) + parseInt(match[3]).toString(16).padStart(2, 0);
    else if (match = string.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) result = match[1] + match[1] + match[2] + match[2] + match[3] + match[3];
    if (result) return "#" + result;
    return false;
}
const STRING = {
    isPrimitive: true,
    match: (v)=>typeof v === "string",
    fromHexString: normalizeColorString,
    toHexString: normalizeColorString
};
const INT = {
    isPrimitive: true,
    match: (v)=>typeof v === "number",
    fromHexString: (string)=>parseInt(string.substring(1), 16),
    toHexString: (value)=>"#" + value.toString(16).padStart(6, 0)
};
const ARRAY = {
    isPrimitive: false,
    match: Array.isArray,
    fromHexString (string, target, rgbScale = 1) {
        const int = INT.fromHexString(string);
        target[0] = (int >> 16 & 255) / 255 * rgbScale;
        target[1] = (int >> 8 & 255) / 255 * rgbScale;
        target[2] = (int & 255) / 255 * rgbScale;
    },
    toHexString ([r, g, b], rgbScale = 1) {
        rgbScale = 255 / rgbScale;
        const int = r * rgbScale << 16 ^ g * rgbScale << 8 ^ b * rgbScale << 0;
        return INT.toHexString(int);
    }
};
const OBJECT = {
    isPrimitive: false,
    match: (v)=>Object(v) === v,
    fromHexString (string, target, rgbScale = 1) {
        const int = INT.fromHexString(string);
        target.r = (int >> 16 & 255) / 255 * rgbScale;
        target.g = (int >> 8 & 255) / 255 * rgbScale;
        target.b = (int & 255) / 255 * rgbScale;
    },
    toHexString ({ r , g , b  }, rgbScale = 1) {
        rgbScale = 255 / rgbScale;
        const int = r * rgbScale << 16 ^ g * rgbScale << 8 ^ b * rgbScale << 0;
        return INT.toHexString(int);
    }
};
const FORMATS = [
    STRING,
    INT,
    ARRAY,
    OBJECT
];
function getColorFormat(value) {
    return FORMATS.find((format)=>format.match(value));
}
class ColorController extends Controller {
    constructor(parent, object, property, rgbScale){
        super(parent, object, property, "color");
        this.$input = document.createElement("input");
        this.$input.setAttribute("type", "color");
        this.$input.setAttribute("tabindex", -1);
        this.$input.setAttribute("aria-labelledby", this.$name.id);
        this.$text = document.createElement("input");
        this.$text.setAttribute("type", "text");
        this.$text.setAttribute("spellcheck", "false");
        this.$text.setAttribute("aria-labelledby", this.$name.id);
        this.$display = document.createElement("div");
        this.$display.classList.add("display");
        this.$display.appendChild(this.$input);
        this.$widget.appendChild(this.$display);
        this.$widget.appendChild(this.$text);
        this._format = getColorFormat(this.initialValue);
        this._rgbScale = rgbScale;
        this._initialValueHexString = this.save();
        this._textFocused = false;
        this.$input.addEventListener("input", ()=>{
            this._setValueFromHexString(this.$input.value);
        });
        this.$input.addEventListener("blur", ()=>{
            this._callOnFinishChange();
        });
        this.$text.addEventListener("input", ()=>{
            const tryParse = normalizeColorString(this.$text.value);
            if (tryParse) this._setValueFromHexString(tryParse);
        });
        this.$text.addEventListener("focus", ()=>{
            this._textFocused = true;
            this.$text.select();
        });
        this.$text.addEventListener("blur", ()=>{
            this._textFocused = false;
            this.updateDisplay();
            this._callOnFinishChange();
        });
        this.$disable = this.$text;
        this.updateDisplay();
    }
    reset() {
        this._setValueFromHexString(this._initialValueHexString);
        return this;
    }
    _setValueFromHexString(value) {
        if (this._format.isPrimitive) {
            const newValue = this._format.fromHexString(value);
            this.setValue(newValue);
        } else {
            this._format.fromHexString(value, this.getValue(), this._rgbScale);
            this._callOnChange();
            this.updateDisplay();
        }
    }
    save() {
        return this._format.toHexString(this.getValue(), this._rgbScale);
    }
    load(value) {
        this._setValueFromHexString(value);
        this._callOnFinishChange();
        return this;
    }
    updateDisplay() {
        this.$input.value = this._format.toHexString(this.getValue(), this._rgbScale);
        if (!this._textFocused) this.$text.value = this.$input.value.substring(1);
        this.$display.style.backgroundColor = this.$input.value;
        return this;
    }
}
class FunctionController extends Controller {
    constructor(parent, object, property){
        super(parent, object, property, "function");
        // Buttons are the only case where widget contains name
        this.$button = document.createElement("button");
        this.$button.appendChild(this.$name);
        this.$widget.appendChild(this.$button);
        this.$button.addEventListener("click", (e)=>{
            e.preventDefault();
            this.getValue().call(this.object);
        });
        // enables :active pseudo class on mobile
        this.$button.addEventListener("touchstart", ()=>{}, {
            passive: true
        });
        this.$disable = this.$button;
    }
}
class NumberController extends Controller {
    constructor(parent, object, property, min, max, step){
        super(parent, object, property, "number");
        this._initInput();
        this.min(min);
        this.max(max);
        const stepExplicit = step !== undefined;
        this.step(stepExplicit ? step : this._getImplicitStep(), stepExplicit);
        this.updateDisplay();
    }
    decimals(decimals) {
        this._decimals = decimals;
        this.updateDisplay();
        return this;
    }
    min(min) {
        this._min = min;
        this._onUpdateMinMax();
        return this;
    }
    max(max) {
        this._max = max;
        this._onUpdateMinMax();
        return this;
    }
    step(step, explicit = true) {
        this._step = step;
        this._stepExplicit = explicit;
        return this;
    }
    updateDisplay() {
        const value = this.getValue();
        if (this._hasSlider) {
            let percent = (value - this._min) / (this._max - this._min);
            percent = Math.max(0, Math.min(percent, 1));
            this.$fill.style.width = percent * 100 + "%";
        }
        if (!this._inputFocused) this.$input.value = this._decimals === undefined ? value : value.toFixed(this._decimals);
        return this;
    }
    _initInput() {
        this.$input = document.createElement("input");
        this.$input.setAttribute("type", "number");
        this.$input.setAttribute("step", "any");
        this.$input.setAttribute("aria-labelledby", this.$name.id);
        this.$widget.appendChild(this.$input);
        this.$disable = this.$input;
        const onInput = ()=>{
            let value = parseFloat(this.$input.value);
            if (isNaN(value)) return;
            if (this._stepExplicit) value = this._snap(value);
            this.setValue(this._clamp(value));
        };
        // Keys & mouse wheel
        // ---------------------------------------------------------------------
        const increment = (delta)=>{
            const value = parseFloat(this.$input.value);
            if (isNaN(value)) return;
            this._snapClampSetValue(value + delta);
            // Force the input to updateDisplay when it's focused
            this.$input.value = this.getValue();
        };
        const onKeyDown = (e)=>{
            if (e.code === "Enter") this.$input.blur();
            if (e.code === "ArrowUp") {
                e.preventDefault();
                increment(this._step * this._arrowKeyMultiplier(e));
            }
            if (e.code === "ArrowDown") {
                e.preventDefault();
                increment(this._step * this._arrowKeyMultiplier(e) * -1);
            }
        };
        const onWheel = (e)=>{
            if (this._inputFocused) {
                e.preventDefault();
                increment(this._step * this._normalizeMouseWheel(e));
            }
        };
        // Vertical drag
        // ---------------------------------------------------------------------
        let testingForVerticalDrag = false, initClientX, initClientY, prevClientY, initValue, dragDelta;
        // Once the mouse is dragged more than DRAG_THRESH px on any axis, we decide
        // on the user's intent: horizontal means highlight, vertical means drag.
        const DRAG_THRESH = 5;
        const onMouseDown = (e)=>{
            initClientX = e.clientX;
            initClientY = prevClientY = e.clientY;
            testingForVerticalDrag = true;
            initValue = this.getValue();
            dragDelta = 0;
            window.addEventListener("mousemove", onMouseMove);
            window.addEventListener("mouseup", onMouseUp);
        };
        const onMouseMove = (e)=>{
            if (testingForVerticalDrag) {
                const dx = e.clientX - initClientX;
                const dy = e.clientY - initClientY;
                if (Math.abs(dy) > DRAG_THRESH) {
                    e.preventDefault();
                    this.$input.blur();
                    testingForVerticalDrag = false;
                    this._setDraggingStyle(true, "vertical");
                } else if (Math.abs(dx) > DRAG_THRESH) onMouseUp();
            }
            // This isn't an else so that the first move counts towards dragDelta
            if (!testingForVerticalDrag) {
                const dy = e.clientY - prevClientY;
                dragDelta -= dy * this._step * this._arrowKeyMultiplier(e);
                // Clamp dragDelta so we don't have 'dead space' after dragging past bounds.
                // We're okay with the fact that bounds can be undefined here.
                if (initValue + dragDelta > this._max) dragDelta = this._max - initValue;
                else if (initValue + dragDelta < this._min) dragDelta = this._min - initValue;
                this._snapClampSetValue(initValue + dragDelta);
            }
            prevClientY = e.clientY;
        };
        const onMouseUp = ()=>{
            this._setDraggingStyle(false, "vertical");
            this._callOnFinishChange();
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
        };
        // Focus state & onFinishChange
        // ---------------------------------------------------------------------
        const onFocus = ()=>{
            this._inputFocused = true;
        };
        const onBlur = ()=>{
            this._inputFocused = false;
            this.updateDisplay();
            this._callOnFinishChange();
        };
        this.$input.addEventListener("input", onInput);
        this.$input.addEventListener("keydown", onKeyDown);
        this.$input.addEventListener("wheel", onWheel, {
            passive: false
        });
        this.$input.addEventListener("mousedown", onMouseDown);
        this.$input.addEventListener("focus", onFocus);
        this.$input.addEventListener("blur", onBlur);
    }
    _initSlider() {
        this._hasSlider = true;
        // Build DOM
        // ---------------------------------------------------------------------
        this.$slider = document.createElement("div");
        this.$slider.classList.add("slider");
        this.$fill = document.createElement("div");
        this.$fill.classList.add("fill");
        this.$slider.appendChild(this.$fill);
        this.$widget.insertBefore(this.$slider, this.$input);
        this.domElement.classList.add("hasSlider");
        // Map clientX to value
        // ---------------------------------------------------------------------
        const map = (v, a, b, c, d)=>{
            return (v - a) / (b - a) * (d - c) + c;
        };
        const setValueFromX = (clientX)=>{
            const rect = this.$slider.getBoundingClientRect();
            let value = map(clientX, rect.left, rect.right, this._min, this._max);
            this._snapClampSetValue(value);
        };
        // Mouse drag
        // ---------------------------------------------------------------------
        const mouseDown = (e)=>{
            this._setDraggingStyle(true);
            setValueFromX(e.clientX);
            window.addEventListener("mousemove", mouseMove);
            window.addEventListener("mouseup", mouseUp);
        };
        const mouseMove = (e)=>{
            setValueFromX(e.clientX);
        };
        const mouseUp = ()=>{
            this._callOnFinishChange();
            this._setDraggingStyle(false);
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseup", mouseUp);
        };
        // Touch drag
        // ---------------------------------------------------------------------
        let testingForScroll = false, prevClientX, prevClientY;
        const beginTouchDrag = (e)=>{
            e.preventDefault();
            this._setDraggingStyle(true);
            setValueFromX(e.touches[0].clientX);
            testingForScroll = false;
        };
        const onTouchStart = (e)=>{
            if (e.touches.length > 1) return;
            // If we're in a scrollable container, we should wait for the first
            // touchmove to see if the user is trying to slide or scroll.
            if (this._hasScrollBar) {
                prevClientX = e.touches[0].clientX;
                prevClientY = e.touches[0].clientY;
                testingForScroll = true;
            } else // Otherwise, we can set the value straight away on touchstart.
            beginTouchDrag(e);
            window.addEventListener("touchmove", onTouchMove, {
                passive: false
            });
            window.addEventListener("touchend", onTouchEnd);
        };
        const onTouchMove = (e)=>{
            if (testingForScroll) {
                const dx = e.touches[0].clientX - prevClientX;
                const dy = e.touches[0].clientY - prevClientY;
                if (Math.abs(dx) > Math.abs(dy)) // We moved horizontally, set the value and stop checking.
                beginTouchDrag(e);
                else {
                    // This was, in fact, an attempt to scroll. Abort.
                    window.removeEventListener("touchmove", onTouchMove);
                    window.removeEventListener("touchend", onTouchEnd);
                }
            } else {
                e.preventDefault();
                setValueFromX(e.touches[0].clientX);
            }
        };
        const onTouchEnd = ()=>{
            this._callOnFinishChange();
            this._setDraggingStyle(false);
            window.removeEventListener("touchmove", onTouchMove);
            window.removeEventListener("touchend", onTouchEnd);
        };
        // Mouse wheel
        // ---------------------------------------------------------------------
        // We have to use a debounced function to call onFinishChange because
        // there's no way to tell when the user is "done" mouse-wheeling.
        const callOnFinishChange = this._callOnFinishChange.bind(this);
        const WHEEL_DEBOUNCE_TIME = 400;
        let wheelFinishChangeTimeout;
        const onWheel = (e)=>{
            // ignore vertical wheels if there's a scrollbar
            const isVertical = Math.abs(e.deltaX) < Math.abs(e.deltaY);
            if (isVertical && this._hasScrollBar) return;
            e.preventDefault();
            // set value
            const delta = this._normalizeMouseWheel(e) * this._step;
            this._snapClampSetValue(this.getValue() + delta);
            // force the input to updateDisplay when it's focused
            this.$input.value = this.getValue();
            // debounce onFinishChange
            clearTimeout(wheelFinishChangeTimeout);
            wheelFinishChangeTimeout = setTimeout(callOnFinishChange, WHEEL_DEBOUNCE_TIME);
        };
        this.$slider.addEventListener("mousedown", mouseDown);
        this.$slider.addEventListener("touchstart", onTouchStart, {
            passive: false
        });
        this.$slider.addEventListener("wheel", onWheel, {
            passive: false
        });
    }
    _setDraggingStyle(active, axis = "horizontal") {
        if (this.$slider) this.$slider.classList.toggle("active", active);
        document.body.classList.toggle("lil-gui-dragging", active);
        document.body.classList.toggle(`lil-gui-${axis}`, active);
    }
    _getImplicitStep() {
        if (this._hasMin && this._hasMax) return (this._max - this._min) / 1000;
        return 0.1;
    }
    _onUpdateMinMax() {
        if (!this._hasSlider && this._hasMin && this._hasMax) {
            // If this is the first time we're hearing about min and max
            // and we haven't explicitly stated what our step is, let's
            // update that too.
            if (!this._stepExplicit) this.step(this._getImplicitStep(), false);
            this._initSlider();
            this.updateDisplay();
        }
    }
    _normalizeMouseWheel(e) {
        let { deltaX , deltaY  } = e;
        // Safari and Chrome report weird non-integral values for a notched wheel,
        // but still expose actual lines scrolled via wheelDelta. Notched wheels
        // should behave the same way as arrow keys.
        if (Math.floor(e.deltaY) !== e.deltaY && e.wheelDelta) {
            deltaX = 0;
            deltaY = -e.wheelDelta / 120;
            deltaY *= this._stepExplicit ? 1 : 10;
        }
        const wheel = deltaX + -deltaY;
        return wheel;
    }
    _arrowKeyMultiplier(e) {
        let mult = this._stepExplicit ? 1 : 10;
        if (e.shiftKey) mult *= 10;
        else if (e.altKey) mult /= 10;
        return mult;
    }
    _snap(value) {
        // This would be the logical way to do things, but floating point errors.
        // return Math.round( value / this._step ) * this._step;
        // Using inverse step solves a lot of them, but not all
        // const inverseStep = 1 / this._step;
        // return Math.round( value * inverseStep ) / inverseStep;
        // Not happy about this, but haven't seen it break.
        const r = Math.round(value / this._step) * this._step;
        return parseFloat(r.toPrecision(15));
    }
    _clamp(value) {
        // either condition is false if min or max is undefined
        if (value < this._min) value = this._min;
        if (value > this._max) value = this._max;
        return value;
    }
    _snapClampSetValue(value) {
        this.setValue(this._clamp(this._snap(value)));
    }
    get _hasScrollBar() {
        const root = this.parent.root.$children;
        return root.scrollHeight > root.clientHeight;
    }
    get _hasMin() {
        return this._min !== undefined;
    }
    get _hasMax() {
        return this._max !== undefined;
    }
}
class OptionController extends Controller {
    constructor(parent, object, property, options){
        super(parent, object, property, "option");
        this.$select = document.createElement("select");
        this.$select.setAttribute("aria-labelledby", this.$name.id);
        this.$display = document.createElement("div");
        this.$display.classList.add("display");
        this._values = Array.isArray(options) ? options : Object.values(options);
        this._names = Array.isArray(options) ? options : Object.keys(options);
        this._names.forEach((name)=>{
            const $option = document.createElement("option");
            $option.innerHTML = name;
            this.$select.appendChild($option);
        });
        this.$select.addEventListener("change", ()=>{
            this.setValue(this._values[this.$select.selectedIndex]);
            this._callOnFinishChange();
        });
        this.$select.addEventListener("focus", ()=>{
            this.$display.classList.add("focus");
        });
        this.$select.addEventListener("blur", ()=>{
            this.$display.classList.remove("focus");
        });
        this.$widget.appendChild(this.$select);
        this.$widget.appendChild(this.$display);
        this.$disable = this.$select;
        this.updateDisplay();
    }
    updateDisplay() {
        const value = this.getValue();
        const index = this._values.indexOf(value);
        this.$select.selectedIndex = index;
        this.$display.innerHTML = index === -1 ? value : this._names[index];
        return this;
    }
}
class StringController extends Controller {
    constructor(parent, object, property){
        super(parent, object, property, "string");
        this.$input = document.createElement("input");
        this.$input.setAttribute("type", "text");
        this.$input.setAttribute("aria-labelledby", this.$name.id);
        this.$input.addEventListener("input", ()=>{
            this.setValue(this.$input.value);
        });
        this.$input.addEventListener("keydown", (e)=>{
            if (e.code === "Enter") this.$input.blur();
        });
        this.$input.addEventListener("blur", ()=>{
            this._callOnFinishChange();
        });
        this.$widget.appendChild(this.$input);
        this.$disable = this.$input;
        this.updateDisplay();
    }
    updateDisplay() {
        this.$input.value = this.getValue();
        return this;
    }
}
const stylesheet = `.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;
function _injectStyles(cssContent) {
    const injected = document.createElement("style");
    injected.innerHTML = cssContent;
    const before = document.querySelector("head link[rel=stylesheet], head style");
    if (before) document.head.insertBefore(injected, before);
    else document.head.appendChild(injected);
}
let stylesInjected = false;
class GUI {
    /**
	 * Creates a panel that holds controllers.
	 * @example
	 * new GUI();
	 * new GUI( { container: document.getElementById( 'custom' ) } );
	 *
	 * @param {object} [options]
	 * @param {boolean} [options.autoPlace=true]
	 * Adds the GUI to `document.body` and fixes it to the top right of the page.
	 *
	 * @param {HTMLElement} [options.container]
	 * Adds the GUI to this DOM element. Overrides `autoPlace`.
	 *
	 * @param {number} [options.width=245]
	 * Width of the GUI in pixels, usually set when name labels become too long. Note that you can make
	 * name labels wider in CSS with `.lil‑gui { ‑‑name‑width: 55% }`
	 *
	 * @param {string} [options.title=Controls]
	 * Name to display in the title bar.
	 *
	 * @param {boolean} [options.injectStyles=true]
	 * Injects the default stylesheet into the page if this is the first GUI.
	 * Pass `false` to use your own stylesheet.
	 *
	 * @param {number} [options.touchStyles=true]
	 * Makes controllers larger on touch devices. Pass `false` to disable touch styles.
	 *
	 * @param {GUI} [options.parent]
	 * Adds this GUI as a child in another GUI. Usually this is done for you by `addFolder()`.
	 *
	 */ constructor({ parent , autoPlace =parent === undefined , container , width , title ="Controls" , injectStyles =true , touchStyles =true  } = {}){
        /**
		 * The GUI containing this folder, or `undefined` if this is the root GUI.
		 * @type {GUI}
		 */ this.parent = parent;
        /**
		 * The top level GUI containing this folder, or `this` if this is the root GUI.
		 * @type {GUI}
		 */ this.root = parent ? parent.root : this;
        /**
		 * The list of controllers and folders contained by this GUI.
		 * @type {Array<GUI|Controller>}
		 */ this.children = [];
        /**
		 * The list of controllers contained by this GUI.
		 * @type {Array<Controller>}
		 */ this.controllers = [];
        /**
		 * The list of folders contained by this GUI.
		 * @type {Array<GUI>}
		 */ this.folders = [];
        /**
		 * Used to determine if the GUI is closed. Use `gui.open()` or `gui.close()` to change this.
		 * @type {boolean}
		 */ this._closed = false;
        /**
		 * Used to determine if the GUI is hidden. Use `gui.show()` or `gui.hide()` to change this.
		 * @type {boolean}
		 */ this._hidden = false;
        /**
		 * The outermost container element.
		 * @type {HTMLElement}
		 */ this.domElement = document.createElement("div");
        this.domElement.classList.add("lil-gui");
        /**
		 * The DOM element that contains the title.
		 * @type {HTMLElement}
		 */ this.$title = document.createElement("div");
        this.$title.classList.add("title");
        this.$title.setAttribute("role", "button");
        this.$title.setAttribute("aria-expanded", true);
        this.$title.setAttribute("tabindex", 0);
        this.$title.addEventListener("click", ()=>this.openAnimated(this._closed));
        this.$title.addEventListener("keydown", (e)=>{
            if (e.code === "Enter" || e.code === "Space") {
                e.preventDefault();
                this.$title.click();
            }
        });
        // enables :active pseudo class on mobile
        this.$title.addEventListener("touchstart", ()=>{}, {
            passive: true
        });
        /**
		 * The DOM element that contains children.
		 * @type {HTMLElement}
		 */ this.$children = document.createElement("div");
        this.$children.classList.add("children");
        this.domElement.appendChild(this.$title);
        this.domElement.appendChild(this.$children);
        this.title(title);
        if (touchStyles) this.domElement.classList.add("allow-touch-styles");
        if (this.parent) {
            this.parent.children.push(this);
            this.parent.folders.push(this);
            this.parent.$children.appendChild(this.domElement);
            // Stop the constructor early, everything onward only applies to root GUI's
            return;
        }
        this.domElement.classList.add("root");
        // Inject stylesheet if we haven't done that yet
        if (!stylesInjected && injectStyles) {
            _injectStyles(stylesheet);
            stylesInjected = true;
        }
        if (container) container.appendChild(this.domElement);
        else if (autoPlace) {
            this.domElement.classList.add("autoPlace");
            document.body.appendChild(this.domElement);
        }
        if (width) this.domElement.style.setProperty("--width", width + "px");
        // Don't fire global key events while typing in the GUI:
        this.domElement.addEventListener("keydown", (e)=>e.stopPropagation());
        this.domElement.addEventListener("keyup", (e)=>e.stopPropagation());
    }
    /**
	 * Adds a controller to the GUI, inferring controller type using the `typeof` operator.
	 * @example
	 * gui.add( object, 'property' );
	 * gui.add( object, 'number', 0, 100, 1 );
	 * gui.add( object, 'options', [ 1, 2, 3 ] );
	 *
	 * @param {object} object The object the controller will modify.
	 * @param {string} property Name of the property to control.
	 * @param {number|object|Array} [$1] Minimum value for number controllers, or the set of
	 * selectable values for a dropdown.
	 * @param {number} [max] Maximum value for number controllers.
	 * @param {number} [step] Step value for number controllers.
	 * @returns {Controller}
	 */ add(object, property, $1, max, step) {
        if (Object($1) === $1) return new OptionController(this, object, property, $1);
        const initialValue = object[property];
        switch(typeof initialValue){
            case "number":
                return new NumberController(this, object, property, $1, max, step);
            case "boolean":
                return new BooleanController(this, object, property);
            case "string":
                return new StringController(this, object, property);
            case "function":
                return new FunctionController(this, object, property);
        }
        console.error(`gui.add failed
	property:`, property, `
	object:`, object, `
	value:`, initialValue);
    }
    /**
	 * Adds a color controller to the GUI.
	 * @example
	 * params = {
	 * 	cssColor: '#ff00ff',
	 * 	rgbColor: { r: 0, g: 0.2, b: 0.4 },
	 * 	customRange: [ 0, 127, 255 ],
	 * };
	 *
	 * gui.addColor( params, 'cssColor' );
	 * gui.addColor( params, 'rgbColor' );
	 * gui.addColor( params, 'customRange', 255 );
	 *
	 * @param {object} object The object the controller will modify.
	 * @param {string} property Name of the property to control.
	 * @param {number} rgbScale Maximum value for a color channel when using an RGB color. You may
	 * need to set this to 255 if your colors are too bright.
	 * @returns {Controller}
	 */ addColor(object, property, rgbScale = 1) {
        return new ColorController(this, object, property, rgbScale);
    }
    /**
	 * Adds a folder to the GUI, which is just another GUI. This method returns
	 * the nested GUI so you can add controllers to it.
	 * @example
	 * const folder = gui.addFolder( 'Position' );
	 * folder.add( position, 'x' );
	 * folder.add( position, 'y' );
	 * folder.add( position, 'z' );
	 *
	 * @param {string} title Name to display in the folder's title bar.
	 * @returns {GUI}
	 */ addFolder(title) {
        return new GUI({
            parent: this,
            title
        });
    }
    /**
	 * Recalls values that were saved with `gui.save()`.
	 * @param {object} obj
	 * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
	 * @returns {this}
	 */ load(obj, recursive = true) {
        if (obj.controllers) this.controllers.forEach((c)=>{
            if (c instanceof FunctionController) return;
            if (c._name in obj.controllers) c.load(obj.controllers[c._name]);
        });
        if (recursive && obj.folders) this.folders.forEach((f)=>{
            if (f._title in obj.folders) f.load(obj.folders[f._title]);
        });
        return this;
    }
    /**
	 * Returns an object mapping controller names to values. The object can be passed to `gui.load()` to
	 * recall these values.
	 * @example
	 * {
	 * 	controllers: {
	 * 		prop1: 1,
	 * 		prop2: 'value',
	 * 		...
	 * 	},
	 * 	folders: {
	 * 		folderName1: { controllers, folders },
	 * 		folderName2: { controllers, folders }
	 * 		...
	 * 	}
	 * }
	 *
	 * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
	 * @returns {object}
	 */ save(recursive = true) {
        const obj = {
            controllers: {},
            folders: {}
        };
        this.controllers.forEach((c)=>{
            if (c instanceof FunctionController) return;
            if (c._name in obj.controllers) throw new Error(`Cannot save GUI with duplicate property "${c._name}"`);
            obj.controllers[c._name] = c.save();
        });
        if (recursive) this.folders.forEach((f)=>{
            if (f._title in obj.folders) throw new Error(`Cannot save GUI with duplicate folder "${f._title}"`);
            obj.folders[f._title] = f.save();
        });
        return obj;
    }
    /**
	 * Opens a GUI or folder. GUI and folders are open by default.
	 * @param {boolean} open Pass false to close
	 * @returns {this}
	 * @example
	 * gui.open(); // open
	 * gui.open( false ); // close
	 * gui.open( gui._closed ); // toggle
	 */ open(open = true) {
        this._closed = !open;
        this.$title.setAttribute("aria-expanded", !this._closed);
        this.domElement.classList.toggle("closed", this._closed);
        return this;
    }
    /**
	 * Closes the GUI.
	 * @returns {this}
	 */ close() {
        return this.open(false);
    }
    /**
	 * Shows the GUI after it's been hidden.
	 * @param {boolean} show
	 * @returns {this}
	 * @example
	 * gui.show();
	 * gui.show( false ); // hide
	 * gui.show( gui._hidden ); // toggle
	 */ show(show = true) {
        this._hidden = !show;
        this.domElement.style.display = this._hidden ? "none" : "";
        return this;
    }
    /**
	 * Hides the GUI.
	 * @returns {this}
	 */ hide() {
        return this.show(false);
    }
    openAnimated(open = true) {
        // set state immediately
        this._closed = !open;
        this.$title.setAttribute("aria-expanded", !this._closed);
        // wait for next frame to measure $children
        requestAnimationFrame(()=>{
            // explicitly set initial height for transition
            const initialHeight = this.$children.clientHeight;
            this.$children.style.height = initialHeight + "px";
            this.domElement.classList.add("transition");
            const onTransitionEnd = (e)=>{
                if (e.target !== this.$children) return;
                this.$children.style.height = "";
                this.domElement.classList.remove("transition");
                this.$children.removeEventListener("transitionend", onTransitionEnd);
            };
            this.$children.addEventListener("transitionend", onTransitionEnd);
            // todo: this is wrong if children's scrollHeight makes for a gui taller than maxHeight
            const targetHeight = !open ? 0 : this.$children.scrollHeight;
            this.domElement.classList.toggle("closed", !open);
            requestAnimationFrame(()=>{
                this.$children.style.height = targetHeight + "px";
            });
        });
        return this;
    }
    /**
	 * Change the title of this GUI.
	 * @param {string} title
	 * @returns {this}
	 */ title(title) {
        /**
		 * Current title of the GUI. Use `gui.title( 'Title' )` to modify this value.
		 * @type {string}
		 */ this._title = title;
        this.$title.innerHTML = title;
        return this;
    }
    /**
	 * Resets all controllers to their initial values.
	 * @param {boolean} recursive Pass false to exclude folders descending from this GUI.
	 * @returns {this}
	 */ reset(recursive = true) {
        const controllers = recursive ? this.controllersRecursive() : this.controllers;
        controllers.forEach((c)=>c.reset());
        return this;
    }
    /**
	 * Pass a function to be called whenever a controller in this GUI changes.
	 * @param {function({object:object, property:string, value:any, controller:Controller})} callback
	 * @returns {this}
	 * @example
	 * gui.onChange( event => {
	 * 	event.object     // object that was modified
	 * 	event.property   // string, name of property
	 * 	event.value      // new value of controller
	 * 	event.controller // controller that was modified
	 * } );
	 */ onChange(callback) {
        /**
		 * Used to access the function bound to `onChange` events. Don't modify this value
		 * directly. Use the `gui.onChange( callback )` method instead.
		 * @type {Function}
		 */ this._onChange = callback;
        return this;
    }
    _callOnChange(controller) {
        if (this.parent) this.parent._callOnChange(controller);
        if (this._onChange !== undefined) this._onChange.call(this, {
            object: controller.object,
            property: controller.property,
            value: controller.getValue(),
            controller
        });
    }
    /**
	 * Pass a function to be called whenever a controller in this GUI has finished changing.
	 * @param {function({object:object, property:string, value:any, controller:Controller})} callback
	 * @returns {this}
	 * @example
	 * gui.onFinishChange( event => {
	 * 	event.object     // object that was modified
	 * 	event.property   // string, name of property
	 * 	event.value      // new value of controller
	 * 	event.controller // controller that was modified
	 * } );
	 */ onFinishChange(callback) {
        /**
		 * Used to access the function bound to `onFinishChange` events. Don't modify this value
		 * directly. Use the `gui.onFinishChange( callback )` method instead.
		 * @type {Function}
		 */ this._onFinishChange = callback;
        return this;
    }
    _callOnFinishChange(controller) {
        if (this.parent) this.parent._callOnFinishChange(controller);
        if (this._onFinishChange !== undefined) this._onFinishChange.call(this, {
            object: controller.object,
            property: controller.property,
            value: controller.getValue(),
            controller
        });
    }
    /**
	 * Destroys all DOM elements and event listeners associated with this GUI
	 */ destroy() {
        if (this.parent) {
            this.parent.children.splice(this.parent.children.indexOf(this), 1);
            this.parent.folders.splice(this.parent.folders.indexOf(this), 1);
        }
        if (this.domElement.parentElement) this.domElement.parentElement.removeChild(this.domElement);
        Array.from(this.children).forEach((c)=>c.destroy());
    }
    /**
	 * Returns an array of controllers contained by this GUI and its descendents.
	 * @returns {Controller[]}
	 */ controllersRecursive() {
        let controllers = Array.from(this.controllers);
        this.folders.forEach((f)=>{
            controllers = controllers.concat(f.controllersRecursive());
        });
        return controllers;
    }
    /**
	 * Returns an array of folders contained by this GUI and its descendents.
	 * @returns {GUI[]}
	 */ foldersRecursive() {
        let folders = Array.from(this.folders);
        this.folders.forEach((f)=>{
            folders = folders.concat(f.foldersRecursive());
        });
        return folders;
    }
}
exports.default = GUI;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"fPSuC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gsap", ()=>gsapWithCSS);
parcelHelpers.export(exports, "default", ()=>gsapWithCSS);
parcelHelpers.export(exports, "CSSPlugin", ()=>(0, _csspluginJs.CSSPlugin));
parcelHelpers.export(exports, "TweenMax", ()=>TweenMaxWithCSS);
parcelHelpers.export(exports, "TweenLite", ()=>(0, _gsapCoreJs.TweenLite));
parcelHelpers.export(exports, "TimelineMax", ()=>(0, _gsapCoreJs.TimelineMax));
parcelHelpers.export(exports, "TimelineLite", ()=>(0, _gsapCoreJs.TimelineLite));
parcelHelpers.export(exports, "Power0", ()=>(0, _gsapCoreJs.Power0));
parcelHelpers.export(exports, "Power1", ()=>(0, _gsapCoreJs.Power1));
parcelHelpers.export(exports, "Power2", ()=>(0, _gsapCoreJs.Power2));
parcelHelpers.export(exports, "Power3", ()=>(0, _gsapCoreJs.Power3));
parcelHelpers.export(exports, "Power4", ()=>(0, _gsapCoreJs.Power4));
parcelHelpers.export(exports, "Linear", ()=>(0, _gsapCoreJs.Linear));
parcelHelpers.export(exports, "Quad", ()=>(0, _gsapCoreJs.Quad));
parcelHelpers.export(exports, "Cubic", ()=>(0, _gsapCoreJs.Cubic));
parcelHelpers.export(exports, "Quart", ()=>(0, _gsapCoreJs.Quart));
parcelHelpers.export(exports, "Quint", ()=>(0, _gsapCoreJs.Quint));
parcelHelpers.export(exports, "Strong", ()=>(0, _gsapCoreJs.Strong));
parcelHelpers.export(exports, "Elastic", ()=>(0, _gsapCoreJs.Elastic));
parcelHelpers.export(exports, "Back", ()=>(0, _gsapCoreJs.Back));
parcelHelpers.export(exports, "SteppedEase", ()=>(0, _gsapCoreJs.SteppedEase));
parcelHelpers.export(exports, "Bounce", ()=>(0, _gsapCoreJs.Bounce));
parcelHelpers.export(exports, "Sine", ()=>(0, _gsapCoreJs.Sine));
parcelHelpers.export(exports, "Expo", ()=>(0, _gsapCoreJs.Expo));
parcelHelpers.export(exports, "Circ", ()=>(0, _gsapCoreJs.Circ));
var _gsapCoreJs = require("./gsap-core.js");
var _csspluginJs = require("./CSSPlugin.js");
var gsapWithCSS = (0, _gsapCoreJs.gsap).registerPlugin((0, _csspluginJs.CSSPlugin)) || (0, _gsapCoreJs.gsap), // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;

},{"./gsap-core.js":"05eeC","./CSSPlugin.js":"l02JQ","@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"05eeC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GSCache", ()=>GSCache);
parcelHelpers.export(exports, "Animation", ()=>Animation);
parcelHelpers.export(exports, "Timeline", ()=>Timeline);
parcelHelpers.export(exports, "Tween", ()=>Tween);
parcelHelpers.export(exports, "PropTween", ()=>PropTween);
parcelHelpers.export(exports, "gsap", ()=>gsap);
parcelHelpers.export(exports, "Power0", ()=>Power0);
parcelHelpers.export(exports, "Power1", ()=>Power1);
parcelHelpers.export(exports, "Power2", ()=>Power2);
parcelHelpers.export(exports, "Power3", ()=>Power3);
parcelHelpers.export(exports, "Power4", ()=>Power4);
parcelHelpers.export(exports, "Linear", ()=>Linear);
parcelHelpers.export(exports, "Quad", ()=>Quad);
parcelHelpers.export(exports, "Cubic", ()=>Cubic);
parcelHelpers.export(exports, "Quart", ()=>Quart);
parcelHelpers.export(exports, "Quint", ()=>Quint);
parcelHelpers.export(exports, "Strong", ()=>Strong);
parcelHelpers.export(exports, "Elastic", ()=>Elastic);
parcelHelpers.export(exports, "Back", ()=>Back);
parcelHelpers.export(exports, "SteppedEase", ()=>SteppedEase);
parcelHelpers.export(exports, "Bounce", ()=>Bounce);
parcelHelpers.export(exports, "Sine", ()=>Sine);
parcelHelpers.export(exports, "Expo", ()=>Expo);
parcelHelpers.export(exports, "Circ", ()=>Circ);
parcelHelpers.export(exports, "TweenMax", ()=>Tween) //export some internal methods/orojects for use in CSSPlugin so that we can externalize that file and allow custom builds that exclude it.
;
parcelHelpers.export(exports, "TweenLite", ()=>Tween);
parcelHelpers.export(exports, "TimelineMax", ()=>Timeline);
parcelHelpers.export(exports, "TimelineLite", ()=>Timeline);
parcelHelpers.export(exports, "default", ()=>gsap);
parcelHelpers.export(exports, "wrap", ()=>wrap);
parcelHelpers.export(exports, "wrapYoyo", ()=>wrapYoyo);
parcelHelpers.export(exports, "distribute", ()=>distribute);
parcelHelpers.export(exports, "random", ()=>random);
parcelHelpers.export(exports, "snap", ()=>snap);
parcelHelpers.export(exports, "normalize", ()=>normalize);
parcelHelpers.export(exports, "getUnit", ()=>getUnit);
parcelHelpers.export(exports, "clamp", ()=>clamp);
parcelHelpers.export(exports, "splitColor", ()=>splitColor);
parcelHelpers.export(exports, "toArray", ()=>toArray);
parcelHelpers.export(exports, "selector", ()=>selector);
parcelHelpers.export(exports, "mapRange", ()=>mapRange);
parcelHelpers.export(exports, "pipe", ()=>pipe);
parcelHelpers.export(exports, "unitize", ()=>unitize);
parcelHelpers.export(exports, "interpolate", ()=>interpolate);
parcelHelpers.export(exports, "shuffle", ()=>shuffle);
parcelHelpers.export(exports, "_getProperty", ()=>_getProperty);
parcelHelpers.export(exports, "_numExp", ()=>_numExp);
parcelHelpers.export(exports, "_numWithUnitExp", ()=>_numWithUnitExp);
parcelHelpers.export(exports, "_isString", ()=>_isString);
parcelHelpers.export(exports, "_isUndefined", ()=>_isUndefined);
parcelHelpers.export(exports, "_renderComplexString", ()=>_renderComplexString);
parcelHelpers.export(exports, "_relExp", ()=>_relExp);
parcelHelpers.export(exports, "_setDefaults", ()=>_setDefaults);
parcelHelpers.export(exports, "_removeLinkedListItem", ()=>_removeLinkedListItem);
parcelHelpers.export(exports, "_forEachName", ()=>_forEachName);
parcelHelpers.export(exports, "_sortPropTweensByPriority", ()=>_sortPropTweensByPriority);
parcelHelpers.export(exports, "_colorStringFilter", ()=>_colorStringFilter);
parcelHelpers.export(exports, "_replaceRandom", ()=>_replaceRandom);
parcelHelpers.export(exports, "_checkPlugin", ()=>_checkPlugin);
parcelHelpers.export(exports, "_plugins", ()=>_plugins);
parcelHelpers.export(exports, "_ticker", ()=>_ticker);
parcelHelpers.export(exports, "_config", ()=>_config);
parcelHelpers.export(exports, "_roundModifier", ()=>_roundModifier);
parcelHelpers.export(exports, "_round", ()=>_round);
parcelHelpers.export(exports, "_missingPlugin", ()=>_missingPlugin);
parcelHelpers.export(exports, "_getSetter", ()=>_getSetter);
parcelHelpers.export(exports, "_getCache", ()=>_getCache);
parcelHelpers.export(exports, "_colorExp", ()=>_colorExp);
parcelHelpers.export(exports, "_parseRelative", ()=>_parseRelative);
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _inheritsLoose(subClass, superClass) {
    subClass.prototype = Object.create(superClass.prototype);
    subClass.prototype.constructor = subClass;
    subClass.__proto__ = superClass;
}
/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var _config = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, _defaults = {
    duration: .5,
    overwrite: false,
    delay: 0
}, _suppressOverwrites, _bigNum = 1e8, _tinyNum = 1 / _bigNum, _2PI = Math.PI * 2, _HALF_PI = _2PI / 4, _gsID = 0, _sqrt = Math.sqrt, _cos = Math.cos, _sin = Math.sin, _isString = function _isString(value) {
    return typeof value === "string";
}, _isFunction = function _isFunction(value) {
    return typeof value === "function";
}, _isNumber = function _isNumber(value) {
    return typeof value === "number";
}, _isUndefined = function _isUndefined(value) {
    return typeof value === "undefined";
}, _isObject = function _isObject(value) {
    return typeof value === "object";
}, _isNotFalse = function _isNotFalse(value) {
    return value !== false;
}, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _isFuncOrString = function _isFuncOrString(value) {
    return _isFunction(value) || _isString(value);
}, _isTypedArray = typeof ArrayBuffer === "function" && ArrayBuffer.isView || function() {}, // note: IE10 has ArrayBuffer, but NOT ArrayBuffer.isView().
_isArray = Array.isArray, _strictNumExp = /(?:-?\.?\d|\.)+/gi, //only numbers (including negatives and decimals) but NOT relative values.
_numExp = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, //finds any numbers, including ones that start with += or -=, negative numbers, and ones in scientific notation like 1e-8.
_numWithUnitExp = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, _complexStringNumExp = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, //duplicate so that while we're looping through matches from exec(), it doesn't contaminate the lastIndex of _numExp which we use to search for colors too.
_relExp = /[+-]=-?[.\d]+/, _delimitedValueExp = /[^,'"\[\]\s]+/gi, // previously /[#\-+.]*\b[a-z\d\-=+%.]+/gi but didn't catch special characters.
_unitExp = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, _globalTimeline, _win, _coreInitted, _doc, _globals = {}, _installScope = {}, _coreReady, _install = function _install(scope) {
    return (_installScope = _merge(scope, _globals)) && gsap;
}, _missingPlugin = function _missingPlugin(property, value) {
    return console.warn("Invalid property", property, "set to", value, "Missing plugin? gsap.registerPlugin()");
}, _warn = function _warn(message, suppress) {
    return !suppress && console.warn(message);
}, _addGlobal = function _addGlobal(name, obj) {
    return name && (_globals[name] = obj) && _installScope && (_installScope[name] = obj) || _globals;
}, _emptyFunc = function _emptyFunc() {
    return 0;
}, _reservedProps = {}, _lazyTweens = [], _lazyLookup = {}, _lastRenderedFrame, _plugins = {}, _effects = {}, _nextGCFrame = 30, _harnessPlugins = [], _callbackNames = "", _harness = function _harness(targets) {
    var target = targets[0], harnessPlugin, i;
    _isObject(target) || _isFunction(target) || (targets = [
        targets
    ]);
    if (!(harnessPlugin = (target._gsap || {}).harness)) {
        // find the first target with a harness. We assume targets passed into an animation will be of similar type, meaning the same kind of harness can be used for them all (performance optimization)
        i = _harnessPlugins.length;
        while((i--) && !_harnessPlugins[i].targetTest(target));
        harnessPlugin = _harnessPlugins[i];
    }
    i = targets.length;
    while(i--)targets[i] && (targets[i]._gsap || (targets[i]._gsap = new GSCache(targets[i], harnessPlugin))) || targets.splice(i, 1);
    return targets;
}, _getCache = function _getCache(target) {
    return target._gsap || _harness(toArray(target))[0]._gsap;
}, _getProperty = function _getProperty(target, property, v) {
    return (v = target[property]) && _isFunction(v) ? target[property]() : _isUndefined(v) && target.getAttribute && target.getAttribute(property) || v;
}, _forEachName = function _forEachName(names, func) {
    return (names = names.split(",")).forEach(func) || names;
}, //split a comma-delimited list of names into an array, then run a forEach() function and return the split array (this is just a way to consolidate/shorten some code).
_round = function _round(value) {
    return Math.round(value * 100000) / 100000 || 0;
}, _roundPrecise = function _roundPrecise(value) {
    return Math.round(value * 10000000) / 10000000 || 0;
}, // increased precision mostly for timing values.
_parseRelative = function _parseRelative(start, value) {
    var operator = value.charAt(0), end = parseFloat(value.substr(2));
    start = parseFloat(start);
    return operator === "+" ? start + end : operator === "-" ? start - end : operator === "*" ? start * end : start / end;
}, _arrayContainsAny = function _arrayContainsAny(toSearch, toFind) {
    //searches one array to find matches for any of the items in the toFind array. As soon as one is found, it returns true. It does NOT return all the matches; it's simply a boolean search.
    var l = toFind.length, i = 0;
    for(; toSearch.indexOf(toFind[i]) < 0 && ++i < l;);
    return i < l;
}, _lazyRender = function _lazyRender() {
    var l = _lazyTweens.length, a = _lazyTweens.slice(0), i, tween;
    _lazyLookup = {};
    _lazyTweens.length = 0;
    for(i = 0; i < l; i++){
        tween = a[i];
        tween && tween._lazy && (tween.render(tween._lazy[0], tween._lazy[1], true)._lazy = 0);
    }
}, _lazySafeRender = function _lazySafeRender(animation, time, suppressEvents, force) {
    _lazyTweens.length && _lazyRender();
    animation.render(time, suppressEvents, force);
    _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
}, _numericIfPossible = function _numericIfPossible(value) {
    var n = parseFloat(value);
    return (n || n === 0) && (value + "").match(_delimitedValueExp).length < 2 ? n : _isString(value) ? value.trim() : value;
}, _passThrough = function _passThrough(p) {
    return p;
}, _setDefaults = function _setDefaults(obj, defaults) {
    for(var p in defaults)p in obj || (obj[p] = defaults[p]);
    return obj;
}, _setKeyframeDefaults = function _setKeyframeDefaults(excludeDuration) {
    return function(obj, defaults) {
        for(var p in defaults)p in obj || p === "duration" && excludeDuration || p === "ease" || (obj[p] = defaults[p]);
    };
}, _merge = function _merge(base, toMerge) {
    for(var p in toMerge)base[p] = toMerge[p];
    return base;
}, _mergeDeep = function _mergeDeep1(base, toMerge) {
    for(var p in toMerge)p !== "__proto__" && p !== "constructor" && p !== "prototype" && (base[p] = _isObject(toMerge[p]) ? _mergeDeep1(base[p] || (base[p] = {}), toMerge[p]) : toMerge[p]);
    return base;
}, _copyExcluding = function _copyExcluding(obj, excluding) {
    var copy = {}, p;
    for(p in obj)p in excluding || (copy[p] = obj[p]);
    return copy;
}, _inheritDefaults = function _inheritDefaults(vars) {
    var parent = vars.parent || _globalTimeline, func = vars.keyframes ? _setKeyframeDefaults(_isArray(vars.keyframes)) : _setDefaults;
    if (_isNotFalse(vars.inherit)) while(parent){
        func(vars, parent.vars.defaults);
        parent = parent.parent || parent._dp;
    }
    return vars;
}, _arraysMatch = function _arraysMatch(a1, a2) {
    var i = a1.length, match = i === a2.length;
    while(match && i-- && a1[i] === a2[i]);
    return i < 0;
}, _addLinkedListItem = function _addLinkedListItem(parent, child, firstProp, lastProp, sortBy) {
    if (firstProp === void 0) firstProp = "_first";
    if (lastProp === void 0) lastProp = "_last";
    var prev = parent[lastProp], t;
    if (sortBy) {
        t = child[sortBy];
        while(prev && prev[sortBy] > t)prev = prev._prev;
    }
    if (prev) {
        child._next = prev._next;
        prev._next = child;
    } else {
        child._next = parent[firstProp];
        parent[firstProp] = child;
    }
    if (child._next) child._next._prev = child;
    else parent[lastProp] = child;
    child._prev = prev;
    child.parent = child._dp = parent;
    return child;
}, _removeLinkedListItem = function _removeLinkedListItem(parent, child, firstProp, lastProp) {
    if (firstProp === void 0) firstProp = "_first";
    if (lastProp === void 0) lastProp = "_last";
    var prev = child._prev, next = child._next;
    if (prev) prev._next = next;
    else if (parent[firstProp] === child) parent[firstProp] = next;
    if (next) next._prev = prev;
    else if (parent[lastProp] === child) parent[lastProp] = prev;
    child._next = child._prev = child.parent = null; // don't delete the _dp just so we can revert if necessary. But parent should be null to indicate the item isn't in a linked list.
}, _removeFromParent = function _removeFromParent(child, onlyIfParentHasAutoRemove) {
    child.parent && (!onlyIfParentHasAutoRemove || child.parent.autoRemoveChildren) && child.parent.remove(child);
    child._act = 0;
}, _uncache = function _uncache(animation, child) {
    if (animation && (!child || child._end > animation._dur || child._start < 0)) {
        // performance optimization: if a child animation is passed in we should only uncache if that child EXTENDS the animation (its end time is beyond the end)
        var a = animation;
        while(a){
            a._dirty = 1;
            a = a.parent;
        }
    }
    return animation;
}, _recacheAncestors = function _recacheAncestors(animation) {
    var parent = animation.parent;
    while(parent && parent.parent){
        //sometimes we must force a re-sort of all children and update the duration/totalDuration of all ancestor timelines immediately in case, for example, in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
        parent._dirty = 1;
        parent.totalDuration();
        parent = parent.parent;
    }
    return animation;
}, _hasNoPausedAncestors = function _hasNoPausedAncestors1(animation) {
    return !animation || animation._ts && _hasNoPausedAncestors1(animation.parent);
}, _elapsedCycleDuration = function _elapsedCycleDuration(animation) {
    return animation._repeat ? _animationCycle(animation._tTime, animation = animation.duration() + animation._rDelay) * animation : 0;
}, // feed in the totalTime and cycleDuration and it'll return the cycle (iteration minus 1) and if the playhead is exactly at the very END, it will NOT bump up to the next cycle.
_animationCycle = function _animationCycle(tTime, cycleDuration) {
    var whole = Math.floor(tTime /= cycleDuration);
    return tTime && whole === tTime ? whole - 1 : whole;
}, _parentToChildTotalTime = function _parentToChildTotalTime(parentTime, child) {
    return (parentTime - child._start) * child._ts + (child._ts >= 0 ? 0 : child._dirty ? child.totalDuration() : child._tDur);
}, _setEnd = function _setEnd(animation) {
    return animation._end = _roundPrecise(animation._start + (animation._tDur / Math.abs(animation._ts || animation._rts || _tinyNum) || 0));
}, _alignPlayhead = function _alignPlayhead(animation, totalTime) {
    // adjusts the animation's _start and _end according to the provided totalTime (only if the parent's smoothChildTiming is true and the animation isn't paused). It doesn't do any rendering or forcing things back into parent timelines, etc. - that's what totalTime() is for.
    var parent = animation._dp;
    if (parent && parent.smoothChildTiming && animation._ts) {
        animation._start = _roundPrecise(parent._time - (animation._ts > 0 ? totalTime / animation._ts : ((animation._dirty ? animation.totalDuration() : animation._tDur) - totalTime) / -animation._ts));
        _setEnd(animation);
        parent._dirty || _uncache(parent, animation); //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
    }
    return animation;
}, /*
_totalTimeToTime = (clampedTotalTime, duration, repeat, repeatDelay, yoyo) => {
	let cycleDuration = duration + repeatDelay,
		time = _round(clampedTotalTime % cycleDuration);
	if (time > duration) {
		time = duration;
	}
	return (yoyo && (~~(clampedTotalTime / cycleDuration) & 1)) ? duration - time : time;
},
*/ _postAddChecks = function _postAddChecks(timeline, child) {
    var t;
    if (child._time || child._initted && !child._dur) {
        //in case, for example, the _start is moved on a tween that has already rendered. Imagine it's at its end state, then the startTime is moved WAY later (after the end of this timeline), it should render at its beginning.
        t = _parentToChildTotalTime(timeline.rawTime(), child);
        if (!child._dur || _clamp(0, child.totalDuration(), t) - child._tTime > _tinyNum) child.render(t, true);
    } //if the timeline has already ended but the inserted tween/timeline extends the duration, we should enable this timeline again so that it renders properly. We should also align the playhead with the parent timeline's when appropriate.
    if (_uncache(timeline, child)._dp && timeline._initted && timeline._time >= timeline._dur && timeline._ts) {
        //in case any of the ancestors had completed but should now be enabled...
        if (timeline._dur < timeline.duration()) {
            t = timeline;
            while(t._dp){
                t.rawTime() >= 0 && t.totalTime(t._tTime); //moves the timeline (shifts its startTime) if necessary, and also enables it. If it's currently zero, though, it may not be scheduled to render until later so there's no need to force it to align with the current playhead position. Only move to catch up with the playhead.
                t = t._dp;
            }
        }
        timeline._zTime = -_tinyNum; // helps ensure that the next render() will be forced (crossingStart = true in render()), even if the duration hasn't changed (we're adding a child which would need to get rendered). Definitely an edge case. Note: we MUST do this AFTER the loop above where the totalTime() might trigger a render() because this _addToTimeline() method gets called from the Animation constructor, BEFORE tweens even record their targets, etc. so we wouldn't want things to get triggered in the wrong order.
    }
}, _addToTimeline = function _addToTimeline(timeline, child, position, skipChecks) {
    child.parent && _removeFromParent(child);
    child._start = _roundPrecise((_isNumber(position) ? position : position || timeline !== _globalTimeline ? _parsePosition(timeline, position, child) : timeline._time) + child._delay);
    child._end = _roundPrecise(child._start + (child.totalDuration() / Math.abs(child.timeScale()) || 0));
    _addLinkedListItem(timeline, child, "_first", "_last", timeline._sort ? "_start" : 0);
    _isFromOrFromStart(child) || (timeline._recent = child);
    skipChecks || _postAddChecks(timeline, child);
    return timeline;
}, _scrollTrigger = function _scrollTrigger(animation, trigger) {
    return (_globals.ScrollTrigger || _missingPlugin("scrollTrigger", trigger)) && _globals.ScrollTrigger.create(trigger, animation);
}, _attemptInitTween = function _attemptInitTween(tween, totalTime, force, suppressEvents) {
    _initTween(tween, totalTime);
    if (!tween._initted) return 1;
    if (!force && tween._pt && (tween._dur && tween.vars.lazy !== false || !tween._dur && tween.vars.lazy) && _lastRenderedFrame !== _ticker.frame) {
        _lazyTweens.push(tween);
        tween._lazy = [
            totalTime,
            suppressEvents
        ];
        return 1;
    }
}, _parentPlayheadIsBeforeStart = function _parentPlayheadIsBeforeStart1(_ref) {
    var parent = _ref.parent;
    return parent && parent._ts && parent._initted && !parent._lock && (parent.rawTime() < 0 || _parentPlayheadIsBeforeStart1(parent));
}, // check parent's _lock because when a timeline repeats/yoyos and does its artificial wrapping, we shouldn't force the ratio back to 0
_isFromOrFromStart = function _isFromOrFromStart(_ref2) {
    var data = _ref2.data;
    return data === "isFromStart" || data === "isStart";
}, _renderZeroDurationTween = function _renderZeroDurationTween(tween, totalTime, suppressEvents, force) {
    var prevRatio = tween.ratio, ratio = totalTime < 0 || !totalTime && (!tween._start && _parentPlayheadIsBeforeStart(tween) && !(!tween._initted && _isFromOrFromStart(tween)) || (tween._ts < 0 || tween._dp._ts < 0) && !_isFromOrFromStart(tween)) ? 0 : 1, // if the tween or its parent is reversed and the totalTime is 0, we should go to a ratio of 0. Edge case: if a from() or fromTo() stagger tween is placed later in a timeline, the "startAt" zero-duration tween could initially render at a time when the parent timeline's playhead is technically BEFORE where this tween is, so make sure that any "from" and "fromTo" startAt tweens are rendered the first time at a ratio of 1.
    repeatDelay = tween._rDelay, tTime = 0, pt, iteration, prevIteration;
    if (repeatDelay && tween._repeat) {
        // in case there's a zero-duration tween that has a repeat with a repeatDelay
        tTime = _clamp(0, tween._tDur, totalTime);
        iteration = _animationCycle(tTime, repeatDelay);
        tween._yoyo && iteration & 1 && (ratio = 1 - ratio);
        if (iteration !== _animationCycle(tween._tTime, repeatDelay)) {
            // if iteration changed
            prevRatio = 1 - ratio;
            tween.vars.repeatRefresh && tween._initted && tween.invalidate();
        }
    }
    if (ratio !== prevRatio || force || tween._zTime === _tinyNum || !totalTime && tween._zTime) {
        if (!tween._initted && _attemptInitTween(tween, totalTime, force, suppressEvents)) // if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately.
        return;
        prevIteration = tween._zTime;
        tween._zTime = totalTime || (suppressEvents ? _tinyNum : 0); // when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
        suppressEvents || (suppressEvents = totalTime && !prevIteration); // if it was rendered previously at exactly 0 (_zTime) and now the playhead is moving away, DON'T fire callbacks otherwise they'll seem like duplicates.
        tween.ratio = ratio;
        tween._from && (ratio = 1 - ratio);
        tween._time = 0;
        tween._tTime = tTime;
        pt = tween._pt;
        while(pt){
            pt.r(ratio, pt.d);
            pt = pt._next;
        }
        tween._startAt && totalTime < 0 && tween._startAt.render(totalTime, true, true);
        tween._onUpdate && !suppressEvents && _callback(tween, "onUpdate");
        tTime && tween._repeat && !suppressEvents && tween.parent && _callback(tween, "onRepeat");
        if ((totalTime >= tween._tDur || totalTime < 0) && tween.ratio === ratio) {
            ratio && _removeFromParent(tween, 1);
            if (!suppressEvents) {
                _callback(tween, ratio ? "onComplete" : "onReverseComplete", true);
                tween._prom && tween._prom();
            }
        }
    } else if (!tween._zTime) tween._zTime = totalTime;
}, _findNextPauseTween = function _findNextPauseTween(animation, prevTime, time) {
    var child;
    if (time > prevTime) {
        child = animation._first;
        while(child && child._start <= time){
            if (child.data === "isPause" && child._start > prevTime) return child;
            child = child._next;
        }
    } else {
        child = animation._last;
        while(child && child._start >= time){
            if (child.data === "isPause" && child._start < prevTime) return child;
            child = child._prev;
        }
    }
}, _setDuration = function _setDuration(animation, duration, skipUncache, leavePlayhead) {
    var repeat = animation._repeat, dur = _roundPrecise(duration) || 0, totalProgress = animation._tTime / animation._tDur;
    totalProgress && !leavePlayhead && (animation._time *= dur / animation._dur);
    animation._dur = dur;
    animation._tDur = !repeat ? dur : repeat < 0 ? 1e10 : _roundPrecise(dur * (repeat + 1) + animation._rDelay * repeat);
    totalProgress > 0 && !leavePlayhead ? _alignPlayhead(animation, animation._tTime = animation._tDur * totalProgress) : animation.parent && _setEnd(animation);
    skipUncache || _uncache(animation.parent, animation);
    return animation;
}, _onUpdateTotalDuration = function _onUpdateTotalDuration(animation) {
    return animation instanceof Timeline ? _uncache(animation) : _setDuration(animation, animation._dur);
}, _zeroPosition = {
    _start: 0,
    endTime: _emptyFunc,
    totalDuration: _emptyFunc
}, _parsePosition = function _parsePosition1(animation, position, percentAnimation) {
    var labels = animation.labels, recent = animation._recent || _zeroPosition, clippedDuration = animation.duration() >= _bigNum ? recent.endTime(false) : animation._dur, //in case there's a child that infinitely repeats, users almost never intend for the insertion point of a new child to be based on a SUPER long value like that so we clip it and assume the most recently-added child's endTime should be used instead.
    i, offset, isPercent;
    if (_isString(position) && (isNaN(position) || position in labels)) {
        //if the string is a number like "1", check to see if there's a label with that name, otherwise interpret it as a number (absolute value).
        offset = position.charAt(0);
        isPercent = position.substr(-1) === "%";
        i = position.indexOf("=");
        if (offset === "<" || offset === ">") {
            i >= 0 && (position = position.replace(/=/, ""));
            return (offset === "<" ? recent._start : recent.endTime(recent._repeat >= 0)) + (parseFloat(position.substr(1)) || 0) * (isPercent ? (i < 0 ? recent : percentAnimation).totalDuration() / 100 : 1);
        }
        if (i < 0) {
            position in labels || (labels[position] = clippedDuration);
            return labels[position];
        }
        offset = parseFloat(position.charAt(i - 1) + position.substr(i + 1));
        if (isPercent && percentAnimation) offset = offset / 100 * (_isArray(percentAnimation) ? percentAnimation[0] : percentAnimation).totalDuration();
        return i > 1 ? _parsePosition1(animation, position.substr(0, i - 1), percentAnimation) + offset : clippedDuration + offset;
    }
    return position == null ? clippedDuration : +position;
}, _createTweenType = function _createTweenType(type, params, timeline) {
    var isLegacy = _isNumber(params[1]), varsIndex = (isLegacy ? 2 : 1) + (type < 2 ? 0 : 1), vars = params[varsIndex], irVars, parent;
    isLegacy && (vars.duration = params[1]);
    vars.parent = timeline;
    if (type) {
        irVars = vars;
        parent = timeline;
        while(parent && !("immediateRender" in irVars)){
            // inheritance hasn't happened yet, but someone may have set a default in an ancestor timeline. We could do vars.immediateRender = _isNotFalse(_inheritDefaults(vars).immediateRender) but that'd exact a slight performance penalty because _inheritDefaults() also runs in the Tween constructor. We're paying a small kb price here to gain speed.
            irVars = parent.vars.defaults || {};
            parent = _isNotFalse(parent.vars.inherit) && parent.parent;
        }
        vars.immediateRender = _isNotFalse(irVars.immediateRender);
        type < 2 ? vars.runBackwards = 1 : vars.startAt = params[varsIndex - 1]; // "from" vars
    }
    return new Tween(params[0], vars, params[varsIndex + 1]);
}, _conditionalReturn = function _conditionalReturn(value, func) {
    return value || value === 0 ? func(value) : func;
}, _clamp = function _clamp(min, max, value) {
    return value < min ? min : value > max ? max : value;
}, getUnit = function getUnit(value, v) {
    return !_isString(value) || !(v = _unitExp.exec(value)) ? "" : v[1];
}, // note: protect against padded numbers as strings, like "100.100". That shouldn't return "00" as the unit. If it's numeric, return no unit.
clamp = function clamp(min, max, value) {
    return _conditionalReturn(value, function(v) {
        return _clamp(min, max, v);
    });
}, _slice = [].slice, _isArrayLike = function _isArrayLike(value, nonEmpty) {
    return value && _isObject(value) && "length" in value && (!nonEmpty && !value.length || value.length - 1 in value && _isObject(value[0])) && !value.nodeType && value !== _win;
}, _flatten = function _flatten(ar, leaveStrings, accumulator) {
    if (accumulator === void 0) accumulator = [];
    return ar.forEach(function(value) {
        var _accumulator;
        return _isString(value) && !leaveStrings || _isArrayLike(value, 1) ? (_accumulator = accumulator).push.apply(_accumulator, toArray(value)) : accumulator.push(value);
    }) || accumulator;
}, //takes any value and returns an array. If it's a string (and leaveStrings isn't true), it'll use document.querySelectorAll() and convert that to an array. It'll also accept iterables like jQuery objects.
toArray = function toArray(value, scope, leaveStrings) {
    return _isString(value) && !leaveStrings && (_coreInitted || !_wake()) ? _slice.call((scope || _doc).querySelectorAll(value), 0) : _isArray(value) ? _flatten(value, leaveStrings) : _isArrayLike(value) ? _slice.call(value, 0) : value ? [
        value
    ] : [];
}, selector = function selector(value) {
    value = toArray(value)[0] || _warn("Invalid scope") || {};
    return function(v) {
        var el = value.current || value.nativeElement || value;
        return toArray(v, el.querySelectorAll ? el : el === value ? _warn("Invalid scope") || _doc.createElement("div") : value);
    };
}, shuffle = function shuffle(a) {
    return a.sort(function() {
        return .5 - Math.random();
    });
}, // alternative that's a bit faster and more reliably diverse but bigger:   for (let j, v, i = a.length; i; j = Math.floor(Math.random() * i), v = a[--i], a[i] = a[j], a[j] = v); return a;
//for distributing values across an array. Can accept a number, a function or (most commonly) a function which can contain the following properties: {base, amount, from, ease, grid, axis, length, each}. Returns a function that expects the following parameters: index, target, array. Recognizes the following
distribute = function distribute(v) {
    if (_isFunction(v)) return v;
    var vars = _isObject(v) ? v : {
        each: v
    }, //n:1 is just to indicate v was a number; we leverage that later to set v according to the length we get. If a number is passed in, we treat it like the old stagger value where 0.1, for example, would mean that things would be distributed with 0.1 between each element in the array rather than a total "amount" that's chunked out among them all.
    ease = _parseEase(vars.ease), from = vars.from || 0, base = parseFloat(vars.base) || 0, cache = {}, isDecimal = from > 0 && from < 1, ratios = isNaN(from) || isDecimal, axis = vars.axis, ratioX = from, ratioY = from;
    if (_isString(from)) ratioX = ratioY = ({
        center: .5,
        edges: .5,
        end: 1
    })[from] || 0;
    else if (!isDecimal && ratios) {
        ratioX = from[0];
        ratioY = from[1];
    }
    return function(i, target, a) {
        var l = (a || vars).length, distances = cache[l], originX, originY, x, y, d, j, max, min, wrapAt;
        if (!distances) {
            wrapAt = vars.grid === "auto" ? 0 : (vars.grid || [
                1,
                _bigNum
            ])[1];
            if (!wrapAt) {
                max = -_bigNum;
                while(max < (max = a[wrapAt++].getBoundingClientRect().left) && wrapAt < l);
                wrapAt--;
            }
            distances = cache[l] = [];
            originX = ratios ? Math.min(wrapAt, l) * ratioX - .5 : from % wrapAt;
            originY = wrapAt === _bigNum ? 0 : ratios ? l * ratioY / wrapAt - .5 : from / wrapAt | 0;
            max = 0;
            min = _bigNum;
            for(j = 0; j < l; j++){
                x = j % wrapAt - originX;
                y = originY - (j / wrapAt | 0);
                distances[j] = d = !axis ? _sqrt(x * x + y * y) : Math.abs(axis === "y" ? y : x);
                d > max && (max = d);
                d < min && (min = d);
            }
            from === "random" && shuffle(distances);
            distances.max = max - min;
            distances.min = min;
            distances.v = l = (parseFloat(vars.amount) || parseFloat(vars.each) * (wrapAt > l ? l - 1 : !axis ? Math.max(wrapAt, l / wrapAt) : axis === "y" ? l / wrapAt : wrapAt) || 0) * (from === "edges" ? -1 : 1);
            distances.b = l < 0 ? base - l : base;
            distances.u = getUnit(vars.amount || vars.each) || 0; //unit
            ease = ease && l < 0 ? _invertEase(ease) : ease;
        }
        l = (distances[i] - distances.min) / distances.max || 0;
        return _roundPrecise(distances.b + (ease ? ease(l) : l) * distances.v) + distances.u; //round in order to work around floating point errors
    };
}, _roundModifier = function _roundModifier(v) {
    //pass in 0.1 get a function that'll round to the nearest tenth, or 5 to round to the closest 5, or 0.001 to the closest 1000th, etc.
    var p = Math.pow(10, ((v + "").split(".")[1] || "").length); //to avoid floating point math errors (like 24 * 0.1 == 2.4000000000000004), we chop off at a specific number of decimal places (much faster than toFixed())
    return function(raw) {
        var n = Math.round(parseFloat(raw) / v) * v * p;
        return (n - n % 1) / p + (_isNumber(raw) ? 0 : getUnit(raw)); // n - n % 1 replaces Math.floor() in order to handle negative values properly. For example, Math.floor(-150.00000000000003) is 151!
    };
}, snap = function snap(snapTo, value) {
    var isArray = _isArray(snapTo), radius, is2D;
    if (!isArray && _isObject(snapTo)) {
        radius = isArray = snapTo.radius || _bigNum;
        if (snapTo.values) {
            snapTo = toArray(snapTo.values);
            if (is2D = !_isNumber(snapTo[0])) radius *= radius; //performance optimization so we don't have to Math.sqrt() in the loop.
        } else snapTo = _roundModifier(snapTo.increment);
    }
    return _conditionalReturn(value, !isArray ? _roundModifier(snapTo) : _isFunction(snapTo) ? function(raw) {
        is2D = snapTo(raw);
        return Math.abs(is2D - raw) <= radius ? is2D : raw;
    } : function(raw) {
        var x = parseFloat(is2D ? raw.x : raw), y = parseFloat(is2D ? raw.y : 0), min = _bigNum, closest = 0, i = snapTo.length, dx, dy;
        while(i--){
            if (is2D) {
                dx = snapTo[i].x - x;
                dy = snapTo[i].y - y;
                dx = dx * dx + dy * dy;
            } else dx = Math.abs(snapTo[i] - x);
            if (dx < min) {
                min = dx;
                closest = i;
            }
        }
        closest = !radius || min <= radius ? snapTo[closest] : raw;
        return is2D || closest === raw || _isNumber(raw) ? closest : closest + getUnit(raw);
    });
}, random = function random(min, max, roundingIncrement, returnFunction) {
    return _conditionalReturn(_isArray(min) ? !max : roundingIncrement === true ? (roundingIncrement = 0, false) : !returnFunction, function() {
        return _isArray(min) ? min[~~(Math.random() * min.length)] : (roundingIncrement = roundingIncrement || 1e-5, returnFunction = roundingIncrement < 1 ? Math.pow(10, (roundingIncrement + "").length - 2) : 1) && Math.floor(Math.round((min - roundingIncrement / 2 + Math.random() * (max - min + roundingIncrement * .99)) / roundingIncrement) * roundingIncrement * returnFunction) / returnFunction;
    });
}, pipe = function pipe() {
    for(var _len = arguments.length, functions = new Array(_len), _key = 0; _key < _len; _key++)functions[_key] = arguments[_key];
    return function(value) {
        return functions.reduce(function(v, f) {
            return f(v);
        }, value);
    };
}, unitize = function unitize(func, unit) {
    return function(value) {
        return func(parseFloat(value)) + (unit || getUnit(value));
    };
}, normalize = function normalize(min, max, value) {
    return mapRange(min, max, 0, 1, value);
}, _wrapArray = function _wrapArray(a, wrapper, value) {
    return _conditionalReturn(value, function(index) {
        return a[~~wrapper(index)];
    });
}, wrap = function wrap1(min, max, value1) {
    // NOTE: wrap() CANNOT be an arrow function! A very odd compiling bug causes problems (unrelated to GSAP).
    var range = max - min;
    return _isArray(min) ? _wrapArray(min, wrap1(0, min.length), max) : _conditionalReturn(value1, function(value) {
        return (range + (value - min) % range) % range + min;
    });
}, wrapYoyo = function wrapYoyo1(min, max, value2) {
    var range = max - min, total = range * 2;
    return _isArray(min) ? _wrapArray(min, wrapYoyo1(0, min.length - 1), max) : _conditionalReturn(value2, function(value) {
        value = (total + (value - min) % total) % total || 0;
        return min + (value > range ? total - value : value);
    });
}, _replaceRandom = function _replaceRandom(value) {
    //replaces all occurrences of random(...) in a string with the calculated random value. can be a range like random(-100, 100, 5) or an array like random([0, 100, 500])
    var prev = 0, s = "", i, nums, end, isArray;
    while(~(i = value.indexOf("random(", prev))){
        end = value.indexOf(")", i);
        isArray = value.charAt(i + 7) === "[";
        nums = value.substr(i + 7, end - i - 7).match(isArray ? _delimitedValueExp : _strictNumExp);
        s += value.substr(prev, i - prev) + random(isArray ? nums : +nums[0], isArray ? 0 : +nums[1], +nums[2] || 1e-5);
        prev = end + 1;
    }
    return s + value.substr(prev, value.length - prev);
}, mapRange = function mapRange(inMin, inMax, outMin, outMax, value3) {
    var inRange = inMax - inMin, outRange = outMax - outMin;
    return _conditionalReturn(value3, function(value) {
        return outMin + ((value - inMin) / inRange * outRange || 0);
    });
}, interpolate = function interpolate1(start, end, progress, mutate) {
    var func = isNaN(start + end) ? 0 : function(p) {
        return (1 - p) * start + p * end;
    };
    if (!func) {
        var isString = _isString(start), master = {}, p1, i1, interpolators, l, il;
        progress === true && (mutate = 1) && (progress = null);
        if (isString) {
            start = {
                p: start
            };
            end = {
                p: end
            };
        } else if (_isArray(start) && !_isArray(end)) {
            interpolators = [];
            l = start.length;
            il = l - 2;
            for(i1 = 1; i1 < l; i1++)interpolators.push(interpolate1(start[i1 - 1], start[i1])); //build the interpolators up front as a performance optimization so that when the function is called many times, it can just reuse them.
            l--;
            func = function func(p) {
                p *= l;
                var i = Math.min(il, ~~p);
                return interpolators[i](p - i);
            };
            progress = end;
        } else if (!mutate) start = _merge(_isArray(start) ? [] : {}, start);
        if (!interpolators) {
            for(p1 in end)_addPropTween.call(master, start, p1, "get", end[p1]);
            func = function func(p) {
                return _renderPropTweens(p, master) || (isString ? start.p : start);
            };
        }
    }
    return _conditionalReturn(progress, func);
}, _getLabelInDirection = function _getLabelInDirection(timeline, fromTime, backward) {
    //used for nextLabel() and previousLabel()
    var labels = timeline.labels, min = _bigNum, p, distance, label;
    for(p in labels){
        distance = labels[p] - fromTime;
        if (distance < 0 === !!backward && distance && min > (distance = Math.abs(distance))) {
            label = p;
            min = distance;
        }
    }
    return label;
}, _callback = function _callback(animation, type, executeLazyFirst) {
    var v = animation.vars, callback = v[type], params, scope;
    if (!callback) return;
    params = v[type + "Params"];
    scope = v.callbackScope || animation;
    executeLazyFirst && _lazyTweens.length && _lazyRender(); //in case rendering caused any tweens to lazy-init, we should render them because typically when a timeline finishes, users expect things to have rendered fully. Imagine an onUpdate on a timeline that reports/checks tweened values.
    return params ? callback.apply(scope, params) : callback.call(scope);
}, _interrupt = function _interrupt(animation) {
    _removeFromParent(animation);
    animation.scrollTrigger && animation.scrollTrigger.kill(false);
    animation.progress() < 1 && _callback(animation, "onInterrupt");
    return animation;
}, _quickTween, _createPlugin = function _createPlugin(config) {
    config = !config.name && config["default"] || config; //UMD packaging wraps things oddly, so for example MotionPathHelper becomes {MotionPathHelper:MotionPathHelper, default:MotionPathHelper}.
    var name = config.name, isFunc = _isFunction(config), Plugin = name && !isFunc && config.init ? function() {
        this._props = [];
    } : config, //in case someone passes in an object that's not a plugin, like CustomEase
    instanceDefaults = {
        init: _emptyFunc,
        render: _renderPropTweens,
        add: _addPropTween,
        kill: _killPropTweensOf,
        modifier: _addPluginModifier,
        rawVars: 0
    }, statics = {
        targetTest: 0,
        get: 0,
        getSetter: _getSetter,
        aliases: {},
        register: 0
    };
    _wake();
    if (config !== Plugin) {
        if (_plugins[name]) return;
        _setDefaults(Plugin, _setDefaults(_copyExcluding(config, instanceDefaults), statics)); //static methods
        _merge(Plugin.prototype, _merge(instanceDefaults, _copyExcluding(config, statics))); //instance methods
        _plugins[Plugin.prop = name] = Plugin;
        if (config.targetTest) {
            _harnessPlugins.push(Plugin);
            _reservedProps[name] = 1;
        }
        name = (name === "css" ? "CSS" : name.charAt(0).toUpperCase() + name.substr(1)) + "Plugin"; //for the global name. "motionPath" should become MotionPathPlugin
    }
    _addGlobal(name, Plugin);
    config.register && config.register(gsap, Plugin, PropTween);
}, /*
 * --------------------------------------------------------------------------------------
 * COLORS
 * --------------------------------------------------------------------------------------
 */ _255 = 255, _colorLookup = {
    aqua: [
        0,
        _255,
        _255
    ],
    lime: [
        0,
        _255,
        0
    ],
    silver: [
        192,
        192,
        192
    ],
    black: [
        0,
        0,
        0
    ],
    maroon: [
        128,
        0,
        0
    ],
    teal: [
        0,
        128,
        128
    ],
    blue: [
        0,
        0,
        _255
    ],
    navy: [
        0,
        0,
        128
    ],
    white: [
        _255,
        _255,
        _255
    ],
    olive: [
        128,
        128,
        0
    ],
    yellow: [
        _255,
        _255,
        0
    ],
    orange: [
        _255,
        165,
        0
    ],
    gray: [
        128,
        128,
        128
    ],
    purple: [
        128,
        0,
        128
    ],
    green: [
        0,
        128,
        0
    ],
    red: [
        _255,
        0,
        0
    ],
    pink: [
        _255,
        192,
        203
    ],
    cyan: [
        0,
        _255,
        _255
    ],
    transparent: [
        _255,
        _255,
        _255,
        0
    ]
}, // possible future idea to replace the hard-coded color name values - put this in the ticker.wake() where we set the _doc:
// let ctx = _doc.createElement("canvas").getContext("2d");
// _forEachName("aqua,lime,silver,black,maroon,teal,blue,navy,white,olive,yellow,orange,gray,purple,green,red,pink,cyan", color => {ctx.fillStyle = color; _colorLookup[color] = splitColor(ctx.fillStyle)});
_hue = function _hue(h, m1, m2) {
    h += h < 0 ? 1 : h > 1 ? -1 : 0;
    return (h * 6 < 1 ? m1 + (m2 - m1) * h * 6 : h < .5 ? m2 : h * 3 < 2 ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * _255 + .5 | 0;
}, splitColor = function splitColor(v, toHSL, forceAlpha) {
    var a = !v ? _colorLookup.black : _isNumber(v) ? [
        v >> 16,
        v >> 8 & _255,
        v & _255
    ] : 0, r, g, b, h, s, l, max, min, d, wasHSL;
    if (!a) {
        if (v.substr(-1) === ",") //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
        v = v.substr(0, v.length - 1);
        if (_colorLookup[v]) a = _colorLookup[v];
        else if (v.charAt(0) === "#") {
            if (v.length < 6) {
                //for shorthand like #9F0 or #9F0F (could have alpha)
                r = v.charAt(1);
                g = v.charAt(2);
                b = v.charAt(3);
                v = "#" + r + r + g + g + b + b + (v.length === 5 ? v.charAt(4) + v.charAt(4) : "");
            }
            if (v.length === 9) {
                // hex with alpha, like #fd5e53ff
                a = parseInt(v.substr(1, 6), 16);
                return [
                    a >> 16,
                    a >> 8 & _255,
                    a & _255,
                    parseInt(v.substr(7), 16) / 255
                ];
            }
            v = parseInt(v.substr(1), 16);
            a = [
                v >> 16,
                v >> 8 & _255,
                v & _255
            ];
        } else if (v.substr(0, 3) === "hsl") {
            a = wasHSL = v.match(_strictNumExp);
            if (!toHSL) {
                h = +a[0] % 360 / 360;
                s = +a[1] / 100;
                l = +a[2] / 100;
                g = l <= .5 ? l * (s + 1) : l + s - l * s;
                r = l * 2 - g;
                a.length > 3 && (a[3] *= 1); //cast as number
                a[0] = _hue(h + 1 / 3, r, g);
                a[1] = _hue(h, r, g);
                a[2] = _hue(h - 1 / 3, r, g);
            } else if (~v.indexOf("=")) {
                //if relative values are found, just return the raw strings with the relative prefixes in place.
                a = v.match(_numExp);
                forceAlpha && a.length < 4 && (a[3] = 1);
                return a;
            }
        } else a = v.match(_strictNumExp) || _colorLookup.transparent;
        a = a.map(Number);
    }
    if (toHSL && !wasHSL) {
        r = a[0] / _255;
        g = a[1] / _255;
        b = a[2] / _255;
        max = Math.max(r, g, b);
        min = Math.min(r, g, b);
        l = (max + min) / 2;
        if (max === min) h = s = 0;
        else {
            d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
            h *= 60;
        }
        a[0] = ~~(h + .5);
        a[1] = ~~(s * 100 + .5);
        a[2] = ~~(l * 100 + .5);
    }
    forceAlpha && a.length < 4 && (a[3] = 1);
    return a;
}, _colorOrderData = function _colorOrderData(v1) {
    // strips out the colors from the string, finds all the numeric slots (with units) and returns an array of those. The Array also has a "c" property which is an Array of the index values where the colors belong. This is to help work around issues where there's a mis-matched order of color/numeric data like drop-shadow(#f00 0px 1px 2px) and drop-shadow(0x 1px 2px #f00). This is basically a helper function used in _formatColors()
    var values = [], c = [], i = -1;
    v1.split(_colorExp).forEach(function(v) {
        var a = v.match(_numWithUnitExp) || [];
        values.push.apply(values, a);
        c.push(i += a.length + 1);
    });
    values.c = c;
    return values;
}, _formatColors = function _formatColors(s, toHSL, orderMatchData) {
    var result = "", colors = (s + result).match(_colorExp), type = toHSL ? "hsla(" : "rgba(", i = 0, c, shell, d, l;
    if (!colors) return s;
    colors = colors.map(function(color) {
        return (color = splitColor(color, toHSL, 1)) && type + (toHSL ? color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : color.join(",")) + ")";
    });
    if (orderMatchData) {
        d = _colorOrderData(s);
        c = orderMatchData.c;
        if (c.join(result) !== d.c.join(result)) {
            shell = s.replace(_colorExp, "1").split(_numWithUnitExp);
            l = shell.length - 1;
            for(; i < l; i++)result += shell[i] + (~c.indexOf(i) ? colors.shift() || type + "0,0,0,0)" : (d.length ? d : colors.length ? colors : orderMatchData).shift());
        }
    }
    if (!shell) {
        shell = s.split(_colorExp);
        l = shell.length - 1;
        for(; i < l; i++)result += shell[i] + colors[i];
    }
    return result + shell[l];
}, _colorExp = function() {
    var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.,
    p;
    for(p in _colorLookup)s += "|" + p + "\\b";
    return new RegExp(s + ")", "gi");
}(), _hslExp = /hsl[a]?\(/, _colorStringFilter = function _colorStringFilter(a) {
    var combined = a.join(" "), toHSL;
    _colorExp.lastIndex = 0;
    if (_colorExp.test(combined)) {
        toHSL = _hslExp.test(combined);
        a[1] = _formatColors(a[1], toHSL);
        a[0] = _formatColors(a[0], toHSL, _colorOrderData(a[1])); // make sure the order of numbers/colors match with the END value.
        return true;
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TICKER
 * --------------------------------------------------------------------------------------
 */ _tickerActive, _ticker = function() {
    var _getTime = Date.now, _lagThreshold = 500, _adjustedLag = 33, _startTime = _getTime(), _lastUpdate = _startTime, _gap = 1000 / 240, _nextTime = _gap, _listeners = [], _id, _req, _raf, _self, _delta, _i, _tick1 = function _tick(v) {
        var elapsed = _getTime() - _lastUpdate, manual = v === true, overlap, dispatch, time, frame;
        elapsed > _lagThreshold && (_startTime += elapsed - _adjustedLag);
        _lastUpdate += elapsed;
        time = _lastUpdate - _startTime;
        overlap = time - _nextTime;
        if (overlap > 0 || manual) {
            frame = ++_self.frame;
            _delta = time - _self.time * 1000;
            _self.time = time = time / 1000;
            _nextTime += overlap + (overlap >= _gap ? 4 : _gap - overlap);
            dispatch = 1;
        }
        manual || (_id = _req(_tick)); //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
        if (dispatch) for(_i = 0; _i < _listeners.length; _i++)// use _i and check _listeners.length instead of a variable because a listener could get removed during the loop, and if that happens to an element less than the current index, it'd throw things off in the loop.
        _listeners[_i](time, _delta, frame, v);
    };
    _self = {
        time: 0,
        frame: 0,
        tick: function tick() {
            _tick1(true);
        },
        deltaRatio: function deltaRatio(fps) {
            return _delta / (1000 / (fps || 60));
        },
        wake: function wake() {
            if (_coreReady) {
                if (!_coreInitted && _windowExists()) {
                    _win = _coreInitted = window;
                    _doc = _win.document || {};
                    _globals.gsap = gsap;
                    (_win.gsapVersions || (_win.gsapVersions = [])).push(gsap.version);
                    _install(_installScope || _win.GreenSockGlobals || !_win.gsap && _win || {});
                    _raf = _win.requestAnimationFrame;
                }
                _id && _self.sleep();
                _req = _raf || function(f) {
                    return setTimeout(f, _nextTime - _self.time * 1000 + 1 | 0);
                };
                _tickerActive = 1;
                _tick1(2);
            }
        },
        sleep: function sleep() {
            (_raf ? _win.cancelAnimationFrame : clearTimeout)(_id);
            _tickerActive = 0;
            _req = _emptyFunc;
        },
        lagSmoothing: function lagSmoothing(threshold, adjustedLag) {
            _lagThreshold = threshold || 1 / _tinyNum; //zero should be interpreted as basically unlimited
            _adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
        },
        fps: function fps(_fps) {
            _gap = 1000 / (_fps || 240);
            _nextTime = _self.time * 1000 + _gap;
        },
        add: function add(callback, once, prioritize) {
            var func = once ? function(t, d, f, v) {
                callback(t, d, f, v);
                _self.remove(func);
            } : callback;
            _self.remove(callback);
            _listeners[prioritize ? "unshift" : "push"](func);
            _wake();
            return func;
        },
        remove: function remove(callback, i) {
            ~(i = _listeners.indexOf(callback)) && _listeners.splice(i, 1) && _i >= i && _i--;
        },
        _listeners: _listeners
    };
    return _self;
}(), _wake = function _wake() {
    return !_tickerActive && _ticker.wake();
}, //also ensures the core classes are initialized.
/*
* -------------------------------------------------
* EASING
* -------------------------------------------------
*/ _easeMap = {}, _customEaseExp = /^[\d.\-M][\d.\-,\s]/, _quotesExp = /["']/g, _parseObjectInString = function _parseObjectInString(value) {
    //takes a string like "{wiggles:10, type:anticipate})" and turns it into a real object. Notice it ends in ")" and includes the {} wrappers. This is because we only use this function for parsing ease configs and prioritized optimization rather than reusability.
    var obj = {}, split = value.substr(1, value.length - 3).split(":"), key = split[0], i = 1, l = split.length, index, val, parsedVal;
    for(; i < l; i++){
        val = split[i];
        index = i !== l - 1 ? val.lastIndexOf(",") : val.length;
        parsedVal = val.substr(0, index);
        obj[key] = isNaN(parsedVal) ? parsedVal.replace(_quotesExp, "").trim() : +parsedVal;
        key = val.substr(index + 1).trim();
    }
    return obj;
}, _valueInParentheses = function _valueInParentheses(value) {
    var open = value.indexOf("(") + 1, close = value.indexOf(")"), nested = value.indexOf("(", open);
    return value.substring(open, ~nested && nested < close ? value.indexOf(")", close + 1) : close);
}, _configEaseFromString = function _configEaseFromString(name) {
    //name can be a string like "elastic.out(1,0.5)", and pass in _easeMap as obj and it'll parse it out and call the actual function like _easeMap.Elastic.easeOut.config(1,0.5). It will also parse custom ease strings as long as CustomEase is loaded and registered (internally as _easeMap._CE).
    var split = (name + "").split("("), ease = _easeMap[split[0]];
    return ease && split.length > 1 && ease.config ? ease.config.apply(null, ~name.indexOf("{") ? [
        _parseObjectInString(split[1])
    ] : _valueInParentheses(name).split(",").map(_numericIfPossible)) : _easeMap._CE && _customEaseExp.test(name) ? _easeMap._CE("", name) : ease;
}, _invertEase = function _invertEase(ease) {
    return function(p) {
        return 1 - ease(1 - p);
    };
}, // allow yoyoEase to be set in children and have those affected when the parent/ancestor timeline yoyos.
_propagateYoyoEase = function _propagateYoyoEase1(timeline, isYoyo) {
    var child = timeline._first, ease;
    while(child){
        if (child instanceof Timeline) _propagateYoyoEase1(child, isYoyo);
        else if (child.vars.yoyoEase && (!child._yoyo || !child._repeat) && child._yoyo !== isYoyo) {
            if (child.timeline) _propagateYoyoEase1(child.timeline, isYoyo);
            else {
                ease = child._ease;
                child._ease = child._yEase;
                child._yEase = ease;
                child._yoyo = isYoyo;
            }
        }
        child = child._next;
    }
}, _parseEase = function _parseEase(ease, defaultEase) {
    return !ease ? defaultEase : (_isFunction(ease) ? ease : _easeMap[ease] || _configEaseFromString(ease)) || defaultEase;
}, _insertEase = function _insertEase(names, easeIn, easeOut, easeInOut) {
    if (easeOut === void 0) easeOut = function easeOut(p) {
        return 1 - easeIn(1 - p);
    };
    if (easeInOut === void 0) easeInOut = function easeInOut(p) {
        return p < .5 ? easeIn(p * 2) / 2 : 1 - easeIn((1 - p) * 2) / 2;
    };
    var ease = {
        easeIn: easeIn,
        easeOut: easeOut,
        easeInOut: easeInOut
    }, lowercaseName;
    _forEachName(names, function(name) {
        _easeMap[name] = _globals[name] = ease;
        _easeMap[lowercaseName = name.toLowerCase()] = easeOut;
        for(var p in ease)_easeMap[lowercaseName + (p === "easeIn" ? ".in" : p === "easeOut" ? ".out" : ".inOut")] = _easeMap[name + "." + p] = ease[p];
    });
    return ease;
}, _easeInOutFromOut = function _easeInOutFromOut(easeOut) {
    return function(p) {
        return p < .5 ? (1 - easeOut(1 - p * 2)) / 2 : .5 + easeOut((p - .5) * 2) / 2;
    };
}, _configElastic = function _configElastic1(type, amplitude1, period1) {
    var p1 = amplitude1 >= 1 ? amplitude1 : 1, //note: if amplitude is < 1, we simply adjust the period for a more natural feel. Otherwise the math doesn't work right and the curve starts at 1.
    p2 = (period1 || (type ? .3 : .45)) / (amplitude1 < 1 ? amplitude1 : 1), p3 = p2 / _2PI * (Math.asin(1 / p1) || 0), easeOut = function easeOut(p) {
        return p === 1 ? 1 : p1 * Math.pow(2, -10 * p) * _sin((p - p3) * p2) + 1;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    p2 = _2PI / p2; //precalculate to optimize
    ease.config = function(amplitude, period) {
        return _configElastic1(type, amplitude, period);
    };
    return ease;
}, _configBack = function _configBack1(type, overshoot1) {
    if (overshoot1 === void 0) overshoot1 = 1.70158;
    var easeOut = function easeOut(p) {
        return p ? --p * p * ((overshoot1 + 1) * p + overshoot1) + 1 : 0;
    }, ease = type === "out" ? easeOut : type === "in" ? function(p) {
        return 1 - easeOut(1 - p);
    } : _easeInOutFromOut(easeOut);
    ease.config = function(overshoot) {
        return _configBack1(type, overshoot);
    };
    return ease;
}; // a cheaper (kb and cpu) but more mild way to get a parameterized weighted ease by feeding in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEase = ratio => {
// 	let y = 0.5 + ratio / 2;
// 	return p => (2 * (1 - p) * p * y + p * p);
// },
// a stronger (but more expensive kb/cpu) parameterized weighted ease that lets you feed in a value between -1 (easeIn) and 1 (easeOut) where 0 is linear.
// _weightedEaseStrong = ratio => {
// 	ratio = .5 + ratio / 2;
// 	let o = 1 / 3 * (ratio < .5 ? ratio : 1 - ratio),
// 		b = ratio - o,
// 		c = ratio + o;
// 	return p => p === 1 ? p : 3 * b * (1 - p) * (1 - p) * p + 3 * c * (1 - p) * p * p + p * p * p;
// };
_forEachName("Linear,Quad,Cubic,Quart,Quint,Strong", function(name, i) {
    var power = i < 5 ? i + 1 : i;
    _insertEase(name + ",Power" + (power - 1), i ? function(p) {
        return Math.pow(p, power);
    } : function(p) {
        return p;
    }, function(p) {
        return 1 - Math.pow(1 - p, power);
    }, function(p) {
        return p < .5 ? Math.pow(p * 2, power) / 2 : 1 - Math.pow((1 - p) * 2, power) / 2;
    });
});
_easeMap.Linear.easeNone = _easeMap.none = _easeMap.Linear.easeIn;
_insertEase("Elastic", _configElastic("in"), _configElastic("out"), _configElastic());
(function(n, c) {
    var n1 = 1 / c, n2 = 2 * n1, n3 = 2.5 * n1, easeOut = function easeOut(p) {
        return p < n1 ? n * p * p : p < n2 ? n * Math.pow(p - 1.5 / c, 2) + .75 : p < n3 ? n * (p -= 2.25 / c) * p + .9375 : n * Math.pow(p - 2.625 / c, 2) + .984375;
    };
    _insertEase("Bounce", function(p) {
        return 1 - easeOut(1 - p);
    }, easeOut);
})(7.5625, 2.75);
_insertEase("Expo", function(p) {
    return p ? Math.pow(2, 10 * (p - 1)) : 0;
});
_insertEase("Circ", function(p) {
    return -(_sqrt(1 - p * p) - 1);
});
_insertEase("Sine", function(p) {
    return p === 1 ? 1 : -_cos(p * _HALF_PI) + 1;
});
_insertEase("Back", _configBack("in"), _configBack("out"), _configBack());
_easeMap.SteppedEase = _easeMap.steps = _globals.SteppedEase = {
    config: function config(steps, immediateStart) {
        if (steps === void 0) steps = 1;
        var p1 = 1 / steps, p2 = steps + (immediateStart ? 0 : 1), p3 = immediateStart ? 1 : 0, max = 1 - _tinyNum;
        return function(p) {
            return ((p2 * _clamp(0, max, p) | 0) + p3) * p1;
        };
    }
};
_defaults.ease = _easeMap["quad.out"];
_forEachName("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(name) {
    return _callbackNames += name + "," + name + "Params,";
});
var GSCache = function GSCache(target, harness) {
    this.id = _gsID++;
    target._gsap = this;
    this.target = target;
    this.harness = harness;
    this.get = harness ? harness.get : _getProperty;
    this.set = harness ? harness.getSetter : _getSetter;
};
var Animation = /*#__PURE__*/ function() {
    function Animation1(vars) {
        this.vars = vars;
        this._delay = +vars.delay || 0;
        if (this._repeat = vars.repeat === Infinity ? -2 : vars.repeat || 0) {
            // TODO: repeat: Infinity on a timeline's children must flag that timeline internally and affect its totalDuration, otherwise it'll stop in the negative direction when reaching the start.
            this._rDelay = vars.repeatDelay || 0;
            this._yoyo = !!vars.yoyo || !!vars.yoyoEase;
        }
        this._ts = 1;
        _setDuration(this, +vars.duration, 1, 1);
        this.data = vars.data;
        _tickerActive || _ticker.wake();
    }
    var _proto = Animation1.prototype;
    _proto.delay = function delay(value) {
        if (value || value === 0) {
            this.parent && this.parent.smoothChildTiming && this.startTime(this._start + value - this._delay);
            this._delay = value;
            return this;
        }
        return this._delay;
    };
    _proto.duration = function duration(value) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? value + (value + this._rDelay) * this._repeat : value) : this.totalDuration() && this._dur;
    };
    _proto.totalDuration = function totalDuration(value) {
        if (!arguments.length) return this._tDur;
        this._dirty = 0;
        return _setDuration(this, this._repeat < 0 ? value : (value - this._repeat * this._rDelay) / (this._repeat + 1));
    };
    _proto.totalTime = function totalTime(_totalTime, suppressEvents) {
        _wake();
        if (!arguments.length) return this._tTime;
        var parent = this._dp;
        if (parent && parent.smoothChildTiming && this._ts) {
            _alignPlayhead(this, _totalTime);
            !parent._dp || parent.parent || _postAddChecks(parent, this); // edge case: if this is a child of a timeline that already completed, for example, we must re-activate the parent.
            //in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The start of that child would get pushed out, but one of the ancestors may have completed.
            while(parent && parent.parent){
                if (parent.parent._time !== parent._start + (parent._ts >= 0 ? parent._tTime / parent._ts : (parent.totalDuration() - parent._tTime) / -parent._ts)) parent.totalTime(parent._tTime, true);
                parent = parent.parent;
            }
            if (!this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && _totalTime < this._tDur || this._ts < 0 && _totalTime > 0 || !this._tDur && !_totalTime)) //if the animation doesn't have a parent, put it back into its last parent (recorded as _dp for exactly cases like this). Limit to parents with autoRemoveChildren (like globalTimeline) so that if the user manually removes an animation from a timeline and then alters its playhead, it doesn't get added back in.
            _addToTimeline(this._dp, this, this._start - this._delay);
        }
        if (this._tTime !== _totalTime || !this._dur && !suppressEvents || this._initted && Math.abs(this._zTime) === _tinyNum || !_totalTime && !this._initted && (this.add || this._ptLookup)) {
            // check for _ptLookup on a Tween instance to ensure it has actually finished being instantiated, otherwise if this.reverse() gets called in the Animation constructor, it could trigger a render() here even though the _targets weren't populated, thus when _init() is called there won't be any PropTweens (it'll act like the tween is non-functional)
            this._ts || (this._pTime = _totalTime); // otherwise, if an animation is paused, then the playhead is moved back to zero, then resumed, it'd revert back to the original time at the pause
            //if (!this._lock) { // avoid endless recursion (not sure we need this yet or if it's worth the performance hit)
            //   this._lock = 1;
            _lazySafeRender(this, _totalTime, suppressEvents); //   this._lock = 0;
        //}
        }
        return this;
    };
    _proto.time = function time(value, suppressEvents) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), value + _elapsedCycleDuration(this)) % (this._dur + this._rDelay) || (value ? this._dur : 0), suppressEvents) : this._time; // note: if the modulus results in 0, the playhead could be exactly at the end or the beginning, and we always defer to the END with a non-zero value, otherwise if you set the time() to the very end (duration()), it would render at the START!
    };
    _proto.totalProgress = function totalProgress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.totalDuration() * value, suppressEvents) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
    };
    _proto.progress = function progress(value, suppressEvents) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - value : value) + _elapsedCycleDuration(this), suppressEvents) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
    };
    _proto.iteration = function iteration(value, suppressEvents) {
        var cycleDuration = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (value - 1) * cycleDuration, suppressEvents) : this._repeat ? _animationCycle(this._tTime, cycleDuration) + 1 : 1;
    } // potential future addition:
    ;
    _proto.timeScale = function timeScale(value) {
        if (!arguments.length) return this._rts === -_tinyNum ? 0 : this._rts; // recorded timeScale. Special case: if someone calls reverse() on an animation with timeScale of 0, we assign it -_tinyNum to remember it's reversed.
        if (this._rts === value) return this;
        var tTime = this.parent && this._ts ? _parentToChildTotalTime(this.parent._time, this) : this._tTime; // make sure to do the parentToChildTotalTime() BEFORE setting the new _ts because the old one must be used in that calculation.
        // future addition? Up side: fast and minimal file size. Down side: only works on this animation; if a timeline is reversed, for example, its childrens' onReverse wouldn't get called.
        //(+value < 0 && this._rts >= 0) && _callback(this, "onReverse", true);
        // prioritize rendering where the parent's playhead lines up instead of this._tTime because there could be a tween that's animating another tween's timeScale in the same rendering loop (same parent), thus if the timeScale tween renders first, it would alter _start BEFORE _tTime was set on that tick (in the rendering loop), effectively freezing it until the timeScale tween finishes.
        this._rts = +value || 0;
        this._ts = this._ps || value === -_tinyNum ? 0 : this._rts; // _ts is the functional timeScale which would be 0 if the animation is paused.
        this.totalTime(_clamp(-this._delay, this._tDur, tTime), true);
        _setEnd(this); // if parent.smoothChildTiming was false, the end time didn't get updated in the _alignPlayhead() method, so do it here.
        return _recacheAncestors(this);
    };
    _proto.paused = function paused(value) {
        if (!arguments.length) return this._ps;
        if (this._ps !== value) {
            this._ps = value;
            if (value) {
                this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()); // if the pause occurs during the delay phase, make sure that's factored in when resuming.
                this._ts = this._act = 0; // _ts is the functional timeScale, so a paused tween would effectively have a timeScale of 0. We record the "real" timeScale as _rts (recorded time scale)
            } else {
                _wake();
                this._ts = this._rts; //only defer to _pTime (pauseTime) if tTime is zero. Remember, someone could pause() an animation, then scrub the playhead and resume(). If the parent doesn't have smoothChildTiming, we render at the rawTime() because the startTime won't get updated.
                this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== _tinyNum && (this._tTime -= _tinyNum)); // edge case: animation.progress(1).pause().play() wouldn't render again because the playhead is already at the end, but the call to totalTime() below will add it back to its parent...and not remove it again (since removing only happens upon rendering at a new time). Offsetting the _tTime slightly is done simply to cause the final render in totalTime() that'll pop it off its timeline (if autoRemoveChildren is true, of course). Check to make sure _zTime isn't -_tinyNum to avoid an edge case where the playhead is pushed to the end but INSIDE a tween/callback, the timeline itself is paused thus halting rendering and leaving a few unrendered. When resuming, it wouldn't render those otherwise.
            }
        }
        return this;
    };
    _proto.startTime = function startTime(value) {
        if (arguments.length) {
            this._start = value;
            var parent = this.parent || this._dp;
            parent && (parent._sort || !this.parent) && _addToTimeline(parent, this, value - this._delay);
            return this;
        }
        return this._start;
    };
    _proto.endTime = function endTime(includeRepeats) {
        return this._start + (_isNotFalse(includeRepeats) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
    };
    _proto.rawTime = function rawTime(wrapRepeats) {
        var parent = this.parent || this._dp; // _dp = detached parent
        return !parent ? this._tTime : wrapRepeats && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : !this._ts ? this._tTime : _parentToChildTotalTime(parent.rawTime(wrapRepeats), this);
    };
    _proto.globalTime = function globalTime(rawTime) {
        var animation = this, time = arguments.length ? rawTime : animation.rawTime();
        while(animation){
            time = animation._start + time / (animation._ts || 1);
            animation = animation._dp;
        }
        return time;
    };
    _proto.repeat = function repeat(value) {
        if (arguments.length) {
            this._repeat = value === Infinity ? -2 : value;
            return _onUpdateTotalDuration(this);
        }
        return this._repeat === -2 ? Infinity : this._repeat;
    };
    _proto.repeatDelay = function repeatDelay(value) {
        if (arguments.length) {
            var time = this._time;
            this._rDelay = value;
            _onUpdateTotalDuration(this);
            return time ? this.time(time) : this;
        }
        return this._rDelay;
    };
    _proto.yoyo = function yoyo(value) {
        if (arguments.length) {
            this._yoyo = value;
            return this;
        }
        return this._yoyo;
    };
    _proto.seek = function seek(position, suppressEvents) {
        return this.totalTime(_parsePosition(this, position), _isNotFalse(suppressEvents));
    };
    _proto.restart = function restart(includeDelay, suppressEvents) {
        return this.play().totalTime(includeDelay ? -this._delay : 0, _isNotFalse(suppressEvents));
    };
    _proto.play = function play(from, suppressEvents) {
        from != null && this.seek(from, suppressEvents);
        return this.reversed(false).paused(false);
    };
    _proto.reverse = function reverse(from, suppressEvents) {
        from != null && this.seek(from || this.totalDuration(), suppressEvents);
        return this.reversed(true).paused(false);
    };
    _proto.pause = function pause(atTime, suppressEvents) {
        atTime != null && this.seek(atTime, suppressEvents);
        return this.paused(true);
    };
    _proto.resume = function resume() {
        return this.paused(false);
    };
    _proto.reversed = function reversed(value) {
        if (arguments.length) {
            !!value !== this.reversed() && this.timeScale(-this._rts || (value ? -_tinyNum : 0)); // in case timeScale is zero, reversing would have no effect so we use _tinyNum.
            return this;
        }
        return this._rts < 0;
    };
    _proto.invalidate = function invalidate() {
        this._initted = this._act = 0;
        this._zTime = -_tinyNum;
        return this;
    };
    _proto.isActive = function isActive() {
        var parent = this.parent || this._dp, start = this._start, rawTime;
        return !!(!parent || this._ts && this._initted && parent.isActive() && (rawTime = parent.rawTime(true)) >= start && rawTime < this.endTime(true) - _tinyNum);
    };
    _proto.eventCallback = function eventCallback(type, callback, params) {
        var vars = this.vars;
        if (arguments.length > 1) {
            if (!callback) delete vars[type];
            else {
                vars[type] = callback;
                params && (vars[type + "Params"] = params);
                type === "onUpdate" && (this._onUpdate = callback);
            }
            return this;
        }
        return vars[type];
    };
    _proto.then = function then(onFulfilled) {
        var self = this;
        return new Promise(function(resolve) {
            var f = _isFunction(onFulfilled) ? onFulfilled : _passThrough, _resolve = function _resolve() {
                var _then = self.then;
                self.then = null; // temporarily null the then() method to avoid an infinite loop (see https://github.com/greensock/GSAP/issues/322)
                _isFunction(f) && (f = f(self)) && (f.then || f === self) && (self.then = _then);
                resolve(f);
                self.then = _then;
            };
            if (self._initted && self.totalProgress() === 1 && self._ts >= 0 || !self._tTime && self._ts < 0) _resolve();
            else self._prom = _resolve;
        });
    };
    _proto.kill = function kill() {
        _interrupt(this);
    };
    return Animation1;
}();
_setDefaults(Animation.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: false,
    parent: null,
    _initted: false,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -_tinyNum,
    _prom: 0,
    _ps: false,
    _rts: 1
});
var Timeline = /*#__PURE__*/ function(_Animation) {
    _inheritsLoose(Timeline1, _Animation);
    function Timeline1(vars, position) {
        var _this;
        if (vars === void 0) vars = {};
        _this = _Animation.call(this, vars) || this;
        _this.labels = {};
        _this.smoothChildTiming = !!vars.smoothChildTiming;
        _this.autoRemoveChildren = !!vars.autoRemoveChildren;
        _this._sort = _isNotFalse(vars.sortChildren);
        _globalTimeline && _addToTimeline(vars.parent || _globalTimeline, _assertThisInitialized(_this), position);
        vars.reversed && _this.reverse();
        vars.paused && _this.paused(true);
        vars.scrollTrigger && _scrollTrigger(_assertThisInitialized(_this), vars.scrollTrigger);
        return _this;
    }
    var _proto2 = Timeline1.prototype;
    _proto2.to = function to(targets, vars, position) {
        _createTweenType(0, arguments, this);
        return this;
    };
    _proto2.from = function from(targets, vars, position) {
        _createTweenType(1, arguments, this);
        return this;
    };
    _proto2.fromTo = function fromTo(targets, fromVars, toVars, position) {
        _createTweenType(2, arguments, this);
        return this;
    };
    _proto2.set = function set(targets, vars, position) {
        vars.duration = 0;
        vars.parent = this;
        _inheritDefaults(vars).repeatDelay || (vars.repeat = 0);
        vars.immediateRender = !!vars.immediateRender;
        new Tween(targets, vars, _parsePosition(this, position), 1);
        return this;
    };
    _proto2.call = function call(callback, params, position) {
        return _addToTimeline(this, Tween.delayedCall(0, callback, params), position);
    } //ONLY for backward compatibility! Maybe delete?
    ;
    _proto2.staggerTo = function staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.duration = duration;
        vars.stagger = vars.stagger || stagger;
        vars.onComplete = onCompleteAll;
        vars.onCompleteParams = onCompleteAllParams;
        vars.parent = this;
        new Tween(targets, vars, _parsePosition(this, position));
        return this;
    };
    _proto2.staggerFrom = function staggerFrom(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams) {
        vars.runBackwards = 1;
        _inheritDefaults(vars).immediateRender = _isNotFalse(vars.immediateRender);
        return this.staggerTo(targets, duration, vars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.staggerFromTo = function staggerFromTo(targets, duration, fromVars, toVars, stagger, position, onCompleteAll, onCompleteAllParams) {
        toVars.startAt = fromVars;
        _inheritDefaults(toVars).immediateRender = _isNotFalse(toVars.immediateRender);
        return this.staggerTo(targets, duration, toVars, stagger, position, onCompleteAll, onCompleteAllParams);
    };
    _proto2.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._dirty ? this.totalDuration() : this._tDur, dur = this._dur, tTime = totalTime <= 0 ? 0 : _roundPrecise(totalTime), // if a paused timeline is resumed (or its _start is updated for another reason...which rounds it), that could result in the playhead shifting a **tiny** amount and a zero-duration child at that spot may get rendered at a different ratio, like its totalTime in render() may be 1e-17 instead of 0, for example.
        crossingStart = this._zTime < 0 !== totalTime < 0 && (this._initted || !dur), time, child, next, iteration, cycleDuration, prevPaused, pauseTween, timeScale, prevStart, prevIteration, yoyo, isYoyo;
        this !== _globalTimeline && tTime > tDur && totalTime >= 0 && (tTime = tDur);
        if (tTime !== this._tTime || force || crossingStart) {
            if (prevTime !== this._time && dur) {
                //if totalDuration() finds a child with a negative startTime and smoothChildTiming is true, things get shifted around internally so we need to adjust the time accordingly. For example, if a tween starts at -30 we must shift EVERYTHING forward 30 seconds and move this timeline's startTime backward by 30 seconds so that things align with the playhead (no jump).
                tTime += this._time - prevTime;
                totalTime += this._time - prevTime;
            }
            time = tTime;
            prevStart = this._start;
            timeScale = this._ts;
            prevPaused = !timeScale;
            if (crossingStart) {
                dur || (prevTime = this._zTime); //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration timeline, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect.
                (totalTime || !suppressEvents) && (this._zTime = totalTime);
            }
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                yoyo = this._yoyo;
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    iteration = ~~(tTime / cycleDuration);
                    if (iteration && iteration === tTime / cycleDuration) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                !prevTime && this._tTime && prevIteration !== iteration && (prevIteration = iteration); // edge case - if someone does addPause() at the very beginning of a repeating timeline, that pause is technically at the same spot as the end which causes this._time to get set to 0 when the totalTime would normally place the playhead at the end. See https://greensock.com/forums/topic/23823-closing-nav-animation-not-working-on-ie-and-iphone-6-maybe-other-older-browser/?tab=comments#comment-113005
                if (yoyo && iteration & 1) {
                    time = dur - time;
                    isYoyo = 1;
                }
                /*
        make sure children at the end/beginning of the timeline are rendered properly. If, for example,
        a 3-second long timeline rendered at 2.9 seconds previously, and now renders at 3.2 seconds (which
        would get translated to 2.8 seconds if the timeline yoyos or 0.2 seconds if it just repeats), there
        could be a callback or a short tween that's at 2.95 or 3 seconds in which wouldn't render. So
        we need to push the timeline to the end (and/or beginning depending on its yoyo value). Also we must
        ensure that zero-duration tweens at the very beginning or end of the Timeline work.
        */ if (iteration !== prevIteration && !this._lock) {
                    var rewinding = yoyo && prevIteration & 1, doesWrap = rewinding === (yoyo && iteration & 1);
                    iteration < prevIteration && (rewinding = !rewinding);
                    prevTime = rewinding ? 0 : dur;
                    this._lock = 1;
                    this.render(prevTime || (isYoyo ? 0 : _roundPrecise(iteration * cycleDuration)), suppressEvents, !dur)._lock = 0;
                    this._tTime = tTime; // if a user gets the iteration() inside the onRepeat, for example, it should be accurate.
                    !suppressEvents && this.parent && _callback(this, "onRepeat");
                    this.vars.repeatRefresh && !isYoyo && (this.invalidate()._lock = 1);
                    if (prevTime && prevTime !== this._time || prevPaused !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) // if prevTime is 0 and we render at the very end, _time will be the end, thus won't match. So in this edge case, prevTime won't match _time but that's okay. If it gets killed in the onRepeat, eject as well.
                    return this;
                    dur = this._dur; // in case the duration changed in the onRepeat
                    tDur = this._tDur;
                    if (doesWrap) {
                        this._lock = 2;
                        prevTime = rewinding ? dur : -0.0001;
                        this.render(prevTime, true);
                        this.vars.repeatRefresh && !isYoyo && this.invalidate();
                    }
                    this._lock = 0;
                    if (!this._ts && !prevPaused) return this;
                     //in order for yoyoEase to work properly when there's a stagger, we must swap out the ease in each sub-tween.
                    _propagateYoyoEase(this, isYoyo);
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2) {
                pauseTween = _findNextPauseTween(this, _roundPrecise(prevTime), _roundPrecise(time));
                if (pauseTween) tTime -= time - (time = pauseTween._start);
            }
            this._tTime = tTime;
            this._time = time;
            this._act = !timeScale; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
            if (!this._initted) {
                this._onUpdate = this.vars.onUpdate;
                this._initted = 1;
                this._zTime = totalTime;
                prevTime = 0; // upon init, the playhead should always go forward; someone could invalidate() a completed timeline and then if they restart(), that would make child tweens render in reverse order which could lock in the wrong starting values if they build on each other, like tl.to(obj, {x: 100}).to(obj, {x: 0}).
            }
            if (!prevTime && time && !suppressEvents) {
                _callback(this, "onStart");
                if (this._tTime !== tTime) // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                return this;
            }
            if (time >= prevTime && totalTime >= 0) {
                child = this._first;
                while(child){
                    next = child._next;
                    if ((child._act || time >= child._start) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                        return this.render(totalTime, suppressEvents, force);
                        child.render(child._ts > 0 ? (time - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (time - child._start) * child._ts, suppressEvents, force);
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = -_tinyNum); // it didn't finish rendering, so flag zTime as negative so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            } else {
                child = this._last;
                var adjustedTime = totalTime < 0 ? totalTime : time; //when the playhead goes backward beyond the start of this timeline, we must pass that information down to the child animations so that zero-duration tweens know whether to render their starting or ending values.
                while(child){
                    next = child._prev;
                    if ((child._act || adjustedTime <= child._end) && child._ts && pauseTween !== child) {
                        if (child.parent !== this) // an extreme edge case - the child's render could do something like kill() the "next" one in the linked list, or reparent it. In that case we must re-initiate the whole render to be safe.
                        return this.render(totalTime, suppressEvents, force);
                        child.render(child._ts > 0 ? (adjustedTime - child._start) * child._ts : (child._dirty ? child.totalDuration() : child._tDur) + (adjustedTime - child._start) * child._ts, suppressEvents, force);
                        if (time !== this._time || !this._ts && !prevPaused) {
                            //in case a tween pauses or seeks the timeline when rendering, like inside of an onUpdate/onComplete
                            pauseTween = 0;
                            next && (tTime += this._zTime = adjustedTime ? -_tinyNum : _tinyNum); // it didn't finish rendering, so adjust zTime so that so that the next time render() is called it'll be forced (to render any remaining children)
                            break;
                        }
                    }
                    child = next;
                }
            }
            if (pauseTween && !suppressEvents) {
                this.pause();
                pauseTween.render(time >= prevTime ? 0 : -_tinyNum)._zTime = time >= prevTime ? 1 : -1;
                if (this._ts) {
                    //the callback resumed playback! So since we may have held back the playhead due to where the pause is positioned, go ahead and jump to where it's SUPPOSED to be (if no pause happened).
                    this._start = prevStart; //if the pause was at an earlier time and the user resumed in the callback, it could reposition the timeline (changing its startTime), throwing things off slightly, so we make sure the _start doesn't shift.
                    _setEnd(this);
                    return this.render(totalTime, suppressEvents, force);
                }
            }
            this._onUpdate && !suppressEvents && _callback(this, "onUpdate", true);
            if (tTime === tDur && this._tTime >= this.totalDuration() || !tTime && prevTime) {
                if (prevStart === this._start || Math.abs(timeScale) !== Math.abs(this._ts)) {
                    if (!this._lock) {
                        // remember, a child's callback may alter this timeline's playhead or timeScale which is why we need to add some of these checks.
                        (totalTime || !dur) && (tTime === tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                        if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime || !tDur)) {
                            _callback(this, tTime === tDur && totalTime >= 0 ? "onComplete" : "onReverseComplete", true);
                            this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                        }
                    }
                }
            }
        }
        return this;
    };
    _proto2.add = function add(child, position) {
        var _this2 = this;
        _isNumber(position) || (position = _parsePosition(this, position, child));
        if (!(child instanceof Animation)) {
            if (_isArray(child)) {
                child.forEach(function(obj) {
                    return _this2.add(obj, position);
                });
                return this;
            }
            if (_isString(child)) return this.addLabel(child, position);
            if (_isFunction(child)) child = Tween.delayedCall(0, child);
            else return this;
        }
        return this !== child ? _addToTimeline(this, child, position) : this; //don't allow a timeline to be added to itself as a child!
    };
    _proto2.getChildren = function getChildren(nested, tweens, timelines, ignoreBeforeTime) {
        if (nested === void 0) nested = true;
        if (tweens === void 0) tweens = true;
        if (timelines === void 0) timelines = true;
        if (ignoreBeforeTime === void 0) ignoreBeforeTime = -_bigNum;
        var a = [], child = this._first;
        while(child){
            if (child._start >= ignoreBeforeTime) {
                if (child instanceof Tween) tweens && a.push(child);
                else {
                    timelines && a.push(child);
                    nested && a.push.apply(a, child.getChildren(true, tweens, timelines));
                }
            }
            child = child._next;
        }
        return a;
    };
    _proto2.getById = function getById(id) {
        var animations = this.getChildren(1, 1, 1), i = animations.length;
        while(i--){
            if (animations[i].vars.id === id) return animations[i];
        }
    };
    _proto2.remove = function remove(child) {
        if (_isString(child)) return this.removeLabel(child);
        if (_isFunction(child)) return this.killTweensOf(child);
        _removeLinkedListItem(this, child);
        if (child === this._recent) this._recent = this._last;
        return _uncache(this);
    };
    _proto2.totalTime = function totalTime(_totalTime2, suppressEvents) {
        if (!arguments.length) return this._tTime;
        this._forcing = 1;
        if (!this._dp && this._ts) //special case for the global timeline (or any other that has no parent or detached parent).
        this._start = _roundPrecise(_ticker.time - (this._ts > 0 ? _totalTime2 / this._ts : (this.totalDuration() - _totalTime2) / -this._ts));
        _Animation.prototype.totalTime.call(this, _totalTime2, suppressEvents);
        this._forcing = 0;
        return this;
    };
    _proto2.addLabel = function addLabel(label, position) {
        this.labels[label] = _parsePosition(this, position);
        return this;
    };
    _proto2.removeLabel = function removeLabel(label) {
        delete this.labels[label];
        return this;
    };
    _proto2.addPause = function addPause(position, callback, params) {
        var t = Tween.delayedCall(0, callback || _emptyFunc, params);
        t.data = "isPause";
        this._hasPause = 1;
        return _addToTimeline(this, t, _parsePosition(this, position));
    };
    _proto2.removePause = function removePause(position) {
        var child = this._first;
        position = _parsePosition(this, position);
        while(child){
            if (child._start === position && child.data === "isPause") _removeFromParent(child);
            child = child._next;
        }
    };
    _proto2.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        var tweens = this.getTweensOf(targets, onlyActive), i = tweens.length;
        while(i--)_overwritingTween !== tweens[i] && tweens[i].kill(targets, props);
        return this;
    };
    _proto2.getTweensOf = function getTweensOf(targets, onlyActive) {
        var a = [], parsedTargets = toArray(targets), child = this._first, isGlobalTime = _isNumber(onlyActive), // a number is interpreted as a global time. If the animation spans
        children;
        while(child){
            if (child instanceof Tween) {
                if (_arrayContainsAny(child._targets, parsedTargets) && (isGlobalTime ? (!_overwritingTween || child._initted && child._ts) && child.globalTime(0) <= onlyActive && child.globalTime(child.totalDuration()) > onlyActive : !onlyActive || child.isActive())) // note: if this is for overwriting, it should only be for tweens that aren't paused and are initted.
                a.push(child);
            } else if ((children = child.getTweensOf(parsedTargets, onlyActive)).length) a.push.apply(a, children);
            child = child._next;
        }
        return a;
    } // potential future feature - targets() on timelines
    ;
    _proto2.tweenTo = function tweenTo(position, vars) {
        vars = vars || {};
        var tl = this, endTime = _parsePosition(tl, position), _vars = vars, startAt = _vars.startAt, _onStart = _vars.onStart, onStartParams = _vars.onStartParams, immediateRender = _vars.immediateRender, initted, tween = Tween.to(tl, _setDefaults({
            ease: vars.ease || "none",
            lazy: false,
            immediateRender: false,
            time: endTime,
            overwrite: "auto",
            duration: vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale()) || _tinyNum,
            onStart: function onStart() {
                tl.pause();
                if (!initted) {
                    var duration = vars.duration || Math.abs((endTime - (startAt && "time" in startAt ? startAt.time : tl._time)) / tl.timeScale());
                    tween._dur !== duration && _setDuration(tween, duration, 0, 1).render(tween._time, true, true);
                    initted = 1;
                }
                _onStart && _onStart.apply(tween, onStartParams || []); //in case the user had an onStart in the vars - we don't want to overwrite it.
            }
        }, vars));
        return immediateRender ? tween.render(0) : tween;
    };
    _proto2.tweenFromTo = function tweenFromTo(fromPosition, toPosition, vars) {
        return this.tweenTo(toPosition, _setDefaults({
            startAt: {
                time: _parsePosition(this, fromPosition)
            }
        }, vars));
    };
    _proto2.recent = function recent() {
        return this._recent;
    };
    _proto2.nextLabel = function nextLabel(afterTime) {
        if (afterTime === void 0) afterTime = this._time;
        return _getLabelInDirection(this, _parsePosition(this, afterTime));
    };
    _proto2.previousLabel = function previousLabel(beforeTime) {
        if (beforeTime === void 0) beforeTime = this._time;
        return _getLabelInDirection(this, _parsePosition(this, beforeTime), 1);
    };
    _proto2.currentLabel = function currentLabel(value) {
        return arguments.length ? this.seek(value, true) : this.previousLabel(this._time + _tinyNum);
    };
    _proto2.shiftChildren = function shiftChildren(amount, adjustLabels, ignoreBeforeTime) {
        if (ignoreBeforeTime === void 0) ignoreBeforeTime = 0;
        var child = this._first, labels = this.labels, p;
        while(child){
            if (child._start >= ignoreBeforeTime) {
                child._start += amount;
                child._end += amount;
            }
            child = child._next;
        }
        if (adjustLabels) {
            for(p in labels)if (labels[p] >= ignoreBeforeTime) labels[p] += amount;
        }
        return _uncache(this);
    };
    _proto2.invalidate = function invalidate() {
        var child = this._first;
        this._lock = 0;
        while(child){
            child.invalidate();
            child = child._next;
        }
        return _Animation.prototype.invalidate.call(this);
    };
    _proto2.clear = function clear(includeLabels) {
        if (includeLabels === void 0) includeLabels = true;
        var child = this._first, next;
        while(child){
            next = child._next;
            this.remove(child);
            child = next;
        }
        this._dp && (this._time = this._tTime = this._pTime = 0);
        includeLabels && (this.labels = {});
        return _uncache(this);
    };
    _proto2.totalDuration = function totalDuration(value) {
        var max = 0, self = this, child = self._last, prevStart = _bigNum, prev, start, parent;
        if (arguments.length) return self.timeScale((self._repeat < 0 ? self.duration() : self.totalDuration()) / (self.reversed() ? -value : value));
        if (self._dirty) {
            parent = self.parent;
            while(child){
                prev = child._prev; //record it here in case the tween changes position in the sequence...
                child._dirty && child.totalDuration(); //could change the tween._startTime, so make sure the animation's cache is clean before analyzing it.
                start = child._start;
                if (start > prevStart && self._sort && child._ts && !self._lock) {
                    //in case one of the tweens shifted out of order, it needs to be re-inserted into the correct position in the sequence
                    self._lock = 1; //prevent endless recursive calls - there are methods that get triggered that check duration/totalDuration when we add().
                    _addToTimeline(self, child, start - child._delay, 1)._lock = 0;
                } else prevStart = start;
                if (start < 0 && child._ts) {
                    //children aren't allowed to have negative startTimes unless smoothChildTiming is true, so adjust here if one is found.
                    max -= start;
                    if (!parent && !self._dp || parent && parent.smoothChildTiming) {
                        self._start += start / self._ts;
                        self._time -= start;
                        self._tTime -= start;
                    }
                    self.shiftChildren(-start, false, -Infinity);
                    prevStart = 0;
                }
                child._end > max && child._ts && (max = child._end);
                child = prev;
            }
            _setDuration(self, self === _globalTimeline && self._time > max ? self._time : max, 1, 1);
            self._dirty = 0;
        }
        return self._tDur;
    };
    Timeline1.updateRoot = function updateRoot(time) {
        if (_globalTimeline._ts) {
            _lazySafeRender(_globalTimeline, _parentToChildTotalTime(time, _globalTimeline));
            _lastRenderedFrame = _ticker.frame;
        }
        if (_ticker.frame >= _nextGCFrame) {
            _nextGCFrame += _config.autoSleep || 120;
            var child = _globalTimeline._first;
            if (!child || !child._ts) {
                if (_config.autoSleep && _ticker._listeners.length < 2) {
                    while(child && !child._ts)child = child._next;
                    child || _ticker.sleep();
                }
            }
        }
    };
    return Timeline1;
}(Animation);
_setDefaults(Timeline.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var _addComplexStringPropTween = function _addComplexStringPropTween(target, prop, start, end, setter, stringFilter, funcParam) {
    //note: we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    var pt = new PropTween(this._pt, target, prop, 0, 1, _renderComplexString, null, setter), index = 0, matchIndex = 0, result, startNums, color, endNum, chunk, startNum, hasRandom, a;
    pt.b = start;
    pt.e = end;
    start += ""; //ensure values are strings
    end += "";
    if (hasRandom = ~end.indexOf("random(")) end = _replaceRandom(end);
    if (stringFilter) {
        a = [
            start,
            end
        ];
        stringFilter(a, target, prop); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
        start = a[0];
        end = a[1];
    }
    startNums = start.match(_complexStringNumExp) || [];
    while(result = _complexStringNumExp.exec(end)){
        endNum = result[0];
        chunk = end.substring(index, result.index);
        if (color) color = (color + 1) % 5;
        else if (chunk.substr(-5) === "rgba(") color = 1;
        if (endNum !== startNums[matchIndex++]) {
            startNum = parseFloat(startNums[matchIndex - 1]) || 0; //these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
            pt._pt = {
                _next: pt._pt,
                p: chunk || matchIndex === 1 ? chunk : ",",
                //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                s: startNum,
                c: endNum.charAt(1) === "=" ? _parseRelative(startNum, endNum) - startNum : parseFloat(endNum) - startNum,
                m: color && color < 4 ? Math.round : 0
            };
            index = _complexStringNumExp.lastIndex;
        }
    }
    pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    pt.fp = funcParam;
    if (_relExp.test(end) || hasRandom) pt.e = 0; //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _addComplexStringPropTween.call(tweenInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    return pt;
}, _addPropTween = function _addPropTween(target, prop, start, end, index, targets, modifier, stringFilter, funcParam) {
    _isFunction(end) && (end = end(index || 0, target, targets));
    var currentValue = target[prop], parsedStart = start !== "get" ? start : !_isFunction(currentValue) ? currentValue : funcParam ? target[prop.indexOf("set") || !_isFunction(target["get" + prop.substr(3)]) ? prop : "get" + prop.substr(3)](funcParam) : target[prop](), setter = !_isFunction(currentValue) ? _setterPlain : funcParam ? _setterFuncWithParam : _setterFunc, pt;
    if (_isString(end)) {
        if (~end.indexOf("random(")) end = _replaceRandom(end);
        if (end.charAt(1) === "=") {
            pt = _parseRelative(parsedStart, end) + (getUnit(parsedStart) || 0);
            if (pt || pt === 0) // to avoid isNaN, like if someone passes in a value like "!= whatever"
            end = pt;
        }
    }
    if (parsedStart !== end || _forceAllPropTweens) {
        if (!isNaN(parsedStart * end) && end !== "") {
            // fun fact: any number multiplied by "" is evaluated as the number 0!
            pt = new PropTween(this._pt, target, prop, +parsedStart || 0, end - (parsedStart || 0), typeof currentValue === "boolean" ? _renderBoolean : _renderPlain, 0, setter);
            funcParam && (pt.fp = funcParam);
            modifier && pt.modifier(modifier, this, target);
            return this._pt = pt;
        }
        !currentValue && !(prop in target) && _missingPlugin(prop, end);
        return _addComplexStringPropTween.call(this, target, prop, parsedStart, end, setter, stringFilter || _config.stringFilter, funcParam);
    }
}, //creates a copy of the vars object and processes any function-based values (putting the resulting values directly into the copy) as well as strings with "random()" in them. It does NOT process relative values.
_processVars = function _processVars(vars, index, target, targets, tween) {
    _isFunction(vars) && (vars = _parseFuncOrString(vars, tween, index, target, targets));
    if (!_isObject(vars) || vars.style && vars.nodeType || _isArray(vars) || _isTypedArray(vars)) return _isString(vars) ? _parseFuncOrString(vars, tween, index, target, targets) : vars;
    var copy = {}, p;
    for(p in vars)copy[p] = _parseFuncOrString(vars[p], tween, index, target, targets);
    return copy;
}, _checkPlugin = function _checkPlugin(property, vars, tween, index, target, targets) {
    var plugin, pt, ptLookup, i;
    if (_plugins[property] && (plugin = new _plugins[property]()).init(target, plugin.rawVars ? vars[property] : _processVars(vars[property], index, target, targets, tween), tween, index, targets) !== false) {
        tween._pt = pt = new PropTween(tween._pt, target, property, 0, 1, plugin.render, plugin, 0, plugin.priority);
        if (tween !== _quickTween) {
            ptLookup = tween._ptLookup[tween._targets.indexOf(target)]; //note: we can't use tween._ptLookup[index] because for staggered tweens, the index from the fullTargets array won't match what it is in each individual tween that spawns from the stagger.
            i = plugin._props.length;
            while(i--)ptLookup[plugin._props[i]] = pt;
        }
    }
    return plugin;
}, _overwritingTween, //store a reference temporarily so we can avoid overwriting itself.
_forceAllPropTweens, _initTween = function _initTween1(tween, time) {
    var vars = tween.vars, ease = vars.ease, startAt = vars.startAt, immediateRender = vars.immediateRender, lazy = vars.lazy, onUpdate = vars.onUpdate, onUpdateParams = vars.onUpdateParams, callbackScope = vars.callbackScope, runBackwards = vars.runBackwards, yoyoEase = vars.yoyoEase, keyframes = vars.keyframes, autoRevert = vars.autoRevert, dur = tween._dur, prevStartAt = tween._startAt, targets = tween._targets, parent = tween.parent, fullTargets = parent && parent.data === "nested" ? parent.parent._targets : targets, autoOverwrite = tween._overwrite === "auto" && !_suppressOverwrites, tl = tween.timeline, cleanVars, i, p, pt, target, hasPriority, gsData, harness, plugin, ptLookup, index, harnessVars, overwritten;
    tl && (!keyframes || !ease) && (ease = "none");
    tween._ease = _parseEase(ease, _defaults.ease);
    tween._yEase = yoyoEase ? _invertEase(_parseEase(yoyoEase === true ? ease : yoyoEase, _defaults.ease)) : 0;
    if (yoyoEase && tween._yoyo && !tween._repeat) {
        //there must have been a parent timeline with yoyo:true that is currently in its yoyo phase, so flip the eases.
        yoyoEase = tween._yEase;
        tween._yEase = tween._ease;
        tween._ease = yoyoEase;
    }
    tween._from = !tl && !!vars.runBackwards; //nested timelines should never run backwards - the backwards-ness is in the child tweens.
    if (!tl || keyframes && !vars.stagger) {
        //if there's an internal timeline, skip all the parsing because we passed that task down the chain.
        harness = targets[0] ? _getCache(targets[0]).harness : 0;
        harnessVars = harness && vars[harness.prop]; //someone may need to specify CSS-specific values AND non-CSS values, like if the element has an "x" property plus it's a standard DOM element. We allow people to distinguish by wrapping plugin-specific stuff in a css:{} object for example.
        cleanVars = _copyExcluding(vars, _reservedProps);
        if (prevStartAt) {
            _removeFromParent(prevStartAt.render(-1, true));
            prevStartAt._lazy = 0;
        }
        if (startAt) {
            _removeFromParent(tween._startAt = Tween.set(targets, _setDefaults({
                data: "isStart",
                overwrite: false,
                parent: parent,
                immediateRender: true,
                lazy: _isNotFalse(lazy),
                startAt: null,
                delay: 0,
                onUpdate: onUpdate,
                onUpdateParams: onUpdateParams,
                callbackScope: callbackScope,
                stagger: 0
            }, startAt))); //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, from, to).fromTo(e, to, from);
            time < 0 && !immediateRender && !autoRevert && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted tween.
            if (immediateRender) {
                time > 0 && !autoRevert && (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
                if (dur && time <= 0) {
                    time && (tween._zTime = time);
                    return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
                } // if (time > 0) {
            // 	autoRevert || (tween._startAt = 0); //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in Timeline instances where immediateRender was false or when autoRevert is explicitly set to true.
            // } else if (dur && !(time < 0 && prevStartAt)) {
            // 	time && (tween._zTime = time);
            // 	return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a Timeline, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
            // }
            } else if (autoRevert === false) tween._startAt = 0;
        } else if (runBackwards && dur) {
            //from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
            if (prevStartAt) !autoRevert && (tween._startAt = 0);
            else {
                time && (immediateRender = false); //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
                p = _setDefaults({
                    overwrite: false,
                    data: "isFromStart",
                    //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
                    lazy: immediateRender && _isNotFalse(lazy),
                    immediateRender: immediateRender,
                    //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
                    stagger: 0,
                    parent: parent //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y:gsap.utils.wrap([-100,100])})
                }, cleanVars);
                harnessVars && (p[harness.prop] = harnessVars); // in case someone does something like .from(..., {css:{}})
                _removeFromParent(tween._startAt = Tween.set(targets, p));
                time < 0 && tween._startAt.render(-1, true); // rare edge case, like if a render is forced in the negative direction of a non-initted from() tween.
                tween._zTime = time;
                if (!immediateRender) _initTween1(tween._startAt, _tinyNum); //ensures that the initial values are recorded
                else if (!time) return;
            }
        }
        tween._pt = tween._ptCache = 0;
        lazy = dur && _isNotFalse(lazy) || lazy && !dur;
        for(i = 0; i < targets.length; i++){
            target = targets[i];
            gsData = target._gsap || _harness(targets)[i]._gsap;
            tween._ptLookup[i] = ptLookup = {};
            _lazyLookup[gsData.id] && _lazyTweens.length && _lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
            index = fullTargets === targets ? i : fullTargets.indexOf(target);
            if (harness && (plugin = new harness()).init(target, harnessVars || cleanVars, tween, index, fullTargets) !== false) {
                tween._pt = pt = new PropTween(tween._pt, target, plugin.name, 0, 1, plugin.render, plugin, 0, plugin.priority);
                plugin._props.forEach(function(name) {
                    ptLookup[name] = pt;
                });
                plugin.priority && (hasPriority = 1);
            }
            if (!harness || harnessVars) {
                for(p in cleanVars)if (_plugins[p] && (plugin = _checkPlugin(p, cleanVars, tween, index, target, fullTargets))) plugin.priority && (hasPriority = 1);
                else ptLookup[p] = pt = _addPropTween.call(tween, target, p, "get", cleanVars[p], index, fullTargets, 0, vars.stringFilter);
            }
            tween._op && tween._op[i] && tween.kill(target, tween._op[i]);
            if (autoOverwrite && tween._pt) {
                _overwritingTween = tween;
                _globalTimeline.killTweensOf(target, ptLookup, tween.globalTime(time)); // make sure the overwriting doesn't overwrite THIS tween!!!
                overwritten = !tween.parent;
                _overwritingTween = 0;
            }
            tween._pt && lazy && (_lazyLookup[gsData.id] = 1);
        }
        hasPriority && _sortPropTweensByPriority(tween);
        tween._onInit && tween._onInit(tween); //plugins like RoundProps must wait until ALL of the PropTweens are instantiated. In the plugin's init() function, it sets the _onInit on the tween instance. May not be pretty/intuitive, but it's fast and keeps file size down.
    }
    tween._onUpdate = onUpdate;
    tween._initted = (!tween._op || tween._pt) && !overwritten; // if overwrittenProps resulted in the entire tween being killed, do NOT flag it as initted or else it may render for one tick.
    keyframes && time <= 0 && tl.render(_bigNum, true, true); // if there's a 0% keyframe, it'll render in the "before" state for any staggered/delayed animations thus when the following tween initializes, it'll use the "before" state instead of the "after" state as the initial values.
}, _updatePropTweens = function _updatePropTweens(tween, property, value, start, startIsRelative, ratio, time) {
    var ptCache = (tween._pt && tween._ptCache || (tween._ptCache = {}))[property], pt, lookup, i;
    if (!ptCache) {
        ptCache = tween._ptCache[property] = [];
        lookup = tween._ptLookup;
        i = tween._targets.length;
        while(i--){
            pt = lookup[i][property];
            if (pt && pt.d && pt.d._pt) {
                // it's a plugin, so find the nested PropTween
                pt = pt.d._pt;
                while(pt && pt.p !== property)pt = pt._next;
            }
            if (!pt) {
                // there is no PropTween associated with that property, so we must FORCE one to be created and ditch out of this
                // if the tween has other properties that already rendered at new positions, we'd normally have to rewind to put them back like tween.render(0, true) before forcing an _initTween(), but that can create another edge case like tweening a timeline's progress would trigger onUpdates to fire which could move other things around. It's better to just inform users that .resetTo() should ONLY be used for tweens that already have that property. For example, you can't gsap.to(...{ y: 0 }) and then tween.restTo("x", 200) for example.
                _forceAllPropTweens = 1; // otherwise, when we _addPropTween() and it finds no change between the start and end values, it skips creating a PropTween (for efficiency...why tween when there's no difference?) but in this case we NEED that PropTween created so we can edit it.
                tween.vars[property] = "+=0";
                _initTween(tween, time);
                _forceAllPropTweens = 0;
                return 1;
            }
            ptCache.push(pt);
        }
    }
    i = ptCache.length;
    while(i--){
        pt = ptCache[i];
        pt.s = (start || start === 0) && !startIsRelative ? start : pt.s + (start || 0) + ratio * pt.c;
        pt.c = value - pt.s;
        pt.e && (pt.e = _round(value) + getUnit(pt.e)); // mainly for CSSPlugin (end value)
        pt.b && (pt.b = pt.s + getUnit(pt.b)); // (beginning value)
    }
}, _addAliasesToVars = function _addAliasesToVars(targets, vars) {
    var harness = targets[0] ? _getCache(targets[0]).harness : 0, propertyAliases = harness && harness.aliases, copy, p, i, aliases;
    if (!propertyAliases) return vars;
    copy = _merge({}, vars);
    for(p in propertyAliases)if (p in copy) {
        aliases = propertyAliases[p].split(",");
        i = aliases.length;
        while(i--)copy[aliases[i]] = copy[p];
    }
    return copy;
}, // parses multiple formats, like {"0%": {x: 100}, {"50%": {x: -20}} and { x: {"0%": 100, "50%": -20} }, and an "ease" can be set on any object. We populate an "allProps" object with an Array for each property, like {x: [{}, {}], y:[{}, {}]} with data for each property tween. The objects have a "t" (time), "v", (value), and "e" (ease) property. This allows us to piece together a timeline later.
_parseKeyframe = function _parseKeyframe(prop, obj, allProps, easeEach) {
    var ease = obj.ease || easeEach || "power1.inOut", p, a;
    if (_isArray(obj)) {
        a = allProps[prop] || (allProps[prop] = []); // t = time (out of 100), v = value, e = ease
        obj.forEach(function(value, i) {
            return a.push({
                t: i / (obj.length - 1) * 100,
                v: value,
                e: ease
            });
        });
    } else for(p in obj){
        a = allProps[p] || (allProps[p] = []);
        p === "ease" || a.push({
            t: parseFloat(prop),
            v: obj[p],
            e: ease
        });
    }
}, _parseFuncOrString = function _parseFuncOrString(value, tween, i, target, targets) {
    return _isFunction(value) ? value.call(tween, i, target, targets) : _isString(value) && ~value.indexOf("random(") ? _replaceRandom(value) : value;
}, _staggerTweenProps = _callbackNames + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", _staggerPropsToSkip = {};
_forEachName(_staggerTweenProps + ",id,stagger,delay,duration,paused,scrollTrigger", function(name) {
    return _staggerPropsToSkip[name] = 1;
});
var Tween = /*#__PURE__*/ function(_Animation2) {
    _inheritsLoose(Tween1, _Animation2);
    function Tween1(targets, vars, position, skipInherit) {
        var _this3;
        if (typeof vars === "number") {
            position.duration = vars;
            vars = position;
            position = null;
        }
        _this3 = _Animation2.call(this, skipInherit ? vars : _inheritDefaults(vars)) || this;
        var _this3$vars = _this3.vars, duration = _this3$vars.duration, delay = _this3$vars.delay, immediateRender = _this3$vars.immediateRender, stagger = _this3$vars.stagger, overwrite = _this3$vars.overwrite, keyframes = _this3$vars.keyframes, defaults = _this3$vars.defaults, scrollTrigger = _this3$vars.scrollTrigger, yoyoEase = _this3$vars.yoyoEase, parent = vars.parent || _globalTimeline, parsedTargets = (_isArray(targets) || _isTypedArray(targets) ? _isNumber(targets[0]) : "length" in vars) ? [
            targets
        ] : toArray(targets), tl, i, copy, l, p, curTarget, staggerFunc, staggerVarsToMerge;
        _this3._targets = parsedTargets.length ? _harness(parsedTargets) : _warn("GSAP target " + targets + " not found. https://greensock.com", !_config.nullTargetWarn) || [];
        _this3._ptLookup = []; //PropTween lookup. An array containing an object for each target, having keys for each tweening property
        _this3._overwrite = overwrite;
        if (keyframes || stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
            vars = _this3.vars;
            tl = _this3.timeline = new Timeline({
                data: "nested",
                defaults: defaults || {}
            });
            tl.kill();
            tl.parent = tl._dp = _assertThisInitialized(_this3);
            tl._start = 0;
            if (stagger || _isFuncOrString(duration) || _isFuncOrString(delay)) {
                l = parsedTargets.length;
                staggerFunc = stagger && distribute(stagger);
                if (_isObject(stagger)) {
                    //users can pass in callbacks like onStart/onComplete in the stagger object. These should fire with each individual tween.
                    for(p in stagger)if (~_staggerTweenProps.indexOf(p)) {
                        staggerVarsToMerge || (staggerVarsToMerge = {});
                        staggerVarsToMerge[p] = stagger[p];
                    }
                }
                for(i = 0; i < l; i++){
                    copy = _copyExcluding(vars, _staggerPropsToSkip);
                    copy.stagger = 0;
                    yoyoEase && (copy.yoyoEase = yoyoEase);
                    staggerVarsToMerge && _merge(copy, staggerVarsToMerge);
                    curTarget = parsedTargets[i]; //don't just copy duration or delay because if they're a string or function, we'd end up in an infinite loop because _isFuncOrString() would evaluate as true in the child tweens, entering this loop, etc. So we parse the value straight from vars and default to 0.
                    copy.duration = +_parseFuncOrString(duration, _assertThisInitialized(_this3), i, curTarget, parsedTargets);
                    copy.delay = (+_parseFuncOrString(delay, _assertThisInitialized(_this3), i, curTarget, parsedTargets) || 0) - _this3._delay;
                    if (!stagger && l === 1 && copy.delay) {
                        // if someone does delay:"random(1, 5)", repeat:-1, for example, the delay shouldn't be inside the repeat.
                        _this3._delay = delay = copy.delay;
                        _this3._start += delay;
                        copy.delay = 0;
                    }
                    tl.to(curTarget, copy, staggerFunc ? staggerFunc(i, curTarget, parsedTargets) : 0);
                    tl._ease = _easeMap.none;
                }
                tl.duration() ? duration = delay = 0 : _this3.timeline = 0; // if the timeline's duration is 0, we don't need a timeline internally!
            } else if (keyframes) {
                _inheritDefaults(_setDefaults(tl.vars.defaults, {
                    ease: "none"
                }));
                tl._ease = _parseEase(keyframes.ease || vars.ease || "none");
                var time = 0, a3, kf, v;
                if (_isArray(keyframes)) keyframes.forEach(function(frame) {
                    return tl.to(parsedTargets, frame, ">");
                });
                else {
                    copy = {};
                    for(p in keyframes)p === "ease" || p === "easeEach" || _parseKeyframe(p, keyframes[p], copy, keyframes.easeEach);
                    for(p in copy){
                        a3 = copy[p].sort(function(a, b) {
                            return a.t - b.t;
                        });
                        time = 0;
                        for(i = 0; i < a3.length; i++){
                            kf = a3[i];
                            v = {
                                ease: kf.e,
                                duration: (kf.t - (i ? a3[i - 1].t : 0)) / 100 * duration
                            };
                            v[p] = kf.v;
                            tl.to(parsedTargets, v, time);
                            time += v.duration;
                        }
                    }
                    tl.duration() < duration && tl.to({}, {
                        duration: duration - tl.duration()
                    }); // in case keyframes didn't go to 100%
                }
            }
            duration || _this3.duration(duration = tl.duration());
        } else _this3.timeline = 0; //speed optimization, faster lookups (no going up the prototype chain)
        if (overwrite === true && !_suppressOverwrites) {
            _overwritingTween = _assertThisInitialized(_this3);
            _globalTimeline.killTweensOf(parsedTargets);
            _overwritingTween = 0;
        }
        _addToTimeline(parent, _assertThisInitialized(_this3), position);
        vars.reversed && _this3.reverse();
        vars.paused && _this3.paused(true);
        if (immediateRender || !duration && !keyframes && _this3._start === _roundPrecise(parent._time) && _isNotFalse(immediateRender) && _hasNoPausedAncestors(_assertThisInitialized(_this3)) && parent.data !== "nested") {
            _this3._tTime = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
            _this3.render(Math.max(0, -delay)); //in case delay is negative
        }
        scrollTrigger && _scrollTrigger(_assertThisInitialized(_this3), scrollTrigger);
        return _this3;
    }
    var _proto3 = Tween1.prototype;
    _proto3.render = function render(totalTime, suppressEvents, force) {
        var prevTime = this._time, tDur = this._tDur, dur = this._dur, tTime = totalTime > tDur - _tinyNum && totalTime >= 0 ? tDur : totalTime < _tinyNum ? 0 : totalTime, time, pt, iteration, cycleDuration, prevIteration, isYoyo, ratio, timeline, yoyoEase;
        if (!dur) _renderZeroDurationTween(this, totalTime, suppressEvents, force);
        else if (tTime !== this._tTime || !totalTime || force || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== totalTime < 0) {
            //this senses if we're crossing over the start time, in which case we must record _zTime and force the render, but we do it in this lengthy conditional way for performance reasons (usually we can skip the calculations): this._initted && (this._zTime < 0) !== (totalTime < 0)
            time = tTime;
            timeline = this.timeline;
            if (this._repeat) {
                //adjust the time for repeats and yoyos
                cycleDuration = dur + this._rDelay;
                if (this._repeat < -1 && totalTime < 0) return this.totalTime(cycleDuration * 100 + totalTime, suppressEvents, force);
                time = _roundPrecise(tTime % cycleDuration); //round to avoid floating point errors. (4 % 0.8 should be 0 but some browsers report it as 0.79999999!)
                if (tTime === tDur) {
                    // the tDur === tTime is for edge cases where there's a lengthy decimal on the duration and it may reach the very end but the time is rendered as not-quite-there (remember, tDur is rounded to 4 decimals whereas dur isn't)
                    iteration = this._repeat;
                    time = dur;
                } else {
                    iteration = ~~(tTime / cycleDuration);
                    if (iteration && iteration === tTime / cycleDuration) {
                        time = dur;
                        iteration--;
                    }
                    time > dur && (time = dur);
                }
                isYoyo = this._yoyo && iteration & 1;
                if (isYoyo) {
                    yoyoEase = this._yEase;
                    time = dur - time;
                }
                prevIteration = _animationCycle(this._tTime, cycleDuration);
                if (time === prevTime && !force && this._initted) {
                    //could be during the repeatDelay part. No need to render and fire callbacks.
                    this._tTime = tTime;
                    return this;
                }
                if (iteration !== prevIteration) {
                    timeline && this._yEase && _propagateYoyoEase(timeline, isYoyo); //repeatRefresh functionality
                    if (this.vars.repeatRefresh && !isYoyo && !this._lock) {
                        this._lock = force = 1; //force, otherwise if lazy is true, the _attemptInitTween() will return and we'll jump out and get caught bouncing on each tick.
                        this.render(_roundPrecise(cycleDuration * iteration), true).invalidate()._lock = 0;
                    }
                }
            }
            if (!this._initted) {
                if (_attemptInitTween(this, totalTime < 0 ? totalTime : time, force, suppressEvents)) {
                    this._tTime = 0; // in constructor if immediateRender is true, we set _tTime to -_tinyNum to have the playhead cross the starting point but we can't leave _tTime as a negative number.
                    return this;
                }
                if (prevTime !== this._time) // rare edge case - during initialization, an onUpdate in the _startAt (.fromTo()) might force this tween to render at a different spot in which case we should ditch this render() call so that it doesn't revert the values.
                return this;
                if (dur !== this._dur) // while initting, a plugin like InertiaPlugin might alter the duration, so rerun from the start to ensure everything renders as it should.
                return this.render(totalTime, suppressEvents, force);
            }
            this._tTime = tTime;
            this._time = time;
            if (!this._act && this._ts) {
                this._act = 1; //as long as it's not paused, force it to be active so that if the user renders independent of the parent timeline, it'll be forced to re-render on the next tick.
                this._lazy = 0;
            }
            this.ratio = ratio = (yoyoEase || this._ease)(time / dur);
            if (this._from) this.ratio = ratio = 1 - ratio;
            if (time && !prevTime && !suppressEvents) {
                _callback(this, "onStart");
                if (this._tTime !== tTime) // in case the onStart triggered a render at a different spot, eject. Like if someone did animation.pause(0.5) or something inside the onStart.
                return this;
            }
            pt = this._pt;
            while(pt){
                pt.r(ratio, pt.d);
                pt = pt._next;
            }
            timeline && timeline.render(totalTime < 0 ? totalTime : !time && isYoyo ? -_tinyNum : timeline._dur * timeline._ease(time / this._dur), suppressEvents, force) || this._startAt && (this._zTime = totalTime);
            if (this._onUpdate && !suppressEvents) {
                totalTime < 0 && this._startAt && this._startAt.render(totalTime, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
                _callback(this, "onUpdate");
            }
            this._repeat && iteration !== prevIteration && this.vars.onRepeat && !suppressEvents && this.parent && _callback(this, "onRepeat");
            if ((tTime === this._tDur || !tTime) && this._tTime === tTime) {
                totalTime < 0 && this._startAt && !this._onUpdate && this._startAt.render(totalTime, true, true);
                (totalTime || !dur) && (tTime === this._tDur && this._ts > 0 || !tTime && this._ts < 0) && _removeFromParent(this, 1); // don't remove if we're rendering at exactly a time of 0, as there could be autoRevert values that should get set on the next tick (if the playhead goes backward beyond the startTime, negative totalTime). Don't remove if the timeline is reversed and the playhead isn't at 0, otherwise tl.progress(1).reverse() won't work. Only remove if the playhead is at the end and timeScale is positive, or if the playhead is at 0 and the timeScale is negative.
                if (!suppressEvents && !(totalTime < 0 && !prevTime) && (tTime || prevTime)) {
                    // if prevTime and tTime are zero, we shouldn't fire the onReverseComplete. This could happen if you gsap.to(... {paused:true}).play();
                    _callback(this, tTime === tDur ? "onComplete" : "onReverseComplete", true);
                    this._prom && !(tTime < tDur && this.timeScale() > 0) && this._prom();
                }
            }
        }
        return this;
    };
    _proto3.targets = function targets() {
        return this._targets;
    };
    _proto3.invalidate = function invalidate() {
        this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0;
        this._ptLookup = [];
        this.timeline && this.timeline.invalidate();
        return _Animation2.prototype.invalidate.call(this);
    };
    _proto3.resetTo = function resetTo(property, value, start, startIsRelative) {
        _tickerActive || _ticker.wake();
        this._ts || this.play();
        var time = Math.min(this._dur, (this._dp._time - this._start) * this._ts), ratio;
        this._initted || _initTween(this, time);
        ratio = this._ease(time / this._dur); // don't just get tween.ratio because it may not have rendered yet.
        // possible future addition to allow an object with multiple values to update, like tween.resetTo({x: 100, y: 200}); At this point, it doesn't seem worth the added kb given the fact that most users will likely opt for the convenient gsap.quickTo() way of interacting with this method.
        // if (_isObject(property)) { // performance optimization
        // 	for (p in property) {
        // 		if (_updatePropTweens(this, p, property[p], value ? value[p] : null, start, ratio, time)) {
        // 			return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
        // 		}
        // 	}
        // } else {
        if (_updatePropTweens(this, property, value, start, startIsRelative, ratio, time)) return this.resetTo(property, value, start, startIsRelative); // if a PropTween wasn't found for the property, it'll get forced with a re-initialization so we need to jump out and start over again.
         //}
        _alignPlayhead(this, 0);
        this.parent || _addLinkedListItem(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0);
        return this.render(0);
    };
    _proto3.kill = function kill(targets, vars) {
        if (vars === void 0) vars = "all";
        if (!targets && (!vars || vars === "all")) {
            this._lazy = this._pt = 0;
            return this.parent ? _interrupt(this) : this;
        }
        if (this.timeline) {
            var tDur = this.timeline.totalDuration();
            this.timeline.killTweensOf(targets, vars, _overwritingTween && _overwritingTween.vars.overwrite !== true)._first || _interrupt(this); // if nothing is left tweening, interrupt.
            this.parent && tDur !== this.timeline.totalDuration() && _setDuration(this, this._dur * this.timeline._tDur / tDur, 0, 1); // if a nested tween is killed that changes the duration, it should affect this tween's duration. We must use the ratio, though, because sometimes the internal timeline is stretched like for keyframes where they don't all add up to whatever the parent tween's duration was set to.
            return this;
        }
        var parsedTargets = this._targets, killingTargets = targets ? toArray(targets) : parsedTargets, propTweenLookup = this._ptLookup, firstPT = this._pt, overwrittenProps, curLookup, curOverwriteProps, props, p, pt, i;
        if ((!vars || vars === "all") && _arraysMatch(parsedTargets, killingTargets)) {
            vars === "all" && (this._pt = 0);
            return _interrupt(this);
        }
        overwrittenProps = this._op = this._op || [];
        if (vars !== "all") {
            //so people can pass in a comma-delimited list of property names
            if (_isString(vars)) {
                p = {};
                _forEachName(vars, function(name) {
                    return p[name] = 1;
                });
                vars = p;
            }
            vars = _addAliasesToVars(parsedTargets, vars);
        }
        i = parsedTargets.length;
        while(i--)if (~killingTargets.indexOf(parsedTargets[i])) {
            curLookup = propTweenLookup[i];
            if (vars === "all") {
                overwrittenProps[i] = vars;
                props = curLookup;
                curOverwriteProps = {};
            } else {
                curOverwriteProps = overwrittenProps[i] = overwrittenProps[i] || {};
                props = vars;
            }
            for(p in props){
                pt = curLookup && curLookup[p];
                if (pt) {
                    if (!("kill" in pt.d) || pt.d.kill(p) === true) _removeLinkedListItem(this, pt, "_pt");
                    delete curLookup[p];
                }
                if (curOverwriteProps !== "all") curOverwriteProps[p] = 1;
            }
        }
        this._initted && !this._pt && firstPT && _interrupt(this); //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
        return this;
    };
    Tween1.to = function to(targets, vars) {
        return new Tween1(targets, vars, arguments[2]);
    };
    Tween1.from = function from(targets, vars) {
        return _createTweenType(1, arguments);
    };
    Tween1.delayedCall = function delayedCall(delay, callback, params, scope) {
        return new Tween1(callback, 0, {
            immediateRender: false,
            lazy: false,
            overwrite: false,
            delay: delay,
            onComplete: callback,
            onReverseComplete: callback,
            onCompleteParams: params,
            onReverseCompleteParams: params,
            callbackScope: scope
        });
    };
    Tween1.fromTo = function fromTo(targets, fromVars, toVars) {
        return _createTweenType(2, arguments);
    };
    Tween1.set = function set(targets, vars) {
        vars.duration = 0;
        vars.repeatDelay || (vars.repeat = 0);
        return new Tween1(targets, vars);
    };
    Tween1.killTweensOf = function killTweensOf(targets, props, onlyActive) {
        return _globalTimeline.killTweensOf(targets, props, onlyActive);
    };
    return Tween1;
}(Animation);
_setDefaults(Tween.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
}); //add the pertinent timeline methods to Tween instances so that users can chain conveniently and create a timeline automatically. (removed due to concerns that it'd ultimately add to more confusion especially for beginners)
// _forEachName("to,from,fromTo,set,call,add,addLabel,addPause", name => {
// 	Tween.prototype[name] = function() {
// 		let tl = new Timeline();
// 		return _addToTimeline(tl, this)[name].apply(tl, toArray(arguments));
// 	}
// });
//for backward compatibility. Leverage the timeline calls.
_forEachName("staggerTo,staggerFrom,staggerFromTo", function(name) {
    Tween[name] = function() {
        var tl = new Timeline(), params = _slice.call(arguments, 0);
        params.splice(name === "staggerFromTo" ? 5 : 4, 0, 0);
        return tl[name].apply(tl, params);
    };
});
/*
 * --------------------------------------------------------------------------------------
 * PROPTWEEN
 * --------------------------------------------------------------------------------------
 */ var _setterPlain = function _setterPlain(target, property, value) {
    return target[property] = value;
}, _setterFunc = function _setterFunc(target, property, value) {
    return target[property](value);
}, _setterFuncWithParam = function _setterFuncWithParam(target, property, value, data) {
    return target[property](data.fp, value);
}, _setterAttribute = function _setterAttribute(target, property, value) {
    return target.setAttribute(property, value);
}, _getSetter = function _getSetter(target, property) {
    return _isFunction(target[property]) ? _setterFunc : _isUndefined(target[property]) && target.setAttribute ? _setterAttribute : _setterPlain;
}, _renderPlain = function _renderPlain(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 1000000) / 1000000, data);
}, _renderBoolean = function _renderBoolean(ratio, data) {
    return data.set(data.t, data.p, !!(data.s + data.c * ratio), data);
}, _renderComplexString = function _renderComplexString(ratio, data) {
    var pt = data._pt, s = "";
    if (!ratio && data.b) //b = beginning string
    s = data.b;
    else if (ratio === 1 && data.e) //e = ending string
    s = data.e;
    else {
        while(pt){
            s = pt.p + (pt.m ? pt.m(pt.s + pt.c * ratio) : Math.round((pt.s + pt.c * ratio) * 10000) / 10000) + s; //we use the "p" property for the text inbetween (like a suffix). And in the context of a complex string, the modifier (m) is typically just Math.round(), like for RGB colors.
            pt = pt._next;
        }
        s += data.c; //we use the "c" of the PropTween to store the final chunk of non-numeric text.
    }
    data.set(data.t, data.p, s, data);
}, _renderPropTweens = function _renderPropTweens(ratio, data) {
    var pt = data._pt;
    while(pt){
        pt.r(ratio, pt.d);
        pt = pt._next;
    }
}, _addPluginModifier = function _addPluginModifier(modifier, tween, target, property) {
    var pt = this._pt, next;
    while(pt){
        next = pt._next;
        pt.p === property && pt.modifier(modifier, tween, target);
        pt = next;
    }
}, _killPropTweensOf = function _killPropTweensOf(property) {
    var pt = this._pt, hasNonDependentRemaining, next;
    while(pt){
        next = pt._next;
        if (pt.p === property && !pt.op || pt.op === property) _removeLinkedListItem(this, pt, "_pt");
        else if (!pt.dep) hasNonDependentRemaining = 1;
        pt = next;
    }
    return !hasNonDependentRemaining;
}, _setterWithModifier = function _setterWithModifier(target, property, value, data) {
    data.mSet(target, property, data.m.call(data.tween, value, data.mt), data);
}, _sortPropTweensByPriority = function _sortPropTweensByPriority(parent) {
    var pt = parent._pt, next, pt2, first, last; //sorts the PropTween linked list in order of priority because some plugins need to do their work after ALL of the PropTweens were created (like RoundPropsPlugin and ModifiersPlugin)
    while(pt){
        next = pt._next;
        pt2 = first;
        while(pt2 && pt2.pr > pt.pr)pt2 = pt2._next;
        if (pt._prev = pt2 ? pt2._prev : last) pt._prev._next = pt;
        else first = pt;
        if (pt._next = pt2) pt2._prev = pt;
        else last = pt;
        pt = next;
    }
    parent._pt = first;
}; //PropTween key: t = target, p = prop, r = renderer, d = data, s = start, c = change, op = overwriteProperty (ONLY populated when it's different than p), pr = priority, _next/_prev for the linked list siblings, set = setter, m = modifier, mSet = modifierSetter (the original setter, before a modifier was added)
var PropTween = /*#__PURE__*/ function() {
    function PropTween1(next, target, prop, start, change, renderer, data, setter, priority) {
        this.t = target;
        this.s = start;
        this.c = change;
        this.p = prop;
        this.r = renderer || _renderPlain;
        this.d = data || this;
        this.set = setter || _setterPlain;
        this.pr = priority || 0;
        this._next = next;
        if (next) next._prev = this;
    }
    var _proto4 = PropTween1.prototype;
    _proto4.modifier = function modifier(func, tween, target) {
        this.mSet = this.mSet || this.set; //in case it was already set (a PropTween can only have one modifier)
        this.set = _setterWithModifier;
        this.m = func;
        this.mt = target; //modifier target
        this.tween = tween;
    };
    return PropTween1;
}(); //Initialization tasks
_forEachName(_callbackNames + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(name) {
    return _reservedProps[name] = 1;
});
_globals.TweenMax = _globals.TweenLite = Tween;
_globals.TimelineLite = _globals.TimelineMax = Timeline;
_globalTimeline = new Timeline({
    sortChildren: false,
    defaults: _defaults,
    autoRemoveChildren: true,
    id: "root",
    smoothChildTiming: true
});
_config.stringFilter = _colorStringFilter;
/*
 * --------------------------------------------------------------------------------------
 * GSAP
 * --------------------------------------------------------------------------------------
 */ var _gsap = {
    registerPlugin: function registerPlugin() {
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++)args[_key2] = arguments[_key2];
        args.forEach(function(config) {
            return _createPlugin(config);
        });
    },
    timeline: function timeline(vars) {
        return new Timeline(vars);
    },
    getTweensOf: function getTweensOf(targets, onlyActive) {
        return _globalTimeline.getTweensOf(targets, onlyActive);
    },
    getProperty: function getProperty(target, property1, unit1, uncache1) {
        _isString(target) && (target = toArray(target)[0]); //in case selector text or an array is passed in
        var getter = _getCache(target || {}).get, format = unit1 ? _passThrough : _numericIfPossible;
        unit1 === "native" && (unit1 = "");
        return !target ? target : !property1 ? function(property, unit, uncache) {
            return format((_plugins[property] && _plugins[property].get || getter)(target, property, unit, uncache));
        } : format((_plugins[property1] && _plugins[property1].get || getter)(target, property1, unit1, uncache1));
    },
    quickSetter: function quickSetter(target, property, unit) {
        target = toArray(target);
        if (target.length > 1) {
            var setters = target.map(function(t) {
                return gsap.quickSetter(t, property, unit);
            }), l = setters.length;
            return function(value) {
                var i = l;
                while(i--)setters[i](value);
            };
        }
        target = target[0] || {};
        var Plugin = _plugins[property], cache = _getCache(target), p4 = cache.harness && (cache.harness.aliases || {})[property] || property, // in case it's an alias, like "rotate" for "rotation".
        setter = Plugin ? function(value) {
            var p = new Plugin();
            _quickTween._pt = 0;
            p.init(target, unit ? value + unit : value, _quickTween, 0, [
                target
            ]);
            p.render(1, p);
            _quickTween._pt && _renderPropTweens(1, _quickTween);
        } : cache.set(target, p4);
        return Plugin ? setter : function(value) {
            return setter(target, p4, unit ? value + unit : value, cache, 1);
        };
    },
    quickTo: function quickTo(target, property, vars) {
        var _merge2;
        var tween = gsap.to(target, _merge((_merge2 = {}, _merge2[property] = "+=0.1", _merge2.paused = true, _merge2), vars || {})), func = function func(value, start, startIsRelative) {
            return tween.resetTo(property, value, start, startIsRelative);
        };
        func.tween = tween;
        return func;
    },
    isTweening: function isTweening(targets) {
        return _globalTimeline.getTweensOf(targets, true).length > 0;
    },
    defaults: function defaults(value) {
        value && value.ease && (value.ease = _parseEase(value.ease, _defaults.ease));
        return _mergeDeep(_defaults, value || {});
    },
    config: function config(value) {
        return _mergeDeep(_config, value || {});
    },
    registerEffect: function registerEffect(_ref3) {
        var name = _ref3.name, effect = _ref3.effect, plugins = _ref3.plugins, defaults = _ref3.defaults, extendTimeline = _ref3.extendTimeline;
        (plugins || "").split(",").forEach(function(pluginName) {
            return pluginName && !_plugins[pluginName] && !_globals[pluginName] && _warn(name + " effect requires " + pluginName + " plugin.");
        });
        _effects[name] = function(targets, vars, tl) {
            return effect(toArray(targets), _setDefaults(vars || {}, defaults), tl);
        };
        if (extendTimeline) Timeline.prototype[name] = function(targets, vars, position) {
            return this.add(_effects[name](targets, _isObject(vars) ? vars : (position = vars) && {}, this), position);
        };
    },
    registerEase: function registerEase(name, ease) {
        _easeMap[name] = _parseEase(ease);
    },
    parseEase: function parseEase(ease, defaultEase) {
        return arguments.length ? _parseEase(ease, defaultEase) : _easeMap;
    },
    getById: function getById(id) {
        return _globalTimeline.getById(id);
    },
    exportRoot: function exportRoot(vars, includeDelayedCalls) {
        if (vars === void 0) vars = {};
        var tl = new Timeline(vars), child, next;
        tl.smoothChildTiming = _isNotFalse(vars.smoothChildTiming);
        _globalTimeline.remove(tl);
        tl._dp = 0; //otherwise it'll get re-activated when adding children and be re-introduced into _globalTimeline's linked list (then added to itself).
        tl._time = tl._tTime = _globalTimeline._time;
        child = _globalTimeline._first;
        while(child){
            next = child._next;
            if (includeDelayedCalls || !(!child._dur && child instanceof Tween && child.vars.onComplete === child._targets[0])) _addToTimeline(tl, child, child._start - child._delay);
            child = next;
        }
        _addToTimeline(_globalTimeline, tl, 0);
        return tl;
    },
    utils: {
        wrap: wrap,
        wrapYoyo: wrapYoyo,
        distribute: distribute,
        random: random,
        snap: snap,
        normalize: normalize,
        getUnit: getUnit,
        clamp: clamp,
        splitColor: splitColor,
        toArray: toArray,
        selector: selector,
        mapRange: mapRange,
        pipe: pipe,
        unitize: unitize,
        interpolate: interpolate,
        shuffle: shuffle
    },
    install: _install,
    effects: _effects,
    ticker: _ticker,
    updateRoot: Timeline.updateRoot,
    plugins: _plugins,
    globalTimeline: _globalTimeline,
    core: {
        PropTween: PropTween,
        globals: _addGlobal,
        Tween: Tween,
        Timeline: Timeline,
        Animation: Animation,
        getCache: _getCache,
        _removeLinkedListItem: _removeLinkedListItem,
        suppressOverwrites: function suppressOverwrites(value) {
            return _suppressOverwrites = value;
        }
    }
};
_forEachName("to,from,fromTo,delayedCall,set,killTweensOf", function(name) {
    return _gsap[name] = Tween[name];
});
_ticker.add(Timeline.updateRoot);
_quickTween = _gsap.to({}, {
    duration: 0
}); // ---- EXTRA PLUGINS --------------------------------------------------------
var _getPluginPropTween = function _getPluginPropTween(plugin, prop) {
    var pt = plugin._pt;
    while(pt && pt.p !== prop && pt.op !== prop && pt.fp !== prop)pt = pt._next;
    return pt;
}, _addModifiers = function _addModifiers(tween, modifiers) {
    var targets = tween._targets, p, i, pt;
    for(p in modifiers){
        i = targets.length;
        while(i--){
            pt = tween._ptLookup[i][p];
            if (pt && (pt = pt.d)) {
                if (pt._pt) // is a plugin
                pt = _getPluginPropTween(pt, p);
                pt && pt.modifier && pt.modifier(modifiers[p], tween, targets[i], p);
            }
        }
    }
}, _buildModifierPlugin = function _buildModifierPlugin(name1, modifier) {
    return {
        name: name1,
        rawVars: 1,
        //don't pre-process function-based values or "random()" strings.
        init: function init(target, vars, tween1) {
            tween1._onInit = function(tween) {
                var temp, p;
                if (_isString(vars)) {
                    temp = {};
                    _forEachName(vars, function(name) {
                        return temp[name] = 1;
                    }); //if the user passes in a comma-delimited list of property names to roundProps, like "x,y", we round to whole numbers.
                    vars = temp;
                }
                if (modifier) {
                    temp = {};
                    for(p in vars)temp[p] = modifier(vars[p]);
                    vars = temp;
                }
                _addModifiers(tween, vars);
            };
        }
    };
}; //register core plugins
var gsap = _gsap.registerPlugin({
    name: "attr",
    init: function init(target, vars, tween, index, targets) {
        var p, pt;
        for(p in vars){
            pt = this.add(target, "setAttribute", (target.getAttribute(p) || 0) + "", vars[p], index, targets, 0, 0, p);
            pt && (pt.op = p);
            this._props.push(p);
        }
    }
}, {
    name: "endArray",
    init: function init(target, value) {
        var i = value.length;
        while(i--)this.add(target, i, target[i] || 0, value[i]);
    }
}, _buildModifierPlugin("roundProps", _roundModifier), _buildModifierPlugin("modifiers"), _buildModifierPlugin("snap", snap)) || _gsap; //to prevent the core plugins from being dropped via aggressive tree shaking, we must include them in the variable declaration in this way.
Tween.version = Timeline.version = gsap.version = "3.10.4";
_coreReady = 1;
_windowExists() && _wake();
var Power0 = _easeMap.Power0, Power1 = _easeMap.Power1, Power2 = _easeMap.Power2, Power3 = _easeMap.Power3, Power4 = _easeMap.Power4, Linear = _easeMap.Linear, Quad = _easeMap.Quad, Cubic = _easeMap.Cubic, Quart = _easeMap.Quart, Quint = _easeMap.Quint, Strong = _easeMap.Strong, Elastic = _easeMap.Elastic, Back = _easeMap.Back, SteppedEase = _easeMap.SteppedEase, Bounce = _easeMap.Bounce, Sine = _easeMap.Sine, Expo = _easeMap.Expo, Circ = _easeMap.Circ;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"l02JQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSSPlugin", ()=>CSSPlugin);
parcelHelpers.export(exports, "default", ()=>CSSPlugin);
parcelHelpers.export(exports, "_getBBox", ()=>_getBBox);
parcelHelpers.export(exports, "_createElement", ()=>_createElement);
parcelHelpers.export(exports, "checkPrefix", ()=>_checkPropPrefix);
/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/ /* eslint-disable */ var _gsapCoreJs = require("./gsap-core.js");
var _win, _doc, _docElement, _pluginInitted, _tempDiv, _tempDivStyler, _recentSetterPlugin, _windowExists = function _windowExists() {
    return typeof window !== "undefined";
}, _transformProps = {}, _RAD2DEG = 180 / Math.PI, _DEG2RAD = Math.PI / 180, _atan2 = Math.atan2, _bigNum = 1e8, _capsExp = /([A-Z])/g, _horizontalExp = /(left|right|width|margin|padding|x)/i, _complexExp = /[\s,\(]\S/, _propertyAliases = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, _renderCSSProp = function _renderCSSProp(ratio, data) {
    return data.set(data.t, data.p, Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, _renderPropWithEnd = function _renderPropWithEnd(ratio, data) {
    return data.set(data.t, data.p, ratio === 1 ? data.e : Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u, data);
}, _renderCSSPropWithBeginning = function _renderCSSPropWithBeginning(ratio, data) {
    return data.set(data.t, data.p, ratio ? Math.round((data.s + data.c * ratio) * 10000) / 10000 + data.u : data.b, data);
}, //if units change, we need a way to render the original unit/value when the tween goes all the way back to the beginning (ratio:0)
_renderRoundedCSSProp = function _renderRoundedCSSProp(ratio, data) {
    var value = data.s + data.c * ratio;
    data.set(data.t, data.p, ~~(value + (value < 0 ? -0.5 : .5)) + data.u, data);
}, _renderNonTweeningValue = function _renderNonTweeningValue(ratio, data) {
    return data.set(data.t, data.p, ratio ? data.e : data.b, data);
}, _renderNonTweeningValueOnlyAtEnd = function _renderNonTweeningValueOnlyAtEnd(ratio, data) {
    return data.set(data.t, data.p, ratio !== 1 ? data.b : data.e, data);
}, _setterCSSStyle = function _setterCSSStyle(target, property, value) {
    return target.style[property] = value;
}, _setterCSSProp = function _setterCSSProp(target, property, value) {
    return target.style.setProperty(property, value);
}, _setterTransform = function _setterTransform(target, property, value) {
    return target._gsap[property] = value;
}, _setterScale = function _setterScale(target, property, value) {
    return target._gsap.scaleX = target._gsap.scaleY = value;
}, _setterScaleWithRender = function _setterScaleWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache.scaleX = cache.scaleY = value;
    cache.renderTransform(ratio, cache);
}, _setterTransformWithRender = function _setterTransformWithRender(target, property, value, data, ratio) {
    var cache = target._gsap;
    cache[property] = value;
    cache.renderTransform(ratio, cache);
}, _transformProp = "transform", _transformOriginProp = _transformProp + "Origin", _supports3D, _createElement = function _createElement(type, ns) {
    var e = _doc.createElementNS ? _doc.createElementNS((ns || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), type) : _doc.createElement(type); //some servers swap in https for http in the namespace which can break things, making "style" inaccessible.
    return e.style ? e : _doc.createElement(type); //some environments won't allow access to the element's style when created with a namespace in which case we default to the standard createElement() to work around the issue. Also note that when GSAP is embedded directly inside an SVG file, createElement() won't allow access to the style object in Firefox (see https://greensock.com/forums/topic/20215-problem-using-tweenmax-in-standalone-self-containing-svg-file-err-cannot-set-property-csstext-of-undefined/).
}, _getComputedProperty = function _getComputedProperty1(target, property, skipPrefixFallback) {
    var cs = getComputedStyle(target);
    return cs[property] || cs.getPropertyValue(property.replace(_capsExp, "-$1").toLowerCase()) || cs.getPropertyValue(property) || !skipPrefixFallback && _getComputedProperty1(target, _checkPropPrefix(property) || property, 1) || ""; //css variables may not need caps swapped out for dashes and lowercase.
}, _prefixes = "O,Moz,ms,Ms,Webkit".split(","), _checkPropPrefix = function _checkPropPrefix(property, element, preferPrefix) {
    var e = element || _tempDiv, s = e.style, i = 5;
    if (property in s && !preferPrefix) return property;
    property = property.charAt(0).toUpperCase() + property.substr(1);
    while((i--) && !(_prefixes[i] + property in s));
    return i < 0 ? null : (i === 3 ? "ms" : i >= 0 ? _prefixes[i] : "") + property;
}, _initCore = function _initCore() {
    if (_windowExists() && window.document) {
        _win = window;
        _doc = _win.document;
        _docElement = _doc.documentElement;
        _tempDiv = _createElement("div") || {
            style: {}
        };
        _tempDivStyler = _createElement("div");
        _transformProp = _checkPropPrefix(_transformProp);
        _transformOriginProp = _transformProp + "Origin";
        _tempDiv.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0"; //make sure to override certain properties that may contaminate measurements, in case the user has overreaching style sheets.
        _supports3D = !!_checkPropPrefix("perspective");
        _pluginInitted = 1;
    }
}, _getBBoxHack = function _getBBoxHack1(swapIfPossible) {
    //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
    var svg = _createElement("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), oldParent = this.parentNode, oldSibling = this.nextSibling, oldCSS = this.style.cssText, bbox;
    _docElement.appendChild(svg);
    svg.appendChild(this);
    this.style.display = "block";
    if (swapIfPossible) try {
        bbox = this.getBBox();
        this._gsapBBox = this.getBBox; //store the original
        this.getBBox = _getBBoxHack1;
    } catch (e) {}
    else if (this._gsapBBox) bbox = this._gsapBBox();
    if (oldParent) {
        if (oldSibling) oldParent.insertBefore(this, oldSibling);
        else oldParent.appendChild(this);
    }
    _docElement.removeChild(svg);
    this.style.cssText = oldCSS;
    return bbox;
}, _getAttributeFallbacks = function _getAttributeFallbacks(target, attributesArray) {
    var i = attributesArray.length;
    while(i--){
        if (target.hasAttribute(attributesArray[i])) return target.getAttribute(attributesArray[i]);
    }
}, _getBBox = function _getBBox(target) {
    var bounds;
    try {
        bounds = target.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
    } catch (error) {
        bounds = _getBBoxHack.call(target, true);
    }
    bounds && (bounds.width || bounds.height) || target.getBBox === _getBBoxHack || (bounds = _getBBoxHack.call(target, true)); //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
    return bounds && !bounds.width && !bounds.x && !bounds.y ? {
        x: +_getAttributeFallbacks(target, [
            "x",
            "cx",
            "x1"
        ]) || 0,
        y: +_getAttributeFallbacks(target, [
            "y",
            "cy",
            "y1"
        ]) || 0,
        width: 0,
        height: 0
    } : bounds;
}, _isSVG = function _isSVG(e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
}, //reports if the element is an SVG on which getBBox() actually works
_removeProperty = function _removeProperty(target, property) {
    if (property) {
        var style = target.style;
        if (property in _transformProps && property !== _transformOriginProp) property = _transformProp;
        if (style.removeProperty) {
            if (property.substr(0, 2) === "ms" || property.substr(0, 6) === "webkit") //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
            property = "-" + property;
            style.removeProperty(property.replace(_capsExp, "-$1").toLowerCase());
        } else //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
        style.removeAttribute(property);
    }
}, _addNonTweeningPT = function _addNonTweeningPT(plugin, target, property, beginning, end, onlySetAtEnd) {
    var pt = new (0, _gsapCoreJs.PropTween)(plugin._pt, target, property, 0, 1, onlySetAtEnd ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue);
    plugin._pt = pt;
    pt.b = beginning;
    pt.e = end;
    plugin._props.push(property);
    return pt;
}, _nonConvertibleUnits = {
    deg: 1,
    rad: 1,
    turn: 1
}, //takes a single value like 20px and converts it to the unit specified, like "%", returning only the numeric amount.
_convertToUnit = function _convertToUnit1(target, property, value, unit) {
    var curValue = parseFloat(value) || 0, curUnit = (value + "").trim().substr((curValue + "").length) || "px", // some browsers leave extra whitespace at the beginning of CSS variables, hence the need to trim()
    style = _tempDiv.style, horizontal = _horizontalExp.test(property), isRootSVG = target.tagName.toLowerCase() === "svg", measureProperty = (isRootSVG ? "client" : "offset") + (horizontal ? "Width" : "Height"), amount = 100, toPixels = unit === "px", toPercent = unit === "%", px, parent, cache, isSVG;
    if (unit === curUnit || !curValue || _nonConvertibleUnits[unit] || _nonConvertibleUnits[curUnit]) return curValue;
    curUnit !== "px" && !toPixels && (curValue = _convertToUnit1(target, property, value, "px"));
    isSVG = target.getCTM && _isSVG(target);
    if ((toPercent || curUnit === "%") && (_transformProps[property] || ~property.indexOf("adius"))) {
        px = isSVG ? target.getBBox()[horizontal ? "width" : "height"] : target[measureProperty];
        return (0, _gsapCoreJs._round)(toPercent ? curValue / px * amount : curValue / 100 * px);
    }
    style[horizontal ? "width" : "height"] = amount + (toPixels ? curUnit : unit);
    parent = ~property.indexOf("adius") || unit === "em" && target.appendChild && !isRootSVG ? target : target.parentNode;
    if (isSVG) parent = (target.ownerSVGElement || {}).parentNode;
    if (!parent || parent === _doc || !parent.appendChild) parent = _doc.body;
    cache = parent._gsap;
    if (cache && toPercent && cache.width && horizontal && cache.time === (0, _gsapCoreJs._ticker).time) return (0, _gsapCoreJs._round)(curValue / cache.width * amount);
    else {
        (toPercent || curUnit === "%") && (style.position = _getComputedProperty(target, "position"));
        parent === target && (style.position = "static"); // like for borderRadius, if it's a % we must have it relative to the target itself but that may not have position: relative or position: absolute in which case it'd go up the chain until it finds its offsetParent (bad). position: static protects against that.
        parent.appendChild(_tempDiv);
        px = _tempDiv[measureProperty];
        parent.removeChild(_tempDiv);
        style.position = "absolute";
        if (horizontal && toPercent) {
            cache = (0, _gsapCoreJs._getCache)(parent);
            cache.time = (0, _gsapCoreJs._ticker).time;
            cache.width = parent[measureProperty];
        }
    }
    return (0, _gsapCoreJs._round)(toPixels ? px * curValue / amount : px && curValue ? amount / px * curValue : 0);
}, _get = function _get(target, property, unit, uncache) {
    var value;
    _pluginInitted || _initCore();
    if (property in _propertyAliases && property !== "transform") {
        property = _propertyAliases[property];
        if (~property.indexOf(",")) property = property.split(",")[0];
    }
    if (_transformProps[property] && property !== "transform") {
        value = _parseTransform(target, uncache);
        value = property !== "transformOrigin" ? value[property] : value.svg ? value.origin : _firstTwoOnly(_getComputedProperty(target, _transformOriginProp)) + " " + value.zOrigin + "px";
    } else {
        value = target.style[property];
        if (!value || value === "auto" || uncache || ~(value + "").indexOf("calc(")) value = _specialProps[property] && _specialProps[property](target, property, unit) || _getComputedProperty(target, property) || (0, _gsapCoreJs._getProperty)(target, property) || (property === "opacity" ? 1 : 0); // note: some browsers, like Firefox, don't report borderRadius correctly! Instead, it only reports every corner like  borderTopLeftRadius
    }
    return unit && !~(value + "").trim().indexOf(" ") ? _convertToUnit(target, property, value, unit) + unit : value;
}, _tweenComplexCSSString = function _tweenComplexCSSString(target, prop, start, end) {
    // note: we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within a plugin too, thus "this" would refer to the plugin.
    if (!start || start === "none") {
        // some browsers like Safari actually PREFER the prefixed property and mis-report the unprefixed value like clipPath (BUG). In other words, even though clipPath exists in the style ("clipPath" in target.style) and it's set in the CSS properly (along with -webkit-clip-path), Safari reports clipPath as "none" whereas WebkitClipPath reports accurately like "ellipse(100% 0% at 50% 0%)", so in this case we must SWITCH to using the prefixed property instead. See https://greensock.com/forums/topic/18310-clippath-doesnt-work-on-ios/
        var p = _checkPropPrefix(prop, target, 1), s = p && _getComputedProperty(target, p, 1);
        if (s && s !== start) {
            prop = p;
            start = s;
        } else if (prop === "borderColor") start = _getComputedProperty(target, "borderTopColor"); // Firefox bug: always reports "borderColor" as "", so we must fall back to borderTopColor. See https://greensock.com/forums/topic/24583-how-to-return-colors-that-i-had-after-reverse/
    }
    var pt = new (0, _gsapCoreJs.PropTween)(this._pt, target.style, prop, 0, 1, (0, _gsapCoreJs._renderComplexString)), index = 0, matchIndex = 0, a, result, startValues, startNum, color, startValue, endValue, endNum, chunk, endUnit, startUnit, endValues;
    pt.b = start;
    pt.e = end;
    start += ""; // ensure values are strings
    end += "";
    if (end === "auto") {
        target.style[prop] = end;
        end = _getComputedProperty(target, prop) || end;
        target.style[prop] = start;
    }
    a = [
        start,
        end
    ];
    (0, _gsapCoreJs._colorStringFilter)(a); // pass an array with the starting and ending values and let the filter do whatever it needs to the values. If colors are found, it returns true and then we must match where the color shows up order-wise because for things like boxShadow, sometimes the browser provides the computed values with the color FIRST, but the user provides it with the color LAST, so flip them if necessary. Same for drop-shadow().
    start = a[0];
    end = a[1];
    startValues = start.match((0, _gsapCoreJs._numWithUnitExp)) || [];
    endValues = end.match((0, _gsapCoreJs._numWithUnitExp)) || [];
    if (endValues.length) {
        while(result = (0, _gsapCoreJs._numWithUnitExp).exec(end)){
            endValue = result[0];
            chunk = end.substring(index, result.index);
            if (color) color = (color + 1) % 5;
            else if (chunk.substr(-5) === "rgba(" || chunk.substr(-5) === "hsla(") color = 1;
            if (endValue !== (startValue = startValues[matchIndex++] || "")) {
                startNum = parseFloat(startValue) || 0;
                startUnit = startValue.substr((startNum + "").length);
                endValue.charAt(1) === "=" && (endValue = (0, _gsapCoreJs._parseRelative)(startNum, endValue) + startUnit);
                endNum = parseFloat(endValue);
                endUnit = endValue.substr((endNum + "").length);
                index = (0, _gsapCoreJs._numWithUnitExp).lastIndex - endUnit.length;
                if (!endUnit) {
                    //if something like "perspective:300" is passed in and we must add a unit to the end
                    endUnit = endUnit || (0, _gsapCoreJs._config).units[prop] || startUnit;
                    if (index === end.length) {
                        end += endUnit;
                        pt.e += endUnit;
                    }
                }
                if (startUnit !== endUnit) startNum = _convertToUnit(target, prop, startValue, endUnit) || 0;
                 // these nested PropTweens are handled in a special way - we'll never actually call a render or setter method on them. We'll just loop through them in the parent complex string PropTween's render method.
                pt._pt = {
                    _next: pt._pt,
                    p: chunk || matchIndex === 1 ? chunk : ",",
                    //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
                    s: startNum,
                    c: endNum - startNum,
                    m: color && color < 4 || prop === "zIndex" ? Math.round : 0
                };
            }
        }
        pt.c = index < end.length ? end.substring(index, end.length) : ""; //we use the "c" of the PropTween to store the final part of the string (after the last number)
    } else pt.r = prop === "display" && end === "none" ? _renderNonTweeningValueOnlyAtEnd : _renderNonTweeningValue;
    (0, _gsapCoreJs._relExp).test(end) && (pt.e = 0); //if the end string contains relative values or dynamic random(...) values, delete the end it so that on the final render we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
    this._pt = pt; //start the linked list with this new PropTween. Remember, we call _tweenComplexCSSString.call(pluginInstance...) to ensure that it's scoped properly. We may call it from within another plugin too, thus "this" would refer to the plugin.
    return pt;
}, _keywordToPercent = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, _convertKeywordsToPercentages = function _convertKeywordsToPercentages(value) {
    var split = value.split(" "), x = split[0], y = split[1] || "50%";
    if (x === "top" || x === "bottom" || y === "left" || y === "right") {
        //the user provided them in the wrong order, so flip them
        value = x;
        x = y;
        y = value;
    }
    split[0] = _keywordToPercent[x] || x;
    split[1] = _keywordToPercent[y] || y;
    return split.join(" ");
}, _renderClearProps = function _renderClearProps(ratio, data) {
    if (data.tween && data.tween._time === data.tween._dur) {
        var target = data.t, style = target.style, props = data.u, cache = target._gsap, prop, clearTransforms, i;
        if (props === "all" || props === true) {
            style.cssText = "";
            clearTransforms = 1;
        } else {
            props = props.split(",");
            i = props.length;
            while(--i > -1){
                prop = props[i];
                if (_transformProps[prop]) {
                    clearTransforms = 1;
                    prop = prop === "transformOrigin" ? _transformOriginProp : _transformProp;
                }
                _removeProperty(target, prop);
            }
        }
        if (clearTransforms) {
            _removeProperty(target, _transformProp);
            if (cache) {
                cache.svg && target.removeAttribute("transform");
                _parseTransform(target, 1); // force all the cached values back to "normal"/identity, otherwise if there's another tween that's already set to render transforms on this element, it could display the wrong values.
                cache.uncache = 1;
            }
        }
    }
}, // note: specialProps should return 1 if (and only if) they have a non-zero priority. It indicates we need to sort the linked list.
_specialProps = {
    clearProps: function clearProps(plugin, target, property, endValue, tween) {
        if (tween.data !== "isFromStart") {
            var pt = plugin._pt = new (0, _gsapCoreJs.PropTween)(plugin._pt, target, property, 0, 0, _renderClearProps);
            pt.u = endValue;
            pt.pr = -10;
            pt.tween = tween;
            plugin._props.push(property);
            return 1;
        }
    }
}, /*
 * --------------------------------------------------------------------------------------
 * TRANSFORMS
 * --------------------------------------------------------------------------------------
 */ _identity2DMatrix = [
    1,
    0,
    0,
    1,
    0,
    0
], _rotationalProperties = {}, _isNullTransform = function _isNullTransform(value) {
    return value === "matrix(1, 0, 0, 1, 0, 0)" || value === "none" || !value;
}, _getComputedTransformMatrixAsArray = function _getComputedTransformMatrixAsArray(target) {
    var matrixString = _getComputedProperty(target, _transformProp);
    return _isNullTransform(matrixString) ? _identity2DMatrix : matrixString.substr(7).match((0, _gsapCoreJs._numExp)).map((0, _gsapCoreJs._round));
}, _getMatrix = function _getMatrix(target, force2D) {
    var cache = target._gsap || (0, _gsapCoreJs._getCache)(target), style = target.style, matrix = _getComputedTransformMatrixAsArray(target), parent, nextSibling, temp, addedToDOM;
    if (cache.svg && target.getAttribute("transform")) {
        temp = target.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
        matrix = [
            temp.a,
            temp.b,
            temp.c,
            temp.d,
            temp.e,
            temp.f
        ];
        return matrix.join(",") === "1,0,0,1,0,0" ? _identity2DMatrix : matrix;
    } else if (matrix === _identity2DMatrix && !target.offsetParent && target !== _docElement && !cache.svg) {
        //note: if offsetParent is null, that means the element isn't in the normal document flow, like if it has display:none or one of its ancestors has display:none). Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
        //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
        temp = style.display;
        style.display = "block";
        parent = target.parentNode;
        if (!parent || !target.offsetParent) {
            // note: in 3.3.0 we switched target.offsetParent to _doc.body.contains(target) to avoid [sometimes unnecessary] MutationObserver calls but that wasn't adequate because there are edge cases where nested position: fixed elements need to get reparented to accurately sense transforms. See https://github.com/greensock/GSAP/issues/388 and https://github.com/greensock/GSAP/issues/375
            addedToDOM = 1; //flag
            nextSibling = target.nextSibling;
            _docElement.appendChild(target); //we must add it to the DOM in order to get values properly
        }
        matrix = _getComputedTransformMatrixAsArray(target);
        temp ? style.display = temp : _removeProperty(target, "display");
        if (addedToDOM) nextSibling ? parent.insertBefore(target, nextSibling) : parent ? parent.appendChild(target) : _docElement.removeChild(target);
    }
    return force2D && matrix.length > 6 ? [
        matrix[0],
        matrix[1],
        matrix[4],
        matrix[5],
        matrix[12],
        matrix[13]
    ] : matrix;
}, _applySVGOrigin = function _applySVGOrigin(target, origin, originIsAbsolute, smooth, matrixArray, pluginToAddPropTweensTo) {
    var cache = target._gsap, matrix = matrixArray || _getMatrix(target, true), xOriginOld = cache.xOrigin || 0, yOriginOld = cache.yOrigin || 0, xOffsetOld = cache.xOffset || 0, yOffsetOld = cache.yOffset || 0, a = matrix[0], b = matrix[1], c = matrix[2], d = matrix[3], tx = matrix[4], ty = matrix[5], originSplit = origin.split(" "), xOrigin = parseFloat(originSplit[0]) || 0, yOrigin = parseFloat(originSplit[1]) || 0, bounds, determinant, x, y;
    if (!originIsAbsolute) {
        bounds = _getBBox(target);
        xOrigin = bounds.x + (~originSplit[0].indexOf("%") ? xOrigin / 100 * bounds.width : xOrigin);
        yOrigin = bounds.y + (~(originSplit[1] || originSplit[0]).indexOf("%") ? yOrigin / 100 * bounds.height : yOrigin);
    } else if (matrix !== _identity2DMatrix && (determinant = a * d - b * c)) {
        //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
        x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + (c * ty - d * tx) / determinant;
        y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - (a * ty - b * tx) / determinant;
        xOrigin = x;
        yOrigin = y;
    }
    if (smooth || smooth !== false && cache.smooth) {
        tx = xOrigin - xOriginOld;
        ty = yOrigin - yOriginOld;
        cache.xOffset = xOffsetOld + (tx * a + ty * c) - tx;
        cache.yOffset = yOffsetOld + (tx * b + ty * d) - ty;
    } else cache.xOffset = cache.yOffset = 0;
    cache.xOrigin = xOrigin;
    cache.yOrigin = yOrigin;
    cache.smooth = !!smooth;
    cache.origin = origin;
    cache.originIsAbsolute = !!originIsAbsolute;
    target.style[_transformOriginProp] = "0px 0px"; //otherwise, if someone sets  an origin via CSS, it will likely interfere with the SVG transform attribute ones (because remember, we're baking the origin into the matrix() value).
    if (pluginToAddPropTweensTo) {
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOrigin", xOriginOld, xOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOrigin", yOriginOld, yOrigin);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "xOffset", xOffsetOld, cache.xOffset);
        _addNonTweeningPT(pluginToAddPropTweensTo, cache, "yOffset", yOffsetOld, cache.yOffset);
    }
    target.setAttribute("data-svg-origin", xOrigin + " " + yOrigin);
}, _parseTransform = function _parseTransform(target, uncache) {
    var cache = target._gsap || new (0, _gsapCoreJs.GSCache)(target);
    if ("x" in cache && !uncache && !cache.uncache) return cache;
    var style = target.style, invertedScaleX = cache.scaleX < 0, px = "px", deg = "deg", origin = _getComputedProperty(target, _transformOriginProp) || "0", x, y, z, scaleX, scaleY, rotation, rotationX, rotationY, skewX, skewY, perspective, xOrigin, yOrigin, matrix, angle, cos, sin, a, b, c, d, a12, a22, t1, t2, t3, a13, a23, a33, a42, a43, a32;
    x = y = z = rotation = rotationX = rotationY = skewX = skewY = perspective = 0;
    scaleX = scaleY = 1;
    cache.svg = !!(target.getCTM && _isSVG(target));
    matrix = _getMatrix(target, cache.svg);
    if (cache.svg) {
        t1 = (!cache.uncache || origin === "0px 0px") && !uncache && target.getAttribute("data-svg-origin"); // if origin is 0,0 and cache.uncache is true, let the recorded data-svg-origin stay. Otherwise, whenever we set cache.uncache to true, we'd need to set element.style.transformOrigin = (cache.xOrigin - bbox.x) + "px " + (cache.yOrigin - bbox.y) + "px". Remember, to work around browser inconsistencies we always force SVG elements' transformOrigin to 0,0 and offset the translation accordingly.
        _applySVGOrigin(target, t1 || origin, !!t1 || cache.originIsAbsolute, cache.smooth !== false, matrix);
    }
    xOrigin = cache.xOrigin || 0;
    yOrigin = cache.yOrigin || 0;
    if (matrix !== _identity2DMatrix) {
        a = matrix[0]; //a11
        b = matrix[1]; //a21
        c = matrix[2]; //a31
        d = matrix[3]; //a41
        x = a12 = matrix[4];
        y = a22 = matrix[5]; //2D matrix
        if (matrix.length === 6) {
            scaleX = Math.sqrt(a * a + b * b);
            scaleY = Math.sqrt(d * d + c * c);
            rotation = a || b ? _atan2(b, a) * _RAD2DEG : 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
            skewX = c || d ? _atan2(c, d) * _RAD2DEG + rotation : 0;
            skewX && (scaleY *= Math.abs(Math.cos(skewX * _DEG2RAD)));
            if (cache.svg) {
                x -= xOrigin - (xOrigin * a + yOrigin * c);
                y -= yOrigin - (xOrigin * b + yOrigin * d);
            } //3D matrix
        } else {
            a32 = matrix[6];
            a42 = matrix[7];
            a13 = matrix[8];
            a23 = matrix[9];
            a33 = matrix[10];
            a43 = matrix[11];
            x = matrix[12];
            y = matrix[13];
            z = matrix[14];
            angle = _atan2(a32, a33);
            rotationX = angle * _RAD2DEG; //rotationX
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a12 * cos + a13 * sin;
                t2 = a22 * cos + a23 * sin;
                t3 = a32 * cos + a33 * sin;
                a13 = a12 * -sin + a13 * cos;
                a23 = a22 * -sin + a23 * cos;
                a33 = a32 * -sin + a33 * cos;
                a43 = a42 * -sin + a43 * cos;
                a12 = t1;
                a22 = t2;
                a32 = t3;
            } //rotationY
            angle = _atan2(-c, a33);
            rotationY = angle * _RAD2DEG;
            if (angle) {
                cos = Math.cos(-angle);
                sin = Math.sin(-angle);
                t1 = a * cos - a13 * sin;
                t2 = b * cos - a23 * sin;
                t3 = c * cos - a33 * sin;
                a43 = d * sin + a43 * cos;
                a = t1;
                b = t2;
                c = t3;
            } //rotationZ
            angle = _atan2(b, a);
            rotation = angle * _RAD2DEG;
            if (angle) {
                cos = Math.cos(angle);
                sin = Math.sin(angle);
                t1 = a * cos + b * sin;
                t2 = a12 * cos + a22 * sin;
                b = b * cos - a * sin;
                a22 = a22 * cos - a12 * sin;
                a = t1;
                a12 = t2;
            }
            if (rotationX && Math.abs(rotationX) + Math.abs(rotation) > 359.9) {
                //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
                rotationX = rotation = 0;
                rotationY = 180 - rotationY;
            }
            scaleX = (0, _gsapCoreJs._round)(Math.sqrt(a * a + b * b + c * c));
            scaleY = (0, _gsapCoreJs._round)(Math.sqrt(a22 * a22 + a32 * a32));
            angle = _atan2(a12, a22);
            skewX = Math.abs(angle) > 0.0002 ? angle * _RAD2DEG : 0;
            perspective = a43 ? 1 / (a43 < 0 ? -a43 : a43) : 0;
        }
        if (cache.svg) {
            //sense if there are CSS transforms applied on an SVG element in which case we must overwrite them when rendering. The transform attribute is more reliable cross-browser, but we can't just remove the CSS ones because they may be applied in a CSS rule somewhere (not just inline).
            t1 = target.getAttribute("transform");
            cache.forceCSS = target.setAttribute("transform", "") || !_isNullTransform(_getComputedProperty(target, _transformProp));
            t1 && target.setAttribute("transform", t1);
        }
    }
    if (Math.abs(skewX) > 90 && Math.abs(skewX) < 270) {
        if (invertedScaleX) {
            scaleX *= -1;
            skewX += rotation <= 0 ? 180 : -180;
            rotation += rotation <= 0 ? 180 : -180;
        } else {
            scaleY *= -1;
            skewX += skewX <= 0 ? 180 : -180;
        }
    }
    uncache = uncache || cache.uncache;
    cache.x = x - ((cache.xPercent = x && (!uncache && cache.xPercent || (Math.round(target.offsetWidth / 2) === Math.round(-x) ? -50 : 0))) ? target.offsetWidth * cache.xPercent / 100 : 0) + px;
    cache.y = y - ((cache.yPercent = y && (!uncache && cache.yPercent || (Math.round(target.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? target.offsetHeight * cache.yPercent / 100 : 0) + px;
    cache.z = z + px;
    cache.scaleX = (0, _gsapCoreJs._round)(scaleX);
    cache.scaleY = (0, _gsapCoreJs._round)(scaleY);
    cache.rotation = (0, _gsapCoreJs._round)(rotation) + deg;
    cache.rotationX = (0, _gsapCoreJs._round)(rotationX) + deg;
    cache.rotationY = (0, _gsapCoreJs._round)(rotationY) + deg;
    cache.skewX = skewX + deg;
    cache.skewY = skewY + deg;
    cache.transformPerspective = perspective + px;
    if (cache.zOrigin = parseFloat(origin.split(" ")[2]) || 0) style[_transformOriginProp] = _firstTwoOnly(origin);
    cache.xOffset = cache.yOffset = 0;
    cache.force3D = (0, _gsapCoreJs._config).force3D;
    cache.renderTransform = cache.svg ? _renderSVGTransforms : _supports3D ? _renderCSSTransforms : _renderNon3DTransforms;
    cache.uncache = 0;
    return cache;
}, _firstTwoOnly = function _firstTwoOnly(value) {
    return (value = value.split(" "))[0] + " " + value[1];
}, //for handling transformOrigin values, stripping out the 3rd dimension
_addPxTranslate = function _addPxTranslate(target, start, value) {
    var unit = (0, _gsapCoreJs.getUnit)(start);
    return (0, _gsapCoreJs._round)(parseFloat(start) + parseFloat(_convertToUnit(target, "x", value + "px", unit))) + unit;
}, _renderNon3DTransforms = function _renderNon3DTransforms(ratio, cache) {
    cache.z = "0px";
    cache.rotationY = cache.rotationX = "0deg";
    cache.force3D = 0;
    _renderCSSTransforms(ratio, cache);
}, _zeroDeg = "0deg", _zeroPx = "0px", _endParenthesis = ") ", _renderCSSTransforms = function _renderCSSTransforms(ratio, cache) {
    var _ref = cache || this, xPercent = _ref.xPercent, yPercent = _ref.yPercent, x = _ref.x, y = _ref.y, z = _ref.z, rotation = _ref.rotation, rotationY = _ref.rotationY, rotationX = _ref.rotationX, skewX = _ref.skewX, skewY = _ref.skewY, scaleX = _ref.scaleX, scaleY = _ref.scaleY, transformPerspective = _ref.transformPerspective, force3D = _ref.force3D, target = _ref.target, zOrigin = _ref.zOrigin, transforms = "", use3D = force3D === "auto" && ratio && ratio !== 1 || force3D === true; // Safari has a bug that causes it not to render 3D transform-origin values properly, so we force the z origin to 0, record it in the cache, and then do the math here to offset the translate values accordingly (basically do the 3D transform-origin part manually)
    if (zOrigin && (rotationX !== _zeroDeg || rotationY !== _zeroDeg)) {
        var angle = parseFloat(rotationY) * _DEG2RAD, a13 = Math.sin(angle), a33 = Math.cos(angle), cos;
        angle = parseFloat(rotationX) * _DEG2RAD;
        cos = Math.cos(angle);
        x = _addPxTranslate(target, x, a13 * cos * -zOrigin);
        y = _addPxTranslate(target, y, -Math.sin(angle) * -zOrigin);
        z = _addPxTranslate(target, z, a33 * cos * -zOrigin + zOrigin);
    }
    if (transformPerspective !== _zeroPx) transforms += "perspective(" + transformPerspective + _endParenthesis;
    if (xPercent || yPercent) transforms += "translate(" + xPercent + "%, " + yPercent + "%) ";
    if (use3D || x !== _zeroPx || y !== _zeroPx || z !== _zeroPx) transforms += z !== _zeroPx || use3D ? "translate3d(" + x + ", " + y + ", " + z + ") " : "translate(" + x + ", " + y + _endParenthesis;
    if (rotation !== _zeroDeg) transforms += "rotate(" + rotation + _endParenthesis;
    if (rotationY !== _zeroDeg) transforms += "rotateY(" + rotationY + _endParenthesis;
    if (rotationX !== _zeroDeg) transforms += "rotateX(" + rotationX + _endParenthesis;
    if (skewX !== _zeroDeg || skewY !== _zeroDeg) transforms += "skew(" + skewX + ", " + skewY + _endParenthesis;
    if (scaleX !== 1 || scaleY !== 1) transforms += "scale(" + scaleX + ", " + scaleY + _endParenthesis;
    target.style[_transformProp] = transforms || "translate(0, 0)";
}, _renderSVGTransforms = function _renderSVGTransforms(ratio, cache) {
    var _ref2 = cache || this, xPercent = _ref2.xPercent, yPercent = _ref2.yPercent, x = _ref2.x, y = _ref2.y, rotation = _ref2.rotation, skewX = _ref2.skewX, skewY = _ref2.skewY, scaleX = _ref2.scaleX, scaleY = _ref2.scaleY, target = _ref2.target, xOrigin = _ref2.xOrigin, yOrigin = _ref2.yOrigin, xOffset = _ref2.xOffset, yOffset = _ref2.yOffset, forceCSS = _ref2.forceCSS, tx = parseFloat(x), ty = parseFloat(y), a11, a21, a12, a22, temp;
    rotation = parseFloat(rotation);
    skewX = parseFloat(skewX);
    skewY = parseFloat(skewY);
    if (skewY) {
        //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
        skewY = parseFloat(skewY);
        skewX += skewY;
        rotation += skewY;
    }
    if (rotation || skewX) {
        rotation *= _DEG2RAD;
        skewX *= _DEG2RAD;
        a11 = Math.cos(rotation) * scaleX;
        a21 = Math.sin(rotation) * scaleX;
        a12 = Math.sin(rotation - skewX) * -scaleY;
        a22 = Math.cos(rotation - skewX) * scaleY;
        if (skewX) {
            skewY *= _DEG2RAD;
            temp = Math.tan(skewX - skewY);
            temp = Math.sqrt(1 + temp * temp);
            a12 *= temp;
            a22 *= temp;
            if (skewY) {
                temp = Math.tan(skewY);
                temp = Math.sqrt(1 + temp * temp);
                a11 *= temp;
                a21 *= temp;
            }
        }
        a11 = (0, _gsapCoreJs._round)(a11);
        a21 = (0, _gsapCoreJs._round)(a21);
        a12 = (0, _gsapCoreJs._round)(a12);
        a22 = (0, _gsapCoreJs._round)(a22);
    } else {
        a11 = scaleX;
        a22 = scaleY;
        a21 = a12 = 0;
    }
    if (tx && !~(x + "").indexOf("px") || ty && !~(y + "").indexOf("px")) {
        tx = _convertToUnit(target, "x", x, "px");
        ty = _convertToUnit(target, "y", y, "px");
    }
    if (xOrigin || yOrigin || xOffset || yOffset) {
        tx = (0, _gsapCoreJs._round)(tx + xOrigin - (xOrigin * a11 + yOrigin * a12) + xOffset);
        ty = (0, _gsapCoreJs._round)(ty + yOrigin - (xOrigin * a21 + yOrigin * a22) + yOffset);
    }
    if (xPercent || yPercent) {
        //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the translation to simulate it.
        temp = target.getBBox();
        tx = (0, _gsapCoreJs._round)(tx + xPercent / 100 * temp.width);
        ty = (0, _gsapCoreJs._round)(ty + yPercent / 100 * temp.height);
    }
    temp = "matrix(" + a11 + "," + a21 + "," + a12 + "," + a22 + "," + tx + "," + ty + ")";
    target.setAttribute("transform", temp);
    forceCSS && (target.style[_transformProp] = temp); //some browsers prioritize CSS transforms over the transform attribute. When we sense that the user has CSS transforms applied, we must overwrite them this way (otherwise some browser simply won't render the  transform attribute changes!)
}, _addRotationalPropTween = function _addRotationalPropTween(plugin, target, property, startNum, endValue) {
    var cap = 360, isString = (0, _gsapCoreJs._isString)(endValue), endNum = parseFloat(endValue) * (isString && ~endValue.indexOf("rad") ? _RAD2DEG : 1), change = endNum - startNum, finalValue = startNum + change + "deg", direction, pt;
    if (isString) {
        direction = endValue.split("_")[1];
        if (direction === "short") {
            change %= cap;
            if (change !== change % (cap / 2)) change += change < 0 ? cap : -cap;
        }
        if (direction === "cw" && change < 0) change = (change + cap * _bigNum) % cap - ~~(change / cap) * cap;
        else if (direction === "ccw" && change > 0) change = (change - cap * _bigNum) % cap - ~~(change / cap) * cap;
    }
    plugin._pt = pt = new (0, _gsapCoreJs.PropTween)(plugin._pt, target, property, startNum, change, _renderPropWithEnd);
    pt.e = finalValue;
    pt.u = "deg";
    plugin._props.push(property);
    return pt;
}, _assign = function _assign(target, source) {
    // Internet Explorer doesn't have Object.assign(), so we recreate it here.
    for(var p in source)target[p] = source[p];
    return target;
}, _addRawTransformPTs = function _addRawTransformPTs(plugin, transforms, target) {
    //for handling cases where someone passes in a whole transform string, like transform: "scale(2, 3) rotate(20deg) translateY(30em)"
    var startCache = _assign({}, target._gsap), exclude = "perspective,force3D,transformOrigin,svgOrigin", style = target.style, endCache, p, startValue, endValue, startNum, endNum, startUnit, endUnit;
    if (startCache.svg) {
        startValue = target.getAttribute("transform");
        target.setAttribute("transform", "");
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        _removeProperty(target, _transformProp);
        target.setAttribute("transform", startValue);
    } else {
        startValue = getComputedStyle(target)[_transformProp];
        style[_transformProp] = transforms;
        endCache = _parseTransform(target, 1);
        style[_transformProp] = startValue;
    }
    for(p in _transformProps){
        startValue = startCache[p];
        endValue = endCache[p];
        if (startValue !== endValue && exclude.indexOf(p) < 0) {
            //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
            startUnit = (0, _gsapCoreJs.getUnit)(startValue);
            endUnit = (0, _gsapCoreJs.getUnit)(endValue);
            startNum = startUnit !== endUnit ? _convertToUnit(target, p, startValue, endUnit) : parseFloat(startValue);
            endNum = parseFloat(endValue);
            plugin._pt = new (0, _gsapCoreJs.PropTween)(plugin._pt, endCache, p, startNum, endNum - startNum, _renderCSSProp);
            plugin._pt.u = endUnit || 0;
            plugin._props.push(p);
        }
    }
    _assign(endCache, startCache);
}; // handle splitting apart padding, margin, borderWidth, and borderRadius into their 4 components. Firefox, for example, won't report borderRadius correctly - it will only do borderTopLeftRadius and the other corners. We also want to handle paddingTop, marginLeft, borderRightWidth, etc.
(0, _gsapCoreJs._forEachName)("padding,margin,Width,Radius", function(name, index) {
    var t = "Top", r = "Right", b = "Bottom", l = "Left", props = (index < 3 ? [
        t,
        r,
        b,
        l
    ] : [
        t + l,
        t + r,
        b + r,
        b + l
    ]).map(function(side) {
        return index < 2 ? name + side : "border" + side + name;
    });
    _specialProps[index > 1 ? "border" + name : name] = function(plugin, target, property, endValue, tween) {
        var a, vars;
        if (arguments.length < 4) {
            // getter, passed target, property, and unit (from _get())
            a = props.map(function(prop) {
                return _get(plugin, prop, property);
            });
            vars = a.join(" ");
            return vars.split(a[0]).length === 5 ? a[0] : vars;
        }
        a = (endValue + "").split(" ");
        vars = {};
        props.forEach(function(prop, i) {
            return vars[prop] = a[i] = a[i] || a[(i - 1) / 2 | 0];
        });
        plugin.init(target, vars, tween);
    };
});
var CSSPlugin = {
    name: "css",
    register: _initCore,
    targetTest: function targetTest(target) {
        return target.style && target.nodeType;
    },
    init: function init(target, vars, tween, index, targets) {
        var props = this._props, style = target.style, startAt = tween.vars.startAt, startValue, endValue, endNum, startNum, type, specialProp, p, startUnit, endUnit, relative, isTransformRelated, transformPropTween, cache, smooth, hasPriority;
        _pluginInitted || _initCore();
        for(p in vars){
            if (p === "autoRound") continue;
            endValue = vars[p];
            if ((0, _gsapCoreJs._plugins)[p] && (0, _gsapCoreJs._checkPlugin)(p, vars, tween, index, target, targets)) continue;
            type = typeof endValue;
            specialProp = _specialProps[p];
            if (type === "function") {
                endValue = endValue.call(tween, index, target, targets);
                type = typeof endValue;
            }
            if (type === "string" && ~endValue.indexOf("random(")) endValue = (0, _gsapCoreJs._replaceRandom)(endValue);
            if (specialProp) specialProp(this, target, p, endValue, tween) && (hasPriority = 1);
            else if (p.substr(0, 2) === "--") {
                //CSS variable
                startValue = (getComputedStyle(target).getPropertyValue(p) + "").trim();
                endValue += "";
                (0, _gsapCoreJs._colorExp).lastIndex = 0;
                if (!(0, _gsapCoreJs._colorExp).test(startValue)) {
                    // colors don't have units
                    startUnit = (0, _gsapCoreJs.getUnit)(startValue);
                    endUnit = (0, _gsapCoreJs.getUnit)(endValue);
                }
                endUnit ? startUnit !== endUnit && (startValue = _convertToUnit(target, p, startValue, endUnit) + endUnit) : startUnit && (endValue += startUnit);
                this.add(style, "setProperty", startValue, endValue, index, targets, 0, 0, p);
                props.push(p);
            } else if (type !== "undefined") {
                if (startAt && p in startAt) {
                    // in case someone hard-codes a complex value as the start, like top: "calc(2vh / 2)". Without this, it'd use the computed value (always in px)
                    startValue = typeof startAt[p] === "function" ? startAt[p].call(tween, index, target, targets) : startAt[p];
                    (0, _gsapCoreJs._isString)(startValue) && ~startValue.indexOf("random(") && (startValue = (0, _gsapCoreJs._replaceRandom)(startValue));
                    (0, _gsapCoreJs.getUnit)(startValue + "") || (startValue += (0, _gsapCoreJs._config).units[p] || (0, _gsapCoreJs.getUnit)(_get(target, p)) || ""); // for cases when someone passes in a unitless value like {x: 100}; if we try setting translate(100, 0px) it won't work.
                    (startValue + "").charAt(1) === "=" && (startValue = _get(target, p)); // can't work with relative values
                } else startValue = _get(target, p);
                startNum = parseFloat(startValue);
                relative = type === "string" && endValue.charAt(1) === "=" && endValue.substr(0, 2);
                relative && (endValue = endValue.substr(2));
                endNum = parseFloat(endValue);
                if (p in _propertyAliases) {
                    if (p === "autoAlpha") {
                        //special case where we control the visibility along with opacity. We still allow the opacity value to pass through and get tweened.
                        if (startNum === 1 && _get(target, "visibility") === "hidden" && endNum) //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
                        startNum = 0;
                        _addNonTweeningPT(this, style, "visibility", startNum ? "inherit" : "hidden", endNum ? "inherit" : "hidden", !endNum);
                    }
                    if (p !== "scale" && p !== "transform") {
                        p = _propertyAliases[p];
                        ~p.indexOf(",") && (p = p.split(",")[0]);
                    }
                }
                isTransformRelated = p in _transformProps; //--- TRANSFORM-RELATED ---
                if (isTransformRelated) {
                    if (!transformPropTween) {
                        cache = target._gsap;
                        cache.renderTransform && !vars.parseTransform || _parseTransform(target, vars.parseTransform); // if, for example, gsap.set(... {transform:"translateX(50vw)"}), the _get() call doesn't parse the transform, thus cache.renderTransform won't be set yet so force the parsing of the transform here.
                        smooth = vars.smoothOrigin !== false && cache.smooth;
                        transformPropTween = this._pt = new (0, _gsapCoreJs.PropTween)(this._pt, style, _transformProp, 0, 1, cache.renderTransform, cache, 0, -1); //the first time through, create the rendering PropTween so that it runs LAST (in the linked list, we keep adding to the beginning)
                        transformPropTween.dep = 1; //flag it as dependent so that if things get killed/overwritten and this is the only PropTween left, we can safely kill the whole tween.
                    }
                    if (p === "scale") {
                        this._pt = new (0, _gsapCoreJs.PropTween)(this._pt, cache, "scaleY", cache.scaleY, (relative ? (0, _gsapCoreJs._parseRelative)(cache.scaleY, relative + endNum) : endNum) - cache.scaleY || 0);
                        props.push("scaleY", p);
                        p += "X";
                    } else if (p === "transformOrigin") {
                        endValue = _convertKeywordsToPercentages(endValue); //in case something like "left top" or "bottom right" is passed in. Convert to percentages.
                        if (cache.svg) _applySVGOrigin(target, endValue, 0, smooth, 0, this);
                        else {
                            endUnit = parseFloat(endValue.split(" ")[2]) || 0; //handle the zOrigin separately!
                            endUnit !== cache.zOrigin && _addNonTweeningPT(this, cache, "zOrigin", cache.zOrigin, endUnit);
                            _addNonTweeningPT(this, style, p, _firstTwoOnly(startValue), _firstTwoOnly(endValue));
                        }
                        continue;
                    } else if (p === "svgOrigin") {
                        _applySVGOrigin(target, endValue, 1, smooth, 0, this);
                        continue;
                    } else if (p in _rotationalProperties) {
                        _addRotationalPropTween(this, cache, p, startNum, relative ? (0, _gsapCoreJs._parseRelative)(startNum, relative + endValue) : endValue);
                        continue;
                    } else if (p === "smoothOrigin") {
                        _addNonTweeningPT(this, cache, "smooth", cache.smooth, endValue);
                        continue;
                    } else if (p === "force3D") {
                        cache[p] = endValue;
                        continue;
                    } else if (p === "transform") {
                        _addRawTransformPTs(this, endValue, target);
                        continue;
                    }
                } else if (!(p in style)) p = _checkPropPrefix(p) || p;
                if (isTransformRelated || (endNum || endNum === 0) && (startNum || startNum === 0) && !_complexExp.test(endValue) && p in style) {
                    startUnit = (startValue + "").substr((startNum + "").length);
                    endNum || (endNum = 0); // protect against NaN
                    endUnit = (0, _gsapCoreJs.getUnit)(endValue) || (p in (0, _gsapCoreJs._config).units ? (0, _gsapCoreJs._config).units[p] : startUnit);
                    startUnit !== endUnit && (startNum = _convertToUnit(target, p, startValue, endUnit));
                    this._pt = new (0, _gsapCoreJs.PropTween)(this._pt, isTransformRelated ? cache : style, p, startNum, (relative ? (0, _gsapCoreJs._parseRelative)(startNum, relative + endNum) : endNum) - startNum, !isTransformRelated && (endUnit === "px" || p === "zIndex") && vars.autoRound !== false ? _renderRoundedCSSProp : _renderCSSProp);
                    this._pt.u = endUnit || 0;
                    if (startUnit !== endUnit && endUnit !== "%") {
                        //when the tween goes all the way back to the beginning, we need to revert it to the OLD/ORIGINAL value (with those units). We record that as a "b" (beginning) property and point to a render method that handles that. (performance optimization)
                        this._pt.b = startValue;
                        this._pt.r = _renderCSSPropWithBeginning;
                    }
                } else if (!(p in style)) {
                    if (p in target) //maybe it's not a style - it could be a property added directly to an element in which case we'll try to animate that.
                    this.add(target, p, startValue || target[p], relative ? relative + endValue : endValue, index, targets);
                    else {
                        (0, _gsapCoreJs._missingPlugin)(p, endValue);
                        continue;
                    }
                } else _tweenComplexCSSString.call(this, target, p, startValue, relative ? relative + endValue : endValue);
                props.push(p);
            }
        }
        hasPriority && (0, _gsapCoreJs._sortPropTweensByPriority)(this);
    },
    get: _get,
    aliases: _propertyAliases,
    getSetter: function getSetter(target, property, plugin) {
        //returns a setter function that accepts target, property, value and applies it accordingly. Remember, properties like "x" aren't as simple as target.style.property = value because they've got to be applied to a proxy object and then merged into a transform string in a renderer.
        var p = _propertyAliases[property];
        p && p.indexOf(",") < 0 && (property = p);
        return property in _transformProps && property !== _transformOriginProp && (target._gsap.x || _get(target, "x")) ? plugin && _recentSetterPlugin === plugin ? property === "scale" ? _setterScale : _setterTransform : (_recentSetterPlugin = plugin || {}, property === "scale" ? _setterScaleWithRender : _setterTransformWithRender) : target.style && !(0, _gsapCoreJs._isUndefined)(target.style[property]) ? _setterCSSStyle : ~property.indexOf("-") ? _setterCSSProp : (0, _gsapCoreJs._getSetter)(target, property);
    },
    core: {
        _removeProperty: _removeProperty,
        _getMatrix: _getMatrix
    }
};
(0, _gsapCoreJs.gsap).utils.checkPrefix = _checkPropPrefix;
(function(positionAndScale, rotation, others, aliases) {
    var all = (0, _gsapCoreJs._forEachName)(positionAndScale + "," + rotation + "," + others, function(name) {
        _transformProps[name] = 1;
    });
    (0, _gsapCoreJs._forEachName)(rotation, function(name) {
        (0, _gsapCoreJs._config).units[name] = "deg";
        _rotationalProperties[name] = 1;
    });
    _propertyAliases[all[13]] = positionAndScale + "," + rotation;
    (0, _gsapCoreJs._forEachName)(aliases, function(name) {
        var split = name.split(":");
        _propertyAliases[split[1]] = all[split[0]];
    });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
(0, _gsapCoreJs._forEachName)("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(name) {
    (0, _gsapCoreJs._config).units[name] = "px";
});
(0, _gsapCoreJs.gsap).registerPlugin(CSSPlugin);

},{"./gsap-core.js":"05eeC","@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"9QdDV":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _twglJs = require("twgl.js");
var _gsap = require("gsap");
var _gsapDefault = parcelHelpers.interopDefault(_gsap);
var _observer = require("../utils/observer");
var _observerDefault = parcelHelpers.interopDefault(_observer);
var _domUtilsJs = require("../utils/dom-utils.js");
var _textureLoaderJs = require("../utils/texture-loader.js");
var _quadJs = require("./_quad.js");
var _quadJsDefault = parcelHelpers.interopDefault(_quadJs);
var _ = require("../mat/dom/");
var _Default = parcelHelpers.interopDefault(_);
exports.default = class extends (0, _quadJsDefault.default) {
    constructor(gl, ref, gridRef){
        super(gl, {});
        this.gl = gl;
        this.ref = ref;
        this.gridRef = gridRef;
        console.log(this.gridRef);
        this.anim = {
            rand: Math.random(),
            inView: 0,
            hover: 0
        };
        this.texture = {
            texture: null,
            ratio: [
                1,
                1
            ]
        };
        this.gridMat = (0, _twglJs.m4).create();
        this.gridRatio = [
            1,
            1
        ];
        this.loadTexture();
        this.initDom();
    }
    loadTexture() {
        // get texture from dom
        const loadedData = (0, _textureLoaderJs.loadTextureAndData)(this.gl, this.ref.children[0], this.gl.LINEAR);
        this.texture = loadedData;
        this.gridRatio = (0, _textureLoaderJs.calcRatio)(this.ref.children[0], this.gridRef);
    //console.log(this.gridRatio);
    }
    createProgram() {
        this.shaders = (0, _Default.default);
        this.programInfo = (0, _twglJs.createProgramInfo)(this.gl, this.shaders);
    }
    resize(gl) {
        this.gl = gl;
        // scroll based pos
        const pos = (0, _domUtilsJs.calcDomPosition)(this.ref, this.gl.vp);
        (0, _twglJs.m4).translation([
            pos.x,
            pos.y,
            0
        ], this.mat);
        // grid based pos
        const gridPos = (0, _domUtilsJs.calcDomPosition)(this.gridRef, this.gl.vp);
        (0, _twglJs.m4).translation([
            gridPos.x,
            gridPos.y,
            0
        ], this.gridMat);
        this.gl.useProgram(this.programInfo.program);
        (0, _twglJs.setUniforms)(this.programInfo, {
            u_res: [
                gl.canvas.width,
                gl.canvas.height
            ],
            u_vs: gl.vp.viewSize,
            u_id: this.mat,
            u_camera: gl.camera.mat,
            u_scale: [
                pos.width,
                pos.height
            ],
            u_gridScale: [
                gridPos.width,
                gridPos.height
            ]
        });
    }
    render(t, y, { grid  }) {
        this.gl.useProgram(this.programInfo.program);
        (0, _twglJs.setBuffersAndAttributes)(this.gl, this.programInfo, this.bufferInfo);
        (0, _twglJs.setUniforms)(this.programInfo, {
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
        (0, _twglJs.drawBufferInfo)(this.gl, this.bufferInfo);
    // this.gl.LINES
    }
    /**
   * --------------- Dom
   */ initDom() {
        this.obs = new (0, _observerDefault.default)(this.ref);
        this.obs.on("in", ()=>this.animateIn());
        this.obs.on("out", ()=>this.animateOut());
        this.ref.onmouseover = ()=>this.animateMouseIn();
        this.ref.onmouseleave = ()=>this.animateMouseOut();
        this.gridRef.onmouseover = ()=>this.animateMouseIn();
        this.gridRef.onmouseleave = ()=>this.animateMouseOut();
    }
    animateIn() {
        this.animationIn = (0, _gsapDefault.default).to(this.anim, {
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
        (0, _gsapDefault.default).to(this.anim, {
            hover: 1,
            ease: "expo.out",
            duration: 0.8
        });
    }
    animateMouseOut() {
        (0, _gsapDefault.default).to(this.anim, {
            hover: 0,
            ease: "expo.out",
            duration: 0.8
        });
    }
};

},{"twgl.js":"3uqAP","gsap":"fPSuC","../utils/observer":"f19sX","../utils/dom-utils.js":"6zONL","../utils/texture-loader.js":"6Tlk6","./_quad.js":"9Ofd3","../mat/dom/":"2JT6W","@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"f19sX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _tinyEmitter = require("tiny-emitter");
var _tinyEmitterDefault = parcelHelpers.interopDefault(_tinyEmitter);
exports.default = class extends (0, _tinyEmitterDefault.default) {
    constructor(el){
        super();
        this.el = el;
        this.setup();
        this.observerIn.observe(this.el);
        this.observerOut.observe(this.el);
    }
    setup() {
        this.observerIn = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) this.emit("in");
            });
        }, {
            root: null,
            threshold: 0.7,
            rootMargin: "0% 0% 0% 0%"
        });
        this.observerOut = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (!entry.isIntersecting) this.emit("out");
            });
        }, {
            root: null,
            threshold: 0.0,
            rootMargin: "0% 0% 0% 0%"
        });
    }
};

},{"tiny-emitter":"2GwCf","@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"2GwCf":[function(require,module,exports) {
function E() {
// Keep this empty so it's easier to inherit from
// (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}
E.prototype = {
    on: function(name, callback, ctx) {
        var e = this.e || (this.e = {});
        (e[name] || (e[name] = [])).push({
            fn: callback,
            ctx: ctx
        });
        return this;
    },
    once: function(name, callback, ctx) {
        var self = this;
        function listener() {
            self.off(name, listener);
            callback.apply(ctx, arguments);
        }
        listener._ = callback;
        return this.on(name, listener, ctx);
    },
    emit: function(name) {
        var data = [].slice.call(arguments, 1);
        var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
        var i = 0;
        var len = evtArr.length;
        for(i; i < len; i++)evtArr[i].fn.apply(evtArr[i].ctx, data);
        return this;
    },
    off: function(name, callback) {
        var e = this.e || (this.e = {});
        var evts = e[name];
        var liveEvents = [];
        if (evts && callback) {
            for(var i = 0, len = evts.length; i < len; i++)if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
        }
        // Remove event from queue to prevent memory leak
        // Suggested by https://github.com/lazd
        // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910
        liveEvents.length ? e[name] = liveEvents : delete e[name];
        return this;
    }
};
module.exports = E;
module.exports.TinyEmitter = E;

},{}],"6zONL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Position and Scale + images/quads
 */ parcelHelpers.export(exports, "calcDomPosition", ()=>calcDomPosition) /**
 * Position and Scale + images/quads
 * TO BE TESTED!
 * 
 export function calcDomPositionArray(refs, viewport) {
  return refs.map((ref) => calcDomPosition(ref, viewport));
}

 */ ;
function calcDomPosition(ref, viewport) {
    const { px , inner , scroll  } = viewport;
    const { x , y , width , height  } = ref.getBoundingClientRect();
    return {
        x: (x - inner[0] / 2 + width / 2) * px,
        y: -(y + scroll - inner[1] / 2 + height / 2) * px,
        width: width * px,
        height: height * px
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"6Tlk6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Load Texture
 */ parcelHelpers.export(exports, "loadTexture", ()=>loadTexture);
/**
 * Add + Attached Data
 */ parcelHelpers.export(exports, "loadTextureAndData", ()=>loadTextureAndData);
/**
 * -------- CalcRatio
 */ parcelHelpers.export(exports, "calcRatio", ()=>calcRatio);
var _twglJs = require("twgl.js");
function loadTexture(gl, src, filtering) {
    const filter = filtering || gl.NEAREST;
    return (0, _twglJs.createTexture)(gl, {
        src: src,
        mag: filter
    });
}
function loadTextureAndData(gl, src, filtering) {
    const ratio = calcRatio(src);
    const filter = filtering || gl.NEAREST;
    // setup promise
    const texture = (0, _twglJs.createTexture)(gl, {
        src: src,
        mag: filter
    });
    return {
        texture,
        ratio
    };
}
function calcRatio(src, wrap = null) {
    let wrapper = wrap || src.parentElement;
    // calc wrapper
    const wrapWidth = wrapper.clientWidth;
    const wrapHeight = wrapper.clientHeight;
    const wrapHorizontal = wrapWidth > wrapHeight; // true = ho, false = vertical
    const wrapRatio = wrapWidth / wrapHeight;
    const wrapRevRatio = wrapHeight / wrapWidth;
    // calc image
    const imgWidth = src.naturalWidth;
    const imgHeight = src.naturalHeight;
    const imgHorizontal = imgWidth > imgHeight; // true = ho, false = vertical
    const imgRatio = imgWidth / imgHeight;
    const imgRevRatio = imgHeight / imgWidth;
    /** Cases */ // 1. vertical wrap w vertical image -> (false, false)
    if (!wrapHorizontal && !imgHorizontal) // console.log("case1: v v");
    return [
        1 * wrapRatio,
        imgRatio
    ];
    // 2. vertical wrap w horizontal image -> (false, true)
    if (!wrapHorizontal && imgHorizontal) // console.log("case2: v h");
    return [
        imgRevRatio * wrapRatio,
        1
    ];
    // 3. horizontal wrap w vertical image -> (true, false)
    if (wrapHorizontal && !imgHorizontal) // console.log("case3: h v");
    return [
        imgRevRatio,
        1 * wrapRevRatio
    ];
    // 4. horizontal wrap w horizontal image -> (true, true)
    if (wrapHorizontal && imgHorizontal) // console.log("case4: h h");
    return [
        imgRevRatio,
        1 * wrapRevRatio
    ];
    return [
        1,
        1
    ];
}

},{"twgl.js":"3uqAP","@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"9Ofd3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _twglJs = require("twgl.js");
// import loadTexture from "../utils/texture-loader.js";
var _cam = require("../mat/cam");
var _camDefault = parcelHelpers.interopDefault(_cam);
exports.default = class {
    constructor(gl, data = {
        x: 0,
        y: 0,
        z: 0
    }){
        this.gl = gl;
        this.data = data;
        this.createProgram();
        this.mat = (0, _twglJs.m4).create();
        (0, _twglJs.m4).translation([
            this.data.x,
            this.data.y,
            this.data.z
        ], this.mat);
        this.gl.useProgram(this.programInfo.program);
        this.setBuffAtt();
        this.setUniforms();
    }
    createProgram() {
        this.shaders = (0, _camDefault.default);
        this.programInfo = (0, _twglJs.createProgramInfo)(this.gl, this.shaders);
    }
    setBuffAtt() {
        this.bufferInfo = (0, _twglJs.primitives).createPlaneBufferInfo(this.gl, 1, 1, 100, 100, (0, _twglJs.m4).rotationX(Math.PI / 2));
        (0, _twglJs.setBuffersAndAttributes)(this.gl, this.programInfo, this.bufferInfo);
    }
    setProgram(val) {
        return val || (0, _camDefault.default);
    }
    setUniforms() {
        // this.texture = loadTexture(this.gl, LIB.img);
        this.uniforms = {
            u_res: [
                this.gl.canvas.width,
                this.gl.canvas.height
            ],
            u_vs: this.gl.vp.viewSize,
            u_camera: this.gl.camera.mat,
            u_id: this.mat,
            rand: this.data.rand
        };
        this.gl.useProgram(this.programInfo.program);
        (0, _twglJs.setUniforms)(this.programInfo, this.uniforms);
    }
    render(t) {
        this.gl.useProgram(this.programInfo.program);
        (0, _twglJs.setBuffersAndAttributes)(this.gl, this.programInfo, this.bufferInfo);
        (0, _twglJs.setUniforms)(this.programInfo, {
            u_time: t
        });
        (0, _twglJs.drawBufferInfo)(this.gl, this.bufferInfo);
    // this.gl.LINES
    }
    resize(gl) {
        this.gl = gl;
        this.gl.useProgram(this.programInfo.program);
        (0, _twglJs.setUniforms)(this.programInfo, {
            u_res: [
                gl.canvas.width,
                gl.canvas.height
            ],
            u_vs: gl.vp.viewSize,
            u_id: this.mat,
            u_camera: gl.camera.mat
        });
    }
};

},{"twgl.js":"3uqAP","../mat/cam":"5ZDwa","@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"5ZDwa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vertexVert = require("./vertex.vert");
var _vertexVertDefault = parcelHelpers.interopDefault(_vertexVert);
var _fragmentFrag = require("./fragment.frag");
var _fragmentFragDefault = parcelHelpers.interopDefault(_fragmentFrag);
const Sh = [
    (0, _vertexVertDefault.default),
    (0, _fragmentFragDefault.default)
];
exports.default = Sh;

},{"./vertex.vert":"b18cg","./fragment.frag":"gg4uH","@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"b18cg":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\n#define PI 3.1415926538\nattribute vec4 position;\nattribute vec2 texcoord;\n\nuniform mat4 u_camera;\nuniform mat4 u_id;\nuniform float u_y;\nuniform float u_time;\nuniform vec2 u_res;\nuniform vec2 u_vs;\n\nvarying vec2 v_res;\nvarying float v_time;\nvarying vec2 v_uv;\n\nvarying vec3 v_TEST;\n\nvoid main() {\n  vec4 pos = position;\n  pos.y += u_y;\n\n  gl_Position =  u_camera * u_id * vec4(pos);\n\n  v_res = u_res;\n  v_time = u_time;\n  v_uv = texcoord;\n\n  /* TEST OBJ */ \n  v_TEST = vec3(0., 0., 0.);\n}\n\n  \n";

},{}],"gg4uH":[function(require,module,exports) {
module.exports = "precision mediump float;\n#define GLSLIFY 1\n\n// uniform sampler2D u_diff;  // vec4 img = texture2D(u_diff, v_uv);\n\nvarying vec2 v_res;\nvarying float v_time;\nvarying vec2 v_uv;\n \n\nvoid main() {\n\n   \n\n    gl_FragColor.rgb = vec3(v_uv, 1.);\n    gl_FragColor.a = 1.;\n}\n\n// vec2 st = gl_FragCoord.xy/v_res.xy;\n\n";

},{}],"2JT6W":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vertexVert = require("./vertex.vert");
var _vertexVertDefault = parcelHelpers.interopDefault(_vertexVert);
var _fragmentFrag = require("./fragment.frag");
var _fragmentFragDefault = parcelHelpers.interopDefault(_fragmentFrag);
const Sh = [
    (0, _vertexVertDefault.default),
    (0, _fragmentFragDefault.default)
];
exports.default = Sh;

},{"./vertex.vert":"fNAqp","./fragment.frag":"dsWCc","@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"fNAqp":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\n#define PI 3.1415926538\nattribute vec4 position;\nattribute vec2 texcoord;\n\nuniform mat4 u_camera;\nuniform mat4 u_id;\nuniform float u_y;\nuniform vec2 u_scale;\nuniform vec2 u_ratio;\n\nuniform float u_inView;\nvarying float v_inView;\nuniform float u_hover;\nvarying float v_hover;\n\nuniform float u_time;\nuniform vec2 u_res;\nuniform vec2 u_vs;\n\nvarying vec2 v_res;\nvarying float v_time;\nvarying vec2 v_uv;\n\n// grid\nuniform vec2 u_gridScale;\nuniform vec2 u_gridRatio;\nuniform mat4 u_gridId;\nuniform float u_TOGRID;\n\nvarying vec3 v_TEST;\n\nvoid main() {\n  vec4 pos = position;\n\n  // ->> GRID / SCROLL\n  float TOSCROLL = u_TOGRID;\n  vec2 final_scale = mix(u_gridScale, u_scale, TOSCROLL);\n  vec2 final_ratio = mix(u_gridRatio, u_ratio, TOSCROLL);\n  float final_inview = mix(1., u_inView, TOSCROLL);\n\n  // animation\n  pos.xy += .2;\n  pos.y *= final_inview;\n  pos.xy -= .2;\n\n  pos.xy *= 1. - u_hover * .1;\n\n  pos.xy *= final_scale;\n  pos.y += u_y * TOSCROLL;\n  \n  // ->> GRID / SCROLL\n  vec4 final_position = mix(\n    u_camera * u_gridId * vec4(pos), \n    u_camera * u_id * vec4(pos), \n    TOSCROLL\n  );\n\n  gl_Position = final_position;\n\n  v_res = u_res;\n  v_time = u_time;\n\n  vec2 new_uv = texcoord;\n  new_uv -= vec2(.5);\n  new_uv *= final_ratio;\n  new_uv *= 1. - u_hover * .3;\n  new_uv += vec2(.5);\n\n  v_uv = new_uv;\n\n  v_inView = final_inview;\n  v_hover = u_hover;\n\n  /* TEST OBJ */ \n  v_TEST = vec3(0., 0., 0.);\n}\n\n  \n";

},{}],"dsWCc":[function(require,module,exports) {
module.exports = "precision mediump float;\n#define GLSLIFY 1\n\nuniform sampler2D u_diff;  // vec4 img = texture2D(u_diff, v_uv);\n\nvarying vec2 v_res;\nvarying float v_time;\nvarying vec2 v_uv;\n\nvarying float v_inView;\nvarying float v_hover;\n\n \n\nvoid main() {\n\n    vec2 uv = v_uv;\n    uv.y *= v_inView;\n    vec4 img = texture2D(u_diff, uv);\n    \n    float gs = (img.r + img.g + img.b)/3.33333333;\n    vec3 color = mix(vec3(gs), img.rgb, smoothstep(.7, 1., v_inView));\n    color = mix(color, vec3(gs), v_hover * .5);\n\n    gl_FragColor.rgb = color;\n    gl_FragColor.a = 1.;\n}\n\n// vec2 st = gl_FragCoord.xy/v_res.xy;\n\n";

},{}],"0477R":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _quad = require("./quad");
var _quadDefault = parcelHelpers.interopDefault(_quad);
exports.default = class {
    constructor(gl){
        this.gl = gl;
    //this.create();
    }
    create() {
        // CREATE FRAMEBUFFER
        this.fbi = this.gl.createFramebuffer();
        // CREATE TEXTURE
        this.texture = this.gl.createTexture();
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.texture);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.canvas.width, this.gl.canvas.height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, this.gl.LINEAR);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
        this.gl.texParameteri(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
        // CREATE RENDER BUFFER
        this.depthBuffer = this.gl.createRenderbuffer();
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, this.depthBuffer);
        this.gl.renderbufferStorage(this.gl.RENDERBUFFER, this.gl.DEPTH_COMPONENT16, this.gl.canvas.width, this.gl.canvas.height);
        this.attach();
        this.createPlane();
        this.unbind();
    //this.isActive = true;
    }
    /**
   * FBO ops
   */ attach() {
        // attach texture and bugger to FBO -- BIND!
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbi);
        this.gl.framebufferTexture2D(this.gl.FRAMEBUFFER, this.gl.COLOR_ATTACHMENT0, this.gl.TEXTURE_2D, this.texture, 0);
        this.gl.framebufferRenderbuffer(this.gl.FRAMEBUFFER, this.gl.DEPTH_ATTACHMENT, this.gl.RENDERBUFFER, this.depthBuffer);
    }
    unbind() {
        // unbind buffer object
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        this.gl.bindRenderbuffer(this.gl.RENDERBUFFER, null);
    }
    /**
   * Geometry ops
   */ createPlane() {
        this.quad = new (0, _quadDefault.default)(this.gl);
    }
    /**
   * Render Ops
   */ setupRender() {
        if (!this.isActive) return;
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.fbi);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT || this.gl.DEPTH_BUFFER_BIT);
    }
    render(t) {
        if (!this.isActive) return;
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        if (this.quad) this.quad.render(t, this.texture);
    }
    resize(gl) {
        this.gl = gl;
        this.create();
        if (this.quad) this.quad.resize(this.gl);
    }
};

},{"./quad":"1j9o8","@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"1j9o8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _twglJs = require("twgl.js");
var _gsap = require("gsap");
var _gsapDefault = parcelHelpers.interopDefault(_gsap);
var _ = require("./mat/");
var _Default = parcelHelpers.interopDefault(_);
exports.default = class {
    constructor(gl, data = {}){
        this.gl = gl;
        this.data = data;
        this.shaders = (0, _Default.default);
        this.programInfo = _twglJs.createProgramInfo(this.gl, this.shaders);
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
        document.onmousemove = (e)=>this.onMOuseMove(e);
    }
    onMOuseMove(e) {
        //console.log(e.clientX);
        const x = e.clientX / this.gl.vp.inner[0];
        const y = 1 - e.clientY / this.gl.vp.inner[1];
        (0, _gsapDefault.default).to(this.mouse, {
            x: x,
            y: y,
            duration: 0.6,
            ease: "slow.inOut"
        });
    //console.log(this.mouse);
    }
    /**
   * Create
   */ setBuffAtt() {
        const arrays = {
            position: [
                -1,
                -1,
                0,
                1,
                -1,
                0,
                -1,
                1,
                0,
                -1,
                1,
                0,
                1,
                -1,
                0,
                1,
                1,
                0
            ]
        };
        this.bufferInfo = _twglJs.createBufferInfoFromArrays(this.gl, arrays);
    }
    setUniforms() {
        this.uniforms = {
            u_res: [
                this.gl.canvas.width,
                this.gl.canvas.height
            ],
            u_time: 0
        };
        this.gl.useProgram(this.programInfo.program);
        _twglJs.setUniforms(this.programInfo, this.uniforms);
    }
    render(time, diff = null) {
        this.gl.useProgram(this.programInfo.program);
        _twglJs.setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);
        _twglJs.setUniforms(this.programInfo, {
            u_time: time,
            u_diff: diff,
            u_mouse: [
                this.mouse.x,
                this.mouse.y
            ]
        });
        _twglJs.drawBufferInfo(this.gl, this.bufferInfo);
    // this.gl.LINES
    }
    resize(gl) {
        this.gl = gl;
        this.gl.useProgram(this.programInfo.program);
        _twglJs.setUniforms(this.programInfo, {
            u_res: [
                this.gl.canvas.width,
                this.gl.canvas.height
            ]
        });
    }
};

},{"twgl.js":"3uqAP","gsap":"fPSuC","./mat/":"9YZj6","@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"9YZj6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _vertexVert = require("./vertex.vert");
var _vertexVertDefault = parcelHelpers.interopDefault(_vertexVert);
var _fragmentFrag = require("./fragment.frag");
var _fragmentFragDefault = parcelHelpers.interopDefault(_fragmentFrag);
const Sh = [
    (0, _vertexVertDefault.default),
    (0, _fragmentFragDefault.default)
];
exports.default = Sh;

},{"./vertex.vert":"8eZoX","./fragment.frag":"fMPPp","@parcel/transformer-js/src/esmodule-helpers.js":"laygT"}],"8eZoX":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nattribute vec4 position;\n\nvoid main() {\n  vec4 pos = position;\n  gl_Position = position;\n\n}\n  ";

},{}],"fMPPp":[function(require,module,exports) {
module.exports = "precision mediump float;\n#define GLSLIFY 1\n#define PI 3.14159265359\n\nuniform vec2 u_res;\nuniform float u_time;\n\nuniform vec2 u_mouse;\n\nuniform sampler2D u_diff;\n\n// ->> uv remapping curvature\nconst vec2 curvature = vec2(2., 2.);\nvec2 curveRemapUV(in vec2 uv) {\n   \n    uv *= 2.;\n    uv -= 1.;\n    \n    vec2 offset = abs(uv.yx) / vec2(curvature.x, curvature.y);\n    uv = uv + uv * offset * offset;\n    uv = uv * 0.5 + .5;\n    return uv;\n}\n\n// ->> scanlines\n vec3 scanLines(in float uv, in float resolution, in float opacity) {\n     float intensity = sin(uv * resolution * PI * 2.0);\n     intensity = ((0.5 * intensity) + 0.5) * 0.9 + 0.1;\n     return vec3(vec3(pow(intensity, opacity)));\n }\n\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / u_res;\n  vec2 curve_uv = curveRemapUV(uv);\n  float grad = distance(uv.y, .5);\n  grad = smoothstep(0., 1., grad);\n\n  uv = mix(uv, curve_uv, grad * .5);\n\n  // * params\n  float r_time = u_time * 1.;\n\n  // -> Expand Uvs\n  float mouse_dist = distance(u_mouse, uv);\n  mouse_dist = smoothstep(.2, .0, mouse_dist);\n  uv -= (mouse_dist * uv) * .005;\n  \n\n  // -> RGB shift\n  float factor = .002 * grad * 2.;\n\n  vec2 uvr = vec2(\n    uv.x + sin(uv.x * 10. * r_time) * factor,\n    uv.y \n  );\n  vec2 uvg = vec2(\n    uv.x ,\n    uv.y + sin(uv.y * 8. * r_time) * factor\n  );\n  vec2 uvb = vec2(\n    uv.x + atan(uv.y * 80. * r_time) * factor, \n    uv.y \n  );\n\n  float imgr = texture2D(u_diff, uvr).r;\n  float imgg = texture2D(u_diff, uvg).g;\n  float imgb = texture2D(u_diff, uvb).b;\n\n  vec3 color = vec3(imgr, imgg, imgb);\n\n  // -> banding & scan lines\n  float banding = .9 - cos((uvb.y + sin(u_time)) * 20. + (u_time * 10.)) * .2;\n  color += scanLines(uv.y, 600., banding) * .1;\n\n  // alpha from distorted image (not active)\n  float alpha = texture2D(u_diff, uv).a;\n\n  // ->> mouse processing\n  color.r += color.r * mouse_dist * .5;\n\n  gl_FragColor.rgb = color;\n  //gl_FragColor.rgb = vec3(mouse_dist, mouse_dist, mouse_dist);\n  gl_FragColor.a = alpha;\n}\n  ";

},{}]},["a3PEk","bNKaB"], "bNKaB", "parcelRequireb7dc")

//# sourceMappingURL=index.0641b553.js.map
