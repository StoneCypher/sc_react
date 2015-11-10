
'use strict';

var package_json = require('./../package.json');

export const ver    = package_json.version;
export const things = 'things';

export { default as HelloWorld } from './HelloWorld.js';
