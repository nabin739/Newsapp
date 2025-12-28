export default function Skeleton() {
  return (
    <div
      className="flex flex-col rounded-2xl bg-white/90 dark:bg-slate-900/80
                 border border-slate-100 dark:border-slate-800
                 shadow-md shadow-slate-200/70 dark:shadow-black/30
                 overflow-hidden animate-pulse"
    >
     
      <div className="h-48 w-full bg-slate-200 dark:bg-slate-700" />

    
      <div className="p-5 space-y-3">
        <div className="h-4 w-5/6 rounded-full bg-slate-200 dark:bg-slate-700" />
        <div className="h-4 w-full rounded-full bg-slate-200 dark:bg-slate-700" />
        <div className="h-4 w-4/5 rounded-full bg-slate-200 dark:bg-slate-700" />

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="h-3 w-24 rounded-full bg-slate-200 dark:bg-slate-700" />
          <div className="h-3 w-16 rounded-full bg-slate-200 dark:bg-slate-700" />
        </div>

        <div className="mt-4 h-4 w-24 rounded-full bg-slate-200 dark:bg-slate-700" />
      </div>
    </div>
  );
}
