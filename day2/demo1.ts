class C {
    p = 12;
    m() {
    }
  }
  let c = new C();
  let clone = { ...c };
  clone.p; // ok
  clone.m(); // error!

  function f({ a, b = 0 } = { a: "" }): void {
    // ...
}
f({ a: "yes" }); // ok, default b = 0
f(); // ok, default to {a: ""}, which then defaults b = 0
f({}); // error, 'a' is required if you supply an argument