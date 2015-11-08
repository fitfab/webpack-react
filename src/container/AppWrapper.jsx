import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Content from './Content';
import * as actionCreators from './../actions/action-creators';

/**
 * mapStateToProps -- as the name says it.
 * match the state to props to be pased down
 * @param  {object} state the application state
 * @return {object} props for the component
 */
function mapStateToProps(state) {
  return {
    secureUser: state.secureUser,
    userArea: state.userArea,
    busy: state.busy,
    overlayActive: state.overlayActive,
    products: state.products,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(Content) 
