(() => {
  // node_modules/@vue/shared/dist/shared.esm-bundler.js
  // @__NO_SIDE_EFFECTS__
  function makeMap(str2, expectsLowerCase) {
    const set2 = new Set(str2.split(","));
    return expectsLowerCase ? (val) => set2.has(val.toLowerCase()) : (val) => set2.has(val);
  }
  var EMPTY_OBJ = true ? Object.freeze({}) : {};
  var EMPTY_ARR = true ? Object.freeze([]) : [];
  var NOOP = () => {
  };
  var NO = () => false;
  var isOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // uppercase letter
  (key.charCodeAt(2) > 122 || key.charCodeAt(2) < 97);
  var isModelListener = (key) => key.startsWith("onUpdate:");
  var extend = Object.assign;
  var remove = (arr, el) => {
    const i = arr.indexOf(el);
    if (i > -1) {
      arr.splice(i, 1);
    }
  };
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var hasOwn = (val, key) => hasOwnProperty.call(val, key);
  var isArray = Array.isArray;
  var isMap = (val) => toTypeString(val) === "[object Map]";
  var isSet = (val) => toTypeString(val) === "[object Set]";
  var isDate = (val) => toTypeString(val) === "[object Date]";
  var isFunction2 = (val) => typeof val === "function";
  var isString = (val) => typeof val === "string";
  var isSymbol = (val) => typeof val === "symbol";
  var isObject = (val) => val !== null && typeof val === "object";
  var isPromise = (val) => {
    return (isObject(val) || isFunction2(val)) && isFunction2(val.then) && isFunction2(val.catch);
  };
  var objectToString = Object.prototype.toString;
  var toTypeString = (value) => objectToString.call(value);
  var toRawType = (value) => {
    return toTypeString(value).slice(8, -1);
  };
  var isPlainObject = (val) => toTypeString(val) === "[object Object]";
  var isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
  var isReservedProp = /* @__PURE__ */ makeMap(
    // the leading comma is intentional so empty string "" is also included
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  );
  var isBuiltInDirective = /* @__PURE__ */ makeMap(
    "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
  );
  var cacheStringFunction = (fn) => {
    const cache = /* @__PURE__ */ Object.create(null);
    return (str2) => {
      const hit = cache[str2];
      return hit || (cache[str2] = fn(str2));
    };
  };
  var camelizeRE = /-(\w)/g;
  var camelize = cacheStringFunction((str2) => {
    return str2.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : "");
  });
  var hyphenateRE = /\B([A-Z])/g;
  var hyphenate = cacheStringFunction(
    (str2) => str2.replace(hyphenateRE, "-$1").toLowerCase()
  );
  var capitalize = cacheStringFunction((str2) => {
    return str2.charAt(0).toUpperCase() + str2.slice(1);
  });
  var toHandlerKey = cacheStringFunction((str2) => {
    const s = str2 ? `on${capitalize(str2)}` : ``;
    return s;
  });
  var hasChanged = (value, oldValue) => !Object.is(value, oldValue);
  var invokeArrayFns = (fns, arg) => {
    for (let i = 0; i < fns.length; i++) {
      fns[i](arg);
    }
  };
  var def = (obj, key, value, writable = false) => {
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: false,
      writable,
      value
    });
  };
  var looseToNumber = (val) => {
    const n = parseFloat(val);
    return isNaN(n) ? val : n;
  };
  var toNumber = (val) => {
    const n = isString(val) ? Number(val) : NaN;
    return isNaN(n) ? val : n;
  };
  var _globalThis;
  var getGlobalThis = () => {
    return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
  };
  function normalizeStyle(value) {
    if (isArray(value)) {
      const res = {};
      for (let i = 0; i < value.length; i++) {
        const item = value[i];
        const normalized = isString(item) ? parseStringStyle(item) : normalizeStyle(item);
        if (normalized) {
          for (const key in normalized) {
            res[key] = normalized[key];
          }
        }
      }
      return res;
    } else if (isString(value) || isObject(value)) {
      return value;
    }
  }
  var listDelimiterRE = /;(?![^(]*\))/g;
  var propertyDelimiterRE = /:([^]+)/;
  var styleCommentRE = /\/\*[^]*?\*\//g;
  function parseStringStyle(cssText) {
    const ret = {};
    cssText.replace(styleCommentRE, "").split(listDelimiterRE).forEach((item) => {
      if (item) {
        const tmp = item.split(propertyDelimiterRE);
        tmp.length > 1 && (ret[tmp[0].trim()] = tmp[1].trim());
      }
    });
    return ret;
  }
  function normalizeClass(value) {
    let res = "";
    if (isString(value)) {
      res = value;
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        const normalized = normalizeClass(value[i]);
        if (normalized) {
          res += normalized + " ";
        }
      }
    } else if (isObject(value)) {
      for (const name in value) {
        if (value[name]) {
          res += name + " ";
        }
      }
    }
    return res.trim();
  }
  var HTML_TAGS = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot";
  var SVG_TAGS = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view";
  var MATH_TAGS = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics";
  var isHTMLTag = /* @__PURE__ */ makeMap(HTML_TAGS);
  var isSVGTag = /* @__PURE__ */ makeMap(SVG_TAGS);
  var isMathMLTag = /* @__PURE__ */ makeMap(MATH_TAGS);
  var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
  var isSpecialBooleanAttr = /* @__PURE__ */ makeMap(specialBooleanAttrs);
  var isBooleanAttr = /* @__PURE__ */ makeMap(
    specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`
  );
  function includeBooleanAttr(value) {
    return !!value || value === "";
  }
  function looseCompareArrays(a, b) {
    if (a.length !== b.length)
      return false;
    let equal = true;
    for (let i = 0; equal && i < a.length; i++) {
      equal = looseEqual(a[i], b[i]);
    }
    return equal;
  }
  function looseEqual(a, b) {
    if (a === b)
      return true;
    let aValidType = isDate(a);
    let bValidType = isDate(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? a.getTime() === b.getTime() : false;
    }
    aValidType = isSymbol(a);
    bValidType = isSymbol(b);
    if (aValidType || bValidType) {
      return a === b;
    }
    aValidType = isArray(a);
    bValidType = isArray(b);
    if (aValidType || bValidType) {
      return aValidType && bValidType ? looseCompareArrays(a, b) : false;
    }
    aValidType = isObject(a);
    bValidType = isObject(b);
    if (aValidType || bValidType) {
      if (!aValidType || !bValidType) {
        return false;
      }
      const aKeysCount = Object.keys(a).length;
      const bKeysCount = Object.keys(b).length;
      if (aKeysCount !== bKeysCount) {
        return false;
      }
      for (const key in a) {
        const aHasKey = a.hasOwnProperty(key);
        const bHasKey = b.hasOwnProperty(key);
        if (aHasKey && !bHasKey || !aHasKey && bHasKey || !looseEqual(a[key], b[key])) {
          return false;
        }
      }
    }
    return String(a) === String(b);
  }
  function looseIndexOf(arr, val) {
    return arr.findIndex((item) => looseEqual(item, val));
  }
  var toDisplayString = (val) => {
    return isString(val) ? val : val == null ? "" : isArray(val) || isObject(val) && (val.toString === objectToString || !isFunction2(val.toString)) ? JSON.stringify(val, replacer, 2) : String(val);
  };
  var replacer = (_key, val) => {
    if (val && val.__v_isRef) {
      return replacer(_key, val.value);
    } else if (isMap(val)) {
      return {
        [`Map(${val.size})`]: [...val.entries()].reduce(
          (entries, [key, val2], i) => {
            entries[stringifySymbol(key, i) + " =>"] = val2;
            return entries;
          },
          {}
        )
      };
    } else if (isSet(val)) {
      return {
        [`Set(${val.size})`]: [...val.values()].map((v) => stringifySymbol(v))
      };
    } else if (isSymbol(val)) {
      return stringifySymbol(val);
    } else if (isObject(val) && !isArray(val) && !isPlainObject(val)) {
      return String(val);
    }
    return val;
  };
  var stringifySymbol = (v, i = "") => {
    var _a;
    return (
      // Symbol.description in es2019+ so we need to cast here to pass
      // the lib: es2016 check
      isSymbol(v) ? `Symbol(${(_a = v.description) != null ? _a : i})` : v
    );
  };

  // node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
  function warn(msg, ...args) {
  }
  var activeEffectScope;
  var EffectScope = class {
    constructor(detached = false) {
      this.detached = detached;
      this._active = true;
      this.effects = [];
      this.cleanups = [];
      this.parent = activeEffectScope;
      if (!detached && activeEffectScope) {
        this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
          this
        ) - 1;
      }
    }
    get active() {
      return this._active;
    }
    run(fn) {
      if (this._active) {
        const currentEffectScope = activeEffectScope;
        try {
          activeEffectScope = this;
          return fn();
        } finally {
          activeEffectScope = currentEffectScope;
        }
      } else if (true) {
        warn(`cannot run an inactive effect scope.`);
      }
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    on() {
      activeEffectScope = this;
    }
    /**
     * This should only be called on non-detached scopes
     * @internal
     */
    off() {
      activeEffectScope = this.parent;
    }
    stop(fromParent) {
      if (this._active) {
        let i, l;
        for (i = 0, l = this.effects.length; i < l; i++) {
          this.effects[i].stop();
        }
        for (i = 0, l = this.cleanups.length; i < l; i++) {
          this.cleanups[i]();
        }
        if (this.scopes) {
          for (i = 0, l = this.scopes.length; i < l; i++) {
            this.scopes[i].stop(true);
          }
        }
        if (!this.detached && this.parent && !fromParent) {
          const last = this.parent.scopes.pop();
          if (last && last !== this) {
            this.parent.scopes[this.index] = last;
            last.index = this.index;
          }
        }
        this.parent = void 0;
        this._active = false;
      }
    }
  };
  function recordEffectScope(effect2, scope = activeEffectScope) {
    if (scope && scope.active) {
      scope.effects.push(effect2);
    }
  }
  function getCurrentScope() {
    return activeEffectScope;
  }
  var activeEffect;
  var ReactiveEffect = class {
    constructor(fn, trigger2, scheduler, scope) {
      this.fn = fn;
      this.trigger = trigger2;
      this.scheduler = scheduler;
      this.active = true;
      this.deps = [];
      this._dirtyLevel = 4;
      this._trackId = 0;
      this._runnings = 0;
      this._shouldSchedule = false;
      this._depsLength = 0;
      recordEffectScope(this, scope);
    }
    get dirty() {
      if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
        this._dirtyLevel = 1;
        pauseTracking();
        for (let i = 0; i < this._depsLength; i++) {
          const dep = this.deps[i];
          if (dep.computed) {
            triggerComputed(dep.computed);
            if (this._dirtyLevel >= 4) {
              break;
            }
          }
        }
        if (this._dirtyLevel === 1) {
          this._dirtyLevel = 0;
        }
        resetTracking();
      }
      return this._dirtyLevel >= 4;
    }
    set dirty(v) {
      this._dirtyLevel = v ? 4 : 0;
    }
    run() {
      this._dirtyLevel = 0;
      if (!this.active) {
        return this.fn();
      }
      let lastShouldTrack = shouldTrack;
      let lastEffect = activeEffect;
      try {
        shouldTrack = true;
        activeEffect = this;
        this._runnings++;
        preCleanupEffect(this);
        return this.fn();
      } finally {
        postCleanupEffect(this);
        this._runnings--;
        activeEffect = lastEffect;
        shouldTrack = lastShouldTrack;
      }
    }
    stop() {
      if (this.active) {
        preCleanupEffect(this);
        postCleanupEffect(this);
        this.onStop && this.onStop();
        this.active = false;
      }
    }
  };
  function triggerComputed(computed3) {
    return computed3.value;
  }
  function preCleanupEffect(effect2) {
    effect2._trackId++;
    effect2._depsLength = 0;
  }
  function postCleanupEffect(effect2) {
    if (effect2.deps.length > effect2._depsLength) {
      for (let i = effect2._depsLength; i < effect2.deps.length; i++) {
        cleanupDepEffect(effect2.deps[i], effect2);
      }
      effect2.deps.length = effect2._depsLength;
    }
  }
  function cleanupDepEffect(dep, effect2) {
    const trackId = dep.get(effect2);
    if (trackId !== void 0 && effect2._trackId !== trackId) {
      dep.delete(effect2);
      if (dep.size === 0) {
        dep.cleanup();
      }
    }
  }
  var shouldTrack = true;
  var pauseScheduleStack = 0;
  var trackStack = [];
  function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
  }
  function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
  }
  function pauseScheduling() {
    pauseScheduleStack++;
  }
  function resetScheduling() {
    pauseScheduleStack--;
    while (!pauseScheduleStack && queueEffectSchedulers.length) {
      queueEffectSchedulers.shift()();
    }
  }
  function trackEffect(effect2, dep, debuggerEventExtraInfo) {
    var _a;
    if (dep.get(effect2) !== effect2._trackId) {
      dep.set(effect2, effect2._trackId);
      const oldDep = effect2.deps[effect2._depsLength];
      if (oldDep !== dep) {
        if (oldDep) {
          cleanupDepEffect(oldDep, effect2);
        }
        effect2.deps[effect2._depsLength++] = dep;
      } else {
        effect2._depsLength++;
      }
      if (true) {
        (_a = effect2.onTrack) == null ? void 0 : _a.call(effect2, extend({ effect: effect2 }, debuggerEventExtraInfo));
      }
    }
  }
  var queueEffectSchedulers = [];
  function triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
    var _a;
    pauseScheduling();
    for (const effect2 of dep.keys()) {
      let tracking;
      if (effect2._dirtyLevel < dirtyLevel && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
        effect2._shouldSchedule || (effect2._shouldSchedule = effect2._dirtyLevel === 0);
        effect2._dirtyLevel = dirtyLevel;
      }
      if (effect2._shouldSchedule && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
        if (true) {
          (_a = effect2.onTrigger) == null ? void 0 : _a.call(effect2, extend({ effect: effect2 }, debuggerEventExtraInfo));
        }
        effect2.trigger();
        if ((!effect2._runnings || effect2.allowRecurse) && effect2._dirtyLevel !== 2) {
          effect2._shouldSchedule = false;
          if (effect2.scheduler) {
            queueEffectSchedulers.push(effect2.scheduler);
          }
        }
      }
    }
    resetScheduling();
  }
  var createDep = (cleanup, computed3) => {
    const dep = /* @__PURE__ */ new Map();
    dep.cleanup = cleanup;
    dep.computed = computed3;
    return dep;
  };
  var targetMap = /* @__PURE__ */ new WeakMap();
  var ITERATE_KEY = Symbol(true ? "iterate" : "");
  var MAP_KEY_ITERATE_KEY = Symbol(true ? "Map key iterate" : "");
  function track(target, type, key) {
    if (shouldTrack && activeEffect) {
      let depsMap = targetMap.get(target);
      if (!depsMap) {
        targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
      }
      let dep = depsMap.get(key);
      if (!dep) {
        depsMap.set(key, dep = createDep(() => depsMap.delete(key)));
      }
      trackEffect(
        activeEffect,
        dep,
        true ? {
          target,
          type,
          key
        } : void 0
      );
    }
  }
  function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) {
      return;
    }
    let deps = [];
    if (type === "clear") {
      deps = [...depsMap.values()];
    } else if (key === "length" && isArray(target)) {
      const newLength = Number(newValue);
      depsMap.forEach((dep, key2) => {
        if (key2 === "length" || !isSymbol(key2) && key2 >= newLength) {
          deps.push(dep);
        }
      });
    } else {
      if (key !== void 0) {
        deps.push(depsMap.get(key));
      }
      switch (type) {
        case "add":
          if (!isArray(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          } else if (isIntegerKey(key)) {
            deps.push(depsMap.get("length"));
          }
          break;
        case "delete":
          if (!isArray(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
            if (isMap(target)) {
              deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
            }
          }
          break;
        case "set":
          if (isMap(target)) {
            deps.push(depsMap.get(ITERATE_KEY));
          }
          break;
      }
    }
    pauseScheduling();
    for (const dep of deps) {
      if (dep) {
        triggerEffects(
          dep,
          4,
          true ? {
            target,
            type,
            key,
            newValue,
            oldValue,
            oldTarget
          } : void 0
        );
      }
    }
    resetScheduling();
  }
  function getDepFromReactive(object, key) {
    const depsMap = targetMap.get(object);
    return depsMap && depsMap.get(key);
  }
  var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
  var builtInSymbols = new Set(
    /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
  );
  var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
  function createArrayInstrumentations() {
    const instrumentations = {};
    ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
      instrumentations[key] = function(...args) {
        const arr = toRaw(this);
        for (let i = 0, l = this.length; i < l; i++) {
          track(arr, "get", i + "");
        }
        const res = arr[key](...args);
        if (res === -1 || res === false) {
          return arr[key](...args.map(toRaw));
        } else {
          return res;
        }
      };
    });
    ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
      instrumentations[key] = function(...args) {
        pauseTracking();
        pauseScheduling();
        const res = toRaw(this)[key].apply(this, args);
        resetScheduling();
        resetTracking();
        return res;
      };
    });
    return instrumentations;
  }
  function hasOwnProperty2(key) {
    if (!isSymbol(key))
      key = String(key);
    const obj = toRaw(this);
    track(obj, "has", key);
    return obj.hasOwnProperty(key);
  }
  var BaseReactiveHandler = class {
    constructor(_isReadonly = false, _isShallow = false) {
      this._isReadonly = _isReadonly;
      this._isShallow = _isShallow;
    }
    get(target, key, receiver) {
      const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_isShallow") {
        return isShallow2;
      } else if (key === "__v_raw") {
        if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
        // this means the reciever is a user proxy of the reactive proxy
        Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
          return target;
        }
        return;
      }
      const targetIsArray = isArray(target);
      if (!isReadonly2) {
        if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
          return Reflect.get(arrayInstrumentations, key, receiver);
        }
        if (key === "hasOwnProperty") {
          return hasOwnProperty2;
        }
      }
      const res = Reflect.get(target, key, receiver);
      if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
        return res;
      }
      if (!isReadonly2) {
        track(target, "get", key);
      }
      if (isShallow2) {
        return res;
      }
      if (isRef(res)) {
        return targetIsArray && isIntegerKey(key) ? res : res.value;
      }
      if (isObject(res)) {
        return isReadonly2 ? readonly(res) : reactive(res);
      }
      return res;
    }
  };
  var MutableReactiveHandler = class extends BaseReactiveHandler {
    constructor(isShallow2 = false) {
      super(false, isShallow2);
    }
    set(target, key, value, receiver) {
      let oldValue = target[key];
      if (!this._isShallow) {
        const isOldValueReadonly = isReadonly(oldValue);
        if (!isShallow(value) && !isReadonly(value)) {
          oldValue = toRaw(oldValue);
          value = toRaw(value);
        }
        if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
          if (isOldValueReadonly) {
            return false;
          } else {
            oldValue.value = value;
            return true;
          }
        }
      }
      const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
      const result = Reflect.set(target, key, value, receiver);
      if (target === toRaw(receiver)) {
        if (!hadKey) {
          trigger(target, "add", key, value);
        } else if (hasChanged(value, oldValue)) {
          trigger(target, "set", key, value, oldValue);
        }
      }
      return result;
    }
    deleteProperty(target, key) {
      const hadKey = hasOwn(target, key);
      const oldValue = target[key];
      const result = Reflect.deleteProperty(target, key);
      if (result && hadKey) {
        trigger(target, "delete", key, void 0, oldValue);
      }
      return result;
    }
    has(target, key) {
      const result = Reflect.has(target, key);
      if (!isSymbol(key) || !builtInSymbols.has(key)) {
        track(target, "has", key);
      }
      return result;
    }
    ownKeys(target) {
      track(
        target,
        "iterate",
        isArray(target) ? "length" : ITERATE_KEY
      );
      return Reflect.ownKeys(target);
    }
  };
  var ReadonlyReactiveHandler = class extends BaseReactiveHandler {
    constructor(isShallow2 = false) {
      super(true, isShallow2);
    }
    set(target, key) {
      if (true) {
        warn(
          `Set operation on key "${String(key)}" failed: target is readonly.`,
          target
        );
      }
      return true;
    }
    deleteProperty(target, key) {
      if (true) {
        warn(
          `Delete operation on key "${String(key)}" failed: target is readonly.`,
          target
        );
      }
      return true;
    }
  };
  var mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
  var readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
  var shallowReactiveHandlers = /* @__PURE__ */ new MutableReactiveHandler(
    true
  );
  var shallowReadonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler(true);
  var toShallow = (value) => value;
  var getProto = (v) => Reflect.getPrototypeOf(v);
  function get(target, key, isReadonly2 = false, isShallow2 = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly2) {
      if (hasChanged(key, rawKey)) {
        track(rawTarget, "get", key);
      }
      track(rawTarget, "get", rawKey);
    }
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) {
      return wrap(target.get(key));
    } else if (has2.call(rawTarget, rawKey)) {
      return wrap(target.get(rawKey));
    } else if (target !== rawTarget) {
      target.get(key);
    }
  }
  function has(key, isReadonly2 = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (!isReadonly2) {
      if (hasChanged(key, rawKey)) {
        track(rawTarget, "has", key);
      }
      track(rawTarget, "has", rawKey);
    }
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
  }
  function size(target, isReadonly2 = false) {
    target = target["__v_raw"];
    !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
  }
  function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
      target.add(value);
      trigger(target, "add", value, value);
    }
    return this;
  }
  function set(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get2.call(target, key);
    target.set(key, value);
    if (!hadKey) {
      trigger(target, "add", key, value);
    } else if (hasChanged(value, oldValue)) {
      trigger(target, "set", key, value, oldValue);
    }
    return this;
  }
  function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get2 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
      key = toRaw(key);
      hadKey = has2.call(target, key);
    } else if (true) {
      checkIdentityKeys(target, has2, key);
    }
    const oldValue = get2 ? get2.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = true ? isMap(target) ? new Map(target) : new Set(target) : void 0;
    const result = target.clear();
    if (hadItems) {
      trigger(target, "clear", void 0, void 0, oldTarget);
    }
    return result;
  }
  function createForEach(isReadonly2, isShallow2) {
    return function forEach2(callback, thisArg) {
      const observed = this;
      const target = observed["__v_raw"];
      const rawTarget = toRaw(target);
      const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
      return target.forEach((value, key) => {
        return callback.call(thisArg, wrap(value), wrap(key), observed);
      });
    };
  }
  function createIterableMethod(method, isReadonly2, isShallow2) {
    return function(...args) {
      const target = this["__v_raw"];
      const rawTarget = toRaw(target);
      const targetIsMap = isMap(rawTarget);
      const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
      const isKeyOnly = method === "keys" && targetIsMap;
      const innerIterator = target[method](...args);
      const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
      !isReadonly2 && track(
        rawTarget,
        "iterate",
        isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
      );
      return {
        // iterator protocol
        next() {
          const { value, done } = innerIterator.next();
          return done ? { value, done } : {
            value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
            done
          };
        },
        // iterable protocol
        [Symbol.iterator]() {
          return this;
        }
      };
    };
  }
  function createReadonlyMethod(type) {
    return function(...args) {
      if (true) {
        const key = args[0] ? `on key "${args[0]}" ` : ``;
        warn(
          `${capitalize(type)} operation ${key}failed: target is readonly.`,
          toRaw(this)
        );
      }
      return type === "delete" ? false : type === "clear" ? void 0 : this;
    };
  }
  function createInstrumentations() {
    const mutableInstrumentations2 = {
      get(key) {
        return get(this, key);
      },
      get size() {
        return size(this);
      },
      has,
      add,
      set,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
      get(key) {
        return get(this, key, false, true);
      },
      get size() {
        return size(this);
      },
      has,
      add,
      set,
      delete: deleteEntry,
      clear,
      forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
      get(key) {
        return get(this, key, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
      get(key) {
        return get(this, key, true, true);
      },
      get size() {
        return size(this, true);
      },
      has(key) {
        return has.call(this, key, true);
      },
      add: createReadonlyMethod("add"),
      set: createReadonlyMethod("set"),
      delete: createReadonlyMethod("delete"),
      clear: createReadonlyMethod("clear"),
      forEach: createForEach(true, true)
    };
    const iteratorMethods = [
      "keys",
      "values",
      "entries",
      Symbol.iterator
    ];
    iteratorMethods.forEach((method) => {
      mutableInstrumentations2[method] = createIterableMethod(method, false, false);
      readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
      shallowInstrumentations2[method] = createIterableMethod(method, false, true);
      shallowReadonlyInstrumentations2[method] = createIterableMethod(
        method,
        true,
        true
      );
    });
    return [
      mutableInstrumentations2,
      readonlyInstrumentations2,
      shallowInstrumentations2,
      shallowReadonlyInstrumentations2
    ];
  }
  var [
    mutableInstrumentations,
    readonlyInstrumentations,
    shallowInstrumentations,
    shallowReadonlyInstrumentations
  ] = /* @__PURE__ */ createInstrumentations();
  function createInstrumentationGetter(isReadonly2, shallow) {
    const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver) => {
      if (key === "__v_isReactive") {
        return !isReadonly2;
      } else if (key === "__v_isReadonly") {
        return isReadonly2;
      } else if (key === "__v_raw") {
        return target;
      }
      return Reflect.get(
        hasOwn(instrumentations, key) && key in target ? instrumentations : target,
        key,
        receiver
      );
    };
  }
  var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
  };
  var shallowCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, true)
  };
  var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
  };
  var shallowReadonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, true)
  };
  function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
      const type = toRawType(target);
      warn(
        `Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
      );
    }
  }
  var reactiveMap = /* @__PURE__ */ new WeakMap();
  var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
  var readonlyMap = /* @__PURE__ */ new WeakMap();
  var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
  function targetTypeMap(rawType) {
    switch (rawType) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
  }
  function reactive(target) {
    if (isReadonly(target)) {
      return target;
    }
    return createReactiveObject(
      target,
      false,
      mutableHandlers,
      mutableCollectionHandlers,
      reactiveMap
    );
  }
  function shallowReactive(target) {
    return createReactiveObject(
      target,
      false,
      shallowReactiveHandlers,
      shallowCollectionHandlers,
      shallowReactiveMap
    );
  }
  function readonly(target) {
    return createReactiveObject(
      target,
      true,
      readonlyHandlers,
      readonlyCollectionHandlers,
      readonlyMap
    );
  }
  function shallowReadonly(target) {
    return createReactiveObject(
      target,
      true,
      shallowReadonlyHandlers,
      shallowReadonlyCollectionHandlers,
      shallowReadonlyMap
    );
  }
  function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
      if (true) {
        warn(`value cannot be made reactive: ${String(target)}`);
      }
      return target;
    }
    if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
      return target;
    }
    const existingProxy = proxyMap.get(target);
    if (existingProxy) {
      return existingProxy;
    }
    const targetType = getTargetType(target);
    if (targetType === 0) {
      return target;
    }
    const proxy = new Proxy(
      target,
      targetType === 2 ? collectionHandlers : baseHandlers
    );
    proxyMap.set(target, proxy);
    return proxy;
  }
  function isReactive(value) {
    if (isReadonly(value)) {
      return isReactive(value["__v_raw"]);
    }
    return !!(value && value["__v_isReactive"]);
  }
  function isReadonly(value) {
    return !!(value && value["__v_isReadonly"]);
  }
  function isShallow(value) {
    return !!(value && value["__v_isShallow"]);
  }
  function isProxy(value) {
    return value ? !!value["__v_raw"] : false;
  }
  function toRaw(observed) {
    const raw = observed && observed["__v_raw"];
    return raw ? toRaw(raw) : observed;
  }
  function markRaw(value) {
    if (Object.isExtensible(value)) {
      def(value, "__v_skip", true);
    }
    return value;
  }
  var toReactive = (value) => isObject(value) ? reactive(value) : value;
  var toReadonly = (value) => isObject(value) ? readonly(value) : value;
  var COMPUTED_SIDE_EFFECT_WARN = `Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free`;
  var ComputedRefImpl = class {
    constructor(getter, _setter, isReadonly2, isSSR) {
      this.getter = getter;
      this._setter = _setter;
      this.dep = void 0;
      this.__v_isRef = true;
      this["__v_isReadonly"] = false;
      this.effect = new ReactiveEffect(
        () => getter(this._value),
        () => triggerRefValue(
          this,
          this.effect._dirtyLevel === 2 ? 2 : 3
        )
      );
      this.effect.computed = this;
      this.effect.active = this._cacheable = !isSSR;
      this["__v_isReadonly"] = isReadonly2;
    }
    get value() {
      const self2 = toRaw(this);
      if ((!self2._cacheable || self2.effect.dirty) && hasChanged(self2._value, self2._value = self2.effect.run())) {
        triggerRefValue(self2, 4);
      }
      trackRefValue(self2);
      if (self2.effect._dirtyLevel >= 2) {
        if (this._warnRecursive) {
          warn(COMPUTED_SIDE_EFFECT_WARN, `

getter: `, this.getter);
        }
        triggerRefValue(self2, 2);
      }
      return self2._value;
    }
    set value(newValue) {
      this._setter(newValue);
    }
    // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
    get _dirty() {
      return this.effect.dirty;
    }
    set _dirty(v) {
      this.effect.dirty = v;
    }
    // #endregion
  };
  function computed(getterOrOptions, debugOptions, isSSR = false) {
    let getter;
    let setter;
    const onlyGetter = isFunction2(getterOrOptions);
    if (onlyGetter) {
      getter = getterOrOptions;
      setter = true ? () => {
        warn("Write operation failed: computed value is readonly");
      } : NOOP;
    } else {
      getter = getterOrOptions.get;
      setter = getterOrOptions.set;
    }
    const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
    if (debugOptions && !isSSR) {
      cRef.effect.onTrack = debugOptions.onTrack;
      cRef.effect.onTrigger = debugOptions.onTrigger;
    }
    return cRef;
  }
  function trackRefValue(ref2) {
    var _a;
    if (shouldTrack && activeEffect) {
      ref2 = toRaw(ref2);
      trackEffect(
        activeEffect,
        (_a = ref2.dep) != null ? _a : ref2.dep = createDep(
          () => ref2.dep = void 0,
          ref2 instanceof ComputedRefImpl ? ref2 : void 0
        ),
        true ? {
          target: ref2,
          type: "get",
          key: "value"
        } : void 0
      );
    }
  }
  function triggerRefValue(ref2, dirtyLevel = 4, newVal) {
    ref2 = toRaw(ref2);
    const dep = ref2.dep;
    if (dep) {
      triggerEffects(
        dep,
        dirtyLevel,
        true ? {
          target: ref2,
          type: "set",
          key: "value",
          newValue: newVal
        } : void 0
      );
    }
  }
  function isRef(r) {
    return !!(r && r.__v_isRef === true);
  }
  function ref(value) {
    return createRef(value, false);
  }
  function createRef(rawValue, shallow) {
    if (isRef(rawValue)) {
      return rawValue;
    }
    return new RefImpl(rawValue, shallow);
  }
  var RefImpl = class {
    constructor(value, __v_isShallow) {
      this.__v_isShallow = __v_isShallow;
      this.dep = void 0;
      this.__v_isRef = true;
      this._rawValue = __v_isShallow ? value : toRaw(value);
      this._value = __v_isShallow ? value : toReactive(value);
    }
    get value() {
      trackRefValue(this);
      return this._value;
    }
    set value(newVal) {
      const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
      newVal = useDirectValue ? newVal : toRaw(newVal);
      if (hasChanged(newVal, this._rawValue)) {
        this._rawValue = newVal;
        this._value = useDirectValue ? newVal : toReactive(newVal);
        triggerRefValue(this, 4, newVal);
      }
    }
  };
  function unref(ref2) {
    return isRef(ref2) ? ref2.value : ref2;
  }
  var shallowUnwrapHandlers = {
    get: (target, key, receiver) => unref(Reflect.get(target, key, receiver)),
    set: (target, key, value, receiver) => {
      const oldValue = target[key];
      if (isRef(oldValue) && !isRef(value)) {
        oldValue.value = value;
        return true;
      } else {
        return Reflect.set(target, key, value, receiver);
      }
    }
  };
  function proxyRefs(objectWithRefs) {
    return isReactive(objectWithRefs) ? objectWithRefs : new Proxy(objectWithRefs, shallowUnwrapHandlers);
  }
  function toRefs(object) {
    if (!isProxy(object)) {
      warn(`toRefs() expects a reactive object but received a plain one.`);
    }
    const ret = isArray(object) ? new Array(object.length) : {};
    for (const key in object) {
      ret[key] = propertyToRef(object, key);
    }
    return ret;
  }
  var ObjectRefImpl = class {
    constructor(_object, _key, _defaultValue) {
      this._object = _object;
      this._key = _key;
      this._defaultValue = _defaultValue;
      this.__v_isRef = true;
    }
    get value() {
      const val = this._object[this._key];
      return val === void 0 ? this._defaultValue : val;
    }
    set value(newVal) {
      this._object[this._key] = newVal;
    }
    get dep() {
      return getDepFromReactive(toRaw(this._object), this._key);
    }
  };
  function propertyToRef(source, key, defaultValue) {
    const val = source[key];
    return isRef(val) ? val : new ObjectRefImpl(source, key, defaultValue);
  }

  // node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
  var stack = [];
  function pushWarningContext(vnode) {
    stack.push(vnode);
  }
  function popWarningContext() {
    stack.pop();
  }
  function warn$1(msg, ...args) {
    pauseTracking();
    const instance = stack.length ? stack[stack.length - 1].component : null;
    const appWarnHandler = instance && instance.appContext.config.warnHandler;
    const trace = getComponentTrace();
    if (appWarnHandler) {
      callWithErrorHandling(
        appWarnHandler,
        instance,
        11,
        [
          msg + args.map((a) => {
            var _a, _b;
            return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
          }).join(""),
          instance && instance.proxy,
          trace.map(
            ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
          ).join("\n"),
          trace
        ]
      );
    } else {
      const warnArgs = [`[Vue warn]: ${msg}`, ...args];
      if (trace.length && // avoid spamming console during tests
      true) {
        warnArgs.push(`
`, ...formatTrace(trace));
      }
    }
    resetTracking();
  }
  function getComponentTrace() {
    let currentVNode = stack[stack.length - 1];
    if (!currentVNode) {
      return [];
    }
    const normalizedStack = [];
    while (currentVNode) {
      const last = normalizedStack[0];
      if (last && last.vnode === currentVNode) {
        last.recurseCount++;
      } else {
        normalizedStack.push({
          vnode: currentVNode,
          recurseCount: 0
        });
      }
      const parentInstance = currentVNode.component && currentVNode.component.parent;
      currentVNode = parentInstance && parentInstance.vnode;
    }
    return normalizedStack;
  }
  function formatTrace(trace) {
    const logs = [];
    trace.forEach((entry, i) => {
      logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
    });
    return logs;
  }
  function formatTraceEntry({ vnode, recurseCount }) {
    const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
    const isRoot = vnode.component ? vnode.component.parent == null : false;
    const open = ` at <${formatComponentName(
      vnode.component,
      vnode.type,
      isRoot
    )}`;
    const close = `>` + postfix;
    return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
  }
  function formatProps(props) {
    const res = [];
    const keys = Object.keys(props);
    keys.slice(0, 3).forEach((key) => {
      res.push(...formatProp(key, props[key]));
    });
    if (keys.length > 3) {
      res.push(` ...`);
    }
    return res;
  }
  function formatProp(key, value, raw) {
    if (isString(value)) {
      value = JSON.stringify(value);
      return raw ? value : [`${key}=${value}`];
    } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
      return raw ? value : [`${key}=${value}`];
    } else if (isRef(value)) {
      value = formatProp(key, toRaw(value.value), true);
      return raw ? value : [`${key}=Ref<`, value, `>`];
    } else if (isFunction2(value)) {
      return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
    } else {
      value = toRaw(value);
      return raw ? value : [`${key}=`, value];
    }
  }
  function assertNumber(val, type) {
    if (false)
      return;
    if (val === void 0) {
      return;
    } else if (typeof val !== "number") {
      warn$1(`${type} is not a valid number - got ${JSON.stringify(val)}.`);
    } else if (isNaN(val)) {
      warn$1(`${type} is NaN - the duration expression might be incorrect.`);
    }
  }
  var ErrorTypeStrings$1 = {
    ["sp"]: "serverPrefetch hook",
    ["bc"]: "beforeCreate hook",
    ["c"]: "created hook",
    ["bm"]: "beforeMount hook",
    ["m"]: "mounted hook",
    ["bu"]: "beforeUpdate hook",
    ["u"]: "updated",
    ["bum"]: "beforeUnmount hook",
    ["um"]: "unmounted hook",
    ["a"]: "activated hook",
    ["da"]: "deactivated hook",
    ["ec"]: "errorCaptured hook",
    ["rtc"]: "renderTracked hook",
    ["rtg"]: "renderTriggered hook",
    [0]: "setup function",
    [1]: "render function",
    [2]: "watcher getter",
    [3]: "watcher callback",
    [4]: "watcher cleanup function",
    [5]: "native event handler",
    [6]: "component event handler",
    [7]: "vnode hook",
    [8]: "directive hook",
    [9]: "transition hook",
    [10]: "app errorHandler",
    [11]: "app warnHandler",
    [12]: "ref function",
    [13]: "async component loader",
    [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
  };
  function callWithErrorHandling(fn, instance, type, args) {
    try {
      return args ? fn(...args) : fn();
    } catch (err) {
      handleError(err, instance, type);
    }
  }
  function callWithAsyncErrorHandling(fn, instance, type, args) {
    if (isFunction2(fn)) {
      const res = callWithErrorHandling(fn, instance, type, args);
      if (res && isPromise(res)) {
        res.catch((err) => {
          handleError(err, instance, type);
        });
      }
      return res;
    }
    if (isArray(fn)) {
      const values = [];
      for (let i = 0; i < fn.length; i++) {
        values.push(callWithAsyncErrorHandling(fn[i], instance, type, args));
      }
      return values;
    } else if (true) {
      warn$1(
        `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof fn}`
      );
    }
  }
  function handleError(err, instance, type, throwInDev = true) {
    const contextVNode = instance ? instance.vnode : null;
    if (instance) {
      let cur = instance.parent;
      const exposedInstance = instance.proxy;
      const errorInfo = true ? ErrorTypeStrings$1[type] : `https://vuejs.org/error-reference/#runtime-${type}`;
      while (cur) {
        const errorCapturedHooks = cur.ec;
        if (errorCapturedHooks) {
          for (let i = 0; i < errorCapturedHooks.length; i++) {
            if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
              return;
            }
          }
        }
        cur = cur.parent;
      }
      const appErrorHandler = instance.appContext.config.errorHandler;
      if (appErrorHandler) {
        pauseTracking();
        callWithErrorHandling(
          appErrorHandler,
          null,
          10,
          [err, exposedInstance, errorInfo]
        );
        resetTracking();
        return;
      }
    }
    logError2(err, type, contextVNode, throwInDev);
  }
  function logError2(err, type, contextVNode, throwInDev = true) {
    if (true) {
      const info = ErrorTypeStrings$1[type];
      if (contextVNode) {
        pushWarningContext(contextVNode);
      }
      warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
      if (contextVNode) {
        popWarningContext();
      }
      if (throwInDev) {
        throw err;
      } else {
      }
    } else {
    }
  }
  var isFlushing = false;
  var isFlushPending = false;
  var queue = [];
  var flushIndex = 0;
  var pendingPostFlushCbs = [];
  var activePostFlushCbs = null;
  var postFlushIndex = 0;
  var resolvedPromise = /* @__PURE__ */ Promise.resolve();
  var currentFlushPromise = null;
  var RECURSION_LIMIT = 100;
  function nextTick(fn) {
    const p2 = currentFlushPromise || resolvedPromise;
    return fn ? p2.then(this ? fn.bind(this) : fn) : p2;
  }
  function findInsertionIndex(id) {
    let start = flushIndex + 1;
    let end = queue.length;
    while (start < end) {
      const middle = start + end >>> 1;
      const middleJob = queue[middle];
      const middleJobId = getId(middleJob);
      if (middleJobId < id || middleJobId === id && middleJob.pre) {
        start = middle + 1;
      } else {
        end = middle;
      }
    }
    return start;
  }
  function queueJob(job) {
    if (!queue.length || !queue.includes(
      job,
      isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
    )) {
      if (job.id == null) {
        queue.push(job);
      } else {
        queue.splice(findInsertionIndex(job.id), 0, job);
      }
      queueFlush();
    }
  }
  function queueFlush() {
    if (!isFlushing && !isFlushPending) {
      isFlushPending = true;
      currentFlushPromise = resolvedPromise.then(flushJobs);
    }
  }
  function invalidateJob(job) {
    const i = queue.indexOf(job);
    if (i > flushIndex) {
      queue.splice(i, 1);
    }
  }
  function queuePostFlushCb(cb) {
    if (!isArray(cb)) {
      if (!activePostFlushCbs || !activePostFlushCbs.includes(
        cb,
        cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
      )) {
        pendingPostFlushCbs.push(cb);
      }
    } else {
      pendingPostFlushCbs.push(...cb);
    }
    queueFlush();
  }
  function flushPreFlushCbs(instance, seen, i = isFlushing ? flushIndex + 1 : 0) {
    if (true) {
      seen = seen || /* @__PURE__ */ new Map();
    }
    for (; i < queue.length; i++) {
      const cb = queue[i];
      if (cb && cb.pre) {
        if (instance && cb.id !== instance.uid) {
          continue;
        }
        if (checkRecursiveUpdates(seen, cb)) {
          continue;
        }
        queue.splice(i, 1);
        i--;
        cb();
      }
    }
  }
  function flushPostFlushCbs(seen) {
    if (pendingPostFlushCbs.length) {
      const deduped = [...new Set(pendingPostFlushCbs)].sort(
        (a, b) => getId(a) - getId(b)
      );
      pendingPostFlushCbs.length = 0;
      if (activePostFlushCbs) {
        activePostFlushCbs.push(...deduped);
        return;
      }
      activePostFlushCbs = deduped;
      if (true) {
        seen = seen || /* @__PURE__ */ new Map();
      }
      for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
        if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
          continue;
        }
        activePostFlushCbs[postFlushIndex]();
      }
      activePostFlushCbs = null;
      postFlushIndex = 0;
    }
  }
  var getId = (job) => job.id == null ? Infinity : job.id;
  var comparator = (a, b) => {
    const diff = getId(a) - getId(b);
    if (diff === 0) {
      if (a.pre && !b.pre)
        return -1;
      if (b.pre && !a.pre)
        return 1;
    }
    return diff;
  };
  function flushJobs(seen) {
    isFlushPending = false;
    isFlushing = true;
    if (true) {
      seen = seen || /* @__PURE__ */ new Map();
    }
    queue.sort(comparator);
    const check = true ? (job) => checkRecursiveUpdates(seen, job) : NOOP;
    try {
      for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
        const job = queue[flushIndex];
        if (job && job.active !== false) {
          if (check(job)) {
            continue;
          }
          callWithErrorHandling(job, null, 14);
        }
      }
    } finally {
      flushIndex = 0;
      queue.length = 0;
      flushPostFlushCbs(seen);
      isFlushing = false;
      currentFlushPromise = null;
      if (queue.length || pendingPostFlushCbs.length) {
        flushJobs(seen);
      }
    }
  }
  function checkRecursiveUpdates(seen, fn) {
    if (!seen.has(fn)) {
      seen.set(fn, 1);
    } else {
      const count = seen.get(fn);
      if (count > RECURSION_LIMIT) {
        const instance = fn.ownerInstance;
        const componentName = instance && getComponentName(instance.type);
        handleError(
          `Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
          null,
          10
        );
        return true;
      } else {
        seen.set(fn, count + 1);
      }
    }
  }
  var isHmrUpdating = false;
  var hmrDirtyComponents = /* @__PURE__ */ new Set();
  if (true) {
    getGlobalThis().__VUE_HMR_RUNTIME__ = {
      createRecord: tryWrap(createRecord),
      rerender: tryWrap(rerender),
      reload: tryWrap(reload)
    };
  }
  var map = /* @__PURE__ */ new Map();
  function registerHMR(instance) {
    const id = instance.type.__hmrId;
    let record = map.get(id);
    if (!record) {
      createRecord(id, instance.type);
      record = map.get(id);
    }
    record.instances.add(instance);
  }
  function unregisterHMR(instance) {
    map.get(instance.type.__hmrId).instances.delete(instance);
  }
  function createRecord(id, initialDef) {
    if (map.has(id)) {
      return false;
    }
    map.set(id, {
      initialDef: normalizeClassComponent(initialDef),
      instances: /* @__PURE__ */ new Set()
    });
    return true;
  }
  function normalizeClassComponent(component) {
    return isClassComponent(component) ? component.__vccOpts : component;
  }
  function rerender(id, newRender) {
    const record = map.get(id);
    if (!record) {
      return;
    }
    record.initialDef.render = newRender;
    [...record.instances].forEach((instance) => {
      if (newRender) {
        instance.render = newRender;
        normalizeClassComponent(instance.type).render = newRender;
      }
      instance.renderCache = [];
      isHmrUpdating = true;
      instance.effect.dirty = true;
      instance.update();
      isHmrUpdating = false;
    });
  }
  function reload(id, newComp) {
    const record = map.get(id);
    if (!record)
      return;
    newComp = normalizeClassComponent(newComp);
    updateComponentDef(record.initialDef, newComp);
    const instances = [...record.instances];
    for (const instance of instances) {
      const oldComp = normalizeClassComponent(instance.type);
      if (!hmrDirtyComponents.has(oldComp)) {
        if (oldComp !== record.initialDef) {
          updateComponentDef(oldComp, newComp);
        }
        hmrDirtyComponents.add(oldComp);
      }
      instance.appContext.propsCache.delete(instance.type);
      instance.appContext.emitsCache.delete(instance.type);
      instance.appContext.optionsCache.delete(instance.type);
      if (instance.ceReload) {
        hmrDirtyComponents.add(oldComp);
        instance.ceReload(newComp.styles);
        hmrDirtyComponents.delete(oldComp);
      } else if (instance.parent) {
        instance.parent.effect.dirty = true;
        queueJob(instance.parent.update);
      } else if (instance.appContext.reload) {
        instance.appContext.reload();
      } else if (typeof window !== "undefined") {
        window.location.reload();
      } else {
      }
    }
    queuePostFlushCb(() => {
      for (const instance of instances) {
        hmrDirtyComponents.delete(
          normalizeClassComponent(instance.type)
        );
      }
    });
  }
  function updateComponentDef(oldComp, newComp) {
    extend(oldComp, newComp);
    for (const key in oldComp) {
      if (key !== "__file" && !(key in newComp)) {
        delete oldComp[key];
      }
    }
  }
  function tryWrap(fn) {
    return (id, arg) => {
      try {
        return fn(id, arg);
      } catch (e) {
      }
    };
  }
  var devtools$1;
  var buffer = [];
  var devtoolsNotInstalled = false;
  function emit$1(event, ...args) {
    if (devtools$1) {
      devtools$1.emit(event, ...args);
    } else if (!devtoolsNotInstalled) {
      buffer.push({ event, args });
    }
  }
  function setDevtoolsHook$1(hook, target) {
    var _a, _b;
    devtools$1 = hook;
    if (devtools$1) {
      devtools$1.enabled = true;
      buffer.forEach(({ event, args }) => devtools$1.emit(event, ...args));
      buffer = [];
    } else if (
      // handle late devtools injection - only do this if we are in an actual
      // browser environment to avoid the timer handle stalling test runner exit
      // (#4815)
      typeof window !== "undefined" && // some envs mock window but not fully
      window.HTMLElement && // also exclude jsdom
      !((_b = (_a = window.navigator) == null ? void 0 : _a.userAgent) == null ? void 0 : _b.includes("jsdom"))
    ) {
      const replay = target.__VUE_DEVTOOLS_HOOK_REPLAY__ = target.__VUE_DEVTOOLS_HOOK_REPLAY__ || [];
      replay.push((newHook) => {
        setDevtoolsHook$1(newHook, target);
      });
      setTimeout(() => {
        if (!devtools$1) {
          target.__VUE_DEVTOOLS_HOOK_REPLAY__ = null;
          devtoolsNotInstalled = true;
          buffer = [];
        }
      }, 3e3);
    } else {
      devtoolsNotInstalled = true;
      buffer = [];
    }
  }
  function devtoolsInitApp(app, version2) {
    emit$1("app:init", app, version2, {
      Fragment,
      Text,
      Comment,
      Static
    });
  }
  function devtoolsUnmountApp(app) {
    emit$1("app:unmount", app);
  }
  var devtoolsComponentAdded = /* @__PURE__ */ createDevtoolsComponentHook(
    "component:added"
    /* COMPONENT_ADDED */
  );
  var devtoolsComponentUpdated = /* @__PURE__ */ createDevtoolsComponentHook(
    "component:updated"
    /* COMPONENT_UPDATED */
  );
  var _devtoolsComponentRemoved = /* @__PURE__ */ createDevtoolsComponentHook(
    "component:removed"
    /* COMPONENT_REMOVED */
  );
  var devtoolsComponentRemoved = (component) => {
    if (devtools$1 && typeof devtools$1.cleanupBuffer === "function" && // remove the component if it wasn't buffered
    !devtools$1.cleanupBuffer(component)) {
      _devtoolsComponentRemoved(component);
    }
  };
  // @__NO_SIDE_EFFECTS__
  function createDevtoolsComponentHook(hook) {
    return (component) => {
      emit$1(
        hook,
        component.appContext.app,
        component.uid,
        component.parent ? component.parent.uid : void 0,
        component
      );
    };
  }
  var devtoolsPerfStart = /* @__PURE__ */ createDevtoolsPerformanceHook(
    "perf:start"
    /* PERFORMANCE_START */
  );
  var devtoolsPerfEnd = /* @__PURE__ */ createDevtoolsPerformanceHook(
    "perf:end"
    /* PERFORMANCE_END */
  );
  function createDevtoolsPerformanceHook(hook) {
    return (component, type, time) => {
      emit$1(hook, component.appContext.app, component.uid, component, type, time);
    };
  }
  function devtoolsComponentEmit(component, event, params) {
    emit$1(
      "component:emit",
      component.appContext.app,
      component,
      event,
      params
    );
  }
  function emit(instance, event, ...rawArgs) {
    if (instance.isUnmounted)
      return;
    const props = instance.vnode.props || EMPTY_OBJ;
    if (true) {
      const {
        emitsOptions,
        propsOptions: [propsOptions]
      } = instance;
      if (emitsOptions) {
        if (!(event in emitsOptions) && true) {
          if (!propsOptions || !(toHandlerKey(event) in propsOptions)) {
            warn$1(
              `Component emitted event "${event}" but it is neither declared in the emits option nor as an "${toHandlerKey(event)}" prop.`
            );
          }
        } else {
          const validator = emitsOptions[event];
          if (isFunction2(validator)) {
            const isValid = validator(...rawArgs);
            if (!isValid) {
              warn$1(
                `Invalid event arguments: event validation failed for event "${event}".`
              );
            }
          }
        }
      }
    }
    let args = rawArgs;
    const isModelListener2 = event.startsWith("update:");
    const modelArg = isModelListener2 && event.slice(7);
    if (modelArg && modelArg in props) {
      const modifiersKey = `${modelArg === "modelValue" ? "model" : modelArg}Modifiers`;
      const { number, trim } = props[modifiersKey] || EMPTY_OBJ;
      if (trim) {
        args = rawArgs.map((a) => isString(a) ? a.trim() : a);
      }
      if (number) {
        args = rawArgs.map(looseToNumber);
      }
    }
    if (true) {
      devtoolsComponentEmit(instance, event, args);
    }
    if (true) {
      const lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && props[toHandlerKey(lowerCaseEvent)]) {
        warn$1(
          `Event "${lowerCaseEvent}" is emitted in component ${formatComponentName(
            instance,
            instance.type
          )} but the handler is registered for "${event}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${hyphenate(
            event
          )}" instead of "${event}".`
        );
      }
    }
    let handlerName;
    let handler = props[handlerName = toHandlerKey(event)] || // also try camelCase event handler (#2249)
    props[handlerName = toHandlerKey(camelize(event))];
    if (!handler && isModelListener2) {
      handler = props[handlerName = toHandlerKey(hyphenate(event))];
    }
    if (handler) {
      callWithAsyncErrorHandling(
        handler,
        instance,
        6,
        args
      );
    }
    const onceHandler = props[handlerName + `Once`];
    if (onceHandler) {
      if (!instance.emitted) {
        instance.emitted = {};
      } else if (instance.emitted[handlerName]) {
        return;
      }
      instance.emitted[handlerName] = true;
      callWithAsyncErrorHandling(
        onceHandler,
        instance,
        6,
        args
      );
    }
  }
  function normalizeEmitsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.emitsCache;
    const cached = cache.get(comp);
    if (cached !== void 0) {
      return cached;
    }
    const raw = comp.emits;
    let normalized = {};
    let hasExtends = false;
    if (!isFunction2(comp)) {
      const extendEmits = (raw2) => {
        const normalizedFromExtend = normalizeEmitsOptions(raw2, appContext, true);
        if (normalizedFromExtend) {
          hasExtends = true;
          extend(normalized, normalizedFromExtend);
        }
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendEmits);
      }
      if (comp.extends) {
        extendEmits(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendEmits);
      }
    }
    if (!raw && !hasExtends) {
      if (isObject(comp)) {
        cache.set(comp, null);
      }
      return null;
    }
    if (isArray(raw)) {
      raw.forEach((key) => normalized[key] = null);
    } else {
      extend(normalized, raw);
    }
    if (isObject(comp)) {
      cache.set(comp, normalized);
    }
    return normalized;
  }
  function isEmitListener(options, key) {
    if (!options || !isOn(key)) {
      return false;
    }
    key = key.slice(2).replace(/Once$/, "");
    return hasOwn(options, key[0].toLowerCase() + key.slice(1)) || hasOwn(options, hyphenate(key)) || hasOwn(options, key);
  }
  var currentRenderingInstance = null;
  var currentScopeId = null;
  function setCurrentRenderingInstance(instance) {
    const prev = currentRenderingInstance;
    currentRenderingInstance = instance;
    currentScopeId = instance && instance.type.__scopeId || null;
    return prev;
  }
  function pushScopeId(id) {
    currentScopeId = id;
  }
  function popScopeId() {
    currentScopeId = null;
  }
  function withCtx(fn, ctx = currentRenderingInstance, isNonScopedSlot) {
    if (!ctx)
      return fn;
    if (fn._n) {
      return fn;
    }
    const renderFnWithContext = (...args) => {
      if (renderFnWithContext._d) {
        setBlockTracking(-1);
      }
      const prevInstance = setCurrentRenderingInstance(ctx);
      let res;
      try {
        res = fn(...args);
      } finally {
        setCurrentRenderingInstance(prevInstance);
        if (renderFnWithContext._d) {
          setBlockTracking(1);
        }
      }
      if (true) {
        devtoolsComponentUpdated(ctx);
      }
      return res;
    };
    renderFnWithContext._n = true;
    renderFnWithContext._c = true;
    renderFnWithContext._d = true;
    return renderFnWithContext;
  }
  var accessedAttrs = false;
  function markAttrsAccessed() {
    accessedAttrs = true;
  }
  function renderComponentRoot(instance) {
    const {
      type: Component,
      vnode,
      proxy,
      withProxy,
      propsOptions: [propsOptions],
      slots,
      attrs,
      emit: emit2,
      render: render2,
      renderCache,
      props,
      data,
      setupState,
      ctx,
      inheritAttrs
    } = instance;
    const prev = setCurrentRenderingInstance(instance);
    let result;
    let fallthroughAttrs;
    if (true) {
      accessedAttrs = false;
    }
    try {
      if (vnode.shapeFlag & 4) {
        const proxyToUse = withProxy || proxy;
        const thisProxy = setupState.__isScriptSetup ? new Proxy(proxyToUse, {
          get(target, key, receiver) {
            warn$1(
              `Property '${String(
                key
              )}' was accessed via 'this'. Avoid using 'this' in templates.`
            );
            return Reflect.get(target, key, receiver);
          }
        }) : proxyToUse;
        result = normalizeVNode(
          render2.call(
            thisProxy,
            proxyToUse,
            renderCache,
            true ? shallowReadonly(props) : props,
            setupState,
            data,
            ctx
          )
        );
        fallthroughAttrs = attrs;
      } else {
        const render22 = Component;
        if (attrs === props) {
          markAttrsAccessed();
        }
        result = normalizeVNode(
          render22.length > 1 ? render22(
            true ? shallowReadonly(props) : props,
            true ? {
              get attrs() {
                markAttrsAccessed();
                return shallowReadonly(attrs);
              },
              slots,
              emit: emit2
            } : { attrs, slots, emit: emit2 }
          ) : render22(
            true ? shallowReadonly(props) : props,
            null
          )
        );
        fallthroughAttrs = Component.props ? attrs : getFunctionalFallthrough(attrs);
      }
    } catch (err) {
      blockStack.length = 0;
      handleError(err, instance, 1);
      result = createVNode(Comment);
    }
    let root = result;
    let setRoot = void 0;
    if (result.patchFlag > 0 && result.patchFlag & 2048) {
      [root, setRoot] = getChildRoot(result);
    }
    if (fallthroughAttrs && inheritAttrs !== false) {
      const keys = Object.keys(fallthroughAttrs);
      const { shapeFlag } = root;
      if (keys.length) {
        if (shapeFlag & (1 | 6)) {
          if (propsOptions && keys.some(isModelListener)) {
            fallthroughAttrs = filterModelListeners(
              fallthroughAttrs,
              propsOptions
            );
          }
          root = cloneVNode(root, fallthroughAttrs, false, true);
        } else if (!accessedAttrs && root.type !== Comment) {
          const allAttrs = Object.keys(attrs);
          const eventAttrs = [];
          const extraAttrs = [];
          for (let i = 0, l = allAttrs.length; i < l; i++) {
            const key = allAttrs[i];
            if (isOn(key)) {
              if (!isModelListener(key)) {
                eventAttrs.push(key[2].toLowerCase() + key.slice(3));
              }
            } else {
              extraAttrs.push(key);
            }
          }
          if (extraAttrs.length) {
            warn$1(
              `Extraneous non-props attributes (${extraAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
            );
          }
          if (eventAttrs.length) {
            warn$1(
              `Extraneous non-emits event listeners (${eventAttrs.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
            );
          }
        }
      }
    }
    if (vnode.dirs) {
      if (!isElementRoot(root)) {
        warn$1(
          `Runtime directive used on component with non-element root node. The directives will not function as intended.`
        );
      }
      root = cloneVNode(root, null, false, true);
      root.dirs = root.dirs ? root.dirs.concat(vnode.dirs) : vnode.dirs;
    }
    if (vnode.transition) {
      if (!isElementRoot(root)) {
        warn$1(
          `Component inside <Transition> renders non-element root node that cannot be animated.`
        );
      }
      root.transition = vnode.transition;
    }
    if (setRoot) {
      setRoot(root);
    } else {
      result = root;
    }
    setCurrentRenderingInstance(prev);
    return result;
  }
  var getChildRoot = (vnode) => {
    const rawChildren = vnode.children;
    const dynamicChildren = vnode.dynamicChildren;
    const childRoot = filterSingleRoot(rawChildren, false);
    if (!childRoot) {
      return [vnode, void 0];
    } else if (childRoot.patchFlag > 0 && childRoot.patchFlag & 2048) {
      return getChildRoot(childRoot);
    }
    const index = rawChildren.indexOf(childRoot);
    const dynamicIndex = dynamicChildren ? dynamicChildren.indexOf(childRoot) : -1;
    const setRoot = (updatedRoot) => {
      rawChildren[index] = updatedRoot;
      if (dynamicChildren) {
        if (dynamicIndex > -1) {
          dynamicChildren[dynamicIndex] = updatedRoot;
        } else if (updatedRoot.patchFlag > 0) {
          vnode.dynamicChildren = [...dynamicChildren, updatedRoot];
        }
      }
    };
    return [normalizeVNode(childRoot), setRoot];
  };
  function filterSingleRoot(children, recurse = true) {
    let singleRoot;
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (isVNode(child)) {
        if (child.type !== Comment || child.children === "v-if") {
          if (singleRoot) {
            return;
          } else {
            singleRoot = child;
            if (recurse && singleRoot.patchFlag > 0 && singleRoot.patchFlag & 2048) {
              return filterSingleRoot(singleRoot.children);
            }
          }
        }
      } else {
        return;
      }
    }
    return singleRoot;
  }
  var getFunctionalFallthrough = (attrs) => {
    let res;
    for (const key in attrs) {
      if (key === "class" || key === "style" || isOn(key)) {
        (res || (res = {}))[key] = attrs[key];
      }
    }
    return res;
  };
  var filterModelListeners = (attrs, props) => {
    const res = {};
    for (const key in attrs) {
      if (!isModelListener(key) || !(key.slice(9) in props)) {
        res[key] = attrs[key];
      }
    }
    return res;
  };
  var isElementRoot = (vnode) => {
    return vnode.shapeFlag & (6 | 1) || vnode.type === Comment;
  };
  function shouldUpdateComponent(prevVNode, nextVNode, optimized) {
    const { props: prevProps, children: prevChildren, component } = prevVNode;
    const { props: nextProps, children: nextChildren, patchFlag } = nextVNode;
    const emits = component.emitsOptions;
    if ((prevChildren || nextChildren) && isHmrUpdating) {
      return true;
    }
    if (nextVNode.dirs || nextVNode.transition) {
      return true;
    }
    if (optimized && patchFlag >= 0) {
      if (patchFlag & 1024) {
        return true;
      }
      if (patchFlag & 16) {
        if (!prevProps) {
          return !!nextProps;
        }
        return hasPropsChanged(prevProps, nextProps, emits);
      } else if (patchFlag & 8) {
        const dynamicProps = nextVNode.dynamicProps;
        for (let i = 0; i < dynamicProps.length; i++) {
          const key = dynamicProps[i];
          if (nextProps[key] !== prevProps[key] && !isEmitListener(emits, key)) {
            return true;
          }
        }
      }
    } else {
      if (prevChildren || nextChildren) {
        if (!nextChildren || !nextChildren.$stable) {
          return true;
        }
      }
      if (prevProps === nextProps) {
        return false;
      }
      if (!prevProps) {
        return !!nextProps;
      }
      if (!nextProps) {
        return true;
      }
      return hasPropsChanged(prevProps, nextProps, emits);
    }
    return false;
  }
  function hasPropsChanged(prevProps, nextProps, emitsOptions) {
    const nextKeys = Object.keys(nextProps);
    if (nextKeys.length !== Object.keys(prevProps).length) {
      return true;
    }
    for (let i = 0; i < nextKeys.length; i++) {
      const key = nextKeys[i];
      if (nextProps[key] !== prevProps[key] && !isEmitListener(emitsOptions, key)) {
        return true;
      }
    }
    return false;
  }
  function updateHOCHostEl({ vnode, parent }, el) {
    while (parent) {
      const root = parent.subTree;
      if (root.suspense && root.suspense.activeBranch === vnode) {
        root.el = vnode.el;
      }
      if (root === vnode) {
        (vnode = parent.vnode).el = el;
        parent = parent.parent;
      } else {
        break;
      }
    }
  }
  var NULL_DYNAMIC_COMPONENT = Symbol.for("v-ndc");
  var isSuspense = (type) => type.__isSuspense;
  function queueEffectWithSuspense(fn, suspense) {
    if (suspense && suspense.pendingBranch) {
      if (isArray(fn)) {
        suspense.effects.push(...fn);
      } else {
        suspense.effects.push(fn);
      }
    } else {
      queuePostFlushCb(fn);
    }
  }
  var ssrContextKey = Symbol.for("v-scx");
  var useSSRContext = () => {
    {
      const ctx = inject(ssrContextKey);
      if (!ctx) {
        warn$1(
          `Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build.`
        );
      }
      return ctx;
    }
  };
  var INITIAL_WATCHER_VALUE = {};
  function watch(source, cb, options) {
    if (!isFunction2(cb)) {
      warn$1(
        `\`watch(fn, options?)\` signature has been moved to a separate API. Use \`watchEffect(fn, options?)\` instead. \`watch\` now only supports \`watch(source, cb, options?) signature.`
      );
    }
    return doWatch(source, cb, options);
  }
  function doWatch(source, cb, {
    immediate,
    deep,
    flush,
    once,
    onTrack,
    onTrigger
  } = EMPTY_OBJ) {
    if (cb && once) {
      const _cb = cb;
      cb = (...args) => {
        _cb(...args);
        unwatch();
      };
    }
    if (deep !== void 0 && typeof deep === "number") {
      warn$1(
        `watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.`
      );
    }
    if (!cb) {
      if (immediate !== void 0) {
        warn$1(
          `watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.`
        );
      }
      if (deep !== void 0) {
        warn$1(
          `watch() "deep" option is only respected when using the watch(source, callback, options?) signature.`
        );
      }
      if (once !== void 0) {
        warn$1(
          `watch() "once" option is only respected when using the watch(source, callback, options?) signature.`
        );
      }
    }
    const warnInvalidSource = (s) => {
      warn$1(
        `Invalid watch source: `,
        s,
        `A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.`
      );
    };
    const instance = currentInstance;
    const reactiveGetter = (source2) => deep === true ? source2 : (
      // for deep: false, only traverse root-level properties
      traverse(source2, deep === false ? 1 : void 0)
    );
    let getter;
    let forceTrigger = false;
    let isMultiSource = false;
    if (isRef(source)) {
      getter = () => source.value;
      forceTrigger = isShallow(source);
    } else if (isReactive(source)) {
      getter = () => reactiveGetter(source);
      forceTrigger = true;
    } else if (isArray(source)) {
      isMultiSource = true;
      forceTrigger = source.some((s) => isReactive(s) || isShallow(s));
      getter = () => source.map((s) => {
        if (isRef(s)) {
          return s.value;
        } else if (isReactive(s)) {
          return reactiveGetter(s);
        } else if (isFunction2(s)) {
          return callWithErrorHandling(s, instance, 2);
        } else {
          warnInvalidSource(s);
        }
      });
    } else if (isFunction2(source)) {
      if (cb) {
        getter = () => callWithErrorHandling(source, instance, 2);
      } else {
        getter = () => {
          if (cleanup) {
            cleanup();
          }
          return callWithAsyncErrorHandling(
            source,
            instance,
            3,
            [onCleanup]
          );
        };
      }
    } else {
      getter = NOOP;
      warnInvalidSource(source);
    }
    if (cb && deep) {
      const baseGetter = getter;
      getter = () => traverse(baseGetter());
    }
    let cleanup;
    let onCleanup = (fn) => {
      cleanup = effect2.onStop = () => {
        callWithErrorHandling(fn, instance, 4);
        cleanup = effect2.onStop = void 0;
      };
    };
    let ssrCleanup;
    if (isInSSRComponentSetup) {
      onCleanup = NOOP;
      if (!cb) {
        getter();
      } else if (immediate) {
        callWithAsyncErrorHandling(cb, instance, 3, [
          getter(),
          isMultiSource ? [] : void 0,
          onCleanup
        ]);
      }
      if (flush === "sync") {
        const ctx = useSSRContext();
        ssrCleanup = ctx.__watcherHandles || (ctx.__watcherHandles = []);
      } else {
        return NOOP;
      }
    }
    let oldValue = isMultiSource ? new Array(source.length).fill(INITIAL_WATCHER_VALUE) : INITIAL_WATCHER_VALUE;
    const job = () => {
      if (!effect2.active || !effect2.dirty) {
        return;
      }
      if (cb) {
        const newValue = effect2.run();
        if (deep || forceTrigger || (isMultiSource ? newValue.some((v, i) => hasChanged(v, oldValue[i])) : hasChanged(newValue, oldValue)) || false) {
          if (cleanup) {
            cleanup();
          }
          callWithAsyncErrorHandling(cb, instance, 3, [
            newValue,
            // pass undefined as the old value when it's changed for the first time
            oldValue === INITIAL_WATCHER_VALUE ? void 0 : isMultiSource && oldValue[0] === INITIAL_WATCHER_VALUE ? [] : oldValue,
            onCleanup
          ]);
          oldValue = newValue;
        }
      } else {
        effect2.run();
      }
    };
    job.allowRecurse = !!cb;
    let scheduler;
    if (flush === "sync") {
      scheduler = job;
    } else if (flush === "post") {
      scheduler = () => queuePostRenderEffect(job, instance && instance.suspense);
    } else {
      job.pre = true;
      if (instance)
        job.id = instance.uid;
      scheduler = () => queueJob(job);
    }
    const effect2 = new ReactiveEffect(getter, NOOP, scheduler);
    const scope = getCurrentScope();
    const unwatch = () => {
      effect2.stop();
      if (scope) {
        remove(scope.effects, effect2);
      }
    };
    if (true) {
      effect2.onTrack = onTrack;
      effect2.onTrigger = onTrigger;
    }
    if (cb) {
      if (immediate) {
        job();
      } else {
        oldValue = effect2.run();
      }
    } else if (flush === "post") {
      queuePostRenderEffect(
        effect2.run.bind(effect2),
        instance && instance.suspense
      );
    } else {
      effect2.run();
    }
    if (ssrCleanup)
      ssrCleanup.push(unwatch);
    return unwatch;
  }
  function instanceWatch(source, value, options) {
    const publicThis = this.proxy;
    const getter = isString(source) ? source.includes(".") ? createPathGetter(publicThis, source) : () => publicThis[source] : source.bind(publicThis, publicThis);
    let cb;
    if (isFunction2(value)) {
      cb = value;
    } else {
      cb = value.handler;
      options = value;
    }
    const reset = setCurrentInstance(this);
    const res = doWatch(getter, cb.bind(publicThis), options);
    reset();
    return res;
  }
  function createPathGetter(ctx, path) {
    const segments = path.split(".");
    return () => {
      let cur = ctx;
      for (let i = 0; i < segments.length && cur; i++) {
        cur = cur[segments[i]];
      }
      return cur;
    };
  }
  function traverse(value, depth = Infinity, seen) {
    if (depth <= 0 || !isObject(value) || value["__v_skip"]) {
      return value;
    }
    seen = seen || /* @__PURE__ */ new Set();
    if (seen.has(value)) {
      return value;
    }
    seen.add(value);
    depth--;
    if (isRef(value)) {
      traverse(value.value, depth, seen);
    } else if (isArray(value)) {
      for (let i = 0; i < value.length; i++) {
        traverse(value[i], depth, seen);
      }
    } else if (isSet(value) || isMap(value)) {
      value.forEach((v) => {
        traverse(v, depth, seen);
      });
    } else if (isPlainObject(value)) {
      for (const key in value) {
        traverse(value[key], depth, seen);
      }
    }
    return value;
  }
  function validateDirectiveName(name) {
    if (isBuiltInDirective(name)) {
      warn$1("Do not use built-in directive ids as custom directive id: " + name);
    }
  }
  function withDirectives(vnode, directives) {
    if (currentRenderingInstance === null) {
      warn$1(`withDirectives can only be used inside render functions.`);
      return vnode;
    }
    const instance = getExposeProxy(currentRenderingInstance) || currentRenderingInstance.proxy;
    const bindings = vnode.dirs || (vnode.dirs = []);
    for (let i = 0; i < directives.length; i++) {
      let [dir, value, arg, modifiers = EMPTY_OBJ] = directives[i];
      if (dir) {
        if (isFunction2(dir)) {
          dir = {
            mounted: dir,
            updated: dir
          };
        }
        if (dir.deep) {
          traverse(value);
        }
        bindings.push({
          dir,
          instance,
          value,
          oldValue: void 0,
          arg,
          modifiers
        });
      }
    }
    return vnode;
  }
  function invokeDirectiveHook(vnode, prevVNode, instance, name) {
    const bindings = vnode.dirs;
    const oldBindings = prevVNode && prevVNode.dirs;
    for (let i = 0; i < bindings.length; i++) {
      const binding = bindings[i];
      if (oldBindings) {
        binding.oldValue = oldBindings[i].value;
      }
      let hook = binding.dir[name];
      if (hook) {
        pauseTracking();
        callWithAsyncErrorHandling(hook, instance, 8, [
          vnode.el,
          binding,
          vnode,
          prevVNode
        ]);
        resetTracking();
      }
    }
  }
  var leaveCbKey = Symbol("_leaveCb");
  var enterCbKey = Symbol("_enterCb");
  function useTransitionState() {
    const state = {
      isMounted: false,
      isLeaving: false,
      isUnmounting: false,
      leavingVNodes: /* @__PURE__ */ new Map()
    };
    onMounted(() => {
      state.isMounted = true;
    });
    onBeforeUnmount(() => {
      state.isUnmounting = true;
    });
    return state;
  }
  var TransitionHookValidator = [Function, Array];
  var BaseTransitionPropsValidators = {
    mode: String,
    appear: Boolean,
    persisted: Boolean,
    // enter
    onBeforeEnter: TransitionHookValidator,
    onEnter: TransitionHookValidator,
    onAfterEnter: TransitionHookValidator,
    onEnterCancelled: TransitionHookValidator,
    // leave
    onBeforeLeave: TransitionHookValidator,
    onLeave: TransitionHookValidator,
    onAfterLeave: TransitionHookValidator,
    onLeaveCancelled: TransitionHookValidator,
    // appear
    onBeforeAppear: TransitionHookValidator,
    onAppear: TransitionHookValidator,
    onAfterAppear: TransitionHookValidator,
    onAppearCancelled: TransitionHookValidator
  };
  var BaseTransitionImpl = {
    name: `BaseTransition`,
    props: BaseTransitionPropsValidators,
    setup(props, { slots }) {
      const instance = getCurrentInstance();
      const state = useTransitionState();
      return () => {
        const children = slots.default && getTransitionRawChildren(slots.default(), true);
        if (!children || !children.length) {
          return;
        }
        let child = children[0];
        if (children.length > 1) {
          let hasFound = false;
          for (const c of children) {
            if (c.type !== Comment) {
              if (hasFound) {
                warn$1(
                  "<transition> can only be used on a single element or component. Use <transition-group> for lists."
                );
                break;
              }
              child = c;
              hasFound = true;
              if (false)
                break;
            }
          }
        }
        const rawProps = toRaw(props);
        const { mode } = rawProps;
        if (mode && mode !== "in-out" && mode !== "out-in" && mode !== "default") {
          warn$1(`invalid <transition> mode: ${mode}`);
        }
        if (state.isLeaving) {
          return emptyPlaceholder(child);
        }
        const innerChild = getKeepAliveChild(child);
        if (!innerChild) {
          return emptyPlaceholder(child);
        }
        const enterHooks = resolveTransitionHooks(
          innerChild,
          rawProps,
          state,
          instance
        );
        setTransitionHooks(innerChild, enterHooks);
        const oldChild = instance.subTree;
        const oldInnerChild = oldChild && getKeepAliveChild(oldChild);
        if (oldInnerChild && oldInnerChild.type !== Comment && !isSameVNodeType(innerChild, oldInnerChild)) {
          const leavingHooks = resolveTransitionHooks(
            oldInnerChild,
            rawProps,
            state,
            instance
          );
          setTransitionHooks(oldInnerChild, leavingHooks);
          if (mode === "out-in" && innerChild.type !== Comment) {
            state.isLeaving = true;
            leavingHooks.afterLeave = () => {
              state.isLeaving = false;
              if (instance.update.active !== false) {
                instance.effect.dirty = true;
                instance.update();
              }
            };
            return emptyPlaceholder(child);
          } else if (mode === "in-out" && innerChild.type !== Comment) {
            leavingHooks.delayLeave = (el, earlyRemove, delayedLeave) => {
              const leavingVNodesCache = getLeavingNodesForType(
                state,
                oldInnerChild
              );
              leavingVNodesCache[String(oldInnerChild.key)] = oldInnerChild;
              el[leaveCbKey] = () => {
                earlyRemove();
                el[leaveCbKey] = void 0;
                delete enterHooks.delayedLeave;
              };
              enterHooks.delayedLeave = delayedLeave;
            };
          }
        }
        return child;
      };
    }
  };
  var BaseTransition = BaseTransitionImpl;
  function getLeavingNodesForType(state, vnode) {
    const { leavingVNodes } = state;
    let leavingVNodesCache = leavingVNodes.get(vnode.type);
    if (!leavingVNodesCache) {
      leavingVNodesCache = /* @__PURE__ */ Object.create(null);
      leavingVNodes.set(vnode.type, leavingVNodesCache);
    }
    return leavingVNodesCache;
  }
  function resolveTransitionHooks(vnode, props, state, instance) {
    const {
      appear,
      mode,
      persisted = false,
      onBeforeEnter,
      onEnter,
      onAfterEnter,
      onEnterCancelled,
      onBeforeLeave,
      onLeave,
      onAfterLeave,
      onLeaveCancelled,
      onBeforeAppear,
      onAppear,
      onAfterAppear,
      onAppearCancelled
    } = props;
    const key = String(vnode.key);
    const leavingVNodesCache = getLeavingNodesForType(state, vnode);
    const callHook3 = (hook, args) => {
      hook && callWithAsyncErrorHandling(
        hook,
        instance,
        9,
        args
      );
    };
    const callAsyncHook = (hook, args) => {
      const done = args[1];
      callHook3(hook, args);
      if (isArray(hook)) {
        if (hook.every((hook2) => hook2.length <= 1))
          done();
      } else if (hook.length <= 1) {
        done();
      }
    };
    const hooks = {
      mode,
      persisted,
      beforeEnter(el) {
        let hook = onBeforeEnter;
        if (!state.isMounted) {
          if (appear) {
            hook = onBeforeAppear || onBeforeEnter;
          } else {
            return;
          }
        }
        if (el[leaveCbKey]) {
          el[leaveCbKey](
            true
            /* cancelled */
          );
        }
        const leavingVNode = leavingVNodesCache[key];
        if (leavingVNode && isSameVNodeType(vnode, leavingVNode) && leavingVNode.el[leaveCbKey]) {
          leavingVNode.el[leaveCbKey]();
        }
        callHook3(hook, [el]);
      },
      enter(el) {
        let hook = onEnter;
        let afterHook = onAfterEnter;
        let cancelHook = onEnterCancelled;
        if (!state.isMounted) {
          if (appear) {
            hook = onAppear || onEnter;
            afterHook = onAfterAppear || onAfterEnter;
            cancelHook = onAppearCancelled || onEnterCancelled;
          } else {
            return;
          }
        }
        let called = false;
        const done = el[enterCbKey] = (cancelled) => {
          if (called)
            return;
          called = true;
          if (cancelled) {
            callHook3(cancelHook, [el]);
          } else {
            callHook3(afterHook, [el]);
          }
          if (hooks.delayedLeave) {
            hooks.delayedLeave();
          }
          el[enterCbKey] = void 0;
        };
        if (hook) {
          callAsyncHook(hook, [el, done]);
        } else {
          done();
        }
      },
      leave(el, remove2) {
        const key2 = String(vnode.key);
        if (el[enterCbKey]) {
          el[enterCbKey](
            true
            /* cancelled */
          );
        }
        if (state.isUnmounting) {
          return remove2();
        }
        callHook3(onBeforeLeave, [el]);
        let called = false;
        const done = el[leaveCbKey] = (cancelled) => {
          if (called)
            return;
          called = true;
          remove2();
          if (cancelled) {
            callHook3(onLeaveCancelled, [el]);
          } else {
            callHook3(onAfterLeave, [el]);
          }
          el[leaveCbKey] = void 0;
          if (leavingVNodesCache[key2] === vnode) {
            delete leavingVNodesCache[key2];
          }
        };
        leavingVNodesCache[key2] = vnode;
        if (onLeave) {
          callAsyncHook(onLeave, [el, done]);
        } else {
          done();
        }
      },
      clone(vnode2) {
        return resolveTransitionHooks(vnode2, props, state, instance);
      }
    };
    return hooks;
  }
  function emptyPlaceholder(vnode) {
    if (isKeepAlive(vnode)) {
      vnode = cloneVNode(vnode);
      vnode.children = null;
      return vnode;
    }
  }
  function getKeepAliveChild(vnode) {
    if (!isKeepAlive(vnode)) {
      return vnode;
    }
    if (vnode.component) {
      return vnode.component.subTree;
    }
    const { shapeFlag, children } = vnode;
    if (children) {
      if (shapeFlag & 16) {
        return children[0];
      }
      if (shapeFlag & 32 && isFunction2(children.default)) {
        return children.default();
      }
    }
  }
  function setTransitionHooks(vnode, hooks) {
    if (vnode.shapeFlag & 6 && vnode.component) {
      setTransitionHooks(vnode.component.subTree, hooks);
    } else if (vnode.shapeFlag & 128) {
      vnode.ssContent.transition = hooks.clone(vnode.ssContent);
      vnode.ssFallback.transition = hooks.clone(vnode.ssFallback);
    } else {
      vnode.transition = hooks;
    }
  }
  function getTransitionRawChildren(children, keepComment = false, parentKey) {
    let ret = [];
    let keyedFragmentCount = 0;
    for (let i = 0; i < children.length; i++) {
      let child = children[i];
      const key = parentKey == null ? child.key : String(parentKey) + String(child.key != null ? child.key : i);
      if (child.type === Fragment) {
        if (child.patchFlag & 128)
          keyedFragmentCount++;
        ret = ret.concat(
          getTransitionRawChildren(child.children, keepComment, key)
        );
      } else if (keepComment || child.type !== Comment) {
        ret.push(key != null ? cloneVNode(child, { key }) : child);
      }
    }
    if (keyedFragmentCount > 1) {
      for (let i = 0; i < ret.length; i++) {
        ret[i].patchFlag = -2;
      }
    }
    return ret;
  }
  // @__NO_SIDE_EFFECTS__
  function defineComponent(options, extraOptions) {
    return isFunction2(options) ? (
      // #8326: extend call and options.name access are considered side-effects
      // by Rollup, so we have to wrap it in a pure-annotated IIFE.
      /* @__PURE__ */ (() => extend({ name: options.name }, extraOptions, { setup: options }))()
    ) : options;
  }
  var isAsyncWrapper = (i) => !!i.type.__asyncLoader;
  var isKeepAlive = (vnode) => vnode.type.__isKeepAlive;
  function onActivated(hook, target) {
    registerKeepAliveHook(hook, "a", target);
  }
  function onDeactivated(hook, target) {
    registerKeepAliveHook(hook, "da", target);
  }
  function registerKeepAliveHook(hook, type, target = currentInstance) {
    const wrappedHook = hook.__wdc || (hook.__wdc = () => {
      let current = target;
      while (current) {
        if (current.isDeactivated) {
          return;
        }
        current = current.parent;
      }
      return hook();
    });
    injectHook(type, wrappedHook, target);
    if (target) {
      let current = target.parent;
      while (current && current.parent) {
        if (isKeepAlive(current.parent.vnode)) {
          injectToKeepAliveRoot(wrappedHook, type, target, current);
        }
        current = current.parent;
      }
    }
  }
  function injectToKeepAliveRoot(hook, type, target, keepAliveRoot) {
    const injected = injectHook(
      type,
      hook,
      keepAliveRoot,
      true
      /* prepend */
    );
    onUnmounted(() => {
      remove(keepAliveRoot[type], injected);
    }, target);
  }
  function injectHook(type, hook, target = currentInstance, prepend = false) {
    if (target) {
      const hooks = target[type] || (target[type] = []);
      const wrappedHook = hook.__weh || (hook.__weh = (...args) => {
        if (target.isUnmounted) {
          return;
        }
        pauseTracking();
        const reset = setCurrentInstance(target);
        const res = callWithAsyncErrorHandling(hook, target, type, args);
        reset();
        resetTracking();
        return res;
      });
      if (prepend) {
        hooks.unshift(wrappedHook);
      } else {
        hooks.push(wrappedHook);
      }
      return wrappedHook;
    } else if (true) {
      const apiName = toHandlerKey(ErrorTypeStrings$1[type].replace(/ hook$/, ""));
      warn$1(
        `${apiName} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
      );
    }
  }
  var createHook = (lifecycle) => (hook, target = currentInstance) => (
    // post-create lifecycle registrations are noops during SSR (except for serverPrefetch)
    (!isInSSRComponentSetup || lifecycle === "sp") && injectHook(lifecycle, (...args) => hook(...args), target)
  );
  var onBeforeMount = createHook("bm");
  var onMounted = createHook("m");
  var onBeforeUpdate = createHook("bu");
  var onUpdated = createHook("u");
  var onBeforeUnmount = createHook("bum");
  var onUnmounted = createHook("um");
  var onServerPrefetch = createHook("sp");
  var onRenderTriggered = createHook(
    "rtg"
  );
  var onRenderTracked = createHook(
    "rtc"
  );
  function onErrorCaptured(hook, target = currentInstance) {
    injectHook("ec", hook, target);
  }
  function renderList(source, renderItem, cache, index) {
    let ret;
    const cached = cache && cache[index];
    if (isArray(source) || isString(source)) {
      ret = new Array(source.length);
      for (let i = 0, l = source.length; i < l; i++) {
        ret[i] = renderItem(source[i], i, void 0, cached && cached[i]);
      }
    } else if (typeof source === "number") {
      if (!Number.isInteger(source)) {
        warn$1(`The v-for range expect an integer value but got ${source}.`);
      }
      ret = new Array(source);
      for (let i = 0; i < source; i++) {
        ret[i] = renderItem(i + 1, i, void 0, cached && cached[i]);
      }
    } else if (isObject(source)) {
      if (source[Symbol.iterator]) {
        ret = Array.from(
          source,
          (item, i) => renderItem(item, i, void 0, cached && cached[i])
        );
      } else {
        const keys = Object.keys(source);
        ret = new Array(keys.length);
        for (let i = 0, l = keys.length; i < l; i++) {
          const key = keys[i];
          ret[i] = renderItem(source[key], key, i, cached && cached[i]);
        }
      }
    } else {
      ret = [];
    }
    if (cache) {
      cache[index] = ret;
    }
    return ret;
  }
  var getPublicInstance = (i) => {
    if (!i)
      return null;
    if (isStatefulComponent(i))
      return getExposeProxy(i) || i.proxy;
    return getPublicInstance(i.parent);
  };
  var publicPropertiesMap = (
    // Move PURE marker to new line to workaround compiler discarding it
    // due to type annotation
    /* @__PURE__ */ extend(/* @__PURE__ */ Object.create(null), {
      $: (i) => i,
      $el: (i) => i.vnode.el,
      $data: (i) => i.data,
      $props: (i) => true ? shallowReadonly(i.props) : i.props,
      $attrs: (i) => true ? shallowReadonly(i.attrs) : i.attrs,
      $slots: (i) => true ? shallowReadonly(i.slots) : i.slots,
      $refs: (i) => true ? shallowReadonly(i.refs) : i.refs,
      $parent: (i) => getPublicInstance(i.parent),
      $root: (i) => getPublicInstance(i.root),
      $emit: (i) => i.emit,
      $options: (i) => true ? resolveMergedOptions(i) : i.type,
      $forceUpdate: (i) => i.f || (i.f = () => {
        i.effect.dirty = true;
        queueJob(i.update);
      }),
      $nextTick: (i) => i.n || (i.n = nextTick.bind(i.proxy)),
      $watch: (i) => true ? instanceWatch.bind(i) : NOOP
    })
  );
  var isReservedPrefix = (key) => key === "_" || key === "$";
  var hasSetupBinding = (state, key) => state !== EMPTY_OBJ && !state.__isScriptSetup && hasOwn(state, key);
  var PublicInstanceProxyHandlers = {
    get({ _: instance }, key) {
      if (key === "__v_skip") {
        return true;
      }
      const { ctx, setupState, data, props, accessCache, type, appContext } = instance;
      if (key === "__isVue") {
        return true;
      }
      let normalizedProps;
      if (key[0] !== "$") {
        const n = accessCache[key];
        if (n !== void 0) {
          switch (n) {
            case 1:
              return setupState[key];
            case 2:
              return data[key];
            case 4:
              return ctx[key];
            case 3:
              return props[key];
          }
        } else if (hasSetupBinding(setupState, key)) {
          accessCache[key] = 1;
          return setupState[key];
        } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
          accessCache[key] = 2;
          return data[key];
        } else if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (normalizedProps = instance.propsOptions[0]) && hasOwn(normalizedProps, key)
        ) {
          accessCache[key] = 3;
          return props[key];
        } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
          accessCache[key] = 4;
          return ctx[key];
        } else if (shouldCacheAccess) {
          accessCache[key] = 0;
        }
      }
      const publicGetter = publicPropertiesMap[key];
      let cssModule, globalProperties;
      if (publicGetter) {
        if (key === "$attrs") {
          track(instance.attrs, "get", "");
          markAttrsAccessed();
        } else if (key === "$slots") {
          track(instance, "get", key);
        }
        return publicGetter(instance);
      } else if (
        // css module (injected by vue-loader)
        (cssModule = type.__cssModules) && (cssModule = cssModule[key])
      ) {
        return cssModule;
      } else if (ctx !== EMPTY_OBJ && hasOwn(ctx, key)) {
        accessCache[key] = 4;
        return ctx[key];
      } else if (
        // global properties
        globalProperties = appContext.config.globalProperties, hasOwn(globalProperties, key)
      ) {
        {
          return globalProperties[key];
        }
      } else if (currentRenderingInstance && (!isString(key) || // #1091 avoid internal isRef/isVNode checks on component instance leading
      // to infinite warning loop
      key.indexOf("__v") !== 0)) {
        if (data !== EMPTY_OBJ && isReservedPrefix(key[0]) && hasOwn(data, key)) {
          warn$1(
            `Property ${JSON.stringify(
              key
            )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
          );
        } else if (instance === currentRenderingInstance) {
          warn$1(
            `Property ${JSON.stringify(key)} was accessed during render but is not defined on instance.`
          );
        }
      }
    },
    set({ _: instance }, key, value) {
      const { data, setupState, ctx } = instance;
      if (hasSetupBinding(setupState, key)) {
        setupState[key] = value;
        return true;
      } else if (setupState.__isScriptSetup && hasOwn(setupState, key)) {
        warn$1(`Cannot mutate <script setup> binding "${key}" from Options API.`);
        return false;
      } else if (data !== EMPTY_OBJ && hasOwn(data, key)) {
        data[key] = value;
        return true;
      } else if (hasOwn(instance.props, key)) {
        warn$1(`Attempting to mutate prop "${key}". Props are readonly.`);
        return false;
      }
      if (key[0] === "$" && key.slice(1) in instance) {
        warn$1(
          `Attempting to mutate public property "${key}". Properties starting with $ are reserved and readonly.`
        );
        return false;
      } else {
        if (key in instance.appContext.config.globalProperties) {
          Object.defineProperty(ctx, key, {
            enumerable: true,
            configurable: true,
            value
          });
        } else {
          ctx[key] = value;
        }
      }
      return true;
    },
    has({
      _: { data, setupState, accessCache, ctx, appContext, propsOptions }
    }, key) {
      let normalizedProps;
      return !!accessCache[key] || data !== EMPTY_OBJ && hasOwn(data, key) || hasSetupBinding(setupState, key) || (normalizedProps = propsOptions[0]) && hasOwn(normalizedProps, key) || hasOwn(ctx, key) || hasOwn(publicPropertiesMap, key) || hasOwn(appContext.config.globalProperties, key);
    },
    defineProperty(target, key, descriptor) {
      if (descriptor.get != null) {
        target._.accessCache[key] = 0;
      } else if (hasOwn(descriptor, "value")) {
        this.set(target, key, descriptor.value, null);
      }
      return Reflect.defineProperty(target, key, descriptor);
    }
  };
  if (true) {
    PublicInstanceProxyHandlers.ownKeys = (target) => {
      warn$1(
        `Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`
      );
      return Reflect.ownKeys(target);
    };
  }
  function createDevRenderContext(instance) {
    const target = {};
    Object.defineProperty(target, `_`, {
      configurable: true,
      enumerable: false,
      get: () => instance
    });
    Object.keys(publicPropertiesMap).forEach((key) => {
      Object.defineProperty(target, key, {
        configurable: true,
        enumerable: false,
        get: () => publicPropertiesMap[key](instance),
        // intercepted by the proxy so no need for implementation,
        // but needed to prevent set errors
        set: NOOP
      });
    });
    return target;
  }
  function exposePropsOnRenderContext(instance) {
    const {
      ctx,
      propsOptions: [propsOptions]
    } = instance;
    if (propsOptions) {
      Object.keys(propsOptions).forEach((key) => {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => instance.props[key],
          set: NOOP
        });
      });
    }
  }
  function exposeSetupStateOnRenderContext(instance) {
    const { ctx, setupState } = instance;
    Object.keys(toRaw(setupState)).forEach((key) => {
      if (!setupState.__isScriptSetup) {
        if (isReservedPrefix(key[0])) {
          warn$1(
            `setup() return property ${JSON.stringify(
              key
            )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
          );
          return;
        }
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => setupState[key],
          set: NOOP
        });
      }
    });
  }
  function normalizePropsOrEmits(props) {
    return isArray(props) ? props.reduce(
      (normalized, p2) => (normalized[p2] = null, normalized),
      {}
    ) : props;
  }
  function createDuplicateChecker() {
    const cache = /* @__PURE__ */ Object.create(null);
    return (type, key) => {
      if (cache[key]) {
        warn$1(`${type} property "${key}" is already defined in ${cache[key]}.`);
      } else {
        cache[key] = type;
      }
    };
  }
  var shouldCacheAccess = true;
  function applyOptions(instance) {
    const options = resolveMergedOptions(instance);
    const publicThis = instance.proxy;
    const ctx = instance.ctx;
    shouldCacheAccess = false;
    if (options.beforeCreate) {
      callHook(options.beforeCreate, instance, "bc");
    }
    const {
      // state
      data: dataOptions,
      computed: computedOptions,
      methods,
      watch: watchOptions,
      provide: provideOptions,
      inject: injectOptions,
      // lifecycle
      created,
      beforeMount,
      mounted,
      beforeUpdate,
      updated,
      activated,
      deactivated,
      beforeDestroy,
      beforeUnmount,
      destroyed,
      unmounted,
      render: render2,
      renderTracked,
      renderTriggered,
      errorCaptured,
      serverPrefetch,
      // public API
      expose,
      inheritAttrs,
      // assets
      components,
      directives,
      filters
    } = options;
    const checkDuplicateProperties = true ? createDuplicateChecker() : null;
    if (true) {
      const [propsOptions] = instance.propsOptions;
      if (propsOptions) {
        for (const key in propsOptions) {
          checkDuplicateProperties("Props", key);
        }
      }
    }
    if (injectOptions) {
      resolveInjections(injectOptions, ctx, checkDuplicateProperties);
    }
    if (methods) {
      for (const key in methods) {
        const methodHandler = methods[key];
        if (isFunction2(methodHandler)) {
          if (true) {
            Object.defineProperty(ctx, key, {
              value: methodHandler.bind(publicThis),
              configurable: true,
              enumerable: true,
              writable: true
            });
          } else {
            ctx[key] = methodHandler.bind(publicThis);
          }
          if (true) {
            checkDuplicateProperties("Methods", key);
          }
        } else if (true) {
          warn$1(
            `Method "${key}" has type "${typeof methodHandler}" in the component definition. Did you reference the function correctly?`
          );
        }
      }
    }
    if (dataOptions) {
      if (!isFunction2(dataOptions)) {
        warn$1(
          `The data option must be a function. Plain object usage is no longer supported.`
        );
      }
      const data = dataOptions.call(publicThis, publicThis);
      if (isPromise(data)) {
        warn$1(
          `data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>.`
        );
      }
      if (!isObject(data)) {
        warn$1(`data() should return an object.`);
      } else {
        instance.data = reactive(data);
        if (true) {
          for (const key in data) {
            checkDuplicateProperties("Data", key);
            if (!isReservedPrefix(key[0])) {
              Object.defineProperty(ctx, key, {
                configurable: true,
                enumerable: true,
                get: () => data[key],
                set: NOOP
              });
            }
          }
        }
      }
    }
    shouldCacheAccess = true;
    if (computedOptions) {
      for (const key in computedOptions) {
        const opt = computedOptions[key];
        const get2 = isFunction2(opt) ? opt.bind(publicThis, publicThis) : isFunction2(opt.get) ? opt.get.bind(publicThis, publicThis) : NOOP;
        if (get2 === NOOP) {
          warn$1(`Computed property "${key}" has no getter.`);
        }
        const set2 = !isFunction2(opt) && isFunction2(opt.set) ? opt.set.bind(publicThis) : true ? () => {
          warn$1(
            `Write operation failed: computed property "${key}" is readonly.`
          );
        } : NOOP;
        const c = computed2({
          get: get2,
          set: set2
        });
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => c.value,
          set: (v) => c.value = v
        });
        if (true) {
          checkDuplicateProperties("Computed", key);
        }
      }
    }
    if (watchOptions) {
      for (const key in watchOptions) {
        createWatcher(watchOptions[key], ctx, publicThis, key);
      }
    }
    if (provideOptions) {
      const provides = isFunction2(provideOptions) ? provideOptions.call(publicThis) : provideOptions;
      Reflect.ownKeys(provides).forEach((key) => {
        provide(key, provides[key]);
      });
    }
    if (created) {
      callHook(created, instance, "c");
    }
    function registerLifecycleHook(register, hook) {
      if (isArray(hook)) {
        hook.forEach((_hook) => register(_hook.bind(publicThis)));
      } else if (hook) {
        register(hook.bind(publicThis));
      }
    }
    registerLifecycleHook(onBeforeMount, beforeMount);
    registerLifecycleHook(onMounted, mounted);
    registerLifecycleHook(onBeforeUpdate, beforeUpdate);
    registerLifecycleHook(onUpdated, updated);
    registerLifecycleHook(onActivated, activated);
    registerLifecycleHook(onDeactivated, deactivated);
    registerLifecycleHook(onErrorCaptured, errorCaptured);
    registerLifecycleHook(onRenderTracked, renderTracked);
    registerLifecycleHook(onRenderTriggered, renderTriggered);
    registerLifecycleHook(onBeforeUnmount, beforeUnmount);
    registerLifecycleHook(onUnmounted, unmounted);
    registerLifecycleHook(onServerPrefetch, serverPrefetch);
    if (isArray(expose)) {
      if (expose.length) {
        const exposed = instance.exposed || (instance.exposed = {});
        expose.forEach((key) => {
          Object.defineProperty(exposed, key, {
            get: () => publicThis[key],
            set: (val) => publicThis[key] = val
          });
        });
      } else if (!instance.exposed) {
        instance.exposed = {};
      }
    }
    if (render2 && instance.render === NOOP) {
      instance.render = render2;
    }
    if (inheritAttrs != null) {
      instance.inheritAttrs = inheritAttrs;
    }
    if (components)
      instance.components = components;
    if (directives)
      instance.directives = directives;
  }
  function resolveInjections(injectOptions, ctx, checkDuplicateProperties = NOOP) {
    if (isArray(injectOptions)) {
      injectOptions = normalizeInject(injectOptions);
    }
    for (const key in injectOptions) {
      const opt = injectOptions[key];
      let injected;
      if (isObject(opt)) {
        if ("default" in opt) {
          injected = inject(
            opt.from || key,
            opt.default,
            true
          );
        } else {
          injected = inject(opt.from || key);
        }
      } else {
        injected = inject(opt);
      }
      if (isRef(injected)) {
        Object.defineProperty(ctx, key, {
          enumerable: true,
          configurable: true,
          get: () => injected.value,
          set: (v) => injected.value = v
        });
      } else {
        ctx[key] = injected;
      }
      if (true) {
        checkDuplicateProperties("Inject", key);
      }
    }
  }
  function callHook(hook, instance, type) {
    callWithAsyncErrorHandling(
      isArray(hook) ? hook.map((h2) => h2.bind(instance.proxy)) : hook.bind(instance.proxy),
      instance,
      type
    );
  }
  function createWatcher(raw, ctx, publicThis, key) {
    const getter = key.includes(".") ? createPathGetter(publicThis, key) : () => publicThis[key];
    if (isString(raw)) {
      const handler = ctx[raw];
      if (isFunction2(handler)) {
        watch(getter, handler);
      } else if (true) {
        warn$1(`Invalid watch handler specified by key "${raw}"`, handler);
      }
    } else if (isFunction2(raw)) {
      watch(getter, raw.bind(publicThis));
    } else if (isObject(raw)) {
      if (isArray(raw)) {
        raw.forEach((r) => createWatcher(r, ctx, publicThis, key));
      } else {
        const handler = isFunction2(raw.handler) ? raw.handler.bind(publicThis) : ctx[raw.handler];
        if (isFunction2(handler)) {
          watch(getter, handler, raw);
        } else if (true) {
          warn$1(`Invalid watch handler specified by key "${raw.handler}"`, handler);
        }
      }
    } else if (true) {
      warn$1(`Invalid watch option: "${key}"`, raw);
    }
  }
  function resolveMergedOptions(instance) {
    const base = instance.type;
    const { mixins, extends: extendsOptions } = base;
    const {
      mixins: globalMixins,
      optionsCache: cache,
      config: { optionMergeStrategies }
    } = instance.appContext;
    const cached = cache.get(base);
    let resolved;
    if (cached) {
      resolved = cached;
    } else if (!globalMixins.length && !mixins && !extendsOptions) {
      {
        resolved = base;
      }
    } else {
      resolved = {};
      if (globalMixins.length) {
        globalMixins.forEach(
          (m) => mergeOptions(resolved, m, optionMergeStrategies, true)
        );
      }
      mergeOptions(resolved, base, optionMergeStrategies);
    }
    if (isObject(base)) {
      cache.set(base, resolved);
    }
    return resolved;
  }
  function mergeOptions(to, from, strats, asMixin = false) {
    const { mixins, extends: extendsOptions } = from;
    if (extendsOptions) {
      mergeOptions(to, extendsOptions, strats, true);
    }
    if (mixins) {
      mixins.forEach(
        (m) => mergeOptions(to, m, strats, true)
      );
    }
    for (const key in from) {
      if (asMixin && key === "expose") {
        warn$1(
          `"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.`
        );
      } else {
        const strat = internalOptionMergeStrats[key] || strats && strats[key];
        to[key] = strat ? strat(to[key], from[key]) : from[key];
      }
    }
    return to;
  }
  var internalOptionMergeStrats = {
    data: mergeDataFn,
    props: mergeEmitsOrPropsOptions,
    emits: mergeEmitsOrPropsOptions,
    // objects
    methods: mergeObjectOptions,
    computed: mergeObjectOptions,
    // lifecycle
    beforeCreate: mergeAsArray,
    created: mergeAsArray,
    beforeMount: mergeAsArray,
    mounted: mergeAsArray,
    beforeUpdate: mergeAsArray,
    updated: mergeAsArray,
    beforeDestroy: mergeAsArray,
    beforeUnmount: mergeAsArray,
    destroyed: mergeAsArray,
    unmounted: mergeAsArray,
    activated: mergeAsArray,
    deactivated: mergeAsArray,
    errorCaptured: mergeAsArray,
    serverPrefetch: mergeAsArray,
    // assets
    components: mergeObjectOptions,
    directives: mergeObjectOptions,
    // watch
    watch: mergeWatchOptions,
    // provide / inject
    provide: mergeDataFn,
    inject: mergeInject
  };
  function mergeDataFn(to, from) {
    if (!from) {
      return to;
    }
    if (!to) {
      return from;
    }
    return function mergedDataFn() {
      return extend(
        isFunction2(to) ? to.call(this, this) : to,
        isFunction2(from) ? from.call(this, this) : from
      );
    };
  }
  function mergeInject(to, from) {
    return mergeObjectOptions(normalizeInject(to), normalizeInject(from));
  }
  function normalizeInject(raw) {
    if (isArray(raw)) {
      const res = {};
      for (let i = 0; i < raw.length; i++) {
        res[raw[i]] = raw[i];
      }
      return res;
    }
    return raw;
  }
  function mergeAsArray(to, from) {
    return to ? [...new Set([].concat(to, from))] : from;
  }
  function mergeObjectOptions(to, from) {
    return to ? extend(/* @__PURE__ */ Object.create(null), to, from) : from;
  }
  function mergeEmitsOrPropsOptions(to, from) {
    if (to) {
      if (isArray(to) && isArray(from)) {
        return [.../* @__PURE__ */ new Set([...to, ...from])];
      }
      return extend(
        /* @__PURE__ */ Object.create(null),
        normalizePropsOrEmits(to),
        normalizePropsOrEmits(from != null ? from : {})
      );
    } else {
      return from;
    }
  }
  function mergeWatchOptions(to, from) {
    if (!to)
      return from;
    if (!from)
      return to;
    const merged = extend(/* @__PURE__ */ Object.create(null), to);
    for (const key in from) {
      merged[key] = mergeAsArray(to[key], from[key]);
    }
    return merged;
  }
  function createAppContext() {
    return {
      app: null,
      config: {
        isNativeTag: NO,
        performance: false,
        globalProperties: {},
        optionMergeStrategies: {},
        errorHandler: void 0,
        warnHandler: void 0,
        compilerOptions: {}
      },
      mixins: [],
      components: {},
      directives: {},
      provides: /* @__PURE__ */ Object.create(null),
      optionsCache: /* @__PURE__ */ new WeakMap(),
      propsCache: /* @__PURE__ */ new WeakMap(),
      emitsCache: /* @__PURE__ */ new WeakMap()
    };
  }
  var uid$1 = 0;
  function createAppAPI(render2, hydrate) {
    return function createApp2(rootComponent, rootProps = null) {
      if (!isFunction2(rootComponent)) {
        rootComponent = extend({}, rootComponent);
      }
      if (rootProps != null && !isObject(rootProps)) {
        warn$1(`root props passed to app.mount() must be an object.`);
        rootProps = null;
      }
      const context = createAppContext();
      const installedPlugins = /* @__PURE__ */ new WeakSet();
      let isMounted = false;
      const app = context.app = {
        _uid: uid$1++,
        _component: rootComponent,
        _props: rootProps,
        _container: null,
        _context: context,
        _instance: null,
        version,
        get config() {
          return context.config;
        },
        set config(v) {
          if (true) {
            warn$1(
              `app.config cannot be replaced. Modify individual options instead.`
            );
          }
        },
        use(plugin, ...options) {
          if (installedPlugins.has(plugin)) {
            warn$1(`Plugin has already been applied to target app.`);
          } else if (plugin && isFunction2(plugin.install)) {
            installedPlugins.add(plugin);
            plugin.install(app, ...options);
          } else if (isFunction2(plugin)) {
            installedPlugins.add(plugin);
            plugin(app, ...options);
          } else if (true) {
            warn$1(
              `A plugin must either be a function or an object with an "install" function.`
            );
          }
          return app;
        },
        mixin(mixin) {
          if (true) {
            if (!context.mixins.includes(mixin)) {
              context.mixins.push(mixin);
            } else if (true) {
              warn$1(
                "Mixin has already been applied to target app" + (mixin.name ? `: ${mixin.name}` : "")
              );
            }
          } else if (true) {
            warn$1("Mixins are only available in builds supporting Options API");
          }
          return app;
        },
        component(name, component) {
          if (true) {
            validateComponentName(name, context.config);
          }
          if (!component) {
            return context.components[name];
          }
          if (context.components[name]) {
            warn$1(`Component "${name}" has already been registered in target app.`);
          }
          context.components[name] = component;
          return app;
        },
        directive(name, directive) {
          if (true) {
            validateDirectiveName(name);
          }
          if (!directive) {
            return context.directives[name];
          }
          if (context.directives[name]) {
            warn$1(`Directive "${name}" has already been registered in target app.`);
          }
          context.directives[name] = directive;
          return app;
        },
        mount(rootContainer, isHydrate, namespace) {
          if (!isMounted) {
            if (rootContainer.__vue_app__) {
              warn$1(
                `There is already an app instance mounted on the host container.
 If you want to mount another app on the same host container, you need to unmount the previous app by calling \`app.unmount()\` first.`
              );
            }
            const vnode = createVNode(rootComponent, rootProps);
            vnode.appContext = context;
            if (namespace === true) {
              namespace = "svg";
            } else if (namespace === false) {
              namespace = void 0;
            }
            if (true) {
              context.reload = () => {
                render2(
                  cloneVNode(vnode),
                  rootContainer,
                  namespace
                );
              };
            }
            if (isHydrate && hydrate) {
              hydrate(vnode, rootContainer);
            } else {
              render2(vnode, rootContainer, namespace);
            }
            isMounted = true;
            app._container = rootContainer;
            rootContainer.__vue_app__ = app;
            if (true) {
              app._instance = vnode.component;
              devtoolsInitApp(app, version);
            }
            return getExposeProxy(vnode.component) || vnode.component.proxy;
          } else if (true) {
            warn$1(
              `App has already been mounted.
If you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. \`const createMyApp = () => createApp(App)\``
            );
          }
        },
        unmount() {
          if (isMounted) {
            render2(null, app._container);
            if (true) {
              app._instance = null;
              devtoolsUnmountApp(app);
            }
            delete app._container.__vue_app__;
          } else if (true) {
            warn$1(`Cannot unmount an app that is not mounted.`);
          }
        },
        provide(key, value) {
          if (key in context.provides) {
            warn$1(
              `App already provides property with key "${String(key)}". It will be overwritten with the new value.`
            );
          }
          context.provides[key] = value;
          return app;
        },
        runWithContext(fn) {
          const lastApp = currentApp;
          currentApp = app;
          try {
            return fn();
          } finally {
            currentApp = lastApp;
          }
        }
      };
      return app;
    };
  }
  var currentApp = null;
  function provide(key, value) {
    if (!currentInstance) {
      if (true) {
        warn$1(`provide() can only be used inside setup().`);
      }
    } else {
      let provides = currentInstance.provides;
      const parentProvides = currentInstance.parent && currentInstance.parent.provides;
      if (parentProvides === provides) {
        provides = currentInstance.provides = Object.create(parentProvides);
      }
      provides[key] = value;
    }
  }
  function inject(key, defaultValue, treatDefaultAsFactory = false) {
    const instance = currentInstance || currentRenderingInstance;
    if (instance || currentApp) {
      const provides = instance ? instance.parent == null ? instance.vnode.appContext && instance.vnode.appContext.provides : instance.parent.provides : currentApp._context.provides;
      if (provides && key in provides) {
        return provides[key];
      } else if (arguments.length > 1) {
        return treatDefaultAsFactory && isFunction2(defaultValue) ? defaultValue.call(instance && instance.proxy) : defaultValue;
      } else if (true) {
        warn$1(`injection "${String(key)}" not found.`);
      }
    } else if (true) {
      warn$1(`inject() can only be used inside setup() or functional components.`);
    }
  }
  var internalObjectProto = {};
  var createInternalObject = () => Object.create(internalObjectProto);
  var isInternalObject = (obj) => Object.getPrototypeOf(obj) === internalObjectProto;
  function initProps(instance, rawProps, isStateful, isSSR = false) {
    const props = {};
    const attrs = createInternalObject();
    instance.propsDefaults = /* @__PURE__ */ Object.create(null);
    setFullProps(instance, rawProps, props, attrs);
    for (const key in instance.propsOptions[0]) {
      if (!(key in props)) {
        props[key] = void 0;
      }
    }
    if (true) {
      validateProps(rawProps || {}, props, instance);
    }
    if (isStateful) {
      instance.props = isSSR ? props : shallowReactive(props);
    } else {
      if (!instance.type.props) {
        instance.props = attrs;
      } else {
        instance.props = props;
      }
    }
    instance.attrs = attrs;
  }
  function isInHmrContext(instance) {
    while (instance) {
      if (instance.type.__hmrId)
        return true;
      instance = instance.parent;
    }
  }
  function updateProps(instance, rawProps, rawPrevProps, optimized) {
    const {
      props,
      attrs,
      vnode: { patchFlag }
    } = instance;
    const rawCurrentProps = toRaw(props);
    const [options] = instance.propsOptions;
    let hasAttrsChanged = false;
    if (
      // always force full diff in dev
      // - #1942 if hmr is enabled with sfc component
      // - vite#872 non-sfc component used by sfc component
      !isInHmrContext(instance) && (optimized || patchFlag > 0) && !(patchFlag & 16)
    ) {
      if (patchFlag & 8) {
        const propsToUpdate = instance.vnode.dynamicProps;
        for (let i = 0; i < propsToUpdate.length; i++) {
          let key = propsToUpdate[i];
          if (isEmitListener(instance.emitsOptions, key)) {
            continue;
          }
          const value = rawProps[key];
          if (options) {
            if (hasOwn(attrs, key)) {
              if (value !== attrs[key]) {
                attrs[key] = value;
                hasAttrsChanged = true;
              }
            } else {
              const camelizedKey = camelize(key);
              props[camelizedKey] = resolvePropValue(
                options,
                rawCurrentProps,
                camelizedKey,
                value,
                instance,
                false
              );
            }
          } else {
            if (value !== attrs[key]) {
              attrs[key] = value;
              hasAttrsChanged = true;
            }
          }
        }
      }
    } else {
      if (setFullProps(instance, rawProps, props, attrs)) {
        hasAttrsChanged = true;
      }
      let kebabKey;
      for (const key in rawCurrentProps) {
        if (!rawProps || // for camelCase
        !hasOwn(rawProps, key) && // it's possible the original props was passed in as kebab-case
        // and converted to camelCase (#955)
        ((kebabKey = hyphenate(key)) === key || !hasOwn(rawProps, kebabKey))) {
          if (options) {
            if (rawPrevProps && // for camelCase
            (rawPrevProps[key] !== void 0 || // for kebab-case
            rawPrevProps[kebabKey] !== void 0)) {
              props[key] = resolvePropValue(
                options,
                rawCurrentProps,
                key,
                void 0,
                instance,
                true
              );
            }
          } else {
            delete props[key];
          }
        }
      }
      if (attrs !== rawCurrentProps) {
        for (const key in attrs) {
          if (!rawProps || !hasOwn(rawProps, key) && true) {
            delete attrs[key];
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (hasAttrsChanged) {
      trigger(instance.attrs, "set", "");
    }
    if (true) {
      validateProps(rawProps || {}, props, instance);
    }
  }
  function setFullProps(instance, rawProps, props, attrs) {
    const [options, needCastKeys] = instance.propsOptions;
    let hasAttrsChanged = false;
    let rawCastValues;
    if (rawProps) {
      for (let key in rawProps) {
        if (isReservedProp(key)) {
          continue;
        }
        const value = rawProps[key];
        let camelKey;
        if (options && hasOwn(options, camelKey = camelize(key))) {
          if (!needCastKeys || !needCastKeys.includes(camelKey)) {
            props[camelKey] = value;
          } else {
            (rawCastValues || (rawCastValues = {}))[camelKey] = value;
          }
        } else if (!isEmitListener(instance.emitsOptions, key)) {
          if (!(key in attrs) || value !== attrs[key]) {
            attrs[key] = value;
            hasAttrsChanged = true;
          }
        }
      }
    }
    if (needCastKeys) {
      const rawCurrentProps = toRaw(props);
      const castValues = rawCastValues || EMPTY_OBJ;
      for (let i = 0; i < needCastKeys.length; i++) {
        const key = needCastKeys[i];
        props[key] = resolvePropValue(
          options,
          rawCurrentProps,
          key,
          castValues[key],
          instance,
          !hasOwn(castValues, key)
        );
      }
    }
    return hasAttrsChanged;
  }
  function resolvePropValue(options, props, key, value, instance, isAbsent) {
    const opt = options[key];
    if (opt != null) {
      const hasDefault = hasOwn(opt, "default");
      if (hasDefault && value === void 0) {
        const defaultValue = opt.default;
        if (opt.type !== Function && !opt.skipFactory && isFunction2(defaultValue)) {
          const { propsDefaults } = instance;
          if (key in propsDefaults) {
            value = propsDefaults[key];
          } else {
            const reset = setCurrentInstance(instance);
            value = propsDefaults[key] = defaultValue.call(
              null,
              props
            );
            reset();
          }
        } else {
          value = defaultValue;
        }
      }
      if (opt[
        0
        /* shouldCast */
      ]) {
        if (isAbsent && !hasDefault) {
          value = false;
        } else if (opt[
          1
          /* shouldCastTrue */
        ] && (value === "" || value === hyphenate(key))) {
          value = true;
        }
      }
    }
    return value;
  }
  function normalizePropsOptions(comp, appContext, asMixin = false) {
    const cache = appContext.propsCache;
    const cached = cache.get(comp);
    if (cached) {
      return cached;
    }
    const raw = comp.props;
    const normalized = {};
    const needCastKeys = [];
    let hasExtends = false;
    if (!isFunction2(comp)) {
      const extendProps = (raw2) => {
        hasExtends = true;
        const [props, keys] = normalizePropsOptions(raw2, appContext, true);
        extend(normalized, props);
        if (keys)
          needCastKeys.push(...keys);
      };
      if (!asMixin && appContext.mixins.length) {
        appContext.mixins.forEach(extendProps);
      }
      if (comp.extends) {
        extendProps(comp.extends);
      }
      if (comp.mixins) {
        comp.mixins.forEach(extendProps);
      }
    }
    if (!raw && !hasExtends) {
      if (isObject(comp)) {
        cache.set(comp, EMPTY_ARR);
      }
      return EMPTY_ARR;
    }
    if (isArray(raw)) {
      for (let i = 0; i < raw.length; i++) {
        if (!isString(raw[i])) {
          warn$1(`props must be strings when using array syntax.`, raw[i]);
        }
        const normalizedKey = camelize(raw[i]);
        if (validatePropName(normalizedKey)) {
          normalized[normalizedKey] = EMPTY_OBJ;
        }
      }
    } else if (raw) {
      if (!isObject(raw)) {
        warn$1(`invalid props options`, raw);
      }
      for (const key in raw) {
        const normalizedKey = camelize(key);
        if (validatePropName(normalizedKey)) {
          const opt = raw[key];
          const prop = normalized[normalizedKey] = isArray(opt) || isFunction2(opt) ? { type: opt } : extend({}, opt);
          if (prop) {
            const booleanIndex = getTypeIndex(Boolean, prop.type);
            const stringIndex = getTypeIndex(String, prop.type);
            prop[
              0
              /* shouldCast */
            ] = booleanIndex > -1;
            prop[
              1
              /* shouldCastTrue */
            ] = stringIndex < 0 || booleanIndex < stringIndex;
            if (booleanIndex > -1 || hasOwn(prop, "default")) {
              needCastKeys.push(normalizedKey);
            }
          }
        }
      }
    }
    const res = [normalized, needCastKeys];
    if (isObject(comp)) {
      cache.set(comp, res);
    }
    return res;
  }
  function validatePropName(key) {
    if (key[0] !== "$" && !isReservedProp(key)) {
      return true;
    } else if (true) {
      warn$1(`Invalid prop name: "${key}" is a reserved property.`);
    }
    return false;
  }
  function getType(ctor) {
    if (ctor === null) {
      return "null";
    }
    if (typeof ctor === "function") {
      return ctor.name || "";
    } else if (typeof ctor === "object") {
      const name = ctor.constructor && ctor.constructor.name;
      return name || "";
    }
    return "";
  }
  function isSameType(a, b) {
    return getType(a) === getType(b);
  }
  function getTypeIndex(type, expectedTypes) {
    if (isArray(expectedTypes)) {
      return expectedTypes.findIndex((t) => isSameType(t, type));
    } else if (isFunction2(expectedTypes)) {
      return isSameType(expectedTypes, type) ? 0 : -1;
    }
    return -1;
  }
  function validateProps(rawProps, props, instance) {
    const resolvedValues = toRaw(props);
    const options = instance.propsOptions[0];
    for (const key in options) {
      let opt = options[key];
      if (opt == null)
        continue;
      validateProp(
        key,
        resolvedValues[key],
        opt,
        true ? shallowReadonly(resolvedValues) : resolvedValues,
        !hasOwn(rawProps, key) && !hasOwn(rawProps, hyphenate(key))
      );
    }
  }
  function validateProp(name, value, prop, props, isAbsent) {
    const { type, required, validator, skipCheck } = prop;
    if (required && isAbsent) {
      warn$1('Missing required prop: "' + name + '"');
      return;
    }
    if (value == null && !required) {
      return;
    }
    if (type != null && type !== true && !skipCheck) {
      let isValid = false;
      const types = isArray(type) ? type : [type];
      const expectedTypes = [];
      for (let i = 0; i < types.length && !isValid; i++) {
        const { valid, expectedType } = assertType(value, types[i]);
        expectedTypes.push(expectedType || "");
        isValid = valid;
      }
      if (!isValid) {
        warn$1(getInvalidTypeMessage(name, value, expectedTypes));
        return;
      }
    }
    if (validator && !validator(value, props)) {
      warn$1('Invalid prop: custom validator check failed for prop "' + name + '".');
    }
  }
  var isSimpleType = /* @__PURE__ */ makeMap(
    "String,Number,Boolean,Function,Symbol,BigInt"
  );
  function assertType(value, type) {
    let valid;
    const expectedType = getType(type);
    if (isSimpleType(expectedType)) {
      const t = typeof value;
      valid = t === expectedType.toLowerCase();
      if (!valid && t === "object") {
        valid = value instanceof type;
      }
    } else if (expectedType === "Object") {
      valid = isObject(value);
    } else if (expectedType === "Array") {
      valid = isArray(value);
    } else if (expectedType === "null") {
      valid = value === null;
    } else {
      valid = value instanceof type;
    }
    return {
      valid,
      expectedType
    };
  }
  function getInvalidTypeMessage(name, value, expectedTypes) {
    if (expectedTypes.length === 0) {
      return `Prop type [] for prop "${name}" won't match anything. Did you mean to use type Array instead?`;
    }
    let message = `Invalid prop: type check failed for prop "${name}". Expected ${expectedTypes.map(capitalize).join(" | ")}`;
    const expectedType = expectedTypes[0];
    const receivedType = toRawType(value);
    const expectedValue = styleValue(value, expectedType);
    const receivedValue = styleValue(value, receivedType);
    if (expectedTypes.length === 1 && isExplicable(expectedType) && !isBoolean(expectedType, receivedType)) {
      message += ` with value ${expectedValue}`;
    }
    message += `, got ${receivedType} `;
    if (isExplicable(receivedType)) {
      message += `with value ${receivedValue}.`;
    }
    return message;
  }
  function styleValue(value, type) {
    if (type === "String") {
      return `"${value}"`;
    } else if (type === "Number") {
      return `${Number(value)}`;
    } else {
      return `${value}`;
    }
  }
  function isExplicable(type) {
    const explicitTypes = ["string", "number", "boolean"];
    return explicitTypes.some((elem) => type.toLowerCase() === elem);
  }
  function isBoolean(...args) {
    return args.some((elem) => elem.toLowerCase() === "boolean");
  }
  var isInternalKey = (key) => key[0] === "_" || key === "$stable";
  var normalizeSlotValue = (value) => isArray(value) ? value.map(normalizeVNode) : [normalizeVNode(value)];
  var normalizeSlot = (key, rawSlot, ctx) => {
    if (rawSlot._n) {
      return rawSlot;
    }
    const normalized = withCtx((...args) => {
      if (currentInstance && (!ctx || ctx.root === currentInstance.root)) {
        warn$1(
          `Slot "${key}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
        );
      }
      return normalizeSlotValue(rawSlot(...args));
    }, ctx);
    normalized._c = false;
    return normalized;
  };
  var normalizeObjectSlots = (rawSlots, slots, instance) => {
    const ctx = rawSlots._ctx;
    for (const key in rawSlots) {
      if (isInternalKey(key))
        continue;
      const value = rawSlots[key];
      if (isFunction2(value)) {
        slots[key] = normalizeSlot(key, value, ctx);
      } else if (value != null) {
        if (true) {
          warn$1(
            `Non-function value encountered for slot "${key}". Prefer function slots for better performance.`
          );
        }
        const normalized = normalizeSlotValue(value);
        slots[key] = () => normalized;
      }
    }
  };
  var normalizeVNodeSlots = (instance, children) => {
    if (!isKeepAlive(instance.vnode) && true) {
      warn$1(
        `Non-function value encountered for default slot. Prefer function slots for better performance.`
      );
    }
    const normalized = normalizeSlotValue(children);
    instance.slots.default = () => normalized;
  };
  var initSlots = (instance, children) => {
    const slots = instance.slots = createInternalObject();
    if (instance.vnode.shapeFlag & 32) {
      const type = children._;
      if (type) {
        extend(slots, children);
        def(slots, "_", type, true);
      } else {
        normalizeObjectSlots(children, slots);
      }
    } else if (children) {
      normalizeVNodeSlots(instance, children);
    }
  };
  var updateSlots = (instance, children, optimized) => {
    const { vnode, slots } = instance;
    let needDeletionCheck = true;
    let deletionComparisonTarget = EMPTY_OBJ;
    if (vnode.shapeFlag & 32) {
      const type = children._;
      if (type) {
        if (isHmrUpdating) {
          extend(slots, children);
          trigger(instance, "set", "$slots");
        } else if (optimized && type === 1) {
          needDeletionCheck = false;
        } else {
          extend(slots, children);
          if (!optimized && type === 1) {
            delete slots._;
          }
        }
      } else {
        needDeletionCheck = !children.$stable;
        normalizeObjectSlots(children, slots);
      }
      deletionComparisonTarget = children;
    } else if (children) {
      normalizeVNodeSlots(instance, children);
      deletionComparisonTarget = { default: 1 };
    }
    if (needDeletionCheck) {
      for (const key in slots) {
        if (!isInternalKey(key) && deletionComparisonTarget[key] == null) {
          delete slots[key];
        }
      }
    }
  };
  function setRef(rawRef, oldRawRef, parentSuspense, vnode, isUnmount = false) {
    if (isArray(rawRef)) {
      rawRef.forEach(
        (r, i) => setRef(
          r,
          oldRawRef && (isArray(oldRawRef) ? oldRawRef[i] : oldRawRef),
          parentSuspense,
          vnode,
          isUnmount
        )
      );
      return;
    }
    if (isAsyncWrapper(vnode) && !isUnmount) {
      return;
    }
    const refValue = vnode.shapeFlag & 4 ? getExposeProxy(vnode.component) || vnode.component.proxy : vnode.el;
    const value = isUnmount ? null : refValue;
    const { i: owner, r: ref2 } = rawRef;
    if (!owner) {
      warn$1(
        `Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function.`
      );
      return;
    }
    const oldRef = oldRawRef && oldRawRef.r;
    const refs = owner.refs === EMPTY_OBJ ? owner.refs = {} : owner.refs;
    const setupState = owner.setupState;
    if (oldRef != null && oldRef !== ref2) {
      if (isString(oldRef)) {
        refs[oldRef] = null;
        if (hasOwn(setupState, oldRef)) {
          setupState[oldRef] = null;
        }
      } else if (isRef(oldRef)) {
        oldRef.value = null;
      }
    }
    if (isFunction2(ref2)) {
      callWithErrorHandling(ref2, owner, 12, [value, refs]);
    } else {
      const _isString = isString(ref2);
      const _isRef = isRef(ref2);
      if (_isString || _isRef) {
        const doSet = () => {
          if (rawRef.f) {
            const existing = _isString ? hasOwn(setupState, ref2) ? setupState[ref2] : refs[ref2] : ref2.value;
            if (isUnmount) {
              isArray(existing) && remove(existing, refValue);
            } else {
              if (!isArray(existing)) {
                if (_isString) {
                  refs[ref2] = [refValue];
                  if (hasOwn(setupState, ref2)) {
                    setupState[ref2] = refs[ref2];
                  }
                } else {
                  ref2.value = [refValue];
                  if (rawRef.k)
                    refs[rawRef.k] = ref2.value;
                }
              } else if (!existing.includes(refValue)) {
                existing.push(refValue);
              }
            }
          } else if (_isString) {
            refs[ref2] = value;
            if (hasOwn(setupState, ref2)) {
              setupState[ref2] = value;
            }
          } else if (_isRef) {
            ref2.value = value;
            if (rawRef.k)
              refs[rawRef.k] = value;
          } else if (true) {
            warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
          }
        };
        if (value) {
          doSet.id = -1;
          queuePostRenderEffect(doSet, parentSuspense);
        } else {
          doSet();
        }
      } else if (true) {
        warn$1("Invalid template ref type:", ref2, `(${typeof ref2})`);
      }
    }
  }
  var supported;
  var perf;
  function startMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
      perf.mark(`vue-${type}-${instance.uid}`);
    }
    if (true) {
      devtoolsPerfStart(instance, type, isSupported() ? perf.now() : Date.now());
    }
  }
  function endMeasure(instance, type) {
    if (instance.appContext.config.performance && isSupported()) {
      const startTag = `vue-${type}-${instance.uid}`;
      const endTag = startTag + `:end`;
      perf.mark(endTag);
      perf.measure(
        `<${formatComponentName(instance, instance.type)}> ${type}`,
        startTag,
        endTag
      );
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
    }
    if (true) {
      devtoolsPerfEnd(instance, type, isSupported() ? perf.now() : Date.now());
    }
  }
  function isSupported() {
    if (supported !== void 0) {
      return supported;
    }
    if (typeof window !== "undefined" && window.performance) {
      supported = true;
      perf = window.performance;
    } else {
      supported = false;
    }
    return supported;
  }
  function initFeatureFlags() {
    const needWarn = [];
    if (false) {
      needWarn.push(`__VUE_OPTIONS_API__`);
      getGlobalThis().__VUE_OPTIONS_API__ = true;
    }
    if (false) {
      needWarn.push(`__VUE_PROD_DEVTOOLS__`);
      getGlobalThis().__VUE_PROD_DEVTOOLS__ = false;
    }
    if (false) {
      needWarn.push(`__VUE_PROD_HYDRATION_MISMATCH_DETAILS__`);
      getGlobalThis().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = false;
    }
    if (needWarn.length) {
      const multi = needWarn.length > 1;
    }
  }
  var queuePostRenderEffect = queueEffectWithSuspense;
  function createRenderer(options) {
    return baseCreateRenderer(options);
  }
  function baseCreateRenderer(options, createHydrationFns) {
    {
      initFeatureFlags();
    }
    const target = getGlobalThis();
    target.__VUE__ = true;
    if (true) {
      setDevtoolsHook$1(target.__VUE_DEVTOOLS_GLOBAL_HOOK__, target);
    }
    const {
      insert: hostInsert,
      remove: hostRemove,
      patchProp: hostPatchProp,
      createElement: hostCreateElement,
      createText: hostCreateText,
      createComment: hostCreateComment,
      setText: hostSetText,
      setElementText: hostSetElementText,
      parentNode: hostParentNode,
      nextSibling: hostNextSibling,
      setScopeId: hostSetScopeId = NOOP,
      insertStaticContent: hostInsertStaticContent
    } = options;
    const patch = (n1, n2, container, anchor = null, parentComponent = null, parentSuspense = null, namespace = void 0, slotScopeIds = null, optimized = isHmrUpdating ? false : !!n2.dynamicChildren) => {
      if (n1 === n2) {
        return;
      }
      if (n1 && !isSameVNodeType(n1, n2)) {
        anchor = getNextHostNode(n1);
        unmount(n1, parentComponent, parentSuspense, true);
        n1 = null;
      }
      if (n2.patchFlag === -2) {
        optimized = false;
        n2.dynamicChildren = null;
      }
      const { type, ref: ref2, shapeFlag } = n2;
      switch (type) {
        case Text:
          processText(n1, n2, container, anchor);
          break;
        case Comment:
          processCommentNode(n1, n2, container, anchor);
          break;
        case Static:
          if (n1 == null) {
            mountStaticNode(n2, container, anchor, namespace);
          } else if (true) {
            patchStaticNode(n1, n2, container, namespace);
          }
          break;
        case Fragment:
          processFragment(
            n1,
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          break;
        default:
          if (shapeFlag & 1) {
            processElement(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else if (shapeFlag & 6) {
            processComponent(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else if (shapeFlag & 64) {
            type.process(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized,
              internals
            );
          } else if (shapeFlag & 128) {
            type.process(
              n1,
              n2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized,
              internals
            );
          } else if (true) {
            warn$1("Invalid VNode type:", type, `(${typeof type})`);
          }
      }
      if (ref2 != null && parentComponent) {
        setRef(ref2, n1 && n1.ref, parentSuspense, n2 || n1, !n2);
      }
    };
    const processText = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(
          n2.el = hostCreateText(n2.children),
          container,
          anchor
        );
      } else {
        const el = n2.el = n1.el;
        if (n2.children !== n1.children) {
          hostSetText(el, n2.children);
        }
      }
    };
    const processCommentNode = (n1, n2, container, anchor) => {
      if (n1 == null) {
        hostInsert(
          n2.el = hostCreateComment(n2.children || ""),
          container,
          anchor
        );
      } else {
        n2.el = n1.el;
      }
    };
    const mountStaticNode = (n2, container, anchor, namespace) => {
      [n2.el, n2.anchor] = hostInsertStaticContent(
        n2.children,
        container,
        anchor,
        namespace,
        n2.el,
        n2.anchor
      );
    };
    const patchStaticNode = (n1, n2, container, namespace) => {
      if (n2.children !== n1.children) {
        const anchor = hostNextSibling(n1.anchor);
        removeStaticNode(n1);
        [n2.el, n2.anchor] = hostInsertStaticContent(
          n2.children,
          container,
          anchor,
          namespace
        );
      } else {
        n2.el = n1.el;
        n2.anchor = n1.anchor;
      }
    };
    const moveStaticNode = ({ el, anchor }, container, nextSibling) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostInsert(el, container, nextSibling);
        el = next;
      }
      hostInsert(anchor, container, nextSibling);
    };
    const removeStaticNode = ({ el, anchor }) => {
      let next;
      while (el && el !== anchor) {
        next = hostNextSibling(el);
        hostRemove(el);
        el = next;
      }
      hostRemove(anchor);
    };
    const processElement = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      if (n2.type === "svg") {
        namespace = "svg";
      } else if (n2.type === "math") {
        namespace = "mathml";
      }
      if (n1 == null) {
        mountElement(
          n2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        patchElement(
          n1,
          n2,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    };
    const mountElement = (vnode, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      let el;
      let vnodeHook;
      const { props, shapeFlag, transition, dirs } = vnode;
      el = vnode.el = hostCreateElement(
        vnode.type,
        namespace,
        props && props.is,
        props
      );
      if (shapeFlag & 8) {
        hostSetElementText(el, vnode.children);
      } else if (shapeFlag & 16) {
        mountChildren(
          vnode.children,
          el,
          null,
          parentComponent,
          parentSuspense,
          resolveChildrenNamespace(vnode, namespace),
          slotScopeIds,
          optimized
        );
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "created");
      }
      setScopeId(el, vnode, vnode.scopeId, slotScopeIds, parentComponent);
      if (props) {
        for (const key in props) {
          if (key !== "value" && !isReservedProp(key)) {
            hostPatchProp(
              el,
              key,
              null,
              props[key],
              namespace,
              vnode.children,
              parentComponent,
              parentSuspense,
              unmountChildren
            );
          }
        }
        if ("value" in props) {
          hostPatchProp(el, "value", null, props.value, namespace);
        }
        if (vnodeHook = props.onVnodeBeforeMount) {
          invokeVNodeHook(vnodeHook, parentComponent, vnode);
        }
      }
      if (true) {
        Object.defineProperty(el, "__vnode", {
          value: vnode,
          enumerable: false
        });
        Object.defineProperty(el, "__vueParentComponent", {
          value: parentComponent,
          enumerable: false
        });
      }
      if (dirs) {
        invokeDirectiveHook(vnode, null, parentComponent, "beforeMount");
      }
      const needCallTransitionHooks = needTransition(parentSuspense, transition);
      if (needCallTransitionHooks) {
        transition.beforeEnter(el);
      }
      hostInsert(el, container, anchor);
      if ((vnodeHook = props && props.onVnodeMounted) || needCallTransitionHooks || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          needCallTransitionHooks && transition.enter(el);
          dirs && invokeDirectiveHook(vnode, null, parentComponent, "mounted");
        }, parentSuspense);
      }
    };
    const setScopeId = (el, vnode, scopeId, slotScopeIds, parentComponent) => {
      if (scopeId) {
        hostSetScopeId(el, scopeId);
      }
      if (slotScopeIds) {
        for (let i = 0; i < slotScopeIds.length; i++) {
          hostSetScopeId(el, slotScopeIds[i]);
        }
      }
      if (parentComponent) {
        let subTree = parentComponent.subTree;
        if (subTree.patchFlag > 0 && subTree.patchFlag & 2048) {
          subTree = filterSingleRoot(subTree.children) || subTree;
        }
        if (vnode === subTree) {
          const parentVNode = parentComponent.vnode;
          setScopeId(
            el,
            parentVNode,
            parentVNode.scopeId,
            parentVNode.slotScopeIds,
            parentComponent.parent
          );
        }
      }
    };
    const mountChildren = (children, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized, start = 0) => {
      for (let i = start; i < children.length; i++) {
        const child = children[i] = optimized ? cloneIfMounted(children[i]) : normalizeVNode(children[i]);
        patch(
          null,
          child,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
    };
    const patchElement = (n1, n2, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      const el = n2.el = n1.el;
      let { patchFlag, dynamicChildren, dirs } = n2;
      patchFlag |= n1.patchFlag & 16;
      const oldProps = n1.props || EMPTY_OBJ;
      const newProps = n2.props || EMPTY_OBJ;
      let vnodeHook;
      parentComponent && toggleRecurse(parentComponent, false);
      if (vnodeHook = newProps.onVnodeBeforeUpdate) {
        invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
      }
      if (dirs) {
        invokeDirectiveHook(n2, n1, parentComponent, "beforeUpdate");
      }
      parentComponent && toggleRecurse(parentComponent, true);
      if (isHmrUpdating) {
        patchFlag = 0;
        optimized = false;
        dynamicChildren = null;
      }
      if (dynamicChildren) {
        patchBlockChildren(
          n1.dynamicChildren,
          dynamicChildren,
          el,
          parentComponent,
          parentSuspense,
          resolveChildrenNamespace(n2, namespace),
          slotScopeIds
        );
        if (true) {
          traverseStaticChildren(n1, n2);
        }
      } else if (!optimized) {
        patchChildren(
          n1,
          n2,
          el,
          null,
          parentComponent,
          parentSuspense,
          resolveChildrenNamespace(n2, namespace),
          slotScopeIds,
          false
        );
      }
      if (patchFlag > 0) {
        if (patchFlag & 16) {
          patchProps(
            el,
            n2,
            oldProps,
            newProps,
            parentComponent,
            parentSuspense,
            namespace
          );
        } else {
          if (patchFlag & 2) {
            if (oldProps.class !== newProps.class) {
              hostPatchProp(el, "class", null, newProps.class, namespace);
            }
          }
          if (patchFlag & 4) {
            hostPatchProp(el, "style", oldProps.style, newProps.style, namespace);
          }
          if (patchFlag & 8) {
            const propsToUpdate = n2.dynamicProps;
            for (let i = 0; i < propsToUpdate.length; i++) {
              const key = propsToUpdate[i];
              const prev = oldProps[key];
              const next = newProps[key];
              if (next !== prev || key === "value") {
                hostPatchProp(
                  el,
                  key,
                  prev,
                  next,
                  namespace,
                  n1.children,
                  parentComponent,
                  parentSuspense,
                  unmountChildren
                );
              }
            }
          }
        }
        if (patchFlag & 1) {
          if (n1.children !== n2.children) {
            hostSetElementText(el, n2.children);
          }
        }
      } else if (!optimized && dynamicChildren == null) {
        patchProps(
          el,
          n2,
          oldProps,
          newProps,
          parentComponent,
          parentSuspense,
          namespace
        );
      }
      if ((vnodeHook = newProps.onVnodeUpdated) || dirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, n2, n1);
          dirs && invokeDirectiveHook(n2, n1, parentComponent, "updated");
        }, parentSuspense);
      }
    };
    const patchBlockChildren = (oldChildren, newChildren, fallbackContainer, parentComponent, parentSuspense, namespace, slotScopeIds) => {
      for (let i = 0; i < newChildren.length; i++) {
        const oldVNode = oldChildren[i];
        const newVNode = newChildren[i];
        const container = (
          // oldVNode may be an errored async setup() component inside Suspense
          // which will not have a mounted element
          oldVNode.el && // - In the case of a Fragment, we need to provide the actual parent
          // of the Fragment itself so it can move its children.
          (oldVNode.type === Fragment || // - In the case of different nodes, there is going to be a replacement
          // which also requires the correct parent container
          !isSameVNodeType(oldVNode, newVNode) || // - In the case of a component, it could contain anything.
          oldVNode.shapeFlag & (6 | 64)) ? hostParentNode(oldVNode.el) : (
            // In other cases, the parent container is not actually used so we
            // just pass the block element here to avoid a DOM parentNode call.
            fallbackContainer
          )
        );
        patch(
          oldVNode,
          newVNode,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          true
        );
      }
    };
    const patchProps = (el, vnode, oldProps, newProps, parentComponent, parentSuspense, namespace) => {
      if (oldProps !== newProps) {
        if (oldProps !== EMPTY_OBJ) {
          for (const key in oldProps) {
            if (!isReservedProp(key) && !(key in newProps)) {
              hostPatchProp(
                el,
                key,
                oldProps[key],
                null,
                namespace,
                vnode.children,
                parentComponent,
                parentSuspense,
                unmountChildren
              );
            }
          }
        }
        for (const key in newProps) {
          if (isReservedProp(key))
            continue;
          const next = newProps[key];
          const prev = oldProps[key];
          if (next !== prev && key !== "value") {
            hostPatchProp(
              el,
              key,
              prev,
              next,
              namespace,
              vnode.children,
              parentComponent,
              parentSuspense,
              unmountChildren
            );
          }
        }
        if ("value" in newProps) {
          hostPatchProp(el, "value", oldProps.value, newProps.value, namespace);
        }
      }
    };
    const processFragment = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      const fragmentStartAnchor = n2.el = n1 ? n1.el : hostCreateText("");
      const fragmentEndAnchor = n2.anchor = n1 ? n1.anchor : hostCreateText("");
      let { patchFlag, dynamicChildren, slotScopeIds: fragmentSlotScopeIds } = n2;
      if (
        // #5523 dev root fragment may inherit directives
        isHmrUpdating || patchFlag & 2048
      ) {
        patchFlag = 0;
        optimized = false;
        dynamicChildren = null;
      }
      if (fragmentSlotScopeIds) {
        slotScopeIds = slotScopeIds ? slotScopeIds.concat(fragmentSlotScopeIds) : fragmentSlotScopeIds;
      }
      if (n1 == null) {
        hostInsert(fragmentStartAnchor, container, anchor);
        hostInsert(fragmentEndAnchor, container, anchor);
        mountChildren(
          // #10007
          // such fragment like `<></>` will be compiled into
          // a fragment which doesn't have a children.
          // In this case fallback to an empty array
          n2.children || [],
          container,
          fragmentEndAnchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      } else {
        if (patchFlag > 0 && patchFlag & 64 && dynamicChildren && // #2715 the previous fragment could've been a BAILed one as a result
        // of renderSlot() with no valid children
        n1.dynamicChildren) {
          patchBlockChildren(
            n1.dynamicChildren,
            dynamicChildren,
            container,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds
          );
          if (true) {
            traverseStaticChildren(n1, n2);
          } else if (
            // #2080 if the stable fragment has a key, it's a <template v-for> that may
            //  get moved around. Make sure all root level vnodes inherit el.
            // #2134 or if it's a component root, it may also get moved around
            // as the component is being moved.
            n2.key != null || parentComponent && n2 === parentComponent.subTree
          ) {
            traverseStaticChildren(
              n1,
              n2,
              true
              /* shallow */
            );
          }
        } else {
          patchChildren(
            n1,
            n2,
            container,
            fragmentEndAnchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        }
      }
    };
    const processComponent = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      n2.slotScopeIds = slotScopeIds;
      if (n1 == null) {
        if (n2.shapeFlag & 512) {
          parentComponent.ctx.activate(
            n2,
            container,
            anchor,
            namespace,
            optimized
          );
        } else {
          mountComponent(
            n2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            optimized
          );
        }
      } else {
        updateComponent(n1, n2, optimized);
      }
    };
    const mountComponent = (initialVNode, container, anchor, parentComponent, parentSuspense, namespace, optimized) => {
      const instance = initialVNode.component = createComponentInstance(
        initialVNode,
        parentComponent,
        parentSuspense
      );
      if (instance.type.__hmrId) {
        registerHMR(instance);
      }
      if (true) {
        pushWarningContext(initialVNode);
        startMeasure(instance, `mount`);
      }
      if (isKeepAlive(initialVNode)) {
        instance.ctx.renderer = internals;
      }
      {
        if (true) {
          startMeasure(instance, `init`);
        }
        setupComponent(instance);
        if (true) {
          endMeasure(instance, `init`);
        }
      }
      if (instance.asyncDep) {
        parentSuspense && parentSuspense.registerDep(instance, setupRenderEffect);
        if (!initialVNode.el) {
          const placeholder = instance.subTree = createVNode(Comment);
          processCommentNode(null, placeholder, container, anchor);
        }
      } else {
        setupRenderEffect(
          instance,
          initialVNode,
          container,
          anchor,
          parentSuspense,
          namespace,
          optimized
        );
      }
      if (true) {
        popWarningContext();
        endMeasure(instance, `mount`);
      }
    };
    const updateComponent = (n1, n2, optimized) => {
      const instance = n2.component = n1.component;
      if (shouldUpdateComponent(n1, n2, optimized)) {
        if (instance.asyncDep && !instance.asyncResolved) {
          if (true) {
            pushWarningContext(n2);
          }
          updateComponentPreRender(instance, n2, optimized);
          if (true) {
            popWarningContext();
          }
          return;
        } else {
          instance.next = n2;
          invalidateJob(instance.update);
          instance.effect.dirty = true;
          instance.update();
        }
      } else {
        n2.el = n1.el;
        instance.vnode = n2;
      }
    };
    const setupRenderEffect = (instance, initialVNode, container, anchor, parentSuspense, namespace, optimized) => {
      const componentUpdateFn = () => {
        if (!instance.isMounted) {
          let vnodeHook;
          const { el, props } = initialVNode;
          const { bm, m, parent } = instance;
          const isAsyncWrapperVNode = isAsyncWrapper(initialVNode);
          toggleRecurse(instance, false);
          if (bm) {
            invokeArrayFns(bm);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeBeforeMount)) {
            invokeVNodeHook(vnodeHook, parent, initialVNode);
          }
          toggleRecurse(instance, true);
          if (el && hydrateNode) {
            const hydrateSubTree = () => {
              if (true) {
                startMeasure(instance, `render`);
              }
              instance.subTree = renderComponentRoot(instance);
              if (true) {
                endMeasure(instance, `render`);
              }
              if (true) {
                startMeasure(instance, `hydrate`);
              }
              hydrateNode(
                el,
                instance.subTree,
                instance,
                parentSuspense,
                null
              );
              if (true) {
                endMeasure(instance, `hydrate`);
              }
            };
            if (isAsyncWrapperVNode) {
              initialVNode.type.__asyncLoader().then(
                // note: we are moving the render call into an async callback,
                // which means it won't track dependencies - but it's ok because
                // a server-rendered async wrapper is already in resolved state
                // and it will never need to change.
                () => !instance.isUnmounted && hydrateSubTree()
              );
            } else {
              hydrateSubTree();
            }
          } else {
            if (true) {
              startMeasure(instance, `render`);
            }
            const subTree = instance.subTree = renderComponentRoot(instance);
            if (true) {
              endMeasure(instance, `render`);
            }
            if (true) {
              startMeasure(instance, `patch`);
            }
            patch(
              null,
              subTree,
              container,
              anchor,
              instance,
              parentSuspense,
              namespace
            );
            if (true) {
              endMeasure(instance, `patch`);
            }
            initialVNode.el = subTree.el;
          }
          if (m) {
            queuePostRenderEffect(m, parentSuspense);
          }
          if (!isAsyncWrapperVNode && (vnodeHook = props && props.onVnodeMounted)) {
            const scopedInitialVNode = initialVNode;
            queuePostRenderEffect(
              () => invokeVNodeHook(vnodeHook, parent, scopedInitialVNode),
              parentSuspense
            );
          }
          if (initialVNode.shapeFlag & 256 || parent && isAsyncWrapper(parent.vnode) && parent.vnode.shapeFlag & 256) {
            instance.a && queuePostRenderEffect(instance.a, parentSuspense);
          }
          instance.isMounted = true;
          if (true) {
            devtoolsComponentAdded(instance);
          }
          initialVNode = container = anchor = null;
        } else {
          let { next, bu, u, parent, vnode } = instance;
          {
            const nonHydratedAsyncRoot = locateNonHydratedAsyncRoot(instance);
            if (nonHydratedAsyncRoot) {
              if (next) {
                next.el = vnode.el;
                updateComponentPreRender(instance, next, optimized);
              }
              nonHydratedAsyncRoot.asyncDep.then(() => {
                if (!instance.isUnmounted) {
                  componentUpdateFn();
                }
              });
              return;
            }
          }
          let originNext = next;
          let vnodeHook;
          if (true) {
            pushWarningContext(next || instance.vnode);
          }
          toggleRecurse(instance, false);
          if (next) {
            next.el = vnode.el;
            updateComponentPreRender(instance, next, optimized);
          } else {
            next = vnode;
          }
          if (bu) {
            invokeArrayFns(bu);
          }
          if (vnodeHook = next.props && next.props.onVnodeBeforeUpdate) {
            invokeVNodeHook(vnodeHook, parent, next, vnode);
          }
          toggleRecurse(instance, true);
          if (true) {
            startMeasure(instance, `render`);
          }
          const nextTree = renderComponentRoot(instance);
          if (true) {
            endMeasure(instance, `render`);
          }
          const prevTree = instance.subTree;
          instance.subTree = nextTree;
          if (true) {
            startMeasure(instance, `patch`);
          }
          patch(
            prevTree,
            nextTree,
            // parent may have changed if it's in a teleport
            hostParentNode(prevTree.el),
            // anchor may have changed if it's in a fragment
            getNextHostNode(prevTree),
            instance,
            parentSuspense,
            namespace
          );
          if (true) {
            endMeasure(instance, `patch`);
          }
          next.el = nextTree.el;
          if (originNext === null) {
            updateHOCHostEl(instance, nextTree.el);
          }
          if (u) {
            queuePostRenderEffect(u, parentSuspense);
          }
          if (vnodeHook = next.props && next.props.onVnodeUpdated) {
            queuePostRenderEffect(
              () => invokeVNodeHook(vnodeHook, parent, next, vnode),
              parentSuspense
            );
          }
          if (true) {
            devtoolsComponentUpdated(instance);
          }
          if (true) {
            popWarningContext();
          }
        }
      };
      const effect2 = instance.effect = new ReactiveEffect(
        componentUpdateFn,
        NOOP,
        () => queueJob(update),
        instance.scope
        // track it in component's effect scope
      );
      const update = instance.update = () => {
        if (effect2.dirty) {
          effect2.run();
        }
      };
      update.id = instance.uid;
      toggleRecurse(instance, true);
      if (true) {
        effect2.onTrack = instance.rtc ? (e) => invokeArrayFns(instance.rtc, e) : void 0;
        effect2.onTrigger = instance.rtg ? (e) => invokeArrayFns(instance.rtg, e) : void 0;
        update.ownerInstance = instance;
      }
      update();
    };
    const updateComponentPreRender = (instance, nextVNode, optimized) => {
      nextVNode.component = instance;
      const prevProps = instance.vnode.props;
      instance.vnode = nextVNode;
      instance.next = null;
      updateProps(instance, nextVNode.props, prevProps, optimized);
      updateSlots(instance, nextVNode.children, optimized);
      pauseTracking();
      flushPreFlushCbs(instance);
      resetTracking();
    };
    const patchChildren = (n1, n2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized = false) => {
      const c1 = n1 && n1.children;
      const prevShapeFlag = n1 ? n1.shapeFlag : 0;
      const c2 = n2.children;
      const { patchFlag, shapeFlag } = n2;
      if (patchFlag > 0) {
        if (patchFlag & 128) {
          patchKeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          return;
        } else if (patchFlag & 256) {
          patchUnkeyedChildren(
            c1,
            c2,
            container,
            anchor,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
          return;
        }
      }
      if (shapeFlag & 8) {
        if (prevShapeFlag & 16) {
          unmountChildren(c1, parentComponent, parentSuspense);
        }
        if (c2 !== c1) {
          hostSetElementText(container, c2);
        }
      } else {
        if (prevShapeFlag & 16) {
          if (shapeFlag & 16) {
            patchKeyedChildren(
              c1,
              c2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else {
            unmountChildren(c1, parentComponent, parentSuspense, true);
          }
        } else {
          if (prevShapeFlag & 8) {
            hostSetElementText(container, "");
          }
          if (shapeFlag & 16) {
            mountChildren(
              c2,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          }
        }
      }
    };
    const patchUnkeyedChildren = (c1, c2, container, anchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      c1 = c1 || EMPTY_ARR;
      c2 = c2 || EMPTY_ARR;
      const oldLength = c1.length;
      const newLength = c2.length;
      const commonLength = Math.min(oldLength, newLength);
      let i;
      for (i = 0; i < commonLength; i++) {
        const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        patch(
          c1[i],
          nextChild,
          container,
          null,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized
        );
      }
      if (oldLength > newLength) {
        unmountChildren(
          c1,
          parentComponent,
          parentSuspense,
          true,
          false,
          commonLength
        );
      } else {
        mountChildren(
          c2,
          container,
          anchor,
          parentComponent,
          parentSuspense,
          namespace,
          slotScopeIds,
          optimized,
          commonLength
        );
      }
    };
    const patchKeyedChildren = (c1, c2, container, parentAnchor, parentComponent, parentSuspense, namespace, slotScopeIds, optimized) => {
      let i = 0;
      const l2 = c2.length;
      let e1 = c1.length - 1;
      let e2 = l2 - 1;
      while (i <= e1 && i <= e2) {
        const n1 = c1[i];
        const n2 = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
        if (isSameVNodeType(n1, n2)) {
          patch(
            n1,
            n2,
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          break;
        }
        i++;
      }
      while (i <= e1 && i <= e2) {
        const n1 = c1[e1];
        const n2 = c2[e2] = optimized ? cloneIfMounted(c2[e2]) : normalizeVNode(c2[e2]);
        if (isSameVNodeType(n1, n2)) {
          patch(
            n1,
            n2,
            container,
            null,
            parentComponent,
            parentSuspense,
            namespace,
            slotScopeIds,
            optimized
          );
        } else {
          break;
        }
        e1--;
        e2--;
      }
      if (i > e1) {
        if (i <= e2) {
          const nextPos = e2 + 1;
          const anchor = nextPos < l2 ? c2[nextPos].el : parentAnchor;
          while (i <= e2) {
            patch(
              null,
              c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]),
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
            i++;
          }
        }
      } else if (i > e2) {
        while (i <= e1) {
          unmount(c1[i], parentComponent, parentSuspense, true);
          i++;
        }
      } else {
        const s1 = i;
        const s2 = i;
        const keyToNewIndexMap = /* @__PURE__ */ new Map();
        for (i = s2; i <= e2; i++) {
          const nextChild = c2[i] = optimized ? cloneIfMounted(c2[i]) : normalizeVNode(c2[i]);
          if (nextChild.key != null) {
            if (keyToNewIndexMap.has(nextChild.key)) {
              warn$1(
                `Duplicate keys found during update:`,
                JSON.stringify(nextChild.key),
                `Make sure keys are unique.`
              );
            }
            keyToNewIndexMap.set(nextChild.key, i);
          }
        }
        let j;
        let patched = 0;
        const toBePatched = e2 - s2 + 1;
        let moved = false;
        let maxNewIndexSoFar = 0;
        const newIndexToOldIndexMap = new Array(toBePatched);
        for (i = 0; i < toBePatched; i++)
          newIndexToOldIndexMap[i] = 0;
        for (i = s1; i <= e1; i++) {
          const prevChild = c1[i];
          if (patched >= toBePatched) {
            unmount(prevChild, parentComponent, parentSuspense, true);
            continue;
          }
          let newIndex;
          if (prevChild.key != null) {
            newIndex = keyToNewIndexMap.get(prevChild.key);
          } else {
            for (j = s2; j <= e2; j++) {
              if (newIndexToOldIndexMap[j - s2] === 0 && isSameVNodeType(prevChild, c2[j])) {
                newIndex = j;
                break;
              }
            }
          }
          if (newIndex === void 0) {
            unmount(prevChild, parentComponent, parentSuspense, true);
          } else {
            newIndexToOldIndexMap[newIndex - s2] = i + 1;
            if (newIndex >= maxNewIndexSoFar) {
              maxNewIndexSoFar = newIndex;
            } else {
              moved = true;
            }
            patch(
              prevChild,
              c2[newIndex],
              container,
              null,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
            patched++;
          }
        }
        const increasingNewIndexSequence = moved ? getSequence(newIndexToOldIndexMap) : EMPTY_ARR;
        j = increasingNewIndexSequence.length - 1;
        for (i = toBePatched - 1; i >= 0; i--) {
          const nextIndex = s2 + i;
          const nextChild = c2[nextIndex];
          const anchor = nextIndex + 1 < l2 ? c2[nextIndex + 1].el : parentAnchor;
          if (newIndexToOldIndexMap[i] === 0) {
            patch(
              null,
              nextChild,
              container,
              anchor,
              parentComponent,
              parentSuspense,
              namespace,
              slotScopeIds,
              optimized
            );
          } else if (moved) {
            if (j < 0 || i !== increasingNewIndexSequence[j]) {
              move(nextChild, container, anchor, 2);
            } else {
              j--;
            }
          }
        }
      }
    };
    const move = (vnode, container, anchor, moveType, parentSuspense = null) => {
      const { el, type, transition, children, shapeFlag } = vnode;
      if (shapeFlag & 6) {
        move(vnode.component.subTree, container, anchor, moveType);
        return;
      }
      if (shapeFlag & 128) {
        vnode.suspense.move(container, anchor, moveType);
        return;
      }
      if (shapeFlag & 64) {
        type.move(vnode, container, anchor, internals);
        return;
      }
      if (type === Fragment) {
        hostInsert(el, container, anchor);
        for (let i = 0; i < children.length; i++) {
          move(children[i], container, anchor, moveType);
        }
        hostInsert(vnode.anchor, container, anchor);
        return;
      }
      if (type === Static) {
        moveStaticNode(vnode, container, anchor);
        return;
      }
      const needTransition2 = moveType !== 2 && shapeFlag & 1 && transition;
      if (needTransition2) {
        if (moveType === 0) {
          transition.beforeEnter(el);
          hostInsert(el, container, anchor);
          queuePostRenderEffect(() => transition.enter(el), parentSuspense);
        } else {
          const { leave, delayLeave, afterLeave } = transition;
          const remove22 = () => hostInsert(el, container, anchor);
          const performLeave = () => {
            leave(el, () => {
              remove22();
              afterLeave && afterLeave();
            });
          };
          if (delayLeave) {
            delayLeave(el, remove22, performLeave);
          } else {
            performLeave();
          }
        }
      } else {
        hostInsert(el, container, anchor);
      }
    };
    const unmount = (vnode, parentComponent, parentSuspense, doRemove = false, optimized = false) => {
      const {
        type,
        props,
        ref: ref2,
        children,
        dynamicChildren,
        shapeFlag,
        patchFlag,
        dirs
      } = vnode;
      if (ref2 != null) {
        setRef(ref2, null, parentSuspense, vnode, true);
      }
      if (shapeFlag & 256) {
        parentComponent.ctx.deactivate(vnode);
        return;
      }
      const shouldInvokeDirs = shapeFlag & 1 && dirs;
      const shouldInvokeVnodeHook = !isAsyncWrapper(vnode);
      let vnodeHook;
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeBeforeUnmount)) {
        invokeVNodeHook(vnodeHook, parentComponent, vnode);
      }
      if (shapeFlag & 6) {
        unmountComponent(vnode.component, parentSuspense, doRemove);
      } else {
        if (shapeFlag & 128) {
          vnode.suspense.unmount(parentSuspense, doRemove);
          return;
        }
        if (shouldInvokeDirs) {
          invokeDirectiveHook(vnode, null, parentComponent, "beforeUnmount");
        }
        if (shapeFlag & 64) {
          vnode.type.remove(
            vnode,
            parentComponent,
            parentSuspense,
            optimized,
            internals,
            doRemove
          );
        } else if (dynamicChildren && // #1153: fast path should not be taken for non-stable (v-for) fragments
        (type !== Fragment || patchFlag > 0 && patchFlag & 64)) {
          unmountChildren(
            dynamicChildren,
            parentComponent,
            parentSuspense,
            false,
            true
          );
        } else if (type === Fragment && patchFlag & (128 | 256) || !optimized && shapeFlag & 16) {
          unmountChildren(children, parentComponent, parentSuspense);
        }
        if (doRemove) {
          remove2(vnode);
        }
      }
      if (shouldInvokeVnodeHook && (vnodeHook = props && props.onVnodeUnmounted) || shouldInvokeDirs) {
        queuePostRenderEffect(() => {
          vnodeHook && invokeVNodeHook(vnodeHook, parentComponent, vnode);
          shouldInvokeDirs && invokeDirectiveHook(vnode, null, parentComponent, "unmounted");
        }, parentSuspense);
      }
    };
    const remove2 = (vnode) => {
      const { type, el, anchor, transition } = vnode;
      if (type === Fragment) {
        if (vnode.patchFlag > 0 && vnode.patchFlag & 2048 && transition && !transition.persisted) {
          vnode.children.forEach((child) => {
            if (child.type === Comment) {
              hostRemove(child.el);
            } else {
              remove2(child);
            }
          });
        } else {
          removeFragment(el, anchor);
        }
        return;
      }
      if (type === Static) {
        removeStaticNode(vnode);
        return;
      }
      const performRemove = () => {
        hostRemove(el);
        if (transition && !transition.persisted && transition.afterLeave) {
          transition.afterLeave();
        }
      };
      if (vnode.shapeFlag & 1 && transition && !transition.persisted) {
        const { leave, delayLeave } = transition;
        const performLeave = () => leave(el, performRemove);
        if (delayLeave) {
          delayLeave(vnode.el, performRemove, performLeave);
        } else {
          performLeave();
        }
      } else {
        performRemove();
      }
    };
    const removeFragment = (cur, end) => {
      let next;
      while (cur !== end) {
        next = hostNextSibling(cur);
        hostRemove(cur);
        cur = next;
      }
      hostRemove(end);
    };
    const unmountComponent = (instance, parentSuspense, doRemove) => {
      if (instance.type.__hmrId) {
        unregisterHMR(instance);
      }
      const { bum, scope, update, subTree, um } = instance;
      if (bum) {
        invokeArrayFns(bum);
      }
      scope.stop();
      if (update) {
        update.active = false;
        unmount(subTree, instance, parentSuspense, doRemove);
      }
      if (um) {
        queuePostRenderEffect(um, parentSuspense);
      }
      queuePostRenderEffect(() => {
        instance.isUnmounted = true;
      }, parentSuspense);
      if (parentSuspense && parentSuspense.pendingBranch && !parentSuspense.isUnmounted && instance.asyncDep && !instance.asyncResolved && instance.suspenseId === parentSuspense.pendingId) {
        parentSuspense.deps--;
        if (parentSuspense.deps === 0) {
          parentSuspense.resolve();
        }
      }
      if (true) {
        devtoolsComponentRemoved(instance);
      }
    };
    const unmountChildren = (children, parentComponent, parentSuspense, doRemove = false, optimized = false, start = 0) => {
      for (let i = start; i < children.length; i++) {
        unmount(children[i], parentComponent, parentSuspense, doRemove, optimized);
      }
    };
    const getNextHostNode = (vnode) => {
      if (vnode.shapeFlag & 6) {
        return getNextHostNode(vnode.component.subTree);
      }
      if (vnode.shapeFlag & 128) {
        return vnode.suspense.next();
      }
      return hostNextSibling(vnode.anchor || vnode.el);
    };
    let isFlushing2 = false;
    const render2 = (vnode, container, namespace) => {
      if (vnode == null) {
        if (container._vnode) {
          unmount(container._vnode, null, null, true);
        }
      } else {
        patch(
          container._vnode || null,
          vnode,
          container,
          null,
          null,
          null,
          namespace
        );
      }
      if (!isFlushing2) {
        isFlushing2 = true;
        flushPreFlushCbs();
        flushPostFlushCbs();
        isFlushing2 = false;
      }
      container._vnode = vnode;
    };
    const internals = {
      p: patch,
      um: unmount,
      m: move,
      r: remove2,
      mt: mountComponent,
      mc: mountChildren,
      pc: patchChildren,
      pbc: patchBlockChildren,
      n: getNextHostNode,
      o: options
    };
    let hydrate;
    let hydrateNode;
    if (createHydrationFns) {
      [hydrate, hydrateNode] = createHydrationFns(
        internals
      );
    }
    return {
      render: render2,
      hydrate,
      createApp: createAppAPI(render2, hydrate)
    };
  }
  function resolveChildrenNamespace({ type, props }, currentNamespace) {
    return currentNamespace === "svg" && type === "foreignObject" || currentNamespace === "mathml" && type === "annotation-xml" && props && props.encoding && props.encoding.includes("html") ? void 0 : currentNamespace;
  }
  function toggleRecurse({ effect: effect2, update }, allowed) {
    effect2.allowRecurse = update.allowRecurse = allowed;
  }
  function needTransition(parentSuspense, transition) {
    return (!parentSuspense || parentSuspense && !parentSuspense.pendingBranch) && transition && !transition.persisted;
  }
  function traverseStaticChildren(n1, n2, shallow = false) {
    const ch1 = n1.children;
    const ch2 = n2.children;
    if (isArray(ch1) && isArray(ch2)) {
      for (let i = 0; i < ch1.length; i++) {
        const c1 = ch1[i];
        let c2 = ch2[i];
        if (c2.shapeFlag & 1 && !c2.dynamicChildren) {
          if (c2.patchFlag <= 0 || c2.patchFlag === 32) {
            c2 = ch2[i] = cloneIfMounted(ch2[i]);
            c2.el = c1.el;
          }
          if (!shallow)
            traverseStaticChildren(c1, c2);
        }
        if (c2.type === Text) {
          c2.el = c1.el;
        }
        if (c2.type === Comment && !c2.el) {
          c2.el = c1.el;
        }
      }
    }
  }
  function getSequence(arr) {
    const p2 = arr.slice();
    const result = [0];
    let i, j, u, v, c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
      const arrI = arr[i];
      if (arrI !== 0) {
        j = result[result.length - 1];
        if (arr[j] < arrI) {
          p2[i] = j;
          result.push(i);
          continue;
        }
        u = 0;
        v = result.length - 1;
        while (u < v) {
          c = u + v >> 1;
          if (arr[result[c]] < arrI) {
            u = c + 1;
          } else {
            v = c;
          }
        }
        if (arrI < arr[result[u]]) {
          if (u > 0) {
            p2[i] = result[u - 1];
          }
          result[u] = i;
        }
      }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
      result[u] = v;
      v = p2[v];
    }
    return result;
  }
  function locateNonHydratedAsyncRoot(instance) {
    const subComponent = instance.subTree.component;
    if (subComponent) {
      if (subComponent.asyncDep && !subComponent.asyncResolved) {
        return subComponent;
      } else {
        return locateNonHydratedAsyncRoot(subComponent);
      }
    }
  }
  var isTeleport = (type) => type.__isTeleport;
  var Fragment = Symbol.for("v-fgt");
  var Text = Symbol.for("v-txt");
  var Comment = Symbol.for("v-cmt");
  var Static = Symbol.for("v-stc");
  var blockStack = [];
  var currentBlock = null;
  function openBlock(disableTracking = false) {
    blockStack.push(currentBlock = disableTracking ? null : []);
  }
  function closeBlock() {
    blockStack.pop();
    currentBlock = blockStack[blockStack.length - 1] || null;
  }
  var isBlockTreeEnabled = 1;
  function setBlockTracking(value) {
    isBlockTreeEnabled += value;
  }
  function setupBlock(vnode) {
    vnode.dynamicChildren = isBlockTreeEnabled > 0 ? currentBlock || EMPTY_ARR : null;
    closeBlock();
    if (isBlockTreeEnabled > 0 && currentBlock) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  function createElementBlock(type, props, children, patchFlag, dynamicProps, shapeFlag) {
    return setupBlock(
      createBaseVNode(
        type,
        props,
        children,
        patchFlag,
        dynamicProps,
        shapeFlag,
        true
      )
    );
  }
  function createBlock(type, props, children, patchFlag, dynamicProps) {
    return setupBlock(
      createVNode(
        type,
        props,
        children,
        patchFlag,
        dynamicProps,
        true
      )
    );
  }
  function isVNode(value) {
    return value ? value.__v_isVNode === true : false;
  }
  function isSameVNodeType(n1, n2) {
    if (n2.shapeFlag & 6 && hmrDirtyComponents.has(n2.type)) {
      n1.shapeFlag &= ~256;
      n2.shapeFlag &= ~512;
      return false;
    }
    return n1.type === n2.type && n1.key === n2.key;
  }
  var vnodeArgsTransformer;
  var createVNodeWithArgsTransform = (...args) => {
    return _createVNode(
      ...vnodeArgsTransformer ? vnodeArgsTransformer(args, currentRenderingInstance) : args
    );
  };
  var normalizeKey = ({ key }) => key != null ? key : null;
  var normalizeRef = ({
    ref: ref2,
    ref_key,
    ref_for
  }) => {
    if (typeof ref2 === "number") {
      ref2 = "" + ref2;
    }
    return ref2 != null ? isString(ref2) || isRef(ref2) || isFunction2(ref2) ? { i: currentRenderingInstance, r: ref2, k: ref_key, f: !!ref_for } : ref2 : null;
  };
  function createBaseVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, shapeFlag = type === Fragment ? 0 : 1, isBlockNode = false, needFullChildrenNormalization = false) {
    const vnode = {
      __v_isVNode: true,
      __v_skip: true,
      type,
      props,
      key: props && normalizeKey(props),
      ref: props && normalizeRef(props),
      scopeId: currentScopeId,
      slotScopeIds: null,
      children,
      component: null,
      suspense: null,
      ssContent: null,
      ssFallback: null,
      dirs: null,
      transition: null,
      el: null,
      anchor: null,
      target: null,
      targetAnchor: null,
      staticCount: 0,
      shapeFlag,
      patchFlag,
      dynamicProps,
      dynamicChildren: null,
      appContext: null,
      ctx: currentRenderingInstance
    };
    if (needFullChildrenNormalization) {
      normalizeChildren(vnode, children);
      if (shapeFlag & 128) {
        type.normalize(vnode);
      }
    } else if (children) {
      vnode.shapeFlag |= isString(children) ? 8 : 16;
    }
    if (vnode.key !== vnode.key) {
      warn$1(`VNode created with invalid key (NaN). VNode type:`, vnode.type);
    }
    if (isBlockTreeEnabled > 0 && // avoid a block node from tracking itself
    !isBlockNode && // has current parent block
    currentBlock && // presence of a patch flag indicates this node needs patching on updates.
    // component nodes also should always be patched, because even if the
    // component doesn't need to update, it needs to persist the instance on to
    // the next vnode so that it can be properly unmounted later.
    (vnode.patchFlag > 0 || shapeFlag & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
    // vnode should not be considered dynamic due to handler caching.
    vnode.patchFlag !== 32) {
      currentBlock.push(vnode);
    }
    return vnode;
  }
  var createVNode = true ? createVNodeWithArgsTransform : _createVNode;
  function _createVNode(type, props = null, children = null, patchFlag = 0, dynamicProps = null, isBlockNode = false) {
    if (!type || type === NULL_DYNAMIC_COMPONENT) {
      if (!type) {
        warn$1(`Invalid vnode type when creating vnode: ${type}.`);
      }
      type = Comment;
    }
    if (isVNode(type)) {
      const cloned = cloneVNode(
        type,
        props,
        true
        /* mergeRef: true */
      );
      if (children) {
        normalizeChildren(cloned, children);
      }
      if (isBlockTreeEnabled > 0 && !isBlockNode && currentBlock) {
        if (cloned.shapeFlag & 6) {
          currentBlock[currentBlock.indexOf(type)] = cloned;
        } else {
          currentBlock.push(cloned);
        }
      }
      cloned.patchFlag |= -2;
      return cloned;
    }
    if (isClassComponent(type)) {
      type = type.__vccOpts;
    }
    if (props) {
      props = guardReactiveProps(props);
      let { class: klass, style } = props;
      if (klass && !isString(klass)) {
        props.class = normalizeClass(klass);
      }
      if (isObject(style)) {
        if (isProxy(style) && !isArray(style)) {
          style = extend({}, style);
        }
        props.style = normalizeStyle(style);
      }
    }
    const shapeFlag = isString(type) ? 1 : isSuspense(type) ? 128 : isTeleport(type) ? 64 : isObject(type) ? 4 : isFunction2(type) ? 2 : 0;
    if (shapeFlag & 4 && isProxy(type)) {
      type = toRaw(type);
      warn$1(
        `Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with \`markRaw\` or using \`shallowRef\` instead of \`ref\`.`,
        `
Component that was made reactive: `,
        type
      );
    }
    return createBaseVNode(
      type,
      props,
      children,
      patchFlag,
      dynamicProps,
      shapeFlag,
      isBlockNode,
      true
    );
  }
  function guardReactiveProps(props) {
    if (!props)
      return null;
    return isProxy(props) || isInternalObject(props) ? extend({}, props) : props;
  }
  function cloneVNode(vnode, extraProps, mergeRef = false, cloneTransition = false) {
    const { props, ref: ref2, patchFlag, children, transition } = vnode;
    const mergedProps = extraProps ? mergeProps(props || {}, extraProps) : props;
    const cloned = {
      __v_isVNode: true,
      __v_skip: true,
      type: vnode.type,
      props: mergedProps,
      key: mergedProps && normalizeKey(mergedProps),
      ref: extraProps && extraProps.ref ? (
        // #2078 in the case of <component :is="vnode" ref="extra"/>
        // if the vnode itself already has a ref, cloneVNode will need to merge
        // the refs so the single vnode can be set on multiple refs
        mergeRef && ref2 ? isArray(ref2) ? ref2.concat(normalizeRef(extraProps)) : [ref2, normalizeRef(extraProps)] : normalizeRef(extraProps)
      ) : ref2,
      scopeId: vnode.scopeId,
      slotScopeIds: vnode.slotScopeIds,
      children: patchFlag === -1 && isArray(children) ? children.map(deepCloneVNode) : children,
      target: vnode.target,
      targetAnchor: vnode.targetAnchor,
      staticCount: vnode.staticCount,
      shapeFlag: vnode.shapeFlag,
      // if the vnode is cloned with extra props, we can no longer assume its
      // existing patch flag to be reliable and need to add the FULL_PROPS flag.
      // note: preserve flag for fragments since they use the flag for children
      // fast paths only.
      patchFlag: extraProps && vnode.type !== Fragment ? patchFlag === -1 ? 16 : patchFlag | 16 : patchFlag,
      dynamicProps: vnode.dynamicProps,
      dynamicChildren: vnode.dynamicChildren,
      appContext: vnode.appContext,
      dirs: vnode.dirs,
      transition,
      // These should technically only be non-null on mounted VNodes. However,
      // they *should* be copied for kept-alive vnodes. So we just always copy
      // them since them being non-null during a mount doesn't affect the logic as
      // they will simply be overwritten.
      component: vnode.component,
      suspense: vnode.suspense,
      ssContent: vnode.ssContent && cloneVNode(vnode.ssContent),
      ssFallback: vnode.ssFallback && cloneVNode(vnode.ssFallback),
      el: vnode.el,
      anchor: vnode.anchor,
      ctx: vnode.ctx,
      ce: vnode.ce
    };
    if (transition && cloneTransition) {
      cloned.transition = transition.clone(cloned);
    }
    return cloned;
  }
  function deepCloneVNode(vnode) {
    const cloned = cloneVNode(vnode);
    if (isArray(vnode.children)) {
      cloned.children = vnode.children.map(deepCloneVNode);
    }
    return cloned;
  }
  function createTextVNode(text = " ", flag = 0) {
    return createVNode(Text, null, text, flag);
  }
  function createCommentVNode(text = "", asBlock = false) {
    return asBlock ? (openBlock(), createBlock(Comment, null, text)) : createVNode(Comment, null, text);
  }
  function normalizeVNode(child) {
    if (child == null || typeof child === "boolean") {
      return createVNode(Comment);
    } else if (isArray(child)) {
      return createVNode(
        Fragment,
        null,
        // #3666, avoid reference pollution when reusing vnode
        child.slice()
      );
    } else if (typeof child === "object") {
      return cloneIfMounted(child);
    } else {
      return createVNode(Text, null, String(child));
    }
  }
  function cloneIfMounted(child) {
    return child.el === null && child.patchFlag !== -1 || child.memo ? child : cloneVNode(child);
  }
  function normalizeChildren(vnode, children) {
    let type = 0;
    const { shapeFlag } = vnode;
    if (children == null) {
      children = null;
    } else if (isArray(children)) {
      type = 16;
    } else if (typeof children === "object") {
      if (shapeFlag & (1 | 64)) {
        const slot = children.default;
        if (slot) {
          slot._c && (slot._d = false);
          normalizeChildren(vnode, slot());
          slot._c && (slot._d = true);
        }
        return;
      } else {
        type = 32;
        const slotFlag = children._;
        if (!slotFlag && !isInternalObject(children)) {
          children._ctx = currentRenderingInstance;
        } else if (slotFlag === 3 && currentRenderingInstance) {
          if (currentRenderingInstance.slots._ === 1) {
            children._ = 1;
          } else {
            children._ = 2;
            vnode.patchFlag |= 1024;
          }
        }
      }
    } else if (isFunction2(children)) {
      children = { default: children, _ctx: currentRenderingInstance };
      type = 32;
    } else {
      children = String(children);
      if (shapeFlag & 64) {
        type = 16;
        children = [createTextVNode(children)];
      } else {
        type = 8;
      }
    }
    vnode.children = children;
    vnode.shapeFlag |= type;
  }
  function mergeProps(...args) {
    const ret = {};
    for (let i = 0; i < args.length; i++) {
      const toMerge = args[i];
      for (const key in toMerge) {
        if (key === "class") {
          if (ret.class !== toMerge.class) {
            ret.class = normalizeClass([ret.class, toMerge.class]);
          }
        } else if (key === "style") {
          ret.style = normalizeStyle([ret.style, toMerge.style]);
        } else if (isOn(key)) {
          const existing = ret[key];
          const incoming = toMerge[key];
          if (incoming && existing !== incoming && !(isArray(existing) && existing.includes(incoming))) {
            ret[key] = existing ? [].concat(existing, incoming) : incoming;
          }
        } else if (key !== "") {
          ret[key] = toMerge[key];
        }
      }
    }
    return ret;
  }
  function invokeVNodeHook(hook, instance, vnode, prevVNode = null) {
    callWithAsyncErrorHandling(hook, instance, 7, [
      vnode,
      prevVNode
    ]);
  }
  var emptyAppContext = createAppContext();
  var uid = 0;
  function createComponentInstance(vnode, parent, suspense) {
    const type = vnode.type;
    const appContext = (parent ? parent.appContext : vnode.appContext) || emptyAppContext;
    const instance = {
      uid: uid++,
      vnode,
      type,
      parent,
      appContext,
      root: null,
      // to be immediately set
      next: null,
      subTree: null,
      // will be set synchronously right after creation
      effect: null,
      update: null,
      // will be set synchronously right after creation
      scope: new EffectScope(
        true
        /* detached */
      ),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: parent ? parent.provides : Object.create(appContext.provides),
      accessCache: null,
      renderCache: [],
      // local resolved assets
      components: null,
      directives: null,
      // resolved props and emits options
      propsOptions: normalizePropsOptions(type, appContext),
      emitsOptions: normalizeEmitsOptions(type, appContext),
      // emit
      emit: null,
      // to be set immediately
      emitted: null,
      // props default value
      propsDefaults: EMPTY_OBJ,
      // inheritAttrs
      inheritAttrs: type.inheritAttrs,
      // state
      ctx: EMPTY_OBJ,
      data: EMPTY_OBJ,
      props: EMPTY_OBJ,
      attrs: EMPTY_OBJ,
      slots: EMPTY_OBJ,
      refs: EMPTY_OBJ,
      setupState: EMPTY_OBJ,
      setupContext: null,
      attrsProxy: null,
      slotsProxy: null,
      // suspense related
      suspense,
      suspenseId: suspense ? suspense.pendingId : 0,
      asyncDep: null,
      asyncResolved: false,
      // lifecycle hooks
      // not using enums here because it results in computed properties
      isMounted: false,
      isUnmounted: false,
      isDeactivated: false,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null
    };
    if (true) {
      instance.ctx = createDevRenderContext(instance);
    } else {
      instance.ctx = { _: instance };
    }
    instance.root = parent ? parent.root : instance;
    instance.emit = emit.bind(null, instance);
    if (vnode.ce) {
      vnode.ce(instance);
    }
    return instance;
  }
  var currentInstance = null;
  var getCurrentInstance = () => currentInstance || currentRenderingInstance;
  var internalSetCurrentInstance;
  var setInSSRSetupState;
  {
    const g = getGlobalThis();
    const registerGlobalSetter = (key, setter) => {
      let setters;
      if (!(setters = g[key]))
        setters = g[key] = [];
      setters.push(setter);
      return (v) => {
        if (setters.length > 1)
          setters.forEach((set2) => set2(v));
        else
          setters[0](v);
      };
    };
    internalSetCurrentInstance = registerGlobalSetter(
      `__VUE_INSTANCE_SETTERS__`,
      (v) => currentInstance = v
    );
    setInSSRSetupState = registerGlobalSetter(
      `__VUE_SSR_SETTERS__`,
      (v) => isInSSRComponentSetup = v
    );
  }
  var setCurrentInstance = (instance) => {
    const prev = currentInstance;
    internalSetCurrentInstance(instance);
    instance.scope.on();
    return () => {
      instance.scope.off();
      internalSetCurrentInstance(prev);
    };
  };
  var unsetCurrentInstance = () => {
    currentInstance && currentInstance.scope.off();
    internalSetCurrentInstance(null);
  };
  var isBuiltInTag = /* @__PURE__ */ makeMap("slot,component");
  function validateComponentName(name, { isNativeTag }) {
    if (isBuiltInTag(name) || isNativeTag(name)) {
      warn$1(
        "Do not use built-in or reserved HTML elements as component id: " + name
      );
    }
  }
  function isStatefulComponent(instance) {
    return instance.vnode.shapeFlag & 4;
  }
  var isInSSRComponentSetup = false;
  function setupComponent(instance, isSSR = false) {
    isSSR && setInSSRSetupState(isSSR);
    const { props, children } = instance.vnode;
    const isStateful = isStatefulComponent(instance);
    initProps(instance, props, isStateful, isSSR);
    initSlots(instance, children);
    const setupResult = isStateful ? setupStatefulComponent(instance, isSSR) : void 0;
    isSSR && setInSSRSetupState(false);
    return setupResult;
  }
  function setupStatefulComponent(instance, isSSR) {
    var _a;
    const Component = instance.type;
    if (true) {
      if (Component.name) {
        validateComponentName(Component.name, instance.appContext.config);
      }
      if (Component.components) {
        const names = Object.keys(Component.components);
        for (let i = 0; i < names.length; i++) {
          validateComponentName(names[i], instance.appContext.config);
        }
      }
      if (Component.directives) {
        const names = Object.keys(Component.directives);
        for (let i = 0; i < names.length; i++) {
          validateDirectiveName(names[i]);
        }
      }
      if (Component.compilerOptions && isRuntimeOnly()) {
        warn$1(
          `"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.`
        );
      }
    }
    instance.accessCache = /* @__PURE__ */ Object.create(null);
    instance.proxy = new Proxy(instance.ctx, PublicInstanceProxyHandlers);
    if (true) {
      exposePropsOnRenderContext(instance);
    }
    const { setup } = Component;
    if (setup) {
      const setupContext = instance.setupContext = setup.length > 1 ? createSetupContext(instance) : null;
      const reset = setCurrentInstance(instance);
      pauseTracking();
      const setupResult = callWithErrorHandling(
        setup,
        instance,
        0,
        [
          true ? shallowReadonly(instance.props) : instance.props,
          setupContext
        ]
      );
      resetTracking();
      reset();
      if (isPromise(setupResult)) {
        setupResult.then(unsetCurrentInstance, unsetCurrentInstance);
        if (isSSR) {
          return setupResult.then((resolvedResult) => {
            handleSetupResult(instance, resolvedResult, isSSR);
          }).catch((e) => {
            handleError(e, instance, 0);
          });
        } else {
          instance.asyncDep = setupResult;
          if (!instance.suspense) {
            const name = (_a = Component.name) != null ? _a : "Anonymous";
            warn$1(
              `Component <${name}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
            );
          }
        }
      } else {
        handleSetupResult(instance, setupResult, isSSR);
      }
    } else {
      finishComponentSetup(instance, isSSR);
    }
  }
  function handleSetupResult(instance, setupResult, isSSR) {
    if (isFunction2(setupResult)) {
      if (instance.type.__ssrInlineRender) {
        instance.ssrRender = setupResult;
      } else {
        instance.render = setupResult;
      }
    } else if (isObject(setupResult)) {
      if (isVNode(setupResult)) {
        warn$1(
          `setup() should not return VNodes directly - return a render function instead.`
        );
      }
      if (true) {
        instance.devtoolsRawSetupState = setupResult;
      }
      instance.setupState = proxyRefs(setupResult);
      if (true) {
        exposeSetupStateOnRenderContext(instance);
      }
    } else if (setupResult !== void 0) {
      warn$1(
        `setup() should return an object. Received: ${setupResult === null ? "null" : typeof setupResult}`
      );
    }
    finishComponentSetup(instance, isSSR);
  }
  var compile;
  var installWithProxy;
  var isRuntimeOnly = () => !compile;
  function finishComponentSetup(instance, isSSR, skipOptions) {
    const Component = instance.type;
    if (!instance.render) {
      if (!isSSR && compile && !Component.render) {
        const template = Component.template || resolveMergedOptions(instance).template;
        if (template) {
          if (true) {
            startMeasure(instance, `compile`);
          }
          const { isCustomElement, compilerOptions } = instance.appContext.config;
          const { delimiters, compilerOptions: componentCompilerOptions } = Component;
          const finalCompilerOptions = extend(
            extend(
              {
                isCustomElement,
                delimiters
              },
              compilerOptions
            ),
            componentCompilerOptions
          );
          Component.render = compile(template, finalCompilerOptions);
          if (true) {
            endMeasure(instance, `compile`);
          }
        }
      }
      instance.render = Component.render || NOOP;
      if (installWithProxy) {
        installWithProxy(instance);
      }
    }
    if (true) {
      const reset = setCurrentInstance(instance);
      pauseTracking();
      try {
        applyOptions(instance);
      } finally {
        resetTracking();
        reset();
      }
    }
    if (!Component.render && instance.render === NOOP && !isSSR) {
      if (!compile && Component.template) {
        warn$1(
          `Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".`
        );
      } else {
        warn$1(`Component is missing template or render function.`);
      }
    }
  }
  var attrsProxyHandlers = true ? {
    get(target, key) {
      markAttrsAccessed();
      track(target, "get", "");
      return target[key];
    },
    set() {
      warn$1(`setupContext.attrs is readonly.`);
      return false;
    },
    deleteProperty() {
      warn$1(`setupContext.attrs is readonly.`);
      return false;
    }
  } : {
    get(target, key) {
      track(target, "get", "");
      return target[key];
    }
  };
  function getSlotsProxy(instance) {
    return instance.slotsProxy || (instance.slotsProxy = new Proxy(instance.slots, {
      get(target, key) {
        track(instance, "get", "$slots");
        return target[key];
      }
    }));
  }
  function createSetupContext(instance) {
    const expose = (exposed) => {
      if (true) {
        if (instance.exposed) {
          warn$1(`expose() should be called only once per setup().`);
        }
        if (exposed != null) {
          let exposedType = typeof exposed;
          if (exposedType === "object") {
            if (isArray(exposed)) {
              exposedType = "array";
            } else if (isRef(exposed)) {
              exposedType = "ref";
            }
          }
          if (exposedType !== "object") {
            warn$1(
              `expose() should be passed a plain object, received ${exposedType}.`
            );
          }
        }
      }
      instance.exposed = exposed || {};
    };
    if (true) {
      let attrsProxy;
      return Object.freeze({
        get attrs() {
          return attrsProxy || (attrsProxy = new Proxy(instance.attrs, attrsProxyHandlers));
        },
        get slots() {
          return getSlotsProxy(instance);
        },
        get emit() {
          return (event, ...args) => instance.emit(event, ...args);
        },
        expose
      });
    } else {
      return {
        attrs: new Proxy(instance.attrs, attrsProxyHandlers),
        slots: instance.slots,
        emit: instance.emit,
        expose
      };
    }
  }
  function getExposeProxy(instance) {
    if (instance.exposed) {
      return instance.exposeProxy || (instance.exposeProxy = new Proxy(proxyRefs(markRaw(instance.exposed)), {
        get(target, key) {
          if (key in target) {
            return target[key];
          } else if (key in publicPropertiesMap) {
            return publicPropertiesMap[key](instance);
          }
        },
        has(target, key) {
          return key in target || key in publicPropertiesMap;
        }
      }));
    }
  }
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = (str2) => str2.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
  function getComponentName(Component, includeInferred = true) {
    return isFunction2(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
  }
  function formatComponentName(instance, Component, isRoot = false) {
    let name = getComponentName(Component);
    if (!name && Component.__file) {
      const match = Component.__file.match(/([^/\\]+)\.\w+$/);
      if (match) {
        name = match[1];
      }
    }
    if (!name && instance && instance.parent) {
      const inferFromRegistry = (registry) => {
        for (const key in registry) {
          if (registry[key] === Component) {
            return key;
          }
        }
      };
      name = inferFromRegistry(
        instance.components || instance.parent.type.components
      ) || inferFromRegistry(instance.appContext.components);
    }
    return name ? classify(name) : isRoot ? `App` : `Anonymous`;
  }
  function isClassComponent(value) {
    return isFunction2(value) && "__vccOpts" in value;
  }
  var computed2 = (getterOrOptions, debugOptions) => {
    const c = computed(getterOrOptions, debugOptions, isInSSRComponentSetup);
    if (true) {
      const i = getCurrentInstance();
      if (i && i.appContext.config.warnRecursiveComputed) {
        c._warnRecursive = true;
      }
    }
    return c;
  };
  function h(type, propsOrChildren, children) {
    const l = arguments.length;
    if (l === 2) {
      if (isObject(propsOrChildren) && !isArray(propsOrChildren)) {
        if (isVNode(propsOrChildren)) {
          return createVNode(type, null, [propsOrChildren]);
        }
        return createVNode(type, propsOrChildren);
      } else {
        return createVNode(type, null, propsOrChildren);
      }
    } else {
      if (l > 3) {
        children = Array.prototype.slice.call(arguments, 2);
      } else if (l === 3 && isVNode(children)) {
        children = [children];
      }
      return createVNode(type, propsOrChildren, children);
    }
  }
  function initCustomFormatter() {
    if (typeof window === "undefined") {
      return;
    }
    const vueStyle = { style: "color:#3ba776" };
    const numberStyle = { style: "color:#1677ff" };
    const stringStyle = { style: "color:#f5222d" };
    const keywordStyle = { style: "color:#eb2f96" };
    const formatter = {
      header(obj) {
        if (!isObject(obj)) {
          return null;
        }
        if (obj.__isVue) {
          return ["div", vueStyle, `VueInstance`];
        } else if (isRef(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, genRefFlag(obj)],
            "<",
            formatValue(obj.value),
            `>`
          ];
        } else if (isReactive(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"],
            "<",
            formatValue(obj),
            `>${isReadonly(obj) ? ` (readonly)` : ``}`
          ];
        } else if (isReadonly(obj)) {
          return [
            "div",
            {},
            ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"],
            "<",
            formatValue(obj),
            ">"
          ];
        }
        return null;
      },
      hasBody(obj) {
        return obj && obj.__isVue;
      },
      body(obj) {
        if (obj && obj.__isVue) {
          return [
            "div",
            {},
            ...formatInstance(obj.$)
          ];
        }
      }
    };
    function formatInstance(instance) {
      const blocks = [];
      if (instance.type.props && instance.props) {
        blocks.push(createInstanceBlock("props", toRaw(instance.props)));
      }
      if (instance.setupState !== EMPTY_OBJ) {
        blocks.push(createInstanceBlock("setup", instance.setupState));
      }
      if (instance.data !== EMPTY_OBJ) {
        blocks.push(createInstanceBlock("data", toRaw(instance.data)));
      }
      const computed3 = extractKeys(instance, "computed");
      if (computed3) {
        blocks.push(createInstanceBlock("computed", computed3));
      }
      const injected = extractKeys(instance, "inject");
      if (injected) {
        blocks.push(createInstanceBlock("injected", injected));
      }
      blocks.push([
        "div",
        {},
        [
          "span",
          {
            style: keywordStyle.style + ";opacity:0.66"
          },
          "$ (internal): "
        ],
        ["object", { object: instance }]
      ]);
      return blocks;
    }
    function createInstanceBlock(type, target) {
      target = extend({}, target);
      if (!Object.keys(target).length) {
        return ["span", {}];
      }
      return [
        "div",
        { style: "line-height:1.25em;margin-bottom:0.6em" },
        [
          "div",
          {
            style: "color:#476582"
          },
          type
        ],
        [
          "div",
          {
            style: "padding-left:1.25em"
          },
          ...Object.keys(target).map((key) => {
            return [
              "div",
              {},
              ["span", keywordStyle, key + ": "],
              formatValue(target[key], false)
            ];
          })
        ]
      ];
    }
    function formatValue(v, asRaw = true) {
      if (typeof v === "number") {
        return ["span", numberStyle, v];
      } else if (typeof v === "string") {
        return ["span", stringStyle, JSON.stringify(v)];
      } else if (typeof v === "boolean") {
        return ["span", keywordStyle, v];
      } else if (isObject(v)) {
        return ["object", { object: asRaw ? toRaw(v) : v }];
      } else {
        return ["span", stringStyle, String(v)];
      }
    }
    function extractKeys(instance, type) {
      const Comp = instance.type;
      if (isFunction2(Comp)) {
        return;
      }
      const extracted = {};
      for (const key in instance.ctx) {
        if (isKeyOfType(Comp, key, type)) {
          extracted[key] = instance.ctx[key];
        }
      }
      return extracted;
    }
    function isKeyOfType(Comp, key, type) {
      const opts = Comp[type];
      if (isArray(opts) && opts.includes(key) || isObject(opts) && key in opts) {
        return true;
      }
      if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
        return true;
      }
      if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
        return true;
      }
    }
    function genRefFlag(v) {
      if (isShallow(v)) {
        return `ShallowRef`;
      }
      if (v.effect) {
        return `ComputedRef`;
      }
      return `Ref`;
    }
    if (window.devtoolsFormatters) {
      window.devtoolsFormatters.push(formatter);
    } else {
      window.devtoolsFormatters = [formatter];
    }
  }
  var version = "3.4.26";
  var warn2 = true ? warn$1 : NOOP;

  // node_modules/@vue/runtime-dom/dist/runtime-dom.esm-bundler.js
  var svgNS = "http://www.w3.org/2000/svg";
  var mathmlNS = "http://www.w3.org/1998/Math/MathML";
  var doc = typeof document !== "undefined" ? document : null;
  var templateContainer = doc && /* @__PURE__ */ doc.createElement("template");
  var nodeOps = {
    insert: (child, parent, anchor) => {
      parent.insertBefore(child, anchor || null);
    },
    remove: (child) => {
      const parent = child.parentNode;
      if (parent) {
        parent.removeChild(child);
      }
    },
    createElement: (tag, namespace, is, props) => {
      const el = namespace === "svg" ? doc.createElementNS(svgNS, tag) : namespace === "mathml" ? doc.createElementNS(mathmlNS, tag) : doc.createElement(tag, is ? { is } : void 0);
      if (tag === "select" && props && props.multiple != null) {
        el.setAttribute("multiple", props.multiple);
      }
      return el;
    },
    createText: (text) => doc.createTextNode(text),
    createComment: (text) => doc.createComment(text),
    setText: (node, text) => {
      node.nodeValue = text;
    },
    setElementText: (el, text) => {
      el.textContent = text;
    },
    parentNode: (node) => node.parentNode,
    nextSibling: (node) => node.nextSibling,
    querySelector: (selector) => doc.querySelector(selector),
    setScopeId(el, id) {
      el.setAttribute(id, "");
    },
    // __UNSAFE__
    // Reason: innerHTML.
    // Static content here can only come from compiled templates.
    // As long as the user only uses trusted templates, this is safe.
    insertStaticContent(content, parent, anchor, namespace, start, end) {
      const before = anchor ? anchor.previousSibling : parent.lastChild;
      if (start && (start === end || start.nextSibling)) {
        while (true) {
          parent.insertBefore(start.cloneNode(true), anchor);
          if (start === end || !(start = start.nextSibling))
            break;
        }
      } else {
        templateContainer.innerHTML = namespace === "svg" ? `<svg>${content}</svg>` : namespace === "mathml" ? `<math>${content}</math>` : content;
        const template = templateContainer.content;
        if (namespace === "svg" || namespace === "mathml") {
          const wrapper = template.firstChild;
          while (wrapper.firstChild) {
            template.appendChild(wrapper.firstChild);
          }
          template.removeChild(wrapper);
        }
        parent.insertBefore(template, anchor);
      }
      return [
        // first
        before ? before.nextSibling : parent.firstChild,
        // last
        anchor ? anchor.previousSibling : parent.lastChild
      ];
    }
  };
  var TRANSITION = "transition";
  var ANIMATION = "animation";
  var vtcKey = Symbol("_vtc");
  var Transition = (props, { slots }) => h(BaseTransition, resolveTransitionProps(props), slots);
  Transition.displayName = "Transition";
  var DOMTransitionPropsValidators = {
    name: String,
    type: String,
    css: {
      type: Boolean,
      default: true
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
  };
  var TransitionPropsValidators = Transition.props = /* @__PURE__ */ extend(
    {},
    BaseTransitionPropsValidators,
    DOMTransitionPropsValidators
  );
  var callHook2 = (hook, args = []) => {
    if (isArray(hook)) {
      hook.forEach((h2) => h2(...args));
    } else if (hook) {
      hook(...args);
    }
  };
  var hasExplicitCallback = (hook) => {
    return hook ? isArray(hook) ? hook.some((h2) => h2.length > 1) : hook.length > 1 : false;
  };
  function resolveTransitionProps(rawProps) {
    const baseProps = {};
    for (const key in rawProps) {
      if (!(key in DOMTransitionPropsValidators)) {
        baseProps[key] = rawProps[key];
      }
    }
    if (rawProps.css === false) {
      return baseProps;
    }
    const {
      name = "v",
      type,
      duration,
      enterFromClass = `${name}-enter-from`,
      enterActiveClass = `${name}-enter-active`,
      enterToClass = `${name}-enter-to`,
      appearFromClass = enterFromClass,
      appearActiveClass = enterActiveClass,
      appearToClass = enterToClass,
      leaveFromClass = `${name}-leave-from`,
      leaveActiveClass = `${name}-leave-active`,
      leaveToClass = `${name}-leave-to`
    } = rawProps;
    const durations = normalizeDuration(duration);
    const enterDuration = durations && durations[0];
    const leaveDuration = durations && durations[1];
    const {
      onBeforeEnter,
      onEnter,
      onEnterCancelled,
      onLeave,
      onLeaveCancelled,
      onBeforeAppear = onBeforeEnter,
      onAppear = onEnter,
      onAppearCancelled = onEnterCancelled
    } = baseProps;
    const finishEnter = (el, isAppear, done) => {
      removeTransitionClass(el, isAppear ? appearToClass : enterToClass);
      removeTransitionClass(el, isAppear ? appearActiveClass : enterActiveClass);
      done && done();
    };
    const finishLeave = (el, done) => {
      el._isLeaving = false;
      removeTransitionClass(el, leaveFromClass);
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
      done && done();
    };
    const makeEnterHook = (isAppear) => {
      return (el, done) => {
        const hook = isAppear ? onAppear : onEnter;
        const resolve = () => finishEnter(el, isAppear, done);
        callHook2(hook, [el, resolve]);
        nextFrame(() => {
          removeTransitionClass(el, isAppear ? appearFromClass : enterFromClass);
          addTransitionClass(el, isAppear ? appearToClass : enterToClass);
          if (!hasExplicitCallback(hook)) {
            whenTransitionEnds(el, type, enterDuration, resolve);
          }
        });
      };
    };
    return extend(baseProps, {
      onBeforeEnter(el) {
        callHook2(onBeforeEnter, [el]);
        addTransitionClass(el, enterFromClass);
        addTransitionClass(el, enterActiveClass);
      },
      onBeforeAppear(el) {
        callHook2(onBeforeAppear, [el]);
        addTransitionClass(el, appearFromClass);
        addTransitionClass(el, appearActiveClass);
      },
      onEnter: makeEnterHook(false),
      onAppear: makeEnterHook(true),
      onLeave(el, done) {
        el._isLeaving = true;
        const resolve = () => finishLeave(el, done);
        addTransitionClass(el, leaveFromClass);
        addTransitionClass(el, leaveActiveClass);
        forceReflow();
        nextFrame(() => {
          if (!el._isLeaving) {
            return;
          }
          removeTransitionClass(el, leaveFromClass);
          addTransitionClass(el, leaveToClass);
          if (!hasExplicitCallback(onLeave)) {
            whenTransitionEnds(el, type, leaveDuration, resolve);
          }
        });
        callHook2(onLeave, [el, resolve]);
      },
      onEnterCancelled(el) {
        finishEnter(el, false);
        callHook2(onEnterCancelled, [el]);
      },
      onAppearCancelled(el) {
        finishEnter(el, true);
        callHook2(onAppearCancelled, [el]);
      },
      onLeaveCancelled(el) {
        finishLeave(el);
        callHook2(onLeaveCancelled, [el]);
      }
    });
  }
  function normalizeDuration(duration) {
    if (duration == null) {
      return null;
    } else if (isObject(duration)) {
      return [NumberOf(duration.enter), NumberOf(duration.leave)];
    } else {
      const n = NumberOf(duration);
      return [n, n];
    }
  }
  function NumberOf(val) {
    const res = toNumber(val);
    if (true) {
      assertNumber(res, "<transition> explicit duration");
    }
    return res;
  }
  function addTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c) => c && el.classList.add(c));
    (el[vtcKey] || (el[vtcKey] = /* @__PURE__ */ new Set())).add(cls);
  }
  function removeTransitionClass(el, cls) {
    cls.split(/\s+/).forEach((c) => c && el.classList.remove(c));
    const _vtc = el[vtcKey];
    if (_vtc) {
      _vtc.delete(cls);
      if (!_vtc.size) {
        el[vtcKey] = void 0;
      }
    }
  }
  function nextFrame(cb) {
    requestAnimationFrame(() => {
      requestAnimationFrame(cb);
    });
  }
  var endId = 0;
  function whenTransitionEnds(el, expectedType, explicitTimeout, resolve) {
    const id = el._endId = ++endId;
    const resolveIfNotStale = () => {
      if (id === el._endId) {
        resolve();
      }
    };
    if (explicitTimeout) {
      return setTimeout(resolveIfNotStale, explicitTimeout);
    }
    const { type, timeout, propCount } = getTransitionInfo(el, expectedType);
    if (!type) {
      return resolve();
    }
    const endEvent = type + "end";
    let ended = 0;
    const end = () => {
      el.removeEventListener(endEvent, onEnd);
      resolveIfNotStale();
    };
    const onEnd = (e) => {
      if (e.target === el && ++ended >= propCount) {
        end();
      }
    };
    setTimeout(() => {
      if (ended < propCount) {
        end();
      }
    }, timeout + 1);
    el.addEventListener(endEvent, onEnd);
  }
  function getTransitionInfo(el, expectedType) {
    const styles = window.getComputedStyle(el);
    const getStyleProperties = (key) => (styles[key] || "").split(", ");
    const transitionDelays = getStyleProperties(`${TRANSITION}Delay`);
    const transitionDurations = getStyleProperties(`${TRANSITION}Duration`);
    const transitionTimeout = getTimeout(transitionDelays, transitionDurations);
    const animationDelays = getStyleProperties(`${ANIMATION}Delay`);
    const animationDurations = getStyleProperties(`${ANIMATION}Duration`);
    const animationTimeout = getTimeout(animationDelays, animationDurations);
    let type = null;
    let timeout = 0;
    let propCount = 0;
    if (expectedType === TRANSITION) {
      if (transitionTimeout > 0) {
        type = TRANSITION;
        timeout = transitionTimeout;
        propCount = transitionDurations.length;
      }
    } else if (expectedType === ANIMATION) {
      if (animationTimeout > 0) {
        type = ANIMATION;
        timeout = animationTimeout;
        propCount = animationDurations.length;
      }
    } else {
      timeout = Math.max(transitionTimeout, animationTimeout);
      type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
      propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
    }
    const hasTransform = type === TRANSITION && /\b(transform|all)(,|$)/.test(
      getStyleProperties(`${TRANSITION}Property`).toString()
    );
    return {
      type,
      timeout,
      propCount,
      hasTransform
    };
  }
  function getTimeout(delays, durations) {
    while (delays.length < durations.length) {
      delays = delays.concat(delays);
    }
    return Math.max(...durations.map((d, i) => toMs(d) + toMs(delays[i])));
  }
  function toMs(s) {
    if (s === "auto")
      return 0;
    return Number(s.slice(0, -1).replace(",", ".")) * 1e3;
  }
  function forceReflow() {
    return document.body.offsetHeight;
  }
  function patchClass(el, value, isSVG) {
    const transitionClasses = el[vtcKey];
    if (transitionClasses) {
      value = (value ? [value, ...transitionClasses] : [...transitionClasses]).join(" ");
    }
    if (value == null) {
      el.removeAttribute("class");
    } else if (isSVG) {
      el.setAttribute("class", value);
    } else {
      el.className = value;
    }
  }
  var vShowOriginalDisplay = Symbol("_vod");
  var vShowHidden = Symbol("_vsh");
  var vShow = {
    beforeMount(el, { value }, { transition }) {
      el[vShowOriginalDisplay] = el.style.display === "none" ? "" : el.style.display;
      if (transition && value) {
        transition.beforeEnter(el);
      } else {
        setDisplay(el, value);
      }
    },
    mounted(el, { value }, { transition }) {
      if (transition && value) {
        transition.enter(el);
      }
    },
    updated(el, { value, oldValue }, { transition }) {
      if (!value === !oldValue)
        return;
      if (transition) {
        if (value) {
          transition.beforeEnter(el);
          setDisplay(el, true);
          transition.enter(el);
        } else {
          transition.leave(el, () => {
            setDisplay(el, false);
          });
        }
      } else {
        setDisplay(el, value);
      }
    },
    beforeUnmount(el, { value }) {
      setDisplay(el, value);
    }
  };
  if (true) {
    vShow.name = "show";
  }
  function setDisplay(el, value) {
    el.style.display = value ? el[vShowOriginalDisplay] : "none";
    el[vShowHidden] = !value;
  }
  var CSS_VAR_TEXT = Symbol(true ? "CSS_VAR_TEXT" : "");
  var displayRE = /(^|;)\s*display\s*:/;
  function patchStyle(el, prev, next) {
    const style = el.style;
    const isCssString = isString(next);
    let hasControlledDisplay = false;
    if (next && !isCssString) {
      if (prev) {
        if (!isString(prev)) {
          for (const key in prev) {
            if (next[key] == null) {
              setStyle(style, key, "");
            }
          }
        } else {
          for (const prevStyle of prev.split(";")) {
            const key = prevStyle.slice(0, prevStyle.indexOf(":")).trim();
            if (next[key] == null) {
              setStyle(style, key, "");
            }
          }
        }
      }
      for (const key in next) {
        if (key === "display") {
          hasControlledDisplay = true;
        }
        setStyle(style, key, next[key]);
      }
    } else {
      if (isCssString) {
        if (prev !== next) {
          const cssVarText = style[CSS_VAR_TEXT];
          if (cssVarText) {
            next += ";" + cssVarText;
          }
          style.cssText = next;
          hasControlledDisplay = displayRE.test(next);
        }
      } else if (prev) {
        el.removeAttribute("style");
      }
    }
    if (vShowOriginalDisplay in el) {
      el[vShowOriginalDisplay] = hasControlledDisplay ? style.display : "";
      if (el[vShowHidden]) {
        style.display = "none";
      }
    }
  }
  var semicolonRE = /[^\\];\s*$/;
  var importantRE = /\s*!important$/;
  function setStyle(style, name, val) {
    if (isArray(val)) {
      val.forEach((v) => setStyle(style, name, v));
    } else {
      if (val == null)
        val = "";
      if (true) {
        if (semicolonRE.test(val)) {
          warn2(
            `Unexpected semicolon at the end of '${name}' style value: '${val}'`
          );
        }
      }
      if (name.startsWith("--")) {
        style.setProperty(name, val);
      } else {
        const prefixed = autoPrefix(style, name);
        if (importantRE.test(val)) {
          style.setProperty(
            hyphenate(prefixed),
            val.replace(importantRE, ""),
            "important"
          );
        } else {
          style[prefixed] = val;
        }
      }
    }
  }
  var prefixes = ["Webkit", "Moz", "ms"];
  var prefixCache = {};
  function autoPrefix(style, rawName) {
    const cached = prefixCache[rawName];
    if (cached) {
      return cached;
    }
    let name = camelize(rawName);
    if (name !== "filter" && name in style) {
      return prefixCache[rawName] = name;
    }
    name = capitalize(name);
    for (let i = 0; i < prefixes.length; i++) {
      const prefixed = prefixes[i] + name;
      if (prefixed in style) {
        return prefixCache[rawName] = prefixed;
      }
    }
    return rawName;
  }
  var xlinkNS = "http://www.w3.org/1999/xlink";
  function patchAttr(el, key, value, isSVG, instance) {
    if (isSVG && key.startsWith("xlink:")) {
      if (value == null) {
        el.removeAttributeNS(xlinkNS, key.slice(6, key.length));
      } else {
        el.setAttributeNS(xlinkNS, key, value);
      }
    } else {
      const isBoolean2 = isSpecialBooleanAttr(key);
      if (value == null || isBoolean2 && !includeBooleanAttr(value)) {
        el.removeAttribute(key);
      } else {
        el.setAttribute(key, isBoolean2 ? "" : value);
      }
    }
  }
  function patchDOMProp(el, key, value, prevChildren, parentComponent, parentSuspense, unmountChildren) {
    if (key === "innerHTML" || key === "textContent") {
      if (prevChildren) {
        unmountChildren(prevChildren, parentComponent, parentSuspense);
      }
      el[key] = value == null ? "" : value;
      return;
    }
    const tag = el.tagName;
    if (key === "value" && tag !== "PROGRESS" && // custom elements may use _value internally
    !tag.includes("-")) {
      const oldValue = tag === "OPTION" ? el.getAttribute("value") || "" : el.value;
      const newValue = value == null ? "" : value;
      if (oldValue !== newValue || !("_value" in el)) {
        el.value = newValue;
      }
      if (value == null) {
        el.removeAttribute(key);
      }
      el._value = value;
      return;
    }
    let needRemove = false;
    if (value === "" || value == null) {
      const type = typeof el[key];
      if (type === "boolean") {
        value = includeBooleanAttr(value);
      } else if (value == null && type === "string") {
        value = "";
        needRemove = true;
      } else if (type === "number") {
        value = 0;
        needRemove = true;
      }
    }
    try {
      el[key] = value;
    } catch (e) {
      if (!needRemove) {
        warn2(
          `Failed setting prop "${key}" on <${tag.toLowerCase()}>: value ${value} is invalid.`,
          e
        );
      }
    }
    needRemove && el.removeAttribute(key);
  }
  function addEventListener2(el, event, handler, options) {
    el.addEventListener(event, handler, options);
  }
  function removeEventListener(el, event, handler, options) {
    el.removeEventListener(event, handler, options);
  }
  var veiKey = Symbol("_vei");
  function patchEvent(el, rawName, prevValue, nextValue, instance = null) {
    const invokers = el[veiKey] || (el[veiKey] = {});
    const existingInvoker = invokers[rawName];
    if (nextValue && existingInvoker) {
      existingInvoker.value = true ? sanitizeEventValue(nextValue, rawName) : nextValue;
    } else {
      const [name, options] = parseName(rawName);
      if (nextValue) {
        const invoker = invokers[rawName] = createInvoker(
          true ? sanitizeEventValue(nextValue, rawName) : nextValue,
          instance
        );
        addEventListener2(el, name, invoker, options);
      } else if (existingInvoker) {
        removeEventListener(el, name, existingInvoker, options);
        invokers[rawName] = void 0;
      }
    }
  }
  var optionsModifierRE = /(?:Once|Passive|Capture)$/;
  function parseName(name) {
    let options;
    if (optionsModifierRE.test(name)) {
      options = {};
      let m;
      while (m = name.match(optionsModifierRE)) {
        name = name.slice(0, name.length - m[0].length);
        options[m[0].toLowerCase()] = true;
      }
    }
    const event = name[2] === ":" ? name.slice(3) : hyphenate(name.slice(2));
    return [event, options];
  }
  var cachedNow = 0;
  var p = /* @__PURE__ */ Promise.resolve();
  var getNow = () => cachedNow || (p.then(() => cachedNow = 0), cachedNow = Date.now());
  function createInvoker(initialValue, instance) {
    const invoker = (e) => {
      if (!e._vts) {
        e._vts = Date.now();
      } else if (e._vts <= invoker.attached) {
        return;
      }
      callWithAsyncErrorHandling(
        patchStopImmediatePropagation(e, invoker.value),
        instance,
        5,
        [e]
      );
    };
    invoker.value = initialValue;
    invoker.attached = getNow();
    return invoker;
  }
  function sanitizeEventValue(value, propName) {
    if (isFunction2(value) || isArray(value)) {
      return value;
    }
    warn2(
      `Wrong type passed as event handler to ${propName} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof value}.`
    );
    return NOOP;
  }
  function patchStopImmediatePropagation(e, value) {
    if (isArray(value)) {
      const originalStop = e.stopImmediatePropagation;
      e.stopImmediatePropagation = () => {
        originalStop.call(e);
        e._stopped = true;
      };
      return value.map(
        (fn) => (e2) => !e2._stopped && fn && fn(e2)
      );
    } else {
      return value;
    }
  }
  var isNativeOn = (key) => key.charCodeAt(0) === 111 && key.charCodeAt(1) === 110 && // lowercase letter
  key.charCodeAt(2) > 96 && key.charCodeAt(2) < 123;
  var patchProp = (el, key, prevValue, nextValue, namespace, prevChildren, parentComponent, parentSuspense, unmountChildren) => {
    const isSVG = namespace === "svg";
    if (key === "class") {
      patchClass(el, nextValue, isSVG);
    } else if (key === "style") {
      patchStyle(el, prevValue, nextValue);
    } else if (isOn(key)) {
      if (!isModelListener(key)) {
        patchEvent(el, key, prevValue, nextValue, parentComponent);
      }
    } else if (key[0] === "." ? (key = key.slice(1), true) : key[0] === "^" ? (key = key.slice(1), false) : shouldSetAsProp(el, key, nextValue, isSVG)) {
      patchDOMProp(
        el,
        key,
        nextValue,
        prevChildren,
        parentComponent,
        parentSuspense,
        unmountChildren
      );
    } else {
      if (key === "true-value") {
        el._trueValue = nextValue;
      } else if (key === "false-value") {
        el._falseValue = nextValue;
      }
      patchAttr(el, key, nextValue, isSVG);
    }
  };
  function shouldSetAsProp(el, key, value, isSVG) {
    if (isSVG) {
      if (key === "innerHTML" || key === "textContent") {
        return true;
      }
      if (key in el && isNativeOn(key) && isFunction2(value)) {
        return true;
      }
      return false;
    }
    if (key === "spellcheck" || key === "draggable" || key === "translate") {
      return false;
    }
    if (key === "form") {
      return false;
    }
    if (key === "list" && el.tagName === "INPUT") {
      return false;
    }
    if (key === "type" && el.tagName === "TEXTAREA") {
      return false;
    }
    if (key === "width" || key === "height") {
      const tag = el.tagName;
      if (tag === "IMG" || tag === "VIDEO" || tag === "CANVAS" || tag === "SOURCE") {
        return false;
      }
    }
    if (isNativeOn(key) && isString(value)) {
      return false;
    }
    return key in el;
  }
  var positionMap = /* @__PURE__ */ new WeakMap();
  var newPositionMap = /* @__PURE__ */ new WeakMap();
  var moveCbKey = Symbol("_moveCb");
  var enterCbKey2 = Symbol("_enterCb");
  var TransitionGroupImpl = {
    name: "TransitionGroup",
    props: /* @__PURE__ */ extend({}, TransitionPropsValidators, {
      tag: String,
      moveClass: String
    }),
    setup(props, { slots }) {
      const instance = getCurrentInstance();
      const state = useTransitionState();
      let prevChildren;
      let children;
      onUpdated(() => {
        if (!prevChildren.length) {
          return;
        }
        const moveClass = props.moveClass || `${props.name || "v"}-move`;
        if (!hasCSSTransform(
          prevChildren[0].el,
          instance.vnode.el,
          moveClass
        )) {
          return;
        }
        prevChildren.forEach(callPendingCbs);
        prevChildren.forEach(recordPosition);
        const movedChildren = prevChildren.filter(applyTranslation);
        forceReflow();
        movedChildren.forEach((c) => {
          const el = c.el;
          const style = el.style;
          addTransitionClass(el, moveClass);
          style.transform = style.webkitTransform = style.transitionDuration = "";
          const cb = el[moveCbKey] = (e) => {
            if (e && e.target !== el) {
              return;
            }
            if (!e || /transform$/.test(e.propertyName)) {
              el.removeEventListener("transitionend", cb);
              el[moveCbKey] = null;
              removeTransitionClass(el, moveClass);
            }
          };
          el.addEventListener("transitionend", cb);
        });
      });
      return () => {
        const rawProps = toRaw(props);
        const cssTransitionProps = resolveTransitionProps(rawProps);
        let tag = rawProps.tag || Fragment;
        prevChildren = [];
        if (children) {
          for (let i = 0; i < children.length; i++) {
            const child = children[i];
            if (child.el && child.el instanceof Element) {
              prevChildren.push(child);
              setTransitionHooks(
                child,
                resolveTransitionHooks(
                  child,
                  cssTransitionProps,
                  state,
                  instance
                )
              );
              positionMap.set(
                child,
                child.el.getBoundingClientRect()
              );
            }
          }
        }
        children = slots.default ? getTransitionRawChildren(slots.default()) : [];
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          if (child.key != null) {
            setTransitionHooks(
              child,
              resolveTransitionHooks(child, cssTransitionProps, state, instance)
            );
          } else if (true) {
            warn2(`<TransitionGroup> children must be keyed.`);
          }
        }
        return createVNode(tag, null, children);
      };
    }
  };
  var removeMode = (props) => delete props.mode;
  /* @__PURE__ */ removeMode(TransitionGroupImpl.props);
  function callPendingCbs(c) {
    const el = c.el;
    if (el[moveCbKey]) {
      el[moveCbKey]();
    }
    if (el[enterCbKey2]) {
      el[enterCbKey2]();
    }
  }
  function recordPosition(c) {
    newPositionMap.set(c, c.el.getBoundingClientRect());
  }
  function applyTranslation(c) {
    const oldPos = positionMap.get(c);
    const newPos = newPositionMap.get(c);
    const dx = oldPos.left - newPos.left;
    const dy = oldPos.top - newPos.top;
    if (dx || dy) {
      const s = c.el.style;
      s.transform = s.webkitTransform = `translate(${dx}px,${dy}px)`;
      s.transitionDuration = "0s";
      return c;
    }
  }
  function hasCSSTransform(el, root, moveClass) {
    const clone = el.cloneNode();
    const _vtc = el[vtcKey];
    if (_vtc) {
      _vtc.forEach((cls) => {
        cls.split(/\s+/).forEach((c) => c && clone.classList.remove(c));
      });
    }
    moveClass.split(/\s+/).forEach((c) => c && clone.classList.add(c));
    clone.style.display = "none";
    const container = root.nodeType === 1 ? root : root.parentNode;
    container.appendChild(clone);
    const { hasTransform } = getTransitionInfo(clone);
    container.removeChild(clone);
    return hasTransform;
  }
  var getModelAssigner = (vnode) => {
    const fn = vnode.props["onUpdate:modelValue"] || false;
    return isArray(fn) ? (value) => invokeArrayFns(fn, value) : fn;
  };
  var assignKey = Symbol("_assign");
  var vModelSelect = {
    // <select multiple> value need to be deep traversed
    deep: true,
    created(el, { value, modifiers: { number } }, vnode) {
      const isSetModel = isSet(value);
      addEventListener2(el, "change", () => {
        const selectedVal = Array.prototype.filter.call(el.options, (o) => o.selected).map(
          (o) => number ? looseToNumber(getValue(o)) : getValue(o)
        );
        el[assignKey](
          el.multiple ? isSetModel ? new Set(selectedVal) : selectedVal : selectedVal[0]
        );
        el._assigning = true;
        nextTick(() => {
          el._assigning = false;
        });
      });
      el[assignKey] = getModelAssigner(vnode);
    },
    // set value in mounted & updated because <select> relies on its children
    // <option>s.
    mounted(el, { value, modifiers: { number } }) {
      setSelected(el, value);
    },
    beforeUpdate(el, _binding, vnode) {
      el[assignKey] = getModelAssigner(vnode);
    },
    updated(el, { value, modifiers: { number } }) {
      if (!el._assigning) {
        setSelected(el, value);
      }
    }
  };
  function setSelected(el, value, number) {
    const isMultiple = el.multiple;
    const isArrayValue = isArray(value);
    if (isMultiple && !isArrayValue && !isSet(value)) {
      warn2(
        `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(value).slice(8, -1)}.`
      );
      return;
    }
    for (let i = 0, l = el.options.length; i < l; i++) {
      const option = el.options[i];
      const optionValue = getValue(option);
      if (isMultiple) {
        if (isArrayValue) {
          const optionType = typeof optionValue;
          if (optionType === "string" || optionType === "number") {
            option.selected = value.some((v) => String(v) === String(optionValue));
          } else {
            option.selected = looseIndexOf(value, optionValue) > -1;
          }
        } else {
          option.selected = value.has(optionValue);
        }
      } else if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i)
          el.selectedIndex = i;
        return;
      }
    }
    if (!isMultiple && el.selectedIndex !== -1) {
      el.selectedIndex = -1;
    }
  }
  function getValue(el) {
    return "_value" in el ? el._value : el.value;
  }
  var rendererOptions = /* @__PURE__ */ extend({ patchProp }, nodeOps);
  var renderer;
  function ensureRenderer() {
    return renderer || (renderer = createRenderer(rendererOptions));
  }
  var createApp = (...args) => {
    const app = ensureRenderer().createApp(...args);
    if (true) {
      injectNativeTagCheck(app);
      injectCompilerOptionsCheck(app);
    }
    const { mount } = app;
    app.mount = (containerOrSelector) => {
      const container = normalizeContainer(containerOrSelector);
      if (!container)
        return;
      const component = app._component;
      if (!isFunction2(component) && !component.render && !component.template) {
        component.template = container.innerHTML;
      }
      container.innerHTML = "";
      const proxy = mount(container, false, resolveRootNamespace(container));
      if (container instanceof Element) {
        container.removeAttribute("v-cloak");
        container.setAttribute("data-v-app", "");
      }
      return proxy;
    };
    return app;
  };
  function resolveRootNamespace(container) {
    if (container instanceof SVGElement) {
      return "svg";
    }
    if (typeof MathMLElement === "function" && container instanceof MathMLElement) {
      return "mathml";
    }
  }
  function injectNativeTagCheck(app) {
    Object.defineProperty(app.config, "isNativeTag", {
      value: (tag) => isHTMLTag(tag) || isSVGTag(tag) || isMathMLTag(tag),
      writable: false
    });
  }
  function injectCompilerOptionsCheck(app) {
    if (isRuntimeOnly()) {
      const isCustomElement = app.config.isCustomElement;
      Object.defineProperty(app.config, "isCustomElement", {
        get() {
          return isCustomElement;
        },
        set() {
          warn2(
            `The \`isCustomElement\` config option is deprecated. Use \`compilerOptions.isCustomElement\` instead.`
          );
        }
      });
      const compilerOptions = app.config.compilerOptions;
      const msg = `The \`compilerOptions\` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, \`compilerOptions\` must be passed to \`@vue/compiler-dom\` in the build setup instead.
- For vue-loader: pass it via vue-loader's \`compilerOptions\` loader option.
- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader
- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc`;
      Object.defineProperty(app.config, "compilerOptions", {
        get() {
          warn2(msg);
          return compilerOptions;
        },
        set() {
          warn2(msg);
        }
      });
    }
  }
  function normalizeContainer(container) {
    if (isString(container)) {
      const res = document.querySelector(container);
      if (!res) {
        warn2(
          `Failed to mount app: mount target selector "${container}" returned null.`
        );
      }
      return res;
    }
    if (window.ShadowRoot && container instanceof window.ShadowRoot && container.mode === "closed") {
      warn2(
        `mounting on a ShadowRoot with \`{mode: "closed"}\` may lead to unpredictable bugs`
      );
    }
    return container;
  }

  // node_modules/vue/dist/vue.runtime.esm-bundler.js
  function initDev() {
    {
      initCustomFormatter();
    }
  }
  if (true) {
    initDev();
  }

  // sfc-script:/Users/simonmongeau/Developer/dmdc/app/public/wp-content/themes/my-theme/src/public/components/documents.vue?type=script
  var TOTALPAGE = 24;
  var documents_default = /* @__PURE__ */ defineComponent({
    __name: "documents",
    props: {
      elements: { type: Array, required: true },
      terms: { type: Array, required: true }
    },
    setup(__props, { expose: __expose }) {
      __expose();
      const props = __props;
      const { elements, terms } = toRefs(props);
      const clean = () => {
        filterTheme.value = "";
        filterEdition.value = "";
      };
      const filterTheme = ref("");
      const filterEdition = ref("");
      const page = ref(1);
      watch([filterTheme, filterEdition], () => {
        page.value = 1;
      });
      const subTheme = computed2(() => {
        return terms.value.filter((t) => t.taxonomy == "doc-cat").filter((t) => {
          return elements.value.some((el) => {
            return el.theme.includes(t.slug) && (filterEdition.value ? el.edition.includes(filterEdition.value) : true);
          });
        });
      });
      const subEdition = computed2(() => {
        return terms.value.filter((t) => t.taxonomy == "edition").filter((t) => {
          return elements.value.some((el) => {
            return el.edition.includes(t.slug) && (filterTheme.value ? el.theme.includes(filterTheme.value) : true);
          });
        });
      });
      const filteredElements = computed2(() => {
        return elements.value.filter((el) => {
          if (filterTheme.value && !el.theme.includes(filterTheme.value)) return false;
          if (filterEdition.value && !el.edition.includes(filterEdition.value)) return false;
          return true;
        });
      });
      const __returned__ = { TOTALPAGE, props, elements, terms, clean, filterTheme, filterEdition, page, subTheme, subEdition, filteredElements };
      Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
      return __returned__;
    }
  });

  // sfc-template:/Users/simonmongeau/Developer/dmdc/app/public/wp-content/themes/my-theme/src/public/components/documents.vue?type=template
  var _withScopeId = (n) => (pushScopeId("data-v-34435f54"), n = n(), popScopeId(), n);
  var _hoisted_1 = {
    key: 0,
    class: "flex gap-4"
  };
  var _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
    "option",
    { value: "" },
    "Filtrer par \xE9dition",
    -1
    /* HOISTED */
  ));
  var _hoisted_3 = ["value"];
  var _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode(
    "option",
    { value: "" },
    "Filtrer par th\xE8me",
    -1
    /* HOISTED */
  ));
  var _hoisted_5 = ["value"];
  var _hoisted_6 = { class: "documents" };
  var _hoisted_7 = { class: "thumb" };
  var _hoisted_8 = ["src"];
  var _hoisted_9 = ["href"];
  var _hoisted_10 = {
    key: 1,
    class: "pagination"
  };
  var _hoisted_11 = ["onClick"];
  function render(_ctx, _cache, $props, $setup, $data, $options) {
    return openBlock(), createElementBlock(
      Fragment,
      null,
      [
        true ? (openBlock(), createElementBlock("div", _hoisted_1, [
          withDirectives(createBaseVNode(
            "select",
            {
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.filterEdition = $event),
              class: "filters"
            },
            [
              _hoisted_2,
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($setup.subEdition, (term) => {
                  return openBlock(), createElementBlock("option", {
                    value: term.slug
                  }, toDisplayString(term.name), 9, _hoisted_3);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ],
            512
            /* NEED_PATCH */
          ), [
            [vModelSelect, $setup.filterEdition]
          ]),
          withDirectives(createBaseVNode(
            "select",
            {
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $setup.filterTheme = $event),
              class: "filters"
            },
            [
              _hoisted_4,
              (openBlock(true), createElementBlock(
                Fragment,
                null,
                renderList($setup.subTheme, (term) => {
                  return openBlock(), createElementBlock("option", {
                    value: term.slug
                  }, toDisplayString(term.name), 9, _hoisted_5);
                }),
                256
                /* UNKEYED_FRAGMENT */
              ))
            ],
            512
            /* NEED_PATCH */
          ), [
            [vModelSelect, $setup.filterTheme]
          ]),
          createBaseVNode("div", {
            class: "close",
            onClick: $setup.clean
          }, " \xD7 ")
        ])) : createCommentVNode("v-if", true),
        createBaseVNode("div", _hoisted_6, [
          (openBlock(true), createElementBlock(
            Fragment,
            null,
            renderList($setup.filteredElements.slice(($setup.page - 1) * 2, $setup.page * $setup.TOTALPAGE), (el) => {
              return openBlock(), createElementBlock("div", {
                key: el.id,
                class: "document"
              }, [
                createBaseVNode("div", _hoisted_7, [
                  el.thumbnail ? (openBlock(), createElementBlock("img", {
                    key: 0,
                    src: el.thumbnail,
                    alt: ""
                  }, null, 8, _hoisted_8)) : createCommentVNode("v-if", true)
                ]),
                createBaseVNode(
                  "h4",
                  null,
                  toDisplayString(el.title),
                  1
                  /* TEXT */
                ),
                el.fichier ? (openBlock(), createElementBlock("a", {
                  key: 0,
                  href: el.fichier,
                  target: "_blank"
                }, " T\xE9l\xE9charger ", 8, _hoisted_9)) : createCommentVNode("v-if", true)
              ]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ]),
        $setup.filteredElements.length > $setup.TOTALPAGE ? (openBlock(), createElementBlock("div", _hoisted_10, [
          createBaseVNode("ul", null, [
            (openBlock(true), createElementBlock(
              Fragment,
              null,
              renderList(Math.ceil($setup.filteredElements.length / $setup.TOTALPAGE), (i) => {
                return openBlock(), createElementBlock("li", {
                  key: i,
                  class: normalizeClass({ active: i === $setup.page }),
                  onClick: ($event) => $setup.page = i
                }, toDisplayString(i), 11, _hoisted_11);
              }),
              128
              /* KEYED_FRAGMENT */
            ))
          ])
        ])) : createCommentVNode("v-if", true)
      ],
      64
      /* STABLE_FRAGMENT */
    );
  }

  // src/public/components/documents.vue
  documents_default.render = render;
  documents_default.__file = "src/public/components/documents.vue";
  documents_default.__scopeId = "data-v-34435f54";
  var documents_default2 = documents_default;

  // node_modules/htmx.org/dist/htmx.esm.js
  var htmx2 = function() {
    "use strict";
    const htmx = {
      // Tsc madness here, assigning the functions directly results in an invalid TypeScript output, but reassigning is fine
      /* Event processing */
      /** @type {typeof onLoadHelper} */
      onLoad: null,
      /** @type {typeof processNode} */
      process: null,
      /** @type {typeof addEventListenerImpl} */
      on: null,
      /** @type {typeof removeEventListenerImpl} */
      off: null,
      /** @type {typeof triggerEvent} */
      trigger: null,
      /** @type {typeof ajaxHelper} */
      ajax: null,
      /* DOM querying helpers */
      /** @type {typeof find} */
      find: null,
      /** @type {typeof findAll} */
      findAll: null,
      /** @type {typeof closest} */
      closest: null,
      /**
       * Returns the input values that would resolve for a given element via the htmx value resolution mechanism
       *
       * @see https://htmx.org/api/#values
       *
       * @param {Element} elt the element to resolve values on
       * @param {HttpVerb} type the request type (e.g. **get** or **post**) non-GET's will include the enclosing form of the element. Defaults to **post**
       * @returns {Object}
       */
      values: function(elt, type) {
        const inputValues = getInputValues(elt, type || "post");
        return inputValues.values;
      },
      /* DOM manipulation helpers */
      /** @type {typeof removeElement} */
      remove: null,
      /** @type {typeof addClassToElement} */
      addClass: null,
      /** @type {typeof removeClassFromElement} */
      removeClass: null,
      /** @type {typeof toggleClassOnElement} */
      toggleClass: null,
      /** @type {typeof takeClassForElement} */
      takeClass: null,
      /** @type {typeof swap} */
      swap: null,
      /* Extension entrypoints */
      /** @type {typeof defineExtension} */
      defineExtension: null,
      /** @type {typeof removeExtension} */
      removeExtension: null,
      /* Debugging */
      /** @type {typeof logAll} */
      logAll: null,
      /** @type {typeof logNone} */
      logNone: null,
      /* Debugging */
      /**
       * The logger htmx uses to log with
       *
       * @see https://htmx.org/api/#logger
       */
      logger: null,
      /**
       * A property holding the configuration htmx uses at runtime.
       *
       * Note that using a [meta tag](https://htmx.org/docs/#config) is the preferred mechanism for setting these properties.
       *
       * @see https://htmx.org/api/#config
       */
      config: {
        /**
         * Whether to use history.
         * @type boolean
         * @default true
         */
        historyEnabled: true,
        /**
         * The number of pages to keep in **localStorage** for history support.
         * @type number
         * @default 10
         */
        historyCacheSize: 10,
        /**
         * @type boolean
         * @default false
         */
        refreshOnHistoryMiss: false,
        /**
         * The default swap style to use if **[hx-swap](https://htmx.org/attributes/hx-swap)** is omitted.
         * @type HtmxSwapStyle
         * @default 'innerHTML'
         */
        defaultSwapStyle: "innerHTML",
        /**
         * The default delay between receiving a response from the server and doing the swap.
         * @type number
         * @default 0
         */
        defaultSwapDelay: 0,
        /**
         * The default delay between completing the content swap and settling attributes.
         * @type number
         * @default 20
         */
        defaultSettleDelay: 20,
        /**
         * If true, htmx will inject a small amount of CSS into the page to make indicators invisible unless the **htmx-indicator** class is present.
         * @type boolean
         * @default true
         */
        includeIndicatorStyles: true,
        /**
         * The class to place on indicators when a request is in flight.
         * @type string
         * @default 'htmx-indicator'
         */
        indicatorClass: "htmx-indicator",
        /**
         * The class to place on triggering elements when a request is in flight.
         * @type string
         * @default 'htmx-request'
         */
        requestClass: "htmx-request",
        /**
         * The class to temporarily place on elements that htmx has added to the DOM.
         * @type string
         * @default 'htmx-added'
         */
        addedClass: "htmx-added",
        /**
         * The class to place on target elements when htmx is in the settling phase.
         * @type string
         * @default 'htmx-settling'
         */
        settlingClass: "htmx-settling",
        /**
         * The class to place on target elements when htmx is in the swapping phase.
         * @type string
         * @default 'htmx-swapping'
         */
        swappingClass: "htmx-swapping",
        /**
         * Allows the use of eval-like functionality in htmx, to enable **hx-vars**, trigger conditions & script tag evaluation. Can be set to **false** for CSP compatibility.
         * @type boolean
         * @default true
         */
        allowEval: true,
        /**
         * If set to false, disables the interpretation of script tags.
         * @type boolean
         * @default true
         */
        allowScriptTags: true,
        /**
         * If set, the nonce will be added to inline scripts.
         * @type string
         * @default ''
         */
        inlineScriptNonce: "",
        /**
         * If set, the nonce will be added to inline styles.
         * @type string
         * @default ''
         */
        inlineStyleNonce: "",
        /**
         * The attributes to settle during the settling phase.
         * @type string[]
         * @default ['class', 'style', 'width', 'height']
         */
        attributesToSettle: ["class", "style", "width", "height"],
        /**
         * Allow cross-site Access-Control requests using credentials such as cookies, authorization headers or TLS client certificates.
         * @type boolean
         * @default false
         */
        withCredentials: false,
        /**
         * @type number
         * @default 0
         */
        timeout: 0,
        /**
         * The default implementation of **getWebSocketReconnectDelay** for reconnecting after unexpected connection loss by the event code **Abnormal Closure**, **Service Restart** or **Try Again Later**.
         * @type {'full-jitter' | ((retryCount:number) => number)}
         * @default "full-jitter"
         */
        wsReconnectDelay: "full-jitter",
        /**
         * The type of binary data being received over the WebSocket connection
         * @type BinaryType
         * @default 'blob'
         */
        wsBinaryType: "blob",
        /**
         * @type string
         * @default '[hx-disable], [data-hx-disable]'
         */
        disableSelector: "[hx-disable], [data-hx-disable]",
        /**
         * @type {'auto' | 'instant' | 'smooth'}
         * @default 'smooth'
         */
        scrollBehavior: "instant",
        /**
         * If the focused element should be scrolled into view.
         * @type boolean
         * @default false
         */
        defaultFocusScroll: false,
        /**
         * If set to true htmx will include a cache-busting parameter in GET requests to avoid caching partial responses by the browser
         * @type boolean
         * @default false
         */
        getCacheBusterParam: false,
        /**
         * If set to true, htmx will use the View Transition API when swapping in new content.
         * @type boolean
         * @default false
         */
        globalViewTransitions: false,
        /**
         * htmx will format requests with these methods by encoding their parameters in the URL, not the request body
         * @type {(HttpVerb)[]}
         * @default ['get', 'delete']
         */
        methodsThatUseUrlParams: ["get", "delete"],
        /**
         * If set to true, disables htmx-based requests to non-origin hosts.
         * @type boolean
         * @default false
         */
        selfRequestsOnly: true,
        /**
         * If set to true htmx will not update the title of the document when a title tag is found in new content
         * @type boolean
         * @default false
         */
        ignoreTitle: false,
        /**
         * Whether the target of a boosted element is scrolled into the viewport.
         * @type boolean
         * @default true
         */
        scrollIntoViewOnBoost: true,
        /**
         * The cache to store evaluated trigger specifications into.
         * You may define a simple object to use a never-clearing cache, or implement your own system using a [proxy object](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Proxy)
         * @type {Object|null}
         * @default null
         */
        triggerSpecsCache: null,
        /** @type boolean */
        disableInheritance: false,
        /** @type HtmxResponseHandlingConfig[] */
        responseHandling: [
          { code: "204", swap: false },
          { code: "[23]..", swap: true },
          { code: "[45]..", swap: false, error: true }
        ],
        /**
         * Whether to process OOB swaps on elements that are nested within the main response element.
         * @type boolean
         * @default true
         */
        allowNestedOobSwaps: true
      },
      /** @type {typeof parseInterval} */
      parseInterval: null,
      /** @type {typeof internalEval} */
      _: null,
      version: "2.0.1"
    };
    htmx.onLoad = onLoadHelper;
    htmx.process = processNode;
    htmx.on = addEventListenerImpl;
    htmx.off = removeEventListenerImpl;
    htmx.trigger = triggerEvent;
    htmx.ajax = ajaxHelper;
    htmx.find = find;
    htmx.findAll = findAll;
    htmx.closest = closest;
    htmx.remove = removeElement;
    htmx.addClass = addClassToElement;
    htmx.removeClass = removeClassFromElement;
    htmx.toggleClass = toggleClassOnElement;
    htmx.takeClass = takeClassForElement;
    htmx.swap = swap;
    htmx.defineExtension = defineExtension;
    htmx.removeExtension = removeExtension;
    htmx.logAll = logAll;
    htmx.logNone = logNone;
    htmx.parseInterval = parseInterval;
    htmx._ = internalEval;
    const internalAPI = {
      addTriggerHandler,
      bodyContains,
      canAccessLocalStorage,
      findThisElement,
      filterValues,
      swap,
      hasAttribute,
      getAttributeValue,
      getClosestAttributeValue,
      getClosestMatch,
      getExpressionVars,
      getHeaders,
      getInputValues,
      getInternalData,
      getSwapSpecification,
      getTriggerSpecs,
      getTarget,
      makeFragment,
      mergeObjects,
      makeSettleInfo,
      oobSwap,
      querySelectorExt,
      settleImmediately,
      shouldCancel,
      triggerEvent,
      triggerErrorEvent,
      withExtensions
    };
    const VERBS = ["get", "post", "put", "delete", "patch"];
    const VERB_SELECTOR = VERBS.map(function(verb) {
      return "[hx-" + verb + "], [data-hx-" + verb + "]";
    }).join(", ");
    const HEAD_TAG_REGEX = makeTagRegEx("head");
    function makeTagRegEx(tag, global2 = false) {
      return new RegExp(
        `<${tag}(\\s[^>]*>|>)([\\s\\S]*?)<\\/${tag}>`,
        global2 ? "gim" : "im"
      );
    }
    function parseInterval(str2) {
      if (str2 == void 0) {
        return void 0;
      }
      let interval = NaN;
      if (str2.slice(-2) == "ms") {
        interval = parseFloat(str2.slice(0, -2));
      } else if (str2.slice(-1) == "s") {
        interval = parseFloat(str2.slice(0, -1)) * 1e3;
      } else if (str2.slice(-1) == "m") {
        interval = parseFloat(str2.slice(0, -1)) * 1e3 * 60;
      } else {
        interval = parseFloat(str2);
      }
      return isNaN(interval) ? void 0 : interval;
    }
    function getRawAttribute(elt, name) {
      return elt instanceof Element && elt.getAttribute(name);
    }
    function hasAttribute(elt, qualifiedName) {
      return !!elt.hasAttribute && (elt.hasAttribute(qualifiedName) || elt.hasAttribute("data-" + qualifiedName));
    }
    function getAttributeValue(elt, qualifiedName) {
      return getRawAttribute(elt, qualifiedName) || getRawAttribute(elt, "data-" + qualifiedName);
    }
    function parentElt(elt) {
      const parent = elt.parentElement;
      if (!parent && elt.parentNode instanceof ShadowRoot) return elt.parentNode;
      return parent;
    }
    function getDocument() {
      return document;
    }
    function getRootNode(elt, global2) {
      return elt.getRootNode ? elt.getRootNode({ composed: global2 }) : getDocument();
    }
    function getClosestMatch(elt, condition) {
      while (elt && !condition(elt)) {
        elt = parentElt(elt);
      }
      return elt || null;
    }
    function getAttributeValueWithDisinheritance(initialElement, ancestor, attributeName) {
      const attributeValue = getAttributeValue(ancestor, attributeName);
      const disinherit = getAttributeValue(ancestor, "hx-disinherit");
      var inherit = getAttributeValue(ancestor, "hx-inherit");
      if (initialElement !== ancestor) {
        if (htmx.config.disableInheritance) {
          if (inherit && (inherit === "*" || inherit.split(" ").indexOf(attributeName) >= 0)) {
            return attributeValue;
          } else {
            return null;
          }
        }
        if (disinherit && (disinherit === "*" || disinherit.split(" ").indexOf(attributeName) >= 0)) {
          return "unset";
        }
      }
      return attributeValue;
    }
    function getClosestAttributeValue(elt, attributeName) {
      let closestAttr = null;
      getClosestMatch(elt, function(e) {
        return !!(closestAttr = getAttributeValueWithDisinheritance(elt, asElement(e), attributeName));
      });
      if (closestAttr !== "unset") {
        return closestAttr;
      }
    }
    function matches(elt, selector) {
      const matchesFunction = elt instanceof Element && (elt.matches || elt.matchesSelector || elt.msMatchesSelector || elt.mozMatchesSelector || elt.webkitMatchesSelector || elt.oMatchesSelector);
      return !!matchesFunction && matchesFunction.call(elt, selector);
    }
    function getStartTag(str2) {
      const tagMatcher = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
      const match = tagMatcher.exec(str2);
      if (match) {
        return match[1].toLowerCase();
      } else {
        return "";
      }
    }
    function parseHTML(resp) {
      const parser = new DOMParser();
      return parser.parseFromString(resp, "text/html");
    }
    function takeChildrenFor(fragment, elt) {
      while (elt.childNodes.length > 0) {
        fragment.append(elt.childNodes[0]);
      }
    }
    function duplicateScript(script) {
      const newScript = getDocument().createElement("script");
      forEach(script.attributes, function(attr) {
        newScript.setAttribute(attr.name, attr.value);
      });
      newScript.textContent = script.textContent;
      newScript.async = false;
      if (htmx.config.inlineScriptNonce) {
        newScript.nonce = htmx.config.inlineScriptNonce;
      }
      return newScript;
    }
    function isJavaScriptScriptNode(script) {
      return script.matches("script") && (script.type === "text/javascript" || script.type === "module" || script.type === "");
    }
    function normalizeScriptTags(fragment) {
      Array.from(fragment.querySelectorAll("script")).forEach(
        /** @param {HTMLScriptElement} script */
        (script) => {
          if (isJavaScriptScriptNode(script)) {
            const newScript = duplicateScript(script);
            const parent = script.parentNode;
            try {
              parent.insertBefore(newScript, script);
            } catch (e) {
              logError(e);
            } finally {
              script.remove();
            }
          }
        }
      );
    }
    function makeFragment(response) {
      const responseWithNoHead = response.replace(HEAD_TAG_REGEX, "");
      const startTag = getStartTag(responseWithNoHead);
      let fragment;
      if (startTag === "html") {
        fragment = /** @type DocumentFragmentWithTitle */
        new DocumentFragment();
        const doc2 = parseHTML(response);
        takeChildrenFor(fragment, doc2.body);
        fragment.title = doc2.title;
      } else if (startTag === "body") {
        fragment = /** @type DocumentFragmentWithTitle */
        new DocumentFragment();
        const doc2 = parseHTML(responseWithNoHead);
        takeChildrenFor(fragment, doc2.body);
        fragment.title = doc2.title;
      } else {
        const doc2 = parseHTML('<body><template class="internal-htmx-wrapper">' + responseWithNoHead + "</template></body>");
        fragment = /** @type DocumentFragmentWithTitle */
        doc2.querySelector("template").content;
        fragment.title = doc2.title;
        var titleElement = fragment.querySelector("title");
        if (titleElement && titleElement.parentNode === fragment) {
          titleElement.remove();
          fragment.title = titleElement.innerText;
        }
      }
      if (fragment) {
        if (htmx.config.allowScriptTags) {
          normalizeScriptTags(fragment);
        } else {
          fragment.querySelectorAll("script").forEach((script) => script.remove());
        }
      }
      return fragment;
    }
    function maybeCall(func) {
      if (func) {
        func();
      }
    }
    function isType(o, type) {
      return Object.prototype.toString.call(o) === "[object " + type + "]";
    }
    function isFunction(o) {
      return typeof o === "function";
    }
    function isRawObject(o) {
      return isType(o, "Object");
    }
    function getInternalData(elt) {
      const dataProp = "htmx-internal-data";
      let data = elt[dataProp];
      if (!data) {
        data = elt[dataProp] = {};
      }
      return data;
    }
    function toArray(arr) {
      const returnArr = [];
      if (arr) {
        for (let i = 0; i < arr.length; i++) {
          returnArr.push(arr[i]);
        }
      }
      return returnArr;
    }
    function forEach(arr, func) {
      if (arr) {
        for (let i = 0; i < arr.length; i++) {
          func(arr[i]);
        }
      }
    }
    function isScrolledIntoView(el) {
      const rect = el.getBoundingClientRect();
      const elemTop = rect.top;
      const elemBottom = rect.bottom;
      return elemTop < window.innerHeight && elemBottom >= 0;
    }
    function bodyContains(elt) {
      const rootNode = elt.getRootNode && elt.getRootNode();
      if (rootNode && rootNode instanceof window.ShadowRoot) {
        return getDocument().body.contains(rootNode.host);
      } else {
        return getDocument().body.contains(elt);
      }
    }
    function splitOnWhitespace(trigger2) {
      return trigger2.trim().split(/\s+/);
    }
    function mergeObjects(obj1, obj2) {
      for (const key in obj2) {
        if (obj2.hasOwnProperty(key)) {
          obj1[key] = obj2[key];
        }
      }
      return obj1;
    }
    function parseJSON(jString) {
      try {
        return JSON.parse(jString);
      } catch (error) {
        logError(error);
        return null;
      }
    }
    function canAccessLocalStorage() {
      const test = "htmx:localStorageTest";
      try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
      } catch (e) {
        return false;
      }
    }
    function normalizePath(path) {
      try {
        const url = new URL(path);
        if (url) {
          path = url.pathname + url.search;
        }
        if (!/^\/$/.test(path)) {
          path = path.replace(/\/+$/, "");
        }
        return path;
      } catch (e) {
        return path;
      }
    }
    function internalEval(str) {
      return maybeEval(getDocument().body, function() {
        return eval(str);
      });
    }
    function onLoadHelper(callback) {
      const value = htmx.on(
        "htmx:load",
        /** @param {CustomEvent} evt */
        function(evt) {
          callback(evt.detail.elt);
        }
      );
      return value;
    }
    function logAll() {
      htmx.logger = function(elt, event, data) {
        if (console) {
        }
      };
    }
    function logNone() {
      htmx.logger = null;
    }
    function find(eltOrSelector, selector) {
      if (typeof eltOrSelector !== "string") {
        return eltOrSelector.querySelector(selector);
      } else {
        return find(getDocument(), eltOrSelector);
      }
    }
    function findAll(eltOrSelector, selector) {
      if (typeof eltOrSelector !== "string") {
        return eltOrSelector.querySelectorAll(selector);
      } else {
        return findAll(getDocument(), eltOrSelector);
      }
    }
    function getWindow() {
      return window;
    }
    function removeElement(elt, delay) {
      elt = resolveTarget(elt);
      if (delay) {
        getWindow().setTimeout(function() {
          removeElement(elt);
          elt = null;
        }, delay);
      } else {
        parentElt(elt).removeChild(elt);
      }
    }
    function asElement(elt) {
      return elt instanceof Element ? elt : null;
    }
    function asHtmlElement(elt) {
      return elt instanceof HTMLElement ? elt : null;
    }
    function asString(value) {
      return typeof value === "string" ? value : null;
    }
    function asParentNode(elt) {
      return elt instanceof Element || elt instanceof Document || elt instanceof DocumentFragment ? elt : null;
    }
    function addClassToElement(elt, clazz, delay) {
      elt = asElement(resolveTarget(elt));
      if (!elt) {
        return;
      }
      if (delay) {
        getWindow().setTimeout(function() {
          addClassToElement(elt, clazz);
          elt = null;
        }, delay);
      } else {
        elt.classList && elt.classList.add(clazz);
      }
    }
    function removeClassFromElement(node, clazz, delay) {
      let elt = asElement(resolveTarget(node));
      if (!elt) {
        return;
      }
      if (delay) {
        getWindow().setTimeout(function() {
          removeClassFromElement(elt, clazz);
          elt = null;
        }, delay);
      } else {
        if (elt.classList) {
          elt.classList.remove(clazz);
          if (elt.classList.length === 0) {
            elt.removeAttribute("class");
          }
        }
      }
    }
    function toggleClassOnElement(elt, clazz) {
      elt = resolveTarget(elt);
      elt.classList.toggle(clazz);
    }
    function takeClassForElement(elt, clazz) {
      elt = resolveTarget(elt);
      forEach(elt.parentElement.children, function(child) {
        removeClassFromElement(child, clazz);
      });
      addClassToElement(asElement(elt), clazz);
    }
    function closest(elt, selector) {
      elt = asElement(resolveTarget(elt));
      if (elt && elt.closest) {
        return elt.closest(selector);
      } else {
        do {
          if (elt == null || matches(elt, selector)) {
            return elt;
          }
        } while (elt = elt && asElement(parentElt(elt)));
        return null;
      }
    }
    function startsWith(str2, prefix) {
      return str2.substring(0, prefix.length) === prefix;
    }
    function endsWith(str2, suffix) {
      return str2.substring(str2.length - suffix.length) === suffix;
    }
    function normalizeSelector(selector) {
      const trimmedSelector = selector.trim();
      if (startsWith(trimmedSelector, "<") && endsWith(trimmedSelector, "/>")) {
        return trimmedSelector.substring(1, trimmedSelector.length - 2);
      } else {
        return trimmedSelector;
      }
    }
    function querySelectorAllExt(elt, selector, global2) {
      elt = resolveTarget(elt);
      if (selector.indexOf("closest ") === 0) {
        return [closest(asElement(elt), normalizeSelector(selector.substr(8)))];
      } else if (selector.indexOf("find ") === 0) {
        return [find(asParentNode(elt), normalizeSelector(selector.substr(5)))];
      } else if (selector === "next") {
        return [asElement(elt).nextElementSibling];
      } else if (selector.indexOf("next ") === 0) {
        return [scanForwardQuery(elt, normalizeSelector(selector.substr(5)), !!global2)];
      } else if (selector === "previous") {
        return [asElement(elt).previousElementSibling];
      } else if (selector.indexOf("previous ") === 0) {
        return [scanBackwardsQuery(elt, normalizeSelector(selector.substr(9)), !!global2)];
      } else if (selector === "document") {
        return [document];
      } else if (selector === "window") {
        return [window];
      } else if (selector === "body") {
        return [document.body];
      } else if (selector === "root") {
        return [getRootNode(elt, !!global2)];
      } else if (selector.indexOf("global ") === 0) {
        return querySelectorAllExt(elt, selector.slice(7), true);
      } else {
        return toArray(asParentNode(getRootNode(elt, !!global2)).querySelectorAll(normalizeSelector(selector)));
      }
    }
    var scanForwardQuery = function(start, match, global2) {
      const results = asParentNode(getRootNode(start, global2)).querySelectorAll(match);
      for (let i = 0; i < results.length; i++) {
        const elt = results[i];
        if (elt.compareDocumentPosition(start) === Node.DOCUMENT_POSITION_PRECEDING) {
          return elt;
        }
      }
    };
    var scanBackwardsQuery = function(start, match, global2) {
      const results = asParentNode(getRootNode(start, global2)).querySelectorAll(match);
      for (let i = results.length - 1; i >= 0; i--) {
        const elt = results[i];
        if (elt.compareDocumentPosition(start) === Node.DOCUMENT_POSITION_FOLLOWING) {
          return elt;
        }
      }
    };
    function querySelectorExt(eltOrSelector, selector) {
      if (typeof eltOrSelector !== "string") {
        return querySelectorAllExt(eltOrSelector, selector)[0];
      } else {
        return querySelectorAllExt(getDocument().body, eltOrSelector)[0];
      }
    }
    function resolveTarget(eltOrSelector, context) {
      if (typeof eltOrSelector === "string") {
        return find(asParentNode(context) || document, eltOrSelector);
      } else {
        return eltOrSelector;
      }
    }
    function processEventArgs(arg1, arg2, arg3) {
      if (isFunction(arg2)) {
        return {
          target: getDocument().body,
          event: asString(arg1),
          listener: arg2
        };
      } else {
        return {
          target: resolveTarget(arg1),
          event: asString(arg2),
          listener: arg3
        };
      }
    }
    function addEventListenerImpl(arg1, arg2, arg3) {
      ready(function() {
        const eventArgs = processEventArgs(arg1, arg2, arg3);
        eventArgs.target.addEventListener(eventArgs.event, eventArgs.listener);
      });
      const b = isFunction(arg2);
      return b ? arg2 : arg3;
    }
    function removeEventListenerImpl(arg1, arg2, arg3) {
      ready(function() {
        const eventArgs = processEventArgs(arg1, arg2, arg3);
        eventArgs.target.removeEventListener(eventArgs.event, eventArgs.listener);
      });
      return isFunction(arg2) ? arg2 : arg3;
    }
    const DUMMY_ELT = getDocument().createElement("output");
    function findAttributeTargets(elt, attrName) {
      const attrTarget = getClosestAttributeValue(elt, attrName);
      if (attrTarget) {
        if (attrTarget === "this") {
          return [findThisElement(elt, attrName)];
        } else {
          const result = querySelectorAllExt(elt, attrTarget);
          if (result.length === 0) {
            logError('The selector "' + attrTarget + '" on ' + attrName + " returned no matches!");
            return [DUMMY_ELT];
          } else {
            return result;
          }
        }
      }
    }
    function findThisElement(elt, attribute) {
      return asElement(getClosestMatch(elt, function(elt2) {
        return getAttributeValue(asElement(elt2), attribute) != null;
      }));
    }
    function getTarget(elt) {
      const targetStr = getClosestAttributeValue(elt, "hx-target");
      if (targetStr) {
        if (targetStr === "this") {
          return findThisElement(elt, "hx-target");
        } else {
          return querySelectorExt(elt, targetStr);
        }
      } else {
        const data = getInternalData(elt);
        if (data.boosted) {
          return getDocument().body;
        } else {
          return elt;
        }
      }
    }
    function shouldSettleAttribute(name) {
      const attributesToSettle = htmx.config.attributesToSettle;
      for (let i = 0; i < attributesToSettle.length; i++) {
        if (name === attributesToSettle[i]) {
          return true;
        }
      }
      return false;
    }
    function cloneAttributes(mergeTo, mergeFrom) {
      forEach(mergeTo.attributes, function(attr) {
        if (!mergeFrom.hasAttribute(attr.name) && shouldSettleAttribute(attr.name)) {
          mergeTo.removeAttribute(attr.name);
        }
      });
      forEach(mergeFrom.attributes, function(attr) {
        if (shouldSettleAttribute(attr.name)) {
          mergeTo.setAttribute(attr.name, attr.value);
        }
      });
    }
    function isInlineSwap(swapStyle, target) {
      const extensions2 = getExtensions(target);
      for (let i = 0; i < extensions2.length; i++) {
        const extension = extensions2[i];
        try {
          if (extension.isInlineSwap(swapStyle)) {
            return true;
          }
        } catch (e) {
          logError(e);
        }
      }
      return swapStyle === "outerHTML";
    }
    function oobSwap(oobValue, oobElement, settleInfo) {
      let selector = "#" + getRawAttribute(oobElement, "id");
      let swapStyle = "outerHTML";
      if (oobValue === "true") {
      } else if (oobValue.indexOf(":") > 0) {
        swapStyle = oobValue.substr(0, oobValue.indexOf(":"));
        selector = oobValue.substr(oobValue.indexOf(":") + 1, oobValue.length);
      } else {
        swapStyle = oobValue;
      }
      const targets = getDocument().querySelectorAll(selector);
      if (targets) {
        forEach(
          targets,
          function(target) {
            let fragment;
            const oobElementClone = oobElement.cloneNode(true);
            fragment = getDocument().createDocumentFragment();
            fragment.appendChild(oobElementClone);
            if (!isInlineSwap(swapStyle, target)) {
              fragment = asParentNode(oobElementClone);
            }
            const beforeSwapDetails = { shouldSwap: true, target, fragment };
            if (!triggerEvent(target, "htmx:oobBeforeSwap", beforeSwapDetails)) return;
            target = beforeSwapDetails.target;
            if (beforeSwapDetails.shouldSwap) {
              swapWithStyle(swapStyle, target, target, fragment, settleInfo);
            }
            forEach(settleInfo.elts, function(elt) {
              triggerEvent(elt, "htmx:oobAfterSwap", beforeSwapDetails);
            });
          }
        );
        oobElement.parentNode.removeChild(oobElement);
      } else {
        oobElement.parentNode.removeChild(oobElement);
        triggerErrorEvent(getDocument().body, "htmx:oobErrorNoTarget", { content: oobElement });
      }
      return oobValue;
    }
    function handlePreservedElements(fragment) {
      forEach(findAll(fragment, "[hx-preserve], [data-hx-preserve]"), function(preservedElt) {
        const id = getAttributeValue(preservedElt, "id");
        const oldElt = getDocument().getElementById(id);
        if (oldElt != null) {
          preservedElt.parentNode.replaceChild(oldElt, preservedElt);
        }
      });
    }
    function handleAttributes(parentNode, fragment, settleInfo) {
      forEach(fragment.querySelectorAll("[id]"), function(newNode) {
        const id = getRawAttribute(newNode, "id");
        if (id && id.length > 0) {
          const normalizedId = id.replace("'", "\\'");
          const normalizedTag = newNode.tagName.replace(":", "\\:");
          const parentElt2 = asParentNode(parentNode);
          const oldNode = parentElt2 && parentElt2.querySelector(normalizedTag + "[id='" + normalizedId + "']");
          if (oldNode && oldNode !== parentElt2) {
            const newAttributes = newNode.cloneNode();
            cloneAttributes(newNode, oldNode);
            settleInfo.tasks.push(function() {
              cloneAttributes(newNode, newAttributes);
            });
          }
        }
      });
    }
    function makeAjaxLoadTask(child) {
      return function() {
        removeClassFromElement(child, htmx.config.addedClass);
        processNode(asElement(child));
        processFocus(asParentNode(child));
        triggerEvent(child, "htmx:load");
      };
    }
    function processFocus(child) {
      const autofocus = "[autofocus]";
      const autoFocusedElt = asHtmlElement(matches(child, autofocus) ? child : child.querySelector(autofocus));
      if (autoFocusedElt != null) {
        autoFocusedElt.focus();
      }
    }
    function insertNodesBefore(parentNode, insertBefore, fragment, settleInfo) {
      handleAttributes(parentNode, fragment, settleInfo);
      while (fragment.childNodes.length > 0) {
        const child = fragment.firstChild;
        addClassToElement(asElement(child), htmx.config.addedClass);
        parentNode.insertBefore(child, insertBefore);
        if (child.nodeType !== Node.TEXT_NODE && child.nodeType !== Node.COMMENT_NODE) {
          settleInfo.tasks.push(makeAjaxLoadTask(child));
        }
      }
    }
    function stringHash(string, hash) {
      let char = 0;
      while (char < string.length) {
        hash = (hash << 5) - hash + string.charCodeAt(char++) | 0;
      }
      return hash;
    }
    function attributeHash(elt) {
      let hash = 0;
      if (elt.attributes) {
        for (let i = 0; i < elt.attributes.length; i++) {
          const attribute = elt.attributes[i];
          if (attribute.value) {
            hash = stringHash(attribute.name, hash);
            hash = stringHash(attribute.value, hash);
          }
        }
      }
      return hash;
    }
    function deInitOnHandlers(elt) {
      const internalData = getInternalData(elt);
      if (internalData.onHandlers) {
        for (let i = 0; i < internalData.onHandlers.length; i++) {
          const handlerInfo = internalData.onHandlers[i];
          removeEventListenerImpl(elt, handlerInfo.event, handlerInfo.listener);
        }
        delete internalData.onHandlers;
      }
    }
    function deInitNode(element) {
      const internalData = getInternalData(element);
      if (internalData.timeout) {
        clearTimeout(internalData.timeout);
      }
      if (internalData.listenerInfos) {
        forEach(internalData.listenerInfos, function(info) {
          if (info.on) {
            removeEventListenerImpl(info.on, info.trigger, info.listener);
          }
        });
      }
      deInitOnHandlers(element);
      forEach(Object.keys(internalData), function(key) {
        delete internalData[key];
      });
    }
    function cleanUpElement(element) {
      triggerEvent(element, "htmx:beforeCleanupElement");
      deInitNode(element);
      if (element.children) {
        forEach(element.children, function(child) {
          cleanUpElement(child);
        });
      }
    }
    function swapOuterHTML(target, fragment, settleInfo) {
      if (target instanceof Element && target.tagName === "BODY") {
        return swapInnerHTML(target, fragment, settleInfo);
      }
      let newElt;
      const eltBeforeNewContent = target.previousSibling;
      insertNodesBefore(parentElt(target), target, fragment, settleInfo);
      if (eltBeforeNewContent == null) {
        newElt = parentElt(target).firstChild;
      } else {
        newElt = eltBeforeNewContent.nextSibling;
      }
      settleInfo.elts = settleInfo.elts.filter(function(e) {
        return e !== target;
      });
      while (newElt && newElt !== target) {
        if (newElt instanceof Element) {
          settleInfo.elts.push(newElt);
          newElt = newElt.nextElementSibling;
        } else {
          newElt = null;
        }
      }
      cleanUpElement(target);
      if (target instanceof Element) {
        target.remove();
      } else {
        target.parentNode.removeChild(target);
      }
    }
    function swapAfterBegin(target, fragment, settleInfo) {
      return insertNodesBefore(target, target.firstChild, fragment, settleInfo);
    }
    function swapBeforeBegin(target, fragment, settleInfo) {
      return insertNodesBefore(parentElt(target), target, fragment, settleInfo);
    }
    function swapBeforeEnd(target, fragment, settleInfo) {
      return insertNodesBefore(target, null, fragment, settleInfo);
    }
    function swapAfterEnd(target, fragment, settleInfo) {
      return insertNodesBefore(parentElt(target), target.nextSibling, fragment, settleInfo);
    }
    function swapDelete(target) {
      cleanUpElement(target);
      return parentElt(target).removeChild(target);
    }
    function swapInnerHTML(target, fragment, settleInfo) {
      const firstChild = target.firstChild;
      insertNodesBefore(target, firstChild, fragment, settleInfo);
      if (firstChild) {
        while (firstChild.nextSibling) {
          cleanUpElement(firstChild.nextSibling);
          target.removeChild(firstChild.nextSibling);
        }
        cleanUpElement(firstChild);
        target.removeChild(firstChild);
      }
    }
    function swapWithStyle(swapStyle, elt, target, fragment, settleInfo) {
      switch (swapStyle) {
        case "none":
          return;
        case "outerHTML":
          swapOuterHTML(target, fragment, settleInfo);
          return;
        case "afterbegin":
          swapAfterBegin(target, fragment, settleInfo);
          return;
        case "beforebegin":
          swapBeforeBegin(target, fragment, settleInfo);
          return;
        case "beforeend":
          swapBeforeEnd(target, fragment, settleInfo);
          return;
        case "afterend":
          swapAfterEnd(target, fragment, settleInfo);
          return;
        case "delete":
          swapDelete(target);
          return;
        default:
          var extensions2 = getExtensions(elt);
          for (let i = 0; i < extensions2.length; i++) {
            const ext = extensions2[i];
            try {
              const newElements = ext.handleSwap(swapStyle, target, fragment, settleInfo);
              if (newElements) {
                if (typeof newElements.length !== "undefined") {
                  for (let j = 0; j < newElements.length; j++) {
                    const child = newElements[j];
                    if (child.nodeType !== Node.TEXT_NODE && child.nodeType !== Node.COMMENT_NODE) {
                      settleInfo.tasks.push(makeAjaxLoadTask(child));
                    }
                  }
                }
                return;
              }
            } catch (e) {
              logError(e);
            }
          }
          if (swapStyle === "innerHTML") {
            swapInnerHTML(target, fragment, settleInfo);
          } else {
            swapWithStyle(htmx.config.defaultSwapStyle, elt, target, fragment, settleInfo);
          }
      }
    }
    function findAndSwapOobElements(fragment, settleInfo) {
      forEach(findAll(fragment, "[hx-swap-oob], [data-hx-swap-oob]"), function(oobElement) {
        if (htmx.config.allowNestedOobSwaps || oobElement.parentElement === null) {
          const oobValue = getAttributeValue(oobElement, "hx-swap-oob");
          if (oobValue != null) {
            oobSwap(oobValue, oobElement, settleInfo);
          }
        } else {
          oobElement.removeAttribute("hx-swap-oob");
          oobElement.removeAttribute("data-hx-swap-oob");
        }
      });
    }
    function swap(target, content, swapSpec, swapOptions) {
      if (!swapOptions) {
        swapOptions = {};
      }
      target = resolveTarget(target);
      const activeElt = document.activeElement;
      let selectionInfo = {};
      try {
        selectionInfo = {
          elt: activeElt,
          // @ts-ignore
          start: activeElt ? activeElt.selectionStart : null,
          // @ts-ignore
          end: activeElt ? activeElt.selectionEnd : null
        };
      } catch (e) {
      }
      const settleInfo = makeSettleInfo(target);
      if (swapSpec.swapStyle === "textContent") {
        target.textContent = content;
      } else {
        let fragment = makeFragment(content);
        settleInfo.title = fragment.title;
        if (swapOptions.selectOOB) {
          const oobSelectValues = swapOptions.selectOOB.split(",");
          for (let i = 0; i < oobSelectValues.length; i++) {
            const oobSelectValue = oobSelectValues[i].split(":", 2);
            let id = oobSelectValue[0].trim();
            if (id.indexOf("#") === 0) {
              id = id.substring(1);
            }
            const oobValue = oobSelectValue[1] || "true";
            const oobElement = fragment.querySelector("#" + id);
            if (oobElement) {
              oobSwap(oobValue, oobElement, settleInfo);
            }
          }
        }
        findAndSwapOobElements(fragment, settleInfo);
        forEach(
          findAll(fragment, "template"),
          /** @param {HTMLTemplateElement} template */
          function(template) {
            findAndSwapOobElements(template.content, settleInfo);
            if (template.content.childElementCount === 0 && template.content.textContent.trim() === "") {
              template.remove();
            }
          }
        );
        if (swapOptions.select) {
          const newFragment = getDocument().createDocumentFragment();
          forEach(fragment.querySelectorAll(swapOptions.select), function(node) {
            newFragment.appendChild(node);
          });
          fragment = newFragment;
        }
        handlePreservedElements(fragment);
        swapWithStyle(swapSpec.swapStyle, swapOptions.contextElement, target, fragment, settleInfo);
      }
      if (selectionInfo.elt && !bodyContains(selectionInfo.elt) && getRawAttribute(selectionInfo.elt, "id")) {
        const newActiveElt = document.getElementById(getRawAttribute(selectionInfo.elt, "id"));
        const focusOptions = { preventScroll: swapSpec.focusScroll !== void 0 ? !swapSpec.focusScroll : !htmx.config.defaultFocusScroll };
        if (newActiveElt) {
          if (selectionInfo.start && newActiveElt.setSelectionRange) {
            try {
              newActiveElt.setSelectionRange(selectionInfo.start, selectionInfo.end);
            } catch (e) {
            }
          }
          newActiveElt.focus(focusOptions);
        }
      }
      target.classList.remove(htmx.config.swappingClass);
      forEach(settleInfo.elts, function(elt) {
        if (elt.classList) {
          elt.classList.add(htmx.config.settlingClass);
        }
        triggerEvent(elt, "htmx:afterSwap", swapOptions.eventInfo);
      });
      if (swapOptions.afterSwapCallback) {
        swapOptions.afterSwapCallback();
      }
      if (!swapSpec.ignoreTitle) {
        handleTitle(settleInfo.title);
      }
      const doSettle = function() {
        forEach(settleInfo.tasks, function(task) {
          task.call();
        });
        forEach(settleInfo.elts, function(elt) {
          if (elt.classList) {
            elt.classList.remove(htmx.config.settlingClass);
          }
          triggerEvent(elt, "htmx:afterSettle", swapOptions.eventInfo);
        });
        if (swapOptions.anchor) {
          const anchorTarget = asElement(resolveTarget("#" + swapOptions.anchor));
          if (anchorTarget) {
            anchorTarget.scrollIntoView({ block: "start", behavior: "auto" });
          }
        }
        updateScrollState(settleInfo.elts, swapSpec);
        if (swapOptions.afterSettleCallback) {
          swapOptions.afterSettleCallback();
        }
      };
      if (swapSpec.settleDelay > 0) {
        getWindow().setTimeout(doSettle, swapSpec.settleDelay);
      } else {
        doSettle();
      }
    }
    function handleTriggerHeader(xhr, header, elt) {
      const triggerBody = xhr.getResponseHeader(header);
      if (triggerBody.indexOf("{") === 0) {
        const triggers = parseJSON(triggerBody);
        for (const eventName in triggers) {
          if (triggers.hasOwnProperty(eventName)) {
            let detail = triggers[eventName];
            if (!isRawObject(detail)) {
              detail = { value: detail };
            }
            triggerEvent(elt, eventName, detail);
          }
        }
      } else {
        const eventNames = triggerBody.split(",");
        for (let i = 0; i < eventNames.length; i++) {
          triggerEvent(elt, eventNames[i].trim(), []);
        }
      }
    }
    const WHITESPACE = /\s/;
    const WHITESPACE_OR_COMMA = /[\s,]/;
    const SYMBOL_START = /[_$a-zA-Z]/;
    const SYMBOL_CONT = /[_$a-zA-Z0-9]/;
    const STRINGISH_START = ['"', "'", "/"];
    const NOT_WHITESPACE = /[^\s]/;
    const COMBINED_SELECTOR_START = /[{(]/;
    const COMBINED_SELECTOR_END = /[})]/;
    function tokenizeString(str2) {
      const tokens = [];
      let position = 0;
      while (position < str2.length) {
        if (SYMBOL_START.exec(str2.charAt(position))) {
          var startPosition = position;
          while (SYMBOL_CONT.exec(str2.charAt(position + 1))) {
            position++;
          }
          tokens.push(str2.substr(startPosition, position - startPosition + 1));
        } else if (STRINGISH_START.indexOf(str2.charAt(position)) !== -1) {
          const startChar = str2.charAt(position);
          var startPosition = position;
          position++;
          while (position < str2.length && str2.charAt(position) !== startChar) {
            if (str2.charAt(position) === "\\") {
              position++;
            }
            position++;
          }
          tokens.push(str2.substr(startPosition, position - startPosition + 1));
        } else {
          const symbol = str2.charAt(position);
          tokens.push(symbol);
        }
        position++;
      }
      return tokens;
    }
    function isPossibleRelativeReference(token, last, paramName) {
      return SYMBOL_START.exec(token.charAt(0)) && token !== "true" && token !== "false" && token !== "this" && token !== paramName && last !== ".";
    }
    function maybeGenerateConditional(elt, tokens, paramName) {
      if (tokens[0] === "[") {
        tokens.shift();
        let bracketCount = 1;
        let conditionalSource = " return (function(" + paramName + "){ return (";
        let last = null;
        while (tokens.length > 0) {
          const token = tokens[0];
          if (token === "]") {
            bracketCount--;
            if (bracketCount === 0) {
              if (last === null) {
                conditionalSource = conditionalSource + "true";
              }
              tokens.shift();
              conditionalSource += ")})";
              try {
                const conditionFunction = maybeEval(
                  elt,
                  function() {
                    return Function(conditionalSource)();
                  },
                  function() {
                    return true;
                  }
                );
                conditionFunction.source = conditionalSource;
                return conditionFunction;
              } catch (e) {
                triggerErrorEvent(getDocument().body, "htmx:syntax:error", { error: e, source: conditionalSource });
                return null;
              }
            }
          } else if (token === "[") {
            bracketCount++;
          }
          if (isPossibleRelativeReference(token, last, paramName)) {
            conditionalSource += "((" + paramName + "." + token + ") ? (" + paramName + "." + token + ") : (window." + token + "))";
          } else {
            conditionalSource = conditionalSource + token;
          }
          last = tokens.shift();
        }
      }
    }
    function consumeUntil(tokens, match) {
      let result = "";
      while (tokens.length > 0 && !match.test(tokens[0])) {
        result += tokens.shift();
      }
      return result;
    }
    function consumeCSSSelector(tokens) {
      let result;
      if (tokens.length > 0 && COMBINED_SELECTOR_START.test(tokens[0])) {
        tokens.shift();
        result = consumeUntil(tokens, COMBINED_SELECTOR_END).trim();
        tokens.shift();
      } else {
        result = consumeUntil(tokens, WHITESPACE_OR_COMMA);
      }
      return result;
    }
    const INPUT_SELECTOR = "input, textarea, select";
    function parseAndCacheTrigger(elt, explicitTrigger, cache) {
      const triggerSpecs = [];
      const tokens = tokenizeString(explicitTrigger);
      do {
        consumeUntil(tokens, NOT_WHITESPACE);
        const initialLength = tokens.length;
        const trigger2 = consumeUntil(tokens, /[,\[\s]/);
        if (trigger2 !== "") {
          if (trigger2 === "every") {
            const every = { trigger: "every" };
            consumeUntil(tokens, NOT_WHITESPACE);
            every.pollInterval = parseInterval(consumeUntil(tokens, /[,\[\s]/));
            consumeUntil(tokens, NOT_WHITESPACE);
            var eventFilter = maybeGenerateConditional(elt, tokens, "event");
            if (eventFilter) {
              every.eventFilter = eventFilter;
            }
            triggerSpecs.push(every);
          } else {
            const triggerSpec = { trigger: trigger2 };
            var eventFilter = maybeGenerateConditional(elt, tokens, "event");
            if (eventFilter) {
              triggerSpec.eventFilter = eventFilter;
            }
            while (tokens.length > 0 && tokens[0] !== ",") {
              consumeUntil(tokens, NOT_WHITESPACE);
              const token = tokens.shift();
              if (token === "changed") {
                triggerSpec.changed = true;
              } else if (token === "once") {
                triggerSpec.once = true;
              } else if (token === "consume") {
                triggerSpec.consume = true;
              } else if (token === "delay" && tokens[0] === ":") {
                tokens.shift();
                triggerSpec.delay = parseInterval(consumeUntil(tokens, WHITESPACE_OR_COMMA));
              } else if (token === "from" && tokens[0] === ":") {
                tokens.shift();
                if (COMBINED_SELECTOR_START.test(tokens[0])) {
                  var from_arg = consumeCSSSelector(tokens);
                } else {
                  var from_arg = consumeUntil(tokens, WHITESPACE_OR_COMMA);
                  if (from_arg === "closest" || from_arg === "find" || from_arg === "next" || from_arg === "previous") {
                    tokens.shift();
                    const selector = consumeCSSSelector(tokens);
                    if (selector.length > 0) {
                      from_arg += " " + selector;
                    }
                  }
                }
                triggerSpec.from = from_arg;
              } else if (token === "target" && tokens[0] === ":") {
                tokens.shift();
                triggerSpec.target = consumeCSSSelector(tokens);
              } else if (token === "throttle" && tokens[0] === ":") {
                tokens.shift();
                triggerSpec.throttle = parseInterval(consumeUntil(tokens, WHITESPACE_OR_COMMA));
              } else if (token === "queue" && tokens[0] === ":") {
                tokens.shift();
                triggerSpec.queue = consumeUntil(tokens, WHITESPACE_OR_COMMA);
              } else if (token === "root" && tokens[0] === ":") {
                tokens.shift();
                triggerSpec[token] = consumeCSSSelector(tokens);
              } else if (token === "threshold" && tokens[0] === ":") {
                tokens.shift();
                triggerSpec[token] = consumeUntil(tokens, WHITESPACE_OR_COMMA);
              } else {
                triggerErrorEvent(elt, "htmx:syntax:error", { token: tokens.shift() });
              }
            }
            triggerSpecs.push(triggerSpec);
          }
        }
        if (tokens.length === initialLength) {
          triggerErrorEvent(elt, "htmx:syntax:error", { token: tokens.shift() });
        }
        consumeUntil(tokens, NOT_WHITESPACE);
      } while (tokens[0] === "," && tokens.shift());
      if (cache) {
        cache[explicitTrigger] = triggerSpecs;
      }
      return triggerSpecs;
    }
    function getTriggerSpecs(elt) {
      const explicitTrigger = getAttributeValue(elt, "hx-trigger");
      let triggerSpecs = [];
      if (explicitTrigger) {
        const cache = htmx.config.triggerSpecsCache;
        triggerSpecs = cache && cache[explicitTrigger] || parseAndCacheTrigger(elt, explicitTrigger, cache);
      }
      if (triggerSpecs.length > 0) {
        return triggerSpecs;
      } else if (matches(elt, "form")) {
        return [{ trigger: "submit" }];
      } else if (matches(elt, 'input[type="button"], input[type="submit"]')) {
        return [{ trigger: "click" }];
      } else if (matches(elt, INPUT_SELECTOR)) {
        return [{ trigger: "change" }];
      } else {
        return [{ trigger: "click" }];
      }
    }
    function cancelPolling(elt) {
      getInternalData(elt).cancelled = true;
    }
    function processPolling(elt, handler, spec) {
      const nodeData = getInternalData(elt);
      nodeData.timeout = getWindow().setTimeout(function() {
        if (bodyContains(elt) && nodeData.cancelled !== true) {
          if (!maybeFilterEvent(spec, elt, makeEvent("hx:poll:trigger", {
            triggerSpec: spec,
            target: elt
          }))) {
            handler(elt);
          }
          processPolling(elt, handler, spec);
        }
      }, spec.pollInterval);
    }
    function isLocalLink(elt) {
      return location.hostname === elt.hostname && getRawAttribute(elt, "href") && getRawAttribute(elt, "href").indexOf("#") !== 0;
    }
    function eltIsDisabled(elt) {
      return closest(elt, htmx.config.disableSelector);
    }
    function boostElement(elt, nodeData, triggerSpecs) {
      if (elt instanceof HTMLAnchorElement && isLocalLink(elt) && (elt.target === "" || elt.target === "_self") || elt.tagName === "FORM") {
        nodeData.boosted = true;
        let verb, path;
        if (elt.tagName === "A") {
          verb = "get";
          path = getRawAttribute(elt, "href");
        } else {
          const rawAttribute = getRawAttribute(elt, "method");
          verb = rawAttribute ? rawAttribute.toLowerCase() : "get";
          if (verb === "get") {
          }
          path = getRawAttribute(elt, "action");
        }
        triggerSpecs.forEach(function(triggerSpec) {
          addEventListener(elt, function(node, evt) {
            const elt2 = asElement(node);
            if (eltIsDisabled(elt2)) {
              cleanUpElement(elt2);
              return;
            }
            issueAjaxRequest(verb, path, elt2, evt);
          }, nodeData, triggerSpec, true);
        });
      }
    }
    function shouldCancel(evt, node) {
      const elt = asElement(node);
      if (!elt) {
        return false;
      }
      if (evt.type === "submit" || evt.type === "click") {
        if (elt.tagName === "FORM") {
          return true;
        }
        if (matches(elt, 'input[type="submit"], button') && closest(elt, "form") !== null) {
          return true;
        }
        if (elt instanceof HTMLAnchorElement && elt.href && (elt.getAttribute("href") === "#" || elt.getAttribute("href").indexOf("#") !== 0)) {
          return true;
        }
      }
      return false;
    }
    function ignoreBoostedAnchorCtrlClick(elt, evt) {
      return getInternalData(elt).boosted && elt instanceof HTMLAnchorElement && evt.type === "click" && // @ts-ignore this will resolve to undefined for events that don't define those properties, which is fine
      (evt.ctrlKey || evt.metaKey);
    }
    function maybeFilterEvent(triggerSpec, elt, evt) {
      const eventFilter = triggerSpec.eventFilter;
      if (eventFilter) {
        try {
          return eventFilter.call(elt, evt) !== true;
        } catch (e) {
          const source = eventFilter.source;
          triggerErrorEvent(getDocument().body, "htmx:eventFilter:error", { error: e, source });
          return true;
        }
      }
      return false;
    }
    function addEventListener(elt, handler, nodeData, triggerSpec, explicitCancel) {
      const elementData = getInternalData(elt);
      let eltsToListenOn;
      if (triggerSpec.from) {
        eltsToListenOn = querySelectorAllExt(elt, triggerSpec.from);
      } else {
        eltsToListenOn = [elt];
      }
      if (triggerSpec.changed) {
        eltsToListenOn.forEach(function(eltToListenOn) {
          const eltToListenOnData = getInternalData(eltToListenOn);
          eltToListenOnData.lastValue = eltToListenOn.value;
        });
      }
      forEach(eltsToListenOn, function(eltToListenOn) {
        const eventListener = function(evt) {
          if (!bodyContains(elt)) {
            eltToListenOn.removeEventListener(triggerSpec.trigger, eventListener);
            return;
          }
          if (ignoreBoostedAnchorCtrlClick(elt, evt)) {
            return;
          }
          if (explicitCancel || shouldCancel(evt, elt)) {
            evt.preventDefault();
          }
          if (maybeFilterEvent(triggerSpec, elt, evt)) {
            return;
          }
          const eventData = getInternalData(evt);
          eventData.triggerSpec = triggerSpec;
          if (eventData.handledFor == null) {
            eventData.handledFor = [];
          }
          if (eventData.handledFor.indexOf(elt) < 0) {
            eventData.handledFor.push(elt);
            if (triggerSpec.consume) {
              evt.stopPropagation();
            }
            if (triggerSpec.target && evt.target) {
              if (!matches(asElement(evt.target), triggerSpec.target)) {
                return;
              }
            }
            if (triggerSpec.once) {
              if (elementData.triggeredOnce) {
                return;
              } else {
                elementData.triggeredOnce = true;
              }
            }
            if (triggerSpec.changed) {
              const eltToListenOnData = getInternalData(eltToListenOn);
              const value = eltToListenOn.value;
              if (eltToListenOnData.lastValue === value) {
                return;
              }
              eltToListenOnData.lastValue = value;
            }
            if (elementData.delayed) {
              clearTimeout(elementData.delayed);
            }
            if (elementData.throttle) {
              return;
            }
            if (triggerSpec.throttle > 0) {
              if (!elementData.throttle) {
                handler(elt, evt);
                elementData.throttle = getWindow().setTimeout(function() {
                  elementData.throttle = null;
                }, triggerSpec.throttle);
              }
            } else if (triggerSpec.delay > 0) {
              elementData.delayed = getWindow().setTimeout(function() {
                handler(elt, evt);
              }, triggerSpec.delay);
            } else {
              triggerEvent(elt, "htmx:trigger");
              handler(elt, evt);
            }
          }
        };
        if (nodeData.listenerInfos == null) {
          nodeData.listenerInfos = [];
        }
        nodeData.listenerInfos.push({
          trigger: triggerSpec.trigger,
          listener: eventListener,
          on: eltToListenOn
        });
        eltToListenOn.addEventListener(triggerSpec.trigger, eventListener);
      });
    }
    let windowIsScrolling = false;
    let scrollHandler = null;
    function initScrollHandler() {
      if (!scrollHandler) {
        scrollHandler = function() {
          windowIsScrolling = true;
        };
        window.addEventListener("scroll", scrollHandler);
        setInterval(function() {
          if (windowIsScrolling) {
            windowIsScrolling = false;
            forEach(getDocument().querySelectorAll("[hx-trigger*='revealed'],[data-hx-trigger*='revealed']"), function(elt) {
              maybeReveal(elt);
            });
          }
        }, 200);
      }
    }
    function maybeReveal(elt) {
      if (!hasAttribute(elt, "data-hx-revealed") && isScrolledIntoView(elt)) {
        elt.setAttribute("data-hx-revealed", "true");
        const nodeData = getInternalData(elt);
        if (nodeData.initHash) {
          triggerEvent(elt, "revealed");
        } else {
          elt.addEventListener("htmx:afterProcessNode", function() {
            triggerEvent(elt, "revealed");
          }, { once: true });
        }
      }
    }
    function loadImmediately(elt, handler, nodeData, delay) {
      const load = function() {
        if (!nodeData.loaded) {
          nodeData.loaded = true;
          handler(elt);
        }
      };
      if (delay > 0) {
        getWindow().setTimeout(load, delay);
      } else {
        load();
      }
    }
    function processVerbs(elt, nodeData, triggerSpecs) {
      let explicitAction = false;
      forEach(VERBS, function(verb) {
        if (hasAttribute(elt, "hx-" + verb)) {
          const path = getAttributeValue(elt, "hx-" + verb);
          explicitAction = true;
          nodeData.path = path;
          nodeData.verb = verb;
          triggerSpecs.forEach(function(triggerSpec) {
            addTriggerHandler(elt, triggerSpec, nodeData, function(node, evt) {
              const elt2 = asElement(node);
              if (closest(elt2, htmx.config.disableSelector)) {
                cleanUpElement(elt2);
                return;
              }
              issueAjaxRequest(verb, path, elt2, evt);
            });
          });
        }
      });
      return explicitAction;
    }
    function addTriggerHandler(elt, triggerSpec, nodeData, handler) {
      if (triggerSpec.trigger === "revealed") {
        initScrollHandler();
        addEventListener(elt, handler, nodeData, triggerSpec);
        maybeReveal(asElement(elt));
      } else if (triggerSpec.trigger === "intersect") {
        const observerOptions = {};
        if (triggerSpec.root) {
          observerOptions.root = querySelectorExt(elt, triggerSpec.root);
        }
        if (triggerSpec.threshold) {
          observerOptions.threshold = parseFloat(triggerSpec.threshold);
        }
        const observer = new IntersectionObserver(function(entries) {
          for (let i = 0; i < entries.length; i++) {
            const entry = entries[i];
            if (entry.isIntersecting) {
              triggerEvent(elt, "intersect");
              break;
            }
          }
        }, observerOptions);
        observer.observe(asElement(elt));
        addEventListener(asElement(elt), handler, nodeData, triggerSpec);
      } else if (triggerSpec.trigger === "load") {
        if (!maybeFilterEvent(triggerSpec, elt, makeEvent("load", { elt }))) {
          loadImmediately(asElement(elt), handler, nodeData, triggerSpec.delay);
        }
      } else if (triggerSpec.pollInterval > 0) {
        nodeData.polling = true;
        processPolling(asElement(elt), handler, triggerSpec);
      } else {
        addEventListener(elt, handler, nodeData, triggerSpec);
      }
    }
    function shouldProcessHxOn(node) {
      const elt = asElement(node);
      if (!elt) {
        return false;
      }
      const attributes = elt.attributes;
      for (let j = 0; j < attributes.length; j++) {
        const attrName = attributes[j].name;
        if (startsWith(attrName, "hx-on:") || startsWith(attrName, "data-hx-on:") || startsWith(attrName, "hx-on-") || startsWith(attrName, "data-hx-on-")) {
          return true;
        }
      }
      return false;
    }
    const HX_ON_QUERY = new XPathEvaluator().createExpression('.//*[@*[ starts-with(name(), "hx-on:") or starts-with(name(), "data-hx-on:") or starts-with(name(), "hx-on-") or starts-with(name(), "data-hx-on-") ]]');
    function processHXOnRoot(elt, elements) {
      if (shouldProcessHxOn(elt)) {
        elements.push(asElement(elt));
      }
      const iter = HX_ON_QUERY.evaluate(elt);
      let node = null;
      while (node = iter.iterateNext()) elements.push(asElement(node));
    }
    function findHxOnWildcardElements(elt) {
      const elements = [];
      if (elt instanceof DocumentFragment) {
        for (const child of elt.childNodes) {
          processHXOnRoot(child, elements);
        }
      } else {
        processHXOnRoot(elt, elements);
      }
      return elements;
    }
    function findElementsToProcess(elt) {
      if (elt.querySelectorAll) {
        const boostedSelector = ", [hx-boost] a, [data-hx-boost] a, a[hx-boost], a[data-hx-boost]";
        const extensionSelectors = [];
        for (const e in extensions) {
          const extension = extensions[e];
          if (extension.getSelectors) {
            var selectors = extension.getSelectors();
            if (selectors) {
              extensionSelectors.push(selectors);
            }
          }
        }
        const results = elt.querySelectorAll(VERB_SELECTOR + boostedSelector + ", form, [type='submit'], [hx-ext], [data-hx-ext], [hx-trigger], [data-hx-trigger]" + extensionSelectors.flat().map((s) => ", " + s).join(""));
        return results;
      } else {
        return [];
      }
    }
    function maybeSetLastButtonClicked(evt) {
      const elt = (
        /** @type {HTMLButtonElement|HTMLInputElement} */
        closest(asElement(evt.target), "button, input[type='submit']")
      );
      const internalData = getRelatedFormData(evt);
      if (internalData) {
        internalData.lastButtonClicked = elt;
      }
    }
    function maybeUnsetLastButtonClicked(evt) {
      const internalData = getRelatedFormData(evt);
      if (internalData) {
        internalData.lastButtonClicked = null;
      }
    }
    function getRelatedFormData(evt) {
      const elt = closest(asElement(evt.target), "button, input[type='submit']");
      if (!elt) {
        return;
      }
      const form = resolveTarget("#" + getRawAttribute(elt, "form"), elt.getRootNode()) || closest(elt, "form");
      if (!form) {
        return;
      }
      return getInternalData(form);
    }
    function initButtonTracking(elt) {
      elt.addEventListener("click", maybeSetLastButtonClicked);
      elt.addEventListener("focusin", maybeSetLastButtonClicked);
      elt.addEventListener("focusout", maybeUnsetLastButtonClicked);
    }
    function addHxOnEventHandler(elt, eventName, code) {
      const nodeData = getInternalData(elt);
      if (!Array.isArray(nodeData.onHandlers)) {
        nodeData.onHandlers = [];
      }
      let func;
      const listener = function(e) {
        maybeEval(elt, function() {
          if (eltIsDisabled(elt)) {
            return;
          }
          if (!func) {
            func = new Function("event", code);
          }
          func.call(elt, e);
        });
      };
      elt.addEventListener(eventName, listener);
      nodeData.onHandlers.push({ event: eventName, listener });
    }
    function processHxOnWildcard(elt) {
      deInitOnHandlers(elt);
      for (let i = 0; i < elt.attributes.length; i++) {
        const name = elt.attributes[i].name;
        const value = elt.attributes[i].value;
        if (startsWith(name, "hx-on") || startsWith(name, "data-hx-on")) {
          const afterOnPosition = name.indexOf("-on") + 3;
          const nextChar = name.slice(afterOnPosition, afterOnPosition + 1);
          if (nextChar === "-" || nextChar === ":") {
            let eventName = name.slice(afterOnPosition + 1);
            if (startsWith(eventName, ":")) {
              eventName = "htmx" + eventName;
            } else if (startsWith(eventName, "-")) {
              eventName = "htmx:" + eventName.slice(1);
            } else if (startsWith(eventName, "htmx-")) {
              eventName = "htmx:" + eventName.slice(5);
            }
            addHxOnEventHandler(elt, eventName, value);
          }
        }
      }
    }
    function initNode(elt) {
      if (closest(elt, htmx.config.disableSelector)) {
        cleanUpElement(elt);
        return;
      }
      const nodeData = getInternalData(elt);
      if (nodeData.initHash !== attributeHash(elt)) {
        deInitNode(elt);
        nodeData.initHash = attributeHash(elt);
        triggerEvent(elt, "htmx:beforeProcessNode");
        if (elt.value) {
          nodeData.lastValue = elt.value;
        }
        const triggerSpecs = getTriggerSpecs(elt);
        const hasExplicitHttpAction = processVerbs(elt, nodeData, triggerSpecs);
        if (!hasExplicitHttpAction) {
          if (getClosestAttributeValue(elt, "hx-boost") === "true") {
            boostElement(elt, nodeData, triggerSpecs);
          } else if (hasAttribute(elt, "hx-trigger")) {
            triggerSpecs.forEach(function(triggerSpec) {
              addTriggerHandler(elt, triggerSpec, nodeData, function() {
              });
            });
          }
        }
        if (elt.tagName === "FORM" || getRawAttribute(elt, "type") === "submit" && hasAttribute(elt, "form")) {
          initButtonTracking(elt);
        }
        triggerEvent(elt, "htmx:afterProcessNode");
      }
    }
    function processNode(elt) {
      elt = resolveTarget(elt);
      if (closest(elt, htmx.config.disableSelector)) {
        cleanUpElement(elt);
        return;
      }
      initNode(elt);
      forEach(findElementsToProcess(elt), function(child) {
        initNode(child);
      });
      forEach(findHxOnWildcardElements(elt), processHxOnWildcard);
    }
    function kebabEventName(str2) {
      return str2.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
    }
    function makeEvent(eventName, detail) {
      let evt;
      if (window.CustomEvent && typeof window.CustomEvent === "function") {
        evt = new CustomEvent(eventName, { bubbles: true, cancelable: true, composed: true, detail });
      } else {
        evt = getDocument().createEvent("CustomEvent");
        evt.initCustomEvent(eventName, true, true, detail);
      }
      return evt;
    }
    function triggerErrorEvent(elt, eventName, detail) {
      triggerEvent(elt, eventName, mergeObjects({ error: eventName }, detail));
    }
    function ignoreEventForLogging(eventName) {
      return eventName === "htmx:afterProcessNode";
    }
    function withExtensions(elt, toDo) {
      forEach(getExtensions(elt), function(extension) {
        try {
          toDo(extension);
        } catch (e) {
          logError(e);
        }
      });
    }
    function logError(msg) {
      if (console.error) {
      } else if (console.log) {
      }
    }
    function triggerEvent(elt, eventName, detail) {
      elt = resolveTarget(elt);
      if (detail == null) {
        detail = {};
      }
      detail.elt = elt;
      const event = makeEvent(eventName, detail);
      if (htmx.logger && !ignoreEventForLogging(eventName)) {
        htmx.logger(elt, eventName, detail);
      }
      if (detail.error) {
        logError(detail.error);
        triggerEvent(elt, "htmx:error", { errorInfo: detail });
      }
      let eventResult = elt.dispatchEvent(event);
      const kebabName = kebabEventName(eventName);
      if (eventResult && kebabName !== eventName) {
        const kebabedEvent = makeEvent(kebabName, event.detail);
        eventResult = eventResult && elt.dispatchEvent(kebabedEvent);
      }
      withExtensions(asElement(elt), function(extension) {
        eventResult = eventResult && (extension.onEvent(eventName, event) !== false && !event.defaultPrevented);
      });
      return eventResult;
    }
    let currentPathForHistory = location.pathname + location.search;
    function getHistoryElement() {
      const historyElt = getDocument().querySelector("[hx-history-elt],[data-hx-history-elt]");
      return historyElt || getDocument().body;
    }
    function saveToHistoryCache(url, rootElt) {
      if (!canAccessLocalStorage()) {
        return;
      }
      const innerHTML = cleanInnerHtmlForHistory(rootElt);
      const title = getDocument().title;
      const scroll = window.scrollY;
      if (htmx.config.historyCacheSize <= 0) {
        localStorage.removeItem("htmx-history-cache");
        return;
      }
      url = normalizePath(url);
      const historyCache = parseJSON(localStorage.getItem("htmx-history-cache")) || [];
      for (let i = 0; i < historyCache.length; i++) {
        if (historyCache[i].url === url) {
          historyCache.splice(i, 1);
          break;
        }
      }
      const newHistoryItem = { url, content: innerHTML, title, scroll };
      triggerEvent(getDocument().body, "htmx:historyItemCreated", { item: newHistoryItem, cache: historyCache });
      historyCache.push(newHistoryItem);
      while (historyCache.length > htmx.config.historyCacheSize) {
        historyCache.shift();
      }
      while (historyCache.length > 0) {
        try {
          localStorage.setItem("htmx-history-cache", JSON.stringify(historyCache));
          break;
        } catch (e) {
          triggerErrorEvent(getDocument().body, "htmx:historyCacheError", { cause: e, cache: historyCache });
          historyCache.shift();
        }
      }
    }
    function getCachedHistory(url) {
      if (!canAccessLocalStorage()) {
        return null;
      }
      url = normalizePath(url);
      const historyCache = parseJSON(localStorage.getItem("htmx-history-cache")) || [];
      for (let i = 0; i < historyCache.length; i++) {
        if (historyCache[i].url === url) {
          return historyCache[i];
        }
      }
      return null;
    }
    function cleanInnerHtmlForHistory(elt) {
      const className = htmx.config.requestClass;
      const clone = (
        /** @type Element */
        elt.cloneNode(true)
      );
      forEach(findAll(clone, "." + className), function(child) {
        removeClassFromElement(child, className);
      });
      return clone.innerHTML;
    }
    function saveCurrentPageToHistory() {
      const elt = getHistoryElement();
      const path = currentPathForHistory || location.pathname + location.search;
      let disableHistoryCache;
      try {
        disableHistoryCache = getDocument().querySelector('[hx-history="false" i],[data-hx-history="false" i]');
      } catch (e) {
        disableHistoryCache = getDocument().querySelector('[hx-history="false"],[data-hx-history="false"]');
      }
      if (!disableHistoryCache) {
        triggerEvent(getDocument().body, "htmx:beforeHistorySave", { path, historyElt: elt });
        saveToHistoryCache(path, elt);
      }
      if (htmx.config.historyEnabled) history.replaceState({ htmx: true }, getDocument().title, window.location.href);
    }
    function pushUrlIntoHistory(path) {
      if (htmx.config.getCacheBusterParam) {
        path = path.replace(/org\.htmx\.cache-buster=[^&]*&?/, "");
        if (endsWith(path, "&") || endsWith(path, "?")) {
          path = path.slice(0, -1);
        }
      }
      if (htmx.config.historyEnabled) {
        history.pushState({ htmx: true }, "", path);
      }
      currentPathForHistory = path;
    }
    function replaceUrlInHistory(path) {
      if (htmx.config.historyEnabled) history.replaceState({ htmx: true }, "", path);
      currentPathForHistory = path;
    }
    function settleImmediately(tasks) {
      forEach(tasks, function(task) {
        task.call(void 0);
      });
    }
    function loadHistoryFromServer(path) {
      const request = new XMLHttpRequest();
      const details = { path, xhr: request };
      triggerEvent(getDocument().body, "htmx:historyCacheMiss", details);
      request.open("GET", path, true);
      request.setRequestHeader("HX-Request", "true");
      request.setRequestHeader("HX-History-Restore-Request", "true");
      request.setRequestHeader("HX-Current-URL", getDocument().location.href);
      request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          triggerEvent(getDocument().body, "htmx:historyCacheMissLoad", details);
          const fragment = makeFragment(this.response);
          const content = fragment.querySelector("[hx-history-elt],[data-hx-history-elt]") || fragment;
          const historyElement = getHistoryElement();
          const settleInfo = makeSettleInfo(historyElement);
          handleTitle(fragment.title);
          swapInnerHTML(historyElement, content, settleInfo);
          settleImmediately(settleInfo.tasks);
          currentPathForHistory = path;
          triggerEvent(getDocument().body, "htmx:historyRestore", { path, cacheMiss: true, serverResponse: this.response });
        } else {
          triggerErrorEvent(getDocument().body, "htmx:historyCacheMissLoadError", details);
        }
      };
      request.send();
    }
    function restoreHistory(path) {
      saveCurrentPageToHistory();
      path = path || location.pathname + location.search;
      const cached = getCachedHistory(path);
      if (cached) {
        const fragment = makeFragment(cached.content);
        const historyElement = getHistoryElement();
        const settleInfo = makeSettleInfo(historyElement);
        handleTitle(fragment.title);
        swapInnerHTML(historyElement, fragment, settleInfo);
        settleImmediately(settleInfo.tasks);
        getWindow().setTimeout(function() {
          window.scrollTo(0, cached.scroll);
        }, 0);
        currentPathForHistory = path;
        triggerEvent(getDocument().body, "htmx:historyRestore", { path, item: cached });
      } else {
        if (htmx.config.refreshOnHistoryMiss) {
          window.location.reload(true);
        } else {
          loadHistoryFromServer(path);
        }
      }
    }
    function addRequestIndicatorClasses(elt) {
      let indicators = (
        /** @type Element[] */
        findAttributeTargets(elt, "hx-indicator")
      );
      if (indicators == null) {
        indicators = [elt];
      }
      forEach(indicators, function(ic) {
        const internalData = getInternalData(ic);
        internalData.requestCount = (internalData.requestCount || 0) + 1;
        ic.classList.add.call(ic.classList, htmx.config.requestClass);
      });
      return indicators;
    }
    function disableElements(elt) {
      let disabledElts = (
        /** @type Element[] */
        findAttributeTargets(elt, "hx-disabled-elt")
      );
      if (disabledElts == null) {
        disabledElts = [];
      }
      forEach(disabledElts, function(disabledElement) {
        const internalData = getInternalData(disabledElement);
        internalData.requestCount = (internalData.requestCount || 0) + 1;
        disabledElement.setAttribute("disabled", "");
      });
      return disabledElts;
    }
    function removeRequestIndicators(indicators, disabled) {
      forEach(indicators, function(ic) {
        const internalData = getInternalData(ic);
        internalData.requestCount = (internalData.requestCount || 0) - 1;
        if (internalData.requestCount === 0) {
          ic.classList.remove.call(ic.classList, htmx.config.requestClass);
        }
      });
      forEach(disabled, function(disabledElement) {
        const internalData = getInternalData(disabledElement);
        internalData.requestCount = (internalData.requestCount || 0) - 1;
        if (internalData.requestCount === 0) {
          disabledElement.removeAttribute("disabled");
        }
      });
    }
    function haveSeenNode(processed, elt) {
      for (let i = 0; i < processed.length; i++) {
        const node = processed[i];
        if (node.isSameNode(elt)) {
          return true;
        }
      }
      return false;
    }
    function shouldInclude(element) {
      const elt = (
        /** @type {HTMLInputElement} */
        element
      );
      if (elt.name === "" || elt.name == null || elt.disabled || closest(elt, "fieldset[disabled]")) {
        return false;
      }
      if (elt.type === "button" || elt.type === "submit" || elt.tagName === "image" || elt.tagName === "reset" || elt.tagName === "file") {
        return false;
      }
      if (elt.type === "checkbox" || elt.type === "radio") {
        return elt.checked;
      }
      return true;
    }
    function addValueToFormData(name, value, formData) {
      if (name != null && value != null) {
        if (Array.isArray(value)) {
          value.forEach(function(v) {
            formData.append(name, v);
          });
        } else {
          formData.append(name, value);
        }
      }
    }
    function removeValueFromFormData(name, value, formData) {
      if (name != null && value != null) {
        let values = formData.getAll(name);
        if (Array.isArray(value)) {
          values = values.filter((v) => value.indexOf(v) < 0);
        } else {
          values = values.filter((v) => v !== value);
        }
        formData.delete(name);
        forEach(values, (v) => formData.append(name, v));
      }
    }
    function processInputValue(processed, formData, errors, elt, validate) {
      if (elt == null || haveSeenNode(processed, elt)) {
        return;
      } else {
        processed.push(elt);
      }
      if (shouldInclude(elt)) {
        const name = getRawAttribute(elt, "name");
        let value = elt.value;
        if (elt instanceof HTMLSelectElement && elt.multiple) {
          value = toArray(elt.querySelectorAll("option:checked")).map(function(e) {
            return (
              /** @type HTMLOptionElement */
              e.value
            );
          });
        }
        if (elt instanceof HTMLInputElement && elt.files) {
          value = toArray(elt.files);
        }
        addValueToFormData(name, value, formData);
        if (validate) {
          validateElement(elt, errors);
        }
      }
      if (elt instanceof HTMLFormElement) {
        forEach(elt.elements, function(input) {
          if (processed.indexOf(input) >= 0) {
            removeValueFromFormData(input.name, input.value, formData);
          } else {
            processed.push(input);
          }
          if (validate) {
            validateElement(input, errors);
          }
        });
        new FormData(elt).forEach(function(value, name) {
          if (value instanceof File && value.name === "") {
            return;
          }
          addValueToFormData(name, value, formData);
        });
      }
    }
    function validateElement(elt, errors) {
      const element = (
        /** @type {HTMLElement & ElementInternals} */
        elt
      );
      if (element.willValidate) {
        triggerEvent(element, "htmx:validation:validate");
        if (!element.checkValidity()) {
          errors.push({ elt: element, message: element.validationMessage, validity: element.validity });
          triggerEvent(element, "htmx:validation:failed", { message: element.validationMessage, validity: element.validity });
        }
      }
    }
    function overrideFormData(receiver, donor) {
      for (const key of donor.keys()) {
        receiver.delete(key);
        donor.getAll(key).forEach(function(value) {
          receiver.append(key, value);
        });
      }
      return receiver;
    }
    function getInputValues(elt, verb) {
      const processed = [];
      const formData = new FormData();
      const priorityFormData = new FormData();
      const errors = [];
      const internalData = getInternalData(elt);
      if (internalData.lastButtonClicked && !bodyContains(internalData.lastButtonClicked)) {
        internalData.lastButtonClicked = null;
      }
      let validate = elt instanceof HTMLFormElement && elt.noValidate !== true || getAttributeValue(elt, "hx-validate") === "true";
      if (internalData.lastButtonClicked) {
        validate = validate && internalData.lastButtonClicked.formNoValidate !== true;
      }
      if (verb !== "get") {
        processInputValue(processed, priorityFormData, errors, closest(elt, "form"), validate);
      }
      processInputValue(processed, formData, errors, elt, validate);
      if (internalData.lastButtonClicked || elt.tagName === "BUTTON" || elt.tagName === "INPUT" && getRawAttribute(elt, "type") === "submit") {
        const button = internalData.lastButtonClicked || /** @type HTMLInputElement|HTMLButtonElement */
        elt;
        const name = getRawAttribute(button, "name");
        addValueToFormData(name, button.value, priorityFormData);
      }
      const includes = findAttributeTargets(elt, "hx-include");
      forEach(includes, function(node) {
        processInputValue(processed, formData, errors, asElement(node), validate);
        if (!matches(node, "form")) {
          forEach(asParentNode(node).querySelectorAll(INPUT_SELECTOR), function(descendant) {
            processInputValue(processed, formData, errors, descendant, validate);
          });
        }
      });
      overrideFormData(formData, priorityFormData);
      return { errors, formData, values: formDataProxy(formData) };
    }
    function appendParam(returnStr, name, realValue) {
      if (returnStr !== "") {
        returnStr += "&";
      }
      if (String(realValue) === "[object Object]") {
        realValue = JSON.stringify(realValue);
      }
      const s = encodeURIComponent(realValue);
      returnStr += encodeURIComponent(name) + "=" + s;
      return returnStr;
    }
    function urlEncode(values) {
      values = formDataFromObject(values);
      let returnStr = "";
      values.forEach(function(value, key) {
        returnStr = appendParam(returnStr, key, value);
      });
      return returnStr;
    }
    function getHeaders(elt, target, prompt2) {
      const headers = {
        "HX-Request": "true",
        "HX-Trigger": getRawAttribute(elt, "id"),
        "HX-Trigger-Name": getRawAttribute(elt, "name"),
        "HX-Target": getAttributeValue(target, "id"),
        "HX-Current-URL": getDocument().location.href
      };
      getValuesForElement(elt, "hx-headers", false, headers);
      if (prompt2 !== void 0) {
        headers["HX-Prompt"] = prompt2;
      }
      if (getInternalData(elt).boosted) {
        headers["HX-Boosted"] = "true";
      }
      return headers;
    }
    function filterValues(inputValues, elt) {
      const paramsValue = getClosestAttributeValue(elt, "hx-params");
      if (paramsValue) {
        if (paramsValue === "none") {
          return new FormData();
        } else if (paramsValue === "*") {
          return inputValues;
        } else if (paramsValue.indexOf("not ") === 0) {
          forEach(paramsValue.substr(4).split(","), function(name) {
            name = name.trim();
            inputValues.delete(name);
          });
          return inputValues;
        } else {
          const newValues = new FormData();
          forEach(paramsValue.split(","), function(name) {
            name = name.trim();
            if (inputValues.has(name)) {
              inputValues.getAll(name).forEach(function(value) {
                newValues.append(name, value);
              });
            }
          });
          return newValues;
        }
      } else {
        return inputValues;
      }
    }
    function isAnchorLink(elt) {
      return !!getRawAttribute(elt, "href") && getRawAttribute(elt, "href").indexOf("#") >= 0;
    }
    function getSwapSpecification(elt, swapInfoOverride) {
      const swapInfo = swapInfoOverride || getClosestAttributeValue(elt, "hx-swap");
      const swapSpec = {
        swapStyle: getInternalData(elt).boosted ? "innerHTML" : htmx.config.defaultSwapStyle,
        swapDelay: htmx.config.defaultSwapDelay,
        settleDelay: htmx.config.defaultSettleDelay
      };
      if (htmx.config.scrollIntoViewOnBoost && getInternalData(elt).boosted && !isAnchorLink(elt)) {
        swapSpec.show = "top";
      }
      if (swapInfo) {
        const split = splitOnWhitespace(swapInfo);
        if (split.length > 0) {
          for (let i = 0; i < split.length; i++) {
            const value = split[i];
            if (value.indexOf("swap:") === 0) {
              swapSpec.swapDelay = parseInterval(value.substr(5));
            } else if (value.indexOf("settle:") === 0) {
              swapSpec.settleDelay = parseInterval(value.substr(7));
            } else if (value.indexOf("transition:") === 0) {
              swapSpec.transition = value.substr(11) === "true";
            } else if (value.indexOf("ignoreTitle:") === 0) {
              swapSpec.ignoreTitle = value.substr(12) === "true";
            } else if (value.indexOf("scroll:") === 0) {
              const scrollSpec = value.substr(7);
              var splitSpec = scrollSpec.split(":");
              const scrollVal = splitSpec.pop();
              var selectorVal = splitSpec.length > 0 ? splitSpec.join(":") : null;
              swapSpec.scroll = scrollVal;
              swapSpec.scrollTarget = selectorVal;
            } else if (value.indexOf("show:") === 0) {
              const showSpec = value.substr(5);
              var splitSpec = showSpec.split(":");
              const showVal = splitSpec.pop();
              var selectorVal = splitSpec.length > 0 ? splitSpec.join(":") : null;
              swapSpec.show = showVal;
              swapSpec.showTarget = selectorVal;
            } else if (value.indexOf("focus-scroll:") === 0) {
              const focusScrollVal = value.substr("focus-scroll:".length);
              swapSpec.focusScroll = focusScrollVal == "true";
            } else if (i == 0) {
              swapSpec.swapStyle = value;
            } else {
              logError("Unknown modifier in hx-swap: " + value);
            }
          }
        }
      }
      return swapSpec;
    }
    function usesFormData(elt) {
      return getClosestAttributeValue(elt, "hx-encoding") === "multipart/form-data" || matches(elt, "form") && getRawAttribute(elt, "enctype") === "multipart/form-data";
    }
    function encodeParamsForBody(xhr, elt, filteredParameters) {
      let encodedParameters = null;
      withExtensions(elt, function(extension) {
        if (encodedParameters == null) {
          encodedParameters = extension.encodeParameters(xhr, filteredParameters, elt);
        }
      });
      if (encodedParameters != null) {
        return encodedParameters;
      } else {
        if (usesFormData(elt)) {
          return overrideFormData(new FormData(), formDataFromObject(filteredParameters));
        } else {
          return urlEncode(filteredParameters);
        }
      }
    }
    function makeSettleInfo(target) {
      return { tasks: [], elts: [target] };
    }
    function updateScrollState(content, swapSpec) {
      const first = content[0];
      const last = content[content.length - 1];
      if (swapSpec.scroll) {
        var target = null;
        if (swapSpec.scrollTarget) {
          target = asElement(querySelectorExt(first, swapSpec.scrollTarget));
        }
        if (swapSpec.scroll === "top" && (first || target)) {
          target = target || first;
          target.scrollTop = 0;
        }
        if (swapSpec.scroll === "bottom" && (last || target)) {
          target = target || last;
          target.scrollTop = target.scrollHeight;
        }
      }
      if (swapSpec.show) {
        var target = null;
        if (swapSpec.showTarget) {
          let targetStr = swapSpec.showTarget;
          if (swapSpec.showTarget === "window") {
            targetStr = "body";
          }
          target = asElement(querySelectorExt(first, targetStr));
        }
        if (swapSpec.show === "top" && (first || target)) {
          target = target || first;
          target.scrollIntoView({ block: "start", behavior: htmx.config.scrollBehavior });
        }
        if (swapSpec.show === "bottom" && (last || target)) {
          target = target || last;
          target.scrollIntoView({ block: "end", behavior: htmx.config.scrollBehavior });
        }
      }
    }
    function getValuesForElement(elt, attr, evalAsDefault, values) {
      if (values == null) {
        values = {};
      }
      if (elt == null) {
        return values;
      }
      const attributeValue = getAttributeValue(elt, attr);
      if (attributeValue) {
        let str2 = attributeValue.trim();
        let evaluateValue = evalAsDefault;
        if (str2 === "unset") {
          return null;
        }
        if (str2.indexOf("javascript:") === 0) {
          str2 = str2.substr(11);
          evaluateValue = true;
        } else if (str2.indexOf("js:") === 0) {
          str2 = str2.substr(3);
          evaluateValue = true;
        }
        if (str2.indexOf("{") !== 0) {
          str2 = "{" + str2 + "}";
        }
        let varsValues;
        if (evaluateValue) {
          varsValues = maybeEval(elt, function() {
            return Function("return (" + str2 + ")")();
          }, {});
        } else {
          varsValues = parseJSON(str2);
        }
        for (const key in varsValues) {
          if (varsValues.hasOwnProperty(key)) {
            if (values[key] == null) {
              values[key] = varsValues[key];
            }
          }
        }
      }
      return getValuesForElement(asElement(parentElt(elt)), attr, evalAsDefault, values);
    }
    function maybeEval(elt, toEval, defaultVal) {
      if (htmx.config.allowEval) {
        return toEval();
      } else {
        triggerErrorEvent(elt, "htmx:evalDisallowedError");
        return defaultVal;
      }
    }
    function getHXVarsForElement(elt, expressionVars) {
      return getValuesForElement(elt, "hx-vars", true, expressionVars);
    }
    function getHXValsForElement(elt, expressionVars) {
      return getValuesForElement(elt, "hx-vals", false, expressionVars);
    }
    function getExpressionVars(elt) {
      return mergeObjects(getHXVarsForElement(elt), getHXValsForElement(elt));
    }
    function safelySetHeaderValue(xhr, header, headerValue) {
      if (headerValue !== null) {
        try {
          xhr.setRequestHeader(header, headerValue);
        } catch (e) {
          xhr.setRequestHeader(header, encodeURIComponent(headerValue));
          xhr.setRequestHeader(header + "-URI-AutoEncoded", "true");
        }
      }
    }
    function getPathFromResponse(xhr) {
      if (xhr.responseURL && typeof URL !== "undefined") {
        try {
          const url = new URL(xhr.responseURL);
          return url.pathname + url.search;
        } catch (e) {
          triggerErrorEvent(getDocument().body, "htmx:badResponseUrl", { url: xhr.responseURL });
        }
      }
    }
    function hasHeader(xhr, regexp) {
      return regexp.test(xhr.getAllResponseHeaders());
    }
    function ajaxHelper(verb, path, context) {
      verb = /** @type HttpVerb */
      verb.toLowerCase();
      if (context) {
        if (context instanceof Element || typeof context === "string") {
          return issueAjaxRequest(verb, path, null, null, {
            targetOverride: resolveTarget(context),
            returnPromise: true
          });
        } else {
          return issueAjaxRequest(
            verb,
            path,
            resolveTarget(context.source),
            context.event,
            {
              handler: context.handler,
              headers: context.headers,
              values: context.values,
              targetOverride: resolveTarget(context.target),
              swapOverride: context.swap,
              select: context.select,
              returnPromise: true
            }
          );
        }
      } else {
        return issueAjaxRequest(verb, path, null, null, {
          returnPromise: true
        });
      }
    }
    function hierarchyForElt(elt) {
      const arr = [];
      while (elt) {
        arr.push(elt);
        elt = elt.parentElement;
      }
      return arr;
    }
    function verifyPath(elt, path, requestConfig) {
      let sameHost;
      let url;
      if (typeof URL === "function") {
        url = new URL(path, document.location.href);
        const origin = document.location.origin;
        sameHost = origin === url.origin;
      } else {
        url = path;
        sameHost = startsWith(path, document.location.origin);
      }
      if (htmx.config.selfRequestsOnly) {
        if (!sameHost) {
          return false;
        }
      }
      return triggerEvent(elt, "htmx:validateUrl", mergeObjects({ url, sameHost }, requestConfig));
    }
    function formDataFromObject(obj) {
      if (obj instanceof FormData) return obj;
      const formData = new FormData();
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          if (typeof obj[key].forEach === "function") {
            obj[key].forEach(function(v) {
              formData.append(key, v);
            });
          } else if (typeof obj[key] === "object") {
            formData.append(key, JSON.stringify(obj[key]));
          } else {
            formData.append(key, obj[key]);
          }
        }
      }
      return formData;
    }
    function formDataArrayProxy(formData, name, array) {
      return new Proxy(array, {
        get: function(target, key) {
          if (typeof key === "number") return target[key];
          if (key === "length") return target.length;
          if (key === "push") {
            return function(value) {
              target.push(value);
              formData.append(name, value);
            };
          }
          if (typeof target[key] === "function") {
            return function() {
              target[key].apply(target, arguments);
              formData.delete(name);
              target.forEach(function(v) {
                formData.append(name, v);
              });
            };
          }
          if (target[key] && target[key].length === 1) {
            return target[key][0];
          } else {
            return target[key];
          }
        },
        set: function(target, index, value) {
          target[index] = value;
          formData.delete(name);
          target.forEach(function(v) {
            formData.append(name, v);
          });
          return true;
        }
      });
    }
    function formDataProxy(formData) {
      return new Proxy(formData, {
        get: function(target, name) {
          if (typeof name === "symbol") {
            return Reflect.get(target, name);
          }
          if (name === "toJSON") {
            return () => Object.fromEntries(formData);
          }
          if (name in target) {
            if (typeof target[name] === "function") {
              return function() {
                return formData[name].apply(formData, arguments);
              };
            } else {
              return target[name];
            }
          }
          const array = formData.getAll(name);
          if (array.length === 0) {
            return void 0;
          } else if (array.length === 1) {
            return array[0];
          } else {
            return formDataArrayProxy(target, name, array);
          }
        },
        set: function(target, name, value) {
          if (typeof name !== "string") {
            return false;
          }
          target.delete(name);
          if (typeof value.forEach === "function") {
            value.forEach(function(v) {
              target.append(name, v);
            });
          } else {
            target.append(name, value);
          }
          return true;
        },
        deleteProperty: function(target, name) {
          if (typeof name === "string") {
            target.delete(name);
          }
          return true;
        },
        // Support Object.assign call from proxy
        ownKeys: function(target) {
          return Reflect.ownKeys(Object.fromEntries(target));
        },
        getOwnPropertyDescriptor: function(target, prop) {
          return Reflect.getOwnPropertyDescriptor(Object.fromEntries(target), prop);
        }
      });
    }
    function issueAjaxRequest(verb, path, elt, event, etc, confirmed) {
      let resolve = null;
      let reject = null;
      etc = etc != null ? etc : {};
      if (etc.returnPromise && typeof Promise !== "undefined") {
        var promise = new Promise(function(_resolve, _reject) {
          resolve = _resolve;
          reject = _reject;
        });
      }
      if (elt == null) {
        elt = getDocument().body;
      }
      const responseHandler = etc.handler || handleAjaxResponse;
      const select = etc.select || null;
      if (!bodyContains(elt)) {
        maybeCall(resolve);
        return promise;
      }
      const target = etc.targetOverride || asElement(getTarget(elt));
      if (target == null || target == DUMMY_ELT) {
        triggerErrorEvent(elt, "htmx:targetError", { target: getAttributeValue(elt, "hx-target") });
        maybeCall(reject);
        return promise;
      }
      let eltData = getInternalData(elt);
      const submitter = eltData.lastButtonClicked;
      if (submitter) {
        const buttonPath = getRawAttribute(submitter, "formaction");
        if (buttonPath != null) {
          path = buttonPath;
        }
        const buttonVerb = getRawAttribute(submitter, "formmethod");
        if (buttonVerb != null) {
          if (buttonVerb.toLowerCase() !== "dialog") {
            verb = /** @type HttpVerb */
            buttonVerb;
          }
        }
      }
      const confirmQuestion = getClosestAttributeValue(elt, "hx-confirm");
      if (confirmed === void 0) {
        const issueRequest = function(skipConfirmation) {
          return issueAjaxRequest(verb, path, elt, event, etc, !!skipConfirmation);
        };
        const confirmDetails = { target, elt, path, verb, triggeringEvent: event, etc, issueRequest, question: confirmQuestion };
        if (triggerEvent(elt, "htmx:confirm", confirmDetails) === false) {
          maybeCall(resolve);
          return promise;
        }
      }
      let syncElt = elt;
      let syncStrategy = getClosestAttributeValue(elt, "hx-sync");
      let queueStrategy = null;
      let abortable = false;
      if (syncStrategy) {
        const syncStrings = syncStrategy.split(":");
        const selector = syncStrings[0].trim();
        if (selector === "this") {
          syncElt = findThisElement(elt, "hx-sync");
        } else {
          syncElt = asElement(querySelectorExt(elt, selector));
        }
        syncStrategy = (syncStrings[1] || "drop").trim();
        eltData = getInternalData(syncElt);
        if (syncStrategy === "drop" && eltData.xhr && eltData.abortable !== true) {
          maybeCall(resolve);
          return promise;
        } else if (syncStrategy === "abort") {
          if (eltData.xhr) {
            maybeCall(resolve);
            return promise;
          } else {
            abortable = true;
          }
        } else if (syncStrategy === "replace") {
          triggerEvent(syncElt, "htmx:abort");
        } else if (syncStrategy.indexOf("queue") === 0) {
          const queueStrArray = syncStrategy.split(" ");
          queueStrategy = (queueStrArray[1] || "last").trim();
        }
      }
      if (eltData.xhr) {
        if (eltData.abortable) {
          triggerEvent(syncElt, "htmx:abort");
        } else {
          if (queueStrategy == null) {
            if (event) {
              const eventData = getInternalData(event);
              if (eventData && eventData.triggerSpec && eventData.triggerSpec.queue) {
                queueStrategy = eventData.triggerSpec.queue;
              }
            }
            if (queueStrategy == null) {
              queueStrategy = "last";
            }
          }
          if (eltData.queuedRequests == null) {
            eltData.queuedRequests = [];
          }
          if (queueStrategy === "first" && eltData.queuedRequests.length === 0) {
            eltData.queuedRequests.push(function() {
              issueAjaxRequest(verb, path, elt, event, etc);
            });
          } else if (queueStrategy === "all") {
            eltData.queuedRequests.push(function() {
              issueAjaxRequest(verb, path, elt, event, etc);
            });
          } else if (queueStrategy === "last") {
            eltData.queuedRequests = [];
            eltData.queuedRequests.push(function() {
              issueAjaxRequest(verb, path, elt, event, etc);
            });
          }
          maybeCall(resolve);
          return promise;
        }
      }
      const xhr = new XMLHttpRequest();
      eltData.xhr = xhr;
      eltData.abortable = abortable;
      const endRequestLock = function() {
        eltData.xhr = null;
        eltData.abortable = false;
        if (eltData.queuedRequests != null && eltData.queuedRequests.length > 0) {
          const queuedRequest = eltData.queuedRequests.shift();
          queuedRequest();
        }
      };
      const promptQuestion = getClosestAttributeValue(elt, "hx-prompt");
      if (promptQuestion) {
        var promptResponse = prompt(promptQuestion);
        if (promptResponse === null || !triggerEvent(elt, "htmx:prompt", { prompt: promptResponse, target })) {
          maybeCall(resolve);
          endRequestLock();
          return promise;
        }
      }
      if (confirmQuestion && !confirmed) {
        if (!confirm(confirmQuestion)) {
          maybeCall(resolve);
          endRequestLock();
          return promise;
        }
      }
      let headers = getHeaders(elt, target, promptResponse);
      if (verb !== "get" && !usesFormData(elt)) {
        headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (etc.headers) {
        headers = mergeObjects(headers, etc.headers);
      }
      const results = getInputValues(elt, verb);
      let errors = results.errors;
      const rawFormData = results.formData;
      if (etc.values) {
        overrideFormData(rawFormData, formDataFromObject(etc.values));
      }
      const expressionVars = formDataFromObject(getExpressionVars(elt));
      const allFormData = overrideFormData(rawFormData, expressionVars);
      let filteredFormData = filterValues(allFormData, elt);
      if (htmx.config.getCacheBusterParam && verb === "get") {
        filteredFormData.set("org.htmx.cache-buster", getRawAttribute(target, "id") || "true");
      }
      if (path == null || path === "") {
        path = getDocument().location.href;
      }
      const requestAttrValues = getValuesForElement(elt, "hx-request");
      const eltIsBoosted = getInternalData(elt).boosted;
      let useUrlParams = htmx.config.methodsThatUseUrlParams.indexOf(verb) >= 0;
      const requestConfig = {
        boosted: eltIsBoosted,
        useUrlParams,
        formData: filteredFormData,
        parameters: formDataProxy(filteredFormData),
        unfilteredFormData: allFormData,
        unfilteredParameters: formDataProxy(allFormData),
        headers,
        target,
        verb,
        errors,
        withCredentials: etc.credentials || requestAttrValues.credentials || htmx.config.withCredentials,
        timeout: etc.timeout || requestAttrValues.timeout || htmx.config.timeout,
        path,
        triggeringEvent: event
      };
      if (!triggerEvent(elt, "htmx:configRequest", requestConfig)) {
        maybeCall(resolve);
        endRequestLock();
        return promise;
      }
      path = requestConfig.path;
      verb = requestConfig.verb;
      headers = requestConfig.headers;
      filteredFormData = formDataFromObject(requestConfig.parameters);
      errors = requestConfig.errors;
      useUrlParams = requestConfig.useUrlParams;
      if (errors && errors.length > 0) {
        triggerEvent(elt, "htmx:validation:halted", requestConfig);
        maybeCall(resolve);
        endRequestLock();
        return promise;
      }
      const splitPath = path.split("#");
      const pathNoAnchor = splitPath[0];
      const anchor = splitPath[1];
      let finalPath = path;
      if (useUrlParams) {
        finalPath = pathNoAnchor;
        const hasValues = !filteredFormData.keys().next().done;
        if (hasValues) {
          if (finalPath.indexOf("?") < 0) {
            finalPath += "?";
          } else {
            finalPath += "&";
          }
          finalPath += urlEncode(filteredFormData);
          if (anchor) {
            finalPath += "#" + anchor;
          }
        }
      }
      if (!verifyPath(elt, finalPath, requestConfig)) {
        triggerErrorEvent(elt, "htmx:invalidPath", requestConfig);
        maybeCall(reject);
        return promise;
      }
      xhr.open(verb.toUpperCase(), finalPath, true);
      xhr.overrideMimeType("text/html");
      xhr.withCredentials = requestConfig.withCredentials;
      xhr.timeout = requestConfig.timeout;
      if (requestAttrValues.noHeaders) {
      } else {
        for (const header in headers) {
          if (headers.hasOwnProperty(header)) {
            const headerValue = headers[header];
            safelySetHeaderValue(xhr, header, headerValue);
          }
        }
      }
      const responseInfo = {
        xhr,
        target,
        requestConfig,
        etc,
        boosted: eltIsBoosted,
        select,
        pathInfo: {
          requestPath: path,
          finalRequestPath: finalPath,
          responsePath: null,
          anchor
        }
      };
      xhr.onload = function() {
        try {
          const hierarchy = hierarchyForElt(elt);
          responseInfo.pathInfo.responsePath = getPathFromResponse(xhr);
          responseHandler(elt, responseInfo);
          removeRequestIndicators(indicators, disableElts);
          triggerEvent(elt, "htmx:afterRequest", responseInfo);
          triggerEvent(elt, "htmx:afterOnLoad", responseInfo);
          if (!bodyContains(elt)) {
            let secondaryTriggerElt = null;
            while (hierarchy.length > 0 && secondaryTriggerElt == null) {
              const parentEltInHierarchy = hierarchy.shift();
              if (bodyContains(parentEltInHierarchy)) {
                secondaryTriggerElt = parentEltInHierarchy;
              }
            }
            if (secondaryTriggerElt) {
              triggerEvent(secondaryTriggerElt, "htmx:afterRequest", responseInfo);
              triggerEvent(secondaryTriggerElt, "htmx:afterOnLoad", responseInfo);
            }
          }
          maybeCall(resolve);
          endRequestLock();
        } catch (e) {
          triggerErrorEvent(elt, "htmx:onLoadError", mergeObjects({ error: e }, responseInfo));
          throw e;
        }
      };
      xhr.onerror = function() {
        removeRequestIndicators(indicators, disableElts);
        triggerErrorEvent(elt, "htmx:afterRequest", responseInfo);
        triggerErrorEvent(elt, "htmx:sendError", responseInfo);
        maybeCall(reject);
        endRequestLock();
      };
      xhr.onabort = function() {
        removeRequestIndicators(indicators, disableElts);
        triggerErrorEvent(elt, "htmx:afterRequest", responseInfo);
        triggerErrorEvent(elt, "htmx:sendAbort", responseInfo);
        maybeCall(reject);
        endRequestLock();
      };
      xhr.ontimeout = function() {
        removeRequestIndicators(indicators, disableElts);
        triggerErrorEvent(elt, "htmx:afterRequest", responseInfo);
        triggerErrorEvent(elt, "htmx:timeout", responseInfo);
        maybeCall(reject);
        endRequestLock();
      };
      if (!triggerEvent(elt, "htmx:beforeRequest", responseInfo)) {
        maybeCall(resolve);
        endRequestLock();
        return promise;
      }
      var indicators = addRequestIndicatorClasses(elt);
      var disableElts = disableElements(elt);
      forEach(["loadstart", "loadend", "progress", "abort"], function(eventName) {
        forEach([xhr, xhr.upload], function(target2) {
          target2.addEventListener(eventName, function(event2) {
            triggerEvent(elt, "htmx:xhr:" + eventName, {
              lengthComputable: event2.lengthComputable,
              loaded: event2.loaded,
              total: event2.total
            });
          });
        });
      });
      triggerEvent(elt, "htmx:beforeSend", responseInfo);
      const params = useUrlParams ? null : encodeParamsForBody(xhr, elt, filteredFormData);
      xhr.send(params);
      return promise;
    }
    function determineHistoryUpdates(elt, responseInfo) {
      const xhr = responseInfo.xhr;
      let pathFromHeaders = null;
      let typeFromHeaders = null;
      if (hasHeader(xhr, /HX-Push:/i)) {
        pathFromHeaders = xhr.getResponseHeader("HX-Push");
        typeFromHeaders = "push";
      } else if (hasHeader(xhr, /HX-Push-Url:/i)) {
        pathFromHeaders = xhr.getResponseHeader("HX-Push-Url");
        typeFromHeaders = "push";
      } else if (hasHeader(xhr, /HX-Replace-Url:/i)) {
        pathFromHeaders = xhr.getResponseHeader("HX-Replace-Url");
        typeFromHeaders = "replace";
      }
      if (pathFromHeaders) {
        if (pathFromHeaders === "false") {
          return {};
        } else {
          return {
            type: typeFromHeaders,
            path: pathFromHeaders
          };
        }
      }
      const requestPath = responseInfo.pathInfo.finalRequestPath;
      const responsePath = responseInfo.pathInfo.responsePath;
      const pushUrl = getClosestAttributeValue(elt, "hx-push-url");
      const replaceUrl = getClosestAttributeValue(elt, "hx-replace-url");
      const elementIsBoosted = getInternalData(elt).boosted;
      let saveType = null;
      let path = null;
      if (pushUrl) {
        saveType = "push";
        path = pushUrl;
      } else if (replaceUrl) {
        saveType = "replace";
        path = replaceUrl;
      } else if (elementIsBoosted) {
        saveType = "push";
        path = responsePath || requestPath;
      }
      if (path) {
        if (path === "false") {
          return {};
        }
        if (path === "true") {
          path = responsePath || requestPath;
        }
        if (responseInfo.pathInfo.anchor && path.indexOf("#") === -1) {
          path = path + "#" + responseInfo.pathInfo.anchor;
        }
        return {
          type: saveType,
          path
        };
      } else {
        return {};
      }
    }
    function codeMatches(responseHandlingConfig, status) {
      var regExp = new RegExp(responseHandlingConfig.code);
      return regExp.test(status.toString(10));
    }
    function resolveResponseHandling(xhr) {
      for (var i = 0; i < htmx.config.responseHandling.length; i++) {
        var responseHandlingElement = htmx.config.responseHandling[i];
        if (codeMatches(responseHandlingElement, xhr.status)) {
          return responseHandlingElement;
        }
      }
      return {
        swap: false
      };
    }
    function handleTitle(title) {
      if (title) {
        const titleElt = find("title");
        if (titleElt) {
          titleElt.innerHTML = title;
        } else {
          window.document.title = title;
        }
      }
    }
    function handleAjaxResponse(elt, responseInfo) {
      const xhr = responseInfo.xhr;
      let target = responseInfo.target;
      const etc = responseInfo.etc;
      const responseInfoSelect = responseInfo.select;
      if (!triggerEvent(elt, "htmx:beforeOnLoad", responseInfo)) return;
      if (hasHeader(xhr, /HX-Trigger:/i)) {
        handleTriggerHeader(xhr, "HX-Trigger", elt);
      }
      if (hasHeader(xhr, /HX-Location:/i)) {
        saveCurrentPageToHistory();
        let redirectPath = xhr.getResponseHeader("HX-Location");
        var redirectSwapSpec;
        if (redirectPath.indexOf("{") === 0) {
          redirectSwapSpec = parseJSON(redirectPath);
          redirectPath = redirectSwapSpec.path;
          delete redirectSwapSpec.path;
        }
        ajaxHelper("get", redirectPath, redirectSwapSpec).then(function() {
          pushUrlIntoHistory(redirectPath);
        });
        return;
      }
      const shouldRefresh = hasHeader(xhr, /HX-Refresh:/i) && xhr.getResponseHeader("HX-Refresh") === "true";
      if (hasHeader(xhr, /HX-Redirect:/i)) {
        location.href = xhr.getResponseHeader("HX-Redirect");
        shouldRefresh && location.reload();
        return;
      }
      if (shouldRefresh) {
        location.reload();
        return;
      }
      if (hasHeader(xhr, /HX-Retarget:/i)) {
        if (xhr.getResponseHeader("HX-Retarget") === "this") {
          responseInfo.target = elt;
        } else {
          responseInfo.target = asElement(querySelectorExt(elt, xhr.getResponseHeader("HX-Retarget")));
        }
      }
      const historyUpdate = determineHistoryUpdates(elt, responseInfo);
      const responseHandling = resolveResponseHandling(xhr);
      const shouldSwap = responseHandling.swap;
      let isError = !!responseHandling.error;
      let ignoreTitle = htmx.config.ignoreTitle || responseHandling.ignoreTitle;
      let selectOverride = responseHandling.select;
      if (responseHandling.target) {
        responseInfo.target = asElement(querySelectorExt(elt, responseHandling.target));
      }
      var swapOverride = etc.swapOverride;
      if (swapOverride == null && responseHandling.swapOverride) {
        swapOverride = responseHandling.swapOverride;
      }
      if (hasHeader(xhr, /HX-Retarget:/i)) {
        if (xhr.getResponseHeader("HX-Retarget") === "this") {
          responseInfo.target = elt;
        } else {
          responseInfo.target = asElement(querySelectorExt(elt, xhr.getResponseHeader("HX-Retarget")));
        }
      }
      if (hasHeader(xhr, /HX-Reswap:/i)) {
        swapOverride = xhr.getResponseHeader("HX-Reswap");
      }
      var serverResponse = xhr.response;
      var beforeSwapDetails = mergeObjects({
        shouldSwap,
        serverResponse,
        isError,
        ignoreTitle,
        selectOverride
      }, responseInfo);
      if (responseHandling.event && !triggerEvent(target, responseHandling.event, beforeSwapDetails)) return;
      if (!triggerEvent(target, "htmx:beforeSwap", beforeSwapDetails)) return;
      target = beforeSwapDetails.target;
      serverResponse = beforeSwapDetails.serverResponse;
      isError = beforeSwapDetails.isError;
      ignoreTitle = beforeSwapDetails.ignoreTitle;
      selectOverride = beforeSwapDetails.selectOverride;
      responseInfo.target = target;
      responseInfo.failed = isError;
      responseInfo.successful = !isError;
      if (beforeSwapDetails.shouldSwap) {
        if (xhr.status === 286) {
          cancelPolling(elt);
        }
        withExtensions(elt, function(extension) {
          serverResponse = extension.transformResponse(serverResponse, xhr, elt);
        });
        if (historyUpdate.type) {
          saveCurrentPageToHistory();
        }
        if (hasHeader(xhr, /HX-Reswap:/i)) {
          swapOverride = xhr.getResponseHeader("HX-Reswap");
        }
        var swapSpec = getSwapSpecification(elt, swapOverride);
        if (!swapSpec.hasOwnProperty("ignoreTitle")) {
          swapSpec.ignoreTitle = ignoreTitle;
        }
        target.classList.add(htmx.config.swappingClass);
        let settleResolve = null;
        let settleReject = null;
        if (responseInfoSelect) {
          selectOverride = responseInfoSelect;
        }
        if (hasHeader(xhr, /HX-Reselect:/i)) {
          selectOverride = xhr.getResponseHeader("HX-Reselect");
        }
        const selectOOB = getClosestAttributeValue(elt, "hx-select-oob");
        const select = getClosestAttributeValue(elt, "hx-select");
        let doSwap = function() {
          try {
            if (historyUpdate.type) {
              triggerEvent(getDocument().body, "htmx:beforeHistoryUpdate", mergeObjects({ history: historyUpdate }, responseInfo));
              if (historyUpdate.type === "push") {
                pushUrlIntoHistory(historyUpdate.path);
                triggerEvent(getDocument().body, "htmx:pushedIntoHistory", { path: historyUpdate.path });
              } else {
                replaceUrlInHistory(historyUpdate.path);
                triggerEvent(getDocument().body, "htmx:replacedInHistory", { path: historyUpdate.path });
              }
            }
            swap(target, serverResponse, swapSpec, {
              select: selectOverride || select,
              selectOOB,
              eventInfo: responseInfo,
              anchor: responseInfo.pathInfo.anchor,
              contextElement: elt,
              afterSwapCallback: function() {
                if (hasHeader(xhr, /HX-Trigger-After-Swap:/i)) {
                  let finalElt = elt;
                  if (!bodyContains(elt)) {
                    finalElt = getDocument().body;
                  }
                  handleTriggerHeader(xhr, "HX-Trigger-After-Swap", finalElt);
                }
              },
              afterSettleCallback: function() {
                if (hasHeader(xhr, /HX-Trigger-After-Settle:/i)) {
                  let finalElt = elt;
                  if (!bodyContains(elt)) {
                    finalElt = getDocument().body;
                  }
                  handleTriggerHeader(xhr, "HX-Trigger-After-Settle", finalElt);
                }
                maybeCall(settleResolve);
              }
            });
          } catch (e) {
            triggerErrorEvent(elt, "htmx:swapError", responseInfo);
            maybeCall(settleReject);
            throw e;
          }
        };
        let shouldTransition = htmx.config.globalViewTransitions;
        if (swapSpec.hasOwnProperty("transition")) {
          shouldTransition = swapSpec.transition;
        }
        if (shouldTransition && triggerEvent(elt, "htmx:beforeTransition", responseInfo) && typeof Promise !== "undefined" && // @ts-ignore experimental feature atm
        document.startViewTransition) {
          const settlePromise = new Promise(function(_resolve, _reject) {
            settleResolve = _resolve;
            settleReject = _reject;
          });
          const innerDoSwap = doSwap;
          doSwap = function() {
            document.startViewTransition(function() {
              innerDoSwap();
              return settlePromise;
            });
          };
        }
        if (swapSpec.swapDelay > 0) {
          getWindow().setTimeout(doSwap, swapSpec.swapDelay);
        } else {
          doSwap();
        }
      }
      if (isError) {
        triggerErrorEvent(elt, "htmx:responseError", mergeObjects({ error: "Response Status Error Code " + xhr.status + " from " + responseInfo.pathInfo.requestPath }, responseInfo));
      }
    }
    const extensions = {};
    function extensionBase() {
      return {
        init: function(api) {
          return null;
        },
        getSelectors: function() {
          return null;
        },
        onEvent: function(name, evt) {
          return true;
        },
        transformResponse: function(text, xhr, elt) {
          return text;
        },
        isInlineSwap: function(swapStyle) {
          return false;
        },
        handleSwap: function(swapStyle, target, fragment, settleInfo) {
          return false;
        },
        encodeParameters: function(xhr, parameters, elt) {
          return null;
        }
      };
    }
    function defineExtension(name, extension) {
      if (extension.init) {
        extension.init(internalAPI);
      }
      extensions[name] = mergeObjects(extensionBase(), extension);
    }
    function removeExtension(name) {
      delete extensions[name];
    }
    function getExtensions(elt, extensionsToReturn, extensionsToIgnore) {
      if (extensionsToReturn == void 0) {
        extensionsToReturn = [];
      }
      if (elt == void 0) {
        return extensionsToReturn;
      }
      if (extensionsToIgnore == void 0) {
        extensionsToIgnore = [];
      }
      const extensionsForElement = getAttributeValue(elt, "hx-ext");
      if (extensionsForElement) {
        forEach(extensionsForElement.split(","), function(extensionName) {
          extensionName = extensionName.replace(/ /g, "");
          if (extensionName.slice(0, 7) == "ignore:") {
            extensionsToIgnore.push(extensionName.slice(7));
            return;
          }
          if (extensionsToIgnore.indexOf(extensionName) < 0) {
            const extension = extensions[extensionName];
            if (extension && extensionsToReturn.indexOf(extension) < 0) {
              extensionsToReturn.push(extension);
            }
          }
        });
      }
      return getExtensions(asElement(parentElt(elt)), extensionsToReturn, extensionsToIgnore);
    }
    var isReady = false;
    getDocument().addEventListener("DOMContentLoaded", function() {
      isReady = true;
    });
    function ready(fn) {
      if (isReady || getDocument().readyState === "complete") {
        fn();
      } else {
        getDocument().addEventListener("DOMContentLoaded", fn);
      }
    }
    function insertIndicatorStyles() {
      if (htmx.config.includeIndicatorStyles !== false) {
        const nonceAttribute = htmx.config.inlineStyleNonce ? ` nonce="${htmx.config.inlineStyleNonce}"` : "";
        getDocument().head.insertAdjacentHTML(
          "beforeend",
          "<style" + nonceAttribute + ">      ." + htmx.config.indicatorClass + "{opacity:0}      ." + htmx.config.requestClass + " ." + htmx.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}      ." + htmx.config.requestClass + "." + htmx.config.indicatorClass + "{opacity:1; transition: opacity 200ms ease-in;}      </style>"
        );
      }
    }
    function getMetaConfig() {
      const element = getDocument().querySelector('meta[name="htmx-config"]');
      if (element) {
        return parseJSON(element.content);
      } else {
        return null;
      }
    }
    function mergeMetaConfig() {
      const metaConfig = getMetaConfig();
      if (metaConfig) {
        htmx.config = mergeObjects(htmx.config, metaConfig);
      }
    }
    ready(function() {
      mergeMetaConfig();
      insertIndicatorStyles();
      let body2 = getDocument().body;
      processNode(body2);
      const restoredElts = getDocument().querySelectorAll(
        "[hx-trigger='restored'],[data-hx-trigger='restored']"
      );
      body2.addEventListener("htmx:abort", function(evt) {
        const target = evt.target;
        const internalData = getInternalData(target);
        if (internalData && internalData.xhr) {
          internalData.xhr.abort();
        }
      });
      const originalPopstate = window.onpopstate ? window.onpopstate.bind(window) : null;
      window.onpopstate = function(event) {
        if (event.state && event.state.htmx) {
          restoreHistory();
          forEach(restoredElts, function(elt) {
            triggerEvent(elt, "htmx:restored", {
              document: getDocument(),
              triggerEvent
            });
          });
        } else {
          if (originalPopstate) {
            originalPopstate(event);
          }
        }
      };
      getWindow().setTimeout(function() {
        triggerEvent(body2, "htmx:load", {});
        body2 = null;
      }, 0);
    });
    return htmx;
  }();
  var htmx_esm_default = htmx2;

  // src/public/public.ts
  var { body } = window.document;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      body.classList.add("scrolled");
    } else {
      body.classList.remove("scrolled");
    }
  });
  var $ = window.jQuery;
  $(document).on("click", "[data-open-conferencier]", function() {
    const id = $(this).data("open-conferencier");
    const dialog = document.querySelector(".modal-dialog");
    const dialogContent = dialog.querySelector(".modal-dialog-content");
    if (!dialogContent) return;
    dialogContent.innerHTML = '<div class="p-4 text-center min-w-72">Chargement</div>';
    dialog.showModal();
    const href = `${window.__admin_ajax}?action=getConferencier&id=${id}`;
    fetch(href).then((res) => res.text()).then((html) => {
      dialogContent.innerHTML = html;
    });
  });
  $(document).on("click", "[data-open-conference]", function() {
    const id = $(this).data("open-conference");
    const dialog = document.querySelector(".modal-dialog");
    const dialogContent = dialog.querySelector(".modal-dialog-content");
    if (!dialogContent) return;
    dialogContent.innerHTML = '<div class="p-4 text-center min-w-72">Chargement</div>';
    dialog.showModal();
    const href = `${window.__admin_ajax}?action=getConference&id=${id}`;
    fetch(href).then((res) => res.text()).then((html) => {
      dialogContent.innerHTML = html;
    });
  });
  document.addEventListener("click", (e) => {
    const target = e.target || e.srcElement;
    if (target.tagName === "DIALOG") {
      target.close();
    }
    if (target.classList.contains("modal-dialog-close")) {
      const dialog = target.closest("dialog");
      dialog.close();
    }
  });
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".document-app").forEach((el) => {
      const elements = JSON.parse(el.getAttribute("data-elements"));
      const terms = JSON.parse(el.getAttribute("data-terms"));
      const app = createApp(documents_default2, { elements, terms });
      app.mount(el);
    });
  });
})();
/*! Bundled license information:

@vue/shared/dist/shared.esm-bundler.js:
  (**
  * @vue/shared v3.4.26
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (*! #__NO_SIDE_EFFECTS__ *)

@vue/reactivity/dist/reactivity.esm-bundler.js:
  (**
  * @vue/reactivity v3.4.26
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/runtime-core/dist/runtime-core.esm-bundler.js:
  (**
  * @vue/runtime-core v3.4.26
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/runtime-core/dist/runtime-core.esm-bundler.js:
  (*! #__NO_SIDE_EFFECTS__ *)

@vue/runtime-core/dist/runtime-core.esm-bundler.js:
  (*! #__NO_SIDE_EFFECTS__ *)

@vue/runtime-dom/dist/runtime-dom.esm-bundler.js:
  (**
  * @vue/runtime-dom v3.4.26
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

@vue/runtime-dom/dist/runtime-dom.esm-bundler.js:
  (*! #__NO_SIDE_EFFECTS__ *)

@vue/runtime-dom/dist/runtime-dom.esm-bundler.js:
  (*! #__NO_SIDE_EFFECTS__ *)

vue/dist/vue.runtime.esm-bundler.js:
  (**
  * vue v3.4.26
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*/