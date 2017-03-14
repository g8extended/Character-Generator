import keyBy from 'lodash/keyBy';

export default keyBy([
  {
    id: 'Hairstyles',
    required: false,
    clickable: true,
    sortOrder: 10,
    styles: {
      '10': {
        left: 194,
        top: 57
      },
      '11': {
        left: 197,
        top: 65
      },
      '12': {
        left: 195,
        top: 71
      },
      '13': {
        left: 195,
        top: 71
      },
      '14': {
        left: 194,
        top: 76
      },
      '15': {
        left: 200,
        top: 56
      },
      '16': {
        left: 194,
        top: 54
      },
      '17': {
        left: 195,
        top: 65
      },
      '18': {
        left: 195,
        top: 57
      },
      '19': {
        left: 194,
        top: 46
      },
      '20': {
        left: 195,
        top: 56
      },
      '21': {
        left: 194,
        top: 56
      },
      '22': {
        left: 174,
        top: 46
      },
      '23': {
        left: 193,
        top: 39
      },
      '01': {
        left: 194,
        top: 36
      },
      '02': {
        left: 194,
        top: 48
      },
      '03': {
        left: 194,
        top: 28
      },
      '04': {
        left: 194,
        top: 42
      },
      '05': {
        left: 193,
        top: 38
      },
      '06': {
        left: 194,
        top: 48
      },
      '07': {
        left: 194,
        top: 47
      },
      '08': {
        left: 195,
        top: 42
      },
      '09': {
        left: 196,
        top: 39
      }
    }
  },
  {
    id: 'Beards',
    required: false,
    clickable: true,
    sortOrder: 43,
    styles: {
      '10': {
        left: 212,
        top: 273
      },
      '01': {
        left: 207,
        top: 309
      },
      '02': {
        left: 209,
        top: 312
      },
      '03': {
        left: 208,
        top: 311
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
      },
      '09': {
        left: 211,
        top: 270
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
        top: 165
      }
    }
  },
  {
    id: 'Coats',
    required: false,
    clickable: true,
    sortOrder: 42,
    conflicts: {
      replace: {
        assets: ['Jackets']
      }
    },
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
        left: 59,
        top: 400
      },
      '04': {
        left: 58,
        top: 397
      },
      '05': {
        left: 60,
        top: 403
      },
      '06': {
        left: 60,
        top: 399
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
        left: 226,
        top: 296
      },
      '01': {
        left: 226,
        top: 299
      },
      '02': {
        left: 225,
        top: 298
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
        left: 225,
        top: 295
      },
      '06': {
        left: 227,
        top: 296
      },
      '07': {
        left: 226,
        top: 296
      },
      '08': {
        left: 224,
        top: 296
      },
      '09': {
        left: 227,
        top: 297
      }
    },
    menuItem: 'Accessories'
  },
  {
    id: 'Scarves',
    required: false,
    clickable: true,
    sortOrder: 42,
    styles: {
      '01': {
        left: 155,
        top: 434
      },
      '02': {
        left: 153,
        top: 426
      },
      '03': {
        left: 154,
        top: 426
      },
      '04': {
        left: 155,
        top: 429
      },
      '05': {
        left: 155,
        top: 426
      }
    },
    menuItem: 'Accessories'
  },
  {
    id: 'Shirts',
    required: false,
    clickable: true,
    sortOrder: 10,
    conflicts: {
      replace: {
        assets: ['T-shirts', 'Sweatshirts']
      },
      warning: {
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
    styles: {
      '01': {
        left: 110,
        top: 465
      },
      '02': {
        left: 111,
        top: 465
      },
      '03': {
        left: 111,
        top: 465
      },
      '04': {
        left: 110,
        top: 465
      },
      '05': {
        left: 109,
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
    menuItem: 'Clothes'
  },
  {
    id: 'Sweatshirts',
    required: false,
    clickable: true,
    sortOrder: 30,
    conflicts: {
      replace: {
        assets: ['T-shirts', 'Shirts']
      }
    },
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
        left: 116,
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
    conflicts: {
      replace: {
        assets: ['Shirts', 'Sweatshirts']
      }
    },
    styles: {
      '01': {
        left: 110,
        top: 473
      },
      '02': {
        left: 113,
        top: 473
      },
      '03': {
        left: 110,
        top: 472
      },
      '04': {
        left: 110,
        top: 470
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
      '01': {
        left: 286,
        top: 288
      },
      '02': {
        left: 286,
        top: 285
      },
      '03': {
        left: 284,
        top: 294
      }
    }
  },
  {
    id: 'Jackets',
    required: false,
    clickable: true,
    sortOrder: 40,
    conflicts: {
      replace: {
        assets: ['Coats']
      }
    },
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
        left: 61,
        top: 411
      },
      '02': {
        left: 62,
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
    conflicts: {
      changeType: {
        assets: {
          'Hairstyles': '05'
        }
      }
    },
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
    sortOrder: 41,
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
