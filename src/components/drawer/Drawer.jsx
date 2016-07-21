import React from 'react';
import classNames from 'classNames';

require('./Drawer.scss');

/**
 * Drawer class.
 * @class Drawer
 * @augments React.Component
 */
const Drawer = React.createClass(/** @lends Drawer.prototype */{
    /**
     * @property {String} displayName - A string used in debugging messages.
     */
    displayName: 'Drawer',

    /**
     * @property {Object} propTypes - An object used to validate props being passed into the components
     */
    propTypes: {
        children: React.PropTypes.node,
        customClass: React.PropTypes.string,
        isOpen: React.PropTypes.bool,
        onRequestClose: React.PropTypes.func,
        position: React.PropTypes.string,
        size: React.PropTypes.string
    },

    /**
     * Returns the default values for props in the component.
     * @method getDefaultProps
     * @return {Object}
     */
    getDefaultProps() {
        return {
            customClass: 'drawer__close',
            iconName: 'close',
            isOpen: true,
            position: 'right',
            size: '320'
        };
    },

    handleClick(event) {
        event.preventDefault();
        this.props.onRequestClose();
    },

    getClassSet() {
        return classNames('transit', 'drawer', `drawer--${this.props.position}`);
    },

    getDynamicStyle() {
        const offSet = this.props.isOpen ? 0 : -this.props.size;
        const size = this.props.position === 'left' || this.props.position === 'right' ?
            'width' : 'height';
        return {
            [size]: `${this.props.size}px`,
            [this.props.position]: `${offSet}px`
        };
    },

    /**
     * Renders the component based on the properties passed in from a parent
     * component and the component's state.
     * @method render
     * @return {ReactElement}
     */
    render() {
        return (
            <div
                className={this.getClassSet()}
                style={this.getDynamicStyle()}>
                <span
                    role="buttom"
                    aria-hidden="true"
                    className={this.props.customClass}
                    onClick={this.handleClick}></span>
                {this.props.children}
            </div>
        );
    }
});

export default Drawer;
