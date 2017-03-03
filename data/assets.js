const convert = base => value => value / base * 100 + '%';
const width = value => convert(739.6)(value);
const height = value => convert(909.9)(value);

module.exports = [
  {
    id: 'Hairstyles',
    required: false,
    sortOrder: 1,
    style: {
      width: width(358),
      height: height(342),
      left: width(195),
      top: height(45)
    }
  },
  {
    id: 'Beards',
    required: false,
    sortOrder: 5,
    style: {
      width: width(323),
      height: height(353),
      left: width(209),
      top: height(313)
    }
  },
  {
    id: 'Body',
    required: true,
    sortOrder: 0
  },
  {
    id: 'Glasses',
    required: false,
    sortOrder: 2,
    menuItem: 'Accessories'
  },
  {
    id: 'Scarfes',
    required: false,
    sortOrder: 4,
    menuItem: 'Accessories'
  },
  {
    id: 'Shirts',
    required: false,
    sortOrder: 1,
    menuItem: 'Clothes',
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
    sortOrder: 2,
    menuItem: 'Accessories'
  },
  {
    id: 'Eyes',
    required: true,
    sortOrder: 1,
    subColors: true,
    style: {
      width: width(172),
      height: height(77),
      left: width(287),
      top: height(275)
    }
  },
  {
    id: 'Jackets',
    required: false,
    sortOrder: 3,
    menuItem: 'Clothes'
  },
  {
    id: 'Mouths',
    required: true,
    sortOrder: 1
  }
];