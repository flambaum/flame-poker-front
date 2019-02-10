import React, { Component } from 'react';

export class Button extends Component {
    render() {
        const { seat } = this.props;

        return (
            <div className={`button button-${seat}`} >D</div>
        )
    }
}