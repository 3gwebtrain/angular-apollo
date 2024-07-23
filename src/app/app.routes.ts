import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: () => import("./tabular-view/tabular-view.module").then((m) => m.TabularViewModule),
  },
  { path: "**", component: PageNotFoundComponent },
];
