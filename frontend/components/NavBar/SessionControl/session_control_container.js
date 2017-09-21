import { connect } from "react-redux";
import SessionControl from "./session_control";
import { logout } from "../../../actions/session_actions";

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    loggedIn: !!state.session.currentUser
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionControl);
