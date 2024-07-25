import { Injectable } from "@angular/core";
import { gql, Query } from "apollo-angular";

@Injectable({
  providedIn: "root",
})
export class GitServiceService extends Query<Response> {
  document = gql`
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
}
