export class AppGqlConfig implements AppGqlConfig {
  static SERVER_URL = 'http://localhost:3000/graphql';
  static headers = { userId: '1' };
}

export interface AppGqlConfig {
  SERVER_URL: string;
  headers: { [header: string]: string | string[] };
}
