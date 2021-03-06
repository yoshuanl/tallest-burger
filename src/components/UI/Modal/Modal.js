import React, { Fragment, Component } from 'react';

import classes from './Modal.css';
import Backdrop from '../Backdrop/Backdrop';
    
class Modal extends Component {
    shouldComponentUpdate (nextProps, nextState) {
        // check children too for spinner show/not show
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
        // can't use code below, otherwise the modal won't hide
        // return !this.props.show & nextProps.show;
    }

    render () {
        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed}/>
                <div 
                    className={classes.Modal} 
                    style={{
                        transform: this.props.show ? 'translateY(0)': 'translateY(-100vh)',
                        opacity: this.props.show ? '1': '0'}}>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
};

export default Modal;