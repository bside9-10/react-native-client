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
