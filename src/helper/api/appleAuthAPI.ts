import client from '../clients';

interface appleAuthResponse {
  accessToken: string;
  expiresIn: string;
  idToken: string;
  refreshToken: string;
  tokenType: string;
}

export interface appleAuthRequest {
  givenName: string;
  familyName: string;
  code: string;
  idToken: string;
}

export interface IResponseType {
  error?: string;
  success: string;
  response: appleAuthResponse[];
}

// https://api.bside9-10-api.site/api/v1/goals/2/today?date=20220425
export default async function getAppleAuthResponse(
  appleUserProfile: appleAuthRequest,
) {
  const response = await client.post<IResponseType>(
    'https://auth.bside9-10-api.site/path/to/endpoint',
    {appleUserProfile},
  );
  return response.data;
}
