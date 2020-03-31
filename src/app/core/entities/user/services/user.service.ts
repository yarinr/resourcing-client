import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { currentUserQuery } from '../gql/user.gql';
import { User } from 'src/app/core/entities/user/model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apollo: Apollo) {}
  getCurrentUser() {
    return this.apollo
      .getClient()
      .query({ query: currentUserQuery })
      .then(data => {
        return data.data['getCurrentUser'] as User;
      });
  }
}
