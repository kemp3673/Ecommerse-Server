import http from 'k6/http';
import { check, sleep } from 'k6';


export const options = {
  vus: 100,
  duration: '5m'
}

const url_list = 'http://127.0.0.1:3000/products?count=10&page=500';
const url_indv = 'http://127.0.0.1:3000/products/999950';
const url_style = 'http://127.0.0.1:3000/products/50/styles';
const url_client = 'http://127.0.0.1:3001';

export default function() {
  const r1 = http.get(url_list);
  //sleep(1);
  check(r1, {
    'List status 200': r => r.status === 200,
    'List time < 100ms': r => r.timings.duration < 100,
    'List time < 200ms': r => r.timings.duration < 200,
    'List time < 500ms': r => r.timings.duration < 500,
    'List time < 1000ms': r => r.timings.duration < 1000,
  });
  const r2 = http.get(url_indv);
  check(r2, {
    'INDV status 200': r => r.status === 200,
    'INDV time < 100ms': r => r.timings.duration < 100,
    'INDV time < 200ms': r => r.timings.duration < 200,
    'INDV time < 500ms': r => r.timings.duration < 500,
    'INDV time < 1000ms': r => r.timings.duration < 1000,
  });
  const r3 = http.get(url_style);
  check(r3, {
    'STYLE status 200': r => r.status === 200,
    'STYLE time < 100ms': r => r.timings.duration < 100,
    'STYLE time < 200ms': r => r.timings.duration < 200,
    'STYLE time < 500ms': r => r.timings.duration < 500,
    'STYLE time < 1000ms': r => r.timings.duration < 1000,
  });
  const r4 = http.get(url_style);
  check(r4, {
    'CLIENT status 200': r => r.status === 200,
    'CLIENT time < 100ms': r => r.timings.duration < 100,
    'CLIENT time < 200ms': r => r.timings.duration < 200,
    'CLIENT time < 500ms': r => r.timings.duration < 500,
    'CLIENT time < 1000ms': r => r.timings.duration < 1000,
  });

}


// export const options = {
//   stages: [
//     { duration: '2m', target: 100 }, // below normal load
//     { duration: '2m', target: 100 },
//     { duration: '2m', target: 200 }, // normal load
//     { duration: '2m', target: 200 },
//     { duration: '30s', target: 300 }, // around the breaking point
//     { duration: '1m', target: 300 },
//     { duration: '15s', target: 400 }, // beyond the breaking point
//     { duration: '45s', target: 400 },
//     { duration: '2m', target: 0 }, // scale down. Recovery stage.
//   ],
// };

// // const url_list = 'http://127.0.0.1:3000/products?count=10&page=500';
// // const url_indv = 'http://127.0.0.1:3000/products/999950';
// // const url_style = 'http://127.0.0.1:3000/products/50/styles';
// // const url_client = 'http://127.0.0.1:3001';

// export default function () {
//   const BASE_URL = 'http://127.0.0.1:3000/products?count=10&page=500'; // make sure this is not production

//   const responses = http.batch([
//     ['GET', `${BASE_URL}/products`, null, { tags: { name: 'PublicCrocs' } }],
//     ['GET', `${BASE_URL}/products/:productID`, null, { tags: { name: 'PublicCrocs' } }],
//     ['GET', `${BASE_URL}//products/:productID/styles`, null, { tags: { name: 'PublicCrocs' } }],
//   ]);

//   sleep(1);
// }
