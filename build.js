'use strict';

const fs = require('fs');

const adapter = fs.readFileSync('node_modules/webrtc-adapter/out/adapter.js').toString();
fs.writeFileSync('public/adapter.js', adapter);