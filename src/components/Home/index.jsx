import "./index.css";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="head">
      <div className="text-contain">
        <h1>{t("Home")}</h1>
      </div>
      <img
        src="https://img.freepik.com/free-vector/beautiful-home_24877-50819.jpg?ga=GA1.1.134497021.1695700831&semt=ais_hybrid"
        alt="Home"
        className="image"
      />
    </div>
  );
}
