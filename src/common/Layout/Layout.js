import React from "react";
import PropTypes from "prop-types";
import styles from "./Layout.module.scss";

function Layout({ children, isChecked }) {
  return (
    <div
      className={`${styles.layout} ${isChecked ? styles.dark : styles.light}`}
    >
      <div className={styles.container}> {children}</div>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  isChecked: PropTypes.bool.isRequired,
};

export default Layout;
