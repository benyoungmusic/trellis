import React from 'react';
import ListIndexContainer from '../lists/list_index_container';
import { Link } from 'react-router-dom';


class CardDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: this.props.cards,
      description: "",
      detailsForm: "closed"
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.DBoxSubmit = this.DBoxSubmit.bind(this);
  }

  update() {
    return (e) => {
      this.setState({ description: e.currentTarget.value })
    }
  }

  handleSubmit() {
    const cardId = this.props.match.params.cardId;
    const card = this.props.cards[cardId];
    card.description = this.state.description;
    this.props.updateCard(card)
    this.setState({ detailsForm: "closed" })
  }

  componentDidMount() {
    this.props.requestCard(this.props.match.params.cardId)
      .then(() => {this.setState()})
  }

  DBoxSubmit() {
    this.setState({ description: "Add a more detailed description...", detailsForm: "open" })
  }

  descriptionBox() {
    const cardId = this.props.match.params.cardId
    const card = this.props.cards[cardId]
    const placeholder = card.description ? card.description : "Add a more detailed description..."
    if (this.state.detailsForm === "closed") {
      return (
        <button className="open-description-form-button" onClick={this.DBoxSubmit}>
          {placeholder}
        </button>
      )
    } else {
      return (
        <form className="card-details-form">
          <input type="text" className="card-description-textbox"
          placeholder={placeholder}
          onChange={this.update()}/>
          <button className="card-description-submit"
          onClick={this.handleSubmit}>Save</button>
        </form>
      )
    }
  }

  cardDetailsRender() {
    if (Object.keys(this.props.cards).length === 0) {
      return null
    } else {
      const cardId = this.props.match.params.cardId
      const card = this.props.cards[cardId]
      const placeholder = card.description ? card.description : "Add a more detailed description..."
      console.log("card :", card)
      return (
        <div className="card-details-div">
          <ListIndexContainer
          boardId={card.board_id}/>
          <div className="card-detail-container">
            <div className="card-details">
              <h3 className="card-details-title">{card.title}</h3>
              <h3 className="card-details-description-header">Description</h3>
              {this.descriptionBox()}
            </div>
          </div>
          <Link to={`/board/${card.board_id}`} className="modal-grey-area">
          </Link>
        </div>
      )
    }
  }

  render() {
    return this.cardDetailsRender();
  }
}

export default CardDetails