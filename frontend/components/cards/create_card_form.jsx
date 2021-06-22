import React from 'react';

class CreateCardForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.card.title,
      author_id: this.props.card.author_id,
      board_id: this.props.board_id,
      list_id: this.props.list_id,
      card_pos: this.props.cards.length + 1
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update() {
    return (e) => {
      this.setState({ title: e.currentTarget.value })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    let prevCardPos = this.state.card_pos;
    this.props.submitCard(this.state);
    this.setState({ title: '', card_pos: (prevCardPos + 1) });
    document.getElementById("card-title-field").focus()
  }

  render() {
    return (
      <form className="create-card-form">
        <div className="card-title-input">
          <input type="text"
            id="card-title-field"
            value={this.state.title}
            className="card-title-input"
            placeholder="Enter a title for this card..."
            onChange={this.update()}/>
        </div>
        <button className="create-card-button">
          <h3 className="create-card-button-title">Add card</h3>
        </button>
      </form>
    )
  }

}

export default CreateCardForm;