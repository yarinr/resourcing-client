export interface User {
  id: string;
  name: string;
  userName: string;
  mail: string;
  score: number;
  userLevel: userLevel;
}

export enum userLevel {
  ADMIN,
  USER
}
