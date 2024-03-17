import { gql } from "@apollo/client";

export const GET_EMPLOYEES = gql`
  query GetEmployees {
    employees {
      id
      image
      firstName
      lastName
      email
      phone
      address
      jobTitle
      vote
    }
  }
`;
