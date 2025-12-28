import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "../features/news/NewsApi";
import themeReducer from "../features/theme/ThemeSlice";
import languageReducer from "../features/languages/LanguageSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
    [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
