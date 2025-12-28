import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "./app/store";
import { TranslationProvider, useTranslation } from "./i18n/useTranslation";

import NewsList from "./pages/NewsList";
import PostDetails from "./pages/PostDetails";
import ThemeToggle from "./Components/ThemeToggle";
import LanguageToggle from "./Components/LanguageToggle";

function AppContent() {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const language = useSelector((state: RootState) => state.language.current);
  const { t } = useTranslation();

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 
      text-gray-900 dark:text-gray-100 
      transition-colors duration-300"
      dir={language === "ar" ? "rtl" : "ltr"}
    >
      <BrowserRouter>
       <div className="max-w-6xl xl:max-w-[1400px] mx-auto px-2 sm:px-4 py-6 ">

          
          <header className="flex justify-between items-center mb-6 ">
            <h1 className="text-2xl font-bold ">
              {t('newsApp')}
            </h1>
            <div className="flex gap-4">
              <LanguageToggle />
              <ThemeToggle /> 
            </div>
          </header>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<NewsList />} />
            <Route path="/post/:id" element={<PostDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default function App() {
  return (
    <TranslationProvider>
      <AppContent />
    </TranslationProvider>
  );
}
