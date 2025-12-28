import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { toggleTheme } from "../features/theme/ThemeSlice";
import { useTranslation } from "../i18n/useTranslation";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.mode);
  const { t } = useTranslation();

  return (
   <button
  onClick={() => dispatch(toggleTheme())}
  className="cursor-pointer px-4 py-2 rounded-md border text-sm font-medium
             bg-gray-200 text-gray-800
             dark:bg-gray-800 dark:text-gray-200
             transition-all duration-300"
>
  {theme === "dark" ? ` ${t('lightMode')}` : ` ${t('darkMode')}`}
</button>
  );
};

export default ThemeToggle;
