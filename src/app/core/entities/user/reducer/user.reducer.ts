import {
  Action,
  createReducer,
  on,
  createFeatureSelector,
  createSelector
} from '@ngrx/store';
import * as userActions from '../actions/user.actions';
import { User } from '../model/user.model';

export interface State {
  currentUser: User | undefined;
}

export const UserReducerToken = 'UserReducer';

export const initailUserSate: State = {
  currentUser: undefined
};

const userReducer = createReducer(
  initailUserSate,
  on(userActions.setUser, (state, { user }) => ({ currentUser: user }))
);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}

export const selectFeature = createFeatureSelector<State>(UserReducerToken);

export const getUser = createSelector(
  selectFeature,
  (state: State) => state.currentUser
);
