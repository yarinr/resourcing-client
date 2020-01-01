import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CategoryName } from 'src/app/core/entities/category/model/category.model';
import { FakeCategories } from 'src/app/core/entities/category/mocks/category.mock';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit {
  constructor() {}
  allCategories: CategoryName[] = new FakeCategories().categories.map(
    category => category.name
  );
  title = 'Home Page';
  ngOnInit() {}
}
