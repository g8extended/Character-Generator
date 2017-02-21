import {
  HEADER_NAV_CLICK
} from '../constants/headerNav';
import keyBy from 'lodash/keyBy';

const initialState = {
  items: keyBy([
    {
      id: 0,
      title: 'Hairstyles',
      assetID: 'Hairstyles'
    },
    {
      id: 1,
      title: 'Eyes',
      assetID: 'Eyes'
    },
    {
      id: 2,
      title: 'Mouth'
    },
    {
      id: 3,
      title: 'Beards',
      assetID: 'Beards'
    },
    {
      id: 4,
      title: 'Clothes'
    },
    {
      id: 5,
      title: 'Accessories'
    }
  ], 'id'),
  selected: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case HEADER_NAV_CLICK:
    return { ...state, selected: action.payload };
  default:
    return state;
  }
};

export default reducer;
