(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global['starting-blocks'] = {})));
}(this, (function (exports) { 'use strict';

	/**
	 * Copyright © 2016, Ambroise Maupate
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is furnished
	 * to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
	 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
	 * IN THE SOFTWARE.
	 *
	 * @file EventTypes.js
	 * @author Ambroise Maupate
	 * @author Adrien Scholaert
	 */

	/**
	 * Before initialize XHR request to load new page.
	 *
	 * @type {String}
	 */
	var BEFORE_PAGE_LOAD = 'SB_BEFORE_PAGE_LOAD';
	/**
	 * After XHR request succeeded.
	 *
	 * @type {String}
	 */

	var AFTER_PAGE_LOAD = 'SB_AFTER_PAGE_LOAD';
	/**
	 * After Dom service appended new page DOM to page-container.
	 *
	 * @type {String}
	 */

	var AFTER_DOM_APPENDED = 'SB_AFTER_DOM_APPENDED';
	/**
	 * When new page container is ready.
	 *
	 * @type {String}
	 */

	var CONTAINER_READY = 'SB_CONTAINER_READY';
	/**
	 * After PageBuilder create new page instance.
	 *
	 * @type {String}
	 */

	var AFTER_PAGE_BOOT = 'SB_AFTER_PAGE_BOOT';
	/**
	 * Before page transition begin.
	 *
	 * @type {String}
	 */

	var TRANSITION_START = 'SB_TRANSITION_START';
	/**
	 * After page transition completed.
	 *
	 * @type {String}
	 */

	var TRANSITION_COMPLETE = 'SB_TRANSITION_COMPLETE';
	/**
	 * Before splashscreen begin to hide.
	 *
	 * @type {String}
	 */

	var BEFORE_SPLASHSCREEN_HIDE = 'SB_BEFORE_SPLASHSCREEN_HIDE';
	/**
	 * When splashscreen start to hide.
	 *
	 * @type {String}
	 */

	var START_SPLASHSCREEN_HIDE = 'SB_START_SPLASHSCREEN_HIDE';
	/**
	 * After splashscreen hiding animation.
	 *
	 * @type {String}
	 */

	var AFTER_SPLASHSCREEN_HIDE = 'SB_AFTER_SPLASHSCREEN_HIDE';

	var EventTypes = /*#__PURE__*/Object.freeze({
		BEFORE_PAGE_LOAD: BEFORE_PAGE_LOAD,
		AFTER_PAGE_LOAD: AFTER_PAGE_LOAD,
		AFTER_DOM_APPENDED: AFTER_DOM_APPENDED,
		CONTAINER_READY: CONTAINER_READY,
		AFTER_PAGE_BOOT: AFTER_PAGE_BOOT,
		TRANSITION_START: TRANSITION_START,
		TRANSITION_COMPLETE: TRANSITION_COMPLETE,
		BEFORE_SPLASHSCREEN_HIDE: BEFORE_SPLASHSCREEN_HIDE,
		START_SPLASHSCREEN_HIDE: START_SPLASHSCREEN_HIDE,
		AFTER_SPLASHSCREEN_HIDE: AFTER_SPLASHSCREEN_HIDE
	});

	var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var _global = createCommonjsModule(function (module) {
	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self
	  // eslint-disable-next-line no-new-func
	  : Function('return this')();
	if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
	});

	var _core = createCommonjsModule(function (module) {
	var core = module.exports = { version: '2.5.7' };
	if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
	});
	var _core_1 = _core.version;

	var _library = false;

	var _shared = createCommonjsModule(function (module) {
	var SHARED = '__core-js_shared__';
	var store = _global[SHARED] || (_global[SHARED] = {});

	(module.exports = function (key, value) {
	  return store[key] || (store[key] = value !== undefined ? value : {});
	})('versions', []).push({
	  version: _core.version,
	  mode: 'global',
	  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
	});
	});

	var id = 0;
	var px = Math.random();
	var _uid = function (key) {
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

	var _wks = createCommonjsModule(function (module) {
	var store = _shared('wks');

	var Symbol = _global.Symbol;
	var USE_SYMBOL = typeof Symbol == 'function';

	var $exports = module.exports = function (name) {
	  return store[name] || (store[name] =
	    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
	};

	$exports.store = store;
	});

	var f = _wks;

	var _wksExt = {
		f: f
	};

	var _isObject = function (it) {
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

	var _anObject = function (it) {
	  if (!_isObject(it)) throw TypeError(it + ' is not an object!');
	  return it;
	};

	var _fails = function (exec) {
	  try {
	    return !!exec();
	  } catch (e) {
	    return true;
	  }
	};

	// Thank's IE8 for his funny defineProperty
	var _descriptors = !_fails(function () {
	  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
	});

	var document$1 = _global.document;
	// typeof document.createElement is 'object' in old IE
	var is = _isObject(document$1) && _isObject(document$1.createElement);
	var _domCreate = function (it) {
	  return is ? document$1.createElement(it) : {};
	};

	var _ie8DomDefine = !_descriptors && !_fails(function () {
	  return Object.defineProperty(_domCreate('div'), 'a', { get: function () { return 7; } }).a != 7;
	});

	// 7.1.1 ToPrimitive(input [, PreferredType])

	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	var _toPrimitive = function (it, S) {
	  if (!_isObject(it)) return it;
	  var fn, val;
	  if (S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (typeof (fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
	  if (!S && typeof (fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
	  throw TypeError("Can't convert object to primitive value");
	};

	var dP = Object.defineProperty;

	var f$1 = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
	  _anObject(O);
	  P = _toPrimitive(P, true);
	  _anObject(Attributes);
	  if (_ie8DomDefine) try {
	    return dP(O, P, Attributes);
	  } catch (e) { /* empty */ }
	  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
	  if ('value' in Attributes) O[P] = Attributes.value;
	  return O;
	};

	var _objectDp = {
		f: f$1
	};

	var defineProperty = _objectDp.f;
	var _wksDefine = function (name) {
	  var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
	  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
	};

	_wksDefine('asyncIterator');

	var hasOwnProperty = {}.hasOwnProperty;
	var _has = function (it, key) {
	  return hasOwnProperty.call(it, key);
	};

	var _propertyDesc = function (bitmap, value) {
	  return {
	    enumerable: !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable: !(bitmap & 4),
	    value: value
	  };
	};

	var _hide = _descriptors ? function (object, key, value) {
	  return _objectDp.f(object, key, _propertyDesc(1, value));
	} : function (object, key, value) {
	  object[key] = value;
	  return object;
	};

	var _redefine = createCommonjsModule(function (module) {
	var SRC = _uid('src');
	var TO_STRING = 'toString';
	var $toString = Function[TO_STRING];
	var TPL = ('' + $toString).split(TO_STRING);

	_core.inspectSource = function (it) {
	  return $toString.call(it);
	};

	(module.exports = function (O, key, val, safe) {
	  var isFunction = typeof val == 'function';
	  if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
	  if (O[key] === val) return;
	  if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	  if (O === _global) {
	    O[key] = val;
	  } else if (!safe) {
	    delete O[key];
	    _hide(O, key, val);
	  } else if (O[key]) {
	    O[key] = val;
	  } else {
	    _hide(O, key, val);
	  }
	// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
	})(Function.prototype, TO_STRING, function toString() {
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});
	});

	var _aFunction = function (it) {
	  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
	  return it;
	};

	// optional / simple context binding

	var _ctx = function (fn, that, length) {
	  _aFunction(fn);
	  if (that === undefined) return fn;
	  switch (length) {
	    case 1: return function (a) {
	      return fn.call(that, a);
	    };
	    case 2: return function (a, b) {
	      return fn.call(that, a, b);
	    };
	    case 3: return function (a, b, c) {
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function (/* ...args */) {
	    return fn.apply(that, arguments);
	  };
	};

	var PROTOTYPE = 'prototype';

	var $export = function (type, name, source) {
	  var IS_FORCED = type & $export.F;
	  var IS_GLOBAL = type & $export.G;
	  var IS_STATIC = type & $export.S;
	  var IS_PROTO = type & $export.P;
	  var IS_BIND = type & $export.B;
	  var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
	  var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
	  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
	  var key, own, out, exp;
	  if (IS_GLOBAL) source = name;
	  for (key in source) {
	    // contains in native
	    own = !IS_FORCED && target && target[key] !== undefined;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
	    // extend global
	    if (target) _redefine(target, key, out, type & $export.U);
	    // export
	    if (exports[key] != out) _hide(exports, key, exp);
	    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
	  }
	};
	_global.core = _core;
	// type bitmap
	$export.F = 1;   // forced
	$export.G = 2;   // global
	$export.S = 4;   // static
	$export.P = 8;   // proto
	$export.B = 16;  // bind
	$export.W = 32;  // wrap
	$export.U = 64;  // safe
	$export.R = 128; // real proto method for `library`
	var _export = $export;

	var _meta = createCommonjsModule(function (module) {
	var META = _uid('meta');


	var setDesc = _objectDp.f;
	var id = 0;
	var isExtensible = Object.isExtensible || function () {
	  return true;
	};
	var FREEZE = !_fails(function () {
	  return isExtensible(Object.preventExtensions({}));
	});
	var setMeta = function (it) {
	  setDesc(it, META, { value: {
	    i: 'O' + ++id, // object ID
	    w: {}          // weak collections IDs
	  } });
	};
	var fastKey = function (it, create) {
	  // return primitive with prefix
	  if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if (!_has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return 'F';
	    // not necessary to add metadata
	    if (!create) return 'E';
	    // add missing metadata
	    setMeta(it);
	  // return object ID
	  } return it[META].i;
	};
	var getWeak = function (it, create) {
	  if (!_has(it, META)) {
	    // can't set metadata to uncaught frozen object
	    if (!isExtensible(it)) return true;
	    // not necessary to add metadata
	    if (!create) return false;
	    // add missing metadata
	    setMeta(it);
	  // return hash weak collections IDs
	  } return it[META].w;
	};
	// add metadata on freeze-family methods calling
	var onFreeze = function (it) {
	  if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
	  return it;
	};
	var meta = module.exports = {
	  KEY: META,
	  NEED: false,
	  fastKey: fastKey,
	  getWeak: getWeak,
	  onFreeze: onFreeze
	};
	});
	var _meta_1 = _meta.KEY;
	var _meta_2 = _meta.NEED;
	var _meta_3 = _meta.fastKey;
	var _meta_4 = _meta.getWeak;
	var _meta_5 = _meta.onFreeze;

	var def = _objectDp.f;

	var TAG = _wks('toStringTag');

	var _setToStringTag = function (it, tag, stat) {
	  if (it && !_has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
	};

	var toString = {}.toString;

	var _cof = function (it) {
	  return toString.call(it).slice(8, -1);
	};

	// fallback for non-array-like ES3 and non-enumerable old V8 strings

	// eslint-disable-next-line no-prototype-builtins
	var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
	  return _cof(it) == 'String' ? it.split('') : Object(it);
	};

	// 7.2.1 RequireObjectCoercible(argument)
	var _defined = function (it) {
	  if (it == undefined) throw TypeError("Can't call method on  " + it);
	  return it;
	};

	// to indexed object, toObject with fallback for non-array-like ES3 strings


	var _toIobject = function (it) {
	  return _iobject(_defined(it));
	};

	// 7.1.4 ToInteger
	var ceil = Math.ceil;
	var floor = Math.floor;
	var _toInteger = function (it) {
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

	// 7.1.15 ToLength

	var min = Math.min;
	var _toLength = function (it) {
	  return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

	var max = Math.max;
	var min$1 = Math.min;
	var _toAbsoluteIndex = function (index, length) {
	  index = _toInteger(index);
	  return index < 0 ? max(index + length, 0) : min$1(index, length);
	};

	// false -> Array#indexOf
	// true  -> Array#includes



	var _arrayIncludes = function (IS_INCLUDES) {
	  return function ($this, el, fromIndex) {
	    var O = _toIobject($this);
	    var length = _toLength(O.length);
	    var index = _toAbsoluteIndex(fromIndex, length);
	    var value;
	    // Array#includes uses SameValueZero equality algorithm
	    // eslint-disable-next-line no-self-compare
	    if (IS_INCLUDES && el != el) while (length > index) {
	      value = O[index++];
	      // eslint-disable-next-line no-self-compare
	      if (value != value) return true;
	    // Array#indexOf ignores holes, Array#includes - not
	    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
	      if (O[index] === el) return IS_INCLUDES || index || 0;
	    } return !IS_INCLUDES && -1;
	  };
	};

	var shared = _shared('keys');

	var _sharedKey = function (key) {
	  return shared[key] || (shared[key] = _uid(key));
	};

	var arrayIndexOf = _arrayIncludes(false);
	var IE_PROTO = _sharedKey('IE_PROTO');

	var _objectKeysInternal = function (object, names) {
	  var O = _toIobject(object);
	  var i = 0;
	  var result = [];
	  var key;
	  for (key in O) if (key != IE_PROTO) _has(O, key) && result.push(key);
	  // Don't enum bug & hidden keys
	  while (names.length > i) if (_has(O, key = names[i++])) {
	    ~arrayIndexOf(result, key) || result.push(key);
	  }
	  return result;
	};

	// IE 8- don't enum bug keys
	var _enumBugKeys = (
	  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
	).split(',');

	// 19.1.2.14 / 15.2.3.14 Object.keys(O)



	var _objectKeys = Object.keys || function keys(O) {
	  return _objectKeysInternal(O, _enumBugKeys);
	};

	var f$2 = Object.getOwnPropertySymbols;

	var _objectGops = {
		f: f$2
	};

	var f$3 = {}.propertyIsEnumerable;

	var _objectPie = {
		f: f$3
	};

	// all enumerable object keys, includes symbols



	var _enumKeys = function (it) {
	  var result = _objectKeys(it);
	  var getSymbols = _objectGops.f;
	  if (getSymbols) {
	    var symbols = getSymbols(it);
	    var isEnum = _objectPie.f;
	    var i = 0;
	    var key;
	    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
	  } return result;
	};

	// 7.2.2 IsArray(argument)

	var _isArray = Array.isArray || function isArray(arg) {
	  return _cof(arg) == 'Array';
	};

	var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
	  _anObject(O);
	  var keys = _objectKeys(Properties);
	  var length = keys.length;
	  var i = 0;
	  var P;
	  while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
	  return O;
	};

	var document$2 = _global.document;
	var _html = document$2 && document$2.documentElement;

	// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



	var IE_PROTO$1 = _sharedKey('IE_PROTO');
	var Empty = function () { /* empty */ };
	var PROTOTYPE$1 = 'prototype';

	// Create object with fake `null` prototype: use iframe Object with cleared prototype
	var createDict = function () {
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = _domCreate('iframe');
	  var i = _enumBugKeys.length;
	  var lt = '<';
	  var gt = '>';
	  var iframeDocument;
	  iframe.style.display = 'none';
	  _html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
	  return createDict();
	};

	var _objectCreate = Object.create || function create(O, Properties) {
	  var result;
	  if (O !== null) {
	    Empty[PROTOTYPE$1] = _anObject(O);
	    result = new Empty();
	    Empty[PROTOTYPE$1] = null;
	    // add "__proto__" for Object.getPrototypeOf polyfill
	    result[IE_PROTO$1] = O;
	  } else result = createDict();
	  return Properties === undefined ? result : _objectDps(result, Properties);
	};

	// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

	var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

	var f$4 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
	  return _objectKeysInternal(O, hiddenKeys);
	};

	var _objectGopn = {
		f: f$4
	};

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

	var gOPN = _objectGopn.f;
	var toString$1 = {}.toString;

	var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];

	var getWindowNames = function (it) {
	  try {
	    return gOPN(it);
	  } catch (e) {
	    return windowNames.slice();
	  }
	};

	var f$5 = function getOwnPropertyNames(it) {
	  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(_toIobject(it));
	};

	var _objectGopnExt = {
		f: f$5
	};

	var gOPD = Object.getOwnPropertyDescriptor;

	var f$6 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
	  O = _toIobject(O);
	  P = _toPrimitive(P, true);
	  if (_ie8DomDefine) try {
	    return gOPD(O, P);
	  } catch (e) { /* empty */ }
	  if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
	};

	var _objectGopd = {
		f: f$6
	};

	// ECMAScript 6 symbols shim





	var META = _meta.KEY;



















	var gOPD$1 = _objectGopd.f;
	var dP$1 = _objectDp.f;
	var gOPN$1 = _objectGopnExt.f;
	var $Symbol = _global.Symbol;
	var $JSON = _global.JSON;
	var _stringify = $JSON && $JSON.stringify;
	var PROTOTYPE$2 = 'prototype';
	var HIDDEN = _wks('_hidden');
	var TO_PRIMITIVE = _wks('toPrimitive');
	var isEnum = {}.propertyIsEnumerable;
	var SymbolRegistry = _shared('symbol-registry');
	var AllSymbols = _shared('symbols');
	var OPSymbols = _shared('op-symbols');
	var ObjectProto = Object[PROTOTYPE$2];
	var USE_NATIVE = typeof $Symbol == 'function';
	var QObject = _global.QObject;
	// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
	var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = _descriptors && _fails(function () {
	  return _objectCreate(dP$1({}, 'a', {
	    get: function () { return dP$1(this, 'a', { value: 7 }).a; }
	  })).a != 7;
	}) ? function (it, key, D) {
	  var protoDesc = gOPD$1(ObjectProto, key);
	  if (protoDesc) delete ObjectProto[key];
	  dP$1(it, key, D);
	  if (protoDesc && it !== ObjectProto) dP$1(ObjectProto, key, protoDesc);
	} : dP$1;

	var wrap = function (tag) {
	  var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
	  sym._k = tag;
	  return sym;
	};

	var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
	  return typeof it == 'symbol';
	} : function (it) {
	  return it instanceof $Symbol;
	};

	var $defineProperty = function defineProperty(it, key, D) {
	  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
	  _anObject(it);
	  key = _toPrimitive(key, true);
	  _anObject(D);
	  if (_has(AllSymbols, key)) {
	    if (!D.enumerable) {
	      if (!_has(it, HIDDEN)) dP$1(it, HIDDEN, _propertyDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
	      D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
	    } return setSymbolDesc(it, key, D);
	  } return dP$1(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P) {
	  _anObject(it);
	  var keys = _enumKeys(P = _toIobject(P));
	  var i = 0;
	  var l = keys.length;
	  var key;
	  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P) {
	  return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key) {
	  var E = isEnum.call(this, key = _toPrimitive(key, true));
	  if (this === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
	  return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
	  it = _toIobject(it);
	  key = _toPrimitive(key, true);
	  if (it === ObjectProto && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
	  var D = gOPD$1(it, key);
	  if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it) {
	  var names = gOPN$1(_toIobject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
	  } return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
	  var IS_OP = it === ObjectProto;
	  var names = gOPN$1(IS_OP ? OPSymbols : _toIobject(it));
	  var result = [];
	  var i = 0;
	  var key;
	  while (names.length > i) {
	    if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
	  } return result;
	};

	// 19.4.1.1 Symbol([description])
	if (!USE_NATIVE) {
	  $Symbol = function Symbol() {
	    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
	    var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
	    var $set = function (value) {
	      if (this === ObjectProto) $set.call(OPSymbols, value);
	      if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, _propertyDesc(1, value));
	    };
	    if (_descriptors && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
	    return wrap(tag);
	  };
	  _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
	    return this._k;
	  });

	  _objectGopd.f = $getOwnPropertyDescriptor;
	  _objectDp.f = $defineProperty;
	  _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
	  _objectPie.f = $propertyIsEnumerable;
	  _objectGops.f = $getOwnPropertySymbols;

	  if (_descriptors && !_library) {
	    _redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }

	  _wksExt.f = function (name) {
	    return wrap(_wks(name));
	  };
	}

	_export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

	for (var es6Symbols = (
	  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
	).split(','), j = 0; es6Symbols.length > j;)_wks(es6Symbols[j++]);

	for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

	_export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function (key) {
	    return _has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(sym) {
	    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
	    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
	  },
	  useSetter: function () { setter = true; },
	  useSimple: function () { setter = false; }
	});

	_export(_export.S + _export.F * !USE_NATIVE, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});

	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function () {
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
	})), 'JSON', {
	  stringify: function stringify(it) {
	    var args = [it];
	    var i = 1;
	    var replacer, $replacer;
	    while (arguments.length > i) args.push(arguments[i++]);
	    $replacer = replacer = args[1];
	    if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
	    if (!_isArray(replacer)) replacer = function (key, value) {
	      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
	      if (!isSymbol(value)) return value;
	    };
	    args[1] = replacer;
	    return _stringify.apply($JSON, args);
	  }
	});

	// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
	$Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	_setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	_setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	_setToStringTag(_global.JSON, 'JSON', true);

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = _wks('unscopables');
	var ArrayProto = Array.prototype;
	if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
	var _addToUnscopables = function (key) {
	  ArrayProto[UNSCOPABLES][key] = true;
	};

	var _iterStep = function (done, value) {
	  return { value: value, done: !!done };
	};

	var _iterators = {};

	var IteratorPrototype = {};

	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	_hide(IteratorPrototype, _wks('iterator'), function () { return this; });

	var _iterCreate = function (Constructor, NAME, next) {
	  Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
	  _setToStringTag(Constructor, NAME + ' Iterator');
	};

	// 7.1.13 ToObject(argument)

	var _toObject = function (it) {
	  return Object(_defined(it));
	};

	// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


	var IE_PROTO$2 = _sharedKey('IE_PROTO');
	var ObjectProto$1 = Object.prototype;

	var _objectGpo = Object.getPrototypeOf || function (O) {
	  O = _toObject(O);
	  if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
	  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
	    return O.constructor.prototype;
	  } return O instanceof Object ? ObjectProto$1 : null;
	};

	var ITERATOR = _wks('iterator');
	var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
	var FF_ITERATOR = '@@iterator';
	var KEYS = 'keys';
	var VALUES = 'values';

	var returnThis = function () { return this; };

	var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
	  _iterCreate(Constructor, NAME, next);
	  var getMethod = function (kind) {
	    if (!BUGGY && kind in proto) return proto[kind];
	    switch (kind) {
	      case KEYS: return function keys() { return new Constructor(this, kind); };
	      case VALUES: return function values() { return new Constructor(this, kind); };
	    } return function entries() { return new Constructor(this, kind); };
	  };
	  var TAG = NAME + ' Iterator';
	  var DEF_VALUES = DEFAULT == VALUES;
	  var VALUES_BUG = false;
	  var proto = Base.prototype;
	  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
	  var $default = $native || getMethod(DEFAULT);
	  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
	  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
	  var methods, key, IteratorPrototype;
	  // Fix native
	  if ($anyNative) {
	    IteratorPrototype = _objectGpo($anyNative.call(new Base()));
	    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
	      // Set @@toStringTag to native iterators
	      _setToStringTag(IteratorPrototype, TAG, true);
	      // fix for some old engines
	      if (typeof IteratorPrototype[ITERATOR] != 'function') _hide(IteratorPrototype, ITERATOR, returnThis);
	    }
	  }
	  // fix Array#{values, @@iterator}.name in V8 / FF
	  if (DEF_VALUES && $native && $native.name !== VALUES) {
	    VALUES_BUG = true;
	    $default = function values() { return $native.call(this); };
	  }
	  // Define iterator
	  if (BUGGY || VALUES_BUG || !proto[ITERATOR]) {
	    _hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  _iterators[NAME] = $default;
	  _iterators[TAG] = returnThis;
	  if (DEFAULT) {
	    methods = {
	      values: DEF_VALUES ? $default : getMethod(VALUES),
	      keys: IS_SET ? $default : getMethod(KEYS),
	      entries: $entries
	    };
	    if (FORCED) for (key in methods) {
	      if (!(key in proto)) _redefine(proto, key, methods[key]);
	    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	var es6_array_iterator = _iterDefine(Array, 'Array', function (iterated, kind) {
	  this._t = _toIobject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var kind = this._k;
	  var index = this._i++;
	  if (!O || index >= O.length) {
	    this._t = undefined;
	    return _iterStep(1);
	  }
	  if (kind == 'keys') return _iterStep(0, index);
	  if (kind == 'values') return _iterStep(0, O[index]);
	  return _iterStep(0, [index, O[index]]);
	}, 'values');

	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	_iterators.Arguments = _iterators.Array;

	_addToUnscopables('keys');
	_addToUnscopables('values');
	_addToUnscopables('entries');

	var ITERATOR$1 = _wks('iterator');
	var TO_STRING_TAG = _wks('toStringTag');
	var ArrayValues = _iterators.Array;

	var DOMIterables = {
	  CSSRuleList: true, // TODO: Not spec compliant, should be false.
	  CSSStyleDeclaration: false,
	  CSSValueList: false,
	  ClientRectList: false,
	  DOMRectList: false,
	  DOMStringList: false,
	  DOMTokenList: true,
	  DataTransferItemList: false,
	  FileList: false,
	  HTMLAllCollection: false,
	  HTMLCollection: false,
	  HTMLFormElement: false,
	  HTMLSelectElement: false,
	  MediaList: true, // TODO: Not spec compliant, should be false.
	  MimeTypeArray: false,
	  NamedNodeMap: false,
	  NodeList: true,
	  PaintRequestList: false,
	  Plugin: false,
	  PluginArray: false,
	  SVGLengthList: false,
	  SVGNumberList: false,
	  SVGPathSegList: false,
	  SVGPointList: false,
	  SVGStringList: false,
	  SVGTransformList: false,
	  SourceBufferList: false,
	  StyleSheetList: true, // TODO: Not spec compliant, should be false.
	  TextTrackCueList: false,
	  TextTrackList: false,
	  TouchList: false
	};

	for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
	  var NAME = collections[i];
	  var explicit = DOMIterables[NAME];
	  var Collection = _global[NAME];
	  var proto = Collection && Collection.prototype;
	  var key;
	  if (proto) {
	    if (!proto[ITERATOR$1]) _hide(proto, ITERATOR$1, ArrayValues);
	    if (!proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
	    _iterators[NAME] = ArrayValues;
	    if (explicit) for (key in es6_array_iterator) if (!proto[key]) _redefine(proto, key, es6_array_iterator[key], true);
	  }
	}

	var setPrototypeOf = createCommonjsModule(function (module) {
	function _setPrototypeOf(o, p) {
	  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	    o.__proto__ = p;
	    return o;
	  };

	  return _setPrototypeOf(o, p);
	}

	module.exports = _setPrototypeOf;
	});

	var construct = createCommonjsModule(function (module) {
	function isNativeReflectConstruct() {
	  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	  if (Reflect.construct.sham) return false;
	  if (typeof Proxy === "function") return true;

	  try {
	    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
	    return true;
	  } catch (e) {
	    return false;
	  }
	}

	function _construct(Parent, args, Class) {
	  if (isNativeReflectConstruct()) {
	    module.exports = _construct = Reflect.construct;
	  } else {
	    module.exports = _construct = function _construct(Parent, args, Class) {
	      var a = [null];
	      a.push.apply(a, args);
	      var Constructor = Function.bind.apply(Parent, a);
	      var instance = new Constructor();
	      if (Class) setPrototypeOf(instance, Class.prototype);
	      return instance;
	    };
	  }

	  return _construct.apply(null, arguments);
	}

	module.exports = _construct;
	});

	function _defineProperty(obj, key, value) {
	  if (key in obj) {
	    Object.defineProperty(obj, key, {
	      value: value,
	      enumerable: true,
	      configurable: true,
	      writable: true
	    });
	  } else {
	    obj[key] = value;
	  }

	  return obj;
	}

	var defineProperty$1 = _defineProperty;

	function _objectSpread(target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i] != null ? arguments[i] : {};
	    var ownKeys = Object.keys(source);

	    if (typeof Object.getOwnPropertySymbols === 'function') {
	      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
	        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
	      }));
	    }

	    ownKeys.forEach(function (key) {
	      defineProperty$1(target, key, source[key]);
	    });
	  }

	  return target;
	}

	var objectSpread = _objectSpread;

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	var classCallCheck = _classCallCheck;

	function _defineProperties(target, props) {
	  for (var i = 0; i < props.length; i++) {
	    var descriptor = props[i];
	    descriptor.enumerable = descriptor.enumerable || false;
	    descriptor.configurable = true;
	    if ("value" in descriptor) descriptor.writable = true;
	    Object.defineProperty(target, descriptor.key, descriptor);
	  }
	}

	function _createClass(Constructor, protoProps, staticProps) {
	  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	  if (staticProps) _defineProperties(Constructor, staticProps);
	  return Constructor;
	}

	var createClass = _createClass;

	var bottle = createCommonjsModule(function (module, exports) {
	(function(undefined) {
	    /**
	     * BottleJS v1.7.1 - 2018-05-03
	     * A powerful dependency injection micro container
	     *
	     * Copyright (c) 2018 Stephen Young
	     * Licensed MIT
	     */
	    var Bottle;
	    
	    /**
	     * String constants
	     */
	    var DELIMITER = '.';
	    var FUNCTION_TYPE = 'function';
	    var STRING_TYPE = 'string';
	    var GLOBAL_NAME = '__global__';
	    var PROVIDER_SUFFIX = 'Provider';
	    
	    /**
	     * Unique id counter;
	     *
	     * @type Number
	     */
	    var id = 0;
	    
	    /**
	     * Local slice alias
	     *
	     * @type Functions
	     */
	    var slice = Array.prototype.slice;
	    
	    /**
	     * Iterator used to walk down a nested object.
	     *
	     * If Bottle.config.strict is true, this method will throw an exception if it encounters an
	     * undefined path
	     *
	     * @param Object obj
	     * @param String prop
	     * @return mixed
	     * @throws Error if Bottle is unable to resolve the requested service.
	     */
	    var getNested = function getNested(obj, prop) {
	        var service = obj[prop];
	        if (service === undefined && Bottle.config.strict) {
	            throw new Error('Bottle was unable to resolve a service.  `' + prop + '` is undefined.');
	        }
	        return service;
	    };
	    
	    /**
	     * Get a nested bottle. Will set and return if not set.
	     *
	     * @param String name
	     * @return Bottle
	     */
	    var getNestedBottle = function getNestedBottle(name) {
	        var bottle;
	        if (!this.nested[name]) {
	            bottle = Bottle.pop();
	            this.nested[name] = bottle;
	            this.factory(name, function SubProviderFactory() {
	                return bottle.container;
	            });
	        }
	        return this.nested[name];
	    };
	    
	    /**
	     * Get a service stored under a nested key
	     *
	     * @param String fullname
	     * @return Service
	     */
	    var getNestedService = function getNestedService(fullname) {
	        return fullname.split(DELIMITER).reduce(getNested, this);
	    };
	    
	    /**
	     * Function used by provider to set up middleware for each request.
	     *
	     * @param Number id
	     * @param String name
	     * @param Object instance
	     * @param Object container
	     * @return void
	     */
	    var applyMiddleware = function applyMiddleware(middleware, name, instance, container) {
	        var descriptor = {
	            configurable : true,
	            enumerable : true
	        };
	        if (middleware.length) {
	            descriptor.get = function getWithMiddlewear() {
	                var index = 0;
	                var next = function nextMiddleware(err) {
	                    if (err) {
	                        throw err;
	                    }
	                    if (middleware[index]) {
	                        middleware[index++](instance, next);
	                    }
	                };
	                next();
	                return instance;
	            };
	        } else {
	            descriptor.value = instance;
	            descriptor.writable = true;
	        }
	    
	        Object.defineProperty(container, name, descriptor);
	    
	        return container[name];
	    };
	    
	    /**
	     * Register middleware.
	     *
	     * @param String name
	     * @param Function func
	     * @return Bottle
	     */
	    var middleware = function middleware(fullname, func) {
	        var parts, name;
	        if (typeof fullname === FUNCTION_TYPE) {
	            func = fullname;
	            fullname = GLOBAL_NAME;
	        }
	    
	        parts = fullname.split(DELIMITER);
	        name = parts.shift();
	        if (parts.length) {
	            getNestedBottle.call(this, name).middleware(parts.join(DELIMITER), func);
	        } else {
	            if (!this.middlewares[name]) {
	                this.middlewares[name] = [];
	            }
	            this.middlewares[name].push(func);
	        }
	        return this;
	    };
	    
	    /**
	     * Used to process decorators in the provider
	     *
	     * @param Object instance
	     * @param Function func
	     * @return Mixed
	     */
	    var reducer = function reducer(instance, func) {
	        return func(instance);
	    };
	    
	    
	    /**
	     * Get decorators and middleware including globals
	     *
	     * @return array
	     */
	    var getWithGlobal = function getWithGlobal(collection, name) {
	        return (collection[name] || []).concat(collection.__global__ || []);
	    };
	    
	    
	    /**
	     * Create the provider properties on the container
	     *
	     * @param String name
	     * @param Function Provider
	     * @return Bottle
	     */
	    var createProvider = function createProvider(name, Provider) {
	        var providerName, properties, container, id, decorators, middlewares;
	    
	        id = this.id;
	        container = this.container;
	        decorators = this.decorators;
	        middlewares = this.middlewares;
	        providerName = name + PROVIDER_SUFFIX;
	    
	        properties = Object.create(null);
	        properties[providerName] = {
	            configurable : true,
	            enumerable : true,
	            get : function getProvider() {
	                var instance = new Provider();
	                delete container[providerName];
	                container[providerName] = instance;
	                return instance;
	            }
	        };
	    
	        properties[name] = {
	            configurable : true,
	            enumerable : true,
	            get : function getService() {
	                var provider = container[providerName];
	                var instance;
	                if (provider) {
	                    // filter through decorators
	                    instance = getWithGlobal(decorators, name).reduce(reducer, provider.$get(container));
	    
	                    delete container[providerName];
	                    delete container[name];
	                }
	                return instance === undefined ? instance : applyMiddleware(getWithGlobal(middlewares, name),
	                    name, instance, container);
	            }
	        };
	    
	        Object.defineProperties(container, properties);
	        return this;
	    };
	    
	    
	    /**
	     * Register a provider.
	     *
	     * @param String fullname
	     * @param Function Provider
	     * @return Bottle
	     */
	    var provider = function provider(fullname, Provider) {
	        var parts, name;
	        parts = fullname.split(DELIMITER);
	        if (this.providerMap[fullname] && parts.length === 1 && !this.container[fullname + PROVIDER_SUFFIX]) {
	            return console.error(fullname + ' provider already instantiated.');
	        }
	        this.originalProviders[fullname] = Provider;
	        this.providerMap[fullname] = true;
	    
	        name = parts.shift();
	    
	        if (parts.length) {
	            getNestedBottle.call(this, name).provider(parts.join(DELIMITER), Provider);
	            return this;
	        }
	        return createProvider.call(this, name, Provider);
	    };
	    
	    /**
	     * Register a factory inside a generic provider.
	     *
	     * @param String name
	     * @param Function Factory
	     * @return Bottle
	     */
	    var factory = function factory(name, Factory) {
	        return provider.call(this, name, function GenericProvider() {
	            this.$get = Factory;
	        });
	    };
	    
	    /**
	     * Private helper for creating service and service factories.
	     *
	     * @param String name
	     * @param Function Service
	     * @return Bottle
	     */
	    var createService = function createService(name, Service, isClass) {
	        var deps = arguments.length > 3 ? slice.call(arguments, 3) : [];
	        var bottle = this;
	        return factory.call(this, name, function GenericFactory() {
	            var serviceFactory = Service; // alias for jshint
	            var args = deps.map(getNestedService, bottle.container);
	    
	            if (!isClass) {
	                return serviceFactory.apply(null, args);
	            }
	            return new (Service.bind.apply(Service, [null].concat(args)))();
	        });
	    };
	    
	    /**
	     * Register a class service
	     *
	     * @param String name
	     * @param Function Service
	     * @return Bottle
	     */
	    var service = function service(name, Service) {
	        return createService.apply(this, [name, Service, true].concat(slice.call(arguments, 2)));
	    };
	    
	    /**
	     * Register a function service
	     */
	    var serviceFactory = function serviceFactory(name, factoryService) {
	        return createService.apply(this, [name, factoryService, false].concat(slice.call(arguments, 2)));
	    };
	    
	    /**
	     * Define a mutable property on the container.
	     *
	     * @param String name
	     * @param mixed val
	     * @return void
	     * @scope container
	     */
	    var defineValue = function defineValue(name, val) {
	        Object.defineProperty(this, name, {
	            configurable : true,
	            enumerable : true,
	            value : val,
	            writable : true
	        });
	    };
	    
	    /**
	     * Iterator for setting a plain object literal via defineValue
	     *
	     * @param Object container
	     * @param string name
	     */
	    var setValueObject = function setValueObject(container, name) {
	        var nestedContainer = container[name];
	        if (!nestedContainer) {
	            nestedContainer = {};
	            defineValue.call(container, name, nestedContainer);
	        }
	        return nestedContainer;
	    };
	    
	    
	    /**
	     * Register a value
	     *
	     * @param String name
	     * @param mixed val
	     * @return Bottle
	     */
	    var value = function value(name, val) {
	        var parts;
	        parts = name.split(DELIMITER);
	        name = parts.pop();
	        defineValue.call(parts.reduce(setValueObject, this.container), name, val);
	        return this;
	    };
	    
	    /**
	     * Define an enumerable, non-configurable, non-writable value.
	     *
	     * @param String name
	     * @param mixed value
	     * @return undefined
	     */
	    var defineConstant = function defineConstant(name, value) {
	        Object.defineProperty(this, name, {
	            configurable : false,
	            enumerable : true,
	            value : value,
	            writable : false
	        });
	    };
	    
	    /**
	     * Register a constant
	     *
	     * @param String name
	     * @param mixed value
	     * @return Bottle
	     */
	    var constant = function constant(name, value) {
	        var parts = name.split(DELIMITER);
	        name = parts.pop();
	        defineConstant.call(parts.reduce(setValueObject, this.container), name, value);
	        return this;
	    };
	    
	    /**
	     * Register decorator.
	     *
	     * @param String fullname
	     * @param Function func
	     * @return Bottle
	     */
	    var decorator = function decorator(fullname, func) {
	        var parts, name;
	        if (typeof fullname === FUNCTION_TYPE) {
	            func = fullname;
	            fullname = GLOBAL_NAME;
	        }
	    
	        parts = fullname.split(DELIMITER);
	        name = parts.shift();
	        if (parts.length) {
	            getNestedBottle.call(this, name).decorator(parts.join(DELIMITER), func);
	        } else {
	            if (!this.decorators[name]) {
	                this.decorators[name] = [];
	            }
	            this.decorators[name].push(func);
	        }
	        return this;
	    };
	    
	    /**
	     * Register a function that will be executed when Bottle#resolve is called.
	     *
	     * @param Function func
	     * @return Bottle
	     */
	    var defer = function defer(func) {
	        this.deferred.push(func);
	        return this;
	    };
	    
	    
	    /**
	     * Immediately instantiates the provided list of services and returns them.
	     *
	     * @param Array services
	     * @return Array Array of instances (in the order they were provided)
	     */
	    var digest = function digest(services) {
	        return (services || []).map(getNestedService, this.container);
	    };
	    
	    /**
	     * Register an instance factory inside a generic factory.
	     *
	     * @param {String} name - The name of the service
	     * @param {Function} Factory - The factory function, matches the signature required for the
	     * `factory` method
	     * @return Bottle
	     */
	    var instanceFactory = function instanceFactory(name, Factory) {
	        return factory.call(this, name, function GenericInstanceFactory(container) {
	            return {
	                instance : Factory.bind(Factory, container)
	            };
	        });
	    };
	    
	    /**
	     * A filter function for removing bottle container methods and providers from a list of keys
	     */
	    var byMethod = function byMethod(name) {
	        return !/^\$(?:decorator|register|list)$|Provider$/.test(name);
	    };
	    
	    /**
	     * List the services registered on the container.
	     *
	     * @param Object container
	     * @return Array
	     */
	    var list = function list(container) {
	        return Object.keys(container || this.container || {}).filter(byMethod);
	    };
	    
	    /**
	     * Named bottle instances
	     *
	     * @type Object
	     */
	    var bottles = {};
	    
	    /**
	     * Get an instance of bottle.
	     *
	     * If a name is provided the instance will be stored in a local hash.  Calling Bottle.pop multiple
	     * times with the same name will return the same instance.
	     *
	     * @param String name
	     * @return Bottle
	     */
	    var pop = function pop(name) {
	        var instance;
	        if (typeof name === STRING_TYPE) {
	            instance = bottles[name];
	            if (!instance) {
	                bottles[name] = instance = new Bottle();
	                instance.constant('BOTTLE_NAME', name);
	            }
	            return instance;
	        }
	        return new Bottle();
	    };
	    
	    /**
	     * Clear all named bottles.
	     */
	    var clear = function clear(name) {
	        if (typeof name === STRING_TYPE) {
	            delete bottles[name];
	        } else {
	            bottles = {};
	        }
	    };
	    
	    /**
	     * Register a service, factory, provider, or value based on properties on the object.
	     *
	     * properties:
	     *  * Obj.$name   String required ex: `'Thing'`
	     *  * Obj.$type   String optional 'service', 'factory', 'provider', 'value'.  Default: 'service'
	     *  * Obj.$inject Mixed  optional only useful with $type 'service' name or array of names
	     *  * Obj.$value  Mixed  optional Normally Obj is registered on the container.  However, if this
	     *                       property is included, it's value will be registered on the container
	     *                       instead of the object itsself.  Useful for registering objects on the
	     *                       bottle container without modifying those objects with bottle specific keys.
	     *
	     * @param Function Obj
	     * @return Bottle
	     */
	    var register = function register(Obj) {
	        var value = Obj.$value === undefined ? Obj : Obj.$value;
	        return this[Obj.$type || 'service'].apply(this, [Obj.$name, value].concat(Obj.$inject || []));
	    };
	    
	    /**
	     * Deletes providers from the map and container.
	     *
	     * @param String name
	     * @return void
	     */
	    var removeProviderMap = function resetProvider(name) {
	        delete this.providerMap[name];
	        delete this.container[name];
	        delete this.container[name + PROVIDER_SUFFIX];
	    };
	    
	    /**
	     * Resets providers on a bottle instance. If 'names' array is provided, only the named providers will be reset.
	     *
	     * @param Array names
	     * @return void
	     */
	    var resetProviders = function resetProviders(names) {
	        var tempProviders = this.originalProviders;
	        var shouldFilter = Array.isArray(names);
	    
	        Object.keys(this.originalProviders).forEach(function resetProvider(originalProviderName) {
	            if (shouldFilter && names.indexOf(originalProviderName) === -1) {
	                return;
	            }
	            var parts = originalProviderName.split(DELIMITER);
	            if (parts.length > 1) {
	                parts.forEach(removeProviderMap, getNestedBottle.call(this, parts[0]));
	            }
	            removeProviderMap.call(this, originalProviderName);
	            this.provider(originalProviderName, tempProviders[originalProviderName]);
	        }, this);
	    };
	    
	    
	    /**
	     * Execute any deferred functions
	     *
	     * @param Mixed data
	     * @return Bottle
	     */
	    var resolve = function resolve(data) {
	        this.deferred.forEach(function deferredIterator(func) {
	            func(data);
	        });
	    
	        return this;
	    };
	    
	    
	    /**
	     * Bottle constructor
	     *
	     * @param String name Optional name for functional construction
	     */
	    Bottle = function Bottle(name) {
	        if (!(this instanceof Bottle)) {
	            return Bottle.pop(name);
	        }
	    
	        this.id = id++;
	    
	        this.decorators = {};
	        this.middlewares = {};
	        this.nested = {};
	        this.providerMap = {};
	        this.originalProviders = {};
	        this.deferred = [];
	        this.container = {
	            $decorator : decorator.bind(this),
	            $register : register.bind(this),
	            $list : list.bind(this)
	        };
	    };
	    
	    /**
	     * Bottle prototype
	     */
	    Bottle.prototype = {
	        constant : constant,
	        decorator : decorator,
	        defer : defer,
	        digest : digest,
	        factory : factory,
	        instanceFactory: instanceFactory,
	        list : list,
	        middleware : middleware,
	        provider : provider,
	        resetProviders : resetProviders,
	        register : register,
	        resolve : resolve,
	        service : service,
	        serviceFactory : serviceFactory,
	        value : value
	    };
	    
	    /**
	     * Bottle static
	     */
	    Bottle.pop = pop;
	    Bottle.clear = clear;
	    Bottle.list = list;
	    
	    /**
	     * Global config
	     */
	    Bottle.config = {
	        strict : false
	    };
	    
	    /**
	     * Exports script adapted from lodash v2.4.1 Modern Build
	     *
	     * @see http://lodash.com/
	     */
	    
	    /**
	     * Valid object type map
	     *
	     * @type Object
	     */
	    var objectTypes = {
	        'function' : true,
	        'object' : true
	    };
	    
	    (function exportBottle(root) {
	    
	        /**
	         * Free variable exports
	         *
	         * @type Function
	         */
	        var freeExports = exports && !exports.nodeType && exports;
	    
	        /**
	         * Free variable module
	         *
	         * @type Object
	         */
	        var freeModule = module && !module.nodeType && module;
	    
	        /**
	         * CommonJS module.exports
	         *
	         * @type Function
	         */
	        var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;
	    
	        /**
	         * Free variable `global`
	         *
	         * @type Object
	         */
	        var freeGlobal = objectTypes[typeof commonjsGlobal] && commonjsGlobal;
	        if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
	            root = freeGlobal;
	        }
	    
	        /**
	         * Export
	         */
	        if (typeof undefined === FUNCTION_TYPE && typeof undefined.amd === 'object' && undefined.amd) {
	            root.Bottle = Bottle;
	            undefined(function() { return Bottle; });
	        } else if (freeExports && freeModule) {
	            if (moduleExports) {
	                (freeModule.exports = Bottle).Bottle = Bottle;
	            } else {
	                freeExports.Bottle = Bottle;
	            }
	        } else {
	            root.Bottle = Bottle;
	        }
	    }((objectTypes[typeof window] && window) || this));
	    
	}.call(commonjsGlobal));
	});

	var runtime = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	!(function(global) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = module.exports;

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration.
	          result.value = unwrapped;
	          resolve(result);
	        }, function(error) {
	          // If a rejected Promise was yielded, throw the rejection back
	          // into the async generator function so it can be handled there.
	          return invoke("throw", error, resolve, reject);
	        });
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };
	})(
	  // In sloppy mode, unbound `this` refers to the global object, fallback to
	  // Function constructor if we're in global strict mode. That is sadly a form
	  // of indirect eval which violates Content Security Policy.
	  (function() {
	    return this || (typeof self === "object" && self);
	  })() || Function("return this")()
	);
	});

	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	// This method of obtaining a reference to the global object needs to be
	// kept identical to the way it is obtained in runtime.js
	var g = (function() {
	  return this || (typeof self === "object" && self);
	})() || Function("return this")();

	// Use `getOwnPropertyNames` because not all browsers support calling
	// `hasOwnProperty` on the global `self` object in a worker. See #183.
	var hadRuntime = g.regeneratorRuntime &&
	  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

	// Save the old regeneratorRuntime in case it needs to be restored later.
	var oldRuntime = hadRuntime && g.regeneratorRuntime;

	// Force reevalutation of runtime.js.
	g.regeneratorRuntime = undefined;

	var runtimeModule = runtime;

	if (hadRuntime) {
	  // Restore the original runtime.
	  g.regeneratorRuntime = oldRuntime;
	} else {
	  // Remove the global property added by runtime.js.
	  try {
	    delete g.regeneratorRuntime;
	  } catch(e) {
	    g.regeneratorRuntime = undefined;
	  }
	}

	var regenerator = runtimeModule;

	var runtime$1 = createCommonjsModule(function (module) {
	/**
	 * Copyright (c) 2014-present, Facebook, Inc.
	 *
	 * This source code is licensed under the MIT license found in the
	 * LICENSE file in the root directory of this source tree.
	 */

	!(function(global) {

	  var Op = Object.prototype;
	  var hasOwn = Op.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var $Symbol = typeof Symbol === "function" ? Symbol : {};
	  var iteratorSymbol = $Symbol.iterator || "@@iterator";
	  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
	  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }

	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = module.exports;

	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
	    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
	    var generator = Object.create(protoGenerator.prototype);
	    var context = new Context(tryLocsList || []);

	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);

	    return generator;
	  }
	  runtime.wrap = wrap;

	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }

	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";

	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};

	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}

	  // This is a polyfill for %IteratorPrototype% for environments that
	  // don't natively support it.
	  var IteratorPrototype = {};
	  IteratorPrototype[iteratorSymbol] = function () {
	    return this;
	  };

	  var getProto = Object.getPrototypeOf;
	  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
	  if (NativeIteratorPrototype &&
	      NativeIteratorPrototype !== Op &&
	      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
	    // This environment has a native %IteratorPrototype%; use it instead
	    // of the polyfill.
	    IteratorPrototype = NativeIteratorPrototype;
	  }

	  var Gp = GeneratorFunctionPrototype.prototype =
	    Generator.prototype = Object.create(IteratorPrototype);
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunctionPrototype[toStringTagSymbol] =
	    GeneratorFunction.displayName = "GeneratorFunction";

	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }

	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };

	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	      if (!(toStringTagSymbol in genFun)) {
	        genFun[toStringTagSymbol] = "GeneratorFunction";
	      }
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };

	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `hasOwn.call(value, "__await")` to determine if the yielded value is
	  // meant to be awaited.
	  runtime.awrap = function(arg) {
	    return { __await: arg };
	  };

	  function AsyncIterator(generator) {
	    function invoke(method, arg, resolve, reject) {
	      var record = tryCatch(generator[method], generator, arg);
	      if (record.type === "throw") {
	        reject(record.arg);
	      } else {
	        var result = record.arg;
	        var value = result.value;
	        if (value &&
	            typeof value === "object" &&
	            hasOwn.call(value, "__await")) {
	          return Promise.resolve(value.__await).then(function(value) {
	            invoke("next", value, resolve, reject);
	          }, function(err) {
	            invoke("throw", err, resolve, reject);
	          });
	        }

	        return Promise.resolve(value).then(function(unwrapped) {
	          // When a yielded Promise is resolved, its final value becomes
	          // the .value of the Promise<{value,done}> result for the
	          // current iteration. If the Promise is rejected, however, the
	          // result for this iteration will be rejected with the same
	          // reason. Note that rejections of yielded Promises are not
	          // thrown back into the generator function, as is the case
	          // when an awaited Promise is rejected. This difference in
	          // behavior between yield and await is important, because it
	          // allows the consumer to decide what to do with the yielded
	          // rejection (swallow it and continue, manually .throw it back
	          // into the generator, abandon iteration, whatever). With
	          // await, by contrast, there is no opportunity to examine the
	          // rejection reason outside the generator function, so the
	          // only option is to throw it from the await expression, and
	          // let the generator function handle the exception.
	          result.value = unwrapped;
	          resolve(result);
	        }, reject);
	      }
	    }

	    var previousPromise;

	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return new Promise(function(resolve, reject) {
	          invoke(method, arg, resolve, reject);
	        });
	      }

	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : callInvokeWithMethodAndArg();
	    }

	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }

	  defineIteratorMethods(AsyncIterator.prototype);
	  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
	    return this;
	  };
	  runtime.AsyncIterator = AsyncIterator;

	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );

	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };

	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;

	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }

	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }

	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }

	      context.method = method;
	      context.arg = arg;

	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          var delegateResult = maybeInvokeDelegate(delegate, context);
	          if (delegateResult) {
	            if (delegateResult === ContinueSentinel) continue;
	            return delegateResult;
	          }
	        }

	        if (context.method === "next") {
	          // Setting context._sent for legacy support of Babel's
	          // function.sent implementation.
	          context.sent = context._sent = context.arg;

	        } else if (context.method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw context.arg;
	          }

	          context.dispatchException(context.arg);

	        } else if (context.method === "return") {
	          context.abrupt("return", context.arg);
	        }

	        state = GenStateExecuting;

	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;

	          if (record.arg === ContinueSentinel) {
	            continue;
	          }

	          return {
	            value: record.arg,
	            done: context.done
	          };

	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(context.arg) call above.
	          context.method = "throw";
	          context.arg = record.arg;
	        }
	      }
	    };
	  }

	  // Call delegate.iterator[context.method](context.arg) and handle the
	  // result, either by returning a { value, done } result from the
	  // delegate iterator, or by modifying context.method and context.arg,
	  // setting context.delegate to null, and returning the ContinueSentinel.
	  function maybeInvokeDelegate(delegate, context) {
	    var method = delegate.iterator[context.method];
	    if (method === undefined) {
	      // A .throw or .return when the delegate iterator has no .throw
	      // method always terminates the yield* loop.
	      context.delegate = null;

	      if (context.method === "throw") {
	        if (delegate.iterator.return) {
	          // If the delegate iterator has a return method, give it a
	          // chance to clean up.
	          context.method = "return";
	          context.arg = undefined;
	          maybeInvokeDelegate(delegate, context);

	          if (context.method === "throw") {
	            // If maybeInvokeDelegate(context) changed context.method from
	            // "return" to "throw", let that override the TypeError below.
	            return ContinueSentinel;
	          }
	        }

	        context.method = "throw";
	        context.arg = new TypeError(
	          "The iterator does not provide a 'throw' method");
	      }

	      return ContinueSentinel;
	    }

	    var record = tryCatch(method, delegate.iterator, context.arg);

	    if (record.type === "throw") {
	      context.method = "throw";
	      context.arg = record.arg;
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    var info = record.arg;

	    if (! info) {
	      context.method = "throw";
	      context.arg = new TypeError("iterator result is not an object");
	      context.delegate = null;
	      return ContinueSentinel;
	    }

	    if (info.done) {
	      // Assign the result of the finished delegate to the temporary
	      // variable specified by delegate.resultName (see delegateYield).
	      context[delegate.resultName] = info.value;

	      // Resume execution at the desired location (see delegateYield).
	      context.next = delegate.nextLoc;

	      // If context.method was "throw" but the delegate handled the
	      // exception, let the outer generator proceed normally. If
	      // context.method was "next", forget context.arg since it has been
	      // "consumed" by the delegate iterator. If context.method was
	      // "return", allow the original .return call to continue in the
	      // outer generator.
	      if (context.method !== "return") {
	        context.method = "next";
	        context.arg = undefined;
	      }

	    } else {
	      // Re-yield the result returned by the delegate method.
	      return info;
	    }

	    // The delegate iterator is finished, so forget it and continue with
	    // the outer generator.
	    context.delegate = null;
	    return ContinueSentinel;
	  }

	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);

	  Gp[toStringTagSymbol] = "Generator";

	  // A Generator should always return itself as the iterator object when the
	  // @@iterator function is called on it. Some browsers' implementations of the
	  // iterator prototype chain incorrectly implement this, causing the Generator
	  // object to not be returned from this call. This ensures that doesn't happen.
	  // See https://github.com/facebook/regenerator/issues/274 for more details.
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };

	  Gp.toString = function() {
	    return "[object Generator]";
	  };

	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };

	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }

	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }

	    this.tryEntries.push(entry);
	  }

	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }

	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }

	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();

	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }

	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };

	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }

	      if (typeof iterable.next === "function") {
	        return iterable;
	      }

	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }

	          next.value = undefined;
	          next.done = true;

	          return next;
	        };

	        return next.next = next;
	      }
	    }

	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;

	  function doneResult() {
	    return { value: undefined, done: true };
	  }

	  Context.prototype = {
	    constructor: Context,

	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      // Resetting context._sent for legacy support of Babel's
	      // function.sent implementation.
	      this.sent = this._sent = undefined;
	      this.done = false;
	      this.delegate = null;

	      this.method = "next";
	      this.arg = undefined;

	      this.tryEntries.forEach(resetTryEntry);

	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },

	    stop: function() {
	      this.done = true;

	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }

	      return this.rval;
	    },

	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }

	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;

	        if (caught) {
	          // If the dispatched exception was caught by a catch block,
	          // then let that catch block handle the exception normally.
	          context.method = "next";
	          context.arg = undefined;
	        }

	        return !! caught;
	      }

	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;

	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }

	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");

	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }

	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }

	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },

	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }

	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }

	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;

	      if (finallyEntry) {
	        this.method = "next";
	        this.next = finallyEntry.finallyLoc;
	        return ContinueSentinel;
	      }

	      return this.complete(record);
	    },

	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }

	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = this.arg = record.arg;
	        this.method = "return";
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }

	      return ContinueSentinel;
	    },

	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },

	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }

	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },

	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };

	      if (this.method === "next") {
	        // Deliberately forget the last sent value so that we don't
	        // accidentally pass it on to the delegate.
	        this.arg = undefined;
	      }

	      return ContinueSentinel;
	    }
	  };
	})(
	  // In sloppy mode, unbound `this` refers to the global object, fallback to
	  // Function constructor if we're in global strict mode. That is sadly a form
	  // of indirect eval which violates Content Security Policy.
	  (function() { return this })() || Function("return this")()
	);
	});

	function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
	  try {
	    var info = gen[key](arg);
	    var value = info.value;
	  } catch (error) {
	    reject(error);
	    return;
	  }

	  if (info.done) {
	    resolve(value);
	  } else {
	    Promise.resolve(value).then(_next, _throw);
	  }
	}

	function _asyncToGenerator(fn) {
	  return function () {
	    var self = this,
	        args = arguments;
	    return new Promise(function (resolve, reject) {
	      var gen = fn.apply(self, args);

	      function _next(value) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
	      }

	      function _throw(err) {
	        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
	      }

	      _next(undefined);
	    });
	  };
	}

	var asyncToGenerator = _asyncToGenerator;

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	var _invoke = function (fn, args, that) {
	  var un = that === undefined;
	  switch (args.length) {
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return fn.apply(that, args);
	};

	var arraySlice = [].slice;
	var factories = {};

	var construct$1 = function (F, len, args) {
	  if (!(len in factories)) {
	    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
	    // eslint-disable-next-line no-new-func
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  } return factories[len](F, args);
	};

	var _bind = Function.bind || function bind(that /* , ...args */) {
	  var fn = _aFunction(this);
	  var partArgs = arraySlice.call(arguments, 1);
	  var bound = function (/* args... */) {
	    var args = partArgs.concat(arraySlice.call(arguments));
	    return this instanceof bound ? construct$1(fn, args.length, args) : _invoke(fn, args, that);
	  };
	  if (_isObject(fn.prototype)) bound.prototype = fn.prototype;
	  return bound;
	};

	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)


	_export(_export.P, 'Function', { bind: _bind });

	var _typeof_1 = createCommonjsModule(function (module) {
	function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

	function _typeof(obj) {
	  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
	    module.exports = _typeof = function _typeof(obj) {
	      return _typeof2(obj);
	    };
	  } else {
	    module.exports = _typeof = function _typeof(obj) {
	      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
	    };
	  }

	  return _typeof(obj);
	}

	module.exports = _typeof;
	});

	function _assertThisInitialized(self) {
	  if (self === void 0) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }

	  return self;
	}

	var assertThisInitialized = _assertThisInitialized;

	function _possibleConstructorReturn(self, call) {
	  if (call && (_typeof_1(call) === "object" || typeof call === "function")) {
	    return call;
	  }

	  return assertThisInitialized(self);
	}

	var possibleConstructorReturn = _possibleConstructorReturn;

	var getPrototypeOf = createCommonjsModule(function (module) {
	function _getPrototypeOf(o) {
	  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	    return o.__proto__ || Object.getPrototypeOf(o);
	  };
	  return _getPrototypeOf(o);
	}

	module.exports = _getPrototypeOf;
	});

	function _superPropBase(object, property) {
	  while (!Object.prototype.hasOwnProperty.call(object, property)) {
	    object = getPrototypeOf(object);
	    if (object === null) break;
	  }

	  return object;
	}

	var superPropBase = _superPropBase;

	var get = createCommonjsModule(function (module) {
	function _get(target, property, receiver) {
	  if (typeof Reflect !== "undefined" && Reflect.get) {
	    module.exports = _get = Reflect.get;
	  } else {
	    module.exports = _get = function _get(target, property, receiver) {
	      var base = superPropBase(target, property);
	      if (!base) return;
	      var desc = Object.getOwnPropertyDescriptor(base, property);

	      if (desc.get) {
	        return desc.get.call(receiver);
	      }

	      return desc.value;
	    };
	  }

	  return _get(target, property, receiver || target);
	}

	module.exports = _get;
	});

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function");
	  }

	  subClass.prototype = Object.create(superClass && superClass.prototype, {
	    constructor: {
	      value: subClass,
	      writable: true,
	      configurable: true
	    }
	  });
	  if (superClass) setPrototypeOf(subClass, superClass);
	}

	var inherits = _inherits;

	/*
	 * Copyright © 2017, Rezo Zero
	 *
	 * @file debug.js
	 * @author Adrien Scholaert <adrien@rezo-zero.com>
	 */
	function debug(message) {
	  var color = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

	  if (window.startingBlocksDebugLevel === 1) {
	    console.debug("%c[SB] %c".concat(message), 'color:#749f73', 'color:debug', color);
	  }
	}
	function warn() {
	  if (window.startingBlocksDebugLevel === 1) {
	    var _console3;

	    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
	      args[_key3] = arguments[_key3];
	    }

	    (_console3 = console).warn.apply(_console3, ['[SB]'].concat(args));
	  }
	}

	/**
	 * Event dispatcher.
	 */

	var Dispatcher =
	/*#__PURE__*/
	function () {
	  function Dispatcher() {
	    classCallCheck(this, Dispatcher);
	  }

	  createClass(Dispatcher, null, [{
	    key: "commit",
	    value: function commit(eventType, detail) {
	      var event = new window.CustomEvent(eventType, {
	        detail: detail
	      });
	      debug('🚩 Dispatched ' + eventType);
	      window.dispatchEvent(event);
	    }
	  }]);

	  return Dispatcher;
	}();

	function _isNativeFunction(fn) {
	  return Function.toString.call(fn).indexOf("[native code]") !== -1;
	}

	var isNativeFunction = _isNativeFunction;

	var wrapNativeSuper = createCommonjsModule(function (module) {
	function _wrapNativeSuper(Class) {
	  var _cache = typeof Map === "function" ? new Map() : undefined;

	  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
	    if (Class === null || !isNativeFunction(Class)) return Class;

	    if (typeof Class !== "function") {
	      throw new TypeError("Super expression must either be null or a function");
	    }

	    if (typeof _cache !== "undefined") {
	      if (_cache.has(Class)) return _cache.get(Class);

	      _cache.set(Class, Wrapper);
	    }

	    function Wrapper() {
	      return construct(Class, arguments, getPrototypeOf(this).constructor);
	    }

	    Wrapper.prototype = Object.create(Class.prototype, {
	      constructor: {
	        value: Wrapper,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	    return setPrototypeOf(Wrapper, Class);
	  };

	  return _wrapNativeSuper(Class);
	}

	module.exports = _wrapNativeSuper;
	});

	/*
	 * Copyright © 2017, Rezo Zero
	 *
	 * @file UnknownServiceException.js
	 * @author Adrien Scholaert <adrien@rezo-zero.com>
	 */
	var UnknownServiceException =
	/*#__PURE__*/
	function (_Error) {
	  inherits(UnknownServiceException, _Error);

	  function UnknownServiceException(id) {
	    var _this;

	    classCallCheck(this, UnknownServiceException);

	    _this = possibleConstructorReturn(this, getPrototypeOf(UnknownServiceException).call(this, "Service \"".concat(id, "\" is not defined")));
	    _this.name = "UnknownServiceException";
	    return _this;
	  }

	  return UnknownServiceException;
	}(wrapNativeSuper(Error));

	/*
	 * Copyright © 2017, Rezo Zero
	 *
	 * @file DependencyNotFulfilledException.js
	 * @author Adrien Scholaert <adrien@rezo-zero.com>
	 */
	var DependencyNotFulfilledException =
	/*#__PURE__*/
	function (_Error) {
	  inherits(DependencyNotFulfilledException, _Error);

	  function DependencyNotFulfilledException(firstServiceName, secondeServiceName) {
	    var _this;

	    classCallCheck(this, DependencyNotFulfilledException);

	    _this = possibleConstructorReturn(this, getPrototypeOf(DependencyNotFulfilledException).call(this, "Object of type \"".concat(firstServiceName, "\" needs \"").concat(secondeServiceName, "\" service")));
	    _this.name = "DependencyNotFulfilledException";
	    return _this;
	  }

	  return DependencyNotFulfilledException;
	}(wrapNativeSuper(Error));

	var AbstractService =
	/*#__PURE__*/
	function () {
	  function AbstractService() {
	    var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var serviceName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'AbstractService';
	    var dependencies = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['Config'];

	    classCallCheck(this, AbstractService);

	    this._container = container;
	    this._serviceName = serviceName;
	    this.checkDependencies(dependencies);
	  }

	  createClass(AbstractService, [{
	    key: "init",
	    value: function init() {}
	  }, {
	    key: "hasService",
	    value: function hasService(serviceName) {
	      return this._container.hasOwnProperty(serviceName);
	    }
	  }, {
	    key: "checkDependencies",
	    value: function checkDependencies() {
	      var dependencies = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = dependencies[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var serviceName = _step.value;

	          if (!this.hasService(serviceName)) {
	            throw new DependencyNotFulfilledException(this._serviceName, serviceName);
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return != null) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }, {
	    key: "getService",
	    value: function getService(serviceName) {
	      if (!this.hasService(serviceName)) {
	        throw new UnknownServiceException(serviceName);
	      }

	      return this._container[serviceName];
	    }
	  }, {
	    key: "serviceName",
	    get: function get() {
	      return this._serviceName;
	    },
	    set: function set(value) {
	      this._serviceName = value;
	    }
	  }, {
	    key: "container",
	    get: function get() {
	      return this._container;
	    },
	    set: function set(value) {
	      this._container = value;
	    }
	  }]);

	  return AbstractService;
	}();

	var AbstractBootableService =
	/*#__PURE__*/
	function (_AbstractService) {
	  inherits(AbstractBootableService, _AbstractService);

	  function AbstractBootableService() {
	    classCallCheck(this, AbstractBootableService);

	    return possibleConstructorReturn(this, getPrototypeOf(AbstractBootableService).apply(this, arguments));
	  }

	  createClass(AbstractBootableService, [{
	    key: "boot",
	    value: function boot() {}
	  }]);

	  return AbstractBootableService;
	}(AbstractService);

	/**
	 * PageBuilder.
	 */

	var PageBuilder =
	/*#__PURE__*/
	function (_AbstractBootableServ) {
	  inherits(PageBuilder, _AbstractBootableServ);

	  function PageBuilder(container) {
	    var _this;

	    var serviceName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'PageBuilder';

	    classCallCheck(this, PageBuilder);

	    _this = possibleConstructorReturn(this, getPrototypeOf(PageBuilder).call(this, container, serviceName, ['Dom']));
	    debug("\u2615\uFE0F ".concat(serviceName, " awake"));

	    if (!window.location.origin) {
	      window.location.origin = window.location.protocol + '//' + window.location.host;
	    }
	    /**
	     * Page instance
	     * @type {(AbstractPage|null)}
	     */


	    _this.page = null; // Bind methods

	    _this.buildPage = _this.buildPage.bind(assertThisInitialized(assertThisInitialized(_this)));
	    return _this;
	  }

	  createClass(PageBuilder, [{
	    key: "boot",
	    value: function boot() {
	      get(getPrototypeOf(PageBuilder.prototype), "boot", this).call(this); // Build first page with static context


	      this.buildPage(this.getService('Dom').getContainer(), 'static');
	    }
	    /**
	     * Build a new page instance.
	     *
	     * @param {HTMLElement} rootElement
	     * @param {String} context
	     * @returns {AbstractPage|null}
	     */

	  }, {
	    key: "buildPage",
	    value: function () {
	      var _buildPage = asyncToGenerator(
	      /*#__PURE__*/
	      regenerator.mark(function _callee(rootElement) {
	        var _this2 = this;

	        var context,
	            nodeTypeName,
	            _args = arguments;
	        return regenerator.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                context = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'ajax';
	                nodeTypeName = this.getService('Dom').getNodeType(rootElement);

	                if (this.hasService(nodeTypeName)) {
	                  this.page = this.getService(nodeTypeName).instance();
	                } else {
	                  nodeTypeName = 'DefaultPage';
	                  this.page = this.getService('DefaultPage').instance();
	                } // Set some values


	                this.page.type = nodeTypeName;
	                this.page.context = context;
	                this.page.id = rootElement.id;
	                this.page.rootElement = rootElement;
	                this.page.name = rootElement.hasAttribute('data-node-name') ? rootElement.getAttribute('data-node-name') : '';
	                this.page.metaTitle = rootElement.hasAttribute('data-meta-title') ? rootElement.getAttribute('data-meta-title') : '';
	                this.page.isHome = rootElement.getAttribute('data-is-home') === '1';
	                _context.next = 12;
	                return this.page.init();

	              case 12:
	                // Dispatch an event to inform that the new page is ready
	                Dispatcher.commit(AFTER_PAGE_BOOT, this.page);

	                if (this.hasService('Splashscreen') && !this.getService('Splashscreen').splashscreenHidden) {
	                  Dispatcher.commit(BEFORE_SPLASHSCREEN_HIDE, this.page);
	                  this.getService('Splashscreen').hide().then(function () {
	                    Dispatcher.commit(AFTER_SPLASHSCREEN_HIDE, _this2.page);
	                    _this2.getService('Splashscreen').splashscreenHidden = true;
	                  });
	                }

	                return _context.abrupt("return", this.page);

	              case 15:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      return function buildPage(_x) {
	        return _buildPage.apply(this, arguments);
	      };
	    }()
	  }]);

	  return PageBuilder;
	}(AbstractBootableService);

	var AbstractBlockBuilder =
	/*#__PURE__*/
	function (_AbstractService) {
	  inherits(AbstractBlockBuilder, _AbstractService);

	  function AbstractBlockBuilder() {
	    classCallCheck(this, AbstractBlockBuilder);

	    return possibleConstructorReturn(this, getPrototypeOf(AbstractBlockBuilder).apply(this, arguments));
	  }

	  createClass(AbstractBlockBuilder, [{
	    key: "getBlockInstance",

	    /**
	     * Returns an `AbstractBlock` child class instance
	     * according to the nodeTypeName or an AbstractBlock as default.
	     *
	     * Comment out the default case if you don’t want a default block to be instantiated
	     * for each block.
	     *
	     * @param  {String} blockType
	     * @return {AbstractBlock|null}
	     */
	    value: function () {
	      var _getBlockInstance = asyncToGenerator(
	      /*#__PURE__*/
	      regenerator.mark(function _callee(blockType) {
	        return regenerator.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                return _context.abrupt("return", null);

	              case 1:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      return function getBlockInstance(_x) {
	        return _getBlockInstance.apply(this, arguments);
	      };
	    }()
	  }]);

	  return AbstractBlockBuilder;
	}(AbstractService);

	var BlockBuilder =
	/*#__PURE__*/
	function (_AbstractBlockBuilder) {
	  inherits(BlockBuilder, _AbstractBlockBuilder);

	  function BlockBuilder(container) {
	    var _this;

	    var serviceName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'BlockBuilder';

	    classCallCheck(this, BlockBuilder);

	    _this = possibleConstructorReturn(this, getPrototypeOf(BlockBuilder).call(this, container, serviceName));
	    debug("\u2615\uFE0F ".concat(serviceName, " awake"));
	    return _this;
	  }
	  /**
	   * Returns an `AbstractBlock` child class instance
	   * according to the nodeTypeName or an AbstractBlock as default.
	   *
	   * Comment out the default case if you don’t want a default block to be instantiated
	   * for each block.
	   *
	   * @param  {String} blockType
	   * @return {AbstractBlock}
	   */


	  createClass(BlockBuilder, [{
	    key: "getBlockInstance",
	    value: function () {
	      var _getBlockInstance = asyncToGenerator(
	      /*#__PURE__*/
	      regenerator.mark(function _callee(blockType) {
	        return regenerator.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                if (!this.hasService(blockType)) {
	                  _context.next = 2;
	                  break;
	                }

	                return _context.abrupt("return", this.getService(blockType).instance());

	              case 2:
	                return _context.abrupt("return", null);

	              case 3:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      return function getBlockInstance(_x) {
	        return _getBlockInstance.apply(this, arguments);
	      };
	    }()
	  }]);

	  return BlockBuilder;
	}(AbstractBlockBuilder);

	var dP$2 = _objectDp.f;
	var FProto = Function.prototype;
	var nameRE = /^\s*function ([^ (]*)/;
	var NAME$1 = 'name';

	// 19.2.4.2 name
	NAME$1 in FProto || _descriptors && dP$2(FProto, NAME$1, {
	  configurable: true,
	  get: function () {
	    try {
	      return ('' + this).match(nameRE)[1];
	    } catch (e) {
	      return '';
	    }
	  }
	});

	/**
	 * Class that is going to deal with DOM parsing/manipulation.
	 */

	var Dom =
	/*#__PURE__*/
	function (_AbstractService) {
	  inherits(Dom, _AbstractService);

	  /**
	   * Constructor.
	   *
	   * @param {Object} container
	   * @param {String} serviceName
	   */
	  function Dom(container) {
	    var _this;

	    var serviceName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Dom';

	    classCallCheck(this, Dom);

	    _this = possibleConstructorReturn(this, getPrototypeOf(Dom).call(this, container, serviceName));
	    debug("\u2615\uFE0F ".concat(serviceName, " awake"));
	    /**
	     * Full HTML String of the current page.
	     * By default is the innerHTML of the initial loaded page.
	     *
	     * Each time a new page is loaded, the value is the response of the ajax call.
	     *
	     * @type {String}
	     * @default
	     */

	    _this.currentHTML = document.documentElement.innerHTML;
	    return _this;
	  }
	  /**
	   * Parse the responseText obtained from the ajax call.
	   *
	   * @param  {String} responseText
	   * @return {HTMLElement}
	   */


	  createClass(Dom, [{
	    key: "parseResponse",
	    value: function parseResponse(responseText) {
	      this.currentHTML = responseText;
	      var wrapper = document.createElement('div');
	      wrapper.innerHTML = responseText;
	      return this.getContainer(wrapper);
	    }
	    /**
	     * Get the main wrapper by the ID `wrapperId`.
	     *
	     * @return {HTMLElement} element
	     */

	  }, {
	    key: "getWrapper",
	    value: function getWrapper() {
	      var wrapper = document.getElementById(this.getService('Config').wrapperId);

	      if (!wrapper) {
	        throw new Error('Starting Blocks: Wrapper not found!');
	      }

	      return wrapper;
	    }
	    /**
	     * Return node type.
	     *
	     * @param container
	     * @returns {string}
	     */

	  }, {
	    key: "getNodeType",
	    value: function getNodeType(container) {
	      return container.getAttribute(this.getService('Config').objectTypeAttr);
	    }
	    /**
	     * Get the container on the current DOM,
	     * or from an HTMLElement passed via argument.
	     *
	     * @param  {HTMLElement|null} element
	     * @return {HTMLElement}
	     */

	  }, {
	    key: "getContainer",
	    value: function getContainer() {
	      var element = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

	      if (!element) {
	        element = document.body;
	      }

	      if (!element) {
	        throw new Error('Starting Blocks: DOM not ready!');
	      }

	      var container = this.parseContainer(element);

	      if (!container) {
	        throw new Error("Starting Blocks: container not found! Did you use at least\n            one dom element with \".".concat(this.getService('Config').pageClass, "\" class and \"data-node-type\" attribute?"));
	      }

	      return container;
	    }
	    /**
	     * Put the container on the page.
	     *
	     * @param  {HTMLElement} element
	     */

	  }, {
	    key: "putContainer",
	    value: function putContainer(element) {
	      element.style.visibility = 'hidden';
	      var wrapper = this.getWrapper();
	      wrapper.appendChild(element); // Dispatch an event

	      Dispatcher.commit(AFTER_DOM_APPENDED, {
	        element: element,
	        currentHTML: this.getService('Dom').currentHTML
	      });
	    }
	    /**
	     * Get container selector.
	     *
	     * @param  {HTMLElement} element
	     * @return {HTMLElement} element
	     */

	  }, {
	    key: "parseContainer",
	    value: function parseContainer(element) {
	      return element.querySelector(".".concat(this.getService('Config').pageClass, "[data-node-type]"));
	    }
	    /**
	     * Update body attributes.
	     *
	     * @param {AbstractPage} page
	     */

	  }, {
	    key: "updateBodyAttributes",
	    value: function updateBodyAttributes(page) {
	      // Change body class and id
	      if (page.name) {
	        document.body.id = page.name;
	        document.body.classList.add(page.name);
	      }

	      document.body.classList.add(page.type);

	      if (page.isHome) {
	        document.body.setAttribute('data-is-home', '1');
	      } else {
	        document.body.setAttribute('data-is-home', '0');
	      }
	    }
	    /**
	     * Update page title.
	     *
	     * @param {AbstractPage} page
	     */

	  }, {
	    key: "updatePageTitle",
	    value: function updatePageTitle(page) {
	      if (page.metaTitle) {
	        document.title = page.metaTitle;
	      }
	    }
	  }]);

	  return Dom;
	}(AbstractService);

	function _arrayWithoutHoles(arr) {
	  if (Array.isArray(arr)) {
	    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
	      arr2[i] = arr[i];
	    }

	    return arr2;
	  }
	}

	var arrayWithoutHoles = _arrayWithoutHoles;

	function _iterableToArray(iter) {
	  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
	}

	var iterableToArray = _iterableToArray;

	function _nonIterableSpread() {
	  throw new TypeError("Invalid attempt to spread non-iterable instance");
	}

	var nonIterableSpread = _nonIterableSpread;

	function _toConsumableArray(arr) {
	  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
	}

	var toConsumableArray = _toConsumableArray;

	/**
	 * Returns a function, that, as long as it continues to be invoked, will not
	 * be triggered.
	 *
	 * The function will be called after it stops being called for
	 * N milliseconds. If `immediate` is passed, trigger the function on the
	 * leading edge, instead of the trailing.
	 *
	 * @see   http://davidwalsh.name/javascript-debounce-function
	 * @param {Function} func     [function to debounce]
	 * @param {Number} wait       [time to wait]
	 * @param {Boolean} immediate []
	 */
	function debounce(func, wait, immediate) {
	  var timeout;
	  return function () {
	    var context = this;
	    var args = arguments;

	    var later = function later() {
	      timeout = null;
	      if (!immediate) func.apply(context, args);
	    };

	    var callNow = immediate && !timeout;
	    clearTimeout(timeout);
	    timeout = setTimeout(later, wait);
	    if (callNow) func.apply(context, args);
	  };
	}

	/**
	 * Base class for creating page implementations.
	 *
	 * **Do not instanciate this class directly, create a sub-class**.
	 *
	 * @abstract
	 */

	var AbstractPage =
	/*#__PURE__*/
	function (_AbstractService) {
	  inherits(AbstractPage, _AbstractService);

	  /**
	   * Base constructor for Pages.
	   * @constructor
	   */
	  function AbstractPage(container) {
	    var _this;

	    classCallCheck(this, AbstractPage);

	    _this = possibleConstructorReturn(this, getPrototypeOf(AbstractPage).call(this, container, 'AbstractPage'));
	    /**
	     * Container element
	     *
	     * @type {HTMLElement}
	     */

	    _this.rootElement = null;
	    /**
	     * Page id
	     *
	     * @type {String|null}
	     */

	    _this.id = null;
	    /**
	     * Page context (static or ajax)
	     *
	     * @type {String|null}
	     */

	    _this.context = null;
	    /**
	     * Page type
	     *
	     * @type {String|null}
	     */

	    _this.type = null;
	    /**
	     * Is home ?
	     *
	     * @type {boolean}
	     */

	    _this.isHome = null;
	    /**
	     * AbstractBlock collection.
	     *
	     * @type {Array<AbstractBlock>}
	     */

	    _this.blocks = [];
	    /**
	     * Node name
	     *
	     * @type {String|null}
	     */

	    _this.name = null;
	    /**
	     * Meta title
	     * @type {String|null}
	     */

	    _this.metaTitle = null; // Bind methods

	    _this.onResize = _this.onResize.bind(assertThisInitialized(assertThisInitialized(_this)));
	    _this.onResizeDebounce = debounce(_this.onResize, 50, false);
	    _this.bindedUpdateBlocks = debounce(_this.updateBlocks.bind(assertThisInitialized(assertThisInitialized(_this))), 50, false);
	    return _this;
	  }
	  /**
	   * Initialize page.
	   *
	   * You should always extends this method in your child implementations instead
	   * of extending page constructor.
	   */


	  createClass(AbstractPage, [{
	    key: "init",
	    value: function () {
	      var _init = asyncToGenerator(
	      /*#__PURE__*/
	      regenerator.mark(function _callee() {
	        return regenerator.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                // Debug
	                debug('✳️ #' + this.id + ' %c[' + this.type + '] [' + this.context + ']', 'color:grey');
	                /**
	                 * HTMLElement blocks collection.
	                 *
	                 * @type {Array}
	                 */

	                this.blockElements = toConsumableArray(this.rootElement.querySelectorAll(".".concat(this.getService('Config').pageBlockClass)));
	                /**
	                 * @type {Number}
	                 */

	                this.blockLength = this.blockElements.length;

	                if (!this.blockLength) {
	                  _context.next = 6;
	                  break;
	                }

	                _context.next = 6;
	                return this.initBlocks();

	              case 6:
	                this.initEvents();

	              case 7:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      return function init() {
	        return _init.apply(this, arguments);
	      };
	    }()
	    /**
	     * Destroy current page and all its blocks.
	     */

	  }, {
	    key: "destroy",
	    value: function destroy() {
	      debug('🗑️ #' + this.id + ' %c[' + this.type + ']', 'color:grey');
	      this.rootElement.parentNode.removeChild(this.rootElement);
	      this.destroyEvents(); // Do not remove name class on body if destroyed page is the same as current one.

	      if (this.getService('PageBuilder').page !== null && this.getService('PageBuilder').page.name !== this.name) {
	        document.body.classList.remove(this.name);
	      } // Do not remove type class on body if destroyed page is the same as current one.


	      if (this.getService('PageBuilder').page !== null && this.getService('PageBuilder').page.type !== this.type) {
	        document.body.classList.remove(this.type);
	      } // Blocks


	      if (this.blocks !== null) {
	        for (var blockIndex in this.blocks) {
	          if (this.blocks.hasOwnProperty(blockIndex)) {
	            this.blocks[blockIndex].destroy();
	          }
	        }
	      }
	    }
	    /**
	     * Initialize basic events.
	     */

	  }, {
	    key: "initEvents",
	    value: function initEvents() {
	      window.addEventListener('resize', this.onResizeDebounce);
	      this.domObserver = new window.MutationObserver(this.bindedUpdateBlocks);
	      this.domObserver.observe(this.rootElement, {
	        childList: true,
	        attributes: false,
	        characterData: false,
	        subtree: true
	      });
	    }
	    /**
	     * Destroy events
	     */

	  }, {
	    key: "destroyEvents",
	    value: function destroyEvents() {
	      window.removeEventListener('resize', this.onResizeDebounce);
	      this.domObserver.disconnect();
	    }
	    /**
	     * Initialize page blocks on page.
	     */

	  }, {
	    key: "initBlocks",
	    value: function () {
	      var _initBlocks = asyncToGenerator(
	      /*#__PURE__*/
	      regenerator.mark(function _callee2() {
	        var blockIndex, block, i;
	        return regenerator.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                blockIndex = 0;

	              case 1:
	                if (!(blockIndex < this.blockLength)) {
	                  _context2.next = 9;
	                  break;
	                }

	                _context2.next = 4;
	                return this.initSingleBlock(this.blockElements[blockIndex]);

	              case 4:
	                block = _context2.sent;

	                // Prevent undefined blocks to be appended to block collection.
	                if (block) {
	                  this.blocks.push(block);
	                }

	              case 6:
	                blockIndex++;
	                _context2.next = 1;
	                break;

	              case 9:
	                // Notify all blocks that page init is over.
	                for (i = this.blocks.length - 1; i >= 0; i--) {
	                  if (typeof this.blocks[i].onPageReady === 'function') this.blocks[i].onPageReady();
	                }

	              case 10:
	              case "end":
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));

	      return function initBlocks() {
	        return _initBlocks.apply(this, arguments);
	      };
	    }()
	    /**
	     * Append new blocks which were not present at init.
	     */

	  }, {
	    key: "updateBlocks",
	    value: function () {
	      var _updateBlocks = asyncToGenerator(
	      /*#__PURE__*/
	      regenerator.mark(function _callee3() {
	        var blockIndex, blockElement, existingBlock, block;
	        return regenerator.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                debug('\t📯 Page DOM changed…'); // Create new blocks

	                this.blockElements = this.rootElement.querySelectorAll(".".concat(this.getService('Config').pageBlockClass));
	                this.blockLength = this.blockElements.length;
	                blockIndex = 0;

	              case 4:
	                if (!(blockIndex < this.blockLength)) {
	                  _context3.next = 23;
	                  break;
	                }

	                blockElement = this.blockElements[blockIndex];
	                existingBlock = this.getBlockById(blockElement.id);

	                if (blockElement.id) {
	                  _context3.next = 9;
	                  break;
	                }

	                return _context3.abrupt("break", 23);

	              case 9:
	                if (!(existingBlock === null)) {
	                  _context3.next = 20;
	                  break;
	                }

	                _context3.prev = 10;
	                _context3.next = 13;
	                return this.initSingleBlock(this.blockElements[blockIndex]);

	              case 13:
	                block = _context3.sent;

	                if (block) {
	                  this.blocks.push(block);
	                  block.onPageReady();
	                }

	                _context3.next = 20;
	                break;

	              case 17:
	                _context3.prev = 17;
	                _context3.t0 = _context3["catch"](10);
	                warn(_context3.t0.message);

	              case 20:
	                blockIndex++;
	                _context3.next = 4;
	                break;

	              case 23:
	              case "end":
	                return _context3.stop();
	            }
	          }
	        }, _callee3, this, [[10, 17]]);
	      }));

	      return function updateBlocks() {
	        return _updateBlocks.apply(this, arguments);
	      };
	    }()
	    /**
	     * @param {HTMLElement} blockElement
	     * @return {AbstractBlock}
	     */

	  }, {
	    key: "initSingleBlock",
	    value: function () {
	      var _initSingleBlock = asyncToGenerator(
	      /*#__PURE__*/
	      regenerator.mark(function _callee4(blockElement) {
	        var blockType, blockInstance;
	        return regenerator.wrap(function _callee4$(_context4) {
	          while (1) {
	            switch (_context4.prev = _context4.next) {
	              case 0:
	                if (blockElement.id) {
	                  _context4.next = 2;
	                  break;
	                }

	                return _context4.abrupt("return", null);

	              case 2:
	                blockType = blockElement.getAttribute(this.getService('Config').objectTypeAttr);
	                _context4.next = 5;
	                return this.getService('BlockBuilder').getBlockInstance(blockType);

	              case 5:
	                blockInstance = _context4.sent;

	                if (blockInstance) {
	                  _context4.next = 8;
	                  break;
	                }

	                return _context4.abrupt("return", null);

	              case 8:
	                // Set values
	                blockInstance.type = blockType;
	                blockInstance.page = this;
	                blockInstance.rootElement = blockElement;
	                blockInstance.id = blockElement.id;
	                blockInstance.name = blockElement.hasAttribute('data-node-name') ? blockElement.getAttribute('data-node-name') : ''; // Init everything

	                blockInstance.init();
	                blockInstance.initEvents();
	                return _context4.abrupt("return", blockInstance);

	              case 16:
	              case "end":
	                return _context4.stop();
	            }
	          }
	        }, _callee4, this);
	      }));

	      return function initSingleBlock(_x) {
	        return _initSingleBlock.apply(this, arguments);
	      };
	    }()
	    /**
	     * Get a page block instance from its `id`.
	     *
	     * @param  {String} id
	     * @return {AbstractBlock|null}
	     */

	  }, {
	    key: "getBlockById",
	    value: function getBlockById(id) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = this.blocks[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var block = _step.value;

	          if (block.id && block.id === id) {
	            return block;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return != null) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }

	      return null;
	    }
	    /**
	     * Get a page block index from its `id`.
	     *
	     * @param  {String} id
	     * @return {*|null}
	     */

	  }, {
	    key: "getBlockIndexById",
	    value: function getBlockIndexById(id) {
	      var l = this.blocks.length;

	      for (var i = 0; i < l; i++) {
	        if (this.blocks[i].id && this.blocks[i].id === id) {
	          return i;
	        }
	      }

	      return null;
	    }
	    /**
	     * Get the first page block instance from its `type`.
	     *
	     * @param  {String} type
	     * @return {AbstractBlock|null}
	     */

	  }, {
	    key: "getFirstBlockByType",
	    value: function getFirstBlockByType(type) {
	      var index = this.getFirstBlockIndexByType(type);

	      if (this.blocks[index]) {
	        return this.blocks[index];
	      }

	      return null;
	    }
	    /**
	     * Get the first page block index from its `type`.
	     *
	     * @param  {String} type
	     * @return {*|null}
	     */

	  }, {
	    key: "getFirstBlockIndexByType",
	    value: function getFirstBlockIndexByType(type) {
	      var l = this.blocks.length;

	      for (var i = 0; i < l; i++) {
	        if (this.blocks[i].type && this.blocks[i].type === type) {
	          return i;
	        }
	      }

	      return null;
	    }
	    /**
	     * @abstract
	     */

	  }, {
	    key: "onResize",
	    value: function onResize() {
	      var _iteratorNormalCompletion2 = true;
	      var _didIteratorError2 = false;
	      var _iteratorError2 = undefined;

	      try {
	        for (var _iterator2 = this.blocks[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
	          var block = _step2.value;
	          block.onResize();
	        }
	      } catch (err) {
	        _didIteratorError2 = true;
	        _iteratorError2 = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
	            _iterator2.return();
	          }
	        } finally {
	          if (_didIteratorError2) {
	            throw _iteratorError2;
	          }
	        }
	      }
	    }
	  }]);

	  return AbstractPage;
	}(AbstractService);

	var DefaultPage =
	/*#__PURE__*/
	function (_AbstractPage) {
	  inherits(DefaultPage, _AbstractPage);

	  function DefaultPage(container) {
	    classCallCheck(this, DefaultPage);

	    return possibleConstructorReturn(this, getPrototypeOf(DefaultPage).call(this, container, 'DefaultPage'));
	  }

	  return DefaultPage;
	}(AbstractPage);

	/**
	 * @namespace
	 * @type {Object} defaults                      - Default config
	 * @property {String} defaults.wrapperId        - Id of the main wrapper
	 * @property {String} defaults.pageBlockClass
	 * @property {String} defaults.pageClass        - Class name used to identify the containers
	 * @property {String} defaults.objectTypeAttr   - The data attribute name to find the node type
	 * @property {String} defaults.noAjaxLinkClass
	 * @property {String} defaults.noPrefetchClass  - Class name used to ignore prefetch on links.
	 * @property {boolean} defaults.manualDomAppend
	 * @const
	 * @default
	 */

	var CONFIG = {
	  defaults: {
	    wrapperId: 'sb-wrapper',
	    pageBlockClass: 'page-block',
	    pageClass: 'page-content',
	    objectTypeAttr: 'data-node-type',
	    noAjaxLinkClass: 'no-ajax-link',
	    noPrefetchClass: 'no-prefetch',
	    manualDomAppend: false,
	    debug: 0
	  }
	};

	var StartingBlocks =
	/*#__PURE__*/
	function () {
	  function StartingBlocks() {
	    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	    classCallCheck(this, StartingBlocks);

	    this.bottle = new bottle();
	    this.bootables = [];
	    this.bottle.value('Config', objectSpread({}, CONFIG.defaults, config));
	    window.startingBlocksDebugLevel = this.bottle.container.Config.debug;
	    this.provider('Dom', Dom);
	    this.provider('BlockBuilder', BlockBuilder);
	    this.instanceFactory('DefaultPage', function (c) {
	      return new DefaultPage(c);
	    });
	  }

	  createClass(StartingBlocks, [{
	    key: "provider",
	    value: function provider(id, ClassName) {
	      for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
	        args[_key - 2] = arguments[_key];
	      }

	      if (!id || !ClassName) {
	        throw new Error('A parameter is missing');
	      }

	      this.bottle.provider(id, function () {
	        this.$get = function (container) {
	          return construct(ClassName, [container].concat(args));
	        };
	      });
	    }
	  }, {
	    key: "factory",
	    value: function factory(id, f) {
	      this.bottle.factory(id, f);
	    }
	  }, {
	    key: "instanceFactory",
	    value: function instanceFactory(id, f) {
	      this.bottle.instanceFactory(id, f);
	    }
	  }, {
	    key: "bootableProvider",
	    value: function bootableProvider(id, ClassName) {
	      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
	        args[_key2 - 2] = arguments[_key2];
	      }

	      this.provider.apply(this, [id, ClassName].concat(args));
	      this.bootables.push(id);
	    }
	  }, {
	    key: "boot",
	    value: function boot() {
	      this.bootableProvider('PageBuilder', PageBuilder);
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = this.bootables[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var serviceName = _step.value;

	          if (this.bottle.container.hasOwnProperty(serviceName)) {
	            this.bottle.container[serviceName].boot();
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return != null) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }]);

	  return StartingBlocks;
	}();

	var _fixReWks = function (KEY, length, exec) {
	  var SYMBOL = _wks(KEY);
	  var fns = exec(_defined, SYMBOL, ''[KEY]);
	  var strfn = fns[0];
	  var rxfn = fns[1];
	  if (_fails(function () {
	    var O = {};
	    O[SYMBOL] = function () { return 7; };
	    return ''[KEY](O) != 7;
	  })) {
	    _redefine(String.prototype, KEY, strfn);
	    _hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function (string, arg) { return rxfn.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function (string) { return rxfn.call(string, this); }
	    );
	  }
	};

	// 7.2.8 IsRegExp(argument)


	var MATCH = _wks('match');
	var _isRegexp = function (it) {
	  var isRegExp;
	  return _isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : _cof(it) == 'RegExp');
	};

	// @@split logic
	_fixReWks('split', 2, function (defined, SPLIT, $split) {
	  var isRegExp = _isRegexp;
	  var _split = $split;
	  var $push = [].push;
	  var $SPLIT = 'split';
	  var LENGTH = 'length';
	  var LAST_INDEX = 'lastIndex';
	  if (
	    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
	    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
	    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
	    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
	    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
	    ''[$SPLIT](/.?/)[LENGTH]
	  ) {
	    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
	    // based on es5-shim implementation, need to rework it
	    $split = function (separator, limit) {
	      var string = String(this);
	      if (separator === undefined && limit === 0) return [];
	      // If `separator` is not a regex, use native split
	      if (!isRegExp(separator)) return _split.call(string, separator, limit);
	      var output = [];
	      var flags = (separator.ignoreCase ? 'i' : '') +
	                  (separator.multiline ? 'm' : '') +
	                  (separator.unicode ? 'u' : '') +
	                  (separator.sticky ? 'y' : '');
	      var lastLastIndex = 0;
	      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
	      // Make `global` and avoid `lastIndex` issues by working with a copy
	      var separatorCopy = new RegExp(separator.source, flags + 'g');
	      var separator2, match, lastIndex, lastLength, i;
	      // Doesn't need flags gy, but they don't hurt
	      if (!NPCG) separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
	      while (match = separatorCopy.exec(string)) {
	        // `separatorCopy.lastIndex` is not reliable cross-browser
	        lastIndex = match.index + match[0][LENGTH];
	        if (lastIndex > lastLastIndex) {
	          output.push(string.slice(lastLastIndex, match.index));
	          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
	          // eslint-disable-next-line no-loop-func
	          if (!NPCG && match[LENGTH] > 1) match[0].replace(separator2, function () {
	            for (i = 1; i < arguments[LENGTH] - 2; i++) if (arguments[i] === undefined) match[i] = undefined;
	          });
	          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
	          lastLength = match[0][LENGTH];
	          lastLastIndex = lastIndex;
	          if (output[LENGTH] >= splitLimit) break;
	        }
	        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
	      }
	      if (lastLastIndex === string[LENGTH]) {
	        if (lastLength || !separatorCopy.test('')) output.push('');
	      } else output.push(string.slice(lastLastIndex));
	      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
	    };
	  // Chakra, V8
	  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
	    $split = function (separator, limit) {
	      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
	    };
	  }
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return [function split(separator, limit) {
	    var O = defined(this);
	    var fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
	  }, $split];
	});

	// getting tag from 19.1.3.6 Object.prototype.toString()

	var TAG$1 = _wks('toStringTag');
	// ES3 wrong here
	var ARG = _cof(function () { return arguments; }()) == 'Arguments';

	// fallback for IE11 Script Access Denied error
	var tryGet = function (it, key) {
	  try {
	    return it[key];
	  } catch (e) { /* empty */ }
	};

	var _classof = function (it) {
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
	    // builtinTag case
	    : ARG ? _cof(O)
	    // ES3 arguments fallback
	    : (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

	var _anInstance = function (it, Constructor, name, forbiddenField) {
	  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
	    throw TypeError(name + ': incorrect invocation!');
	  } return it;
	};

	// call something on iterator step with safe closing on error

	var _iterCall = function (iterator, fn, value, entries) {
	  try {
	    return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch (e) {
	    var ret = iterator['return'];
	    if (ret !== undefined) _anObject(ret.call(iterator));
	    throw e;
	  }
	};

	// check on default Array iterator

	var ITERATOR$2 = _wks('iterator');
	var ArrayProto$1 = Array.prototype;

	var _isArrayIter = function (it) {
	  return it !== undefined && (_iterators.Array === it || ArrayProto$1[ITERATOR$2] === it);
	};

	var ITERATOR$3 = _wks('iterator');

	var core_getIteratorMethod = _core.getIteratorMethod = function (it) {
	  if (it != undefined) return it[ITERATOR$3]
	    || it['@@iterator']
	    || _iterators[_classof(it)];
	};

	var _forOf = createCommonjsModule(function (module) {
	var BREAK = {};
	var RETURN = {};
	var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
	  var iterFn = ITERATOR ? function () { return iterable; } : core_getIteratorMethod(iterable);
	  var f = _ctx(fn, that, entries ? 2 : 1);
	  var index = 0;
	  var length, step, iterator, result;
	  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if (_isArrayIter(iterFn)) for (length = _toLength(iterable.length); length > index; index++) {
	    result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	    if (result === BREAK || result === RETURN) return result;
	  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
	    result = _iterCall(iterator, f, step.value, entries);
	    if (result === BREAK || result === RETURN) return result;
	  }
	};
	exports.BREAK = BREAK;
	exports.RETURN = RETURN;
	});

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)


	var SPECIES = _wks('species');
	var _speciesConstructor = function (O, D) {
	  var C = _anObject(O).constructor;
	  var S;
	  return C === undefined || (S = _anObject(C)[SPECIES]) == undefined ? D : _aFunction(S);
	};

	var process = _global.process;
	var setTask = _global.setImmediate;
	var clearTask = _global.clearImmediate;
	var MessageChannel = _global.MessageChannel;
	var Dispatch = _global.Dispatch;
	var counter = 0;
	var queue = {};
	var ONREADYSTATECHANGE = 'onreadystatechange';
	var defer, channel, port;
	var run = function () {
	  var id = +this;
	  // eslint-disable-next-line no-prototype-builtins
	  if (queue.hasOwnProperty(id)) {
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listener = function (event) {
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if (!setTask || !clearTask) {
	  setTask = function setImmediate(fn) {
	    var args = [];
	    var i = 1;
	    while (arguments.length > i) args.push(arguments[i++]);
	    queue[++counter] = function () {
	      // eslint-disable-next-line no-new-func
	      _invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id) {
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if (_cof(process) == 'process') {
	    defer = function (id) {
	      process.nextTick(_ctx(run, id, 1));
	    };
	  // Sphere (JS game engine) Dispatch API
	  } else if (Dispatch && Dispatch.now) {
	    defer = function (id) {
	      Dispatch.now(_ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if (MessageChannel) {
	    channel = new MessageChannel();
	    port = channel.port2;
	    channel.port1.onmessage = listener;
	    defer = _ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if (_global.addEventListener && typeof postMessage == 'function' && !_global.importScripts) {
	    defer = function (id) {
	      _global.postMessage(id + '', '*');
	    };
	    _global.addEventListener('message', listener, false);
	  // IE8-
	  } else if (ONREADYSTATECHANGE in _domCreate('script')) {
	    defer = function (id) {
	      _html.appendChild(_domCreate('script'))[ONREADYSTATECHANGE] = function () {
	        _html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function (id) {
	      setTimeout(_ctx(run, id, 1), 0);
	    };
	  }
	}
	var _task = {
	  set: setTask,
	  clear: clearTask
	};

	var macrotask = _task.set;
	var Observer = _global.MutationObserver || _global.WebKitMutationObserver;
	var process$1 = _global.process;
	var Promise$1 = _global.Promise;
	var isNode = _cof(process$1) == 'process';

	var _microtask = function () {
	  var head, last, notify;

	  var flush = function () {
	    var parent, fn;
	    if (isNode && (parent = process$1.domain)) parent.exit();
	    while (head) {
	      fn = head.fn;
	      head = head.next;
	      try {
	        fn();
	      } catch (e) {
	        if (head) notify();
	        else last = undefined;
	        throw e;
	      }
	    } last = undefined;
	    if (parent) parent.enter();
	  };

	  // Node.js
	  if (isNode) {
	    notify = function () {
	      process$1.nextTick(flush);
	    };
	  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
	  } else if (Observer && !(_global.navigator && _global.navigator.standalone)) {
	    var toggle = true;
	    var node = document.createTextNode('');
	    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
	    notify = function () {
	      node.data = toggle = !toggle;
	    };
	  // environments with maybe non-completely correct, but existent Promise
	  } else if (Promise$1 && Promise$1.resolve) {
	    // Promise.resolve without an argument throws an error in LG WebOS 2
	    var promise = Promise$1.resolve(undefined);
	    notify = function () {
	      promise.then(flush);
	    };
	  // for other environments - macrotask based on:
	  // - setImmediate
	  // - MessageChannel
	  // - window.postMessag
	  // - onreadystatechange
	  // - setTimeout
	  } else {
	    notify = function () {
	      // strange IE + webpack dev server bug - use .call(global)
	      macrotask.call(_global, flush);
	    };
	  }

	  return function (fn) {
	    var task = { fn: fn, next: undefined };
	    if (last) last.next = task;
	    if (!head) {
	      head = task;
	      notify();
	    } last = task;
	  };
	};

	// 25.4.1.5 NewPromiseCapability(C)


	function PromiseCapability(C) {
	  var resolve, reject;
	  this.promise = new C(function ($$resolve, $$reject) {
	    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject = $$reject;
	  });
	  this.resolve = _aFunction(resolve);
	  this.reject = _aFunction(reject);
	}

	var f$7 = function (C) {
	  return new PromiseCapability(C);
	};

	var _newPromiseCapability = {
		f: f$7
	};

	var _perform = function (exec) {
	  try {
	    return { e: false, v: exec() };
	  } catch (e) {
	    return { e: true, v: e };
	  }
	};

	var navigator$1 = _global.navigator;

	var _userAgent = navigator$1 && navigator$1.userAgent || '';

	var _promiseResolve = function (C, x) {
	  _anObject(C);
	  if (_isObject(x) && x.constructor === C) return x;
	  var promiseCapability = _newPromiseCapability.f(C);
	  var resolve = promiseCapability.resolve;
	  resolve(x);
	  return promiseCapability.promise;
	};

	var _redefineAll = function (target, src, safe) {
	  for (var key in src) _redefine(target, key, src[key], safe);
	  return target;
	};

	var SPECIES$1 = _wks('species');

	var _setSpecies = function (KEY) {
	  var C = _global[KEY];
	  if (_descriptors && C && !C[SPECIES$1]) _objectDp.f(C, SPECIES$1, {
	    configurable: true,
	    get: function () { return this; }
	  });
	};

	var ITERATOR$4 = _wks('iterator');
	var SAFE_CLOSING = false;

	try {
	  var riter = [7][ITERATOR$4]();
	  riter['return'] = function () { SAFE_CLOSING = true; };
	} catch (e) { /* empty */ }

	var _iterDetect = function (exec, skipClosing) {
	  if (!skipClosing && !SAFE_CLOSING) return false;
	  var safe = false;
	  try {
	    var arr = [7];
	    var iter = arr[ITERATOR$4]();
	    iter.next = function () { return { done: safe = true }; };
	    arr[ITERATOR$4] = function () { return iter; };
	    exec(arr);
	  } catch (e) { /* empty */ }
	  return safe;
	};

	var task = _task.set;
	var microtask = _microtask();




	var PROMISE = 'Promise';
	var TypeError$1 = _global.TypeError;
	var process$2 = _global.process;
	var versions = process$2 && process$2.versions;
	var v8 = versions && versions.v8 || '';
	var $Promise = _global[PROMISE];
	var isNode$1 = _classof(process$2) == 'process';
	var empty = function () { /* empty */ };
	var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
	var newPromiseCapability = newGenericPromiseCapability = _newPromiseCapability.f;

	var USE_NATIVE$1 = !!function () {
	  try {
	    // correct subclassing with @@species support
	    var promise = $Promise.resolve(1);
	    var FakePromise = (promise.constructor = {})[_wks('species')] = function (exec) {
	      exec(empty, empty);
	    };
	    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
	    return (isNode$1 || typeof PromiseRejectionEvent == 'function')
	      && promise.then(empty) instanceof FakePromise
	      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
	      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
	      // we can't detect it synchronously, so just check versions
	      && v8.indexOf('6.6') !== 0
	      && _userAgent.indexOf('Chrome/66') === -1;
	  } catch (e) { /* empty */ }
	}();

	// helpers
	var isThenable = function (it) {
	  var then;
	  return _isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var notify = function (promise, isReject) {
	  if (promise._n) return;
	  promise._n = true;
	  var chain = promise._c;
	  microtask(function () {
	    var value = promise._v;
	    var ok = promise._s == 1;
	    var i = 0;
	    var run = function (reaction) {
	      var handler = ok ? reaction.ok : reaction.fail;
	      var resolve = reaction.resolve;
	      var reject = reaction.reject;
	      var domain = reaction.domain;
	      var result, then, exited;
	      try {
	        if (handler) {
	          if (!ok) {
	            if (promise._h == 2) onHandleUnhandled(promise);
	            promise._h = 1;
	          }
	          if (handler === true) result = value;
	          else {
	            if (domain) domain.enter();
	            result = handler(value); // may throw
	            if (domain) {
	              domain.exit();
	              exited = true;
	            }
	          }
	          if (result === reaction.promise) {
	            reject(TypeError$1('Promise-chain cycle'));
	          } else if (then = isThenable(result)) {
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch (e) {
	        if (domain && !exited) domain.exit();
	        reject(e);
	      }
	    };
	    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
	    promise._c = [];
	    promise._n = false;
	    if (isReject && !promise._h) onUnhandled(promise);
	  });
	};
	var onUnhandled = function (promise) {
	  task.call(_global, function () {
	    var value = promise._v;
	    var unhandled = isUnhandled(promise);
	    var result, handler, console;
	    if (unhandled) {
	      result = _perform(function () {
	        if (isNode$1) {
	          process$2.emit('unhandledRejection', value, promise);
	        } else if (handler = _global.onunhandledrejection) {
	          handler({ promise: promise, reason: value });
	        } else if ((console = _global.console) && console.error) {
	          console.error('Unhandled promise rejection', value);
	        }
	      });
	      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
	      promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
	    } promise._a = undefined;
	    if (unhandled && result.e) throw result.v;
	  });
	};
	var isUnhandled = function (promise) {
	  return promise._h !== 1 && (promise._a || promise._c).length === 0;
	};
	var onHandleUnhandled = function (promise) {
	  task.call(_global, function () {
	    var handler;
	    if (isNode$1) {
	      process$2.emit('rejectionHandled', promise);
	    } else if (handler = _global.onrejectionhandled) {
	      handler({ promise: promise, reason: promise._v });
	    }
	  });
	};
	var $reject = function (value) {
	  var promise = this;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  promise._v = value;
	  promise._s = 2;
	  if (!promise._a) promise._a = promise._c.slice();
	  notify(promise, true);
	};
	var $resolve = function (value) {
	  var promise = this;
	  var then;
	  if (promise._d) return;
	  promise._d = true;
	  promise = promise._w || promise; // unwrap
	  try {
	    if (promise === value) throw TypeError$1("Promise can't be resolved itself");
	    if (then = isThenable(value)) {
	      microtask(function () {
	        var wrapper = { _w: promise, _d: false }; // wrap
	        try {
	          then.call(value, _ctx($resolve, wrapper, 1), _ctx($reject, wrapper, 1));
	        } catch (e) {
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      promise._v = value;
	      promise._s = 1;
	      notify(promise, false);
	    }
	  } catch (e) {
	    $reject.call({ _w: promise, _d: false }, e); // wrap
	  }
	};

	// constructor polyfill
	if (!USE_NATIVE$1) {
	  // 25.4.3.1 Promise(executor)
	  $Promise = function Promise(executor) {
	    _anInstance(this, $Promise, PROMISE, '_h');
	    _aFunction(executor);
	    Internal.call(this);
	    try {
	      executor(_ctx($resolve, this, 1), _ctx($reject, this, 1));
	    } catch (err) {
	      $reject.call(this, err);
	    }
	  };
	  // eslint-disable-next-line no-unused-vars
	  Internal = function Promise(executor) {
	    this._c = [];             // <- awaiting reactions
	    this._a = undefined;      // <- checked in isUnhandled reactions
	    this._s = 0;              // <- state
	    this._d = false;          // <- done
	    this._v = undefined;      // <- value
	    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
	    this._n = false;          // <- notify
	  };
	  Internal.prototype = _redefineAll($Promise.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected) {
	      var reaction = newPromiseCapability(_speciesConstructor(this, $Promise));
	      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      reaction.domain = isNode$1 ? process$2.domain : undefined;
	      this._c.push(reaction);
	      if (this._a) this._a.push(reaction);
	      if (this._s) notify(this, false);
	      return reaction.promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function (onRejected) {
	      return this.then(undefined, onRejected);
	    }
	  });
	  OwnPromiseCapability = function () {
	    var promise = new Internal();
	    this.promise = promise;
	    this.resolve = _ctx($resolve, promise, 1);
	    this.reject = _ctx($reject, promise, 1);
	  };
	  _newPromiseCapability.f = newPromiseCapability = function (C) {
	    return C === $Promise || C === Wrapper
	      ? new OwnPromiseCapability(C)
	      : newGenericPromiseCapability(C);
	  };
	}

	_export(_export.G + _export.W + _export.F * !USE_NATIVE$1, { Promise: $Promise });
	_setToStringTag($Promise, PROMISE);
	_setSpecies(PROMISE);
	Wrapper = _core[PROMISE];

	// statics
	_export(_export.S + _export.F * !USE_NATIVE$1, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r) {
	    var capability = newPromiseCapability(this);
	    var $$reject = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	_export(_export.S + _export.F * (!USE_NATIVE$1), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x) {
	    return _promiseResolve(this, x);
	  }
	});
	_export(_export.S + _export.F * !(USE_NATIVE$1 && _iterDetect(function (iter) {
	  $Promise.all(iter)['catch'](empty);
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var resolve = capability.resolve;
	    var reject = capability.reject;
	    var result = _perform(function () {
	      var values = [];
	      var index = 0;
	      var remaining = 1;
	      _forOf(iterable, false, function (promise) {
	        var $index = index++;
	        var alreadyCalled = false;
	        values.push(undefined);
	        remaining++;
	        C.resolve(promise).then(function (value) {
	          if (alreadyCalled) return;
	          alreadyCalled = true;
	          values[$index] = value;
	          --remaining || resolve(values);
	        }, reject);
	      });
	      --remaining || resolve(values);
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable) {
	    var C = this;
	    var capability = newPromiseCapability(C);
	    var reject = capability.reject;
	    var result = _perform(function () {
	      _forOf(iterable, false, function (promise) {
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if (result.e) reject(result.v);
	    return capability.promise;
	  }
	});

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */


	var check = function (O, proto) {
	  _anObject(O);
	  if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
	};
	var _setProto = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function (test, buggy, set) {
	      try {
	        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch (e) { buggy = true; }
	      return function setPrototypeOf(O, proto) {
	        check(O, proto);
	        if (buggy) O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

	var setPrototypeOf$1 = _setProto.set;
	var _inheritIfRequired = function (that, target, C) {
	  var S = target.constructor;
	  var P;
	  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf$1) {
	    setPrototypeOf$1(that, P);
	  } return that;
	};

	var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

	var space = '[' + _stringWs + ']';
	var non = '\u200b\u0085';
	var ltrim = RegExp('^' + space + space + '*');
	var rtrim = RegExp(space + space + '*$');

	var exporter = function (KEY, exec, ALIAS) {
	  var exp = {};
	  var FORCE = _fails(function () {
	    return !!_stringWs[KEY]() || non[KEY]() != non;
	  });
	  var fn = exp[KEY] = FORCE ? exec(trim) : _stringWs[KEY];
	  if (ALIAS) exp[ALIAS] = fn;
	  _export(_export.P + _export.F * FORCE, 'String', exp);
	};

	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function (string, TYPE) {
	  string = String(_defined(string));
	  if (TYPE & 1) string = string.replace(ltrim, '');
	  if (TYPE & 2) string = string.replace(rtrim, '');
	  return string;
	};

	var _stringTrim = exporter;

	var gOPN$2 = _objectGopn.f;
	var gOPD$2 = _objectGopd.f;
	var dP$3 = _objectDp.f;
	var $trim = _stringTrim.trim;
	var NUMBER = 'Number';
	var $Number = _global[NUMBER];
	var Base = $Number;
	var proto$1 = $Number.prototype;
	// Opera ~12 has broken Object#toString
	var BROKEN_COF = _cof(_objectCreate(proto$1)) == NUMBER;
	var TRIM = 'trim' in String.prototype;

	// 7.1.3 ToNumber(argument)
	var toNumber = function (argument) {
	  var it = _toPrimitive(argument, false);
	  if (typeof it == 'string' && it.length > 2) {
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0);
	    var third, radix, maxCode;
	    if (first === 43 || first === 45) {
	      third = it.charCodeAt(2);
	      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if (first === 48) {
	      switch (it.charCodeAt(1)) {
	        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default: return +it;
	      }
	      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if (code < 48 || code > maxCode) return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};

	if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
	  $Number = function Number(value) {
	    var it = arguments.length < 1 ? 0 : value;
	    var that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? _fails(function () { proto$1.valueOf.call(that); }) : _cof(that) != NUMBER)
	        ? _inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
	  };
	  for (var keys = _descriptors ? gOPN$2(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), j$1 = 0, key$1; keys.length > j$1; j$1++) {
	    if (_has(Base, key$1 = keys[j$1]) && !_has($Number, key$1)) {
	      dP$3($Number, key$1, gOPD$2(Base, key$1));
	    }
	  }
	  $Number.prototype = proto$1;
	  proto$1.constructor = $Number;
	  _redefine(_global, NUMBER, $Number);
	}

	// @@search logic
	_fixReWks('search', 1, function (defined, SEARCH, $search) {
	  // 21.1.3.15 String.prototype.search(regexp)
	  return [function search(regexp) {
	    var O = defined(this);
	    var fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  }, $search];
	});

	// @@replace logic
	_fixReWks('replace', 2, function (defined, REPLACE, $replace) {
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return [function replace(searchValue, replaceValue) {
	    var O = defined(this);
	    var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  }, $replace];
	});

	/**
	 * Utils class
	 */

	var Utils =
	/*#__PURE__*/
	function () {
	  function Utils() {
	    classCallCheck(this, Utils);
	  }

	  createClass(Utils, null, [{
	    key: "stripTrailingSlash",

	    /**
	     * @param  {String} str
	     * @return {String}
	     */
	    value: function stripTrailingSlash(str) {
	      if (str.substr(-1) === '/') {
	        return str.substr(0, str.length - 1);
	      }

	      return str;
	    }
	    /**
	     * Get port
	     *
	     * @param p
	     * @returns {*}
	     */

	  }, {
	    key: "getPort",
	    value: function getPort(p) {
	      var port = typeof p !== 'undefined' ? p : window.location.port;
	      var protocol = window.location.protocol;

	      if (port !== '') {
	        return parseInt(port);
	      }

	      if (protocol === 'http:') {
	        return 80;
	      }

	      if (protocol === 'https:') {
	        return 443;
	      }
	    }
	  }, {
	    key: "cleanLink",
	    value: function cleanLink(url) {
	      return url.replace(/#.*/, '');
	    }
	    /**
	     * Get current url
	     *
	     * @returns {string}
	     */

	  }, {
	    key: "getCurrentUrl",
	    value: function getCurrentUrl() {
	      return window.location.protocol + '//' + window.location.host + window.location.pathname + window.location.search;
	    }
	    /**
	     * Request timeout (in ms)
	     *
	     * @returns {number}
	     */

	  }, {
	    key: "requestTimeout",
	    value: function requestTimeout() {
	      return 10000;
	    }
	    /**
	     * Start a fetch request
	     *
	     * @param {String} url
	     * @return {Promise}
	     */

	  }, {
	    key: "request",
	    value: function request(url) {
	      var dfd = Utils.deferred();
	      var timeout = window.setTimeout(function () {
	        window.clearTimeout(timeout);
	        dfd.reject('timeout!');
	      }, Utils.requestTimeout());
	      var headers = new window.Headers();
	      headers.append('X-Starting-Blocks', 'yes');
	      headers.append('X-Allow-Partial', 'yes');
	      headers.append('X-Requested-With', 'XMLHttpRequest');
	      window.fetch(url, {
	        method: 'GET',
	        headers: headers,
	        cache: 'default',
	        credentials: 'same-origin'
	      }).then(function (res) {
	        window.clearTimeout(timeout);

	        if (res.status >= 200 && res.status < 300) {
	          return dfd.resolve(res.text());
	        }

	        var err = new Error(res.statusText || res.status);
	        return dfd.reject(err);
	      }).catch(function (err) {
	        window.clearTimeout(timeout);
	        dfd.reject(err);
	      });
	      return dfd.promise;
	    }
	    /**
	     * Log credits to console for code lovers.
	     *
	     * @param  {String} siteName
	     * @param  {String} bgColor
	     * @param  {Array}  creditsList
	     * @param  {Array}  thanksList
	     * @param  {String} textColor (optional)
	     */

	  }, {
	    key: "logCredits",
	    value: function logCredits(siteName, bgColor, creditsList, thanksList, textColor) {
	      var color = '#fff';
	      if (typeof textColor !== 'undefined') color = textColor;
	      console.log('%c   ', 'font-size:3px;');
	      console.log('%c' + siteName, 'background:' + bgColor + '; color: ' + color + '; font-size:14px; padding:5px 10px;');
	      console.log('%c   ', 'font-size:3px;');

	      if (creditsList !== null) {
	        var creditsLength = creditsList.length;

	        if (creditsLength) {
	          for (var indexCredit = 0; indexCredit < creditsLength; indexCredit++) {
	            console.log(creditsList[indexCredit].name + ' - ' + creditsList[indexCredit].website);
	          }
	        }
	      }

	      if (thanksList !== null) {
	        var thanksLength = thanksList.length;

	        if (thanksLength) {
	          console.log('-');
	          console.log('Thanks to');

	          for (var indexThanks = 0; indexThanks < thanksLength; indexThanks++) {
	            console.log(thanksList[indexThanks].name + ' (' + thanksList[indexThanks].website + ')');
	          }
	        }
	      }

	      console.log('-');
	      console.log(' ');
	    }
	    /**
	     * Get random number.
	     *
	     * @param  {Number} min [min value]
	     * @param  {Number} max [max value]
	     * @param  {Number} decimal
	     * @return {Number}
	     */

	  }, {
	    key: "getRandomNumber",
	    value: function getRandomNumber(min, max, decimal) {
	      var result = Math.random() * (max - min) + min;

	      if (typeof decimal !== 'undefined') {
	        return Number(result.toFixed(decimal));
	      } else return result;
	    }
	    /**
	     * Get random integer.
	     *
	     * @param  {Number} min [min value]
	     * @param  {Number} max [max value]
	     * @return {Number}
	     */

	  }, {
	    key: "getRandomInt",
	    value: function getRandomInt(min, max) {
	      return Math.floor(Math.random() * (max - min + 1)) + min;
	    }
	    /**
	     * Send a GA page view event when context is AJAX.
	     */

	  }, {
	    key: "trackGoogleAnalytics",
	    value: function trackGoogleAnalytics() {
	      if (typeof window.ga !== 'undefined') {
	        debug('🚩 Push Analytics for: ' + window.location.pathname);
	        window.ga('send', 'pageview', {
	          'page': window.location.pathname,
	          'title': document.title
	        });
	      }
	    }
	    /**
	     * Match CSS media queries and JavaScript window width.
	     *
	     * @see http://stackoverflow.com/a/11310353
	     * @return {Object}
	     */

	  }, {
	    key: "getViewportSize",
	    value: function getViewportSize() {
	      var e = window;
	      var a = 'inner';

	      if (!('innerWidth' in window)) {
	        a = 'client';
	        e = document.documentElement || document.body;
	      }

	      return {
	        width: e[a + 'Width'],
	        height: e[a + 'Height']
	      };
	    }
	    /**
	     * Get a css property with the vendor prefix.
	     *
	     * @param  {String} property the css property
	     * @return {String}          the prefixed property
	     */

	  }, {
	    key: "prefixProperty",
	    value: function prefixProperty(property) {
	      var prefixes = ['', 'ms', 'Webkit', 'Moz', 'O'];
	      var numPrefixes = prefixes.length;
	      var tmp = document.createElement('div');

	      for (var i = 0; i < numPrefixes; i++) {
	        var prefix = prefixes[i];
	        property = prefix === '' ? property : property.charAt(0).toUpperCase() + property.substring(1).toLowerCase();
	        var prop = prefix + property;

	        if (typeof tmp.style[prop] !== 'undefined') {
	          return prop;
	        }
	      }
	    }
	    /**
	     * Gets normalized ratio of value inside range.
	     *
	     * from https://github.com/mout/mout/blob/master/src/math/norm.js
	     *
	     * @param  {Number} val
	     * @param  {Number} min
	     * @param  {Number} max
	     * @return {Number}
	     */

	  }, {
	    key: "getNormRatio",
	    value: function getNormRatio(val, min, max) {
	      if (val < min) return 0;
	      if (val > max) return 1;
	      return val === max ? 1 : (val - min) / (max - min);
	    }
	    /**
	     * Return a new "Deferred" object
	     * https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Deferred
	     *
	     * @return {Deferred}
	     */

	  }, {
	    key: "deferred",
	    value: function deferred() {
	      return new function () {
	        var _this = this;

	        this.resolve = null;
	        this.reject = null;
	        this.promise = new Promise(function (resolve, reject) {
	          _this.resolve = resolve;
	          _this.reject = reject;
	        });
	      }();
	    }
	  }]);

	  return Utils;
	}();

	// true  -> String#at
	// false -> String#codePointAt
	var _stringAt = function (TO_STRING) {
	  return function (that, pos) {
	    var s = String(_defined(that));
	    var i = _toInteger(pos);
	    var l = s.length;
	    var a, b;
	    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

	var $at = _stringAt(true);

	// 21.1.3.27 String.prototype[@@iterator]()
	_iterDefine(String, 'String', function (iterated) {
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function () {
	  var O = this._t;
	  var index = this._i;
	  var point;
	  if (index >= O.length) return { value: undefined, done: true };
	  point = $at(O, index);
	  this._i += point.length;
	  return { value: point, done: false };
	});

	/**
	 * Base class for creating transition.
	 *
	 * @abstract
	 */

	var AbstractTransition =
	/*#__PURE__*/
	function (_AbstractService) {
	  inherits(AbstractTransition, _AbstractService);

	  /**
	   * Constructor.
	   * Do not override this method.
	   *
	   * @constructor
	   */
	  function AbstractTransition(container) {
	    var _this;

	    var serviceName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Transition';
	    var dependencies = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];

	    classCallCheck(this, AbstractTransition);

	    _this = possibleConstructorReturn(this, getPrototypeOf(AbstractTransition).call(this, container, serviceName, dependencies));
	    /**
	     * @type {AbstractPage|null} old Page instance
	     */

	    _this.oldPage = null;
	    /**
	     * @type {AbstractPage|null}
	     */

	    _this.newPage = null;
	    /**
	     * @type {Promise|null}
	     */

	    _this.newPageLoading = null;
	    /**
	     * @type {(HTMLElement|null)}
	     */

	    _this.originElement = null;
	    /**
	     * @type {(Object|null)}
	     */

	    _this.cursorPosition = null;
	    return _this;
	  }
	  /**
	   * Initialize transition.
	   * Do not override this method.
	   *
	   * @param {AbstractPage} oldPage
	   * @param {Promise} newPagePromise
	   * @param {(HTMLElement|null)} el The html element where the transition has been launched
	   * @param {Object} cursorPosition The cursor position when the transition has been launched
	   * @returns {Promise}
	   */


	  createClass(AbstractTransition, [{
	    key: "init",
	    value: function init(oldPage, newPagePromise, el, cursorPosition) {
	      var _this2 = this;

	      this.oldPage = oldPage;
	      this._newPagePromise = newPagePromise;
	      this.originElement = el;
	      this.cursorPosition = cursorPosition;
	      this.deferred = Utils.deferred();
	      this.newPageReady = Utils.deferred();
	      this.newPageLoading = this.newPageReady.promise;
	      this.start();

	      this._newPagePromise.then(function (newPage) {
	        _this2.newPage = newPage;

	        _this2.newPageReady.resolve();
	      });

	      return this.deferred.promise;
	    }
	    /**
	     * Call this function when the Transition is finished.
	     */

	  }, {
	    key: "done",
	    value: function done() {
	      this.destroyOldPage();
	      var visibility = this.newPage.rootElement.style.visibility;

	      if (visibility !== 'inherit' || visibility !== 'hidden') {
	        this.newPage.rootElement.style.visibility = 'visible';
	      }

	      this.deferred.resolve();
	    }
	  }, {
	    key: "scrollTop",
	    value: function scrollTop() {
	      if (document.scrollingElement) {
	        document.scrollingElement.scrollTop = 0;
	        document.scrollingElement.scrollTo(0, 0);
	      } else {
	        document.body.scrollTop = 0;
	        document.documentElement.scrollTop = 0;
	        window.scrollTo(0, 0);
	      }
	    }
	  }, {
	    key: "destroyOldPage",
	    value: function destroyOldPage() {
	      if (this.oldPage) {
	        this.oldPage.destroy();
	        this.oldPage = null;
	      }
	    }
	  }, {
	    key: "buildNewPage",
	    value: function () {
	      var _buildNewPage = asyncToGenerator(
	      /*#__PURE__*/
	      regenerator.mark(function _callee() {
	        var pjaxService, domService, pageBuilderService;
	        return regenerator.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                if (!this.container) {
	                  _context.next = 9;
	                  break;
	                }

	                pjaxService = this.getService('Pjax');
	                domService = this.getService('Dom');
	                pageBuilderService = this.getService('PageBuilder'); // Add the new dom

	                domService.putContainer(pjaxService.containerElement); // Build the new page

	                _context.next = 7;
	                return pageBuilderService.buildPage(pjaxService.containerElement);

	              case 7:
	                this.newPage = _context.sent;
	                // Then notify
	                pjaxService.onNewPageLoaded(this.newPage);

	              case 9:
	              case "end":
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));

	      return function buildNewPage() {
	        return _buildNewPage.apply(this, arguments);
	      };
	    }()
	    /**
	     * Entry point to create a custom Transition.
	     * @abstract
	     */

	  }, {
	    key: "start",
	    value: function start() {}
	  }]);

	  return AbstractTransition;
	}(AbstractService);

	/**
	 * Default Transition. Show / Hide content.
	 *
	 * @extends {AbstractTransition}
	 */

	var DefaultTransition =
	/*#__PURE__*/
	function (_AbstractTransition) {
	  inherits(DefaultTransition, _AbstractTransition);

	  function DefaultTransition() {
	    classCallCheck(this, DefaultTransition);

	    return possibleConstructorReturn(this, getPrototypeOf(DefaultTransition).apply(this, arguments));
	  }

	  createClass(DefaultTransition, [{
	    key: "start",
	    value: function start() {
	      Promise.all([this.newPageLoading]).then(this.finish.bind(this));
	    }
	  }, {
	    key: "finish",
	    value: function finish() {
	      document.body.scrollTop = 0;
	      this.done();
	    }
	  }]);

	  return DefaultTransition;
	}(AbstractTransition);

	/**
	 * Pjax.
	 */

	var Pjax =
	/*#__PURE__*/
	function (_AbstractBootableServ) {
	  inherits(Pjax, _AbstractBootableServ);

	  function Pjax(container) {
	    var _this;

	    var serviceName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Pjax';

	    classCallCheck(this, Pjax);

	    _this = possibleConstructorReturn(this, getPrototypeOf(Pjax).call(this, container, serviceName, ['Dom', 'Config', 'History', 'PageBuilder']));
	    debug("\u2615\uFE0F ".concat(serviceName, " awake"));
	    /**
	     * Indicate if there is an animation in progress.
	     *
	     * @readOnly
	     * @type {Boolean}
	     */

	    _this.transitionProgress = false;
	    /**
	     * @type {(HTMLElement|null)}
	     * The latest page content loaded
	     */

	    _this.containerElement = null; // Bind methods

	    _this.onNewPageLoaded = _this.onNewPageLoaded.bind(assertThisInitialized(assertThisInitialized(_this)));
	    _this.onTransitionEnd = _this.onTransitionEnd.bind(assertThisInitialized(assertThisInitialized(_this)));
	    _this.onLinkClick = _this.onLinkClick.bind(assertThisInitialized(assertThisInitialized(_this)));
	    _this.onStateChange = _this.onStateChange.bind(assertThisInitialized(assertThisInitialized(_this)));
	    return _this;
	  }
	  /**
	   * Init the events.
	   *
	   * @private
	   */


	  createClass(Pjax, [{
	    key: "boot",
	    value: function boot() {
	      get(getPrototypeOf(Pjax.prototype), "boot", this).call(this);

	      var wrapper = this.getService('Dom').getWrapper();
	      wrapper.setAttribute('aria-live', 'polite');
	      this.currentState = this.getService('History').add(this.getCurrentUrl(), null, 'static');
	      this.bindEvents();
	    }
	    /**
	     * Attach event listeners.
	     *
	     * @private
	     */

	  }, {
	    key: "bindEvents",
	    value: function bindEvents() {
	      document.addEventListener('click', this.onLinkClick);
	      window.addEventListener('popstate', this.onStateChange);
	    }
	    /**
	     * Return the currentURL cleaned.
	     *
	     * @return {String} currentUrl
	     */

	  }, {
	    key: "getCurrentUrl",
	    value: function getCurrentUrl() {
	      // TODO, clean from what? currenturl do not takes hash..
	      return Utils.cleanLink(Utils.getCurrentUrl());
	    }
	    /**
	     * Change the URL with push state and trigger the state change.
	     *
	     * @param {String} url
	     * @param {String} transitionName
	     * @param {HTMLElement} element The <a> element
	     * @param {Object} cursorPosition
	     */

	  }, {
	    key: "goTo",
	    value: function goTo(url, transitionName, element, cursorPosition) {
	      var currentPosition = window.scrollY;
	      window.history.pushState(null, null, url);
	      window.scrollTo(0, currentPosition);
	      this.onStateChange(transitionName, true, element, cursorPosition);
	    }
	    /**
	     * Force the browser to go to a certain url.
	     *
	     * @param {String} url
	     * @private
	     */

	  }, {
	    key: "forceGoTo",
	    value: function forceGoTo(url) {
	      window.location = url;
	    }
	    /**
	     * Load an url, will start an ajax request or load from the cache.
	     *
	     * @private
	     * @param  {String} url
	     * @return {Promise}
	     */

	  }, {
	    key: "load",
	    value: function load(url) {
	      var _this2 = this;

	      var deferred = Utils.deferred(); // Check cache

	      var request = null;

	      if (this.hasService('CacheProvider')) {
	        request = this.getService('CacheProvider').get(url);
	      } // If no cache, make request


	      if (!request) {
	        request = Utils.request(url); // If cache provider, cache the request

	        if (this.hasService('CacheProvider')) {
	          this.getService('CacheProvider').set(url, request);
	        }
	      } // When data are loaded


	      request.then(
	      /*#__PURE__*/
	      function () {
	        var _ref = asyncToGenerator(
	        /*#__PURE__*/
	        regenerator.mark(function _callee(data) {
	          var page;
	          return regenerator.wrap(function _callee$(_context) {
	            while (1) {
	              switch (_context.prev = _context.next) {
	                case 0:
	                  _this2.containerElement = _this2.getService('Dom').parseResponse(data); // Dispatch an event

	                  Dispatcher.commit(AFTER_PAGE_LOAD, {
	                    container: _this2.containerElement,
	                    currentHTML: _this2.getService('Dom').currentHTML
	                  }); // Add new container to the DOM if manual DOM Append is disable

	                  if (_this2.getService('Config').manualDomAppend) {
	                    _context.next = 10;
	                    break;
	                  }

	                  _this2.getService('Dom').putContainer(_this2.containerElement); // Build page


	                  _context.next = 6;
	                  return _this2.getService('PageBuilder').buildPage(_this2.containerElement);

	                case 6:
	                  page = _context.sent;
	                  deferred.resolve(page);
	                  _context.next = 11;
	                  break;

	                case 10:
	                  deferred.resolve(null);

	                case 11:
	                case "end":
	                  return _context.stop();
	              }
	            }
	          }, _callee, this);
	        }));

	        return function (_x) {
	          return _ref.apply(this, arguments);
	        };
	      }()).catch(function (err) {
	        console.error(err);

	        _this2.forceGoTo(url);

	        deferred.reject();
	      });
	      return deferred.promise;
	    }
	    /**
	     * Get the .href parameter out of a link element
	     *
	     * @private
	     * @param  {HTMLElement} el
	     * @return {String|undefined} href
	     */

	  }, {
	    key: "getHref",
	    value: function getHref(el) {
	      if (!el) {
	        return undefined;
	      } // Check if has a href and if it's a link element


	      if (typeof el.href === 'string' && el.tagName.toUpperCase() === 'A') {
	        return el.href;
	      }

	      return undefined;
	    }
	    /**
	     * Get transition name from HTMLElement attribute (data-transition).
	     *
	     * @param {HTMLElement} el
	     * @returns {String|undefined} The transition name
	     */

	  }, {
	    key: "getTransitionName",
	    value: function getTransitionName(el) {
	      if (!el) {
	        return null;
	      }

	      if (el.getAttribute && typeof el.getAttribute('data-transition') === 'string') {
	        return el.getAttribute('data-transition');
	      }

	      return null;
	    }
	    /**
	     * Callback called from click event.
	     *
	     * @private
	     * @param {MouseEvent} evt
	     */

	  }, {
	    key: "onLinkClick",
	    value: function onLinkClick(evt) {
	      /**
	       * @type {HTMLElement|Node|EventTarget}
	       */
	      var el = evt.target; // Go up in the node list until we
	      // find something with an href

	      while (el && !this.getHref(el)) {
	        el = el.parentNode;
	      }

	      if (this.preventCheck(evt, el)) {
	        evt.preventDefault();
	        this.linkHash = el.hash.split('#')[1];
	        var href = this.getHref(el);
	        var transitionName = this.getTransitionName(el);
	        var cursorPosition = {
	          x: evt.clientX,
	          y: evt.clientY
	        };
	        this.goTo(href, transitionName, el, cursorPosition);
	      }
	    }
	    /**
	     * Determine if the link should be followed.
	     *
	     * @param  {MouseEvent} evt
	     * @param  {HTMLElement} element
	     * @return {Boolean}
	     */

	  }, {
	    key: "preventCheck",
	    value: function preventCheck(evt, element) {
	      if (!window.history.pushState) {
	        return false;
	      }

	      var href = this.getHref(element); // User

	      if (!element || !href) {
	        return false;
	      } // Middle click, cmd click, and ctrl click


	      if (evt.which > 1 || evt.metaKey || evt.ctrlKey || evt.shiftKey || evt.altKey) {
	        return false;
	      } // Ignore target with _blank target


	      if (element.target && element.target === '_blank') {
	        return false;
	      } // Check if it's the same domain


	      if (window.location.protocol !== element.protocol || window.location.hostname !== element.hostname) {
	        return false;
	      } // Check if the port is the same


	      if (Utils.getPort() !== Utils.getPort(element.port)) {
	        return false;
	      } // Ignore case when a hash is being tacked on the current URL
	      // if (href.indexOf('#') > -1)
	      //   return false;
	      // Ignore case where there is download attribute


	      if (element.getAttribute && typeof element.getAttribute('download') === 'string') {
	        return false;
	      } // In case you're trying to load the same page


	      if (Utils.cleanLink(href) === Utils.cleanLink(window.location.href)) {
	        return false;
	      }

	      return !element.classList.contains(this.getService('Config').noAjaxLinkClass);
	    }
	    /**
	     * Return a transition object.
	     *
	     * @param  {object} prev historyManager
	     * @param  {object} current historyManager
	     * @return {AbstractTransition} Transition object
	     */

	  }, {
	    key: "getTransition",
	    value: function getTransition(prev, current) {
	      if (this.hasService('TransitionFactory')) {
	        return this.getService('TransitionFactory').getTransition(prev, current);
	      } else {
	        return new DefaultTransition();
	      }
	    }
	    /**
	     * Method called after a 'popstate' or from .goTo().
	     *
	     * @private
	     */

	  }, {
	    key: "onStateChange",
	    value: function onStateChange() {
	      var transitionName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var isAjax = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	      var el = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	      var cursorPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	      var newUrl = this.getCurrentUrl();

	      if (this.transitionProgress) {
	        this.forceGoTo(newUrl);
	      }

	      if (this.getService('History').currentStatus().url === newUrl) {
	        return false;
	      } // If transition name is a string, a link have been click
	      // Otherwise back/forward buttons have been pressed


	      if (typeof transitionName === 'string' || isAjax) {
	        this.currentState = this.getService('History').add(newUrl, transitionName, 'ajax');
	      } else {
	        this.currentState = this.getService('History').add(newUrl, null, '_history');
	      } // Dispatch an event to inform that the page is being load


	      Dispatcher.commit(BEFORE_PAGE_LOAD, {
	        currentStatus: this.getService('History').currentStatus(),
	        prevStatus: this.getService('History').prevStatus()
	      }); // Load the page with the new url (promise is return)

	      var newPagePromise = this.load(newUrl); // Get the page transition instance (from prev and current state)

	      var transition = this.getTransition(this.getService('History').prevStatus(), this.getService('History').currentStatus());
	      this.transitionProgress = true; // Dispatch an event that the transition is started

	      Dispatcher.commit(TRANSITION_START, {
	        transition: transition,
	        currentStatus: this.getService('History').currentStatus(),
	        prevStatus: this.getService('History').prevStatus()
	      }); // Start the transition (with the current page, and the new page load promise)

	      var transitionPromise = transition.init(this.getService('PageBuilder').page, newPagePromise, el, cursorPosition);
	      newPagePromise.then(this.onNewPageLoaded);
	      transitionPromise.then(this.onTransitionEnd);
	    }
	    /**
	     * Function called as soon the new page is ready.
	     *
	     * @private
	     * @param {AbstractPage} page
	     */

	  }, {
	    key: "onNewPageLoaded",
	    value: function onNewPageLoaded(page) {
	      if (page) {
	        var currentStatus = this.getService('History').currentStatus(); // Update body attributes (class, id, data-attributes

	        this.getService('Dom').updateBodyAttributes(page); // Update the page title

	        this.getService('Dom').updatePageTitle(page); // Send google analytic data

	        Utils.trackGoogleAnalytics(); // Update the current state

	        if (this.currentState && page) {
	          if (!this.currentState.data.title && page.metaTitle) {
	            this.currentState.data.title = page.metaTitle;
	          }
	        }

	        Dispatcher.commit(CONTAINER_READY, {
	          currentStatus: currentStatus,
	          prevStatus: this.getService('History').prevStatus(),
	          currentHTML: this.getService('Dom').currentHTML,
	          page: page
	        });
	      }
	    }
	    /**
	     * Function called as soon the transition is finished.
	     *
	     * @private
	     */

	  }, {
	    key: "onTransitionEnd",
	    value: function onTransitionEnd() {
	      this.transitionProgress = false;

	      if (this.linkHash) {
	        window.location.hash = '';
	        window.location.hash = this.linkHash;
	        this.linkHash = null;
	      }

	      Dispatcher.commit(TRANSITION_COMPLETE, {
	        currentStatus: this.getService('History').currentStatus(),
	        prevStatus: this.getService('History').prevStatus()
	      });
	    }
	  }]);

	  return Pjax;
	}(AbstractBootableService);

	/**
	 * HistoryManager helps to keep track of the navigation.
	 *
	 * @type {Object}
	 */

	var History =
	/*#__PURE__*/
	function (_AbstractService) {
	  inherits(History, _AbstractService);

	  function History(container) {
	    var _this;

	    var serviceName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'History';

	    classCallCheck(this, History);

	    _this = possibleConstructorReturn(this, getPrototypeOf(History).call(this, container, serviceName));
	    debug("\u2615\uFE0F ".concat(serviceName, " awake"));
	    /**
	     * Keep track of the status in historic order.
	     *
	     * @readOnly
	     * @type {Array}
	     */

	    _this.history = [];
	    return _this;
	  }
	  /**
	   * Add a new set of url and namespace.
	   *
	   * @param {String} url
	   * @param {String} transitionName
	   * @param {String} context (ajax, history)
	   * @param {Object} data (optional data)
	   *
	   * @return {Object}
	   */


	  createClass(History, [{
	    key: "add",
	    value: function add(url, transitionName, context) {
	      var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	      var state = {
	        url: url,
	        transitionName: transitionName,
	        context: context,
	        data: data
	      };
	      this.history.push(state);
	      return state;
	    }
	    /**
	     * Return information about the current status.
	     *
	     * @return {Object}
	     */

	  }, {
	    key: "currentStatus",
	    value: function currentStatus() {
	      return this.history[this.history.length - 1];
	    }
	    /**
	     * Return information about the previous status.
	     *
	     * @return {Object}
	     */

	  }, {
	    key: "prevStatus",
	    value: function prevStatus() {
	      var history = this.history;

	      if (history.length < 2) {
	        return null;
	      }

	      return history[history.length - 2];
	    }
	  }]);

	  return History;
	}(AbstractService);

	/**
	 * Prefetch.
	 *
	 * @type {Object}
	 */

	var Prefetch =
	/*#__PURE__*/
	function (_AbstractBootableServ) {
	  inherits(Prefetch, _AbstractBootableServ);

	  function Prefetch(container) {
	    var _this;

	    var serviceName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Prefetch';

	    classCallCheck(this, Prefetch);

	    _this = possibleConstructorReturn(this, getPrototypeOf(Prefetch).call(this, container, serviceName, ['Pjax', 'Config']));
	    debug("\u2615\uFE0F ".concat(serviceName, " awake"));
	    return _this;
	  }

	  createClass(Prefetch, [{
	    key: "boot",
	    value: function boot() {
	      get(getPrototypeOf(Prefetch.prototype), "boot", this).call(this);

	      if (!window.history.pushState) {
	        return false;
	      }

	      document.body.addEventListener('mouseover', this.onLinkEnter.bind(this));
	      document.body.addEventListener('touchstart', this.onLinkEnter.bind(this));
	    }
	  }, {
	    key: "onLinkEnter",
	    value: function onLinkEnter(evt) {
	      var el = evt.target;

	      while (el && !this.getService('Pjax').getHref(el)) {
	        el = el.parentNode;
	      }

	      if (!el || el.classList.contains(this.getService('Config').noPrefetchClass)) {
	        return;
	      }

	      var url = this.getService('Pjax').getHref(el); // Check if the link is eligible for Pjax

	      if (this.getService('Pjax').preventCheck(evt, el)) {
	        if (this.hasService('CacheProvider') && this.getService('CacheProvider').get(url)) {
	          return;
	        }

	        var xhr = Utils.request(url);

	        if (this.hasService('CacheProvider')) {
	          this.getService('CacheProvider').set(url, xhr);
	        }
	      }
	    }
	  }]);

	  return Prefetch;
	}(AbstractBootableService);

	/**
	 * Cache provider class.
	 *
	 * This class stores Ajax response in memory.
	 */

	var CacheProvider =
	/*#__PURE__*/
	function (_AbstractService) {
	  inherits(CacheProvider, _AbstractService);

	  function CacheProvider(container) {
	    var _this;

	    var serviceName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'CacheProvider';

	    classCallCheck(this, CacheProvider);

	    _this = possibleConstructorReturn(this, getPrototypeOf(CacheProvider).call(this, container, serviceName));
	    debug("\u2615\uFE0F ".concat(serviceName, " awake"));
	    _this.data = {};
	    return _this;
	  }
	  /**
	   * @param  {String} key
	   * @return {Boolean}
	   */


	  createClass(CacheProvider, [{
	    key: "exists",
	    value: function exists(key) {
	      return key in this.data;
	    }
	    /**
	     * @param  {String} href
	     * @return {Object}
	     */

	  }, {
	    key: "get",
	    value: function get(href) {
	      return this.data[href];
	    }
	    /**
	     * @param  {String} key
	     * @param  {Object} data
	     * @return {CacheProvider}  this
	     */

	  }, {
	    key: "set",
	    value: function set(key, data) {
	      this.data[key] = data;
	      return this;
	    }
	    /**
	     * Flush the cache
	     */

	  }, {
	    key: "reset",
	    value: function reset() {
	      this.data = {};
	    }
	  }]);

	  return CacheProvider;
	}(AbstractService);

	/**
	 * Base class for creating block implementations.
	 *
	 * **Do not instanciate this class directly, create a sub-class**.
	 *
	 * @abstract
	 */

	var AbstractBlock =
	/*#__PURE__*/
	function (_AbstractService) {
	  inherits(AbstractBlock, _AbstractService);

	  /**
	   * Abstract block constructor.
	   *
	   * It‘s better to extend this class by using `init` method instead
	   * of extending `constructor`.
	   *
	   * @param {Object} container
	   * @param {String} blockName
	   * @constructor
	   */
	  function AbstractBlock(container) {
	    var _this;

	    var blockName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'AbstractBlock';

	    classCallCheck(this, AbstractBlock);

	    _this = possibleConstructorReturn(this, getPrototypeOf(AbstractBlock).call(this, container, blockName));
	    /**
	     * Node Type block name type
	     *
	     * @type {String|null}
	     */

	    _this.type = null;
	    /**
	     * Current page instance
	     *
	     * @type {AbstractPage|null}
	     */

	    _this.page = null;
	    /**
	     * Container
	     * Root container HTMLElement for current block.
	     *
	     * @type {HTMLElement|null}
	     */

	    _this.rootElement = null;
	    /**
	     * Block id
	     *
	     * @type {String|null}
	     */

	    _this.id = null;
	    /**
	     * Node name
	     *
	     * @type {String}
	     */

	    _this.name = null;
	    return _this;
	  }
	  /**
	   * Basic members initialization for children classes.
	   * Do not search for page blocks here, use `onPageReady` method instead
	   *
	   * @abstract
	   */


	  createClass(AbstractBlock, [{
	    key: "init",
	    value: function init() {
	      debug('\t✳️ #' + this.id + ' %c[' + this.type + ']', 'color:grey');
	    }
	    /**
	     * Bind load and resize events for this specific block.
	     *
	     * Do not forget to call `super.initEvents();` while extending this method.
	     *
	     * @abstract
	     */

	  }, {
	    key: "initEvents",
	    value: function initEvents() {}
	    /**
	     * Destroy current block.
	     *
	     * Do not forget to call `super.destroy();` while extending this method.
	     */

	  }, {
	    key: "destroy",
	    value: function destroy() {
	      debug('\t🗑️ #' + this.id + ' %c[' + this.type + ']', 'color:grey');
	      this.destroyEvents();
	    }
	    /**
	     * Unbind event block events.
	     *
	     * Make sure you’ve used binded methods to be able to
	     * `off` them correctly.
	     *
	     * Do not forget to call `super.destroyEvents();` while extending this method.
	     *
	     * @abstract
	     */

	  }, {
	    key: "destroyEvents",
	    value: function destroyEvents() {}
	    /**
	     * Called on window resize
	     *
	     * @abstract
	     */

	  }, {
	    key: "onResize",
	    value: function onResize() {}
	    /**
	     * Called once all page blocks have been created.
	     *
	     * @abstract
	     */

	  }, {
	    key: "onPageReady",
	    value: function onPageReady() {}
	  }]);

	  return AbstractBlock;
	}(AbstractService);

	var AbstractInViewBlock =
	/*#__PURE__*/
	function (_AbstractBlock) {
	  inherits(AbstractInViewBlock, _AbstractBlock);

	  function AbstractInViewBlock(container) {
	    var _this;

	    var blockName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'AbstractInViewBlock';

	    classCallCheck(this, AbstractInViewBlock);

	    _this = possibleConstructorReturn(this, getPrototypeOf(AbstractInViewBlock).call(this, container, blockName)); // Values

	    _this.observer = null;
	    _this.observerOptions = {
	      root: null,
	      rootMargin: '0px',
	      threshold: 0 // Bind method

	    };
	    _this.onIntersectionCallback = _this.onIntersectionCallback.bind(assertThisInitialized(assertThisInitialized(_this)));
	    return _this;
	  }

	  createClass(AbstractInViewBlock, [{
	    key: "init",
	    value: function init() {
	      get(getPrototypeOf(AbstractInViewBlock.prototype), "init", this).call(this); // Create an observer


	      this.observer = new window.IntersectionObserver(this.onIntersectionCallback, this.observerOptions); // Add block rootElement in the observer

	      this.observer.observe(this.rootElement);
	    }
	  }, {
	    key: "destroyEvents",
	    value: function destroyEvents() {
	      get(getPrototypeOf(AbstractInViewBlock.prototype), "destroyEvents", this).call(this);

	      this.unobserve();
	    }
	  }, {
	    key: "onIntersectionCallback",
	    value: function onIntersectionCallback(entries) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var entry = _step.value;

	          if (entry.intersectionRatio > 0) {
	            this.onScreen(entry);
	          } else {
	            this.offScreen(entry);
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return != null) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }, {
	    key: "onScreen",
	    value: function onScreen(entry) {}
	  }, {
	    key: "offScreen",
	    value: function offScreen(entry) {}
	  }, {
	    key: "unobserve",
	    value: function unobserve() {
	      this.observer.unobserve(this.rootElement);
	    }
	  }]);

	  return AbstractInViewBlock;
	}(AbstractBlock);

	var AbstractSplashscreen =
	/*#__PURE__*/
	function (_AbstractBootableServ) {
	  inherits(AbstractSplashscreen, _AbstractBootableServ);

	  function AbstractSplashscreen(container) {
	    var _this;

	    var serviceName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'AbstractSplashscreen';

	    classCallCheck(this, AbstractSplashscreen);

	    _this = possibleConstructorReturn(this, getPrototypeOf(AbstractSplashscreen).call(this, container, serviceName));
	    _this._splashscreenHidden = false;
	    return _this;
	  }

	  createClass(AbstractSplashscreen, [{
	    key: "hide",
	    value: function hide() {
	      return Promise.resolve();
	    }
	  }, {
	    key: "splashscreenHidden",
	    set: function set(value) {
	      this._splashscreenHidden = value;
	    },
	    get: function get() {
	      return this._splashscreenHidden;
	    }
	  }]);

	  return AbstractSplashscreen;
	}(AbstractBootableService);

	/**
	 * Abstract Transition mapper class.
	 *
	 * This class maps your `data-transition` with your *ES6* classes.
	 *
	 * **You must define your own ClassFactory for each of your projects.**.
	 * @abstract
	 */

	var AbstractTransitionFactory =
	/*#__PURE__*/
	function (_AbstractService) {
	  inherits(AbstractTransitionFactory, _AbstractService);

	  function AbstractTransitionFactory() {
	    classCallCheck(this, AbstractTransitionFactory);

	    return possibleConstructorReturn(this, getPrototypeOf(AbstractTransitionFactory).apply(this, arguments));
	  }

	  createClass(AbstractTransitionFactory, [{
	    key: "getTransition",

	    /**
	     * Get Transition
	     *
	     * @param {Object} previousState
	     * @param {Object} state
	     * @returns {AbstractTransition}
	     * @abstract
	     */
	    value: function getTransition(previousState, state) {}
	  }]);

	  return AbstractTransitionFactory;
	}(AbstractService);

	/**
	 * Copyright © 2016, Ambroise Maupate
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is furnished
	 * to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
	 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
	 * IN THE SOFTWARE.
	 *
	 * @file Scroll.js
	 * @author Ambroise Maupate
	 */

	/**
	 * @static
	 */
	var Scroll =
	/*#__PURE__*/
	function () {
	  function Scroll() {
	    classCallCheck(this, Scroll);
	  }

	  createClass(Scroll, null, [{
	    key: "_preventDefault",

	    /**
	     *
	     * @param e
	     * @private
	     */
	    value: function _preventDefault(e) {
	      e = e || window.event;

	      if (e.preventDefault) {
	        e.preventDefault();
	      }

	      e.returnValue = false;
	    }
	    /**
	     *
	     * @param e
	     * @private
	     */

	  }, {
	    key: "_keydown",
	    value: function _keydown(e) {
	      // left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
	      var keys = [37, 38, 39, 40, 33, 34, 35];

	      for (var i = keys.length; i--;) {
	        if (e.keyCode === keys[i]) {
	          Scroll._preventDefault(e);

	          return;
	        }
	      }
	    }
	    /**
	     *
	     * @param e
	     * @private
	     */

	  }, {
	    key: "_wheel",
	    value: function _wheel(e) {
	      Scroll._preventDefault(e);
	    }
	    /**
	     * Disable scroll.
	     *
	     * @return {void}
	     */

	  }, {
	    key: "disable",
	    value: function disable() {
	      if (window.addEventListener) {
	        window.addEventListener('DOMMouseScroll', Scroll._wheel, false);
	      }

	      window.onmousewheel = document.onmousewheel = Scroll._wheel;
	      document.onkeydown = Scroll._keydown;
	    }
	    /**
	     * Enable scroll again.
	     *
	     * @return {void}
	     */

	  }, {
	    key: "enable",
	    value: function enable() {
	      if (window.removeEventListener) {
	        window.removeEventListener('DOMMouseScroll', Scroll._wheel, false);
	      }

	      window.onmousewheel = document.onmousewheel = document.onkeydown = null;
	    }
	  }]);

	  return Scroll;
	}();

	var SPECIES$2 = _wks('species');

	var _arraySpeciesConstructor = function (original) {
	  var C;
	  if (_isArray(original)) {
	    C = original.constructor;
	    // cross-realm fallback
	    if (typeof C == 'function' && (C === Array || _isArray(C.prototype))) C = undefined;
	    if (_isObject(C)) {
	      C = C[SPECIES$2];
	      if (C === null) C = undefined;
	    }
	  } return C === undefined ? Array : C;
	};

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)


	var _arraySpeciesCreate = function (original, length) {
	  return new (_arraySpeciesConstructor(original))(length);
	};

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex





	var _arrayMethods = function (TYPE, $create) {
	  var IS_MAP = TYPE == 1;
	  var IS_FILTER = TYPE == 2;
	  var IS_SOME = TYPE == 3;
	  var IS_EVERY = TYPE == 4;
	  var IS_FIND_INDEX = TYPE == 6;
	  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
	  var create = $create || _arraySpeciesCreate;
	  return function ($this, callbackfn, that) {
	    var O = _toObject($this);
	    var self = _iobject(O);
	    var f = _ctx(callbackfn, that, 3);
	    var length = _toLength(self.length);
	    var index = 0;
	    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
	    var val, res;
	    for (;length > index; index++) if (NO_HOLES || index in self) {
	      val = self[index];
	      res = f(val, index, O);
	      if (TYPE) {
	        if (IS_MAP) result[index] = res;   // map
	        else if (res) switch (TYPE) {
	          case 3: return true;             // some
	          case 5: return val;              // find
	          case 6: return index;            // findIndex
	          case 2: result.push(val);        // filter
	        } else if (IS_EVERY) return false; // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)

	var $find = _arrayMethods(6);
	var KEY = 'findIndex';
	var forced = true;
	// Shouldn't skip holes
	if (KEY in []) Array(1)[KEY](function () { forced = false; });
	_export(_export.P + _export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn /* , that = undefined */) {
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	_addToUnscopables(KEY);

	// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	_export(_export.S + _export.F * !_descriptors, 'Object', { defineProperty: _objectDp.f });

	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)

	var $find$1 = _arrayMethods(5);
	var KEY$1 = 'find';
	var forced$1 = true;
	// Shouldn't skip holes
	if (KEY$1 in []) Array(1)[KEY$1](function () { forced$1 = false; });
	_export(_export.P + _export.F * forced$1, 'Array', {
	  find: function find(callbackfn /* , that = undefined */) {
	    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	_addToUnscopables(KEY$1);

	var _createProperty = function (object, index, value) {
	  if (index in object) _objectDp.f(object, index, _propertyDesc(0, value));
	  else object[index] = value;
	};

	_export(_export.S + _export.F * !_iterDetect(function (iter) { }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
	    var O = _toObject(arrayLike);
	    var C = typeof this == 'function' ? this : Array;
	    var aLen = arguments.length;
	    var mapfn = aLen > 1 ? arguments[1] : undefined;
	    var mapping = mapfn !== undefined;
	    var index = 0;
	    var iterFn = core_getIteratorMethod(O);
	    var length, result, step, iterator;
	    if (mapping) mapfn = _ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if (iterFn != undefined && !(C == Array && _isArrayIter(iterFn))) {
	      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
	        _createProperty(result, index, mapping ? _iterCall(iterator, mapfn, [step.value, index], true) : step.value);
	      }
	    } else {
	      length = _toLength(O.length);
	      for (result = new C(length); length > index; index++) {
	        _createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});

	/**
	 * Copyright © 2016, Ambroise Maupate
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is furnished
	 * to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
	 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
	 * IN THE SOFTWARE.
	 *
	 * @file polyfills.js
	 * @author Ambroise Maupate
	 */

	/**
	 * Execute some polyfill for older and crappy browsers.
	 *
	 * - window.requestAnimFrame
	 * - window.cancelAnimFrame
	 * - Avoid `console` errors in browsers that lack a console.
	 */
	function polyfills() {
	  window.requestAnimFrame = function () {
	    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (
	    /* function */
	    callback) {
	      window.setTimeout(callback, 1000 / 60); // 60fps
	    };
	  }();

	  window.cancelAnimFrame = function () {
	    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || function (id) {
	      window.clearTimeout(id);
	    };
	  }();
	  /*
	   * Avoid `console` errors in browsers that lack a console.
	   * @return {[type]} [description]
	   */


	  {
	    var method;

	    var noop = function noop() {};

	    var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
	    var length = methods.length;
	    var console = window.console = window.console || {};

	    while (length--) {
	      method = methods[length]; // Only stub undefined methods.

	      if (!console[method]) {
	        console[method] = noop;
	      }
	    }
	  }
	  /**
	   * Array.from polyfill
	   */

	  if (!Array.from) {
	    Array.from = function (object) {

	      return [].slice.call(object);
	    };
	  }
	  /**
	   * Array.find polyfill
	   */


	  if (!Array.prototype.find) {
	    // eslint-disable-next-line no-extend-native
	    Object.defineProperty(Array.prototype, 'find', {
	      value: function value(predicate) {
	        if (this === null) {
	          throw new TypeError('Array.prototype.find called on null or undefined');
	        }

	        if (typeof predicate !== 'function') {
	          throw new TypeError('predicate must be a function');
	        }

	        var list = Object(this);
	        var length = list.length >>> 0;
	        var thisArg = arguments[1];
	        var value;

	        for (var i = 0; i < length; i++) {
	          value = list[i];

	          if (predicate.call(thisArg, value, i, list)) {
	            return value;
	          }
	        }

	        return undefined;
	      }
	    });
	  }
	  /**
	   * FindIndex polyfill
	   */


	  if (!Array.prototype.findIndex) {
	    // eslint-disable-next-line no-extend-native
	    Object.defineProperty(Array.prototype, 'findIndex', {
	      value: function value(predicate) {
	        // 1. Let O be ? ToObject(this value).
	        if (this === null) {
	          throw new TypeError('"this" is null or not defined');
	        }

	        var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

	        var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.

	        if (typeof predicate !== 'function') {
	          throw new TypeError('predicate must be a function');
	        } // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


	        var thisArg = arguments[1]; // 5. Let k be 0.

	        var k = 0; // 6. Repeat, while k < len

	        while (k < len) {
	          // a. Let Pk be ! ToString(k).
	          // b. Let kValue be ? Get(O, Pk).
	          // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
	          // d. If testResult is true, return k.
	          var kValue = o[k];

	          if (predicate.call(thisArg, kValue, k, o)) {
	            return k;
	          } // e. Increase k by 1.


	          k++;
	        } // 7. Return -1.


	        return -1;
	      }
	    });
	  }
	  /**
	   * Custom event support for IE
	   */


	  (function () {
	    if (typeof window.CustomEvent === 'function') return false;

	    function CustomEvent(event, params) {
	      params = params || {
	        bubbles: false,
	        cancelable: false,
	        detail: undefined
	      };
	      var evt = document.createEvent('CustomEvent');
	      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
	      return evt;
	    }

	    CustomEvent.prototype = window.Event.prototype;
	    window.CustomEvent = CustomEvent;
	  })();
	}

	/**
	 * Method to track JS errors if your Google Analytics account.
	 */
	function gaTrackErrors() {
	  if (typeof ga !== 'undefined') {
	    // Pure JavaScript errors handler
	    window.addEventListener('error', function (err) {
	      var lineAndColumnInfo = err.colno ? ' line:' + err.lineno + ', column:' + err.colno : ' line:' + err.lineno;
	      window.ga('send', 'event', 'JavaScript Error', err.message, err.filename + lineAndColumnInfo + ' -> ' + navigator.userAgent, 0, true);
	    });
	  }
	}

	/**
	 * Static class to get bootstrap breakpoints.
	 */

	var BootstrapMedia =
	/*#__PURE__*/
	function () {
	  function BootstrapMedia() {
	    classCallCheck(this, BootstrapMedia);

	    // Values
	    this.viewportSize = null;
	    this.breakpoints = {
	      xs: 480,
	      sm: 768,
	      md: 992,
	      lg: 1200,
	      xl: 1920 // Binded methods

	    };
	    this.setValues = this.setValues.bind(this); // Init

	    this.init();
	  }

	  createClass(BootstrapMedia, [{
	    key: "init",
	    value: function init() {
	      window.addEventListener('resize', this.setValues);
	      this.setValues();
	    }
	  }, {
	    key: "setValues",
	    value: function setValues() {
	      this.viewportSize = Utils.getViewportSize();
	    }
	  }, {
	    key: "resize",
	    value: function resize() {
	      this.setValues();
	    }
	  }, {
	    key: "isMin",
	    value: function isMin(breakpoint) {
	      if (!this.breakpoints[breakpoint]) {
	        var errorMessage = "Breakpoint '".concat(breakpoint, "' do not exist");
	        console.error(errorMessage);
	        throw new Error(errorMessage);
	      }

	      return this.viewportSize.width >= this.breakpoints[breakpoint];
	    }
	  }]);

	  return BootstrapMedia;
	}();

	/*!
	 * @name Starting Blocks
	 * @license MIT
	 * @copyright Copyright © 2018, Rezo Zero
	 * @version 5.0.0
	 * @author Adrien Scholaert <adrien@rezo-zero.com>
	 * @author Ambroise Maupate <ambroise@rezo-zero.com>
	 */

	exports.EventTypes = EventTypes;
	exports.default = StartingBlocks;
	exports.PageBuilder = PageBuilder;
	exports.BlockBuilder = BlockBuilder;
	exports.Pjax = Pjax;
	exports.History = History;
	exports.Prefetch = Prefetch;
	exports.CacheProvider = CacheProvider;
	exports.AbstractPage = AbstractPage;
	exports.AbstractBlock = AbstractBlock;
	exports.AbstractInViewBlock = AbstractInViewBlock;
	exports.AbstractBlockBuilder = AbstractBlockBuilder;
	exports.AbstractService = AbstractService;
	exports.AbstractSplashscreen = AbstractSplashscreen;
	exports.AbstractTransitionFactory = AbstractTransitionFactory;
	exports.AbstractTransition = AbstractTransition;
	exports.DefaultTransition = DefaultTransition;
	exports.Utils = Utils;
	exports.Scroll = Scroll;
	exports.polyfills = polyfills;
	exports.gaTrackErrors = gaTrackErrors;
	exports.debounce = debounce;
	exports.BootstrapMedia = BootstrapMedia;
	exports.Dispatcher = Dispatcher;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
