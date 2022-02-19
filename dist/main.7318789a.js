// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
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
  return newRequire;
})({"epB2":[function(require,module,exports) {
var html = document.querySelector('#html');
var style = document.querySelector('#style');
var string = '\n/*\u4F60\u597D,\u6211\u53EB\u5C0F\u9EC4\n * \u63A5\u4E0B\u6765\u6211\u8981\u6F14\u793A\u4E0B\u6211\u7684\u524D\u7AEF\u529F\u5E95\n * \u9996\u5148\u51C6\u5907\u4E00\u4E2Adiv\n */\n\n#div1{\n    width: 200px;\n    height: 200px; \n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5)\n}\n/* \u63A5\u4E0B\u6765\u6211\u628Adiv\u53D8\u6210\u4E00\u4E2A\u592A\u6781\u56FE\n * \u6CE8\u610F\u770B\u597D\u4E86\n * \u5148\u628Adiv\u53D8\u6210\u4E00\u4E2A\u5706\u5F62\n */\n\n#div1{\n    border-radius: 50%;\n}\n/* \u592A\u6781\u7531\u4E00\u9634\u4E00\u9633\u7EC4\u6210\n * \u4E00\u9ED1\u4E00\u767D\n */\n\n#div1{\n    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);\n}\n/* \u4E2D\u5FC3\u5706\u7403\n */\n#div1::before {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    top: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background-color: #fff;\n    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);\n}\n#div1::after {\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    background-color: #000;\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);\n}\n\n';
var string2 = ''; //缓存显示的结果
var n = 0;

var step = function step() {
    setTimeout(function () {
        //如果是回车就替换为<br>
        //如果是空格就替换为&nbsp
        //不是回车就照抄
        if (string[n] === '\n') {
            string2 += '<br>';
        } else if (string[n] === ' ') {
            string2 += '&nbsp';
        } else {
            string2 += string[n];
        }
        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n); //因为CSS中不能出现html,所以使用substring
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        if (n < string.length - 1) {
            //不是最后一个字符,就继续
            n += 1;
            step();
        }
    }, 75);
};
step();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.7318789a.map