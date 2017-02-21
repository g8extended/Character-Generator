import {
  HEADER_NAV_CLICK
} from '../constants/headerNav';

const initialState = {
	items: ['Hairstyles', 'Eyes', 'Mouth', 'Beards', 'Clothes', 'Accessories'],
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
