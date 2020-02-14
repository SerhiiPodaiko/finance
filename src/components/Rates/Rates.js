import React, { Component } from 'react';
import Rate from "./Rate";

export default class Rates extends Component {
    render() {

        const { rates } = this.props;
        if (!rates) {
            return null;
        }
        return (
            <div className="rates">
                {rates.map((option) => {
                    return <Rate key={option.key} options={option} />
                })}
            </div>
        );
    }
}