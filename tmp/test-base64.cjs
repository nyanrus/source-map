/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2011 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

import * as base64 from "../lib/base64.js"

exports["test out of range encoding"] = function (assert) {
  assert.throws(function () {
    base64.encode(-1);
  }, /Must be between 0 and 63/);
  assert.throws(function () {
    base64.encode(64);
  }, /Must be between 0 and 63/);
};

exports["test normal encoding and decoding"] = function (assert) {
  for (let i = 0; i < 64; i++) {
    base64.encode(i);
  }
};
