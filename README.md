# Client

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## from Mohamed Arif descriptions git https://github.com/3gwebtrain/angular-apollo/tree/backup

what I used with this app:

1. Used standalore components
2. Used @ngrx/store
3. d3.js
4. Ag-Grid
5. Apollo Angular

Dynamic to static: Apollo Angular
Since my Graphql api service keep on expires I have copied and pasted the dynamic data in to data.ts
I have commented "loadAllRepositories()" dynamic data fetch. you can update the proper token in the environment dev file and check if it works

D3.js : Used some static data to show case
in graph page, I am getting "user" details and showing to update how we can set and get.
But I did not used the real data here. Not able to fech all because of token expire and no time.

Prop types - some where i missed to add prop types. But not it intensional
Conditional check - conditional check not implemented since its the demo works
Comments - self declarative or comments not added
Test - test case not written[ I like jestjs]
Styles - styles not considered. not styles written
