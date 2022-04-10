import { useMutation } from 'react-query';
import { SampleError } from '../api/apiTypes';

// 주로 데이터의 수정, 삭제, 생성할때 쓰이는 custom hook
export default function useSampleMutation() {
  const mutation = useMutation({
    onMutate: variables => {
      console.log(variables);
      // ToDo : 요청 직전 처리, 여기서 반환하는 값은 아래 함수들의 context로 사용됨
    },
    onSuccess: data => {
      console.log(data);
      // ToDo : 수행 성공시 들어가야 할 로직
    },
    onError: (error: SampleError) => {
      console.log(`error : ${error}`);
      // ToDo : 수행 실패시 들어가야 할 로직
    },
  });

  return mutation;
}
