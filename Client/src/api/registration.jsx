import { gql } from "graphql-tag";
export const FETCH_REGISTRATION_QUERY = gql`
  {
    getRegistrations {
      id
      firstName
      lastName
      otherNames
      religion
      gender
      phoneNo
      contactAddress
      state
      localGovt
      nextOfKinFullName
      nextOfKinAddress
      nextOfKinPhoneNo
      nextOfKinEmail
      createdAt
    }
  }
`;
