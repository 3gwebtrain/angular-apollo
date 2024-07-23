import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabularGraphComponent } from "./tabular-graph/tabular-graph.component";
import { TabularViewComponent } from "./tabular-view/tabular-view.component";

const routes: Routes = [
  { path: "", component: TabularViewComponent },
  { path: "graph", component: TabularGraphComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabularViewRoutingModule {}
