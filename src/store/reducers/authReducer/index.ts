import { IProfileResponse } from 'interfaces/authen';
import * as actions from '../../actions/authen/type';
import { initialState } from './config';

export default function authReducer(state: IProfileResponse = initialState, action: any): IProfileResponse {
  switch (action.type) {
    case actions.FETCH_USER_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.auth,
      };
    default:
      return state;
  }
}
