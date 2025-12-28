import { useGetNewsWithAuthorsQuery } from "../features/news/NewsApi";
import NewsCard from "../Components/NewsCard";
import Skeleton from "../Components/Skeleton";
import { useTranslation } from "../i18n/useTranslation";

export default function NewsList() {
  const { data, isLoading, error } = useGetNewsWithAuthorsQuery();
  const { t } = useTranslation();

  if (error) {
    return (
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full">
            <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">
            {t('failedToLoadNews')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('pleaseCheckConnection')}
          </p>
          <button 
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            {t('retry')}
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      {/* Section header */}
      <div className="text-center space-y-2">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400">
          {t('todaysHighlights')}
        </p>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100">
          {t('latestNews')}
        </h1>
        <p className="max-w-2xl mx-auto text-sm sm:text-base text-gray-600 dark:text-gray-400">
          {t('stayUpdated')}
        </p>
      </div>

      {/* Skeletons / cards */}
      <div className="grid gap-7 sm:grid-cols-2 2xl:grid-cols-3">
        {isLoading
          ? Array.from({ length: 6 }).map((_, i) => <Skeleton key={i} />)
          : data?.map((newsItem) => <NewsCard key={newsItem.id} newsItem={newsItem} />)}
      </div>

      {data && data.length === 0 && !isLoading && (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">{t('noNewsFound')}</p>
        </div>
      )}
    </section>
  );
}

