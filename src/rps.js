import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  vus: 10,
  duration: '30s',
  rps: 100, // membuat maximal 100 RPS, meskipun burst request aktif
};

export default function() {
  let res = http.get('https://quickpizza.grafana.com');
  check(res, { "status is 200": (res) => res.status === 200 });
  // sleep(1); matikan sleep agar request bisa dilakukan secara burst
}
