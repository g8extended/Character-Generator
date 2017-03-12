import map from 'lodash/map';

const convert = base => value => value / base * 100 + '%';
const width = value => convert(739.6)(value);
const height = value => convert(909.9)(value);

const getComputedStyle = (asset, style) => {
  return {
    width: width(style.width),
    height: height(style.height),
    left: width(style.left),
    top: height(style.top)
  };
};

export const getIndexByOffset = (length, index, offset) => {
  return (length + index + offset % length) % length;
};

export const getFiles = (items, { asset, type, color }) => {
  const typeFiles = map(items[asset].types, typeItem => {
    const availableColor = typeItem.colors[color] ? color : Object.keys(typeItem.colors)[0];
    return {
      ...typeItem.colors[availableColor].files[0],
      type: typeItem.id,
      color: availableColor,
      src: `/svg/${asset}/${typeItem.id}/${availableColor}/${typeItem.colors[availableColor].files[0].id}`,
      url: `/assets/${asset}/${typeItem.id}/${availableColor}`,
      fileType: 'type',
      computedStyle: getComputedStyle(asset, typeItem.colors[availableColor].files[0].style)
    };
  });
  return typeFiles;
};

export const getFile = (assetItem, profile, assets) => {
  if ( ! profile[assetItem.id]) return;
  const files = getFiles(assets.items, profile[assetItem.id]);

  const index = profile[assetItem.id].index;
  return files[index];
};
