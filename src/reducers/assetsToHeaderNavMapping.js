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
    headerNavID: 'Glasses'
  },
  {
    assetID: 'Scarfes',
    headerNavID: 'Scarves'
  },
  {
    assetID: 'Tie',
    headerNavID: 'Tiers'
  }
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};

export default reducer;
