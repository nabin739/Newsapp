import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../app/store";
import { setLanguage } from "../features/languages/LanguageSlice";
import { useTranslation } from "../i18n/useTranslation";

const LanguageToggle = () => {
  const dispatch = useDispatch();
  const language = useSelector((state: RootState) => state.language.current);
  const { t } = useTranslation();

  return (
    <button
      onClick={() =>
        dispatch(setLanguage(language === "en" ? "ar" : "en"))
      }
      className="cursor-pointer px-4 py-2 rounded-md border text-sm font-medium
             bg-gray-200 text-gray-800
             dark:bg-gray-800 dark:text-gray-200
             transition-all duration-300"
    >
      {language === "en" ? `AR 🇸🇦` : `EN 🇺🇸`}
    </button>
  );
};

export default LanguageToggle;
