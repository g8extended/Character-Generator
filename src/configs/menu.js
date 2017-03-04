import keyBy from 'lodash/keyBy';

export default keyBy([
  {
    title: 'Hairstyles'
  },
  {
    title: 'Eyes',
    path: 'Eyes'
  },
  {
    title: 'Mouth',
    path: 'Mouths'
  },
  {
    title: 'Beards'
  },
  {
    title: 'Clothes',
    items: [
      {
        title: 'Shirts'
      },
      {
        title: 'Sweatshirts'
      },
      {
        title: 'T-shirts'
      },
      {
        title: 'Jackets'
      },
      {
        title: 'Coats'
      }
    ]
  },
  {
    title: 'Accessories',
    items: [
      {
        title: 'Glasses'
      },
      {
        title: 'Scarves',
        path: 'Scarfes'
      },
      {
        title: 'Ties'
      }
    ]
  }
], 'title');
