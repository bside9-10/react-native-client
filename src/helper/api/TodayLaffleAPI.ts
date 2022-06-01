// import axios from 'axios';
import client from '../clients';
import {ITodayLaffle} from './ITodayLaffle';

export default async function getTodayLaffle() {
  const response = await client.get<ITodayLaffle>(
    '/api/v1/goals/2/today?date=20220416',
  );
  return response;
}
