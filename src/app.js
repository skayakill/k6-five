import http from 'k6/http';

import { check, sleep, group } from 'k6';
import { Trend, Counter, Rate } from 'k6/metrics';
import { SharedArray } from 'k6/data';

// export default function () {
//   http.get('https://test-api.k6.io/public/crocodiles/');
//   sleep(1);
// }

// export default function () {
//   const res = http.get('https://test-api.k6.io/public/crocodiles/');
//   check(res, {
//     'status 200': (r) => r.status === 200,
//     'response < 500ms': (r) => r.timings.duration < 500,
//   });
// }

export default function () {
  group('Login flow', function () {
    http.post(loginUrl, loginPayload);
  });
  group('Checkout flow', function () {
    http.post(checkoutUrl, checkoutPayload);
  });
}