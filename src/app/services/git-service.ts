import { Injectable } from "@angular/core";
// import { ApolloQueryResult } from "@apollo/client/core";
import { Apollo, gql } from "apollo-angular";
import { BehaviorSubject } from "rxjs";
import { environment } from "../../environments/environment.development";
// import { GET_REPOS } from "../graphql/graphql.queries";

import { data } from "../../data/data";
@Injectable({
  providedIn: "root",
})
export class GitService {
  env: object = environment;
  repos$ = new BehaviorSubject("chec");

  constructor(private apollo: Apollo) {}

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

  async loadAllRepositories(): Promise<any> {
    return new Promise((res, rej) => {
      // this.apollo.watchQuery({ query: GET_REPOS }).valueChanges.subscribe((data: ApolloQueryResult<any>) => res(data.data.user.repositories));
      // console.log(JSON.parse(data));
      res(data.data.user.repositories);
    });
  }
}

// setTimeout(() => {
//   res({ totalCount: 20, nodes: [{ nameWithOwner: "arif", stargazers: { totalCount: 17 } }] });
// }, 2000);
