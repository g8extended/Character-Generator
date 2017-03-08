import keyBy from 'lodash/keyBy';

export default keyBy([
  {
    id: 'Hairstyles',
    required: false,
    clickable: true,
    sortOrder: 10,
    styles: {
      '01': {
        left: 195,
        top: 36
      },
      '02': {
        left: 195,
        top: 35
      },
      '03': {
        left: 195,
        top: 30
      },
      '04': {
        left: 195,
        top: 36
      },
      '05': {
        left: 195,
        top: 39
      }
    }
  },
  {
    id: 'Beards',
    required: false,
    clickable: true,
    sortOrder: 50,
    styles: {
      '01': {
        left: 209,
        top: 313
      },
      '02': {
        left: 209,
        top: 315
      },
      '03': {
        left: 209,
        top: 312
      },
      '04': {
        left: 209,
        top: 313
      },
      '05': {
        left: 209,
        top: 310
      },
      '06': {
        left: 209,
        top: 312
      },
      '07': {
        left: 209,
        top: 313
      },
      '08': {
        left: 209,
        top: 312
      }
    }
  },
  {
    id: 'Body',
    required: true,
    clickable: false,
    sortOrder: 0,
    styles: {
      '01': {
        left: 148,
        top: 155
      }
    }
  },
  {
    id: 'Coats',
    required: false,
    clickable: true,
    sortOrder: 40,
    styles: {
      '01': {
        left: 60,
        top: 411
      },
      '02': {
        left: 60,
        top: 400
      },
      '03': {
        left: 61,
        top: 400
      },
      '04': {
        left: 61,
        top: 400
      },
      '05': {
        left: 60,
        top: 403
      },
      '06': {
        left: 61,
        top: 400
      }
    },
    menuItem: 'Clothes'
  },
  {
    id: 'Glasses',
    required: false,
    clickable: true,
    sortOrder: 80,
    styles: {
      '10': {
        left: 228,
        top: 296
      },
      '01': {
        left: 228,
        top: 296
      },
      '02': {
        left: 227,
        top: 296
      },
      '03': {
        left: 228,
        top: 295
      },
      '04': {
        left: 228,
        top: 295
      },
      '05': {
        left: 227,
        top: 293
      },
      '06': {
        left: 228,
        top: 293
      },
      '07': {
        left: 228,
        top: 295
      },
      '08': {
        left: 227,
        top: 293
      },
      '09': {
        left: 228,
        top: 295
      }
    },
    menuItem: 'Accessories'
  },
  {
    id: 'Scarves',
    required: false,
    clickable: true,
    sortOrder: 40,
    styles: {
      '01': {
        left: 155,
        top: 436
      },
      '02': {
        left: 155,
        top: 436
      },
      '03': {
        left: 155,
        top: 436
      },
      '04': {
        left: 155,
        top: 436
      },
      '05': {
        left: 155,
        top: 436
      }
    },
    menuItem: 'Accessories'
  },
  {
    id: 'Shirts',
    required: false,
    clickable: true,
    sortOrder: 10,
    styles: {
      '01': {
        left: 111,
        top: 465
      },
      '02': {
        left: 112,
        top: 465
      },
      '03': {
        left: 112,
        top: 465
      },
      '04': {
        left: 112,
        top: 465
      },
      '05': {
        left: 111,
        top: 465
      },
      '06': {
        left: 111,
        top: 465
      },
      '07': {
        left: 110,
        top: 465
      }
    },
    menuItem: 'Clothes',
    conflicts: {
      types: [
        '01',
        '02',
        '03'
      ],
      assets: [
        'Ties'
      ],
      message: 'Sorry but you can\'t use ties with this shirt'
    }
  },
  {
    id: 'Sweatshirts',
    required: false,
    clickable: true,
    sortOrder: 30,
    styles: {
      '01': {
        left: 114,
        top: 453
      },
      '02': {
        left: 115,
        top: 451
      },
      '03': {
        left: 117,
        top: 447
      }
    },
    menuItem: 'Clothes'
  },
  {
    id: 'T-shirts',
    required: false,
    clickable: true,
    sortOrder: 10,
    styles: {
      '01': {
        left: 111,
        top: 473
      },
      '02': {
        left: 113,
        top: 473
      },
      '03': {
        left: 111,
        top: 473
      },
      '04': {
        left: 111,
        top: 471
      }
    },
    menuItem: 'Clothes'
  },
  {
    id: 'Ties',
    required: false,
    clickable: true,
    sortOrder: 20,
    styles: {
      '01': {
        left: 308,
        top: 536
      },
      '02': {
        left: 309,
        top: 539
      },
      '03': {
        left: 310,
        top: 536
      },
      '04': {
        left: 310,
        top: 539
      },
      '05': {
        left: 310,
        top: 539
      }
    },
    menuItem: 'Accessories'
  },
  {
    id: 'Eyes',
    required: true,
    clickable: true,
    sortOrder: 70,
    styles: {
      blue: {
        left: 286,
        top: 284
      },
      brown: {
        left: 286,
        top: 284
      },
      green: {
        left: 286,
        top: 284
      }
    }
  },
  {
    id: 'Jackets',
    required: false,
    clickable: true,
    sortOrder: 40,
    styles: {
      '01': {
        left: 62,
        top: 406
      },
      '02': {
        left: 62,
        top: 411
      },
      '03': {
        left: 62,
        top: 406
      },
      '04': {
        left: 62,
        top: 406
      },
      '05': {
        left: 64,
        top: 406
      },
      '06': {
        left: 62,
        top: 406
      }
    },
    menuItem: 'Clothes'
  },
  {
    id: 'Mouths',
    required: true,
    clickable: true,
    sortOrder: 20,
    styles: {
      '01': {
        left: 311,
        top: 405
      },
      '02': {
        left: 311,
        top: 407
      },
      '03': {
        left: 311,
        top: 407
      }
    }
  },
  {
    id: 'Vests',
    required: false,
    clickable: true,
    sortOrder: 40,
    styles: {
      '01': {
        left: 62,
        top: 411
      },
      '02': {
        left: 63,
        top: 408
      },
      '03': {
        left: 63,
        top: 404
      },
      '04': {
        left: 63,
        top: 404
      }
    },
    menuItem: 'Clothes'
  },
  {
    id: 'Hats',
    required: false,
    clickable: true,
    sortOrder: 80,
    styles: {
      '01': {
        left: 113,
        top: -78
      },
      '02': {
        left: 116,
        top: -78
      },
      '03': {
        left: 121,
        top: -78
      },
      '04': {
        left: 116,
        top: -67
      },
      '05': {
        left: 119,
        top: -78
      },
      '06': {
        left: 119,
        top: -78
      },
      '07': {
        left: 121,
        top: -78
      },
      '08': {
        left: 122,
        top: -78
      },
      '09': {
        left: 116,
        top: -68
      }
    },
    menuItem: 'Clothes'
  },
  {
    id: 'Suits',
    required: false,
    clickable: true,
    sortOrder: 40,
    styles: {
      '01': {
        left: 63,
        top: 411
      },
      '02': {
        left: 64,
        top: 406
      }
    },
    menuItem: 'Clothes'
  }
], 'id');
