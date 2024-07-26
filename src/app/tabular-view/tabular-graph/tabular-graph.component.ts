import { Component, inject, OnInit } from "@angular/core";
import { RepoNode } from "../../interfaces/repo.inter";
import { RepoStore } from "../../store/repo.store";

@Component({
  selector: "app-tabular-graph",
  standalone: true,
  imports: [],
  templateUrl: "./tabular-graph.component.html",
  styleUrl: "./tabular-graph.component.scss",
})
export class TabularGraphComponent implements OnInit {
  store = inject(RepoStore);
  userData: RepoNode = { nameWithOwner: "", stars: 4 };

  ngOnInit(): void {
    this.userData = this.store.user();
  }
}
