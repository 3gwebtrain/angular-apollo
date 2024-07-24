import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { provideHttpClient } from "@angular/common/http";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { provideEffects } from "@ngrx/effects";
import { provideStore } from "@ngrx/store";
import { routes } from "./app.routes";
import { graphqlProvider } from "./graphql.provider";

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideStore(), provideEffects(), provideHttpClient(), graphqlProvider, provideAnimationsAsync()],
};
