import React, { Component } from 'react';

export default class TimeSelector extends Component {

    render() {
        const { config, checked } = this.props;
        return (
            <div key={config.id}>
                <input onClick={checked} className="form-check-input" type="checkbox" id={config.id} value={config.value}/>
                <label htmlFor={config.id} className="form-check-label">
                    {config.label}
                </label>
            </div>
        );
    }
}
