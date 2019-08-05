import { createSelector } from 'reselect';
import { create } from 'domain';

const selectCard = state => state.card;

export const selectCardHidden = createSelector(
  [selectCard],
  card => card.hidden
);

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

export const selectCardTotal = createSelector(
  [selectCardItems],
  cardItems =>
    cardItems.reduce(
      (accQuantity, cardItem) =>
        accQuantity + cardItem.quantity * cardItem.price,
      0
    )
);
