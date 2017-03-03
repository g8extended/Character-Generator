import some from 'lodash/some';
import map from 'lodash/map';

const getMessage = ({ conflicts, id }, current, profile) => {
  if ( ! conflicts) return;
  if ( ! conflicts.assets.includes(current.asset)) return;
  if ( ! conflicts.indexes.includes(profile[id].fileIndex)) return;
  return conflicts.message;
};

export const isConflicts = ({ items, current }, profile) => {
  return some(items, asset => getMessage(asset, current, profile));
};

export const getConflictMessages = ({ items, current }, profile) => {
  return map(items, asset => getMessage(asset, current, profile)).filter(message => message);
};
