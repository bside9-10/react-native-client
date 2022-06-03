// import axios from 'axios';
import client from '../clients';

interface MyPageInfo {
  goalCategoryId: string;
  category: string;
}

export default async function getMyPageInfo() {
  client.defaults.headers.Authorization =
    'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJic2lkZTFAZ21haWwuY29tIiwiaWF0IjoxNjUyNjIxMTU0LCJleHAiOjE2NTM0ODUxNTR9.DxxRadXwPATRCQZBoH2htC-ldGaixt1adq-44Wi4UX05fabcuV3F0tBCrthfhiXJtNFD-fv0rSlMPUMUbfx5rw';
  const response = await client.get<MyPageInfo>('/api/v1/users/2/me');
  return response.data;
}
