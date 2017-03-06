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
        top: 45
      },
      '02': {
        left: 195,
        top: 45
      },
      '03': {
        left: 195,
        top: 45
      },
      '04': {
        left: 195,
        top: 45
      },
      '05': {
        left: 195,
        top: 45
      },
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
        top: 310
      },
      '02': {
        left: 209,
        top: 310
      },
      '03': {
        left: 209,
        top: 310
      },
      '04': {
        left: 209,
        top: 310
      },
      '05': {
        left: 209,
        top: 310
      },
      '06': {
        left: 209,
        top: 310
      },
      '07': {
        left: 209,
        top: 310
      },
      '08': {
        left: 209,
        top: 310
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
        left: 0,
        top: 0
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
        top: 400
      },
      '02': {
        left: 60,
        top: 400
      },
      '03': {
        left: 60,
        top: 400
      },
      '04': {
        left: 60,
        top: 400
      },
      '05': {
        left: 60,
        top: 400
      },
      '06': {
        left: 60,
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
      '01': {
        left: 228,
        top: 295
      },
      '02': {
        left: 228,
        top: 295
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
        left: 228,
        top: 295
      },
      '06': {
        left: 228,
        top: 295
      },
      '07': {
        left: 228,
        top: 295
      },
      '08': {
        left: 228,
        top: 295
      },
      '09': {
        left: 228,
        top: 295
      },
      '10': {
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
        left: 110,
        top: 465
      },
      '02': {
        left: 110,
        top: 465
      },
      '03': {
        left: 110,
        top: 465
      },
      '04': {
        left: 110,
        top: 465
      },
      '05': {
        left: 110,
        top: 465
      },
      '06': {
        left: 110,
        top: 465
      },
      '07': {
        left: 110,
        top: 465
      }
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
    styles: {
      '01': {
        left: 114,
        top: 445
      },
      '02': {
        left: 114,
        top: 445
      },
      '03': {
        left: 114,
        top: 445
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
        left: 111,
        top: 473
      },
      '03': {
        left: 111,
        top: 473
      },
      '04': {
        left: 111,
        top: 473
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
        left: 307,
        top: 539
      },
      '02': {
        left: 307,
        top: 539
      },
      '03': {
        left: 307,
        top: 539
      },
      '04': {
        left: 307,
        top: 539
      },
      '05': {
        left: 307,
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
      'blue': {
        left: 286,
        top: 290
      },
      'brown': {
        left: 286,
        top: 290
      },
      'green': {
        left: 286,
        top: 290
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
        top: 406
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
        left: 62,
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
        top: 407
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
        left: 63,
        top: 411
      },
      '02': {
        left: 63,
        top: 411
      },
      '03': {
        left: 63,
        top: 411
      },
      '04': {
        left: 63,
        top: 411
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
        left: 113,
        top: -78
      },
      '03': {
        left: 113,
        top: -78
      },
      '04': {
        left: 113,
        top: -78
      },
      '05': {
        left: 113,
        top: -78
      },
      '06': {
        left: 113,
        top: -78
      },
      '07': {
        left: 113,
        top: -78
      },
      '08': {
        left: 113,
        top: -78
      },
      '09': {
        left: 113,
        top: -78
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
        left: 63,
        top: 411
      }
    },
    menuItem: 'Clothes'
  }
], 'id');
