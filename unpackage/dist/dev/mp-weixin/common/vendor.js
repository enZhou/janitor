(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });var


EventChannel = /*#__PURE__*/function () {
  function EventChannel(id, events) {var _this = this;_classCallCheck(this, EventChannel);
    this.id = id;
    this.listener = {};
    this.emitCache = {};
    if (events) {
      Object.keys(events).forEach(function (name) {
        _this.on(name, events[name]);
      });
    }
  }_createClass(EventChannel, [{ key: "emit", value: function emit(

    eventName) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
      var fns = this.listener[eventName];
      if (!fns) {
        return (this.emitCache[eventName] || (this.emitCache[eventName] = [])).push(args);
      }
      fns.forEach(function (opt) {
        opt.fn.apply(opt.fn, args);
      });
      this.listener[eventName] = fns.filter(function (opt) {return opt.type !== 'once';});
    } }, { key: "on", value: function on(

    eventName, fn) {
      this._addListener(eventName, 'on', fn);
      this._clearCache(eventName);
    } }, { key: "once", value: function once(

    eventName, fn) {
      this._addListener(eventName, 'once', fn);
      this._clearCache(eventName);
    } }, { key: "off", value: function off(

    eventName, fn) {
      var fns = this.listener[eventName];
      if (!fns) {
        return;
      }
      if (fn) {
        for (var i = 0; i < fns.length;) {
          if (fns[i].fn === fn) {
            fns.splice(i, 1);
            i--;
          }
          i++;
        }
      } else {
        delete this.listener[eventName];
      }
    } }, { key: "_clearCache", value: function _clearCache(

    eventName) {
      var cacheArgs = this.emitCache[eventName];
      if (cacheArgs) {
        for (; cacheArgs.length > 0;) {
          this.emit.apply(this, [eventName].concat(cacheArgs.shift()));
        }
      }
    } }, { key: "_addListener", value: function _addListener(

    eventName, type, fn) {
      (this.listener[eventName] || (this.listener[eventName] = [])).push({
        fn: fn,
        type: type });

    } }]);return EventChannel;}();


var eventChannels = {};

var eventChannelStack = [];

var id = 0;

function initEventChannel(events) {var cache = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  id++;
  var eventChannel = new EventChannel(id, events);
  if (cache) {
    eventChannels[id] = eventChannel;
    eventChannelStack.push(eventChannel);
  }
  return eventChannel;
}

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var navigateTo = {
  args: function args(fromArgs, toArgs) {
    var id = initEventChannel(fromArgs.events).id;
    if (fromArgs.url) {
      fromArgs.url = fromArgs.url + (fromArgs.url.indexOf('?') === -1 ? '?' : '&') + '__id__=' + id;
    }
  },
  returnValue: function returnValue(fromRes, toRes) {
    fromRes.eventChannel = getEventChannel();
  } };


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}
var protocols = {
  redirectTo: redirectTo,
  navigateTo: navigateTo,
  previewImage: previewImage,
  getSystemInfo: {
    returnValue: addSafeAreaInsets },

  getSystemInfoSync: {
    returnValue: addSafeAreaInsets } };


var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {args[_key4 - 1] = arguments[_key4];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      return oldHook.apply(this, args);
    };
  }
}

Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('onLoad', options);
  return MPPage(options);
};

Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  initHook('created', options);
  return MPComponent(options);
};

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this2 = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this2.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this2.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this2.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          // eslint-disable-next-line no-sparse-arrays
          ret.push(handler.apply(handlerCtx, (Array.isArray(params) ? params : []).concat([,,,,,,,,,, event])));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      var components = mpInstance.selectAllComponents('.vue-ref');
      components.forEach(function (component) {
        var ref = component.dataset.ref;
        $refs[ref] = component.$vm || component;
      });
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  _vue.default.prototype.getOpenerEventChannel = function () {
    if (!this.__eventChannel__) {
      this.__eventChannel__ = new EventChannel();
    }
    return this.__eventChannel__;
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 11:
/*!***************************************************************************!*\
  !*** /Users/zhangenzhou/project/PrivateWork/other/janitor/store/index.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _vuex = _interopRequireDefault(__webpack_require__(/*! vuex */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
_vue.default.use(_vuex.default);
var store = new _vuex.default.Store({
  state: {
    menu: uni.getStorage({
      key: 'tabbarItem' }) ||
    'pages/reservation/reservation',
    menuList: [{
      "pagePath": "pages/reservation/reservation",
      "text": "预约",
      "iconPath": "reservation.png",
      "selectedIconPath": "reservation_y.png" },

    {
      "pagePath": "pages/visitorsQrcode/index",
      "text": "通行码",
      "iconPath": "qrcode.png",
      "selectedIconPath": "qrcode_y.png" },

    {
      "pagePath": "pages/main/main",
      "text": "我的",
      "iconPath": "my.png",
      "selectedIconPath": "my_y.png" }] },



  mutations: {
    setMenu: function setMenu(state, provider) {
      state.menu = provider;
      uni.setStorage({
        key: 'tabbarItem',
        data: provider });

      // sessionStorage.setItem('tabbarItem',provider)
    } },

  actions: {} });var _default =



store;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ }),

/***/ 12:
/*!********************************************!*\
  !*** ./node_modules/vuex/dist/vuex.esm.js ***!
  \********************************************/
/*! exports provided: default, Store, createNamespacedHelpers, install, mapActions, mapGetters, mapMutations, mapState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNamespacedHelpers", function() { return createNamespacedHelpers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/*!
 * vuex v3.4.0
 * (c) 2020 Evan You
 * @license MIT
 */
function applyMixin (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    Vue.mixin({ beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = typeof options.store === 'function'
        ? options.store()
        : options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
}

var target = typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
    ? global
    : {};
var devtoolHook = target.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  }, { prepend: true });

  store.subscribeAction(function (action, state) {
    devtoolHook.emit('vuex:action', action, state);
  }, { prepend: true });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */

/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

function partial (fn, arg) {
  return function () {
    return fn(arg)
  }
}

// Base data struct for store's module, package with some attribute and method
var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  // Store some children item
  this._children = Object.create(null);
  // Store the origin module object which passed by programmer
  this._rawModule = rawModule;
  var rawState = rawModule.state;

  // Store the origin module's state
  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};
};

var prototypeAccessors = { namespaced: { configurable: true } };

prototypeAccessors.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.hasChild = function hasChild (key) {
  return key in this._children
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  // register root module (Vuex.Store options)
  this.register([], rawRootModule, false);
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update([], this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  if ((true)) {
    assertRawModule(path, rawModule);
  }

  var newModule = new Module(rawModule, runtime);
  if (path.length === 0) {
    this.root = newModule;
  } else {
    var parent = this.get(path.slice(0, -1));
    parent.addChild(path[path.length - 1], newModule);
  }

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

ModuleCollection.prototype.isRegistered = function isRegistered (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];

  return parent.hasChild(key)
};

function update (path, targetModule, newModule) {
  if ((true)) {
    assertRawModule(path, newModule);
  }

  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        if ((true)) {
          console.warn(
            "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
            'manual reload is needed'
          );
        }
        return
      }
      update(
        path.concat(key),
        targetModule.getChild(key),
        newModule.modules[key]
      );
    }
  }
}

var functionAssert = {
  assert: function (value) { return typeof value === 'function'; },
  expected: 'function'
};

var objectAssert = {
  assert: function (value) { return typeof value === 'function' ||
    (typeof value === 'object' && typeof value.handler === 'function'); },
  expected: 'function or object with "handler" function'
};

var assertTypes = {
  getters: functionAssert,
  mutations: functionAssert,
  actions: objectAssert
};

function assertRawModule (path, rawModule) {
  Object.keys(assertTypes).forEach(function (key) {
    if (!rawModule[key]) { return }

    var assertOptions = assertTypes[key];

    forEachValue(rawModule[key], function (value, type) {
      assert(
        assertOptions.assert(value),
        makeAssertionMessage(path, key, type, value, assertOptions.expected)
      );
    });
  });
}

function makeAssertionMessage (path, key, type, value, expected) {
  var buf = key + " should be " + expected + " but \"" + key + "." + type + "\"";
  if (path.length > 0) {
    buf += " in module \"" + (path.join('.')) + "\"";
  }
  buf += " is " + (JSON.stringify(value)) + ".";
  return buf
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  // Auto install if it is not done yet and `window` has `Vue`.
  // To allow users to avoid auto-installation in some cases,
  // this code should be placed here. See #731
  if (!Vue && typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
  }

  if ((true)) {
    assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
    assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");
    assert(this instanceof Store, "store must be called with the new operator.");
  }

  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._actionSubscribers = [];
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();
  this._makeLocalGettersCache = Object.create(null);

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  var state = this._modules.root.state;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.forEach(function (plugin) { return plugin(this$1); });

  var useDevtools = options.devtools !== undefined ? options.devtools : Vue.config.devtools;
  if (useDevtools) {
    devtoolPlugin(this);
  }
};

var prototypeAccessors$1 = { state: { configurable: true } };

prototypeAccessors$1.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors$1.state.set = function (v) {
  if ((true)) {
    assert(false, "use store.replaceState() to explicit replace store state.");
  }
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown mutation type: " + type));
    }
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });

  this._subscribers
    .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
    .forEach(function (sub) { return sub(mutation, this$1.state); });

  if (
    ( true) &&
    options && options.silent
  ) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
    var this$1 = this;

  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var action = { type: type, payload: payload };
  var entry = this._actions[type];
  if (!entry) {
    if ((true)) {
      console.error(("[vuex] unknown action type: " + type));
    }
    return
  }

  try {
    this._actionSubscribers
      .slice() // shallow copy to prevent iterator invalidation if subscriber synchronously calls unsubscribe
      .filter(function (sub) { return sub.before; })
      .forEach(function (sub) { return sub.before(action, this$1.state); });
  } catch (e) {
    if ((true)) {
      console.warn("[vuex] error in before action subscribers: ");
      console.error(e);
    }
  }

  var result = entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload);

  return new Promise(function (resolve, reject) {
    result.then(function (res) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.after; })
          .forEach(function (sub) { return sub.after(action, this$1.state); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in after action subscribers: ");
          console.error(e);
        }
      }
      resolve(res);
    }, function (error) {
      try {
        this$1._actionSubscribers
          .filter(function (sub) { return sub.error; })
          .forEach(function (sub) { return sub.error(action, this$1.state, error); });
      } catch (e) {
        if ((true)) {
          console.warn("[vuex] error in error action subscribers: ");
          console.error(e);
        }
      }
      reject(error);
    });
  })
};

Store.prototype.subscribe = function subscribe (fn, options) {
  return genericSubscribe(fn, this._subscribers, options)
};

Store.prototype.subscribeAction = function subscribeAction (fn, options) {
  var subs = typeof fn === 'function' ? { before: fn } : fn;
  return genericSubscribe(subs, this._actionSubscribers, options)
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  if ((true)) {
    assert(typeof getter === 'function', "store.watch only accepts a function.");
  }
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule, options) {
    if ( options === void 0 ) options = {};

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
    assert(path.length > 0, 'cannot register the root module by using registerModule.');
  }

  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path), options.preserveState);
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hasModule = function hasModule (path) {
  if (typeof path === 'string') { path = [path]; }

  if ((true)) {
    assert(Array.isArray(path), "module path must be a string or an Array.");
  }

  return this._modules.isRegistered(path)
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors$1 );

function genericSubscribe (fn, subs, options) {
  if (subs.indexOf(fn) < 0) {
    options && options.prepend
      ? subs.unshift(fn)
      : subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
}

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  // reset local getters cache
  store._makeLocalGettersCache = Object.create(null);
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    // direct inline function use will lead to closure preserving oldVm.
    // using partial to return function with only arguments preserved in closure environment.
    computed[key] = partial(fn, store);
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (module.namespaced) {
    if (store._modulesNamespaceMap[namespace] && ("development" !== 'production')) {
      console.error(("[vuex] duplicate namespace " + namespace + " for the namespaced module " + (path.join('/'))));
    }
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      if ((true)) {
        if (moduleName in parentState) {
          console.warn(
            ("[vuex] state field \"" + moduleName + "\" was overridden by a module with the same name at \"" + (path.join('.')) + "\"")
          );
        }
      }
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var type = action.root ? key : namespace + key;
    var handler = action.handler || action;
    registerAction(store, type, handler, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (( true) && !store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  if (!store._makeLocalGettersCache[namespace]) {
    var gettersProxy = {};
    var splitPos = namespace.length;
    Object.keys(store.getters).forEach(function (type) {
      // skip if the target getter is not match this namespace
      if (type.slice(0, splitPos) !== namespace) { return }

      // extract local getter type
      var localType = type.slice(splitPos);

      // Add a port to the getters proxy.
      // Define as getter property because
      // we do not want to evaluate the getters in this time.
      Object.defineProperty(gettersProxy, localType, {
        get: function () { return store.getters[type]; },
        enumerable: true
      });
    });
    store._makeLocalGettersCache[namespace] = gettersProxy;
  }

  return store._makeLocalGettersCache[namespace]
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler.call(store, local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload) {
    var res = handler.call(store, {
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    if ((true)) {
      console.error(("[vuex] duplicate getter key: " + type));
    }
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    if ((true)) {
      assert(store._committing, "do not mutate vuex store state outside mutation handlers.");
    }
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.reduce(function (state, key) { return state[key]; }, state)
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  if ((true)) {
    assert(typeof type === 'string', ("expects string as the type, but found " + (typeof type) + "."));
  }

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue && _Vue === Vue) {
    if ((true)) {
      console.error(
        '[vuex] already installed. Vue.use(Vuex) should be called only once.'
      );
    }
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  if (( true) && !isValidMap(states)) {
    console.error('[vuex] mapState: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  if (( true) && !isValidMap(mutations)) {
    console.error('[vuex] mapMutations: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // Get the commit method from store
      var commit = this.$store.commit;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);
        if (!module) {
          return
        }
        commit = module.context.commit;
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  if (( true) && !isValidMap(getters)) {
    console.error('[vuex] mapGetters: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    // The namespace has been mutated by normalizeNamespace
    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (( true) && !(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  if (( true) && !isValidMap(actions)) {
    console.error('[vuex] mapActions: mapper parameter must be either an Array or an Object');
  }
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      // get dispatch function from store
      var dispatch = this.$store.dispatch;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);
        if (!module) {
          return
        }
        dispatch = module.context.dispatch;
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
var createNamespacedHelpers = function (namespace) { return ({
  mapState: mapState.bind(null, namespace),
  mapGetters: mapGetters.bind(null, namespace),
  mapMutations: mapMutations.bind(null, namespace),
  mapActions: mapActions.bind(null, namespace)
}); };

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (( true) && !module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index = {
  Store: Store,
  install: install,
  version: '3.4.0',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions,
  createNamespacedHelpers: createNamespacedHelpers
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2020 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i++, i)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"NODE_ENV":"development","VUE_APP_PLATFORM":"mp-weixin","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 4:
/*!***********************************************************************!*\
  !*** /Users/zhangenzhou/project/PrivateWork/other/janitor/pages.json ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 56:
/*!***************************************************************************************!*\
  !*** /Users/zhangenzhou/project/PrivateWork/other/janitor/static/icons sync ^\.\/.*$ ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./brackets.png": 57,
	"./my.png": 58,
	"./my_y.png": 59,
	"./qrcode.png": 60,
	"./qrcode_y.png": 61,
	"./reservation.png": 62,
	"./reservation_y.png": 63
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 56;

/***/ }),

/***/ 57:
/*!**************************************************************************************!*\
  !*** /Users/zhangenzhou/project/PrivateWork/other/janitor/static/icons/brackets.png ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 58:
/*!********************************************************************************!*\
  !*** /Users/zhangenzhou/project/PrivateWork/other/janitor/static/icons/my.png ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 59:
/*!**********************************************************************************!*\
  !*** /Users/zhangenzhou/project/PrivateWork/other/janitor/static/icons/my_y.png ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 60:
/*!************************************************************************************!*\
  !*** /Users/zhangenzhou/project/PrivateWork/other/janitor/static/icons/qrcode.png ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 61:
/*!**************************************************************************************!*\
  !*** /Users/zhangenzhou/project/PrivateWork/other/janitor/static/icons/qrcode_y.png ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 62:
/*!*****************************************************************************************!*\
  !*** /Users/zhangenzhou/project/PrivateWork/other/janitor/static/icons/reservation.png ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 63:
/*!*******************************************************************************************!*\
  !*** /Users/zhangenzhou/project/PrivateWork/other/janitor/static/icons/reservation_y.png ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map