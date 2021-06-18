import React from 'react';


class CreateListForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.list;
        this.state.board_id = this.props.boardId
        this.state.board_pos = this.props.boardPos + 1
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
        console.log("createlistform state", this.state)
    }

    // componentDidMount() {
    //     this.props.requestLists(this.state.boardId);
    // }

    update() {
        return (e) => {
            this.setState({ title: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.state.board_pos = Object.keys(this.props.lists).length + 1
        this.props.submitList(this.state);
        this.setState({ title: '' })
        document.getElementById("list-title-field").focus()
    }

    render() {
        const { lists } = this.props;
        return (
            <form className="create-list-form">
                <div className="list-title-input">
                    <input type="text"
                        id="list-title-field"
                        value={this.state.title}
                        className="list-title-input"
                        placeholder="Add list title"
                        onChange={this.update()} />
                </div>
                <button className="create-list-button" onClick={this.handleSubmit}>
                    <h3 className="create-list-button-name">Add list</h3>
                </button>
            </form>
        )
    }


}

export default CreateListForm;