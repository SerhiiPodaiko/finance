import React, { Component } from 'react';
import TimeSelector from "./TimeSelector";
import Config from "../../config/Config";

export default class TimeSelectors extends Component {

    render() {
        const { checked } = this.props;
        return (
            <div className="form-check timeSelectors">
                {Config.getConfigTimeSelection()
                    .map((config, index) =>
                    <TimeSelector checked={checked} key={index} config={config}/>
                )}
            </div>
        );
    }
}