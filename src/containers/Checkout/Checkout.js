import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from '../Checkout/ContactData/ContactData';
    
class Checkout extends Component {
    checkoutCanceledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
        // replace or push are ways to change the page after some operations are completed
    }

    render () {
        console.log('in Checkout after willmount ingredients=', this.props.ings)
        return (
            <div>
                <CheckoutSummary 
                    ingredients={this.props.ings}
                    checkoutCanceled={this.checkoutCanceledHandler}
                    checkoutContinued={this.checkoutContinuedHandler}/>
                <Route 
                    path={this.props.match.path + '/contact-data'} 
                    // component={ContactData} // either use render or use component, otherwise render will be ignored
                    component={ContactData}/>
            </div>
        )
        
    }
}

const mapStateToProps = state => {
    return {
        ings: state.ingredients
    }
}
    
export default connect(mapStateToProps)(Checkout);