# Broadlink RM

## Introduction

This module allows you to control the IR and RF interfaces within Broadlink RM devices.

## How to use

Import lib and listen on devices

```js
const BroadlinkJS = require("broadlinkjs-rm");
const broadlink = new BroadlinkJS();

broadlink.on("deviceReady", device => {
  // new device
});
broadlink.discover();
```

### Thanks

This work is based on https://github.com/lprhodes/broadlinkjs-rm
