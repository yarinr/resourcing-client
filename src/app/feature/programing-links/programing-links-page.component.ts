import { Component, OnInit } from '@angular/core';
import { FakeCategories } from 'src/app/core/entities/category/mocks/category.mock';
import {
  Category,
  CatageryName
} from 'src/app/core/entities/category/model/category.model';

@Component({
  selector: 'app-programing-links-page',
  templateUrl: './programing-links-page.component.html',
  styleUrls: ['./programing-links-page.component.less']
})
export class ProgramingLinksPageComponent implements OnInit {
  constructor() {}
  programingCategories: Category[] = new FakeCategories().categories.filter(
    categiry => categiry.name === CatageryName.programming
  );
  title = 'Programming Topics';
  ngOnInit() {}
}
