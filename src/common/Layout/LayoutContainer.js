import { connect } from "react-redux";
import { getThemeToggler } from "../../modules/theme/themeSelectors";
import Layout from "./Layout";

const mapStateToProps = (state) => ({
  isChecked: getThemeToggler(state),
});

export default connect(mapStateToProps)(Layout);
