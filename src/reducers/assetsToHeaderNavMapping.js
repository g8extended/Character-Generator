const initialState = [
  {
    assetID: 'Beards',
    headerNavID: 'Beards'
  },
  {
    assetID: 'Hairstyles',
    headerNavID: 'Hairstyles'
  },
  {
    assetID: 'Shirts',
    headerNavID: 'Clothes'
  },
  {
    assetID: 'Glasses',
    headerNavID: 'Accessories'
  },
  {
    assetID: 'Scarfes',
    headerNavID: 'Accessories'
  },
  {
    assetID: 'Tie',
    headerNavID: 'Accessories'
  }
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default reducer;
