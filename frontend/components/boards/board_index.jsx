import React from 'react';
import mappedItems from './board_helper';
import CreateBoardModal from './create_board_modal';
import BoardItem from './board_item';


class BoardIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            createModal: "closed-modal"
        }
        this.showModal = this.showModal.bind(this);
        this.hideModal = this.hideModal.bind(this);

    }

    componentDidMount() {
        this.props.requestBoards(this.props.currentUserId);
    }

    showModal () {
        this.setState({
            createModal: "open-modal"
        }, () => {
            document.addEventListener("click", this.closeMenu)
        })
    }

    hideModal () {
        this.setState({
            createModal: "closed-modal"
        })
    }


    render() {
        const { boards } = this.props;
        return (
            <div>
                <ul>
                    {
                        boards.map(board => (
                            <BoardItem
                                key={`board${board.id}`}
                                board={board} />
                            )
                        )
                    }
                </ul>
                <div onClick={this.showModal}>Create new board
                    <CreateBoardModal createModal={this.state.createModal}/>
                </div>
                <div onClick={this.hideModal}  className="modal-grey-area">
                    {/* <div className={this.state.createModal}>I'm a modal</div> */}
                </div>
            </div>
        )
    }
}

export default BoardIndex;
