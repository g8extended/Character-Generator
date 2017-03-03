const { height, width } = { width: 739.6, height: 909.9 };

module.exports = [
  {
    id: 'Hairstyles',
    required: false,
    sortOrder: 1,
    width: 358 / width * 100 + '%',
    height: 342.5 / height * 100 + '%',
    left: 195 / width * 100 + '%',
    top: 45 / height * 100 + '%'
  },
  {
    id: 'Beards',
    required: false,
    sortOrder: 5,
    width: 323/ width * 100 + '%',
    height: 353 / height * 100 + '%',
    left: 209/ width * 100 + '%',
    top: 313 / height * 100 + '%'
  },
  {
    id: 'Body',
    required: true,
    sortOrder: 0
  },
  {
    id: 'Glasses',
    required: false,
    sortOrder: 2
  },
  {
    id: 'Scarfes',
    required: false,
    sortOrder: 4
  },
  {
    id: 'Shirts',
    required: false,
    sortOrder: 1,
    conflicts: {
      white: {
        indexes: [5 ,6],
        assets: ['Tie'],
        message: 'Sorry but you can\'t use ties with this shirt'
      }
    }
  },
  {
    id: 'Tie',
    required: false,
    sortOrder: 2
  },
  {
    id: 'Eyes',
    required: true,
    sortOrder: 1,
    subColors: true,
    width: 172 / width * 100 + '%',
    height: 77 / height * 100 + '%',
    left: 287 / width * 100 + '%',
    top: 275 / height * 100 + '%'
  },
  {
    id: 'Jackets',
    required: false,
    sortOrder: 3
  },
  {
    id: 'Mouths',
    required: true,
    sortOrder: 1
  }
];