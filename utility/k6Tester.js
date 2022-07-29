import http from 'k6/http';
import { check, sleep } from 'k6';

// export const requests = new Counter('http_reqs');

export const options = {
  vus: 1,
  duration: '30s'
}

const url_list = 'http://127.0.0.1:3000/products';
const url_indv = 'http://127.0.0.1:3000/products/1';
const url_style = 'http://127.0.0.1:3000/products/1/styles';

export default function() {
  const r1 = http.get(url_list);
  sleep(1);
  check(r1, {
    'List status 200': r => r.status === 200,
    'List time < 200ms': r => r.timings.duration < 200,
    'List time < 500ms': r => r.timings.duration < 500,
    'List time < 1000ms': r => r.timings.duration < 1000,
    'List time < 2000ms': r => r.timings.duration < 2000,
  });
  // const r2 = http.get(url_indv);
  // check(r2, {
  //   'INDV status 200': r => r.status === 200,
  //   'INDV time < 200ms': r => r.timings.duration < 200,
  //   'INDV time < 500ms': r => r.timings.duration < 500,
  //   'INDV time < 1000ms': r => r.timings.duration < 1000,
  //   'INDV time < 2000ms': r => r.timings.duration < 2000,
  // });
  // const r3 = http.get(url_style);
  // check(r3, {
  //   'STYLE status 200': r => r.status === 200,
  //   'STYLE time < 200ms': r => r.timings.duration < 200,
  //   'STYLE time < 500ms': r => r.timings.duration < 500,
  //   'STYLE time < 1000ms': r => r.timings.duration < 1000,
  //   'STYLE time < 2000ms': r => r.timings.duration < 2000,
  // });

}