import "./index.css";
import { useTranslation } from "react-i18next";

export default function Live() {
  const { t } = useTranslation();

  return (
    <div className="head">
      <div className="text-contain">
        <h1>{t("Live")}</h1>
      </div>
      <img
        src="https://img.freepik.com/free-vector/instagram-video-streaming-concept-illustration_114360-1766.jpg?size=626&ext=jpg&ga=GA1.1.134497021.1695700831&semt=ais_hybrid"
        alt="Live"
        className="image"
      />
    </div>
  );
}
