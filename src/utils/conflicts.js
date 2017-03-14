import some from 'lodash/some';
import map from 'lodash/map';

const getMessage = ({ conflicts, id }, current, profile) => {
  if ( ! conflicts) return;
  if ( ! conflicts.warning) return;
  const { warning: { types, assets, message } } = conflicts;
  if ( ! assets.includes(current.asset) || ! profile[id].visible) return;
  if ( ! types.includes(profile[id].type)) return;
  return message;
};

export const isConflicts = ({ items, current }, profile) => {
  return some(items, assetItem => getMessage(assetItem, current, profile));
};

export const getConflictMessages = ({ items, current }, profile) => {
  return map(items, assetItem => getMessage(assetItem, current, profile)).filter(message => message);
};

export const getConflictsReplaceAssets = conflicts => {
  if ( ! conflicts) return [];
  const { replace } = conflicts;
  if ( ! replace) return [];
  return replace.assets || [];
};

export const getConflictsChangeTypeAssets = conflicts => {
  if ( ! conflicts) return {};
  const { changeType } = conflicts;
  if ( ! changeType) return {};
  return changeType.assets || {};
};
