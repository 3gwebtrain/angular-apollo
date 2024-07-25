import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "table",
  },
  {
    path: "table",
    loadChildren: () => import("./tabular-view/tabular-view.module").then((m) => m.TabularViewModule),
  },
  // { path: "graph", component: TabularGraphComponent },
  { path: "**", component: PageNotFoundComponent },
];
