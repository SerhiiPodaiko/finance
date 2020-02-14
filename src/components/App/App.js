import React, { Component } from 'react';

import Currencies from "../Currencies/Currencies";
import Amount from "../Amount";
import TimeSelectors from "../TimeSelectors";
import Rates from "../Rates/Rates";
import RateService from "../../services/RateService";


export default class App extends Component {
    constructor() {
        super();
        this.rateService = new RateService();
        this.onChecked = this.onChecked.bind(this);
        this.rates = [];
        this.state = {
            currency: 'USD',
            amount: 0,
            rates: this.rates
        }
    }

    onCurrencyChange = event => {
        this.setState({currency: event.target.value});
        debugger
        this.updateRate();
    };
    onAmountChange = event => {
        this.setState({amount: event.target.value});
        // this.updateRate();
    };

    updateRate = () => {
        setTimeout(() => {
            this.rates.forEach(rate => {
                this.removeRate(rate.key);
                this.addRate(rate.key);
            })
        }, 0);
    };

    onChecked = (event) => {
        const date = event.target.value;
        if (event.target.checked) {
            this.addRate(date)
        } else {
            this.removeRate(date);
        }
    };

    addRate = (date) => {
        this.rateService.getRateForDate(date, this.state.currency)
            .then(items => {
                if (Array.isArray(items) && items.length === 1) {
                    this.renderResponse(items[0], date);
                }
            });
    };

    renderResponse = (item, key) => {
        const rate = this.calcRate(item, key);
        this.rates.push(rate);
        this.setState({rates: this.rates});
    };

    removeRate = (date) => {
        debugger
        this.rates = this.rates.filter(item => !(item.key === date));
        this.setState({rates: this.rates});
    };

    calcRate = (item, key) => {
        const date = item.exchangedate;
        const rate = item.rate;
        const amount = (rate * this.state.amount).toFixed(2);
        return {key, rate, date, amount};
    };


    render() {
        const data = this.state.rates;
        return (
            <div className="app-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <form>
                                <div className="form-group d-flex justify-content-between">
                                    <Currencies onChangeValue={this.onCurrencyChange}/>
                                    <Amount onChangeValue={this.onAmountChange}/>
                                </div>
                                <div className="form-group d-flex mt-5 justify-content-between">
                                    <TimeSelectors checked={this.onChecked}/>
                                    <Rates rates={data}/>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}