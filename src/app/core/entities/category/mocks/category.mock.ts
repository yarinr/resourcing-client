import { Category, CatageryName } from '../model/category.model';

export class FakeCategories {
  public categories: Category[] = [
    { name: CatageryName.programming, icon: '' },
    { name: CatageryName.devOps, icon: '' },
    { name: CatageryName.design, icon: '' }
  ];
}
