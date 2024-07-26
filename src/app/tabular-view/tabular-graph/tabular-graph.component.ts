import { Location } from "@angular/common";
import { Component, inject, OnInit } from "@angular/core";
import * as d3 from "d3";
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

  private data = [
    { City: "Chennai", Stars: "166443" },
    { City: "Bangalore", Stars: "150793" },
    { City: "Mumbai", Stars: "62342" },
    { City: "Hydrabad", Stars: "27647" },
    { City: "Kolkata", Stars: "21471" },
  ];
  private svg: any;
  private margin = 50;
  private width = 750 - this.margin * 2;
  private height = 400 - this.margin * 2;

  constructor(private _location: Location) {}

  ngOnInit(): void {
    this.userData = this.store.user();
    this.createSvg();
    this.drawBars(this.data);
  }

  goToTablePage($event: Event): void {
    $event.preventDefault();
    this._location.back();
  }

  private createSvg(): void {
    this.svg = d3
      .select("figure#bar")
      .append("svg")
      .attr("width", this.width + this.margin * 2)
      .attr("height", this.height + this.margin * 2)
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }
  private drawBars(data: any[]): void {
    const x = d3
      .scaleBand()
      .range([0, this.width])
      .domain(data.map((d) => d.City))
      .padding(0.2);

    this.svg
      .append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    const y = d3.scaleLinear().domain([0, 200000]).range([this.height, 0]);

    this.svg.append("g").call(d3.axisLeft(y));

    this.svg
      .selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => x(d.City))
      .attr("y", (d: any) => y(d.Stars))
      .attr("width", x.bandwidth())
      .attr("height", (d: any) => this.height - y(d.Stars))
      .attr("fill", "#ff2200");
  }
}
