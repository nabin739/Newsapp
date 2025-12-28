export interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface NewsItem extends Post {
  author?: User;
}

export interface PostsResponse {
  posts: Post[];
  users: User[];
  combinedData: NewsItem[];
}
