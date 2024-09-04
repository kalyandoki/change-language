import "./index.css";
import { useTranslation } from "react-i18next";

export default function Movies() {
  const { t } = useTranslation();

  return (
    <div className="head">
      <div className="text-contain">
        <h1>{t("Movies")}</h1>
      </div>
      <img
        src="https://img.freepik.com/free-photo/reel-that-has-red-tin-that-says-word-it_1340-23312.jpg?ga=GA1.1.134497021.1695700831&semt=ais_hybrid"
        alt="Movies"
        className="image"
      />
    </div>
  );
}
