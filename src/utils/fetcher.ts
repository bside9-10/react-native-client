import client from '../helper/clients';

const fetcher = async ({queryKey}: {queryKey: string}) => {
  // console.log('queryKey', queryKey);

  const response = await client.get(queryKey, {
    withCredentials: true,
  });
  return response.data;
};

export default fetcher;
