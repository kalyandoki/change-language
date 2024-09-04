import "./index.css";
import { useTranslation } from "react-i18next";

export default function Sports() {
  const { t } = useTranslation();

  return (
    <div className="head">
      <div className="text-contain">
        <h1>{t("Sports")}</h1>
      </div>
      <img
        src="https://img.freepik.com/free-vector/gradient-national-sports-day-illustration_23-2148995776.jpg?ga=GA1.1.134497021.1695700831&semt=ais_hybrid"
        alt="Sports"
        className="image"
      />
    </div>
  );
}
