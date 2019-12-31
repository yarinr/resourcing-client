import { Topic } from '../model/topics.model';
import { FakeCategories } from '../../category/mocks/category.mock';
export class FakeTopics {
  private fakeCategories = new FakeCategories();
  public topics: Topic[] = [
    {
      name: 'Java Script',
      icon: 'assets/icons/logo-javascript.svg',
      category: this.fakeCategories.categories[0]
    },
    {
      name: 'Python',
      icon: 'assets/icons/logo-python.svg',
      category: this.fakeCategories.categories[0]
    },
    {
      name: 'C++',
      icon: 'assets/icons/logo-c-plus-plus.svg',
      category: this.fakeCategories.categories[0]
    },
    {
      name: 'React',
      icon: 'assets/icons/logo-react.svg',
      category: this.fakeCategories.categories[0]
    },
    {
      name: 'Git',
      icon: 'assets/icons/logo-git.svg',
      category: this.fakeCategories.categories[0]
    },
    {
      name: 'C#',
      icon: 'assets/icons/logo-c-sharp.svg',
      category: this.fakeCategories.categories[0]
    },
    {
      name: 'Jenkins',
      icon: 'assets/icons/logo-jenkins.svg',
      category: this.fakeCategories.categories[1]
    },
    {
      name: 'Puppet',
      icon: 'assets/icons/logo-puppet.svg',
      category: this.fakeCategories.categories[1]
    },
    {
      name: 'Ansible',
      icon: 'assets/icons/logo-ansible.svg',
      category: this.fakeCategories.categories[1]
    }
  ];
}
