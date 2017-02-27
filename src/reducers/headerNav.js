import {
  HEADER_NAV_MOUSE_ENTER,
  HEADER_NAV_MOUSE_LEAVE
} from '../constants/headerNav';
import keyBy from 'lodash/keyBy';

const initialState = {
  items: keyBy([
    {
      title: 'Hairstyles'
    },
    {
      title: 'Eyes',
      path: 'Hairstyles'
    },
    {
      title: 'Mouth',
      path: 'Hairstyles'
    },
    {
      title: 'Beards'
    },
    {
      title: 'Clothes',
      path: 'Shirts'
    },
    {
      title: 'Accessories',
      items: [
        {
          title: 'Glasses'
        },
        {
          title: 'Scarves',
          path: 'Scarfes'
        },
        {
          title: 'Tiers',
          path: 'Tie'
        }
      ]
    }
  ], 'title'),
  hovered: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case HEADER_NAV_MOUSE_ENTER:
    return {
      ...state,
      hovered: action.payload
    };
  case HEADER_NAV_MOUSE_LEAVE:
    return {
      ...state,
      hovered: null
    };
  default:
    return state;
  }
};

export default reducer;
