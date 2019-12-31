import { Category, CategoryName } from '../model/category.model';

export class FakeCategories {
  public categories: Category[] = [
    { name: CategoryName.programming, icon: '' },
    { name: CategoryName.devOps, icon: '' },
    { name: CategoryName.design, icon: '' }
  ];
}
