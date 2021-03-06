const colors = {
  global: {
    black_pink: ['#36516e', '#f93b58', 0],
    pink_black: ['#f93b58', '#36516e', 1],
    white_blue: ['#45c0e9', '#efefef', 0],
    blue_white: ['#efefef', '#45c0e9', 1],
    beige_black: ['#eadaca', '#433947', 1],
    black_white: ['#433947', '#efefef', 0]
  },
  assets: {
    'Jackets': {
      black: ['#433947', '#0f0814', 1],
      brown_white: ['#efefef', '#bc5b34', 1],
      green_white: ['#efefef', '#7fb539', 1],
      pink_black: ['#f93b58', '#36516e', 1],
      white: ['#efefef', '#7a7b7b', 1],
      yellow_black: ['#FFC20E', '#433947', 1]
    },
    'Coats': {
      beige: ['#eadaca', '#896E5B', 1],
      black: ['#433947', '#0f0814', 1],
      brown: ['#A06944', '#562f10', 1],
      burgundy: ['#7B3F4E', '#000000', 1],
      gray: ['#7f7f7f', '#636363', 1],
      white: ['#efefef', '#7a7b7b', 1]
    },
    'Hairstyles': {
      blond: ['#F9BE72', '#9B581C', 1],
      brown: ['#C47546', '#814927', 1],
      white: ['#bbbbbc', '#7a7b7b', 1],
    },
    'Beards': {
      blond: ['#F9BE72', '#9B581C', 1],
      brown: ['#C47546', '#814927', 1],
    },
    'Suits': {
      black: ['#433947', '#0f0814', 1],
      blue: ['#36447F', '#1A1D31', 1],
      brown: ['#995239', '#14A292A', 1],
      burgundy: ['#7B3F4E', '#381A1E', 1],
      white: ['#efefef', '#7a7b7b', 1],
    },
    'Scarves': {
      beige: ['#EADACA', '#381A1E', 1],
      black: ['#433947', '#0f0814', 1],
      burgundy: ['#7B3F4E', '#381A1E', 1],
      gray: ['#A3A3A3', '#494949', 1],
      orange: ['#F58C5A', '#6D3924', 1],
      white: ['#efefef', '#7a7b7b', 1],
    },
    'Ties': {
      black: ['#433947', '#0f0814', 1],
      blue: ['#36447F', '#1A1D31', 1],
      brown: ['#995239', '#14A292A', 1],
      burgundy: ['#7B3F4E', '#381A1E', 1],
      gold: ['#C49E53', '#775318', 1],
      red: ['#E54C4E', '#87071F', 1],
      white: ['#efefef', '#7a7b7b', 1],
    },
    'Eyes': {
      'blue-white': ['#509CC7', '#006891', 1],
      'brown-white': ['#3a291d', '#814927', 1],
      'green-white': ['#648b5c', '#4C5F2B', 1],
      'blue-black': ['#509CC7', '#006891', 1],
      'brown-black': ['#3a291d', '#814927', 1],
      'green-black': ['#648b5c', '#4C5F2B', 1],
    },
    'Eyebrows': {
      blond: ['#F9BE72', '#9B581C', 1],
      brown: ['#C47546', '#814927', 1],
      white: ['#bbbbbc', '#7a7b7b', 1],
    },
  }
};

const replaceIndexWithColor = colors => {
  if ( ! colors) return;
  return [
    ...colors.slice(0, 2),
    typeof colors[2] === 'string' ? colors[2] : colors[colors[2]]
  ];
};

const getGlobalColors = color => replaceIndexWithColor(colors.global[color]);

export const getAssetColors = (asset, color) => {
  const assetColors = colors.assets[asset];
  if ( ! assetColors) return getGlobalColors(color);
  return replaceIndexWithColor(assetColors[color]) || getGlobalColors(color);
};
