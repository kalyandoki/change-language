import "./index.css";
import { useTranslation } from "react-i18next";

export default function TVShows() {
  const { t } = useTranslation();

  return (
    <div className="head">
      <div className="text-contain">
        <h1>{t("TVShows")}</h1>
      </div>
      <img
        src="https://img.freepik.com/free-vector/people-watching-news-report-home_23-2148559017.jpg?ga=GA1.1.134497021.1695700831&semt=ais_hybrid"
        alt="TVShows"
        className="image"
      />
    </div>
  );
}
