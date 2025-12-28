import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { Post, User, NewsItem } from "./types";

export const newsApi = createApi({
  reducerPath: "newsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
    }),
    getUsers: builder.query<User[], void>({
      query: () => "users",
    }),
    getNewsWithAuthors: builder.query<NewsItem[], void>({
      queryFn: async (arg, api, extraOptions, baseQuery) => {
        try {
          const [postsResult, usersResult] = await Promise.all([
            baseQuery({ url: "posts" }),
            baseQuery({ url: "users" }),
          ]);

          if (postsResult.error) {
            return { error: postsResult.error };
          }
          if (usersResult.error) {
            return { error: usersResult.error };
          }

          const posts = postsResult.data as Post[];
          const users = usersResult.data as User[];

          const combinedData: NewsItem[] = posts.map(post => ({
            ...post,
            author: users.find(user => user.id === post.userId),
          }));

          return { data: combinedData };
        } catch (error) {
          return { error: { status: 'FETCH_ERROR', error: String(error) } };
        }
      },
    }),
    getPostById: builder.query<NewsItem, number>({
      queryFn: async (id, api, extraOptions, baseQuery) => {
        try {
          const [postResult, usersResult] = await Promise.all([
            baseQuery({ url: `posts/${id}` }),
            baseQuery({ url: "users" }),
          ]);

          if (postResult.error) {
            return { error: postResult.error };
          }
          if (usersResult.error) {
            return { error: usersResult.error };
          }

          const post = postResult.data as Post;
          const users = usersResult.data as User[];

          const combinedData: NewsItem = {
            ...post,
            author: users.find(user => user.id === post.userId),
          };

          return { data: combinedData };
        } catch (error) {
          return { error: { status: 'FETCH_ERROR', error: String(error) } };
        }
      },
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetUsersQuery,
  useGetNewsWithAuthorsQuery,
  useGetPostByIdQuery,
} = newsApi;
