import { gql } from "apollo-angular";

const GET_COUNTRIES = gql`
  query {
    countries {
      name
    }
  }
`;
export { GET_COUNTRIES };

const GET_REPOS = gql`
  {
    repository(name: "kentcdodds", owner: "kentcdodds") {
      owner {
        login
        id
      }
    }
  }
`;
export { GET_REPOS };
