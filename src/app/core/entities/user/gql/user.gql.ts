import gql from 'graphql-tag';

// export const userFieldsFragment = gql`
//   fragment userFieldsFragment on {
//     id
//     name
//     userName
//     mail
//     score
//     userLevel
//   }
// `;

export const currentUserQuery = gql`
  query getCurrentUser {
    getCurrentUser {
      id
      name
      userName
      mail
      score
      userLevel
    }
  }
`;
