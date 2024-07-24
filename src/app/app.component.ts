import { Component, inject, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { GitServiceService } from "./services/git-service.service";
@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
  gitService = inject(GitServiceService);
  ngOnInit(): void {
    console.log("Hellow there");
    this.gitService.watch().valueChanges.subscribe((data) => console.log("data", data));
  }
}
