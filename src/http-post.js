import http from 'k6/http';
import { check } from 'k6';

export default function() {
  const url = 'https://quickpizza.grafana.com/register';
  const payload = JSON.stringify({
    username: 'testuser',
    password: 'testpassword',
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const res = http.post(url, payload, params);
  check(res, { 'status is 200': (r) => r.status === 200 });
};

