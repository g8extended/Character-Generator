import some from 'lodash/some';
import map from 'lodash/map';

const getMessage = ({ conflicts, id }, current, profile) => {
  if ( ! conflicts) return;
  if ( ! conflicts.assets.includes(current.asset) || ! profile[id].visible) return;
  if ( ! conflicts.types.includes(profile[id].type)) return;
  return conflicts.message;
};

export const isConflicts = ({ items, current }, profile) => {
  return some(items, assetItem => getMessage(assetItem, current, profile));
};

export const getConflictMessages = ({ items, current }, profile) => {
  return map(items, assetItem => getMessage(assetItem, current, profile)).filter(message => message);
};
