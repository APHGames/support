// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
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
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
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
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1Osjd":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "ed62dd24849b6a7f";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
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
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
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
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
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

},{}],"eoBgn":[function(require,module,exports) {
const Vivus = require('vivus');
const mojo = document.getElementsByTagName('svg');
new Vivus(mojo[0].id, {
    type: 'sync',
    duration: 200,
    animTimingFunction: Vivus.EASE
}, ()=>{
});

},{"vivus":"8GSbq"}],"8GSbq":[function(require,module,exports) {
(function() {
    /**
 * Pathformer
 * Beta version
 *
 * Take any SVG version 1.1 and transform
 * child elements to 'path' elements
 *
 * This code is purely forked from
 * https://github.com/Waest/SVGPathConverter
 */ /**
 * Class constructor
 *
 * @param {DOM|String} element Dom element of the SVG or id of it
 */ function Pathformer(element) {
        // Test params
        if (typeof element === 'undefined') throw new Error('Pathformer [constructor]: "element" parameter is required');
        // Set the element
        if (element.constructor === String) {
            element = document.getElementById(element);
            if (!element) throw new Error('Pathformer [constructor]: "element" parameter is not related to an existing ID');
        }
        if (element instanceof window.SVGElement || element instanceof window.SVGGElement || /^svg$/i.test(element.nodeName)) this.el = element;
        else throw new Error('Pathformer [constructor]: "element" parameter must be a string or a SVGelement');
        // Start
        this.scan(element);
    }
    /**
 * List of tags which can be transformed
 * to path elements
 *
 * @type {Array}
 */ Pathformer.prototype.TYPES = [
        'line',
        'ellipse',
        'circle',
        'polygon',
        'polyline',
        'rect'
    ];
    /**
 * List of attribute names which contain
 * data. This array list them to check if
 * they contain bad values, like percentage.
 *
 * @type {Array}
 */ Pathformer.prototype.ATTR_WATCH = [
        'cx',
        'cy',
        'points',
        'r',
        'rx',
        'ry',
        'x',
        'x1',
        'x2',
        'y',
        'y1',
        'y2'
    ];
    /**
 * Finds the elements compatible for transform
 * and apply the liked method
 *
 * @param  {object} options Object from the constructor
 */ Pathformer.prototype.scan = function(svg) {
        var fn, element, pathData, pathDom, elements = svg.querySelectorAll(this.TYPES.join(','));
        for(var i = 0; i < elements.length; i++){
            element = elements[i];
            fn = this[element.tagName.toLowerCase() + 'ToPath'];
            pathData = fn(this.parseAttr(element.attributes));
            pathDom = this.pathMaker(element, pathData);
            element.parentNode.replaceChild(pathDom, element);
        }
    };
    /**
 * Read `line` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element Line element to transform
 * @return {object}             Data for a `path` element
 */ Pathformer.prototype.lineToPath = function(element) {
        var newElement = {
        }, x1 = element.x1 || 0, y1 = element.y1 || 0, x2 = element.x2 || 0, y2 = element.y2 || 0;
        newElement.d = 'M' + x1 + ',' + y1 + 'L' + x2 + ',' + y2;
        return newElement;
    };
    /**
 * Read `rect` element to extract and transform
 * data, to make it ready for a `path` object.
 * The radius-border is not taken in charge yet.
 * (your help is more than welcomed)
 *
 * @param  {DOMelement} element Rect element to transform
 * @return {object}             Data for a `path` element
 */ Pathformer.prototype.rectToPath = function(element) {
        var newElement = {
        }, x = parseFloat(element.x) || 0, y = parseFloat(element.y) || 0, width = parseFloat(element.width) || 0, height = parseFloat(element.height) || 0;
        if (element.rx || element.ry) {
            var rx = parseInt(element.rx, 10) || -1, ry = parseInt(element.ry, 10) || -1;
            rx = Math.min(Math.max(rx < 0 ? ry : rx, 0), width / 2);
            ry = Math.min(Math.max(ry < 0 ? rx : ry, 0), height / 2);
            newElement.d = 'M ' + (x + rx) + ',' + y + ' ' + 'L ' + (x + width - rx) + ',' + y + ' ' + 'A ' + rx + ',' + ry + ',0,0,1,' + (x + width) + ',' + (y + ry) + ' ' + 'L ' + (x + width) + ',' + (y + height - ry) + ' ' + 'A ' + rx + ',' + ry + ',0,0,1,' + (x + width - rx) + ',' + (y + height) + ' ' + 'L ' + (x + rx) + ',' + (y + height) + ' ' + 'A ' + rx + ',' + ry + ',0,0,1,' + x + ',' + (y + height - ry) + ' ' + 'L ' + x + ',' + (y + ry) + ' ' + 'A ' + rx + ',' + ry + ',0,0,1,' + (x + rx) + ',' + y;
        } else newElement.d = 'M' + x + ' ' + y + ' ' + 'L' + (x + width) + ' ' + y + ' ' + 'L' + (x + width) + ' ' + (y + height) + ' ' + 'L' + x + ' ' + (y + height) + ' Z';
        return newElement;
    };
    /**
 * Read `polyline` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element Polyline element to transform
 * @return {object}             Data for a `path` element
 */ Pathformer.prototype.polylineToPath = function(element) {
        var newElement = {
        }, points = element.points.trim().split(' '), i, path;
        // Reformatting if points are defined without commas
        if (element.points.indexOf(',') === -1) {
            var formattedPoints = [];
            for(i = 0; i < points.length; i += 2)formattedPoints.push(points[i] + ',' + points[i + 1]);
            points = formattedPoints;
        }
        // Generate the path.d value
        path = 'M' + points[0];
        for(i = 1; i < points.length; i++)if (points[i].indexOf(',') !== -1) path += 'L' + points[i];
        newElement.d = path;
        return newElement;
    };
    /**
 * Read `polygon` element to extract and transform
 * data, to make it ready for a `path` object.
 * This method rely on polylineToPath, because the
 * logic is similar. The path created is just closed,
 * so it needs an 'Z' at the end.
 *
 * @param  {DOMelement} element Polygon element to transform
 * @return {object}             Data for a `path` element
 */ Pathformer.prototype.polygonToPath = function(element) {
        var newElement = Pathformer.prototype.polylineToPath(element);
        newElement.d += 'Z';
        return newElement;
    };
    /**
 * Read `ellipse` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element ellipse element to transform
 * @return {object}             Data for a `path` element
 */ Pathformer.prototype.ellipseToPath = function(element) {
        var newElement = {
        }, rx = parseFloat(element.rx) || 0, ry = parseFloat(element.ry) || 0, cx = parseFloat(element.cx) || 0, cy = parseFloat(element.cy) || 0, startX = cx - rx, startY = cy, endX = parseFloat(cx) + parseFloat(rx), endY = cy;
        newElement.d = 'M' + startX + ',' + startY + 'A' + rx + ',' + ry + ' 0,1,1 ' + endX + ',' + endY + 'A' + rx + ',' + ry + ' 0,1,1 ' + startX + ',' + endY;
        return newElement;
    };
    /**
 * Read `circle` element to extract and transform
 * data, to make it ready for a `path` object.
 *
 * @param  {DOMelement} element Circle element to transform
 * @return {object}             Data for a `path` element
 */ Pathformer.prototype.circleToPath = function(element) {
        var newElement = {
        }, r = parseFloat(element.r) || 0, cx = parseFloat(element.cx) || 0, cy = parseFloat(element.cy) || 0, startX = cx - r, startY = cy, endX = parseFloat(cx) + parseFloat(r), endY = cy;
        newElement.d = 'M' + startX + ',' + startY + 'A' + r + ',' + r + ' 0,1,1 ' + endX + ',' + endY + 'A' + r + ',' + r + ' 0,1,1 ' + startX + ',' + endY;
        return newElement;
    };
    /**
 * Create `path` elements form original element
 * and prepared objects
 *
 * @param  {DOMelement} element  Original element to transform
 * @param  {object} pathData     Path data (from `toPath` methods)
 * @return {DOMelement}          Path element
 */ Pathformer.prototype.pathMaker = function(element, pathData) {
        var i, attr, pathTag = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        for(i = 0; i < element.attributes.length; i++){
            attr = element.attributes[i];
            if (this.ATTR_WATCH.indexOf(attr.name) === -1) pathTag.setAttribute(attr.name, attr.value);
        }
        for(i in pathData)pathTag.setAttribute(i, pathData[i]);
        return pathTag;
    };
    /**
 * Parse attributes of a DOM element to
 * get an object of attribute => value
 *
 * @param  {NamedNodeMap} attributes Attributes object from DOM element to parse
 * @return {object}                  Object of attributes
 */ Pathformer.prototype.parseAttr = function(element) {
        var attr, output = {
        };
        for(var i = 0; i < element.length; i++){
            attr = element[i];
            // Check if no data attribute contains '%', or the transformation is impossible
            if (this.ATTR_WATCH.indexOf(attr.name) !== -1 && attr.value.indexOf('%') !== -1) throw new Error('Pathformer [parseAttr]: a SVG shape got values in percentage. This cannot be transformed into \'path\' tags. Please use \'viewBox\'.');
            output[attr.name] = attr.value;
        }
        return output;
    };
    var setupEnv, requestAnimFrame, cancelAnimFrame, parsePositiveInt;
    /**
 * Vivus
 * Beta version
 *
 * Take any SVG and make the animation
 * to give give the impression of live drawing
 *
 * This in more than just inspired from codrops
 * At that point, it's a pure fork.
 */ /**
 * Class constructor
 * option structure
 *   type: 'delayed'|'sync'|'oneByOne'|'script' (to know if the items must be drawn synchronously or not, default: delayed)
 *   duration: <int> (in frames)
 *   start: 'inViewport'|'manual'|'autostart' (start automatically the animation, default: inViewport)
 *   delay: <int> (delay between the drawing of first and last path)
 *   dashGap <integer> whitespace extra margin between dashes
 *   pathTimingFunction <function> timing animation function for each path element of the SVG
 *   animTimingFunction <function> timing animation function for the complete SVG
 *   forceRender <boolean> force the browser to re-render all updated path items
 *   selfDestroy <boolean> removes all extra styling on the SVG, and leaves it as original
 *
 * The attribute 'type' is by default on 'delayed'.
 *  - 'delayed'
 *    all paths are draw at the same time but with a
 *    little delay between them before start
 *  - 'sync'
 *    all path are start and finish at the same time
 *  - 'oneByOne'
 *    only one path is draw at the time
 *    the end of the first one will trigger the draw
 *    of the next one
 *
 * All these values can be overwritten individually
 * for each path item in the SVG
 * The value of frames will always take the advantage of
 * the duration value.
 * If you fail somewhere, an error will be thrown.
 * Good luck.
 *
 * @constructor
 * @this {Vivus}
 * @param {DOM|String}   element  Dom element of the SVG or id of it
 * @param {Object}       options  Options about the animation
 * @param {Function}     callback Callback for the end of the animation
 */ function Vivus(element, options, callback) {
        setupEnv();
        // Setup
        this.isReady = false;
        this.setElement(element, options);
        this.setOptions(options);
        this.setCallback(callback);
        if (this.isReady) this.init();
    }
    /**
 * Timing functions
 **************************************
 *
 * Default functions to help developers.
 * It always take a number as parameter (between 0 to 1) then
 * return a number (between 0 and 1)
 */ Vivus.LINEAR = function(x) {
        return x;
    };
    Vivus.EASE = function(x) {
        return -Math.cos(x * Math.PI) / 2 + 0.5;
    };
    Vivus.EASE_OUT = function(x) {
        return 1 - Math.pow(1 - x, 3);
    };
    Vivus.EASE_IN = function(x) {
        return Math.pow(x, 3);
    };
    Vivus.EASE_OUT_BOUNCE = function(x) {
        var base = -Math.cos(x * (0.5 * Math.PI)) + 1, rate = Math.pow(base, 1.5), rateR = Math.pow(1 - x, 2), progress = -Math.abs(Math.cos(rate * (2.5 * Math.PI))) + 1;
        return 1 - rateR + progress * rateR;
    };
    /**
 * Setters
 **************************************
 */ /**
 * Check and set the element in the instance
 * The method will not return anything, but will throw an
 * error if the parameter is invalid
 *
 * @param {DOM|String}   element  SVG Dom element or id of it
 */ Vivus.prototype.setElement = function(element, options) {
        var onLoad, self;
        // Basic check
        if (typeof element === 'undefined') throw new Error('Vivus [constructor]: "element" parameter is required');
        // Set the element
        if (element.constructor === String) {
            element = document.getElementById(element);
            if (!element) throw new Error('Vivus [constructor]: "element" parameter is not related to an existing ID');
        }
        this.parentEl = element;
        // Load the SVG with XMLHttpRequest and extract the SVG
        if (options && options.file) {
            self = this;
            onLoad = function() {
                var domSandbox = document.createElement('div');
                domSandbox.innerHTML = this.responseText;
                var svgTag = domSandbox.querySelector('svg');
                if (!svgTag) throw new Error('Vivus [load]: Cannot find the SVG in the loaded file : ' + options.file);
                self.el = svgTag;
                self.el.setAttribute('width', '100%');
                self.el.setAttribute('height', '100%');
                self.parentEl.appendChild(self.el);
                self.isReady = true;
                self.init();
                self = null;
            };
            var oReq = new window.XMLHttpRequest();
            oReq.addEventListener('load', onLoad);
            oReq.open('GET', options.file);
            oReq.send();
            return;
        }
        switch(element.constructor){
            case window.SVGSVGElement:
            case window.SVGElement:
            case window.SVGGElement:
                this.el = element;
                this.isReady = true;
                break;
            case window.HTMLObjectElement:
                self = this;
                onLoad = function(e) {
                    if (self.isReady) return;
                    self.el = element.contentDocument && element.contentDocument.querySelector('svg');
                    if (!self.el && e) throw new Error('Vivus [constructor]: object loaded does not contain any SVG');
                    else if (self.el) {
                        if (element.getAttribute('built-by-vivus')) {
                            self.parentEl.insertBefore(self.el, element);
                            self.parentEl.removeChild(element);
                            self.el.setAttribute('width', '100%');
                            self.el.setAttribute('height', '100%');
                        }
                        self.isReady = true;
                        self.init();
                        self = null;
                    }
                };
                if (!onLoad()) element.addEventListener('load', onLoad);
                break;
            default:
                throw new Error('Vivus [constructor]: "element" parameter is not valid (or miss the "file" attribute)');
        }
    };
    /**
 * Set up user option to the instance
 * The method will not return anything, but will throw an
 * error if the parameter is invalid
 *
 * @param  {object} options Object from the constructor
 */ Vivus.prototype.setOptions = function(options) {
        var allowedTypes = [
            'delayed',
            'sync',
            'async',
            'nsync',
            'oneByOne',
            'scenario',
            'scenario-sync'
        ];
        var allowedStarts = [
            'inViewport',
            'manual',
            'autostart'
        ];
        // Basic check
        if (options !== undefined && options.constructor !== Object) throw new Error('Vivus [constructor]: "options" parameter must be an object');
        else options = options || {
        };
        // Set the animation type
        if (options.type && allowedTypes.indexOf(options.type) === -1) throw new Error('Vivus [constructor]: ' + options.type + ' is not an existing animation `type`');
        else this.type = options.type || allowedTypes[0];
        // Set the start type
        if (options.start && allowedStarts.indexOf(options.start) === -1) throw new Error('Vivus [constructor]: ' + options.start + ' is not an existing `start` option');
        else this.start = options.start || allowedStarts[0];
        this.isIE = window.navigator.userAgent.indexOf('MSIE') !== -1 || window.navigator.userAgent.indexOf('Trident/') !== -1 || window.navigator.userAgent.indexOf('Edge/') !== -1;
        this.duration = parsePositiveInt(options.duration, 120);
        this.delay = parsePositiveInt(options.delay, null);
        this.dashGap = parsePositiveInt(options.dashGap, 1);
        this.forceRender = options.hasOwnProperty('forceRender') ? !!options.forceRender : this.isIE;
        this.reverseStack = !!options.reverseStack;
        this.selfDestroy = !!options.selfDestroy;
        this.onReady = options.onReady;
        this.map = [];
        this.frameLength = this.currentFrame = this.delayUnit = this.speed = this.handle = null;
        this.ignoreInvisible = options.hasOwnProperty('ignoreInvisible') ? !!options.ignoreInvisible : false;
        this.animTimingFunction = options.animTimingFunction || Vivus.LINEAR;
        this.pathTimingFunction = options.pathTimingFunction || Vivus.LINEAR;
        if (this.delay >= this.duration) throw new Error('Vivus [constructor]: delay must be shorter than duration');
    };
    /**
 * Set up callback to the instance
 * The method will not return enything, but will throw an
 * error if the parameter is invalid
 *
 * @param  {Function} callback Callback for the animation end
 */ Vivus.prototype.setCallback = function(callback) {
        // Basic check
        if (!!callback && callback.constructor !== Function) throw new Error('Vivus [constructor]: "callback" parameter must be a function');
        this.callback = callback || function() {
        };
    };
    /**
 * Core
 **************************************
 */ /**
 * Map the svg, path by path.
 * The method return nothing, it just fill the
 * `map` array. Each item in this array represent
 * a path element from the SVG, with informations for
 * the animation.
 *
 * ```
 * [
 *   {
 *     el: <DOMobj> the path element
 *     length: <number> length of the path line
 *     startAt: <number> time start of the path animation (in frames)
 *     duration: <number> path animation duration (in frames)
 *   },
 *   ...
 * ]
 * ```
 *
 */ Vivus.prototype.mapping = function() {
        var i, paths, path, pAttrs, pathObj, totalLength, lengthMeter, timePoint, scale, hasNonScale;
        timePoint = totalLength = lengthMeter = 0;
        paths = this.el.querySelectorAll('path');
        hasNonScale = false;
        for(i = 0; i < paths.length; i++){
            path = paths[i];
            if (this.isInvisible(path)) continue;
            pathObj = {
                el: path,
                length: 0,
                startAt: 0,
                duration: 0,
                isResizeSensitive: false
            };
            // If vector effect is non-scaling-stroke, the total length won't match the rendered length
            // so we need to calculate the scale and apply it
            if (path.getAttribute('vector-effect') === 'non-scaling-stroke') {
                var rect = path.getBoundingClientRect();
                var box = path.getBBox();
                scale = Math.max(rect.width / box.width, rect.height / box.height);
                pathObj.isResizeSensitive = true;
                hasNonScale = true;
            } else scale = 1;
            pathObj.length = Math.ceil(path.getTotalLength() * scale);
            // Test if the path length is correct
            if (isNaN(pathObj.length)) {
                if (window.console && console.warn) console.warn('Vivus [mapping]: cannot retrieve a path element length', path);
                continue;
            }
            this.map.push(pathObj);
            path.style.strokeDasharray = pathObj.length + ' ' + (pathObj.length + this.dashGap * 2);
            path.style.strokeDashoffset = pathObj.length + this.dashGap;
            pathObj.length += this.dashGap;
            totalLength += pathObj.length;
            this.renderPath(i);
        }
        // Show a warning for non-scaling elements
        if (hasNonScale) console.warn('Vivus: this SVG contains non-scaling-strokes. You should call instance.recalc() when the SVG is resized or you will encounter unwanted behaviour. See https://github.com/maxwellito/vivus#non-scaling for more info.');
        totalLength = totalLength === 0 ? 1 : totalLength;
        this.delay = this.delay === null ? this.duration / 3 : this.delay;
        this.delayUnit = this.delay / (paths.length > 1 ? paths.length - 1 : 1);
        // Reverse stack if asked
        if (this.reverseStack) this.map.reverse();
        for(i = 0; i < this.map.length; i++){
            pathObj = this.map[i];
            switch(this.type){
                case 'delayed':
                    pathObj.startAt = this.delayUnit * i;
                    pathObj.duration = this.duration - this.delay;
                    break;
                case 'oneByOne':
                    pathObj.startAt = lengthMeter / totalLength * this.duration;
                    pathObj.duration = pathObj.length / totalLength * this.duration;
                    break;
                case 'sync':
                case 'async':
                case 'nsync':
                    pathObj.startAt = 0;
                    pathObj.duration = this.duration;
                    break;
                case 'scenario-sync':
                    path = pathObj.el;
                    pAttrs = this.parseAttr(path);
                    pathObj.startAt = timePoint + (parsePositiveInt(pAttrs['data-delay'], this.delayUnit) || 0);
                    pathObj.duration = parsePositiveInt(pAttrs['data-duration'], this.duration);
                    timePoint = pAttrs['data-async'] !== undefined ? pathObj.startAt : pathObj.startAt + pathObj.duration;
                    this.frameLength = Math.max(this.frameLength, pathObj.startAt + pathObj.duration);
                    break;
                case 'scenario':
                    path = pathObj.el;
                    pAttrs = this.parseAttr(path);
                    pathObj.startAt = parsePositiveInt(pAttrs['data-start'], this.delayUnit) || 0;
                    pathObj.duration = parsePositiveInt(pAttrs['data-duration'], this.duration);
                    this.frameLength = Math.max(this.frameLength, pathObj.startAt + pathObj.duration);
                    break;
            }
            lengthMeter += pathObj.length;
            this.frameLength = this.frameLength || this.duration;
        }
    };
    /**
 * Public method to re-evaluate line length for non-scaling lines
 * path elements.
 */ Vivus.prototype.recalc = function() {
        if (this.mustRecalcScale) return;
        this.mustRecalcScale = requestAnimFrame((function() {
            this.performLineRecalc();
        }).bind(this));
    };
    /**
 * Private method to re-evaluate line length on non-scaling
 * path elements. Then call for a trace to update the SVG. 
 */ Vivus.prototype.performLineRecalc = function() {
        var pathObj, path, rect, box, scale;
        for(var i = 0; i < this.map.length; i++){
            pathObj = this.map[i];
            if (pathObj.isResizeSensitive) {
                path = pathObj.el;
                rect = path.getBoundingClientRect();
                box = path.getBBox();
                scale = Math.max(rect.width / box.width, rect.height / box.height);
                pathObj.length = Math.ceil(path.getTotalLength() * scale);
                path.style.strokeDasharray = pathObj.length + ' ' + (pathObj.length + this.dashGap * 2);
            }
        }
        this.trace();
        this.mustRecalcScale = null;
    };
    /**
 * Interval method to draw the SVG from current
 * position of the animation. It update the value of
 * `currentFrame` and re-trace the SVG.
 *
 * It use this.handle to store the requestAnimationFrame
 * and clear it one the animation is stopped. So this
 * attribute can be used to know if the animation is
 * playing.
 *
 * Once the animation at the end, this method will
 * trigger the Vivus callback.
 *
 */ Vivus.prototype.draw = function() {
        var self = this;
        this.currentFrame += this.speed;
        if (this.currentFrame <= 0) {
            this.stop();
            this.reset();
        } else if (this.currentFrame >= this.frameLength) {
            this.stop();
            this.currentFrame = this.frameLength;
            this.trace();
            if (this.selfDestroy) this.destroy();
        } else {
            this.trace();
            this.handle = requestAnimFrame(function() {
                self.draw();
            });
            return;
        }
        this.callback(this);
        if (this.instanceCallback) {
            this.instanceCallback(this);
            this.instanceCallback = null;
        }
    };
    /**
 * Draw the SVG at the current instant from the
 * `currentFrame` value. Here is where most of the magic is.
 * The trick is to use the `strokeDashoffset` style property.
 *
 * For optimisation reasons, a new property called `progress`
 * is added in each item of `map`. This one contain the current
 * progress of the path element. Only if the new value is different
 * the new value will be applied to the DOM element. This
 * method save a lot of resources to re-render the SVG. And could
 * be improved if the animation couldn't be played forward.
 *
 */ Vivus.prototype.trace = function() {
        var i, progress, path, currentFrame;
        currentFrame = this.animTimingFunction(this.currentFrame / this.frameLength) * this.frameLength;
        for(i = 0; i < this.map.length; i++){
            path = this.map[i];
            progress = (currentFrame - path.startAt) / path.duration;
            progress = this.pathTimingFunction(Math.max(0, Math.min(1, progress)));
            if (path.progress !== progress) {
                path.progress = progress;
                path.el.style.strokeDashoffset = Math.floor(path.length * (1 - progress));
                this.renderPath(i);
            }
        }
    };
    /**
 * Method forcing the browser to re-render a path element
 * from it's index in the map. Depending on the `forceRender`
 * value.
 * The trick is to replace the path element by it's clone.
 * This practice is not recommended because it's asking more
 * ressources, too much DOM manupulation..
 * but it's the only way to let the magic happen on IE.
 * By default, this fallback is only applied on IE.
 *
 * @param  {Number} index Path index
 */ Vivus.prototype.renderPath = function(index) {
        if (this.forceRender && this.map && this.map[index]) {
            var pathObj = this.map[index], newPath = pathObj.el.cloneNode(true);
            pathObj.el.parentNode.replaceChild(newPath, pathObj.el);
            pathObj.el = newPath;
        }
    };
    /**
 * When the SVG object is loaded and ready,
 * this method will continue the initialisation.
 *
 * This this mainly due to the case of passing an
 * object tag in the constructor. It will wait
 * the end of the loading to initialise.
 *
 */ Vivus.prototype.init = function() {
        // Set object variables
        this.frameLength = 0;
        this.currentFrame = 0;
        this.map = [];
        // Start
        new Pathformer(this.el);
        this.mapping();
        this.starter();
        if (this.onReady) this.onReady(this);
    };
    /**
 * Trigger to start of the animation.
 * Depending on the `start` value, a different script
 * will be applied.
 *
 * If the `start` value is not valid, an error will be thrown.
 * Even if technically, this is impossible.
 *
 */ Vivus.prototype.starter = function() {
        switch(this.start){
            case 'manual':
                return;
            case 'autostart':
                this.play();
                break;
            case 'inViewport':
                var self = this, listener = function() {
                    if (self.isInViewport(self.parentEl, 1)) {
                        self.play();
                        window.removeEventListener('scroll', listener);
                    }
                };
                window.addEventListener('scroll', listener);
                listener();
                break;
        }
    };
    /**
 * Controls
 **************************************
 */ /**
 * Get the current status of the animation between
 * three different states: 'start', 'progress', 'end'.
 * @return {string} Instance status
 */ Vivus.prototype.getStatus = function() {
        return this.currentFrame === 0 ? 'start' : this.currentFrame === this.frameLength ? 'end' : 'progress';
    };
    /**
 * Reset the instance to the initial state : undraw
 * Be careful, it just reset the animation, if you're
 * playing the animation, this won't stop it. But just
 * make it start from start.
 *
 */ Vivus.prototype.reset = function() {
        return this.setFrameProgress(0);
    };
    /**
 * Set the instance to the final state : drawn
 * Be careful, it just set the animation, if you're
 * playing the animation on rewind, this won't stop it.
 * But just make it start from the end.
 *
 */ Vivus.prototype.finish = function() {
        return this.setFrameProgress(1);
    };
    /**
 * Set the level of progress of the drawing.
 *
 * @param {number} progress Level of progress to set
 */ Vivus.prototype.setFrameProgress = function(progress) {
        progress = Math.min(1, Math.max(0, progress));
        this.currentFrame = Math.round(this.frameLength * progress);
        this.trace();
        return this;
    };
    /**
 * Play the animation at the desired speed.
 * Speed must be a valid number (no zero).
 * By default, the speed value is 1.
 * But a negative value is accepted to go forward.
 *
 * And works with float too.
 * But don't forget we are in JavaScript, se be nice
 * with him and give him a 1/2^x value.
 *
 * @param  {number} speed Animation speed [optional]
 */ Vivus.prototype.play = function(speed, callback) {
        this.instanceCallback = null;
        if (speed && typeof speed === 'function') {
            this.instanceCallback = speed; // first parameter is actually the callback function
            speed = null;
        } else if (speed && typeof speed !== 'number') throw new Error('Vivus [play]: invalid speed');
        // if the first parameter wasn't the callback, check if the seconds was
        if (callback && typeof callback === 'function' && !this.instanceCallback) this.instanceCallback = callback;
        this.speed = speed || 1;
        if (!this.handle) this.draw();
        return this;
    };
    /**
 * Stop the current animation, if on progress.
 * Should not trigger any error.
 *
 */ Vivus.prototype.stop = function() {
        if (this.handle) {
            cancelAnimFrame(this.handle);
            this.handle = null;
        }
        return this;
    };
    /**
 * Destroy the instance.
 * Remove all bad styling attributes on all
 * path tags
 *
 */ Vivus.prototype.destroy = function() {
        this.stop();
        var i, path;
        for(i = 0; i < this.map.length; i++){
            path = this.map[i];
            path.el.style.strokeDashoffset = null;
            path.el.style.strokeDasharray = null;
            this.renderPath(i);
        }
    };
    /**
 * Utils methods
 * include methods from Codrops
 **************************************
 */ /**
 * Method to best guess if a path should added into
 * the animation or not.
 *
 * 1. Use the `data-vivus-ignore` attribute if set
 * 2. Check if the instance must ignore invisible paths
 * 3. Check if the path is visible
 *
 * For now the visibility checking is unstable.
 * It will be used for a beta phase.
 *
 * Other improvments are planned. Like detecting
 * is the path got a stroke or a valid opacity.
 */ Vivus.prototype.isInvisible = function(el) {
        var rect, ignoreAttr = el.getAttribute('data-ignore');
        if (ignoreAttr !== null) return ignoreAttr !== 'false';
        if (this.ignoreInvisible) {
            rect = el.getBoundingClientRect();
            return !rect.width && !rect.height;
        } else return false;
    };
    /**
 * Parse attributes of a DOM element to
 * get an object of {attributeName => attributeValue}
 *
 * @param  {object} element DOM element to parse
 * @return {object}         Object of attributes
 */ Vivus.prototype.parseAttr = function(element) {
        var attr, output = {
        };
        if (element && element.attributes) for(var i = 0; i < element.attributes.length; i++){
            attr = element.attributes[i];
            output[attr.name] = attr.value;
        }
        return output;
    };
    /**
 * Reply if an element is in the page viewport
 *
 * @param  {object} el Element to observe
 * @param  {number} h  Percentage of height
 * @return {boolean}
 */ Vivus.prototype.isInViewport = function(el, h) {
        var scrolled = this.scrollY(), viewed = scrolled + this.getViewportH(), elBCR = el.getBoundingClientRect(), elHeight = elBCR.height, elTop = scrolled + elBCR.top, elBottom = elTop + elHeight;
        // if 0, the element is considered in the viewport as soon as it enters.
        // if 1, the element is considered in the viewport only when it's fully inside
        // value in percentage (1 >= h >= 0)
        h = h || 0;
        return elTop + elHeight * h <= viewed && elBottom >= scrolled;
    };
    /**
 * Get the viewport height in pixels
 *
 * @return {integer} Viewport height
 */ Vivus.prototype.getViewportH = function() {
        var client = this.docElem.clientHeight, inner = window.innerHeight;
        if (client < inner) return inner;
        else return client;
    };
    /**
 * Get the page Y offset
 *
 * @return {integer} Page Y offset
 */ Vivus.prototype.scrollY = function() {
        return window.pageYOffset || this.docElem.scrollTop;
    };
    setupEnv = function() {
        if (Vivus.prototype.docElem) return;
        /**
   * Alias for document element
   *
   * @type {DOMelement}
   */ Vivus.prototype.docElem = window.document.documentElement;
        /**
   * Alias for `requestAnimationFrame` or
   * `setTimeout` function for deprecated browsers.
   *
   */ requestAnimFrame = (function() {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(/* function */ callback) {
                return window.setTimeout(callback, 1000 / 60);
            };
        })();
        /**
   * Alias for `cancelAnimationFrame` or
   * `cancelTimeout` function for deprecated browsers.
   *
   */ cancelAnimFrame = (function() {
            return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function(id) {
                return window.clearTimeout(id);
            };
        })();
    };
    /**
 * Parse string to integer.
 * If the number is not positive or null
 * the method will return the default value
 * or 0 if undefined
 *
 * @param {string} value String to parse
 * @param {*} defaultValue Value to return if the result parsed is invalid
 * @return {number}
 *
 */ parsePositiveInt = function(value, defaultValue) {
        var output = parseInt(value, 10);
        return output >= 0 ? output : defaultValue;
    };
    if (typeof define === 'function' && define.amd) // AMD. Register as an anonymous module.
    define([], function() {
        return Vivus;
    });
    else if (typeof exports === 'object') // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = Vivus;
    else // Browser globals
    window.Vivus = Vivus;
})();

},{}]},["1Osjd","eoBgn"], "eoBgn", "parcelRequire57b9")

//# sourceMappingURL=index.849b6a7f.js.map
