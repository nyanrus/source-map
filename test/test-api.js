/* -*- Mode: js; js-indent-level: 2; -*- */
/*
 * Copyright 2012 Mozilla Foundation and contributors
 * Licensed under the New BSD license. See LICENSE or:
 * http://opensource.org/licenses/BSD-3-Clause
 */

import * as sourceMap from "../lib/index.js"
import { expect } from "chai";

describe('index.js',  () => {
    it('the api is properly exposed in the top level',  () => {

      expect(typeof sourceMap.SourceMapGenerator).to.eq("function")
      expect(typeof sourceMap.SourceMapConsumer).to.eq("function")
      expect(typeof sourceMap.SourceNode).to.eq("function")
    });
});