import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatDividerModule, MatIconModule],
  exports: [CommonModule, MatButtonModule, MatDividerModule, MatIconModule],
})
export class SharedModule {}
