import "./index.css";
import { useTranslation } from "react-i18next";

export default function Settings() {
  const { i18n, t } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="set-container">
      <h1 className="set">{t("Settings")}</h1>
      <div>
        <label className="label-text" htmlFor="language-select">
          {t("Language")} :
        </label>
        <select
          className="select-con"
          id="language-select"
          onChange={changeLanguage}
        >
          <option value="en">English</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="es">Spanish</option>
          <option value="ru">Russian</option>
          <option value="zh">Chinese</option>
        </select>
      </div>
    </div>
  );
}
