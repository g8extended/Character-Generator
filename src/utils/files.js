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

const getIndexByOffset = (length, index, offset) => {
  return (length + index + offset % length) % length;
};

const getFiles = (items, { asset, type, color }) => {
  const typeFiles = map(items[asset].types, typeItem => {
    const availableColor = typeItem.colors[color] ? color : Object.keys(typeItem.colors)[0];
    return {
      ...typeItem.colors[availableColor].files[0],
      type: typeItem.id,
      color: availableColor,
      src: `/svg/${asset}/${typeItem.id}/${availableColor}/${typeItem.colors[availableColor].files[0].id}`,
      url: `/assets/${asset}/${typeItem.id}/${availableColor}`,
      computedStyle: getComputedStyle(asset, typeItem.colors[availableColor].files[0].style)
    };
  });
  return typeFiles;
};

export const getFile = (items, { asset, type, color }, offset = 0) => {
  const files = getFiles(items, { asset, type, color });
  const length = files.length;
  const currentIndex = files.indexOf(files.find(file => file.type === type && file.color === color));
  return files[getIndexByOffset(length, currentIndex, offset)];
};
