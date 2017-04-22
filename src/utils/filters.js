import filter from 'lodash/filter';

export const filterColors = (profile, asset, colors) => {
  return filter(colors, color => {
    if (asset !== 'Mouths') return true;
    if (asset !== 'Eyes') return true;
    return color.id.indexOf(profile.Body.color) !== -1;
  });
};
