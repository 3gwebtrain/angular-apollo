import { ApplicationConfig, inject } from "@angular/core";
import { ApolloClientOptions, InMemoryCache } from "@apollo/client/core";
import { Apollo, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";

export const githubData = {
  token: "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",
  username: "3gwebtrain",
};

//const uri = "https://countries.trevorblades.com/graphql"; // <-- add the URL of the GraphQL server here
const uri = "https://api.github.com/graphql"; // <-- add the URL of the GraphQL server here

const header = {
  "Content-Type": "application/json",
  Authorization: "bearer " + githubData["token"],
};

export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  return {
    link: httpLink.create({ uri }),
    headers: header,
    credentials: "include",
    cache: new InMemoryCache(),
    defaultOptions: {
      watchQuery: {
        errorPolicy: "all",
      },
    },
  };
}

export const graphqlProvider: ApplicationConfig["providers"] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];
