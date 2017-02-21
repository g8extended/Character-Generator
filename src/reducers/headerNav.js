import {
  HEADER_NAV_CLICK
} from '../constants/headerNav';

const initialState = {
	items: [{
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
		title: 'Hairstyles'
	},
	{
		title: 'Accessories', 
		items: [{
			title: 'Glasses'
		},
		{
			title: 'Scarves'
		},
		{
			title: 'Tiers'
		}]
	}],
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
