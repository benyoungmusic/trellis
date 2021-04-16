import React from 'react';

class CreateBoardForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.board;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    update() {
        return (e) => {
            this.setState({ title: e.currentTarget.value })
        }
    }

    handleSubmit() {
        this.props.submitBoard(this.state);
    }

    render() {
        return (
            <form>
                <div className="board-title-input">
                    <input className="board-title-textbox" type="text"
                    placeholder="Add board title"
                    onChange={this.update()}/>
                </div>
                <button className="create-board-submit" onClick={this.handleSubmit}>Create board</button>
            </form>
        )
    }
}

export default CreateBoardForm;