import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './../../actions/action-creators';
import * as networkActionCreators from './../../actions/NetworkActionCreators';

require('./Login.scss');

export const Login = React.createClass({
    displayName: 'Login',

    propTypes: {
        secureUser: PropTypes.bool,
        networkActions: React.PropTypes.shape({
            registerUser: PropTypes.func.isRequired
        }),
        uiActions: PropTypes.object,
        user: PropTypes.object

    },

    getInitialState() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            username: ''
        };
    },

    handleChange(event) {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    },

    handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.value)
        this.props.uiActions.toggleUser();
        //this.props.networkActions.registerUser(this.state)
    },

    showForm() {

        return (
            <div>
                <h3 className="welcome-msg">Login / Register</h3>
                <form className="login-form active">

                    <fieldset>
                        <input
                            name="username"
                            type="text"
                            placeholder="username"
                            value={this.state.username}
                            onChange={this.handleChange} />
                    </fieldset>

                    <fieldset>
                        <input
                            name="firstName"
                            type="text"
                            placeholder="First Name"
                            value={this.state.firstName}
                            onChange={this.handleChange} />
                    </fieldset>

                    <fieldset>
                        <input
                            name="lastName"
                            type="text"
                            placeholder="Last Name"
                            value={this.state.lastName}
                            onChange={this.handleChange} />
                    </fieldset>

                    <fieldset>
                        <input
                            name="email"
                            type="text"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.handleChange} />
                    </fieldset>

                    <fieldset>
                        <input
                            name="password"
                            type="password"
                            placeholder="password"
                            value={this.state.password}
                            onChange={this.handleChange} />
                    </fieldset>

                    <fieldset>
                        <button type="submit" className="transit" value="login" onClick={this.handleSubmit}>Login</button>
                        <button type="submit" className="transit" value="register" onClick={this.handleSubmit}>Register</button>
                    </fieldset>
                </form>
            </div>
        );
    },

    render() {
        const { secureUser } = this.props;

        return (
            secureUser ? null : this.showForm()
        );
    }
});

/**
 * Redux part, which includes:
 * mapStateToProps function,
 * mapDispatchToProps function
 * and finally exports the connect component
 */

/**
 * mapStateToProps -- as the name says it.
 * map the given state to props to be pased down
 * @param  {object} state
 * @return {object} props for the component
 */
function mapStateToProps(state) {
    return {
        secureUser: state.UIState.secureUser,
        userArea: state.UIState.userArea,
        busy: state.UIState.busy || state.Network.busy,
        overlayActive: state.UIState.overlayActive,
        products: state.Network.products,
        user: state.UIState.user
    };
}

/**
 * The only use case for bindActionCreators is when
 * you want to pass some action creators down to a
 * component that isn’t aware of Redux,
 * and you don’t want to pass dispatch or
 * the Redux store to it.
 *
 * @param  {function} dispatch
 * @return {object}   An object mimicking the original
 * object, but with each function immediately dispatching
 * the action returned by the corresponding action creator.
 * If you passed a function as actionCreators,
 * the return value will also be a single function.
 *
 * http://rackt.org/redux/docs/api/bindActionCreators.html
 */
function mapDispatchToProps(dispatch) {

    /**
     * The only use case for bindActionCreators is when
     * you want to pass some action creators down to a
     * component that isn’t aware of Redux,
     * and you don’t want to pass dispatch or
     * the Redux store to it.
     */
    return {
        uiActions: bindActionCreators(actionCreators, dispatch),
        networkActions: bindActionCreators(networkActionCreators, dispatch)
    };
}

/**
 * Connects a React component(Login) to a Redux store.
 * Returns a React component class that injects state and
 * action creators into the component.
 *
 * https://github.com/rackt/react-redux/blob/master/docs/api.md
 */
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
