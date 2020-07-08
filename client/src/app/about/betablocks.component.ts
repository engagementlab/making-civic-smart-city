import { Component, OnInit } from "@angular/core";
import * as Rellax from "rellax";
import * as ismobile from "ismobilejs";

import { DataService } from "../data.service";

@Component({
  selector: "app-betablocks",
  templateUrl: "./betablocks.component.html",
  styleUrls: ["./betablocks.component.scss"],
})
export class BetaBlocksComponent implements OnInit {
  public content: any;
  public links: any[];

  constructor(private _dataSvc: DataService) {
    this._dataSvc.getDataForUrl("about").subscribe((response) => {
      this.content = response[0];
      this.links = this.content["what"]["md"].split(",").map((t) => {
        return t.replace("[", "").replace(")", "").replace("#", "").split("](");
      });
    });
  }

  ngOnInit() {
    if (!ismobile.phone) new Rellax(".img");
  }
}
