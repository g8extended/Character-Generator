import {
  HEADER_NAV_MOUSE_ENTER,
  HEADER_NAV_MOUSE_LEAVE,
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
  selected: 'Hairstyles',
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
  case SET_HEADER_NAV:
    return {
      ...state,
      selected: action.payload
    };
  default:
    return state;
  }
};

export default reducer;
