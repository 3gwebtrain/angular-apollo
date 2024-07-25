import { Component, inject, OnInit, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { GitService } from "./services/git-service";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  gitService = inject(GitService);
  repos = signal(["aaa", "bb"]);
  ngOnInit(): void {
    // this.gitService.loadAllRepositories().pipe(map(({ data }: any) => this.repos.set(data)));
  }
}
