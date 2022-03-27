/**
 *
 * API 서버에서 다루는 타입들을 정의 : 성격이 같은 타입들 위주로 정의할 것
 */

export interface IRecommendWords {
  id: number;
  goalTitle: string;
  createdDate: string;
  modifiedDate: string;
}

export interface IResponseType {
  error?: string;
  success: string;
  response: IRecommendWords[];
}
