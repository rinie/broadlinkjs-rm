'use strict';
const BroadlinkJS = require('../index.js');
// const BroadlinkJS = require("broadlinkjs-rm");
const broadlink = new BroadlinkJS();

broadlink.on("deviceReady", device => {
  // new device
  console.log('Host: '); console.log(device.host);
  console.log(`Mac: ${device.mac}`);
  console.log(`Type: 0x${(device.type).toString(16)}`);
  console.log(`Model ${device.model}`);
});
broadlink.discover();
