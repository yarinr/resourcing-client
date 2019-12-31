import { Topic } from '../model/topics.model';
import { FakeCategories } from '../../category/mocks/category.mock';
import { CategoryName } from '../../category/model/category.model';
export class FakeTopics {
  private fakeCategories = new FakeCategories();
  public topics: Topic[] = [
    {
      name: 'Java Script',
      icon: 'assets/icons/logo-javascript.svg',
      category: CategoryName.programming
    },
    {
      name: 'Python',
      icon: 'assets/icons/logo-python.svg',
      category: CategoryName.programming
    },
    {
      name: 'C++',
      icon: 'assets/icons/logo-c-plus-plus.svg',
      category: CategoryName.programming
    },
    {
      name: 'React',
      icon: 'assets/icons/logo-react.svg',
      category: CategoryName.programming
    },
    {
      name: 'Git',
      icon: 'assets/icons/logo-git.svg',
      category: CategoryName.programming
    },
    {
      name: 'C#',
      icon: 'assets/icons/logo-c-sharp.svg',
      category: CategoryName.programming
    },
    {
      name: 'Jenkins',
      icon: 'assets/icons/logo-jenkins.svg',
      category: CategoryName.devOps
    },
    {
      name: 'Puppet',
      icon: 'assets/icons/logo-puppet.svg',
      category: CategoryName.devOps
    },
    {
      name: 'Ansible',
      icon: 'assets/icons/logo-ansible.svg',
      category: CategoryName.devOps
    }
  ];
}
