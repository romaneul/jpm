"use strict";

const { Cc, Ci } = require("chrome");
const { quit, eForceQuit } = Cc['@mozilla.org/toolkit/app-startup;1'].
                             getService(Ci.nsIAppStartup);
const { setTimeout } = require("sdk/timers");
const exit = () => quit(eForceQuit);

setTimeout(exit, 1);

sadf