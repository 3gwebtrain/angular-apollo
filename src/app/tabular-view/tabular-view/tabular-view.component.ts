import { JsonPipe } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AgGridAngular } from "ag-grid-angular";
import { ColDef } from "ag-grid-community";
import { RepoNode } from "../../interfaces/repo.inter";
import { RepoStore } from "../../store/repo.store";
import { SharedModule } from "./../../shared/shared.module";
import { TabularButtonComponent } from "./button-view.component";

@Component({
  selector: "app-tabular-view",
  standalone: true,
  imports: [SharedModule, JsonPipe, AgGridAngular, RouterModule],
  templateUrl: "./tabular-view.component.html",
  styleUrl: "./tabular-view.component.scss",
})
export class TabularViewComponent implements OnInit {
  store = inject(RepoStore);

  rowData: RepoNode[] = [];

  colDefs: ColDef[] = [];

  ngOnInit(): void {
    this.loadData().then(() => this.populateTable());
  }
  async loadData(): Promise<void> {
    await this.store.loadAll();
  }

  populateTable(): void {
    this.rowData = this.store.nodes();
    this.colDefs = [
      { field: "nameWithOwner", flex: 1 },
      { field: "stars", flex: 1, cellRenderer: TabularButtonComponent },
    ];
  }
}
