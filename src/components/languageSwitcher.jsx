import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <select onChange={changeLanguage} defaultValue="en">
      <option value="en">EN</option>
      <option value="pt">PT</option>
      <option value="fr">FR</option>
      <option value="de">DE</option>
      <option value="it">IT</option>
    </select>
  );
};

export default LanguageSwitcher;
