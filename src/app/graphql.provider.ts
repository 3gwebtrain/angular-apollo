import { ApplicationConfig, inject } from "@angular/core";
import { ApolloClientOptions, ApolloLink, InMemoryCache } from "@apollo/client/core";
import { setContext } from "@apollo/client/link/context";
import { Apollo, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";
import { environment } from "./../environments/environment.development";

const header = setContext((operation, context) => ({
  headers: {
    Accept: "charset=utf-8",
  },
}));

const auth = setContext((operation, context) => {
  return {
    headers: {
      Authorization: "Bearer " + environment.token,
    },
  };
});

export function apolloOptionsFactory(): ApolloClientOptions<any> {
  const httpLink = inject(HttpLink);
  const uri = `${environment.apiRoot}`;
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
