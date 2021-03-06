// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  input,\n  button {\n    font-family: inherit;\n  }\n  ol,\n  ul {\n    list-style: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n\n  .skin {\n      position: relative;\n      height: 100vh;\n      background: rgb(255,230,0);\n  }\n  .nose {\n    width: 0px;\n    height: 0px;\n    border-top: 9px solid black;\n    border-left: 11px solid transparent;\n    border-right: 11px solid transparent;\n    position: absolute;\n    left: 50%;\n    top: 143px;\n    margin-left: -10px;\n    z-index: 5;\n  }\n  @keyframes noseWave {\n    0% {\n      transform: rotate(0deg);\n    }\n    33% {\n      transform: rotate(5deg);\n    }\n    66% {\n      transform: rotate(-5deg);\n    }\n    100% {\n      transform: rotate(0deg);\n    }\n  }\n  .nose:hover {\n    transform-origin: 50% 100%;\n    animation: noseWave 0.23s infinite linear;\n  }\n  .oval {\n    position: absolute;\n    width: 22px;\n    height: 5px;\n    border-radius: 50% 50% 0 0 / 100% 100% 0 0;\n    background: black;\n    top: -14px;\n    left: -11px;\n  }\n  .eye {\n    border: 3px solid black;\n    width: 64px;\n    height: 64px;\n    position: absolute;\n    left: 50%;\n    top: 100px;\n    margin-left: -32px;\n    background: rgb(46,46,46);\n    border-radius: 50%;\n  }\n  .eye.left {\n    transform: translateX(-120px);\n  }\n  .eye.right {\n    transform: translateX(120px);\n  }\n  .eye::before {\n    content: '';\n    display: block;\n    border: 3px solid black;\n    width: 32px;\n    height: 32px;\n    background: white;\n    border-radius: 50%;\n    position: relative;\n    right: -5px;\n    top: -1px;\n    animation: eyeMove 3s infinite;\n  }\n  @keyframes eyeMove{\n  0%,100%{\n    top:-1px;\n    right:-5px;\n  }\n  30%,40%,60%,70%{\n    top: 1px;\n    right: -18px;\n  }\n  50%{\n    top: 1px;\n    right: -13px;\n  }\n  80%,90%{\n    top: 18px;\n    right: -18px;\n  }\n}\n  .mouth {\n    width: 200px;\n    height: 200px;\n    position: absolute;\n    left: 50%;\n    top: 170px;\n    margin-left: -100px;\n  }\n  .mouth .up {\n    position: relative;\n    top: -12px;\n  }\n  .mouth .up .lip {\n    border: 3px solid black;\n    width: 86px;\n    height: 30px;\n    position: absolute;\n    left: 50%;\n    background-color: rgb(255,230,0);\n    z-index: 1;\n  }\n  .mouth .up .lip.left {\n    border-radius: 0 0 0 30px;\n    border-top: none;\n    border-right: none;\n    transform: rotate(-25deg);\n    margin-left: -86px;\n  }\n  .mouth .up .lip.right {\n    border-radius: 0 0 30px 0;\n    border-top: none;\n    border-left: none;\n    transform: rotate(25deg);\n  }\n  .mouth .down {\n    height: 180px;\n    width: 230px;\n    position: absolute;\n    left: 50%;\n    top: -2px;\n    margin-left: -115px;\n    overflow: hidden;\n  }\n  .mouth .down .tongue {\n    border: 4px solid black;\n    width: 100%;\n    height: 800px;\n    position: absolute;\n    bottom: 10px;\n    left: 0;\n    border-radius: 0 0 115px 115px / 0 0 800px 800px;\n    background-color: rgb(155,0,10);\n    overflow: hidden;\n  }\n  .mouth .down .tongue::after {\n    content: '';\n    display: block;\n    width: 130px;\n    height: 140px;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    margin-left: -65px;\n    border-radius: 50% 50% 0 0;\n    background-color: rgb(255,72,95);\n  }\n  .face {\n    position: absolute;\n    left: 50%;\n    border: 3px solid black;\n    width: 88px;\n    height: 88px;\n    top: 200px;\n    margin-left: -44px;\n    border-radius: 50%;\n    background-color: #F00;\n  }\n  .face.left {\n    transform: translateX(-168px);\n  }\n  .face.right {\n    transform: translateX(168px);\n  }\n";
var _default = string;
exports.default = _default;
},{}],"7ORW":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  id: undefined,
  time: 100,
  ui: {
    demo: document.querySelector('#demo'),
    demo2: document.querySelector('#demo2')
  },
  n: 1,
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast'
  },
  init: function init() {
    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id);
      return;
    }

    player.ui.demo.innerText = _css.default.substr(0, player.n);
    player.ui.demo2.innerHTML = _css.default.substr(0, player.n);
    player.ui.demo.scrollTop = player.ui.demo.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    window.clearInterval(player.id);
  },
  slow: function slow() {
    player.pause();
    player.time = 300;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 100;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css":"K4Xi"}]},{},["7ORW"], null)
//# sourceMappingURL=run.ee9e7b09.js.map