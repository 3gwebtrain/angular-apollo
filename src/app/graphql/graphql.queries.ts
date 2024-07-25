import { gql } from "apollo-angular";
import { RepoResponse } from "./../interfaces/repo.inter";

const GET_COUNTRIES = gql`
  query {
    countries {
      name
    }
  }
`;
export { GET_COUNTRIES };

const GET_REPOS = gql`
  query {
    user(login: "kentcdodds") {
      repositories(first: 100) {
        totalCount
        nodes {
          nameWithOwner
          stargazers(first: 50) {
            totalCount
          }
        }
      }
    }
  }
`;
export { GET_REPOS };



export const GET_REPOS_QUERY = gql<RepoResponse, void>`
  query {
    user(login: "kentcdodds") {
      repositories(first: 100) {
        totalCount
        nodes {
          nameWithOwner
          stargazers(first: 50) {
            totalCount
          }
        }
      }
    }
  }
`;
