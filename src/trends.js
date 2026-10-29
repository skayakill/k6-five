import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 50,
  duration: '10s',
  rps: 100, // membuat maximal 100 RPS, meskipun burst request aktif
  summaryTrendStats: ['avg', 'p(95)', 'p(99.99)'],
};

export default function() {
  let res = http.get('https://quickpizza.grafana.com');
  check(res, { "status is 200": (res) => res.status === 200 });
  // sleep(1);
}
