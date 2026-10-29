import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '5s', target: 20 }, // ramp up to 20 users over 5 seconds
    { duration: '5s', target: 40 }, // stay at 40 users for 5 seconds
    { duration: '5s', target: 0 }, // ramp down to 0 users over 5 seconds
  ],
};

export default function() {
  let res = http.get('https://quickpizza.grafana.com');
  check(res, { "status is 200": (res) => res.status === 200 });
  // sleep(1);
}
