import React from 'react';

class CardIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const { cards } = this.props;
    console.log("card index props: ", this.props)
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