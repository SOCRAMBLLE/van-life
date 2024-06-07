import { NavLink } from "react-router-dom";
import LoginIcon from "../assets/images/avatar-icon.png";
import { useContext } from "react";
import { AuthContext } from "../lib/auth";
import LanguageSwitcher from "./languageSwitcher";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { user } = useContext(AuthContext);
  const { t } = useTranslation("navbar");

  return (
    <nav>
      <div className="nav--brand">
        <NavLink to="/">#VANLIFE</NavLink>
      </div>
      <div className="nav--pages">
        {user && (
          <NavLink
            to="/host"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {t("host")}
          </NavLink>
        )}
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {t("about")}
        </NavLink>
        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {t("Vans")}
        </NavLink>
        <NavLink
          to="/login"
          className={`nav--login ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <img src={LoginIcon} />
        </NavLink>
        <LanguageSwitcher />
      </div>
    </nav>
  );
}
