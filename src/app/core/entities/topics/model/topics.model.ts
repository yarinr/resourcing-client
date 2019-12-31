import { CategoryName } from '../../category/model/category.model';

export interface Topic {
  name: string;
  icon: string;
  category: CategoryName;
}
