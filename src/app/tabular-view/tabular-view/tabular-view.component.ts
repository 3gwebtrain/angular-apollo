import { JsonPipe } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import { RepoStore } from "../../store/repo.store";
import { SharedModule } from "./../../shared/shared.module";

@Component({
  selector: "app-tabular-view",
  standalone: true,
  imports: [SharedModule, JsonPipe],
  templateUrl: "./tabular-view.component.html",
  styleUrl: "./tabular-view.component.scss",
})
export class TabularViewComponent implements OnInit {
  store = inject(RepoStore);

  ngOnInit(): void {
    this.loadData().then((r) => console.log("loaded", r));
  }
  async loadData(): Promise<void> {
    await this.store.loadAll();
  }
}
