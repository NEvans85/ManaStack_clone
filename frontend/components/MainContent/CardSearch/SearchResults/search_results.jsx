import React from "react";
import { findKey } from "lodash";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.handleResultClick = this.handleResultClick.bind(this);
  }

  render() {
    const cards = this.props.cards;
    const names = Object.keys(cards).map(key => cards[key].name);
    const uniqNames = Array.from(new Set(names)).sort();
    const uniqNameKeys = uniqNames.map(name => findKey(cards, { name: name }));
    return (
      <div className="search-results">
        <ul>
          {uniqNameKeys.map(key => {
            return (
              <li key={key} id={key} onClick={this.handleResultClick}>
                {cards[key].name}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  handleResultClick(e) {
    this.props.cardDetails(e.target.id);
  }
}

export default SearchResults;
