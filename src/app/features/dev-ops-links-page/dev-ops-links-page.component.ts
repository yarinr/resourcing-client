import { Component, OnInit } from '@angular/core';
import { CategoryName } from 'src/app/core/entities/category/model/category.model';

@Component({
  selector: 'app-dev-ops-links-page',
  templateUrl: './dev-ops-links-page.component.html',
  styleUrls: ['./dev-ops-links-page.component.less']
})
export class DevOpsLinksPageComponent implements OnInit {
  constructor() {}
  devOpsCategories: CategoryName[] = [CategoryName.devOps];
  title = 'DevOps Topics';
  ngOnInit() {}
}
