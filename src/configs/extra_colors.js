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
      brown_white: ['#EFEFEF', '#BC5B34', 1],
      green_white: ['#EFEFEF', '#7fb539', 1],
      black: ['#433947', '#0f0814', 1],
    },
    'Hairstyles': {
      blond: ['#F9BE72', '#9B581C', 1],
      brown: ['#C47546', '#814927', 1],
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
      blue_blond: ['#509CC7', '#D88A3D', '#006891'],
      blue_brown: ['#509cc7', '#814927', 1],
      blue_brunet: ['#509cc7', '#4f5559', '#1a1e21'],
      blue_white: ['#509cc7', '#BBBBBC', '#006891'],
      brown_blond: ['#3a291d', '#d88a3d', 1],
      brown_brown: ['#3a291d', '#814927', 1],
      brown_brunet: ['#3a291d', '#4f5559', 1],
      brown_white: ['#BBBBBC', '#3a291d', 1],
      green_blond: ['#648b5c', '#d88a3d', '#4C5F2B'],
      green_brown: ['#648b5c', '#d88a3d', '#3a291d'],
      green_brunet: ['#648b5c', '#4f5559', '#1a1e21'],
      green_white: ['#648b5c', '#bbbbbc', '#4C5F2B'],
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
