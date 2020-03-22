export interface Category {
  name: CategoryName;
  icon;
}

export enum CategoryName {
  programming,
  devOps,
  design
}

export const defaultTags = ['video', 'book', 'beginners', 'advanced'];
