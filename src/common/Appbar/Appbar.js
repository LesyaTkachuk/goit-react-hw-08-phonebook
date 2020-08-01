import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import PropTypes from "prop-types";
import styles from "./Appbar.module.scss";
import UserMenu from "../../components/UserMenu/UserMenu";
import ThemeToggler from "../../components/ThemeToggler/ThemeTogglerContainer";
import AuthNav from "../../components/AuthNav/AuthNav";
import withAuth from "../../components/hoc/withAuth";

function Appbar({ isAuthenticated }) {
  return (
    <header className={styles.header}>
      <Navigation />
      <ThemeToggler />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}

Appbar.propTypes = {
  isAuthenticated: PropTypes.string,
};

export default withAuth(Appbar);
