/* eslint-disable no-undef */

var context = typeof window != "undefined" ? window : global;

function noModules() {
  var s = document.createElement("script");
  return (
    !("noModule" in s) ||
    navigator.appVersion.indexOf("Edge") !== -1 ||
    navigator.appVersion.indexOf("AppleWebKit/604") !== -1
  );
}

function url() {
  var alias = "else";
  var project = "lseonline";
  var projectAndAlias =
    project && project != "website" ? project + "-" + alias : alias;
  return Object({
    api: "https://api-" + alias + ".cloud.contensis.com",
    cms: "https://cms-" + alias + ".cloud.contensis.com",
    previewWeb: "https://preview-" + projectAndAlias + ".cloud.contensis.com",
    liveWeb: "https://live-" + projectAndAlias + ".cloud.contensis.com",
    iisWeb: "https://iis-live-" + projectAndAlias + ".cloud.contensis.com",
    previewIis:
      "https://iis-preview-" + projectAndAlias + ".cloud.contensis.com",
  });
}

context.PUBLIC_URI = "lse.ac.uk";

context.SERVERS = Object({
  alias: "else",
  internalVip: "10.65.5.4",
  api: url().api,
  cms: url().cms,
  web: url().liveWeb,
  previewWeb: url().previewWeb,
  iis: url().iisWeb,
  previewIis: url().previewIis,
});

context.DELIVERY_API_CONFIG = Object({
  rootUrl: url().api,
  accessToken: "gnIlDXEa99dkods6o6PZfZ3vAVrBqeUecgrywqZ00SUDwRi7",
  projectId: "lseonline",
  livePublishingRootUrl: url().previewWeb,
});

context.PROJECTS = Object([{"id":"lseonline","publicUri":"lse.ac.uk"}]);

context.ALIAS = "else";
context.ACCESS_TOKEN = "gnIlDXEa99dkods6o6PZfZ3vAVrBqeUecgrywqZ00SUDwRi7";
context.PUBLIC_URL = "lse.ac.uk";
context.PROJECT = "lseonline";
context.CONTENSIS_VERSION = "12";
context.STATIC_ROUTE_PATH = "static-lse-online";


if (typeof window == "undefined") {
  // in a server context we need to set default
  // scripts and bundles, then start the server
  var utils = require("./startup.utils.js");
  utils.setDefaults(__filename, context.STATIC_PATH);
  if (process.argv.includes("-tests")) {
    require("../test.js");
  } else {
    require("../server.js");
  }
}
