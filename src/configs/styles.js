// this should be a copy of assets.js config to use with hot reload
import keyBy from 'lodash/keyBy';

export default keyBy([
  {
    id: 'Hairstyles',
    required: false,
    clickable: true,
    sortOrder: 10,
    style: {
      left: 195,
      top: 45
    }
  },
  {
    id: 'Beards',
    required: false,
    clickable: true,
    sortOrder: 50,
    style: {
      left: 209,
      top: 310
    }
  },
  {
    id: 'Body',
    required: true,
    clickable: false,
    sortOrder: 0,
    style: {
      left: 0,
      top: 0
    }
  },
  {
    id: 'Coats',
    required: false,
    clickable: true,
    sortOrder: 40,
    style: {
      left: 60,
      top: 400
    },
    menuItem: 'Clothes'
  },
  {
    id: 'Glasses',
    required: false,
    clickable: true,
    sortOrder: 80,
    style: {
      left: 0,
      top: 0
    },
    menuItem: 'Accessories'
  },
  {
    id: 'Scarfes',
    required: false,
    clickable: true,
    sortOrder: 40,
    style: {
      left: 0,
      top: 0
    },
    menuItem: 'Accessories'
  },
  {
    id: 'Shirts',
    required: false,
    clickable: true,
    sortOrder: 10,
    style: {
      left: 110,
      top: 465
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
      left: 114,
      top: 445
    },
    menuItem: 'Clothes'
  },
  {
    id: 'T-shirts',
    required: false,
    clickable: true,
    sortOrder: 10,
    style: {
      left: 111,
      top: 473
    },
    menuItem: 'Clothes'
  },
  {
    id: 'Ties',
    required: false,
    clickable: true,
    sortOrder: 20,
    style: {
      left: 307,
      top: 539
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
      left: 286,
      top: 290
    }
  },
  {
    id: 'Jackets',
    required: false,
    clickable: true,
    sortOrder: 40,
    style: {
      left: 62,
      top: 406
    },
    menuItem: 'Clothes'
  },
  {
    id: 'Mouths',
    required: true,
    clickable: true,
    sortOrder: 20,
    style: {
      left: 311,
      top: 407
    }
  }
], 'id');
