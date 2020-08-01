import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Layout from "../common/Layout/LayoutContainer";
import Appbar from "../common/Appbar/Appbar";
import Content from "./Content/Content";
import Notification from "../common/Notification";

const App = ({ error, onGetCurrentUser, onClearToken }) => {
  useEffect(() => {
    onGetCurrentUser();
  }, [onGetCurrentUser]);
  return (
    <Layout>
      <Appbar />
      <Content />
      {error && <Notification />}
    </Layout>
  );
};

App.propTypes = {
  error: PropTypes.string.isRequired,
  onGetCurrentUser: PropTypes.func.isRequired,
};

export default App;
