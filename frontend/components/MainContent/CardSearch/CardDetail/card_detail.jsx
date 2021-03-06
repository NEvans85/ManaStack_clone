import React from "react";

class CardDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selectedCard = this.props.selectedCard;
    if (!selectedCard) {
      return <div className="card-details search-component" />;
    }
    Object.keys(selectedCard).forEach(key => {
      if (selectedCard[key] == null) {
        delete selectedCard[key];
      }
    });
    delete selectedCard["id"];
    delete selectedCard["image_url"];
    selectedCard["printings"] = selectedCard["printings"].join(", ");
    selectedCard["colors"] = selectedCard["colors"].join(", ");
    return (
      <div className="card-details search-component">
        <h2>Card Details</h2>
        <ul>
          {Object.keys(selectedCard).map(attr => {
            return (
              <li key={attr}>
                {this.capitalize(attr)} : {selectedCard[attr]}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
  capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
}

export default CardDetail;
