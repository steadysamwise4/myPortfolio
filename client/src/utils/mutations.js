import { gql } from '@apollo/client';

export const ADD_CONTACT = gql`
mutation addContact($contactName: String!, $email: String!, $message: String!) {
  addContact(contactName: $contactName, email: $email, message: $message) {
     _id
     contactName
     email
     message 
  }
}
`;