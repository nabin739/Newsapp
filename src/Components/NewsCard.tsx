import { Link } from "react-router-dom";
import type { NewsItem } from "../features/news/types";
import { useTranslation } from "../i18n/useTranslation";

export default function NewsCard({ newsItem }: { newsItem: NewsItem }) {
  const { t } = useTranslation();
  const fallbackImage = "https://via.placeholder.com/600x400/3B82F6/FFFFFF?text=News+Image";

  return (
    <article
      className="group flex flex-col bg-white/90 dark:bg-slate-900/80
                 rounded-2xl shadow-md shadow-slate-200/70 dark:shadow-black/30
                 overflow-hidden border border-slate-100 dark:border-slate-800
                 transition-transform transition-shadow duration-300
                 hover:-translate-y-1 hover:shadow-xl"
    >
      
      <div className="relative overflow-hidden">
        <img
          src={`https://picsum.photos/seed/${newsItem.id}/600/400`}
          alt={newsItem.title}
          className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src !== fallbackImage) {
              target.src = fallbackImage;
            }
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

     
      <div className="flex flex-1 flex-col p-5 gap-3">
        <h2
          className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-50
                     line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400"
        >
          {newsItem.title}
        </h2>

        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300 line-clamp-3">
          {newsItem.body}
        </p>

      
        <div className="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            {t('byAuthor')} {newsItem.author?.name || t('unknownAuthor')}
          </span>
        </div>

        <Link
          to={`/post/${newsItem.id}`}
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold
                     text-blue-600 dark:text-blue-400
                     hover:text-blue-700 dark:hover:text-blue-300
                     group-hover:translate-x-0.5 transition-all"
        >
          {t('readMore')}
          <span aria-hidden="true" className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
