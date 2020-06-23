import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import * as PDFObject from "pdfobject";

@Component({
  selector: "app-file",
  templateUrl: "./file.component.html",
  styleUrls: ["./file.component.scss"],
})
export class FileComponent implements OnInit {
  public fileLabel: string;
  public filePath: string;

  private files: object = new Object({
    study: ["Beta Blocks case study report", "study"],
    game: ["Beta Blocks: The Game", "game-printable"],
    intake: ["Technology Partner Intake Form", "intake"],
    criteria: ["Technology Acceptance Criteria Template", "criteria"],
    curriculum: ["Tech Explorers Youth Curriculum", "curriculum"],
    policy: ["Example Community Data Policy", "policy"],
  });

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.fileLabel = this.files[params["key"]][0];
      this.filePath = this.files[params["key"]][1];

      const pdf = PDFObject.embed(
        `https://betablocks.blob.core.windows.net/files/${this.filePath}.pdf`,
        "#embed"
      );
      console.log(pdf);
    });
  }
}
