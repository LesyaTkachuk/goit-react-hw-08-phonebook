import { connect } from "react-redux";
import { getThemeToggler } from "../../modules/theme/themeSelectors";
import { contactsSelectors, contactsOperations } from "../../modules/contacts";
import ContactList from "./ContactList";

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getVisibleContacts(state),
  isLoading: contactsSelectors.getLoading(state),
  isChecked: getThemeToggler(state),
});
const mapDispatchToProps = {
  getContacts: contactsOperations.getContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
