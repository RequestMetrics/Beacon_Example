(function client() {

  if (!navigator.sendBeacon) { return; }

  function onUnload() {
    if (onUnload._hasUnloaded) { return; }
    onUnload._hasUnloaded = true;

    var data = { foo: "bar" };
    var text = JSON.stringify(data);

    navigator.sendBeacon(
      "http://beacon.requestmetrics.com:3000/api/beacon",
      text
    );
  }

  window.addEventListener("pagehide", onUnload);
  window.addEventListener("unload", onUnload);

})();
