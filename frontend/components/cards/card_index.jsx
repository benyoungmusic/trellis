import React from 'react';

class CardIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let cards = this.props.cards.filter(card => card.list_id = this.props.list_id);
    console.log("card index cards: ", cards)

    return (
      <div className="card-index-div">
        <h3>{this.props.list_id}</h3>
        <ul className="card-list">
          {
            cards.map(card => (
              <li>
                <h3>{card.id}</h3>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }

}

export default CardIndex;