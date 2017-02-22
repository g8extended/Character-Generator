import {
  SET_HEADER_NAV
} from '../constants/headerNav';
import keyBy from 'lodash/keyBy';

const initialState = {
  items: keyBy([
    {
      title: 'Hairstyles'
    },
    {
      title: 'Eyes'
    },
    {
      title: 'Mouth'
    },
    {
      title: 'Beards'
    },
    {
      title: 'Clothes'
    },
    {
      title: 'Accessories',
      items: [
        {
          title: 'Glasses'
        },
        {
          title: 'Scarves'
        },
        {
          title: 'Tiers'
        }
      ]
    }
  ], 'title'),
  selected: 'Hairstyles'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case SET_HEADER_NAV:
    return { ...state, selected: action.payload };
  default:
    return state;
  }
};

export default reducer;
