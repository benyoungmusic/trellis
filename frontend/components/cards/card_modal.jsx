import React from 'react';
import CardDetailsContainer from './card_details_container';

export default class Modal extends React.Component {
    render() {
        if (this.props.createModal === "closed-modal") {
            return null;
        }
        return (
            <div className={this.props.createModal}>
                {/* <CardDetailsContainer/> */}
            </div>
        )
    }
}