module.exports = [
  {
    id: 'Hairstyles',
    required: false,
    sortOrder: 1
  },
  {
    id: 'Beards',
    required: false,
    sortOrder: 5
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
    subColors: true
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