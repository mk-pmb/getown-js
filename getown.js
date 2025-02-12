﻿/*jslint indent: 2, maxlen: 80, continue: false, unparam: false, node: true */
/* -*- tab-width: 2 -*- */
'use strict';

var hop = Object.prototype.hasOwnProperty;
function getown(o, p, d) { return (o && hop.call(o, p) ? o[p] : d); }
getown.voc = function (o, p) { return getown(o, p, p); };
module.exports = getown;
