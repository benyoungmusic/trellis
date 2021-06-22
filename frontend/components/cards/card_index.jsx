import React from 'react';

class CardIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    console.log(this.props.cards)
    let cards = this.props.cards.filter(card => card.list_id === this.props.list_id);
    return (
      <div className="card-index-div">
        <ul className="card-list">
          {
            cards.map(card => (
              <li className="card-li" key={card.id}>
                <button className="card-button">{card.title}</button>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }

}

export default CardIndex;