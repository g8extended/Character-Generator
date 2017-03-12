
import {
  UPDATE_COLORPICKER_CONT_CLASSNAME
} from '../constants/profile';

const initialState = {
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
   case UPDATE_COLORPICKER_CONT_CLASSNAME:
    return {
      ...state, animationClassName: action.payload
    };
  default:
    return state;
  }
};

export default reducer;
