import { Component } from "@angular/core";
import { SharedModule } from "./../../shared/shared.module";

@Component({
  selector: "app-tabular-view",
  standalone: true,
  imports: [SharedModule],
  templateUrl: "./tabular-view.component.html",
  styleUrl: "./tabular-view.component.scss",
})
export class TabularViewComponent {}
