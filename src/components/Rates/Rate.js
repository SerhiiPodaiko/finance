import React, { Component } from 'react';

export default class Rate extends Component {
    render() {

        const { options } = this.props;

        console.log("option", options);

        return (
            <div className="d-flex justify-content-around">
                <span>{options.date}</span>
                <span>{options.rate}</span>
                <span>{options.amount}</span>
            </div>
        );
    }
}
