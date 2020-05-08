<p align="center">
  <a href="https://requestmetrics.com/" target="_blank" align="center">
    <img src="https://requestmetrics.com/assets/external/request_metrics_icon.svg" width="280">
  </a>
  <br />
</p>

# Beacon API Example

Using the browser's Beacon API to send data when the page unloads. This project is demonstrated in the video posted on the Request Metrics Blog, ["Using the Beacon API"](https://requestmetrics.com/making-of/using-the-beacon-api).

## Setup

In order to test the cross-origin constraints of the beacon, we need to host this project from multiple domains. Please add the following entries to your `hosts` file.

```
127.0.0.1 example.com
127.0.0.1 beacon.requestmetrics.com
```

*You can run everything on `localhost` if you wish, but be sure to change the beacon URL in client.js.*

## Usage

To start the project, run `npm start` and open a web browser to [`http://example.com:3000/`](http://example.com:3000/).

## Reference

- [Beacon spec](https://w3c.github.io/beacon/)
- [MDN: sendBeacon](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/sendBeacon)
- [MDN: Blobs](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
- [Safari Beacon issues](https://www.ctrl.blog/entry/safari-beacon-issues.html)
- [MDN: Page Hide](https://developer.mozilla.org/en-US/docs/Web/API/Window/pagehide_event)
- [Why We Can't Send application/json](https://bugs.chromium.org/p/chromium/issues/detail?id=490015)
