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
  const token = localStorage.getItem("token");

  if (token === null) {
    return {};
  } else {
    return {
      headers: {
        Authorization: "bearer " + githubData["token"],
      },
    };
  }
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
