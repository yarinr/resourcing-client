import { createAction, props } from '@ngrx/store';
import { User } from '../model/user.model';

export const setUser = createAction(
  '[User Action] set User',
  props<{ user: User }>()
);
