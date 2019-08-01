import { createSelector } from 'reselect';

const selectCard = state => state.card;

export const selectCardItems = createSelector(
  [selectCard],
  card => card.cardItems
);

export const selectCardItemsCount = createSelector(
  [selectCardItems],
  cardItems =>
    cardItems.reduce(
      (accQuantity, cardItem) => accQuantity + cardItem.quantity,
      0
    )
);
