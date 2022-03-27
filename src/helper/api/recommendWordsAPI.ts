// import axios from 'axios';
import client from '../../helper/clients';
import {IResponseType} from './IRecommendWords';

export default async function getRecommendWords() {
  const response = await client.get<IResponseType>('/api/v1/goals');
  return response.data;
}
