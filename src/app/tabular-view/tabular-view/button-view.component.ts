import { Component, inject } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AgGridAngular, ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";
import { RepoNode } from "../../interfaces/repo.inter";
import { RepoStore } from "../../store/repo.store";

@Component({
  selector: "app-button-view",
  standalone: true,
  imports: [AgGridAngular, RouterModule],
  template: `<a
    routerLink="graph"
    (click)="setUser(data)"
    >{{ data.stars }}</a
  >`,
})
export class TabularButtonComponent implements ICellRendererAngularComp {
  data: RepoNode = { nameWithOwner: "", stars: 3 };
  store = inject(RepoStore);
  agInit(params: ICellRendererParams): void {
    // console.log("params", params);
    this.refresh(params);
  }
  refresh(params: ICellRendererParams): boolean {
    this.data = params.data;
    return true;
  }
  setUser(data: RepoNode) {
    this.store.setUser(data);
  }
}
