// k6 run simple-get-test.js

import http from "k6/http";
import { check, sleep } from "k6";
import { Counter } from "k6/metrics";

// A simple counter for http requests

export const requests = new Counter("http_reqs");

// you can specify stages of your test (ramp up/down patterns) through the options object
// target is the number of VUs you are aiming for

export const options = {
  stages: [
    { target: 20, duration: "1m" },
    { target: 1000, duration: "5m" },
    { target: 0, duration: "1m" },
  ],
};

export default function () {
  // our HTTP request, note that we are saving the response to res, which can be accessed later

  const res = http.get("http://localhost:8000/challenges/3#misc");

  sleep(1);

  const checkRes = check(res, {
    "status is 200": (r) => r.status === 200,
    "response body": (r) => r.body.indexOf("Challenge info") !== -1,
  });
}
