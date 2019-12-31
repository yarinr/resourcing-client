import { Component, OnInit } from '@angular/core';
import { FakeTopics } from 'src/app/core/entities/topics/mocks/topics.mocks';
import { Topic } from 'src/app/core/entities/topics/model/topics.model';
import { Category } from 'src/app/core/entities/category/model/category.model';
import { FakeCategories } from 'src/app/core/entities/category/mocks/category.mock';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less']
})
export class HomePageComponent implements OnInit {
  constructor() {}
  allCategories: Category[] = new FakeCategories().categories;
  title = 'Home Page';
  ngOnInit() {}
}
