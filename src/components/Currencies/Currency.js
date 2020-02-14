import React, { Component } from 'react';

export default class Currency extends Component {
    render() {
        const { options, onChangeValue } = this.props;
        return (
            <div key={options.id} className="form-check form-check-inline">
                <input onChange={onChangeValue} defaultChecked={options.required} className="form-check-input" type="radio" name="currency" id={options.id} value={options.label} />
                <label className="form-check-label" htmlFor={options.id}>{options.label}</label>
            </div>
        );
    }
}