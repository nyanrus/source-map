/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

import { ArraySet } from "../lib/array-set.js";
import { expect } from "chai";

function makeTestSet() {
  const set = new ArraySet();
  for (let i = 0; i < 100; i++) {
    set.add(String(i));
  }
  return set;
}

describe('array-set',  () => {
  it('.has() membership',  () => {
    const set = makeTestSet();
    for (let i = 0; i < 100; i++) {
      expect(set.has(String(i))).ok
    }
  });
  it(".indexOf() elements", () => {
    const set = makeTestSet();
    for (let i = 0; i < 100; i++) {
      expect(set.indexOf(String(i))).eq(i)
    }
    })
    it(".at() indexing",()=>{
      const set = makeTestSet();
      for (let i = 0; i < 100; i++) {
        expect(set.at(i)).eq(String(i));
      }
    })
    it("creating from an array",()=>{
      const set = ArraySet.fromArray([
        "foo",
        "bar",
        "baz",
        "quux",
        "hasOwnProperty",
      ]);

      expect(set.has("foo")).ok
      expect(set.has("bar")).ok
      expect(set.has("baz")).ok
      expect(set.has("quux")).ok
      expect(set.has("hasOwnProperty")).ok

      expect(set.indexOf("foo")).eq(0)
      expect(set.indexOf("bar")).eq(1)
      expect(set.indexOf("baz")).eq(2)
      expect(set.indexOf("quux")).eq(3)

      expect(set.at(0)).eq("foo")
      expect(set.at(1)).eq("bar")
      expect(set.at(2)).eq("baz")
      expect(set.at(3)).eq("quux")
    })
    it("that you can add __proto__; see github issue #30",()=>{
      const set = new ArraySet();
      set.add("__proto__");
      expect(set.has("__proto__")).ok
      expect(set.at(0)).eq("__proto__")
      expect(set.indexOf("__proto__")).eq(0)
    })
    it(".fromArray() with duplicates",()=>{
      let set = ArraySet.fromArray(["foo", "foo"]);
      expect(set.has("foo")).ok
      expect(set.at(0)).eq("foo");
      expect(set.indexOf("foo")).eq(0);
      expect(set.toArray().length).eq(1);

      set = ArraySet.fromArray(["foo", "foo"], true);
      expect(set.has("foo")).ok;
      expect(set.at(0)).eq("foo");
      expect(set.at(1)).eq("foo");
      expect(set.indexOf("foo")).eq(0);
      expect(set.toArray().length).eq(2);
    })
    it(".add() with duplicates",()=>{
      const set = new ArraySet();
      set.add("foo");
    
      set.add("foo");
      expect(set.has("foo")).ok;
      expect(set.at(0)).eq("foo");
      expect(set.indexOf("foo")).eq(0);
      expect(set.toArray().length).eq(1);

      set.add("foo", true);
      expect(set.has("foo")).ok;
      expect(set.at(0)).eq("foo");
      expect(set.at(1)).eq("foo");
      expect(set.indexOf("foo")).eq(0);
      expect(set.toArray().length).eq(2);
    })
    it(".size()",()=>{
      const set = new ArraySet();
      set.add("foo");
      set.add("bar");
      set.add("baz");
      expect(set.size()).eq(3);
    })
    it(".size() with disallowed duplicates",()=>{
      const set = new ArraySet();

      set.add("foo");
      set.add("foo");
    
      set.add("bar");
      set.add("bar");
    
      set.add("baz");
      set.add("baz");

      expect(set.size()).eq(3);
    })
    it(".size() with allowed duplicates",()=>{
      const set = new ArraySet();

      set.add("foo");
      set.add("foo", true);
    
      set.add("bar");
      set.add("bar", true);
    
      set.add("baz");
      set.add("baz", true);
    
      expect(set.size()).eq(3);
    })
});
