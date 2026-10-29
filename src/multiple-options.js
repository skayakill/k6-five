import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 10,
  stages: [
    { duration: '5s', target: 20 }, // ramp up to 20 users over 5 seconds
    { duration: '5s', target: 40 }, // stay at 40 users for 5 seconds
    { duration: '5s', target: 0 }, // ramp down to 0 users over 5 seconds
  ],

  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
  },

  summaryTrendStats: ['avg', 'p(95)', 'min', 'max'],
  rps: 100, // membuat maximal 100 RPS, meskipun burst request aktif
};

export default function() {
  let res = http.get('https://quickpizza.grafana.com');
  check(res, { "status is 200": (res) => res.status === 200 });
  sleep(1);
}
