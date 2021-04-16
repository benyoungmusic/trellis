import React from 'react';
import mappedItems from './board_helper';
import CreateBoardModal from './create_board_modal';
import BoardItem from './board_item';


class BoardIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            createModal: "closed-modal",
            overlay: "no-overlay"
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

    }

    componentDidMount() {
        this.props.requestBoards(this.props.currentUserId);
    }

    showModal () {
        this.setState({
            createModal: "open-modal",
            overlay: "modal-grey-area"
        }, () => {
            document.addEventListener("click", this.closeMenu)
        })
    }

    hideModal () {
        this.setState({
            createModal: "closed-modal",
            overlay: "no-overlay"
        })
    }


    render() {
        const { boards } = this.props;
        return (
            <div>
                <ul className="board-list">
                    {
                        boards.map(board => (
                            <BoardItem
                                key={`board${board.id}`}
                                board={board} />
                            )
                        )
                    }
                    <div className="create-board-button" onClick={this.showModal}>
                        <h3 className="create-board-text">Create new board</h3>
                    </div>
                </ul>
                <div className="modal-container">
                    <CreateBoardModal createModal={this.state.createModal}/>
                </div>
                <div onClick={this.hideModal}  className={this.state.overlay}>
                    {/* <div className={this.state.createModal}>I'm a modal</div> */}
                </div>
            </div>
        )
    }
}

export default BoardIndex;
