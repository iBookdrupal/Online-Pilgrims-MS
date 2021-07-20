import { gql } from "graphql-tag";
export const FETCH_BATCH_QUERY = gql`
  {
    getBatch {
      id
      batchName
    }
  }
`;
