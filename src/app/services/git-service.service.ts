import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";

export const githubData = {
  token: "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",
  username: "3gwebtrain",
};
const uri = "https://api.github.com/graphql";

const header = {
  "Content-Type": "application/json",
  Authorization: "Bearer " + githubData["token"],
};

const body = `
    query{
      user(login:"3gwebtrain"){
        issues(first:10){
          nodes{
          title,
          body,
          closedAt
          }
        }
      }
    }
  `;

const apolloQ = gql`
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

@Injectable({
  providedIn: "root",
})
export class GitServiceService {
  constructor(private apollo: Apollo) {}

  getGitData() {
    // fetch(uri, {
    //   method: "POST",
    //   headers: header,
    //   body: JSON.stringify({ query: body }),
    // })
    //   .then((response) => console.log(JSON.stringify("response")))
    //   .catch((err) => console.log(err));

    this.apollo.watchQuery({ query: apolloQ }).valueChanges.subscribe((data) => console.log(data));
  }
}
