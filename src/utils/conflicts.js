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
