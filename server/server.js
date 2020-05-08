var path = require("path");
var express = require("express");
var bodyParser = require("body-parser");

var beaconCounter = 0;

var server = express()

  // Allow us to print the body text, regardless of what we get.
  .use(bodyParser.text({ type: "*/*" }))


  // Log all requests to the console
  .use((req, res, next) => {
    console.log(`${req.method} ${req.protocol}://${req.hostname}:${server.address().port}${req.originalUrl}`);
    next();
  })


  // Simulate the API that will take the beacon data.
  .post("/api/beacon", (req, res, next) => {
    console.log(`BEACON ${beaconCounter++} RECEIVED AT ${new Date().toISOString()}
      \t${req.headers["content-type"]}
      \t${req.body}`);

    res.sendStatus(204);
  })


  // Serve everything else from the public folder
  .use(express.static(path.resolve(__dirname, "../public")))


  .listen(3000, () => {
    console.log("demo site listening on http://localhost:3000");
  });

