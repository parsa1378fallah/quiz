(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) s(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const o of r.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerPolicy && (r.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function s(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = n(i);
    fetch(i.href, r);
  }
})();
function _o(e, t) {
  const n = Object.create(null),
    s = e.split(",");
  for (let i = 0; i < s.length; i++) n[s[i]] = !0;
  return t ? (i) => !!n[i.toLowerCase()] : (i) => !!n[i];
}
function Os(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n],
        i = Tt(s) ? Sh(s) : Os(s);
      if (i) for (const r in i) t[r] = i[r];
    }
    return t;
  } else {
    if (Tt(e)) return e;
    if (yt(e)) return e;
  }
}
const Ch = /;(?![^(]*\))/g,
  wh = /:([^]+)/,
  Mh = /\/\*.*?\*\//gs;
function Sh(e) {
  const t = {};
  return (
    e
      .replace(Mh, "")
      .split(Ch)
      .forEach((n) => {
        if (n) {
          const s = n.split(wh);
          s.length > 1 && (t[s[0].trim()] = s[1].trim());
        }
      }),
    t
  );
}
function Fi(e) {
  let t = "";
  if (Tt(e)) t = e;
  else if (Q(e))
    for (let n = 0; n < e.length; n++) {
      const s = Fi(e[n]);
      s && (t += s + " ");
    }
  else if (yt(e)) for (const n in e) e[n] && (t += n + " ");
  return t.trim();
}
const kh =
    "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
  Ph = _o(kh);
function Nc(e) {
  return !!e || e === "";
}
const Ge = (e) =>
    Tt(e)
      ? e
      : e == null
      ? ""
      : Q(e) || (yt(e) && (e.toString === Wc || !et(e.toString)))
      ? JSON.stringify(e, Hc, 2)
      : String(e),
  Hc = (e, t) =>
    t && t.__v_isRef
      ? Hc(e, t.value)
      : Hn(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (n, [s, i]) => ((n[`${s} =>`] = i), n),
            {}
          ),
        }
      : jc(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : yt(t) && !Q(t) && !$c(t)
      ? String(t)
      : t,
  _t = {},
  Nn = [],
  ge = () => {},
  Oh = () => !1,
  Eh = /^on[^a-z]/,
  Bi = (e) => Eh.test(e),
  yo = (e) => e.startsWith("onUpdate:"),
  Nt = Object.assign,
  vo = (e, t) => {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  },
  Ah = Object.prototype.hasOwnProperty,
  ct = (e, t) => Ah.call(e, t),
  Q = Array.isArray,
  Hn = (e) => zi(e) === "[object Map]",
  jc = (e) => zi(e) === "[object Set]",
  et = (e) => typeof e == "function",
  Tt = (e) => typeof e == "string",
  Co = (e) => typeof e == "symbol",
  yt = (e) => e !== null && typeof e == "object",
  Vc = (e) => yt(e) && et(e.then) && et(e.catch),
  Wc = Object.prototype.toString,
  zi = (e) => Wc.call(e),
  Th = (e) => zi(e).slice(8, -1),
  $c = (e) => zi(e) === "[object Object]",
  wo = (e) =>
    Tt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
  pi = _o(
    ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
  ),
  Ni = (e) => {
    const t = Object.create(null);
    return (n) => t[n] || (t[n] = e(n));
  },
  Rh = /-(\w)/g,
  Oe = Ni((e) => e.replace(Rh, (t, n) => (n ? n.toUpperCase() : ""))),
  Dh = /\B([A-Z])/g,
  Jn = Ni((e) => e.replace(Dh, "-$1").toLowerCase()),
  Hi = Ni((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  dr = Ni((e) => (e ? `on${Hi(e)}` : "")),
  Es = (e, t) => !Object.is(e, t),
  gi = (e, t) => {
    for (let n = 0; n < e.length; n++) e[n](t);
  },
  yi = (e, t, n) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: n });
  },
  Br = (e) => {
    const t = parseFloat(e);
    return isNaN(t) ? e : t;
  },
  Lh = (e) => {
    const t = Tt(e) ? Number(e) : NaN;
    return isNaN(t) ? e : t;
  };
let Oa;
const Ih = () =>
  Oa ||
  (Oa =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : typeof global < "u"
      ? global
      : {});
let Gt;
class Uc {
  constructor(t = !1) {
    (this.detached = t),
      (this._active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = Gt),
      !t && Gt && (this.index = (Gt.scopes || (Gt.scopes = [])).push(this) - 1);
  }
  get active() {
    return this._active;
  }
  run(t) {
    if (this._active) {
      const n = Gt;
      try {
        return (Gt = this), t();
      } finally {
        Gt = n;
      }
    }
  }
  on() {
    Gt = this;
  }
  off() {
    Gt = this.parent;
  }
  stop(t) {
    if (this._active) {
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++) this.effects[n].stop();
      for (n = 0, s = this.cleanups.length; n < s; n++) this.cleanups[n]();
      if (this.scopes)
        for (n = 0, s = this.scopes.length; n < s; n++) this.scopes[n].stop(!0);
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index));
      }
      (this.parent = void 0), (this._active = !1);
    }
  }
}
function Yc(e) {
  return new Uc(e);
}
function Fh(e, t = Gt) {
  t && t.active && t.effects.push(e);
}
function Kc() {
  return Gt;
}
function Bh(e) {
  Gt && Gt.cleanups.push(e);
}
const Mo = (e) => {
    const t = new Set(e);
    return (t.w = 0), (t.n = 0), t;
  },
  qc = (e) => (e.w & sn) > 0,
  Xc = (e) => (e.n & sn) > 0,
  zh = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= sn;
  },
  Nh = (e) => {
    const { deps: t } = e;
    if (t.length) {
      let n = 0;
      for (let s = 0; s < t.length; s++) {
        const i = t[s];
        qc(i) && !Xc(i) ? i.delete(e) : (t[n++] = i),
          (i.w &= ~sn),
          (i.n &= ~sn);
      }
      t.length = n;
    }
  },
  vi = new WeakMap();
let ps = 0,
  sn = 1;
const zr = 30;
let fe;
const Mn = Symbol(""),
  Nr = Symbol("");
class So {
  constructor(t, n = null, s) {
    (this.fn = t),
      (this.scheduler = n),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Fh(this, s);
  }
  run() {
    if (!this.active) return this.fn();
    let t = fe,
      n = Ze;
    for (; t; ) {
      if (t === this) return;
      t = t.parent;
    }
    try {
      return (
        (this.parent = fe),
        (fe = this),
        (Ze = !0),
        (sn = 1 << ++ps),
        ps <= zr ? zh(this) : Ea(this),
        this.fn()
      );
    } finally {
      ps <= zr && Nh(this),
        (sn = 1 << --ps),
        (fe = this.parent),
        (Ze = n),
        (this.parent = void 0),
        this.deferStop && this.stop();
    }
  }
  stop() {
    fe === this
      ? (this.deferStop = !0)
      : this.active &&
        (Ea(this), this.onStop && this.onStop(), (this.active = !1));
  }
}
function Ea(e) {
  const { deps: t } = e;
  if (t.length) {
    for (let n = 0; n < t.length; n++) t[n].delete(e);
    t.length = 0;
  }
}
let Ze = !0;
const Qc = [];
function ts() {
  Qc.push(Ze), (Ze = !1);
}
function es() {
  const e = Qc.pop();
  Ze = e === void 0 ? !0 : e;
}
function qt(e, t, n) {
  if (Ze && fe) {
    let s = vi.get(e);
    s || vi.set(e, (s = new Map()));
    let i = s.get(n);
    i || s.set(n, (i = Mo())), Gc(i);
  }
}
function Gc(e, t) {
  let n = !1;
  ps <= zr ? Xc(e) || ((e.n |= sn), (n = !qc(e))) : (n = !e.has(fe)),
    n && (e.add(fe), fe.deps.push(e));
}
function Be(e, t, n, s, i, r) {
  const o = vi.get(e);
  if (!o) return;
  let a = [];
  if (t === "clear") a = [...o.values()];
  else if (n === "length" && Q(e)) {
    const l = Number(s);
    o.forEach((c, u) => {
      (u === "length" || u >= l) && a.push(c);
    });
  } else
    switch ((n !== void 0 && a.push(o.get(n)), t)) {
      case "add":
        Q(e)
          ? wo(n) && a.push(o.get("length"))
          : (a.push(o.get(Mn)), Hn(e) && a.push(o.get(Nr)));
        break;
      case "delete":
        Q(e) || (a.push(o.get(Mn)), Hn(e) && a.push(o.get(Nr)));
        break;
      case "set":
        Hn(e) && a.push(o.get(Mn));
        break;
    }
  if (a.length === 1) a[0] && Hr(a[0]);
  else {
    const l = [];
    for (const c of a) c && l.push(...c);
    Hr(Mo(l));
  }
}
function Hr(e, t) {
  const n = Q(e) ? e : [...e];
  for (const s of n) s.computed && Aa(s);
  for (const s of n) s.computed || Aa(s);
}
function Aa(e, t) {
  (e !== fe || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run());
}
function Hh(e, t) {
  var n;
  return (n = vi.get(e)) === null || n === void 0 ? void 0 : n.get(t);
}
const jh = _o("__proto__,__v_isRef,__isVue"),
  Zc = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== "arguments" && e !== "caller")
      .map((e) => Symbol[e])
      .filter(Co)
  ),
  Vh = ko(),
  Wh = ko(!1, !0),
  $h = ko(!0),
  Ta = Uh();
function Uh() {
  const e = {};
  return (
    ["includes", "indexOf", "lastIndexOf"].forEach((t) => {
      e[t] = function (...n) {
        const s = rt(this);
        for (let r = 0, o = this.length; r < o; r++) qt(s, "get", r + "");
        const i = s[t](...n);
        return i === -1 || i === !1 ? s[t](...n.map(rt)) : i;
      };
    }),
    ["push", "pop", "shift", "unshift", "splice"].forEach((t) => {
      e[t] = function (...n) {
        ts();
        const s = rt(this)[t].apply(this, n);
        return es(), s;
      };
    }),
    e
  );
}
function Yh(e) {
  const t = rt(this);
  return qt(t, "has", e), t.hasOwnProperty(e);
}
function ko(e = !1, t = !1) {
  return function (s, i, r) {
    if (i === "__v_isReactive") return !e;
    if (i === "__v_isReadonly") return e;
    if (i === "__v_isShallow") return t;
    if (i === "__v_raw" && r === (e ? (t ? ld : su) : t ? nu : eu).get(s))
      return s;
    const o = Q(s);
    if (!e) {
      if (o && ct(Ta, i)) return Reflect.get(Ta, i, r);
      if (i === "hasOwnProperty") return Yh;
    }
    const a = Reflect.get(s, i, r);
    return (Co(i) ? Zc.has(i) : jh(i)) || (e || qt(s, "get", i), t)
      ? a
      : At(a)
      ? o && wo(i)
        ? a
        : a.value
      : yt(a)
      ? e
        ? iu(a)
        : ns(a)
      : a;
  };
}
const Kh = Jc(),
  qh = Jc(!0);
function Jc(e = !1) {
  return function (n, s, i, r) {
    let o = n[s];
    if (Wn(o) && At(o) && !At(i)) return !1;
    if (
      !e &&
      (!Ci(i) && !Wn(i) && ((o = rt(o)), (i = rt(i))), !Q(n) && At(o) && !At(i))
    )
      return (o.value = i), !0;
    const a = Q(n) && wo(s) ? Number(s) < n.length : ct(n, s),
      l = Reflect.set(n, s, i, r);
    return (
      n === rt(r) && (a ? Es(i, o) && Be(n, "set", s, i) : Be(n, "add", s, i)),
      l
    );
  };
}
function Xh(e, t) {
  const n = ct(e, t);
  e[t];
  const s = Reflect.deleteProperty(e, t);
  return s && n && Be(e, "delete", t, void 0), s;
}
function Qh(e, t) {
  const n = Reflect.has(e, t);
  return (!Co(t) || !Zc.has(t)) && qt(e, "has", t), n;
}
function Gh(e) {
  return qt(e, "iterate", Q(e) ? "length" : Mn), Reflect.ownKeys(e);
}
const tu = { get: Vh, set: Kh, deleteProperty: Xh, has: Qh, ownKeys: Gh },
  Zh = {
    get: $h,
    set(e, t) {
      return !0;
    },
    deleteProperty(e, t) {
      return !0;
    },
  },
  Jh = Nt({}, tu, { get: Wh, set: qh }),
  Po = (e) => e,
  ji = (e) => Reflect.getPrototypeOf(e);
function Qs(e, t, n = !1, s = !1) {
  e = e.__v_raw;
  const i = rt(e),
    r = rt(t);
  n || (t !== r && qt(i, "get", t), qt(i, "get", r));
  const { has: o } = ji(i),
    a = s ? Po : n ? Ao : As;
  if (o.call(i, t)) return a(e.get(t));
  if (o.call(i, r)) return a(e.get(r));
  e !== i && e.get(t);
}
function Gs(e, t = !1) {
  const n = this.__v_raw,
    s = rt(n),
    i = rt(e);
  return (
    t || (e !== i && qt(s, "has", e), qt(s, "has", i)),
    e === i ? n.has(e) : n.has(e) || n.has(i)
  );
}
function Zs(e, t = !1) {
  return (
    (e = e.__v_raw), !t && qt(rt(e), "iterate", Mn), Reflect.get(e, "size", e)
  );
}
function Ra(e) {
  e = rt(e);
  const t = rt(this);
  return ji(t).has.call(t, e) || (t.add(e), Be(t, "add", e, e)), this;
}
function Da(e, t) {
  t = rt(t);
  const n = rt(this),
    { has: s, get: i } = ji(n);
  let r = s.call(n, e);
  r || ((e = rt(e)), (r = s.call(n, e)));
  const o = i.call(n, e);
  return (
    n.set(e, t), r ? Es(t, o) && Be(n, "set", e, t) : Be(n, "add", e, t), this
  );
}
function La(e) {
  const t = rt(this),
    { has: n, get: s } = ji(t);
  let i = n.call(t, e);
  i || ((e = rt(e)), (i = n.call(t, e))), s && s.call(t, e);
  const r = t.delete(e);
  return i && Be(t, "delete", e, void 0), r;
}
function Ia() {
  const e = rt(this),
    t = e.size !== 0,
    n = e.clear();
  return t && Be(e, "clear", void 0, void 0), n;
}
function Js(e, t) {
  return function (s, i) {
    const r = this,
      o = r.__v_raw,
      a = rt(o),
      l = t ? Po : e ? Ao : As;
    return (
      !e && qt(a, "iterate", Mn), o.forEach((c, u) => s.call(i, l(c), l(u), r))
    );
  };
}
function ti(e, t, n) {
  return function (...s) {
    const i = this.__v_raw,
      r = rt(i),
      o = Hn(r),
      a = e === "entries" || (e === Symbol.iterator && o),
      l = e === "keys" && o,
      c = i[e](...s),
      u = n ? Po : t ? Ao : As;
    return (
      !t && qt(r, "iterate", l ? Nr : Mn),
      {
        next() {
          const { value: f, done: h } = c.next();
          return h
            ? { value: f, done: h }
            : { value: a ? [u(f[0]), u(f[1])] : u(f), done: h };
        },
        [Symbol.iterator]() {
          return this;
        },
      }
    );
  };
}
function Ne(e) {
  return function (...t) {
    return e === "delete" ? !1 : this;
  };
}
function td() {
  const e = {
      get(r) {
        return Qs(this, r);
      },
      get size() {
        return Zs(this);
      },
      has: Gs,
      add: Ra,
      set: Da,
      delete: La,
      clear: Ia,
      forEach: Js(!1, !1),
    },
    t = {
      get(r) {
        return Qs(this, r, !1, !0);
      },
      get size() {
        return Zs(this);
      },
      has: Gs,
      add: Ra,
      set: Da,
      delete: La,
      clear: Ia,
      forEach: Js(!1, !0),
    },
    n = {
      get(r) {
        return Qs(this, r, !0);
      },
      get size() {
        return Zs(this, !0);
      },
      has(r) {
        return Gs.call(this, r, !0);
      },
      add: Ne("add"),
      set: Ne("set"),
      delete: Ne("delete"),
      clear: Ne("clear"),
      forEach: Js(!0, !1),
    },
    s = {
      get(r) {
        return Qs(this, r, !0, !0);
      },
      get size() {
        return Zs(this, !0);
      },
      has(r) {
        return Gs.call(this, r, !0);
      },
      add: Ne("add"),
      set: Ne("set"),
      delete: Ne("delete"),
      clear: Ne("clear"),
      forEach: Js(!0, !0),
    };
  return (
    ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      (e[r] = ti(r, !1, !1)),
        (n[r] = ti(r, !0, !1)),
        (t[r] = ti(r, !1, !0)),
        (s[r] = ti(r, !0, !0));
    }),
    [e, n, t, s]
  );
}
const [ed, nd, sd, id] = td();
function Oo(e, t) {
  const n = t ? (e ? id : sd) : e ? nd : ed;
  return (s, i, r) =>
    i === "__v_isReactive"
      ? !e
      : i === "__v_isReadonly"
      ? e
      : i === "__v_raw"
      ? s
      : Reflect.get(ct(n, i) && i in s ? n : s, i, r);
}
const rd = { get: Oo(!1, !1) },
  od = { get: Oo(!1, !0) },
  ad = { get: Oo(!0, !1) },
  eu = new WeakMap(),
  nu = new WeakMap(),
  su = new WeakMap(),
  ld = new WeakMap();
function cd(e) {
  switch (e) {
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
function ud(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : cd(Th(e));
}
function ns(e) {
  return Wn(e) ? e : Eo(e, !1, tu, rd, eu);
}
function fd(e) {
  return Eo(e, !1, Jh, od, nu);
}
function iu(e) {
  return Eo(e, !0, Zh, ad, su);
}
function Eo(e, t, n, s, i) {
  if (!yt(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e;
  const r = i.get(e);
  if (r) return r;
  const o = ud(e);
  if (o === 0) return e;
  const a = new Proxy(e, o === 2 ? s : n);
  return i.set(e, a), a;
}
function Je(e) {
  return Wn(e) ? Je(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Wn(e) {
  return !!(e && e.__v_isReadonly);
}
function Ci(e) {
  return !!(e && e.__v_isShallow);
}
function Vi(e) {
  return Je(e) || Wn(e);
}
function rt(e) {
  const t = e && e.__v_raw;
  return t ? rt(t) : e;
}
function $n(e) {
  return yi(e, "__v_skip", !0), e;
}
const As = (e) => (yt(e) ? ns(e) : e),
  Ao = (e) => (yt(e) ? iu(e) : e);
function ru(e) {
  Ze && fe && ((e = rt(e)), Gc(e.dep || (e.dep = Mo())));
}
function ou(e, t) {
  e = rt(e);
  const n = e.dep;
  n && Hr(n);
}
function At(e) {
  return !!(e && e.__v_isRef === !0);
}
function oe(e) {
  return au(e, !1);
}
function To(e) {
  return au(e, !0);
}
function au(e, t) {
  return At(e) ? e : new hd(e, t);
}
class hd {
  constructor(t, n) {
    (this.__v_isShallow = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = n ? t : rt(t)),
      (this._value = n ? t : As(t));
  }
  get value() {
    return ru(this), this._value;
  }
  set value(t) {
    const n = this.__v_isShallow || Ci(t) || Wn(t);
    (t = n ? t : rt(t)),
      Es(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = n ? t : As(t)), ou(this));
  }
}
function Mt(e) {
  return At(e) ? e.value : e;
}
const dd = {
  get: (e, t, n) => Mt(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return At(i) && !At(n) ? ((i.value = n), !0) : Reflect.set(e, t, n, s);
  },
};
function lu(e) {
  return Je(e) ? e : new Proxy(e, dd);
}
function pd(e) {
  const t = Q(e) ? new Array(e.length) : {};
  for (const n in e) t[n] = md(e, n);
  return t;
}
class gd {
  constructor(t, n, s) {
    (this._object = t),
      (this._key = n),
      (this._defaultValue = s),
      (this.__v_isRef = !0);
  }
  get value() {
    const t = this._object[this._key];
    return t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    this._object[this._key] = t;
  }
  get dep() {
    return Hh(rt(this._object), this._key);
  }
}
function md(e, t, n) {
  const s = e[t];
  return At(s) ? s : new gd(e, t, n);
}
var cu;
class bd {
  constructor(t, n, s, i) {
    (this._setter = n),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[cu] = !1),
      (this._dirty = !0),
      (this.effect = new So(t, () => {
        this._dirty || ((this._dirty = !0), ou(this));
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = s);
  }
  get value() {
    const t = rt(this);
    return (
      ru(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    );
  }
  set value(t) {
    this._setter(t);
  }
}
cu = "__v_isReadonly";
function xd(e, t, n = !1) {
  let s, i;
  const r = et(e);
  return (
    r ? ((s = e), (i = ge)) : ((s = e.get), (i = e.set)),
    new bd(s, i, r || !i, n)
  );
}
function tn(e, t, n, s) {
  let i;
  try {
    i = s ? e(...s) : e();
  } catch (r) {
    Wi(r, t, n);
  }
  return i;
}
function ie(e, t, n, s) {
  if (et(e)) {
    const r = tn(e, t, n, s);
    return (
      r &&
        Vc(r) &&
        r.catch((o) => {
          Wi(o, t, n);
        }),
      r
    );
  }
  const i = [];
  for (let r = 0; r < e.length; r++) i.push(ie(e[r], t, n, s));
  return i;
}
function Wi(e, t, n, s = !0) {
  const i = t ? t.vnode : null;
  if (t) {
    let r = t.parent;
    const o = t.proxy,
      a = n;
    for (; r; ) {
      const c = r.ec;
      if (c) {
        for (let u = 0; u < c.length; u++) if (c[u](e, o, a) === !1) return;
      }
      r = r.parent;
    }
    const l = t.appContext.config.errorHandler;
    if (l) {
      tn(l, null, 10, [e, o, a]);
      return;
    }
  }
  _d(e, n, i, s);
}
function _d(e, t, n, s = !0) {
  console.error(e);
}
let Ts = !1,
  jr = !1;
const Ht = [];
let we = 0;
const jn = [];
let Le = null,
  _n = 0;
const uu = Promise.resolve();
let Ro = null;
function Do(e) {
  const t = Ro || uu;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function yd(e) {
  let t = we + 1,
    n = Ht.length;
  for (; t < n; ) {
    const s = (t + n) >>> 1;
    Rs(Ht[s]) < e ? (t = s + 1) : (n = s);
  }
  return t;
}
function Lo(e) {
  (!Ht.length || !Ht.includes(e, Ts && e.allowRecurse ? we + 1 : we)) &&
    (e.id == null ? Ht.push(e) : Ht.splice(yd(e.id), 0, e), fu());
}
function fu() {
  !Ts && !jr && ((jr = !0), (Ro = uu.then(du)));
}
function vd(e) {
  const t = Ht.indexOf(e);
  t > we && Ht.splice(t, 1);
}
function Cd(e) {
  Q(e)
    ? jn.push(...e)
    : (!Le || !Le.includes(e, e.allowRecurse ? _n + 1 : _n)) && jn.push(e),
    fu();
}
function Fa(e, t = Ts ? we + 1 : 0) {
  for (; t < Ht.length; t++) {
    const n = Ht[t];
    n && n.pre && (Ht.splice(t, 1), t--, n());
  }
}
function hu(e) {
  if (jn.length) {
    const t = [...new Set(jn)];
    if (((jn.length = 0), Le)) {
      Le.push(...t);
      return;
    }
    for (Le = t, Le.sort((n, s) => Rs(n) - Rs(s)), _n = 0; _n < Le.length; _n++)
      Le[_n]();
    (Le = null), (_n = 0);
  }
}
const Rs = (e) => (e.id == null ? 1 / 0 : e.id),
  wd = (e, t) => {
    const n = Rs(e) - Rs(t);
    if (n === 0) {
      if (e.pre && !t.pre) return -1;
      if (t.pre && !e.pre) return 1;
    }
    return n;
  };
function du(e) {
  (jr = !1), (Ts = !0), Ht.sort(wd);
  const t = ge;
  try {
    for (we = 0; we < Ht.length; we++) {
      const n = Ht[we];
      n && n.active !== !1 && tn(n, null, 14);
    }
  } finally {
    (we = 0),
      (Ht.length = 0),
      hu(),
      (Ts = !1),
      (Ro = null),
      (Ht.length || jn.length) && du();
  }
}
function Md(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || _t;
  let i = n;
  const r = t.startsWith("update:"),
    o = r && t.slice(7);
  if (o && o in s) {
    const u = `${o === "modelValue" ? "model" : o}Modifiers`,
      { number: f, trim: h } = s[u] || _t;
    h && (i = n.map((d) => (Tt(d) ? d.trim() : d))), f && (i = n.map(Br));
  }
  let a,
    l = s[(a = dr(t))] || s[(a = dr(Oe(t)))];
  !l && r && (l = s[(a = dr(Jn(t)))]), l && ie(l, e, 6, i);
  const c = s[a + "Once"];
  if (c) {
    if (!e.emitted) e.emitted = {};
    else if (e.emitted[a]) return;
    (e.emitted[a] = !0), ie(c, e, 6, i);
  }
}
function pu(e, t, n = !1) {
  const s = t.emitsCache,
    i = s.get(e);
  if (i !== void 0) return i;
  const r = e.emits;
  let o = {},
    a = !1;
  if (!et(e)) {
    const l = (c) => {
      const u = pu(c, t, !0);
      u && ((a = !0), Nt(o, u));
    };
    !n && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l);
  }
  return !r && !a
    ? (yt(e) && s.set(e, null), null)
    : (Q(r) ? r.forEach((l) => (o[l] = null)) : Nt(o, r),
      yt(e) && s.set(e, o),
      o);
}
function $i(e, t) {
  return !e || !Bi(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, "")),
      ct(e, t[0].toLowerCase() + t.slice(1)) || ct(e, Jn(t)) || ct(e, t));
}
let Jt = null,
  Ui = null;
function wi(e) {
  const t = Jt;
  return (Jt = e), (Ui = (e && e.type.__scopeId) || null), t;
}
function Io(e) {
  Ui = e;
}
function Fo() {
  Ui = null;
}
function On(e, t = Jt, n) {
  if (!t || e._n) return e;
  const s = (...i) => {
    s._d && Ya(-1);
    const r = wi(t);
    let o;
    try {
      o = e(...i);
    } finally {
      wi(r), s._d && Ya(1);
    }
    return o;
  };
  return (s._n = !0), (s._c = !0), (s._d = !0), s;
}
function pr(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    props: r,
    propsOptions: [o],
    slots: a,
    attrs: l,
    emit: c,
    render: u,
    renderCache: f,
    data: h,
    setupState: d,
    ctx: p,
    inheritAttrs: g,
  } = e;
  let x, b;
  const _ = wi(e);
  try {
    if (n.shapeFlag & 4) {
      const C = i || s;
      (x = Ce(u.call(C, C, f, r, d, h, p))), (b = l);
    } else {
      const C = t;
      (x = Ce(
        C.length > 1 ? C(r, { attrs: l, slots: a, emit: c }) : C(r, null)
      )),
        (b = t.props ? l : Sd(l));
    }
  } catch (C) {
    (xs.length = 0), Wi(C, e, 1), (x = St(me));
  }
  let v = x;
  if (b && g !== !1) {
    const C = Object.keys(b),
      { shapeFlag: w } = v;
    C.length && w & 7 && (o && C.some(yo) && (b = kd(b, o)), (v = rn(v, b)));
  }
  return (
    n.dirs && ((v = rn(v)), (v.dirs = v.dirs ? v.dirs.concat(n.dirs) : n.dirs)),
    n.transition && (v.transition = n.transition),
    (x = v),
    wi(_),
    x
  );
}
const Sd = (e) => {
    let t;
    for (const n in e)
      (n === "class" || n === "style" || Bi(n)) && ((t || (t = {}))[n] = e[n]);
    return t;
  },
  kd = (e, t) => {
    const n = {};
    for (const s in e) (!yo(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
    return n;
  };
function Pd(e, t, n) {
  const { props: s, children: i, component: r } = e,
    { props: o, children: a, patchFlag: l } = t,
    c = r.emitsOptions;
  if (t.dirs || t.transition) return !0;
  if (n && l >= 0) {
    if (l & 1024) return !0;
    if (l & 16) return s ? Ba(s, o, c) : !!o;
    if (l & 8) {
      const u = t.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        const h = u[f];
        if (o[h] !== s[h] && !$i(c, h)) return !0;
      }
    }
  } else
    return (i || a) && (!a || !a.$stable)
      ? !0
      : s === o
      ? !1
      : s
      ? o
        ? Ba(s, o, c)
        : !0
      : !!o;
  return !1;
}
function Ba(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length) return !0;
  for (let i = 0; i < s.length; i++) {
    const r = s[i];
    if (t[r] !== e[r] && !$i(n, r)) return !0;
  }
  return !1;
}
function Od({ vnode: e, parent: t }, n) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = n), (t = t.parent);
}
const Ed = (e) => e.__isSuspense;
function Ad(e, t) {
  t && t.pendingBranch
    ? Q(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : Cd(e);
}
function mi(e, t) {
  if (Et) {
    let n = Et.provides;
    const s = Et.parent && Et.parent.provides;
    s === n && (n = Et.provides = Object.create(s)), (n[e] = t);
  }
}
function re(e, t, n = !1) {
  const s = Et || Jt;
  if (s) {
    const i =
      s.parent == null
        ? s.vnode.appContext && s.vnode.appContext.provides
        : s.parent.provides;
    if (i && e in i) return i[e];
    if (arguments.length > 1) return n && et(t) ? t.call(s.proxy) : t;
  }
}
const ei = {};
function en(e, t, n) {
  return gu(e, t, n);
}
function gu(
  e,
  t,
  { immediate: n, deep: s, flush: i, onTrack: r, onTrigger: o } = _t
) {
  const a = Kc() === (Et == null ? void 0 : Et.scope) ? Et : null;
  let l,
    c = !1,
    u = !1;
  if (
    (At(e)
      ? ((l = () => e.value), (c = Ci(e)))
      : Je(e)
      ? ((l = () => e), (s = !0))
      : Q(e)
      ? ((u = !0),
        (c = e.some((v) => Je(v) || Ci(v))),
        (l = () =>
          e.map((v) => {
            if (At(v)) return v.value;
            if (Je(v)) return Cn(v);
            if (et(v)) return tn(v, a, 2);
          })))
      : et(e)
      ? t
        ? (l = () => tn(e, a, 2))
        : (l = () => {
            if (!(a && a.isUnmounted)) return f && f(), ie(e, a, 3, [h]);
          })
      : (l = ge),
    t && s)
  ) {
    const v = l;
    l = () => Cn(v());
  }
  let f,
    h = (v) => {
      f = b.onStop = () => {
        tn(v, a, 4);
      };
    },
    d;
  if (Ls)
    if (
      ((h = ge),
      t ? n && ie(t, a, 3, [l(), u ? [] : void 0, h]) : l(),
      i === "sync")
    ) {
      const v = Sp();
      d = v.__watcherHandles || (v.__watcherHandles = []);
    } else return ge;
  let p = u ? new Array(e.length).fill(ei) : ei;
  const g = () => {
    if (b.active)
      if (t) {
        const v = b.run();
        (s || c || (u ? v.some((C, w) => Es(C, p[w])) : Es(v, p))) &&
          (f && f(),
          ie(t, a, 3, [v, p === ei ? void 0 : u && p[0] === ei ? [] : p, h]),
          (p = v));
      } else b.run();
  };
  g.allowRecurse = !!t;
  let x;
  i === "sync"
    ? (x = g)
    : i === "post"
    ? (x = () => $t(g, a && a.suspense))
    : ((g.pre = !0), a && (g.id = a.uid), (x = () => Lo(g)));
  const b = new So(l, x);
  t
    ? n
      ? g()
      : (p = b.run())
    : i === "post"
    ? $t(b.run.bind(b), a && a.suspense)
    : b.run();
  const _ = () => {
    b.stop(), a && a.scope && vo(a.scope.effects, b);
  };
  return d && d.push(_), _;
}
function Td(e, t, n) {
  const s = this.proxy,
    i = Tt(e) ? (e.includes(".") ? mu(s, e) : () => s[e]) : e.bind(s, s);
  let r;
  et(t) ? (r = t) : ((r = t.handler), (n = t));
  const o = Et;
  Yn(this);
  const a = gu(i, r.bind(s), n);
  return o ? Yn(o) : Sn(), a;
}
function mu(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++) s = s[n[i]];
    return s;
  };
}
function Cn(e, t) {
  if (!yt(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e;
  if ((t.add(e), At(e))) Cn(e.value, t);
  else if (Q(e)) for (let n = 0; n < e.length; n++) Cn(e[n], t);
  else if (jc(e) || Hn(e))
    e.forEach((n) => {
      Cn(n, t);
    });
  else if ($c(e)) for (const n in e) Cn(e[n], t);
  return e;
}
function Rd() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  };
  return (
    Xi(() => {
      e.isMounted = !0;
    }),
    Bo(() => {
      e.isUnmounting = !0;
    }),
    e
  );
}
const te = [Function, Array],
  Dd = {
    name: "BaseTransition",
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: te,
      onEnter: te,
      onAfterEnter: te,
      onEnterCancelled: te,
      onBeforeLeave: te,
      onLeave: te,
      onAfterLeave: te,
      onLeaveCancelled: te,
      onBeforeAppear: te,
      onAppear: te,
      onAfterAppear: te,
      onAppearCancelled: te,
    },
    setup(e, { slots: t }) {
      const n = Lu(),
        s = Rd();
      let i;
      return () => {
        const r = t.default && _u(t.default(), !0);
        if (!r || !r.length) return;
        let o = r[0];
        if (r.length > 1) {
          for (const g of r)
            if (g.type !== me) {
              o = g;
              break;
            }
        }
        const a = rt(e),
          { mode: l } = a;
        if (s.isLeaving) return gr(o);
        const c = za(o);
        if (!c) return gr(o);
        const u = Vr(c, a, s, n);
        Wr(c, u);
        const f = n.subTree,
          h = f && za(f);
        let d = !1;
        const { getTransitionKey: p } = c.type;
        if (p) {
          const g = p();
          i === void 0 ? (i = g) : g !== i && ((i = g), (d = !0));
        }
        if (h && h.type !== me && (!yn(c, h) || d)) {
          const g = Vr(h, a, s, n);
          if ((Wr(h, g), l === "out-in"))
            return (
              (s.isLeaving = !0),
              (g.afterLeave = () => {
                (s.isLeaving = !1), n.update.active !== !1 && n.update();
              }),
              gr(o)
            );
          l === "in-out" &&
            c.type !== me &&
            (g.delayLeave = (x, b, _) => {
              const v = xu(s, h);
              (v[String(h.key)] = h),
                (x._leaveCb = () => {
                  b(), (x._leaveCb = void 0), delete u.delayedLeave;
                }),
                (u.delayedLeave = _);
            });
        }
        return o;
      };
    },
  },
  bu = Dd;
function xu(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || ((s = Object.create(null)), n.set(t.type, s)), s;
}
function Vr(e, t, n, s) {
  const {
      appear: i,
      mode: r,
      persisted: o = !1,
      onBeforeEnter: a,
      onEnter: l,
      onAfterEnter: c,
      onEnterCancelled: u,
      onBeforeLeave: f,
      onLeave: h,
      onAfterLeave: d,
      onLeaveCancelled: p,
      onBeforeAppear: g,
      onAppear: x,
      onAfterAppear: b,
      onAppearCancelled: _,
    } = t,
    v = String(e.key),
    C = xu(n, e),
    w = (S, R) => {
      S && ie(S, s, 9, R);
    },
    O = (S, R) => {
      const L = R[1];
      w(S, R),
        Q(S) ? S.every((V) => V.length <= 1) && L() : S.length <= 1 && L();
    },
    k = {
      mode: r,
      persisted: o,
      beforeEnter(S) {
        let R = a;
        if (!n.isMounted)
          if (i) R = g || a;
          else return;
        S._leaveCb && S._leaveCb(!0);
        const L = C[v];
        L && yn(e, L) && L.el._leaveCb && L.el._leaveCb(), w(R, [S]);
      },
      enter(S) {
        let R = l,
          L = c,
          V = u;
        if (!n.isMounted)
          if (i) (R = x || l), (L = b || c), (V = _ || u);
          else return;
        let A = !1;
        const W = (S._enterCb = (J) => {
          A ||
            ((A = !0),
            J ? w(V, [S]) : w(L, [S]),
            k.delayedLeave && k.delayedLeave(),
            (S._enterCb = void 0));
        });
        R ? O(R, [S, W]) : W();
      },
      leave(S, R) {
        const L = String(e.key);
        if ((S._enterCb && S._enterCb(!0), n.isUnmounting)) return R();
        w(f, [S]);
        let V = !1;
        const A = (S._leaveCb = (W) => {
          V ||
            ((V = !0),
            R(),
            W ? w(p, [S]) : w(d, [S]),
            (S._leaveCb = void 0),
            C[L] === e && delete C[L]);
        });
        (C[L] = e), h ? O(h, [S, A]) : A();
      },
      clone(S) {
        return Vr(S, t, n, s);
      },
    };
  return k;
}
function gr(e) {
  if (Ki(e)) return (e = rn(e)), (e.children = null), e;
}
function za(e) {
  return Ki(e) ? (e.children ? e.children[0] : void 0) : e;
}
function Wr(e, t) {
  e.shapeFlag & 6 && e.component
    ? Wr(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t);
}
function _u(e, t = !1, n) {
  let s = [],
    i = 0;
  for (let r = 0; r < e.length; r++) {
    let o = e[r];
    const a = n == null ? o.key : String(n) + String(o.key != null ? o.key : r);
    o.type === Ut
      ? (o.patchFlag & 128 && i++, (s = s.concat(_u(o.children, t, a))))
      : (t || o.type !== me) && s.push(a != null ? rn(o, { key: a }) : o);
  }
  if (i > 1) for (let r = 0; r < s.length; r++) s[r].patchFlag = -2;
  return s;
}
function Yi(e) {
  return et(e) ? { setup: e, name: e.name } : e;
}
const bi = (e) => !!e.type.__asyncLoader,
  Ki = (e) => e.type.__isKeepAlive;
function Ld(e, t) {
  yu(e, "a", t);
}
function Id(e, t) {
  yu(e, "da", t);
}
function yu(e, t, n = Et) {
  const s =
    e.__wdc ||
    (e.__wdc = () => {
      let i = n;
      for (; i; ) {
        if (i.isDeactivated) return;
        i = i.parent;
      }
      return e();
    });
  if ((qi(t, s, n), n)) {
    let i = n.parent;
    for (; i && i.parent; )
      Ki(i.parent.vnode) && Fd(s, t, n, i), (i = i.parent);
  }
}
function Fd(e, t, n, s) {
  const i = qi(t, e, s, !0);
  vu(() => {
    vo(s[t], i);
  }, n);
}
function qi(e, t, n = Et, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []),
      r =
        t.__weh ||
        (t.__weh = (...o) => {
          if (n.isUnmounted) return;
          ts(), Yn(n);
          const a = ie(t, n, e, o);
          return Sn(), es(), a;
        });
    return s ? i.unshift(r) : i.push(r), r;
  }
}
const ze =
    (e) =>
    (t, n = Et) =>
      (!Ls || e === "sp") && qi(e, (...s) => t(...s), n),
  Bd = ze("bm"),
  Xi = ze("m"),
  zd = ze("bu"),
  Nd = ze("u"),
  Bo = ze("bum"),
  vu = ze("um"),
  Hd = ze("sp"),
  jd = ze("rtg"),
  Vd = ze("rtc");
function Wd(e, t = Et) {
  qi("ec", e, t);
}
function $r(e, t) {
  const n = Jt;
  if (n === null) return e;
  const s = Zi(n) || n.proxy,
    i = e.dirs || (e.dirs = []);
  for (let r = 0; r < t.length; r++) {
    let [o, a, l, c = _t] = t[r];
    o &&
      (et(o) && (o = { mounted: o, updated: o }),
      o.deep && Cn(a),
      i.push({
        dir: o,
        instance: s,
        value: a,
        oldValue: void 0,
        arg: l,
        modifiers: c,
      }));
  }
  return e;
}
function un(e, t, n, s) {
  const i = e.dirs,
    r = t && t.dirs;
  for (let o = 0; o < i.length; o++) {
    const a = i[o];
    r && (a.oldValue = r[o].value);
    let l = a.dir[s];
    l && (ts(), ie(l, n, 8, [e.el, a, e, t]), es());
  }
}
const zo = "components";
function $d(e, t) {
  return wu(zo, e, !0, t) || e;
}
const Cu = Symbol();
function Ud(e) {
  return Tt(e) ? wu(zo, e, !1) || e : e || Cu;
}
function wu(e, t, n = !0, s = !1) {
  const i = Jt || Et;
  if (i) {
    const r = i.type;
    if (e === zo) {
      const a = Cp(r, !1);
      if (a && (a === t || a === Oe(t) || a === Hi(Oe(t)))) return r;
    }
    const o = Na(i[e] || r[e], t) || Na(i.appContext[e], t);
    return !o && s ? r : o;
  }
}
function Na(e, t) {
  return e && (e[t] || e[Oe(t)] || e[Hi(Oe(t))]);
}
function Ur(e, t, n, s) {
  let i;
  const r = n && n[s];
  if (Q(e) || Tt(e)) {
    i = new Array(e.length);
    for (let o = 0, a = e.length; o < a; o++)
      i[o] = t(e[o], o, void 0, r && r[o]);
  } else if (typeof e == "number") {
    i = new Array(e);
    for (let o = 0; o < e; o++) i[o] = t(o + 1, o, void 0, r && r[o]);
  } else if (yt(e))
    if (e[Symbol.iterator])
      i = Array.from(e, (o, a) => t(o, a, void 0, r && r[a]));
    else {
      const o = Object.keys(e);
      i = new Array(o.length);
      for (let a = 0, l = o.length; a < l; a++) {
        const c = o[a];
        i[a] = t(e[c], c, a, r && r[a]);
      }
    }
  else i = [];
  return n && (n[s] = i), i;
}
const Yr = (e) => (e ? (Iu(e) ? Zi(e) || e.proxy : Yr(e.parent)) : null),
  bs = Nt(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Yr(e.parent),
    $root: (e) => Yr(e.root),
    $emit: (e) => e.emit,
    $options: (e) => No(e),
    $forceUpdate: (e) => e.f || (e.f = () => Lo(e.update)),
    $nextTick: (e) => e.n || (e.n = Do.bind(e.proxy)),
    $watch: (e) => Td.bind(e),
  }),
  mr = (e, t) => e !== _t && !e.__isScriptSetup && ct(e, t),
  Yd = {
    get({ _: e }, t) {
      const {
        ctx: n,
        setupState: s,
        data: i,
        props: r,
        accessCache: o,
        type: a,
        appContext: l,
      } = e;
      let c;
      if (t[0] !== "$") {
        const d = o[t];
        if (d !== void 0)
          switch (d) {
            case 1:
              return s[t];
            case 2:
              return i[t];
            case 4:
              return n[t];
            case 3:
              return r[t];
          }
        else {
          if (mr(s, t)) return (o[t] = 1), s[t];
          if (i !== _t && ct(i, t)) return (o[t] = 2), i[t];
          if ((c = e.propsOptions[0]) && ct(c, t)) return (o[t] = 3), r[t];
          if (n !== _t && ct(n, t)) return (o[t] = 4), n[t];
          Kr && (o[t] = 0);
        }
      }
      const u = bs[t];
      let f, h;
      if (u) return t === "$attrs" && qt(e, "get", t), u(e);
      if ((f = a.__cssModules) && (f = f[t])) return f;
      if (n !== _t && ct(n, t)) return (o[t] = 4), n[t];
      if (((h = l.config.globalProperties), ct(h, t))) return h[t];
    },
    set({ _: e }, t, n) {
      const { data: s, setupState: i, ctx: r } = e;
      return mr(i, t)
        ? ((i[t] = n), !0)
        : s !== _t && ct(s, t)
        ? ((s[t] = n), !0)
        : ct(e.props, t) || (t[0] === "$" && t.slice(1) in e)
        ? !1
        : ((r[t] = n), !0);
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: n,
          ctx: s,
          appContext: i,
          propsOptions: r,
        },
      },
      o
    ) {
      let a;
      return (
        !!n[o] ||
        (e !== _t && ct(e, o)) ||
        mr(t, o) ||
        ((a = r[0]) && ct(a, o)) ||
        ct(s, o) ||
        ct(bs, o) ||
        ct(i.config.globalProperties, o)
      );
    },
    defineProperty(e, t, n) {
      return (
        n.get != null
          ? (e._.accessCache[t] = 0)
          : ct(n, "value") && this.set(e, t, n.value, null),
        Reflect.defineProperty(e, t, n)
      );
    },
  };
let Kr = !0;
function Kd(e) {
  const t = No(e),
    n = e.proxy,
    s = e.ctx;
  (Kr = !1), t.beforeCreate && Ha(t.beforeCreate, e, "bc");
  const {
    data: i,
    computed: r,
    methods: o,
    watch: a,
    provide: l,
    inject: c,
    created: u,
    beforeMount: f,
    mounted: h,
    beforeUpdate: d,
    updated: p,
    activated: g,
    deactivated: x,
    beforeDestroy: b,
    beforeUnmount: _,
    destroyed: v,
    unmounted: C,
    render: w,
    renderTracked: O,
    renderTriggered: k,
    errorCaptured: S,
    serverPrefetch: R,
    expose: L,
    inheritAttrs: V,
    components: A,
    directives: W,
    filters: J,
  } = t;
  if ((c && qd(c, s, null, e.appContext.config.unwrapInjectedRef), o))
    for (const U in o) {
      const tt = o[U];
      et(tt) && (s[U] = tt.bind(n));
    }
  if (i) {
    const U = i.call(n, n);
    yt(U) && (e.data = ns(U));
  }
  if (((Kr = !0), r))
    for (const U in r) {
      const tt = r[U],
        Ot = et(tt) ? tt.bind(n, n) : et(tt.get) ? tt.get.bind(n, n) : ge,
        Ft = !et(tt) && et(tt.set) ? tt.set.bind(n) : ge,
        Lt = Zt({ get: Ot, set: Ft });
      Object.defineProperty(s, U, {
        enumerable: !0,
        configurable: !0,
        get: () => Lt.value,
        set: (vt) => (Lt.value = vt),
      });
    }
  if (a) for (const U in a) Mu(a[U], s, n, U);
  if (l) {
    const U = et(l) ? l.call(n) : l;
    Reflect.ownKeys(U).forEach((tt) => {
      mi(tt, U[tt]);
    });
  }
  u && Ha(u, e, "c");
  function G(U, tt) {
    Q(tt) ? tt.forEach((Ot) => U(Ot.bind(n))) : tt && U(tt.bind(n));
  }
  if (
    (G(Bd, f),
    G(Xi, h),
    G(zd, d),
    G(Nd, p),
    G(Ld, g),
    G(Id, x),
    G(Wd, S),
    G(Vd, O),
    G(jd, k),
    G(Bo, _),
    G(vu, C),
    G(Hd, R),
    Q(L))
  )
    if (L.length) {
      const U = e.exposed || (e.exposed = {});
      L.forEach((tt) => {
        Object.defineProperty(U, tt, {
          get: () => n[tt],
          set: (Ot) => (n[tt] = Ot),
        });
      });
    } else e.exposed || (e.exposed = {});
  w && e.render === ge && (e.render = w),
    V != null && (e.inheritAttrs = V),
    A && (e.components = A),
    W && (e.directives = W);
}
function qd(e, t, n = ge, s = !1) {
  Q(e) && (e = qr(e));
  for (const i in e) {
    const r = e[i];
    let o;
    yt(r)
      ? "default" in r
        ? (o = re(r.from || i, r.default, !0))
        : (o = re(r.from || i))
      : (o = re(r)),
      At(o) && s
        ? Object.defineProperty(t, i, {
            enumerable: !0,
            configurable: !0,
            get: () => o.value,
            set: (a) => (o.value = a),
          })
        : (t[i] = o);
  }
}
function Ha(e, t, n) {
  ie(Q(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy), t, n);
}
function Mu(e, t, n, s) {
  const i = s.includes(".") ? mu(n, s) : () => n[s];
  if (Tt(e)) {
    const r = t[e];
    et(r) && en(i, r);
  } else if (et(e)) en(i, e.bind(n));
  else if (yt(e))
    if (Q(e)) e.forEach((r) => Mu(r, t, n, s));
    else {
      const r = et(e.handler) ? e.handler.bind(n) : t[e.handler];
      et(r) && en(i, r, e);
    }
}
function No(e) {
  const t = e.type,
    { mixins: n, extends: s } = t,
    {
      mixins: i,
      optionsCache: r,
      config: { optionMergeStrategies: o },
    } = e.appContext,
    a = r.get(t);
  let l;
  return (
    a
      ? (l = a)
      : !i.length && !n && !s
      ? (l = t)
      : ((l = {}), i.length && i.forEach((c) => Mi(l, c, o, !0)), Mi(l, t, o)),
    yt(t) && r.set(t, l),
    l
  );
}
function Mi(e, t, n, s = !1) {
  const { mixins: i, extends: r } = t;
  r && Mi(e, r, n, !0), i && i.forEach((o) => Mi(e, o, n, !0));
  for (const o in t)
    if (!(s && o === "expose")) {
      const a = Xd[o] || (n && n[o]);
      e[o] = a ? a(e[o], t[o]) : t[o];
    }
  return e;
}
const Xd = {
  data: ja,
  props: mn,
  emits: mn,
  methods: mn,
  computed: mn,
  beforeCreate: Vt,
  created: Vt,
  beforeMount: Vt,
  mounted: Vt,
  beforeUpdate: Vt,
  updated: Vt,
  beforeDestroy: Vt,
  beforeUnmount: Vt,
  destroyed: Vt,
  unmounted: Vt,
  activated: Vt,
  deactivated: Vt,
  errorCaptured: Vt,
  serverPrefetch: Vt,
  components: mn,
  directives: mn,
  watch: Gd,
  provide: ja,
  inject: Qd,
};
function ja(e, t) {
  return t
    ? e
      ? function () {
          return Nt(
            et(e) ? e.call(this, this) : e,
            et(t) ? t.call(this, this) : t
          );
        }
      : t
    : e;
}
function Qd(e, t) {
  return mn(qr(e), qr(t));
}
function qr(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Vt(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function mn(e, t) {
  return e ? Nt(Nt(Object.create(null), e), t) : t;
}
function Gd(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Nt(Object.create(null), e);
  for (const s in t) n[s] = Vt(e[s], t[s]);
  return n;
}
function Zd(e, t, n, s = !1) {
  const i = {},
    r = {};
  yi(r, Gi, 1), (e.propsDefaults = Object.create(null)), Su(e, t, i, r);
  for (const o in e.propsOptions[0]) o in i || (i[o] = void 0);
  n ? (e.props = s ? i : fd(i)) : e.type.props ? (e.props = i) : (e.props = r),
    (e.attrs = r);
}
function Jd(e, t, n, s) {
  const {
      props: i,
      attrs: r,
      vnode: { patchFlag: o },
    } = e,
    a = rt(i),
    [l] = e.propsOptions;
  let c = !1;
  if ((s || o > 0) && !(o & 16)) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let f = 0; f < u.length; f++) {
        let h = u[f];
        if ($i(e.emitsOptions, h)) continue;
        const d = t[h];
        if (l)
          if (ct(r, h)) d !== r[h] && ((r[h] = d), (c = !0));
          else {
            const p = Oe(h);
            i[p] = Xr(l, a, p, d, e, !1);
          }
        else d !== r[h] && ((r[h] = d), (c = !0));
      }
    }
  } else {
    Su(e, t, i, r) && (c = !0);
    let u;
    for (const f in a)
      (!t || (!ct(t, f) && ((u = Jn(f)) === f || !ct(t, u)))) &&
        (l
          ? n &&
            (n[f] !== void 0 || n[u] !== void 0) &&
            (i[f] = Xr(l, a, f, void 0, e, !0))
          : delete i[f]);
    if (r !== a)
      for (const f in r) (!t || !ct(t, f)) && (delete r[f], (c = !0));
  }
  c && Be(e, "set", "$attrs");
}
function Su(e, t, n, s) {
  const [i, r] = e.propsOptions;
  let o = !1,
    a;
  if (t)
    for (let l in t) {
      if (pi(l)) continue;
      const c = t[l];
      let u;
      i && ct(i, (u = Oe(l)))
        ? !r || !r.includes(u)
          ? (n[u] = c)
          : ((a || (a = {}))[u] = c)
        : $i(e.emitsOptions, l) ||
          ((!(l in s) || c !== s[l]) && ((s[l] = c), (o = !0)));
    }
  if (r) {
    const l = rt(n),
      c = a || _t;
    for (let u = 0; u < r.length; u++) {
      const f = r[u];
      n[f] = Xr(i, l, f, c[f], e, !ct(c, f));
    }
  }
  return o;
}
function Xr(e, t, n, s, i, r) {
  const o = e[n];
  if (o != null) {
    const a = ct(o, "default");
    if (a && s === void 0) {
      const l = o.default;
      if (o.type !== Function && et(l)) {
        const { propsDefaults: c } = i;
        n in c ? (s = c[n]) : (Yn(i), (s = c[n] = l.call(null, t)), Sn());
      } else s = l;
    }
    o[0] &&
      (r && !a ? (s = !1) : o[1] && (s === "" || s === Jn(n)) && (s = !0));
  }
  return s;
}
function ku(e, t, n = !1) {
  const s = t.propsCache,
    i = s.get(e);
  if (i) return i;
  const r = e.props,
    o = {},
    a = [];
  let l = !1;
  if (!et(e)) {
    const u = (f) => {
      l = !0;
      const [h, d] = ku(f, t, !0);
      Nt(o, h), d && a.push(...d);
    };
    !n && t.mixins.length && t.mixins.forEach(u),
      e.extends && u(e.extends),
      e.mixins && e.mixins.forEach(u);
  }
  if (!r && !l) return yt(e) && s.set(e, Nn), Nn;
  if (Q(r))
    for (let u = 0; u < r.length; u++) {
      const f = Oe(r[u]);
      Va(f) && (o[f] = _t);
    }
  else if (r)
    for (const u in r) {
      const f = Oe(u);
      if (Va(f)) {
        const h = r[u],
          d = (o[f] = Q(h) || et(h) ? { type: h } : Object.assign({}, h));
        if (d) {
          const p = Ua(Boolean, d.type),
            g = Ua(String, d.type);
          (d[0] = p > -1),
            (d[1] = g < 0 || p < g),
            (p > -1 || ct(d, "default")) && a.push(f);
        }
      }
    }
  const c = [o, a];
  return yt(e) && s.set(e, c), c;
}
function Va(e) {
  return e[0] !== "$";
}
function Wa(e) {
  const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
  return t ? t[2] : e === null ? "null" : "";
}
function $a(e, t) {
  return Wa(e) === Wa(t);
}
function Ua(e, t) {
  return Q(t) ? t.findIndex((n) => $a(n, e)) : et(t) && $a(t, e) ? 0 : -1;
}
const Pu = (e) => e[0] === "_" || e === "$stable",
  Ho = (e) => (Q(e) ? e.map(Ce) : [Ce(e)]),
  tp = (e, t, n) => {
    if (t._n) return t;
    const s = On((...i) => Ho(t(...i)), n);
    return (s._c = !1), s;
  },
  Ou = (e, t, n) => {
    const s = e._ctx;
    for (const i in e) {
      if (Pu(i)) continue;
      const r = e[i];
      if (et(r)) t[i] = tp(i, r, s);
      else if (r != null) {
        const o = Ho(r);
        t[i] = () => o;
      }
    }
  },
  Eu = (e, t) => {
    const n = Ho(t);
    e.slots.default = () => n;
  },
  ep = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const n = t._;
      n ? ((e.slots = rt(t)), yi(t, "_", n)) : Ou(t, (e.slots = {}));
    } else (e.slots = {}), t && Eu(e, t);
    yi(e.slots, Gi, 1);
  },
  np = (e, t, n) => {
    const { vnode: s, slots: i } = e;
    let r = !0,
      o = _t;
    if (s.shapeFlag & 32) {
      const a = t._;
      a
        ? n && a === 1
          ? (r = !1)
          : (Nt(i, t), !n && a === 1 && delete i._)
        : ((r = !t.$stable), Ou(t, i)),
        (o = t);
    } else t && (Eu(e, t), (o = { default: 1 }));
    if (r) for (const a in i) !Pu(a) && !(a in o) && delete i[a];
  };
function Au() {
  return {
    app: null,
    config: {
      isNativeTag: Oh,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  };
}
let sp = 0;
function ip(e, t) {
  return function (s, i = null) {
    et(s) || (s = Object.assign({}, s)), i != null && !yt(i) && (i = null);
    const r = Au(),
      o = new Set();
    let a = !1;
    const l = (r.app = {
      _uid: sp++,
      _component: s,
      _props: i,
      _container: null,
      _context: r,
      _instance: null,
      version: Bu,
      get config() {
        return r.config;
      },
      set config(c) {},
      use(c, ...u) {
        return (
          o.has(c) ||
            (c && et(c.install)
              ? (o.add(c), c.install(l, ...u))
              : et(c) && (o.add(c), c(l, ...u))),
          l
        );
      },
      mixin(c) {
        return r.mixins.includes(c) || r.mixins.push(c), l;
      },
      component(c, u) {
        return u ? ((r.components[c] = u), l) : r.components[c];
      },
      directive(c, u) {
        return u ? ((r.directives[c] = u), l) : r.directives[c];
      },
      mount(c, u, f) {
        if (!a) {
          const h = St(s, i);
          return (
            (h.appContext = r),
            u && t ? t(h, c) : e(h, c, f),
            (a = !0),
            (l._container = c),
            (c.__vue_app__ = l),
            Zi(h.component) || h.component.proxy
          );
        }
      },
      unmount() {
        a && (e(null, l._container), delete l._container.__vue_app__);
      },
      provide(c, u) {
        return (r.provides[c] = u), l;
      },
    });
    return l;
  };
}
function Qr(e, t, n, s, i = !1) {
  if (Q(e)) {
    e.forEach((h, d) => Qr(h, t && (Q(t) ? t[d] : t), n, s, i));
    return;
  }
  if (bi(s) && !i) return;
  const r = s.shapeFlag & 4 ? Zi(s.component) || s.component.proxy : s.el,
    o = i ? null : r,
    { i: a, r: l } = e,
    c = t && t.r,
    u = a.refs === _t ? (a.refs = {}) : a.refs,
    f = a.setupState;
  if (
    (c != null &&
      c !== l &&
      (Tt(c)
        ? ((u[c] = null), ct(f, c) && (f[c] = null))
        : At(c) && (c.value = null)),
    et(l))
  )
    tn(l, a, 12, [o, u]);
  else {
    const h = Tt(l),
      d = At(l);
    if (h || d) {
      const p = () => {
        if (e.f) {
          const g = h ? (ct(f, l) ? f[l] : u[l]) : l.value;
          i
            ? Q(g) && vo(g, r)
            : Q(g)
            ? g.includes(r) || g.push(r)
            : h
            ? ((u[l] = [r]), ct(f, l) && (f[l] = u[l]))
            : ((l.value = [r]), e.k && (u[e.k] = l.value));
        } else
          h
            ? ((u[l] = o), ct(f, l) && (f[l] = o))
            : d && ((l.value = o), e.k && (u[e.k] = o));
      };
      o ? ((p.id = -1), $t(p, n)) : p();
    }
  }
}
const $t = Ad;
function rp(e) {
  return op(e);
}
function op(e, t) {
  const n = Ih();
  n.__VUE__ = !0;
  const {
      insert: s,
      remove: i,
      patchProp: r,
      createElement: o,
      createText: a,
      createComment: l,
      setText: c,
      setElementText: u,
      parentNode: f,
      nextSibling: h,
      setScopeId: d = ge,
      insertStaticContent: p,
    } = e,
    g = (
      m,
      y,
      M,
      P = null,
      T = null,
      F = null,
      H = !1,
      I = null,
      B = !!y.dynamicChildren
    ) => {
      if (m === y) return;
      m && !yn(m, y) && ((P = N(m)), vt(m, T, F, !0), (m = null)),
        y.patchFlag === -2 && ((B = !1), (y.dynamicChildren = null));
      const { type: D, ref: q, shapeFlag: $ } = y;
      switch (D) {
        case Qi:
          x(m, y, M, P);
          break;
        case me:
          b(m, y, M, P);
          break;
        case br:
          m == null && _(y, M, P, H);
          break;
        case Ut:
          A(m, y, M, P, T, F, H, I, B);
          break;
        default:
          $ & 1
            ? w(m, y, M, P, T, F, H, I, B)
            : $ & 6
            ? W(m, y, M, P, T, F, H, I, B)
            : ($ & 64 || $ & 128) && D.process(m, y, M, P, T, F, H, I, B, lt);
      }
      q != null && T && Qr(q, m && m.ref, F, y || m, !y);
    },
    x = (m, y, M, P) => {
      if (m == null) s((y.el = a(y.children)), M, P);
      else {
        const T = (y.el = m.el);
        y.children !== m.children && c(T, y.children);
      }
    },
    b = (m, y, M, P) => {
      m == null ? s((y.el = l(y.children || "")), M, P) : (y.el = m.el);
    },
    _ = (m, y, M, P) => {
      [m.el, m.anchor] = p(m.children, y, M, P, m.el, m.anchor);
    },
    v = ({ el: m, anchor: y }, M, P) => {
      let T;
      for (; m && m !== y; ) (T = h(m)), s(m, M, P), (m = T);
      s(y, M, P);
    },
    C = ({ el: m, anchor: y }) => {
      let M;
      for (; m && m !== y; ) (M = h(m)), i(m), (m = M);
      i(y);
    },
    w = (m, y, M, P, T, F, H, I, B) => {
      (H = H || y.type === "svg"),
        m == null ? O(y, M, P, T, F, H, I, B) : R(m, y, T, F, H, I, B);
    },
    O = (m, y, M, P, T, F, H, I) => {
      let B, D;
      const { type: q, props: $, shapeFlag: X, transition: Z, dirs: ot } = m;
      if (
        ((B = m.el = o(m.type, F, $ && $.is, $)),
        X & 8
          ? u(B, m.children)
          : X & 16 &&
            S(m.children, B, null, P, T, F && q !== "foreignObject", H, I),
        ot && un(m, null, P, "created"),
        k(B, m, m.scopeId, H, P),
        $)
      ) {
        for (const gt in $)
          gt !== "value" &&
            !pi(gt) &&
            r(B, gt, null, $[gt], F, m.children, P, T, z);
        "value" in $ && r(B, "value", null, $.value),
          (D = $.onVnodeBeforeMount) && ye(D, P, m);
      }
      ot && un(m, null, P, "beforeMount");
      const bt = (!T || (T && !T.pendingBranch)) && Z && !Z.persisted;
      bt && Z.beforeEnter(B),
        s(B, y, M),
        ((D = $ && $.onVnodeMounted) || bt || ot) &&
          $t(() => {
            D && ye(D, P, m), bt && Z.enter(B), ot && un(m, null, P, "mounted");
          }, T);
    },
    k = (m, y, M, P, T) => {
      if ((M && d(m, M), P)) for (let F = 0; F < P.length; F++) d(m, P[F]);
      if (T) {
        let F = T.subTree;
        if (y === F) {
          const H = T.vnode;
          k(m, H, H.scopeId, H.slotScopeIds, T.parent);
        }
      }
    },
    S = (m, y, M, P, T, F, H, I, B = 0) => {
      for (let D = B; D < m.length; D++) {
        const q = (m[D] = I ? Ue(m[D]) : Ce(m[D]));
        g(null, q, y, M, P, T, F, H, I);
      }
    },
    R = (m, y, M, P, T, F, H) => {
      const I = (y.el = m.el);
      let { patchFlag: B, dynamicChildren: D, dirs: q } = y;
      B |= m.patchFlag & 16;
      const $ = m.props || _t,
        X = y.props || _t;
      let Z;
      M && fn(M, !1),
        (Z = X.onVnodeBeforeUpdate) && ye(Z, M, y, m),
        q && un(y, m, M, "beforeUpdate"),
        M && fn(M, !0);
      const ot = T && y.type !== "foreignObject";
      if (
        (D
          ? L(m.dynamicChildren, D, I, M, P, ot, F)
          : H || tt(m, y, I, null, M, P, ot, F, !1),
        B > 0)
      ) {
        if (B & 16) V(I, y, $, X, M, P, T);
        else if (
          (B & 2 && $.class !== X.class && r(I, "class", null, X.class, T),
          B & 4 && r(I, "style", $.style, X.style, T),
          B & 8)
        ) {
          const bt = y.dynamicProps;
          for (let gt = 0; gt < bt.length; gt++) {
            const Rt = bt[gt],
              ce = $[Rt],
              Tn = X[Rt];
            (Tn !== ce || Rt === "value") &&
              r(I, Rt, ce, Tn, T, m.children, M, P, z);
          }
        }
        B & 1 && m.children !== y.children && u(I, y.children);
      } else !H && D == null && V(I, y, $, X, M, P, T);
      ((Z = X.onVnodeUpdated) || q) &&
        $t(() => {
          Z && ye(Z, M, y, m), q && un(y, m, M, "updated");
        }, P);
    },
    L = (m, y, M, P, T, F, H) => {
      for (let I = 0; I < y.length; I++) {
        const B = m[I],
          D = y[I],
          q =
            B.el && (B.type === Ut || !yn(B, D) || B.shapeFlag & 70)
              ? f(B.el)
              : M;
        g(B, D, q, null, P, T, F, H, !0);
      }
    },
    V = (m, y, M, P, T, F, H) => {
      if (M !== P) {
        if (M !== _t)
          for (const I in M)
            !pi(I) && !(I in P) && r(m, I, M[I], null, H, y.children, T, F, z);
        for (const I in P) {
          if (pi(I)) continue;
          const B = P[I],
            D = M[I];
          B !== D && I !== "value" && r(m, I, D, B, H, y.children, T, F, z);
        }
        "value" in P && r(m, "value", M.value, P.value);
      }
    },
    A = (m, y, M, P, T, F, H, I, B) => {
      const D = (y.el = m ? m.el : a("")),
        q = (y.anchor = m ? m.anchor : a(""));
      let { patchFlag: $, dynamicChildren: X, slotScopeIds: Z } = y;
      Z && (I = I ? I.concat(Z) : Z),
        m == null
          ? (s(D, M, P), s(q, M, P), S(y.children, M, q, T, F, H, I, B))
          : $ > 0 && $ & 64 && X && m.dynamicChildren
          ? (L(m.dynamicChildren, X, M, T, F, H, I),
            (y.key != null || (T && y === T.subTree)) && Tu(m, y, !0))
          : tt(m, y, M, q, T, F, H, I, B);
    },
    W = (m, y, M, P, T, F, H, I, B) => {
      (y.slotScopeIds = I),
        m == null
          ? y.shapeFlag & 512
            ? T.ctx.activate(y, M, P, H, B)
            : J(y, M, P, T, F, H, B)
          : j(m, y, B);
    },
    J = (m, y, M, P, T, F, H) => {
      const I = (m.component = bp(m, P, T));
      if ((Ki(m) && (I.ctx.renderer = lt), xp(I), I.asyncDep)) {
        if ((T && T.registerDep(I, G), !m.el)) {
          const B = (I.subTree = St(me));
          b(null, B, y, M);
        }
        return;
      }
      G(I, m, y, M, T, F, H);
    },
    j = (m, y, M) => {
      const P = (y.component = m.component);
      if (Pd(m, y, M))
        if (P.asyncDep && !P.asyncResolved) {
          U(P, y, M);
          return;
        } else (P.next = y), vd(P.update), P.update();
      else (y.el = m.el), (P.vnode = y);
    },
    G = (m, y, M, P, T, F, H) => {
      const I = () => {
          if (m.isMounted) {
            let { next: q, bu: $, u: X, parent: Z, vnode: ot } = m,
              bt = q,
              gt;
            fn(m, !1),
              q ? ((q.el = ot.el), U(m, q, H)) : (q = ot),
              $ && gi($),
              (gt = q.props && q.props.onVnodeBeforeUpdate) && ye(gt, Z, q, ot),
              fn(m, !0);
            const Rt = pr(m),
              ce = m.subTree;
            (m.subTree = Rt),
              g(ce, Rt, f(ce.el), N(ce), m, T, F),
              (q.el = Rt.el),
              bt === null && Od(m, Rt.el),
              X && $t(X, T),
              (gt = q.props && q.props.onVnodeUpdated) &&
                $t(() => ye(gt, Z, q, ot), T);
          } else {
            let q;
            const { el: $, props: X } = y,
              { bm: Z, m: ot, parent: bt } = m,
              gt = bi(y);
            if (
              (fn(m, !1),
              Z && gi(Z),
              !gt && (q = X && X.onVnodeBeforeMount) && ye(q, bt, y),
              fn(m, !0),
              $ && st)
            ) {
              const Rt = () => {
                (m.subTree = pr(m)), st($, m.subTree, m, T, null);
              };
              gt
                ? y.type.__asyncLoader().then(() => !m.isUnmounted && Rt())
                : Rt();
            } else {
              const Rt = (m.subTree = pr(m));
              g(null, Rt, M, P, m, T, F), (y.el = Rt.el);
            }
            if ((ot && $t(ot, T), !gt && (q = X && X.onVnodeMounted))) {
              const Rt = y;
              $t(() => ye(q, bt, Rt), T);
            }
            (y.shapeFlag & 256 ||
              (bt && bi(bt.vnode) && bt.vnode.shapeFlag & 256)) &&
              m.a &&
              $t(m.a, T),
              (m.isMounted = !0),
              (y = M = P = null);
          }
        },
        B = (m.effect = new So(I, () => Lo(D), m.scope)),
        D = (m.update = () => B.run());
      (D.id = m.uid), fn(m, !0), D();
    },
    U = (m, y, M) => {
      y.component = m;
      const P = m.vnode.props;
      (m.vnode = y),
        (m.next = null),
        Jd(m, y.props, P, M),
        np(m, y.children, M),
        ts(),
        Fa(),
        es();
    },
    tt = (m, y, M, P, T, F, H, I, B = !1) => {
      const D = m && m.children,
        q = m ? m.shapeFlag : 0,
        $ = y.children,
        { patchFlag: X, shapeFlag: Z } = y;
      if (X > 0) {
        if (X & 128) {
          Ft(D, $, M, P, T, F, H, I, B);
          return;
        } else if (X & 256) {
          Ot(D, $, M, P, T, F, H, I, B);
          return;
        }
      }
      Z & 8
        ? (q & 16 && z(D, T, F), $ !== D && u(M, $))
        : q & 16
        ? Z & 16
          ? Ft(D, $, M, P, T, F, H, I, B)
          : z(D, T, F, !0)
        : (q & 8 && u(M, ""), Z & 16 && S($, M, P, T, F, H, I, B));
    },
    Ot = (m, y, M, P, T, F, H, I, B) => {
      (m = m || Nn), (y = y || Nn);
      const D = m.length,
        q = y.length,
        $ = Math.min(D, q);
      let X;
      for (X = 0; X < $; X++) {
        const Z = (y[X] = B ? Ue(y[X]) : Ce(y[X]));
        g(m[X], Z, M, null, T, F, H, I, B);
      }
      D > q ? z(m, T, F, !0, !1, $) : S(y, M, P, T, F, H, I, B, $);
    },
    Ft = (m, y, M, P, T, F, H, I, B) => {
      let D = 0;
      const q = y.length;
      let $ = m.length - 1,
        X = q - 1;
      for (; D <= $ && D <= X; ) {
        const Z = m[D],
          ot = (y[D] = B ? Ue(y[D]) : Ce(y[D]));
        if (yn(Z, ot)) g(Z, ot, M, null, T, F, H, I, B);
        else break;
        D++;
      }
      for (; D <= $ && D <= X; ) {
        const Z = m[$],
          ot = (y[X] = B ? Ue(y[X]) : Ce(y[X]));
        if (yn(Z, ot)) g(Z, ot, M, null, T, F, H, I, B);
        else break;
        $--, X--;
      }
      if (D > $) {
        if (D <= X) {
          const Z = X + 1,
            ot = Z < q ? y[Z].el : P;
          for (; D <= X; )
            g(null, (y[D] = B ? Ue(y[D]) : Ce(y[D])), M, ot, T, F, H, I, B),
              D++;
        }
      } else if (D > X) for (; D <= $; ) vt(m[D], T, F, !0), D++;
      else {
        const Z = D,
          ot = D,
          bt = new Map();
        for (D = ot; D <= X; D++) {
          const Xt = (y[D] = B ? Ue(y[D]) : Ce(y[D]));
          Xt.key != null && bt.set(Xt.key, D);
        }
        let gt,
          Rt = 0;
        const ce = X - ot + 1;
        let Tn = !1,
          Sa = 0;
        const is = new Array(ce);
        for (D = 0; D < ce; D++) is[D] = 0;
        for (D = Z; D <= $; D++) {
          const Xt = m[D];
          if (Rt >= ce) {
            vt(Xt, T, F, !0);
            continue;
          }
          let _e;
          if (Xt.key != null) _e = bt.get(Xt.key);
          else
            for (gt = ot; gt <= X; gt++)
              if (is[gt - ot] === 0 && yn(Xt, y[gt])) {
                _e = gt;
                break;
              }
          _e === void 0
            ? vt(Xt, T, F, !0)
            : ((is[_e - ot] = D + 1),
              _e >= Sa ? (Sa = _e) : (Tn = !0),
              g(Xt, y[_e], M, null, T, F, H, I, B),
              Rt++);
        }
        const ka = Tn ? ap(is) : Nn;
        for (gt = ka.length - 1, D = ce - 1; D >= 0; D--) {
          const Xt = ot + D,
            _e = y[Xt],
            Pa = Xt + 1 < q ? y[Xt + 1].el : P;
          is[D] === 0
            ? g(null, _e, M, Pa, T, F, H, I, B)
            : Tn && (gt < 0 || D !== ka[gt] ? Lt(_e, M, Pa, 2) : gt--);
        }
      }
    },
    Lt = (m, y, M, P, T = null) => {
      const { el: F, type: H, transition: I, children: B, shapeFlag: D } = m;
      if (D & 6) {
        Lt(m.component.subTree, y, M, P);
        return;
      }
      if (D & 128) {
        m.suspense.move(y, M, P);
        return;
      }
      if (D & 64) {
        H.move(m, y, M, lt);
        return;
      }
      if (H === Ut) {
        s(F, y, M);
        for (let $ = 0; $ < B.length; $++) Lt(B[$], y, M, P);
        s(m.anchor, y, M);
        return;
      }
      if (H === br) {
        v(m, y, M);
        return;
      }
      if (P !== 2 && D & 1 && I)
        if (P === 0) I.beforeEnter(F), s(F, y, M), $t(() => I.enter(F), T);
        else {
          const { leave: $, delayLeave: X, afterLeave: Z } = I,
            ot = () => s(F, y, M),
            bt = () => {
              $(F, () => {
                ot(), Z && Z();
              });
            };
          X ? X(F, ot, bt) : bt();
        }
      else s(F, y, M);
    },
    vt = (m, y, M, P = !1, T = !1) => {
      const {
        type: F,
        props: H,
        ref: I,
        children: B,
        dynamicChildren: D,
        shapeFlag: q,
        patchFlag: $,
        dirs: X,
      } = m;
      if ((I != null && Qr(I, null, M, m, !0), q & 256)) {
        y.ctx.deactivate(m);
        return;
      }
      const Z = q & 1 && X,
        ot = !bi(m);
      let bt;
      if ((ot && (bt = H && H.onVnodeBeforeUnmount) && ye(bt, y, m), q & 6))
        E(m.component, M, P);
      else {
        if (q & 128) {
          m.suspense.unmount(M, P);
          return;
        }
        Z && un(m, null, y, "beforeUnmount"),
          q & 64
            ? m.type.remove(m, y, M, T, lt, P)
            : D && (F !== Ut || ($ > 0 && $ & 64))
            ? z(D, y, M, !1, !0)
            : ((F === Ut && $ & 384) || (!T && q & 16)) && z(B, y, M),
          P && It(m);
      }
      ((ot && (bt = H && H.onVnodeUnmounted)) || Z) &&
        $t(() => {
          bt && ye(bt, y, m), Z && un(m, null, y, "unmounted");
        }, M);
    },
    It = (m) => {
      const { type: y, el: M, anchor: P, transition: T } = m;
      if (y === Ut) {
        le(M, P);
        return;
      }
      if (y === br) {
        C(m);
        return;
      }
      const F = () => {
        i(M), T && !T.persisted && T.afterLeave && T.afterLeave();
      };
      if (m.shapeFlag & 1 && T && !T.persisted) {
        const { leave: H, delayLeave: I } = T,
          B = () => H(M, F);
        I ? I(m.el, F, B) : B();
      } else F();
    },
    le = (m, y) => {
      let M;
      for (; m !== y; ) (M = h(m)), i(m), (m = M);
      i(y);
    },
    E = (m, y, M) => {
      const { bum: P, scope: T, update: F, subTree: H, um: I } = m;
      P && gi(P),
        T.stop(),
        F && ((F.active = !1), vt(H, m, y, M)),
        I && $t(I, y),
        $t(() => {
          m.isUnmounted = !0;
        }, y),
        y &&
          y.pendingBranch &&
          !y.isUnmounted &&
          m.asyncDep &&
          !m.asyncResolved &&
          m.suspenseId === y.pendingId &&
          (y.deps--, y.deps === 0 && y.resolve());
    },
    z = (m, y, M, P = !1, T = !1, F = 0) => {
      for (let H = F; H < m.length; H++) vt(m[H], y, M, P, T);
    },
    N = (m) =>
      m.shapeFlag & 6
        ? N(m.component.subTree)
        : m.shapeFlag & 128
        ? m.suspense.next()
        : h(m.anchor || m.el),
    K = (m, y, M) => {
      m == null
        ? y._vnode && vt(y._vnode, null, null, !0)
        : g(y._vnode || null, m, y, null, null, null, M),
        Fa(),
        hu(),
        (y._vnode = m);
    },
    lt = {
      p: g,
      um: vt,
      m: Lt,
      r: It,
      mt: J,
      mc: S,
      pc: tt,
      pbc: L,
      n: N,
      o: e,
    };
  let wt, st;
  return (
    t && ([wt, st] = t(lt)), { render: K, hydrate: wt, createApp: ip(K, wt) }
  );
}
function fn({ effect: e, update: t }, n) {
  e.allowRecurse = t.allowRecurse = n;
}
function Tu(e, t, n = !1) {
  const s = e.children,
    i = t.children;
  if (Q(s) && Q(i))
    for (let r = 0; r < s.length; r++) {
      const o = s[r];
      let a = i[r];
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = i[r] = Ue(i[r])), (a.el = o.el)),
        n || Tu(o, a)),
        a.type === Qi && (a.el = o.el);
    }
}
function ap(e) {
  const t = e.slice(),
    n = [0];
  let s, i, r, o, a;
  const l = e.length;
  for (s = 0; s < l; s++) {
    const c = e[s];
    if (c !== 0) {
      if (((i = n[n.length - 1]), e[i] < c)) {
        (t[s] = i), n.push(s);
        continue;
      }
      for (r = 0, o = n.length - 1; r < o; )
        (a = (r + o) >> 1), e[n[a]] < c ? (r = a + 1) : (o = a);
      c < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), (n[r] = s));
    }
  }
  for (r = n.length, o = n[r - 1]; r-- > 0; ) (n[r] = o), (o = t[o]);
  return n;
}
const lp = (e) => e.__isTeleport,
  Ut = Symbol(void 0),
  Qi = Symbol(void 0),
  me = Symbol(void 0),
  br = Symbol(void 0),
  xs = [];
let de = null;
function Dt(e = !1) {
  xs.push((de = e ? null : []));
}
function cp() {
  xs.pop(), (de = xs[xs.length - 1] || null);
}
let Ds = 1;
function Ya(e) {
  Ds += e;
}
function Ru(e) {
  return (
    (e.dynamicChildren = Ds > 0 ? de || Nn : null),
    cp(),
    Ds > 0 && de && de.push(e),
    e
  );
}
function Yt(e, t, n, s, i, r) {
  return Ru(it(e, t, n, s, i, r, !0));
}
function Un(e, t, n, s, i) {
  return Ru(St(e, t, n, s, i, !0));
}
function Gr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function yn(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Gi = "__vInternal",
  Du = ({ key: e }) => e ?? null,
  xi = ({ ref: e, ref_key: t, ref_for: n }) =>
    e != null
      ? Tt(e) || At(e) || et(e)
        ? { i: Jt, r: e, k: t, f: !!n }
        : e
      : null;
function it(
  e,
  t = null,
  n = null,
  s = 0,
  i = null,
  r = e === Ut ? 0 : 1,
  o = !1,
  a = !1
) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Du(t),
    ref: t && xi(t),
    scopeId: Ui,
    slotScopeIds: null,
    children: n,
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
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Jt,
  };
  return (
    a
      ? (jo(l, n), r & 128 && e.normalize(l))
      : n && (l.shapeFlag |= Tt(n) ? 8 : 16),
    Ds > 0 &&
      !o &&
      de &&
      (l.patchFlag > 0 || r & 6) &&
      l.patchFlag !== 32 &&
      de.push(l),
    l
  );
}
const St = up;
function up(e, t = null, n = null, s = 0, i = null, r = !1) {
  if (((!e || e === Cu) && (e = me), Gr(e))) {
    const a = rn(e, t, !0);
    return (
      n && jo(a, n),
      Ds > 0 &&
        !r &&
        de &&
        (a.shapeFlag & 6 ? (de[de.indexOf(e)] = a) : de.push(a)),
      (a.patchFlag |= -2),
      a
    );
  }
  if ((wp(e) && (e = e.__vccOpts), t)) {
    t = fp(t);
    let { class: a, style: l } = t;
    a && !Tt(a) && (t.class = Fi(a)),
      yt(l) && (Vi(l) && !Q(l) && (l = Nt({}, l)), (t.style = Os(l)));
  }
  const o = Tt(e) ? 1 : Ed(e) ? 128 : lp(e) ? 64 : yt(e) ? 4 : et(e) ? 2 : 0;
  return it(e, t, n, s, i, o, r, !0);
}
function fp(e) {
  return e ? (Vi(e) || Gi in e ? Nt({}, e) : e) : null;
}
function rn(e, t, n = !1) {
  const { props: s, ref: i, patchFlag: r, children: o } = e,
    a = t ? pp(s || {}, t) : s;
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Du(a),
    ref:
      t && t.ref ? (n && i ? (Q(i) ? i.concat(xi(t)) : [i, xi(t)]) : xi(t)) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: o,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Ut ? (r === -1 ? 16 : r | 16) : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && rn(e.ssContent),
    ssFallback: e.ssFallback && rn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
  };
}
function hp(e = " ", t = 0) {
  return St(Qi, null, e, t);
}
function dp(e = "", t = !1) {
  return t ? (Dt(), Un(me, null, e)) : St(me, null, e);
}
function Ce(e) {
  return e == null || typeof e == "boolean"
    ? St(me)
    : Q(e)
    ? St(Ut, null, e.slice())
    : typeof e == "object"
    ? Ue(e)
    : St(Qi, null, String(e));
}
function Ue(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : rn(e);
}
function jo(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null) t = null;
  else if (Q(t)) n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), jo(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !(Gi in t)
        ? (t._ctx = Jt)
        : i === 3 &&
          Jt &&
          (Jt.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)));
    }
  else
    et(t)
      ? ((t = { default: t, _ctx: Jt }), (n = 32))
      : ((t = String(t)), s & 64 ? ((n = 16), (t = [hp(t)])) : (n = 8));
  (e.children = t), (e.shapeFlag |= n);
}
function pp(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = Fi([t.class, s.class]));
      else if (i === "style") t.style = Os([t.style, s.style]);
      else if (Bi(i)) {
        const r = t[i],
          o = s[i];
        o &&
          r !== o &&
          !(Q(r) && r.includes(o)) &&
          (t[i] = r ? [].concat(r, o) : o);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function ye(e, t, n, s = null) {
  ie(e, t, 7, [n, s]);
}
const gp = Au();
let mp = 0;
function bp(e, t, n) {
  const s = e.type,
    i = (t ? t.appContext : e.appContext) || gp,
    r = {
      uid: mp++,
      vnode: e,
      type: s,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Uc(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: ku(s, i),
      emitsOptions: pu(s, i),
      emit: null,
      emitted: null,
      propsDefaults: _t,
      inheritAttrs: s.inheritAttrs,
      ctx: _t,
      data: _t,
      props: _t,
      attrs: _t,
      slots: _t,
      refs: _t,
      setupState: _t,
      setupContext: null,
      suspense: n,
      suspenseId: n ? n.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
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
      sp: null,
    };
  return (
    (r.ctx = { _: r }),
    (r.root = t ? t.root : r),
    (r.emit = Md.bind(null, r)),
    e.ce && e.ce(r),
    r
  );
}
let Et = null;
const Lu = () => Et || Jt,
  Yn = (e) => {
    (Et = e), e.scope.on();
  },
  Sn = () => {
    Et && Et.scope.off(), (Et = null);
  };
function Iu(e) {
  return e.vnode.shapeFlag & 4;
}
let Ls = !1;
function xp(e, t = !1) {
  Ls = t;
  const { props: n, children: s } = e.vnode,
    i = Iu(e);
  Zd(e, n, i, t), ep(e, s);
  const r = i ? _p(e, t) : void 0;
  return (Ls = !1), r;
}
function _p(e, t) {
  const n = e.type;
  (e.accessCache = Object.create(null)), (e.proxy = $n(new Proxy(e.ctx, Yd)));
  const { setup: s } = n;
  if (s) {
    const i = (e.setupContext = s.length > 1 ? vp(e) : null);
    Yn(e), ts();
    const r = tn(s, e, 0, [e.props, i]);
    if ((es(), Sn(), Vc(r))) {
      if ((r.then(Sn, Sn), t))
        return r
          .then((o) => {
            Ka(e, o, t);
          })
          .catch((o) => {
            Wi(o, e, 0);
          });
      e.asyncDep = r;
    } else Ka(e, r, t);
  } else Fu(e, t);
}
function Ka(e, t, n) {
  et(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : yt(t) && (e.setupState = lu(t)),
    Fu(e, n);
}
let qa;
function Fu(e, t, n) {
  const s = e.type;
  if (!e.render) {
    if (!t && qa && !s.render) {
      const i = s.template || No(e).template;
      if (i) {
        const { isCustomElement: r, compilerOptions: o } = e.appContext.config,
          { delimiters: a, compilerOptions: l } = s,
          c = Nt(Nt({ isCustomElement: r, delimiters: a }, o), l);
        s.render = qa(i, c);
      }
    }
    e.render = s.render || ge;
  }
  Yn(e), ts(), Kd(e), es(), Sn();
}
function yp(e) {
  return new Proxy(e.attrs, {
    get(t, n) {
      return qt(e, "get", "$attrs"), t[n];
    },
  });
}
function vp(e) {
  const t = (s) => {
    e.exposed = s || {};
  };
  let n;
  return {
    get attrs() {
      return n || (n = yp(e));
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  };
}
function Zi(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(lu($n(e.exposed)), {
        get(t, n) {
          if (n in t) return t[n];
          if (n in bs) return bs[n](e);
        },
        has(t, n) {
          return n in t || n in bs;
        },
      }))
    );
}
function Cp(e, t = !0) {
  return et(e) ? e.displayName || e.name : e.name || (t && e.__name);
}
function wp(e) {
  return et(e) && "__vccOpts" in e;
}
const Zt = (e, t) => xd(e, t, Ls);
function Vs(e, t, n) {
  const s = arguments.length;
  return s === 2
    ? yt(t) && !Q(t)
      ? Gr(t)
        ? St(e, null, [t])
        : St(e, t)
      : St(e, null, t)
    : (s > 3
        ? (n = Array.prototype.slice.call(arguments, 2))
        : s === 3 && Gr(n) && (n = [n]),
      St(e, t, n));
}
const Mp = Symbol(""),
  Sp = () => re(Mp),
  Bu = "3.2.47",
  kp = "http://www.w3.org/2000/svg",
  vn = typeof document < "u" ? document : null,
  Xa = vn && vn.createElement("template"),
  Pp = {
    insert: (e, t, n) => {
      t.insertBefore(e, n || null);
    },
    remove: (e) => {
      const t = e.parentNode;
      t && t.removeChild(e);
    },
    createElement: (e, t, n, s) => {
      const i = t
        ? vn.createElementNS(kp, e)
        : vn.createElement(e, n ? { is: n } : void 0);
      return (
        e === "select" &&
          s &&
          s.multiple != null &&
          i.setAttribute("multiple", s.multiple),
        i
      );
    },
    createText: (e) => vn.createTextNode(e),
    createComment: (e) => vn.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t;
    },
    setElementText: (e, t) => {
      e.textContent = t;
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => vn.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, "");
    },
    insertStaticContent(e, t, n, s, i, r) {
      const o = n ? n.previousSibling : t.lastChild;
      if (i && (i === r || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), n),
            !(i === r || !(i = i.nextSibling));

        );
      else {
        Xa.innerHTML = s ? `<svg>${e}</svg>` : e;
        const a = Xa.content;
        if (s) {
          const l = a.firstChild;
          for (; l.firstChild; ) a.appendChild(l.firstChild);
          a.removeChild(l);
        }
        t.insertBefore(a, n);
      }
      return [
        o ? o.nextSibling : t.firstChild,
        n ? n.previousSibling : t.lastChild,
      ];
    },
  };
function Op(e, t, n) {
  const s = e._vtc;
  s && (t = (t ? [t, ...s] : [...s]).join(" ")),
    t == null
      ? e.removeAttribute("class")
      : n
      ? e.setAttribute("class", t)
      : (e.className = t);
}
function Ep(e, t, n) {
  const s = e.style,
    i = Tt(n);
  if (n && !i) {
    if (t && !Tt(t)) for (const r in t) n[r] == null && Zr(s, r, "");
    for (const r in n) Zr(s, r, n[r]);
  } else {
    const r = s.display;
    i ? t !== n && (s.cssText = n) : t && e.removeAttribute("style"),
      "_vod" in e && (s.display = r);
  }
}
const Qa = /\s*!important$/;
function Zr(e, t, n) {
  if (Q(n)) n.forEach((s) => Zr(e, t, s));
  else if ((n == null && (n = ""), t.startsWith("--"))) e.setProperty(t, n);
  else {
    const s = Ap(e, t);
    Qa.test(n)
      ? e.setProperty(Jn(s), n.replace(Qa, ""), "important")
      : (e[s] = n);
  }
}
const Ga = ["Webkit", "Moz", "ms"],
  xr = {};
function Ap(e, t) {
  const n = xr[t];
  if (n) return n;
  let s = Oe(t);
  if (s !== "filter" && s in e) return (xr[t] = s);
  s = Hi(s);
  for (let i = 0; i < Ga.length; i++) {
    const r = Ga[i] + s;
    if (r in e) return (xr[t] = r);
  }
  return t;
}
const Za = "http://www.w3.org/1999/xlink";
function Tp(e, t, n, s, i) {
  if (s && t.startsWith("xlink:"))
    n == null
      ? e.removeAttributeNS(Za, t.slice(6, t.length))
      : e.setAttributeNS(Za, t, n);
  else {
    const r = Ph(t);
    n == null || (r && !Nc(n))
      ? e.removeAttribute(t)
      : e.setAttribute(t, r ? "" : n);
  }
}
function Rp(e, t, n, s, i, r, o) {
  if (t === "innerHTML" || t === "textContent") {
    s && o(s, i, r), (e[t] = n ?? "");
    return;
  }
  if (t === "value" && e.tagName !== "PROGRESS" && !e.tagName.includes("-")) {
    e._value = n;
    const l = n ?? "";
    (e.value !== l || e.tagName === "OPTION") && (e.value = l),
      n == null && e.removeAttribute(t);
    return;
  }
  let a = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean"
      ? (n = Nc(n))
      : n == null && l === "string"
      ? ((n = ""), (a = !0))
      : l === "number" && ((n = 0), (a = !0));
  }
  try {
    e[t] = n;
  } catch {}
  a && e.removeAttribute(t);
}
function Bn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Dp(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
function Lp(e, t, n, s, i = null) {
  const r = e._vei || (e._vei = {}),
    o = r[t];
  if (s && o) o.value = s;
  else {
    const [a, l] = Ip(t);
    if (s) {
      const c = (r[t] = zp(s, i));
      Bn(e, a, c, l);
    } else o && (Dp(e, a, o, l), (r[t] = void 0));
  }
}
const Ja = /(?:Once|Passive|Capture)$/;
function Ip(e) {
  let t;
  if (Ja.test(e)) {
    t = {};
    let s;
    for (; (s = e.match(Ja)); )
      (e = e.slice(0, e.length - s[0].length)), (t[s[0].toLowerCase()] = !0);
  }
  return [e[2] === ":" ? e.slice(3) : Jn(e.slice(2)), t];
}
let _r = 0;
const Fp = Promise.resolve(),
  Bp = () => _r || (Fp.then(() => (_r = 0)), (_r = Date.now()));
function zp(e, t) {
  const n = (s) => {
    if (!s._vts) s._vts = Date.now();
    else if (s._vts <= n.attached) return;
    ie(Np(s, n.value), t, 5, [s]);
  };
  return (n.value = e), (n.attached = Bp()), n;
}
function Np(e, t) {
  if (Q(t)) {
    const n = e.stopImmediatePropagation;
    return (
      (e.stopImmediatePropagation = () => {
        n.call(e), (e._stopped = !0);
      }),
      t.map((s) => (i) => !i._stopped && s && s(i))
    );
  } else return t;
}
const tl = /^on[a-z]/,
  Hp = (e, t, n, s, i = !1, r, o, a, l) => {
    t === "class"
      ? Op(e, s, i)
      : t === "style"
      ? Ep(e, n, s)
      : Bi(t)
      ? yo(t) || Lp(e, t, n, s, o)
      : (
          t[0] === "."
            ? ((t = t.slice(1)), !0)
            : t[0] === "^"
            ? ((t = t.slice(1)), !1)
            : jp(e, t, s, i)
        )
      ? Rp(e, t, s, r, o, a, l)
      : (t === "true-value"
          ? (e._trueValue = s)
          : t === "false-value" && (e._falseValue = s),
        Tp(e, t, s, i));
  };
function jp(e, t, n, s) {
  return s
    ? !!(
        t === "innerHTML" ||
        t === "textContent" ||
        (t in e && tl.test(t) && et(n))
      )
    : t === "spellcheck" ||
      t === "draggable" ||
      t === "translate" ||
      t === "form" ||
      (t === "list" && e.tagName === "INPUT") ||
      (t === "type" && e.tagName === "TEXTAREA") ||
      (tl.test(t) && Tt(n))
    ? !1
    : t in e;
}
const He = "transition",
  rs = "animation",
  Ws = (e, { slots: t }) => Vs(bu, Vp(e), t);
Ws.displayName = "Transition";
const zu = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
};
Ws.props = Nt({}, bu.props, zu);
const hn = (e, t = []) => {
    Q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
  },
  el = (e) => (e ? (Q(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1);
function Vp(e) {
  const t = {};
  for (const A in e) A in zu || (t[A] = e[A]);
  if (e.css === !1) return t;
  const {
      name: n = "v",
      type: s,
      duration: i,
      enterFromClass: r = `${n}-enter-from`,
      enterActiveClass: o = `${n}-enter-active`,
      enterToClass: a = `${n}-enter-to`,
      appearFromClass: l = r,
      appearActiveClass: c = o,
      appearToClass: u = a,
      leaveFromClass: f = `${n}-leave-from`,
      leaveActiveClass: h = `${n}-leave-active`,
      leaveToClass: d = `${n}-leave-to`,
    } = e,
    p = Wp(i),
    g = p && p[0],
    x = p && p[1],
    {
      onBeforeEnter: b,
      onEnter: _,
      onEnterCancelled: v,
      onLeave: C,
      onLeaveCancelled: w,
      onBeforeAppear: O = b,
      onAppear: k = _,
      onAppearCancelled: S = v,
    } = t,
    R = (A, W, J) => {
      dn(A, W ? u : a), dn(A, W ? c : o), J && J();
    },
    L = (A, W) => {
      (A._isLeaving = !1), dn(A, f), dn(A, d), dn(A, h), W && W();
    },
    V = (A) => (W, J) => {
      const j = A ? k : _,
        G = () => R(W, A, J);
      hn(j, [W, G]),
        nl(() => {
          dn(W, A ? l : r), je(W, A ? u : a), el(j) || sl(W, s, g, G);
        });
    };
  return Nt(t, {
    onBeforeEnter(A) {
      hn(b, [A]), je(A, r), je(A, o);
    },
    onBeforeAppear(A) {
      hn(O, [A]), je(A, l), je(A, c);
    },
    onEnter: V(!1),
    onAppear: V(!0),
    onLeave(A, W) {
      A._isLeaving = !0;
      const J = () => L(A, W);
      je(A, f),
        Yp(),
        je(A, h),
        nl(() => {
          A._isLeaving && (dn(A, f), je(A, d), el(C) || sl(A, s, x, J));
        }),
        hn(C, [A, J]);
    },
    onEnterCancelled(A) {
      R(A, !1), hn(v, [A]);
    },
    onAppearCancelled(A) {
      R(A, !0), hn(S, [A]);
    },
    onLeaveCancelled(A) {
      L(A), hn(w, [A]);
    },
  });
}
function Wp(e) {
  if (e == null) return null;
  if (yt(e)) return [yr(e.enter), yr(e.leave)];
  {
    const t = yr(e);
    return [t, t];
  }
}
function yr(e) {
  return Lh(e);
}
function je(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)),
    (e._vtc || (e._vtc = new Set())).add(t);
}
function dn(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const { _vtc: n } = e;
  n && (n.delete(t), n.size || (e._vtc = void 0));
}
function nl(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let $p = 0;
function sl(e, t, n, s) {
  const i = (e._endId = ++$p),
    r = () => {
      i === e._endId && s();
    };
  if (n) return setTimeout(r, n);
  const { type: o, timeout: a, propCount: l } = Up(e, t);
  if (!o) return s();
  const c = o + "end";
  let u = 0;
  const f = () => {
      e.removeEventListener(c, h), r();
    },
    h = (d) => {
      d.target === e && ++u >= l && f();
    };
  setTimeout(() => {
    u < l && f();
  }, a + 1),
    e.addEventListener(c, h);
}
function Up(e, t) {
  const n = window.getComputedStyle(e),
    s = (p) => (n[p] || "").split(", "),
    i = s(`${He}Delay`),
    r = s(`${He}Duration`),
    o = il(i, r),
    a = s(`${rs}Delay`),
    l = s(`${rs}Duration`),
    c = il(a, l);
  let u = null,
    f = 0,
    h = 0;
  t === He
    ? o > 0 && ((u = He), (f = o), (h = r.length))
    : t === rs
    ? c > 0 && ((u = rs), (f = c), (h = l.length))
    : ((f = Math.max(o, c)),
      (u = f > 0 ? (o > c ? He : rs) : null),
      (h = u ? (u === He ? r.length : l.length) : 0));
  const d =
    u === He && /\b(transform|all)(,|$)/.test(s(`${He}Property`).toString());
  return { type: u, timeout: f, propCount: h, hasTransform: d };
}
function il(e, t) {
  for (; e.length < t.length; ) e = e.concat(e);
  return Math.max(...t.map((n, s) => rl(n) + rl(e[s])));
}
function rl(e) {
  return Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Yp() {
  return document.body.offsetHeight;
}
const ol = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Q(t) ? (n) => gi(t, n) : t;
};
function Kp(e) {
  e.target.composing = !0;
}
function al(e) {
  const t = e.target;
  t.composing && ((t.composing = !1), t.dispatchEvent(new Event("input")));
}
const Nu = {
    created(e, { modifiers: { lazy: t, trim: n, number: s } }, i) {
      e._assign = ol(i);
      const r = s || (i.props && i.props.type === "number");
      Bn(e, t ? "change" : "input", (o) => {
        if (o.target.composing) return;
        let a = e.value;
        n && (a = a.trim()), r && (a = Br(a)), e._assign(a);
      }),
        n &&
          Bn(e, "change", () => {
            e.value = e.value.trim();
          }),
        t ||
          (Bn(e, "compositionstart", Kp),
          Bn(e, "compositionend", al),
          Bn(e, "change", al));
    },
    mounted(e, { value: t }) {
      e.value = t ?? "";
    },
    beforeUpdate(
      e,
      { value: t, modifiers: { lazy: n, trim: s, number: i } },
      r
    ) {
      if (
        ((e._assign = ol(r)),
        e.composing ||
          (document.activeElement === e &&
            e.type !== "range" &&
            (n ||
              (s && e.value.trim() === t) ||
              ((i || e.type === "number") && Br(e.value) === t))))
      )
        return;
      const o = t ?? "";
      e.value !== o && (e.value = o);
    },
  },
  qp = ["ctrl", "shift", "alt", "meta"],
  Xp = {
    stop: (e) => e.stopPropagation(),
    prevent: (e) => e.preventDefault(),
    self: (e) => e.target !== e.currentTarget,
    ctrl: (e) => !e.ctrlKey,
    shift: (e) => !e.shiftKey,
    alt: (e) => !e.altKey,
    meta: (e) => !e.metaKey,
    left: (e) => "button" in e && e.button !== 0,
    middle: (e) => "button" in e && e.button !== 1,
    right: (e) => "button" in e && e.button !== 2,
    exact: (e, t) => qp.some((n) => e[`${n}Key`] && !t.includes(n)),
  },
  Qp =
    (e, t) =>
    (n, ...s) => {
      for (let i = 0; i < t.length; i++) {
        const r = Xp[t[i]];
        if (r && r(n, t)) return;
      }
      return e(n, ...s);
    },
  Gp = {
    beforeMount(e, { value: t }, { transition: n }) {
      (e._vod = e.style.display === "none" ? "" : e.style.display),
        n && t ? n.beforeEnter(e) : os(e, t);
    },
    mounted(e, { value: t }, { transition: n }) {
      n && t && n.enter(e);
    },
    updated(e, { value: t, oldValue: n }, { transition: s }) {
      !t != !n &&
        (s
          ? t
            ? (s.beforeEnter(e), os(e, !0), s.enter(e))
            : s.leave(e, () => {
                os(e, !1);
              })
          : os(e, t));
    },
    beforeUnmount(e, { value: t }) {
      os(e, t);
    },
  };
function os(e, t) {
  e.style.display = t ? e._vod : "none";
}
const Zp = Nt({ patchProp: Hp }, Pp);
let ll;
function Jp() {
  return ll || (ll = rp(Zp));
}
const tg = (...e) => {
  const t = Jp().createApp(...e),
    { mount: n } = t;
  return (
    (t.mount = (s) => {
      const i = eg(s);
      if (!i) return;
      const r = t._component;
      !et(r) && !r.render && !r.template && (r.template = i.innerHTML),
        (i.innerHTML = "");
      const o = n(i, !1, i instanceof SVGElement);
      return (
        i instanceof Element &&
          (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")),
        o
      );
    }),
    t
  );
};
function eg(e) {
  return Tt(e) ? document.querySelector(e) : e;
}
var ng = !1;
/*!
 * pinia v2.0.34
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ let Hu;
const Ji = (e) => (Hu = e),
  ju = Symbol();
function Jr(e) {
  return (
    e &&
    typeof e == "object" &&
    Object.prototype.toString.call(e) === "[object Object]" &&
    typeof e.toJSON != "function"
  );
}
var _s;
(function (e) {
  (e.direct = "direct"),
    (e.patchObject = "patch object"),
    (e.patchFunction = "patch function");
})(_s || (_s = {}));
function sg() {
  const e = Yc(!0),
    t = e.run(() => oe({}));
  let n = [],
    s = [];
  const i = $n({
    install(r) {
      Ji(i),
        (i._a = r),
        r.provide(ju, i),
        (r.config.globalProperties.$pinia = i),
        s.forEach((o) => n.push(o)),
        (s = []);
    },
    use(r) {
      return !this._a && !ng ? s.push(r) : n.push(r), this;
    },
    _p: n,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  });
  return i;
}
const Vu = () => {};
function cl(e, t, n, s = Vu) {
  e.push(t);
  const i = () => {
    const r = e.indexOf(t);
    r > -1 && (e.splice(r, 1), s());
  };
  return !n && Kc() && Bh(i), i;
}
function Rn(e, ...t) {
  e.slice().forEach((n) => {
    n(...t);
  });
}
function to(e, t) {
  e instanceof Map && t instanceof Map && t.forEach((n, s) => e.set(s, n)),
    e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const n in t) {
    if (!t.hasOwnProperty(n)) continue;
    const s = t[n],
      i = e[n];
    Jr(i) && Jr(s) && e.hasOwnProperty(n) && !At(s) && !Je(s)
      ? (e[n] = to(i, s))
      : (e[n] = s);
  }
  return e;
}
const ig = Symbol();
function rg(e) {
  return !Jr(e) || !e.hasOwnProperty(ig);
}
const { assign: $e } = Object;
function og(e) {
  return !!(At(e) && e.effect);
}
function ag(e, t, n, s) {
  const { state: i, actions: r, getters: o } = t,
    a = n.state.value[e];
  let l;
  function c() {
    a || (n.state.value[e] = i ? i() : {});
    const u = pd(n.state.value[e]);
    return $e(
      u,
      r,
      Object.keys(o || {}).reduce(
        (f, h) => (
          (f[h] = $n(
            Zt(() => {
              Ji(n);
              const d = n._s.get(e);
              return o[h].call(d, d);
            })
          )),
          f
        ),
        {}
      )
    );
  }
  return (l = Wu(e, c, t, n, s, !0)), l;
}
function Wu(e, t, n = {}, s, i, r) {
  let o;
  const a = $e({ actions: {} }, n),
    l = { deep: !0 };
  let c,
    u,
    f = $n([]),
    h = $n([]),
    d;
  const p = s.state.value[e];
  !r && !p && (s.state.value[e] = {}), oe({});
  let g;
  function x(k) {
    let S;
    (c = u = !1),
      typeof k == "function"
        ? (k(s.state.value[e]),
          (S = { type: _s.patchFunction, storeId: e, events: d }))
        : (to(s.state.value[e], k),
          (S = { type: _s.patchObject, payload: k, storeId: e, events: d }));
    const R = (g = Symbol());
    Do().then(() => {
      g === R && (c = !0);
    }),
      (u = !0),
      Rn(f, S, s.state.value[e]);
  }
  const b = r
    ? function () {
        const { state: S } = n,
          R = S ? S() : {};
        this.$patch((L) => {
          $e(L, R);
        });
      }
    : Vu;
  function _() {
    o.stop(), (f = []), (h = []), s._s.delete(e);
  }
  function v(k, S) {
    return function () {
      Ji(s);
      const R = Array.from(arguments),
        L = [],
        V = [];
      function A(j) {
        L.push(j);
      }
      function W(j) {
        V.push(j);
      }
      Rn(h, { args: R, name: k, store: w, after: A, onError: W });
      let J;
      try {
        J = S.apply(this && this.$id === e ? this : w, R);
      } catch (j) {
        throw (Rn(V, j), j);
      }
      return J instanceof Promise
        ? J.then((j) => (Rn(L, j), j)).catch(
            (j) => (Rn(V, j), Promise.reject(j))
          )
        : (Rn(L, J), J);
    };
  }
  const C = {
      _p: s,
      $id: e,
      $onAction: cl.bind(null, h),
      $patch: x,
      $reset: b,
      $subscribe(k, S = {}) {
        const R = cl(f, k, S.detached, () => L()),
          L = o.run(() =>
            en(
              () => s.state.value[e],
              (V) => {
                (S.flush === "sync" ? u : c) &&
                  k({ storeId: e, type: _s.direct, events: d }, V);
              },
              $e({}, l, S)
            )
          );
        return R;
      },
      $dispose: _,
    },
    w = ns(C);
  s._s.set(e, w);
  const O = s._e.run(() => ((o = Yc()), o.run(() => t())));
  for (const k in O) {
    const S = O[k];
    if ((At(S) && !og(S)) || Je(S))
      r ||
        (p && rg(S) && (At(S) ? (S.value = p[k]) : to(S, p[k])),
        (s.state.value[e][k] = S));
    else if (typeof S == "function") {
      const R = v(k, S);
      (O[k] = R), (a.actions[k] = S);
    }
  }
  return (
    $e(w, O),
    $e(rt(w), O),
    Object.defineProperty(w, "$state", {
      get: () => s.state.value[e],
      set: (k) => {
        x((S) => {
          $e(S, k);
        });
      },
    }),
    s._p.forEach((k) => {
      $e(
        w,
        o.run(() => k({ store: w, app: s._a, pinia: s, options: a }))
      );
    }),
    p && r && n.hydrate && n.hydrate(w.$state, p),
    (c = !0),
    (u = !0),
    w
  );
}
function $s(e, t, n) {
  let s, i;
  const r = typeof t == "function";
  typeof e == "string" ? ((s = e), (i = r ? n : t)) : ((i = e), (s = e.id));
  function o(a, l) {
    const c = Lu();
    return (
      (a = a || (c && re(ju, null))),
      a && Ji(a),
      (a = Hu),
      a._s.has(s) || (r ? Wu(s, t, i, a) : ag(s, i, a)),
      a._s.get(s)
    );
  }
  return (o.$id = s), o;
}
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const zn = typeof window < "u";
function lg(e) {
  return e.__esModule || e[Symbol.toStringTag] === "Module";
}
const dt = Object.assign;
function vr(e, t) {
  const n = {};
  for (const s in t) {
    const i = t[s];
    n[s] = be(i) ? i.map(e) : e(i);
  }
  return n;
}
const ys = () => {},
  be = Array.isArray,
  cg = /\/$/,
  ug = (e) => e.replace(cg, "");
function Cr(e, t, n = "/") {
  let s,
    i = {},
    r = "",
    o = "";
  const a = t.indexOf("#");
  let l = t.indexOf("?");
  return (
    a < l && a >= 0 && (l = -1),
    l > -1 &&
      ((s = t.slice(0, l)),
      (r = t.slice(l + 1, a > -1 ? a : t.length)),
      (i = e(r))),
    a > -1 && ((s = s || t.slice(0, a)), (o = t.slice(a, t.length))),
    (s = pg(s ?? t, n)),
    { fullPath: s + (r && "?") + r + o, path: s, query: i, hash: o }
  );
}
function fg(e, t) {
  const n = t.query ? e(t.query) : "";
  return t.path + (n && "?") + n + (t.hash || "");
}
function ul(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || "/";
}
function hg(e, t, n) {
  const s = t.matched.length - 1,
    i = n.matched.length - 1;
  return (
    s > -1 &&
    s === i &&
    Kn(t.matched[s], n.matched[i]) &&
    $u(t.params, n.params) &&
    e(t.query) === e(n.query) &&
    t.hash === n.hash
  );
}
function Kn(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t);
}
function $u(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1;
  for (const n in e) if (!dg(e[n], t[n])) return !1;
  return !0;
}
function dg(e, t) {
  return be(e) ? fl(e, t) : be(t) ? fl(t, e) : e === t;
}
function fl(e, t) {
  return be(t)
    ? e.length === t.length && e.every((n, s) => n === t[s])
    : e.length === 1 && e[0] === t;
}
function pg(e, t) {
  if (e.startsWith("/")) return e;
  if (!e) return t;
  const n = t.split("/"),
    s = e.split("/");
  let i = n.length - 1,
    r,
    o;
  for (r = 0; r < s.length; r++)
    if (((o = s[r]), o !== "."))
      if (o === "..") i > 1 && i--;
      else break;
  return (
    n.slice(0, i).join("/") +
    "/" +
    s.slice(r - (r === s.length ? 1 : 0)).join("/")
  );
}
var Is;
(function (e) {
  (e.pop = "pop"), (e.push = "push");
})(Is || (Is = {}));
var vs;
(function (e) {
  (e.back = "back"), (e.forward = "forward"), (e.unknown = "");
})(vs || (vs = {}));
function gg(e) {
  if (!e)
    if (zn) {
      const t = document.querySelector("base");
      (e = (t && t.getAttribute("href")) || "/"),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ""));
    } else e = "/";
  return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), ug(e);
}
const mg = /^[^#]+#/;
function bg(e, t) {
  return e.replace(mg, "#") + t;
}
function xg(e, t) {
  const n = document.documentElement.getBoundingClientRect(),
    s = e.getBoundingClientRect();
  return {
    behavior: t.behavior,
    left: s.left - n.left - (t.left || 0),
    top: s.top - n.top - (t.top || 0),
  };
}
const tr = () => ({ left: window.pageXOffset, top: window.pageYOffset });
function _g(e) {
  let t;
  if ("el" in e) {
    const n = e.el,
      s = typeof n == "string" && n.startsWith("#"),
      i =
        typeof n == "string"
          ? s
            ? document.getElementById(n.slice(1))
            : document.querySelector(n)
          : n;
    if (!i) return;
    t = xg(i, e);
  } else t = e;
  "scrollBehavior" in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      );
}
function hl(e, t) {
  return (history.state ? history.state.position - t : -1) + e;
}
const eo = new Map();
function yg(e, t) {
  eo.set(e, t);
}
function vg(e) {
  const t = eo.get(e);
  return eo.delete(e), t;
}
let Cg = () => location.protocol + "//" + location.host;
function Uu(e, t) {
  const { pathname: n, search: s, hash: i } = t,
    r = e.indexOf("#");
  if (r > -1) {
    let a = i.includes(e.slice(r)) ? e.slice(r).length : 1,
      l = i.slice(a);
    return l[0] !== "/" && (l = "/" + l), ul(l, "");
  }
  return ul(n, e) + s + i;
}
function wg(e, t, n, s) {
  let i = [],
    r = [],
    o = null;
  const a = ({ state: h }) => {
    const d = Uu(e, location),
      p = n.value,
      g = t.value;
    let x = 0;
    if (h) {
      if (((n.value = d), (t.value = h), o && o === p)) {
        o = null;
        return;
      }
      x = g ? h.position - g.position : 0;
    } else s(d);
    i.forEach((b) => {
      b(n.value, p, {
        delta: x,
        type: Is.pop,
        direction: x ? (x > 0 ? vs.forward : vs.back) : vs.unknown,
      });
    });
  };
  function l() {
    o = n.value;
  }
  function c(h) {
    i.push(h);
    const d = () => {
      const p = i.indexOf(h);
      p > -1 && i.splice(p, 1);
    };
    return r.push(d), d;
  }
  function u() {
    const { history: h } = window;
    h.state && h.replaceState(dt({}, h.state, { scroll: tr() }), "");
  }
  function f() {
    for (const h of r) h();
    (r = []),
      window.removeEventListener("popstate", a),
      window.removeEventListener("beforeunload", u);
  }
  return (
    window.addEventListener("popstate", a),
    window.addEventListener("beforeunload", u),
    { pauseListeners: l, listen: c, destroy: f }
  );
}
function dl(e, t, n, s = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: n,
    replaced: s,
    position: window.history.length,
    scroll: i ? tr() : null,
  };
}
function Mg(e) {
  const { history: t, location: n } = window,
    s = { value: Uu(e, n) },
    i = { value: t.state };
  i.value ||
    r(
      s.value,
      {
        back: null,
        current: s.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    );
  function r(l, c, u) {
    const f = e.indexOf("#"),
      h =
        f > -1
          ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l
          : Cg() + e + l;
    try {
      t[u ? "replaceState" : "pushState"](c, "", h), (i.value = c);
    } catch (d) {
      console.error(d), n[u ? "replace" : "assign"](h);
    }
  }
  function o(l, c) {
    const u = dt({}, t.state, dl(i.value.back, l, i.value.forward, !0), c, {
      position: i.value.position,
    });
    r(l, u, !0), (s.value = l);
  }
  function a(l, c) {
    const u = dt({}, i.value, t.state, { forward: l, scroll: tr() });
    r(u.current, u, !0);
    const f = dt({}, dl(s.value, l, null), { position: u.position + 1 }, c);
    r(l, f, !1), (s.value = l);
  }
  return { location: s, state: i, push: a, replace: o };
}
function Sg(e) {
  e = gg(e);
  const t = Mg(e),
    n = wg(e, t.state, t.location, t.replace);
  function s(r, o = !0) {
    o || n.pauseListeners(), history.go(r);
  }
  const i = dt(
    { location: "", base: e, go: s, createHref: bg.bind(null, e) },
    t,
    n
  );
  return (
    Object.defineProperty(i, "location", {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(i, "state", {
      enumerable: !0,
      get: () => t.state.value,
    }),
    i
  );
}
function kg(e) {
  return typeof e == "string" || (e && typeof e == "object");
}
function Yu(e) {
  return typeof e == "string" || typeof e == "symbol";
}
const Ve = {
    path: "/",
    name: void 0,
    params: {},
    query: {},
    hash: "",
    fullPath: "/",
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  Ku = Symbol("");
var pl;
(function (e) {
  (e[(e.aborted = 4)] = "aborted"),
    (e[(e.cancelled = 8)] = "cancelled"),
    (e[(e.duplicated = 16)] = "duplicated");
})(pl || (pl = {}));
function qn(e, t) {
  return dt(new Error(), { type: e, [Ku]: !0 }, t);
}
function Ae(e, t) {
  return e instanceof Error && Ku in e && (t == null || !!(e.type & t));
}
const gl = "[^/]+?",
  Pg = { sensitive: !1, strict: !1, start: !0, end: !0 },
  Og = /[.+*?^${}()[\]/\\]/g;
function Eg(e, t) {
  const n = dt({}, Pg, t),
    s = [];
  let i = n.start ? "^" : "";
  const r = [];
  for (const c of e) {
    const u = c.length ? [] : [90];
    n.strict && !c.length && (i += "/");
    for (let f = 0; f < c.length; f++) {
      const h = c[f];
      let d = 40 + (n.sensitive ? 0.25 : 0);
      if (h.type === 0)
        f || (i += "/"), (i += h.value.replace(Og, "\\$&")), (d += 40);
      else if (h.type === 1) {
        const { value: p, repeatable: g, optional: x, regexp: b } = h;
        r.push({ name: p, repeatable: g, optional: x });
        const _ = b || gl;
        if (_ !== gl) {
          d += 10;
          try {
            new RegExp(`(${_})`);
          } catch (C) {
            throw new Error(
              `Invalid custom RegExp for param "${p}" (${_}): ` + C.message
            );
          }
        }
        let v = g ? `((?:${_})(?:/(?:${_}))*)` : `(${_})`;
        f || (v = x && c.length < 2 ? `(?:/${v})` : "/" + v),
          x && (v += "?"),
          (i += v),
          (d += 20),
          x && (d += -8),
          g && (d += -20),
          _ === ".*" && (d += -50);
      }
      u.push(d);
    }
    s.push(u);
  }
  if (n.strict && n.end) {
    const c = s.length - 1;
    s[c][s[c].length - 1] += 0.7000000000000001;
  }
  n.strict || (i += "/?"), n.end ? (i += "$") : n.strict && (i += "(?:/|$)");
  const o = new RegExp(i, n.sensitive ? "" : "i");
  function a(c) {
    const u = c.match(o),
      f = {};
    if (!u) return null;
    for (let h = 1; h < u.length; h++) {
      const d = u[h] || "",
        p = r[h - 1];
      f[p.name] = d && p.repeatable ? d.split("/") : d;
    }
    return f;
  }
  function l(c) {
    let u = "",
      f = !1;
    for (const h of e) {
      (!f || !u.endsWith("/")) && (u += "/"), (f = !1);
      for (const d of h)
        if (d.type === 0) u += d.value;
        else if (d.type === 1) {
          const { value: p, repeatable: g, optional: x } = d,
            b = p in c ? c[p] : "";
          if (be(b) && !g)
            throw new Error(
              `Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`
            );
          const _ = be(b) ? b.join("/") : b;
          if (!_)
            if (x)
              h.length < 2 &&
                (u.endsWith("/") ? (u = u.slice(0, -1)) : (f = !0));
            else throw new Error(`Missing required param "${p}"`);
          u += _;
        }
    }
    return u || "/";
  }
  return { re: o, score: s, keys: r, parse: a, stringify: l };
}
function Ag(e, t) {
  let n = 0;
  for (; n < e.length && n < t.length; ) {
    const s = t[n] - e[n];
    if (s) return s;
    n++;
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0;
}
function Tg(e, t) {
  let n = 0;
  const s = e.score,
    i = t.score;
  for (; n < s.length && n < i.length; ) {
    const r = Ag(s[n], i[n]);
    if (r) return r;
    n++;
  }
  if (Math.abs(i.length - s.length) === 1) {
    if (ml(s)) return 1;
    if (ml(i)) return -1;
  }
  return i.length - s.length;
}
function ml(e) {
  const t = e[e.length - 1];
  return e.length > 0 && t[t.length - 1] < 0;
}
const Rg = { type: 0, value: "" },
  Dg = /[a-zA-Z0-9_]/;
function Lg(e) {
  if (!e) return [[]];
  if (e === "/") return [[Rg]];
  if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);
  function t(d) {
    throw new Error(`ERR (${n})/"${c}": ${d}`);
  }
  let n = 0,
    s = n;
  const i = [];
  let r;
  function o() {
    r && i.push(r), (r = []);
  }
  let a = 0,
    l,
    c = "",
    u = "";
  function f() {
    c &&
      (n === 0
        ? r.push({ type: 0, value: c })
        : n === 1 || n === 2 || n === 3
        ? (r.length > 1 &&
            (l === "*" || l === "+") &&
            t(
              `A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`
            ),
          r.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?",
          }))
        : t("Invalid state to consume buffer"),
      (c = ""));
  }
  function h() {
    c += l;
  }
  for (; a < e.length; ) {
    if (((l = e[a++]), l === "\\" && n !== 2)) {
      (s = n), (n = 4);
      continue;
    }
    switch (n) {
      case 0:
        l === "/" ? (c && f(), o()) : l === ":" ? (f(), (n = 1)) : h();
        break;
      case 4:
        h(), (n = s);
        break;
      case 1:
        l === "("
          ? (n = 2)
          : Dg.test(l)
          ? h()
          : (f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--);
        break;
      case 2:
        l === ")"
          ? u[u.length - 1] == "\\"
            ? (u = u.slice(0, -1) + l)
            : (n = 3)
          : (u += l);
        break;
      case 3:
        f(), (n = 0), l !== "*" && l !== "?" && l !== "+" && a--, (u = "");
        break;
      default:
        t("Unknown state");
        break;
    }
  }
  return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), o(), i;
}
function Ig(e, t, n) {
  const s = Eg(Lg(e.path), n),
    i = dt(s, { record: e, parent: t, children: [], alias: [] });
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i;
}
function Fg(e, t) {
  const n = [],
    s = new Map();
  t = _l({ strict: !1, end: !0, sensitive: !1 }, t);
  function i(u) {
    return s.get(u);
  }
  function r(u, f, h) {
    const d = !h,
      p = Bg(u);
    p.aliasOf = h && h.record;
    const g = _l(t, u),
      x = [p];
    if ("alias" in u) {
      const v = typeof u.alias == "string" ? [u.alias] : u.alias;
      for (const C of v)
        x.push(
          dt({}, p, {
            components: h ? h.record.components : p.components,
            path: C,
            aliasOf: h ? h.record : p,
          })
        );
    }
    let b, _;
    for (const v of x) {
      const { path: C } = v;
      if (f && C[0] !== "/") {
        const w = f.record.path,
          O = w[w.length - 1] === "/" ? "" : "/";
        v.path = f.record.path + (C && O + C);
      }
      if (
        ((b = Ig(v, f, g)),
        h
          ? h.alias.push(b)
          : ((_ = _ || b),
            _ !== b && _.alias.push(b),
            d && u.name && !xl(b) && o(u.name)),
        p.children)
      ) {
        const w = p.children;
        for (let O = 0; O < w.length; O++) r(w[O], b, h && h.children[O]);
      }
      (h = h || b),
        ((b.record.components && Object.keys(b.record.components).length) ||
          b.record.name ||
          b.record.redirect) &&
          l(b);
    }
    return _
      ? () => {
          o(_);
        }
      : ys;
  }
  function o(u) {
    if (Yu(u)) {
      const f = s.get(u);
      f &&
        (s.delete(u),
        n.splice(n.indexOf(f), 1),
        f.children.forEach(o),
        f.alias.forEach(o));
    } else {
      const f = n.indexOf(u);
      f > -1 &&
        (n.splice(f, 1),
        u.record.name && s.delete(u.record.name),
        u.children.forEach(o),
        u.alias.forEach(o));
    }
  }
  function a() {
    return n;
  }
  function l(u) {
    let f = 0;
    for (
      ;
      f < n.length &&
      Tg(u, n[f]) >= 0 &&
      (u.record.path !== n[f].record.path || !qu(u, n[f]));

    )
      f++;
    n.splice(f, 0, u), u.record.name && !xl(u) && s.set(u.record.name, u);
  }
  function c(u, f) {
    let h,
      d = {},
      p,
      g;
    if ("name" in u && u.name) {
      if (((h = s.get(u.name)), !h)) throw qn(1, { location: u });
      (g = h.record.name),
        (d = dt(
          bl(
            f.params,
            h.keys.filter((_) => !_.optional).map((_) => _.name)
          ),
          u.params &&
            bl(
              u.params,
              h.keys.map((_) => _.name)
            )
        )),
        (p = h.stringify(d));
    } else if ("path" in u)
      (p = u.path),
        (h = n.find((_) => _.re.test(p))),
        h && ((d = h.parse(p)), (g = h.record.name));
    else {
      if (((h = f.name ? s.get(f.name) : n.find((_) => _.re.test(f.path))), !h))
        throw qn(1, { location: u, currentLocation: f });
      (g = h.record.name),
        (d = dt({}, f.params, u.params)),
        (p = h.stringify(d));
    }
    const x = [];
    let b = h;
    for (; b; ) x.unshift(b.record), (b = b.parent);
    return { name: g, path: p, params: d, matched: x, meta: Ng(x) };
  }
  return (
    e.forEach((u) => r(u)),
    {
      addRoute: r,
      resolve: c,
      removeRoute: o,
      getRoutes: a,
      getRecordMatcher: i,
    }
  );
}
function bl(e, t) {
  const n = {};
  for (const s of t) s in e && (n[s] = e[s]);
  return n;
}
function Bg(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: zg(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      "components" in e
        ? e.components || null
        : e.component && { default: e.component },
  };
}
function zg(e) {
  const t = {},
    n = e.props || !1;
  if ("component" in e) t.default = n;
  else for (const s in e.components) t[s] = typeof n == "boolean" ? n : n[s];
  return t;
}
function xl(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0;
    e = e.parent;
  }
  return !1;
}
function Ng(e) {
  return e.reduce((t, n) => dt(t, n.meta), {});
}
function _l(e, t) {
  const n = {};
  for (const s in e) n[s] = s in t ? t[s] : e[s];
  return n;
}
function qu(e, t) {
  return t.children.some((n) => n === e || qu(e, n));
}
const Xu = /#/g,
  Hg = /&/g,
  jg = /\//g,
  Vg = /=/g,
  Wg = /\?/g,
  Qu = /\+/g,
  $g = /%5B/g,
  Ug = /%5D/g,
  Gu = /%5E/g,
  Yg = /%60/g,
  Zu = /%7B/g,
  Kg = /%7C/g,
  Ju = /%7D/g,
  qg = /%20/g;
function Vo(e) {
  return encodeURI("" + e)
    .replace(Kg, "|")
    .replace($g, "[")
    .replace(Ug, "]");
}
function Xg(e) {
  return Vo(e).replace(Zu, "{").replace(Ju, "}").replace(Gu, "^");
}
function no(e) {
  return Vo(e)
    .replace(Qu, "%2B")
    .replace(qg, "+")
    .replace(Xu, "%23")
    .replace(Hg, "%26")
    .replace(Yg, "`")
    .replace(Zu, "{")
    .replace(Ju, "}")
    .replace(Gu, "^");
}
function Qg(e) {
  return no(e).replace(Vg, "%3D");
}
function Gg(e) {
  return Vo(e).replace(Xu, "%23").replace(Wg, "%3F");
}
function Zg(e) {
  return e == null ? "" : Gg(e).replace(jg, "%2F");
}
function Si(e) {
  try {
    return decodeURIComponent("" + e);
  } catch {}
  return "" + e;
}
function Jg(e) {
  const t = {};
  if (e === "" || e === "?") return t;
  const s = (e[0] === "?" ? e.slice(1) : e).split("&");
  for (let i = 0; i < s.length; ++i) {
    const r = s[i].replace(Qu, " "),
      o = r.indexOf("="),
      a = Si(o < 0 ? r : r.slice(0, o)),
      l = o < 0 ? null : Si(r.slice(o + 1));
    if (a in t) {
      let c = t[a];
      be(c) || (c = t[a] = [c]), c.push(l);
    } else t[a] = l;
  }
  return t;
}
function yl(e) {
  let t = "";
  for (let n in e) {
    const s = e[n];
    if (((n = Qg(n)), s == null)) {
      s !== void 0 && (t += (t.length ? "&" : "") + n);
      continue;
    }
    (be(s) ? s.map((r) => r && no(r)) : [s && no(s)]).forEach((r) => {
      r !== void 0 &&
        ((t += (t.length ? "&" : "") + n), r != null && (t += "=" + r));
    });
  }
  return t;
}
function tm(e) {
  const t = {};
  for (const n in e) {
    const s = e[n];
    s !== void 0 &&
      (t[n] = be(s)
        ? s.map((i) => (i == null ? null : "" + i))
        : s == null
        ? s
        : "" + s);
  }
  return t;
}
const em = Symbol(""),
  vl = Symbol(""),
  er = Symbol(""),
  Wo = Symbol(""),
  so = Symbol("");
function as() {
  let e = [];
  function t(s) {
    return (
      e.push(s),
      () => {
        const i = e.indexOf(s);
        i > -1 && e.splice(i, 1);
      }
    );
  }
  function n() {
    e = [];
  }
  return { add: t, list: () => e, reset: n };
}
function Ye(e, t, n, s, i) {
  const r = s && (s.enterCallbacks[i] = s.enterCallbacks[i] || []);
  return () =>
    new Promise((o, a) => {
      const l = (f) => {
          f === !1
            ? a(qn(4, { from: n, to: t }))
            : f instanceof Error
            ? a(f)
            : kg(f)
            ? a(qn(2, { from: t, to: f }))
            : (r &&
                s.enterCallbacks[i] === r &&
                typeof f == "function" &&
                r.push(f),
              o());
        },
        c = e.call(s && s.instances[i], t, n, l);
      let u = Promise.resolve(c);
      e.length < 3 && (u = u.then(l)), u.catch((f) => a(f));
    });
}
function wr(e, t, n, s) {
  const i = [];
  for (const r of e)
    for (const o in r.components) {
      let a = r.components[o];
      if (!(t !== "beforeRouteEnter" && !r.instances[o]))
        if (nm(a)) {
          const c = (a.__vccOpts || a)[t];
          c && i.push(Ye(c, n, s, r, o));
        } else {
          let l = a();
          i.push(() =>
            l.then((c) => {
              if (!c)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${o}" at "${r.path}"`)
                );
              const u = lg(c) ? c.default : c;
              r.components[o] = u;
              const h = (u.__vccOpts || u)[t];
              return h && Ye(h, n, s, r, o)();
            })
          );
        }
    }
  return i;
}
function nm(e) {
  return (
    typeof e == "object" ||
    "displayName" in e ||
    "props" in e ||
    "__vccOpts" in e
  );
}
function Cl(e) {
  const t = re(er),
    n = re(Wo),
    s = Zt(() => t.resolve(Mt(e.to))),
    i = Zt(() => {
      const { matched: l } = s.value,
        { length: c } = l,
        u = l[c - 1],
        f = n.matched;
      if (!u || !f.length) return -1;
      const h = f.findIndex(Kn.bind(null, u));
      if (h > -1) return h;
      const d = wl(l[c - 2]);
      return c > 1 && wl(u) === d && f[f.length - 1].path !== d
        ? f.findIndex(Kn.bind(null, l[c - 2]))
        : h;
    }),
    r = Zt(() => i.value > -1 && rm(n.params, s.value.params)),
    o = Zt(
      () =>
        i.value > -1 &&
        i.value === n.matched.length - 1 &&
        $u(n.params, s.value.params)
    );
  function a(l = {}) {
    return im(l)
      ? t[Mt(e.replace) ? "replace" : "push"](Mt(e.to)).catch(ys)
      : Promise.resolve();
  }
  return {
    route: s,
    href: Zt(() => s.value.href),
    isActive: r,
    isExactActive: o,
    navigate: a,
  };
}
const sm = Yi({
    name: "RouterLink",
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: "page" },
    },
    useLink: Cl,
    setup(e, { slots: t }) {
      const n = ns(Cl(e)),
        { options: s } = re(er),
        i = Zt(() => ({
          [Ml(e.activeClass, s.linkActiveClass, "router-link-active")]:
            n.isActive,
          [Ml(
            e.exactActiveClass,
            s.linkExactActiveClass,
            "router-link-exact-active"
          )]: n.isExactActive,
        }));
      return () => {
        const r = t.default && t.default(n);
        return e.custom
          ? r
          : Vs(
              "a",
              {
                "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                href: n.href,
                onClick: n.navigate,
                class: i.value,
              },
              r
            );
      };
    },
  }),
  tf = sm;
function im(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(t)) return;
    }
    return e.preventDefault && e.preventDefault(), !0;
  }
}
function rm(e, t) {
  for (const n in t) {
    const s = t[n],
      i = e[n];
    if (typeof s == "string") {
      if (s !== i) return !1;
    } else if (!be(i) || i.length !== s.length || s.some((r, o) => r !== i[o]))
      return !1;
  }
  return !0;
}
function wl(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : "";
}
const Ml = (e, t, n) => e ?? t ?? n,
  om = Yi({
    name: "RouterView",
    inheritAttrs: !1,
    props: { name: { type: String, default: "default" }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: n }) {
      const s = re(so),
        i = Zt(() => e.route || s.value),
        r = re(vl, 0),
        o = Zt(() => {
          let c = Mt(r);
          const { matched: u } = i.value;
          let f;
          for (; (f = u[c]) && !f.components; ) c++;
          return c;
        }),
        a = Zt(() => i.value.matched[o.value]);
      mi(
        vl,
        Zt(() => o.value + 1)
      ),
        mi(em, a),
        mi(so, i);
      const l = oe();
      return (
        en(
          () => [l.value, a.value, e.name],
          ([c, u, f], [h, d, p]) => {
            u &&
              ((u.instances[f] = c),
              d &&
                d !== u &&
                c &&
                c === h &&
                (u.leaveGuards.size || (u.leaveGuards = d.leaveGuards),
                u.updateGuards.size || (u.updateGuards = d.updateGuards))),
              c &&
                u &&
                (!d || !Kn(u, d) || !h) &&
                (u.enterCallbacks[f] || []).forEach((g) => g(c));
          },
          { flush: "post" }
        ),
        () => {
          const c = i.value,
            u = e.name,
            f = a.value,
            h = f && f.components[u];
          if (!h) return Sl(n.default, { Component: h, route: c });
          const d = f.props[u],
            p = d
              ? d === !0
                ? c.params
                : typeof d == "function"
                ? d(c)
                : d
              : null,
            x = Vs(
              h,
              dt({}, p, t, {
                onVnodeUnmounted: (b) => {
                  b.component.isUnmounted && (f.instances[u] = null);
                },
                ref: l,
              })
            );
          return Sl(n.default, { Component: x, route: c }) || x;
        }
      );
    },
  });
function Sl(e, t) {
  if (!e) return null;
  const n = e(t);
  return n.length === 1 ? n[0] : n;
}
const ef = om;
function am(e) {
  const t = Fg(e.routes, e),
    n = e.parseQuery || Jg,
    s = e.stringifyQuery || yl,
    i = e.history,
    r = as(),
    o = as(),
    a = as(),
    l = To(Ve);
  let c = Ve;
  zn &&
    e.scrollBehavior &&
    "scrollRestoration" in history &&
    (history.scrollRestoration = "manual");
  const u = vr.bind(null, (E) => "" + E),
    f = vr.bind(null, Zg),
    h = vr.bind(null, Si);
  function d(E, z) {
    let N, K;
    return (
      Yu(E) ? ((N = t.getRecordMatcher(E)), (K = z)) : (K = E), t.addRoute(K, N)
    );
  }
  function p(E) {
    const z = t.getRecordMatcher(E);
    z && t.removeRoute(z);
  }
  function g() {
    return t.getRoutes().map((E) => E.record);
  }
  function x(E) {
    return !!t.getRecordMatcher(E);
  }
  function b(E, z) {
    if (((z = dt({}, z || l.value)), typeof E == "string")) {
      const m = Cr(n, E, z.path),
        y = t.resolve({ path: m.path }, z),
        M = i.createHref(m.fullPath);
      return dt(m, y, {
        params: h(y.params),
        hash: Si(m.hash),
        redirectedFrom: void 0,
        href: M,
      });
    }
    let N;
    if ("path" in E) N = dt({}, E, { path: Cr(n, E.path, z.path).path });
    else {
      const m = dt({}, E.params);
      for (const y in m) m[y] == null && delete m[y];
      (N = dt({}, E, { params: f(E.params) })), (z.params = f(z.params));
    }
    const K = t.resolve(N, z),
      lt = E.hash || "";
    K.params = u(h(K.params));
    const wt = fg(s, dt({}, E, { hash: Xg(lt), path: K.path })),
      st = i.createHref(wt);
    return dt(
      { fullPath: wt, hash: lt, query: s === yl ? tm(E.query) : E.query || {} },
      K,
      { redirectedFrom: void 0, href: st }
    );
  }
  function _(E) {
    return typeof E == "string" ? Cr(n, E, l.value.path) : dt({}, E);
  }
  function v(E, z) {
    if (c !== E) return qn(8, { from: z, to: E });
  }
  function C(E) {
    return k(E);
  }
  function w(E) {
    return C(dt(_(E), { replace: !0 }));
  }
  function O(E) {
    const z = E.matched[E.matched.length - 1];
    if (z && z.redirect) {
      const { redirect: N } = z;
      let K = typeof N == "function" ? N(E) : N;
      return (
        typeof K == "string" &&
          ((K = K.includes("?") || K.includes("#") ? (K = _(K)) : { path: K }),
          (K.params = {})),
        dt(
          { query: E.query, hash: E.hash, params: "path" in K ? {} : E.params },
          K
        )
      );
    }
  }
  function k(E, z) {
    const N = (c = b(E)),
      K = l.value,
      lt = E.state,
      wt = E.force,
      st = E.replace === !0,
      m = O(N);
    if (m)
      return k(
        dt(_(m), {
          state: typeof m == "object" ? dt({}, lt, m.state) : lt,
          force: wt,
          replace: st,
        }),
        z || N
      );
    const y = N;
    y.redirectedFrom = z;
    let M;
    return (
      !wt &&
        hg(s, K, N) &&
        ((M = qn(16, { to: y, from: K })), Ft(K, K, !0, !1)),
      (M ? Promise.resolve(M) : R(y, K))
        .catch((P) => (Ae(P) ? (Ae(P, 2) ? P : Ot(P)) : U(P, y, K)))
        .then((P) => {
          if (P) {
            if (Ae(P, 2))
              return k(
                dt({ replace: st }, _(P.to), {
                  state: typeof P.to == "object" ? dt({}, lt, P.to.state) : lt,
                  force: wt,
                }),
                z || y
              );
          } else P = V(y, K, !0, st, lt);
          return L(y, K, P), P;
        })
    );
  }
  function S(E, z) {
    const N = v(E, z);
    return N ? Promise.reject(N) : Promise.resolve();
  }
  function R(E, z) {
    let N;
    const [K, lt, wt] = lm(E, z);
    N = wr(K.reverse(), "beforeRouteLeave", E, z);
    for (const m of K)
      m.leaveGuards.forEach((y) => {
        N.push(Ye(y, E, z));
      });
    const st = S.bind(null, E, z);
    return (
      N.push(st),
      Dn(N)
        .then(() => {
          N = [];
          for (const m of r.list()) N.push(Ye(m, E, z));
          return N.push(st), Dn(N);
        })
        .then(() => {
          N = wr(lt, "beforeRouteUpdate", E, z);
          for (const m of lt)
            m.updateGuards.forEach((y) => {
              N.push(Ye(y, E, z));
            });
          return N.push(st), Dn(N);
        })
        .then(() => {
          N = [];
          for (const m of E.matched)
            if (m.beforeEnter && !z.matched.includes(m))
              if (be(m.beforeEnter))
                for (const y of m.beforeEnter) N.push(Ye(y, E, z));
              else N.push(Ye(m.beforeEnter, E, z));
          return N.push(st), Dn(N);
        })
        .then(
          () => (
            E.matched.forEach((m) => (m.enterCallbacks = {})),
            (N = wr(wt, "beforeRouteEnter", E, z)),
            N.push(st),
            Dn(N)
          )
        )
        .then(() => {
          N = [];
          for (const m of o.list()) N.push(Ye(m, E, z));
          return N.push(st), Dn(N);
        })
        .catch((m) => (Ae(m, 8) ? m : Promise.reject(m)))
    );
  }
  function L(E, z, N) {
    for (const K of a.list()) K(E, z, N);
  }
  function V(E, z, N, K, lt) {
    const wt = v(E, z);
    if (wt) return wt;
    const st = z === Ve,
      m = zn ? history.state : {};
    N &&
      (K || st
        ? i.replace(E.fullPath, dt({ scroll: st && m && m.scroll }, lt))
        : i.push(E.fullPath, lt)),
      (l.value = E),
      Ft(E, z, N, st),
      Ot();
  }
  let A;
  function W() {
    A ||
      (A = i.listen((E, z, N) => {
        if (!le.listening) return;
        const K = b(E),
          lt = O(K);
        if (lt) {
          k(dt(lt, { replace: !0 }), K).catch(ys);
          return;
        }
        c = K;
        const wt = l.value;
        zn && yg(hl(wt.fullPath, N.delta), tr()),
          R(K, wt)
            .catch((st) =>
              Ae(st, 12)
                ? st
                : Ae(st, 2)
                ? (k(st.to, K)
                    .then((m) => {
                      Ae(m, 20) &&
                        !N.delta &&
                        N.type === Is.pop &&
                        i.go(-1, !1);
                    })
                    .catch(ys),
                  Promise.reject())
                : (N.delta && i.go(-N.delta, !1), U(st, K, wt))
            )
            .then((st) => {
              (st = st || V(K, wt, !1)),
                st &&
                  (N.delta && !Ae(st, 8)
                    ? i.go(-N.delta, !1)
                    : N.type === Is.pop && Ae(st, 20) && i.go(-1, !1)),
                L(K, wt, st);
            })
            .catch(ys);
      }));
  }
  let J = as(),
    j = as(),
    G;
  function U(E, z, N) {
    Ot(E);
    const K = j.list();
    return (
      K.length ? K.forEach((lt) => lt(E, z, N)) : console.error(E),
      Promise.reject(E)
    );
  }
  function tt() {
    return G && l.value !== Ve
      ? Promise.resolve()
      : new Promise((E, z) => {
          J.add([E, z]);
        });
  }
  function Ot(E) {
    return (
      G ||
        ((G = !E),
        W(),
        J.list().forEach(([z, N]) => (E ? N(E) : z())),
        J.reset()),
      E
    );
  }
  function Ft(E, z, N, K) {
    const { scrollBehavior: lt } = e;
    if (!zn || !lt) return Promise.resolve();
    const wt =
      (!N && vg(hl(E.fullPath, 0))) ||
      ((K || !N) && history.state && history.state.scroll) ||
      null;
    return Do()
      .then(() => lt(E, z, wt))
      .then((st) => st && _g(st))
      .catch((st) => U(st, E, z));
  }
  const Lt = (E) => i.go(E);
  let vt;
  const It = new Set(),
    le = {
      currentRoute: l,
      listening: !0,
      addRoute: d,
      removeRoute: p,
      hasRoute: x,
      getRoutes: g,
      resolve: b,
      options: e,
      push: C,
      replace: w,
      go: Lt,
      back: () => Lt(-1),
      forward: () => Lt(1),
      beforeEach: r.add,
      beforeResolve: o.add,
      afterEach: a.add,
      onError: j.add,
      isReady: tt,
      install(E) {
        const z = this;
        E.component("RouterLink", tf),
          E.component("RouterView", ef),
          (E.config.globalProperties.$router = z),
          Object.defineProperty(E.config.globalProperties, "$route", {
            enumerable: !0,
            get: () => Mt(l),
          }),
          zn &&
            !vt &&
            l.value === Ve &&
            ((vt = !0), C(i.location).catch((lt) => {}));
        const N = {};
        for (const lt in Ve) N[lt] = Zt(() => l.value[lt]);
        E.provide(er, z), E.provide(Wo, ns(N)), E.provide(so, l);
        const K = E.unmount;
        It.add(E),
          (E.unmount = function () {
            It.delete(E),
              It.size < 1 &&
                ((c = Ve),
                A && A(),
                (A = null),
                (l.value = Ve),
                (vt = !1),
                (G = !1)),
              K();
          });
      },
    };
  return le;
}
function Dn(e) {
  return e.reduce((t, n) => t.then(() => n()), Promise.resolve());
}
function lm(e, t) {
  const n = [],
    s = [],
    i = [],
    r = Math.max(t.matched.length, e.matched.length);
  for (let o = 0; o < r; o++) {
    const a = t.matched[o];
    a && (e.matched.find((c) => Kn(c, a)) ? s.push(a) : n.push(a));
    const l = e.matched[o];
    l && (t.matched.find((c) => Kn(c, l)) || i.push(l));
  }
  return [n, s, i];
}
function nf() {
  return re(er);
}
function $o() {
  return re(Wo);
}
var sf = {
    update: null,
    begin: null,
    loopBegin: null,
    changeBegin: null,
    change: null,
    changeComplete: null,
    loopComplete: null,
    complete: null,
    loop: 1,
    direction: "normal",
    autoplay: !0,
    timelineOffset: 0,
  },
  Uo = {
    duration: 1e3,
    delay: 0,
    endDelay: 0,
    easing: "easeOutElastic(1, .5)",
    round: 0,
  },
  cm = [
    "translateX",
    "translateY",
    "translateZ",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "perspective",
    "matrix",
    "matrix3d",
  ],
  ki = { CSS: {}, springs: {} };
function Me(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
function Cs(e, t) {
  return e.indexOf(t) > -1;
}
function Mr(e, t) {
  return e.apply(null, t);
}
var Y = {
  arr: function (e) {
    return Array.isArray(e);
  },
  obj: function (e) {
    return Cs(Object.prototype.toString.call(e), "Object");
  },
  pth: function (e) {
    return Y.obj(e) && e.hasOwnProperty("totalLength");
  },
  svg: function (e) {
    return e instanceof SVGElement;
  },
  inp: function (e) {
    return e instanceof HTMLInputElement;
  },
  dom: function (e) {
    return e.nodeType || Y.svg(e);
  },
  str: function (e) {
    return typeof e == "string";
  },
  fnc: function (e) {
    return typeof e == "function";
  },
  und: function (e) {
    return typeof e > "u";
  },
  nil: function (e) {
    return Y.und(e) || e === null;
  },
  hex: function (e) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e);
  },
  rgb: function (e) {
    return /^rgb/.test(e);
  },
  hsl: function (e) {
    return /^hsl/.test(e);
  },
  col: function (e) {
    return Y.hex(e) || Y.rgb(e) || Y.hsl(e);
  },
  key: function (e) {
    return (
      !sf.hasOwnProperty(e) &&
      !Uo.hasOwnProperty(e) &&
      e !== "targets" &&
      e !== "keyframes"
    );
  },
};
function rf(e) {
  var t = /\(([^)]+)\)/.exec(e);
  return t
    ? t[1].split(",").map(function (n) {
        return parseFloat(n);
      })
    : [];
}
function of(e, t) {
  var n = rf(e),
    s = Me(Y.und(n[0]) ? 1 : n[0], 0.1, 100),
    i = Me(Y.und(n[1]) ? 100 : n[1], 0.1, 100),
    r = Me(Y.und(n[2]) ? 10 : n[2], 0.1, 100),
    o = Me(Y.und(n[3]) ? 0 : n[3], 0.1, 100),
    a = Math.sqrt(i / s),
    l = r / (2 * Math.sqrt(i * s)),
    c = l < 1 ? a * Math.sqrt(1 - l * l) : 0,
    u = 1,
    f = l < 1 ? (l * a + -o) / c : -o + a;
  function h(p) {
    var g = t ? (t * p) / 1e3 : p;
    return (
      l < 1
        ? (g =
            Math.exp(-g * l * a) * (u * Math.cos(c * g) + f * Math.sin(c * g)))
        : (g = (u + f * g) * Math.exp(-g * a)),
      p === 0 || p === 1 ? p : 1 - g
    );
  }
  function d() {
    var p = ki.springs[e];
    if (p) return p;
    for (var g = 1 / 6, x = 0, b = 0; ; )
      if (((x += g), h(x) === 1)) {
        if ((b++, b >= 16)) break;
      } else b = 0;
    var _ = x * g * 1e3;
    return (ki.springs[e] = _), _;
  }
  return t ? h : d;
}
function um(e) {
  return (
    e === void 0 && (e = 10),
    function (t) {
      return Math.ceil(Me(t, 1e-6, 1) * e) * (1 / e);
    }
  );
}
var fm = (function () {
    var e = 11,
      t = 1 / (e - 1);
    function n(u, f) {
      return 1 - 3 * f + 3 * u;
    }
    function s(u, f) {
      return 3 * f - 6 * u;
    }
    function i(u) {
      return 3 * u;
    }
    function r(u, f, h) {
      return ((n(f, h) * u + s(f, h)) * u + i(f)) * u;
    }
    function o(u, f, h) {
      return 3 * n(f, h) * u * u + 2 * s(f, h) * u + i(f);
    }
    function a(u, f, h, d, p) {
      var g,
        x,
        b = 0;
      do (x = f + (h - f) / 2), (g = r(x, d, p) - u), g > 0 ? (h = x) : (f = x);
      while (Math.abs(g) > 1e-7 && ++b < 10);
      return x;
    }
    function l(u, f, h, d) {
      for (var p = 0; p < 4; ++p) {
        var g = o(f, h, d);
        if (g === 0) return f;
        var x = r(f, h, d) - u;
        f -= x / g;
      }
      return f;
    }
    function c(u, f, h, d) {
      if (!(0 <= u && u <= 1 && 0 <= h && h <= 1)) return;
      var p = new Float32Array(e);
      if (u !== f || h !== d) for (var g = 0; g < e; ++g) p[g] = r(g * t, u, h);
      function x(b) {
        for (var _ = 0, v = 1, C = e - 1; v !== C && p[v] <= b; ++v) _ += t;
        --v;
        var w = (b - p[v]) / (p[v + 1] - p[v]),
          O = _ + w * t,
          k = o(O, u, h);
        return k >= 0.001 ? l(b, O, u, h) : k === 0 ? O : a(b, _, _ + t, u, h);
      }
      return function (b) {
        return (u === f && h === d) || b === 0 || b === 1 ? b : r(x(b), f, d);
      };
    }
    return c;
  })(),
  af = (function () {
    var e = {
        linear: function () {
          return function (s) {
            return s;
          };
        },
      },
      t = {
        Sine: function () {
          return function (s) {
            return 1 - Math.cos((s * Math.PI) / 2);
          };
        },
        Circ: function () {
          return function (s) {
            return 1 - Math.sqrt(1 - s * s);
          };
        },
        Back: function () {
          return function (s) {
            return s * s * (3 * s - 2);
          };
        },
        Bounce: function () {
          return function (s) {
            for (var i, r = 4; s < ((i = Math.pow(2, --r)) - 1) / 11; );
            return (
              1 / Math.pow(4, 3 - r) -
              7.5625 * Math.pow((i * 3 - 2) / 22 - s, 2)
            );
          };
        },
        Elastic: function (s, i) {
          s === void 0 && (s = 1), i === void 0 && (i = 0.5);
          var r = Me(s, 1, 10),
            o = Me(i, 0.1, 2);
          return function (a) {
            return a === 0 || a === 1
              ? a
              : -r *
                  Math.pow(2, 10 * (a - 1)) *
                  Math.sin(
                    ((a - 1 - (o / (Math.PI * 2)) * Math.asin(1 / r)) *
                      (Math.PI * 2)) /
                      o
                  );
          };
        },
      },
      n = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
    return (
      n.forEach(function (s, i) {
        t[s] = function () {
          return function (r) {
            return Math.pow(r, i + 2);
          };
        };
      }),
      Object.keys(t).forEach(function (s) {
        var i = t[s];
        (e["easeIn" + s] = i),
          (e["easeOut" + s] = function (r, o) {
            return function (a) {
              return 1 - i(r, o)(1 - a);
            };
          }),
          (e["easeInOut" + s] = function (r, o) {
            return function (a) {
              return a < 0.5 ? i(r, o)(a * 2) / 2 : 1 - i(r, o)(a * -2 + 2) / 2;
            };
          }),
          (e["easeOutIn" + s] = function (r, o) {
            return function (a) {
              return a < 0.5
                ? (1 - i(r, o)(1 - a * 2)) / 2
                : (i(r, o)(a * 2 - 1) + 1) / 2;
            };
          });
      }),
      e
    );
  })();
function Yo(e, t) {
  if (Y.fnc(e)) return e;
  var n = e.split("(")[0],
    s = af[n],
    i = rf(e);
  switch (n) {
    case "spring":
      return of(e, t);
    case "cubicBezier":
      return Mr(fm, i);
    case "steps":
      return Mr(um, i);
    default:
      return Mr(s, i);
  }
}
function lf(e) {
  try {
    var t = document.querySelectorAll(e);
    return t;
  } catch {
    return;
  }
}
function nr(e, t) {
  for (
    var n = e.length,
      s = arguments.length >= 2 ? arguments[1] : void 0,
      i = [],
      r = 0;
    r < n;
    r++
  )
    if (r in e) {
      var o = e[r];
      t.call(s, o, r, e) && i.push(o);
    }
  return i;
}
function sr(e) {
  return e.reduce(function (t, n) {
    return t.concat(Y.arr(n) ? sr(n) : n);
  }, []);
}
function kl(e) {
  return Y.arr(e)
    ? e
    : (Y.str(e) && (e = lf(e) || e),
      e instanceof NodeList || e instanceof HTMLCollection
        ? [].slice.call(e)
        : [e]);
}
function Ko(e, t) {
  return e.some(function (n) {
    return n === t;
  });
}
function qo(e) {
  var t = {};
  for (var n in e) t[n] = e[n];
  return t;
}
function io(e, t) {
  var n = qo(e);
  for (var s in e) n[s] = t.hasOwnProperty(s) ? t[s] : e[s];
  return n;
}
function ir(e, t) {
  var n = qo(e);
  for (var s in t) n[s] = Y.und(e[s]) ? t[s] : e[s];
  return n;
}
function hm(e) {
  var t = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);
  return t ? "rgba(" + t[1] + ",1)" : e;
}
function dm(e) {
  var t = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    n = e.replace(t, function (a, l, c, u) {
      return l + l + c + c + u + u;
    }),
    s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),
    i = parseInt(s[1], 16),
    r = parseInt(s[2], 16),
    o = parseInt(s[3], 16);
  return "rgba(" + i + "," + r + "," + o + ",1)";
}
function pm(e) {
  var t =
      /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e) ||
      /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),
    n = parseInt(t[1], 10) / 360,
    s = parseInt(t[2], 10) / 100,
    i = parseInt(t[3], 10) / 100,
    r = t[4] || 1;
  function o(h, d, p) {
    return (
      p < 0 && (p += 1),
      p > 1 && (p -= 1),
      p < 1 / 6
        ? h + (d - h) * 6 * p
        : p < 1 / 2
        ? d
        : p < 2 / 3
        ? h + (d - h) * (2 / 3 - p) * 6
        : h
    );
  }
  var a, l, c;
  if (s == 0) a = l = c = i;
  else {
    var u = i < 0.5 ? i * (1 + s) : i + s - i * s,
      f = 2 * i - u;
    (a = o(f, u, n + 1 / 3)), (l = o(f, u, n)), (c = o(f, u, n - 1 / 3));
  }
  return "rgba(" + a * 255 + "," + l * 255 + "," + c * 255 + "," + r + ")";
}
function gm(e) {
  if (Y.rgb(e)) return hm(e);
  if (Y.hex(e)) return dm(e);
  if (Y.hsl(e)) return pm(e);
}
function Fe(e) {
  var t =
    /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(
      e
    );
  if (t) return t[1];
}
function mm(e) {
  if (Cs(e, "translate") || e === "perspective") return "px";
  if (Cs(e, "rotate") || Cs(e, "skew")) return "deg";
}
function ro(e, t) {
  return Y.fnc(e) ? e(t.target, t.id, t.total) : e;
}
function Se(e, t) {
  return e.getAttribute(t);
}
function Xo(e, t, n) {
  var s = Fe(t);
  if (Ko([n, "deg", "rad", "turn"], s)) return t;
  var i = ki.CSS[t + n];
  if (!Y.und(i)) return i;
  var r = 100,
    o = document.createElement(e.tagName),
    a =
      e.parentNode && e.parentNode !== document ? e.parentNode : document.body;
  a.appendChild(o), (o.style.position = "absolute"), (o.style.width = r + n);
  var l = r / o.offsetWidth;
  a.removeChild(o);
  var c = l * parseFloat(t);
  return (ki.CSS[t + n] = c), c;
}
function cf(e, t, n) {
  if (t in e.style) {
    var s = t.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
      i = e.style[t] || getComputedStyle(e).getPropertyValue(s) || "0";
    return n ? Xo(e, i, n) : i;
  }
}
function Qo(e, t) {
  if (Y.dom(e) && !Y.inp(e) && (!Y.nil(Se(e, t)) || (Y.svg(e) && e[t])))
    return "attribute";
  if (Y.dom(e) && Ko(cm, t)) return "transform";
  if (Y.dom(e) && t !== "transform" && cf(e, t)) return "css";
  if (e[t] != null) return "object";
}
function uf(e) {
  if (Y.dom(e)) {
    for (
      var t = e.style.transform || "",
        n = /(\w+)\(([^)]*)\)/g,
        s = new Map(),
        i;
      (i = n.exec(t));

    )
      s.set(i[1], i[2]);
    return s;
  }
}
function bm(e, t, n, s) {
  var i = Cs(t, "scale") ? 1 : 0 + mm(t),
    r = uf(e).get(t) || i;
  return (
    n && (n.transforms.list.set(t, r), (n.transforms.last = t)),
    s ? Xo(e, r, s) : r
  );
}
function Go(e, t, n, s) {
  switch (Qo(e, t)) {
    case "transform":
      return bm(e, t, s, n);
    case "css":
      return cf(e, t, n);
    case "attribute":
      return Se(e, t);
    default:
      return e[t] || 0;
  }
}
function Zo(e, t) {
  var n = /^(\*=|\+=|-=)/.exec(e);
  if (!n) return e;
  var s = Fe(e) || 0,
    i = parseFloat(t),
    r = parseFloat(e.replace(n[0], ""));
  switch (n[0][0]) {
    case "+":
      return i + r + s;
    case "-":
      return i - r + s;
    case "*":
      return i * r + s;
  }
}
function ff(e, t) {
  if (Y.col(e)) return gm(e);
  if (/\s/g.test(e)) return e;
  var n = Fe(e),
    s = n ? e.substr(0, e.length - n.length) : e;
  return t ? s + t : s;
}
function Jo(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function xm(e) {
  return Math.PI * 2 * Se(e, "r");
}
function _m(e) {
  return Se(e, "width") * 2 + Se(e, "height") * 2;
}
function ym(e) {
  return Jo(
    { x: Se(e, "x1"), y: Se(e, "y1") },
    { x: Se(e, "x2"), y: Se(e, "y2") }
  );
}
function hf(e) {
  for (var t = e.points, n = 0, s, i = 0; i < t.numberOfItems; i++) {
    var r = t.getItem(i);
    i > 0 && (n += Jo(s, r)), (s = r);
  }
  return n;
}
function vm(e) {
  var t = e.points;
  return hf(e) + Jo(t.getItem(t.numberOfItems - 1), t.getItem(0));
}
function df(e) {
  if (e.getTotalLength) return e.getTotalLength();
  switch (e.tagName.toLowerCase()) {
    case "circle":
      return xm(e);
    case "rect":
      return _m(e);
    case "line":
      return ym(e);
    case "polyline":
      return hf(e);
    case "polygon":
      return vm(e);
  }
}
function Cm(e) {
  var t = df(e);
  return e.setAttribute("stroke-dasharray", t), t;
}
function wm(e) {
  for (var t = e.parentNode; Y.svg(t) && Y.svg(t.parentNode); )
    t = t.parentNode;
  return t;
}
function pf(e, t) {
  var n = t || {},
    s = n.el || wm(e),
    i = s.getBoundingClientRect(),
    r = Se(s, "viewBox"),
    o = i.width,
    a = i.height,
    l = n.viewBox || (r ? r.split(" ") : [0, 0, o, a]);
  return {
    el: s,
    viewBox: l,
    x: l[0] / 1,
    y: l[1] / 1,
    w: o,
    h: a,
    vW: l[2],
    vH: l[3],
  };
}
function Mm(e, t) {
  var n = Y.str(e) ? lf(e)[0] : e,
    s = t || 100;
  return function (i) {
    return { property: i, el: n, svg: pf(n), totalLength: df(n) * (s / 100) };
  };
}
function Sm(e, t, n) {
  function s(u) {
    u === void 0 && (u = 0);
    var f = t + u >= 1 ? t + u : 0;
    return e.el.getPointAtLength(f);
  }
  var i = pf(e.el, e.svg),
    r = s(),
    o = s(-1),
    a = s(1),
    l = n ? 1 : i.w / i.vW,
    c = n ? 1 : i.h / i.vH;
  switch (e.property) {
    case "x":
      return (r.x - i.x) * l;
    case "y":
      return (r.y - i.y) * c;
    case "angle":
      return (Math.atan2(a.y - o.y, a.x - o.x) * 180) / Math.PI;
  }
}
function Pl(e, t) {
  var n = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,
    s = ff(Y.pth(e) ? e.totalLength : e, t) + "";
  return {
    original: s,
    numbers: s.match(n) ? s.match(n).map(Number) : [0],
    strings: Y.str(e) || t ? s.split(n) : [],
  };
}
function ta(e) {
  var t = e ? sr(Y.arr(e) ? e.map(kl) : kl(e)) : [];
  return nr(t, function (n, s, i) {
    return i.indexOf(n) === s;
  });
}
function gf(e) {
  var t = ta(e);
  return t.map(function (n, s) {
    return { target: n, id: s, total: t.length, transforms: { list: uf(n) } };
  });
}
function km(e, t) {
  var n = qo(t);
  if ((/^spring/.test(n.easing) && (n.duration = of(n.easing)), Y.arr(e))) {
    var s = e.length,
      i = s === 2 && !Y.obj(e[0]);
    i ? (e = { value: e }) : Y.fnc(t.duration) || (n.duration = t.duration / s);
  }
  var r = Y.arr(e) ? e : [e];
  return r
    .map(function (o, a) {
      var l = Y.obj(o) && !Y.pth(o) ? o : { value: o };
      return (
        Y.und(l.delay) && (l.delay = a ? 0 : t.delay),
        Y.und(l.endDelay) && (l.endDelay = a === r.length - 1 ? t.endDelay : 0),
        l
      );
    })
    .map(function (o) {
      return ir(o, n);
    });
}
function Pm(e) {
  for (
    var t = nr(
        sr(
          e.map(function (r) {
            return Object.keys(r);
          })
        ),
        function (r) {
          return Y.key(r);
        }
      ).reduce(function (r, o) {
        return r.indexOf(o) < 0 && r.push(o), r;
      }, []),
      n = {},
      s = function (r) {
        var o = t[r];
        n[o] = e.map(function (a) {
          var l = {};
          for (var c in a)
            Y.key(c) ? c == o && (l.value = a[c]) : (l[c] = a[c]);
          return l;
        });
      },
      i = 0;
    i < t.length;
    i++
  )
    s(i);
  return n;
}
function Om(e, t) {
  var n = [],
    s = t.keyframes;
  s && (t = ir(Pm(s), t));
  for (var i in t) Y.key(i) && n.push({ name: i, tweens: km(t[i], e) });
  return n;
}
function Em(e, t) {
  var n = {};
  for (var s in e) {
    var i = ro(e[s], t);
    Y.arr(i) &&
      ((i = i.map(function (r) {
        return ro(r, t);
      })),
      i.length === 1 && (i = i[0])),
      (n[s] = i);
  }
  return (
    (n.duration = parseFloat(n.duration)), (n.delay = parseFloat(n.delay)), n
  );
}
function Am(e, t) {
  var n;
  return e.tweens.map(function (s) {
    var i = Em(s, t),
      r = i.value,
      o = Y.arr(r) ? r[1] : r,
      a = Fe(o),
      l = Go(t.target, e.name, a, t),
      c = n ? n.to.original : l,
      u = Y.arr(r) ? r[0] : c,
      f = Fe(u) || Fe(l),
      h = a || f;
    return (
      Y.und(o) && (o = c),
      (i.from = Pl(u, h)),
      (i.to = Pl(Zo(o, u), h)),
      (i.start = n ? n.end : 0),
      (i.end = i.start + i.delay + i.duration + i.endDelay),
      (i.easing = Yo(i.easing, i.duration)),
      (i.isPath = Y.pth(r)),
      (i.isPathTargetInsideSVG = i.isPath && Y.svg(t.target)),
      (i.isColor = Y.col(i.from.original)),
      i.isColor && (i.round = 1),
      (n = i),
      i
    );
  });
}
var mf = {
  css: function (e, t, n) {
    return (e.style[t] = n);
  },
  attribute: function (e, t, n) {
    return e.setAttribute(t, n);
  },
  object: function (e, t, n) {
    return (e[t] = n);
  },
  transform: function (e, t, n, s, i) {
    if ((s.list.set(t, n), t === s.last || i)) {
      var r = "";
      s.list.forEach(function (o, a) {
        r += a + "(" + o + ") ";
      }),
        (e.style.transform = r);
    }
  },
};
function bf(e, t) {
  var n = gf(e);
  n.forEach(function (s) {
    for (var i in t) {
      var r = ro(t[i], s),
        o = s.target,
        a = Fe(r),
        l = Go(o, i, a, s),
        c = a || Fe(l),
        u = Zo(ff(r, c), l),
        f = Qo(o, i);
      mf[f](o, i, u, s.transforms, !0);
    }
  });
}
function Tm(e, t) {
  var n = Qo(e.target, t.name);
  if (n) {
    var s = Am(t, e),
      i = s[s.length - 1];
    return {
      type: n,
      property: t.name,
      animatable: e,
      tweens: s,
      duration: i.end,
      delay: s[0].delay,
      endDelay: i.endDelay,
    };
  }
}
function Rm(e, t) {
  return nr(
    sr(
      e.map(function (n) {
        return t.map(function (s) {
          return Tm(n, s);
        });
      })
    ),
    function (n) {
      return !Y.und(n);
    }
  );
}
function xf(e, t) {
  var n = e.length,
    s = function (r) {
      return r.timelineOffset ? r.timelineOffset : 0;
    },
    i = {};
  return (
    (i.duration = n
      ? Math.max.apply(
          Math,
          e.map(function (r) {
            return s(r) + r.duration;
          })
        )
      : t.duration),
    (i.delay = n
      ? Math.min.apply(
          Math,
          e.map(function (r) {
            return s(r) + r.delay;
          })
        )
      : t.delay),
    (i.endDelay = n
      ? i.duration -
        Math.max.apply(
          Math,
          e.map(function (r) {
            return s(r) + r.duration - r.endDelay;
          })
        )
      : t.endDelay),
    i
  );
}
var Ol = 0;
function Dm(e) {
  var t = io(sf, e),
    n = io(Uo, e),
    s = Om(n, e),
    i = gf(e.targets),
    r = Rm(i, s),
    o = xf(r, n),
    a = Ol;
  return (
    Ol++,
    ir(t, {
      id: a,
      children: [],
      animatables: i,
      animations: r,
      duration: o.duration,
      delay: o.delay,
      endDelay: o.endDelay,
    })
  );
}
var he = [],
  _f = (function () {
    var e;
    function t() {
      !e &&
        (!El() || !ut.suspendWhenDocumentHidden) &&
        he.length > 0 &&
        (e = requestAnimationFrame(n));
    }
    function n(i) {
      for (var r = he.length, o = 0; o < r; ) {
        var a = he[o];
        a.paused ? (he.splice(o, 1), r--) : (a.tick(i), o++);
      }
      e = o > 0 ? requestAnimationFrame(n) : void 0;
    }
    function s() {
      ut.suspendWhenDocumentHidden &&
        (El()
          ? (e = cancelAnimationFrame(e))
          : (he.forEach(function (i) {
              return i._onDocumentVisibility();
            }),
            _f()));
    }
    return (
      typeof document < "u" && document.addEventListener("visibilitychange", s),
      t
    );
  })();
function El() {
  return !!document && document.hidden;
}
function ut(e) {
  e === void 0 && (e = {});
  var t = 0,
    n = 0,
    s = 0,
    i,
    r = 0,
    o = null;
  function a(_) {
    var v =
      window.Promise &&
      new Promise(function (C) {
        return (o = C);
      });
    return (_.finished = v), v;
  }
  var l = Dm(e);
  a(l);
  function c() {
    var _ = l.direction;
    _ !== "alternate" && (l.direction = _ !== "normal" ? "normal" : "reverse"),
      (l.reversed = !l.reversed),
      i.forEach(function (v) {
        return (v.reversed = l.reversed);
      });
  }
  function u(_) {
    return l.reversed ? l.duration - _ : _;
  }
  function f() {
    (t = 0), (n = u(l.currentTime) * (1 / ut.speed));
  }
  function h(_, v) {
    v && v.seek(_ - v.timelineOffset);
  }
  function d(_) {
    if (l.reversePlayback) for (var C = r; C--; ) h(_, i[C]);
    else for (var v = 0; v < r; v++) h(_, i[v]);
  }
  function p(_) {
    for (var v = 0, C = l.animations, w = C.length; v < w; ) {
      var O = C[v],
        k = O.animatable,
        S = O.tweens,
        R = S.length - 1,
        L = S[R];
      R &&
        (L =
          nr(S, function (z) {
            return _ < z.end;
          })[0] || L);
      for (
        var V = Me(_ - L.start - L.delay, 0, L.duration) / L.duration,
          A = isNaN(V) ? 1 : L.easing(V),
          W = L.to.strings,
          J = L.round,
          j = [],
          G = L.to.numbers.length,
          U = void 0,
          tt = 0;
        tt < G;
        tt++
      ) {
        var Ot = void 0,
          Ft = L.to.numbers[tt],
          Lt = L.from.numbers[tt] || 0;
        L.isPath
          ? (Ot = Sm(L.value, A * Ft, L.isPathTargetInsideSVG))
          : (Ot = Lt + A * (Ft - Lt)),
          J && ((L.isColor && tt > 2) || (Ot = Math.round(Ot * J) / J)),
          j.push(Ot);
      }
      var vt = W.length;
      if (!vt) U = j[0];
      else {
        U = W[0];
        for (var It = 0; It < vt; It++) {
          W[It];
          var le = W[It + 1],
            E = j[It];
          isNaN(E) || (le ? (U += E + le) : (U += E + " "));
        }
      }
      mf[O.type](k.target, O.property, U, k.transforms),
        (O.currentValue = U),
        v++;
    }
  }
  function g(_) {
    l[_] && !l.passThrough && l[_](l);
  }
  function x() {
    l.remaining && l.remaining !== !0 && l.remaining--;
  }
  function b(_) {
    var v = l.duration,
      C = l.delay,
      w = v - l.endDelay,
      O = u(_);
    (l.progress = Me((O / v) * 100, 0, 100)),
      (l.reversePlayback = O < l.currentTime),
      i && d(O),
      !l.began && l.currentTime > 0 && ((l.began = !0), g("begin")),
      !l.loopBegan && l.currentTime > 0 && ((l.loopBegan = !0), g("loopBegin")),
      O <= C && l.currentTime !== 0 && p(0),
      ((O >= w && l.currentTime !== v) || !v) && p(v),
      O > C && O < w
        ? (l.changeBegan ||
            ((l.changeBegan = !0), (l.changeCompleted = !1), g("changeBegin")),
          g("change"),
          p(O))
        : l.changeBegan &&
          ((l.changeCompleted = !0), (l.changeBegan = !1), g("changeComplete")),
      (l.currentTime = Me(O, 0, v)),
      l.began && g("update"),
      _ >= v &&
        ((n = 0),
        x(),
        l.remaining
          ? ((t = s),
            g("loopComplete"),
            (l.loopBegan = !1),
            l.direction === "alternate" && c())
          : ((l.paused = !0),
            l.completed ||
              ((l.completed = !0),
              g("loopComplete"),
              g("complete"),
              !l.passThrough && "Promise" in window && (o(), a(l)))));
  }
  return (
    (l.reset = function () {
      var _ = l.direction;
      (l.passThrough = !1),
        (l.currentTime = 0),
        (l.progress = 0),
        (l.paused = !0),
        (l.began = !1),
        (l.loopBegan = !1),
        (l.changeBegan = !1),
        (l.completed = !1),
        (l.changeCompleted = !1),
        (l.reversePlayback = !1),
        (l.reversed = _ === "reverse"),
        (l.remaining = l.loop),
        (i = l.children),
        (r = i.length);
      for (var v = r; v--; ) l.children[v].reset();
      ((l.reversed && l.loop !== !0) || (_ === "alternate" && l.loop === 1)) &&
        l.remaining++,
        p(l.reversed ? l.duration : 0);
    }),
    (l._onDocumentVisibility = f),
    (l.set = function (_, v) {
      return bf(_, v), l;
    }),
    (l.tick = function (_) {
      (s = _), t || (t = s), b((s + (n - t)) * ut.speed);
    }),
    (l.seek = function (_) {
      b(u(_));
    }),
    (l.pause = function () {
      (l.paused = !0), f();
    }),
    (l.play = function () {
      l.paused &&
        (l.completed && l.reset(), (l.paused = !1), he.push(l), f(), _f());
    }),
    (l.reverse = function () {
      c(), (l.completed = !l.reversed), f();
    }),
    (l.restart = function () {
      l.reset(), l.play();
    }),
    (l.remove = function (_) {
      var v = ta(_);
      yf(v, l);
    }),
    l.reset(),
    l.autoplay && l.play(),
    l
  );
}
function Al(e, t) {
  for (var n = t.length; n--; ) Ko(e, t[n].animatable.target) && t.splice(n, 1);
}
function yf(e, t) {
  var n = t.animations,
    s = t.children;
  Al(e, n);
  for (var i = s.length; i--; ) {
    var r = s[i],
      o = r.animations;
    Al(e, o), !o.length && !r.children.length && s.splice(i, 1);
  }
  !n.length && !s.length && t.pause();
}
function Lm(e) {
  for (var t = ta(e), n = he.length; n--; ) {
    var s = he[n];
    yf(t, s);
  }
}
function Im(e, t) {
  t === void 0 && (t = {});
  var n = t.direction || "normal",
    s = t.easing ? Yo(t.easing) : null,
    i = t.grid,
    r = t.axis,
    o = t.from || 0,
    a = o === "first",
    l = o === "center",
    c = o === "last",
    u = Y.arr(e),
    f = parseFloat(u ? e[0] : e),
    h = u ? parseFloat(e[1]) : 0,
    d = Fe(u ? e[1] : e) || 0,
    p = t.start || 0 + (u ? f : 0),
    g = [],
    x = 0;
  return function (b, _, v) {
    if ((a && (o = 0), l && (o = (v - 1) / 2), c && (o = v - 1), !g.length)) {
      for (var C = 0; C < v; C++) {
        if (!i) g.push(Math.abs(o - C));
        else {
          var w = l ? (i[0] - 1) / 2 : o % i[0],
            O = l ? (i[1] - 1) / 2 : Math.floor(o / i[0]),
            k = C % i[0],
            S = Math.floor(C / i[0]),
            R = w - k,
            L = O - S,
            V = Math.sqrt(R * R + L * L);
          r === "x" && (V = -R), r === "y" && (V = -L), g.push(V);
        }
        x = Math.max.apply(Math, g);
      }
      s &&
        (g = g.map(function (W) {
          return s(W / x) * x;
        })),
        n === "reverse" &&
          (g = g.map(function (W) {
            return r ? (W < 0 ? W * -1 : -W) : Math.abs(x - W);
          }));
    }
    var A = u ? (h - f) / x : f;
    return p + A * (Math.round(g[_] * 100) / 100) + d;
  };
}
function Fm(e) {
  e === void 0 && (e = {});
  var t = ut(e);
  return (
    (t.duration = 0),
    (t.add = function (n, s) {
      var i = he.indexOf(t),
        r = t.children;
      i > -1 && he.splice(i, 1);
      function o(h) {
        h.passThrough = !0;
      }
      for (var a = 0; a < r.length; a++) o(r[a]);
      var l = ir(n, io(Uo, e));
      l.targets = l.targets || e.targets;
      var c = t.duration;
      (l.autoplay = !1),
        (l.direction = t.direction),
        (l.timelineOffset = Y.und(s) ? c : Zo(s, c)),
        o(t),
        t.seek(l.timelineOffset);
      var u = ut(l);
      o(u), r.push(u);
      var f = xf(r, e);
      return (
        (t.delay = f.delay),
        (t.endDelay = f.endDelay),
        (t.duration = f.duration),
        t.seek(0),
        t.reset(),
        t.autoplay && t.play(),
        t
      );
    }),
    t
  );
}
ut.version = "3.2.1";
ut.speed = 1;
ut.suspendWhenDocumentHidden = !0;
ut.running = he;
ut.remove = Lm;
ut.get = Go;
ut.set = bf;
ut.convertPx = Xo;
ut.path = Mm;
ut.setDashoffset = Cm;
ut.stagger = Im;
ut.timeline = Fm;
ut.easing = Yo;
ut.penner = af;
ut.random = function (e, t) {
  return Math.floor(Math.random() * (t - e + 1)) + e;
};
const ln = (e, t) => {
    const n = e.__vccOpts || e;
    for (const [s, i] of t) n[s] = i;
    return n;
  },
  Bm = {
    __name: "App",
    setup(e) {
      Xi(() => {
        const n = document.querySelector(".body");
        for (let s = 0; s < 100; s++) {
          const i = document.createElement("div");
          i.classList.add("block"), n.appendChild(i);
        }
      });
      const t = () => {
        setInterval(
          ut({
            targets: ".block",
            translateX: function () {
              return ut.random(-700, 700);
            },
            translateY: function () {
              return ut.random(-500, 500);
            },
            scale: function () {
              return ut.random(1, 5);
            },
            easing: "linear",
            duration: 4e3,
            delay: ut.stagger(10),
          }),
          4e3
        ),
          ut({
            targets: ".block",
            translateX: function () {
              return ut.random(-700, 700);
            },
            translateY: function () {
              return ut.random(-500, 500);
            },
            scale: function () {
              return ut.random(1, 5);
            },
            easing: "linear",
            duration: 4e3,
            delay: ut.stagger(10),
          });
      };
      return (
        $o(),
        (n, s) => (
          Dt(),
          Yt(
            "div",
            {
              class: "body px-10 mx-auto overflow-hidden min-h-",
              onMouseenter: t,
            },
            [
              St(Mt(ef), null, {
                default: On(({ Component: i }) => [
                  St(
                    Ws,
                    { name: "fade", appear: "" },
                    { default: On(() => [(Dt(), Un(Ud(i)))]), _: 2 },
                    1024
                  ),
                ]),
                _: 1,
              }),
            ],
            32
          )
        )
      );
    },
  },
  zm = ln(Bm, [["__scopeId", "data-v-da76d87d"]]),
  Fs = [
    {
      id: 1,
      img: " /src/assets/images/math.png",
      name: "ریاضی",
      questions: [
        {
          id: 1,
          text: "عدد 7633 با تقریب کمتر از  .......... برابر 7000 است",
          options: [
            { id: 1, label: "الف", text: "10", isCorrect: !1 },
            { id: 2, label: "ب", text: "100", isCorrect: !1 },
            { id: 3, label: "ج", text: "1000", isCorrect: !0 },
            { id: 4, label: "د", text: "100000", isCorrect: !1 },
          ],
        },
        {
          id: 2,
          text: "حاصل عبارت 27-27*2-1",
          options: [
            { id: 1, label: "الف", text: "-60", isCorrect: !1 },
            { id: 2, label: "ب", text: "-70", isCorrect: !1 },
            { id: 3, label: "ج", text: "-80", isCorrect: !0 },
            { id: 4, label: "د", text: "70", isCorrect: !1 },
          ],
        },
        {
          id: 3,
          text: "برای اندازه گیری مساحت استان ها از چه واحد اندازه گیری استفاده می شود ؟",
          options: [
            { id: 1, label: "الف", text: "کیلومتر", isCorrect: !1 },
            { id: 2, label: "ب", text: "کیلومتر مربع", isCorrect: !0 },
            { id: 3, label: "ج", text: "متر", isCorrect: !1 },
            { id: 4, label: "د", text: "متر مربع", isCorrect: !1 },
          ],
        },
        {
          id: 4,
          text: "عبارت x^2 - 4x + 3 را به شکل (x - a)(x - b) بنویسید.",
          options: [
            { label: "الف", text: "(x - 1)(x + 3)", isCorrect: !1 },
            { label: "ب", text: "(x - 1)(x - 3)", isCorrect: !1 },
            { label: "ج", text: "(x - 2)(x - 1)", isCorrect: !0 },
            { label: "د", text: "(x + 2)(x - 1)", isCorrect: !1 },
          ],
        },
        {
          id: 5,
          text: "یک دایره با مرکز در مبدا و شعاع ۳ را در نظر بگیرید. معادله این دایره چیست؟",
          options: [
            { label: "الف", text: "x^2 + y^2 = 9", isCorrect: !0 },
            { label: "ب", text: "x^2 + y^2 = 6", isCorrect: !1 },
            { label: "ج", text: "x^2 + y^2 = 12", isCorrect: !1 },
            { label: "د", text: "x^2 + y^2 = 4", isCorrect: !1 },
          ],
        },
        {
          id: 6,
          text: "فرمول عمومی جمع اعداد طبیعی از ۱ تا n چیست؟",
          options: [
            { label: "الف", text: "n(n+1)", isCorrect: !0 },
            { label: "ب", text: "n/2 (n+1)", isCorrect: !1 },
            { label: "ج", text: "n(n-1)/2", isCorrect: !1 },
            { label: "د", text: "(n+1)^2", isCorrect: !1 },
          ],
        },
        {
          id: 7,
          text: "یک مربع با محیط ۸ سانتی‌متر داده شده است. مساحت این مربع چند سانتی‌متر مربع است؟",
          options: [
            { label: "الف", text: "۱۶ سانتی‌متر مربع", isCorrect: !1 },
            { label: "ب", text: "۴ سانتی‌متر مربع", isCorrect: !0 },
            { label: "ج", text: "۸ سانتی‌متر مربع", isCorrect: !1 },
            { label: "د", text: "20 سانتی متر مربع", isCorrect: !1 },
          ],
        },
        {
          id: 8,
          text: "اگر امروز فردا بود الان چند شنبه بود ؟",
          options: [
            { label: "الف", text: "دوشنبه", isCorrect: !1 },
            { label: "ب", text: "یک شنبه", isCorrect: !0 },
            { label: "ج", text: "چهارشنبه", isCorrect: !1 },
            { label: "د", text: "جمعه", isCorrect: !1 },
          ],
        },
        {
          text: "در چند حالت مختلف، ۳ راه متفاوت برای جابجایی یک شیء از نقطه A به نقطه B وجود دارد؟",
          id: 9,
          options: [
            { text: "۱", label: "الف", isCorrect: !1 },
            { text: "۲", label: "ب", isCorrect: !1 },
            { text: "۳", label: "ج", isCorrect: !0 },
            { text: "۴", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "مجموع اعداد فرد کوچک‌تر از ۱۰۰ چقدر است؟",
          id: 10,
          options: [
            { text: "۲۴۵۰", label: "الف", isCorrect: !0 },
            { text: "۲۴۶۰", label: "ب", isCorrect: !1 },
            { text: "۲۴۷۰", label: "ج", isCorrect: !1 },
            { text: "۲۴۸۰", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "اگر ۲۰٪ از یک عدد، ۲۰ باشد، آن عدد چیست؟",
          id: 11,
          options: [
            { text: "۵", label: "الف", isCorrect: !1 },
            { text: "۲۰", label: "ب", isCorrect: !0 },
            { text: "۱۰۰", label: "ج", isCorrect: !1 },
            { text: "۱۰", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "اگر یک مثلث قائم‌الزاویه، مساحت ۲۰ و فرضیه او را ۵ باشد، طول دیگر ضلع چقدر است؟",
          id: 12,
          options: [
            { text: "۴", label: "الف", isCorrect: !1 },
            { text: "۵", label: "ب", isCorrect: !1 },
            { text: "۶", label: "ج", isCorrect: !0 },
            { text: "۷", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "معکوس عدد ۱۲۵ چیست؟",
          id: 13,
          options: [
            { text: "۰.۰۸", label: "الف", isCorrect: !1 },
            { text: "۰.۰۰۸", label: "ب", isCorrect: !1 },
            { text: "۰.۰۰۰۸", label: "ج", isCorrect: !0 },
            { text: "۰.۰۰۰۰۸", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "اگر ۲ نفر از ۱۰ نفر در یک کلاس، دختر باشند، چند نفر پسر در کلاس هستند؟",
          id: 14,
          options: [
            { text: "۴", label: "الف", isCorrect: !1 },
            { text: "۶", label: "ب", isCorrect: !0 },
            { text: "۸", label: "ج", isCorrect: !1 },
            { text: "۱۰", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "اگر عدد ۶۰۰ را بر ۵۰ تقسیم کنیم، چند باقی‌مانده داریم؟",
          id: 15,
          options: [
            { text: "۰", label: "الف", isCorrect: !0 },
            { text: "۱", label: "ب", isCorrect: !1 },
            { text: "۲", label: "ج", isCorrect: !1 },
            { text: "۳", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "اگر معکوس عدد ۳۰۰۰۰ ۰.۰۰۰۰۰۱ باشد، آن عدد چقدر است؟",
          id: 16,
          options: [
            { text: "۳۰۰۰", label: "الف", isCorrect: !1 },
            { text: "۳۰۰۰۰۰", label: "ب", isCorrect: !1 },
            { text: "۳۰۰۰۰۰۰", label: "ج", isCorrect: !0 },
            { text: "۳۰۰۰۰۰۰۰", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "اگر معادل سینوسی یک زاویه برابر با ۰.۶ باشد، آن زاویه چقدر است؟",
          id: 17,
          options: [
            { text: "۳۶", label: "الف", isCorrect: !1 },
            { text: "۴۵", label: "ب", isCorrect: !1 },
            { text: "۵۳", label: "ج", isCorrect: !0 },
            { text: "۶۰", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "در چه سالی ۸۰۰۰ روز پس از سال جاری خواهد بود؟",
          id: 18,
          options: [
            { text: "۲۰۴۳", label: "الف", isCorrect: !1 },
            { text: "۲۰۴۴", label: "ب", isCorrect: !0 },
            { text: "۲۰۴۵", label: "ج", isCorrect: !1 },
            { text: "۲۰۴۶", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "اگر عدد ۱۲۰ را بر ۸ تقسیم کنیم، چند باقی‌مانده داریم؟",
          id: 19,
          options: [
            { text: "۰", label: "الف", isCorrect: !1 },
            { text: "۱", label: "ب", isCorrect: !1 },
            { text: "۲", label: "ج", isCorrect: !0 },
            { text: "۳", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "معادل سینوسی زاویه ۶۰ درجه چقدر است؟",
          id: 20,
          options: [
            { text: "۰.۵", label: "الف", isCorrect: !1 },
            { text: "۰.۸", label: "ب", isCorrect: !0 },
            { text: "۱", label: "ج", isCorrect: !1 },
            { text: "۲", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "اگر ۲۰٪ از یک عدد، ۱۰ باشد، آن عدد چیست؟",
          id: 21,
          options: [
            { text: "۵", label: "الف", isCorrect: !1 },
            { text: "۵۰", label: "ب", isCorrect: !0 },
            { text: "۱۰۰", label: "ج", isCorrect: !1 },
            { text: "۲۰۰", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "اگر عدد ۱۲۰ را بر ۸ تقسیم کنیم، چند باقی‌مانده داریم؟",
          id: 22,
          options: [
            { text: "۰", label: "الف", isCorrect: !1 },
            { text: "۱", label: "ب", isCorrect: !1 },
            { text: "۲", label: "ج", isCorrect: !0 },
            { text: "۳", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "اگر یک مثلث قائم‌الزاویه، مساحت ۲۰ و فرضیه او را ۵ باشد، طول دیگر ضلع چقدر است؟",
          id: 23,
          options: [
            { text: "۴", label: "الف", isCorrect: !1 },
            { text: "۵", label: "ب", isCorrect: !1 },
            { text: "۶", label: "ج", isCorrect: !0 },
            { text: "۷", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "اگر یک مربع دارای محیط ۸۰ سانتی‌متر است، طول هر ضلع آن چقدر است؟",
          id: 24,
          options: [
            { text: "۲۰ سانتی‌متر", label: "الف", isCorrect: !0 },
            { text: "۲۴ سانتی‌متر", label: "ب", isCorrect: !1 },
            { text: "۳۲ سانتی‌متر", label: "ج", isCorrect: !1 },
            { text: "۳۶ سانتی‌متر", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "اگر عددی در بازه ۱ تا ۱۰۰، به صورت تصادفی انتخاب شود، احتمال این‌که آن عدد بخش‌پذیر بر ۴ باشد چقدر است؟",
          id: 25,
          options: [
            { text: "۲۵ درصد", label: "الف", isCorrect: !0 },
            { text: "۳۳ درصد", label: "ب", isCorrect: !1 },
            { text: "۵۰ درصد", label: "ج", isCorrect: !1 },
            { text: "۷۵ درصد", label: "د", isCorrect: !1 },
          ],
        },
      ],
    },
    {
      id: 2,
      img: "/src/assets/images/biology.png",
      name: "زیست",
      questions: [
        {
          text: "کدام یک از دستگاه‌های زیر مربوط به تنفس در وسعت موجودات است؟",
          id: 12,
          options: [
            { text: "دستگاه تنفس داخلی", label: "الف", isCorrect: !0 },
            { text: "دستگاه تنفس خارجی", label: "ب", isCorrect: !1 },
            { text: "دستگاه تنفس بدون ریه", label: "ج", isCorrect: !1 },
            { text: "همه موارد فوق", label: "د", isCorrect: !1 },
          ],
        },
        {
          id: 2,
          text: "زیست شناسان برای استفاده موثر تر از سلولز در گیاهان از همه مواد زیر استفاده می کنند به جز :",
          options: [
            {
              id: 1,
              label: "الف",
              text: "مهندسی کردن ژن های گیاهان برای رشد بیشتر با آب کمتر",
              isCorrect: !1,
            },
            {
              id: 2,
              label: "ب",
              text: "فراهم کردن آنزیم های مهندسی شده برای تولید بهتر سلولز",
              isCorrect: !0,
            },
            {
              id: 3,
              label: "ج",
              text: "مهندسی کردن ژن های گیاهان برای رشد بیشتر با انرژی کمتر",
              isCorrect: !1,
            },
            {
              id: 4,
              label: "د",
              text: "انتخاب مصنوعی گیاهان که مقدار بیشتر سلولز تولید می کنند",
              isCorrect: !1,
            },
          ],
        },
        {
          id: 3,
          text: "همه موارد زیر در مولکول دنا صدق می کند ، به جز ............",
          options: [
            {
              id: 1,
              label: "الف",
              text: "با استفاده از آن هویت انسان ها به آسانی مشخص می شود .",
              isCorrect: !1,
            },
            {
              id: 2,
              label: "ب",
              text: "با بررسی ژن های آن می توان بیماری احتمالی فرد در آینده را مشخص کرد.",
              isCorrect: !1,
            },
            {
              id: 3,
              label: "ج",
              text: "الگو های رشد و نمو در همه موجودات توسط آن تنظیم شده است .",
              isCorrect: !1,
            },
            {
              id: 4,
              label: "د",
              text: "در همه سطوح گسترده حیات نقش تنظیم کننده دارد .",
              isCorrect: !0,
            },
          ],
        },
        {
          id: 4,
          text: "در هر جانور دارای چیندان قطعا",
          options: [
            {
              id: 1,
              label: "الف",
              text: "گردش خون بسته دیده می شود",
              isCorrect: !1,
            },
            {
              id: 2,
              label: "ب",
              text: "قلب بیش از دو حفره وجود دارد",
              isCorrect: !1,
            },
            {
              id: 3,
              label: "ج",
              text: "در سامانه دفعی مثانه دیده میشود",
              isCorrect: !1,
            },
            {
              id: 4,
              label: "د",
              text: "لوله گوارش شکل گرفته است .",
              isCorrect: !0,
            },
          ],
        },
        {
          id: 5,
          text: "در چه بخشی از چشم نور به عصب بینایی منتقل می شود؟",
          options: [
            { id: 1, text: "عدسی", label: "الف", isCorrect: !1 },
            { id: 2, text: "قرنیه", label: "ب", isCorrect: !0 },
            { id: 3, text: "چشمچه", label: "ج", isCorrect: !1 },
            { id: 4, text: "تاریکی نخاعی", label: "د", isCorrect: !1 },
          ],
        },
        {
          id: 6,
          text: "کدامیک از عضلات زیر اندامی بدن ما بزرگترین حجم را دارد؟",
          options: [
            { id: 1, text: "عضلات ران", label: "الف", isCorrect: !0 },
            { id: 2, text: "عضلات شکمی", label: "ب", isCorrect: !1 },
            { id: 3, text: "عضلات بازو", label: "ج", isCorrect: !1 },
            { id: 4, text: "عضلات پشتی", label: "د", isCorrect: !1 },
          ],
        },
        {
          id: 7,
          text: "در چه فازی از دوره سلولی میتوانیم خلاف جهت DNA را تشخیص دهیم؟",
          options: [
            { id: 1, text: "فاز G1", label: "الف", isCorrect: !1 },
            { id: 2, text: "فاز S", label: "ب", isCorrect: !1 },
            { id: 3, text: "فاز G2", label: "ج", isCorrect: !1 },
            { id: 4, text: "فاز M", label: "د", isCorrect: !0 },
          ],
        },
        {
          text: "چه نوع چرخه‌ای در طبیعت و در مورد عوامل محیطی تنظیم شده است؟",
          id: 8,
          options: [
            { text: "چرخه آب", label: "الف", isCorrect: !1 },
            { text: "چرخه کربن", label: "ب", isCorrect: !0 },
            { text: "چرخه نیتروژن", label: "ج", isCorrect: !1 },
            { text: "چرخه فسفر", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "در چه بخش از سلول عملکرد ژنومی صورت می‌گیرد؟",
          id: 9,
          options: [
            { text: "کروماتین", label: "الف", isCorrect: !0 },
            { text: "میتوکندری", label: "ب", isCorrect: !1 },
            { text: "ریبوزوم", label: "ج", isCorrect: !1 },
            { text: "پوشش سلولی", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام عامل محیطی موجب تنظیم فعالیت ژن‌ها در سلول می‌شود؟",
          id: 10,
          options: [
            { text: "سیگنال‌های نوری", label: "الف", isCorrect: !1 },
            { text: "سیگنال‌های صوتی", label: "ب", isCorrect: !1 },
            { text: "سیگنال‌های شیمیایی", label: "ج", isCorrect: !0 },
            { text: "سیگنال‌های حرارتی", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "چه نوع رنگدانه‌ای در گیاهان برای جذب نور استفاده می‌شود؟",
          id: 11,
          options: [
            { text: "کلروفیل", label: "الف", isCorrect: !0 },
            { text: "آنتوسیانین", label: "ب", isCorrect: !1 },
            { text: "کاروتنوئیدها", label: "ج", isCorrect: !1 },
            { text: "فلاونوئیدها", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "در چه بخش از دستگاه گوارش غذا به صورت مایع شده و به اثرات دستگاه گوارش ادامه می‌دهد؟",
          id: 12,
          options: [
            { text: "معده", label: "الف", isCorrect: !0 },
            { text: "روده بزرگ", label: "ب", isCorrect: !1 },
            { text: "روده کوچک", label: "ج", isCorrect: !1 },
            { text: "مری", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "از چه عضویتی سیستم ایمنی بدن برای محافظت از بدن در برابر عفونت‌ها و بیماری‌ها استفاده می‌کند؟",
          id: 13,
          options: [
            { text: "سلول‌های سفید خون", label: "الف", isCorrect: !0 },
            { text: "سلول‌های قرمز خون", label: "ب", isCorrect: !1 },
            { text: "سلول‌های عضلانی", label: "ج", isCorrect: !1 },
            { text: "سلول‌های سرطانی", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "چه نوع انرژی در مراحل تکمیلی گل‌ها به دست می‌آید؟",
          id: 14,
          options: [
            { text: "انرژی نوری", label: "الف", isCorrect: !1 },
            { text: "انرژی حرارتی", label: "ب", isCorrect: !1 },
            { text: "انرژی شیمیایی", label: "ج", isCorrect: !0 },
            { text: "انرژی جنبشی", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام یک از مراحل دوره زیستی یک گل است؟",
          id: 15,
          options: [
            { text: "بذر", label: "الف", isCorrect: !1 },
            { text: "فلورش", label: "ب", isCorrect: !1 },
            { text: "گل مادر", label: "ج", isCorrect: !1 },
            { text: "گل پدر", label: "د", isCorrect: !0 },
          ],
        },
        {
          text: "کدام یک از عوامل زیر موجب ایجاد تغییرات در کروموزوم‌ها می‌شود؟",
          id: 16,
          options: [
            { text: "تغییرات در شرایط محیطی", label: "الف", isCorrect: !1 },
            { text: "تغییرات در شرایط غذایی", label: "ب", isCorrect: !1 },
            { text: "عوامل موروثی", label: "ج", isCorrect: !0 },
            { text: "تمرینات ورزشی", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "در کدام دستگاه بدن، هورمون‌های تیروئید ترشح می‌شوند؟",
          id: 17,
          options: [
            { text: "دستگاه تنفسی", label: "الف", isCorrect: !1 },
            { text: "دستگاه اندوکرین", label: "ب", isCorrect: !0 },
            { text: "دستگاه گوارش", label: "ج", isCorrect: !1 },
            { text: "دستگاه قلب و عروق", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "در کدام مرحله از تکثیر گیاهان، انقسام سلولی و تکثیر سلول‌های بی‌جنسی رخ می‌دهد؟",
          id: 18,
          options: [
            { text: "تکثیر موجب‌توکی", label: "الف", isCorrect: !1 },
            { text: "تکثیر جنسی", label: "ب", isCorrect: !1 },
            { text: "تکثیر بدون جنسی", label: "ج", isCorrect: !0 },
            { text: "همه موارد فوق", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "در کدام بخش از سلول انرژی نوری به انرژی شیمیایی تبدیل می‌شود؟",
          id: 19,
          options: [
            { text: "هسته", label: "الف", isCorrect: !1 },
            { text: "میتوکندری", label: "ب", isCorrect: !1 },
            { text: "کلروپلاست", label: "ج", isCorrect: !0 },
            { text: "ریبوزوم", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام یک از مراحل زیر در فرآیند تبدیل گل به میوه صحیح نیست؟",
          id: 20,
          options: [
            { text: "آپوزیس", label: "الف", isCorrect: !0 },
            { text: "فرازنشست", label: "ب", isCorrect: !1 },
            { text: "پوسته‌زدگی", label: "ج", isCorrect: !1 },
            { text: "افزایش اندام‌ها", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام یک از عوامل زیر موجب تغییرات ژنتیکی در گیاهان می‌شود؟",
          id: 21,
          options: [
            { text: "تغییرات محیطی", label: "الف", isCorrect: !1 },
            { text: "تغییرات غذایی", label: "ب", isCorrect: !1 },
            { text: "تغییرات در شرایط نورپیوندی", label: "ج", isCorrect: !0 },
            { text: "تغییرات در شرایط نیتروژن", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام یک از دستگاه‌های زیر در بدن انسان برای حفظ تعادل اسیدی- بازی نقش دارد؟",
          id: 22,
          options: [
            { text: "دستگاه عصبی", label: "الف", isCorrect: !1 },
            { text: "دستگاه گوارش", label: "ب", isCorrect: !1 },
            { text: "دستگاه تنفسی", label: "ج", isCorrect: !1 },
            { text: "دستگاه ادراری", label: "د", isCorrect: !0 },
          ],
        },
        {
          text: "کدام یک از عوامل زیر در موجب تحریک بیشتر سلولی می‌شود؟",
          id: 23,
          options: [
            { text: "هورمون‌ها", label: "الف", isCorrect: !0 },
            { text: "محیط محیطی", label: "ب", isCorrect: !1 },
            { text: "نور", label: "ج", isCorrect: !1 },
            { text: "صدا", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "در کدام جنس از میکروارگانیسم‌ها، ایمنی جامع به دست می‌آید؟",
          id: 24,
          options: [
            { text: "قارچ‌ها", label: "الف", isCorrect: !1 },
            { text: "ویروس‌ها", label: "ب", isCorrect: !1 },
            { text: "باکتری‌ها", label: "ج", isCorrect: !1 },
            { text: "پروتوزوآ ها", label: "د", isCorrect: !0 },
          ],
        },
        {
          text: "در کدام گونه ارتعاشات کمیاب در گوش انسان قابل شنیدن هستند؟",
          id: 25,
          options: [
            { text: "زیر ۲۰ هرتز", label: "الف", isCorrect: !1 },
            { text: "بالای ۲۰۰۰ هرتز", label: "ب", isCorrect: !1 },
            { text: "بین ۲۰ تا ۲۰۰۰ هرتز", label: "ج", isCorrect: !0 },
            {
              text: "هیچ گونه ارتعاشی در گوش انسان قابل شنیدن نیست",
              label: "د",
              isCorrect: !1,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      img: " /src/assets/images/chemistry.png",
      name: "شیمی",
      questions: [
        {
          id: 1,
          text: "کدام یک از گزینه های زیر نادرست است ؟",
          options: [
            {
              id: 1,
              label: "الف",
              text: "دقت ترازوی زرگری یکصدم گرم است",
              isCorrect: !1,
            },
            {
              id: 2,
              label: "ب",
              text: "عناصر یک ستون در جدول تناوبی خواص شمیایی یکسان دارند",
              isCorrect: !0,
            },
            {
              id: 3,
              label: "ج",
              text: "نیلز بور با مدل اتمی خود توانست طیف نشری-خطی عناصر را توضیح دهد",
              isCorrect: !1,
            },
            {
              id: 4,
              label: "د",
              text: "کلر دارای 2 ایزوتوپ با عدد های جرمی 35 و 37 است",
              isCorrect: !1,
            },
          ],
        },
        {
          id: 2,
          text: "کدام یک از گزینه های زیر جزو فراورده های سوختن ذغال سنگ نیست ؟",
          options: [
            { id: 1, label: "الف", text: "CO2", isCorrect: !1 },
            { id: 2, label: "ب", text: "CO", isCorrect: !1 },
            { id: 3, label: "ج", text: "H2O", isCorrect: !1 },
            { id: 4, label: "د", text: "SO3", isCorrect: !0 },
          ],
        },
        {
          id: 3,
          text: "تعداد خطوط مرئی در طیف نشری-خطی لیتیم با عنصر ...........برابر است و عنصر .............بیشترین خط را در گستره مرئی نسبت به سایر گزینه ها دارد .",
          options: [
            { id: 1, label: "الف", text: "هیدروژن - هلیوم", isCorrect: !1 },
            { id: 2, label: "ب", text: "هیدروژن - نئون", isCorrect: !0 },
            { id: 3, label: "ج", text: "هلیم - نئون", isCorrect: !1 },
            { id: 4, label: "د", text: "هلیوم - نئون", isCorrect: !1 },
          ],
        },
        {
          text: "یکی از خواص فیزیکی یون‌ها نسبت به اتم‌ها چیست؟",
          id: 4,
          options: [
            { text: "اندازه کوچک‌تر", label: "الف", isCorrect: !1 },
            { text: "انرژی یونیزاسیون بیشتر", label: "ب", isCorrect: !0 },
            { text: "رادیوس کوچک‌تر", label: "ج", isCorrect: !1 },
            { text: "شارژ بیشتر", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "از دو عنصر H و F، کدام عنصر دارای بیشترین انرژی الکترونیگی است؟",
          id: 5,
          options: [
            { text: "H", label: "الف", isCorrect: !0 },
            { text: "F", label: "ب", isCorrect: !1 },
            {
              text: "هر دو عنصر دارای انرژی الکترونیگی برابر هستند.",
              label: "ج",
              isCorrect: !1,
            },
            {
              text: "هر دو عنصر دارای انرژی الکترونیگی برابر نیستند.",
              label: "د",
              isCorrect: !1,
            },
          ],
        },
        {
          text: "در یک آزمایش شیمیایی، ۰.۲۰۰ مول از یک ترکیب X با فرمول شیمیایی C4H6O4 به دست آمد. اگر جرم مولی این ترکیب برابر با ۱۱۰٫۰ گرم بر مول باشد، جرم تقریبی ترکیب X برابر با چند گرم است؟",
          id: 6,
          options: [
            { text: "۲۲ گرم", label: "الف", isCorrect: !0 },
            { text: "۴۴ گرم", label: "ب", isCorrect: !1 },
            { text: "۶۶ گرم", label: "ج", isCorrect: !1 },
            { text: "۸۸ گرم", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "در یک آزمایش شیمیایی، برای تولید ۲۰۰ گرم از یک ترکیب با فرمول شیمیایی C3H8O نیاز است ۴۱۶٫۲۸ گرم از ترکیب C2H5OH به همراه مقدار کافی آب استفاده شود. گزینه صحیح در مورد این ترکیب چیست؟",
          id: 7,
          options: [
            {
              text: "ترکیب C3H8O جزء‌هایی از ترکیب C2H5OH و آب است.",
              label: "الف",
              isCorrect: !1,
            },
            {
              text: "ترکیب C3H8O ترکیبی متفاوت با ترکیب C2H5OH و آب است.",
              label: "ب",
              isCorrect: !0,
            },
            {
              text: "ترکیب C3H8O یکی از موادی است که در آزمایش بکار رفته است.",
              label: "ج",
              isCorrect: !1,
            },
            {
              text: "ترکیب C3H8O یکی از نوع‌های ترکیب C2H5OH است.",
              label: "د",
              isCorrect: !1,
            },
          ],
        },
        {
          text: "کدام یک از موارد زیر، نماینده انحلال‌پذیری یک ترکیب است؟",
          id: 8,
          options: [
            {
              text: "ترکیبی که با آب مخلوط می‌شود و به شکل یکپارچه در هم محلول نمی‌شود.",
              label: "الف",
              isCorrect: !0,
            },
            {
              text: "ترکیبی که با آب مخلوط می‌شود و به شکل یکپارچه در هم محلول می‌شود.",
              label: "ب",
              isCorrect: !1,
            },
            {
              text: "ترکیبی که با گرمای زیاد از حالت جامد به حالت مایع تبدیل می‌شود.",
              label: "ج",
              isCorrect: !1,
            },
            {
              text: "ترکیبی که با گرمای زیاد از حالت مایع به حالت گاز تبدیل می‌شود.",
              label: "د",
              isCorrect: !1,
            },
          ],
        },
        {
          text: "ماده‌ای که با فرمول شیمیایی CH2O مشخص می‌شود، چه ماده‌ای است؟",
          id: 9,
          options: [
            { text: "فرمالین", label: "الف", isCorrect: !0 },
            { text: "استات", label: "ب", isCorrect: !1 },
            { text: "استات اتیل", label: "ج", isCorrect: !1 },
            { text: "استات بوتیل", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "در یک آزمایش شیمیایی، ۲۰۰ میلی‌لیتر از یک محلول آبی شامل ۰٫۰۱ مول یون‌هیدروژن سولفات (H2SO4) با غلظت مولاریته ۰٫۲۰۰ مول بر لیتر را از دستگاه برج‌های خنک کننده عبور داده می‌شود. اگر این محلول به دستگاه با pH = ۳ درجه وارد شود، تقریبا تعداد چند مول یون هیدروکسید (OH-) در آن وجود دارد؟",
          id: 10,
          options: [
            { text: "۵٫۵ × ۱۰-۹ مول", label: "الف", isCorrect: !1 },
            { text: "۲٫۲ × ۱۰-۹ مول", label: "ب", isCorrect: !0 },
            { text: "۱٫۱ × ۱۰-۹ مول", label: "ج", isCorrect: !1 },
            { text: "۴٫۴ × ۱۰-۹ مول", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "بزرگترین دیوارهای محافظ سلولی کدام گروه از ترکیبات شیمیایی را تشکیل می‌دهند؟",
          id: 11,
          options: [
            { text: "پروتئین", label: "الف", isCorrect: !1 },
            { text: "لیپید", label: "ب", isCorrect: !0 },
            { text: "کربوهیدرات", label: "ج", isCorrect: !1 },
            { text: "اسید نوکلئیک", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام یک از این گازها در جوی زمین بیشترین میزان دارد؟",
          id: 12,
          options: [
            { text: "نیتروژن", label: "الف", isCorrect: !0 },
            { text: "اکسیژن", label: "ب", isCorrect: !1 },
            { text: "آرگون", label: "ج", isCorrect: !1 },
            { text: "دی اکسید کربن", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "محل شیمیایی تجمع الکترون‌ها در یک اتم به نام چیست؟",
          id: 13,
          options: [
            { text: "میدان مغناطیسی", label: "الف", isCorrect: !1 },
            { text: "میدان الکتریکی", label: "ب", isCorrect: !1 },
            { text: "میدان گرادیان", label: "ج", isCorrect: !1 },
            { text: "میدان الکترواستاتیکی", label: "د", isCorrect: !0 },
          ],
        },
        {
          text: "کدام یک از این عناصر فلزی است؟",
          id: 14,
          options: [
            { text: "نیتروژن", label: "الف", isCorrect: !1 },
            { text: "کربن", label: "ب", isCorrect: !1 },
            { text: "کلر", label: "ج", isCorrect: !1 },
            { text: "سدیم", label: "د", isCorrect: !0 },
          ],
        },
        {
          text: "عنصری که در جدول تناوبی در دوره چهارم و گروه ۱۶ قرار دارد، چه نوع ماده‌ای است؟",
          id: 15,
          options: [
            { text: "فلز", label: "الف", isCorrect: !1 },
            { text: "نیمه فلز", label: "ب", isCorrect: !1 },
            { text: "غیرفلز", label: "ج", isCorrect: !0 },
            { text: "همه موارد", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "بزرگترین گروه غذایی که اکثر اسیدهای آمینه آن دارای گروه آمین هستند، کدام است؟",
          id: 16,
          options: [
            { text: "لیپیدها", label: "الف", isCorrect: !1 },
            { text: "کربوهیدرات‌ها", label: "ب", isCorrect: !1 },
            { text: "ویتامین‌ها", label: "ج", isCorrect: !1 },
            { text: "پروتئین‌ها", label: "د", isCorrect: !0 },
          ],
        },
        {
          text: "تعداد اتم‌های هیدروژن در یک مول از آمونیاک چند عدد است؟",
          id: 17,
          options: [
            { text: "۱ N", label: "الف", isCorrect: !1 },
            { text: "۳ N", label: "ب", isCorrect: !0 },
            { text: "۴ N", label: "ج", isCorrect: !1 },
            { text: "۶ N", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام یک از این ترکیبات شیمیایی برای صنعت پتروشیمی مهم است؟",
          id: 18,
          options: [
            { text: "اکسیژن", label: "الف", isCorrect: !1 },
            { text: "نیتروژن", label: "ب", isCorrect: !1 },
            { text: "آمونیاک", label: "ج", isCorrect: !0 },
            { text: "همه موارد", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام یک از این گازها در جوی زمین بیشترین کمیت دارد؟",
          id: 19,
          options: [
            { text: "اکسیژن", label: "الف", isCorrect: !1 },
            { text: "نیتروژن", label: "ب", isCorrect: !0 },
            { text: "آرگون", label: "ج", isCorrect: !1 },
            { text: "دی اکسید کربن", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "ترکیب موجود در دستگاه گوارش انسان که باعث بوجودآمدن اسیدهای آمینه مختلف می‌شود، کدام است؟",
          id: 20,
          options: [
            { text: "پروتئین", label: "الف", isCorrect: !0 },
            { text: "لیپید", label: "ب", isCorrect: !1 },
            { text: "کربوهیدرات", label: "ج", isCorrect: !1 },
            { text: "اسید نوکلئیک", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "اصطلاحی که برای توصیف آن استفاده می‌شود که دو ترکیب شیمیایی با هم تعامل می‌کنند و باعث تغییر در ویژگی‌ها و خواص آن‌ها می‌شوند، چیست؟",
          id: 21,
          options: [
            { text: "مولکولاریته", label: "الف", isCorrect: !1 },
            {
              text: "اصطلاحی که برای توصیف این موضوع استفاده نمی‌شود",
              label: "ب",
              isCorrect: !1,
            },
            { text: "ترکیب شیمیایی", label: "ج", isCorrect: !1 },
            { text: "واکنش شیمیایی", label: "د", isCorrect: !0 },
          ],
        },
        {
          text: "عدد اتمی چند عنصر شیمیایی در دوره‌ی سوم جدول تناوبی برابر با ۱۱ است؟",
          id: 22,
          options: [
            { text: "9", label: "الف", isCorrect: !1 },
            { text: "10", label: "ب", isCorrect: !1 },
            { text: "11", label: "ج", isCorrect: !0 },
            { text: "12", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "عنصر شیمیایی کلر در کدام گروه قرار دارد؟",
          id: 23,
          options: [
            { text: "گروه ۱۸", label: "الف", isCorrect: !1 },
            { text: "گروه ۱۷", label: "ب", isCorrect: !0 },
            { text: "گروه ۱۶", label: "ج", isCorrect: !1 },
            { text: "گروه ۱۵", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "در یک نمونه‌ی خاکستری، چه عنصری بیشترین مقدار را دارد؟",
          id: 24,
          options: [
            { text: "سیلیسیم", label: "الف", isCorrect: !1 },
            { text: "آلومینیوم", label: "ب", isCorrect: !1 },
            { text: "آهن", label: "ج", isCorrect: !0 },
            { text: "کلسیم", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "عنصر شیمیایی گروه ۲ جدول تناوبی چه نامی دارد؟",
          id: 25,
          options: [
            { text: "هلیم", label: "الف", isCorrect: !1 },
            { text: "لیتیم", label: "ب", isCorrect: !1 },
            { text: "بروم", label: "ج", isCorrect: !1 },
            { text: "باریم", label: "د", isCorrect: !0 },
          ],
        },
      ],
    },
    {
      id: 4,
      img: " /src/assets/images/adabiat.jfif",
      name: "ادبیات",
      questions: [
        {
          id: 1,
          text: "کدام یک از گزینه های زیر مترادف کلمه ویژگی ها می باشد ؟",
          options: [
            { id: 1, label: "الف", text: "خصایل", isCorrect: !0 },
            { id: 2, label: "ب", text: "مصائب", isCorrect: !1 },
            { id: 3, label: "ج", text: "متعالی", isCorrect: !1 },
            { id: 4, label: "د", text: "محاورت", isCorrect: !1 },
          ],
        },
        {
          id: 2,
          text: "شعر کودک از جنس نارنجک از سروده ها کیست ؟",
          options: [
            { id: 1, label: "الف", text: "حمید سبزواری", isCorrect: !1 },
            { id: 2, label: "ب", text: "عباس یمینی شریف", isCorrect: !1 },
            { id: 3, label: "ج", text: "محمد دهزیزی", isCorrect: !0 },
            { id: 4, label: "د", text: "مهدی اخوان ثالث", isCorrect: !1 },
          ],
        },
        {
          id: 3,
          text: "حافظ در چه قرنی میزیسته است و لقب او چه بوده است ؟",
          options: [
            { id: 1, label: "الف", text: "قرن 8 - لسان الغیب", isCorrect: !1 },
            { id: 2, label: "ب", text: "قرن 6 - خواجه شیرازی", isCorrect: !1 },
            { id: 3, label: "ج", text: "قرن 9 -خواجه شیرازی", isCorrect: !1 },
            { id: 4, label: "د", text: "قرن 8 - لسان الغیب", isCorrect: !0 },
          ],
        },
        {
          text: "نام کدام شاعر برای دفاع از بیت مشهور خود در مقابل انتقادات به دادگاه رفته است؟",
          id: 4,
          options: [
            { text: "فردوسی", label: "الف", isCorrect: !1 },
            { text: "خیام", label: "ب", isCorrect: !0 },
            { text: "رودکی", label: "ج", isCorrect: !1 },
            { text: "حافظ", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام شاعر ایرانی به «شاعر عشق» مشهور است؟",
          id: 5,
          options: [
            { text: "رودکی", label: "الف", isCorrect: !1 },
            { text: "عطار", label: "ب", isCorrect: !0 },
            { text: "فردوسی", label: "ج", isCorrect: !1 },
            { text: "حافظ", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام یک از این شاعران ایرانی، شاعری از دوره قاجار است؟",
          id: 6,
          options: [
            { text: "سعدی", label: "الف", isCorrect: !1 },
            { text: "حافظ", label: "ب", isCorrect: !1 },
            { text: "ملاصدرا", label: "ج", isCorrect: !1 },
            { text: "حسین گل‌گون", label: "د", isCorrect: !0 },
          ],
        },
        {
          text: "کدام شعرا به «شاعر نظامی» معروف هستند؟",
          id: 7,
          options: [
            { text: "فردوسی و حافظ", label: "الف", isCorrect: !1 },
            { text: "خیام و رودکی", label: "ب", isCorrect: !1 },
            { text: "سعدی و فرخی", label: "ج", isCorrect: !0 },
            { text: "سهراب سپهری و فروغ فرخزاد", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام شاعر ایرانی به «شاعر شاملو» مشهور است؟",
          id: 8,
          options: [
            { text: "فروغ فرخزاد", label: "الف", isCorrect: !1 },
            { text: "احمد شاملو", label: "ب", isCorrect: !0 },
            { text: "مولوی", label: "ج", isCorrect: !1 },
            { text: "فردوسی", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "در کدام اثر «سعدی» به اندیشه‌ی سیاسی پرداخته است؟",
          id: 9,
          options: [
            { text: "گلستان", label: "الف", isCorrect: !1 },
            { text: "بوستان", label: "ب", isCorrect: !1 },
            { text: "مجلسی عشاق", label: "ج", isCorrect: !0 },
            { text: "دیوان حافظ", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام شاعر ایرانی به «شاعر ملی» مشهور است؟",
          id: 10,
          options: [
            { text: "فردوسی", label: "الف", isCorrect: !0 },
            { text: "رودکی", label: "ب", isCorrect: !1 },
            { text: "حافظ", label: "ج", isCorrect: !1 },
            { text: "خیام", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "در کدام شعر «فروغ فرخزاد» از موضوعات زندگی شخصی خود صحبت شده است؟",
          id: 11,
          options: [
            { text: "آشیانه‌ی زندگی", label: "الف", isCorrect: !0 },
            { text: "آینه‌های بغض", label: "ب", isCorrect: !1 },
            { text: "بهار و تابستان", label: "ج", isCorrect: !1 },
            { text: "افسانه‌های تلخ", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "در کدام شعر «سهراب سپهری» به تصویری کردن طبیعت پرداخته است؟",
          id: 12,
          options: [
            { text: "آب", label: "الف", isCorrect: !1 },
            { text: "آرامش", label: "ب", isCorrect: !1 },
            { text: "آسمان‌های آبی", label: "ج", isCorrect: !0 },
            { text: "آتش", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "شخصیت اصلی داستان «مردی که با خودش گفتگو می‌کرد» از کدام کشور بود؟",
          id: 13,
          options: [
            { text: "آمریکا", label: "الف", isCorrect: !0 },
            { text: "انگلستان", label: "ب", isCorrect: !1 },
            { text: "فرانسه", label: "ج", isCorrect: !1 },
            { text: "روسیه", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام یک از این کتاب‌ها اثر «نیما یوشیج» نیست؟",
          id: 14,
          options: [
            { text: "زمستان در آینه‌ها", label: "الف", isCorrect: !1 },
            { text: "مرغ سحر", label: "ب", isCorrect: !1 },
            { text: "آفتاب‌های غربی", label: "ج", isCorrect: !1 },
            { text: "دیوان حافظ", label: "د", isCorrect: !0 },
          ],
        },
        {
          text: "در کدام شعر «فردوسی» از افراد نام برده شده‌اند که به طور قهرمانانه در جنگ‌ها شرکت کرده‌اند؟",
          id: 15,
          options: [
            { text: "شاهنامه", label: "الف", isCorrect: !0 },
            { text: "دیوان", label: "ب", isCorrect: !1 },
            { text: "منطق الطیر", label: "ج", isCorrect: !1 },
            { text: "گلستان", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام یک از این شاعران ایرانی، شاعری از دوره قاجار است؟",
          id: 16,
          options: [
            { text: "سعدی", label: "الف", isCorrect: !1 },
            { text: "حافظ", label: "ب", isCorrect: !1 },
            { text: "ملاصدرا", label: "ج", isCorrect: !1 },
            { text: "علی‌اکبر دهخدا", label: "د", isCorrect: !0 },
          ],
        },
        {
          text: "کدام شاعر ایرانی به «شاعر روستاییان» مشهور است؟",
          id: 17,
          options: [
            { text: "سعدی", label: "الف", isCorrect: !1 },
            { text: "حافظ", label: "ب", isCorrect: !1 },
            { text: "مولوی", label: "ج", isCorrect: !1 },
            { text: "علامه اقبال لاهوری", label: "د", isCorrect: !0 },
          ],
        },
        {
          text: "در کدام اثر «سعدی» ماجرای «شیخ صفی‌الدین اردویل» روایت شده است؟",
          id: 18,
          options: [
            { text: "گلستان", label: "الف", isCorrect: !0 },
            { text: "بوستان", label: "ب", isCorrect: !1 },
            { text: "دیوان", label: "ج", isCorrect: !1 },
            { text: "غزلیات", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "در کدام اثر «حافظ» شعری با عنوان «خواجه شمس‌الدین محمد همتی» وجود دارد؟",
          id: 19,
          options: [
            { text: "غزلیات", label: "الف", isCorrect: !0 },
            { text: "رباعیات", label: "ب", isCorrect: !1 },
            { text: "دیوان", label: "ج", isCorrect: !1 },
            { text: "تذکره الاولیا", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "در کدام رمان «توفیق الهی» به تصویر کشیده شده است؟",
          id: 20,
          options: [
            { text: "گرگ و میش", label: "الف", isCorrect: !1 },
            { text: "مرداب", label: "ب", isCorrect: !1 },
            { text: "دیوارهای بادی", label: "ج", isCorrect: !0 },
            { text: "خانه پدری", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: `نام شاعر دو بیت زیر را بنویسید:

آتش در کوی تو بر آبم
تا کی ای نیمه شب شبنم؟`,
          id: 21,
          options: [
            { text: "سعدی", label: "الف", isCorrect: !0 },
            { text: "حافظ", label: "ب", isCorrect: !1 },
            { text: "مولوی", label: "ج", isCorrect: !1 },
            { text: "فیض کاشانی", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: `نام شاعر زیر را بنویسید:

چشم انتظار راه دور که باشد
مرا عجب باز نمی‌آورد نور که باشد

`,
          id: 22,
          options: [
            { text: "فرید الدین عطار", label: "الف", isCorrect: !1 },
            { text: "حافظ", label: "ب", isCorrect: !0 },
            { text: "رودکی", label: "ج", isCorrect: !1 },
            { text: "عمر خیام", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: `نام شاعر زیر را بنویسید:

بی تو کی باشد درماندگان راهی
تویی که دل هر مستمندی برآید

`,
          id: 23,
          options: [
            { text: "حافظ", label: "الف", isCorrect: !1 },
            { text: "سعدی", label: "ب", isCorrect: !1 },
            { text: "فیض کاشانی", label: "ج", isCorrect: !0 },
            { text: "مولوی", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: `نام شاعر زیر را بنویسید:

هر که صدای عشقش برآید
ز آفتاب رخش برافروزد

`,
          id: 24,
          options: [
            { text: "حافظ", label: "الف", isCorrect: !1 },
            { text: "رودکی", label: "ب", isCorrect: !1 },
            { text: "مولوی", label: "ج", isCorrect: !0 },
            { text: "عطار", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: `نام شاعر زیر را بنویسید:

همه‌ی دنیا چون زندانی است
و مردم چون زندانبانانش

`,
          id: 25,
          options: [
            { text: "فروغ فرخزاد", label: "الف", isCorrect: !1 },
            { text: "علی اکبر سعدی", label: "ب", isCorrect: !1 },
            { text: "احمد شاملو", label: "ج", isCorrect: !0 },
            { text: "نیما یوشیج", label: "د", isCorrect: !1 },
          ],
        },
      ],
    },
    {
      id: 5,
      img: " /src/assets/images/dini.jfif",
      name: "دینی",
      questions: [
        {
          id: 1,
          text: "چرا در مسیر وصول به نعمات الهی، لزوماً هر راهی، کارایی لازم را ندارد و کدام عبارت مبین صدق این حقیقت است؟",
          options: [
            {
              id: 1,
              label: "الف",
              text: "زندگی دینی تنها شیوه قابل اعتمادي است که مقابل هر انسان خردمند قرار دارد - هدف بزرگ با یک زندگی بدون برنامه سازگار نیست. ",
              isCorrect: !1,
            },
            {
              id: 2,
              label: "ب",
              text: "زندگی دینی تنها شیوه قابل اعتمادي است که مقابل هر انسان خردمند قرار دارد - لازمۀ سعادت انسان، عمل به احکام الهی است.",
              isCorrect: !1,
            },
            {
              id: 3,
              label: "ج",
              text: "میان نعمت هاي الهی و باید ها و نباید هاي دین ارتباط و هماهنگی برقرار است - هدف بزرگ با یک زندگی بدون برنامه سازگار نیست. ",
              isCorrect: !0,
            },
            {
              id: 4,
              label: "د",
              text: "میان نعمت هاي الهی و باید ها و نباید هاي دین ارتباط و هماهنگی برقرار است - لازمۀ سعادت انسان، عمل به احکام الهی است.",
              isCorrect: !1,
            },
          ],
        },
        {
          id: 2,
          text: "اگر با ژرف اندیشی به هستی نظر کنیم، کدام یک از موارد زیر می تواند استباط دقیق تري دربارة انسان و سایر مخلوقات باشد؟",
          options: [
            {
              id: 1,
              label: "الف",
              text: "ایستادگی در برابر موانع بیرونی تنها امتیاز انسان نبوده بلکه او قادر به ایستادگی در برابر موانع درونی هم هست.",
              isCorrect: !1,
            },
            {
              id: 2,
              label: "ب",
              text: "ستم روا داشتن به خود که به معناي پیروي از نفس اماره و سرپیچی از فرمان خداست، نوعی انقلاب علیه خویش است.",
              isCorrect: !0,
            },
            {
              id: 3,
              label: "ج",
              text: "تنها انسان هاي توبه کار هستند که قادرند بر علیه خویش انقلاب کرده و خود را از ظلم نفس نجات دهند. ",
              isCorrect: !1,
            },
            {
              id: 4,
              label: "د",
              text: "ایستادگی در برابر موانع درونی همان انقلاب علیه خویش است که از ظرفیت بالاي انسان نسبت به سایر مخلوقات حکایت می کند.",
              isCorrect: !1,
            },
          ],
        },
        {
          id: 3,
          text: "این که خدا آب را متناسب با ویژگی هایی خلق کرده و ما اختیار بهره گیري از آب را داریم، به ترتیب بیان کدام گزینه است؟",
          options: [
            { id: 1, label: "الف", text: "قضا - قضا", isCorrect: !1 },
            { id: 2, label: "ب", text: "قدر - قضا", isCorrect: !1 },
            { id: 3, label: "ج", text: "قضا - قدر", isCorrect: !0 },
            { id: 4, label: "د", text: "قدر - قدر", isCorrect: !1 },
          ],
        },
        {
          text: "در چه سوره‌ای از قرآن کریم آمده است: «وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِلْعَالَمِینَ»؟",
          id: 4,
          options: [
            { text: "سوره مبارکه مائده", label: "الف", isCorrect: !1 },
            { text: "سوره مبارکه الفاتحه", label: "ب", isCorrect: !1 },
            { text: "سوره مبارکه الأنبياء", label: "ج", isCorrect: !1 },
            { text: "سوره مبارکه الأعراف", label: "د", isCorrect: !0 },
          ],
        },
        {
          text: "کدام یک از این انبیا در قرآن کریم ذکر شده است؟",
          id: 5,
          options: [
            { text: "یوسف (ع)", label: "الف", isCorrect: !0 },
            { text: "نوح (ع)", label: "ب", isCorrect: !1 },
            { text: "موسی (ع)", label: "ج", isCorrect: !1 },
            { text: "عیسی (ع)", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "چه کسی اولین شخصی بود که در اسلام به معرفی خداوند پرداخت؟",
          id: 6,
          options: [
            {
              text: "امیرالمؤمنین علی بن ابی‌طالب (ع)",
              label: "الف",
              isCorrect: !1,
            },
            { text: "جبرئیل (ع)", label: "ب", isCorrect: !0 },
            { text: "خدیجه (س)", label: "ج", isCorrect: !1 },
            { text: "حضرت محمد (ص)", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "در کدام سوره قرآن کریم آیه «وَاللَّهُ خَيْرُ الرَّازِقِينَ» آمده است؟",
          id: 7,
          options: [
            { text: "سوره بقره", label: "الف", isCorrect: !1 },
            { text: "سوره العنکبوت", label: "ب", isCorrect: !1 },
            { text: "سوره الحجرات", label: "ج", isCorrect: !1 },
            { text: "سوره سبأ", label: "د", isCorrect: !0 },
          ],
        },
        {
          text: "کدام یک از این موارد در اسلام مستحب است؟",
          id: 8,
          options: [
            { text: "صدقه دادن به نیازمندان", label: "الف", isCorrect: !0 },
            { text: "نوشیدنی الکلی مصرف کردن", label: "ب", isCorrect: !1 },
            {
              text: "استفاده از خودروی شخصی برای رفت و آمد",
              label: "ج",
              isCorrect: !1,
            },
            {
              text: "نماز خواندن بعد از طلوع آفتاب",
              label: "د",
              isCorrect: !0,
            },
          ],
        },
        {
          text: "کدام یک از این انبیا در قرآن کریم به عنوان «خاتم‌النبیین» یاد شده است؟",
          id: 9,
          options: [
            { text: "موسی (ع)", label: "الف", isCorrect: !1 },
            { text: "نوح (ع)", label: "ب", isCorrect: !1 },
            { text: "عیسی (ع)", label: "ج", isCorrect: !1 },
            { text: "حضرت محمد (ص)", label: "د", isCorrect: !0 },
          ],
        },
        {
          text: "کدام یک از این روزها در اسلام محرم نام دارد؟",
          id: 10,
          options: [
            { text: "یکشنبه", label: "الف", isCorrect: !1 },
            { text: "سه‌شنبه", label: "ب", isCorrect: !1 },
            { text: "چهارشنبه", label: "ج", isCorrect: !1 },
            { text: "عاشورا", label: "د", isCorrect: !0 },
          ],
        },
        {
          text: "کدام یک از این موارد در مباحث شرعی به معنای «تعهد» و «عقد» است؟",
          id: 11,
          options: [
            { text: "نکاح", label: "الف", isCorrect: !0 },
            { text: "طلاق", label: "ب", isCorrect: !1 },
            { text: "عتق اسیر", label: "ج", isCorrect: !1 },
            { text: "مهریه", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "در کدام سوره قرآن کریم آیه «بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِیمِ» آمده است؟",
          id: 12,
          options: [
            { text: "سوره النور", label: "الف", isCorrect: !1 },
            { text: "سوره المائدة", label: "ب", isCorrect: !1 },
            { text: "سوره الفاتحه", label: "ج", isCorrect: !0 },
            { text: "سوره الأعراف", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام یک از این سوره‌ها در قرآن کریم به عنوان «قلب القرآن» شناخته می‌شود؟",
          id: 13,
          options: [
            { text: "سوره مبارکه یس", label: "الف", isCorrect: !1 },
            { text: "سوره مبارکه حمد", label: "ب", isCorrect: !1 },
            { text: "سوره مبارکه واقعه", label: "ج", isCorrect: !0 },
            { text: "سوره مبارکه مائده", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام یک از این موارد در اسلام مکروه است؟",
          id: 14,
          options: [
            { text: "نماز خواندن به موقع", label: "الف", isCorrect: !1 },
            { text: "مصرف میگو و خرچنگ", label: "ب", isCorrect: !0 },
            { text: "جهاد در راه خدا", label: "ج", isCorrect: !1 },
            { text: "خدمت به والدین", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام یک از این موارد در اسلام مستحب نیست؟",
          id: 15,
          options: [
            { text: "دعا کردن در شب قدر", label: "الف", isCorrect: !1 },
            { text: "جستجوی علم و دانش", label: "ب", isCorrect: !1 },
            { text: "سفر به مکه برای حج", label: "ج", isCorrect: !0 },
            { text: "صدقه دادن به نیازمندان", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "چه کسی سوره «الإخلاص» را نازل کرد؟",
          id: 16,
          options: [
            { text: "حضرت محمد (ص)", label: "الف", isCorrect: !0 },
            { text: "حضرت علی (ع)", label: "ب", isCorrect: !1 },
            { text: "حضرت جبرئیل (ع)", label: "ج", isCorrect: !1 },
            { text: "حضرت موسی (ع)", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام یک از این سوره‌ها در قرآن کریم به عنوان «سوره صف» شناخته می‌شود؟",
          id: 17,
          options: [
            { text: "سوره مبارکه مائده", label: "الف", isCorrect: !1 },
            { text: "سوره مبارکه یونس", label: "ب", isCorrect: !1 },
            { text: "سوره مبارکه قصص", label: "ج", isCorrect: !1 },
            { text: "سوره مبارکه صف", label: "د", isCorrect: !0 },
          ],
        },
        {
          text: "کدام یک از این موارد در اسلام حرام است؟",
          id: 18,
          options: [
            { text: "پرورش و مصرف سگ", label: "الف", isCorrect: !0 },
            { text: "پرداختن به حقوق مالیاتی", label: "ب", isCorrect: !1 },
            { text: "مصرف میوه‌های ترش", label: "ج", isCorrect: !1 },
            { text: "احترام به حقوق بشر", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام یک از این موارد در اسلام مکروه است؟",
          id: 19,
          options: [
            {
              text: "پوشیدن لباس‌های خاص در مراسمات دینی",
              label: "الف",
              isCorrect: !0,
            },
            {
              text: "درمان بیماری‌ها با داروهای مجاز",
              label: "ب",
              isCorrect: !1,
            },
            { text: "پرورش کرم ابریشم", label: "ج", isCorrect: !1 },
            { text: "حضور در مساجد برای نماز", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام یک از این سوره‌ها در قرآن کریم به عنوان «سوره رحمان» شناخته می‌شود؟",
          id: 20,
          options: [
            { text: "سوره مبارکه بقره", label: "الف", isCorrect: !1 },
            { text: "سوره مبارکه ملک", label: "ب", isCorrect: !1 },
            { text: "سوره مبارکه رحمان", label: "ج", isCorrect: !0 },
            { text: "سوره مبارکه نحل", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام یک از این موارد در اسلام واجب است؟",
          id: 21,
          options: [
            { text: "پرداختن به حقوق مالیاتی", label: "الف", isCorrect: !1 },
            { text: "پرورش و مراقبت از خانواده", label: "ب", isCorrect: !0 },
            { text: "انجام مسابقات ورزشی", label: "ج", isCorrect: !1 },
            { text: "مراجعه به مکه برای زیارت حج", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "کدام یک از این سوره‌ها در قرآن کریم به عنوان «سوره مبارکه بلد» شناخته می‌شود؟",
          id: 22,
          options: [
            { text: "سوره مبارکه فاتحه", label: "الف", isCorrect: !1 },
            { text: "سوره مبارکه نصر", label: "ب", isCorrect: !1 },
            { text: "سوره مبارکه تین", label: "ج", isCorrect: !1 },
            { text: "سوره مبارکه بلد", label: "د", isCorrect: !0 },
          ],
        },
        {
          text: "در چه شهری محل تولد پیامبر اسلام(ص) قرار دارد؟",
          id: 23,
          options: [
            { text: "مدینه", label: "الف", isCorrect: !1 },
            { text: "مکه", label: "ب", isCorrect: !0 },
            { text: "کربلا", label: "ج", isCorrect: !1 },
            { text: "شام", label: "د", isCorrect: !1 },
          ],
        },
        {
          text: "نام کتاب مقدس اسلام که به پیامبر اسلام(ص) نازل شده است چیست؟",
          id: 24,
          options: [
            { text: "تورات", label: "الف", isCorrect: !1 },
            { text: "زبور", label: "ب", isCorrect: !1 },
            { text: "انجیل", label: "ج", isCorrect: !1 },
            { text: "قرآن", label: "د", isCorrect: !0 },
          ],
        },
        {
          text: "در کدام روز از ماه رمضان، شب‌های قدر به وجود می‌آیند؟",
          id: 25,
          options: [
            { text: "۱۷م", label: "الف", isCorrect: !1 },
            { text: "۱۹م", label: "ب", isCorrect: !1 },
            { text: "۲۱م", label: "ج", isCorrect: !1 },
            { text: "۲۳م", label: "د", isCorrect: !0 },
          ],
        },
      ],
    },
  ];
const Nm = { class: "image" },
  Hm = ["src"],
  jm = { class: "card-text" },
  Vm = {
    __name: "Card",
    props: ["quiz"],
    setup(e) {
      const { quiz: t } = e,
        n = nf(),
        s = () => {
          n.push(`/costomize/${t.id}`);
        };
      return (i, r) => (
        Dt(),
        Yt("div", { class: "card", onClick: r[0] || (r[0] = (o) => s()) }, [
          it("div", Nm, [
            it(
              "img",
              { src: e.quiz.img, alt: "123", class: "image" },
              null,
              8,
              Hm
            ),
          ]),
          it("div", jm, [
            it("h2", null, Ge(e.quiz.name), 1),
            it("p", null, "تعداد سوالات : " + Ge(e.quiz.questions.length), 1),
          ]),
        ])
      );
    },
  },
  Wm = ln(Vm, [["__scopeId", "data-v-baf7ac73"]]);
const $m = (e) => (Io("data-v-1ca05224"), (e = e()), Fo(), e),
  Um = { class: "header" },
  Ym = $m(() => it("h1", null, "آزمون", -1)),
  Km = { class: "options-container" },
  qm = {
    __name: "quizesView",
    setup(e) {
      const t = oe(Fs),
        n = oe("");
      en(n, () => {
        t.value = Fs.filter((r) =>
          r.name.toLowerCase().includes(n.value.toLowerCase())
        );
      });
      const s = (r) => {
          ut({ targets: r, scale: 1.05, duration: 500 });
        },
        i = (r) => {
          ut({ targets: r, scale: 1, duration: 500 });
        };
      return (r, o) => (
        Dt(),
        Yt(
          Ut,
          null,
          [
            it("div", Um, [
              Ym,
              $r(
                it(
                  "input",
                  {
                    type: "text",
                    "onUpdate:modelValue":
                      o[0] || (o[0] = (a) => (n.value = a)),
                  },
                  null,
                  512
                ),
                [[Nu, n.value]]
              ),
            ]),
            it("div", Km, [
              (Dt(!0),
              Yt(
                Ut,
                null,
                Ur(
                  t.value,
                  (a, l) => (
                    Dt(),
                    Un(
                      Wm,
                      {
                        key: a.id,
                        quiz: a,
                        onMouseenter: (c) => s(`.card-${l}`),
                        onMouseleave: (c) => i(`.card-${l}`),
                        class: Fi(`card-${l}`),
                      },
                      null,
                      8,
                      ["quiz", "onMouseenter", "onMouseleave", "class"]
                    )
                  )
                ),
                128
              )),
            ]),
          ],
          64
        )
      );
    },
  },
  Xm = ln(qm, [["__scopeId", "data-v-1ca05224"]]),
  vf = $s("time", () => {
    const e = oe(0);
    function t() {
      e.value++;
    }
    function n() {
      e.value = 0;
    }
    return { value: e, increment: t, reset: n };
  }),
  rr = $s("currentQuestion", () => {
    const e = oe(0);
    function t() {
      e.value++;
    }
    return { value: e, increment: t };
  }),
  ea = $s("correctQuestions", () => {
    const e = oe(0);
    function t() {
      e.value++;
    }
    return { value: e, increment: t };
  }),
  Us = $s("numberOfQuestions", () => ({ value: oe(1) })),
  na = $s("notAnsweredQuestions", () => {
    const e = oe(0);
    function t() {
      e.value++;
    }
    return { value: e, increment: t };
  });
const Qm = { key: 0 },
  Gm = { class: "question-container" },
  Zm = { class: "question" },
  Jm = { class: "option-container" },
  tb = ["onClick"],
  eb = { class: "option-label" },
  nb = { class: "option-value" },
  sb = {
    __name: "Question",
    setup(e) {
      const t = vf(),
        n = rr(),
        s = ea(),
        i = Us(),
        r = $o(),
        o = parseInt(r.params.id),
        a = Fs.find((f) => f.id === o);
      function l(f, h) {
        let d = new Set();
        for (; d.size < h; ) {
          let p = Math.floor(Math.random() * f.length),
            g = f[p];
          d.add(g);
        }
        return Array.from(d);
      }
      const c = l(a.questions, i.value);
      console.log(c);
      const u = (f) => {
        n.increment(), (t.value = 0), f && s.increment();
      };
      return (f, h) => (
        Dt(!0),
        Yt(
          Ut,
          null,
          Ur(
            Mt(c),
            (d, p) => (
              Dt(),
              Yt("div", { key: d.id }, [
                St(
                  Ws,
                  { name: "fade", mode: "out-in", appear: "" },
                  {
                    default: On(() => [
                      p === Mt(n).value
                        ? (Dt(),
                          Yt("div", Qm, [
                            it("div", Gm, [it("h1", Zm, Ge(d.text), 1)]),
                            it("div", Jm, [
                              (Dt(!0),
                              Yt(
                                Ut,
                                null,
                                Ur(
                                  d.options,
                                  (g) => (
                                    Dt(),
                                    Yt(
                                      "div",
                                      {
                                        class: "option",
                                        key: g.id,
                                        onClick: (x) => u(g.isCorrect),
                                      },
                                      [
                                        it("p", eb, Ge(g.label), 1),
                                        it("div", nb, [
                                          it("p", null, Ge(g.text), 1),
                                        ]),
                                      ],
                                      8,
                                      tb
                                    )
                                  )
                                ),
                                128
                              )),
                            ]),
                          ]))
                        : dp("", !0),
                    ]),
                    _: 2,
                  },
                  1024
                ),
              ])
            )
          ),
          128
        )
      );
    },
  },
  ib = ln(sb, [["__scopeId", "data-v-6089f555"]]);
const rb = (e) => (Io("data-v-5e947adc"), (e = e()), Fo(), e),
  ob = { class: "header" },
  ab = { class: "progress-question-bar" },
  lb = { class: "text-red-700" },
  cb = { class: "bar" },
  ub = { class: "progress-timer-bar" },
  fb = rb(() => it("h4", null, "زمان باقی مانده", -1)),
  hb = { class: "bar" },
  db = {
    __name: "quizHeader",
    setup(e) {
      const t = na(),
        n = rr(),
        s = vf(),
        i = Us(),
        r = setInterval(() => {
          s.increment(),
            s.value === 240 &&
              (s.reset(), n.value < i.value && (n.value++, t.value++)),
            n.value === i.value && (clearInterval(r), s.reset());
        }, 50);
      return (o, a) => (
        Dt(),
        Yt("header", ob, [
          it("div", ab, [
            it("h4", lb, "سوال " + Ge(Mt(n).value) + "/" + Ge(Mt(i).value), 1),
            it("div", cb, [
              it(
                "div",
                {
                  class: "question-completion",
                  style: Os({ width: `${(Mt(n).value * 100) / Mt(i).value}%` }),
                },
                null,
                4
              ),
            ]),
          ]),
          it("div", ub, [
            fb,
            it("div", hb, [
              it(
                "div",
                {
                  class: "time-completion",
                  style: Os({
                    width: `${(Mt(s).value * 100) / 240}%`,
                    backgroundColor: `hsl( ${
                      120 - Mt(s).value / 2
                    }, 100%, 50%)`,
                  }),
                },
                null,
                4
              ),
            ]),
          ]),
        ])
      );
    },
  },
  pb = ln(db, [["__scopeId", "data-v-5e947adc"]]);
const gb = {},
  mb = { class: "back-button", role: "button" };
function bb(e, t) {
  return Dt(), Yt("button", mb, "بازگشت");
}
const xb = ln(gb, [["render", bb]]);
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ function Te() {}
const _b = (function () {
  let e = 0;
  return function () {
    return e++;
  };
})();
function ht(e) {
  return e === null || typeof e > "u";
}
function Ct(e) {
  if (Array.isArray && Array.isArray(e)) return !0;
  const t = Object.prototype.toString.call(e);
  return t.slice(0, 7) === "[object" && t.slice(-6) === "Array]";
}
function ft(e) {
  return e !== null && Object.prototype.toString.call(e) === "[object Object]";
}
const zt = (e) => (typeof e == "number" || e instanceof Number) && isFinite(+e);
function ne(e, t) {
  return zt(e) ? e : t;
}
function nt(e, t) {
  return typeof e > "u" ? t : e;
}
const yb = (e, t) =>
    typeof e == "string" && e.endsWith("%") ? parseFloat(e) / 100 : e / t,
  Cf = (e, t) =>
    typeof e == "string" && e.endsWith("%") ? (parseFloat(e) / 100) * t : +e;
function xt(e, t, n) {
  if (e && typeof e.call == "function") return e.apply(n, t);
}
function pt(e, t, n, s) {
  let i, r, o;
  if (Ct(e))
    if (((r = e.length), s)) for (i = r - 1; i >= 0; i--) t.call(n, e[i], i);
    else for (i = 0; i < r; i++) t.call(n, e[i], i);
  else if (ft(e))
    for (o = Object.keys(e), r = o.length, i = 0; i < r; i++)
      t.call(n, e[o[i]], o[i]);
}
function Pi(e, t) {
  let n, s, i, r;
  if (!e || !t || e.length !== t.length) return !1;
  for (n = 0, s = e.length; n < s; ++n)
    if (
      ((i = e[n]),
      (r = t[n]),
      i.datasetIndex !== r.datasetIndex || i.index !== r.index)
    )
      return !1;
  return !0;
}
function Oi(e) {
  if (Ct(e)) return e.map(Oi);
  if (ft(e)) {
    const t = Object.create(null),
      n = Object.keys(e),
      s = n.length;
    let i = 0;
    for (; i < s; ++i) t[n[i]] = Oi(e[n[i]]);
    return t;
  }
  return e;
}
function wf(e) {
  return ["__proto__", "prototype", "constructor"].indexOf(e) === -1;
}
function vb(e, t, n, s) {
  if (!wf(e)) return;
  const i = t[e],
    r = n[e];
  ft(i) && ft(r) ? Bs(i, r, s) : (t[e] = Oi(r));
}
function Bs(e, t, n) {
  const s = Ct(t) ? t : [t],
    i = s.length;
  if (!ft(e)) return e;
  n = n || {};
  const r = n.merger || vb;
  for (let o = 0; o < i; ++o) {
    if (((t = s[o]), !ft(t))) continue;
    const a = Object.keys(t);
    for (let l = 0, c = a.length; l < c; ++l) r(a[l], e, t, n);
  }
  return e;
}
function ws(e, t) {
  return Bs(e, t, { merger: Cb });
}
function Cb(e, t, n) {
  if (!wf(e)) return;
  const s = t[e],
    i = n[e];
  ft(s) && ft(i)
    ? ws(s, i)
    : Object.prototype.hasOwnProperty.call(t, e) || (t[e] = Oi(i));
}
const Tl = { "": (e) => e, x: (e) => e.x, y: (e) => e.y };
function on(e, t) {
  return (Tl[t] || (Tl[t] = wb(t)))(e);
}
function wb(e) {
  const t = Mb(e);
  return (n) => {
    for (const s of t) {
      if (s === "") break;
      n = n && n[s];
    }
    return n;
  };
}
function Mb(e) {
  const t = e.split("."),
    n = [];
  let s = "";
  for (const i of t)
    (s += i),
      s.endsWith("\\") ? (s = s.slice(0, -1) + ".") : (n.push(s), (s = ""));
  return n;
}
function sa(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const ae = (e) => typeof e < "u",
  an = (e) => typeof e == "function",
  Rl = (e, t) => {
    if (e.size !== t.size) return !1;
    for (const n of e) if (!t.has(n)) return !1;
    return !0;
  };
function Sb(e) {
  return e.type === "mouseup" || e.type === "click" || e.type === "contextmenu";
}
const Pt = Math.PI,
  mt = 2 * Pt,
  kb = mt + Pt,
  Ei = Number.POSITIVE_INFINITY,
  Pb = Pt / 180,
  kt = Pt / 2,
  ls = Pt / 4,
  Dl = (Pt * 2) / 3,
  se = Math.log10,
  Pe = Math.sign;
function Ll(e) {
  const t = Math.round(e);
  e = Ms(e, t, e / 1e3) ? t : e;
  const n = Math.pow(10, Math.floor(se(e))),
    s = e / n;
  return (s <= 1 ? 1 : s <= 2 ? 2 : s <= 5 ? 5 : 10) * n;
}
function Ob(e) {
  const t = [],
    n = Math.sqrt(e);
  let s;
  for (s = 1; s < n; s++) e % s === 0 && (t.push(s), t.push(e / s));
  return n === (n | 0) && t.push(n), t.sort((i, r) => i - r).pop(), t;
}
function Xn(e) {
  return !isNaN(parseFloat(e)) && isFinite(e);
}
function Ms(e, t, n) {
  return Math.abs(e - t) < n;
}
function Eb(e, t) {
  const n = Math.round(e);
  return n - t <= e && n + t >= e;
}
function Mf(e, t, n) {
  let s, i, r;
  for (s = 0, i = e.length; s < i; s++)
    (r = e[s][n]),
      isNaN(r) || ((t.min = Math.min(t.min, r)), (t.max = Math.max(t.max, r)));
}
function pe(e) {
  return e * (Pt / 180);
}
function ia(e) {
  return e * (180 / Pt);
}
function Il(e) {
  if (!zt(e)) return;
  let t = 1,
    n = 0;
  for (; Math.round(e * t) / t !== e; ) (t *= 10), n++;
  return n;
}
function Sf(e, t) {
  const n = t.x - e.x,
    s = t.y - e.y,
    i = Math.sqrt(n * n + s * s);
  let r = Math.atan2(s, n);
  return r < -0.5 * Pt && (r += mt), { angle: r, distance: i };
}
function oo(e, t) {
  return Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2));
}
function Ab(e, t) {
  return ((e - t + kb) % mt) - Pt;
}
function ue(e) {
  return ((e % mt) + mt) % mt;
}
function zs(e, t, n, s) {
  const i = ue(e),
    r = ue(t),
    o = ue(n),
    a = ue(r - i),
    l = ue(o - i),
    c = ue(i - r),
    u = ue(i - o);
  return i === r || i === o || (s && r === o) || (a > l && c < u);
}
function jt(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Tb(e) {
  return jt(e, -32768, 32767);
}
function Ke(e, t, n, s = 1e-6) {
  return e >= Math.min(t, n) - s && e <= Math.max(t, n) + s;
}
function ra(e, t, n) {
  n = n || ((o) => e[o] < t);
  let s = e.length - 1,
    i = 0,
    r;
  for (; s - i > 1; ) (r = (i + s) >> 1), n(r) ? (i = r) : (s = r);
  return { lo: i, hi: s };
}
const wn = (e, t, n, s) =>
    ra(e, n, s ? (i) => e[i][t] <= n : (i) => e[i][t] < n),
  Rb = (e, t, n) => ra(e, n, (s) => e[s][t] >= n);
function Db(e, t, n) {
  let s = 0,
    i = e.length;
  for (; s < i && e[s] < t; ) s++;
  for (; i > s && e[i - 1] > n; ) i--;
  return s > 0 || i < e.length ? e.slice(s, i) : e;
}
const kf = ["push", "pop", "shift", "splice", "unshift"];
function Lb(e, t) {
  if (e._chartjs) {
    e._chartjs.listeners.push(t);
    return;
  }
  Object.defineProperty(e, "_chartjs", {
    configurable: !0,
    enumerable: !1,
    value: { listeners: [t] },
  }),
    kf.forEach((n) => {
      const s = "_onData" + sa(n),
        i = e[n];
      Object.defineProperty(e, n, {
        configurable: !0,
        enumerable: !1,
        value(...r) {
          const o = i.apply(this, r);
          return (
            e._chartjs.listeners.forEach((a) => {
              typeof a[s] == "function" && a[s](...r);
            }),
            o
          );
        },
      });
    });
}
function Fl(e, t) {
  const n = e._chartjs;
  if (!n) return;
  const s = n.listeners,
    i = s.indexOf(t);
  i !== -1 && s.splice(i, 1),
    !(s.length > 0) &&
      (kf.forEach((r) => {
        delete e[r];
      }),
      delete e._chartjs);
}
function Pf(e) {
  const t = new Set();
  let n, s;
  for (n = 0, s = e.length; n < s; ++n) t.add(e[n]);
  return t.size === s ? e : Array.from(t);
}
const Of = (function () {
  return typeof window > "u"
    ? function (e) {
        return e();
      }
    : window.requestAnimationFrame;
})();
function Ef(e, t, n) {
  const s = n || ((o) => Array.prototype.slice.call(o));
  let i = !1,
    r = [];
  return function (...o) {
    (r = s(o)),
      i ||
        ((i = !0),
        Of.call(window, () => {
          (i = !1), e.apply(t, r);
        }));
  };
}
function Ib(e, t) {
  let n;
  return function (...s) {
    return (
      t ? (clearTimeout(n), (n = setTimeout(e, t, s))) : e.apply(this, s), t
    );
  };
}
const Af = (e) => (e === "start" ? "left" : e === "end" ? "right" : "center"),
  Qt = (e, t, n) => (e === "start" ? t : e === "end" ? n : (t + n) / 2),
  Fb = (e, t, n, s) =>
    e === (s ? "left" : "right") ? n : e === "center" ? (t + n) / 2 : t;
function Tf(e, t, n) {
  const s = t.length;
  let i = 0,
    r = s;
  if (e._sorted) {
    const { iScale: o, _parsed: a } = e,
      l = o.axis,
      { min: c, max: u, minDefined: f, maxDefined: h } = o.getUserBounds();
    f &&
      (i = jt(
        Math.min(
          wn(a, o.axis, c).lo,
          n ? s : wn(t, l, o.getPixelForValue(c)).lo
        ),
        0,
        s - 1
      )),
      h
        ? (r =
            jt(
              Math.max(
                wn(a, o.axis, u, !0).hi + 1,
                n ? 0 : wn(t, l, o.getPixelForValue(u), !0).hi + 1
              ),
              i,
              s
            ) - i)
        : (r = s - i);
  }
  return { start: i, count: r };
}
function Rf(e) {
  const { xScale: t, yScale: n, _scaleRanges: s } = e,
    i = { xmin: t.min, xmax: t.max, ymin: n.min, ymax: n.max };
  if (!s) return (e._scaleRanges = i), !0;
  const r =
    s.xmin !== t.min ||
    s.xmax !== t.max ||
    s.ymin !== n.min ||
    s.ymax !== n.max;
  return Object.assign(s, i), r;
}
const ni = (e) => e === 0 || e === 1,
  Bl = (e, t, n) =>
    -(Math.pow(2, 10 * (e -= 1)) * Math.sin(((e - t) * mt) / n)),
  zl = (e, t, n) => Math.pow(2, -10 * e) * Math.sin(((e - t) * mt) / n) + 1,
  Ss = {
    linear: (e) => e,
    easeInQuad: (e) => e * e,
    easeOutQuad: (e) => -e * (e - 2),
    easeInOutQuad: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e : -0.5 * (--e * (e - 2) - 1),
    easeInCubic: (e) => e * e * e,
    easeOutCubic: (e) => (e -= 1) * e * e + 1,
    easeInOutCubic: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e : 0.5 * ((e -= 2) * e * e + 2),
    easeInQuart: (e) => e * e * e * e,
    easeOutQuart: (e) => -((e -= 1) * e * e * e - 1),
    easeInOutQuart: (e) =>
      (e /= 0.5) < 1 ? 0.5 * e * e * e * e : -0.5 * ((e -= 2) * e * e * e - 2),
    easeInQuint: (e) => e * e * e * e * e,
    easeOutQuint: (e) => (e -= 1) * e * e * e * e + 1,
    easeInOutQuint: (e) =>
      (e /= 0.5) < 1
        ? 0.5 * e * e * e * e * e
        : 0.5 * ((e -= 2) * e * e * e * e + 2),
    easeInSine: (e) => -Math.cos(e * kt) + 1,
    easeOutSine: (e) => Math.sin(e * kt),
    easeInOutSine: (e) => -0.5 * (Math.cos(Pt * e) - 1),
    easeInExpo: (e) => (e === 0 ? 0 : Math.pow(2, 10 * (e - 1))),
    easeOutExpo: (e) => (e === 1 ? 1 : -Math.pow(2, -10 * e) + 1),
    easeInOutExpo: (e) =>
      ni(e)
        ? e
        : e < 0.5
        ? 0.5 * Math.pow(2, 10 * (e * 2 - 1))
        : 0.5 * (-Math.pow(2, -10 * (e * 2 - 1)) + 2),
    easeInCirc: (e) => (e >= 1 ? e : -(Math.sqrt(1 - e * e) - 1)),
    easeOutCirc: (e) => Math.sqrt(1 - (e -= 1) * e),
    easeInOutCirc: (e) =>
      (e /= 0.5) < 1
        ? -0.5 * (Math.sqrt(1 - e * e) - 1)
        : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1),
    easeInElastic: (e) => (ni(e) ? e : Bl(e, 0.075, 0.3)),
    easeOutElastic: (e) => (ni(e) ? e : zl(e, 0.075, 0.3)),
    easeInOutElastic(e) {
      return ni(e)
        ? e
        : e < 0.5
        ? 0.5 * Bl(e * 2, 0.1125, 0.45)
        : 0.5 + 0.5 * zl(e * 2 - 1, 0.1125, 0.45);
    },
    easeInBack(e) {
      return e * e * ((1.70158 + 1) * e - 1.70158);
    },
    easeOutBack(e) {
      return (e -= 1) * e * ((1.70158 + 1) * e + 1.70158) + 1;
    },
    easeInOutBack(e) {
      let t = 1.70158;
      return (e /= 0.5) < 1
        ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
        : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
    },
    easeInBounce: (e) => 1 - Ss.easeOutBounce(1 - e),
    easeOutBounce(e) {
      return e < 1 / 2.75
        ? 7.5625 * e * e
        : e < 2 / 2.75
        ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
        : e < 2.5 / 2.75
        ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
        : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
    },
    easeInOutBounce: (e) =>
      e < 0.5
        ? Ss.easeInBounce(e * 2) * 0.5
        : Ss.easeOutBounce(e * 2 - 1) * 0.5 + 0.5,
  };
/*!
 * @kurkle/color v0.2.1
 * https://github.com/kurkle/color#readme
 * (c) 2022 Jukka Kurkela
 * Released under the MIT License
 */ function Ys(e) {
  return (e + 0.5) | 0;
}
const qe = (e, t, n) => Math.max(Math.min(e, n), t);
function gs(e) {
  return qe(Ys(e * 2.55), 0, 255);
}
function nn(e) {
  return qe(Ys(e * 255), 0, 255);
}
function Ie(e) {
  return qe(Ys(e / 2.55) / 100, 0, 1);
}
function Nl(e) {
  return qe(Ys(e * 100), 0, 100);
}
const ee = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
    a: 10,
    b: 11,
    c: 12,
    d: 13,
    e: 14,
    f: 15,
  },
  ao = [..."0123456789ABCDEF"],
  Bb = (e) => ao[e & 15],
  zb = (e) => ao[(e & 240) >> 4] + ao[e & 15],
  si = (e) => (e & 240) >> 4 === (e & 15),
  Nb = (e) => si(e.r) && si(e.g) && si(e.b) && si(e.a);
function Hb(e) {
  var t = e.length,
    n;
  return (
    e[0] === "#" &&
      (t === 4 || t === 5
        ? (n = {
            r: 255 & (ee[e[1]] * 17),
            g: 255 & (ee[e[2]] * 17),
            b: 255 & (ee[e[3]] * 17),
            a: t === 5 ? ee[e[4]] * 17 : 255,
          })
        : (t === 7 || t === 9) &&
          (n = {
            r: (ee[e[1]] << 4) | ee[e[2]],
            g: (ee[e[3]] << 4) | ee[e[4]],
            b: (ee[e[5]] << 4) | ee[e[6]],
            a: t === 9 ? (ee[e[7]] << 4) | ee[e[8]] : 255,
          })),
    n
  );
}
const jb = (e, t) => (e < 255 ? t(e) : "");
function Vb(e) {
  var t = Nb(e) ? Bb : zb;
  return e ? "#" + t(e.r) + t(e.g) + t(e.b) + jb(e.a, t) : void 0;
}
const Wb =
  /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
function Df(e, t, n) {
  const s = t * Math.min(n, 1 - n),
    i = (r, o = (r + e / 30) % 12) =>
      n - s * Math.max(Math.min(o - 3, 9 - o, 1), -1);
  return [i(0), i(8), i(4)];
}
function $b(e, t, n) {
  const s = (i, r = (i + e / 60) % 6) =>
    n - n * t * Math.max(Math.min(r, 4 - r, 1), 0);
  return [s(5), s(3), s(1)];
}
function Ub(e, t, n) {
  const s = Df(e, 1, 0.5);
  let i;
  for (t + n > 1 && ((i = 1 / (t + n)), (t *= i), (n *= i)), i = 0; i < 3; i++)
    (s[i] *= 1 - t - n), (s[i] += t);
  return s;
}
function Yb(e, t, n, s, i) {
  return e === i
    ? (t - n) / s + (t < n ? 6 : 0)
    : t === i
    ? (n - e) / s + 2
    : (e - t) / s + 4;
}
function oa(e) {
  const n = e.r / 255,
    s = e.g / 255,
    i = e.b / 255,
    r = Math.max(n, s, i),
    o = Math.min(n, s, i),
    a = (r + o) / 2;
  let l, c, u;
  return (
    r !== o &&
      ((u = r - o),
      (c = a > 0.5 ? u / (2 - r - o) : u / (r + o)),
      (l = Yb(n, s, i, u, r)),
      (l = l * 60 + 0.5)),
    [l | 0, c || 0, a]
  );
}
function aa(e, t, n, s) {
  return (Array.isArray(t) ? e(t[0], t[1], t[2]) : e(t, n, s)).map(nn);
}
function la(e, t, n) {
  return aa(Df, e, t, n);
}
function Kb(e, t, n) {
  return aa(Ub, e, t, n);
}
function qb(e, t, n) {
  return aa($b, e, t, n);
}
function Lf(e) {
  return ((e % 360) + 360) % 360;
}
function Xb(e) {
  const t = Wb.exec(e);
  let n = 255,
    s;
  if (!t) return;
  t[5] !== s && (n = t[6] ? gs(+t[5]) : nn(+t[5]));
  const i = Lf(+t[2]),
    r = +t[3] / 100,
    o = +t[4] / 100;
  return (
    t[1] === "hwb"
      ? (s = Kb(i, r, o))
      : t[1] === "hsv"
      ? (s = qb(i, r, o))
      : (s = la(i, r, o)),
    { r: s[0], g: s[1], b: s[2], a: n }
  );
}
function Qb(e, t) {
  var n = oa(e);
  (n[0] = Lf(n[0] + t)), (n = la(n)), (e.r = n[0]), (e.g = n[1]), (e.b = n[2]);
}
function Gb(e) {
  if (!e) return;
  const t = oa(e),
    n = t[0],
    s = Nl(t[1]),
    i = Nl(t[2]);
  return e.a < 255
    ? `hsla(${n}, ${s}%, ${i}%, ${Ie(e.a)})`
    : `hsl(${n}, ${s}%, ${i}%)`;
}
const Hl = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh",
  },
  jl = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32",
  };
function Zb() {
  const e = {},
    t = Object.keys(jl),
    n = Object.keys(Hl);
  let s, i, r, o, a;
  for (s = 0; s < t.length; s++) {
    for (o = a = t[s], i = 0; i < n.length; i++)
      (r = n[i]), (a = a.replace(r, Hl[r]));
    (r = parseInt(jl[o], 16)),
      (e[a] = [(r >> 16) & 255, (r >> 8) & 255, r & 255]);
  }
  return e;
}
let ii;
function Jb(e) {
  ii || ((ii = Zb()), (ii.transparent = [0, 0, 0, 0]));
  const t = ii[e.toLowerCase()];
  return t && { r: t[0], g: t[1], b: t[2], a: t.length === 4 ? t[3] : 255 };
}
const tx =
  /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
function ex(e) {
  const t = tx.exec(e);
  let n = 255,
    s,
    i,
    r;
  if (t) {
    if (t[7] !== s) {
      const o = +t[7];
      n = t[8] ? gs(o) : qe(o * 255, 0, 255);
    }
    return (
      (s = +t[1]),
      (i = +t[3]),
      (r = +t[5]),
      (s = 255 & (t[2] ? gs(s) : qe(s, 0, 255))),
      (i = 255 & (t[4] ? gs(i) : qe(i, 0, 255))),
      (r = 255 & (t[6] ? gs(r) : qe(r, 0, 255))),
      { r: s, g: i, b: r, a: n }
    );
  }
}
function nx(e) {
  return (
    e &&
    (e.a < 255
      ? `rgba(${e.r}, ${e.g}, ${e.b}, ${Ie(e.a)})`
      : `rgb(${e.r}, ${e.g}, ${e.b})`)
  );
}
const Sr = (e) =>
    e <= 0.0031308 ? e * 12.92 : Math.pow(e, 1 / 2.4) * 1.055 - 0.055,
  Ln = (e) => (e <= 0.04045 ? e / 12.92 : Math.pow((e + 0.055) / 1.055, 2.4));
function sx(e, t, n) {
  const s = Ln(Ie(e.r)),
    i = Ln(Ie(e.g)),
    r = Ln(Ie(e.b));
  return {
    r: nn(Sr(s + n * (Ln(Ie(t.r)) - s))),
    g: nn(Sr(i + n * (Ln(Ie(t.g)) - i))),
    b: nn(Sr(r + n * (Ln(Ie(t.b)) - r))),
    a: e.a + n * (t.a - e.a),
  };
}
function ri(e, t, n) {
  if (e) {
    let s = oa(e);
    (s[t] = Math.max(0, Math.min(s[t] + s[t] * n, t === 0 ? 360 : 1))),
      (s = la(s)),
      (e.r = s[0]),
      (e.g = s[1]),
      (e.b = s[2]);
  }
}
function If(e, t) {
  return e && Object.assign(t || {}, e);
}
function Vl(e) {
  var t = { r: 0, g: 0, b: 0, a: 255 };
  return (
    Array.isArray(e)
      ? e.length >= 3 &&
        ((t = { r: e[0], g: e[1], b: e[2], a: 255 }),
        e.length > 3 && (t.a = nn(e[3])))
      : ((t = If(e, { r: 0, g: 0, b: 0, a: 1 })), (t.a = nn(t.a))),
    t
  );
}
function ix(e) {
  return e.charAt(0) === "r" ? ex(e) : Xb(e);
}
class Ai {
  constructor(t) {
    if (t instanceof Ai) return t;
    const n = typeof t;
    let s;
    n === "object"
      ? (s = Vl(t))
      : n === "string" && (s = Hb(t) || Jb(t) || ix(t)),
      (this._rgb = s),
      (this._valid = !!s);
  }
  get valid() {
    return this._valid;
  }
  get rgb() {
    var t = If(this._rgb);
    return t && (t.a = Ie(t.a)), t;
  }
  set rgb(t) {
    this._rgb = Vl(t);
  }
  rgbString() {
    return this._valid ? nx(this._rgb) : void 0;
  }
  hexString() {
    return this._valid ? Vb(this._rgb) : void 0;
  }
  hslString() {
    return this._valid ? Gb(this._rgb) : void 0;
  }
  mix(t, n) {
    if (t) {
      const s = this.rgb,
        i = t.rgb;
      let r;
      const o = n === r ? 0.5 : n,
        a = 2 * o - 1,
        l = s.a - i.a,
        c = ((a * l === -1 ? a : (a + l) / (1 + a * l)) + 1) / 2;
      (r = 1 - c),
        (s.r = 255 & (c * s.r + r * i.r + 0.5)),
        (s.g = 255 & (c * s.g + r * i.g + 0.5)),
        (s.b = 255 & (c * s.b + r * i.b + 0.5)),
        (s.a = o * s.a + (1 - o) * i.a),
        (this.rgb = s);
    }
    return this;
  }
  interpolate(t, n) {
    return t && (this._rgb = sx(this._rgb, t._rgb, n)), this;
  }
  clone() {
    return new Ai(this.rgb);
  }
  alpha(t) {
    return (this._rgb.a = nn(t)), this;
  }
  clearer(t) {
    const n = this._rgb;
    return (n.a *= 1 - t), this;
  }
  greyscale() {
    const t = this._rgb,
      n = Ys(t.r * 0.3 + t.g * 0.59 + t.b * 0.11);
    return (t.r = t.g = t.b = n), this;
  }
  opaquer(t) {
    const n = this._rgb;
    return (n.a *= 1 + t), this;
  }
  negate() {
    const t = this._rgb;
    return (t.r = 255 - t.r), (t.g = 255 - t.g), (t.b = 255 - t.b), this;
  }
  lighten(t) {
    return ri(this._rgb, 2, t), this;
  }
  darken(t) {
    return ri(this._rgb, 2, -t), this;
  }
  saturate(t) {
    return ri(this._rgb, 1, t), this;
  }
  desaturate(t) {
    return ri(this._rgb, 1, -t), this;
  }
  rotate(t) {
    return Qb(this._rgb, t), this;
  }
}
function Ff(e) {
  return new Ai(e);
}
function Bf(e) {
  if (e && typeof e == "object") {
    const t = e.toString();
    return t === "[object CanvasPattern]" || t === "[object CanvasGradient]";
  }
  return !1;
}
function Wl(e) {
  return Bf(e) ? e : Ff(e);
}
function kr(e) {
  return Bf(e) ? e : Ff(e).saturate(0.5).darken(0.1).hexString();
}
const En = Object.create(null),
  lo = Object.create(null);
function ks(e, t) {
  if (!t) return e;
  const n = t.split(".");
  for (let s = 0, i = n.length; s < i; ++s) {
    const r = n[s];
    e = e[r] || (e[r] = Object.create(null));
  }
  return e;
}
function Pr(e, t, n) {
  return typeof t == "string" ? Bs(ks(e, t), n) : Bs(ks(e, ""), t);
}
class rx {
  constructor(t) {
    (this.animation = void 0),
      (this.backgroundColor = "rgba(0,0,0,0.1)"),
      (this.borderColor = "rgba(0,0,0,0.1)"),
      (this.color = "#666"),
      (this.datasets = {}),
      (this.devicePixelRatio = (n) => n.chart.platform.getDevicePixelRatio()),
      (this.elements = {}),
      (this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove",
      ]),
      (this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null,
      }),
      (this.hover = {}),
      (this.hoverBackgroundColor = (n, s) => kr(s.backgroundColor)),
      (this.hoverBorderColor = (n, s) => kr(s.borderColor)),
      (this.hoverColor = (n, s) => kr(s.color)),
      (this.indexAxis = "x"),
      (this.interaction = {
        mode: "nearest",
        intersect: !0,
        includeInvisible: !1,
      }),
      (this.maintainAspectRatio = !0),
      (this.onHover = null),
      (this.onClick = null),
      (this.parsing = !0),
      (this.plugins = {}),
      (this.responsive = !0),
      (this.scale = void 0),
      (this.scales = {}),
      (this.showLine = !0),
      (this.drawActiveElementsOnTop = !0),
      this.describe(t);
  }
  set(t, n) {
    return Pr(this, t, n);
  }
  get(t) {
    return ks(this, t);
  }
  describe(t, n) {
    return Pr(lo, t, n);
  }
  override(t, n) {
    return Pr(En, t, n);
  }
  route(t, n, s, i) {
    const r = ks(this, t),
      o = ks(this, s),
      a = "_" + n;
    Object.defineProperties(r, {
      [a]: { value: r[n], writable: !0 },
      [n]: {
        enumerable: !0,
        get() {
          const l = this[a],
            c = o[i];
          return ft(l) ? Object.assign({}, c, l) : nt(l, c);
        },
        set(l) {
          this[a] = l;
        },
      },
    });
  }
}
var at = new rx({
  _scriptable: (e) => !e.startsWith("on"),
  _indexable: (e) => e !== "events",
  hover: { _fallback: "interaction" },
  interaction: { _scriptable: !1, _indexable: !1 },
});
function ox(e) {
  return !e || ht(e.size) || ht(e.family)
    ? null
    : (e.style ? e.style + " " : "") +
        (e.weight ? e.weight + " " : "") +
        e.size +
        "px " +
        e.family;
}
function Ti(e, t, n, s, i) {
  let r = t[i];
  return (
    r || ((r = t[i] = e.measureText(i).width), n.push(i)), r > s && (s = r), s
  );
}
function ax(e, t, n, s) {
  s = s || {};
  let i = (s.data = s.data || {}),
    r = (s.garbageCollect = s.garbageCollect || []);
  s.font !== t &&
    ((i = s.data = {}), (r = s.garbageCollect = []), (s.font = t)),
    e.save(),
    (e.font = t);
  let o = 0;
  const a = n.length;
  let l, c, u, f, h;
  for (l = 0; l < a; l++)
    if (((f = n[l]), f != null && Ct(f) !== !0)) o = Ti(e, i, r, o, f);
    else if (Ct(f))
      for (c = 0, u = f.length; c < u; c++)
        (h = f[c]), h != null && !Ct(h) && (o = Ti(e, i, r, o, h));
  e.restore();
  const d = r.length / 2;
  if (d > n.length) {
    for (l = 0; l < d; l++) delete i[r[l]];
    r.splice(0, d);
  }
  return o;
}
function pn(e, t, n) {
  const s = e.currentDevicePixelRatio,
    i = n !== 0 ? Math.max(n / 2, 0.5) : 0;
  return Math.round((t - i) * s) / s + i;
}
function $l(e, t) {
  (t = t || e.getContext("2d")),
    t.save(),
    t.resetTransform(),
    t.clearRect(0, 0, e.width, e.height),
    t.restore();
}
function co(e, t, n, s) {
  zf(e, t, n, s, null);
}
function zf(e, t, n, s, i) {
  let r, o, a, l, c, u;
  const f = t.pointStyle,
    h = t.rotation,
    d = t.radius;
  let p = (h || 0) * Pb;
  if (
    f &&
    typeof f == "object" &&
    ((r = f.toString()),
    r === "[object HTMLImageElement]" || r === "[object HTMLCanvasElement]")
  ) {
    e.save(),
      e.translate(n, s),
      e.rotate(p),
      e.drawImage(f, -f.width / 2, -f.height / 2, f.width, f.height),
      e.restore();
    return;
  }
  if (!(isNaN(d) || d <= 0)) {
    switch ((e.beginPath(), f)) {
      default:
        i ? e.ellipse(n, s, i / 2, d, 0, 0, mt) : e.arc(n, s, d, 0, mt),
          e.closePath();
        break;
      case "triangle":
        e.moveTo(n + Math.sin(p) * d, s - Math.cos(p) * d),
          (p += Dl),
          e.lineTo(n + Math.sin(p) * d, s - Math.cos(p) * d),
          (p += Dl),
          e.lineTo(n + Math.sin(p) * d, s - Math.cos(p) * d),
          e.closePath();
        break;
      case "rectRounded":
        (c = d * 0.516),
          (l = d - c),
          (o = Math.cos(p + ls) * l),
          (a = Math.sin(p + ls) * l),
          e.arc(n - o, s - a, c, p - Pt, p - kt),
          e.arc(n + a, s - o, c, p - kt, p),
          e.arc(n + o, s + a, c, p, p + kt),
          e.arc(n - a, s + o, c, p + kt, p + Pt),
          e.closePath();
        break;
      case "rect":
        if (!h) {
          (l = Math.SQRT1_2 * d),
            (u = i ? i / 2 : l),
            e.rect(n - u, s - l, 2 * u, 2 * l);
          break;
        }
        p += ls;
      case "rectRot":
        (o = Math.cos(p) * d),
          (a = Math.sin(p) * d),
          e.moveTo(n - o, s - a),
          e.lineTo(n + a, s - o),
          e.lineTo(n + o, s + a),
          e.lineTo(n - a, s + o),
          e.closePath();
        break;
      case "crossRot":
        p += ls;
      case "cross":
        (o = Math.cos(p) * d),
          (a = Math.sin(p) * d),
          e.moveTo(n - o, s - a),
          e.lineTo(n + o, s + a),
          e.moveTo(n + a, s - o),
          e.lineTo(n - a, s + o);
        break;
      case "star":
        (o = Math.cos(p) * d),
          (a = Math.sin(p) * d),
          e.moveTo(n - o, s - a),
          e.lineTo(n + o, s + a),
          e.moveTo(n + a, s - o),
          e.lineTo(n - a, s + o),
          (p += ls),
          (o = Math.cos(p) * d),
          (a = Math.sin(p) * d),
          e.moveTo(n - o, s - a),
          e.lineTo(n + o, s + a),
          e.moveTo(n + a, s - o),
          e.lineTo(n - a, s + o);
        break;
      case "line":
        (o = i ? i / 2 : Math.cos(p) * d),
          (a = Math.sin(p) * d),
          e.moveTo(n - o, s - a),
          e.lineTo(n + o, s + a);
        break;
      case "dash":
        e.moveTo(n, s), e.lineTo(n + Math.cos(p) * d, s + Math.sin(p) * d);
        break;
    }
    e.fill(), t.borderWidth > 0 && e.stroke();
  }
}
function Ns(e, t, n) {
  return (
    (n = n || 0.5),
    !t ||
      (e &&
        e.x > t.left - n &&
        e.x < t.right + n &&
        e.y > t.top - n &&
        e.y < t.bottom + n)
  );
}
function ca(e, t) {
  e.save(),
    e.beginPath(),
    e.rect(t.left, t.top, t.right - t.left, t.bottom - t.top),
    e.clip();
}
function ua(e) {
  e.restore();
}
function lx(e, t, n, s, i) {
  if (!t) return e.lineTo(n.x, n.y);
  if (i === "middle") {
    const r = (t.x + n.x) / 2;
    e.lineTo(r, t.y), e.lineTo(r, n.y);
  } else (i === "after") != !!s ? e.lineTo(t.x, n.y) : e.lineTo(n.x, t.y);
  e.lineTo(n.x, n.y);
}
function cx(e, t, n, s) {
  if (!t) return e.lineTo(n.x, n.y);
  e.bezierCurveTo(
    s ? t.cp1x : t.cp2x,
    s ? t.cp1y : t.cp2y,
    s ? n.cp2x : n.cp1x,
    s ? n.cp2y : n.cp1y,
    n.x,
    n.y
  );
}
function Qn(e, t, n, s, i, r = {}) {
  const o = Ct(t) ? t : [t],
    a = r.strokeWidth > 0 && r.strokeColor !== "";
  let l, c;
  for (e.save(), e.font = i.string, ux(e, r), l = 0; l < o.length; ++l)
    (c = o[l]),
      a &&
        (r.strokeColor && (e.strokeStyle = r.strokeColor),
        ht(r.strokeWidth) || (e.lineWidth = r.strokeWidth),
        e.strokeText(c, n, s, r.maxWidth)),
      e.fillText(c, n, s, r.maxWidth),
      fx(e, n, s, c, r),
      (s += i.lineHeight);
  e.restore();
}
function ux(e, t) {
  t.translation && e.translate(t.translation[0], t.translation[1]),
    ht(t.rotation) || e.rotate(t.rotation),
    t.color && (e.fillStyle = t.color),
    t.textAlign && (e.textAlign = t.textAlign),
    t.textBaseline && (e.textBaseline = t.textBaseline);
}
function fx(e, t, n, s, i) {
  if (i.strikethrough || i.underline) {
    const r = e.measureText(s),
      o = t - r.actualBoundingBoxLeft,
      a = t + r.actualBoundingBoxRight,
      l = n - r.actualBoundingBoxAscent,
      c = n + r.actualBoundingBoxDescent,
      u = i.strikethrough ? (l + c) / 2 : c;
    (e.strokeStyle = e.fillStyle),
      e.beginPath(),
      (e.lineWidth = i.decorationWidth || 2),
      e.moveTo(o, u),
      e.lineTo(a, u),
      e.stroke();
  }
}
function Hs(e, t) {
  const { x: n, y: s, w: i, h: r, radius: o } = t;
  e.arc(n + o.topLeft, s + o.topLeft, o.topLeft, -kt, Pt, !0),
    e.lineTo(n, s + r - o.bottomLeft),
    e.arc(n + o.bottomLeft, s + r - o.bottomLeft, o.bottomLeft, Pt, kt, !0),
    e.lineTo(n + i - o.bottomRight, s + r),
    e.arc(
      n + i - o.bottomRight,
      s + r - o.bottomRight,
      o.bottomRight,
      kt,
      0,
      !0
    ),
    e.lineTo(n + i, s + o.topRight),
    e.arc(n + i - o.topRight, s + o.topRight, o.topRight, 0, -kt, !0),
    e.lineTo(n + o.topLeft, s);
}
const hx = new RegExp(/^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/),
  dx = new RegExp(
    /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/
  );
function px(e, t) {
  const n = ("" + e).match(hx);
  if (!n || n[1] === "normal") return t * 1.2;
  switch (((e = +n[2]), n[3])) {
    case "px":
      return e;
    case "%":
      e /= 100;
      break;
  }
  return t * e;
}
const gx = (e) => +e || 0;
function fa(e, t) {
  const n = {},
    s = ft(t),
    i = s ? Object.keys(t) : t,
    r = ft(e) ? (s ? (o) => nt(e[o], e[t[o]]) : (o) => e[o]) : () => e;
  for (const o of i) n[o] = gx(r(o));
  return n;
}
function Nf(e) {
  return fa(e, { top: "y", right: "x", bottom: "y", left: "x" });
}
function kn(e) {
  return fa(e, ["topLeft", "topRight", "bottomLeft", "bottomRight"]);
}
function Wt(e) {
  const t = Nf(e);
  return (t.width = t.left + t.right), (t.height = t.top + t.bottom), t;
}
function Bt(e, t) {
  (e = e || {}), (t = t || at.font);
  let n = nt(e.size, t.size);
  typeof n == "string" && (n = parseInt(n, 10));
  let s = nt(e.style, t.style);
  s &&
    !("" + s).match(dx) &&
    (console.warn('Invalid font style specified: "' + s + '"'), (s = ""));
  const i = {
    family: nt(e.family, t.family),
    lineHeight: px(nt(e.lineHeight, t.lineHeight), n),
    size: n,
    style: s,
    weight: nt(e.weight, t.weight),
    string: "",
  };
  return (i.string = ox(i)), i;
}
function oi(e, t, n, s) {
  let i = !0,
    r,
    o,
    a;
  for (r = 0, o = e.length; r < o; ++r)
    if (
      ((a = e[r]),
      a !== void 0 &&
        (t !== void 0 && typeof a == "function" && ((a = a(t)), (i = !1)),
        n !== void 0 && Ct(a) && ((a = a[n % a.length]), (i = !1)),
        a !== void 0))
    )
      return s && !i && (s.cacheable = !1), a;
}
function mx(e, t, n) {
  const { min: s, max: i } = e,
    r = Cf(t, (i - s) / 2),
    o = (a, l) => (n && a === 0 ? 0 : a + l);
  return { min: o(s, -Math.abs(r)), max: o(i, r) };
}
function cn(e, t) {
  return Object.assign(Object.create(e), t);
}
function ha(e, t = [""], n = e, s, i = () => e[0]) {
  ae(s) || (s = Wf("_fallback", e));
  const r = {
    [Symbol.toStringTag]: "Object",
    _cacheable: !0,
    _scopes: e,
    _rootScopes: n,
    _fallback: s,
    _getTarget: i,
    override: (o) => ha([o, ...e], t, n, s),
  };
  return new Proxy(r, {
    deleteProperty(o, a) {
      return delete o[a], delete o._keys, delete e[0][a], !0;
    },
    get(o, a) {
      return jf(o, a, () => Mx(a, t, e, o));
    },
    getOwnPropertyDescriptor(o, a) {
      return Reflect.getOwnPropertyDescriptor(o._scopes[0], a);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e[0]);
    },
    has(o, a) {
      return Yl(o).includes(a);
    },
    ownKeys(o) {
      return Yl(o);
    },
    set(o, a, l) {
      const c = o._storage || (o._storage = i());
      return (o[a] = c[a] = l), delete o._keys, !0;
    },
  });
}
function Gn(e, t, n, s) {
  const i = {
    _cacheable: !1,
    _proxy: e,
    _context: t,
    _subProxy: n,
    _stack: new Set(),
    _descriptors: Hf(e, s),
    setContext: (r) => Gn(e, r, n, s),
    override: (r) => Gn(e.override(r), t, n, s),
  };
  return new Proxy(i, {
    deleteProperty(r, o) {
      return delete r[o], delete e[o], !0;
    },
    get(r, o, a) {
      return jf(r, o, () => xx(r, o, a));
    },
    getOwnPropertyDescriptor(r, o) {
      return r._descriptors.allKeys
        ? Reflect.has(e, o)
          ? { enumerable: !0, configurable: !0 }
          : void 0
        : Reflect.getOwnPropertyDescriptor(e, o);
    },
    getPrototypeOf() {
      return Reflect.getPrototypeOf(e);
    },
    has(r, o) {
      return Reflect.has(e, o);
    },
    ownKeys() {
      return Reflect.ownKeys(e);
    },
    set(r, o, a) {
      return (e[o] = a), delete r[o], !0;
    },
  });
}
function Hf(e, t = { scriptable: !0, indexable: !0 }) {
  const {
    _scriptable: n = t.scriptable,
    _indexable: s = t.indexable,
    _allKeys: i = t.allKeys,
  } = e;
  return {
    allKeys: i,
    scriptable: n,
    indexable: s,
    isScriptable: an(n) ? n : () => n,
    isIndexable: an(s) ? s : () => s,
  };
}
const bx = (e, t) => (e ? e + sa(t) : t),
  da = (e, t) =>
    ft(t) &&
    e !== "adapters" &&
    (Object.getPrototypeOf(t) === null || t.constructor === Object);
function jf(e, t, n) {
  if (Object.prototype.hasOwnProperty.call(e, t)) return e[t];
  const s = n();
  return (e[t] = s), s;
}
function xx(e, t, n) {
  const { _proxy: s, _context: i, _subProxy: r, _descriptors: o } = e;
  let a = s[t];
  return (
    an(a) && o.isScriptable(t) && (a = _x(t, a, e, n)),
    Ct(a) && a.length && (a = yx(t, a, e, o.isIndexable)),
    da(t, a) && (a = Gn(a, i, r && r[t], o)),
    a
  );
}
function _x(e, t, n, s) {
  const { _proxy: i, _context: r, _subProxy: o, _stack: a } = n;
  if (a.has(e))
    throw new Error(
      "Recursion detected: " + Array.from(a).join("->") + "->" + e
    );
  return (
    a.add(e),
    (t = t(r, o || s)),
    a.delete(e),
    da(e, t) && (t = pa(i._scopes, i, e, t)),
    t
  );
}
function yx(e, t, n, s) {
  const { _proxy: i, _context: r, _subProxy: o, _descriptors: a } = n;
  if (ae(r.index) && s(e)) t = t[r.index % t.length];
  else if (ft(t[0])) {
    const l = t,
      c = i._scopes.filter((u) => u !== l);
    t = [];
    for (const u of l) {
      const f = pa(c, i, e, u);
      t.push(Gn(f, r, o && o[e], a));
    }
  }
  return t;
}
function Vf(e, t, n) {
  return an(e) ? e(t, n) : e;
}
const vx = (e, t) => (e === !0 ? t : typeof e == "string" ? on(t, e) : void 0);
function Cx(e, t, n, s, i) {
  for (const r of t) {
    const o = vx(n, r);
    if (o) {
      e.add(o);
      const a = Vf(o._fallback, n, i);
      if (ae(a) && a !== n && a !== s) return a;
    } else if (o === !1 && ae(s) && n !== s) return null;
  }
  return !1;
}
function pa(e, t, n, s) {
  const i = t._rootScopes,
    r = Vf(t._fallback, n, s),
    o = [...e, ...i],
    a = new Set();
  a.add(s);
  let l = Ul(a, o, n, r || n, s);
  return l === null ||
    (ae(r) && r !== n && ((l = Ul(a, o, r, l, s)), l === null))
    ? !1
    : ha(Array.from(a), [""], i, r, () => wx(t, n, s));
}
function Ul(e, t, n, s, i) {
  for (; n; ) n = Cx(e, t, n, s, i);
  return n;
}
function wx(e, t, n) {
  const s = e._getTarget();
  t in s || (s[t] = {});
  const i = s[t];
  return Ct(i) && ft(n) ? n : i;
}
function Mx(e, t, n, s) {
  let i;
  for (const r of t)
    if (((i = Wf(bx(r, e), n)), ae(i))) return da(e, i) ? pa(n, s, e, i) : i;
}
function Wf(e, t) {
  for (const n of t) {
    if (!n) continue;
    const s = n[e];
    if (ae(s)) return s;
  }
}
function Yl(e) {
  let t = e._keys;
  return t || (t = e._keys = Sx(e._scopes)), t;
}
function Sx(e) {
  const t = new Set();
  for (const n of e)
    for (const s of Object.keys(n).filter((i) => !i.startsWith("_"))) t.add(s);
  return Array.from(t);
}
function $f(e, t, n, s) {
  const { iScale: i } = e,
    { key: r = "r" } = this._parsing,
    o = new Array(s);
  let a, l, c, u;
  for (a = 0, l = s; a < l; ++a)
    (c = a + n), (u = t[c]), (o[a] = { r: i.parse(on(u, r), c) });
  return o;
}
const kx = Number.EPSILON || 1e-14,
  Zn = (e, t) => t < e.length && !e[t].skip && e[t],
  Uf = (e) => (e === "x" ? "y" : "x");
function Px(e, t, n, s) {
  const i = e.skip ? t : e,
    r = t,
    o = n.skip ? t : n,
    a = oo(r, i),
    l = oo(o, r);
  let c = a / (a + l),
    u = l / (a + l);
  (c = isNaN(c) ? 0 : c), (u = isNaN(u) ? 0 : u);
  const f = s * c,
    h = s * u;
  return {
    previous: { x: r.x - f * (o.x - i.x), y: r.y - f * (o.y - i.y) },
    next: { x: r.x + h * (o.x - i.x), y: r.y + h * (o.y - i.y) },
  };
}
function Ox(e, t, n) {
  const s = e.length;
  let i,
    r,
    o,
    a,
    l,
    c = Zn(e, 0);
  for (let u = 0; u < s - 1; ++u)
    if (((l = c), (c = Zn(e, u + 1)), !(!l || !c))) {
      if (Ms(t[u], 0, kx)) {
        n[u] = n[u + 1] = 0;
        continue;
      }
      (i = n[u] / t[u]),
        (r = n[u + 1] / t[u]),
        (a = Math.pow(i, 2) + Math.pow(r, 2)),
        !(a <= 9) &&
          ((o = 3 / Math.sqrt(a)),
          (n[u] = i * o * t[u]),
          (n[u + 1] = r * o * t[u]));
    }
}
function Ex(e, t, n = "x") {
  const s = Uf(n),
    i = e.length;
  let r,
    o,
    a,
    l = Zn(e, 0);
  for (let c = 0; c < i; ++c) {
    if (((o = a), (a = l), (l = Zn(e, c + 1)), !a)) continue;
    const u = a[n],
      f = a[s];
    o &&
      ((r = (u - o[n]) / 3),
      (a[`cp1${n}`] = u - r),
      (a[`cp1${s}`] = f - r * t[c])),
      l &&
        ((r = (l[n] - u) / 3),
        (a[`cp2${n}`] = u + r),
        (a[`cp2${s}`] = f + r * t[c]));
  }
}
function Ax(e, t = "x") {
  const n = Uf(t),
    s = e.length,
    i = Array(s).fill(0),
    r = Array(s);
  let o,
    a,
    l,
    c = Zn(e, 0);
  for (o = 0; o < s; ++o)
    if (((a = l), (l = c), (c = Zn(e, o + 1)), !!l)) {
      if (c) {
        const u = c[t] - l[t];
        i[o] = u !== 0 ? (c[n] - l[n]) / u : 0;
      }
      r[o] = a
        ? c
          ? Pe(i[o - 1]) !== Pe(i[o])
            ? 0
            : (i[o - 1] + i[o]) / 2
          : i[o - 1]
        : i[o];
    }
  Ox(e, i, r), Ex(e, r, t);
}
function ai(e, t, n) {
  return Math.max(Math.min(e, n), t);
}
function Tx(e, t) {
  let n,
    s,
    i,
    r,
    o,
    a = Ns(e[0], t);
  for (n = 0, s = e.length; n < s; ++n)
    (o = r),
      (r = a),
      (a = n < s - 1 && Ns(e[n + 1], t)),
      r &&
        ((i = e[n]),
        o &&
          ((i.cp1x = ai(i.cp1x, t.left, t.right)),
          (i.cp1y = ai(i.cp1y, t.top, t.bottom))),
        a &&
          ((i.cp2x = ai(i.cp2x, t.left, t.right)),
          (i.cp2y = ai(i.cp2y, t.top, t.bottom))));
}
function Rx(e, t, n, s, i) {
  let r, o, a, l;
  if (
    (t.spanGaps && (e = e.filter((c) => !c.skip)),
    t.cubicInterpolationMode === "monotone")
  )
    Ax(e, i);
  else {
    let c = s ? e[e.length - 1] : e[0];
    for (r = 0, o = e.length; r < o; ++r)
      (a = e[r]),
        (l = Px(c, a, e[Math.min(r + 1, o - (s ? 0 : 1)) % o], t.tension)),
        (a.cp1x = l.previous.x),
        (a.cp1y = l.previous.y),
        (a.cp2x = l.next.x),
        (a.cp2y = l.next.y),
        (c = a);
  }
  t.capBezierPoints && Tx(e, n);
}
function Yf() {
  return typeof window < "u" && typeof document < "u";
}
function ga(e) {
  let t = e.parentNode;
  return t && t.toString() === "[object ShadowRoot]" && (t = t.host), t;
}
function Ri(e, t, n) {
  let s;
  return (
    typeof e == "string"
      ? ((s = parseInt(e, 10)),
        e.indexOf("%") !== -1 && (s = (s / 100) * t.parentNode[n]))
      : (s = e),
    s
  );
}
const or = (e) => window.getComputedStyle(e, null);
function Dx(e, t) {
  return or(e).getPropertyValue(t);
}
const Lx = ["top", "right", "bottom", "left"];
function Pn(e, t, n) {
  const s = {};
  n = n ? "-" + n : "";
  for (let i = 0; i < 4; i++) {
    const r = Lx[i];
    s[r] = parseFloat(e[t + "-" + r + n]) || 0;
  }
  return (s.width = s.left + s.right), (s.height = s.top + s.bottom), s;
}
const Ix = (e, t, n) => (e > 0 || t > 0) && (!n || !n.shadowRoot);
function Fx(e, t) {
  const n = e.touches,
    s = n && n.length ? n[0] : e,
    { offsetX: i, offsetY: r } = s;
  let o = !1,
    a,
    l;
  if (Ix(i, r, e.target)) (a = i), (l = r);
  else {
    const c = t.getBoundingClientRect();
    (a = s.clientX - c.left), (l = s.clientY - c.top), (o = !0);
  }
  return { x: a, y: l, box: o };
}
function bn(e, t) {
  if ("native" in e) return e;
  const { canvas: n, currentDevicePixelRatio: s } = t,
    i = or(n),
    r = i.boxSizing === "border-box",
    o = Pn(i, "padding"),
    a = Pn(i, "border", "width"),
    { x: l, y: c, box: u } = Fx(e, n),
    f = o.left + (u && a.left),
    h = o.top + (u && a.top);
  let { width: d, height: p } = t;
  return (
    r && ((d -= o.width + a.width), (p -= o.height + a.height)),
    {
      x: Math.round((((l - f) / d) * n.width) / s),
      y: Math.round((((c - h) / p) * n.height) / s),
    }
  );
}
function Bx(e, t, n) {
  let s, i;
  if (t === void 0 || n === void 0) {
    const r = ga(e);
    if (!r) (t = e.clientWidth), (n = e.clientHeight);
    else {
      const o = r.getBoundingClientRect(),
        a = or(r),
        l = Pn(a, "border", "width"),
        c = Pn(a, "padding");
      (t = o.width - c.width - l.width),
        (n = o.height - c.height - l.height),
        (s = Ri(a.maxWidth, r, "clientWidth")),
        (i = Ri(a.maxHeight, r, "clientHeight"));
    }
  }
  return { width: t, height: n, maxWidth: s || Ei, maxHeight: i || Ei };
}
const Or = (e) => Math.round(e * 10) / 10;
function zx(e, t, n, s) {
  const i = or(e),
    r = Pn(i, "margin"),
    o = Ri(i.maxWidth, e, "clientWidth") || Ei,
    a = Ri(i.maxHeight, e, "clientHeight") || Ei,
    l = Bx(e, t, n);
  let { width: c, height: u } = l;
  if (i.boxSizing === "content-box") {
    const f = Pn(i, "border", "width"),
      h = Pn(i, "padding");
    (c -= h.width + f.width), (u -= h.height + f.height);
  }
  return (
    (c = Math.max(0, c - r.width)),
    (u = Math.max(0, s ? Math.floor(c / s) : u - r.height)),
    (c = Or(Math.min(c, o, l.maxWidth))),
    (u = Or(Math.min(u, a, l.maxHeight))),
    c && !u && (u = Or(c / 2)),
    { width: c, height: u }
  );
}
function Kl(e, t, n) {
  const s = t || 1,
    i = Math.floor(e.height * s),
    r = Math.floor(e.width * s);
  (e.height = i / s), (e.width = r / s);
  const o = e.canvas;
  return (
    o.style &&
      (n || (!o.style.height && !o.style.width)) &&
      ((o.style.height = `${e.height}px`), (o.style.width = `${e.width}px`)),
    e.currentDevicePixelRatio !== s || o.height !== i || o.width !== r
      ? ((e.currentDevicePixelRatio = s),
        (o.height = i),
        (o.width = r),
        e.ctx.setTransform(s, 0, 0, s, 0, 0),
        !0)
      : !1
  );
}
const Nx = (function () {
  let e = !1;
  try {
    const t = {
      get passive() {
        return (e = !0), !1;
      },
    };
    window.addEventListener("test", null, t),
      window.removeEventListener("test", null, t);
  } catch {}
  return e;
})();
function ql(e, t) {
  const n = Dx(e, t),
    s = n && n.match(/^(\d+)(\.\d+)?px$/);
  return s ? +s[1] : void 0;
}
function xn(e, t, n, s) {
  return { x: e.x + n * (t.x - e.x), y: e.y + n * (t.y - e.y) };
}
function Hx(e, t, n, s) {
  return {
    x: e.x + n * (t.x - e.x),
    y:
      s === "middle"
        ? n < 0.5
          ? e.y
          : t.y
        : s === "after"
        ? n < 1
          ? e.y
          : t.y
        : n > 0
        ? t.y
        : e.y,
  };
}
function jx(e, t, n, s) {
  const i = { x: e.cp2x, y: e.cp2y },
    r = { x: t.cp1x, y: t.cp1y },
    o = xn(e, i, n),
    a = xn(i, r, n),
    l = xn(r, t, n),
    c = xn(o, a, n),
    u = xn(a, l, n);
  return xn(c, u, n);
}
const Xl = new Map();
function Vx(e, t) {
  t = t || {};
  const n = e + JSON.stringify(t);
  let s = Xl.get(n);
  return s || ((s = new Intl.NumberFormat(e, t)), Xl.set(n, s)), s;
}
function Ks(e, t, n) {
  return Vx(t, n).format(e);
}
const Wx = function (e, t) {
    return {
      x(n) {
        return e + e + t - n;
      },
      setWidth(n) {
        t = n;
      },
      textAlign(n) {
        return n === "center" ? n : n === "right" ? "left" : "right";
      },
      xPlus(n, s) {
        return n - s;
      },
      leftForLtr(n, s) {
        return n - s;
      },
    };
  },
  $x = function () {
    return {
      x(e) {
        return e;
      },
      setWidth(e) {},
      textAlign(e) {
        return e;
      },
      xPlus(e, t) {
        return e + t;
      },
      leftForLtr(e, t) {
        return e;
      },
    };
  };
function Vn(e, t, n) {
  return e ? Wx(t, n) : $x();
}
function Kf(e, t) {
  let n, s;
  (t === "ltr" || t === "rtl") &&
    ((n = e.canvas.style),
    (s = [n.getPropertyValue("direction"), n.getPropertyPriority("direction")]),
    n.setProperty("direction", t, "important"),
    (e.prevTextDirection = s));
}
function qf(e, t) {
  t !== void 0 &&
    (delete e.prevTextDirection,
    e.canvas.style.setProperty("direction", t[0], t[1]));
}
function Xf(e) {
  return e === "angle"
    ? { between: zs, compare: Ab, normalize: ue }
    : { between: Ke, compare: (t, n) => t - n, normalize: (t) => t };
}
function Ql({ start: e, end: t, count: n, loop: s, style: i }) {
  return {
    start: e % n,
    end: t % n,
    loop: s && (t - e + 1) % n === 0,
    style: i,
  };
}
function Ux(e, t, n) {
  const { property: s, start: i, end: r } = n,
    { between: o, normalize: a } = Xf(s),
    l = t.length;
  let { start: c, end: u, loop: f } = e,
    h,
    d;
  if (f) {
    for (c += l, u += l, h = 0, d = l; h < d && o(a(t[c % l][s]), i, r); ++h)
      c--, u--;
    (c %= l), (u %= l);
  }
  return u < c && (u += l), { start: c, end: u, loop: f, style: e.style };
}
function Yx(e, t, n) {
  if (!n) return [e];
  const { property: s, start: i, end: r } = n,
    o = t.length,
    { compare: a, between: l, normalize: c } = Xf(s),
    { start: u, end: f, loop: h, style: d } = Ux(e, t, n),
    p = [];
  let g = !1,
    x = null,
    b,
    _,
    v;
  const C = () => l(i, v, b) && a(i, v) !== 0,
    w = () => a(r, b) === 0 || l(r, v, b),
    O = () => g || C(),
    k = () => !g || w();
  for (let S = u, R = u; S <= f; ++S)
    (_ = t[S % o]),
      !_.skip &&
        ((b = c(_[s])),
        b !== v &&
          ((g = l(b, i, r)),
          x === null && O() && (x = a(b, i) === 0 ? S : R),
          x !== null &&
            k() &&
            (p.push(Ql({ start: x, end: S, loop: h, count: o, style: d })),
            (x = null)),
          (R = S),
          (v = b)));
  return (
    x !== null && p.push(Ql({ start: x, end: f, loop: h, count: o, style: d })),
    p
  );
}
function Kx(e, t) {
  const n = [],
    s = e.segments;
  for (let i = 0; i < s.length; i++) {
    const r = Yx(s[i], e.points, t);
    r.length && n.push(...r);
  }
  return n;
}
function qx(e, t, n, s) {
  let i = 0,
    r = t - 1;
  if (n && !s) for (; i < t && !e[i].skip; ) i++;
  for (; i < t && e[i].skip; ) i++;
  for (i %= t, n && (r += i); r > i && e[r % t].skip; ) r--;
  return (r %= t), { start: i, end: r };
}
function Xx(e, t, n, s) {
  const i = e.length,
    r = [];
  let o = t,
    a = e[t],
    l;
  for (l = t + 1; l <= n; ++l) {
    const c = e[l % i];
    c.skip || c.stop
      ? a.skip ||
        ((s = !1),
        r.push({ start: t % i, end: (l - 1) % i, loop: s }),
        (t = o = c.stop ? l : null))
      : ((o = l), a.skip && (t = l)),
      (a = c);
  }
  return o !== null && r.push({ start: t % i, end: o % i, loop: s }), r;
}
function Qx(e, t) {
  const n = e.points,
    s = e.options.spanGaps,
    i = n.length;
  if (!i) return [];
  const r = !!e._loop,
    { start: o, end: a } = qx(n, i, r, s);
  if (s === !0) return Gl(e, [{ start: o, end: a, loop: r }], n, t);
  const l = a < o ? a + i : a,
    c = !!e._fullLoop && o === 0 && a === i - 1;
  return Gl(e, Xx(n, o, l, c), n, t);
}
function Gl(e, t, n, s) {
  return !s || !s.setContext || !n ? t : Gx(e, t, n, s);
}
function Gx(e, t, n, s) {
  const i = e._chart.getContext(),
    r = Zl(e.options),
    {
      _datasetIndex: o,
      options: { spanGaps: a },
    } = e,
    l = n.length,
    c = [];
  let u = r,
    f = t[0].start,
    h = f;
  function d(p, g, x, b) {
    const _ = a ? -1 : 1;
    if (p !== g) {
      for (p += l; n[p % l].skip; ) p -= _;
      for (; n[g % l].skip; ) g += _;
      p % l !== g % l &&
        (c.push({ start: p % l, end: g % l, loop: x, style: b }),
        (u = b),
        (f = g % l));
    }
  }
  for (const p of t) {
    f = a ? f : p.start;
    let g = n[f % l],
      x;
    for (h = f + 1; h <= p.end; h++) {
      const b = n[h % l];
      (x = Zl(
        s.setContext(
          cn(i, {
            type: "segment",
            p0: g,
            p1: b,
            p0DataIndex: (h - 1) % l,
            p1DataIndex: h % l,
            datasetIndex: o,
          })
        )
      )),
        Zx(x, u) && d(f, h - 1, p.loop, u),
        (g = b),
        (u = x);
    }
    f < h - 1 && d(f, h - 1, p.loop, u);
  }
  return c;
}
function Zl(e) {
  return {
    backgroundColor: e.backgroundColor,
    borderCapStyle: e.borderCapStyle,
    borderDash: e.borderDash,
    borderDashOffset: e.borderDashOffset,
    borderJoinStyle: e.borderJoinStyle,
    borderWidth: e.borderWidth,
    borderColor: e.borderColor,
  };
}
function Zx(e, t) {
  return t && JSON.stringify(e) !== JSON.stringify(t);
}
/*!
 * Chart.js v3.9.1
 * https://www.chartjs.org
 * (c) 2022 Chart.js Contributors
 * Released under the MIT License
 */ class Jx {
  constructor() {
    (this._request = null),
      (this._charts = new Map()),
      (this._running = !1),
      (this._lastDate = void 0);
  }
  _notify(t, n, s, i) {
    const r = n.listeners[i],
      o = n.duration;
    r.forEach((a) =>
      a({
        chart: t,
        initial: n.initial,
        numSteps: o,
        currentStep: Math.min(s - n.start, o),
      })
    );
  }
  _refresh() {
    this._request ||
      ((this._running = !0),
      (this._request = Of.call(window, () => {
        this._update(),
          (this._request = null),
          this._running && this._refresh();
      })));
  }
  _update(t = Date.now()) {
    let n = 0;
    this._charts.forEach((s, i) => {
      if (!s.running || !s.items.length) return;
      const r = s.items;
      let o = r.length - 1,
        a = !1,
        l;
      for (; o >= 0; --o)
        (l = r[o]),
          l._active
            ? (l._total > s.duration && (s.duration = l._total),
              l.tick(t),
              (a = !0))
            : ((r[o] = r[r.length - 1]), r.pop());
      a && (i.draw(), this._notify(i, s, t, "progress")),
        r.length ||
          ((s.running = !1),
          this._notify(i, s, t, "complete"),
          (s.initial = !1)),
        (n += r.length);
    }),
      (this._lastDate = t),
      n === 0 && (this._running = !1);
  }
  _getAnims(t) {
    const n = this._charts;
    let s = n.get(t);
    return (
      s ||
        ((s = {
          running: !1,
          initial: !0,
          items: [],
          listeners: { complete: [], progress: [] },
        }),
        n.set(t, s)),
      s
    );
  }
  listen(t, n, s) {
    this._getAnims(t).listeners[n].push(s);
  }
  add(t, n) {
    !n || !n.length || this._getAnims(t).items.push(...n);
  }
  has(t) {
    return this._getAnims(t).items.length > 0;
  }
  start(t) {
    const n = this._charts.get(t);
    n &&
      ((n.running = !0),
      (n.start = Date.now()),
      (n.duration = n.items.reduce((s, i) => Math.max(s, i._duration), 0)),
      this._refresh());
  }
  running(t) {
    if (!this._running) return !1;
    const n = this._charts.get(t);
    return !(!n || !n.running || !n.items.length);
  }
  stop(t) {
    const n = this._charts.get(t);
    if (!n || !n.items.length) return;
    const s = n.items;
    let i = s.length - 1;
    for (; i >= 0; --i) s[i].cancel();
    (n.items = []), this._notify(t, n, Date.now(), "complete");
  }
  remove(t) {
    return this._charts.delete(t);
  }
}
var Re = new Jx();
const Jl = "transparent",
  t_ = {
    boolean(e, t, n) {
      return n > 0.5 ? t : e;
    },
    color(e, t, n) {
      const s = Wl(e || Jl),
        i = s.valid && Wl(t || Jl);
      return i && i.valid ? i.mix(s, n).hexString() : t;
    },
    number(e, t, n) {
      return e + (t - e) * n;
    },
  };
class e_ {
  constructor(t, n, s, i) {
    const r = n[s];
    i = oi([t.to, i, r, t.from]);
    const o = oi([t.from, r, i]);
    (this._active = !0),
      (this._fn = t.fn || t_[t.type || typeof o]),
      (this._easing = Ss[t.easing] || Ss.linear),
      (this._start = Math.floor(Date.now() + (t.delay || 0))),
      (this._duration = this._total = Math.floor(t.duration)),
      (this._loop = !!t.loop),
      (this._target = n),
      (this._prop = s),
      (this._from = o),
      (this._to = i),
      (this._promises = void 0);
  }
  active() {
    return this._active;
  }
  update(t, n, s) {
    if (this._active) {
      this._notify(!1);
      const i = this._target[this._prop],
        r = s - this._start,
        o = this._duration - r;
      (this._start = s),
        (this._duration = Math.floor(Math.max(o, t.duration))),
        (this._total += r),
        (this._loop = !!t.loop),
        (this._to = oi([t.to, n, i, t.from])),
        (this._from = oi([t.from, i, n]));
    }
  }
  cancel() {
    this._active &&
      (this.tick(Date.now()), (this._active = !1), this._notify(!1));
  }
  tick(t) {
    const n = t - this._start,
      s = this._duration,
      i = this._prop,
      r = this._from,
      o = this._loop,
      a = this._to;
    let l;
    if (((this._active = r !== a && (o || n < s)), !this._active)) {
      (this._target[i] = a), this._notify(!0);
      return;
    }
    if (n < 0) {
      this._target[i] = r;
      return;
    }
    (l = (n / s) % 2),
      (l = o && l > 1 ? 2 - l : l),
      (l = this._easing(Math.min(1, Math.max(0, l)))),
      (this._target[i] = this._fn(r, a, l));
  }
  wait() {
    const t = this._promises || (this._promises = []);
    return new Promise((n, s) => {
      t.push({ res: n, rej: s });
    });
  }
  _notify(t) {
    const n = t ? "res" : "rej",
      s = this._promises || [];
    for (let i = 0; i < s.length; i++) s[i][n]();
  }
}
const n_ = ["x", "y", "borderWidth", "radius", "tension"],
  s_ = ["color", "borderColor", "backgroundColor"];
at.set("animation", {
  delay: void 0,
  duration: 1e3,
  easing: "easeOutQuart",
  fn: void 0,
  from: void 0,
  loop: void 0,
  to: void 0,
  type: void 0,
});
const i_ = Object.keys(at.animation);
at.describe("animation", {
  _fallback: !1,
  _indexable: !1,
  _scriptable: (e) => e !== "onProgress" && e !== "onComplete" && e !== "fn",
});
at.set("animations", {
  colors: { type: "color", properties: s_ },
  numbers: { type: "number", properties: n_ },
});
at.describe("animations", { _fallback: "animation" });
at.set("transitions", {
  active: { animation: { duration: 400 } },
  resize: { animation: { duration: 0 } },
  show: {
    animations: {
      colors: { from: "transparent" },
      visible: { type: "boolean", duration: 0 },
    },
  },
  hide: {
    animations: {
      colors: { to: "transparent" },
      visible: { type: "boolean", easing: "linear", fn: (e) => e | 0 },
    },
  },
});
class Qf {
  constructor(t, n) {
    (this._chart = t), (this._properties = new Map()), this.configure(n);
  }
  configure(t) {
    if (!ft(t)) return;
    const n = this._properties;
    Object.getOwnPropertyNames(t).forEach((s) => {
      const i = t[s];
      if (!ft(i)) return;
      const r = {};
      for (const o of i_) r[o] = i[o];
      ((Ct(i.properties) && i.properties) || [s]).forEach((o) => {
        (o === s || !n.has(o)) && n.set(o, r);
      });
    });
  }
  _animateOptions(t, n) {
    const s = n.options,
      i = o_(t, s);
    if (!i) return [];
    const r = this._createAnimations(i, s);
    return (
      s.$shared &&
        r_(t.options.$animations, s).then(
          () => {
            t.options = s;
          },
          () => {}
        ),
      r
    );
  }
  _createAnimations(t, n) {
    const s = this._properties,
      i = [],
      r = t.$animations || (t.$animations = {}),
      o = Object.keys(n),
      a = Date.now();
    let l;
    for (l = o.length - 1; l >= 0; --l) {
      const c = o[l];
      if (c.charAt(0) === "$") continue;
      if (c === "options") {
        i.push(...this._animateOptions(t, n));
        continue;
      }
      const u = n[c];
      let f = r[c];
      const h = s.get(c);
      if (f)
        if (h && f.active()) {
          f.update(h, u, a);
          continue;
        } else f.cancel();
      if (!h || !h.duration) {
        t[c] = u;
        continue;
      }
      (r[c] = f = new e_(h, t, c, u)), i.push(f);
    }
    return i;
  }
  update(t, n) {
    if (this._properties.size === 0) {
      Object.assign(t, n);
      return;
    }
    const s = this._createAnimations(t, n);
    if (s.length) return Re.add(this._chart, s), !0;
  }
}
function r_(e, t) {
  const n = [],
    s = Object.keys(t);
  for (let i = 0; i < s.length; i++) {
    const r = e[s[i]];
    r && r.active() && n.push(r.wait());
  }
  return Promise.all(n);
}
function o_(e, t) {
  if (!t) return;
  let n = e.options;
  if (!n) {
    e.options = t;
    return;
  }
  return (
    n.$shared &&
      (e.options = n = Object.assign({}, n, { $shared: !1, $animations: {} })),
    n
  );
}
function tc(e, t) {
  const n = (e && e.options) || {},
    s = n.reverse,
    i = n.min === void 0 ? t : 0,
    r = n.max === void 0 ? t : 0;
  return { start: s ? r : i, end: s ? i : r };
}
function a_(e, t, n) {
  if (n === !1) return !1;
  const s = tc(e, n),
    i = tc(t, n);
  return { top: i.end, right: s.end, bottom: i.start, left: s.start };
}
function l_(e) {
  let t, n, s, i;
  return (
    ft(e)
      ? ((t = e.top), (n = e.right), (s = e.bottom), (i = e.left))
      : (t = n = s = i = e),
    { top: t, right: n, bottom: s, left: i, disabled: e === !1 }
  );
}
function Gf(e, t) {
  const n = [],
    s = e._getSortedDatasetMetas(t);
  let i, r;
  for (i = 0, r = s.length; i < r; ++i) n.push(s[i].index);
  return n;
}
function ec(e, t, n, s = {}) {
  const i = e.keys,
    r = s.mode === "single";
  let o, a, l, c;
  if (t !== null) {
    for (o = 0, a = i.length; o < a; ++o) {
      if (((l = +i[o]), l === n)) {
        if (s.all) continue;
        break;
      }
      (c = e.values[l]), zt(c) && (r || t === 0 || Pe(t) === Pe(c)) && (t += c);
    }
    return t;
  }
}
function c_(e) {
  const t = Object.keys(e),
    n = new Array(t.length);
  let s, i, r;
  for (s = 0, i = t.length; s < i; ++s) (r = t[s]), (n[s] = { x: r, y: e[r] });
  return n;
}
function nc(e, t) {
  const n = e && e.options.stacked;
  return n || (n === void 0 && t.stack !== void 0);
}
function u_(e, t, n) {
  return `${e.id}.${t.id}.${n.stack || n.type}`;
}
function f_(e) {
  const { min: t, max: n, minDefined: s, maxDefined: i } = e.getUserBounds();
  return {
    min: s ? t : Number.NEGATIVE_INFINITY,
    max: i ? n : Number.POSITIVE_INFINITY,
  };
}
function h_(e, t, n) {
  const s = e[t] || (e[t] = {});
  return s[n] || (s[n] = {});
}
function sc(e, t, n, s) {
  for (const i of t.getMatchingVisibleMetas(s).reverse()) {
    const r = e[i.index];
    if ((n && r > 0) || (!n && r < 0)) return i.index;
  }
  return null;
}
function ic(e, t) {
  const { chart: n, _cachedMeta: s } = e,
    i = n._stacks || (n._stacks = {}),
    { iScale: r, vScale: o, index: a } = s,
    l = r.axis,
    c = o.axis,
    u = u_(r, o, s),
    f = t.length;
  let h;
  for (let d = 0; d < f; ++d) {
    const p = t[d],
      { [l]: g, [c]: x } = p,
      b = p._stacks || (p._stacks = {});
    (h = b[c] = h_(i, u, g)),
      (h[a] = x),
      (h._top = sc(h, o, !0, s.type)),
      (h._bottom = sc(h, o, !1, s.type));
  }
}
function Er(e, t) {
  const n = e.scales;
  return Object.keys(n)
    .filter((s) => n[s].axis === t)
    .shift();
}
function d_(e, t) {
  return cn(e, {
    active: !1,
    dataset: void 0,
    datasetIndex: t,
    index: t,
    mode: "default",
    type: "dataset",
  });
}
function p_(e, t, n) {
  return cn(e, {
    active: !1,
    dataIndex: t,
    parsed: void 0,
    raw: void 0,
    element: n,
    index: t,
    mode: "default",
    type: "data",
  });
}
function cs(e, t) {
  const n = e.controller.index,
    s = e.vScale && e.vScale.axis;
  if (s) {
    t = t || e._parsed;
    for (const i of t) {
      const r = i._stacks;
      if (!r || r[s] === void 0 || r[s][n] === void 0) return;
      delete r[s][n];
    }
  }
}
const Ar = (e) => e === "reset" || e === "none",
  rc = (e, t) => (t ? e : Object.assign({}, e)),
  g_ = (e, t, n) =>
    e && !t.hidden && t._stacked && { keys: Gf(n, !0), values: null };
class xe {
  constructor(t, n) {
    (this.chart = t),
      (this._ctx = t.ctx),
      (this.index = n),
      (this._cachedDataOpts = {}),
      (this._cachedMeta = this.getMeta()),
      (this._type = this._cachedMeta.type),
      (this.options = void 0),
      (this._parsing = !1),
      (this._data = void 0),
      (this._objectData = void 0),
      (this._sharedOptions = void 0),
      (this._drawStart = void 0),
      (this._drawCount = void 0),
      (this.enableOptionSharing = !1),
      (this.supportsDecimation = !1),
      (this.$context = void 0),
      (this._syncList = []),
      this.initialize();
  }
  initialize() {
    const t = this._cachedMeta;
    this.configure(),
      this.linkScales(),
      (t._stacked = nc(t.vScale, t)),
      this.addElements();
  }
  updateIndex(t) {
    this.index !== t && cs(this._cachedMeta), (this.index = t);
  }
  linkScales() {
    const t = this.chart,
      n = this._cachedMeta,
      s = this.getDataset(),
      i = (f, h, d, p) => (f === "x" ? h : f === "r" ? p : d),
      r = (n.xAxisID = nt(s.xAxisID, Er(t, "x"))),
      o = (n.yAxisID = nt(s.yAxisID, Er(t, "y"))),
      a = (n.rAxisID = nt(s.rAxisID, Er(t, "r"))),
      l = n.indexAxis,
      c = (n.iAxisID = i(l, r, o, a)),
      u = (n.vAxisID = i(l, o, r, a));
    (n.xScale = this.getScaleForId(r)),
      (n.yScale = this.getScaleForId(o)),
      (n.rScale = this.getScaleForId(a)),
      (n.iScale = this.getScaleForId(c)),
      (n.vScale = this.getScaleForId(u));
  }
  getDataset() {
    return this.chart.data.datasets[this.index];
  }
  getMeta() {
    return this.chart.getDatasetMeta(this.index);
  }
  getScaleForId(t) {
    return this.chart.scales[t];
  }
  _getOtherScale(t) {
    const n = this._cachedMeta;
    return t === n.iScale ? n.vScale : n.iScale;
  }
  reset() {
    this._update("reset");
  }
  _destroy() {
    const t = this._cachedMeta;
    this._data && Fl(this._data, this), t._stacked && cs(t);
  }
  _dataCheck() {
    const t = this.getDataset(),
      n = t.data || (t.data = []),
      s = this._data;
    if (ft(n)) this._data = c_(n);
    else if (s !== n) {
      if (s) {
        Fl(s, this);
        const i = this._cachedMeta;
        cs(i), (i._parsed = []);
      }
      n && Object.isExtensible(n) && Lb(n, this),
        (this._syncList = []),
        (this._data = n);
    }
  }
  addElements() {
    const t = this._cachedMeta;
    this._dataCheck(),
      this.datasetElementType && (t.dataset = new this.datasetElementType());
  }
  buildOrUpdateElements(t) {
    const n = this._cachedMeta,
      s = this.getDataset();
    let i = !1;
    this._dataCheck();
    const r = n._stacked;
    (n._stacked = nc(n.vScale, n)),
      n.stack !== s.stack && ((i = !0), cs(n), (n.stack = s.stack)),
      this._resyncElements(t),
      (i || r !== n._stacked) && ic(this, n._parsed);
  }
  configure() {
    const t = this.chart.config,
      n = t.datasetScopeKeys(this._type),
      s = t.getOptionScopes(this.getDataset(), n, !0);
    (this.options = t.createResolver(s, this.getContext())),
      (this._parsing = this.options.parsing),
      (this._cachedDataOpts = {});
  }
  parse(t, n) {
    const { _cachedMeta: s, _data: i } = this,
      { iScale: r, _stacked: o } = s,
      a = r.axis;
    let l = t === 0 && n === i.length ? !0 : s._sorted,
      c = t > 0 && s._parsed[t - 1],
      u,
      f,
      h;
    if (this._parsing === !1) (s._parsed = i), (s._sorted = !0), (h = i);
    else {
      Ct(i[t])
        ? (h = this.parseArrayData(s, i, t, n))
        : ft(i[t])
        ? (h = this.parseObjectData(s, i, t, n))
        : (h = this.parsePrimitiveData(s, i, t, n));
      const d = () => f[a] === null || (c && f[a] < c[a]);
      for (u = 0; u < n; ++u)
        (s._parsed[u + t] = f = h[u]), l && (d() && (l = !1), (c = f));
      s._sorted = l;
    }
    o && ic(this, h);
  }
  parsePrimitiveData(t, n, s, i) {
    const { iScale: r, vScale: o } = t,
      a = r.axis,
      l = o.axis,
      c = r.getLabels(),
      u = r === o,
      f = new Array(i);
    let h, d, p;
    for (h = 0, d = i; h < d; ++h)
      (p = h + s),
        (f[h] = { [a]: u || r.parse(c[p], p), [l]: o.parse(n[p], p) });
    return f;
  }
  parseArrayData(t, n, s, i) {
    const { xScale: r, yScale: o } = t,
      a = new Array(i);
    let l, c, u, f;
    for (l = 0, c = i; l < c; ++l)
      (u = l + s),
        (f = n[u]),
        (a[l] = { x: r.parse(f[0], u), y: o.parse(f[1], u) });
    return a;
  }
  parseObjectData(t, n, s, i) {
    const { xScale: r, yScale: o } = t,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      c = new Array(i);
    let u, f, h, d;
    for (u = 0, f = i; u < f; ++u)
      (h = u + s),
        (d = n[h]),
        (c[u] = { x: r.parse(on(d, a), h), y: o.parse(on(d, l), h) });
    return c;
  }
  getParsed(t) {
    return this._cachedMeta._parsed[t];
  }
  getDataElement(t) {
    return this._cachedMeta.data[t];
  }
  applyStack(t, n, s) {
    const i = this.chart,
      r = this._cachedMeta,
      o = n[t.axis],
      a = { keys: Gf(i, !0), values: n._stacks[t.axis] };
    return ec(a, o, r.index, { mode: s });
  }
  updateRangeFromParsed(t, n, s, i) {
    const r = s[n.axis];
    let o = r === null ? NaN : r;
    const a = i && s._stacks[n.axis];
    i && a && ((i.values = a), (o = ec(i, r, this._cachedMeta.index))),
      (t.min = Math.min(t.min, o)),
      (t.max = Math.max(t.max, o));
  }
  getMinMax(t, n) {
    const s = this._cachedMeta,
      i = s._parsed,
      r = s._sorted && t === s.iScale,
      o = i.length,
      a = this._getOtherScale(t),
      l = g_(n, s, this.chart),
      c = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY },
      { min: u, max: f } = f_(a);
    let h, d;
    function p() {
      d = i[h];
      const g = d[a.axis];
      return !zt(d[t.axis]) || u > g || f < g;
    }
    for (
      h = 0;
      h < o && !(!p() && (this.updateRangeFromParsed(c, t, d, l), r));
      ++h
    );
    if (r) {
      for (h = o - 1; h >= 0; --h)
        if (!p()) {
          this.updateRangeFromParsed(c, t, d, l);
          break;
        }
    }
    return c;
  }
  getAllParsedValues(t) {
    const n = this._cachedMeta._parsed,
      s = [];
    let i, r, o;
    for (i = 0, r = n.length; i < r; ++i)
      (o = n[i][t.axis]), zt(o) && s.push(o);
    return s;
  }
  getMaxOverflow() {
    return !1;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      s = n.iScale,
      i = n.vScale,
      r = this.getParsed(t);
    return {
      label: s ? "" + s.getLabelForValue(r[s.axis]) : "",
      value: i ? "" + i.getLabelForValue(r[i.axis]) : "",
    };
  }
  _update(t) {
    const n = this._cachedMeta;
    this.update(t || "default"),
      (n._clip = l_(
        nt(this.options.clip, a_(n.xScale, n.yScale, this.getMaxOverflow()))
      ));
  }
  update(t) {}
  draw() {
    const t = this._ctx,
      n = this.chart,
      s = this._cachedMeta,
      i = s.data || [],
      r = n.chartArea,
      o = [],
      a = this._drawStart || 0,
      l = this._drawCount || i.length - a,
      c = this.options.drawActiveElementsOnTop;
    let u;
    for (s.dataset && s.dataset.draw(t, r, a, l), u = a; u < a + l; ++u) {
      const f = i[u];
      f.hidden || (f.active && c ? o.push(f) : f.draw(t, r));
    }
    for (u = 0; u < o.length; ++u) o[u].draw(t, r);
  }
  getStyle(t, n) {
    const s = n ? "active" : "default";
    return t === void 0 && this._cachedMeta.dataset
      ? this.resolveDatasetElementOptions(s)
      : this.resolveDataElementOptions(t || 0, s);
  }
  getContext(t, n, s) {
    const i = this.getDataset();
    let r;
    if (t >= 0 && t < this._cachedMeta.data.length) {
      const o = this._cachedMeta.data[t];
      (r = o.$context || (o.$context = p_(this.getContext(), t, o))),
        (r.parsed = this.getParsed(t)),
        (r.raw = i.data[t]),
        (r.index = r.dataIndex = t);
    } else
      (r =
        this.$context ||
        (this.$context = d_(this.chart.getContext(), this.index))),
        (r.dataset = i),
        (r.index = r.datasetIndex = this.index);
    return (r.active = !!n), (r.mode = s), r;
  }
  resolveDatasetElementOptions(t) {
    return this._resolveElementOptions(this.datasetElementType.id, t);
  }
  resolveDataElementOptions(t, n) {
    return this._resolveElementOptions(this.dataElementType.id, n, t);
  }
  _resolveElementOptions(t, n = "default", s) {
    const i = n === "active",
      r = this._cachedDataOpts,
      o = t + "-" + n,
      a = r[o],
      l = this.enableOptionSharing && ae(s);
    if (a) return rc(a, l);
    const c = this.chart.config,
      u = c.datasetElementScopeKeys(this._type, t),
      f = i ? [`${t}Hover`, "hover", t, ""] : [t, ""],
      h = c.getOptionScopes(this.getDataset(), u),
      d = Object.keys(at.elements[t]),
      p = () => this.getContext(s, i),
      g = c.resolveNamedOptions(h, d, p, f);
    return g.$shared && ((g.$shared = l), (r[o] = Object.freeze(rc(g, l)))), g;
  }
  _resolveAnimations(t, n, s) {
    const i = this.chart,
      r = this._cachedDataOpts,
      o = `animation-${n}`,
      a = r[o];
    if (a) return a;
    let l;
    if (i.options.animation !== !1) {
      const u = this.chart.config,
        f = u.datasetAnimationScopeKeys(this._type, n),
        h = u.getOptionScopes(this.getDataset(), f);
      l = u.createResolver(h, this.getContext(t, s, n));
    }
    const c = new Qf(i, l && l.animations);
    return l && l._cacheable && (r[o] = Object.freeze(c)), c;
  }
  getSharedOptions(t) {
    if (t.$shared)
      return (
        this._sharedOptions || (this._sharedOptions = Object.assign({}, t))
      );
  }
  includeOptions(t, n) {
    return !n || Ar(t) || this.chart._animationsDisabled;
  }
  _getSharedOptions(t, n) {
    const s = this.resolveDataElementOptions(t, n),
      i = this._sharedOptions,
      r = this.getSharedOptions(s),
      o = this.includeOptions(n, r) || r !== i;
    return (
      this.updateSharedOptions(r, n, s), { sharedOptions: r, includeOptions: o }
    );
  }
  updateElement(t, n, s, i) {
    Ar(i) ? Object.assign(t, s) : this._resolveAnimations(n, i).update(t, s);
  }
  updateSharedOptions(t, n, s) {
    t && !Ar(n) && this._resolveAnimations(void 0, n).update(t, s);
  }
  _setStyle(t, n, s, i) {
    t.active = i;
    const r = this.getStyle(n, i);
    this._resolveAnimations(n, s, i).update(t, {
      options: (!i && this.getSharedOptions(r)) || r,
    });
  }
  removeHoverStyle(t, n, s) {
    this._setStyle(t, s, "active", !1);
  }
  setHoverStyle(t, n, s) {
    this._setStyle(t, s, "active", !0);
  }
  _removeDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !1);
  }
  _setDatasetHoverStyle() {
    const t = this._cachedMeta.dataset;
    t && this._setStyle(t, void 0, "active", !0);
  }
  _resyncElements(t) {
    const n = this._data,
      s = this._cachedMeta.data;
    for (const [a, l, c] of this._syncList) this[a](l, c);
    this._syncList = [];
    const i = s.length,
      r = n.length,
      o = Math.min(r, i);
    o && this.parse(0, o),
      r > i
        ? this._insertElements(i, r - i, t)
        : r < i && this._removeElements(r, i - r);
  }
  _insertElements(t, n, s = !0) {
    const i = this._cachedMeta,
      r = i.data,
      o = t + n;
    let a;
    const l = (c) => {
      for (c.length += n, a = c.length - 1; a >= o; a--) c[a] = c[a - n];
    };
    for (l(r), a = t; a < o; ++a) r[a] = new this.dataElementType();
    this._parsing && l(i._parsed),
      this.parse(t, n),
      s && this.updateElements(r, t, n, "reset");
  }
  updateElements(t, n, s, i) {}
  _removeElements(t, n) {
    const s = this._cachedMeta;
    if (this._parsing) {
      const i = s._parsed.splice(t, n);
      s._stacked && cs(s, i);
    }
    s.data.splice(t, n);
  }
  _sync(t) {
    if (this._parsing) this._syncList.push(t);
    else {
      const [n, s, i] = t;
      this[n](s, i);
    }
    this.chart._dataChanges.push([this.index, ...t]);
  }
  _onDataPush() {
    const t = arguments.length;
    this._sync(["_insertElements", this.getDataset().data.length - t, t]);
  }
  _onDataPop() {
    this._sync(["_removeElements", this._cachedMeta.data.length - 1, 1]);
  }
  _onDataShift() {
    this._sync(["_removeElements", 0, 1]);
  }
  _onDataSplice(t, n) {
    n && this._sync(["_removeElements", t, n]);
    const s = arguments.length - 2;
    s && this._sync(["_insertElements", t, s]);
  }
  _onDataUnshift() {
    this._sync(["_insertElements", 0, arguments.length]);
  }
}
xe.defaults = {};
xe.prototype.datasetElementType = null;
xe.prototype.dataElementType = null;
function m_(e, t) {
  if (!e._cache.$bar) {
    const n = e.getMatchingVisibleMetas(t);
    let s = [];
    for (let i = 0, r = n.length; i < r; i++)
      s = s.concat(n[i].controller.getAllParsedValues(e));
    e._cache.$bar = Pf(s.sort((i, r) => i - r));
  }
  return e._cache.$bar;
}
function b_(e) {
  const t = e.iScale,
    n = m_(t, e.type);
  let s = t._length,
    i,
    r,
    o,
    a;
  const l = () => {
    o === 32767 ||
      o === -32768 ||
      (ae(a) && (s = Math.min(s, Math.abs(o - a) || s)), (a = o));
  };
  for (i = 0, r = n.length; i < r; ++i) (o = t.getPixelForValue(n[i])), l();
  for (a = void 0, i = 0, r = t.ticks.length; i < r; ++i)
    (o = t.getPixelForTick(i)), l();
  return s;
}
function x_(e, t, n, s) {
  const i = n.barThickness;
  let r, o;
  return (
    ht(i)
      ? ((r = t.min * n.categoryPercentage), (o = n.barPercentage))
      : ((r = i * s), (o = 1)),
    { chunk: r / s, ratio: o, start: t.pixels[e] - r / 2 }
  );
}
function __(e, t, n, s) {
  const i = t.pixels,
    r = i[e];
  let o = e > 0 ? i[e - 1] : null,
    a = e < i.length - 1 ? i[e + 1] : null;
  const l = n.categoryPercentage;
  o === null && (o = r - (a === null ? t.end - t.start : a - r)),
    a === null && (a = r + r - o);
  const c = r - ((r - Math.min(o, a)) / 2) * l;
  return {
    chunk: ((Math.abs(a - o) / 2) * l) / s,
    ratio: n.barPercentage,
    start: c,
  };
}
function y_(e, t, n, s) {
  const i = n.parse(e[0], s),
    r = n.parse(e[1], s),
    o = Math.min(i, r),
    a = Math.max(i, r);
  let l = o,
    c = a;
  Math.abs(o) > Math.abs(a) && ((l = a), (c = o)),
    (t[n.axis] = c),
    (t._custom = { barStart: l, barEnd: c, start: i, end: r, min: o, max: a });
}
function Zf(e, t, n, s) {
  return Ct(e) ? y_(e, t, n, s) : (t[n.axis] = n.parse(e, s)), t;
}
function oc(e, t, n, s) {
  const i = e.iScale,
    r = e.vScale,
    o = i.getLabels(),
    a = i === r,
    l = [];
  let c, u, f, h;
  for (c = n, u = n + s; c < u; ++c)
    (h = t[c]),
      (f = {}),
      (f[i.axis] = a || i.parse(o[c], c)),
      l.push(Zf(h, f, r, c));
  return l;
}
function Tr(e) {
  return e && e.barStart !== void 0 && e.barEnd !== void 0;
}
function v_(e, t, n) {
  return e !== 0 ? Pe(e) : (t.isHorizontal() ? 1 : -1) * (t.min >= n ? 1 : -1);
}
function C_(e) {
  let t, n, s, i, r;
  return (
    e.horizontal
      ? ((t = e.base > e.x), (n = "left"), (s = "right"))
      : ((t = e.base < e.y), (n = "bottom"), (s = "top")),
    t ? ((i = "end"), (r = "start")) : ((i = "start"), (r = "end")),
    { start: n, end: s, reverse: t, top: i, bottom: r }
  );
}
function w_(e, t, n, s) {
  let i = t.borderSkipped;
  const r = {};
  if (!i) {
    e.borderSkipped = r;
    return;
  }
  if (i === !0) {
    e.borderSkipped = { top: !0, right: !0, bottom: !0, left: !0 };
    return;
  }
  const { start: o, end: a, reverse: l, top: c, bottom: u } = C_(e);
  i === "middle" &&
    n &&
    ((e.enableBorderRadius = !0),
    (n._top || 0) === s
      ? (i = c)
      : (n._bottom || 0) === s
      ? (i = u)
      : ((r[ac(u, o, a, l)] = !0), (i = c))),
    (r[ac(i, o, a, l)] = !0),
    (e.borderSkipped = r);
}
function ac(e, t, n, s) {
  return s ? ((e = M_(e, t, n)), (e = lc(e, n, t))) : (e = lc(e, t, n)), e;
}
function M_(e, t, n) {
  return e === t ? n : e === n ? t : e;
}
function lc(e, t, n) {
  return e === "start" ? t : e === "end" ? n : e;
}
function S_(e, { inflateAmount: t }, n) {
  e.inflateAmount = t === "auto" ? (n === 1 ? 0.33 : 0) : t;
}
class ma extends xe {
  parsePrimitiveData(t, n, s, i) {
    return oc(t, n, s, i);
  }
  parseArrayData(t, n, s, i) {
    return oc(t, n, s, i);
  }
  parseObjectData(t, n, s, i) {
    const { iScale: r, vScale: o } = t,
      { xAxisKey: a = "x", yAxisKey: l = "y" } = this._parsing,
      c = r.axis === "x" ? a : l,
      u = o.axis === "x" ? a : l,
      f = [];
    let h, d, p, g;
    for (h = s, d = s + i; h < d; ++h)
      (g = n[h]),
        (p = {}),
        (p[r.axis] = r.parse(on(g, c), h)),
        f.push(Zf(on(g, u), p, o, h));
    return f;
  }
  updateRangeFromParsed(t, n, s, i) {
    super.updateRangeFromParsed(t, n, s, i);
    const r = s._custom;
    r &&
      n === this._cachedMeta.vScale &&
      ((t.min = Math.min(t.min, r.min)), (t.max = Math.max(t.max, r.max)));
  }
  getMaxOverflow() {
    return 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      { iScale: s, vScale: i } = n,
      r = this.getParsed(t),
      o = r._custom,
      a = Tr(o)
        ? "[" + o.start + ", " + o.end + "]"
        : "" + i.getLabelForValue(r[i.axis]);
    return { label: "" + s.getLabelForValue(r[s.axis]), value: a };
  }
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
    const t = this._cachedMeta;
    t.stack = this.getDataset().stack;
  }
  update(t) {
    const n = this._cachedMeta;
    this.updateElements(n.data, 0, n.data.length, t);
  }
  updateElements(t, n, s, i) {
    const r = i === "reset",
      {
        index: o,
        _cachedMeta: { vScale: a },
      } = this,
      l = a.getBasePixel(),
      c = a.isHorizontal(),
      u = this._getRuler(),
      { sharedOptions: f, includeOptions: h } = this._getSharedOptions(n, i);
    for (let d = n; d < n + s; d++) {
      const p = this.getParsed(d),
        g =
          r || ht(p[a.axis])
            ? { base: l, head: l }
            : this._calculateBarValuePixels(d),
        x = this._calculateBarIndexPixels(d, u),
        b = (p._stacks || {})[a.axis],
        _ = {
          horizontal: c,
          base: g.base,
          enableBorderRadius:
            !b || Tr(p._custom) || o === b._top || o === b._bottom,
          x: c ? g.head : x.center,
          y: c ? x.center : g.head,
          height: c ? x.size : Math.abs(g.size),
          width: c ? Math.abs(g.size) : x.size,
        };
      h &&
        (_.options =
          f || this.resolveDataElementOptions(d, t[d].active ? "active" : i));
      const v = _.options || t[d].options;
      w_(_, v, b, o), S_(_, v, u.ratio), this.updateElement(t[d], d, _, i);
    }
  }
  _getStacks(t, n) {
    const { iScale: s } = this._cachedMeta,
      i = s
        .getMatchingVisibleMetas(this._type)
        .filter((l) => l.controller.options.grouped),
      r = s.options.stacked,
      o = [],
      a = (l) => {
        const c = l.controller.getParsed(n),
          u = c && c[l.vScale.axis];
        if (ht(u) || isNaN(u)) return !0;
      };
    for (const l of i)
      if (
        !(n !== void 0 && a(l)) &&
        ((r === !1 ||
          o.indexOf(l.stack) === -1 ||
          (r === void 0 && l.stack === void 0)) &&
          o.push(l.stack),
        l.index === t)
      )
        break;
    return o.length || o.push(void 0), o;
  }
  _getStackCount(t) {
    return this._getStacks(void 0, t).length;
  }
  _getStackIndex(t, n, s) {
    const i = this._getStacks(t, s),
      r = n !== void 0 ? i.indexOf(n) : -1;
    return r === -1 ? i.length - 1 : r;
  }
  _getRuler() {
    const t = this.options,
      n = this._cachedMeta,
      s = n.iScale,
      i = [];
    let r, o;
    for (r = 0, o = n.data.length; r < o; ++r)
      i.push(s.getPixelForValue(this.getParsed(r)[s.axis], r));
    const a = t.barThickness;
    return {
      min: a || b_(n),
      pixels: i,
      start: s._startPixel,
      end: s._endPixel,
      stackCount: this._getStackCount(),
      scale: s,
      grouped: t.grouped,
      ratio: a ? 1 : t.categoryPercentage * t.barPercentage,
    };
  }
  _calculateBarValuePixels(t) {
    const {
        _cachedMeta: { vScale: n, _stacked: s },
        options: { base: i, minBarLength: r },
      } = this,
      o = i || 0,
      a = this.getParsed(t),
      l = a._custom,
      c = Tr(l);
    let u = a[n.axis],
      f = 0,
      h = s ? this.applyStack(n, a, s) : u,
      d,
      p;
    h !== u && ((f = h - u), (h = u)),
      c &&
        ((u = l.barStart),
        (h = l.barEnd - l.barStart),
        u !== 0 && Pe(u) !== Pe(l.barEnd) && (f = 0),
        (f += u));
    const g = !ht(i) && !c ? i : f;
    let x = n.getPixelForValue(g);
    if (
      (this.chart.getDataVisibility(t)
        ? (d = n.getPixelForValue(f + h))
        : (d = x),
      (p = d - x),
      Math.abs(p) < r)
    ) {
      (p = v_(p, n, o) * r), u === o && (x -= p / 2);
      const b = n.getPixelForDecimal(0),
        _ = n.getPixelForDecimal(1),
        v = Math.min(b, _),
        C = Math.max(b, _);
      (x = Math.max(Math.min(x, C), v)), (d = x + p);
    }
    if (x === n.getPixelForValue(o)) {
      const b = (Pe(p) * n.getLineWidthForValue(o)) / 2;
      (x += b), (p -= b);
    }
    return { size: p, base: x, head: d, center: d + p / 2 };
  }
  _calculateBarIndexPixels(t, n) {
    const s = n.scale,
      i = this.options,
      r = i.skipNull,
      o = nt(i.maxBarThickness, 1 / 0);
    let a, l;
    if (n.grouped) {
      const c = r ? this._getStackCount(t) : n.stackCount,
        u = i.barThickness === "flex" ? __(t, n, i, c) : x_(t, n, i, c),
        f = this._getStackIndex(
          this.index,
          this._cachedMeta.stack,
          r ? t : void 0
        );
      (a = u.start + u.chunk * f + u.chunk / 2),
        (l = Math.min(o, u.chunk * u.ratio));
    } else
      (a = s.getPixelForValue(this.getParsed(t)[s.axis], t)),
        (l = Math.min(o, n.min * n.ratio));
    return { base: a - l / 2, head: a + l / 2, center: a, size: l };
  }
  draw() {
    const t = this._cachedMeta,
      n = t.vScale,
      s = t.data,
      i = s.length;
    let r = 0;
    for (; r < i; ++r)
      this.getParsed(r)[n.axis] !== null && s[r].draw(this._ctx);
  }
}
ma.id = "bar";
ma.defaults = {
  datasetElementType: !1,
  dataElementType: "bar",
  categoryPercentage: 0.8,
  barPercentage: 0.9,
  grouped: !0,
  animations: {
    numbers: {
      type: "number",
      properties: ["x", "y", "base", "width", "height"],
    },
  },
};
ma.overrides = {
  scales: {
    _index_: { type: "category", offset: !0, grid: { offset: !0 } },
    _value_: { type: "linear", beginAtZero: !0 },
  },
};
class ba extends xe {
  initialize() {
    (this.enableOptionSharing = !0), super.initialize();
  }
  parsePrimitiveData(t, n, s, i) {
    const r = super.parsePrimitiveData(t, n, s, i);
    for (let o = 0; o < r.length; o++)
      r[o]._custom = this.resolveDataElementOptions(o + s).radius;
    return r;
  }
  parseArrayData(t, n, s, i) {
    const r = super.parseArrayData(t, n, s, i);
    for (let o = 0; o < r.length; o++) {
      const a = n[s + o];
      r[o]._custom = nt(a[2], this.resolveDataElementOptions(o + s).radius);
    }
    return r;
  }
  parseObjectData(t, n, s, i) {
    const r = super.parseObjectData(t, n, s, i);
    for (let o = 0; o < r.length; o++) {
      const a = n[s + o];
      r[o]._custom = nt(
        a && a.r && +a.r,
        this.resolveDataElementOptions(o + s).radius
      );
    }
    return r;
  }
  getMaxOverflow() {
    const t = this._cachedMeta.data;
    let n = 0;
    for (let s = t.length - 1; s >= 0; --s)
      n = Math.max(n, t[s].size(this.resolveDataElementOptions(s)) / 2);
    return n > 0 && n;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      { xScale: s, yScale: i } = n,
      r = this.getParsed(t),
      o = s.getLabelForValue(r.x),
      a = i.getLabelForValue(r.y),
      l = r._custom;
    return {
      label: n.label,
      value: "(" + o + ", " + a + (l ? ", " + l : "") + ")",
    };
  }
  update(t) {
    const n = this._cachedMeta.data;
    this.updateElements(n, 0, n.length, t);
  }
  updateElements(t, n, s, i) {
    const r = i === "reset",
      { iScale: o, vScale: a } = this._cachedMeta,
      { sharedOptions: l, includeOptions: c } = this._getSharedOptions(n, i),
      u = o.axis,
      f = a.axis;
    for (let h = n; h < n + s; h++) {
      const d = t[h],
        p = !r && this.getParsed(h),
        g = {},
        x = (g[u] = r ? o.getPixelForDecimal(0.5) : o.getPixelForValue(p[u])),
        b = (g[f] = r ? a.getBasePixel() : a.getPixelForValue(p[f]));
      (g.skip = isNaN(x) || isNaN(b)),
        c &&
          ((g.options =
            l || this.resolveDataElementOptions(h, d.active ? "active" : i)),
          r && (g.options.radius = 0)),
        this.updateElement(d, h, g, i);
    }
  }
  resolveDataElementOptions(t, n) {
    const s = this.getParsed(t);
    let i = super.resolveDataElementOptions(t, n);
    i.$shared && (i = Object.assign({}, i, { $shared: !1 }));
    const r = i.radius;
    return (
      n !== "active" && (i.radius = 0), (i.radius += nt(s && s._custom, r)), i
    );
  }
}
ba.id = "bubble";
ba.defaults = {
  datasetElementType: !1,
  dataElementType: "point",
  animations: {
    numbers: {
      type: "number",
      properties: ["x", "y", "borderWidth", "radius"],
    },
  },
};
ba.overrides = {
  scales: { x: { type: "linear" }, y: { type: "linear" } },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
      },
    },
  },
};
function k_(e, t, n) {
  let s = 1,
    i = 1,
    r = 0,
    o = 0;
  if (t < mt) {
    const a = e,
      l = a + t,
      c = Math.cos(a),
      u = Math.sin(a),
      f = Math.cos(l),
      h = Math.sin(l),
      d = (v, C, w) => (zs(v, a, l, !0) ? 1 : Math.max(C, C * n, w, w * n)),
      p = (v, C, w) => (zs(v, a, l, !0) ? -1 : Math.min(C, C * n, w, w * n)),
      g = d(0, c, f),
      x = d(kt, u, h),
      b = p(Pt, c, f),
      _ = p(Pt + kt, u, h);
    (s = (g - b) / 2),
      (i = (x - _) / 2),
      (r = -(g + b) / 2),
      (o = -(x + _) / 2);
  }
  return { ratioX: s, ratioY: i, offsetX: r, offsetY: o };
}
class ss extends xe {
  constructor(t, n) {
    super(t, n),
      (this.enableOptionSharing = !0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.offsetX = void 0),
      (this.offsetY = void 0);
  }
  linkScales() {}
  parse(t, n) {
    const s = this.getDataset().data,
      i = this._cachedMeta;
    if (this._parsing === !1) i._parsed = s;
    else {
      let r = (l) => +s[l];
      if (ft(s[t])) {
        const { key: l = "value" } = this._parsing;
        r = (c) => +on(s[c], l);
      }
      let o, a;
      for (o = t, a = t + n; o < a; ++o) i._parsed[o] = r(o);
    }
  }
  _getRotation() {
    return pe(this.options.rotation - 90);
  }
  _getCircumference() {
    return pe(this.options.circumference);
  }
  _getRotationExtents() {
    let t = mt,
      n = -mt;
    for (let s = 0; s < this.chart.data.datasets.length; ++s)
      if (this.chart.isDatasetVisible(s)) {
        const i = this.chart.getDatasetMeta(s).controller,
          r = i._getRotation(),
          o = i._getCircumference();
        (t = Math.min(t, r)), (n = Math.max(n, r + o));
      }
    return { rotation: t, circumference: n - t };
  }
  update(t) {
    const n = this.chart,
      { chartArea: s } = n,
      i = this._cachedMeta,
      r = i.data,
      o =
        this.getMaxBorderWidth() + this.getMaxOffset(r) + this.options.spacing,
      a = Math.max((Math.min(s.width, s.height) - o) / 2, 0),
      l = Math.min(yb(this.options.cutout, a), 1),
      c = this._getRingWeight(this.index),
      { circumference: u, rotation: f } = this._getRotationExtents(),
      { ratioX: h, ratioY: d, offsetX: p, offsetY: g } = k_(f, u, l),
      x = (s.width - o) / h,
      b = (s.height - o) / d,
      _ = Math.max(Math.min(x, b) / 2, 0),
      v = Cf(this.options.radius, _),
      C = Math.max(v * l, 0),
      w = (v - C) / this._getVisibleDatasetWeightTotal();
    (this.offsetX = p * v),
      (this.offsetY = g * v),
      (i.total = this.calculateTotal()),
      (this.outerRadius = v - w * this._getRingWeightOffset(this.index)),
      (this.innerRadius = Math.max(this.outerRadius - w * c, 0)),
      this.updateElements(r, 0, r.length, t);
  }
  _circumference(t, n) {
    const s = this.options,
      i = this._cachedMeta,
      r = this._getCircumference();
    return (n && s.animation.animateRotate) ||
      !this.chart.getDataVisibility(t) ||
      i._parsed[t] === null ||
      i.data[t].hidden
      ? 0
      : this.calculateCircumference((i._parsed[t] * r) / mt);
  }
  updateElements(t, n, s, i) {
    const r = i === "reset",
      o = this.chart,
      a = o.chartArea,
      c = o.options.animation,
      u = (a.left + a.right) / 2,
      f = (a.top + a.bottom) / 2,
      h = r && c.animateScale,
      d = h ? 0 : this.innerRadius,
      p = h ? 0 : this.outerRadius,
      { sharedOptions: g, includeOptions: x } = this._getSharedOptions(n, i);
    let b = this._getRotation(),
      _;
    for (_ = 0; _ < n; ++_) b += this._circumference(_, r);
    for (_ = n; _ < n + s; ++_) {
      const v = this._circumference(_, r),
        C = t[_],
        w = {
          x: u + this.offsetX,
          y: f + this.offsetY,
          startAngle: b,
          endAngle: b + v,
          circumference: v,
          outerRadius: p,
          innerRadius: d,
        };
      x &&
        (w.options =
          g || this.resolveDataElementOptions(_, C.active ? "active" : i)),
        (b += v),
        this.updateElement(C, _, w, i);
    }
  }
  calculateTotal() {
    const t = this._cachedMeta,
      n = t.data;
    let s = 0,
      i;
    for (i = 0; i < n.length; i++) {
      const r = t._parsed[i];
      r !== null &&
        !isNaN(r) &&
        this.chart.getDataVisibility(i) &&
        !n[i].hidden &&
        (s += Math.abs(r));
    }
    return s;
  }
  calculateCircumference(t) {
    const n = this._cachedMeta.total;
    return n > 0 && !isNaN(t) ? mt * (Math.abs(t) / n) : 0;
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      s = this.chart,
      i = s.data.labels || [],
      r = Ks(n._parsed[t], s.options.locale);
    return { label: i[t] || "", value: r };
  }
  getMaxBorderWidth(t) {
    let n = 0;
    const s = this.chart;
    let i, r, o, a, l;
    if (!t) {
      for (i = 0, r = s.data.datasets.length; i < r; ++i)
        if (s.isDatasetVisible(i)) {
          (o = s.getDatasetMeta(i)), (t = o.data), (a = o.controller);
          break;
        }
    }
    if (!t) return 0;
    for (i = 0, r = t.length; i < r; ++i)
      (l = a.resolveDataElementOptions(i)),
        l.borderAlign !== "inner" &&
          (n = Math.max(n, l.borderWidth || 0, l.hoverBorderWidth || 0));
    return n;
  }
  getMaxOffset(t) {
    let n = 0;
    for (let s = 0, i = t.length; s < i; ++s) {
      const r = this.resolveDataElementOptions(s);
      n = Math.max(n, r.offset || 0, r.hoverOffset || 0);
    }
    return n;
  }
  _getRingWeightOffset(t) {
    let n = 0;
    for (let s = 0; s < t; ++s)
      this.chart.isDatasetVisible(s) && (n += this._getRingWeight(s));
    return n;
  }
  _getRingWeight(t) {
    return Math.max(nt(this.chart.data.datasets[t].weight, 1), 0);
  }
  _getVisibleDatasetWeightTotal() {
    return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
  }
}
ss.id = "doughnut";
ss.defaults = {
  datasetElementType: !1,
  dataElementType: "arc",
  animation: { animateRotate: !0, animateScale: !1 },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "circumference",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "startAngle",
        "x",
        "y",
        "offset",
        "borderWidth",
        "spacing",
      ],
    },
  },
  cutout: "50%",
  rotation: 0,
  circumference: 360,
  radius: "100%",
  spacing: 0,
  indexAxis: "r",
};
ss.descriptors = {
  _scriptable: (e) => e !== "spacing",
  _indexable: (e) => e !== "spacing",
};
ss.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(e) {
          const t = e.data;
          if (t.labels.length && t.datasets.length) {
            const {
              labels: { pointStyle: n },
            } = e.legend.options;
            return t.labels.map((s, i) => {
              const o = e.getDatasetMeta(0).controller.getStyle(i);
              return {
                text: s,
                fillStyle: o.backgroundColor,
                strokeStyle: o.borderColor,
                lineWidth: o.borderWidth,
                pointStyle: n,
                hidden: !e.getDataVisibility(i),
                index: i,
              };
            });
          }
          return [];
        },
      },
      onClick(e, t, n) {
        n.chart.toggleDataVisibility(t.index), n.chart.update();
      },
    },
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
        label(e) {
          let t = e.label;
          const n = ": " + e.formattedValue;
          return Ct(t) ? ((t = t.slice()), (t[0] += n)) : (t += n), t;
        },
      },
    },
  },
};
class xa extends xe {
  initialize() {
    (this.enableOptionSharing = !0),
      (this.supportsDecimation = !0),
      super.initialize();
  }
  update(t) {
    const n = this._cachedMeta,
      { dataset: s, data: i = [], _dataset: r } = n,
      o = this.chart._animationsDisabled;
    let { start: a, count: l } = Tf(n, i, o);
    (this._drawStart = a),
      (this._drawCount = l),
      Rf(n) && ((a = 0), (l = i.length)),
      (s._chart = this.chart),
      (s._datasetIndex = this.index),
      (s._decimated = !!r._decimated),
      (s.points = i);
    const c = this.resolveDatasetElementOptions(t);
    this.options.showLine || (c.borderWidth = 0),
      (c.segment = this.options.segment),
      this.updateElement(s, void 0, { animated: !o, options: c }, t),
      this.updateElements(i, a, l, t);
  }
  updateElements(t, n, s, i) {
    const r = i === "reset",
      { iScale: o, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
      { sharedOptions: u, includeOptions: f } = this._getSharedOptions(n, i),
      h = o.axis,
      d = a.axis,
      { spanGaps: p, segment: g } = this.options,
      x = Xn(p) ? p : Number.POSITIVE_INFINITY,
      b = this.chart._animationsDisabled || r || i === "none";
    let _ = n > 0 && this.getParsed(n - 1);
    for (let v = n; v < n + s; ++v) {
      const C = t[v],
        w = this.getParsed(v),
        O = b ? C : {},
        k = ht(w[d]),
        S = (O[h] = o.getPixelForValue(w[h], v)),
        R = (O[d] =
          r || k
            ? a.getBasePixel()
            : a.getPixelForValue(l ? this.applyStack(a, w, l) : w[d], v));
      (O.skip = isNaN(S) || isNaN(R) || k),
        (O.stop = v > 0 && Math.abs(w[h] - _[h]) > x),
        g && ((O.parsed = w), (O.raw = c.data[v])),
        f &&
          (O.options =
            u || this.resolveDataElementOptions(v, C.active ? "active" : i)),
        b || this.updateElement(C, v, O, i),
        (_ = w);
    }
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      n = t.dataset,
      s = (n.options && n.options.borderWidth) || 0,
      i = t.data || [];
    if (!i.length) return s;
    const r = i[0].size(this.resolveDataElementOptions(0)),
      o = i[i.length - 1].size(this.resolveDataElementOptions(i.length - 1));
    return Math.max(s, r, o) / 2;
  }
  draw() {
    const t = this._cachedMeta;
    t.dataset.updateControlPoints(this.chart.chartArea, t.iScale.axis),
      super.draw();
  }
}
xa.id = "line";
xa.defaults = {
  datasetElementType: "line",
  dataElementType: "point",
  showLine: !0,
  spanGaps: !1,
};
xa.overrides = {
  scales: { _index_: { type: "category" }, _value_: { type: "linear" } },
};
class _a extends xe {
  constructor(t, n) {
    super(t, n), (this.innerRadius = void 0), (this.outerRadius = void 0);
  }
  getLabelAndValue(t) {
    const n = this._cachedMeta,
      s = this.chart,
      i = s.data.labels || [],
      r = Ks(n._parsed[t].r, s.options.locale);
    return { label: i[t] || "", value: r };
  }
  parseObjectData(t, n, s, i) {
    return $f.bind(this)(t, n, s, i);
  }
  update(t) {
    const n = this._cachedMeta.data;
    this._updateRadius(), this.updateElements(n, 0, n.length, t);
  }
  getMinMax() {
    const t = this._cachedMeta,
      n = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
    return (
      t.data.forEach((s, i) => {
        const r = this.getParsed(i).r;
        !isNaN(r) &&
          this.chart.getDataVisibility(i) &&
          (r < n.min && (n.min = r), r > n.max && (n.max = r));
      }),
      n
    );
  }
  _updateRadius() {
    const t = this.chart,
      n = t.chartArea,
      s = t.options,
      i = Math.min(n.right - n.left, n.bottom - n.top),
      r = Math.max(i / 2, 0),
      o = Math.max(s.cutoutPercentage ? (r / 100) * s.cutoutPercentage : 1, 0),
      a = (r - o) / t.getVisibleDatasetCount();
    (this.outerRadius = r - a * this.index),
      (this.innerRadius = this.outerRadius - a);
  }
  updateElements(t, n, s, i) {
    const r = i === "reset",
      o = this.chart,
      l = o.options.animation,
      c = this._cachedMeta.rScale,
      u = c.xCenter,
      f = c.yCenter,
      h = c.getIndexAngle(0) - 0.5 * Pt;
    let d = h,
      p;
    const g = 360 / this.countVisibleElements();
    for (p = 0; p < n; ++p) d += this._computeAngle(p, i, g);
    for (p = n; p < n + s; p++) {
      const x = t[p];
      let b = d,
        _ = d + this._computeAngle(p, i, g),
        v = o.getDataVisibility(p)
          ? c.getDistanceFromCenterForValue(this.getParsed(p).r)
          : 0;
      (d = _), r && (l.animateScale && (v = 0), l.animateRotate && (b = _ = h));
      const C = {
        x: u,
        y: f,
        innerRadius: 0,
        outerRadius: v,
        startAngle: b,
        endAngle: _,
        options: this.resolveDataElementOptions(p, x.active ? "active" : i),
      };
      this.updateElement(x, p, C, i);
    }
  }
  countVisibleElements() {
    const t = this._cachedMeta;
    let n = 0;
    return (
      t.data.forEach((s, i) => {
        !isNaN(this.getParsed(i).r) && this.chart.getDataVisibility(i) && n++;
      }),
      n
    );
  }
  _computeAngle(t, n, s) {
    return this.chart.getDataVisibility(t)
      ? pe(this.resolveDataElementOptions(t, n).angle || s)
      : 0;
  }
}
_a.id = "polarArea";
_a.defaults = {
  dataElementType: "arc",
  animation: { animateRotate: !0, animateScale: !0 },
  animations: {
    numbers: {
      type: "number",
      properties: [
        "x",
        "y",
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius",
      ],
    },
  },
  indexAxis: "r",
  startAngle: 0,
};
_a.overrides = {
  aspectRatio: 1,
  plugins: {
    legend: {
      labels: {
        generateLabels(e) {
          const t = e.data;
          if (t.labels.length && t.datasets.length) {
            const {
              labels: { pointStyle: n },
            } = e.legend.options;
            return t.labels.map((s, i) => {
              const o = e.getDatasetMeta(0).controller.getStyle(i);
              return {
                text: s,
                fillStyle: o.backgroundColor,
                strokeStyle: o.borderColor,
                lineWidth: o.borderWidth,
                pointStyle: n,
                hidden: !e.getDataVisibility(i),
                index: i,
              };
            });
          }
          return [];
        },
      },
      onClick(e, t, n) {
        n.chart.toggleDataVisibility(t.index), n.chart.update();
      },
    },
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
        label(e) {
          return e.chart.data.labels[e.dataIndex] + ": " + e.formattedValue;
        },
      },
    },
  },
  scales: {
    r: {
      type: "radialLinear",
      angleLines: { display: !1 },
      beginAtZero: !0,
      grid: { circular: !0 },
      pointLabels: { display: !1 },
      startAngle: 0,
    },
  },
};
class Jf extends ss {}
Jf.id = "pie";
Jf.defaults = { cutout: 0, rotation: 0, circumference: 360, radius: "100%" };
class ya extends xe {
  getLabelAndValue(t) {
    const n = this._cachedMeta.vScale,
      s = this.getParsed(t);
    return {
      label: n.getLabels()[t],
      value: "" + n.getLabelForValue(s[n.axis]),
    };
  }
  parseObjectData(t, n, s, i) {
    return $f.bind(this)(t, n, s, i);
  }
  update(t) {
    const n = this._cachedMeta,
      s = n.dataset,
      i = n.data || [],
      r = n.iScale.getLabels();
    if (((s.points = i), t !== "resize")) {
      const o = this.resolveDatasetElementOptions(t);
      this.options.showLine || (o.borderWidth = 0);
      const a = { _loop: !0, _fullLoop: r.length === i.length, options: o };
      this.updateElement(s, void 0, a, t);
    }
    this.updateElements(i, 0, i.length, t);
  }
  updateElements(t, n, s, i) {
    const r = this._cachedMeta.rScale,
      o = i === "reset";
    for (let a = n; a < n + s; a++) {
      const l = t[a],
        c = this.resolveDataElementOptions(a, l.active ? "active" : i),
        u = r.getPointPositionForValue(a, this.getParsed(a).r),
        f = o ? r.xCenter : u.x,
        h = o ? r.yCenter : u.y,
        d = {
          x: f,
          y: h,
          angle: u.angle,
          skip: isNaN(f) || isNaN(h),
          options: c,
        };
      this.updateElement(l, a, d, i);
    }
  }
}
ya.id = "radar";
ya.defaults = {
  datasetElementType: "line",
  dataElementType: "point",
  indexAxis: "r",
  showLine: !0,
  elements: { line: { fill: "start" } },
};
ya.overrides = { aspectRatio: 1, scales: { r: { type: "radialLinear" } } };
let Ee = class {
  constructor() {
    (this.x = void 0),
      (this.y = void 0),
      (this.active = !1),
      (this.options = void 0),
      (this.$animations = void 0);
  }
  tooltipPosition(t) {
    const { x: n, y: s } = this.getProps(["x", "y"], t);
    return { x: n, y: s };
  }
  hasValue() {
    return Xn(this.x) && Xn(this.y);
  }
  getProps(t, n) {
    const s = this.$animations;
    if (!n || !s) return this;
    const i = {};
    return (
      t.forEach((r) => {
        i[r] = s[r] && s[r].active() ? s[r]._to : this[r];
      }),
      i
    );
  }
};
Ee.defaults = {};
Ee.defaultRoutes = void 0;
const th = {
  values(e) {
    return Ct(e) ? e : "" + e;
  },
  numeric(e, t, n) {
    if (e === 0) return "0";
    const s = this.chart.options.locale;
    let i,
      r = e;
    if (n.length > 1) {
      const c = Math.max(Math.abs(n[0].value), Math.abs(n[n.length - 1].value));
      (c < 1e-4 || c > 1e15) && (i = "scientific"), (r = P_(e, n));
    }
    const o = se(Math.abs(r)),
      a = Math.max(Math.min(-1 * Math.floor(o), 20), 0),
      l = { notation: i, minimumFractionDigits: a, maximumFractionDigits: a };
    return Object.assign(l, this.options.ticks.format), Ks(e, s, l);
  },
  logarithmic(e, t, n) {
    if (e === 0) return "0";
    const s = e / Math.pow(10, Math.floor(se(e)));
    return s === 1 || s === 2 || s === 5 ? th.numeric.call(this, e, t, n) : "";
  },
};
function P_(e, t) {
  let n = t.length > 3 ? t[2].value - t[1].value : t[1].value - t[0].value;
  return Math.abs(n) >= 1 && e !== Math.floor(e) && (n = e - Math.floor(e)), n;
}
var ar = { formatters: th };
at.set("scale", {
  display: !0,
  offset: !1,
  reverse: !1,
  beginAtZero: !1,
  bounds: "ticks",
  grace: 0,
  grid: {
    display: !0,
    lineWidth: 1,
    drawBorder: !0,
    drawOnChartArea: !0,
    drawTicks: !0,
    tickLength: 8,
    tickWidth: (e, t) => t.lineWidth,
    tickColor: (e, t) => t.color,
    offset: !1,
    borderDash: [],
    borderDashOffset: 0,
    borderWidth: 1,
  },
  title: { display: !1, text: "", padding: { top: 4, bottom: 4 } },
  ticks: {
    minRotation: 0,
    maxRotation: 50,
    mirror: !1,
    textStrokeWidth: 0,
    textStrokeColor: "",
    padding: 3,
    display: !0,
    autoSkip: !0,
    autoSkipPadding: 3,
    labelOffset: 0,
    callback: ar.formatters.values,
    minor: {},
    major: {},
    align: "center",
    crossAlign: "near",
    showLabelBackdrop: !1,
    backdropColor: "rgba(255, 255, 255, 0.75)",
    backdropPadding: 2,
  },
});
at.route("scale.ticks", "color", "", "color");
at.route("scale.grid", "color", "", "borderColor");
at.route("scale.grid", "borderColor", "", "borderColor");
at.route("scale.title", "color", "", "color");
at.describe("scale", {
  _fallback: !1,
  _scriptable: (e) =>
    !e.startsWith("before") &&
    !e.startsWith("after") &&
    e !== "callback" &&
    e !== "parser",
  _indexable: (e) => e !== "borderDash" && e !== "tickBorderDash",
});
at.describe("scales", { _fallback: "scale" });
at.describe("scale.ticks", {
  _scriptable: (e) => e !== "backdropPadding" && e !== "callback",
  _indexable: (e) => e !== "backdropPadding",
});
function O_(e, t) {
  const n = e.options.ticks,
    s = n.maxTicksLimit || E_(e),
    i = n.major.enabled ? T_(t) : [],
    r = i.length,
    o = i[0],
    a = i[r - 1],
    l = [];
  if (r > s) return R_(t, l, i, r / s), l;
  const c = A_(i, t, s);
  if (r > 0) {
    let u, f;
    const h = r > 1 ? Math.round((a - o) / (r - 1)) : null;
    for (li(t, l, c, ht(h) ? 0 : o - h, o), u = 0, f = r - 1; u < f; u++)
      li(t, l, c, i[u], i[u + 1]);
    return li(t, l, c, a, ht(h) ? t.length : a + h), l;
  }
  return li(t, l, c), l;
}
function E_(e) {
  const t = e.options.offset,
    n = e._tickSize(),
    s = e._length / n + (t ? 0 : 1),
    i = e._maxLength / n;
  return Math.floor(Math.min(s, i));
}
function A_(e, t, n) {
  const s = D_(e),
    i = t.length / n;
  if (!s) return Math.max(i, 1);
  const r = Ob(s);
  for (let o = 0, a = r.length - 1; o < a; o++) {
    const l = r[o];
    if (l > i) return l;
  }
  return Math.max(i, 1);
}
function T_(e) {
  const t = [];
  let n, s;
  for (n = 0, s = e.length; n < s; n++) e[n].major && t.push(n);
  return t;
}
function R_(e, t, n, s) {
  let i = 0,
    r = n[0],
    o;
  for (s = Math.ceil(s), o = 0; o < e.length; o++)
    o === r && (t.push(e[o]), i++, (r = n[i * s]));
}
function li(e, t, n, s, i) {
  const r = nt(s, 0),
    o = Math.min(nt(i, e.length), e.length);
  let a = 0,
    l,
    c,
    u;
  for (
    n = Math.ceil(n), i && ((l = i - s), (n = l / Math.floor(l / n))), u = r;
    u < 0;

  )
    a++, (u = Math.round(r + a * n));
  for (c = Math.max(r, 0); c < o; c++)
    c === u && (t.push(e[c]), a++, (u = Math.round(r + a * n)));
}
function D_(e) {
  const t = e.length;
  let n, s;
  if (t < 2) return !1;
  for (s = e[0], n = 1; n < t; ++n) if (e[n] - e[n - 1] !== s) return !1;
  return s;
}
const L_ = (e) => (e === "left" ? "right" : e === "right" ? "left" : e),
  cc = (e, t, n) => (t === "top" || t === "left" ? e[t] + n : e[t] - n);
function uc(e, t) {
  const n = [],
    s = e.length / t,
    i = e.length;
  let r = 0;
  for (; r < i; r += s) n.push(e[Math.floor(r)]);
  return n;
}
function I_(e, t, n) {
  const s = e.ticks.length,
    i = Math.min(t, s - 1),
    r = e._startPixel,
    o = e._endPixel,
    a = 1e-6;
  let l = e.getPixelForTick(i),
    c;
  if (
    !(
      n &&
      (s === 1
        ? (c = Math.max(l - r, o - l))
        : t === 0
        ? (c = (e.getPixelForTick(1) - l) / 2)
        : (c = (l - e.getPixelForTick(i - 1)) / 2),
      (l += i < t ? c : -c),
      l < r - a || l > o + a)
    )
  )
    return l;
}
function F_(e, t) {
  pt(e, (n) => {
    const s = n.gc,
      i = s.length / 2;
    let r;
    if (i > t) {
      for (r = 0; r < i; ++r) delete n.data[s[r]];
      s.splice(0, i);
    }
  });
}
function us(e) {
  return e.drawTicks ? e.tickLength : 0;
}
function fc(e, t) {
  if (!e.display) return 0;
  const n = Bt(e.font, t),
    s = Wt(e.padding);
  return (Ct(e.text) ? e.text.length : 1) * n.lineHeight + s.height;
}
function B_(e, t) {
  return cn(e, { scale: t, type: "scale" });
}
function z_(e, t, n) {
  return cn(e, { tick: n, index: t, type: "tick" });
}
function N_(e, t, n) {
  let s = Af(e);
  return ((n && t !== "right") || (!n && t === "right")) && (s = L_(s)), s;
}
function H_(e, t, n, s) {
  const { top: i, left: r, bottom: o, right: a, chart: l } = e,
    { chartArea: c, scales: u } = l;
  let f = 0,
    h,
    d,
    p;
  const g = o - i,
    x = a - r;
  if (e.isHorizontal()) {
    if (((d = Qt(s, r, a)), ft(n))) {
      const b = Object.keys(n)[0],
        _ = n[b];
      p = u[b].getPixelForValue(_) + g - t;
    } else
      n === "center" ? (p = (c.bottom + c.top) / 2 + g - t) : (p = cc(e, n, t));
    h = a - r;
  } else {
    if (ft(n)) {
      const b = Object.keys(n)[0],
        _ = n[b];
      d = u[b].getPixelForValue(_) - x + t;
    } else
      n === "center" ? (d = (c.left + c.right) / 2 - x + t) : (d = cc(e, n, t));
    (p = Qt(s, o, i)), (f = n === "left" ? -kt : kt);
  }
  return { titleX: d, titleY: p, maxWidth: h, rotation: f };
}
class An extends Ee {
  constructor(t) {
    super(),
      (this.id = t.id),
      (this.type = t.type),
      (this.options = void 0),
      (this.ctx = t.ctx),
      (this.chart = t.chart),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this._margins = { left: 0, right: 0, top: 0, bottom: 0 }),
      (this.maxWidth = void 0),
      (this.maxHeight = void 0),
      (this.paddingTop = void 0),
      (this.paddingBottom = void 0),
      (this.paddingLeft = void 0),
      (this.paddingRight = void 0),
      (this.axis = void 0),
      (this.labelRotation = void 0),
      (this.min = void 0),
      (this.max = void 0),
      (this._range = void 0),
      (this.ticks = []),
      (this._gridLineItems = null),
      (this._labelItems = null),
      (this._labelSizes = null),
      (this._length = 0),
      (this._maxLength = 0),
      (this._longestTextCache = {}),
      (this._startPixel = void 0),
      (this._endPixel = void 0),
      (this._reversePixels = !1),
      (this._userMax = void 0),
      (this._userMin = void 0),
      (this._suggestedMax = void 0),
      (this._suggestedMin = void 0),
      (this._ticksLength = 0),
      (this._borderValue = 0),
      (this._cache = {}),
      (this._dataLimitsCached = !1),
      (this.$context = void 0);
  }
  init(t) {
    (this.options = t.setContext(this.getContext())),
      (this.axis = t.axis),
      (this._userMin = this.parse(t.min)),
      (this._userMax = this.parse(t.max)),
      (this._suggestedMin = this.parse(t.suggestedMin)),
      (this._suggestedMax = this.parse(t.suggestedMax));
  }
  parse(t, n) {
    return t;
  }
  getUserBounds() {
    let { _userMin: t, _userMax: n, _suggestedMin: s, _suggestedMax: i } = this;
    return (
      (t = ne(t, Number.POSITIVE_INFINITY)),
      (n = ne(n, Number.NEGATIVE_INFINITY)),
      (s = ne(s, Number.POSITIVE_INFINITY)),
      (i = ne(i, Number.NEGATIVE_INFINITY)),
      { min: ne(t, s), max: ne(n, i), minDefined: zt(t), maxDefined: zt(n) }
    );
  }
  getMinMax(t) {
    let { min: n, max: s, minDefined: i, maxDefined: r } = this.getUserBounds(),
      o;
    if (i && r) return { min: n, max: s };
    const a = this.getMatchingVisibleMetas();
    for (let l = 0, c = a.length; l < c; ++l)
      (o = a[l].controller.getMinMax(this, t)),
        i || (n = Math.min(n, o.min)),
        r || (s = Math.max(s, o.max));
    return (
      (n = r && n > s ? s : n),
      (s = i && n > s ? n : s),
      { min: ne(n, ne(s, n)), max: ne(s, ne(n, s)) }
    );
  }
  getPadding() {
    return {
      left: this.paddingLeft || 0,
      top: this.paddingTop || 0,
      right: this.paddingRight || 0,
      bottom: this.paddingBottom || 0,
    };
  }
  getTicks() {
    return this.ticks;
  }
  getLabels() {
    const t = this.chart.data;
    return (
      this.options.labels ||
      (this.isHorizontal() ? t.xLabels : t.yLabels) ||
      t.labels ||
      []
    );
  }
  beforeLayout() {
    (this._cache = {}), (this._dataLimitsCached = !1);
  }
  beforeUpdate() {
    xt(this.options.beforeUpdate, [this]);
  }
  update(t, n, s) {
    const { beginAtZero: i, grace: r, ticks: o } = this.options,
      a = o.sampleSize;
    this.beforeUpdate(),
      (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = s =
        Object.assign({ left: 0, right: 0, top: 0, bottom: 0 }, s)),
      (this.ticks = null),
      (this._labelSizes = null),
      (this._gridLineItems = null),
      (this._labelItems = null),
      this.beforeSetDimensions(),
      this.setDimensions(),
      this.afterSetDimensions(),
      (this._maxLength = this.isHorizontal()
        ? this.width + s.left + s.right
        : this.height + s.top + s.bottom),
      this._dataLimitsCached ||
        (this.beforeDataLimits(),
        this.determineDataLimits(),
        this.afterDataLimits(),
        (this._range = mx(this, r, i)),
        (this._dataLimitsCached = !0)),
      this.beforeBuildTicks(),
      (this.ticks = this.buildTicks() || []),
      this.afterBuildTicks();
    const l = a < this.ticks.length;
    this._convertTicksToLabels(l ? uc(this.ticks, a) : this.ticks),
      this.configure(),
      this.beforeCalculateLabelRotation(),
      this.calculateLabelRotation(),
      this.afterCalculateLabelRotation(),
      o.display &&
        (o.autoSkip || o.source === "auto") &&
        ((this.ticks = O_(this, this.ticks)),
        (this._labelSizes = null),
        this.afterAutoSkip()),
      l && this._convertTicksToLabels(this.ticks),
      this.beforeFit(),
      this.fit(),
      this.afterFit(),
      this.afterUpdate();
  }
  configure() {
    let t = this.options.reverse,
      n,
      s;
    this.isHorizontal()
      ? ((n = this.left), (s = this.right))
      : ((n = this.top), (s = this.bottom), (t = !t)),
      (this._startPixel = n),
      (this._endPixel = s),
      (this._reversePixels = t),
      (this._length = s - n),
      (this._alignToPixels = this.options.alignToPixels);
  }
  afterUpdate() {
    xt(this.options.afterUpdate, [this]);
  }
  beforeSetDimensions() {
    xt(this.options.beforeSetDimensions, [this]);
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = 0),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = 0),
        (this.bottom = this.height)),
      (this.paddingLeft = 0),
      (this.paddingTop = 0),
      (this.paddingRight = 0),
      (this.paddingBottom = 0);
  }
  afterSetDimensions() {
    xt(this.options.afterSetDimensions, [this]);
  }
  _callHooks(t) {
    this.chart.notifyPlugins(t, this.getContext()), xt(this.options[t], [this]);
  }
  beforeDataLimits() {
    this._callHooks("beforeDataLimits");
  }
  determineDataLimits() {}
  afterDataLimits() {
    this._callHooks("afterDataLimits");
  }
  beforeBuildTicks() {
    this._callHooks("beforeBuildTicks");
  }
  buildTicks() {
    return [];
  }
  afterBuildTicks() {
    this._callHooks("afterBuildTicks");
  }
  beforeTickToLabelConversion() {
    xt(this.options.beforeTickToLabelConversion, [this]);
  }
  generateTickLabels(t) {
    const n = this.options.ticks;
    let s, i, r;
    for (s = 0, i = t.length; s < i; s++)
      (r = t[s]), (r.label = xt(n.callback, [r.value, s, t], this));
  }
  afterTickToLabelConversion() {
    xt(this.options.afterTickToLabelConversion, [this]);
  }
  beforeCalculateLabelRotation() {
    xt(this.options.beforeCalculateLabelRotation, [this]);
  }
  calculateLabelRotation() {
    const t = this.options,
      n = t.ticks,
      s = this.ticks.length,
      i = n.minRotation || 0,
      r = n.maxRotation;
    let o = i,
      a,
      l,
      c;
    if (
      !this._isVisible() ||
      !n.display ||
      i >= r ||
      s <= 1 ||
      !this.isHorizontal()
    ) {
      this.labelRotation = i;
      return;
    }
    const u = this._getLabelSizes(),
      f = u.widest.width,
      h = u.highest.height,
      d = jt(this.chart.width - f, 0, this.maxWidth);
    (a = t.offset ? this.maxWidth / s : d / (s - 1)),
      f + 6 > a &&
        ((a = d / (s - (t.offset ? 0.5 : 1))),
        (l =
          this.maxHeight -
          us(t.grid) -
          n.padding -
          fc(t.title, this.chart.options.font)),
        (c = Math.sqrt(f * f + h * h)),
        (o = ia(
          Math.min(
            Math.asin(jt((u.highest.height + 6) / a, -1, 1)),
            Math.asin(jt(l / c, -1, 1)) - Math.asin(jt(h / c, -1, 1))
          )
        )),
        (o = Math.max(i, Math.min(r, o)))),
      (this.labelRotation = o);
  }
  afterCalculateLabelRotation() {
    xt(this.options.afterCalculateLabelRotation, [this]);
  }
  afterAutoSkip() {}
  beforeFit() {
    xt(this.options.beforeFit, [this]);
  }
  fit() {
    const t = { width: 0, height: 0 },
      {
        chart: n,
        options: { ticks: s, title: i, grid: r },
      } = this,
      o = this._isVisible(),
      a = this.isHorizontal();
    if (o) {
      const l = fc(i, n.options.font);
      if (
        (a
          ? ((t.width = this.maxWidth), (t.height = us(r) + l))
          : ((t.height = this.maxHeight), (t.width = us(r) + l)),
        s.display && this.ticks.length)
      ) {
        const {
            first: c,
            last: u,
            widest: f,
            highest: h,
          } = this._getLabelSizes(),
          d = s.padding * 2,
          p = pe(this.labelRotation),
          g = Math.cos(p),
          x = Math.sin(p);
        if (a) {
          const b = s.mirror ? 0 : x * f.width + g * h.height;
          t.height = Math.min(this.maxHeight, t.height + b + d);
        } else {
          const b = s.mirror ? 0 : g * f.width + x * h.height;
          t.width = Math.min(this.maxWidth, t.width + b + d);
        }
        this._calculatePadding(c, u, x, g);
      }
    }
    this._handleMargins(),
      a
        ? ((this.width = this._length =
            n.width - this._margins.left - this._margins.right),
          (this.height = t.height))
        : ((this.width = t.width),
          (this.height = this._length =
            n.height - this._margins.top - this._margins.bottom));
  }
  _calculatePadding(t, n, s, i) {
    const {
        ticks: { align: r, padding: o },
        position: a,
      } = this.options,
      l = this.labelRotation !== 0,
      c = a !== "top" && this.axis === "x";
    if (this.isHorizontal()) {
      const u = this.getPixelForTick(0) - this.left,
        f = this.right - this.getPixelForTick(this.ticks.length - 1);
      let h = 0,
        d = 0;
      l
        ? c
          ? ((h = i * t.width), (d = s * n.height))
          : ((h = s * t.height), (d = i * n.width))
        : r === "start"
        ? (d = n.width)
        : r === "end"
        ? (h = t.width)
        : r !== "inner" && ((h = t.width / 2), (d = n.width / 2)),
        (this.paddingLeft = Math.max(
          ((h - u + o) * this.width) / (this.width - u),
          0
        )),
        (this.paddingRight = Math.max(
          ((d - f + o) * this.width) / (this.width - f),
          0
        ));
    } else {
      let u = n.height / 2,
        f = t.height / 2;
      r === "start"
        ? ((u = 0), (f = t.height))
        : r === "end" && ((u = n.height), (f = 0)),
        (this.paddingTop = u + o),
        (this.paddingBottom = f + o);
    }
  }
  _handleMargins() {
    this._margins &&
      ((this._margins.left = Math.max(this.paddingLeft, this._margins.left)),
      (this._margins.top = Math.max(this.paddingTop, this._margins.top)),
      (this._margins.right = Math.max(this.paddingRight, this._margins.right)),
      (this._margins.bottom = Math.max(
        this.paddingBottom,
        this._margins.bottom
      )));
  }
  afterFit() {
    xt(this.options.afterFit, [this]);
  }
  isHorizontal() {
    const { axis: t, position: n } = this.options;
    return n === "top" || n === "bottom" || t === "x";
  }
  isFullSize() {
    return this.options.fullSize;
  }
  _convertTicksToLabels(t) {
    this.beforeTickToLabelConversion(), this.generateTickLabels(t);
    let n, s;
    for (n = 0, s = t.length; n < s; n++)
      ht(t[n].label) && (t.splice(n, 1), s--, n--);
    this.afterTickToLabelConversion();
  }
  _getLabelSizes() {
    let t = this._labelSizes;
    if (!t) {
      const n = this.options.ticks.sampleSize;
      let s = this.ticks;
      n < s.length && (s = uc(s, n)),
        (this._labelSizes = t = this._computeLabelSizes(s, s.length));
    }
    return t;
  }
  _computeLabelSizes(t, n) {
    const { ctx: s, _longestTextCache: i } = this,
      r = [],
      o = [];
    let a = 0,
      l = 0,
      c,
      u,
      f,
      h,
      d,
      p,
      g,
      x,
      b,
      _,
      v;
    for (c = 0; c < n; ++c) {
      if (
        ((h = t[c].label),
        (d = this._resolveTickFontOptions(c)),
        (s.font = p = d.string),
        (g = i[p] = i[p] || { data: {}, gc: [] }),
        (x = d.lineHeight),
        (b = _ = 0),
        !ht(h) && !Ct(h))
      )
        (b = Ti(s, g.data, g.gc, b, h)), (_ = x);
      else if (Ct(h))
        for (u = 0, f = h.length; u < f; ++u)
          (v = h[u]),
            !ht(v) && !Ct(v) && ((b = Ti(s, g.data, g.gc, b, v)), (_ += x));
      r.push(b), o.push(_), (a = Math.max(b, a)), (l = Math.max(_, l));
    }
    F_(i, n);
    const C = r.indexOf(a),
      w = o.indexOf(l),
      O = (k) => ({ width: r[k] || 0, height: o[k] || 0 });
    return {
      first: O(0),
      last: O(n - 1),
      widest: O(C),
      highest: O(w),
      widths: r,
      heights: o,
    };
  }
  getLabelForValue(t) {
    return t;
  }
  getPixelForValue(t, n) {
    return NaN;
  }
  getValueForPixel(t) {}
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getPixelForDecimal(t) {
    this._reversePixels && (t = 1 - t);
    const n = this._startPixel + t * this._length;
    return Tb(this._alignToPixels ? pn(this.chart, n, 0) : n);
  }
  getDecimalForPixel(t) {
    const n = (t - this._startPixel) / this._length;
    return this._reversePixels ? 1 - n : n;
  }
  getBasePixel() {
    return this.getPixelForValue(this.getBaseValue());
  }
  getBaseValue() {
    const { min: t, max: n } = this;
    return t < 0 && n < 0 ? n : t > 0 && n > 0 ? t : 0;
  }
  getContext(t) {
    const n = this.ticks || [];
    if (t >= 0 && t < n.length) {
      const s = n[t];
      return s.$context || (s.$context = z_(this.getContext(), t, s));
    }
    return this.$context || (this.$context = B_(this.chart.getContext(), this));
  }
  _tickSize() {
    const t = this.options.ticks,
      n = pe(this.labelRotation),
      s = Math.abs(Math.cos(n)),
      i = Math.abs(Math.sin(n)),
      r = this._getLabelSizes(),
      o = t.autoSkipPadding || 0,
      a = r ? r.widest.width + o : 0,
      l = r ? r.highest.height + o : 0;
    return this.isHorizontal()
      ? l * s > a * i
        ? a / s
        : l / i
      : l * i < a * s
      ? l / s
      : a / i;
  }
  _isVisible() {
    const t = this.options.display;
    return t !== "auto" ? !!t : this.getMatchingVisibleMetas().length > 0;
  }
  _computeGridLineItems(t) {
    const n = this.axis,
      s = this.chart,
      i = this.options,
      { grid: r, position: o } = i,
      a = r.offset,
      l = this.isHorizontal(),
      u = this.ticks.length + (a ? 1 : 0),
      f = us(r),
      h = [],
      d = r.setContext(this.getContext()),
      p = d.drawBorder ? d.borderWidth : 0,
      g = p / 2,
      x = function (j) {
        return pn(s, j, p);
      };
    let b, _, v, C, w, O, k, S, R, L, V, A;
    if (o === "top")
      (b = x(this.bottom)),
        (O = this.bottom - f),
        (S = b - g),
        (L = x(t.top) + g),
        (A = t.bottom);
    else if (o === "bottom")
      (b = x(this.top)),
        (L = t.top),
        (A = x(t.bottom) - g),
        (O = b + g),
        (S = this.top + f);
    else if (o === "left")
      (b = x(this.right)),
        (w = this.right - f),
        (k = b - g),
        (R = x(t.left) + g),
        (V = t.right);
    else if (o === "right")
      (b = x(this.left)),
        (R = t.left),
        (V = x(t.right) - g),
        (w = b + g),
        (k = this.left + f);
    else if (n === "x") {
      if (o === "center") b = x((t.top + t.bottom) / 2 + 0.5);
      else if (ft(o)) {
        const j = Object.keys(o)[0],
          G = o[j];
        b = x(this.chart.scales[j].getPixelForValue(G));
      }
      (L = t.top), (A = t.bottom), (O = b + g), (S = O + f);
    } else if (n === "y") {
      if (o === "center") b = x((t.left + t.right) / 2);
      else if (ft(o)) {
        const j = Object.keys(o)[0],
          G = o[j];
        b = x(this.chart.scales[j].getPixelForValue(G));
      }
      (w = b - g), (k = w - f), (R = t.left), (V = t.right);
    }
    const W = nt(i.ticks.maxTicksLimit, u),
      J = Math.max(1, Math.ceil(u / W));
    for (_ = 0; _ < u; _ += J) {
      const j = r.setContext(this.getContext(_)),
        G = j.lineWidth,
        U = j.color,
        tt = j.borderDash || [],
        Ot = j.borderDashOffset,
        Ft = j.tickWidth,
        Lt = j.tickColor,
        vt = j.tickBorderDash || [],
        It = j.tickBorderDashOffset;
      (v = I_(this, _, a)),
        v !== void 0 &&
          ((C = pn(s, v, G)),
          l ? (w = k = R = V = C) : (O = S = L = A = C),
          h.push({
            tx1: w,
            ty1: O,
            tx2: k,
            ty2: S,
            x1: R,
            y1: L,
            x2: V,
            y2: A,
            width: G,
            color: U,
            borderDash: tt,
            borderDashOffset: Ot,
            tickWidth: Ft,
            tickColor: Lt,
            tickBorderDash: vt,
            tickBorderDashOffset: It,
          }));
    }
    return (this._ticksLength = u), (this._borderValue = b), h;
  }
  _computeLabelItems(t) {
    const n = this.axis,
      s = this.options,
      { position: i, ticks: r } = s,
      o = this.isHorizontal(),
      a = this.ticks,
      { align: l, crossAlign: c, padding: u, mirror: f } = r,
      h = us(s.grid),
      d = h + u,
      p = f ? -u : d,
      g = -pe(this.labelRotation),
      x = [];
    let b,
      _,
      v,
      C,
      w,
      O,
      k,
      S,
      R,
      L,
      V,
      A,
      W = "middle";
    if (i === "top")
      (O = this.bottom - p), (k = this._getXAxisLabelAlignment());
    else if (i === "bottom")
      (O = this.top + p), (k = this._getXAxisLabelAlignment());
    else if (i === "left") {
      const j = this._getYAxisLabelAlignment(h);
      (k = j.textAlign), (w = j.x);
    } else if (i === "right") {
      const j = this._getYAxisLabelAlignment(h);
      (k = j.textAlign), (w = j.x);
    } else if (n === "x") {
      if (i === "center") O = (t.top + t.bottom) / 2 + d;
      else if (ft(i)) {
        const j = Object.keys(i)[0],
          G = i[j];
        O = this.chart.scales[j].getPixelForValue(G) + d;
      }
      k = this._getXAxisLabelAlignment();
    } else if (n === "y") {
      if (i === "center") w = (t.left + t.right) / 2 - d;
      else if (ft(i)) {
        const j = Object.keys(i)[0],
          G = i[j];
        w = this.chart.scales[j].getPixelForValue(G);
      }
      k = this._getYAxisLabelAlignment(h).textAlign;
    }
    n === "y" && (l === "start" ? (W = "top") : l === "end" && (W = "bottom"));
    const J = this._getLabelSizes();
    for (b = 0, _ = a.length; b < _; ++b) {
      (v = a[b]), (C = v.label);
      const j = r.setContext(this.getContext(b));
      (S = this.getPixelForTick(b) + r.labelOffset),
        (R = this._resolveTickFontOptions(b)),
        (L = R.lineHeight),
        (V = Ct(C) ? C.length : 1);
      const G = V / 2,
        U = j.color,
        tt = j.textStrokeColor,
        Ot = j.textStrokeWidth;
      let Ft = k;
      o
        ? ((w = S),
          k === "inner" &&
            (b === _ - 1
              ? (Ft = this.options.reverse ? "left" : "right")
              : b === 0
              ? (Ft = this.options.reverse ? "right" : "left")
              : (Ft = "center")),
          i === "top"
            ? c === "near" || g !== 0
              ? (A = -V * L + L / 2)
              : c === "center"
              ? (A = -J.highest.height / 2 - G * L + L)
              : (A = -J.highest.height + L / 2)
            : c === "near" || g !== 0
            ? (A = L / 2)
            : c === "center"
            ? (A = J.highest.height / 2 - G * L)
            : (A = J.highest.height - V * L),
          f && (A *= -1))
        : ((O = S), (A = ((1 - V) * L) / 2));
      let Lt;
      if (j.showLabelBackdrop) {
        const vt = Wt(j.backdropPadding),
          It = J.heights[b],
          le = J.widths[b];
        let E = O + A - vt.top,
          z = w - vt.left;
        switch (W) {
          case "middle":
            E -= It / 2;
            break;
          case "bottom":
            E -= It;
            break;
        }
        switch (k) {
          case "center":
            z -= le / 2;
            break;
          case "right":
            z -= le;
            break;
        }
        Lt = {
          left: z,
          top: E,
          width: le + vt.width,
          height: It + vt.height,
          color: j.backdropColor,
        };
      }
      x.push({
        rotation: g,
        label: C,
        font: R,
        color: U,
        strokeColor: tt,
        strokeWidth: Ot,
        textOffset: A,
        textAlign: Ft,
        textBaseline: W,
        translation: [w, O],
        backdrop: Lt,
      });
    }
    return x;
  }
  _getXAxisLabelAlignment() {
    const { position: t, ticks: n } = this.options;
    if (-pe(this.labelRotation)) return t === "top" ? "left" : "right";
    let i = "center";
    return (
      n.align === "start"
        ? (i = "left")
        : n.align === "end"
        ? (i = "right")
        : n.align === "inner" && (i = "inner"),
      i
    );
  }
  _getYAxisLabelAlignment(t) {
    const {
        position: n,
        ticks: { crossAlign: s, mirror: i, padding: r },
      } = this.options,
      o = this._getLabelSizes(),
      a = t + r,
      l = o.widest.width;
    let c, u;
    return (
      n === "left"
        ? i
          ? ((u = this.right + r),
            s === "near"
              ? (c = "left")
              : s === "center"
              ? ((c = "center"), (u += l / 2))
              : ((c = "right"), (u += l)))
          : ((u = this.right - a),
            s === "near"
              ? (c = "right")
              : s === "center"
              ? ((c = "center"), (u -= l / 2))
              : ((c = "left"), (u = this.left)))
        : n === "right"
        ? i
          ? ((u = this.left + r),
            s === "near"
              ? (c = "right")
              : s === "center"
              ? ((c = "center"), (u -= l / 2))
              : ((c = "left"), (u -= l)))
          : ((u = this.left + a),
            s === "near"
              ? (c = "left")
              : s === "center"
              ? ((c = "center"), (u += l / 2))
              : ((c = "right"), (u = this.right)))
        : (c = "right"),
      { textAlign: c, x: u }
    );
  }
  _computeLabelArea() {
    if (this.options.ticks.mirror) return;
    const t = this.chart,
      n = this.options.position;
    if (n === "left" || n === "right")
      return { top: 0, left: this.left, bottom: t.height, right: this.right };
    if (n === "top" || n === "bottom")
      return { top: this.top, left: 0, bottom: this.bottom, right: t.width };
  }
  drawBackground() {
    const {
      ctx: t,
      options: { backgroundColor: n },
      left: s,
      top: i,
      width: r,
      height: o,
    } = this;
    n && (t.save(), (t.fillStyle = n), t.fillRect(s, i, r, o), t.restore());
  }
  getLineWidthForValue(t) {
    const n = this.options.grid;
    if (!this._isVisible() || !n.display) return 0;
    const i = this.ticks.findIndex((r) => r.value === t);
    return i >= 0 ? n.setContext(this.getContext(i)).lineWidth : 0;
  }
  drawGrid(t) {
    const n = this.options.grid,
      s = this.ctx,
      i =
        this._gridLineItems ||
        (this._gridLineItems = this._computeGridLineItems(t));
    let r, o;
    const a = (l, c, u) => {
      !u.width ||
        !u.color ||
        (s.save(),
        (s.lineWidth = u.width),
        (s.strokeStyle = u.color),
        s.setLineDash(u.borderDash || []),
        (s.lineDashOffset = u.borderDashOffset),
        s.beginPath(),
        s.moveTo(l.x, l.y),
        s.lineTo(c.x, c.y),
        s.stroke(),
        s.restore());
    };
    if (n.display)
      for (r = 0, o = i.length; r < o; ++r) {
        const l = i[r];
        n.drawOnChartArea && a({ x: l.x1, y: l.y1 }, { x: l.x2, y: l.y2 }, l),
          n.drawTicks &&
            a(
              { x: l.tx1, y: l.ty1 },
              { x: l.tx2, y: l.ty2 },
              {
                color: l.tickColor,
                width: l.tickWidth,
                borderDash: l.tickBorderDash,
                borderDashOffset: l.tickBorderDashOffset,
              }
            );
      }
  }
  drawBorder() {
    const {
        chart: t,
        ctx: n,
        options: { grid: s },
      } = this,
      i = s.setContext(this.getContext()),
      r = s.drawBorder ? i.borderWidth : 0;
    if (!r) return;
    const o = s.setContext(this.getContext(0)).lineWidth,
      a = this._borderValue;
    let l, c, u, f;
    this.isHorizontal()
      ? ((l = pn(t, this.left, r) - r / 2),
        (c = pn(t, this.right, o) + o / 2),
        (u = f = a))
      : ((u = pn(t, this.top, r) - r / 2),
        (f = pn(t, this.bottom, o) + o / 2),
        (l = c = a)),
      n.save(),
      (n.lineWidth = i.borderWidth),
      (n.strokeStyle = i.borderColor),
      n.beginPath(),
      n.moveTo(l, u),
      n.lineTo(c, f),
      n.stroke(),
      n.restore();
  }
  drawLabels(t) {
    if (!this.options.ticks.display) return;
    const s = this.ctx,
      i = this._computeLabelArea();
    i && ca(s, i);
    const r =
      this._labelItems || (this._labelItems = this._computeLabelItems(t));
    let o, a;
    for (o = 0, a = r.length; o < a; ++o) {
      const l = r[o],
        c = l.font,
        u = l.label;
      l.backdrop &&
        ((s.fillStyle = l.backdrop.color),
        s.fillRect(
          l.backdrop.left,
          l.backdrop.top,
          l.backdrop.width,
          l.backdrop.height
        ));
      let f = l.textOffset;
      Qn(s, u, 0, f, c, l);
    }
    i && ua(s);
  }
  drawTitle() {
    const {
      ctx: t,
      options: { position: n, title: s, reverse: i },
    } = this;
    if (!s.display) return;
    const r = Bt(s.font),
      o = Wt(s.padding),
      a = s.align;
    let l = r.lineHeight / 2;
    n === "bottom" || n === "center" || ft(n)
      ? ((l += o.bottom),
        Ct(s.text) && (l += r.lineHeight * (s.text.length - 1)))
      : (l += o.top);
    const {
      titleX: c,
      titleY: u,
      maxWidth: f,
      rotation: h,
    } = H_(this, l, n, a);
    Qn(t, s.text, 0, 0, r, {
      color: s.color,
      maxWidth: f,
      rotation: h,
      textAlign: N_(a, n, i),
      textBaseline: "middle",
      translation: [c, u],
    });
  }
  draw(t) {
    this._isVisible() &&
      (this.drawBackground(),
      this.drawGrid(t),
      this.drawBorder(),
      this.drawTitle(),
      this.drawLabels(t));
  }
  _layers() {
    const t = this.options,
      n = (t.ticks && t.ticks.z) || 0,
      s = nt(t.grid && t.grid.z, -1);
    return !this._isVisible() || this.draw !== An.prototype.draw
      ? [
          {
            z: n,
            draw: (i) => {
              this.draw(i);
            },
          },
        ]
      : [
          {
            z: s,
            draw: (i) => {
              this.drawBackground(), this.drawGrid(i), this.drawTitle();
            },
          },
          {
            z: s + 1,
            draw: () => {
              this.drawBorder();
            },
          },
          {
            z: n,
            draw: (i) => {
              this.drawLabels(i);
            },
          },
        ];
  }
  getMatchingVisibleMetas(t) {
    const n = this.chart.getSortedVisibleDatasetMetas(),
      s = this.axis + "AxisID",
      i = [];
    let r, o;
    for (r = 0, o = n.length; r < o; ++r) {
      const a = n[r];
      a[s] === this.id && (!t || a.type === t) && i.push(a);
    }
    return i;
  }
  _resolveTickFontOptions(t) {
    const n = this.options.ticks.setContext(this.getContext(t));
    return Bt(n.font);
  }
  _maxDigits() {
    const t = this._resolveTickFontOptions(0).lineHeight;
    return (this.isHorizontal() ? this.width : this.height) / t;
  }
}
class ci {
  constructor(t, n, s) {
    (this.type = t),
      (this.scope = n),
      (this.override = s),
      (this.items = Object.create(null));
  }
  isForType(t) {
    return Object.prototype.isPrototypeOf.call(
      this.type.prototype,
      t.prototype
    );
  }
  register(t) {
    const n = Object.getPrototypeOf(t);
    let s;
    W_(n) && (s = this.register(n));
    const i = this.items,
      r = t.id,
      o = this.scope + "." + r;
    if (!r) throw new Error("class does not have id: " + t);
    return (
      r in i ||
        ((i[r] = t),
        j_(t, o, s),
        this.override && at.override(t.id, t.overrides)),
      o
    );
  }
  get(t) {
    return this.items[t];
  }
  unregister(t) {
    const n = this.items,
      s = t.id,
      i = this.scope;
    s in n && delete n[s],
      i && s in at[i] && (delete at[i][s], this.override && delete En[s]);
  }
}
function j_(e, t, n) {
  const s = Bs(Object.create(null), [
    n ? at.get(n) : {},
    at.get(t),
    e.defaults,
  ]);
  at.set(t, s),
    e.defaultRoutes && V_(t, e.defaultRoutes),
    e.descriptors && at.describe(t, e.descriptors);
}
function V_(e, t) {
  Object.keys(t).forEach((n) => {
    const s = n.split("."),
      i = s.pop(),
      r = [e].concat(s).join("."),
      o = t[n].split("."),
      a = o.pop(),
      l = o.join(".");
    at.route(r, i, l, a);
  });
}
function W_(e) {
  return "id" in e && "defaults" in e;
}
class $_ {
  constructor() {
    (this.controllers = new ci(xe, "datasets", !0)),
      (this.elements = new ci(Ee, "elements")),
      (this.plugins = new ci(Object, "plugins")),
      (this.scales = new ci(An, "scales")),
      (this._typedRegistries = [this.controllers, this.scales, this.elements]);
  }
  add(...t) {
    this._each("register", t);
  }
  remove(...t) {
    this._each("unregister", t);
  }
  addControllers(...t) {
    this._each("register", t, this.controllers);
  }
  addElements(...t) {
    this._each("register", t, this.elements);
  }
  addPlugins(...t) {
    this._each("register", t, this.plugins);
  }
  addScales(...t) {
    this._each("register", t, this.scales);
  }
  getController(t) {
    return this._get(t, this.controllers, "controller");
  }
  getElement(t) {
    return this._get(t, this.elements, "element");
  }
  getPlugin(t) {
    return this._get(t, this.plugins, "plugin");
  }
  getScale(t) {
    return this._get(t, this.scales, "scale");
  }
  removeControllers(...t) {
    this._each("unregister", t, this.controllers);
  }
  removeElements(...t) {
    this._each("unregister", t, this.elements);
  }
  removePlugins(...t) {
    this._each("unregister", t, this.plugins);
  }
  removeScales(...t) {
    this._each("unregister", t, this.scales);
  }
  _each(t, n, s) {
    [...n].forEach((i) => {
      const r = s || this._getRegistryForType(i);
      s || r.isForType(i) || (r === this.plugins && i.id)
        ? this._exec(t, r, i)
        : pt(i, (o) => {
            const a = s || this._getRegistryForType(o);
            this._exec(t, a, o);
          });
    });
  }
  _exec(t, n, s) {
    const i = sa(t);
    xt(s["before" + i], [], s), n[t](s), xt(s["after" + i], [], s);
  }
  _getRegistryForType(t) {
    for (let n = 0; n < this._typedRegistries.length; n++) {
      const s = this._typedRegistries[n];
      if (s.isForType(t)) return s;
    }
    return this.plugins;
  }
  _get(t, n, s) {
    const i = n.get(t);
    if (i === void 0)
      throw new Error('"' + t + '" is not a registered ' + s + ".");
    return i;
  }
}
var ke = new $_();
class va extends xe {
  update(t) {
    const n = this._cachedMeta,
      { data: s = [] } = n,
      i = this.chart._animationsDisabled;
    let { start: r, count: o } = Tf(n, s, i);
    if (
      ((this._drawStart = r),
      (this._drawCount = o),
      Rf(n) && ((r = 0), (o = s.length)),
      this.options.showLine)
    ) {
      const { dataset: a, _dataset: l } = n;
      (a._chart = this.chart),
        (a._datasetIndex = this.index),
        (a._decimated = !!l._decimated),
        (a.points = s);
      const c = this.resolveDatasetElementOptions(t);
      (c.segment = this.options.segment),
        this.updateElement(a, void 0, { animated: !i, options: c }, t);
    }
    this.updateElements(s, r, o, t);
  }
  addElements() {
    const { showLine: t } = this.options;
    !this.datasetElementType &&
      t &&
      (this.datasetElementType = ke.getElement("line")),
      super.addElements();
  }
  updateElements(t, n, s, i) {
    const r = i === "reset",
      { iScale: o, vScale: a, _stacked: l, _dataset: c } = this._cachedMeta,
      u = this.resolveDataElementOptions(n, i),
      f = this.getSharedOptions(u),
      h = this.includeOptions(i, f),
      d = o.axis,
      p = a.axis,
      { spanGaps: g, segment: x } = this.options,
      b = Xn(g) ? g : Number.POSITIVE_INFINITY,
      _ = this.chart._animationsDisabled || r || i === "none";
    let v = n > 0 && this.getParsed(n - 1);
    for (let C = n; C < n + s; ++C) {
      const w = t[C],
        O = this.getParsed(C),
        k = _ ? w : {},
        S = ht(O[p]),
        R = (k[d] = o.getPixelForValue(O[d], C)),
        L = (k[p] =
          r || S
            ? a.getBasePixel()
            : a.getPixelForValue(l ? this.applyStack(a, O, l) : O[p], C));
      (k.skip = isNaN(R) || isNaN(L) || S),
        (k.stop = C > 0 && Math.abs(O[d] - v[d]) > b),
        x && ((k.parsed = O), (k.raw = c.data[C])),
        h &&
          (k.options =
            f || this.resolveDataElementOptions(C, w.active ? "active" : i)),
        _ || this.updateElement(w, C, k, i),
        (v = O);
    }
    this.updateSharedOptions(f, i, u);
  }
  getMaxOverflow() {
    const t = this._cachedMeta,
      n = t.data || [];
    if (!this.options.showLine) {
      let a = 0;
      for (let l = n.length - 1; l >= 0; --l)
        a = Math.max(a, n[l].size(this.resolveDataElementOptions(l)) / 2);
      return a > 0 && a;
    }
    const s = t.dataset,
      i = (s.options && s.options.borderWidth) || 0;
    if (!n.length) return i;
    const r = n[0].size(this.resolveDataElementOptions(0)),
      o = n[n.length - 1].size(this.resolveDataElementOptions(n.length - 1));
    return Math.max(i, r, o) / 2;
  }
}
va.id = "scatter";
va.defaults = {
  datasetElementType: !1,
  dataElementType: "point",
  showLine: !1,
  fill: !1,
};
va.overrides = {
  interaction: { mode: "point" },
  plugins: {
    tooltip: {
      callbacks: {
        title() {
          return "";
        },
        label(e) {
          return "(" + e.label + ", " + e.formattedValue + ")";
        },
      },
    },
  },
  scales: { x: { type: "linear" }, y: { type: "linear" } },
};
function gn() {
  throw new Error(
    "This method is not implemented: Check that a complete date adapter is provided."
  );
}
class uo {
  constructor(t) {
    this.options = t || {};
  }
  init(t) {}
  formats() {
    return gn();
  }
  parse(t, n) {
    return gn();
  }
  format(t, n) {
    return gn();
  }
  add(t, n, s) {
    return gn();
  }
  diff(t, n, s) {
    return gn();
  }
  startOf(t, n, s) {
    return gn();
  }
  endOf(t, n) {
    return gn();
  }
}
uo.override = function (e) {
  Object.assign(uo.prototype, e);
};
var U_ = { _date: uo };
function Y_(e, t, n, s) {
  const { controller: i, data: r, _sorted: o } = e,
    a = i._cachedMeta.iScale;
  if (a && t === a.axis && t !== "r" && o && r.length) {
    const l = a._reversePixels ? Rb : wn;
    if (s) {
      if (i._sharedOptions) {
        const c = r[0],
          u = typeof c.getRange == "function" && c.getRange(t);
        if (u) {
          const f = l(r, t, n - u),
            h = l(r, t, n + u);
          return { lo: f.lo, hi: h.hi };
        }
      }
    } else return l(r, t, n);
  }
  return { lo: 0, hi: r.length - 1 };
}
function qs(e, t, n, s, i) {
  const r = e.getSortedVisibleDatasetMetas(),
    o = n[t];
  for (let a = 0, l = r.length; a < l; ++a) {
    const { index: c, data: u } = r[a],
      { lo: f, hi: h } = Y_(r[a], t, o, i);
    for (let d = f; d <= h; ++d) {
      const p = u[d];
      p.skip || s(p, c, d);
    }
  }
}
function K_(e) {
  const t = e.indexOf("x") !== -1,
    n = e.indexOf("y") !== -1;
  return function (s, i) {
    const r = t ? Math.abs(s.x - i.x) : 0,
      o = n ? Math.abs(s.y - i.y) : 0;
    return Math.sqrt(Math.pow(r, 2) + Math.pow(o, 2));
  };
}
function Rr(e, t, n, s, i) {
  const r = [];
  return (
    (!i && !e.isPointInArea(t)) ||
      qs(
        e,
        n,
        t,
        function (a, l, c) {
          (!i && !Ns(a, e.chartArea, 0)) ||
            (a.inRange(t.x, t.y, s) &&
              r.push({ element: a, datasetIndex: l, index: c }));
        },
        !0
      ),
    r
  );
}
function q_(e, t, n, s) {
  let i = [];
  function r(o, a, l) {
    const { startAngle: c, endAngle: u } = o.getProps(
        ["startAngle", "endAngle"],
        s
      ),
      { angle: f } = Sf(o, { x: t.x, y: t.y });
    zs(f, c, u) && i.push({ element: o, datasetIndex: a, index: l });
  }
  return qs(e, n, t, r), i;
}
function X_(e, t, n, s, i, r) {
  let o = [];
  const a = K_(n);
  let l = Number.POSITIVE_INFINITY;
  function c(u, f, h) {
    const d = u.inRange(t.x, t.y, i);
    if (s && !d) return;
    const p = u.getCenterPoint(i);
    if (!(!!r || e.isPointInArea(p)) && !d) return;
    const x = a(t, p);
    x < l
      ? ((o = [{ element: u, datasetIndex: f, index: h }]), (l = x))
      : x === l && o.push({ element: u, datasetIndex: f, index: h });
  }
  return qs(e, n, t, c), o;
}
function Dr(e, t, n, s, i, r) {
  return !r && !e.isPointInArea(t)
    ? []
    : n === "r" && !s
    ? q_(e, t, n, i)
    : X_(e, t, n, s, i, r);
}
function hc(e, t, n, s, i) {
  const r = [],
    o = n === "x" ? "inXRange" : "inYRange";
  let a = !1;
  return (
    qs(e, n, t, (l, c, u) => {
      l[o](t[n], i) &&
        (r.push({ element: l, datasetIndex: c, index: u }),
        (a = a || l.inRange(t.x, t.y, i)));
    }),
    s && !a ? [] : r
  );
}
var Q_ = {
  evaluateInteractionItems: qs,
  modes: {
    index(e, t, n, s) {
      const i = bn(t, e),
        r = n.axis || "x",
        o = n.includeInvisible || !1,
        a = n.intersect ? Rr(e, i, r, s, o) : Dr(e, i, r, !1, s, o),
        l = [];
      return a.length
        ? (e.getSortedVisibleDatasetMetas().forEach((c) => {
            const u = a[0].index,
              f = c.data[u];
            f &&
              !f.skip &&
              l.push({ element: f, datasetIndex: c.index, index: u });
          }),
          l)
        : [];
    },
    dataset(e, t, n, s) {
      const i = bn(t, e),
        r = n.axis || "xy",
        o = n.includeInvisible || !1;
      let a = n.intersect ? Rr(e, i, r, s, o) : Dr(e, i, r, !1, s, o);
      if (a.length > 0) {
        const l = a[0].datasetIndex,
          c = e.getDatasetMeta(l).data;
        a = [];
        for (let u = 0; u < c.length; ++u)
          a.push({ element: c[u], datasetIndex: l, index: u });
      }
      return a;
    },
    point(e, t, n, s) {
      const i = bn(t, e),
        r = n.axis || "xy",
        o = n.includeInvisible || !1;
      return Rr(e, i, r, s, o);
    },
    nearest(e, t, n, s) {
      const i = bn(t, e),
        r = n.axis || "xy",
        o = n.includeInvisible || !1;
      return Dr(e, i, r, n.intersect, s, o);
    },
    x(e, t, n, s) {
      const i = bn(t, e);
      return hc(e, i, "x", n.intersect, s);
    },
    y(e, t, n, s) {
      const i = bn(t, e);
      return hc(e, i, "y", n.intersect, s);
    },
  },
};
const eh = ["left", "top", "right", "bottom"];
function fs(e, t) {
  return e.filter((n) => n.pos === t);
}
function dc(e, t) {
  return e.filter((n) => eh.indexOf(n.pos) === -1 && n.box.axis === t);
}
function hs(e, t) {
  return e.sort((n, s) => {
    const i = t ? s : n,
      r = t ? n : s;
    return i.weight === r.weight ? i.index - r.index : i.weight - r.weight;
  });
}
function G_(e) {
  const t = [];
  let n, s, i, r, o, a;
  for (n = 0, s = (e || []).length; n < s; ++n)
    (i = e[n]),
      ({
        position: r,
        options: { stack: o, stackWeight: a = 1 },
      } = i),
      t.push({
        index: n,
        box: i,
        pos: r,
        horizontal: i.isHorizontal(),
        weight: i.weight,
        stack: o && r + o,
        stackWeight: a,
      });
  return t;
}
function Z_(e) {
  const t = {};
  for (const n of e) {
    const { stack: s, pos: i, stackWeight: r } = n;
    if (!s || !eh.includes(i)) continue;
    const o = t[s] || (t[s] = { count: 0, placed: 0, weight: 0, size: 0 });
    o.count++, (o.weight += r);
  }
  return t;
}
function J_(e, t) {
  const n = Z_(e),
    { vBoxMaxWidth: s, hBoxMaxHeight: i } = t;
  let r, o, a;
  for (r = 0, o = e.length; r < o; ++r) {
    a = e[r];
    const { fullSize: l } = a.box,
      c = n[a.stack],
      u = c && a.stackWeight / c.weight;
    a.horizontal
      ? ((a.width = u ? u * s : l && t.availableWidth), (a.height = i))
      : ((a.width = s), (a.height = u ? u * i : l && t.availableHeight));
  }
  return n;
}
function t0(e) {
  const t = G_(e),
    n = hs(
      t.filter((c) => c.box.fullSize),
      !0
    ),
    s = hs(fs(t, "left"), !0),
    i = hs(fs(t, "right")),
    r = hs(fs(t, "top"), !0),
    o = hs(fs(t, "bottom")),
    a = dc(t, "x"),
    l = dc(t, "y");
  return {
    fullSize: n,
    leftAndTop: s.concat(r),
    rightAndBottom: i.concat(l).concat(o).concat(a),
    chartArea: fs(t, "chartArea"),
    vertical: s.concat(i).concat(l),
    horizontal: r.concat(o).concat(a),
  };
}
function pc(e, t, n, s) {
  return Math.max(e[n], t[n]) + Math.max(e[s], t[s]);
}
function nh(e, t) {
  (e.top = Math.max(e.top, t.top)),
    (e.left = Math.max(e.left, t.left)),
    (e.bottom = Math.max(e.bottom, t.bottom)),
    (e.right = Math.max(e.right, t.right));
}
function e0(e, t, n, s) {
  const { pos: i, box: r } = n,
    o = e.maxPadding;
  if (!ft(i)) {
    n.size && (e[i] -= n.size);
    const f = s[n.stack] || { size: 0, count: 1 };
    (f.size = Math.max(f.size, n.horizontal ? r.height : r.width)),
      (n.size = f.size / f.count),
      (e[i] += n.size);
  }
  r.getPadding && nh(o, r.getPadding());
  const a = Math.max(0, t.outerWidth - pc(o, e, "left", "right")),
    l = Math.max(0, t.outerHeight - pc(o, e, "top", "bottom")),
    c = a !== e.w,
    u = l !== e.h;
  return (
    (e.w = a),
    (e.h = l),
    n.horizontal ? { same: c, other: u } : { same: u, other: c }
  );
}
function n0(e) {
  const t = e.maxPadding;
  function n(s) {
    const i = Math.max(t[s] - e[s], 0);
    return (e[s] += i), i;
  }
  (e.y += n("top")), (e.x += n("left")), n("right"), n("bottom");
}
function s0(e, t) {
  const n = t.maxPadding;
  function s(i) {
    const r = { left: 0, top: 0, right: 0, bottom: 0 };
    return (
      i.forEach((o) => {
        r[o] = Math.max(t[o], n[o]);
      }),
      r
    );
  }
  return s(e ? ["left", "right"] : ["top", "bottom"]);
}
function ms(e, t, n, s) {
  const i = [];
  let r, o, a, l, c, u;
  for (r = 0, o = e.length, c = 0; r < o; ++r) {
    (a = e[r]),
      (l = a.box),
      l.update(a.width || t.w, a.height || t.h, s0(a.horizontal, t));
    const { same: f, other: h } = e0(t, n, a, s);
    (c |= f && i.length), (u = u || h), l.fullSize || i.push(a);
  }
  return (c && ms(i, t, n, s)) || u;
}
function ui(e, t, n, s, i) {
  (e.top = n),
    (e.left = t),
    (e.right = t + s),
    (e.bottom = n + i),
    (e.width = s),
    (e.height = i);
}
function gc(e, t, n, s) {
  const i = n.padding;
  let { x: r, y: o } = t;
  for (const a of e) {
    const l = a.box,
      c = s[a.stack] || { count: 1, placed: 0, weight: 1 },
      u = a.stackWeight / c.weight || 1;
    if (a.horizontal) {
      const f = t.w * u,
        h = c.size || l.height;
      ae(c.start) && (o = c.start),
        l.fullSize
          ? ui(l, i.left, o, n.outerWidth - i.right - i.left, h)
          : ui(l, t.left + c.placed, o, f, h),
        (c.start = o),
        (c.placed += f),
        (o = l.bottom);
    } else {
      const f = t.h * u,
        h = c.size || l.width;
      ae(c.start) && (r = c.start),
        l.fullSize
          ? ui(l, r, i.top, h, n.outerHeight - i.bottom - i.top)
          : ui(l, r, t.top + c.placed, h, f),
        (c.start = r),
        (c.placed += f),
        (r = l.right);
    }
  }
  (t.x = r), (t.y = o);
}
at.set("layout", {
  autoPadding: !0,
  padding: { top: 0, right: 0, bottom: 0, left: 0 },
});
var Xe = {
  addBox(e, t) {
    e.boxes || (e.boxes = []),
      (t.fullSize = t.fullSize || !1),
      (t.position = t.position || "top"),
      (t.weight = t.weight || 0),
      (t._layers =
        t._layers ||
        function () {
          return [
            {
              z: 0,
              draw(n) {
                t.draw(n);
              },
            },
          ];
        }),
      e.boxes.push(t);
  },
  removeBox(e, t) {
    const n = e.boxes ? e.boxes.indexOf(t) : -1;
    n !== -1 && e.boxes.splice(n, 1);
  },
  configure(e, t, n) {
    (t.fullSize = n.fullSize), (t.position = n.position), (t.weight = n.weight);
  },
  update(e, t, n, s) {
    if (!e) return;
    const i = Wt(e.options.layout.padding),
      r = Math.max(t - i.width, 0),
      o = Math.max(n - i.height, 0),
      a = t0(e.boxes),
      l = a.vertical,
      c = a.horizontal;
    pt(e.boxes, (g) => {
      typeof g.beforeLayout == "function" && g.beforeLayout();
    });
    const u =
        l.reduce(
          (g, x) => (x.box.options && x.box.options.display === !1 ? g : g + 1),
          0
        ) || 1,
      f = Object.freeze({
        outerWidth: t,
        outerHeight: n,
        padding: i,
        availableWidth: r,
        availableHeight: o,
        vBoxMaxWidth: r / 2 / u,
        hBoxMaxHeight: o / 2,
      }),
      h = Object.assign({}, i);
    nh(h, Wt(s));
    const d = Object.assign(
        { maxPadding: h, w: r, h: o, x: i.left, y: i.top },
        i
      ),
      p = J_(l.concat(c), f);
    ms(a.fullSize, d, f, p),
      ms(l, d, f, p),
      ms(c, d, f, p) && ms(l, d, f, p),
      n0(d),
      gc(a.leftAndTop, d, f, p),
      (d.x += d.w),
      (d.y += d.h),
      gc(a.rightAndBottom, d, f, p),
      (e.chartArea = {
        left: d.left,
        top: d.top,
        right: d.left + d.w,
        bottom: d.top + d.h,
        height: d.h,
        width: d.w,
      }),
      pt(a.chartArea, (g) => {
        const x = g.box;
        Object.assign(x, e.chartArea),
          x.update(d.w, d.h, { left: 0, top: 0, right: 0, bottom: 0 });
      });
  },
};
class sh {
  acquireContext(t, n) {}
  releaseContext(t) {
    return !1;
  }
  addEventListener(t, n, s) {}
  removeEventListener(t, n, s) {}
  getDevicePixelRatio() {
    return 1;
  }
  getMaximumSize(t, n, s, i) {
    return (
      (n = Math.max(0, n || t.width)),
      (s = s || t.height),
      { width: n, height: Math.max(0, i ? Math.floor(n / i) : s) }
    );
  }
  isAttached(t) {
    return !0;
  }
  updateConfig(t) {}
}
class i0 extends sh {
  acquireContext(t) {
    return (t && t.getContext && t.getContext("2d")) || null;
  }
  updateConfig(t) {
    t.options.animation = !1;
  }
}
const _i = "$chartjs",
  r0 = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout",
  },
  mc = (e) => e === null || e === "";
function o0(e, t) {
  const n = e.style,
    s = e.getAttribute("height"),
    i = e.getAttribute("width");
  if (
    ((e[_i] = {
      initial: {
        height: s,
        width: i,
        style: { display: n.display, height: n.height, width: n.width },
      },
    }),
    (n.display = n.display || "block"),
    (n.boxSizing = n.boxSizing || "border-box"),
    mc(i))
  ) {
    const r = ql(e, "width");
    r !== void 0 && (e.width = r);
  }
  if (mc(s))
    if (e.style.height === "") e.height = e.width / (t || 2);
    else {
      const r = ql(e, "height");
      r !== void 0 && (e.height = r);
    }
  return e;
}
const ih = Nx ? { passive: !0 } : !1;
function a0(e, t, n) {
  e.addEventListener(t, n, ih);
}
function l0(e, t, n) {
  e.canvas.removeEventListener(t, n, ih);
}
function c0(e, t) {
  const n = r0[e.type] || e.type,
    { x: s, y: i } = bn(e, t);
  return {
    type: n,
    chart: t,
    native: e,
    x: s !== void 0 ? s : null,
    y: i !== void 0 ? i : null,
  };
}
function Di(e, t) {
  for (const n of e) if (n === t || n.contains(t)) return !0;
}
function u0(e, t, n) {
  const s = e.canvas,
    i = new MutationObserver((r) => {
      let o = !1;
      for (const a of r)
        (o = o || Di(a.addedNodes, s)), (o = o && !Di(a.removedNodes, s));
      o && n();
    });
  return i.observe(document, { childList: !0, subtree: !0 }), i;
}
function f0(e, t, n) {
  const s = e.canvas,
    i = new MutationObserver((r) => {
      let o = !1;
      for (const a of r)
        (o = o || Di(a.removedNodes, s)), (o = o && !Di(a.addedNodes, s));
      o && n();
    });
  return i.observe(document, { childList: !0, subtree: !0 }), i;
}
const js = new Map();
let bc = 0;
function rh() {
  const e = window.devicePixelRatio;
  e !== bc &&
    ((bc = e),
    js.forEach((t, n) => {
      n.currentDevicePixelRatio !== e && t();
    }));
}
function h0(e, t) {
  js.size || window.addEventListener("resize", rh), js.set(e, t);
}
function d0(e) {
  js.delete(e), js.size || window.removeEventListener("resize", rh);
}
function p0(e, t, n) {
  const s = e.canvas,
    i = s && ga(s);
  if (!i) return;
  const r = Ef((a, l) => {
      const c = i.clientWidth;
      n(a, l), c < i.clientWidth && n();
    }, window),
    o = new ResizeObserver((a) => {
      const l = a[0],
        c = l.contentRect.width,
        u = l.contentRect.height;
      (c === 0 && u === 0) || r(c, u);
    });
  return o.observe(i), h0(e, r), o;
}
function Lr(e, t, n) {
  n && n.disconnect(), t === "resize" && d0(e);
}
function g0(e, t, n) {
  const s = e.canvas,
    i = Ef(
      (r) => {
        e.ctx !== null && n(c0(r, e));
      },
      e,
      (r) => {
        const o = r[0];
        return [o, o.offsetX, o.offsetY];
      }
    );
  return a0(s, t, i), i;
}
class m0 extends sh {
  acquireContext(t, n) {
    const s = t && t.getContext && t.getContext("2d");
    return s && s.canvas === t ? (o0(t, n), s) : null;
  }
  releaseContext(t) {
    const n = t.canvas;
    if (!n[_i]) return !1;
    const s = n[_i].initial;
    ["height", "width"].forEach((r) => {
      const o = s[r];
      ht(o) ? n.removeAttribute(r) : n.setAttribute(r, o);
    });
    const i = s.style || {};
    return (
      Object.keys(i).forEach((r) => {
        n.style[r] = i[r];
      }),
      (n.width = n.width),
      delete n[_i],
      !0
    );
  }
  addEventListener(t, n, s) {
    this.removeEventListener(t, n);
    const i = t.$proxies || (t.$proxies = {}),
      o = { attach: u0, detach: f0, resize: p0 }[n] || g0;
    i[n] = o(t, n, s);
  }
  removeEventListener(t, n) {
    const s = t.$proxies || (t.$proxies = {}),
      i = s[n];
    if (!i) return;
    (({ attach: Lr, detach: Lr, resize: Lr })[n] || l0)(t, n, i),
      (s[n] = void 0);
  }
  getDevicePixelRatio() {
    return window.devicePixelRatio;
  }
  getMaximumSize(t, n, s, i) {
    return zx(t, n, s, i);
  }
  isAttached(t) {
    const n = ga(t);
    return !!(n && n.isConnected);
  }
}
function b0(e) {
  return !Yf() || (typeof OffscreenCanvas < "u" && e instanceof OffscreenCanvas)
    ? i0
    : m0;
}
class x0 {
  constructor() {
    this._init = [];
  }
  notify(t, n, s, i) {
    n === "beforeInit" &&
      ((this._init = this._createDescriptors(t, !0)),
      this._notify(this._init, t, "install"));
    const r = i ? this._descriptors(t).filter(i) : this._descriptors(t),
      o = this._notify(r, t, n, s);
    return (
      n === "afterDestroy" &&
        (this._notify(r, t, "stop"), this._notify(this._init, t, "uninstall")),
      o
    );
  }
  _notify(t, n, s, i) {
    i = i || {};
    for (const r of t) {
      const o = r.plugin,
        a = o[s],
        l = [n, i, r.options];
      if (xt(a, l, o) === !1 && i.cancelable) return !1;
    }
    return !0;
  }
  invalidate() {
    ht(this._cache) || ((this._oldCache = this._cache), (this._cache = void 0));
  }
  _descriptors(t) {
    if (this._cache) return this._cache;
    const n = (this._cache = this._createDescriptors(t));
    return this._notifyStateChanges(t), n;
  }
  _createDescriptors(t, n) {
    const s = t && t.config,
      i = nt(s.options && s.options.plugins, {}),
      r = _0(s);
    return i === !1 && !n ? [] : v0(t, r, i, n);
  }
  _notifyStateChanges(t) {
    const n = this._oldCache || [],
      s = this._cache,
      i = (r, o) =>
        r.filter((a) => !o.some((l) => a.plugin.id === l.plugin.id));
    this._notify(i(n, s), t, "stop"), this._notify(i(s, n), t, "start");
  }
}
function _0(e) {
  const t = {},
    n = [],
    s = Object.keys(ke.plugins.items);
  for (let r = 0; r < s.length; r++) n.push(ke.getPlugin(s[r]));
  const i = e.plugins || [];
  for (let r = 0; r < i.length; r++) {
    const o = i[r];
    n.indexOf(o) === -1 && (n.push(o), (t[o.id] = !0));
  }
  return { plugins: n, localIds: t };
}
function y0(e, t) {
  return !t && e === !1 ? null : e === !0 ? {} : e;
}
function v0(e, { plugins: t, localIds: n }, s, i) {
  const r = [],
    o = e.getContext();
  for (const a of t) {
    const l = a.id,
      c = y0(s[l], i);
    c !== null &&
      r.push({
        plugin: a,
        options: C0(e.config, { plugin: a, local: n[l] }, c, o),
      });
  }
  return r;
}
function C0(e, { plugin: t, local: n }, s, i) {
  const r = e.pluginScopeKeys(t),
    o = e.getOptionScopes(s, r);
  return (
    n && t.defaults && o.push(t.defaults),
    e.createResolver(o, i, [""], { scriptable: !1, indexable: !1, allKeys: !0 })
  );
}
function fo(e, t) {
  const n = at.datasets[e] || {};
  return (
    ((t.datasets || {})[e] || {}).indexAxis || t.indexAxis || n.indexAxis || "x"
  );
}
function w0(e, t) {
  let n = e;
  return (
    e === "_index_" ? (n = t) : e === "_value_" && (n = t === "x" ? "y" : "x"),
    n
  );
}
function M0(e, t) {
  return e === t ? "_index_" : "_value_";
}
function S0(e) {
  if (e === "top" || e === "bottom") return "x";
  if (e === "left" || e === "right") return "y";
}
function ho(e, t) {
  return e === "x" || e === "y"
    ? e
    : t.axis || S0(t.position) || e.charAt(0).toLowerCase();
}
function k0(e, t) {
  const n = En[e.type] || { scales: {} },
    s = t.scales || {},
    i = fo(e.type, t),
    r = Object.create(null),
    o = Object.create(null);
  return (
    Object.keys(s).forEach((a) => {
      const l = s[a];
      if (!ft(l))
        return console.error(`Invalid scale configuration for scale: ${a}`);
      if (l._proxy)
        return console.warn(
          `Ignoring resolver passed as options for scale: ${a}`
        );
      const c = ho(a, l),
        u = M0(c, i),
        f = n.scales || {};
      (r[c] = r[c] || a),
        (o[a] = ws(Object.create(null), [{ axis: c }, l, f[c], f[u]]));
    }),
    e.data.datasets.forEach((a) => {
      const l = a.type || e.type,
        c = a.indexAxis || fo(l, t),
        f = (En[l] || {}).scales || {};
      Object.keys(f).forEach((h) => {
        const d = w0(h, c),
          p = a[d + "AxisID"] || r[d] || d;
        (o[p] = o[p] || Object.create(null)),
          ws(o[p], [{ axis: d }, s[p], f[h]]);
      });
    }),
    Object.keys(o).forEach((a) => {
      const l = o[a];
      ws(l, [at.scales[l.type], at.scale]);
    }),
    o
  );
}
function oh(e) {
  const t = e.options || (e.options = {});
  (t.plugins = nt(t.plugins, {})), (t.scales = k0(e, t));
}
function ah(e) {
  return (
    (e = e || {}),
    (e.datasets = e.datasets || []),
    (e.labels = e.labels || []),
    e
  );
}
function P0(e) {
  return (e = e || {}), (e.data = ah(e.data)), oh(e), e;
}
const xc = new Map(),
  lh = new Set();
function fi(e, t) {
  let n = xc.get(e);
  return n || ((n = t()), xc.set(e, n), lh.add(n)), n;
}
const ds = (e, t, n) => {
  const s = on(t, n);
  s !== void 0 && e.add(s);
};
class O0 {
  constructor(t) {
    (this._config = P0(t)),
      (this._scopeCache = new Map()),
      (this._resolverCache = new Map());
  }
  get platform() {
    return this._config.platform;
  }
  get type() {
    return this._config.type;
  }
  set type(t) {
    this._config.type = t;
  }
  get data() {
    return this._config.data;
  }
  set data(t) {
    this._config.data = ah(t);
  }
  get options() {
    return this._config.options;
  }
  set options(t) {
    this._config.options = t;
  }
  get plugins() {
    return this._config.plugins;
  }
  update() {
    const t = this._config;
    this.clearCache(), oh(t);
  }
  clearCache() {
    this._scopeCache.clear(), this._resolverCache.clear();
  }
  datasetScopeKeys(t) {
    return fi(t, () => [[`datasets.${t}`, ""]]);
  }
  datasetAnimationScopeKeys(t, n) {
    return fi(`${t}.transition.${n}`, () => [
      [`datasets.${t}.transitions.${n}`, `transitions.${n}`],
      [`datasets.${t}`, ""],
    ]);
  }
  datasetElementScopeKeys(t, n) {
    return fi(`${t}-${n}`, () => [
      [`datasets.${t}.elements.${n}`, `datasets.${t}`, `elements.${n}`, ""],
    ]);
  }
  pluginScopeKeys(t) {
    const n = t.id,
      s = this.type;
    return fi(`${s}-plugin-${n}`, () => [
      [`plugins.${n}`, ...(t.additionalOptionScopes || [])],
    ]);
  }
  _cachedScopes(t, n) {
    const s = this._scopeCache;
    let i = s.get(t);
    return (!i || n) && ((i = new Map()), s.set(t, i)), i;
  }
  getOptionScopes(t, n, s) {
    const { options: i, type: r } = this,
      o = this._cachedScopes(t, s),
      a = o.get(n);
    if (a) return a;
    const l = new Set();
    n.forEach((u) => {
      t && (l.add(t), u.forEach((f) => ds(l, t, f))),
        u.forEach((f) => ds(l, i, f)),
        u.forEach((f) => ds(l, En[r] || {}, f)),
        u.forEach((f) => ds(l, at, f)),
        u.forEach((f) => ds(l, lo, f));
    });
    const c = Array.from(l);
    return (
      c.length === 0 && c.push(Object.create(null)), lh.has(n) && o.set(n, c), c
    );
  }
  chartOptionScopes() {
    const { options: t, type: n } = this;
    return [t, En[n] || {}, at.datasets[n] || {}, { type: n }, at, lo];
  }
  resolveNamedOptions(t, n, s, i = [""]) {
    const r = { $shared: !0 },
      { resolver: o, subPrefixes: a } = _c(this._resolverCache, t, i);
    let l = o;
    if (A0(o, n)) {
      (r.$shared = !1), (s = an(s) ? s() : s);
      const c = this.createResolver(t, s, a);
      l = Gn(o, s, c);
    }
    for (const c of n) r[c] = l[c];
    return r;
  }
  createResolver(t, n, s = [""], i) {
    const { resolver: r } = _c(this._resolverCache, t, s);
    return ft(n) ? Gn(r, n, void 0, i) : r;
  }
}
function _c(e, t, n) {
  let s = e.get(t);
  s || ((s = new Map()), e.set(t, s));
  const i = n.join();
  let r = s.get(i);
  return (
    r ||
      ((r = {
        resolver: ha(t, n),
        subPrefixes: n.filter((a) => !a.toLowerCase().includes("hover")),
      }),
      s.set(i, r)),
    r
  );
}
const E0 = (e) =>
  ft(e) && Object.getOwnPropertyNames(e).reduce((t, n) => t || an(e[n]), !1);
function A0(e, t) {
  const { isScriptable: n, isIndexable: s } = Hf(e);
  for (const i of t) {
    const r = n(i),
      o = s(i),
      a = (o || r) && e[i];
    if ((r && (an(a) || E0(a))) || (o && Ct(a))) return !0;
  }
  return !1;
}
var T0 = "3.9.1";
const R0 = ["top", "bottom", "left", "right", "chartArea"];
function yc(e, t) {
  return e === "top" || e === "bottom" || (R0.indexOf(e) === -1 && t === "x");
}
function vc(e, t) {
  return function (n, s) {
    return n[e] === s[e] ? n[t] - s[t] : n[e] - s[e];
  };
}
function Cc(e) {
  const t = e.chart,
    n = t.options.animation;
  t.notifyPlugins("afterRender"), xt(n && n.onComplete, [e], t);
}
function D0(e) {
  const t = e.chart,
    n = t.options.animation;
  xt(n && n.onProgress, [e], t);
}
function ch(e) {
  return (
    Yf() && typeof e == "string"
      ? (e = document.getElementById(e))
      : e && e.length && (e = e[0]),
    e && e.canvas && (e = e.canvas),
    e
  );
}
const Li = {},
  uh = (e) => {
    const t = ch(e);
    return Object.values(Li)
      .filter((n) => n.canvas === t)
      .pop();
  };
function L0(e, t, n) {
  const s = Object.keys(e);
  for (const i of s) {
    const r = +i;
    if (r >= t) {
      const o = e[i];
      delete e[i], (n > 0 || r > t) && (e[r + n] = o);
    }
  }
}
function I0(e, t, n, s) {
  return !n || e.type === "mouseout" ? null : s ? t : e;
}
let Xs = class {
  constructor(t, n) {
    const s = (this.config = new O0(n)),
      i = ch(t),
      r = uh(i);
    if (r)
      throw new Error(
        "Canvas is already in use. Chart with ID '" +
          r.id +
          "' must be destroyed before the canvas with ID '" +
          r.canvas.id +
          "' can be reused."
      );
    const o = s.createResolver(s.chartOptionScopes(), this.getContext());
    (this.platform = new (s.platform || b0(i))()),
      this.platform.updateConfig(s);
    const a = this.platform.acquireContext(i, o.aspectRatio),
      l = a && a.canvas,
      c = l && l.height,
      u = l && l.width;
    if (
      ((this.id = _b()),
      (this.ctx = a),
      (this.canvas = l),
      (this.width = u),
      (this.height = c),
      (this._options = o),
      (this._aspectRatio = this.aspectRatio),
      (this._layers = []),
      (this._metasets = []),
      (this._stacks = void 0),
      (this.boxes = []),
      (this.currentDevicePixelRatio = void 0),
      (this.chartArea = void 0),
      (this._active = []),
      (this._lastEvent = void 0),
      (this._listeners = {}),
      (this._responsiveListeners = void 0),
      (this._sortedMetasets = []),
      (this.scales = {}),
      (this._plugins = new x0()),
      (this.$proxies = {}),
      (this._hiddenIndices = {}),
      (this.attached = !1),
      (this._animationsDisabled = void 0),
      (this.$context = void 0),
      (this._doResize = Ib((f) => this.update(f), o.resizeDelay || 0)),
      (this._dataChanges = []),
      (Li[this.id] = this),
      !a || !l)
    ) {
      console.error(
        "Failed to create chart: can't acquire context from the given item"
      );
      return;
    }
    Re.listen(this, "complete", Cc),
      Re.listen(this, "progress", D0),
      this._initialize(),
      this.attached && this.update();
  }
  get aspectRatio() {
    const {
      options: { aspectRatio: t, maintainAspectRatio: n },
      width: s,
      height: i,
      _aspectRatio: r,
    } = this;
    return ht(t) ? (n && r ? r : i ? s / i : null) : t;
  }
  get data() {
    return this.config.data;
  }
  set data(t) {
    this.config.data = t;
  }
  get options() {
    return this._options;
  }
  set options(t) {
    this.config.options = t;
  }
  _initialize() {
    return (
      this.notifyPlugins("beforeInit"),
      this.options.responsive
        ? this.resize()
        : Kl(this, this.options.devicePixelRatio),
      this.bindEvents(),
      this.notifyPlugins("afterInit"),
      this
    );
  }
  clear() {
    return $l(this.canvas, this.ctx), this;
  }
  stop() {
    return Re.stop(this), this;
  }
  resize(t, n) {
    Re.running(this)
      ? (this._resizeBeforeDraw = { width: t, height: n })
      : this._resize(t, n);
  }
  _resize(t, n) {
    const s = this.options,
      i = this.canvas,
      r = s.maintainAspectRatio && this.aspectRatio,
      o = this.platform.getMaximumSize(i, t, n, r),
      a = s.devicePixelRatio || this.platform.getDevicePixelRatio(),
      l = this.width ? "resize" : "attach";
    (this.width = o.width),
      (this.height = o.height),
      (this._aspectRatio = this.aspectRatio),
      Kl(this, a, !0) &&
        (this.notifyPlugins("resize", { size: o }),
        xt(s.onResize, [this, o], this),
        this.attached && this._doResize(l) && this.render());
  }
  ensureScalesHaveIDs() {
    const n = this.options.scales || {};
    pt(n, (s, i) => {
      s.id = i;
    });
  }
  buildOrUpdateScales() {
    const t = this.options,
      n = t.scales,
      s = this.scales,
      i = Object.keys(s).reduce((o, a) => ((o[a] = !1), o), {});
    let r = [];
    n &&
      (r = r.concat(
        Object.keys(n).map((o) => {
          const a = n[o],
            l = ho(o, a),
            c = l === "r",
            u = l === "x";
          return {
            options: a,
            dposition: c ? "chartArea" : u ? "bottom" : "left",
            dtype: c ? "radialLinear" : u ? "category" : "linear",
          };
        })
      )),
      pt(r, (o) => {
        const a = o.options,
          l = a.id,
          c = ho(l, a),
          u = nt(a.type, o.dtype);
        (a.position === void 0 || yc(a.position, c) !== yc(o.dposition)) &&
          (a.position = o.dposition),
          (i[l] = !0);
        let f = null;
        if (l in s && s[l].type === u) f = s[l];
        else {
          const h = ke.getScale(u);
          (f = new h({ id: l, type: u, ctx: this.ctx, chart: this })),
            (s[f.id] = f);
        }
        f.init(a, t);
      }),
      pt(i, (o, a) => {
        o || delete s[a];
      }),
      pt(s, (o) => {
        Xe.configure(this, o, o.options), Xe.addBox(this, o);
      });
  }
  _updateMetasets() {
    const t = this._metasets,
      n = this.data.datasets.length,
      s = t.length;
    if ((t.sort((i, r) => i.index - r.index), s > n)) {
      for (let i = n; i < s; ++i) this._destroyDatasetMeta(i);
      t.splice(n, s - n);
    }
    this._sortedMetasets = t.slice(0).sort(vc("order", "index"));
  }
  _removeUnreferencedMetasets() {
    const {
      _metasets: t,
      data: { datasets: n },
    } = this;
    t.length > n.length && delete this._stacks,
      t.forEach((s, i) => {
        n.filter((r) => r === s._dataset).length === 0 &&
          this._destroyDatasetMeta(i);
      });
  }
  buildOrUpdateControllers() {
    const t = [],
      n = this.data.datasets;
    let s, i;
    for (this._removeUnreferencedMetasets(), s = 0, i = n.length; s < i; s++) {
      const r = n[s];
      let o = this.getDatasetMeta(s);
      const a = r.type || this.config.type;
      if (
        (o.type &&
          o.type !== a &&
          (this._destroyDatasetMeta(s), (o = this.getDatasetMeta(s))),
        (o.type = a),
        (o.indexAxis = r.indexAxis || fo(a, this.options)),
        (o.order = r.order || 0),
        (o.index = s),
        (o.label = "" + r.label),
        (o.visible = this.isDatasetVisible(s)),
        o.controller)
      )
        o.controller.updateIndex(s), o.controller.linkScales();
      else {
        const l = ke.getController(a),
          { datasetElementType: c, dataElementType: u } = at.datasets[a];
        Object.assign(l.prototype, {
          dataElementType: ke.getElement(u),
          datasetElementType: c && ke.getElement(c),
        }),
          (o.controller = new l(this, s)),
          t.push(o.controller);
      }
    }
    return this._updateMetasets(), t;
  }
  _resetElements() {
    pt(
      this.data.datasets,
      (t, n) => {
        this.getDatasetMeta(n).controller.reset();
      },
      this
    );
  }
  reset() {
    this._resetElements(), this.notifyPlugins("reset");
  }
  update(t) {
    const n = this.config;
    n.update();
    const s = (this._options = n.createResolver(
        n.chartOptionScopes(),
        this.getContext()
      )),
      i = (this._animationsDisabled = !s.animation);
    if (
      (this._updateScales(),
      this._checkEventBindings(),
      this._updateHiddenIndices(),
      this._plugins.invalidate(),
      this.notifyPlugins("beforeUpdate", { mode: t, cancelable: !0 }) === !1)
    )
      return;
    const r = this.buildOrUpdateControllers();
    this.notifyPlugins("beforeElementsUpdate");
    let o = 0;
    for (let c = 0, u = this.data.datasets.length; c < u; c++) {
      const { controller: f } = this.getDatasetMeta(c),
        h = !i && r.indexOf(f) === -1;
      f.buildOrUpdateElements(h), (o = Math.max(+f.getMaxOverflow(), o));
    }
    (o = this._minPadding = s.layout.autoPadding ? o : 0),
      this._updateLayout(o),
      i ||
        pt(r, (c) => {
          c.reset();
        }),
      this._updateDatasets(t),
      this.notifyPlugins("afterUpdate", { mode: t }),
      this._layers.sort(vc("z", "_idx"));
    const { _active: a, _lastEvent: l } = this;
    l
      ? this._eventHandler(l, !0)
      : a.length && this._updateHoverStyles(a, a, !0),
      this.render();
  }
  _updateScales() {
    pt(this.scales, (t) => {
      Xe.removeBox(this, t);
    }),
      this.ensureScalesHaveIDs(),
      this.buildOrUpdateScales();
  }
  _checkEventBindings() {
    const t = this.options,
      n = new Set(Object.keys(this._listeners)),
      s = new Set(t.events);
    (!Rl(n, s) || !!this._responsiveListeners !== t.responsive) &&
      (this.unbindEvents(), this.bindEvents());
  }
  _updateHiddenIndices() {
    const { _hiddenIndices: t } = this,
      n = this._getUniformDataChanges() || [];
    for (const { method: s, start: i, count: r } of n) {
      const o = s === "_removeElements" ? -r : r;
      L0(t, i, o);
    }
  }
  _getUniformDataChanges() {
    const t = this._dataChanges;
    if (!t || !t.length) return;
    this._dataChanges = [];
    const n = this.data.datasets.length,
      s = (r) =>
        new Set(
          t
            .filter((o) => o[0] === r)
            .map((o, a) => a + "," + o.splice(1).join(","))
        ),
      i = s(0);
    for (let r = 1; r < n; r++) if (!Rl(i, s(r))) return;
    return Array.from(i)
      .map((r) => r.split(","))
      .map((r) => ({ method: r[1], start: +r[2], count: +r[3] }));
  }
  _updateLayout(t) {
    if (this.notifyPlugins("beforeLayout", { cancelable: !0 }) === !1) return;
    Xe.update(this, this.width, this.height, t);
    const n = this.chartArea,
      s = n.width <= 0 || n.height <= 0;
    (this._layers = []),
      pt(
        this.boxes,
        (i) => {
          (s && i.position === "chartArea") ||
            (i.configure && i.configure(), this._layers.push(...i._layers()));
        },
        this
      ),
      this._layers.forEach((i, r) => {
        i._idx = r;
      }),
      this.notifyPlugins("afterLayout");
  }
  _updateDatasets(t) {
    if (
      this.notifyPlugins("beforeDatasetsUpdate", {
        mode: t,
        cancelable: !0,
      }) !== !1
    ) {
      for (let n = 0, s = this.data.datasets.length; n < s; ++n)
        this.getDatasetMeta(n).controller.configure();
      for (let n = 0, s = this.data.datasets.length; n < s; ++n)
        this._updateDataset(n, an(t) ? t({ datasetIndex: n }) : t);
      this.notifyPlugins("afterDatasetsUpdate", { mode: t });
    }
  }
  _updateDataset(t, n) {
    const s = this.getDatasetMeta(t),
      i = { meta: s, index: t, mode: n, cancelable: !0 };
    this.notifyPlugins("beforeDatasetUpdate", i) !== !1 &&
      (s.controller._update(n),
      (i.cancelable = !1),
      this.notifyPlugins("afterDatasetUpdate", i));
  }
  render() {
    this.notifyPlugins("beforeRender", { cancelable: !0 }) !== !1 &&
      (Re.has(this)
        ? this.attached && !Re.running(this) && Re.start(this)
        : (this.draw(), Cc({ chart: this })));
  }
  draw() {
    let t;
    if (this._resizeBeforeDraw) {
      const { width: s, height: i } = this._resizeBeforeDraw;
      this._resize(s, i), (this._resizeBeforeDraw = null);
    }
    if (
      (this.clear(),
      this.width <= 0 ||
        this.height <= 0 ||
        this.notifyPlugins("beforeDraw", { cancelable: !0 }) === !1)
    )
      return;
    const n = this._layers;
    for (t = 0; t < n.length && n[t].z <= 0; ++t) n[t].draw(this.chartArea);
    for (this._drawDatasets(); t < n.length; ++t) n[t].draw(this.chartArea);
    this.notifyPlugins("afterDraw");
  }
  _getSortedDatasetMetas(t) {
    const n = this._sortedMetasets,
      s = [];
    let i, r;
    for (i = 0, r = n.length; i < r; ++i) {
      const o = n[i];
      (!t || o.visible) && s.push(o);
    }
    return s;
  }
  getSortedVisibleDatasetMetas() {
    return this._getSortedDatasetMetas(!0);
  }
  _drawDatasets() {
    if (this.notifyPlugins("beforeDatasetsDraw", { cancelable: !0 }) === !1)
      return;
    const t = this.getSortedVisibleDatasetMetas();
    for (let n = t.length - 1; n >= 0; --n) this._drawDataset(t[n]);
    this.notifyPlugins("afterDatasetsDraw");
  }
  _drawDataset(t) {
    const n = this.ctx,
      s = t._clip,
      i = !s.disabled,
      r = this.chartArea,
      o = { meta: t, index: t.index, cancelable: !0 };
    this.notifyPlugins("beforeDatasetDraw", o) !== !1 &&
      (i &&
        ca(n, {
          left: s.left === !1 ? 0 : r.left - s.left,
          right: s.right === !1 ? this.width : r.right + s.right,
          top: s.top === !1 ? 0 : r.top - s.top,
          bottom: s.bottom === !1 ? this.height : r.bottom + s.bottom,
        }),
      t.controller.draw(),
      i && ua(n),
      (o.cancelable = !1),
      this.notifyPlugins("afterDatasetDraw", o));
  }
  isPointInArea(t) {
    return Ns(t, this.chartArea, this._minPadding);
  }
  getElementsAtEventForMode(t, n, s, i) {
    const r = Q_.modes[n];
    return typeof r == "function" ? r(this, t, s, i) : [];
  }
  getDatasetMeta(t) {
    const n = this.data.datasets[t],
      s = this._metasets;
    let i = s.filter((r) => r && r._dataset === n).pop();
    return (
      i ||
        ((i = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: (n && n.order) || 0,
          index: t,
          _dataset: n,
          _parsed: [],
          _sorted: !1,
        }),
        s.push(i)),
      i
    );
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = cn(null, { chart: this, type: "chart" }))
    );
  }
  getVisibleDatasetCount() {
    return this.getSortedVisibleDatasetMetas().length;
  }
  isDatasetVisible(t) {
    const n = this.data.datasets[t];
    if (!n) return !1;
    const s = this.getDatasetMeta(t);
    return typeof s.hidden == "boolean" ? !s.hidden : !n.hidden;
  }
  setDatasetVisibility(t, n) {
    const s = this.getDatasetMeta(t);
    s.hidden = !n;
  }
  toggleDataVisibility(t) {
    this._hiddenIndices[t] = !this._hiddenIndices[t];
  }
  getDataVisibility(t) {
    return !this._hiddenIndices[t];
  }
  _updateVisibility(t, n, s) {
    const i = s ? "show" : "hide",
      r = this.getDatasetMeta(t),
      o = r.controller._resolveAnimations(void 0, i);
    ae(n)
      ? ((r.data[n].hidden = !s), this.update())
      : (this.setDatasetVisibility(t, s),
        o.update(r, { visible: s }),
        this.update((a) => (a.datasetIndex === t ? i : void 0)));
  }
  hide(t, n) {
    this._updateVisibility(t, n, !1);
  }
  show(t, n) {
    this._updateVisibility(t, n, !0);
  }
  _destroyDatasetMeta(t) {
    const n = this._metasets[t];
    n && n.controller && n.controller._destroy(), delete this._metasets[t];
  }
  _stop() {
    let t, n;
    for (
      this.stop(), Re.remove(this), t = 0, n = this.data.datasets.length;
      t < n;
      ++t
    )
      this._destroyDatasetMeta(t);
  }
  destroy() {
    this.notifyPlugins("beforeDestroy");
    const { canvas: t, ctx: n } = this;
    this._stop(),
      this.config.clearCache(),
      t &&
        (this.unbindEvents(),
        $l(t, n),
        this.platform.releaseContext(n),
        (this.canvas = null),
        (this.ctx = null)),
      this.notifyPlugins("destroy"),
      delete Li[this.id],
      this.notifyPlugins("afterDestroy");
  }
  toBase64Image(...t) {
    return this.canvas.toDataURL(...t);
  }
  bindEvents() {
    this.bindUserEvents(),
      this.options.responsive
        ? this.bindResponsiveEvents()
        : (this.attached = !0);
  }
  bindUserEvents() {
    const t = this._listeners,
      n = this.platform,
      s = (r, o) => {
        n.addEventListener(this, r, o), (t[r] = o);
      },
      i = (r, o, a) => {
        (r.offsetX = o), (r.offsetY = a), this._eventHandler(r);
      };
    pt(this.options.events, (r) => s(r, i));
  }
  bindResponsiveEvents() {
    this._responsiveListeners || (this._responsiveListeners = {});
    const t = this._responsiveListeners,
      n = this.platform,
      s = (l, c) => {
        n.addEventListener(this, l, c), (t[l] = c);
      },
      i = (l, c) => {
        t[l] && (n.removeEventListener(this, l, c), delete t[l]);
      },
      r = (l, c) => {
        this.canvas && this.resize(l, c);
      };
    let o;
    const a = () => {
      i("attach", a),
        (this.attached = !0),
        this.resize(),
        s("resize", r),
        s("detach", o);
    };
    (o = () => {
      (this.attached = !1),
        i("resize", r),
        this._stop(),
        this._resize(0, 0),
        s("attach", a);
    }),
      n.isAttached(this.canvas) ? a() : o();
  }
  unbindEvents() {
    pt(this._listeners, (t, n) => {
      this.platform.removeEventListener(this, n, t);
    }),
      (this._listeners = {}),
      pt(this._responsiveListeners, (t, n) => {
        this.platform.removeEventListener(this, n, t);
      }),
      (this._responsiveListeners = void 0);
  }
  updateHoverStyle(t, n, s) {
    const i = s ? "set" : "remove";
    let r, o, a, l;
    for (
      n === "dataset" &&
        ((r = this.getDatasetMeta(t[0].datasetIndex)),
        r.controller["_" + i + "DatasetHoverStyle"]()),
        a = 0,
        l = t.length;
      a < l;
      ++a
    ) {
      o = t[a];
      const c = o && this.getDatasetMeta(o.datasetIndex).controller;
      c && c[i + "HoverStyle"](o.element, o.datasetIndex, o.index);
    }
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t) {
    const n = this._active || [],
      s = t.map(({ datasetIndex: r, index: o }) => {
        const a = this.getDatasetMeta(r);
        if (!a) throw new Error("No dataset found at index " + r);
        return { datasetIndex: r, element: a.data[o], index: o };
      });
    !Pi(s, n) &&
      ((this._active = s),
      (this._lastEvent = null),
      this._updateHoverStyles(s, n));
  }
  notifyPlugins(t, n, s) {
    return this._plugins.notify(this, t, n, s);
  }
  _updateHoverStyles(t, n, s) {
    const i = this.options.hover,
      r = (l, c) =>
        l.filter(
          (u) =>
            !c.some(
              (f) => u.datasetIndex === f.datasetIndex && u.index === f.index
            )
        ),
      o = r(n, t),
      a = s ? t : r(t, n);
    o.length && this.updateHoverStyle(o, i.mode, !1),
      a.length && i.mode && this.updateHoverStyle(a, i.mode, !0);
  }
  _eventHandler(t, n) {
    const s = {
        event: t,
        replay: n,
        cancelable: !0,
        inChartArea: this.isPointInArea(t),
      },
      i = (o) =>
        (o.options.events || this.options.events).includes(t.native.type);
    if (this.notifyPlugins("beforeEvent", s, i) === !1) return;
    const r = this._handleEvent(t, n, s.inChartArea);
    return (
      (s.cancelable = !1),
      this.notifyPlugins("afterEvent", s, i),
      (r || s.changed) && this.render(),
      this
    );
  }
  _handleEvent(t, n, s) {
    const { _active: i = [], options: r } = this,
      o = n,
      a = this._getActiveElements(t, i, s, o),
      l = Sb(t),
      c = I0(t, this._lastEvent, s, l);
    s &&
      ((this._lastEvent = null),
      xt(r.onHover, [t, a, this], this),
      l && xt(r.onClick, [t, a, this], this));
    const u = !Pi(a, i);
    return (
      (u || n) && ((this._active = a), this._updateHoverStyles(a, i, n)),
      (this._lastEvent = c),
      u
    );
  }
  _getActiveElements(t, n, s, i) {
    if (t.type === "mouseout") return [];
    if (!s) return n;
    const r = this.options.hover;
    return this.getElementsAtEventForMode(t, r.mode, r, i);
  }
};
const wc = () => pt(Xs.instances, (e) => e._plugins.invalidate()),
  We = !0;
Object.defineProperties(Xs, {
  defaults: { enumerable: We, value: at },
  instances: { enumerable: We, value: Li },
  overrides: { enumerable: We, value: En },
  registry: { enumerable: We, value: ke },
  version: { enumerable: We, value: T0 },
  getChart: { enumerable: We, value: uh },
  register: {
    enumerable: We,
    value: (...e) => {
      ke.add(...e), wc();
    },
  },
  unregister: {
    enumerable: We,
    value: (...e) => {
      ke.remove(...e), wc();
    },
  },
});
function fh(e, t, n) {
  const {
    startAngle: s,
    pixelMargin: i,
    x: r,
    y: o,
    outerRadius: a,
    innerRadius: l,
  } = t;
  let c = i / a;
  e.beginPath(),
    e.arc(r, o, a, s - c, n + c),
    l > i
      ? ((c = i / l), e.arc(r, o, l, n + c, s - c, !0))
      : e.arc(r, o, i, n + kt, s - kt),
    e.closePath(),
    e.clip();
}
function F0(e) {
  return fa(e, ["outerStart", "outerEnd", "innerStart", "innerEnd"]);
}
function B0(e, t, n, s) {
  const i = F0(e.options.borderRadius),
    r = (n - t) / 2,
    o = Math.min(r, (s * t) / 2),
    a = (l) => {
      const c = ((n - Math.min(r, l)) * s) / 2;
      return jt(l, 0, Math.min(r, c));
    };
  return {
    outerStart: a(i.outerStart),
    outerEnd: a(i.outerEnd),
    innerStart: jt(i.innerStart, 0, o),
    innerEnd: jt(i.innerEnd, 0, o),
  };
}
function In(e, t, n, s) {
  return { x: n + e * Math.cos(t), y: s + e * Math.sin(t) };
}
function po(e, t, n, s, i, r) {
  const { x: o, y: a, startAngle: l, pixelMargin: c, innerRadius: u } = t,
    f = Math.max(t.outerRadius + s + n - c, 0),
    h = u > 0 ? u + s + n + c : 0;
  let d = 0;
  const p = i - l;
  if (s) {
    const j = u > 0 ? u - s : 0,
      G = f > 0 ? f - s : 0,
      U = (j + G) / 2,
      tt = U !== 0 ? (p * U) / (U + s) : p;
    d = (p - tt) / 2;
  }
  const g = Math.max(0.001, p * f - n / Pt) / f,
    x = (p - g) / 2,
    b = l + x + d,
    _ = i - x - d,
    {
      outerStart: v,
      outerEnd: C,
      innerStart: w,
      innerEnd: O,
    } = B0(t, h, f, _ - b),
    k = f - v,
    S = f - C,
    R = b + v / k,
    L = _ - C / S,
    V = h + w,
    A = h + O,
    W = b + w / V,
    J = _ - O / A;
  if ((e.beginPath(), r)) {
    if ((e.arc(o, a, f, R, L), C > 0)) {
      const U = In(S, L, o, a);
      e.arc(U.x, U.y, C, L, _ + kt);
    }
    const j = In(A, _, o, a);
    if ((e.lineTo(j.x, j.y), O > 0)) {
      const U = In(A, J, o, a);
      e.arc(U.x, U.y, O, _ + kt, J + Math.PI);
    }
    if ((e.arc(o, a, h, _ - O / h, b + w / h, !0), w > 0)) {
      const U = In(V, W, o, a);
      e.arc(U.x, U.y, w, W + Math.PI, b - kt);
    }
    const G = In(k, b, o, a);
    if ((e.lineTo(G.x, G.y), v > 0)) {
      const U = In(k, R, o, a);
      e.arc(U.x, U.y, v, b - kt, R);
    }
  } else {
    e.moveTo(o, a);
    const j = Math.cos(R) * f + o,
      G = Math.sin(R) * f + a;
    e.lineTo(j, G);
    const U = Math.cos(L) * f + o,
      tt = Math.sin(L) * f + a;
    e.lineTo(U, tt);
  }
  e.closePath();
}
function z0(e, t, n, s, i) {
  const { fullCircles: r, startAngle: o, circumference: a } = t;
  let l = t.endAngle;
  if (r) {
    po(e, t, n, s, o + mt, i);
    for (let c = 0; c < r; ++c) e.fill();
    isNaN(a) || ((l = o + (a % mt)), a % mt === 0 && (l += mt));
  }
  return po(e, t, n, s, l, i), e.fill(), l;
}
function N0(e, t, n) {
  const { x: s, y: i, startAngle: r, pixelMargin: o, fullCircles: a } = t,
    l = Math.max(t.outerRadius - o, 0),
    c = t.innerRadius + o;
  let u;
  for (
    n && fh(e, t, r + mt), e.beginPath(), e.arc(s, i, c, r + mt, r, !0), u = 0;
    u < a;
    ++u
  )
    e.stroke();
  for (e.beginPath(), e.arc(s, i, l, r, r + mt), u = 0; u < a; ++u) e.stroke();
}
function H0(e, t, n, s, i, r) {
  const { options: o } = t,
    { borderWidth: a, borderJoinStyle: l } = o,
    c = o.borderAlign === "inner";
  a &&
    (c
      ? ((e.lineWidth = a * 2), (e.lineJoin = l || "round"))
      : ((e.lineWidth = a), (e.lineJoin = l || "bevel")),
    t.fullCircles && N0(e, t, c),
    c && fh(e, t, i),
    po(e, t, n, s, i, r),
    e.stroke());
}
class lr extends Ee {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.circumference = void 0),
      (this.startAngle = void 0),
      (this.endAngle = void 0),
      (this.innerRadius = void 0),
      (this.outerRadius = void 0),
      (this.pixelMargin = 0),
      (this.fullCircles = 0),
      t && Object.assign(this, t);
  }
  inRange(t, n, s) {
    const i = this.getProps(["x", "y"], s),
      { angle: r, distance: o } = Sf(i, { x: t, y: n }),
      {
        startAngle: a,
        endAngle: l,
        innerRadius: c,
        outerRadius: u,
        circumference: f,
      } = this.getProps(
        [
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "circumference",
        ],
        s
      ),
      h = this.options.spacing / 2,
      p = nt(f, l - a) >= mt || zs(r, a, l),
      g = Ke(o, c + h, u + h);
    return p && g;
  }
  getCenterPoint(t) {
    const {
        x: n,
        y: s,
        startAngle: i,
        endAngle: r,
        innerRadius: o,
        outerRadius: a,
      } = this.getProps(
        [
          "x",
          "y",
          "startAngle",
          "endAngle",
          "innerRadius",
          "outerRadius",
          "circumference",
        ],
        t
      ),
      { offset: l, spacing: c } = this.options,
      u = (i + r) / 2,
      f = (o + a + c + l) / 2;
    return { x: n + Math.cos(u) * f, y: s + Math.sin(u) * f };
  }
  tooltipPosition(t) {
    return this.getCenterPoint(t);
  }
  draw(t) {
    const { options: n, circumference: s } = this,
      i = (n.offset || 0) / 2,
      r = (n.spacing || 0) / 2,
      o = n.circular;
    if (
      ((this.pixelMargin = n.borderAlign === "inner" ? 0.33 : 0),
      (this.fullCircles = s > mt ? Math.floor(s / mt) : 0),
      s === 0 || this.innerRadius < 0 || this.outerRadius < 0)
    )
      return;
    t.save();
    let a = 0;
    if (i) {
      a = i / 2;
      const c = (this.startAngle + this.endAngle) / 2;
      t.translate(Math.cos(c) * a, Math.sin(c) * a),
        this.circumference >= Pt && (a = i);
    }
    (t.fillStyle = n.backgroundColor), (t.strokeStyle = n.borderColor);
    const l = z0(t, this, a, r, o);
    H0(t, this, a, r, l, o), t.restore();
  }
}
lr.id = "arc";
lr.defaults = {
  borderAlign: "center",
  borderColor: "#fff",
  borderJoinStyle: void 0,
  borderRadius: 0,
  borderWidth: 2,
  offset: 0,
  spacing: 0,
  angle: void 0,
  circular: !0,
};
lr.defaultRoutes = { backgroundColor: "backgroundColor" };
function hh(e, t, n = t) {
  (e.lineCap = nt(n.borderCapStyle, t.borderCapStyle)),
    e.setLineDash(nt(n.borderDash, t.borderDash)),
    (e.lineDashOffset = nt(n.borderDashOffset, t.borderDashOffset)),
    (e.lineJoin = nt(n.borderJoinStyle, t.borderJoinStyle)),
    (e.lineWidth = nt(n.borderWidth, t.borderWidth)),
    (e.strokeStyle = nt(n.borderColor, t.borderColor));
}
function j0(e, t, n) {
  e.lineTo(n.x, n.y);
}
function V0(e) {
  return e.stepped
    ? lx
    : e.tension || e.cubicInterpolationMode === "monotone"
    ? cx
    : j0;
}
function dh(e, t, n = {}) {
  const s = e.length,
    { start: i = 0, end: r = s - 1 } = n,
    { start: o, end: a } = t,
    l = Math.max(i, o),
    c = Math.min(r, a),
    u = (i < o && r < o) || (i > a && r > a);
  return {
    count: s,
    start: l,
    loop: t.loop,
    ilen: c < l && !u ? s + c - l : c - l,
  };
}
function W0(e, t, n, s) {
  const { points: i, options: r } = t,
    { count: o, start: a, loop: l, ilen: c } = dh(i, n, s),
    u = V0(r);
  let { move: f = !0, reverse: h } = s || {},
    d,
    p,
    g;
  for (d = 0; d <= c; ++d)
    (p = i[(a + (h ? c - d : d)) % o]),
      !p.skip &&
        (f ? (e.moveTo(p.x, p.y), (f = !1)) : u(e, g, p, h, r.stepped),
        (g = p));
  return l && ((p = i[(a + (h ? c : 0)) % o]), u(e, g, p, h, r.stepped)), !!l;
}
function $0(e, t, n, s) {
  const i = t.points,
    { count: r, start: o, ilen: a } = dh(i, n, s),
    { move: l = !0, reverse: c } = s || {};
  let u = 0,
    f = 0,
    h,
    d,
    p,
    g,
    x,
    b;
  const _ = (C) => (o + (c ? a - C : C)) % r,
    v = () => {
      g !== x && (e.lineTo(u, x), e.lineTo(u, g), e.lineTo(u, b));
    };
  for (l && ((d = i[_(0)]), e.moveTo(d.x, d.y)), h = 0; h <= a; ++h) {
    if (((d = i[_(h)]), d.skip)) continue;
    const C = d.x,
      w = d.y,
      O = C | 0;
    O === p
      ? (w < g ? (g = w) : w > x && (x = w), (u = (f * u + C) / ++f))
      : (v(), e.lineTo(C, w), (p = O), (f = 0), (g = x = w)),
      (b = w);
  }
  v();
}
function go(e) {
  const t = e.options,
    n = t.borderDash && t.borderDash.length;
  return !e._decimated &&
    !e._loop &&
    !t.tension &&
    t.cubicInterpolationMode !== "monotone" &&
    !t.stepped &&
    !n
    ? $0
    : W0;
}
function U0(e) {
  return e.stepped
    ? Hx
    : e.tension || e.cubicInterpolationMode === "monotone"
    ? jx
    : xn;
}
function Y0(e, t, n, s) {
  let i = t._path;
  i || ((i = t._path = new Path2D()), t.path(i, n, s) && i.closePath()),
    hh(e, t.options),
    e.stroke(i);
}
function K0(e, t, n, s) {
  const { segments: i, options: r } = t,
    o = go(t);
  for (const a of i)
    hh(e, r, a.style),
      e.beginPath(),
      o(e, t, a, { start: n, end: n + s - 1 }) && e.closePath(),
      e.stroke();
}
const q0 = typeof Path2D == "function";
function X0(e, t, n, s) {
  q0 && !t.options.segment ? Y0(e, t, n, s) : K0(e, t, n, s);
}
class cr extends Ee {
  constructor(t) {
    super(),
      (this.animated = !0),
      (this.options = void 0),
      (this._chart = void 0),
      (this._loop = void 0),
      (this._fullLoop = void 0),
      (this._path = void 0),
      (this._points = void 0),
      (this._segments = void 0),
      (this._decimated = !1),
      (this._pointsUpdated = !1),
      (this._datasetIndex = void 0),
      t && Object.assign(this, t);
  }
  updateControlPoints(t, n) {
    const s = this.options;
    if (
      (s.tension || s.cubicInterpolationMode === "monotone") &&
      !s.stepped &&
      !this._pointsUpdated
    ) {
      const i = s.spanGaps ? this._loop : this._fullLoop;
      Rx(this._points, s, t, i, n), (this._pointsUpdated = !0);
    }
  }
  set points(t) {
    (this._points = t),
      delete this._segments,
      delete this._path,
      (this._pointsUpdated = !1);
  }
  get points() {
    return this._points;
  }
  get segments() {
    return this._segments || (this._segments = Qx(this, this.options.segment));
  }
  first() {
    const t = this.segments,
      n = this.points;
    return t.length && n[t[0].start];
  }
  last() {
    const t = this.segments,
      n = this.points,
      s = t.length;
    return s && n[t[s - 1].end];
  }
  interpolate(t, n) {
    const s = this.options,
      i = t[n],
      r = this.points,
      o = Kx(this, { property: n, start: i, end: i });
    if (!o.length) return;
    const a = [],
      l = U0(s);
    let c, u;
    for (c = 0, u = o.length; c < u; ++c) {
      const { start: f, end: h } = o[c],
        d = r[f],
        p = r[h];
      if (d === p) {
        a.push(d);
        continue;
      }
      const g = Math.abs((i - d[n]) / (p[n] - d[n])),
        x = l(d, p, g, s.stepped);
      (x[n] = t[n]), a.push(x);
    }
    return a.length === 1 ? a[0] : a;
  }
  pathSegment(t, n, s) {
    return go(this)(t, this, n, s);
  }
  path(t, n, s) {
    const i = this.segments,
      r = go(this);
    let o = this._loop;
    (n = n || 0), (s = s || this.points.length - n);
    for (const a of i) o &= r(t, this, a, { start: n, end: n + s - 1 });
    return !!o;
  }
  draw(t, n, s, i) {
    const r = this.options || {};
    (this.points || []).length &&
      r.borderWidth &&
      (t.save(), X0(t, this, s, i), t.restore()),
      this.animated && ((this._pointsUpdated = !1), (this._path = void 0));
  }
}
cr.id = "line";
cr.defaults = {
  borderCapStyle: "butt",
  borderDash: [],
  borderDashOffset: 0,
  borderJoinStyle: "miter",
  borderWidth: 3,
  capBezierPoints: !0,
  cubicInterpolationMode: "default",
  fill: !1,
  spanGaps: !1,
  stepped: !1,
  tension: 0,
};
cr.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor",
};
cr.descriptors = {
  _scriptable: !0,
  _indexable: (e) => e !== "borderDash" && e !== "fill",
};
function Mc(e, t, n, s) {
  const i = e.options,
    { [n]: r } = e.getProps([n], s);
  return Math.abs(t - r) < i.radius + i.hitRadius;
}
class Ca extends Ee {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.parsed = void 0),
      (this.skip = void 0),
      (this.stop = void 0),
      t && Object.assign(this, t);
  }
  inRange(t, n, s) {
    const i = this.options,
      { x: r, y: o } = this.getProps(["x", "y"], s);
    return (
      Math.pow(t - r, 2) + Math.pow(n - o, 2) <
      Math.pow(i.hitRadius + i.radius, 2)
    );
  }
  inXRange(t, n) {
    return Mc(this, t, "x", n);
  }
  inYRange(t, n) {
    return Mc(this, t, "y", n);
  }
  getCenterPoint(t) {
    const { x: n, y: s } = this.getProps(["x", "y"], t);
    return { x: n, y: s };
  }
  size(t) {
    t = t || this.options || {};
    let n = t.radius || 0;
    n = Math.max(n, (n && t.hoverRadius) || 0);
    const s = (n && t.borderWidth) || 0;
    return (n + s) * 2;
  }
  draw(t, n) {
    const s = this.options;
    this.skip ||
      s.radius < 0.1 ||
      !Ns(this, n, this.size(s) / 2) ||
      ((t.strokeStyle = s.borderColor),
      (t.lineWidth = s.borderWidth),
      (t.fillStyle = s.backgroundColor),
      co(t, s, this.x, this.y));
  }
  getRange() {
    const t = this.options || {};
    return t.radius + t.hitRadius;
  }
}
Ca.id = "point";
Ca.defaults = {
  borderWidth: 1,
  hitRadius: 1,
  hoverBorderWidth: 1,
  hoverRadius: 4,
  pointStyle: "circle",
  radius: 3,
  rotation: 0,
};
Ca.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor",
};
function ph(e, t) {
  const {
    x: n,
    y: s,
    base: i,
    width: r,
    height: o,
  } = e.getProps(["x", "y", "base", "width", "height"], t);
  let a, l, c, u, f;
  return (
    e.horizontal
      ? ((f = o / 2),
        (a = Math.min(n, i)),
        (l = Math.max(n, i)),
        (c = s - f),
        (u = s + f))
      : ((f = r / 2),
        (a = n - f),
        (l = n + f),
        (c = Math.min(s, i)),
        (u = Math.max(s, i))),
    { left: a, top: c, right: l, bottom: u }
  );
}
function Qe(e, t, n, s) {
  return e ? 0 : jt(t, n, s);
}
function Q0(e, t, n) {
  const s = e.options.borderWidth,
    i = e.borderSkipped,
    r = Nf(s);
  return {
    t: Qe(i.top, r.top, 0, n),
    r: Qe(i.right, r.right, 0, t),
    b: Qe(i.bottom, r.bottom, 0, n),
    l: Qe(i.left, r.left, 0, t),
  };
}
function G0(e, t, n) {
  const { enableBorderRadius: s } = e.getProps(["enableBorderRadius"]),
    i = e.options.borderRadius,
    r = kn(i),
    o = Math.min(t, n),
    a = e.borderSkipped,
    l = s || ft(i);
  return {
    topLeft: Qe(!l || a.top || a.left, r.topLeft, 0, o),
    topRight: Qe(!l || a.top || a.right, r.topRight, 0, o),
    bottomLeft: Qe(!l || a.bottom || a.left, r.bottomLeft, 0, o),
    bottomRight: Qe(!l || a.bottom || a.right, r.bottomRight, 0, o),
  };
}
function Z0(e) {
  const t = ph(e),
    n = t.right - t.left,
    s = t.bottom - t.top,
    i = Q0(e, n / 2, s / 2),
    r = G0(e, n / 2, s / 2);
  return {
    outer: { x: t.left, y: t.top, w: n, h: s, radius: r },
    inner: {
      x: t.left + i.l,
      y: t.top + i.t,
      w: n - i.l - i.r,
      h: s - i.t - i.b,
      radius: {
        topLeft: Math.max(0, r.topLeft - Math.max(i.t, i.l)),
        topRight: Math.max(0, r.topRight - Math.max(i.t, i.r)),
        bottomLeft: Math.max(0, r.bottomLeft - Math.max(i.b, i.l)),
        bottomRight: Math.max(0, r.bottomRight - Math.max(i.b, i.r)),
      },
    },
  };
}
function Ir(e, t, n, s) {
  const i = t === null,
    r = n === null,
    a = e && !(i && r) && ph(e, s);
  return a && (i || Ke(t, a.left, a.right)) && (r || Ke(n, a.top, a.bottom));
}
function J0(e) {
  return e.topLeft || e.topRight || e.bottomLeft || e.bottomRight;
}
function ty(e, t) {
  e.rect(t.x, t.y, t.w, t.h);
}
function Fr(e, t, n = {}) {
  const s = e.x !== n.x ? -t : 0,
    i = e.y !== n.y ? -t : 0,
    r = (e.x + e.w !== n.x + n.w ? t : 0) - s,
    o = (e.y + e.h !== n.y + n.h ? t : 0) - i;
  return { x: e.x + s, y: e.y + i, w: e.w + r, h: e.h + o, radius: e.radius };
}
class wa extends Ee {
  constructor(t) {
    super(),
      (this.options = void 0),
      (this.horizontal = void 0),
      (this.base = void 0),
      (this.width = void 0),
      (this.height = void 0),
      (this.inflateAmount = void 0),
      t && Object.assign(this, t);
  }
  draw(t) {
    const {
        inflateAmount: n,
        options: { borderColor: s, backgroundColor: i },
      } = this,
      { inner: r, outer: o } = Z0(this),
      a = J0(o.radius) ? Hs : ty;
    t.save(),
      (o.w !== r.w || o.h !== r.h) &&
        (t.beginPath(),
        a(t, Fr(o, n, r)),
        t.clip(),
        a(t, Fr(r, -n, o)),
        (t.fillStyle = s),
        t.fill("evenodd")),
      t.beginPath(),
      a(t, Fr(r, n)),
      (t.fillStyle = i),
      t.fill(),
      t.restore();
  }
  inRange(t, n, s) {
    return Ir(this, t, n, s);
  }
  inXRange(t, n) {
    return Ir(this, t, null, n);
  }
  inYRange(t, n) {
    return Ir(this, null, t, n);
  }
  getCenterPoint(t) {
    const {
      x: n,
      y: s,
      base: i,
      horizontal: r,
    } = this.getProps(["x", "y", "base", "horizontal"], t);
    return { x: r ? (n + i) / 2 : n, y: r ? s : (s + i) / 2 };
  }
  getRange(t) {
    return t === "x" ? this.width / 2 : this.height / 2;
  }
}
wa.id = "bar";
wa.defaults = {
  borderSkipped: "start",
  borderWidth: 0,
  borderRadius: 0,
  inflateAmount: "auto",
  pointStyle: void 0,
};
wa.defaultRoutes = {
  backgroundColor: "backgroundColor",
  borderColor: "borderColor",
};
const Sc = (e, t) => {
    let { boxHeight: n = t, boxWidth: s = t } = e;
    return (
      e.usePointStyle &&
        ((n = Math.min(n, t)), (s = e.pointStyleWidth || Math.min(s, t))),
      { boxWidth: s, boxHeight: n, itemHeight: Math.max(t, n) }
    );
  },
  ey = (e, t) =>
    e !== null &&
    t !== null &&
    e.datasetIndex === t.datasetIndex &&
    e.index === t.index;
class kc extends Ee {
  constructor(t) {
    super(),
      (this._added = !1),
      (this.legendHitBoxes = []),
      (this._hoveredItem = null),
      (this.doughnutMode = !1),
      (this.chart = t.chart),
      (this.options = t.options),
      (this.ctx = t.ctx),
      (this.legendItems = void 0),
      (this.columnSizes = void 0),
      (this.lineWidths = void 0),
      (this.maxHeight = void 0),
      (this.maxWidth = void 0),
      (this.top = void 0),
      (this.bottom = void 0),
      (this.left = void 0),
      (this.right = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this._margins = void 0),
      (this.position = void 0),
      (this.weight = void 0),
      (this.fullSize = void 0);
  }
  update(t, n, s) {
    (this.maxWidth = t),
      (this.maxHeight = n),
      (this._margins = s),
      this.setDimensions(),
      this.buildLabels(),
      this.fit();
  }
  setDimensions() {
    this.isHorizontal()
      ? ((this.width = this.maxWidth),
        (this.left = this._margins.left),
        (this.right = this.width))
      : ((this.height = this.maxHeight),
        (this.top = this._margins.top),
        (this.bottom = this.height));
  }
  buildLabels() {
    const t = this.options.labels || {};
    let n = xt(t.generateLabels, [this.chart], this) || [];
    t.filter && (n = n.filter((s) => t.filter(s, this.chart.data))),
      t.sort && (n = n.sort((s, i) => t.sort(s, i, this.chart.data))),
      this.options.reverse && n.reverse(),
      (this.legendItems = n);
  }
  fit() {
    const { options: t, ctx: n } = this;
    if (!t.display) {
      this.width = this.height = 0;
      return;
    }
    const s = t.labels,
      i = Bt(s.font),
      r = i.size,
      o = this._computeTitleHeight(),
      { boxWidth: a, itemHeight: l } = Sc(s, r);
    let c, u;
    (n.font = i.string),
      this.isHorizontal()
        ? ((c = this.maxWidth), (u = this._fitRows(o, r, a, l) + 10))
        : ((u = this.maxHeight), (c = this._fitCols(o, r, a, l) + 10)),
      (this.width = Math.min(c, t.maxWidth || this.maxWidth)),
      (this.height = Math.min(u, t.maxHeight || this.maxHeight));
  }
  _fitRows(t, n, s, i) {
    const {
        ctx: r,
        maxWidth: o,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.lineWidths = [0]),
      u = i + a;
    let f = t;
    (r.textAlign = "left"), (r.textBaseline = "middle");
    let h = -1,
      d = -u;
    return (
      this.legendItems.forEach((p, g) => {
        const x = s + n / 2 + r.measureText(p.text).width;
        (g === 0 || c[c.length - 1] + x + 2 * a > o) &&
          ((f += u), (c[c.length - (g > 0 ? 0 : 1)] = 0), (d += u), h++),
          (l[g] = { left: 0, top: d, row: h, width: x, height: i }),
          (c[c.length - 1] += x + a);
      }),
      f
    );
  }
  _fitCols(t, n, s, i) {
    const {
        ctx: r,
        maxHeight: o,
        options: {
          labels: { padding: a },
        },
      } = this,
      l = (this.legendHitBoxes = []),
      c = (this.columnSizes = []),
      u = o - t;
    let f = a,
      h = 0,
      d = 0,
      p = 0,
      g = 0;
    return (
      this.legendItems.forEach((x, b) => {
        const _ = s + n / 2 + r.measureText(x.text).width;
        b > 0 &&
          d + i + 2 * a > u &&
          ((f += h + a),
          c.push({ width: h, height: d }),
          (p += h + a),
          g++,
          (h = d = 0)),
          (l[b] = { left: p, top: d, col: g, width: _, height: i }),
          (h = Math.max(h, _)),
          (d += i + a);
      }),
      (f += h),
      c.push({ width: h, height: d }),
      f
    );
  }
  adjustHitBoxes() {
    if (!this.options.display) return;
    const t = this._computeTitleHeight(),
      {
        legendHitBoxes: n,
        options: {
          align: s,
          labels: { padding: i },
          rtl: r,
        },
      } = this,
      o = Vn(r, this.left, this.width);
    if (this.isHorizontal()) {
      let a = 0,
        l = Qt(s, this.left + i, this.right - this.lineWidths[a]);
      for (const c of n)
        a !== c.row &&
          ((a = c.row),
          (l = Qt(s, this.left + i, this.right - this.lineWidths[a]))),
          (c.top += this.top + t + i),
          (c.left = o.leftForLtr(o.x(l), c.width)),
          (l += c.width + i);
    } else {
      let a = 0,
        l = Qt(s, this.top + t + i, this.bottom - this.columnSizes[a].height);
      for (const c of n)
        c.col !== a &&
          ((a = c.col),
          (l = Qt(
            s,
            this.top + t + i,
            this.bottom - this.columnSizes[a].height
          ))),
          (c.top = l),
          (c.left += this.left + i),
          (c.left = o.leftForLtr(o.x(c.left), c.width)),
          (l += c.height + i);
    }
  }
  isHorizontal() {
    return (
      this.options.position === "top" || this.options.position === "bottom"
    );
  }
  draw() {
    if (this.options.display) {
      const t = this.ctx;
      ca(t, this), this._draw(), ua(t);
    }
  }
  _draw() {
    const { options: t, columnSizes: n, lineWidths: s, ctx: i } = this,
      { align: r, labels: o } = t,
      a = at.color,
      l = Vn(t.rtl, this.left, this.width),
      c = Bt(o.font),
      { color: u, padding: f } = o,
      h = c.size,
      d = h / 2;
    let p;
    this.drawTitle(),
      (i.textAlign = l.textAlign("left")),
      (i.textBaseline = "middle"),
      (i.lineWidth = 0.5),
      (i.font = c.string);
    const { boxWidth: g, boxHeight: x, itemHeight: b } = Sc(o, h),
      _ = function (k, S, R) {
        if (isNaN(g) || g <= 0 || isNaN(x) || x < 0) return;
        i.save();
        const L = nt(R.lineWidth, 1);
        if (
          ((i.fillStyle = nt(R.fillStyle, a)),
          (i.lineCap = nt(R.lineCap, "butt")),
          (i.lineDashOffset = nt(R.lineDashOffset, 0)),
          (i.lineJoin = nt(R.lineJoin, "miter")),
          (i.lineWidth = L),
          (i.strokeStyle = nt(R.strokeStyle, a)),
          i.setLineDash(nt(R.lineDash, [])),
          o.usePointStyle)
        ) {
          const V = {
              radius: (x * Math.SQRT2) / 2,
              pointStyle: R.pointStyle,
              rotation: R.rotation,
              borderWidth: L,
            },
            A = l.xPlus(k, g / 2),
            W = S + d;
          zf(i, V, A, W, o.pointStyleWidth && g);
        } else {
          const V = S + Math.max((h - x) / 2, 0),
            A = l.leftForLtr(k, g),
            W = kn(R.borderRadius);
          i.beginPath(),
            Object.values(W).some((J) => J !== 0)
              ? Hs(i, { x: A, y: V, w: g, h: x, radius: W })
              : i.rect(A, V, g, x),
            i.fill(),
            L !== 0 && i.stroke();
        }
        i.restore();
      },
      v = function (k, S, R) {
        Qn(i, R.text, k, S + b / 2, c, {
          strikethrough: R.hidden,
          textAlign: l.textAlign(R.textAlign),
        });
      },
      C = this.isHorizontal(),
      w = this._computeTitleHeight();
    C
      ? (p = {
          x: Qt(r, this.left + f, this.right - s[0]),
          y: this.top + f + w,
          line: 0,
        })
      : (p = {
          x: this.left + f,
          y: Qt(r, this.top + w + f, this.bottom - n[0].height),
          line: 0,
        }),
      Kf(this.ctx, t.textDirection);
    const O = b + f;
    this.legendItems.forEach((k, S) => {
      (i.strokeStyle = k.fontColor || u), (i.fillStyle = k.fontColor || u);
      const R = i.measureText(k.text).width,
        L = l.textAlign(k.textAlign || (k.textAlign = o.textAlign)),
        V = g + d + R;
      let A = p.x,
        W = p.y;
      l.setWidth(this.width),
        C
          ? S > 0 &&
            A + V + f > this.right &&
            ((W = p.y += O),
            p.line++,
            (A = p.x = Qt(r, this.left + f, this.right - s[p.line])))
          : S > 0 &&
            W + O > this.bottom &&
            ((A = p.x = A + n[p.line].width + f),
            p.line++,
            (W = p.y =
              Qt(r, this.top + w + f, this.bottom - n[p.line].height)));
      const J = l.x(A);
      _(J, W, k),
        (A = Fb(L, A + g + d, C ? A + V : this.right, t.rtl)),
        v(l.x(A), W, k),
        C ? (p.x += V + f) : (p.y += O);
    }),
      qf(this.ctx, t.textDirection);
  }
  drawTitle() {
    const t = this.options,
      n = t.title,
      s = Bt(n.font),
      i = Wt(n.padding);
    if (!n.display) return;
    const r = Vn(t.rtl, this.left, this.width),
      o = this.ctx,
      a = n.position,
      l = s.size / 2,
      c = i.top + l;
    let u,
      f = this.left,
      h = this.width;
    if (this.isHorizontal())
      (h = Math.max(...this.lineWidths)),
        (u = this.top + c),
        (f = Qt(t.align, f, this.right - h));
    else {
      const p = this.columnSizes.reduce((g, x) => Math.max(g, x.height), 0);
      u =
        c +
        Qt(
          t.align,
          this.top,
          this.bottom - p - t.labels.padding - this._computeTitleHeight()
        );
    }
    const d = Qt(a, f, f + h);
    (o.textAlign = r.textAlign(Af(a))),
      (o.textBaseline = "middle"),
      (o.strokeStyle = n.color),
      (o.fillStyle = n.color),
      (o.font = s.string),
      Qn(o, n.text, d, u, s);
  }
  _computeTitleHeight() {
    const t = this.options.title,
      n = Bt(t.font),
      s = Wt(t.padding);
    return t.display ? n.lineHeight + s.height : 0;
  }
  _getLegendItemAt(t, n) {
    let s, i, r;
    if (Ke(t, this.left, this.right) && Ke(n, this.top, this.bottom)) {
      for (r = this.legendHitBoxes, s = 0; s < r.length; ++s)
        if (
          ((i = r[s]),
          Ke(t, i.left, i.left + i.width) && Ke(n, i.top, i.top + i.height))
        )
          return this.legendItems[s];
    }
    return null;
  }
  handleEvent(t) {
    const n = this.options;
    if (!ny(t.type, n)) return;
    const s = this._getLegendItemAt(t.x, t.y);
    if (t.type === "mousemove" || t.type === "mouseout") {
      const i = this._hoveredItem,
        r = ey(i, s);
      i && !r && xt(n.onLeave, [t, i, this], this),
        (this._hoveredItem = s),
        s && !r && xt(n.onHover, [t, s, this], this);
    } else s && xt(n.onClick, [t, s, this], this);
  }
}
function ny(e, t) {
  return !!(
    ((e === "mousemove" || e === "mouseout") && (t.onHover || t.onLeave)) ||
    (t.onClick && (e === "click" || e === "mouseup"))
  );
}
var sy = {
  id: "legend",
  _element: kc,
  start(e, t, n) {
    const s = (e.legend = new kc({ ctx: e.ctx, options: n, chart: e }));
    Xe.configure(e, s, n), Xe.addBox(e, s);
  },
  stop(e) {
    Xe.removeBox(e, e.legend), delete e.legend;
  },
  beforeUpdate(e, t, n) {
    const s = e.legend;
    Xe.configure(e, s, n), (s.options = n);
  },
  afterUpdate(e) {
    const t = e.legend;
    t.buildLabels(), t.adjustHitBoxes();
  },
  afterEvent(e, t) {
    t.replay || e.legend.handleEvent(t.event);
  },
  defaults: {
    display: !0,
    position: "top",
    align: "center",
    fullSize: !0,
    reverse: !1,
    weight: 1e3,
    onClick(e, t, n) {
      const s = t.datasetIndex,
        i = n.chart;
      i.isDatasetVisible(s)
        ? (i.hide(s), (t.hidden = !0))
        : (i.show(s), (t.hidden = !1));
    },
    onHover: null,
    onLeave: null,
    labels: {
      color: (e) => e.chart.options.color,
      boxWidth: 40,
      padding: 10,
      generateLabels(e) {
        const t = e.data.datasets,
          {
            labels: { usePointStyle: n, pointStyle: s, textAlign: i, color: r },
          } = e.legend.options;
        return e._getSortedDatasetMetas().map((o) => {
          const a = o.controller.getStyle(n ? 0 : void 0),
            l = Wt(a.borderWidth);
          return {
            text: t[o.index].label,
            fillStyle: a.backgroundColor,
            fontColor: r,
            hidden: !o.visible,
            lineCap: a.borderCapStyle,
            lineDash: a.borderDash,
            lineDashOffset: a.borderDashOffset,
            lineJoin: a.borderJoinStyle,
            lineWidth: (l.width + l.height) / 4,
            strokeStyle: a.borderColor,
            pointStyle: s || a.pointStyle,
            rotation: a.rotation,
            textAlign: i || a.textAlign,
            borderRadius: 0,
            datasetIndex: o.index,
          };
        }, this);
      },
    },
    title: {
      color: (e) => e.chart.options.color,
      display: !1,
      position: "center",
      text: "",
    },
  },
  descriptors: {
    _scriptable: (e) => !e.startsWith("on"),
    labels: {
      _scriptable: (e) => !["generateLabels", "filter", "sort"].includes(e),
    },
  },
};
const Ps = {
  average(e) {
    if (!e.length) return !1;
    let t,
      n,
      s = 0,
      i = 0,
      r = 0;
    for (t = 0, n = e.length; t < n; ++t) {
      const o = e[t].element;
      if (o && o.hasValue()) {
        const a = o.tooltipPosition();
        (s += a.x), (i += a.y), ++r;
      }
    }
    return { x: s / r, y: i / r };
  },
  nearest(e, t) {
    if (!e.length) return !1;
    let n = t.x,
      s = t.y,
      i = Number.POSITIVE_INFINITY,
      r,
      o,
      a;
    for (r = 0, o = e.length; r < o; ++r) {
      const l = e[r].element;
      if (l && l.hasValue()) {
        const c = l.getCenterPoint(),
          u = oo(t, c);
        u < i && ((i = u), (a = l));
      }
    }
    if (a) {
      const l = a.tooltipPosition();
      (n = l.x), (s = l.y);
    }
    return { x: n, y: s };
  },
};
function ve(e, t) {
  return t && (Ct(t) ? Array.prototype.push.apply(e, t) : e.push(t)), e;
}
function De(e) {
  return (typeof e == "string" || e instanceof String) &&
    e.indexOf(`
`) > -1
    ? e.split(`
`)
    : e;
}
function iy(e, t) {
  const { element: n, datasetIndex: s, index: i } = t,
    r = e.getDatasetMeta(s).controller,
    { label: o, value: a } = r.getLabelAndValue(i);
  return {
    chart: e,
    label: o,
    parsed: r.getParsed(i),
    raw: e.data.datasets[s].data[i],
    formattedValue: a,
    dataset: r.getDataset(),
    dataIndex: i,
    datasetIndex: s,
    element: n,
  };
}
function Pc(e, t) {
  const n = e.chart.ctx,
    { body: s, footer: i, title: r } = e,
    { boxWidth: o, boxHeight: a } = t,
    l = Bt(t.bodyFont),
    c = Bt(t.titleFont),
    u = Bt(t.footerFont),
    f = r.length,
    h = i.length,
    d = s.length,
    p = Wt(t.padding);
  let g = p.height,
    x = 0,
    b = s.reduce(
      (C, w) => C + w.before.length + w.lines.length + w.after.length,
      0
    );
  if (
    ((b += e.beforeBody.length + e.afterBody.length),
    f &&
      (g += f * c.lineHeight + (f - 1) * t.titleSpacing + t.titleMarginBottom),
    b)
  ) {
    const C = t.displayColors ? Math.max(a, l.lineHeight) : l.lineHeight;
    g += d * C + (b - d) * l.lineHeight + (b - 1) * t.bodySpacing;
  }
  h && (g += t.footerMarginTop + h * u.lineHeight + (h - 1) * t.footerSpacing);
  let _ = 0;
  const v = function (C) {
    x = Math.max(x, n.measureText(C).width + _);
  };
  return (
    n.save(),
    (n.font = c.string),
    pt(e.title, v),
    (n.font = l.string),
    pt(e.beforeBody.concat(e.afterBody), v),
    (_ = t.displayColors ? o + 2 + t.boxPadding : 0),
    pt(s, (C) => {
      pt(C.before, v), pt(C.lines, v), pt(C.after, v);
    }),
    (_ = 0),
    (n.font = u.string),
    pt(e.footer, v),
    n.restore(),
    (x += p.width),
    { width: x, height: g }
  );
}
function ry(e, t) {
  const { y: n, height: s } = t;
  return n < s / 2 ? "top" : n > e.height - s / 2 ? "bottom" : "center";
}
function oy(e, t, n, s) {
  const { x: i, width: r } = s,
    o = n.caretSize + n.caretPadding;
  if ((e === "left" && i + r + o > t.width) || (e === "right" && i - r - o < 0))
    return !0;
}
function ay(e, t, n, s) {
  const { x: i, width: r } = n,
    {
      width: o,
      chartArea: { left: a, right: l },
    } = e;
  let c = "center";
  return (
    s === "center"
      ? (c = i <= (a + l) / 2 ? "left" : "right")
      : i <= r / 2
      ? (c = "left")
      : i >= o - r / 2 && (c = "right"),
    oy(c, e, t, n) && (c = "center"),
    c
  );
}
function Oc(e, t, n) {
  const s = n.yAlign || t.yAlign || ry(e, n);
  return { xAlign: n.xAlign || t.xAlign || ay(e, t, n, s), yAlign: s };
}
function ly(e, t) {
  let { x: n, width: s } = e;
  return t === "right" ? (n -= s) : t === "center" && (n -= s / 2), n;
}
function cy(e, t, n) {
  let { y: s, height: i } = e;
  return (
    t === "top" ? (s += n) : t === "bottom" ? (s -= i + n) : (s -= i / 2), s
  );
}
function Ec(e, t, n, s) {
  const { caretSize: i, caretPadding: r, cornerRadius: o } = e,
    { xAlign: a, yAlign: l } = n,
    c = i + r,
    { topLeft: u, topRight: f, bottomLeft: h, bottomRight: d } = kn(o);
  let p = ly(t, a);
  const g = cy(t, l, c);
  return (
    l === "center"
      ? a === "left"
        ? (p += c)
        : a === "right" && (p -= c)
      : a === "left"
      ? (p -= Math.max(u, h) + i)
      : a === "right" && (p += Math.max(f, d) + i),
    { x: jt(p, 0, s.width - t.width), y: jt(g, 0, s.height - t.height) }
  );
}
function hi(e, t, n) {
  const s = Wt(n.padding);
  return t === "center"
    ? e.x + e.width / 2
    : t === "right"
    ? e.x + e.width - s.right
    : e.x + s.left;
}
function Ac(e) {
  return ve([], De(e));
}
function uy(e, t, n) {
  return cn(e, { tooltip: t, tooltipItems: n, type: "tooltip" });
}
function Tc(e, t) {
  const n = t && t.dataset && t.dataset.tooltip && t.dataset.tooltip.callbacks;
  return n ? e.override(n) : e;
}
class mo extends Ee {
  constructor(t) {
    super(),
      (this.opacity = 0),
      (this._active = []),
      (this._eventPosition = void 0),
      (this._size = void 0),
      (this._cachedAnimations = void 0),
      (this._tooltipItems = []),
      (this.$animations = void 0),
      (this.$context = void 0),
      (this.chart = t.chart || t._chart),
      (this._chart = this.chart),
      (this.options = t.options),
      (this.dataPoints = void 0),
      (this.title = void 0),
      (this.beforeBody = void 0),
      (this.body = void 0),
      (this.afterBody = void 0),
      (this.footer = void 0),
      (this.xAlign = void 0),
      (this.yAlign = void 0),
      (this.x = void 0),
      (this.y = void 0),
      (this.height = void 0),
      (this.width = void 0),
      (this.caretX = void 0),
      (this.caretY = void 0),
      (this.labelColors = void 0),
      (this.labelPointStyles = void 0),
      (this.labelTextColors = void 0);
  }
  initialize(t) {
    (this.options = t),
      (this._cachedAnimations = void 0),
      (this.$context = void 0);
  }
  _resolveAnimations() {
    const t = this._cachedAnimations;
    if (t) return t;
    const n = this.chart,
      s = this.options.setContext(this.getContext()),
      i = s.enabled && n.options.animation && s.animations,
      r = new Qf(this.chart, i);
    return i._cacheable && (this._cachedAnimations = Object.freeze(r)), r;
  }
  getContext() {
    return (
      this.$context ||
      (this.$context = uy(this.chart.getContext(), this, this._tooltipItems))
    );
  }
  getTitle(t, n) {
    const { callbacks: s } = n,
      i = s.beforeTitle.apply(this, [t]),
      r = s.title.apply(this, [t]),
      o = s.afterTitle.apply(this, [t]);
    let a = [];
    return (a = ve(a, De(i))), (a = ve(a, De(r))), (a = ve(a, De(o))), a;
  }
  getBeforeBody(t, n) {
    return Ac(n.callbacks.beforeBody.apply(this, [t]));
  }
  getBody(t, n) {
    const { callbacks: s } = n,
      i = [];
    return (
      pt(t, (r) => {
        const o = { before: [], lines: [], after: [] },
          a = Tc(s, r);
        ve(o.before, De(a.beforeLabel.call(this, r))),
          ve(o.lines, a.label.call(this, r)),
          ve(o.after, De(a.afterLabel.call(this, r))),
          i.push(o);
      }),
      i
    );
  }
  getAfterBody(t, n) {
    return Ac(n.callbacks.afterBody.apply(this, [t]));
  }
  getFooter(t, n) {
    const { callbacks: s } = n,
      i = s.beforeFooter.apply(this, [t]),
      r = s.footer.apply(this, [t]),
      o = s.afterFooter.apply(this, [t]);
    let a = [];
    return (a = ve(a, De(i))), (a = ve(a, De(r))), (a = ve(a, De(o))), a;
  }
  _createItems(t) {
    const n = this._active,
      s = this.chart.data,
      i = [],
      r = [],
      o = [];
    let a = [],
      l,
      c;
    for (l = 0, c = n.length; l < c; ++l) a.push(iy(this.chart, n[l]));
    return (
      t.filter && (a = a.filter((u, f, h) => t.filter(u, f, h, s))),
      t.itemSort && (a = a.sort((u, f) => t.itemSort(u, f, s))),
      pt(a, (u) => {
        const f = Tc(t.callbacks, u);
        i.push(f.labelColor.call(this, u)),
          r.push(f.labelPointStyle.call(this, u)),
          o.push(f.labelTextColor.call(this, u));
      }),
      (this.labelColors = i),
      (this.labelPointStyles = r),
      (this.labelTextColors = o),
      (this.dataPoints = a),
      a
    );
  }
  update(t, n) {
    const s = this.options.setContext(this.getContext()),
      i = this._active;
    let r,
      o = [];
    if (!i.length) this.opacity !== 0 && (r = { opacity: 0 });
    else {
      const a = Ps[s.position].call(this, i, this._eventPosition);
      (o = this._createItems(s)),
        (this.title = this.getTitle(o, s)),
        (this.beforeBody = this.getBeforeBody(o, s)),
        (this.body = this.getBody(o, s)),
        (this.afterBody = this.getAfterBody(o, s)),
        (this.footer = this.getFooter(o, s));
      const l = (this._size = Pc(this, s)),
        c = Object.assign({}, a, l),
        u = Oc(this.chart, s, c),
        f = Ec(s, c, u, this.chart);
      (this.xAlign = u.xAlign),
        (this.yAlign = u.yAlign),
        (r = {
          opacity: 1,
          x: f.x,
          y: f.y,
          width: l.width,
          height: l.height,
          caretX: a.x,
          caretY: a.y,
        });
    }
    (this._tooltipItems = o),
      (this.$context = void 0),
      r && this._resolveAnimations().update(this, r),
      t &&
        s.external &&
        s.external.call(this, { chart: this.chart, tooltip: this, replay: n });
  }
  drawCaret(t, n, s, i) {
    const r = this.getCaretPosition(t, s, i);
    n.lineTo(r.x1, r.y1), n.lineTo(r.x2, r.y2), n.lineTo(r.x3, r.y3);
  }
  getCaretPosition(t, n, s) {
    const { xAlign: i, yAlign: r } = this,
      { caretSize: o, cornerRadius: a } = s,
      { topLeft: l, topRight: c, bottomLeft: u, bottomRight: f } = kn(a),
      { x: h, y: d } = t,
      { width: p, height: g } = n;
    let x, b, _, v, C, w;
    return (
      r === "center"
        ? ((C = d + g / 2),
          i === "left"
            ? ((x = h), (b = x - o), (v = C + o), (w = C - o))
            : ((x = h + p), (b = x + o), (v = C - o), (w = C + o)),
          (_ = x))
        : (i === "left"
            ? (b = h + Math.max(l, u) + o)
            : i === "right"
            ? (b = h + p - Math.max(c, f) - o)
            : (b = this.caretX),
          r === "top"
            ? ((v = d), (C = v - o), (x = b - o), (_ = b + o))
            : ((v = d + g), (C = v + o), (x = b + o), (_ = b - o)),
          (w = v)),
      { x1: x, x2: b, x3: _, y1: v, y2: C, y3: w }
    );
  }
  drawTitle(t, n, s) {
    const i = this.title,
      r = i.length;
    let o, a, l;
    if (r) {
      const c = Vn(s.rtl, this.x, this.width);
      for (
        t.x = hi(this, s.titleAlign, s),
          n.textAlign = c.textAlign(s.titleAlign),
          n.textBaseline = "middle",
          o = Bt(s.titleFont),
          a = s.titleSpacing,
          n.fillStyle = s.titleColor,
          n.font = o.string,
          l = 0;
        l < r;
        ++l
      )
        n.fillText(i[l], c.x(t.x), t.y + o.lineHeight / 2),
          (t.y += o.lineHeight + a),
          l + 1 === r && (t.y += s.titleMarginBottom - a);
    }
  }
  _drawColorBox(t, n, s, i, r) {
    const o = this.labelColors[s],
      a = this.labelPointStyles[s],
      { boxHeight: l, boxWidth: c, boxPadding: u } = r,
      f = Bt(r.bodyFont),
      h = hi(this, "left", r),
      d = i.x(h),
      p = l < f.lineHeight ? (f.lineHeight - l) / 2 : 0,
      g = n.y + p;
    if (r.usePointStyle) {
      const x = {
          radius: Math.min(c, l) / 2,
          pointStyle: a.pointStyle,
          rotation: a.rotation,
          borderWidth: 1,
        },
        b = i.leftForLtr(d, c) + c / 2,
        _ = g + l / 2;
      (t.strokeStyle = r.multiKeyBackground),
        (t.fillStyle = r.multiKeyBackground),
        co(t, x, b, _),
        (t.strokeStyle = o.borderColor),
        (t.fillStyle = o.backgroundColor),
        co(t, x, b, _);
    } else {
      (t.lineWidth = ft(o.borderWidth)
        ? Math.max(...Object.values(o.borderWidth))
        : o.borderWidth || 1),
        (t.strokeStyle = o.borderColor),
        t.setLineDash(o.borderDash || []),
        (t.lineDashOffset = o.borderDashOffset || 0);
      const x = i.leftForLtr(d, c - u),
        b = i.leftForLtr(i.xPlus(d, 1), c - u - 2),
        _ = kn(o.borderRadius);
      Object.values(_).some((v) => v !== 0)
        ? (t.beginPath(),
          (t.fillStyle = r.multiKeyBackground),
          Hs(t, { x, y: g, w: c, h: l, radius: _ }),
          t.fill(),
          t.stroke(),
          (t.fillStyle = o.backgroundColor),
          t.beginPath(),
          Hs(t, { x: b, y: g + 1, w: c - 2, h: l - 2, radius: _ }),
          t.fill())
        : ((t.fillStyle = r.multiKeyBackground),
          t.fillRect(x, g, c, l),
          t.strokeRect(x, g, c, l),
          (t.fillStyle = o.backgroundColor),
          t.fillRect(b, g + 1, c - 2, l - 2));
    }
    t.fillStyle = this.labelTextColors[s];
  }
  drawBody(t, n, s) {
    const { body: i } = this,
      {
        bodySpacing: r,
        bodyAlign: o,
        displayColors: a,
        boxHeight: l,
        boxWidth: c,
        boxPadding: u,
      } = s,
      f = Bt(s.bodyFont);
    let h = f.lineHeight,
      d = 0;
    const p = Vn(s.rtl, this.x, this.width),
      g = function (S) {
        n.fillText(S, p.x(t.x + d), t.y + h / 2), (t.y += h + r);
      },
      x = p.textAlign(o);
    let b, _, v, C, w, O, k;
    for (
      n.textAlign = o,
        n.textBaseline = "middle",
        n.font = f.string,
        t.x = hi(this, x, s),
        n.fillStyle = s.bodyColor,
        pt(this.beforeBody, g),
        d = a && x !== "right" ? (o === "center" ? c / 2 + u : c + 2 + u) : 0,
        C = 0,
        O = i.length;
      C < O;
      ++C
    ) {
      for (
        b = i[C],
          _ = this.labelTextColors[C],
          n.fillStyle = _,
          pt(b.before, g),
          v = b.lines,
          a &&
            v.length &&
            (this._drawColorBox(n, t, C, p, s),
            (h = Math.max(f.lineHeight, l))),
          w = 0,
          k = v.length;
        w < k;
        ++w
      )
        g(v[w]), (h = f.lineHeight);
      pt(b.after, g);
    }
    (d = 0), (h = f.lineHeight), pt(this.afterBody, g), (t.y -= r);
  }
  drawFooter(t, n, s) {
    const i = this.footer,
      r = i.length;
    let o, a;
    if (r) {
      const l = Vn(s.rtl, this.x, this.width);
      for (
        t.x = hi(this, s.footerAlign, s),
          t.y += s.footerMarginTop,
          n.textAlign = l.textAlign(s.footerAlign),
          n.textBaseline = "middle",
          o = Bt(s.footerFont),
          n.fillStyle = s.footerColor,
          n.font = o.string,
          a = 0;
        a < r;
        ++a
      )
        n.fillText(i[a], l.x(t.x), t.y + o.lineHeight / 2),
          (t.y += o.lineHeight + s.footerSpacing);
    }
  }
  drawBackground(t, n, s, i) {
    const { xAlign: r, yAlign: o } = this,
      { x: a, y: l } = t,
      { width: c, height: u } = s,
      {
        topLeft: f,
        topRight: h,
        bottomLeft: d,
        bottomRight: p,
      } = kn(i.cornerRadius);
    (n.fillStyle = i.backgroundColor),
      (n.strokeStyle = i.borderColor),
      (n.lineWidth = i.borderWidth),
      n.beginPath(),
      n.moveTo(a + f, l),
      o === "top" && this.drawCaret(t, n, s, i),
      n.lineTo(a + c - h, l),
      n.quadraticCurveTo(a + c, l, a + c, l + h),
      o === "center" && r === "right" && this.drawCaret(t, n, s, i),
      n.lineTo(a + c, l + u - p),
      n.quadraticCurveTo(a + c, l + u, a + c - p, l + u),
      o === "bottom" && this.drawCaret(t, n, s, i),
      n.lineTo(a + d, l + u),
      n.quadraticCurveTo(a, l + u, a, l + u - d),
      o === "center" && r === "left" && this.drawCaret(t, n, s, i),
      n.lineTo(a, l + f),
      n.quadraticCurveTo(a, l, a + f, l),
      n.closePath(),
      n.fill(),
      i.borderWidth > 0 && n.stroke();
  }
  _updateAnimationTarget(t) {
    const n = this.chart,
      s = this.$animations,
      i = s && s.x,
      r = s && s.y;
    if (i || r) {
      const o = Ps[t.position].call(this, this._active, this._eventPosition);
      if (!o) return;
      const a = (this._size = Pc(this, t)),
        l = Object.assign({}, o, this._size),
        c = Oc(n, t, l),
        u = Ec(t, l, c, n);
      (i._to !== u.x || r._to !== u.y) &&
        ((this.xAlign = c.xAlign),
        (this.yAlign = c.yAlign),
        (this.width = a.width),
        (this.height = a.height),
        (this.caretX = o.x),
        (this.caretY = o.y),
        this._resolveAnimations().update(this, u));
    }
  }
  _willRender() {
    return !!this.opacity;
  }
  draw(t) {
    const n = this.options.setContext(this.getContext());
    let s = this.opacity;
    if (!s) return;
    this._updateAnimationTarget(n);
    const i = { width: this.width, height: this.height },
      r = { x: this.x, y: this.y };
    s = Math.abs(s) < 0.001 ? 0 : s;
    const o = Wt(n.padding),
      a =
        this.title.length ||
        this.beforeBody.length ||
        this.body.length ||
        this.afterBody.length ||
        this.footer.length;
    n.enabled &&
      a &&
      (t.save(),
      (t.globalAlpha = s),
      this.drawBackground(r, t, i, n),
      Kf(t, n.textDirection),
      (r.y += o.top),
      this.drawTitle(r, t, n),
      this.drawBody(r, t, n),
      this.drawFooter(r, t, n),
      qf(t, n.textDirection),
      t.restore());
  }
  getActiveElements() {
    return this._active || [];
  }
  setActiveElements(t, n) {
    const s = this._active,
      i = t.map(({ datasetIndex: a, index: l }) => {
        const c = this.chart.getDatasetMeta(a);
        if (!c) throw new Error("Cannot find a dataset at index " + a);
        return { datasetIndex: a, element: c.data[l], index: l };
      }),
      r = !Pi(s, i),
      o = this._positionChanged(i, n);
    (r || o) &&
      ((this._active = i),
      (this._eventPosition = n),
      (this._ignoreReplayEvents = !0),
      this.update(!0));
  }
  handleEvent(t, n, s = !0) {
    if (n && this._ignoreReplayEvents) return !1;
    this._ignoreReplayEvents = !1;
    const i = this.options,
      r = this._active || [],
      o = this._getActiveElements(t, r, n, s),
      a = this._positionChanged(o, t),
      l = n || !Pi(o, r) || a;
    return (
      l &&
        ((this._active = o),
        (i.enabled || i.external) &&
          ((this._eventPosition = { x: t.x, y: t.y }), this.update(!0, n))),
      l
    );
  }
  _getActiveElements(t, n, s, i) {
    const r = this.options;
    if (t.type === "mouseout") return [];
    if (!i) return n;
    const o = this.chart.getElementsAtEventForMode(t, r.mode, r, s);
    return r.reverse && o.reverse(), o;
  }
  _positionChanged(t, n) {
    const { caretX: s, caretY: i, options: r } = this,
      o = Ps[r.position].call(this, t, n);
    return o !== !1 && (s !== o.x || i !== o.y);
  }
}
mo.positioners = Ps;
var fy = {
  id: "tooltip",
  _element: mo,
  positioners: Ps,
  afterInit(e, t, n) {
    n && (e.tooltip = new mo({ chart: e, options: n }));
  },
  beforeUpdate(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  reset(e, t, n) {
    e.tooltip && e.tooltip.initialize(n);
  },
  afterDraw(e) {
    const t = e.tooltip;
    if (t && t._willRender()) {
      const n = { tooltip: t };
      if (e.notifyPlugins("beforeTooltipDraw", n) === !1) return;
      t.draw(e.ctx), e.notifyPlugins("afterTooltipDraw", n);
    }
  },
  afterEvent(e, t) {
    if (e.tooltip) {
      const n = t.replay;
      e.tooltip.handleEvent(t.event, n, t.inChartArea) && (t.changed = !0);
    }
  },
  defaults: {
    enabled: !0,
    external: null,
    position: "average",
    backgroundColor: "rgba(0,0,0,0.8)",
    titleColor: "#fff",
    titleFont: { weight: "bold" },
    titleSpacing: 2,
    titleMarginBottom: 6,
    titleAlign: "left",
    bodyColor: "#fff",
    bodySpacing: 2,
    bodyFont: {},
    bodyAlign: "left",
    footerColor: "#fff",
    footerSpacing: 2,
    footerMarginTop: 6,
    footerFont: { weight: "bold" },
    footerAlign: "left",
    padding: 6,
    caretPadding: 2,
    caretSize: 5,
    cornerRadius: 6,
    boxHeight: (e, t) => t.bodyFont.size,
    boxWidth: (e, t) => t.bodyFont.size,
    multiKeyBackground: "#fff",
    displayColors: !0,
    boxPadding: 0,
    borderColor: "rgba(0,0,0,0)",
    borderWidth: 0,
    animation: { duration: 400, easing: "easeOutQuart" },
    animations: {
      numbers: {
        type: "number",
        properties: ["x", "y", "width", "height", "caretX", "caretY"],
      },
      opacity: { easing: "linear", duration: 200 },
    },
    callbacks: {
      beforeTitle: Te,
      title(e) {
        if (e.length > 0) {
          const t = e[0],
            n = t.chart.data.labels,
            s = n ? n.length : 0;
          if (this && this.options && this.options.mode === "dataset")
            return t.dataset.label || "";
          if (t.label) return t.label;
          if (s > 0 && t.dataIndex < s) return n[t.dataIndex];
        }
        return "";
      },
      afterTitle: Te,
      beforeBody: Te,
      beforeLabel: Te,
      label(e) {
        if (this && this.options && this.options.mode === "dataset")
          return e.label + ": " + e.formattedValue || e.formattedValue;
        let t = e.dataset.label || "";
        t && (t += ": ");
        const n = e.formattedValue;
        return ht(n) || (t += n), t;
      },
      labelColor(e) {
        const n = e.chart
          .getDatasetMeta(e.datasetIndex)
          .controller.getStyle(e.dataIndex);
        return {
          borderColor: n.borderColor,
          backgroundColor: n.backgroundColor,
          borderWidth: n.borderWidth,
          borderDash: n.borderDash,
          borderDashOffset: n.borderDashOffset,
          borderRadius: 0,
        };
      },
      labelTextColor() {
        return this.options.bodyColor;
      },
      labelPointStyle(e) {
        const n = e.chart
          .getDatasetMeta(e.datasetIndex)
          .controller.getStyle(e.dataIndex);
        return { pointStyle: n.pointStyle, rotation: n.rotation };
      },
      afterLabel: Te,
      afterBody: Te,
      beforeFooter: Te,
      footer: Te,
      afterFooter: Te,
    },
  },
  defaultRoutes: { bodyFont: "font", footerFont: "font", titleFont: "font" },
  descriptors: {
    _scriptable: (e) => e !== "filter" && e !== "itemSort" && e !== "external",
    _indexable: !1,
    callbacks: { _scriptable: !1, _indexable: !1 },
    animation: { _fallback: !1 },
    animations: { _fallback: "animation" },
  },
  additionalOptionScopes: ["interaction"],
};
const hy = (e, t, n, s) => (
  typeof t == "string"
    ? ((n = e.push(t) - 1), s.unshift({ index: n, label: t }))
    : isNaN(t) && (n = null),
  n
);
function dy(e, t, n, s) {
  const i = e.indexOf(t);
  if (i === -1) return hy(e, t, n, s);
  const r = e.lastIndexOf(t);
  return i !== r ? n : i;
}
const py = (e, t) => (e === null ? null : jt(Math.round(e), 0, t));
class bo extends An {
  constructor(t) {
    super(t),
      (this._startValue = void 0),
      (this._valueRange = 0),
      (this._addedLabels = []);
  }
  init(t) {
    const n = this._addedLabels;
    if (n.length) {
      const s = this.getLabels();
      for (const { index: i, label: r } of n) s[i] === r && s.splice(i, 1);
      this._addedLabels = [];
    }
    super.init(t);
  }
  parse(t, n) {
    if (ht(t)) return null;
    const s = this.getLabels();
    return (
      (n =
        isFinite(n) && s[n] === t ? n : dy(s, t, nt(n, t), this._addedLabels)),
      py(n, s.length - 1)
    );
  }
  determineDataLimits() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let { min: s, max: i } = this.getMinMax(!0);
    this.options.bounds === "ticks" &&
      (t || (s = 0), n || (i = this.getLabels().length - 1)),
      (this.min = s),
      (this.max = i);
  }
  buildTicks() {
    const t = this.min,
      n = this.max,
      s = this.options.offset,
      i = [];
    let r = this.getLabels();
    (r = t === 0 && n === r.length - 1 ? r : r.slice(t, n + 1)),
      (this._valueRange = Math.max(r.length - (s ? 0 : 1), 1)),
      (this._startValue = this.min - (s ? 0.5 : 0));
    for (let o = t; o <= n; o++) i.push({ value: o });
    return i;
  }
  getLabelForValue(t) {
    const n = this.getLabels();
    return t >= 0 && t < n.length ? n[t] : t;
  }
  configure() {
    super.configure(),
      this.isHorizontal() || (this._reversePixels = !this._reversePixels);
  }
  getPixelForValue(t) {
    return (
      typeof t != "number" && (t = this.parse(t)),
      t === null
        ? NaN
        : this.getPixelForDecimal((t - this._startValue) / this._valueRange)
    );
  }
  getPixelForTick(t) {
    const n = this.ticks;
    return t < 0 || t > n.length - 1 ? null : this.getPixelForValue(n[t].value);
  }
  getValueForPixel(t) {
    return Math.round(
      this._startValue + this.getDecimalForPixel(t) * this._valueRange
    );
  }
  getBasePixel() {
    return this.bottom;
  }
}
bo.id = "category";
bo.defaults = { ticks: { callback: bo.prototype.getLabelForValue } };
function gy(e, t) {
  const n = [],
    {
      bounds: i,
      step: r,
      min: o,
      max: a,
      precision: l,
      count: c,
      maxTicks: u,
      maxDigits: f,
      includeBounds: h,
    } = e,
    d = r || 1,
    p = u - 1,
    { min: g, max: x } = t,
    b = !ht(o),
    _ = !ht(a),
    v = !ht(c),
    C = (x - g) / (f + 1);
  let w = Ll((x - g) / p / d) * d,
    O,
    k,
    S,
    R;
  if (w < 1e-14 && !b && !_) return [{ value: g }, { value: x }];
  (R = Math.ceil(x / w) - Math.floor(g / w)),
    R > p && (w = Ll((R * w) / p / d) * d),
    ht(l) || ((O = Math.pow(10, l)), (w = Math.ceil(w * O) / O)),
    i === "ticks"
      ? ((k = Math.floor(g / w) * w), (S = Math.ceil(x / w) * w))
      : ((k = g), (S = x)),
    b && _ && r && Eb((a - o) / r, w / 1e3)
      ? ((R = Math.round(Math.min((a - o) / w, u))),
        (w = (a - o) / R),
        (k = o),
        (S = a))
      : v
      ? ((k = b ? o : k), (S = _ ? a : S), (R = c - 1), (w = (S - k) / R))
      : ((R = (S - k) / w),
        Ms(R, Math.round(R), w / 1e3)
          ? (R = Math.round(R))
          : (R = Math.ceil(R)));
  const L = Math.max(Il(w), Il(k));
  (O = Math.pow(10, ht(l) ? L : l)),
    (k = Math.round(k * O) / O),
    (S = Math.round(S * O) / O);
  let V = 0;
  for (
    b &&
    (h && k !== o
      ? (n.push({ value: o }),
        k < o && V++,
        Ms(Math.round((k + V * w) * O) / O, o, Rc(o, C, e)) && V++)
      : k < o && V++);
    V < R;
    ++V
  )
    n.push({ value: Math.round((k + V * w) * O) / O });
  return (
    _ && h && S !== a
      ? n.length && Ms(n[n.length - 1].value, a, Rc(a, C, e))
        ? (n[n.length - 1].value = a)
        : n.push({ value: a })
      : (!_ || S === a) && n.push({ value: S }),
    n
  );
}
function Rc(e, t, { horizontal: n, minRotation: s }) {
  const i = pe(s),
    r = (n ? Math.sin(i) : Math.cos(i)) || 0.001,
    o = 0.75 * t * ("" + e).length;
  return Math.min(t / r, o);
}
class Ii extends An {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._endValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, n) {
    return ht(t) ||
      ((typeof t == "number" || t instanceof Number) && !isFinite(+t))
      ? null
      : +t;
  }
  handleTickRangeOptions() {
    const { beginAtZero: t } = this.options,
      { minDefined: n, maxDefined: s } = this.getUserBounds();
    let { min: i, max: r } = this;
    const o = (l) => (i = n ? i : l),
      a = (l) => (r = s ? r : l);
    if (t) {
      const l = Pe(i),
        c = Pe(r);
      l < 0 && c < 0 ? a(0) : l > 0 && c > 0 && o(0);
    }
    if (i === r) {
      let l = 1;
      (r >= Number.MAX_SAFE_INTEGER || i <= Number.MIN_SAFE_INTEGER) &&
        (l = Math.abs(r * 0.05)),
        a(r + l),
        t || o(i - l);
    }
    (this.min = i), (this.max = r);
  }
  getTickLimit() {
    const t = this.options.ticks;
    let { maxTicksLimit: n, stepSize: s } = t,
      i;
    return (
      s
        ? ((i = Math.ceil(this.max / s) - Math.floor(this.min / s) + 1),
          i > 1e3 &&
            (console.warn(
              `scales.${this.id}.ticks.stepSize: ${s} would result generating up to ${i} ticks. Limiting to 1000.`
            ),
            (i = 1e3)))
        : ((i = this.computeTickLimit()), (n = n || 11)),
      n && (i = Math.min(n, i)),
      i
    );
  }
  computeTickLimit() {
    return Number.POSITIVE_INFINITY;
  }
  buildTicks() {
    const t = this.options,
      n = t.ticks;
    let s = this.getTickLimit();
    s = Math.max(2, s);
    const i = {
        maxTicks: s,
        bounds: t.bounds,
        min: t.min,
        max: t.max,
        precision: n.precision,
        step: n.stepSize,
        count: n.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: n.minRotation || 0,
        includeBounds: n.includeBounds !== !1,
      },
      r = this._range || this,
      o = gy(i, r);
    return (
      t.bounds === "ticks" && Mf(o, this, "value"),
      t.reverse
        ? (o.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      o
    );
  }
  configure() {
    const t = this.ticks;
    let n = this.min,
      s = this.max;
    if ((super.configure(), this.options.offset && t.length)) {
      const i = (s - n) / Math.max(t.length - 1, 1) / 2;
      (n -= i), (s += i);
    }
    (this._startValue = n), (this._endValue = s), (this._valueRange = s - n);
  }
  getLabelForValue(t) {
    return Ks(t, this.chart.options.locale, this.options.ticks.format);
  }
}
class gh extends Ii {
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    (this.min = zt(t) ? t : 0),
      (this.max = zt(n) ? n : 1),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    const t = this.isHorizontal(),
      n = t ? this.width : this.height,
      s = pe(this.options.ticks.minRotation),
      i = (t ? Math.sin(s) : Math.cos(s)) || 0.001,
      r = this._resolveTickFontOptions(0);
    return Math.ceil(n / Math.min(40, r.lineHeight / i));
  }
  getPixelForValue(t) {
    return t === null
      ? NaN
      : this.getPixelForDecimal((t - this._startValue) / this._valueRange);
  }
  getValueForPixel(t) {
    return this._startValue + this.getDecimalForPixel(t) * this._valueRange;
  }
}
gh.id = "linear";
gh.defaults = { ticks: { callback: ar.formatters.numeric } };
function Dc(e) {
  return e / Math.pow(10, Math.floor(se(e))) === 1;
}
function my(e, t) {
  const n = Math.floor(se(t.max)),
    s = Math.ceil(t.max / Math.pow(10, n)),
    i = [];
  let r = ne(e.min, Math.pow(10, Math.floor(se(t.min)))),
    o = Math.floor(se(r)),
    a = Math.floor(r / Math.pow(10, o)),
    l = o < 0 ? Math.pow(10, Math.abs(o)) : 1;
  do
    i.push({ value: r, major: Dc(r) }),
      ++a,
      a === 10 && ((a = 1), ++o, (l = o >= 0 ? 1 : l)),
      (r = Math.round(a * Math.pow(10, o) * l) / l);
  while (o < n || (o === n && a < s));
  const c = ne(e.max, r);
  return i.push({ value: c, major: Dc(r) }), i;
}
class mh extends An {
  constructor(t) {
    super(t),
      (this.start = void 0),
      (this.end = void 0),
      (this._startValue = void 0),
      (this._valueRange = 0);
  }
  parse(t, n) {
    const s = Ii.prototype.parse.apply(this, [t, n]);
    if (s === 0) {
      this._zero = !0;
      return;
    }
    return zt(s) && s > 0 ? s : null;
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!0);
    (this.min = zt(t) ? Math.max(0, t) : null),
      (this.max = zt(n) ? Math.max(0, n) : null),
      this.options.beginAtZero && (this._zero = !0),
      this.handleTickRangeOptions();
  }
  handleTickRangeOptions() {
    const { minDefined: t, maxDefined: n } = this.getUserBounds();
    let s = this.min,
      i = this.max;
    const r = (l) => (s = t ? s : l),
      o = (l) => (i = n ? i : l),
      a = (l, c) => Math.pow(10, Math.floor(se(l)) + c);
    s === i && (s <= 0 ? (r(1), o(10)) : (r(a(s, -1)), o(a(i, 1)))),
      s <= 0 && r(a(i, -1)),
      i <= 0 && o(a(s, 1)),
      this._zero &&
        this.min !== this._suggestedMin &&
        s === a(this.min, 0) &&
        r(a(s, -1)),
      (this.min = s),
      (this.max = i);
  }
  buildTicks() {
    const t = this.options,
      n = { min: this._userMin, max: this._userMax },
      s = my(n, this);
    return (
      t.bounds === "ticks" && Mf(s, this, "value"),
      t.reverse
        ? (s.reverse(), (this.start = this.max), (this.end = this.min))
        : ((this.start = this.min), (this.end = this.max)),
      s
    );
  }
  getLabelForValue(t) {
    return t === void 0
      ? "0"
      : Ks(t, this.chart.options.locale, this.options.ticks.format);
  }
  configure() {
    const t = this.min;
    super.configure(),
      (this._startValue = se(t)),
      (this._valueRange = se(this.max) - se(t));
  }
  getPixelForValue(t) {
    return (
      (t === void 0 || t === 0) && (t = this.min),
      t === null || isNaN(t)
        ? NaN
        : this.getPixelForDecimal(
            t === this.min ? 0 : (se(t) - this._startValue) / this._valueRange
          )
    );
  }
  getValueForPixel(t) {
    const n = this.getDecimalForPixel(t);
    return Math.pow(10, this._startValue + n * this._valueRange);
  }
}
mh.id = "logarithmic";
mh.defaults = {
  ticks: { callback: ar.formatters.logarithmic, major: { enabled: !0 } },
};
function xo(e) {
  const t = e.ticks;
  if (t.display && e.display) {
    const n = Wt(t.backdropPadding);
    return nt(t.font && t.font.size, at.font.size) + n.height;
  }
  return 0;
}
function by(e, t, n) {
  return (
    (n = Ct(n) ? n : [n]), { w: ax(e, t.string, n), h: n.length * t.lineHeight }
  );
}
function Lc(e, t, n, s, i) {
  return e === s || e === i
    ? { start: t - n / 2, end: t + n / 2 }
    : e < s || e > i
    ? { start: t - n, end: t }
    : { start: t, end: t + n };
}
function xy(e) {
  const t = {
      l: e.left + e._padding.left,
      r: e.right - e._padding.right,
      t: e.top + e._padding.top,
      b: e.bottom - e._padding.bottom,
    },
    n = Object.assign({}, t),
    s = [],
    i = [],
    r = e._pointLabels.length,
    o = e.options.pointLabels,
    a = o.centerPointLabels ? Pt / r : 0;
  for (let l = 0; l < r; l++) {
    const c = o.setContext(e.getPointLabelContext(l));
    i[l] = c.padding;
    const u = e.getPointPosition(l, e.drawingArea + i[l], a),
      f = Bt(c.font),
      h = by(e.ctx, f, e._pointLabels[l]);
    s[l] = h;
    const d = ue(e.getIndexAngle(l) + a),
      p = Math.round(ia(d)),
      g = Lc(p, u.x, h.w, 0, 180),
      x = Lc(p, u.y, h.h, 90, 270);
    _y(n, t, d, g, x);
  }
  e.setCenterPoint(t.l - n.l, n.r - t.r, t.t - n.t, n.b - t.b),
    (e._pointLabelItems = yy(e, s, i));
}
function _y(e, t, n, s, i) {
  const r = Math.abs(Math.sin(n)),
    o = Math.abs(Math.cos(n));
  let a = 0,
    l = 0;
  s.start < t.l
    ? ((a = (t.l - s.start) / r), (e.l = Math.min(e.l, t.l - a)))
    : s.end > t.r && ((a = (s.end - t.r) / r), (e.r = Math.max(e.r, t.r + a))),
    i.start < t.t
      ? ((l = (t.t - i.start) / o), (e.t = Math.min(e.t, t.t - l)))
      : i.end > t.b &&
        ((l = (i.end - t.b) / o), (e.b = Math.max(e.b, t.b + l)));
}
function yy(e, t, n) {
  const s = [],
    i = e._pointLabels.length,
    r = e.options,
    o = xo(r) / 2,
    a = e.drawingArea,
    l = r.pointLabels.centerPointLabels ? Pt / i : 0;
  for (let c = 0; c < i; c++) {
    const u = e.getPointPosition(c, a + o + n[c], l),
      f = Math.round(ia(ue(u.angle + kt))),
      h = t[c],
      d = wy(u.y, h.h, f),
      p = vy(f),
      g = Cy(u.x, h.w, p);
    s.push({
      x: u.x,
      y: d,
      textAlign: p,
      left: g,
      top: d,
      right: g + h.w,
      bottom: d + h.h,
    });
  }
  return s;
}
function vy(e) {
  return e === 0 || e === 180 ? "center" : e < 180 ? "left" : "right";
}
function Cy(e, t, n) {
  return n === "right" ? (e -= t) : n === "center" && (e -= t / 2), e;
}
function wy(e, t, n) {
  return (
    n === 90 || n === 270 ? (e -= t / 2) : (n > 270 || n < 90) && (e -= t), e
  );
}
function My(e, t) {
  const {
    ctx: n,
    options: { pointLabels: s },
  } = e;
  for (let i = t - 1; i >= 0; i--) {
    const r = s.setContext(e.getPointLabelContext(i)),
      o = Bt(r.font),
      {
        x: a,
        y: l,
        textAlign: c,
        left: u,
        top: f,
        right: h,
        bottom: d,
      } = e._pointLabelItems[i],
      { backdropColor: p } = r;
    if (!ht(p)) {
      const g = kn(r.borderRadius),
        x = Wt(r.backdropPadding);
      n.fillStyle = p;
      const b = u - x.left,
        _ = f - x.top,
        v = h - u + x.width,
        C = d - f + x.height;
      Object.values(g).some((w) => w !== 0)
        ? (n.beginPath(),
          Hs(n, { x: b, y: _, w: v, h: C, radius: g }),
          n.fill())
        : n.fillRect(b, _, v, C);
    }
    Qn(n, e._pointLabels[i], a, l + o.lineHeight / 2, o, {
      color: r.color,
      textAlign: c,
      textBaseline: "middle",
    });
  }
}
function bh(e, t, n, s) {
  const { ctx: i } = e;
  if (n) i.arc(e.xCenter, e.yCenter, t, 0, mt);
  else {
    let r = e.getPointPosition(0, t);
    i.moveTo(r.x, r.y);
    for (let o = 1; o < s; o++)
      (r = e.getPointPosition(o, t)), i.lineTo(r.x, r.y);
  }
}
function Sy(e, t, n, s) {
  const i = e.ctx,
    r = t.circular,
    { color: o, lineWidth: a } = t;
  (!r && !s) ||
    !o ||
    !a ||
    n < 0 ||
    (i.save(),
    (i.strokeStyle = o),
    (i.lineWidth = a),
    i.setLineDash(t.borderDash),
    (i.lineDashOffset = t.borderDashOffset),
    i.beginPath(),
    bh(e, n, r, s),
    i.closePath(),
    i.stroke(),
    i.restore());
}
function ky(e, t, n) {
  return cn(e, { label: n, index: t, type: "pointLabel" });
}
class ur extends Ii {
  constructor(t) {
    super(t),
      (this.xCenter = void 0),
      (this.yCenter = void 0),
      (this.drawingArea = void 0),
      (this._pointLabels = []),
      (this._pointLabelItems = []);
  }
  setDimensions() {
    const t = (this._padding = Wt(xo(this.options) / 2)),
      n = (this.width = this.maxWidth - t.width),
      s = (this.height = this.maxHeight - t.height);
    (this.xCenter = Math.floor(this.left + n / 2 + t.left)),
      (this.yCenter = Math.floor(this.top + s / 2 + t.top)),
      (this.drawingArea = Math.floor(Math.min(n, s) / 2));
  }
  determineDataLimits() {
    const { min: t, max: n } = this.getMinMax(!1);
    (this.min = zt(t) && !isNaN(t) ? t : 0),
      (this.max = zt(n) && !isNaN(n) ? n : 0),
      this.handleTickRangeOptions();
  }
  computeTickLimit() {
    return Math.ceil(this.drawingArea / xo(this.options));
  }
  generateTickLabels(t) {
    Ii.prototype.generateTickLabels.call(this, t),
      (this._pointLabels = this.getLabels()
        .map((n, s) => {
          const i = xt(this.options.pointLabels.callback, [n, s], this);
          return i || i === 0 ? i : "";
        })
        .filter((n, s) => this.chart.getDataVisibility(s)));
  }
  fit() {
    const t = this.options;
    t.display && t.pointLabels.display
      ? xy(this)
      : this.setCenterPoint(0, 0, 0, 0);
  }
  setCenterPoint(t, n, s, i) {
    (this.xCenter += Math.floor((t - n) / 2)),
      (this.yCenter += Math.floor((s - i) / 2)),
      (this.drawingArea -= Math.min(
        this.drawingArea / 2,
        Math.max(t, n, s, i)
      ));
  }
  getIndexAngle(t) {
    const n = mt / (this._pointLabels.length || 1),
      s = this.options.startAngle || 0;
    return ue(t * n + pe(s));
  }
  getDistanceFromCenterForValue(t) {
    if (ht(t)) return NaN;
    const n = this.drawingArea / (this.max - this.min);
    return this.options.reverse ? (this.max - t) * n : (t - this.min) * n;
  }
  getValueForDistanceFromCenter(t) {
    if (ht(t)) return NaN;
    const n = t / (this.drawingArea / (this.max - this.min));
    return this.options.reverse ? this.max - n : this.min + n;
  }
  getPointLabelContext(t) {
    const n = this._pointLabels || [];
    if (t >= 0 && t < n.length) {
      const s = n[t];
      return ky(this.getContext(), t, s);
    }
  }
  getPointPosition(t, n, s = 0) {
    const i = this.getIndexAngle(t) - kt + s;
    return {
      x: Math.cos(i) * n + this.xCenter,
      y: Math.sin(i) * n + this.yCenter,
      angle: i,
    };
  }
  getPointPositionForValue(t, n) {
    return this.getPointPosition(t, this.getDistanceFromCenterForValue(n));
  }
  getBasePosition(t) {
    return this.getPointPositionForValue(t || 0, this.getBaseValue());
  }
  getPointLabelPosition(t) {
    const { left: n, top: s, right: i, bottom: r } = this._pointLabelItems[t];
    return { left: n, top: s, right: i, bottom: r };
  }
  drawBackground() {
    const {
      backgroundColor: t,
      grid: { circular: n },
    } = this.options;
    if (t) {
      const s = this.ctx;
      s.save(),
        s.beginPath(),
        bh(
          this,
          this.getDistanceFromCenterForValue(this._endValue),
          n,
          this._pointLabels.length
        ),
        s.closePath(),
        (s.fillStyle = t),
        s.fill(),
        s.restore();
    }
  }
  drawGrid() {
    const t = this.ctx,
      n = this.options,
      { angleLines: s, grid: i } = n,
      r = this._pointLabels.length;
    let o, a, l;
    if (
      (n.pointLabels.display && My(this, r),
      i.display &&
        this.ticks.forEach((c, u) => {
          if (u !== 0) {
            a = this.getDistanceFromCenterForValue(c.value);
            const f = i.setContext(this.getContext(u - 1));
            Sy(this, f, a, r);
          }
        }),
      s.display)
    ) {
      for (t.save(), o = r - 1; o >= 0; o--) {
        const c = s.setContext(this.getPointLabelContext(o)),
          { color: u, lineWidth: f } = c;
        !f ||
          !u ||
          ((t.lineWidth = f),
          (t.strokeStyle = u),
          t.setLineDash(c.borderDash),
          (t.lineDashOffset = c.borderDashOffset),
          (a = this.getDistanceFromCenterForValue(
            n.ticks.reverse ? this.min : this.max
          )),
          (l = this.getPointPosition(o, a)),
          t.beginPath(),
          t.moveTo(this.xCenter, this.yCenter),
          t.lineTo(l.x, l.y),
          t.stroke());
      }
      t.restore();
    }
  }
  drawBorder() {}
  drawLabels() {
    const t = this.ctx,
      n = this.options,
      s = n.ticks;
    if (!s.display) return;
    const i = this.getIndexAngle(0);
    let r, o;
    t.save(),
      t.translate(this.xCenter, this.yCenter),
      t.rotate(i),
      (t.textAlign = "center"),
      (t.textBaseline = "middle"),
      this.ticks.forEach((a, l) => {
        if (l === 0 && !n.reverse) return;
        const c = s.setContext(this.getContext(l)),
          u = Bt(c.font);
        if (
          ((r = this.getDistanceFromCenterForValue(this.ticks[l].value)),
          c.showLabelBackdrop)
        ) {
          (t.font = u.string),
            (o = t.measureText(a.label).width),
            (t.fillStyle = c.backdropColor);
          const f = Wt(c.backdropPadding);
          t.fillRect(
            -o / 2 - f.left,
            -r - u.size / 2 - f.top,
            o + f.width,
            u.size + f.height
          );
        }
        Qn(t, a.label, 0, -r, u, { color: c.color });
      }),
      t.restore();
  }
  drawTitle() {}
}
ur.id = "radialLinear";
ur.defaults = {
  display: !0,
  animate: !0,
  position: "chartArea",
  angleLines: {
    display: !0,
    lineWidth: 1,
    borderDash: [],
    borderDashOffset: 0,
  },
  grid: { circular: !1 },
  startAngle: 0,
  ticks: { showLabelBackdrop: !0, callback: ar.formatters.numeric },
  pointLabels: {
    backdropColor: void 0,
    backdropPadding: 2,
    display: !0,
    font: { size: 10 },
    callback(e) {
      return e;
    },
    padding: 5,
    centerPointLabels: !1,
  },
};
ur.defaultRoutes = {
  "angleLines.color": "borderColor",
  "pointLabels.color": "color",
  "ticks.color": "color",
};
ur.descriptors = { angleLines: { _fallback: "grid" } };
const fr = {
    millisecond: { common: !0, size: 1, steps: 1e3 },
    second: { common: !0, size: 1e3, steps: 60 },
    minute: { common: !0, size: 6e4, steps: 60 },
    hour: { common: !0, size: 36e5, steps: 24 },
    day: { common: !0, size: 864e5, steps: 30 },
    week: { common: !1, size: 6048e5, steps: 4 },
    month: { common: !0, size: 2628e6, steps: 12 },
    quarter: { common: !1, size: 7884e6, steps: 4 },
    year: { common: !0, size: 3154e7 },
  },
  Kt = Object.keys(fr);
function Py(e, t) {
  return e - t;
}
function Ic(e, t) {
  if (ht(t)) return null;
  const n = e._adapter,
    { parser: s, round: i, isoWeekday: r } = e._parseOpts;
  let o = t;
  return (
    typeof s == "function" && (o = s(o)),
    zt(o) || (o = typeof s == "string" ? n.parse(o, s) : n.parse(o)),
    o === null
      ? null
      : (i &&
          (o =
            i === "week" && (Xn(r) || r === !0)
              ? n.startOf(o, "isoWeek", r)
              : n.startOf(o, i)),
        +o)
  );
}
function Fc(e, t, n, s) {
  const i = Kt.length;
  for (let r = Kt.indexOf(e); r < i - 1; ++r) {
    const o = fr[Kt[r]],
      a = o.steps ? o.steps : Number.MAX_SAFE_INTEGER;
    if (o.common && Math.ceil((n - t) / (a * o.size)) <= s) return Kt[r];
  }
  return Kt[i - 1];
}
function Oy(e, t, n, s, i) {
  for (let r = Kt.length - 1; r >= Kt.indexOf(n); r--) {
    const o = Kt[r];
    if (fr[o].common && e._adapter.diff(i, s, o) >= t - 1) return o;
  }
  return Kt[n ? Kt.indexOf(n) : 0];
}
function Ey(e) {
  for (let t = Kt.indexOf(e) + 1, n = Kt.length; t < n; ++t)
    if (fr[Kt[t]].common) return Kt[t];
}
function Bc(e, t, n) {
  if (!n) e[t] = !0;
  else if (n.length) {
    const { lo: s, hi: i } = ra(n, t),
      r = n[s] >= t ? n[s] : n[i];
    e[r] = !0;
  }
}
function Ay(e, t, n, s) {
  const i = e._adapter,
    r = +i.startOf(t[0].value, s),
    o = t[t.length - 1].value;
  let a, l;
  for (a = r; a <= o; a = +i.add(a, 1, s))
    (l = n[a]), l >= 0 && (t[l].major = !0);
  return t;
}
function zc(e, t, n) {
  const s = [],
    i = {},
    r = t.length;
  let o, a;
  for (o = 0; o < r; ++o)
    (a = t[o]), (i[a] = o), s.push({ value: a, major: !1 });
  return r === 0 || !n ? s : Ay(e, s, i, n);
}
class hr extends An {
  constructor(t) {
    super(t),
      (this._cache = { data: [], labels: [], all: [] }),
      (this._unit = "day"),
      (this._majorUnit = void 0),
      (this._offsets = {}),
      (this._normalized = !1),
      (this._parseOpts = void 0);
  }
  init(t, n) {
    const s = t.time || (t.time = {}),
      i = (this._adapter = new U_._date(t.adapters.date));
    i.init(n),
      ws(s.displayFormats, i.formats()),
      (this._parseOpts = {
        parser: s.parser,
        round: s.round,
        isoWeekday: s.isoWeekday,
      }),
      super.init(t),
      (this._normalized = n.normalized);
  }
  parse(t, n) {
    return t === void 0 ? null : Ic(this, t);
  }
  beforeLayout() {
    super.beforeLayout(), (this._cache = { data: [], labels: [], all: [] });
  }
  determineDataLimits() {
    const t = this.options,
      n = this._adapter,
      s = t.time.unit || "day";
    let { min: i, max: r, minDefined: o, maxDefined: a } = this.getUserBounds();
    function l(c) {
      !o && !isNaN(c.min) && (i = Math.min(i, c.min)),
        !a && !isNaN(c.max) && (r = Math.max(r, c.max));
    }
    (!o || !a) &&
      (l(this._getLabelBounds()),
      (t.bounds !== "ticks" || t.ticks.source !== "labels") &&
        l(this.getMinMax(!1))),
      (i = zt(i) && !isNaN(i) ? i : +n.startOf(Date.now(), s)),
      (r = zt(r) && !isNaN(r) ? r : +n.endOf(Date.now(), s) + 1),
      (this.min = Math.min(i, r - 1)),
      (this.max = Math.max(i + 1, r));
  }
  _getLabelBounds() {
    const t = this.getLabelTimestamps();
    let n = Number.POSITIVE_INFINITY,
      s = Number.NEGATIVE_INFINITY;
    return t.length && ((n = t[0]), (s = t[t.length - 1])), { min: n, max: s };
  }
  buildTicks() {
    const t = this.options,
      n = t.time,
      s = t.ticks,
      i = s.source === "labels" ? this.getLabelTimestamps() : this._generate();
    t.bounds === "ticks" &&
      i.length &&
      ((this.min = this._userMin || i[0]),
      (this.max = this._userMax || i[i.length - 1]));
    const r = this.min,
      o = this.max,
      a = Db(i, r, o);
    return (
      (this._unit =
        n.unit ||
        (s.autoSkip
          ? Fc(n.minUnit, this.min, this.max, this._getLabelCapacity(r))
          : Oy(this, a.length, n.minUnit, this.min, this.max))),
      (this._majorUnit =
        !s.major.enabled || this._unit === "year" ? void 0 : Ey(this._unit)),
      this.initOffsets(i),
      t.reverse && a.reverse(),
      zc(this, a, this._majorUnit)
    );
  }
  afterAutoSkip() {
    this.options.offsetAfterAutoskip &&
      this.initOffsets(this.ticks.map((t) => +t.value));
  }
  initOffsets(t) {
    let n = 0,
      s = 0,
      i,
      r;
    this.options.offset &&
      t.length &&
      ((i = this.getDecimalForValue(t[0])),
      t.length === 1
        ? (n = 1 - i)
        : (n = (this.getDecimalForValue(t[1]) - i) / 2),
      (r = this.getDecimalForValue(t[t.length - 1])),
      t.length === 1
        ? (s = r)
        : (s = (r - this.getDecimalForValue(t[t.length - 2])) / 2));
    const o = t.length < 3 ? 0.5 : 0.25;
    (n = jt(n, 0, o)),
      (s = jt(s, 0, o)),
      (this._offsets = { start: n, end: s, factor: 1 / (n + 1 + s) });
  }
  _generate() {
    const t = this._adapter,
      n = this.min,
      s = this.max,
      i = this.options,
      r = i.time,
      o = r.unit || Fc(r.minUnit, n, s, this._getLabelCapacity(n)),
      a = nt(r.stepSize, 1),
      l = o === "week" ? r.isoWeekday : !1,
      c = Xn(l) || l === !0,
      u = {};
    let f = n,
      h,
      d;
    if (
      (c && (f = +t.startOf(f, "isoWeek", l)),
      (f = +t.startOf(f, c ? "day" : o)),
      t.diff(s, n, o) > 1e5 * a)
    )
      throw new Error(
        n + " and " + s + " are too far apart with stepSize of " + a + " " + o
      );
    const p = i.ticks.source === "data" && this.getDataTimestamps();
    for (h = f, d = 0; h < s; h = +t.add(h, a, o), d++) Bc(u, h, p);
    return (
      (h === s || i.bounds === "ticks" || d === 1) && Bc(u, h, p),
      Object.keys(u)
        .sort((g, x) => g - x)
        .map((g) => +g)
    );
  }
  getLabelForValue(t) {
    const n = this._adapter,
      s = this.options.time;
    return s.tooltipFormat
      ? n.format(t, s.tooltipFormat)
      : n.format(t, s.displayFormats.datetime);
  }
  _tickFormatFunction(t, n, s, i) {
    const r = this.options,
      o = r.time.displayFormats,
      a = this._unit,
      l = this._majorUnit,
      c = a && o[a],
      u = l && o[l],
      f = s[n],
      h = l && u && f && f.major,
      d = this._adapter.format(t, i || (h ? u : c)),
      p = r.ticks.callback;
    return p ? xt(p, [d, n, s], this) : d;
  }
  generateTickLabels(t) {
    let n, s, i;
    for (n = 0, s = t.length; n < s; ++n)
      (i = t[n]), (i.label = this._tickFormatFunction(i.value, n, t));
  }
  getDecimalForValue(t) {
    return t === null ? NaN : (t - this.min) / (this.max - this.min);
  }
  getPixelForValue(t) {
    const n = this._offsets,
      s = this.getDecimalForValue(t);
    return this.getPixelForDecimal((n.start + s) * n.factor);
  }
  getValueForPixel(t) {
    const n = this._offsets,
      s = this.getDecimalForPixel(t) / n.factor - n.end;
    return this.min + s * (this.max - this.min);
  }
  _getLabelSize(t) {
    const n = this.options.ticks,
      s = this.ctx.measureText(t).width,
      i = pe(this.isHorizontal() ? n.maxRotation : n.minRotation),
      r = Math.cos(i),
      o = Math.sin(i),
      a = this._resolveTickFontOptions(0).size;
    return { w: s * r + a * o, h: s * o + a * r };
  }
  _getLabelCapacity(t) {
    const n = this.options.time,
      s = n.displayFormats,
      i = s[n.unit] || s.millisecond,
      r = this._tickFormatFunction(t, 0, zc(this, [t], this._majorUnit), i),
      o = this._getLabelSize(r),
      a =
        Math.floor(this.isHorizontal() ? this.width / o.w : this.height / o.h) -
        1;
    return a > 0 ? a : 1;
  }
  getDataTimestamps() {
    let t = this._cache.data || [],
      n,
      s;
    if (t.length) return t;
    const i = this.getMatchingVisibleMetas();
    if (this._normalized && i.length)
      return (this._cache.data = i[0].controller.getAllParsedValues(this));
    for (n = 0, s = i.length; n < s; ++n)
      t = t.concat(i[n].controller.getAllParsedValues(this));
    return (this._cache.data = this.normalize(t));
  }
  getLabelTimestamps() {
    const t = this._cache.labels || [];
    let n, s;
    if (t.length) return t;
    const i = this.getLabels();
    for (n = 0, s = i.length; n < s; ++n) t.push(Ic(this, i[n]));
    return (this._cache.labels = this._normalized ? t : this.normalize(t));
  }
  normalize(t) {
    return Pf(t.sort(Py));
  }
}
hr.id = "time";
hr.defaults = {
  bounds: "data",
  adapters: {},
  time: {
    parser: !1,
    unit: !1,
    round: !1,
    isoWeekday: !1,
    minUnit: "millisecond",
    displayFormats: {},
  },
  ticks: { source: "auto", major: { enabled: !1 } },
};
function di(e, t, n) {
  let s = 0,
    i = e.length - 1,
    r,
    o,
    a,
    l;
  n
    ? (t >= e[s].pos && t <= e[i].pos && ({ lo: s, hi: i } = wn(e, "pos", t)),
      ({ pos: r, time: a } = e[s]),
      ({ pos: o, time: l } = e[i]))
    : (t >= e[s].time &&
        t <= e[i].time &&
        ({ lo: s, hi: i } = wn(e, "time", t)),
      ({ time: r, pos: a } = e[s]),
      ({ time: o, pos: l } = e[i]));
  const c = o - r;
  return c ? a + ((l - a) * (t - r)) / c : a;
}
class xh extends hr {
  constructor(t) {
    super(t),
      (this._table = []),
      (this._minPos = void 0),
      (this._tableRange = void 0);
  }
  initOffsets() {
    const t = this._getTimestampsForTable(),
      n = (this._table = this.buildLookupTable(t));
    (this._minPos = di(n, this.min)),
      (this._tableRange = di(n, this.max) - this._minPos),
      super.initOffsets(t);
  }
  buildLookupTable(t) {
    const { min: n, max: s } = this,
      i = [],
      r = [];
    let o, a, l, c, u;
    for (o = 0, a = t.length; o < a; ++o)
      (c = t[o]), c >= n && c <= s && i.push(c);
    if (i.length < 2)
      return [
        { time: n, pos: 0 },
        { time: s, pos: 1 },
      ];
    for (o = 0, a = i.length; o < a; ++o)
      (u = i[o + 1]),
        (l = i[o - 1]),
        (c = i[o]),
        Math.round((u + l) / 2) !== c && r.push({ time: c, pos: o / (a - 1) });
    return r;
  }
  _getTimestampsForTable() {
    let t = this._cache.all || [];
    if (t.length) return t;
    const n = this.getDataTimestamps(),
      s = this.getLabelTimestamps();
    return (
      n.length && s.length
        ? (t = this.normalize(n.concat(s)))
        : (t = n.length ? n : s),
      (t = this._cache.all = t),
      t
    );
  }
  getDecimalForValue(t) {
    return (di(this._table, t) - this._minPos) / this._tableRange;
  }
  getValueForPixel(t) {
    const n = this._offsets,
      s = this.getDecimalForPixel(t) / n.factor - n.end;
    return di(this._table, s * this._tableRange + this._minPos, !0);
  }
}
xh.id = "timeseries";
xh.defaults = hr.defaults;
const _h = {
    data: { type: Object, required: !0 },
    options: { type: Object, default: () => ({}) },
    plugins: { type: Array, default: () => [] },
    datasetIdKey: { type: String, default: "label" },
    updateMode: { type: String, default: void 0 },
  },
  Ty = { type: { type: String, required: !0 }, ..._h },
  Ry =
    Bu[0] === "2"
      ? (e, t) => Object.assign(e, { attrs: t })
      : (e, t) => Object.assign(e, t);
function Fn(e) {
  return Vi(e) ? rt(e) : e;
}
function Dy(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e;
  return Vi(t) ? new Proxy(e, {}) : e;
}
function Ly(e, t) {
  const n = e.options;
  n && t && Object.assign(n, t);
}
function yh(e, t) {
  e.labels = t;
}
function vh(e, t, n) {
  const s = [];
  e.datasets = t.map((i) => {
    const r = e.datasets.find((o) => o[n] === i[n]);
    return !r || !i.data || s.includes(r)
      ? { ...i }
      : (s.push(r), Object.assign(r, i), r);
  });
}
function Iy(e, t) {
  const n = { labels: [], datasets: [] };
  return yh(n, e.labels), vh(n, e.datasets, t), n;
}
const Fy = Yi({
  props: Ty,
  setup(e, t) {
    let { expose: n } = t;
    const s = oe(null),
      i = To(null);
    n({ chart: i });
    const r = () => {
        if (!s.value) return;
        const { type: l, data: c, options: u, plugins: f, datasetIdKey: h } = e,
          d = Iy(c, h),
          p = Dy(d, c);
        i.value = new Xs(s.value, {
          type: l,
          data: p,
          options: { ...u },
          plugins: f,
        });
      },
      o = () => {
        const l = rt(i.value);
        l && (l.destroy(), (i.value = null));
      },
      a = (l) => {
        l.update(e.updateMode);
      };
    return (
      Xi(r),
      Bo(o),
      en(
        [() => e.options, () => e.data],
        (l, c) => {
          let [u, f] = l,
            [h, d] = c;
          const p = rt(i.value);
          if (!p) return;
          let g = !1;
          if (u) {
            const x = Fn(u),
              b = Fn(h);
            x && x !== b && (Ly(p, x), (g = !0));
          }
          if (f) {
            const x = Fn(f.labels),
              b = Fn(d.labels),
              _ = Fn(f.datasets),
              v = Fn(d.datasets);
            x !== b && (yh(p.config.data, x), (g = !0)),
              _ && _ !== v && (vh(p.config.data, _, e.datasetIdKey), (g = !0));
          }
          g && a(p);
        },
        { deep: !0 }
      ),
      () => Vs("canvas", { ref: s })
    );
  },
});
function By(e, t) {
  return (
    Xs.register(t),
    Yi({
      props: _h,
      setup(n, s) {
        let { expose: i } = s;
        const r = To(null),
          o = (a) => {
            r.value = a == null ? void 0 : a.chart;
          };
        return i({ chart: r }), () => Vs(Fy, Ry({ ref: o }, { type: e, ...n }));
      },
    })
  );
}
const zy = By("doughnut", ss),
  Ny = {
    __name: "chart",
    setup(e) {
      Xs.register(lr, fy, sy);
      const t = ea(),
        n = Us(),
        s = na(),
        i = Math.floor((t.value * 100) / n.value),
        r = Math.floor((s.value * 100) / n.value),
        o = Math.ceil(100 - (i + r)),
        a = {
          labels: [
            "درصد پاسخ های صحیح",
            "درصد جواب غلط",
            "درصد سوالات بی پاسخ",
          ],
          datasets: [
            {
              backgroundColor: ["#41B883", "#DD1B16", "#eeeeee"],
              data: [i, o, r],
            },
          ],
        },
        l = { responsive: !0, plugins: { legend: { display: !1 } } };
      return (c, u) => (
        Dt(), Un(Mt(zy), { id: "my-chart-id", options: l, data: a })
      );
    },
  };
const Hy = (e) => (Io("data-v-42c09da0"), (e = e()), Fo(), e),
  jy = { class: "grid justify-center" },
  Vy = { class: "text-center py-24 grid-cols-6" },
  Wy = Hy(() => it("p", { class: "text-xl" }, "نتیجه نهایی ...", -1)),
  $y = {
    __name: "Result",
    setup(e) {
      nf();
      const t = rr(),
        n = ea(),
        s = na(),
        i = () => {
          (t.value = 0), (n.value = 0), (s.value = 0);
        };
      return (r, o) => {
        const a = $d("router-link");
        return (
          Dt(),
          Yt("div", jy, [
            it("div", Vy, [
              Wy,
              St(Ny, { class: "my-5" }),
              St(
                a,
                { to: "/" },
                {
                  default: On(() => [
                    St(xb, { onClick: o[0] || (o[0] = (l) => i()) }),
                  ]),
                  _: 1,
                }
              ),
            ]),
          ])
        );
      };
    },
  },
  Uy = ln($y, [["__scopeId", "data-v-42c09da0"]]);
const Yy = {
    __name: "quiz",
    setup(e) {
      const t = rr(),
        n = Us();
      return (s, i) => (
        Dt(),
        Yt("div", null, [
          St(pb),
          it("div", null, [
            St(
              Ws,
              { name: "switch", mode: "in-out" },
              {
                default: On(() => [
                  Mt(t).value < Mt(n).value
                    ? (Dt(), Un(ib, { key: 0 }))
                    : (Dt(), Un(Uy, { key: 1 })),
                ]),
                _: 1,
              }
            ),
          ]),
        ])
      );
    },
  },
  Ky = ln(Yy, [["__scopeId", "data-v-eec05fe2"]]),
  qy = { class: "flex justify-center items-center h-screen w-full" },
  Xy = { class: "text-2xl font-bold mb-4" },
  Qy = { class: "flex flex-col relative mb-6" },
  Gy = it(
    "label",
    { for: "number", class: "block text-gray-700 font-bold" },
    "تعداد سوالات",
    -1
  ),
  Zy = ["max"],
  Jy = { class: "absolute top-full right-0" },
  tv = { class: "text-red-700 text-sm" },
  ev = { class: "flex justify-center" },
  nv = {
    __name: "Costomize",
    setup(e) {
      const n = $o().params.id,
        s = Fs[n - 1].name,
        i = Fs[n - 1].questions.length,
        r = oe(0);
      return (
        en(r, (o) => {
          Us().value = o;
        }),
        (o, a) => (
          Dt(),
          Yt("div", qy, [
            it("div", null, [
              it("h1", Xy, "مشخصات تست " + Ge(Mt(s)), 1),
              it(
                "form",
                {
                  class: "w-full max-w-lg",
                  onSubmit: a[2] || (a[2] = Qp(() => {}, ["prevent"])),
                },
                [
                  it("div", Qy, [
                    Gy,
                    $r(
                      it(
                        "input",
                        {
                          id: "number",
                          type: "number",
                          class:
                            "form-input w-full sm:w-60 border-2 border-gray-400 p-2 rounded-md",
                          min: "1",
                          max: Mt(i),
                          "onUpdate:modelValue":
                            a[0] || (a[0] = (l) => (r.value = l)),
                        },
                        null,
                        8,
                        Zy
                      ),
                      [[Nu, r.value]]
                    ),
                    it("div", Jy, [
                      $r(it("span", tv, "حد اکثر تعداد سوالات", 512), [
                        [Gp, r.value === Mt(i)],
                      ]),
                    ]),
                  ]),
                  it("div", ev, [
                    St(
                      Mt(tf),
                      { to: `/quiz/${Mt(n)}` },
                      {
                        default: On(() => [
                          it(
                            "button",
                            {
                              class:
                                "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded",
                              onClick: a[1] || (a[1] = (l) => o.startTest()),
                            },
                            " شروع "
                          ),
                        ]),
                        _: 1,
                      },
                      8,
                      ["to"]
                    ),
                  ]),
                ],
                32
              ),
            ]),
          ])
        )
      );
    },
  },
  sv = am({
    history: Sg("/parsa1378fallah/"),
    routes: [
      {
        path: "/",
        name: "quizes",
        component: Xm,
        meta: { transition: "fade" },
      },
      {
        path: "/quiz/:id",
        name: "quiz",
        component: Ky,
        meta: { transition: "fade" },
      },
      {
        path: "/costomize/:id",
        name: "costomize",
        component: nv,
        meta: { transition: "fade" },
      },
    ],
  });
const iv = sg(),
  Ma = tg(zm);
Ma.use(sv);
Ma.use(iv);
Ma.mount("#app");
