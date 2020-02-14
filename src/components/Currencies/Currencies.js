import React, { Component } from 'react';
import Currency from "./Currency";
import Config from "../../config/Config";

export default class Currencies extends Component {

    render() {

        const { onChangeValue } = this.props;
        return (
            <div className="currency">
                {Config.getConfigCurrency()
                    .map((option, index) =>
                        <Currency key={index} options={option} onChangeValue={onChangeValue}/>
                    )}
            </div>
        );
    }
}
