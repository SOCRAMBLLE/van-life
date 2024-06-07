import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation("homepage");
  return (
    <main className="homepage--container">
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <Link to="vans" className="homepage--button">
        <button>{t("button")}</button>
      </Link>
    </main>
  );
}
