import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as fromUser from '../entities/user/reducer/user.reducer';

export interface State {
  userState: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  userState: fromUser.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
