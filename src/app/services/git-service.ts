import { Injectable } from "@angular/core";
// import { ApolloQueryResult } from "@apollo/client/core";
import { Apollo } from "apollo-angular";
// import { GET_REPOS } from "../graphql/graphql.queries";

import { data } from "../../data/data";
@Injectable({
  providedIn: "root",
})
export class GitService {
  constructor(private apollo: Apollo) {}

  async loadAllRepositories(): Promise<any> {
    return new Promise((res, rej) => {
      //enable by adding proper auth_token  in environment dev file
      // this.apollo.watchQuery({ query: GET_REPOS }).valueChanges.subscribe((data: ApolloQueryResult<any>) => res(data.data.user.repositories));
      // console.log(JSON.parse(data));
      res(data.data.user.repositories);
    });
  }
}
