import { Injectable } from "@angular/core";
import { gql, Query } from "apollo-angular";

@Injectable({
  providedIn: "root",
})
export class GitServiceService extends Query<Response> {
  document = gql`
    query {
      user(login: "3gwebtrain") {
        issues(first: 10) {
          nodes {
            title
            body
            closedAt
          }
        }
      }
    }
  `;
}
