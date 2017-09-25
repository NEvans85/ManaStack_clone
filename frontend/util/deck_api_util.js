export const fetchDecks = (index_type, user_id) => {
  return $.ajax({
    method: "GET",
    url: "api/decks",
    data: { index_type, user_id }
  });
};

export const fetchDeck = deck_id =>
  $.ajax({
    method: "GET",
    url: `api/decks/${deck_id}`
  });

export const postDeck = creator_id =>
  $.ajax({
    method: "POST",
    url: "api/decks",
    data: { creator_id }
  });

export const updateDeck = (deck_data, update_type, api_id) =>
  $.ajax({
    method: "PATCH",
    url: `api/decks/${deck_data[id]}`,
    data: { update_type, api_id, deck_data }
  });

export const deleteDeck = id =>
  $.ajax({
    method: "DELETE",
    url: `api/decks/${id}`
  });