/**
 *
 * axios의 인스턴스 client를 만들어서 내보내주는 파일
 *
 * baseURL을 사용하여 주소 앞부분을 포함하지 않고 진행하기 위한 인스턴스
 * 단, 로컬에서 실행할때는 PC 내부의 실제 주소를 적어주어야 한다
 */

import axios from 'axios';

const baseURL = 'http://133.186.146.120:8080';

const client = axios.create({baseURL});

// 로그인/회원가입 인증관련
// export function applyToken(jwt: string) {
//   // eslint-disable-next-line no-template-curly-in-string
//   client.defaults.headers.Authorization = 'Bearer ${jwt}';
// }

// export function clearToken(jwt: string) {
//   client.defaults.headers.Authorization = undefined;
// }

export default client;
