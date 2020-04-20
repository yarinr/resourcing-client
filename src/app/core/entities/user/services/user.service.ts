import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Store, props } from '@ngrx/store';
import { currentUserQuery } from '../gql/user.gql';
import { setUser } from '../actions/user.actions';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apollo: Apollo, private store: Store<User>) {}
  getCurrentUser() {
    return this.apollo
      .getClient()
      .query({ query: currentUserQuery })
      .then(data => {
        this.store.dispatch(
          setUser({ user: data.data['getCurrentUser'] as User })
        );
      });
  }
}
