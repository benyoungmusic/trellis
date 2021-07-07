import React from 'react';
import { Link } from 'react-router-dom';

class CardIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: []
    }

  }

  handleDeleteCard(card_id) {
    this.props.deleteCard(card_id)
  }

  handleDragEnd(e, card) {
    this.props.enddrag(e, card);
  }

  render() {
    let rawCards = this.state.cards.length ? this.state.cards : this.props.cards.filter(card => card.list_id === this.props.list_id);
    let cards = rawCards.sort((a, b) => (a.list_pos - b.list_pos))
    return (
      <div className="card-index-div">
        <ul className="card-list">
          {
            cards.map((card, index) => (
              <li onDragStart={(e) => this.props.startdrag(e, (card))}
                onDragEnter={(e) => this.props.enterdrag(e, card)}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => this.props.enddrag(e, card)}
                className="card-li"
                key={card.id}
                id={card.id}
                draggable>
                <div className="card-button-div">
                  <Link to={`/card/${card.id}`}
                    className="card-button">
                      <h3 className="card-button-title">{card.title}</h3>
                    </Link>
                  <button className="delete-card-button"
                  onClick={() => {this.handleDeleteCard(card.id)}}>X</button>
                </div>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }

}

export default CardIndex;