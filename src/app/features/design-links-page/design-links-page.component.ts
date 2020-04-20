import { Component, OnInit } from "@angular/core";
import { CategoryName } from "src/app/core/entities/category/model/category.model";

@Component({
  selector: "app-design-links-page",
  templateUrl: "./design-links-page.component.html",
  styleUrls: ["./design-links-page.component.less"]
})
export class DesignLinksPageComponent implements OnInit {
  constructor() {}
  devOpsCategories: CategoryName[] = [CategoryName.design];
  title = "Design Topics";
  ngOnInit() {}
}
