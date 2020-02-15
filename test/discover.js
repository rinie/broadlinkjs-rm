'use strict';
const BroadlinkJS = require('../index.js');
// const BroadlinkJS = require("broadlinkjs-rm");
const broadlink = new BroadlinkJS();

broadlink.on('deviceReady', device => {
  // new device
  console.log('Host: %o Mac: %o', device.host, device.mac);
  console.log(`Type: 0x${(device.type).toString(16)} Model: ${device.model}`);
  console.log(broadlink.eventNames());
});
broadlink.discover();
