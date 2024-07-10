function u(e) {
  return c(
    e.map(
      (t) => Math.abs(t - c(e))
    )
  );
}
function d(e) {
  return Math.sqrt(f(e));
}
function a(e) {
  return e.reduce(
    (t, r) => t + r,
    0
  ) / e.length;
}
function h(e) {
  return e.reduce(
    (t, r) => t * r,
    1
  ) ** (1 / e.length);
}
function f(e) {
  return e.map(
    (t) => Math.pow(t - a(e), 2)
  ).reduce((t, r) => t + r, 0) / e.length;
}
function s(e) {
  return e.length / e.reduce(
    (t, r) => t + 1 / r,
    0
  );
}
function c(e) {
  const t = [...e].sort((o, n) => o - n), r = Math.floor(e.length / 2);
  return e.length % 2 === 0 ? (t[r - 1] + t[r]) / 2 : t[r];
}
function g(e) {
  const t = /* @__PURE__ */ Object.create(null);
  let r = 0, o = [];
  e.forEach((n) => {
    t[n] ? t[n]++ : t[n] = 1, t[n] > r && (r = t[n]);
  });
  for (const n in t)
    t[n] === r && o.push(Number(n));
  return a(o);
}
const l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  arithmetic: a,
  geometric: h,
  harmonic: s,
  median: c,
  medianAbsoluteDeviation: u,
  mode: g,
  standardDeviation: d,
  variance: f
}, Symbol.toStringTag, { value: "Module" }));
function p(e, { sampleSize: t = 10 } = {}) {
  let r = localStorage.getItem(e);
  r = r ? JSON.parse(r).slice(-(t - 1)) : [];
  function o(i) {
    r.push(i), localStorage.setItem(
      e,
      JSON.stringify(r)
    );
  }
  function n(i = "arithmetic") {
    if (!(i in l))
      throw new ReferenceError(`The "${i}" method is not supported.`);
    return l[i](r);
  }
  return [n, o];
}
export {
  p as default
};
