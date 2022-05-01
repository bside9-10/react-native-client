import client from '../../helper/clients';

interface IToDosType {
  goalId: string;
  category: string;
  goalDetails: [
    {
      goalDetailId: string;
      title: string;
      startDate: string;
      endDate: string;
    },
  ];
}
export interface IResponseType {
  error?: string;
  success: string;
  response: IToDosType[];
}

// https://api.bside9-10-api.site/api/v1/goals/2/today?date=20220425
export default async function getMyToDos() {
  const response = await client.get<IResponseType>(
    '/api/v1/goals/2/today?date=20220425',
  );
  return response.data;
}
