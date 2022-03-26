import {useMutation} from 'react-query';
import {SampleError} from '../api/errorTypes';

export default function useRecommendWords() {
  const mutation = useMutation({
    onSuccess: data => {
      console.log(data);
    },
    onError: (error: SampleError) => {
      console.log(`error : ${error}`);
    },
  });

  return mutation;
}
