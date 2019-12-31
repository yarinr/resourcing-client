import { Component, OnInit } from '@angular/core';
import { CategoryName } from 'src/app/core/entities/category/model/category.model';

@Component({
  selector: 'app-programming-links-page',
  templateUrl: './programming-links-page.component.html',
  styleUrls: ['./programming-links-page.component.less']
})
export class ProgrammingLinksPageComponent implements OnInit {
  constructor() {}
  programmingCategories: CategoryName[] = [CategoryName.programming];
  title = 'Programming Topics';
  ngOnInit() {}
}
