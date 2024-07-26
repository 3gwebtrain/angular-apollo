import { gql } from "apollo-angular";
import { RepoResponse } from "./../interfaces/repo.inter";

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
