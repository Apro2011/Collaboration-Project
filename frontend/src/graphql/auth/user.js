
import { gql } from '@apollo/client';

export const CREATE_USER_MUTATION = gql`
mutation createUser($email: String!, $password: String!, $username: String!) {
  createUser(email: $email, password: $password, username: $username) {
    user {
      id
      username
      email
    }
  }
}
`;

export const LOGIN_USER_MUTATION = gql`
mutation loginUser($username: String!, $password: String!) {
  tokenAuth(username: $username, password: $password) {
    token
    payload
  }
}
`;

export const VERIFY_USER_MUTATION = gql`
mutation verifyToken($token: String!) {
  verifyToken(token: $token) {
    payload
  }
}
`;