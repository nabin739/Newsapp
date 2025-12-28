import { useParams, Link } from "react-router-dom";
import { useGetPostByIdQuery } from "../features/news/NewsApi";
import { useTranslation } from "../i18n/useTranslation";

export default function PostDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useGetPostByIdQuery(Number(id));
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full">
            <svg className="w-8 h-8 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-red-600 dark:text-red-400">
            {t('articleNotFound')}
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            {t('articleDoesntExist')}
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <span aria-hidden="true">←</span>
            {t('backToNewsShort')}
          </Link>
        </div>
      </div>
    );
  }

  if (!data) return null;

  return (
    <article className="max-w-4xl mx-auto space-y-8">
      {/* Back link */}
      <div className="flex items-center justify-between gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-600
                     dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400"
        >
          <span aria-hidden="true">←</span>
          {t('backToNews')}
        </Link>
      </div>

      {/* Hero image */}
      <div className="overflow-hidden rounded-3xl border border-slate-100 dark:border-slate-800 shadow-md">
        <img
          src={`https://picsum.photos/seed/${data.id}/1200/600`}
          alt={data.title}
          className="h-64 w-full object-cover sm:h-80 md:h-96"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://via.placeholder.com/1200x600/3B82F6/FFFFFF?text=News+Image";
          }}
        />
      </div>

      {/* Article content */}
      <header className="space-y-3">
        <p className="text-xs uppercase tracking-[0.2em] text-blue-500 dark:text-blue-400">
          {t('featuredStory')}
        </p>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-slate-50">
          {data.title}
        </h1>
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {t('byAuthor')} {data.author?.name || t('unknownAuthor')}
          </span>
          <span className="h-1 w-1 rounded-full bg-slate-400" />
        </div>
      </header>

      <section className="prose prose-slate dark:prose-invert max-w-none text-lg leading-relaxed">
        <p>{data.body}</p>
        
        {data.author && (
          <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">{t('aboutAuthor')}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
              <strong>{data.author.name}</strong> (@{data.author.username})
              <br />
              {data.author.name} {t('thisContentGenerated')}
              <br />
              <a href={`mailto:${data.author.email}`} className="text-blue-600 dark:text-blue-400 hover:underline">{data.author.email}</a>
            </p>
          </div>
        )}
      </section>
    </article>
  );
}
