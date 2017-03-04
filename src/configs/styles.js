// this should be a copy of assets.js config to use with hot reload
import keyBy from 'lodash/keyBy';

const convert = base => value => value / base * 100 + '%';
const width = value => convert(739.6)(value);
const height = value => convert(909.9)(value);

export default keyBy([
  {
    id: 'Hairstyles',
    required: false,
    clickable: true,
    sortOrder: 10,
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
    clickable: true,
    sortOrder: 50,
    style: {
      width: width(323),
      height: height(353),
      left: width(209),
      top: height(310)
    }
  },
  {
    id: 'Body',
    required: true,
    clickable: false,
    sortOrder: 0,
    style: {
      width: width(739.6),
      height: height(909.9),
      left: width(0),
      top: height(0)
    }
  },
  {
    id: 'Coats',
    required: false,
    clickable: true,
    sortOrder: 40,
    style: {
      width: width(630),
      height: height(410),
      left: width(60),
      top: height(400)
    },
    menuItem: 'Clothes'
  },
  {
    id: 'Glasses',
    required: false,
    clickable: true,
    sortOrder: 80,
    menuItem: 'Accessories'
  },
  {
    id: 'Scarfes',
    required: false,
    clickable: true,
    sortOrder: 40,
    menuItem: 'Accessories'
  },
  {
    id: 'Shirts',
    required: false,
    clickable: true,
    sortOrder: 10,
    style: {
      width: width(530),
      height: height(300),
      left: width(110),
      top: height(465)
    },
    menuItem: 'Clothes',
    conflicts: {
      indexes: [0 ,1, 2],
      assets: ['Ties'],
      message: 'Sorry but you can\'t use ties with this shirt'
    }
  },
  {
    id: 'Sweatshirts',
    required: false,
    clickable: true,
    sortOrder: 30,
    style: {
      width: width(520),
      height: height(330),
      left: width(114),
      top: height(445)
    },
    menuItem: 'Clothes'
  },
  {
    id: 'T-shirts',
    required: false,
    clickable: true,
    sortOrder: 10,
    style: {
      width: width(530),
      height: height(300),
      left: width(111),
      top: height(473)
    },
    menuItem: 'Clothes'
  },
  {
    id: 'Ties',
    required: false,
    clickable: true,
    sortOrder: 20,
    style: {
      width: width(130),
      height: height(240),
      left: width(307),
      top: height(539)
    },
    menuItem: 'Accessories'
  },
  {
    id: 'Eyes',
    required: true,
    clickable: true,
    sortOrder: 70,
    subColors: true,
    style: {
      width: width(172),
      height: height(77),
      left: width(286),
      top: height(290)
    }
  },
  {
    id: 'Jackets',
    required: false,
    clickable: true,
    sortOrder: 40,
    style: {
      width: width(620),
      height: height(400),
      left: width(62),
      top: height(406)
    },
    menuItem: 'Clothes'
  },
  {
    id: 'Mouths',
    required: true,
    clickable: true,
    sortOrder: 20,
    style: {
      width: width(130),
      height: height(59),
      left: width(311),
      top: height(407)
    }
  }
], 'id');
