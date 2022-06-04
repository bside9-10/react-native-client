/* root reducer */
import {combineReducers} from 'redux';
import auth from './auth';

const rootReducer = combineReducers({
  auth,
});

/* 추후 useSelector를 사용할 때 해당타입을 참조 */
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
