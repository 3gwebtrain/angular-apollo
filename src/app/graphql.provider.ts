import { ApplicationConfig, inject } from "@angular/core";
import { ApolloClientOptions, ApolloLink, InMemoryCache } from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { Apollo, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";

export const githubData = {
  token: "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",
  username: "3gwebtrain",
};

const uri = "https://api.github.com/graphql";

const header = setContext((operation, context) => ({
  headers: {
    Accept: "charset=utf-8",
  },
}));

const auth = setContext((operation, context) => {
  return {
    headers: {
      Authorization: "Bearer " + githubData["token"],
    },
  };
});

export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  const link = ApolloLink.from([header, auth, httpLink.create({ uri })]);
  return {
    link: link,
    cache: new InMemoryCache(),
  };
}

export const graphqlProvider: ApplicationConfig["providers"] = [
  Apollo,
  {
    provide: APOLLO_OPTIONS,
    useFactory: apolloOptionsFactory,
  },
];
