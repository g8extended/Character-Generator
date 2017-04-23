import filter from 'lodash/filter';

export const filterColors = (profile, asset, colors) => {
  return filter(colors, color => {
    if ( ! ['Mouths', 'Eyes'].includes(asset)) return true;
    return color.id.indexOf(profile.Body.color) !== -1;
  });
};
