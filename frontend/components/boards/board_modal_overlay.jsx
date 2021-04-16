import React from 'react';
import CreateBoardFormContainer from './create_board_form_container';

export default class Modal extends React.Component {
    render() {
        if (this.props.createModal === "closed-modal") {
            return null;
        }
        return (
            <div className={this.props.createModal}>
                <CreateBoardFormContainer />
            </div>
        )
    }
}