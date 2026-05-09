import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 1,
  duration: '1s',
  thresholds: {
    http_req_duration: ['p(95)<2000'],
  },
};

export default function () {
  const baseUrl = 'https://github.com';

  let resLogin = http.get(`${baseUrl}/login`);
  check(resLogin, {
    'login page status is 200': (r) => r.status === 200,
  });
  sleep(1);

  let resRepos = http.get(`${baseUrl}/QA-PedroPaulo?tab=repositories`);
  check(resRepos, {
    'repositories status is 200': (r) => r.status === 200,
  });
  sleep(1);

  let resLogout = http.get(`${baseUrl}/logout`);
  check(resLogout, {
    'logout page status is 200': (r) => r.status === 200,
  });
}