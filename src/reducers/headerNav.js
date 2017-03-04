import {
  HEADER_NAV_MOUSE_ENTER,
  HEADER_NAV_MOUSE_LEAVE
} from '../constants/headerNav';
import menuItems from '../configs/menu';

const initialState = {
  items: menuItems,
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
