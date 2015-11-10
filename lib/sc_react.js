'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _HelloWorld = require('./HelloWorld.js');

Object.defineProperty(exports, 'HelloWorld', {
  enumerable: true,
  get: function get() {
    return _HelloWorld.default;
  }
});
var package_json = require('./../package.json');

var ver = exports.ver = package_json.version;
var things = exports.things = 'things';