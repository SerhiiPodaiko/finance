import React, {Component} from 'react';

export default class Amount extends Component {
    render() {
        const { onChangeValue } = this.props;
        return (
            <div className="amount">
                <input
                    type="number"
                    onChange={onChangeValue}
                    placeholder="Enter the number" />
            </div>
        );
    }
}
