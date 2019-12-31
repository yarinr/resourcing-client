import { Topic } from '../model/topics.model';
import { FakeCategories } from '../../category/mocks/category.mock';
export class FakeTopics {
  private fakeCategories = new FakeCategories();
  public topics: Topic[] = [
    {
      name: 'Java Script',
      icon: 'assets/icons/logo-javascript.svg',
      category: this.fakeCategories.categories[1]
    },
    {
      name: 'Python',
      icon: 'assets/icons/logo-python.svg',
      category: this.fakeCategories.categories[1]
    },
    {
      name: 'C++',
      icon: 'assets/icons/logo-c-plus-plus.svg',
      category: this.fakeCategories.categories[1]
    },
    {
      name: 'React',
      icon: 'assets/icons/logo-react.svg',
      category: this.fakeCategories.categories[1]
    },
    {
      name: 'Git',
      icon: 'assets/icons/logo-git.svg',
      category: this.fakeCategories.categories[1]
    },
    {
      name: 'C#',
      icon: 'assets/icons/logo-c-sharp.svg',
      category: this.fakeCategories.categories[1]
    }
  ];
}
